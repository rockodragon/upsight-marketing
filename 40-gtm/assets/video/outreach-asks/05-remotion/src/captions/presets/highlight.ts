import { colors, fonts } from "../../lib/brand";
import type { CaptionLayoutConfig, CaptionPresetTokens } from "../types";

// ---- Variables — tweak these to restyle the highlight preset ----
// Every word sits in its own rounded box (a "marker highlighter" chip) so
// captions stay readable over busy video, not just over dark backgrounds.
const TEXT_COLOR = colors.textLight; // color of words that aren't being spoken right now
const WORD_BACKGROUND_COLOR = "rgba(17, 17, 22, 0.88)"; // chip behind each non-active word — kept dark but clearly lighter than pure black so it reads as a box over any footage
const ACTIVE_WORD_TEXT_COLOR = colors.bgDark; // text color of the word being spoken
const ACTIVE_WORD_BACKGROUND_COLOR = colors.amber; // chip behind the word being spoken
const CHIP_RADIUS_PX = 8;
const CHIP_PADDING_X_PX = 12;
const CHIP_PADDING_Y_PX = 5;
// -------------------------------------------------------------------

/**
 * Every word gets its own background chip, readable over any footage.
 * The chip on the active word swaps color as it's spoken (karaoke-style).
 * All colors/spacing above are plain variables — change them directly, or
 * copy this file to make a second highlight variant (e.g. `highlightDark`).
 */
export const highlightPreset: CaptionPresetTokens = {
  name: "highlight",
  fontFamily: fonts.sans,
  fontWeight: 700,
  baseFontSizePx: 50,
  textColor: TEXT_COLOR,
  activeWordColor: ACTIVE_WORD_TEXT_COLOR,
  backgroundColor: null,
  textShadow: null,
  letterSpacing: "-0.005em",
  activeWordScale: 1.0,
  uppercase: false,
  borderRadiusPx: 0,
  paddingPx: 0,
  wordBackgroundColor: WORD_BACKGROUND_COLOR,
  activeWordBackgroundColor: ACTIVE_WORD_BACKGROUND_COLOR,
  wordBackgroundRadiusPx: CHIP_RADIUS_PX,
  wordBackgroundPaddingXPx: CHIP_PADDING_X_PX,
  wordBackgroundPaddingYPx: CHIP_PADDING_Y_PX,
};

export const highlightLayoutDefaults: Partial<CaptionLayoutConfig> = {
  maxWordsPerPage: 5,
  maxWidthPercent: 78,
};
