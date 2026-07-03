import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

export const MarketingBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: colors.bgDark, overflow: "hidden" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: [
          `radial-gradient(ellipse at 25% 75%, rgba(56, 189, 248, 0.05) 0%, transparent 50%)`,
          `radial-gradient(ellipse at 75% 25%, ${colors.amberGlow} 0%, transparent 40%)`,
        ].join(", "),
        opacity: 0.45,
      }}
    />
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: [
          `linear-gradient(rgba(238,238,242,0.018) 1px, transparent 1px)`,
          `linear-gradient(90deg, rgba(238,238,242,0.018) 1px, transparent 1px)`,
        ].join(", "),
        backgroundSize: "60px 60px",
      }}
    />
    <AbsoluteFill>{children}</AbsoluteFill>
  </AbsoluteFill>
);
