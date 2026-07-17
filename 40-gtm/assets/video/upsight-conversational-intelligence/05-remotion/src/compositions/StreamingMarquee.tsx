import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { FilmReelMarquee } from "../components/FilmReelMarquee";
import { InsightCallout } from "../components/InsightCallout";
import { MarketingBackground } from "../components/MarketingBackground";
import { MonoLabel } from "../components/MonoLabel";
import { TalkingMediaTile } from "../components/TalkingMediaTile";
import { EVIDENCE_CLIPS, MARQUEE_CLIPS, SPEAKER_CLIPS } from "../lib/clips";
import { colors, fonts } from "../lib/brand";

/**
 * StreamingMarquee — reusable short asset
 *
 * Upper: headline + featured tiles (left) + callouts (right column)
 * Lower ~1/3: people film-reel (evidence clips only — no featured repeats)
 */
export const StreamingMarquee: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const [s1, s2, s3] = SPEAKER_CLIPS;

  const brandOpacity = interpolate(frame, [3.4 * fps, 4.4 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const headlineProgress = spring({
    frame,
    fps,
    config: { damping: 18, stiffness: 160, mass: 0.7 },
  });

  const tiles = [
    { clip: s1, width: 240, height: 300, x: 80, y: 150, delay: 0 },
    {
      clip: s2,
      width: 260,
      height: 320,
      x: 350,
      y: 130,
      delay: Math.round(0.35 * fps),
      border: colors.amber,
    },
    {
      clip: s3,
      width: 240,
      height: 300,
      x: 640,
      y: 150,
      delay: Math.round(0.7 * fps),
    },
  ];

  return (
    <MarketingBackground>
      <div style={{ position: "absolute", left: 72, top: 28, zIndex: 30 }}>
        <MonoLabel text="// conversational intelligence" />
      </div>

      <div
        style={{
          position: "absolute",
          right: 64,
          top: 24,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "10px 14px",
          borderRadius: 999,
          background: "rgba(10, 10, 16, 0.78)",
          border: `1px solid ${colors.sky}33`,
        }}
      >
        <Img
          src={staticFile("logos/upsight-logo.png")}
          style={{ width: 88, height: 26, objectFit: "contain" }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 22,
            fontWeight: 700,
            color: colors.textLight,
          }}
        >
          UpSight
        </div>
      </div>

      {/* Headline — reserved top band, clear of tiles */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 78,
          right: 900,
          opacity: headlineProgress,
          translate: `0 ${interpolate(headlineProgress, [0, 1], [14, 0])}px`,
          zIndex: 12,
        }}
      >
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 42,
            fontWeight: 900,
            color: colors.textLight,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
          }}
        >
          Real customer voices. Structured insight.
        </div>
      </div>

      {/* Featured tiles — left/center upper zone only */}
      {tiles.map((t) => (
        <TalkingMediaTile
          key={t.clip.id}
          clip={t.clip}
          width={t.width}
          height={t.height}
          x={t.x}
          y={t.y}
          delay={t.delay}
          borderColor={t.border}
          active
        />
      ))}

      {/* Callouts — right column, never over tiles or marquee */}
      <InsightCallout
        theme={s1.theme}
        quote={s1.quote}
        x={980}
        y={120}
        delay={Math.round(0.45 * fps)}
      />
      <InsightCallout
        theme={s2.theme}
        quote={s2.quote}
        x={980}
        y={280}
        delay={Math.round(0.9 * fps)}
      />
      <InsightCallout
        theme={s3.theme}
        quote={s3.quote}
        x={980}
        y={440}
        delay={Math.round(1.35 * fps)}
      />

      <div
        style={{
          position: "absolute",
          right: 72,
          top: 620,
          opacity: brandOpacity,
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8,
        }}
      >
        <Img
          src={staticFile("logos/upsight-logo.png")}
          style={{ width: 140, height: 42, objectFit: "contain" }}
        />
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 24,
            fontWeight: 700,
            color: colors.textDim,
          }}
        >
          Get UpSight · getupsight.com
        </div>
      </div>

      {/* Lower 1/3 — evidence people only */}
      <FilmReelMarquee
        clips={MARQUEE_CLIPS.length ? MARQUEE_CLIPS : EVIDENCE_CLIPS}
        bottom={24}
        tileWidth={160}
        tileHeight={210}
        speedPxPerFrame={4.0}
      />
    </MarketingBackground>
  );
};
