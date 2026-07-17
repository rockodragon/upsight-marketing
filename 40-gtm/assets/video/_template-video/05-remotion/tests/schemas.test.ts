import { describe, expect, it } from "vitest";
import {
  CaptionDocumentSchema,
  CaptionLayoutConfigSchema,
  TimedCaptionTokenSchema,
  TimelineSegmentSchema,
  VocabularyFileSchema,
} from "../src/captions/schemas";

describe("TimedCaptionTokenSchema", () => {
  it("accepts a well-formed token", () => {
    const result = TimedCaptionTokenSchema.safeParse({
      id: "tok_0",
      originalText: "hello",
      displayText: "hello",
      startMs: 0,
      endMs: 200,
      sourceTokenIds: ["tok_0"],
    });
    expect(result.success).toBe(true);
  });

  it("rejects endMs <= startMs", () => {
    const result = TimedCaptionTokenSchema.safeParse({
      id: "tok_0",
      originalText: "hello",
      displayText: "hello",
      startMs: 200,
      endMs: 200,
      sourceTokenIds: ["tok_0"],
    });
    expect(result.success).toBe(false);
  });

  it("rejects a negative startMs", () => {
    const result = TimedCaptionTokenSchema.safeParse({
      id: "tok_0",
      originalText: "hello",
      displayText: "hello",
      startMs: -5,
      endMs: 200,
      sourceTokenIds: ["tok_0"],
    });
    expect(result.success).toBe(false);
  });
});

describe("CaptionDocumentSchema", () => {
  it("accepts a minimal valid document", () => {
    const result = CaptionDocumentSchema.safeParse({
      version: 1,
      sourceMediaPath: "media/source.mp4",
      tokens: [],
    });
    expect(result.success).toBe(true);
  });

  it("rejects an unknown version", () => {
    const result = CaptionDocumentSchema.safeParse({
      version: 2,
      sourceMediaPath: "media/source.mp4",
      tokens: [],
    });
    expect(result.success).toBe(false);
  });
});

describe("TimelineSegmentSchema", () => {
  it("rejects sourceEndMs <= sourceStartMs", () => {
    const result = TimelineSegmentSchema.safeParse({
      sourceStartMs: 1000,
      sourceEndMs: 1000,
      outputStartMs: 0,
    });
    expect(result.success).toBe(false);
  });
});

describe("CaptionLayoutConfigSchema", () => {
  it("rejects an invalid position", () => {
    const result = CaptionLayoutConfigSchema.safeParse({
      combineTokensWithinMilliseconds: 800,
      maxWordsPerPage: 6,
      maxLines: 2,
      maxWidthPercent: 80,
      position: "middle",
    });
    expect(result.success).toBe(false);
  });
});

describe("VocabularyFileSchema", () => {
  it("accepts the shipped data/vocabulary.json shape", () => {
    const result = VocabularyFileSchema.safeParse({
      replacements: [{ variants: ["up site", "upsite"], display: "UpSight" }],
    });
    expect(result.success).toBe(true);
  });

  it("rejects an entry with no variants", () => {
    const result = VocabularyFileSchema.safeParse({
      replacements: [{ variants: [], display: "UpSight" }],
    });
    expect(result.success).toBe(false);
  });
});
