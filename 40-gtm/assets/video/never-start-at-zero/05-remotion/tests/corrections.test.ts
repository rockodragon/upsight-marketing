import { describe, expect, it } from "vitest";
import { applyCorrections, findVocabularyCorrections } from "../src/captions/transcription/corrections";
import { captionsToTokens } from "../src/captions/transcription/normalize";
import type { Caption, VocabularyFile } from "../src/captions/types";

const vocabulary: VocabularyFile = {
  replacements: [
    { variants: ["up sight", "upsite", "up site"], display: "UpSight" },
    { variants: ["rem ocean", "remotion dev"], display: "Remotion" },
  ],
};

function captions(...words: Array<[string, number, number]>): Caption[] {
  return words.map(([text, startMs, endMs]) => ({
    text,
    startMs,
    endMs,
    timestampMs: null,
    confidence: null,
  }));
}

describe("findVocabularyCorrections", () => {
  it("finds a two-word variant", () => {
    const tokens = captionsToTokens(captions(["up", 0, 200], ["site", 220, 500], ["is", 520, 650]));
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    expect(corrections).toHaveLength(1);
    expect(corrections[0]).toEqual({ sourceTokenIds: ["tok_0", "tok_1"], displayText: "UpSight" });
  });

  it("is case-insensitive and punctuation-tolerant", () => {
    const tokens = captionsToTokens(captions(["Up,", 0, 200], ["Site!", 220, 500]));
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    expect(corrections).toHaveLength(1);
    expect(corrections[0].displayText).toBe("UpSight");
  });

  it("does not match partial overlaps twice", () => {
    const tokens = captionsToTokens(captions(["up", 0, 200], ["site", 220, 500]));
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    expect(corrections).toHaveLength(1);
  });

  it("finds no corrections when nothing matches", () => {
    const tokens = captionsToTokens(captions(["hello", 0, 200], ["world", 220, 500]));
    expect(findVocabularyCorrections(tokens, vocabulary)).toHaveLength(0);
  });
});

describe("applyCorrections", () => {
  it("merges a multi-word correction without rewriting timestamps", () => {
    const tokens = captionsToTokens(
      captions(["up", 0, 200], ["site", 220, 500], ["is", 520, 650], ["great", 670, 900]),
    );
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    const result = applyCorrections(tokens, corrections);

    expect(result).toHaveLength(3);
    expect(result[0]).toMatchObject({
      displayText: "UpSight",
      originalText: "up site",
      startMs: 0,
      endMs: 500,
      sourceTokenIds: ["tok_0", "tok_1"],
    });
    expect(result[1].displayText).toBe("is");
    expect(result[2].displayText).toBe("great");
  });

  it("preserves token order and passes through unmatched tokens untouched", () => {
    const tokens = captionsToTokens(captions(["hello", 0, 200], ["world", 220, 500]));
    const result = applyCorrections(tokens, []);
    expect(result).toEqual(tokens);
  });

  it("handles a fixture-style sentence with two separate corrections", () => {
    const tokens = captionsToTokens(
      captions(
        ["up", 0, 200],
        ["site", 220, 500],
        ["is", 520, 650],
        ["great", 670, 900],
        ["try", 1000, 1200],
        ["rem", 1220, 1400],
        ["ocean", 1420, 1650],
      ),
    );
    const corrections = findVocabularyCorrections(tokens, vocabulary);
    const result = applyCorrections(tokens, corrections);

    expect(result.map((t) => t.displayText)).toEqual(["UpSight", "is", "great", "try", "Remotion"]);
    // Total timing span is preserved end to end.
    expect(result[0].startMs).toBe(0);
    expect(result[result.length - 1].endMs).toBe(1650);
  });
});
