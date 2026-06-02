import React from "react";
import {
  AbsoluteFill,
  Video,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, springConfident } from "../../lib/brand";

/**
 * Scene 11 — Website Hero Video (65-79s)
 *
 * Plays the getupsight.com hero video full-bleed.
 * Fades in, plays through, fades out at the end for a clean loop back.
 */

export const SceneTS_WebHero: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Fade in over first 0.5s
  const fadeIn = interpolate(frame, [0, fps * 0.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Fade out over last 1s
  const fadeOut = interpolate(
    frame,
    [durationInFrames - fps, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  // Label slides in
  const labelProgress = spring({
    frame: frame - 15,
    fps,
    config: springConfident,
  });

  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut }}>
      {/* Full-bleed hero video */}
      <Video
        src={staticFile("tradeshow/getupsight-webhero.mp4")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Subtle bottom gradient for legibility */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
        }}
      />

      {/* URL label at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: labelProgress,
          transform: `translateY(${interpolate(labelProgress, [0, 1], [20, 0])}px)`,
        }}
      >
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 28,
            fontWeight: 600,
            color: colors.white,
            letterSpacing: "0.02em",
            textShadow: "0 2px 12px rgba(0,0,0,0.5)",
          }}
        >
          getupsight.com
        </span>
      </div>
    </AbsoluteFill>
  );
};
