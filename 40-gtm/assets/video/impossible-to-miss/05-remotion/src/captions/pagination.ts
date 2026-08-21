import { createTikTokStyleCaptions, type Caption, type TikTokPage, type TikTokToken } from "@remotion/captions";
import type { CaptionLayoutConfig, TimedCaptionToken } from "./types";

export const DEFAULT_LAYOUT: CaptionLayoutConfig = {
  combineTokensWithinMilliseconds: 800,
  maxWordsPerPage: 6,
  maxLines: 2,
  maxWidthPercent: 82,
  position: "lower",
};

const PUNCTUATION_ONLY = /^[.,!?;:'"()\-–—]+$/;

/**
 * displayText-based rendering view of a canonical token. Re-adds the
 * leading space createTikTokStyleCaptions() requires (see
 * transcription/normalize.ts#wordTimingsToCaptions for why).
 */
export function tokensToCaptions(tokens: TimedCaptionToken[]): Caption[] {
  return tokens.map((token) => ({
    text: ` ${token.displayText}`,
    startMs: token.startMs,
    endMs: token.endMs,
    timestampMs: null,
    confidence: token.confidence ?? null,
  }));
}

function rebuildPage(tokens: TikTokToken[]): TikTokPage {
  const first = tokens[0];
  const last = tokens[tokens.length - 1];
  return {
    // TikTokToken.text may or may not carry a leading space depending on
    // its original position in the page (see createTikTokStyleCaptions) —
    // trim before rejoining so re-split pages don't pick up double spaces.
    text: tokens.map((t) => t.text.trim()).join(" "),
    startMs: first.fromMs,
    tokens,
    durationMs: last.toMs - first.fromMs,
  };
}

/**
 * Enforces maxWordsPerPage on top of createTikTokStyleCaptions()'s
 * pause-based grouping: splits an over-long page into word-count-bounded
 * chunks, and folds isolated punctuation / lone short trailing words into
 * the preceding chunk rather than letting them stand alone.
 */
function splitPage(page: TikTokPage, maxWordsPerPage: number): TikTokPage[] {
  if (page.tokens.length <= maxWordsPerPage) {
    return [page];
  }

  const chunks: TikTokToken[][] = [];
  let current: TikTokToken[] = [];

  for (const token of page.tokens) {
    if (current.length >= maxWordsPerPage) {
      chunks.push(current);
      current = [];
    }

    const startsNewChunkWithPunctuation =
      current.length === 0 && chunks.length > 0 && PUNCTUATION_ONLY.test(token.text.trim());

    if (startsNewChunkWithPunctuation) {
      chunks[chunks.length - 1].push(token);
      continue;
    }

    current.push(token);
  }

  if (current.length > 0) {
    chunks.push(current);
  }

  if (chunks.length > 1) {
    const lastChunk = chunks[chunks.length - 1];
    const lastChunkText = lastChunk[0].text.trim();
    const isLoneTrailingWord =
      lastChunk.length === 1 && (PUNCTUATION_ONLY.test(lastChunkText) || lastChunkText.length <= 2);

    if (isLoneTrailingWord) {
      const [orphan] = chunks.pop()!;
      chunks[chunks.length - 1].push(orphan);
    }
  }

  return chunks.map(rebuildPage);
}

/**
 * Groups display-ready captions into TikTok-style pages, then enforces the
 * house layout rules (word count, no isolated trailing punctuation/short
 * words) on top of Remotion's pause-based grouping.
 */
export function paginateCaptions(
  captions: Caption[],
  layoutOverrides?: Partial<CaptionLayoutConfig>,
): TikTokPage[] {
  const layout = { ...DEFAULT_LAYOUT, ...layoutOverrides };

  if (captions.length === 0) {
    return [];
  }

  const { pages } = createTikTokStyleCaptions({
    captions,
    combineTokensWithinMilliseconds: layout.combineTokensWithinMilliseconds,
  });

  return pages.flatMap((page) => splitPage(page, layout.maxWordsPerPage));
}
