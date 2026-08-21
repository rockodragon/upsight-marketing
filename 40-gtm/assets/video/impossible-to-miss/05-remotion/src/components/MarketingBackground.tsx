import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "../lib/brand";

export const MarketingBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: colors.bg, overflow: "hidden" }}>
    <AbsoluteFill>{children}</AbsoluteFill>
  </AbsoluteFill>
);
