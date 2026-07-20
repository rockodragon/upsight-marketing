import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import type { ReelSource, Snippet } from "../lib/script";

export const easeOut = { extrapolateLeft: "clamp" as const, extrapolateRight: "clamp" as const };

export const TransparentStage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill style={{ backgroundColor: "transparent" }}>{children}</AbsoluteFill>
);

export const SceneTitle: React.FC<{ text: string; opacity: number }> = ({
  text,
  opacity,
}) => (
  <div
    style={{
      position: "absolute",
      top: 56,
      left: 80,
      right: 80,
      opacity,
      fontFamily: fonts.sans,
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: "-0.02em",
      color: colors.textLight,
      textShadow: "0 2px 18px rgba(0,0,0,0.35)",
    }}
  >
    {text}
  </div>
);

export const DealtCard: React.FC<{
  snippet: Snippet;
  index: number;
  appearAt: number;
  width?: number;
  height?: number;
}> = ({ snippet, index, appearAt, width = 440, height = 280 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - appearAt,
    fps,
    config: { damping: 16, stiffness: 120, mass: 0.7 },
  });

  const restRotate = [-7, -2, 4, 8][index] ?? 0;
  const restX = [-18, 12, -8, 22][index] ?? 0;
  const restY = index * 28;

  const y = interpolate(progress, [0, 1], [-420 - index * 40, restY]);
  const rotate = interpolate(progress, [0, 1], [-18, restRotate]);
  const opacity = interpolate(progress, [0, 0.2, 1], [0, 1, 1]);
  const scale = interpolate(progress, [0, 1], [0.92, 1]);
  const isMeeting = /meeting-panel/i.test(snippet.file ?? "");

  return (
    <div
      style={{
        position: "absolute",
        left: 40 + restX,
        top: 40,
        width,
        height,
        borderRadius: layout.radius + 2,
        overflow: "hidden",
        border: "1px solid rgba(238,238,242,0.18)",
        boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
        opacity,
        transform: `translateY(${y}px) rotate(${rotate}deg) scale(${scale})`,
        zIndex: 10 + index,
        background: colors.bgDarkAlt,
      }}
    >
      {snippet.file && (snippet.kind === "video" || snippet.kind === "zoom") ? (
        <OffthreadVideo
          src={staticFile(snippet.file)}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: isMeeting ? "contain" : "cover",
            background: "#050508",
          }}
        />
      ) : snippet.kind === "note" ? (
        <NoteFill author={snippet.author} />
      ) : (
        <CallFill />
      )}

      <div
        style={{
          position: "absolute",
          left: 12,
          bottom: 12,
          fontFamily: fonts.mono,
          fontSize: 14,
          color: colors.textLight,
          background: "rgba(5,5,8,0.7)",
          borderRadius: 999,
          padding: "6px 12px",
          border: `1px solid ${colors.sky}44`,
        }}
      >
        {snippet.source}
      </div>
    </div>
  );
};

export const NoteFill: React.FC<{ author?: string }> = ({ author }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      padding: 28,
      background: "#14110c",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 10,
    }}
  >
    <div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.amber }}>
      NOTE
    </div>
    <div
      style={{
        fontFamily: fonts.sans,
        fontSize: 32,
        fontWeight: 700,
        color: colors.textLight,
      }}
    >
      {author ?? "Rep"}
    </div>
    <div style={{ fontFamily: fonts.sans, fontSize: 16, color: colors.textDim }}>
      Synced to CRM
    </div>
  </div>
);

export const CallFill: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#0c1018",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 5,
        padding: 40,
      }}
    >
      {Array.from({ length: 18 }).map((_, i) => {
        const h = Math.round(
          30 +
            120 *
              Math.abs(Math.sin((frame + i * 5) / 8) * Math.cos((frame + i) / 11)),
        );
        return (
          <div
            key={i}
            style={{
              width: 10,
              height: h,
              borderRadius: 3,
              background: i % 2 === 0 ? colors.sky : colors.amber,
            }}
          />
        );
      })}
    </div>
  );
};

/** Cuts faces together into one story reel player. */
export const CompositeReel: React.FC<{
  sources: ReelSource[];
  width?: number;
  height?: number;
  startFrame?: number;
  segmentFrames?: number;
  label?: string;
  compact?: boolean;
}> = ({
  sources,
  width = 720,
  height = 405,
  startFrame = 0,
  segmentFrames = 28,
  label = "Story reel",
  compact = false,
}) => {
  const frame = useCurrentFrame();
  const local = Math.max(0, frame - startFrame);
  const n = Math.max(sources.length, 1);
  const active = Math.floor(local / segmentFrames) % n;
  const within = local % segmentFrames;
  const cross = interpolate(within, [0, 6, segmentFrames - 6, segmentFrames], [0, 1, 1, 0], easeOut);
  const progress = (local % (segmentFrames * n)) / (segmentFrames * n);

  return (
    <div
      style={{
        width,
        height,
        borderRadius: layout.radius + 4,
        overflow: "hidden",
        border: `1px solid ${colors.amber}66`,
        boxShadow: "0 22px 60px rgba(0,0,0,0.4)",
        background: colors.bgDark,
        position: "relative",
      }}
    >
      {sources.map((src, i) => {
        const isActive = i === active;
        return (
          <div
            key={src.id}
            style={{
              position: "absolute",
              inset: 0,
              opacity: isActive ? cross : 0,
            }}
          >
            <OffthreadVideo
              src={staticFile(src.file)}
              muted
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        );
      })}

      <div
        style={{
          position: "absolute",
          left: 14,
          top: 14,
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: fonts.mono,
          fontSize: compact ? 12 : 14,
          color: colors.textLight,
          background: "rgba(5,5,8,0.72)",
          borderRadius: 999,
          padding: "6px 12px",
          border: `1px solid ${colors.amber}55`,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: colors.amber,
          }}
        />
        {label}
      </div>

      <div
        style={{
          position: "absolute",
          left: 14,
          bottom: 14,
          right: 14,
          height: 4,
          borderRadius: 999,
          background: "rgba(238,238,242,0.2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress * 100}%`,
            height: "100%",
            background: colors.amber,
          }}
        />
      </div>

      {!compact && (
        <div
          style={{
            position: "absolute",
            right: 14,
            top: 14,
            fontFamily: fonts.sans,
            fontSize: 14,
            fontWeight: 600,
            color: colors.textLight,
            background: "rgba(5,5,8,0.65)",
            borderRadius: 8,
            padding: "6px 10px",
          }}
        >
          {sources[active]?.name ?? ""}
        </div>
      )}
    </div>
  );
};
