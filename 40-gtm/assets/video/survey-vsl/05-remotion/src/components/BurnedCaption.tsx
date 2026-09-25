import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors, layout } from "../lib/brand";
import { fontSans } from "../lib/fonts";

/** Burned-in captions for LinkedIn muted autoplay */
export const BurnedCaption: React.FC<{
  text: string;
  compact?: boolean;
}> = ({ text, compact }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame % 90, [0, 6, 84, 90], [0.92, 1, 1, 0.92], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  if (!text) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: compact ? 48 : 120,
        right: compact ? 48 : 120,
        bottom: compact ? 48 : 64,
        display: "flex",
        justifyContent: "center",
        zIndex: 40,
        opacity,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          maxWidth: compact ? 920 : 1200,
          padding: compact ? "14px 22px" : "16px 28px",
          borderRadius: layout.radius + 4,
          background: "rgba(5, 5, 8, 0.78)",
          border: `1px solid ${colors.sky}33`,
          backdropFilter: "blur(8px)",
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: compact ? 28 : 32,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: colors.textLight,
            textAlign: "center",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
