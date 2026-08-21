import { serializeSrt } from "@remotion/captions";
import fs from "node:fs";
import path from "node:path";
import { paginateCaptions } from "../pagination";
import type { Caption, CaptionLayoutConfig } from "../types";

/**
 * Builds SRT blocks from the same paginated caption pages the video
 * renderer displays, so the exported .srt matches what's on screen rather
 * than one cue per word.
 */
export function captionsToSrt(captions: Caption[], layout?: Partial<CaptionLayoutConfig>): string {
  const pages = paginateCaptions(captions, layout);

  const lines: Caption[][] = pages.map((page) => [
    {
      text: page.text,
      startMs: page.startMs,
      endMs: page.startMs + page.durationMs,
      timestampMs: null,
      confidence: null,
    },
  ]);

  return serializeSrt({ lines });
}

export function writeSrtFile(
  outputPath: string,
  captions: Caption[],
  layout?: Partial<CaptionLayoutConfig>,
): void {
  const srt = captionsToSrt(captions, layout);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, srt, "utf-8");
}
