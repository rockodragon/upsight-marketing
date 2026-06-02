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
  springConfident,
  springPop,
} from "../../lib/brand";

/**
 * Scene 7 — The Payoff (41-50s)
 *
 * "Find Customers Willing to Pay"
 * Three outcome cards cascade in with satisfying spring pops.
 * Clean, confident, outcome-focused.
 */

interface OutcomeCard {
  text: string;
  subtext: string;
  delay: number;
  accentColor: string;
}

const OUTCOMES: OutcomeCard[] = [
  {
    text: "Right customers, right questions",
    subtext: "Know who to talk to and what to ask",
    delay: 40,
    accentColor: colors.sky,
  },
  {
    text: "Evidence-backed decisions",
    subtext: "Every insight links back to source",
    delay: 60,
    accentColor: colors.amber,
  },
  {
    text: "Discovery to action, faster than ever",
    subtext: "Research that ships, not sits in a deck",
    delay: 80,
    accentColor: colors.green,
  },
];

export const SceneTS_Payoff: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Headline
  const headlineProgress = spring({
    frame: frame - 10,
    fps,
    config: springConfident,
  });
  const headlineY = interpolate(headlineProgress, [0, 1], [50, 0]);

  // Subline
  const sublineOpacity = interpolate(frame - 25, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sublineY = interpolate(frame - 25, [0, 20], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 120px",
      }}
    >
      {/* Headline */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 72,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          textAlign: "center",
          opacity: headlineProgress,
          transform: `translateY(${headlineY}px)`,
          marginBottom: 16,
        }}
      >
        Find Customers{" "}
        <span style={{ color: colors.amber }}>Willing to Pay</span>
      </div>

      {/* Subline */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 30,
          fontWeight: 400,
          color: colors.textDim,
          textAlign: "center",
          opacity: sublineOpacity,
          transform: `translateY(${sublineY}px)`,
          marginBottom: 60,
        }}
      >
        Build with conviction. Ship what matters.
      </div>

      {/* Three outcome cards — horizontal layout for widescreen */}
      <div
        style={{
          display: "flex",
          gap: 32,
          width: "100%",
          maxWidth: 1500,
        }}
      >
        {OUTCOMES.map((outcome, i) => {
          const cardProgress = spring({
            frame: frame - outcome.delay,
            fps,
            config: springPop,
          });

          const cardScale = interpolate(cardProgress, [0, 1], [0.7, 1]);
          const cardY = interpolate(cardProgress, [0, 1], [40, 0]);

          return (
            <div
              key={i}
              style={{
                flex: 1,
                opacity: cardProgress,
                transform: `translateY(${cardY}px) scale(${cardScale})`,
                background: "rgba(10, 10, 16, 0.6)",
                border: `1px solid ${outcome.accentColor}20`,
                borderTop: `3px solid ${outcome.accentColor}`,
                borderRadius: layout.radius + 4,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Main text */}
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 26,
                  fontWeight: 700,
                  color: colors.textLight,
                  lineHeight: 1.3,
                }}
              >
                {outcome.text}
              </div>

              {/* Subtext */}
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 18,
                  fontWeight: 400,
                  color: colors.textDim,
                  lineHeight: 1.4,
                }}
              >
                {outcome.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
