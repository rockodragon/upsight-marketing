import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors } from "../lib/brand";
import { fontMono } from "../lib/fonts";

export const MonoLabel: React.FC<{
  text: string;
  delay?: number;
  tone?: "amber" | "sky" | "dim";
}> = ({ text, delay = 0, tone = "amber" }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const color =
    tone === "sky" ? colors.sky : tone === "dim" ? colors.textDim : colors.amber;

  return (
    <div
      style={{
        opacity,
        fontFamily: fontMono,
        fontSize: 20,
        fontWeight: 500,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color,
      }}
    >
      {text}
    </div>
  );
};
