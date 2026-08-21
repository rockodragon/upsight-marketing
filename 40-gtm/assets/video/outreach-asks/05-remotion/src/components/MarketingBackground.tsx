import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

export const MarketingBackground: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({ children, color = colors.bg }) => (
  <AbsoluteFill style={{ backgroundColor: color, overflow: "hidden" }}>
    {children}
  </AbsoluteFill>
);
