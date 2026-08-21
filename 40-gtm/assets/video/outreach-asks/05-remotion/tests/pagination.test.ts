import { describe, expect, it } from "vitest";
import { paginateCaptions } from "../src/captions/pagination";
import type { Caption } from "../src/captions/types";

// createTikTokStyleCaptions() reads page-break signal off a leading space
// (see pagination.ts#tokensToCaptions) — mirror that real-world shape here.
function wordsFrom(words: string[], stepMs = 200): Caption[] {
  return words.map((text, i) => ({
    text: ` ${text}`,
    startMs: i * stepMs,
    endMs: i * stepMs + stepMs - 20,
    timestampMs: null,
    confidence: null,
  }));
}

describe("paginateCaptions", () => {
  it("returns no pages for empty input", () => {
    expect(paginateCaptions([])).toEqual([]);
  });

  it("groups closely-spaced words into a single page", () => {
    const captions = wordsFrom(["hello", "there", "friend"]);
    const pages = paginateCaptions(captions, { maxWordsPerPage: 10 });
    expect(pages).toHaveLength(1);
    expect(pages[0].tokens).toHaveLength(3);
    expect(pages[0].text).toBe("hello there friend");
  });

  it("splits a page wider than maxWordsPerPage into multiple pages", () => {
    const captions = wordsFrom(["one", "two", "three", "four", "five", "six", "seven", "eight"]);
    const pages = paginateCaptions(captions, { maxWordsPerPage: 3 });

    for (const page of pages) {
      expect(page.tokens.length).toBeLessThanOrEqual(3);
    }
    // All words preserved, order preserved.
    expect(pages.flatMap((p) => p.tokens.map((t) => t.text.trim()))).toEqual([
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
    ]);
  });

  it("never leaves an isolated punctuation-only page", () => {
    const captions = wordsFrom(["one", "two", "three", "."]);
    const pages = paginateCaptions(captions, { maxWordsPerPage: 3 });

    for (const page of pages) {
      const isIsolatedPunctuation =
        page.tokens.length === 1 && /^[.,!?;:]+$/.test(page.tokens[0].text.trim());
      expect(isIsolatedPunctuation).toBe(false);
    }
  });

  it("folds a lone short trailing word into the previous chunk instead of stranding it", () => {
    const captions = wordsFrom(["alpha", "bravo", "charlie", "ok"]);
    const pages = paginateCaptions(captions, { maxWordsPerPage: 3 });

    const lastPage = pages[pages.length - 1];
    expect(lastPage.tokens.length).toBeGreaterThan(1);
  });

  it("respects combineTokensWithinMilliseconds by starting a new page once the accumulated page span exceeds it", () => {
    // createTikTokStyleCaptions() breaks once the *current page's* elapsed
    // span (not the gap between words) exceeds the threshold — see
    // @remotion/captions' create-tiktok-style-captions.js.
    const captions: Caption[] = [
      { text: " hello", startMs: 0, endMs: 1000, timestampMs: null, confidence: null },
      { text: " world", startMs: 1050, endMs: 1200, timestampMs: null, confidence: null },
    ];
    const pages = paginateCaptions(captions, { combineTokensWithinMilliseconds: 800 });
    expect(pages).toHaveLength(2);
  });
});
