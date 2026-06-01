import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useScalePop, useFadeIn, useSlideUp } from "../lib/animations";

/**
 * CTA scene for the "Stop Debating" / Conviction ad.
 * Tagline: "Stop debating. Start knowing. Start shipping."
 */
export const SceneCTAConviction: React.FC = () => {
  const logoStyle = useScalePop(10);
  const taglineOpacity = useFadeIn(24, 18);
  const line2Opacity = useFadeIn(40, 18);
  const line3Opacity = useFadeIn(56, 18);
  const btnStyle = useSlideUp(68);
  const urlOpacity = useFadeIn(80, 18);

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

      {/* Staggered tagline */}
      <div
        style={{
          marginTop: 48,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 54,
          letterSpacing: "-0.03em",
          lineHeight: 1.35,
        }}
      >
        <div style={{ color: colors.textLight, opacity: taglineOpacity }}>
          Stop debating.
        </div>
        <div style={{ color: colors.sky, opacity: line2Opacity }}>
          Start knowing.
        </div>
        <div style={{ color: colors.amber, opacity: line3Opacity }}>
          Start shipping.
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
