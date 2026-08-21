import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { paginateCaptions, tokensToCaptions } from "../src/captions/pagination";
import { CaptionSchema, VocabularyFileSchema } from "../src/captions/schemas";
import { clipCaptionsToRange } from "../src/captions/timing/clipCaptions";
import { validateCaptionTiming } from "../src/captions/timing/validateTiming";
import { applyCorrections, findVocabularyCorrections } from "../src/captions/transcription/corrections";
import { captionsToTokens } from "../src/captions/transcription/normalize";
import type { Caption } from "../src/captions/types";

const fixturePath = path.join(__dirname, "fixtures", "sample-transcript.json");
const vocabularyPath = path.join(__dirname, "..", "data", "vocabulary.json");

describe("fixture transcript, end to end (pure functions only)", () => {
  const rawCaptions = JSON.parse(fs.readFileSync(fixturePath, "utf-8")) as Caption[];
  const vocabulary = VocabularyFileSchema.parse(
    JSON.parse(fs.readFileSync(vocabularyPath, "utf-8")),
  );

  it("the fixture itself is a valid Caption[]", () => {
    for (const caption of rawCaptions) {
      expect(CaptionSchema.safeParse(caption).success).toBe(true);
    }
  });

  it("corrects known mistranscriptions without touching timing", () => {
    const tokens = captionsToTokens(rawCaptions);
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    const corrected = applyCorrections(tokens, corrections);

    const displayText = corrected.map((t) => t.displayText).join(" ");
    expect(displayText).toContain("UpSight");
    expect(displayText).toContain("Remotion");
    expect(displayText).not.toContain("up site");
    expect(displayText).not.toContain("rem ocean");

    // Corrected span still starts/ends at the original source tokens' bounds.
    const upSightToken = corrected.find((t) => t.displayText === "UpSight")!;
    expect(upSightToken.startMs).toBe(rawCaptions[0].startMs);
    expect(upSightToken.endMs).toBe(rawCaptions[1].endMs);

    const timing = validateCaptionTiming(corrected);
    expect(timing.valid).toBe(true);
  });

  it("paginates the corrected transcript into readable pages", () => {
    const tokens = captionsToTokens(rawCaptions);
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    const corrected = applyCorrections(tokens, corrections);
    const pages = paginateCaptions(tokensToCaptions(corrected));

    expect(pages.length).toBeGreaterThan(0);
    for (const page of pages) {
      expect(page.tokens.length).toBeLessThanOrEqual(7);
    }
  });

  it("clips the transcript to a sub-range and rebases timestamps", () => {
    const tokens = captionsToTokens(rawCaptions);
    const clipped = clipCaptionsToRange(tokens, 3000, 4100);

    expect(clipped.every((t) => t.startMs >= 0)).toBe(true);
    expect(clipped.map((t) => t.displayText)).toEqual(["so", "try", "rem", "ocean", "today"]);
    expect(clipped[0].startMs).toBe(0);
  });
});
