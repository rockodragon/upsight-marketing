import { z } from "zod";

export const CaptionSchema = z.object({
  text: z.string(),
  startMs: z.number(),
  endMs: z.number(),
  timestampMs: z.number().nullable(),
  confidence: z.number().nullable(),
});

export const TimedCaptionTokenSchema = z
  .object({
    id: z.string().min(1),
    originalText: z.string(),
    displayText: z.string(),
    startMs: z.number().min(0),
    endMs: z.number(),
    confidence: z.number().min(0).max(1).optional(),
    sourceTokenIds: z.array(z.string()).min(1),
  })
  .refine((token) => token.endMs > token.startMs, {
    message: "endMs must be greater than startMs",
    path: ["endMs"],
  });

export const CaptionCorrectionSchema = z.object({
  sourceTokenIds: z.array(z.string()).min(1),
  displayText: z.string(),
});

export const VocabularyEntrySchema = z.object({
  variants: z.array(z.string().min(1)).min(1),
  display: z.string().min(1),
});

export const VocabularyFileSchema = z.object({
  replacements: z.array(VocabularyEntrySchema),
});

export const CaptionLayoutConfigSchema = z.object({
  combineTokensWithinMilliseconds: z.number().positive(),
  maxWordsPerPage: z.number().int().positive(),
  maxLines: z.number().int().positive(),
  maxWidthPercent: z.number().positive().max(100),
  position: z.enum(["lower", "center", "upper"]),
});

export const TimelineSegmentSchema = z
  .object({
    sourceStartMs: z.number().min(0),
    sourceEndMs: z.number(),
    outputStartMs: z.number().min(0),
  })
  .refine((segment) => segment.sourceEndMs > segment.sourceStartMs, {
    message: "sourceEndMs must be greater than sourceStartMs",
    path: ["sourceEndMs"],
  });

export const CaptionDocumentSchema = z.object({
  version: z.literal(1),
  sourceMediaPath: z.string(),
  language: z.string().optional(),
  videoDurationMs: z.number().positive().optional(),
  tokens: z.array(TimedCaptionTokenSchema),
});
