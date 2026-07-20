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
import { FlowArrow } from "../components/FlowArrow";
import { MarketingBackground } from "../components/MarketingBackground";
import { ChipLabel } from "../components/MonoLabel";
import { OutputStack } from "../components/OutputStack";
import { SnippetFeed } from "../components/SnippetFeed";
import { TakeawayCore } from "../components/TakeawayCore";
import { colors, fonts } from "../lib/brand";
import { videoScript } from "../lib/script";

/**
 * CI-v2 — three zones:
 * Messy customer voice → UpSight finds the pattern → Ready to act
 */
export const CiV2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ingestEnd = videoScript.scenes[0].durationSeconds * fps;
  const patternEnd = ingestEnd + videoScript.scenes[1].durationSeconds * fps;
  const outputsEnd = patternEnd + videoScript.scenes[2].durationSeconds * fps;

  const leftOpacity = interpolate(
    frame,
    [0, 18, outputsEnd, outputsEnd + 18],
    [0, 1, 1, 0.55],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
  );

  const brandHold = interpolate(frame, [outputsEnd, outputsEnd + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const titleIn = interpolate(frame, [0, 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <MarketingBackground>
      <AbsoluteFill style={{ pointerEvents: "none" }}>
        <FlowArrow
          appearAt={ingestEnd}
          color={colors.amber}
          left={540}
          top="50%"
          width={112}
        />
        <FlowArrow
          appearAt={patternEnd}
          color={colors.sky}
          right={540}
          top="50%"
          width={112}
        />
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          padding: "36px 52px 32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Tiny brand + concept title (not bottom caption) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 18,
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              opacity: 0.55,
            }}
          >
            <Img
              src={staticFile("logos/upsight-logo.png")}
              style={{ width: 22, height: 22, objectFit: "contain" }}
            />
            <div
              style={{
                fontFamily: fonts.sans,
                fontWeight: 600,
                fontSize: 16,
                color: colors.textDim,
              }}
            >
              UpSight
            </div>
          </div>

          <div
            style={{
              flex: 1,
              textAlign: "center",
              opacity: titleIn,
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 28,
              letterSpacing: "-0.02em",
              color: colors.textLight,
            }}
          >
            Messy customer voice → decisions and proof
          </div>

          {/* spacer to balance tiny brand */}
          <div style={{ width: 90 }} />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            minHeight: 0,
          }}
        >
          <div
            style={{
              opacity: leftOpacity,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              width: 480,
            }}
          >
            <ChipLabel text="Messy customer voice" delay={0} />
            <SnippetFeed snippets={videoScript.snippets} />
          </div>

          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <TakeawayCore
              takeaway={videoScript.takeaway}
              label="UpSight finds the pattern"
              lockAt={ingestEnd + 20}
            />
          </div>

          <div style={{ width: 500 }}>
            <OutputStack outputs={videoScript.outputs} startAt={patternEnd} />
          </div>
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            justifyContent: "flex-end",
            minHeight: 52,
          }}
        >
          <div
            style={{
              opacity: brandHold,
              padding: "16px 32px",
              borderRadius: 10,
              background: colors.amber,
              color: colors.bgDark,
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 24,
            }}
          >
            Get UpSight
          </div>
        </div>
      </AbsoluteFill>
    </MarketingBackground>
  );
};
