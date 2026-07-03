import heroScript from "../../../01-script/hero.script.json";

export type HeroScene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
  headline?: string;
  headlineAccent?: string;
  subhead?: string;
  subheadAccent?: string;
  proofLines?: string[];
  taglineLine1?: string;
  taglineLine2?: string;
  supporting?: string;
  cta?: string;
};

export type HeroScript = {
  id: string;
  title: string;
  description: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  scenes: HeroScene[];
  fragments: string[];
};

export const homepageHeroScript = heroScript as HeroScript;

export function getScene(id: string): HeroScene {
  const scene = homepageHeroScript.scenes.find((s) => s.id === id);
  if (!scene) {
    throw new Error(`Scene not found in script: ${id}`);
  }

  return scene;
}
