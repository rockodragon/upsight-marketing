import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useScalePop, useFadeIn, useSlideUp } from "../lib/animations";

export const SceneCTA: React.FC = () => {
  const logoStyle = useScalePop(8);
  const brandOpacity = useFadeIn(18, 15);
  const taglineOpacity = useFadeIn(24, 15);
  const btnStyle = useSlideUp(30);
  const urlOpacity = useFadeIn(36, 15);

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
        <Img
          src={staticFile("upsight-logo.png")}
          style={{ height: 110 }}
        />
      </div>

      {/* Brand name */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: 92,
          color: colors.textLight,
          letterSpacing: "-0.04em",
          marginTop: 24,
          opacity: brandOpacity,
        }}
      >
        UpSight
      </div>

      {/* Tagline */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 400,
          fontSize: 30,
          color: colors.textDim,
          marginTop: 8,
          opacity: taglineOpacity,
        }}
      >
        AI chatbots that{" "}
        <span style={{ color: colors.amber, fontWeight: 600 }}>
          convert higher
        </span>
      </div>

      {/* CTA Button */}
      <div
        style={{
          ...btnStyle,
          marginTop: 50,
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
        Start Free →
      </div>

      {/* URL */}
      <div
        style={{
          fontFamily: fonts.mono,
          marginTop: 22,
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
