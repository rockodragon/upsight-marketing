import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../../lib/brand";
import { useSceneFade } from "../../lib/animations";
import { getScene } from "../../lib/script";

export const SceneSurveyClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const script = getScene("close");
  const sceneOpacity = useSceneFade(durationInFrames, 8);

  const logo = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, stiffness: 200, mass: 0.6 },
  });

  const tagline = spring({
    frame: frame - 22,
    fps,
    config: { damping: 28, stiffness: 110, mass: 0.85 },
  });

  const cta = spring({
    frame: frame - 42,
    fps,
    config: { damping: 26, stiffness: 120, mass: 0.8 },
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
      <div
        style={{
          opacity: logo,
          transform: `scale(${interpolate(logo, [0, 1], [0.5, 1])})`,
          filter: `drop-shadow(0 0 40px ${colors.amberGlow})`,
        }}
      >
        <Img src={staticFile("logos/upsight-logo.png")} style={{ height: 84 }} />
      </div>

      <div
        style={{
          marginTop: 40,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 54,
          letterSpacing: "-0.03em",
          lineHeight: 1.25,
          opacity: tagline,
          transform: `translateY(${interpolate(tagline, [0, 1], [24, 0])}px)`,
        }}
      >
        <span style={{ color: colors.textLight }}>{script.taglineLine1}</span>
        <br />
        <span style={{ color: colors.amber }}>{script.taglineLine2}</span>
      </div>

      <div
        style={{
          marginTop: 18,
          fontFamily: fonts.mono,
          fontSize: 16,
          color: colors.textDimAlt,
          letterSpacing: "0.06em",
          opacity: interpolate(frame - 32, [0, 15], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {script.supporting}
      </div>

      <div
        style={{
          marginTop: 44,
          padding: "20px 52px",
          borderRadius: layout.radius,
          background: colors.amber,
          color: colors.bgDark,
          fontFamily: fonts.sans,
          fontSize: 24,
          fontWeight: 700,
          boxShadow: `0 0 30px ${colors.amberGlow}, 0 10px 25px rgba(0,0,0,0.4)`,
          opacity: cta,
          transform: `translateY(${interpolate(cta, [0, 1], [20, 0])}px)`,
        }}
      >
        {script.cta}
      </div>
    </AbsoluteFill>
  );
};
