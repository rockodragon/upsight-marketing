import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

/** CI-v2 paper field — same as talking-heads-marquee / homepage */
export const MarketingBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: colors.paper, overflow: "hidden" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: [
          `radial-gradient(ellipse at 18% 75%, rgba(56,189,248,0.08) 0%, transparent 48%)`,
          `radial-gradient(ellipse at 82% 20%, ${colors.amberGlow} 0%, transparent 42%)`,
        ].join(", "),
      }}
    />
    <AbsoluteFill>{children}</AbsoluteFill>
  </AbsoluteFill>
);
