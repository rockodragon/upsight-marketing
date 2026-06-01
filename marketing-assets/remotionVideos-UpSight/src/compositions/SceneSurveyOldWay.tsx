import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useFadeIn, useSlideRight } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: The old way — survey goes out, CSV comes back, nothing connects.
 * Visual: survey form → arrow → CSV icon → "good luck" punchline.
 */

const OldStep: React.FC<{
  icon: string;
  label: string;
  index: number;
}> = ({ icon, label, index }) => {
  const style = useSlideRight(18 + index * 22, 50);

  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: layout.radius,
          background: "rgba(239, 68, 68, 0.08)",
          border: "1px solid rgba(239, 68, 68, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontFamily: fonts.sans,
          fontSize: 22,
          fontWeight: 500,
          color: colors.textDim,
        }}
      >
        {label}
      </span>
    </div>
  );
};

export const SceneSurveyOldWay: React.FC = () => {
  const headlineStyle = useSlideUp(10);
  const punchlineOpacity = useFadeIn(105, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// the old way" delay={5} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 50,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 28,
          marginBottom: 48,
        }}
      >
        Survey → CSV → <span style={{ color: colors.red }}>Good luck</span>
      </div>

      {/* Old way steps */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
          width: 620,
        }}
      >
        <OldStep
          icon="📋"
          label="Send the same questions to everyone"
          index={0}
        />
        <OldStep icon="📊" label="Export to spreadsheet" index={1} />
        <OldStep icon="🤷" label="Start from zero next time" index={2} />
      </div>

      {/* Punchline */}
      <div
        style={{
          marginTop: 48,
          fontFamily: fonts.mono,
          fontSize: 20,
          fontWeight: 500,
          color: colors.red,
          letterSpacing: "0.04em",
          opacity: punchlineOpacity,
          textAlign: "center",
        }}
      >
        Every survey is a stranger asking stranger questions
      </div>
    </AbsoluteFill>
  );
};
