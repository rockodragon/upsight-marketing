import type { Caption, TimedCaptionToken } from "../types";
import { TranscriptionError } from "./provider";

/** Provider-agnostic word timing, seconds (OpenAI's verbose_json word shape). */
export type RawWordTiming = {
  word: string;
  start: number;
  end: number;
  confidence?: number;
};

/**
 * Converts provider word timings (seconds) into Remotion's Caption[] format
 * (milliseconds). Remotion's createTikTokStyleCaptions() keys its
 * page-break logic off `text.startsWith(' ')`, so every word gets a single
 * leading space, matching how Whisper-style word lists are conventionally
 * shaped — see https://remotion.dev/docs/captions/caption-type.
 */
export function wordTimingsToCaptions(words: RawWordTiming[]): Caption[] {
  if (words.length === 0) {
    throw new TranscriptionError("EMPTY_TRANSCRIPT", "Transcription returned no words.");
  }

  return words
    .map((word) => ({
      text: ` ${word.word.trim()}`,
      startMs: Math.round(word.start * 1000),
      endMs: Math.round(word.end * 1000),
      timestampMs: null,
      confidence: word.confidence ?? null,
    }))
    .filter((caption) => caption.text.trim().length > 0);
}

/**
 * Converts Caption[] into the canonical TimedCaptionToken[] the rest of the
 * pipeline (corrections, timing, export) operates on. Assigns stable,
 * position-based IDs — corrections and timeline remapping key off these.
 * `displayText`/`originalText` are always trimmed — the leading space
 * Remotion's Caption format wants is re-added at the pagination boundary
 * (see pagination.ts#tokensToCaptions).
 */
export function captionsToTokens(captions: Caption[]): TimedCaptionToken[] {
  return captions.map((caption, index) => {
    const id = `tok_${index}`;
    const text = caption.text.trim();
    return {
      id,
      originalText: text,
      displayText: text,
      startMs: caption.startMs,
      endMs: caption.endMs,
      confidence: caption.confidence ?? undefined,
      sourceTokenIds: [id],
    };
  });
}

