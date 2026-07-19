import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { springConfident, springPop } from "./brand";

export function useFadeIn(delay = 0, durationFrames = 20) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

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

/**
 * Slow, cinematic reveal for screenshots/product shots: the image grows in
 * gently while dissolving from transparent — no bounce. Returns individual
 * `scale` + `opacity` props (keep them separate so Studio can scrub them).
 */
export function useImageReveal(delay = 0, growFrames = 48, dissolveFrames = 30) {
  const frame = useCurrentFrame();
  const t = frame - delay;

  const opacity = interpolate(t, [0, dissolveFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scale = interpolate(t, [0, growFrames], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return { opacity, scale };
}

export function useStrikethrough(delay = 0, durationFrames = 12) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
}

export function useSceneFade(durationInFrames: number, fadeFrames = 12) {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [0, fadeFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - fadeFrames, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );
  return fadeIn * fadeOut;
}
