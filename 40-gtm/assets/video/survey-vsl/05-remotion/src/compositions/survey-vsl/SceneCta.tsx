import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors, layout } from "../../lib/brand";
import { fontMono, fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene, surveyScript } from "../../lib/script";

export const SceneCta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { scale, pad } = useLayoutScale();
  const scene = getScene("cta");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames, 8);
  const t = frame / fps;

  const ctaPop = interpolate(t, [11.5, 13], [0, 1], {
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
          alignItems: "center",
          gap: 28 * scale,
          textAlign: "center",
        }}
      >
        <MonoLabel text={scene.label ?? ""} />

        <Img
          src={staticFile("logos/upsight-logo.png")}
          style={{ width: Math.round(220 * scale), height: "auto", objectFit: "contain" }}
        />

        <div
          style={{
            fontFamily: fontSans,
            fontSize: Math.round((t < 12 ? 56 : 48) * scale),
            fontWeight: 900,
            letterSpacing: "-0.035em",
            color: colors.textLight,
            lineHeight: 1.1,
            maxWidth: 980,
          }}
        >
          {beat.onScreen}
        </div>

        {t >= 3 && t < 12 && (
          <div
            style={{
              fontFamily: fontSans,
              fontSize: Math.round(28 * scale),
              fontWeight: 500,
              color: colors.textDim,
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            We&apos;ll set up the questions that would actually get them talking —
            before the next &quot;seven&quot; on the way out the door.
          </div>
        )}

        {t >= 12 && (
          <div
            style={{
              opacity: ctaPop,
              scale: interpolate(ctaPop, [0, 1], [0.92, 1]),
              marginTop: 12,
              padding: `${Math.round(22 * scale)}px ${Math.round(40 * scale)}px`,
              borderRadius: layout.radius + 8,
              background: colors.amber,
              boxShadow: `0 24px 60px ${colors.amberGlow}`,
              fontFamily: fontSans,
              fontSize: Math.round(28 * scale),
              fontWeight: 800,
              color: colors.bgDark,
              letterSpacing: "-0.02em",
            }}
          >
            {surveyScript.cta.label}
          </div>
        )}

        {t >= 12 && (
          <div
            style={{
              opacity: ctaPop,
              fontFamily: fontMono,
              fontSize: Math.round(18 * scale),
              letterSpacing: "0.06em",
              color: colors.sky,
            }}
          >
            {surveyScript.cta.url.replace(/^https?:\/\//, "")}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
