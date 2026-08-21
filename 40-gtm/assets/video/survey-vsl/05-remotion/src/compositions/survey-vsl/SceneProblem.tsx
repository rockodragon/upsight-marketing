import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MediaPlate } from "../../components/MediaPlate";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors } from "../../lib/brand";
import { fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene } from "../../lib/script";

const SHALLOW = ["Fine.", "7/10", "No notes", "OK", "N/A", "Good enough", "Sure", "Meh"];

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { landscape, scale, pad } = useLayoutScale();
  const scene = getScene("problem");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames);
  const t = frame / fps;

  const wallOpacity = interpolate(t, [12, 13.5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const freeze = interpolate(t, [19, 21], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity, padding: pad }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 28 * scale,
        }}
      >
        <MonoLabel text={scene.label ?? ""} />

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: landscape && t < 12 ? "1fr 1.1fr" : "1fr",
            gap: 40 * scale,
            alignItems: "center",
            minHeight: 0,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 * scale }}>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: Math.round(56 * scale),
                fontWeight: 900,
                letterSpacing: "-0.035em",
                color: colors.textLight,
                lineHeight: 1.05,
                maxWidth: 720,
              }}
            >
              {beat.onScreen}
            </div>
            {t >= 19 && (
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: Math.round(28 * scale),
                  fontWeight: 500,
                  color: colors.textDim,
                  maxWidth: 640,
                  lineHeight: 1.35,
                }}
              >
                The answer that mattered never gets said — because a form
                can&apos;t ask the follow-up.
              </div>
            )}
          </div>

          {t < 12 ? (
            <div style={{ position: "relative", height: landscape ? 560 : 320 }}>
              <MediaPlate
                src={scene.media ?? "video/google-form-long.mp4"}
                height={landscape ? 560 : 320}
                style={{ filter: `grayscale(${freeze * 0.85})` }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  gap: 16,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  paddingBottom: 28,
                  pointerEvents: "none",
                }}
              >
                {["A", "B", "C"].map((face, i) => (
                  <div
                    key={face}
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: 999,
                      background: `linear-gradient(135deg, ${colors.sky}55, ${colors.amber}44)`,
                      border: `2px solid ${colors.textLight}33`,
                      transform: `translateY(${Math.sin((frame + i * 20) / 18) * 6}px)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: fontSans,
                      fontWeight: 800,
                      color: colors.textLight,
                      fontSize: 22,
                    }}
                  >
                    {face}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div
              style={{
                opacity: wallOpacity,
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 14,
              }}
            >
              {SHALLOW.map((answer, i) => (
                <div
                  key={answer}
                  style={{
                    padding: `${Math.round(28 * scale)}px ${Math.round(20 * scale)}px`,
                    borderRadius: 12,
                    background: colors.bgDarkAlt,
                    border: `1px solid ${colors.textLight}14`,
                    textAlign: "center",
                    fontFamily: fontSans,
                    fontSize: Math.round(28 * scale),
                    fontWeight: 700,
                    color: i % 3 === 0 ? colors.textDim : colors.textDimAlt,
                    opacity: interpolate(t, [12 + i * 0.15, 12.6 + i * 0.15], [0, 1], {
                      extrapolateLeft: "clamp",
                      extrapolateRight: "clamp",
                    }),
                  }}
                >
                  {answer}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
