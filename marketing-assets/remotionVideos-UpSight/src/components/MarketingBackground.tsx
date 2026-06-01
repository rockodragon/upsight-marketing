import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

/**
 * Dark marketing background with subtle gradient glows and grid.
 * Wrap every scene in this for visual consistency.
 */
export const MarketingBackground: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgDark,
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: [
            `radial-gradient(ellipse at 30% 70%, rgba(56, 189, 248, 0.04) 0%, transparent 50%)`,
            `radial-gradient(ellipse at 70% 30%, ${colors.amberGlow} 0%, transparent 40%)`,
          ].join(", "),
          opacity: 0.4,
        }}
      />

      {/* Grid lines */}
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

      {/* Content */}
      <AbsoluteFill>{children}</AbsoluteFill>
    </AbsoluteFill>
  );
};
