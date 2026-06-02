import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import {
  colors,
  fonts,
  layout,
  springPop,
  springConfident,
} from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";

/**
 * Scene 7 — Integrations (38-44s)
 *
 * "Customer Intelligence Where You Work"
 * Integration badges for Claude, ChatGPT, OpenClaw via MCP.
 */

interface Integration {
  name: string;
  icon: React.ReactNode;
  delay: number;
  color: string;
}

/* ── Inline SVG logos ── */

/* ── Text-based logos — clean, large, readable ── */

const INTEGRATIONS: Integration[] = [
  {
    name: "Claude",
    icon: (
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: 36,
          fontWeight: 800,
          color: "#d4a27f",
        }}
      >
        Claude
      </span>
    ),
    delay: 40,
    color: "#d4a27f",
  },
  {
    name: "ChatGPT",
    icon: (
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: 36,
          fontWeight: 800,
          color: "#10a37f",
        }}
      >
        ChatGPT
      </span>
    ),
    delay: 55,
    color: "#10a37f",
  },
  {
    name: "OpenClaw",
    icon: (
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: 36,
          fontWeight: 800,
          color: "#f59e0b",
        }}
      >
        OpenClaw
      </span>
    ),
    delay: 70,
    color: "#f59e0b",
  },
];

export const SceneTS_Integrations: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // UpSight central node
  const centerProgress = spring({
    frame: frame - 25,
    fps,
    config: springPop,
  });

  // Subtext
  const subtextOpacity = interpolate(frame - 120, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 120px",
        flexDirection: "column",
      }}
    >
      <MonoLabel text="// MCP integrations" delay={5} />

      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 56,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          marginTop: 24,
          marginBottom: 60,
          textAlign: "center",
          opacity: headlineOpacity,
        }}
      >
        Customer Intelligence{" "}
        <span style={{ color: colors.amber }}>Via MCP</span>
      </div>

      {/* Integration hub layout */}
      <div
        style={{
          position: "relative",
          width: 900,
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Central UpSight node */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: centerProgress,
            transform: `scale(${interpolate(centerProgress, [0, 1], [0.6, 1])})`,
            zIndex: 2,
          }}
        >
          <div
            style={{
              padding: "20px 36px",
              borderRadius: 18,
              background: colors.bgDarkAlt,
              border: `2px solid ${colors.sky}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.sans,
              fontSize: 32,
              fontWeight: 800,
              color: colors.sky,
              boxShadow: `0 0 40px rgba(56, 189, 248, 0.25)`,
            }}
          >
            UpSight
          </div>
        </div>

        {/* Integration badges — spread horizontally */}
        {INTEGRATIONS.map((intg, i) => {
          const progress = spring({
            frame: frame - intg.delay,
            fps,
            config: springPop,
          });

          const scale = interpolate(progress, [0, 1], [0.5, 1]);

          // Position 3 badges in an arc around center
          const positions = [
            { x: -320, y: -20 },
            { x: 0, y: 80 },
            { x: 320, y: -20 },
          ];
          const pos = positions[i];

          // Connection line from badge to center
          const lineOpacity = interpolate(progress, [0.5, 1], [0, 0.4], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          });

          return (
            <React.Fragment key={i}>
              {/* Connection line */}
              <svg
                width="900"
                height="300"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: lineOpacity,
                  zIndex: 1,
                }}
              >
                <line
                  x1={450 + pos.x}
                  y1={150 + pos.y}
                  x2={450}
                  y2={150}
                  stroke={intg.color}
                  strokeWidth={2}
                  strokeDasharray="6 4"
                />
              </svg>

              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  left: `calc(50% + ${pos.x}px)`,
                  top: `calc(50% + ${pos.y}px)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  opacity: progress,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 2,
                  padding: "20px 36px",
                  borderRadius: 18,
                  background: colors.bgDarkAlt,
                  border: `1.5px solid ${intg.color}40`,
                  boxShadow: `0 0 30px ${intg.color}20`,
                }}
              >
                {intg.icon}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Subtext */}
      <div
        style={{
          marginTop: 40,
          fontFamily: fonts.sans,
          fontSize: 26,
          fontWeight: 500,
          color: colors.textDim,
          textAlign: "center",
          opacity: subtextOpacity,
          lineHeight: 1.4,
        }}
      >
        Connect UpSight to your AI tools via{" "}
        <span style={{ color: colors.sky, fontWeight: 700 }}>
          Model Context Protocol
        </span>
      </div>
    </AbsoluteFill>
  );
};
