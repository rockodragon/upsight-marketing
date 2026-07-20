import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, fonts } from "../lib/brand";

type ChipLabelProps = {
  text: string;
  delay?: number;
  tone?: "sky" | "amber" | "neutral";
};

/** Small mono chip — homepage-style, not console // labels */
export const ChipLabel: React.FC<ChipLabelProps> = ({
  text,
  delay = 0,
  tone = "sky",
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [delay, delay + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const accent =
    tone === "amber" ? colors.amber : tone === "neutral" ? colors.textDim : colors.sky;
  const bg =
    tone === "amber"
      ? "rgba(245,158,11,0.12)"
      : tone === "neutral"
        ? "rgba(238,238,242,0.06)"
        : "rgba(56,189,248,0.12)";

  return (
    <div
      style={{
        opacity,
        alignSelf: "flex-start",
        fontFamily: fonts.mono,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: "0.02em",
        color: accent,
        background: bg,
        border: `1px solid ${accent}44`,
        borderRadius: 999,
        padding: "8px 16px",
      }}
    >
      {text}
    </div>
  );
};

/** @deprecated use ChipLabel — kept as alias during rename */
export const MonoLabel = ChipLabel;
