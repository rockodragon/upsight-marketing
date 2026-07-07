import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { useFadeIn, useSceneFade, useSlideUp } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

const QualityPill: React.FC<{ label: string; index: number }> = ({
  label,
  index,
}) => {
  const pill = useFadeIn(40 + index * 14, 18);
  return (
    <div
      style={{
        opacity: pill,
        padding: "14px 28px",
        borderRadius: 999,
        border: "1px solid rgba(56, 189, 248, 0.2)",
        background: "rgba(56, 189, 248, 0.06)",
        fontFamily: fonts.mono,
        fontSize: 16,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: colors.sky,
      }}
    >
      {label}
    </div>
  );
};

export const SceneSurveyPromise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const script = getScene("promise");
  const sceneOpacity = useSceneFade(durationInFrames);

  const headline = spring({
    frame: frame - 10,
    fps,
    config: { damping: 26, stiffness: 110, mass: 0.85 },
  });

  const accent = spring({
    frame: frame - 26,
    fps,
    config: { damping: 18, stiffness: 150, mass: 0.7 },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        padding: 80,
      }}
    >
      <MonoLabel text={script.label ?? ""} delay={6} />

      <div style={{ marginTop: 44, textAlign: "center" }}>
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 76,
            color: colors.textLight,
            letterSpacing: "-0.04em",
            opacity: headline,
            transform: `translateY(${interpolate(headline, [0, 1], [40, 0])}px)`,
          }}
        >
          {script.headline}
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 84,
            color: colors.amber,
            letterSpacing: "-0.04em",
            marginTop: 4,
            opacity: accent,
            transform: `scale(${interpolate(accent, [0, 1], [0.88, 1])})`,
            textShadow: `0 0 50px ${colors.amberGlow}`,
          }}
        >
          {script.headlineAccent}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 20,
          marginTop: 52,
        }}
      >
        {(script.qualities ?? []).map((q, i) => (
          <QualityPill key={q} label={q} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
