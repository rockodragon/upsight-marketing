import script from "../../../01-script/hero.script.json";

export type Beat = {
  at: number;
  voiceover: string;
  onScreen: string | null;
  caption: string;
};

export type Scene = {
  id: string;
  name: string;
  durationSeconds: number;
  mood?: string;
  backgroundColor?: string;
  picture?: string;
  beats: Beat[];
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
  cta: {
    label: string;
    supporting: string;
    tagline: string;
  };
  scenes: Scene[];
};

export const videoScript = script as unknown as VideoScript;

export function getScene(id: string): Scene {
  const scene = videoScript.scenes.find((s) => s.id === id);
  if (!scene) throw new Error(`Scene not found: ${id}`);
  return scene;
}

export function getSceneDurationInFrames(scene: Scene, fps: number): number {
  return Math.max(1, Math.round(scene.durationSeconds * fps));
}

export function getTotalDurationInFrames(fps = videoScript.format.fps): number {
  return videoScript.scenes.reduce(
    (sum, scene) => sum + getSceneDurationInFrames(scene, fps),
    0,
  );
}

export function activeBeat(scene: Scene, localSeconds: number): Beat {
  let current = scene.beats[0];
  for (const beat of scene.beats) {
    if (localSeconds >= beat.at) current = beat;
  }
  return current;
}

export function sceneStarts(fps: number): number[] {
  const starts: number[] = [];
  let acc = 0;
  for (const scene of videoScript.scenes) {
    starts.push(acc);
    acc += getSceneDurationInFrames(scene, fps);
  }
  return starts;
}
