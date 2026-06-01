import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts } from "../lib/brand";
import { useSlideUp, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: "You have a community. Do you really know them?"
 * Opens with community icons, then the provocative question.
 */

const COMMUNITY_ROLES = [
  { emoji: "👩‍💻", label: "Developers" },
  { emoji: "🎤", label: "Organizers" },
  { emoji: "🤝", label: "Volunteers" },
  { emoji: "🌍", label: "Members" },
];

export const SceneCommunityQuestion: React.FC = () => {
  const questionStyle = useSlideUp(30, 60);
  const subOpacity = useFadeIn(70, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// your community" delay={5} />

      {/* Role badges */}
      <div
        style={{
          display: "flex",
          gap: 24,
          marginTop: 40,
          marginBottom: 48,
        }}
      >
        {COMMUNITY_ROLES.map((role, i) => {
          const opacity = useFadeIn(12 + i * 12, 15);
          return (
            <div
              key={i}
              style={{
                opacity,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "2px solid rgba(56, 189, 248, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 34,
                }}
              >
                {role.emoji}
              </div>
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 14,
                  color: colors.textDimAlt,
                }}
              >
                {role.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Main question */}
      <div
        style={{
          ...questionStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 56,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          lineHeight: 1.25,
        }}
      >
        Do you <span style={{ color: colors.sky }}>really</span>
        <br />
        know them?
      </div>

      {/* Subtext */}
      <div
        style={{
          marginTop: 32,
          fontFamily: fonts.sans,
          fontSize: 22,
          color: colors.textDim,
          textAlign: "center",
          opacity: subOpacity,
        }}
      >
        What they need. What they struggle with. What they'd champion.
      </div>
    </AbsoluteFill>
  );
};
