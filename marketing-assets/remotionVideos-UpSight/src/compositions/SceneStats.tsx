import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideRight, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

interface StatData {
  value: string;
  label: string;
}

const STATS: StatData[] = [
  { value: "86%", label: "of people abandon\nlong-form surveys" },
  { value: "2.4%", label: "average survey\ncompletion rate" },
  { value: "72hrs", label: "wasted building surveys\nnobody finishes" },
];

const StatCard: React.FC<{ stat: StatData; index: number }> = ({
  stat,
  index,
}) => {
  const style = useSlideRight(10 + index * 10);

  return (
    <div
      style={{
        ...style,
        width: 740,
        background: colors.bgDarkAlt,
        border: "1px solid rgba(238,238,242,0.05)",
        borderRadius: layout.radius,
        padding: "40px 48px",
        display: "flex",
        alignItems: "center",
        gap: 36,
      }}
    >
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 72,
          lineHeight: 1,
          minWidth: 170,
          letterSpacing: "-0.04em",
          color: colors.red,
        }}
      >
        {stat.value}
      </div>
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 24,
          fontWeight: 400,
          color: colors.textDim,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
};

export const SceneStats: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        padding: 80,
      }}
    >
      <MonoLabel text="// the problem" delay={5} />
      <div style={{ height: 12 }} />
      {STATS.map((stat, i) => (
        <StatCard key={i} stat={stat} index={i} />
      ))}
    </AbsoluteFill>
  );
};
