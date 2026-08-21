import script from "../../../01-script/hero.script.json";

export type Beat = {
  at: number;
  voiceover: string;
  onScreen: string;
  caption: string;
};

export type VideoScene = {
  id: string;
  name: string;
  durationSeconds: number;
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
  scenes: VideoScene[];
};

export const videoScript = script as VideoScript;

export function getSceneDurationInFrames(scene: VideoScene, fps: number): number {
  return Math.max(1, Math.round(scene.durationSeconds * fps));
}

export function getTotalDurationInFrames(fps = videoScript.format.fps): number {
  return videoScript.scenes.reduce(
    (sum, scene) => sum + getSceneDurationInFrames(scene, fps),
    0,
  );
}

export function activeBeat(scene: VideoScene, localSeconds: number): Beat {
  let current = scene.beats[0];
  for (const beat of scene.beats) {
    if (localSeconds >= beat.at) current = beat;
  }
  return current;
}
