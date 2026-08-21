import type { Caption } from "../types";

export type TranscriptionErrorCode =
  | "MISSING_API_KEY"
  | "UNSUPPORTED_FILE"
  | "TRANSCRIPTION_FAILED"
  | "EMPTY_TRANSCRIPT"
  | "MISSING_WORD_TIMESTAMPS";

export class TranscriptionError extends Error {
  code: TranscriptionErrorCode;

  constructor(code: TranscriptionErrorCode, message: string) {
    super(message);
    this.name = "TranscriptionError";
    this.code = code;
  }
}

export type TranscriptionInput = {
  mediaPath: string;
  language?: string;
};

export type TranscriptionOutput = {
  captions: Caption[];
  detectedLanguage?: string;
};

/**
 * Keep every real transcription backend (OpenAI, AssemblyAI, Deepgram, local
 * Whisper, ...) behind this interface so the rest of the pipeline never
 * depends on a specific vendor's response shape.
 */
export interface TranscriptionProvider {
  transcribe(input: TranscriptionInput): Promise<TranscriptionOutput>;
}

export const SUPPORTED_AUDIO_EXTENSIONS = [
  ".mp3",
  ".mp4",
  ".mpeg",
  ".mpga",
  ".m4a",
  ".wav",
  ".webm",
] as const;
