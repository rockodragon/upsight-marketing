import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors, fonts } from "../lib/brand";

type SpeakerWaveformProps = {
  bars?: number;
  active?: boolean;
  color?: string;
};

/**
 * Frame-animated waveform — reads as "audio playing" in audio-only tiles.
 */
export const SpeakerWaveform: React.FC<SpeakerWaveformProps> = ({
  bars = 24,
  active = true,
  color = colors.sky,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        height: "100%",
        width: "100%",
        padding: "0 16px",
      }}
    >
      {Array.from({ length: bars }).map((_, i) => {
        const phase = frame * 0.35 + i * 0.55;
        const height = active
          ? interpolate(
              Math.sin(phase) * 0.5 + Math.sin(phase * 1.7) * 0.3 + 0.5,
              [0, 1],
              [8, 56],
            )
          : 8;

        return (
          <div
            key={i}
            style={{
              width: 4,
              height,
              borderRadius: 2,
              background: `linear-gradient(180deg, ${color} 0%, ${colors.amber}88 100%)`,
              opacity: active ? 0.85 : 0.35,
            }}
          />
        );
      })}
    </div>
  );
};

type SpeakerAvatarProps = {
  name: string;
  size?: number;
};

export const SpeakerAvatar: React.FC<SpeakerAvatarProps> = ({
  name,
  size = 72,
}) => {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${colors.sky}33 0%, ${colors.amber}44 100%)`,
        border: `2px solid ${colors.sky}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.sans,
        fontSize: size * 0.32,
        fontWeight: 800,
        color: colors.textLight,
        flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
};
