import script from "../../../01-script/hero.script.json";

export type Beat = {
  at: number;
  voiceover: string;
  onScreen: string;
  caption: string;
  emphasis?: boolean;
  media?: string;
};

export type SurveyScene = {
  id: string;
  name: string;
  durationSeconds: number;
  label?: string;
  media?: string;
  illustrative?: boolean;
  beats: Beat[];
};

export type VideoScript = {
  id: string;
  title: string;
  description: string;
  sourceScript?: string;
  wedge?: string;
  room?: string;
  cta: { label: string; url: string };
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  formats?: {
    landscape: { width: number; height: number };
    square?: { width: number; height: number };
    portrait?: { width: number; height: number };
  };
  scenes: SurveyScene[];
};

export const surveyScript = script as VideoScript;

export type Aspect = "landscape" | "square" | "portrait";

export function getScene(id: string): SurveyScene {
  const scene = surveyScript.scenes.find((s) => s.id === id);
  if (!scene) throw new Error(`Scene not found: ${id}`);
  return scene;
}

export function getSceneDurationInFrames(scene: SurveyScene, fps: number): number {
  return Math.max(1, Math.round(scene.durationSeconds * fps));
}

export function getTotalDurationInFrames(fps = surveyScript.format.fps): number {
  return surveyScript.scenes.reduce(
    (sum, scene) => sum + getSceneDurationInFrames(scene, fps),
    0,
  );
}

export function activeBeat(scene: SurveyScene, localSeconds: number): Beat {
  let current = scene.beats[0];
  for (const beat of scene.beats) {
    if (localSeconds >= beat.at) current = beat;
  }
  return current;
}
