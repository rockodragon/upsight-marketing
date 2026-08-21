#!/usr/bin/env tsx
import fs from "node:fs";
import path from "node:path";
import { parseArgs } from "node:util";
import { extractAudioIfNeeded, getMediaInfo, removeIfTemp } from "../src/captions/media";
import { paginateCaptions, tokensToCaptions } from "../src/captions/pagination";
import { writeCaptionJsonFile } from "../src/captions/export/writeCaptionJson";
import { writeSrtFile } from "../src/captions/export/writeSrt";
import { CaptionDocumentSchema, VocabularyFileSchema } from "../src/captions/schemas";
import { validateCaptionTiming } from "../src/captions/timing/validateTiming";
import { applyCorrections, findVocabularyCorrections } from "../src/captions/transcription/corrections";
import { captionsToTokens } from "../src/captions/transcription/normalize";
import { OpenAiTranscriptionProvider } from "../src/captions/transcription/openai";
import { CAPTION_PRESET_NAMES, type CaptionPresetName } from "../src/captions/types";

function printUsageAndExit(): never {
  console.error(
    [
      "Usage:",
      "  caption-video --input <media> --output <captions.json> [options]",
      "",
      "Options:",
      "  --input <path>       Source video/audio file (required)",
      "  --output <path>      Where to write the caption JSON (required)",
      "  --preset <name>      clean | emphasis | productDemo (default: clean, layout-only — informational)",
      "  --language <code>    ISO-639-1 hint for transcription, e.g. en",
      "  --vocabulary <path>  Override data/vocabulary.json",
      "  --no-srt             Skip writing a sibling .srt file",
    ].join("\n"),
  );
  process.exit(1);
}

async function main() {
  const { values } = parseArgs({
    options: {
      input: { type: "string" },
      output: { type: "string" },
      preset: { type: "string", default: "clean" },
      language: { type: "string" },
      vocabulary: { type: "string" },
      "no-srt": { type: "boolean", default: false },
    },
  });

  if (!values.input || !values.output) {
    printUsageAndExit();
  }

  const preset = values.preset as string;
  if (!CAPTION_PRESET_NAMES.includes(preset as CaptionPresetName)) {
    console.error(`Unknown preset "${preset}". Choose one of: ${CAPTION_PRESET_NAMES.join(", ")}`);
    process.exit(1);
  }

  const inputPath = path.resolve(values.input);
  const outputPath = path.resolve(values.output);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  console.log(`Inspecting ${inputPath}...`);
  const mediaInfo = await getMediaInfo(inputPath);

  console.log("Preparing audio for transcription...");
  const { path: audioPath, isTemp } = await extractAudioIfNeeded(inputPath);

  try {
    console.log("Transcribing (this can take a while for longer videos)...");
    const provider = new OpenAiTranscriptionProvider();
    const { captions, detectedLanguage } = await provider.transcribe({
      mediaPath: audioPath,
      language: values.language,
    });

    let tokens = captionsToTokens(captions);

    const vocabularyPath = values.vocabulary
      ? path.resolve(values.vocabulary)
      : path.join(__dirname, "..", "data", "vocabulary.json");

    if (fs.existsSync(vocabularyPath)) {
      const vocabulary = VocabularyFileSchema.parse(
        JSON.parse(fs.readFileSync(vocabularyPath, "utf-8")),
      );
      const corrections = findVocabularyCorrections(tokens, vocabulary);
      if (corrections.length > 0) {
        tokens = applyCorrections(tokens, corrections);
        console.log(`Applied ${corrections.length} vocabulary correction(s).`);
      }
    }

    const timingResult = validateCaptionTiming(tokens);
    if (!timingResult.valid) {
      console.error("Caption timing validation failed:");
      timingResult.errors.forEach((err) => console.error(`  - ${err}`));
      process.exit(1);
    }

    const document = CaptionDocumentSchema.parse({
      version: 1 as const,
      sourceMediaPath: path.relative(process.cwd(), inputPath),
      language: detectedLanguage,
      videoDurationMs: mediaInfo.durationMs,
      tokens,
    });

    writeCaptionJsonFile(outputPath, document);

    let srtPath: string | null = null;
    if (!values["no-srt"]) {
      srtPath = outputPath.replace(/\.json$/, "") + ".srt";
      writeSrtFile(srtPath, tokensToCaptions(tokens));
    }

    const displayCaptions = tokensToCaptions(tokens);
    const pageCount = paginateCaptions(displayCaptions).length;
    const lowConfidenceCount = tokens.filter(
      (token) => token.confidence !== undefined && token.confidence < 0.5,
    ).length;

    console.log("\nDone.");
    console.log(`  Video duration:     ${(mediaInfo.durationMs / 1000).toFixed(1)}s`);
    console.log(`  Dimensions:         ${mediaInfo.width ?? "?"}x${mediaInfo.height ?? "?"}`);
    console.log(`  Caption count:      ${pageCount}`);
    console.log(`  Word count:         ${tokens.length}`);
    console.log(`  Detected language:  ${detectedLanguage ?? "unknown"}`);
    console.log(`  Low-confidence:     ${lowConfidenceCount}`);
    console.log(`  JSON output:        ${outputPath}`);
    if (srtPath) {
      console.log(`  SRT output:         ${srtPath}`);
    }
  } finally {
    removeIfTemp(audioPath, isTemp);
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
