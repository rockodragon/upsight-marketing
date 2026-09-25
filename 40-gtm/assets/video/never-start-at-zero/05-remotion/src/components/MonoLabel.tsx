import React from "react";
import { colors, fonts } from "../lib/brand";

export const MonoLabel: React.FC<{ text: string; delay?: number }> = ({
  text,
  delay = 0,
}) => (
  <div
    style={{
      fontFamily: fonts.mono,
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "0.25em",
      textTransform: "uppercase",
      color: colors.amber,
      opacity: delay >= 0 ? 1 : 0,
    }}
  >
    {text}
  </div>
);
