import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

export const MarketingBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: colors.bg, overflow: "hidden" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: [
          `radial-gradient(ellipse at 16% 78%, rgba(56,189,248,0.10) 0%, transparent 48%)`,
          `radial-gradient(ellipse at 84% 16%, ${colors.amberGlow} 0%, transparent 42%)`,
        ].join(", "),
      }}
    />
    <AbsoluteFill>{children}</AbsoluteFill>
  </AbsoluteFill>
);
