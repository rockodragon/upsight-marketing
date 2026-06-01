import React from "react";
import { colors, fonts } from "../lib/brand";
import { useFadeIn } from "../lib/animations";

/**
 * JetBrains Mono "operator voice" label.
 * e.g. "// the problem"
 */
export const MonoLabel: React.FC<{
  text: string;
  delay?: number;
  color?: string;
}> = ({ text, delay = 0, color = colors.amber }) => {
  const opacity = useFadeIn(delay, 15);
  return (
    <div
      style={{
        fontFamily: fonts.mono,
        fontSize: 18,
        fontWeight: 500,
        letterSpacing: "0.25em",
        textTransform: "uppercase",
        color,
        opacity,
      }}
    >
      {text}
    </div>
  );
};
