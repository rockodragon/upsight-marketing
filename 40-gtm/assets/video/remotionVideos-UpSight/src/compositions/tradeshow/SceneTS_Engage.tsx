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
import { MonoLabel } from "../../components/MonoLabel";

/**
 * Scene 5 — Engage: Smart Surveys (25-32s)
 *
 * Single-focus sequential reveal:
 *   Phase 1: Headline
 *   Phase 2: Survey questions appear with actual responses filling in
 *   Phase 3: Questions compress upward
 *   Phase 4: Living profile card emerges centered on screen
 */

interface SurveyQuestion {
  type: string;
  question: string;
  response: string;
  delay: number;
  typeColor: string;
}

const SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    type: "rating",
    question: "How easy was onboarding?",
    response: "2 out of 5",
    delay: 30,
    typeColor: colors.amber,
  },
  {
    type: "open-ended",
    question: "What almost made you quit?",
    response: '"Too many steps before I could see any value..."',
    delay: 60,
    typeColor: colors.sky,
  },
  {
    type: "multiple choice",
    question: "Which feature matters most?",
    response: "Guided interviews",
    delay: 90,
    typeColor: colors.green,
  },
];

interface ProfileField {
  label: string;
  value: string;
  valueColor: string;
}

const PROFILE_FIELDS: ProfileField[] = [
  { label: "Role", value: "Product Manager", valueColor: colors.textLight },
  {
    label: "Company Size",
    value: "25-50 employees",
    valueColor: colors.textLight,
  },
  {
    label: "Top Pain Point",
    value: "Onboarding friction",
    valueColor: colors.sky,
  },
  { label: "Willingness to Pay", value: "High", valueColor: colors.green },
  {
    label: "Interview Priority",
    value: "Recommended",
    valueColor: colors.amber,
  },
];

export const SceneTS_Engage: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Headline fades in, then fades out with the questions
  const headlineFadeIn = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineFadeOut = interpolate(frame, [130, 150], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headlineOpacity = headlineFadeIn * headlineFadeOut;

  // Compression: questions shrink and fade
  const compressProgress = interpolate(frame, [130, 155], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Profile reveal — positioned to appear centered on screen
  const profileProgress = spring({
    frame: frame - 155,
    fps,
    config: springConfident,
  });
  const profileY = interpolate(profileProgress, [0, 1], [40, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 120px",
        flexDirection: "column",
      }}
    >
      <div style={{ opacity: headlineFadeOut }}>
        <MonoLabel text="// engage" delay={5} />
      </div>

      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 56,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          marginTop: 20,
          marginBottom: 36,
          textAlign: "center",
          opacity: headlineOpacity,
        }}
      >
        Surveys That <span style={{ color: colors.amber }}>Adapt</span> and{" "}
        <span style={{ color: colors.amber }}>Listen</span>
      </div>

      {/* Survey questions — centered, one at a time */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "center",
          width: "100%",
          maxWidth: 700,
          opacity: interpolate(compressProgress, [0, 0.5, 1], [1, 0.5, 0]),
          transform: `scale(${interpolate(compressProgress, [0, 1], [1, 0.85])}) translateY(${interpolate(compressProgress, [0, 1], [0, -60])}px)`,
        }}
      >
        {SURVEY_QUESTIONS.map((q, i) => {
          const qProgress = spring({
            frame: frame - q.delay,
            fps,
            config: springConfident,
          });

          // Response text appears after question
          const responseDelay = q.delay + 18;
          const responseOpacity = interpolate(
            frame - responseDelay,
            [0, 15],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );

          return (
            <div
              key={i}
              style={{
                opacity: qProgress,
                transform: `translateY(${interpolate(qProgress, [0, 1], [20, 0])}px)`,
                background: colors.bgDarkAlt,
                border: "1px solid rgba(238,238,242,0.06)",
                borderRadius: layout.radius + 2,
                padding: "18px 26px",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 6,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 11,
                      fontWeight: 500,
                      color: q.typeColor,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: `${q.typeColor}15`,
                      padding: "2px 8px",
                      borderRadius: 4,
                    }}
                  >
                    {q.type}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 20,
                    fontWeight: 600,
                    color: colors.textLight,
                  }}
                >
                  {q.question}
                </div>
              </div>

              {/* Actual response value */}
              <div
                style={{
                  opacity: responseOpacity,
                  fontFamily: q.type === "open-ended" ? fonts.sans : fonts.mono,
                  fontSize: q.type === "open-ended" ? 15 : 16,
                  fontWeight: q.type === "open-ended" ? 400 : 600,
                  fontStyle: q.type === "open-ended" ? "italic" : "normal",
                  color: q.typeColor,
                  maxWidth: 220,
                  textAlign: "right",
                  lineHeight: 1.3,
                }}
              >
                {q.response}
              </div>
            </div>
          );
        })}
      </div>

      {/* Living profile — appears after questions compress */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: `translateY(calc(-50% + ${profileY}px))`,
          opacity: profileProgress,
          width: "100%",
          maxWidth: 700,
          background: "rgba(10, 10, 16, 0.7)",
          border: "1px solid rgba(245, 158, 11, 0.12)",
          borderRadius: layout.radius + 4,
          padding: "28px 32px",
        }}
      >
        {/* Profile header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${colors.sky}30, ${colors.amber}30)`,
              border: `2px solid ${colors.amber}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.sans,
              fontSize: 18,
              fontWeight: 700,
              color: colors.textLight,
            }}
          >
            JC
          </div>
          <div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 20,
                fontWeight: 700,
                color: colors.textLight,
              }}
            >
              Jane Chen
            </div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 13,
                color: colors.amber,
                letterSpacing: "0.05em",
              }}
            >
              Living Profile — built from 247 responses
            </div>
          </div>
        </div>

        {/* Profile fields appear sequentially */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {PROFILE_FIELDS.map((field, i) => {
            const fieldProgress = spring({
              frame: frame - (165 + i * 8),
              fps,
              config: springPop,
            });

            return (
              <div
                key={i}
                style={{
                  opacity: fieldProgress,
                  transform: `translateX(${interpolate(fieldProgress, [0, 1], [15, 0])}px)`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "7px 14px",
                  background: "rgba(238,238,242,0.03)",
                  borderRadius: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 14,
                    color: colors.textDimAlt,
                  }}
                >
                  {field.label}
                </span>
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 16,
                    fontWeight: 600,
                    color: field.valueColor,
                  }}
                >
                  {field.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
