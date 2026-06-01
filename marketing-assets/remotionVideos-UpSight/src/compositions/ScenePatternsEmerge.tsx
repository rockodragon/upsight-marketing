import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { useSlideUp, useFadeIn, useBarGrow } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Patterns emerge from community feedback.
 * Shows top themes with visual bars — the "aha" moment.
 */

interface Theme {
  label: string;
  pct: number;
  color: string;
}

const THEMES: Theme[] = [
  { label: "Better onboarding docs", pct: 72, color: colors.sky },
  { label: "In-person events", pct: 58, color: colors.amber },
  { label: "Mentorship programs", pct: 43, color: colors.green },
];

const ThemeBar: React.FC<{ theme: Theme; index: number }> = ({
  theme,
  index,
}) => {
  const labelStyle = useSlideUp(20 + index * 22, 40);
  const barProgress = useBarGrow(30 + index * 22);
  const pctOpacity = useFadeIn(45 + index * 22, 12);

  return (
    <div style={{ ...labelStyle, width: "100%" }}>
      {/* Label + percentage */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 10,
        }}
      >
        <span
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 600,
            color: colors.textLight,
          }}
        >
          {theme.label}
        </span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 20,
            fontWeight: 500,
            color: theme.color,
            opacity: pctOpacity,
          }}
        >
          {theme.pct}%
        </span>
      </div>

      {/* Bar background */}
      <div
        style={{
          width: "100%",
          height: 14,
          borderRadius: 7,
          background: "rgba(238, 238, 242, 0.06)",
        }}
      >
        {/* Bar fill */}
        <div
          style={{
            width: `${theme.pct * barProgress}%`,
            height: "100%",
            borderRadius: 7,
            background: theme.color,
            boxShadow: `0 0 16px ${theme.color}44`,
          }}
        />
      </div>
    </div>
  );
};

export const ScenePatternsEmerge: React.FC = () => {
  const headlineStyle = useSlideUp(8);
  const badgeOpacity = useFadeIn(100, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// patterns emerge" delay={4} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 52,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 28,
          marginBottom: 48,
        }}
      >
        Now you <span style={{ color: colors.amber }}>know</span>
      </div>

      {/* Theme bars */}
      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        {THEMES.map((theme, i) => (
          <ThemeBar key={i} theme={theme} index={i} />
        ))}
      </div>

      {/* Badge */}
      <div
        style={{
          marginTop: 40,
          fontFamily: fonts.mono,
          fontSize: 16,
          color: colors.textDimAlt,
          letterSpacing: "0.04em",
          opacity: badgeOpacity,
        }}
      >
        AI-extracted themes from 127 open-ended responses
      </div>
    </AbsoluteFill>
  );
};
