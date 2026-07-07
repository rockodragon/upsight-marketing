import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts } from "../../lib/brand";
import { MeetingPrepMockup } from "../../components/MeetingPrepMockup";
import { getScene } from "../../lib/script";

export const SceneHeroMeetingPrep: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("meeting-prep");

  const sceneFadeIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sceneFadeOut = interpolate(
    frame,
    [durationInFrames - 14, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneFadeIn * sceneFadeOut,
        padding: "0 60px",
      }}
    >
      <MeetingPrepMockup delay={8} />

      <div
        style={{
          position: "absolute",
          bottom: 56,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 48,
        }}
      >
        {(scene.proofLines ?? []).map((line, i) => {
          const progress = spring({
            frame: frame - 90 - i * 18,
            fps,
            config: { damping: 28, stiffness: 100, mass: 0.8 },
          });

          return (
            <div
              key={line}
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                fontWeight: 500,
                letterSpacing: "0.06em",
                color: colors.textDim,
                opacity: progress,
                transform: `translateY(${interpolate(progress, [0, 1], [16, 0])}px)`,
              }}
            >
              <span style={{ color: colors.amber }}>//</span> {line}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
