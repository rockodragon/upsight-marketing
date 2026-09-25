import { colors, fonts } from "../../lib/brand";
import type { CaptionPresetTokens } from "../types";

/**
 * Professional product / LinkedIn videos. Short phrases, minimal movement,
 * brand-amber emphasis on the active word instead of scale or motion.
 */
export const cleanPreset: CaptionPresetTokens = {
  name: "clean",
  fontFamily: fonts.sans,
  fontWeight: 600,
  baseFontSizePx: 52,
  textColor: colors.textLight,
  activeWordColor: colors.amber,
  backgroundColor: null,
  textShadow: "0 2px 12px rgba(0, 0, 0, 0.55)",
  letterSpacing: "-0.01em",
  activeWordScale: 1.03,
  uppercase: false,
  borderRadiusPx: 0,
  paddingPx: 0,
};
