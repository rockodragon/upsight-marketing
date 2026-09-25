import { colors, fonts } from "../../lib/brand";
import type { CaptionLayoutConfig, CaptionPresetTokens } from "../types";

/**
 * Short-form social (Reels/TikTok/Shorts). Color highlight + scale pop on
 * the active word, faster page turnover than clean/productDemo.
 */
export const emphasisPreset: CaptionPresetTokens = {
  name: "emphasis",
  fontFamily: fonts.sans,
  fontWeight: 800,
  baseFontSizePx: 64,
  textColor: colors.textLight,
  activeWordColor: colors.amber,
  backgroundColor: null,
  textShadow: "0 3px 16px rgba(0, 0, 0, 0.65)",
  letterSpacing: "-0.01em",
  activeWordScale: 1.16,
  uppercase: false,
  borderRadiusPx: 0,
  paddingPx: 0,
};

export const emphasisLayoutDefaults: Partial<CaptionLayoutConfig> = {
  combineTokensWithinMilliseconds: 500,
  maxWordsPerPage: 4,
};
