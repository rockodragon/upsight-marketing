import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

/** Flat dark stage — light atmosphere, no heavy multi-glow “AI poster” look */
export const MarketingBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: colors.bgDark, overflow: "hidden" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: `radial-gradient(ellipse at 70% 40%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)`,
      }}
    />
    <AbsoluteFill>{children}</AbsoluteFill>
  </AbsoluteFill>
);
