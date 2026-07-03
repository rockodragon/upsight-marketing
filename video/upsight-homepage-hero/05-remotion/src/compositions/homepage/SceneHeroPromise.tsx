import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

export const SceneHeroPromise: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("promise");

  const headline = spring({
    frame: frame - 10,
    fps,
    config: { damping: 26, stiffness: 110, mass: 0.85 },
  });

  const accent = spring({
    frame: frame - 28,
    fps,
    config: { damping: 20, stiffness: 140, mass: 0.7 },
  });

  const subhead = spring({
    frame: frame - 48,
    fps,
    config: { damping: 28, stiffness: 100, mass: 0.9 },
  });

  const sceneFadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sceneFadeOut = interpolate(
    frame,
    [durationInFrames - 14, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const burstOpacity = interpolate(frame - 28, [0, 8, 30, 40], [0, 0.35, 0.2, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const accentText = scene.subheadAccent ?? "";
  const base = (scene.subhead ?? "").replace(accentText, "").trimEnd();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneFadeIn * sceneFadeOut,
        padding: 80,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(245,158,11,0.18) 0%, rgba(56,189,248,0.06) 45%, transparent 70%)`,
          opacity: burstOpacity,
        }}
      />

      <MonoLabel text={scene.label ?? ""} delay={6} />

      <div style={{ marginTop: 40, textAlign: "center", maxWidth: 1200 }}>
        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 78,
            color: colors.textLight,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            opacity: headline,
            transform: `translateY(${interpolate(headline, [0, 1], [50, 0])}px)`,
          }}
        >
          {scene.headline}
        </div>

        <div
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 88,
            color: colors.amber,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginTop: 4,
            opacity: accent,
            transform: `scale(${interpolate(accent, [0, 1], [0.85, 1])})`,
            textShadow: `0 0 60px ${colors.amberGlow}`,
          }}
        >
          {scene.headlineAccent}
        </div>

        <div
          style={{
            marginTop: 36,
            fontFamily: fonts.sans,
            fontWeight: 400,
            fontSize: 30,
            color: colors.textDim,
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            opacity: subhead,
            transform: `translateY(${interpolate(subhead, [0, 1], [24, 0])}px)`,
          }}
        >
          {base} <span style={{ color: colors.sky, fontWeight: 600 }}>{accentText}</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
