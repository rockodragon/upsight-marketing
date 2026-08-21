import { Easing, interpolate } from "remotion";
import { easeConfident } from "./brand";

export const ease = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(...easeConfident),
};

export function fade(frame: number, from: number, to: number): number {
  return interpolate(frame, [from, to], [0, 1], ease);
}
