import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { useSlideUp, useStrikethrough, useFadeIn } from "../lib/animations";

const EMOJIS = ["📋", "😴", "🗑️", "📉"];

export const SceneHook: React.FC = () => {
  const line1Style = useSlideUp(8);
  const line2Style = useSlideUp(15);
  const strikeProgress = useStrikethrough(38, 12);
  const iconsOpacity = useFadeIn(22, 15);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      {/* "Stop wasting time on" */}
      <div
        style={{
          ...line1Style,
          fontFamily: fonts.sans,
          fontWeight: 400,
          fontSize: 52,
          color: colors.textDim,
          textAlign: "center",
          letterSpacing: "-0.02em",
        }}
      >
        Stop wasting time on
      </div>

      {/* "Boring Surveys" with strikethrough on Boring */}
      <div
        style={{
          ...line2Style,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 102,
          color: colors.textLight,
          textAlign: "center",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          marginTop: 12,
        }}
      >
        <span
          style={{
            position: "relative",
            color: colors.red,
            display: "inline-block",
          }}
        >
          Boring
          {/* Strikethrough line */}
          <div
            style={{
              position: "absolute",
              left: -4,
              right: -4,
              top: "55%",
              height: 6,
              background: colors.red,
              transformOrigin: "left",
              transform: `scaleX(${strikeProgress})`,
            }}
          />
        </span>{" "}
        Surveys
      </div>

      {/* Emoji row */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 48,
          opacity: iconsOpacity,
        }}
      >
        {EMOJIS.map((emoji, i) => (
          <div
            key={i}
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              background: colors.bgDarkAlt,
              border: "1px solid rgba(238,238,242,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};
