import type { CaptionLayoutConfig, CaptionPresetName, CaptionPresetTokens } from "../types";
import { cleanPreset } from "./clean";
import { emphasisPreset, emphasisLayoutDefaults } from "./emphasis";
import { highlightPreset, highlightLayoutDefaults } from "./highlight";
import { productDemoPreset, productDemoLayoutDefaults } from "./productDemo";
import { steadyPreset, steadyLayoutDefaults } from "./steady";

export { cleanPreset, emphasisPreset, productDemoPreset, highlightPreset, steadyPreset };

export type CaptionPreset = {
  tokens: CaptionPresetTokens;
  layoutDefaults: Partial<CaptionLayoutConfig>;
};

const PRESETS: Record<CaptionPresetName, CaptionPreset> = {
  clean: { tokens: cleanPreset, layoutDefaults: {} },
  emphasis: { tokens: emphasisPreset, layoutDefaults: emphasisLayoutDefaults },
  productDemo: { tokens: productDemoPreset, layoutDefaults: productDemoLayoutDefaults },
  highlight: { tokens: highlightPreset, layoutDefaults: highlightLayoutDefaults },
  steady: { tokens: steadyPreset, layoutDefaults: steadyLayoutDefaults },
};

export function getPreset(name: CaptionPresetName): CaptionPreset {
  return PRESETS[name];
}
