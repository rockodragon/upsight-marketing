import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";

const FRAGMENTS = [
  { label: "Sales call", x: -420, y: -180, rot: -8 },
  { label: "Support ticket", x: 380, y: -140, rot: 6 },
  { label: "Slack thread", x: -340, y: 120, rot: 4 },
  { label: "Zoom recording", x: 420, y: 80, rot: -5 },
  { label: "Notion doc", x: -80, y: -220, rot: -3 },
  { label: "Interview notes", x: 120, y: 200, rot: 7 },
];

/**
 * Scene 1 — The gap between conversations and the meeting.
 */
export const SceneHeroTension: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const line1 = spring({
    frame: frame - 8,
    fps,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  const line2 = spring({
    frame: frame - 35,
    fps,
    config: { damping: 28, stiffness: 120, mass: 0.8 },
  });

  const sceneFade = interpolate(
    frame,
    [durationInFrames - 12, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const fragmentFade = interpolate(frame, [55, 75], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneFade,
      }}
    >
      <MonoLabel text="// the gap" delay={4} />

      <div
        style={{
          marginTop: 36,
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 800,
          fontSize: 64,
          letterSpacing: "-0.03em",
          lineHeight: 1.2,
          maxWidth: 1100,
        }}
      >
        <div
          style={{
            color: colors.textLight,
            opacity: line1,
            transform: `translateY(${interpolate(line1, [0, 1], [40, 0])}px)`,
          }}
        >
          Your team has the conversations.
        </div>
        <div
          style={{
            marginTop: 12,
            color: colors.textDim,
            fontWeight: 500,
            fontSize: 42,
            opacity: line2,
            transform: `translateY(${interpolate(line2, [0, 1], [30, 0])}px)`,
          }}
        >
          The meeting still starts{" "}
          <span style={{ color: colors.amber, fontWeight: 700 }}>from scratch.</span>
        </div>
      </div>

      {/* Scattered conversation fragments */}
      <div style={{ position: "absolute", inset: 0, opacity: fragmentFade }}>
        {FRAGMENTS.map((f, i) => {
          const drift = Math.sin((frame + i * 20) * 0.04) * 6;
          const enter = spring({
            frame: frame - 18 - i * 6,
            fps,
            config: { damping: 24, stiffness: 100, mass: 0.9 },
          });

          return (
            <div
              key={f.label}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: `translate(${f.x}px, ${f.y + drift}px) rotate(${f.rot}deg)`,
                opacity: enter * 0.55,
                padding: "10px 18px",
                borderRadius: 8,
                background: colors.bgDarkAlt,
                border: "1px solid rgba(238,238,242,0.08)",
                fontFamily: fonts.mono,
                fontSize: 14,
                color: colors.textDimAlt,
                letterSpacing: "0.04em",
              }}
            >
              {f.label}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
