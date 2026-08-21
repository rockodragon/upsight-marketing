import { colors, fonts } from "../../lib/brand";
import type { CaptionLayoutConfig, CaptionPresetTokens } from "../types";

// ---- Variables — tweak these to restyle the steady preset ----
const TEXT_COLOR = colors.textLight; // every word, always — nothing recolors as it's spoken
const BACKGROUND_COLOR = "rgba(18, 18, 24, 0.92)"; // one solid box behind the whole phrase — kept dark but clearly lighter than pure black so it reads as a box over any footage
const BORDER_RADIUS_PX = 12;
const PADDING_PX = 22;
// ----------------------------------------------------------------

/**
 * No per-word motion at all — no color swap, no scale, no chip. One solid
 * box appears behind each phrase and holds still until the next phrase
 * replaces it. For anyone who found `clean`/`emphasis`/`highlight`'s
 * per-word highlight distracting or "jumpy" — this is the calm, easy-to-
 * follow subtitle style.
 */
export const steadyPreset: CaptionPresetTokens = {
  name: "steady",
  fontFamily: fonts.sans,
  fontWeight: 600,
  baseFontSizePx: 48,
  textColor: TEXT_COLOR,
  activeWordColor: TEXT_COLOR, // same as textColor on purpose — no per-word recolor
  backgroundColor: BACKGROUND_COLOR,
  textShadow: null,
  letterSpacing: "-0.005em",
  activeWordScale: 1.0, // no pop
  uppercase: false,
  borderRadiusPx: BORDER_RADIUS_PX,
  paddingPx: PADDING_PX,
  wordBackgroundColor: null,
  activeWordBackgroundColor: null,
};

export const steadyLayoutDefaults: Partial<CaptionLayoutConfig> = {
  combineTokensWithinMilliseconds: 1000,
  maxWordsPerPage: 7,
};
