/**
 * Shared animation utilities for UpSight ad compositions.
 *
 * Wraps Remotion primitives with brand-appropriate defaults.
 */
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { springConfident, springPop, springReveal } from "./brand";

// ─── Fade In ───────────────────────────────────────────────
export function useFadeIn(delay = 0, durationFrames = 20) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ─── Slide Up + Fade ───────────────────────────────────────
export function useSlideUp(delay = 0, distance = 60) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: springConfident,
  });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [distance, 0])}px)`,
  };
}

// ─── Slide In from Left ────────────────────────────────────
export function useSlideRight(delay = 0, distance = 80) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: springConfident,
  });
  return {
    opacity: progress,
    transform: `translateX(${interpolate(progress, [0, 1], [-distance, 0])}px)`,
  };
}

// ─── Scale Pop ─────────────────────────────────────────────
export function useScalePop(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: springPop,
  });
  return {
    opacity: interpolate(progress, [0, 0.3], [0, 1], {
      extrapolateRight: "clamp",
    }),
    transform: `scale(${interpolate(progress, [0, 1], [0.5, 1])})`,
  };
}

// ─── Gentle Reveal ─────────────────────────────────────────
export function useReveal(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = spring({
    frame: frame - delay,
    fps,
    config: springReveal,
  });
  return {
    opacity: progress,
    transform: `translateY(${interpolate(progress, [0, 1], [30, 0])}px)`,
  };
}

// ─── Strikethrough progress (0→1) ──────────────────────────
export function useStrikethrough(delay = 0, durationFrames = 12) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

// ─── Bar grow (for charts) ─────────────────────────────────
export function useBarGrow(delay = 0) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return spring({
    frame: frame - delay,
    fps,
    config: { damping: 20, stiffness: 60, mass: 1.2 },
  });
}

// ─── Counter (animate a number) ────────────────────────────
export function useCountUp(
  target: number,
  delay = 0,
  durationFrames = 30,
  decimals = 0
) {
  const frame = useCurrentFrame();
  const value = interpolate(frame - delay, [0, durationFrames], [0, target], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return value.toFixed(decimals);
}
