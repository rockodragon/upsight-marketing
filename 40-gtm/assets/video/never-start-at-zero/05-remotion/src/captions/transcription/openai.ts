import fs from "node:fs";
import path from "node:path";
import { wordTimingsToCaptions } from "./normalize";
import {
  SUPPORTED_AUDIO_EXTENSIONS,
  TranscriptionError,
  type TranscriptionInput,
  type TranscriptionOutput,
  type TranscriptionProvider,
} from "./provider";

type OpenAiTranscriptionProviderOptions = {
  /** Defaults to process.env.OPENAI_API_KEY. Never hard-code a key here. */
  apiKey?: string;
  model?: string;
};

type OpenAiVerboseJsonWord = {
  word: string;
  start: number;
  end: number;
};

type OpenAiVerboseJsonResponse = {
  language?: string;
  words?: OpenAiVerboseJsonWord[];
};

const OPENAI_TRANSCRIPTIONS_URL = "https://api.openai.com/v1/audio/transcriptions";

/**
 * First transcription backend. Calls OpenAI's transcription endpoint
 * directly over fetch (no `openai` SDK — its zod peer dependency conflicts
 * with the zod version Remotion itself requires) with word-level timestamp
 * granularity. Runs server-side only (CLI / render-prep scripts) — never
 * import this into a Remotion composition, or the API key path leaks into
 * the render bundle.
 */
export class OpenAiTranscriptionProvider implements TranscriptionProvider {
  private readonly apiKey: string | undefined;
  private readonly model: string;

  constructor(options: OpenAiTranscriptionProviderOptions = {}) {
    this.apiKey = options.apiKey ?? process.env.OPENAI_API_KEY;
    this.model = options.model ?? "whisper-1";
  }

  async transcribe(input: TranscriptionInput): Promise<TranscriptionOutput> {
    if (!this.apiKey) {
      throw new TranscriptionError(
        "MISSING_API_KEY",
        "OPENAI_API_KEY is not set. Export it in your shell before running caption-video.",
      );
    }

    if (!fs.existsSync(input.mediaPath)) {
      throw new TranscriptionError("UNSUPPORTED_FILE", `File not found: ${input.mediaPath}`);
    }

    const ext = path.extname(input.mediaPath).toLowerCase();
    if (!SUPPORTED_AUDIO_EXTENSIONS.includes(ext as (typeof SUPPORTED_AUDIO_EXTENSIONS)[number])) {
      throw new TranscriptionError(
        "UNSUPPORTED_FILE",
        `Unsupported media extension "${ext}". Supported: ${SUPPORTED_AUDIO_EXTENSIONS.join(", ")}`,
      );
    }

    const form = new FormData();
    form.append("file", new Blob([fs.readFileSync(input.mediaPath)]), path.basename(input.mediaPath));
    form.append("model", this.model);
    form.append("response_format", "verbose_json");
    form.append("timestamp_granularities[]", "word");
    if (input.language) {
      form.append("language", input.language);
    }

    let response: Response;
    try {
      response = await fetch(OPENAI_TRANSCRIPTIONS_URL, {
        method: "POST",
        headers: { Authorization: `Bearer ${this.apiKey}` },
        body: form,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new TranscriptionError("TRANSCRIPTION_FAILED", `Network error calling OpenAI: ${message}`);
    }

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new TranscriptionError(
        "TRANSCRIPTION_FAILED",
        `OpenAI transcription failed (${response.status} ${response.statusText}): ${body}`,
      );
    }

    const json = (await response.json()) as OpenAiVerboseJsonResponse;

    if (!json.words || json.words.length === 0) {
      throw new TranscriptionError(
        "MISSING_WORD_TIMESTAMPS",
        "OpenAI response did not include word-level timestamps. " +
          `Model "${this.model}" may not support timestamp_granularities: ["word"].`,
      );
    }

    const captions = wordTimingsToCaptions(json.words);

    return {
      captions,
      detectedLanguage: json.language,
    };
  }
}
