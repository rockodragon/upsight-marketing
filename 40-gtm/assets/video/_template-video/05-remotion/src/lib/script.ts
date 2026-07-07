import script from "../../../01-script/hero.script.json";

export type Scene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
  headline?: string;
  headlineAccent?: string;
  subhead?: string;
  taglineLine1?: string;
  taglineLine2?: string;
  supporting?: string;
  cta?: string;
};

export type VideoScript = {
  id: string;
  title: string;
  description: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  scenes: Scene[];
};

export const videoScript = script as VideoScript;

export function getScene(id: string): Scene {
  const scene = videoScript.scenes.find((s) => s.id === id);
  if (!scene) throw new Error(`Scene not found: ${id}`);
  return scene;
}
