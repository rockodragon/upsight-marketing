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
import { getScene } from "../../lib/script";

export const SceneHeroClose: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = getScene("close");

  const logo = spring({
    frame: frame - 8,
    fps,
    config: { damping: 14, stiffness: 200, mass: 0.6 },
  });

  const tagline = spring({
    frame: frame - 28,
    fps,
    config: { damping: 28, stiffness: 110, mass: 0.85 },
  });

  const supporting = spring({
    frame: frame - 42,
    fps,
    config: { damping: 28, stiffness: 100, mass: 0.9 },
  });

  const cta = spring({
    frame: frame - 55,
    fps,
    config: { damping: 26, stiffness: 120, mass: 0.8 },
  });

  const breathe = Math.sin(frame * 0.06) * 0.012 + 1;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 80 }}>
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(56,189,248,0.08) 0%, rgba(245,158,11,0.06) 50%, transparent 70%)`,
          transform: `scale(${breathe})`,
        }}
      />

      <div
        style={{
          opacity: logo,
          transform: `scale(${interpolate(logo, [0, 1], [0.5, 1])})`,
          filter: `drop-shadow(0 0 40px ${colors.amberGlow})`,
        }}
      >
        <Img src={staticFile("logos/upsight-logo.png")} style={{ height: 88 }} />
      </div>

      <div
        style={{
          marginTop: 44,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 56,
          letterSpacing: "-0.03em",
          lineHeight: 1.25,
          opacity: tagline,
          transform: `translateY(${interpolate(tagline, [0, 1], [30, 0])}px)`,
        }}
      >
        <span style={{ color: colors.textLight }}>{scene.taglineLine1}</span>
        <br />
        <span style={{ color: colors.amber }}>{scene.taglineLine2}</span>
      </div>

      <div
        style={{
          marginTop: 20,
          fontFamily: fonts.sans,
          fontSize: 24,
          fontWeight: 400,
          color: colors.textDim,
          letterSpacing: "0.04em",
          opacity: supporting,
        }}
      >
        {scene.supporting}
      </div>

      <div
        style={{
          marginTop: 48,
          padding: "20px 52px",
          borderRadius: layout.radius,
          background: colors.amber,
          color: colors.bgDark,
          fontFamily: fonts.sans,
          fontSize: 24,
          fontWeight: 700,
          boxShadow: `0 0 30px ${colors.amberGlow}, 0 10px 25px rgba(0,0,0,0.4)`,
          opacity: cta,
          transform: `translateY(${interpolate(cta, [0, 1], [24, 0])}px)`,
        }}
      >
        {scene.cta}
      </div>
    </AbsoluteFill>
  );
};
