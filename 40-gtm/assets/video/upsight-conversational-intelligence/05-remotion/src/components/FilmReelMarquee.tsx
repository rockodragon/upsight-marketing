import React from "react";
import {
  Easing,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { colors, layout } from "../lib/brand";
import { isAudioClip, type SpeakerClip } from "../lib/clips";
import { SpeakerAvatar, SpeakerWaveform } from "./SpeakerWaveform";

type FilmReelMarqueeProps = {
  clips: SpeakerClip[];
  /** Distance from bottom edge when pinning the reel to the bottom */
  bottom?: number;
  /** Absolute top — ignored when `bottom` is set */
  y?: number;
  tileWidth?: number;
  tileHeight?: number;
  speedPxPerFrame?: number;
};

/**
 * Continuous horizontal film-reel strip of talking-head clips.
 * Prefer `bottom` so text/callouts can live in the upper canvas.
 */
export const FilmReelMarquee: React.FC<FilmReelMarqueeProps> = ({
  clips,
  bottom,
  y = 72,
  tileWidth = 220,
  tileHeight = 280,
  speedPxPerFrame = 3.6,
}) => {
  const frame = useCurrentFrame();

  const gap = 16;
  const unitWidth = tileWidth + gap;
  const loopClips = [...clips, ...clips, ...clips];
  const totalWidth = loopClips.length * unitWidth;
  const offset =
    clips.length > 0
      ? (frame * speedPxPerFrame) % (clips.length * unitWidth)
      : 0;

  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const pinToBottom = bottom !== undefined;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        ...(pinToBottom ? { bottom } : { top: y }),
        height: tileHeight + 28,
        opacity: fadeIn * 0.96,
        overflow: "hidden",
        zIndex: 8,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderTop: `1px solid ${colors.sky}33`,
          borderBottom: `1px solid ${colors.sky}33`,
          background:
            "linear-gradient(180deg, rgba(10,10,16,0.35) 0%, rgba(10,10,16,0.72) 100%)",
        }}
      />

      <div
        style={{
          display: "flex",
          gap,
          position: "absolute",
          top: 14,
          left: -offset,
          width: totalWidth,
        }}
      >
        {loopClips.map((clip, i) => {
          const portrait = /v1\.mov$/i.test(clip.file);
          return (
            <div
              key={`${clip.id}-${i}`}
              style={{
                width: tileWidth,
                height: tileHeight,
                flexShrink: 0,
                borderRadius: layout.radius,
                overflow: "hidden",
                border: `1px solid ${colors.sky}44`,
                boxShadow: "0 8px 24px rgba(0,0,0,0.45)",
                background: colors.bgDarkAlt,
              }}
            >
              {isAudioClip(clip) ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    padding: 10,
                    gap: 8,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <SpeakerAvatar name={clip.speaker} size={36} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <SpeakerWaveform bars={16} active />
                  </div>
                </div>
              ) : (
                <OffthreadVideo
                  src={staticFile(clip.file)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: portrait ? "center top" : "center center",
                  }}
                  muted
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
