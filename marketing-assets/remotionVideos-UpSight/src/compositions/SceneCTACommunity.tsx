import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useScalePop, useFadeIn, useSlideUp } from "../lib/animations";

/**
 * CTA scene for the "Know Your Community" ad.
 * Tagline: "Know your community. Act on what they tell you."
 */
export const SceneCTACommunity: React.FC = () => {
  const logoStyle = useScalePop(10);
  const line1Opacity = useFadeIn(26, 18);
  const line2Opacity = useFadeIn(44, 18);
  const btnStyle = useSlideUp(62);
  const urlOpacity = useFadeIn(76, 18);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      {/* Logo */}
      <div
        style={{
          ...logoStyle,
          filter: `drop-shadow(0 0 40px ${colors.amberGlow})`,
        }}
      >
        <Img src={staticFile("upsight-logo.png")} style={{ height: 100 }} />
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 48,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 52,
          letterSpacing: "-0.03em",
          lineHeight: 1.35,
        }}
      >
        <div style={{ color: colors.textLight, opacity: line1Opacity }}>
          Know your community.
        </div>
        <div style={{ color: colors.green, opacity: line2Opacity }}>
          Act on what they tell you.
        </div>
      </div>

      {/* CTA Button */}
      <div
        style={{
          ...btnStyle,
          marginTop: 56,
          padding: "22px 64px",
          borderRadius: layout.radius,
          background: colors.amber,
          color: colors.bgDark,
          fontFamily: fonts.sans,
          fontSize: 26,
          fontWeight: 700,
          boxShadow: `0 0 30px ${colors.amberGlow}, 0 10px 25px rgba(0,0,0,0.4)`,
        }}
      >
        Try Free →
      </div>

      {/* URL */}
      <div
        style={{
          fontFamily: fonts.mono,
          marginTop: 28,
          fontSize: 19,
          color: colors.textDimAlt,
          letterSpacing: "0.08em",
          opacity: urlOpacity,
        }}
      >
        getupsight.com
      </div>
    </AbsoluteFill>
  );
};
