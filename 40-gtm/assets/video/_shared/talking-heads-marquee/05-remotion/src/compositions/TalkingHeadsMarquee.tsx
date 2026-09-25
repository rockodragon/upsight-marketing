import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FilmReelMarquee } from "../components/FilmReelMarquee";
import { InsightCallout } from "../components/InsightCallout";
import { MarketingBackground } from "../components/MarketingBackground";
import { FEATURED_CLIPS, MARQUEE_CLIPS } from "../lib/clips";
import { fonts, colors, layout } from "../lib/brand";

const MARQUEE_BOTTOM = 24;
const MARQUEE_TILE_HEIGHT = Math.round(210 * 1.3); // +30% vertical
const MARQUEE_BAND_PAD = 28;
const FRAME_HEIGHT = 1080;
const MARQUEE_TOP =
  FRAME_HEIGHT - MARQUEE_BOTTOM - (MARQUEE_TILE_HEIGHT + MARQUEE_BAND_PAD);

const SOURCE_CHIPS = [
  "Personalized surveys",
  "AI Interviewer",
  "Event Kiosks",
  "Zoom meetings",
  "Support calls",
  "AI Notetakers",
] as const;

/** Deterministic semi-random entrance delays (sec) — not left-to-right */
const SOURCE_ENTER_AT = [0.18, 0.82, 0.38, 0.08, 0.62, 0.48] as const;

/** Persistent source chips — sit just above the marquee, between callouts and reel */
const SourceChipRow: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        position: "absolute",
        left: 48,
        right: 48,
        top: MARQUEE_TOP - 80,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        zIndex: 18,
        pointerEvents: "none",
      }}
    >
      {SOURCE_CHIPS.map((label, i) => {
        const start = SOURCE_ENTER_AT[i] * fps;
        const opacity = interpolate(frame, [start, start + 0.32 * fps], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const y = interpolate(frame, [start, start + 0.32 * fps], [12, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const scale = interpolate(frame, [start, start + 0.32 * fps], [0.88, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });

        return (
          <div
            key={label}
            style={{
              opacity,
              translate: `0 ${y}px`,
              scale,
              padding: "11px 16px",
              borderRadius: layout.radius + 4,
              background: colors.amber,
              border: `1px solid ${colors.amber}`,
              boxShadow: "0 8px 24px rgba(5,5,8,0.1)",
              fontFamily: fonts.mono,
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "0.04em",
              color: colors.ink,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

/**
 * TalkingHeadsMarquee — reusable 10s asset
 *
 *  Frame 0 is a full poster (logo, title, chips, marquee) so Studio/MP4 thumbnails aren't blank.
 *  0–10s   Marquee band scrolls (full cast)
 *  0.5–6s  Three theme callouts rise out of the reel, connected by lines
 */
export const TalkingHeadsMarquee: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [s1, s2, s3] = FEATURED_CLIPS;

  // Callouts sit above the chip row; connectors still target the marquee
  const callouts = [
    {
      clip: s1,
      x: 72,
      y: 340,
      delay: Math.round(0.5 * fps),
      connectorAnchorX: 56,
    },
    {
      clip: s2,
      x: 720,
      y: 280,
      delay: Math.round(1.8 * fps),
      connectorAnchorX: 56,
    },
    {
      clip: s3,
      x: 1380,
      y: 340,
      delay: Math.round(3.1 * fps),
      connectorAnchorX: 56,
    },
  ];

  return (
    <MarketingBackground>
      <FilmReelMarquee
        clips={MARQUEE_CLIPS}
        bottom={MARQUEE_BOTTOM}
        tileWidth={300}
        tileHeight={MARQUEE_TILE_HEIGHT}
        speedPxPerFrame={3.2}
      />

      <SourceChipRow />

      <AbsoluteFill>
        {callouts.map((c) =>
          c.clip ? (
            <InsightCallout
              key={`callout-${c.clip.id}`}
              theme={c.clip.theme}
              quote={c.clip.quote}
              x={c.x}
              y={c.y}
              delay={c.delay}
              risePx={80}
              connectToY={MARQUEE_TOP + 8}
              connectorAnchorX={c.connectorAnchorX}
              compact
            />
          ) : null,
        )}
      </AbsoluteFill>

      {/* Brand + title — top band (visible from frame 0 for poster/thumbnail) */}
      <div
        style={{
          position: "absolute",
          left: 64,
          right: 64,
          top: 36,
          zIndex: 40,
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Img
            src={staticFile("logos/upsight-logo.png")}
            style={{
              width: 148,
              height: 44,
              objectFit: "contain",
            }}
          />
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: colors.ink,
            }}
          >
            UpSight
          </div>
        </div>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: colors.ink,
            textAlign: "center",
          }}
        >
          Many voices. One{" "}
          <span style={{ color: colors.amber }}>clear signal</span>.
        </div>
      </div>
    </MarketingBackground>
  );
};
