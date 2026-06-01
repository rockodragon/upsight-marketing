import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts } from "../../lib/brand";

/**
 * Scene 1 — Opening Tension (0-6s)
 *
 * Power opening: "Code is cheap. Conviction is expensive."
 * Then the killer double-meaning: "GET YOUR CUSTOMERS" (big)
 * "to get your customers." (reveals the double meaning)
 *
 * Grabs attention from 10+ feet away at a trade show.
 */

export const SceneTS_OpeningTension: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Phase 1: "Code is cheap." slams in (frames 0-30)
  const cheapProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 200, mass: 0.6 },
  });

  // Phase 2: "Conviction is expensive." (frames 30-60)
  const convictionProgress = spring({
    frame: frame - 35,
    fps,
    config: { damping: 20, stiffness: 200, mass: 0.6 },
  });

  // Phase 3: Both statements fade out (frames 85-100)
  const setupFade = interpolate(frame, [85, 100], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Phase 4: "GET YOUR CUSTOMERS" explosion (frames 100-130)
  const heroProgress = spring({
    frame: frame - 105,
    fps,
    config: { damping: 16, stiffness: 160, mass: 0.7 },
  });
  const heroScale = interpolate(heroProgress, [0, 1], [0.4, 1]);

  // Phase 5: "to get your customers." reveal (frames 130-155)
  const sublineOpacity = interpolate(frame - 135, [0, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const sublineY = interpolate(frame - 135, [0, 20], [25, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Amber energy burst on hero reveal
  const burstScale = interpolate(frame - 100, [0, 40], [0.3, 4], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const burstOpacity = interpolate(
    frame - 100,
    [0, 10, 35, 45],
    [0, 0.3, 0.3, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // Subtle breathing pulse on the hero text
  const breathe = frame > 130 ? Math.sin((frame - 130) * 0.05) * 0.015 + 1 : 1;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Amber energy burst */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(245,158,11,0.2) 0%, rgba(56,189,248,0.06) 40%, transparent 65%)`,
          transform: `scale(${burstScale})`,
          opacity: burstOpacity,
        }}
      />

      {/* Setup lines: "Code is cheap." + "Conviction is expensive." */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          opacity: setupFade,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 72,
            fontWeight: 900,
            color: colors.textLight,
            letterSpacing: "-0.03em",
            opacity: cheapProgress,
            transform: `translateY(${interpolate(cheapProgress, [0, 1], [40, 0])}px)`,
          }}
        >
          Code is cheap.
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 72,
            fontWeight: 900,
            color: colors.amber,
            letterSpacing: "-0.03em",
            opacity: convictionProgress,
            transform: `translateY(${interpolate(convictionProgress, [0, 1], [40, 0])}px)`,
          }}
        >
          Conviction is expensive.
        </div>
      </div>

      {/* Hero: "GET YOUR CUSTOMERS" */}
      <div
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 110,
            fontWeight: 900,
            color: colors.textLight,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
            opacity: heroProgress,
            transform: `scale(${heroScale * breathe})`,
            textShadow: `0 0 80px rgba(245, 158, 11, ${0.3 * heroProgress}), 0 0 160px rgba(56, 189, 248, ${0.15 * heroProgress})`,
          }}
        >
          Get Your Customers
        </div>

        {/* "to get your customers." — the double meaning */}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 38,
            fontWeight: 500,
            color: colors.textDim,
            letterSpacing: "0.02em",
            fontStyle: "italic",
            opacity: sublineOpacity,
            transform: `translateY(${sublineY}px)`,
          }}
        >
          to get{" "}
          <span
            style={{ color: colors.sky, fontWeight: 700, fontStyle: "normal" }}
          >
            your customers.
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
