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
 * Scene 3 — Brand Reveal (11-18s within composition)
 *
 * Constellation of data points converge to form the logo.
 * "UpSight" appears large. "Customer Intelligence. Powered by Agentic AI."
 * Ambient glow radiates outward. AI agent indicators pulse at edges.
 */

// Constellation dots that converge toward center
const CONSTELLATION_DOTS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  const radius = 300 + Math.random() * 250;
  return {
    startX: Math.cos(angle) * radius,
    startY: Math.sin(angle) * radius,
    size: 3 + Math.random() * 5,
    delay: Math.floor(Math.random() * 20),
  };
});

// Connection lines between random dot pairs
const CONNECTIONS = [
  [0, 3],
  [1, 7],
  [2, 11],
  [4, 9],
  [5, 14],
  [6, 18],
  [8, 20],
  [10, 15],
  [12, 22],
  [13, 19],
  [16, 23],
  [17, 21],
];

// AI agent indicators around the edges
const AGENT_INDICATORS = [
  { x: -780, y: -380, label: "analyzing" },
  { x: 720, y: -320, label: "discovering" },
  { x: -700, y: 340, label: "synthesizing" },
  { x: 760, y: 380, label: "connecting" },
];

export const SceneTS_BrandReveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: Dots visible & connected (0-40 frames)
  // Phase 2: Converge to center (40-70)
  // Phase 3: Logo + text appear (60-180)

  const convergeProgress = interpolate(frame, [40, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dotsOpacity = interpolate(frame, [0, 15, 60, 80], [0, 0.7, 0.7, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo reveal
  const logoProgress = spring({
    frame: frame - 60,
    fps,
    config: springPop,
  });

  const logoScale = interpolate(logoProgress, [0, 1], [0.3, 1]);
  const logoOpacity = interpolate(logoProgress, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Brand name
  const nameProgress = spring({
    frame: frame - 75,
    fps,
    config: springConfident,
  });

  // Tagline
  const taglineOpacity = interpolate(frame - 100, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const taglineY = interpolate(frame - 100, [0, 25], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Ambient glow expansion
  const glowScale = interpolate(frame, [60, 180], [0.5, 2.5], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const glowOpacity = interpolate(
    frame,
    [60, 90, 160, 180],
    [0, 0.25, 0.25, 0.15],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // AI indicator pulse
  const agentPulse = Math.sin(frame * 0.08) * 0.3 + 0.7;
  const agentOpacity = interpolate(frame - 110, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Constellation dots */}
      {CONSTELLATION_DOTS.map((dot, i) => {
        const dotEntryOpacity = interpolate(
          frame - dot.delay,
          [0, 10],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          },
        );
        const currentX = interpolate(convergeProgress, [0, 1], [dot.startX, 0]);
        const currentY = interpolate(convergeProgress, [0, 1], [dot.startY, 0]);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              width: dot.size,
              height: dot.size,
              borderRadius: "50%",
              background: i % 3 === 0 ? colors.amber : colors.sky,
              opacity: dotEntryOpacity * dotsOpacity,
              transform: `translate(${currentX}px, ${currentY}px)`,
              boxShadow: `0 0 ${dot.size * 3}px ${i % 3 === 0 ? colors.amberGlow : "rgba(56,189,248,0.3)"}`,
            }}
          />
        );
      })}

      {/* Connection lines */}
      <svg
        width="1920"
        height="1080"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          opacity: dotsOpacity * 0.4,
        }}
      >
        {CONNECTIONS.map(([a, b], i) => {
          const dotA = CONSTELLATION_DOTS[a];
          const dotB = CONSTELLATION_DOTS[b];
          const ax =
            interpolate(convergeProgress, [0, 1], [dotA.startX, 0]) + 960;
          const ay =
            interpolate(convergeProgress, [0, 1], [dotA.startY, 0]) + 540;
          const bx =
            interpolate(convergeProgress, [0, 1], [dotB.startX, 0]) + 960;
          const by =
            interpolate(convergeProgress, [0, 1], [dotB.startY, 0]) + 540;

          return (
            <line
              key={i}
              x1={ax}
              y1={ay}
              x2={bx}
              y2={by}
              stroke={colors.sky}
              strokeWidth={1}
              opacity={0.3}
            />
          );
        })}
      </svg>

      {/* Logo */}
      <Img
        src={staticFile("upsight-logo.png")}
        style={{
          width: 120,
          height: 120,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          filter: `drop-shadow(0 0 20px rgba(56, 189, 248, 0.4))`,
        }}
      />

      {/* Brand name */}
      <div
        style={{
          marginTop: 24,
          fontFamily: fonts.sans,
          fontSize: 88,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.04em",
          opacity: nameProgress,
          transform: `translateY(${interpolate(nameProgress, [0, 1], [30, 0])}px)`,
        }}
      >
        UpSight
      </div>

      {/* Tagline */}
      <div
        style={{
          marginTop: 16,
          fontFamily: fonts.sans,
          fontSize: 34,
          fontWeight: 500,
          color: colors.textDim,
          letterSpacing: "0.02em",
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
        }}
      >
        Customer Intelligence.{" "}
        <span style={{ color: colors.amber, fontWeight: 700 }}>
          Powered by Agentic AI.
        </span>
      </div>

      {/* AI agent indicators at edges */}
      {AGENT_INDICATORS.map((agent, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${agent.x}px), calc(-50% + ${agent.y}px))`,
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: agentOpacity * agentPulse,
          }}
        >
          {/* Pulsing dot */}
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: colors.green,
              boxShadow: `0 0 12px rgba(34, 197, 94, 0.6)`,
            }}
          />
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 400,
              color: colors.textDimAlt,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {agent.label}
          </span>
        </div>
      ))}
    </AbsoluteFill>
  );
};
