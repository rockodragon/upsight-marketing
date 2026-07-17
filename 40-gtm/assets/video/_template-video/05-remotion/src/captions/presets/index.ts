import type { CaptionLayoutConfig, CaptionPresetName, CaptionPresetTokens } from "../types";
import { cleanPreset } from "./clean";
import { emphasisPreset, emphasisLayoutDefaults } from "./emphasis";
import { productDemoPreset, productDemoLayoutDefaults } from "./productDemo";

export { cleanPreset, emphasisPreset, productDemoPreset };

export type CaptionPreset = {
  tokens: CaptionPresetTokens;
  layoutDefaults: Partial<CaptionLayoutConfig>;
};

const PRESETS: Record<CaptionPresetName, CaptionPreset> = {
  clean: { tokens: cleanPreset, layoutDefaults: {} },
  emphasis: { tokens: emphasisPreset, layoutDefaults: emphasisLayoutDefaults },
  productDemo: { tokens: productDemoPreset, layoutDefaults: productDemoLayoutDefaults },
};

export function getPreset(name: CaptionPresetName): CaptionPreset {
  return PRESETS[name];
}
