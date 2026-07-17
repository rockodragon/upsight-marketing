import { describe, expect, it } from "vitest";
import { clipCaptionsToRange } from "../src/captions/timing/clipCaptions";
import { remapTokensToTimeline } from "../src/captions/timing/remapTimeline";
import { validateCaptionTiming } from "../src/captions/timing/validateTiming";
import type { TimedCaptionToken } from "../src/captions/types";

function token(id: string, startMs: number, endMs: number): TimedCaptionToken {
  return { id, originalText: id, displayText: id, startMs, endMs, sourceTokenIds: [id] };
}

describe("clipCaptionsToRange", () => {
  it("drops tokens entirely outside the range", () => {
    const tokens = [token("a", 0, 100), token("b", 5000, 5100)];
    const result = clipCaptionsToRange(tokens, 1000, 2000);
    expect(result).toHaveLength(0);
  });

  it("rebases kept tokens so the clip start becomes 0", () => {
    const tokens = [token("a", 1000, 1200), token("b", 1500, 1800)];
    const result = clipCaptionsToRange(tokens, 1000, 2000);
    expect(result).toEqual([
      { ...tokens[0], startMs: 0, endMs: 200 },
      { ...tokens[1], startMs: 500, endMs: 800 },
    ]);
  });

  it("clips a token that crosses a clip boundary", () => {
    const tokens = [token("a", 900, 1100), token("b", 1900, 2100)];
    const result = clipCaptionsToRange(tokens, 1000, 2000);
    expect(result).toEqual([
      { ...tokens[0], startMs: 0, endMs: 100 },
      { ...tokens[1], startMs: 900, endMs: 1000 },
    ]);
  });

  it("never produces a negative timestamp", () => {
    const tokens = [token("a", 0, 5000)];
    const result = clipCaptionsToRange(tokens, 1000, 2000);
    expect(result[0].startMs).toBeGreaterThanOrEqual(0);
  });

  it("throws for an inverted range", () => {
    expect(() => clipCaptionsToRange([token("a", 0, 100)], 2000, 1000)).toThrow();
  });
});

describe("remapTokensToTimeline", () => {
  it("drops tokens outside every segment and rebases the rest", () => {
    const tokens = [token("a", 0, 500), token("b", 5000, 5500), token("c", 10000, 10500)];
    const segments = [
      { sourceStartMs: 0, sourceEndMs: 1000, outputStartMs: 0 },
      { sourceStartMs: 9000, sourceEndMs: 11000, outputStartMs: 1000 },
    ];

    const { items, dropped } = remapTokensToTimeline(tokens, segments);

    expect(dropped).toHaveLength(1);
    expect(dropped[0].item.id).toBe("b");
    expect(items.map((t) => t.id)).toEqual(["a", "c"]);
    expect(items[0]).toMatchObject({ startMs: 0, endMs: 500 });
    // c: sourceStart 10000 within [9000,11000] mapped to output 1000 -> 1000 + (10000-9000) = 2000
    expect(items[1]).toMatchObject({ startMs: 2000, endMs: 2500 });
  });

  it("clips a token that crosses a segment boundary", () => {
    const tokens = [token("a", 900, 1100)];
    const segments = [{ sourceStartMs: 0, sourceEndMs: 1000, outputStartMs: 0 }];

    const { items } = remapTokensToTimeline(tokens, segments);

    expect(items).toHaveLength(1);
    expect(items[0]).toMatchObject({ startMs: 900, endMs: 1000 });
  });

  it("never lets output timestamps decrease across the result", () => {
    const tokens = [token("a", 0, 100), token("b", 100, 200)];
    // Two overlapping segments would otherwise place "b" before "a" ends.
    const segments = [
      { sourceStartMs: 0, sourceEndMs: 200, outputStartMs: 500 },
      { sourceStartMs: 50, sourceEndMs: 150, outputStartMs: 0 },
    ];

    const { items } = remapTokensToTimeline(tokens, segments);

    for (let i = 1; i < items.length; i++) {
      expect(items[i].startMs).toBeGreaterThanOrEqual(items[i - 1].startMs);
    }
  });

  it("prevents negative output timestamps", () => {
    const tokens = [token("a", 100, 200)];
    const segments = [{ sourceStartMs: 100, sourceEndMs: 200, outputStartMs: -50 }];
    const { items, dropped } = remapTokensToTimeline(tokens, segments);
    expect(items.every((t) => t.startMs >= 0 && t.endMs >= 0)).toBe(true);
    expect(dropped.length + items.length).toBe(1);
  });
});

describe("validateCaptionTiming", () => {
  it("passes for well-formed chronological tokens", () => {
    const tokens = [token("a", 0, 100), token("b", 100, 200)];
    expect(validateCaptionTiming(tokens).valid).toBe(true);
  });

  it("flags endMs <= startMs", () => {
    const result = validateCaptionTiming([token("a", 100, 100)]);
    expect(result.valid).toBe(false);
    expect(result.errors[0]).toMatch(/endMs/);
  });

  it("flags negative startMs", () => {
    const result = validateCaptionTiming([token("a", -10, 100)]);
    expect(result.valid).toBe(false);
  });

  it("flags overlapping/out-of-order tokens", () => {
    const result = validateCaptionTiming([token("a", 0, 200), token("b", 100, 300)]);
    expect(result.valid).toBe(false);
    expect(result.errors.some((e) => e.includes("before the previous item ends"))).toBe(true);
  });
});
