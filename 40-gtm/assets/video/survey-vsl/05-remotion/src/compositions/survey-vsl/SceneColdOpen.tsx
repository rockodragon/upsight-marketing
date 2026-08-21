import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors } from "../../lib/brand";
import { fontMono, fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene } from "../../lib/script";

export const SceneColdOpen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { scale, pad } = useLayoutScale();
  const scene = getScene("cold-open");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames);
  const t = frame / fps;

  const answerScale = interpolate(t, [0, 0.8], [0.92, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const churnIn = interpolate(t, [12, 13.2], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const questionIn = interpolate(t, [18, 19.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        opacity,
        justifyContent: "center",
        alignItems: "center",
        padding: pad + 16,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          flexDirection: "column",
          gap: 36 * scale,
          alignItems: "center",
        }}
      >
        <MonoLabel text={scene.label ?? ""} />

        <div
          style={{
            scale: answerScale,
            padding: `${Math.round(48 * scale)}px ${Math.round(64 * scale)}px`,
            borderRadius: 18,
            background: colors.bgDarkAlt,
            border: `1px solid ${colors.sky}33`,
            boxShadow: `0 40px 100px rgba(0,0,0,0.5)`,
            textAlign: "center",
            minWidth: Math.round(420 * scale),
          }}
        >
          <div
            style={{
              fontFamily: fontMono,
              fontSize: Math.round(16 * scale),
              letterSpacing: "0.16em",
              color: colors.textDim,
              marginBottom: 18 * scale,
              textTransform: "uppercase",
            }}
          >
            Survey response
          </div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: Math.round((t < 12 ? 96 : 72) * scale),
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: colors.textLight,
              lineHeight: 1,
            }}
          >
            {t < 5 ? "Fine. 7/10." : beat.onScreen}
          </div>
        </div>

        {t >= 12 && t < 18 && (
          <div
            style={{
              opacity: churnIn,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 22,
                fontWeight: 500,
                letterSpacing: "0.14em",
                color: colors.red,
                border: `1px solid ${colors.red}66`,
                background: "rgba(239,68,68,0.12)",
                borderRadius: 999,
                padding: "12px 22px",
              }}
            >
              CHURNED
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 20,
                color: colors.textDim,
              }}
            >
              +21 days
            </div>
          </div>
        )}

        {t >= 18 && (
          <div
            style={{
              opacity: questionIn,
            fontFamily: fontSans,
            fontSize: Math.round(52 * scale),
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: colors.amber,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Why couldn&apos;t we see it?
        </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
