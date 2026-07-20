import heroScript from "../../../01-script/hero.script.json";

export type SnippetKind = "video" | "zoom" | "call" | "note";

export type Snippet = {
  id: string;
  kind: SnippetKind;
  source: string;
  quote?: string;
  file?: string;
  meta?: string;
  author?: string;
  participants?: string[];
};

export type OutputCard = {
  id: string;
  label: string;
  title: string;
  detail: string;
};

export type Scene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
};

export type CiV2Script = {
  id: string;
  title: string;
  description: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  takeaway: string;
  snippets: Snippet[];
  outputs: OutputCard[];
  scenes: Scene[];
};

export const videoScript = heroScript as CiV2Script;

export const getTotalDurationInFrames = (script: CiV2Script = videoScript) =>
  script.scenes.reduce((sum, s) => sum + s.durationSeconds, 0) *
  script.format.fps;
