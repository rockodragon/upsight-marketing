import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, springConfident } from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";

/**
 * Scene 2 — The Real Problem (5-12s within composition)
 *
 * Three pain statements fly in staggered, each gets a red strikethrough.
 * Then "There's a better way." fades up in sky blue.
 */

const PAIN_POINTS = [
  "Building features nobody asked for",
  "Talking to the wrong people",
  "Guessing instead of knowing",
];

const PainLine: React.FC<{ text: string; index: number }> = ({
  text,
  index,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enterDelay = 15 + index * 30;
  const enterProgress = spring({
    frame: frame - enterDelay,
    fps,
    config: springConfident,
  });

  // Strikethrough appears shortly after entry
  const strikeDelay = enterDelay + 25;
  const strikeProgress = interpolate(frame - strikeDelay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Dim after strike
  const dimOpacity = interpolate(frame - strikeDelay, [10, 25], [1, 0.4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const slideX = interpolate(enterProgress, [0, 1], [-80, 0]);

  return (
    <div
      style={{
        position: "relative",
        fontFamily: fonts.sans,
        fontSize: 46,
        fontWeight: 700,
        color: colors.textLight,
        opacity: enterProgress * dimOpacity,
        transform: `translateX(${slideX}px)`,
        lineHeight: 1.4,
      }}
    >
      {text}
      {/* Red strikethrough line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          height: 4,
          background: colors.red,
          width: `${strikeProgress * 100}%`,
          borderRadius: 2,
          boxShadow: `0 0 20px rgba(239, 68, 68, 0.6)`,
        }}
      />
    </div>
  );
};

export const SceneTS_RealProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "There's a better way" appears after all strikethroughs
  const betterWayDelay = 130;
  const betterWayProgress = spring({
    frame: frame - betterWayDelay,
    fps,
    config: { damping: 24, stiffness: 100, mass: 0.9 },
  });

  const betterWayY = interpolate(betterWayProgress, [0, 1], [50, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 120,
      }}
    >
      <MonoLabel text="// the hard truth" delay={5} />

      <div
        style={{
          marginTop: 50,
          display: "flex",
          flexDirection: "column",
          gap: 28,
          alignItems: "flex-start",
        }}
      >
        {PAIN_POINTS.map((text, i) => (
          <PainLine key={i} text={text} index={i} />
        ))}
      </div>

      {/* "There's a better way." */}
      <div
        style={{
          marginTop: 72,
          fontFamily: fonts.sans,
          fontSize: 58,
          fontWeight: 900,
          color: colors.sky,
          letterSpacing: "-0.02em",
          opacity: betterWayProgress,
          transform: `translateY(${betterWayY}px)`,
          textShadow: `0 0 60px rgba(56, 189, 248, 0.3)`,
        }}
      >
        There's a better way.
      </div>
    </AbsoluteFill>
  );
};
