import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../../lib/brand";
import { useSceneFade } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

export const SceneSurveyProduct: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const script = getScene("product");
  const sceneOpacity = useSceneFade(durationInFrames);
  const stats = script.stats ?? {};

  const shell = spring({
    frame: frame - 10,
    fps,
    config: { damping: 28, stiffness: 100, mass: 0.9 },
  });

  const followUp = spring({
    frame: frame - 45,
    fps,
    config: { damping: 26, stiffness: 110, mass: 0.85 },
  });

  const modeTabs = ["Voice", "Text", "Chat"];
  const activeTab = Math.floor((frame - 20) / 25) % 3;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        opacity: sceneOpacity,
        padding: 64,
      }}
    >
      <MonoLabel text={script.label ?? ""} delay={4} />

      <div
        style={{
          marginTop: 32,
          width: 920,
          opacity: shell,
          transform: `translateY(${interpolate(shell, [0, 1], [60, 0])}px)`,
          borderRadius: layout.radius + 8,
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.18)",
          boxShadow: `0 40px 100px rgba(0,0,0,0.5), 0 0 50px ${colors.amberGlow}`,
          background: `linear-gradient(165deg, ${colors.bgDarkAlt} 0%, #0d0d14 100%)`,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "22px 28px",
            borderBottom: "1px solid rgba(238,238,242,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 12,
                color: colors.amber,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              UpSight Survey
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 26,
                fontWeight: 700,
                color: colors.textLight,
                marginTop: 4,
              }}
            >
              {script.surveyTitle}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {modeTabs.map((tab, i) => (
              <div
                key={tab}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontFamily: fonts.mono,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i === activeTab ? colors.bgDark : colors.textDim,
                  background:
                    i === activeTab ? colors.amber : "rgba(238,238,242,0.04)",
                  border: `1px solid ${i === activeTab ? colors.amber : "rgba(238,238,242,0.08)"}`,
                }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* Question area */}
        <div style={{ padding: "36px 40px 28px" }}>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: 32,
              fontWeight: 700,
              color: colors.textLight,
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
            }}
          >
            {script.question}
          </div>

          {/* Response area */}
          <div
            style={{
              marginTop: 28,
              padding: "20px 22px",
              borderRadius: layout.radius,
              background: "rgba(238,238,242,0.03)",
              border: "1px solid rgba(238,238,242,0.08)",
              minHeight: 72,
            }}
          >
            {activeTab === 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: colors.amber,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 18,
                  }}
                >
                  🎙
                </div>
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 18,
                    color: colors.textDim,
                    fontStyle: "italic",
                  }}
                >
                  Listening…
                </span>
              </div>
            )}
            {activeTab === 1 && (
              <span
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 18,
                  color: colors.textLight,
                }}
              >
                Shorter setup — the docs were overwhelming at first.
                <span
                  style={{
                    display: "inline-block",
                    width: 2,
                    height: 22,
                    background: colors.sky,
                    marginLeft: 3,
                    opacity: Math.sin(frame * 0.25) > 0 ? 1 : 0,
                  }}
                />
              </span>
            )}
            {activeTab === 2 && (
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 17,
                  color: colors.textDim,
                  lineHeight: 1.5,
                }}
              >
                <div style={{ color: colors.textLight, marginBottom: 10 }}>
                  Shorter setup would help most.
                </div>
                <div style={{ color: colors.sky }}>{script.followUp}</div>
              </div>
            )}
          </div>

          {/* AI follow-up bubble */}
          <div
            style={{
              marginTop: 18,
              opacity: followUp,
              transform: `translateY(${interpolate(followUp, [0, 1], [16, 0])}px)`,
              padding: "14px 18px",
              borderRadius: "12px 12px 12px 4px",
              background: "rgba(56, 189, 248, 0.08)",
              border: "1px solid rgba(56, 189, 248, 0.15)",
              fontFamily: fonts.sans,
              fontSize: 16,
              color: colors.textDim,
              maxWidth: "78%",
            }}
          >
            <span style={{ color: colors.sky, fontWeight: 600 }}>UpSight</span>{" "}
            {script.followUp}
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: 32,
            padding: "18px 40px 24px",
            borderTop: "1px solid rgba(238,238,242,0.06)",
          }}
        >
          {Object.values(stats).map((stat, i) => {
            const statOpacity = interpolate(frame - 55 - i * 8, [0, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });
            return (
              <div
                key={stat}
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: colors.textDimAlt,
                  letterSpacing: "0.04em",
                  opacity: statOpacity,
                }}
              >
                {stat}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
