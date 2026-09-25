import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { easeConfident } from "./brand";

const ease = Easing.bezier(...easeConfident);

export function useFadeIn(delay = 0, durationFrames = 18) {
  const frame = useCurrentFrame();
  return interpolate(frame - delay, [0, durationFrames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
}

export function useSceneFade(durationInFrames: number, fadeFrames = 10) {
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

export function useSlideUp(delay = 0, distance = 48) {
  const frame = useCurrentFrame();
  const progress = interpolate(frame - delay, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return {
    opacity: progress,
    translate: `0px ${interpolate(progress, [0, 1], [distance, 0])}px`,
  };
}

export function secondsOf(frame: number, fps: number) {
  return frame / fps;
}

export function useLocalSeconds() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return frame / fps;
}
