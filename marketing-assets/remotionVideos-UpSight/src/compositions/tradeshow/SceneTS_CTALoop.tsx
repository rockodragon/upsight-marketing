import React from "react";
import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, springPop, springConfident } from "../../lib/brand";

/**
 * Scene 8 — CTA with QR Code (45-60s)
 *
 * Logo + brand name appear, then QR code scales in prominently.
 * Holds for ~15 seconds so people at the trade show have time to scan.
 * "Scan to get started" + getupsight.com below.
 */

export const SceneTS_CTALoop: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo entrance
  const logoProgress = spring({
    frame: frame - 10,
    fps,
    config: springPop,
  });

  // Brand name
  const nameProgress = spring({
    frame: frame - 25,
    fps,
    config: springConfident,
  });

  // QR code entrance — slightly delayed for drama
  const qrProgress = spring({
    frame: frame - 45,
    fps,
    config: springPop,
  });
  const qrScale = interpolate(qrProgress, [0, 1], [0.5, 1]);

  // Tagline
  const taglineOpacity = interpolate(frame - 60, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // URL
  const urlOpacity = interpolate(frame - 75, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle breathing on QR code to draw attention
  const breathe = frame > 80 ? Math.sin((frame - 80) * 0.04) * 0.02 + 1 : 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left side: Brand */}
      <div
        style={{
          position: "absolute",
          left: 160,
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        {/* Logo + brand name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Img
            src={staticFile("upsight-logo.png")}
            style={{
              width: 80,
              height: 80,
              opacity: logoProgress,
              transform: `scale(${interpolate(logoProgress, [0, 1], [0.5, 1])})`,
              filter: `drop-shadow(0 0 15px rgba(56, 189, 248, 0.3))`,
            }}
          />
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 64,
              fontWeight: 900,
              color: colors.textLight,
              letterSpacing: "-0.04em",
              opacity: nameProgress,
            }}
          >
            UpSight
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 28,
            fontWeight: 500,
            color: colors.textDim,
            opacity: taglineOpacity,
            marginTop: 8,
          }}
        >
          Get your customers.{" "}
          <span style={{ color: colors.amber, fontWeight: 700 }}>
            Build conviction.
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 22,
            fontWeight: 500,
            color: colors.sky,
            opacity: urlOpacity,
            letterSpacing: "0.02em",
            marginTop: 4,
          }}
        >
          getupsight.com
        </div>
      </div>

      {/* Right side: QR Code — large and prominent */}
      <div
        style={{
          position: "absolute",
          right: 120,
          top: "50%",
          transform: `translateY(-50%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          opacity: qrProgress,
        }}
      >
        {/* QR code container with white background */}
        <div
          style={{
            background: colors.white,
            borderRadius: 20,
            padding: 32,
            transform: `scale(${qrScale * breathe})`,
            boxShadow: `0 0 60px rgba(56, 189, 248, 0.15), 0 20px 60px rgba(0,0,0,0.4)`,
          }}
        >
          <Img
            src={staticFile("tradeshow/qr-code.png")}
            style={{
              width: 560,
              height: 560,
              display: "block",
            }}
          />
        </div>

        {/* Scan prompt */}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 600,
            color: colors.textLight,
            opacity: interpolate(frame - 70, [0, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            textAlign: "center",
          }}
        >
          Scan to get started
        </div>
      </div>
    </AbsoluteFill>
  );
};
