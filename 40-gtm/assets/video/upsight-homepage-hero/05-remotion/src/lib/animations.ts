import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
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
