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

/**
 * Media-first feed — source chip only, no quote body.
 * Keeps attention on center/right value, not left copy.
 */
const CARD_H = 300;
const GAP = 22;
const UNIT = CARD_H + GAP;
const FEED_W = 460;
/**
 * Cards got taller (300px), so +20% on 1px/frame was almost invisible.
 * 2.5px/frame ≈ 2× the old card throughput — clearly faster without blur.
 */
const SPEED_PX = 2.5;

type SnippetFeedProps = {
  snippets: Snippet[];
};

export const SnippetFeed: React.FC<SnippetFeedProps> = ({ snippets }) => {
  const frame = useCurrentFrame();
  const loop = [...snippets, ...snippets];
  const loopHeight = snippets.length * UNIT;
  const scroll = Math.round(frame * SPEED_PX) % loopHeight;

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
  const isMeeting = /meeting-panel/i.test(snippet.file ?? "");

  return (
    <div
      style={{
        height: CARD_H,
        borderRadius: layout.radius,
        overflow: "hidden",
        border: `1px solid rgba(238,238,242,0.12)`,
        background: colors.bgDarkAlt,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <MediaFill snippet={snippet} fit={isMeeting ? "contain" : "cover"} />

      {/* Source only — no quote */}
      <div
        style={{
          position: "absolute",
          left: 12,
          right: 12,
          bottom: 12,
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-start",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 15,
            letterSpacing: "0.04em",
            color: colors.textLight,
            background: "rgba(5,5,8,0.72)",
            border: `1px solid rgba(56,189,248,0.35)`,
            borderRadius: 999,
            padding: "7px 14px",
          }}
        >
          {snippet.source}
        </div>
        {snippet.meta ? (
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 14,
              color: colors.textDim,
              background: "rgba(5,5,8,0.55)",
              borderRadius: 6,
              padding: "4px 10px",
            }}
          >
            {snippet.meta}
          </div>
        ) : null}
      </div>
    </div>
  );
};

const MediaFill: React.FC<{
  snippet: Snippet;
  fit: "cover" | "contain";
}> = ({ snippet, fit }) => {
  const frame = useCurrentFrame();

  if ((snippet.kind === "video" || snippet.kind === "zoom") && snippet.file) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: colors.bgDark,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <OffthreadVideo
          src={staticFile(snippet.file)}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: fit,
            objectPosition: "center center",
          }}
        />
      </div>
    );
  }

  if (snippet.kind === "call") {
    const bars = 16;
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "28px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 16,
          background: "#0c1018",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            gap: 5,
            height: 100,
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
                  opacity: 0.9,
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }

  // Sales note — visual only, no quote body
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: 24,
        background: "#14110c",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div
        style={{
          fontFamily: fonts.mono,
          fontSize: 14,
          color: colors.amber,
          letterSpacing: "0.08em",
        }}
      >
        NOTE
      </div>
      <div
        style={{
          flex: 1,
          borderRadius: 8,
          background: "rgba(245,158,11,0.1)",
          border: `1px solid ${colors.amber}33`,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 700,
            color: colors.textLight,
          }}
        >
          {snippet.author ?? "Rep"}
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 15,
            color: colors.textDim,
          }}
        >
          Just now · synced to CRM
        </div>
      </div>
    </div>
  );
};
