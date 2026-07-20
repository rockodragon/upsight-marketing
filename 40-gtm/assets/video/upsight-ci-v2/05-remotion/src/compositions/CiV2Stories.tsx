import React from "react";
import {
  Easing,
  OffthreadVideo,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  CompositeReel,
  SceneTitle,
  TransparentStage,
} from "../components/StackPieces";
import { colors, fonts, layout } from "../lib/brand";
import { reelSources, videoScript } from "../lib/script";

const ACCENTS = [colors.amber, colors.sky, colors.green] as const;

/**
 * Clip 3 — one fixed stage. Faces assemble into a composite reel,
 * then Product → Leadership → GTM replace each other in that same slot
 * (never three abreast).
 */
export const CiV2Stories: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const assembleAt = Math.round(0.3 * fps);
  const masterHold = Math.round(2.4 * fps);
  const destStart = assembleAt + masterHold;
  const destHold = Math.round(1.7 * fps);
  const swap = 12;

  const titleIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const masterOpacity = interpolate(
    frame,
    [assembleAt, assembleAt + 12, destStart, destStart + swap],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const chipSources = reelSources.slice(0, 3);
  const outputs = videoScript.outputs;

  // Which destination is on stage (0..n-1), or -1 while master plays
  const destIndex =
    frame < destStart
      ? -1
      : Math.min(
          outputs.length - 1,
          Math.floor((frame - destStart) / destHold),
        );

  return (
    <TransparentStage>
      <SceneTitle
        text={
          destIndex < 0
            ? "One proof reel from the evidence"
            : `Stories for ${outputs[destIndex]?.audience ?? "the team"}`
        }
        opacity={titleIn}
      />

      {/* Source faces — left, then clear for the stage */}
      <div
        style={{
          position: "absolute",
          left: 100,
          top: 200,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {chipSources.map((src, i) => {
          const enter = 4 + i * 8;
          const opacity = interpolate(
            frame,
            [enter, enter + 10, destStart - 8, destStart + 6],
            [0, 1, 1, 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const x = interpolate(frame, [enter, enter + 10], [-40, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          });
          return (
            <div
              key={src.id}
              style={{
                opacity,
                transform: `translateX(${x}px)`,
                width: 240,
                height: 136,
                borderRadius: layout.radius,
                overflow: "hidden",
                border: "1px solid rgba(238,238,242,0.2)",
                position: "relative",
              }}
            >
              <OffthreadVideo
                src={staticFile(src.file)}
                muted
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 8,
                  bottom: 8,
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: colors.textLight,
                  background: "rgba(5,5,8,0.7)",
                  borderRadius: 999,
                  padding: "4px 10px",
                }}
              >
                {src.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed stage — master, then destinations one at a time */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 180,
          width: 880,
          height: 560,
          marginLeft: -440,
        }}
      >
        {/* Master composite */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: masterOpacity,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <CompositeReel
            sources={reelSources}
            width={880}
            height={495}
            startFrame={assembleAt}
            segmentFrames={24}
            label="Composite story reel"
          />
          <div
            style={{
              textAlign: "center",
              fontFamily: fonts.sans,
              fontSize: 22,
              color: colors.textDim,
            }}
          >
            Haley + Rylie + discovery — cut into one proof reel
          </div>
        </div>

        {/* Destinations replace each other in the same slot */}
        {outputs.map((output, i) => {
          const start = destStart + i * destHold;
          const end = start + destHold;
          const opacity = interpolate(
            frame,
            [start, start + swap, end - swap, end],
            [0, 1, 1, i === outputs.length - 1 ? 1 : 0],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          );
          const accent = ACCENTS[i % ACCENTS.length];
          const rotated = [
            ...reelSources.slice(i % reelSources.length),
            ...reelSources.slice(0, i % reelSources.length),
          ];

          return (
            <div
              key={output.id}
              style={{
                position: "absolute",
                inset: 0,
                opacity,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 18,
                    color: accent,
                    letterSpacing: "0.04em",
                  }}
                >
                  → {output.audience ?? output.label}
                </div>
                <div
                  style={{
                    fontFamily: fonts.sans,
                    fontWeight: 700,
                    fontSize: 28,
                    color: colors.textLight,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {output.title}
                </div>
              </div>
              <CompositeReel
                sources={rotated}
                width={880}
                height={495}
                startFrame={start}
                segmentFrames={22}
                label={output.label}
              />
            </div>
          );
        })}
      </div>

      {/* Audience progress dots — not three reels */}
      <div
        style={{
          position: "absolute",
          bottom: 64,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          gap: 28,
          opacity: interpolate(frame, [destStart - 6, destStart + 8], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {outputs.map((output, i) => {
          const active = i === destIndex;
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <div
              key={output.id}
              style={{
                fontFamily: fonts.mono,
                fontSize: 16,
                color: active ? accent : colors.textDim,
                opacity: active ? 1 : 0.55,
                letterSpacing: "0.04em",
              }}
            >
              {active ? "● " : "○ "}
              {output.audience ?? output.label}
            </div>
          );
        })}
      </div>
    </TransparentStage>
  );
};
