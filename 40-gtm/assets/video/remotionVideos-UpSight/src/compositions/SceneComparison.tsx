import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useFadeIn, useBarGrow } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

interface BarData {
  label: string;
  percent: number;
  color: string;
}

const BARS: BarData[] = [
  { label: "Surveys", percent: 2, color: colors.red },
  { label: "AI Chat", percent: 74, color: colors.green },
];

const BAR_MAX_HEIGHT = 380;

const BarColumn: React.FC<{ bar: BarData; index: number }> = ({
  bar,
  index,
}) => {
  const barOpacity = useFadeIn(10 + index * 12, 12);
  const barGrow = useBarGrow(18 + index * 12);
  const percentOpacity = useFadeIn(35 + index * 12, 10);
  const barHeight = (bar.percent / 100) * BAR_MAX_HEIGHT;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        opacity: barOpacity,
      }}
    >
      {/* Percent */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 64,
          letterSpacing: "-0.03em",
          color: bar.color,
          opacity: percentOpacity,
        }}
      >
        {bar.percent}%
      </div>

      {/* Bar container */}
      <div
        style={{
          width: 160,
          height: BAR_MAX_HEIGHT,
          background: "rgba(238,238,242,0.03)",
          borderRadius: layout.radius,
          border: "1px solid rgba(238,238,242,0.04)",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: barHeight,
            borderRadius: layout.radius - 1,
            background: `linear-gradient(to top, ${bar.color}, ${bar.color}88)`,
            transformOrigin: "bottom",
            transform: `scaleY(${barGrow})`,
          }}
        />
      </div>

      {/* Label */}
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 20,
          fontWeight: 400,
          color: colors.textDimAlt,
          letterSpacing: "0.05em",
        }}
      >
        {bar.label}
      </div>
    </div>
  );
};

export const SceneComparison: React.FC = () => {
  const headlineStyle = useSlideUp(5);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// completion rate" delay={3} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 60,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 10,
          marginBottom: 28,
        }}
      >
        The Numbers Don't Lie
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 88,
          marginTop: 16,
        }}
      >
        {BARS.map((bar, i) => (
          <BarColumn key={i} bar={bar} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
