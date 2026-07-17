import type { Caption } from "@remotion/captions";

export type { Caption };

/**
 * Canonical persisted caption token. `originalText` is what transcription produced;
 * `displayText` is what renders (after vocabulary/product-name correction). Timestamps
 * are never touched by correction — only `displayText` changes.
 */
export type TimedCaptionToken = {
  id: string;
  originalText: string;
  displayText: string;
  startMs: number;
  endMs: number;
  confidence?: number;
  /** IDs of every source token this one was merged from (multi-word corrections). Defaults to [id]. */
  sourceTokenIds: string[];
};

/** A correction found by the vocabulary matcher, not yet applied. */
export type CaptionCorrection = {
  sourceTokenIds: string[];
  displayText: string;
};

export type VocabularyEntry = {
  variants: string[];
  display: string;
};

export type VocabularyFile = {
  replacements: VocabularyEntry[];
};

export type CaptionLayoutConfig = {
  /** Passed straight to createTikTokStyleCaptions(). Default ~800ms. */
  combineTokensWithinMilliseconds: number;
  maxWordsPerPage: number;
  maxLines: number;
  maxWidthPercent: number;
  position: "lower" | "center" | "upper";
};

export type TimelineSegment = {
  sourceStartMs: number;
  sourceEndMs: number;
  outputStartMs: number;
};

export const CAPTION_PRESET_NAMES = ["clean", "emphasis", "productDemo", "highlight"] as const;
export type CaptionPresetName = (typeof CAPTION_PRESET_NAMES)[number];

export type CaptionPresetTokens = {
  name: CaptionPresetName;
  fontFamily: string;
  fontWeight: number;
  baseFontSizePx: number;
  textColor: string;
  activeWordColor: string;
  /** Background box behind the whole caption page (productDemo-style). */
  backgroundColor: string | null;
  textShadow: string | null;
  letterSpacing: string;
  /** Active-word scale spring peak, 1 = no scale. */
  activeWordScale: number;
  uppercase: boolean;
  borderRadiusPx: number;
  paddingPx: number;
  /**
   * Per-word highlight chip — a background box behind each individual word,
   * independent of `backgroundColor` (the whole-page box). Omit/null for no
   * chip (clean/emphasis/productDemo). `activeWord*` swaps in while that
   * word is being spoken; falls back to the base word color/background if
   * unset (word stays highlighted throughout, no additional pop on speak).
   */
  wordBackgroundColor?: string | null;
  activeWordBackgroundColor?: string | null;
  wordBackgroundRadiusPx?: number;
  wordBackgroundPaddingXPx?: number;
  wordBackgroundPaddingYPx?: number;
};

export type CaptionRendererProps = {
  captions: Caption[];
  preset: CaptionPresetName;
  clipStartMs?: number;
  timeline?: TimelineSegment[];
  layout?: Partial<CaptionLayoutConfig>;
};

/** Canonical on-disk representation written by the CLI and read by CaptionComposition. */
export type CaptionDocument = {
  version: 1;
  sourceMediaPath: string;
  language?: string;
  videoDurationMs?: number;
  tokens: TimedCaptionToken[];
};
