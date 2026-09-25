import { colors, fonts } from "../../lib/brand";
import type { CaptionLayoutConfig, CaptionPresetTokens } from "../types";

/**
 * Screen recordings. Semi-opaque box so captions stay legible over UI
 * without stealing focus from the product. Restrained animation — this
 * preset is meant to sit quietly at the bottom of the frame.
 *
 * Placement per scene: pass `layout={{ position: "upper" }}` (etc.) on
 * CaptionRenderer/CaptionComposition for the specific Sequence that needs
 * to avoid a particular part of the UI.
 */
export const productDemoPreset: CaptionPresetTokens = {
  name: "productDemo",
  fontFamily: fonts.sans,
  fontWeight: 600,
  baseFontSizePx: 40,
  textColor: colors.textLight,
  activeWordColor: colors.sky,
  backgroundColor: "rgba(5, 5, 8, 0.72)",
  textShadow: null,
  letterSpacing: "-0.005em",
  activeWordScale: 1.0,
  uppercase: false,
  borderRadiusPx: 10,
  paddingPx: 20,
};

export const productDemoLayoutDefaults: Partial<CaptionLayoutConfig> = {
  maxWordsPerPage: 7,
};
