import React from "react";
import {
  Easing,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import type { Snippet } from "../lib/script";

/** Fewer, larger cards with clearer breathing room */
const CARD_H = 210;
const GAP = 28;
const UNIT = CARD_H + GAP;
const FEED_W = 480;
/** Whole pixels per frame — avoids subpixel marquee jitter */
const SPEED_PX = 1;

type SnippetFeedProps = {
  snippets: Snippet[];
};

/**
 * Vertical feed of mixed source types — stable pixel scroll, no lateral drift.
 */
export const SnippetFeed: React.FC<SnippetFeedProps> = ({ snippets }) => {
  const frame = useCurrentFrame();
  const loop = [...snippets, ...snippets];
  const loopHeight = snippets.length * UNIT;
  // Integer scroll only — fractional translateY is what read as jitter
  const scroll = (frame * SPEED_PX) % loopHeight;

  const fadeIn = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        width: FEED_W,
        height: 760,
        opacity: fadeIn,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 56,
          background: "linear-gradient(180deg, #050508 0%, transparent 100%)",
          zIndex: 4,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 72,
          background: "linear-gradient(0deg, #050508 0%, transparent 100%)",
          zIndex: 4,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: GAP,
          transform: `translateY(${-scroll}px)`,
          willChange: "transform",
        }}
      >
        {loop.map((snippet, i) => (
          <SnippetCard key={`${snippet.id}-${i}`} snippet={snippet} />
        ))}
      </div>
    </div>
  );
};

const SnippetCard: React.FC<{ snippet: Snippet }> = ({ snippet }) => {
  return (
    <div
      style={{
        height: CARD_H,
        borderRadius: layout.radius,
        overflow: "hidden",
        border: `1px solid rgba(238,238,242,0.12)`,
        background: colors.bgDarkAlt,
        display: "flex",
        flexDirection: "row",
        flexShrink: 0,
      }}
    >
      <MediaPane snippet={snippet} />
      <div
        style={{
          flex: 1,
          padding: "22px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 16,
            letterSpacing: "0.06em",
            color: colors.sky,
            textTransform: "uppercase",
          }}
        >
          {snippet.source}
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 26,
            fontWeight: 600,
            lineHeight: 1.28,
            color: colors.textLight,
            letterSpacing: "-0.02em",
          }}
        >
          “{snippet.quote}”
        </div>
        {snippet.meta ? (
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 16,
              color: colors.textDim,
            }}
          >
            {snippet.meta}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const MediaPane: React.FC<{ snippet: Snippet }> = ({ snippet }) => {
  const frame = useCurrentFrame();

  if ((snippet.kind === "video" || snippet.kind === "zoom") && snippet.file) {
    return (
      <div style={paneShell}>
        <OffthreadVideo
          src={staticFile(snippet.file)}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>
    );
  }

  if (snippet.kind === "call") {
    const bars = 12;
    return (
      <div
        style={{
          ...paneShell,
          padding: "18px 14px",
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
            gap: 4,
            height: 72,
          }}
        >
          {Array.from({ length: bars }).map((_, i) => {
            const h = Math.round(
              18 +
                42 *
                  (0.35 +
                    0.65 *
                      Math.abs(
                        Math.sin((frame + i * 7) / 9) *
                          Math.cos((frame + i * 3) / 14),
                      )),
            );
            return (
              <div
                key={i}
                style={{
                  width: 6,
                  height: h,
                  borderRadius: 2,
                  background: i % 3 === 0 ? colors.amber : colors.sky,
                  opacity: 0.85,
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            color: colors.textDim,
            textAlign: "center",
            letterSpacing: "0.04em",
          }}
        >
          LIVE CALL
        </div>
      </div>
    );
  }

  // Sales note (and zoom fallback without file)
  return (
    <div
      style={{
        ...paneShell,
        padding: "16px 14px",
        background: "#14110c",
        borderRight: `1px solid ${colors.amber}33`,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 12,
          color: colors.amber,
          letterSpacing: "0.08em",
        }}
      >
        NOTE
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: 6,
          background: "rgba(245,158,11,0.08)",
          border: `1px solid ${colors.amber}28`,
          padding: 10,
          fontFamily: fonts.sans,
          fontSize: 13,
          lineHeight: 1.35,
          color: colors.textLight,
        }}
      >
        {snippet.author ?? "Rep"}
        <div style={{ marginTop: 6, color: colors.textDim, fontSize: 12 }}>
          Just now · synced
        </div>
      </div>
      <div
        style={{
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${colors.amber}, transparent)`,
        }}
      />
    </div>
  );
};

const paneShell: React.CSSProperties = {
  width: 148,
  height: "100%",
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  background: colors.bgDark,
};
