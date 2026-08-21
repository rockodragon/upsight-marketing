import { interpolate } from "remotion";
import type {
  AnchorX,
  AnchorY,
  MotionSpec,
  TransitionSpec,
} from "./script";

const DEFAULT_TRANSITION_FRAMES = 12;
const DEFAULT_DISTANCE = 80;

export type AnimatedLayerStyle = {
  opacity: number;
  transformParts: string[];
  clipPath?: string;
};

export function getAnchorTransforms(
  anchorX: AnchorX = "left",
  anchorY: AnchorY = "top"
): string[] {
  const transforms: string[] = [];

  if (anchorX === "center") transforms.push("translateX(-50%)");
  if (anchorX === "right") transforms.push("translateX(-100%)");
  if (anchorY === "center") transforms.push("translateY(-50%)");
  if (anchorY === "bottom") transforms.push("translateY(-100%)");

  return transforms;
}

function getEnterProgress(frame: number, spec?: TransitionSpec): number {
  if (!spec) return 1;
  const frames = spec.frames ?? DEFAULT_TRANSITION_FRAMES;
  return interpolate(frame, [0, frames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function getExitProgress(
  frame: number,
  durationInFrames: number,
  spec?: TransitionSpec
): number {
  if (!spec) return 0;
  const frames = spec.frames ?? DEFAULT_TRANSITION_FRAMES;
  const start = Math.max(0, durationInFrames - frames);

  return interpolate(frame, [start, durationInFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

function getMotionTransforms(
  frame: number,
  durationInFrames: number,
  motion?: MotionSpec
): string[] {
  if (!motion || motion.type === "none") return [];

  const amplitude = motion.amplitude ?? 18;
  const periodFrames = motion.periodFrames ?? 90;
  const theta = (frame / periodFrames) * Math.PI * 2;

  switch (motion.type) {
    case "float":
      return [`translateY(${Math.sin(theta) * amplitude}px)`];
    case "drift-left":
      return [
        `translateX(${interpolate(frame, [0, durationInFrames], [0, -amplitude], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px)`,
      ];
    case "drift-up":
      return [
        `translateY(${interpolate(frame, [0, durationInFrames], [0, -amplitude], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}px)`,
      ];
    case "pulse":
      return [`scale(${1 + Math.sin(theta) * (amplitude / 100)})`];
    default:
      return [];
  }
}

export function getAnimatedLayerStyle(
  frame: number,
  durationInFrames: number,
  enter?: TransitionSpec,
  exit?: TransitionSpec,
  motion?: MotionSpec
): AnimatedLayerStyle {
  const style: AnimatedLayerStyle = {
    opacity: 1,
    transformParts: getMotionTransforms(frame, durationInFrames, motion),
  };

  if (enter) {
    const progress = getEnterProgress(frame, enter);
    const distance = enter.distance ?? DEFAULT_DISTANCE;

    switch (enter.type) {
      case "fade":
        style.opacity *= progress;
        break;
      case "slide-up":
        style.opacity *= progress;
        style.transformParts.push(
          `translateY(${interpolate(progress, [0, 1], [distance, 0])}px)`
        );
        break;
      case "slide-left":
        style.opacity *= progress;
        style.transformParts.push(
          `translateX(${interpolate(progress, [0, 1], [-distance, 0])}px)`
        );
        break;
      case "slide-right":
        style.opacity *= progress;
        style.transformParts.push(
          `translateX(${interpolate(progress, [0, 1], [distance, 0])}px)`
        );
        break;
      case "zoom-in":
        style.opacity *= progress;
        style.transformParts.push(
          `scale(${interpolate(progress, [0, 1], [0.92, 1])})`
        );
        break;
      case "wipe-left":
        style.clipPath = `inset(0 ${interpolate(progress, [0, 1], [100, 0])}% 0 0)`;
        break;
      case "wipe-up":
        style.clipPath = `inset(${interpolate(progress, [0, 1], [100, 0])}% 0 0 0)`;
        break;
    }
  }

  if (exit) {
    const progress = getExitProgress(frame, durationInFrames, exit);
    const distance = exit.distance ?? DEFAULT_DISTANCE;

    switch (exit.type) {
      case "fade":
        style.opacity *= 1 - progress;
        break;
      case "slide-up":
        style.opacity *= 1 - progress;
        style.transformParts.push(
          `translateY(${interpolate(progress, [0, 1], [0, -distance])}px)`
        );
        break;
      case "slide-left":
        style.opacity *= 1 - progress;
        style.transformParts.push(
          `translateX(${interpolate(progress, [0, 1], [0, -distance])}px)`
        );
        break;
      case "slide-right":
        style.opacity *= 1 - progress;
        style.transformParts.push(
          `translateX(${interpolate(progress, [0, 1], [0, distance])}px)`
        );
        break;
      case "zoom-in":
        style.opacity *= 1 - progress;
        style.transformParts.push(
          `scale(${interpolate(progress, [0, 1], [1, 1.06])})`
        );
        break;
      case "wipe-left":
        style.clipPath = `inset(0 0 0 ${interpolate(progress, [0, 1], [0, 100])}%)`;
        break;
      case "wipe-up":
        style.clipPath = `inset(${interpolate(progress, [0, 1], [0, 100])}% 0 0 0)`;
        break;
    }
  }

  return style;
}
