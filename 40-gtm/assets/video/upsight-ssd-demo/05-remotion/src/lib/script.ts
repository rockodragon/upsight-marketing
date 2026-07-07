import script from "../../../01-script/hero.script.json";

export type Highlight = {
  quote: string;
  speaker: string;
  source: string;
};

export type ThemeQuote = {
  text: string;
  speaker: string;
};

export type Person = {
  name: string;
  company: string;
  interviews: number;
  themes: string[];
};

export type SsdScene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
  headline?: string;
  headlineAccent?: string;
  subhead?: string;
  voiceover?: string;
  screenDirection?: string;
  screenshot?: string;
  screenshotWidth?: number;
  highlights?: Highlight[];
  themeTitle?: string;
  themeCount?: string;
  quotes?: ThemeQuote[];
  person?: Person;
  taglineLine1?: string;
  taglineLine2?: string;
  cta?: string;
};

export type SsdScript = {
  id: string;
  title: string;
  description: string;
  sourceScript?: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  scenes: SsdScene[];
};

export const ssdScript = script as SsdScript;

export function getScene(id: string): SsdScene {
  const scene = ssdScript.scenes.find((s) => s.id === id);
  if (!scene) throw new Error(`Scene not found: ${id}`);
  return scene;
}
