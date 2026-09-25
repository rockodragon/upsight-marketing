import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { MonoLabel } from "../../components/MonoLabel";
import { useSceneFade } from "../../lib/animations";
import { colors, layout } from "../../lib/brand";
import { fontMono, fontSans } from "../../lib/fonts";
import { useLayoutScale } from "../../lib/layout";
import { activeBeat, getScene } from "../../lib/script";

export const SceneProof: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const { scale, pad } = useLayoutScale();
  const scene = getScene("proof");
  const beat = activeBeat(scene, frame / fps);
  const opacity = useSceneFade(durationInFrames);
  const t = frame / fps;

  const scenarioA = t >= 4 && t < 16;
  const scenarioB = t >= 16;

  const expand = interpolate(t, [8, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cluster = interpolate(t, [18, 20], [0, 1], {
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
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <MonoLabel text={scene.label ?? "// illustrative"} />
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 16,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.amber,
              border: `1px solid ${colors.amber}55`,
              background: "rgba(245,158,11,0.12)",
              borderRadius: 999,
              padding: "8px 14px",
            }}
          >
            Illustrative
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 32,
            maxWidth: 1280,
          }}
        >
          {!scenarioA && !scenarioB && (
            <div
              style={{
              fontFamily: fontSans,
              fontSize: Math.round(64 * scale),
              fontWeight: 900,
              letterSpacing: "-0.035em",
              color: colors.textLight,
            }}
          >
            Picture two of your accounts.
            </div>
          )}

          {scenarioA && (
            <div style={{ display: "flex", flexDirection: "column", gap: 22 * scale }}>
              <div
                style={{
                  fontFamily: fontMono,
                  fontSize: Math.round(18 * scale),
                  letterSpacing: "0.14em",
                  color: colors.sky,
                  textTransform: "uppercase",
                }}
              >
                Account 1 · Quiet champion
              </div>
              <div
                style={{
                  padding: Math.round(28 * scale),
                  borderRadius: layout.radius + 6,
                  background: colors.bgDarkAlt,
                  border: `1px solid ${colors.sky}33`,
                }}
              >
                <div
                  style={{
                    fontFamily: fontSans,
                    fontSize: Math.round(36 * scale),
                    fontWeight: 600,
                    color: colors.textDim,
                  }}
                >
                  “Renewal should be fine.”
                </div>
              </div>
              <div
                style={{
                  opacity: expand,
                  padding: Math.round(28 * scale),
                  borderRadius: layout.radius + 6,
                  background: "rgba(245,158,11,0.08)",
                  border: `1px solid ${colors.amber}55`,
                  translate: `0px ${interpolate(expand, [0, 1], [24, 0])}px`,
                }}
              >
                <div
                  style={{
                    fontFamily: fontMono,
                    fontSize: Math.round(14 * scale),
                    letterSpacing: "0.12em",
                    color: colors.amber,
                    marginBottom: 10,
                    textTransform: "uppercase",
                  }}
                >
                  Follow-up → real blocker
                </div>
                <div
                  style={{
                    fontFamily: fontSans,
                    fontSize: Math.round(40 * scale),
                    fontWeight: 800,
                    color: colors.textLight,
                    letterSpacing: "-0.02em",
                  }}
                >
                  CFO just froze spend.
                </div>
              </div>
            </div>
          )}

          {scenarioB && (
            <div style={{ display: "flex", flexDirection: "column", gap: 22 * scale }}>
              <div
                style={{
                  fontFamily: fontMono,
                  fontSize: Math.round(18 * scale),
                  letterSpacing: "0.14em",
                  color: colors.sky,
                  textTransform: "uppercase",
                }}
              >
                Account 2 · Passing comment
              </div>
              <div
                style={{
                  padding: Math.round(28 * scale),
                  borderRadius: layout.radius + 6,
                  background: colors.bgDarkAlt,
                  border: `1px solid ${colors.sky}33`,
                  maxWidth: 720,
                }}
              >
                <div
                  style={{
                    fontFamily: fontSans,
                    fontSize: Math.round(34 * scale),
                    fontWeight: 600,
                    color: colors.textLight,
                  }}
                >
                  “Onboarding felt slow.”
                </div>
              </div>
              <div
                style={{
                  opacity: cluster,
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  flexWrap: "wrap",
                }}
              >
                {Array.from({ length: 13 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 999,
                      background:
                        i === 0
                          ? colors.amber
                          : `rgba(56,189,248,${0.25 + (i % 4) * 0.1})`,
                      border: `1px solid ${colors.textLight}22`,
                      opacity: interpolate(t, [18 + i * 0.08, 18.4 + i * 0.08], [0, 1], {
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp",
                      }),
                    }}
                  />
                ))}
                <div
                  style={{
                    fontFamily: fontSans,
                    fontSize: Math.round(32 * scale),
                    fontWeight: 800,
                    color: colors.amber,
                    marginLeft: 8,
                  }}
                >
                  → 13 accounts
                </div>
              </div>
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: Math.round(28 * scale),
                  color: colors.textDim,
                  fontWeight: 500,
                }}
              >
                One offhand comment becomes a pattern you can act on.
              </div>
            </div>
          )}
        </div>

        <div
          style={{
            fontFamily: fontMono,
            fontSize: 16,
            color: colors.textDimAlt,
            letterSpacing: "0.08em",
          }}
        >
          {beat.onScreen}
        </div>
      </div>
    </AbsoluteFill>
  );
};
