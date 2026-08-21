import React from "react";
import {
  OffthreadVideo,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import {
  isAudioClip,
  isCallClip,
  type SpeakerClip,
} from "../lib/clips";
import { SpeakerAvatar, SpeakerWaveform } from "./SpeakerWaveform";

type FilmReelMarqueeProps = {
  clips: SpeakerClip[];
  bottom?: number;
  y?: number;
  tileWidth?: number;
  tileHeight?: number;
  speedPxPerFrame?: number;
};

/** Vibrant animated bars — same treatment as CI-v2 Support call cards */
const SupportCallBars: React.FC = () => {
  const frame = useCurrentFrame();
  const bars = 16;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "24px 18px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 14,
        background: "#0c1018",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 5,
          height: "70%",
          minHeight: 80,
        }}
      >
        {Array.from({ length: bars }).map((_, i) => {
          const h = Math.round(
            22 +
              70 *
                (0.3 +
                  0.7 *
                    Math.abs(
                      Math.sin((frame + i * 7) / 9) *
                        Math.cos((frame + i * 3) / 14),
                    )),
          );
          return (
            <div
              key={i}
              style={{
                width: 8,
                height: h,
                borderRadius: 2,
                background: i % 3 === 0 ? colors.amber : colors.sky,
                opacity: 0.92,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const TileLabel: React.FC<{ text: string }> = ({ text }) => (
  <div
    style={{
      position: "absolute",
      left: 10,
      bottom: 10,
      zIndex: 2,
      fontFamily: fonts.mono,
      fontSize: 14,
      letterSpacing: "0.04em",
      color: colors.ink,
      background: "rgba(238,238,242,0.94)",
      border: `1px solid ${colors.rule}`,
      borderRadius: 999,
      padding: "6px 12px",
    }}
  >
    {text}
  </div>
);

/**
 * Continuous horizontal film-reel. Tiles are sized so the unique clip set is at
 * least as wide as the frame — no person appears twice on screen at once.
 */
export const FilmReelMarquee: React.FC<FilmReelMarqueeProps> = ({
  clips,
  bottom,
  y = 72,
  tileWidth: preferredTileWidth = 220,
  tileHeight = 280,
  speedPxPerFrame = 3.6,
}) => {
  const frame = useCurrentFrame();
  const { width: frameWidth } = useVideoConfig();

  const gap = 16;
  const n = clips.length;
  const minTileWidth =
    n > 0 ? Math.ceil((frameWidth + gap) / n) - gap : preferredTileWidth;
  const tileWidth = Math.max(preferredTileWidth, minTileWidth);
  const unitWidth = tileWidth + gap;
  const setWidth = n * unitWidth;

  const loopClips = [...clips, ...clips];
  const totalWidth = loopClips.length * unitWidth;
  const offset = n > 0 ? (frame * speedPxPerFrame) % setWidth : 0;

  const pinToBottom = bottom !== undefined;

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        ...(pinToBottom ? { bottom } : { top: y }),
        height: tileHeight + 28,
        opacity: 0.96,
        overflow: "hidden",
        zIndex: 8,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderTop: `1px solid ${colors.rule}`,
          borderBottom: `1px solid ${colors.rule}`,
          background:
            "linear-gradient(180deg, rgba(238,238,242,0.35) 0%, rgba(238,238,242,0.85) 100%)",
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
          const fit = clip.objectFit ?? "cover";
          return (
            <div
              key={`${clip.id}-${i}`}
              style={{
                width: tileWidth,
                height: tileHeight,
                flexShrink: 0,
                borderRadius: layout.radius,
                overflow: "hidden",
                border: `1px solid ${colors.rule}`,
                boxShadow: "0 8px 24px rgba(5,5,8,0.12)",
                background: colors.card,
                position: "relative",
              }}
            >
              {isCallClip(clip) ? (
                <SupportCallBars />
              ) : isAudioClip(clip) ? (
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
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: colors.bgDark,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <OffthreadVideo
                    src={staticFile(clip.file)}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: fit,
                      objectPosition: clip.objectPosition,
                    }}
                    muted
                  />
                </div>
              )}
              {clip.label ? <TileLabel text={clip.label} /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
