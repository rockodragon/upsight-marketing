import React from "react";
import {
  Easing,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { isAudioClip, type SpeakerClip } from "../lib/clips";
import { SpeakerAvatar, SpeakerWaveform } from "./SpeakerWaveform";

type TalkingMediaTileProps = {
  clip: SpeakerClip;
  width: number;
  height: number;
  x: number;
  y: number;
  delay?: number;
  borderColor?: string;
  active?: boolean;
};

/**
 * Grows into frame — video clips play inside; audio clips show avatar + waveform.
 */
export const TalkingMediaTile: React.FC<TalkingMediaTileProps> = ({
  clip,
  width,
  height,
  x,
  y,
  delay = 0,
  borderColor = colors.sky,
  active = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audio = isAudioClip(clip);

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 140, mass: 0.75 },
  });

  const scale = interpolate(progress, [0, 1], [0.35, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const opacity = interpolate(progress, [0, 0.25], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width,
        height,
        opacity,
        scale,
        transformOrigin: "center center",
        borderRadius: layout.radius + 4,
        overflow: "hidden",
        border: `2px solid ${borderColor}`,
        boxShadow: `0 24px 60px rgba(0,0,0,0.65), 0 0 32px ${colors.amberGlow}`,
        zIndex: 10,
        background: colors.bgDarkAlt,
      }}
    >
      {audio ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: 16,
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SpeakerAvatar name={clip.speaker} size={48} />
            <div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 20,
                  fontWeight: 700,
                  color: colors.textLight,
                }}
              >
                {clip.speaker}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: colors.amber,
                }}
              >
                {clip.theme}
              </div>
            </div>
          </div>
          <div style={{ flex: 1, minHeight: 0 }}>
            <SpeakerWaveform active={active} />
          </div>
        </div>
      ) : (
        <OffthreadVideo
          src={staticFile(clip.file)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: clip.objectPosition,
          }}
          muted
        />
      )}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 6,
          background: `repeating-linear-gradient(90deg, ${colors.amber}88 0 8px, transparent 8px 16px)`,
          opacity: 0.5,
        }}
      />
    </div>
  );
};
