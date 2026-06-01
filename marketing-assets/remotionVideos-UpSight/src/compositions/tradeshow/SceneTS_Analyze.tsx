import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, layout, springConfident } from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";

/**
 * Scene 6 — Analyze: From Noise to Signal (33-42s)
 *
 * Single-focus sequential reveal:
 *   Phase 1: Headline
 *   Phase 2: Scattered quotes float and drift (centered chaos)
 *   Phase 3: Quotes compress/fade → clean theme bars emerge in place
 *   Phase 4: Summary badge appears as takeaway
 */

const RAW_QUOTES = [
  { text: '"setup was confusing"', y: -120, x: -200, rot: -8 },
  { text: '"love the AI features"', y: -60, x: 160, rot: 5 },
  { text: '"pricing feels high"', y: 10, x: -120, rot: -4 },
  { text: '"took 20 min to onboard"', y: 80, x: 200, rot: 7 },
  { text: '"need team sharing"', y: 150, x: -180, rot: -6 },
  { text: '"almost churned week 2"', y: -180, x: 60, rot: 3 },
];

const THEMES = [
  { name: "Onboarding Friction", count: 47, percentage: 85, color: colors.sky },
  { name: "Pricing Concerns", count: 38, percentage: 69, color: colors.amber },
  { name: "Feature Requests", count: 29, percentage: 53, color: colors.green },
  { name: "Churn Risk", count: 21, percentage: 38, color: colors.red },
];

export const SceneTS_Analyze: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Quotes visible phase (frames 15-120), then fade
  const quotesOpacity = interpolate(
    frame,
    [15, 30, 100, 130],
    [0, 0.8, 0.8, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // Theme bars emerge after quotes fade
  const themesProgress = interpolate(frame, [125, 145], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Summary badge
  const summaryOpacity = interpolate(frame - 210, [0, 20], [0, 1], {
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
      <MonoLabel text="// analyze" delay={5} />

      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 56,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          marginTop: 24,
          marginBottom: 48,
          textAlign: "center",
          opacity: headlineOpacity,
        }}
      >
        From <span style={{ color: colors.red }}>Noise</span> to{" "}
        <span style={{ color: colors.sky }}>Signal</span>
      </div>

      {/* Central area — quotes first, then themes */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 800,
          height: 380,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Floating quotes (chaos phase) */}
        {RAW_QUOTES.map((q, i) => {
          const floatY = Math.sin((frame + i * 40) * 0.04) * 10;
          const floatX = Math.cos((frame + i * 25) * 0.03) * 6;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                fontFamily: fonts.sans,
                fontSize: 17,
                fontWeight: 500,
                color: colors.textDim,
                background: "rgba(10, 10, 16, 0.7)",
                border: "1px solid rgba(238,238,242,0.06)",
                padding: "10px 18px",
                borderRadius: 8,
                opacity: quotesOpacity,
                transform: `translate(${q.x + floatX}px, ${q.y + floatY}px) rotate(${q.rot}deg)`,
                whiteSpace: "nowrap",
              }}
            >
              {q.text}
            </div>
          );
        })}

        {/* Theme bars (signal phase) — appear in same space */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: 700,
            display: "flex",
            flexDirection: "column",
            gap: 20,
            opacity: themesProgress,
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 14,
              fontWeight: 500,
              color: colors.textDimAlt,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 4,
              opacity: interpolate(frame - 130, [0, 15], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Emerging Themes
          </div>

          {THEMES.map((theme, i) => {
            const barDelay = 135 + i * 15;
            const barProgress = spring({
              frame: frame - barDelay,
              fps,
              config: { damping: 20, stiffness: 60, mass: 1.2 },
            });

            const barOpacity = interpolate(frame - barDelay, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div key={i} style={{ opacity: barOpacity }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 19,
                      fontWeight: 600,
                      color: colors.textLight,
                    }}
                  >
                    {theme.name}
                  </span>
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 16,
                      fontWeight: 500,
                      color: theme.color,
                    }}
                  >
                    {theme.count} mentions
                  </span>
                </div>
                <div
                  style={{
                    height: 8,
                    background: "rgba(238,238,242,0.06)",
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${theme.percentage * barProgress}%`,
                      background: `linear-gradient(90deg, ${theme.color}, ${theme.color}88)`,
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary badge */}
      <div
        style={{
          marginTop: 24,
          padding: "12px 28px",
          borderRadius: 24,
          background: "rgba(56, 189, 248, 0.08)",
          border: "1px solid rgba(56, 189, 248, 0.15)",
          fontFamily: fonts.mono,
          fontSize: 15,
          color: colors.sky,
          opacity: summaryOpacity,
        }}
      >
        135 receipts auto-extracted across 23 conversations
      </div>
    </AbsoluteFill>
  );
};
