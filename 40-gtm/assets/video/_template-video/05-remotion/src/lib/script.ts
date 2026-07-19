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

export const videoScript = script as VideoScript;

export function getScene(id: string): Scene {
  const scene = videoScript.scenes.find((s) => s.id === id);
  if (!scene) throw new Error(`Scene not found: ${id}`);
  return scene;
}

export function getSceneDurationInFrames(scene: Scene, fps: number): number {
  return Math.max(1, Math.round(scene.durationSeconds * fps));
}

export function getTotalDurationInFrames(scriptData: VideoScript): number {
  return scriptData.scenes.reduce(
    (sum, scene) => sum + getSceneDurationInFrames(scene, scriptData.format.fps),
    0
  );
}
