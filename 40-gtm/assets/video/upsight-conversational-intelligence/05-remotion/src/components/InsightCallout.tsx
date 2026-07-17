import React from "react";
import {
  Easing,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";

type InsightCalloutProps = {
  theme: string;
  quote: string;
  delay?: number;
  x: number;
  y: number;
  align?: "left" | "right";
};

/**
 * Speech-bubble callout for extracted quote + theme label.
 */
export const InsightCallout: React.FC<InsightCalloutProps> = ({
  theme,
  quote,
  delay = 0,
  x,
  y,
  align = "left",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 180, mass: 0.7 },
  });

  const opacity = interpolate(progress, [0, 0.4], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 1], [0.85, 1]);
  const translateY = interpolate(progress, [0, 1], [16, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        maxWidth: 420,
        opacity,
        scale,
        translate: `0 ${translateY}px`,
        transformOrigin: align === "right" ? "top right" : "top left",
        zIndex: 20,
      }}
    >
      <div
        style={{
          background: "rgba(10, 10, 16, 0.94)",
          border: `1px solid ${colors.sky}55`,
          borderRadius: layout.radius + 6,
          padding: "14px 18px",
          boxShadow: `0 20px 50px rgba(0,0,0,0.55), 0 0 30px ${colors.amberGlow}`,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.amber,
            marginBottom: 8,
          }}
        >
          {theme}
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 26,
            fontWeight: 600,
            lineHeight: 1.25,
            color: colors.textLight,
          }}
        >
          “{quote}”
        </div>
      </div>
      {/* Tail */}
      <div
        style={{
          width: 14,
          height: 14,
          background: "rgba(10, 10, 16, 0.94)",
          borderRight: `1px solid ${colors.sky}55`,
          borderBottom: `1px solid ${colors.sky}55`,
          transform: "rotate(45deg)",
          marginTop: -8,
          marginLeft: align === "right" ? "auto" : 28,
          marginRight: align === "right" ? 28 : undefined,
        }}
      />
    </div>
  );
};
