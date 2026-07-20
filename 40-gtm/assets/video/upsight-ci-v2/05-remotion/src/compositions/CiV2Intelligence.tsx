import React from "react";
import {
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  DealtCard,
  SceneTitle,
  TransparentStage,
} from "../components/StackPieces";
import { colors, fonts, layout } from "../lib/brand";
import { videoScript } from "../lib/script";

/** Clip 2 — evidence compresses into UpSight pattern / intelligence. */
export const CiV2Intelligence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const convergeAt = 0.6 * fps;
  const lockAt = 1.8 * fps;

  const stackScale = interpolate(frame, [convergeAt, lockAt], [1, 0.55], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const stackX = interpolate(frame, [convergeAt, lockAt], [0, -420], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const stackOpacity = interpolate(frame, [lockAt, lockAt + 20], [1, 0.35], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const patternIn = interpolate(frame, [lockAt - 6, lockAt + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const snippets = videoScript.snippets.slice(0, 4);

  return (
    <TransparentStage>
      <SceneTitle text="UpSight finds the pattern" opacity={titleIn} />

      <div
        style={{
          position: "absolute",
          left: 200,
          top: 180,
          width: 520,
          height: 640,
          opacity: stackOpacity,
          transform: `translateX(${stackX}px) scale(${stackScale})`,
          transformOrigin: "center center",
        }}
      >
        {snippets.map((snippet, i) => (
          <DealtCard
            key={snippet.id}
            snippet={snippet}
            index={i}
            appearAt={0}
            width={440}
            height={260}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 620,
          marginLeft: -200,
          marginTop: -200,
          opacity: patternIn,
          transform: `translateY(${interpolate(frame, [lockAt, lockAt + 16], [28, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px)`,
        }}
      >
        <div
          style={{
            borderRadius: layout.radius + 4,
            border: `1px solid rgba(56,189,248,0.45)`,
            background: "rgba(10,10,16,0.86)",
            backdropFilter: "blur(10px)",
            padding: "40px 40px 44px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <Img
              src={staticFile("logos/upsight-logo.png")}
              style={{ width: 48, height: 48, objectFit: "contain" }}
            />
            <div
              style={{
                fontFamily: fonts.sans,
                fontWeight: 800,
                fontSize: 30,
                color: colors.textLight,
              }}
            >
              UpSight
            </div>
          </div>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 16,
              color: colors.sky,
              marginBottom: 16,
              letterSpacing: "0.04em",
            }}
          >
            Living profile → Pattern → Proof
          </div>
          <div
            style={{
              fontFamily: fonts.sans,
              fontWeight: 800,
              fontSize: 44,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: colors.textLight,
            }}
          >
            “{videoScript.takeaway}”
          </div>
          <div
            style={{
              marginTop: 20,
              fontFamily: fonts.sans,
              fontSize: 20,
              color: colors.textDim,
            }}
          >
            Linked to Haley · Rylie · meeting · notes
          </div>
        </div>
      </div>
    </TransparentStage>
  );
};
