import script from "../../../01-script/hero.script.json";

export type CanvasValue = number | string;
export type AnchorX = "left" | "center" | "right";
export type AnchorY = "top" | "center" | "bottom";

export type TransitionSpec = {
  type:
    | "fade"
    | "slide-up"
    | "slide-left"
    | "slide-right"
    | "zoom-in"
    | "wipe-left"
    | "wipe-up";
  frames?: number;
  distance?: number;
};

export type MotionSpec = {
  type: "none" | "float" | "drift-left" | "drift-up" | "pulse";
  amplitude?: number;
  periodFrames?: number;
};

type BaseLayer = {
  id: string;
  kind: "text" | "image" | "video" | "shape";
  x: CanvasValue;
  y: CanvasValue;
  width?: CanvasValue;
  height?: CanvasValue;
  anchorX?: AnchorX;
  anchorY?: AnchorY;
  fromFrames?: number;
  durationFrames?: number;
  zIndex?: number;
  opacity?: number;
  rotateDeg?: number;
  borderRadius?: CanvasValue;
  border?: string;
  boxShadow?: string;
  objectFit?: "cover" | "contain" | "fill";
  backgroundColor?: string;
  enter?: TransitionSpec;
  exit?: TransitionSpec;
  motion?: MotionSpec;
};

export type TextLayer = BaseLayer & {
  kind: "text";
  text: string;
  color?: string;
  fontSize?: CanvasValue;
  fontWeight?: number;
  fontFamily?: string;
  lineHeight?: number;
  letterSpacing?: string;
  textAlign?: "left" | "center" | "right";
  padding?: CanvasValue;
};

export type ImageLayer = BaseLayer & {
  kind: "image";
  src: string;
};

export type VideoLayer = BaseLayer & {
  kind: "video";
  src: string;
  muted?: boolean;
};

export type ShapeLayer = BaseLayer & {
  kind: "shape";
  shape?: "rect" | "pill" | "circle";
};

export type Layer = TextLayer | ImageLayer | VideoLayer | ShapeLayer;

export type Beat = {
  at: number;
  voiceover: string;
  onScreen: string | null;
  caption: string;
  pictureBeat?: string;
};

export type AudioCue = {
  id: string;
  src: string;
  fromFrames?: number;
  durationFrames?: number;
  trimBeforeFrames?: number;
  trimAfterFrames?: number;
  volume?: number;
  fadeInFrames?: number;
  fadeOutFrames?: number;
  playbackRate?: number;
  loop?: boolean;
};

export type Scene = {
  id: string;
  name: string;
  durationSeconds: number;
  mood?: string;
  picture?: string;
  vignettes?: string[];
  beats: Beat[];
  backgroundColor?: string;
  label?: string;
  headline?: string;
  headlineAccent?: string;
  subhead?: string;
  taglineLine1?: string;
  taglineLine2?: string;
  supporting?: string;
  cta?: string;
  enter?: TransitionSpec;
  exit?: TransitionSpec;
  layers?: Layer[];
  audio?: AudioCue[];
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
  audioBed?: AudioCue[];
  scenes: Scene[];
};

export const videoScript = script as unknown as VideoScript;

export const VIGNETTES = [
  {
    id: "survey",
    label: "Survey",
    fpo: "FPO · desk / laptop · survey tab closing",
    lost: "Would not renew — closed unread",
    reverse: "Captured → living profile",
  },
  {
    id: "churn",
    label: "Churn",
    fpo: "FPO · glass office · call ends, laptop closes",
    lost: "Looking at alternatives — not owned",
    reverse: "Risk before cancel",
  },
  {
    id: "missed-expansion",
    label: "Missed expansion",
    fpo: "FPO · hallway · insight walks away",
    lost: "We'd buy more if… — stuck in a head",
    reverse: "Still time · next move",
  },
  {
    id: "cs-issues",
    label: "CS issues",
    fpo: "FPO · support bay · third contact, no pattern",
    lost: "I've asked three times — no trend",
    reverse: "Pattern · recommended action",
  },
] as const;

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
