import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../../lib/brand";
import { useSceneFade } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

export const SceneProfile: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("profile");
  const person = scene.person;
  const fade = useSceneFade(durationInFrames, 12);

  const card = spring({ frame: frame - 15, fps, config: { damping: 26, stiffness: 110, mass: 0.85 } });

  if (!person) return null;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 60 }}>
      <MonoLabel text={scene.label ?? ""} delay={4} />

      <div style={{ marginTop: 28, textAlign: "center", marginBottom: 36 }}>
        <div style={{ fontFamily: fonts.sans, fontWeight: 900, fontSize: 48, color: colors.textLight }}>{scene.headline}</div>
        <div style={{ fontFamily: fonts.sans, fontSize: 22, color: colors.textDim, marginTop: 10 }}>{scene.subhead}</div>
      </div>

      <div
        style={{
          width: 560,
          opacity: card,
          transform: `translateY(${interpolate(card, [0, 1], [40, 0])}px)`,
          padding: 32,
          borderRadius: layout.radius + 4,
          background: colors.bgDarkAlt,
          border: "1px solid rgba(56, 189, 248, 0.2)",
          boxShadow: `0 30px 60px rgba(0,0,0,0.4)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "rgba(56, 189, 248, 0.15)",
              border: `2px solid ${colors.sky}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 24,
              color: colors.sky,
            }}
          >
            {person.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div style={{ fontFamily: fonts.sans, fontWeight: 800, fontSize: 28, color: colors.textLight }}>{person.name}</div>
            <div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.textDimAlt, marginTop: 4 }}>{person.company}</div>
          </div>
        </div>

        <div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.textDimAlt, marginBottom: 16 }}>
          {person.interviews} interviews · linked themes
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {person.themes.map((t, i) => {
            const o = spring({ frame: frame - 40 - i * 12, fps, config: { damping: 26, stiffness: 100, mass: 0.9 } });
            return (
              <div
                key={t}
                style={{
                  opacity: o,
                  padding: "8px 16px",
                  borderRadius: 20,
                  background: "rgba(56, 189, 248, 0.08)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  fontFamily: fonts.mono,
                  fontSize: 13,
                  color: colors.sky,
                }}
              >
                {t}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const SceneCloser: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("closer");
  const fade = useSceneFade(durationInFrames, 8);

  const logo = spring({ frame: frame - 6, fps, config: { damping: 14, stiffness: 200, mass: 0.6 } });
  const tag = spring({ frame: frame - 20, fps, config: { damping: 28, stiffness: 110, mass: 0.85 } });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 80 }}>
      <div style={{ opacity: logo, transform: `scale(${interpolate(logo, [0, 1], [0.5, 1])})`, marginBottom: 40 }}>
        <Img src={staticFile("logos/upsight-logo.png")} style={{ height: 72 }} />
      </div>

      <div
        style={{
          textAlign: "center",
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 52,
          letterSpacing: "-0.03em",
          lineHeight: 1.25,
          opacity: tag,
          transform: `translateY(${interpolate(tag, [0, 1], [24, 0])}px)`,
        }}
      >
        <span style={{ color: colors.textLight }}>{scene.taglineLine1}</span>
        <br />
        <span style={{ color: colors.amber }}>{scene.taglineLine2}</span>
      </div>

      {scene.cta && (
        <div style={{ marginTop: 32, fontFamily: fonts.mono, fontSize: 20, color: colors.textDimAlt, letterSpacing: "0.06em" }}>
          {scene.cta}
        </div>
      )}
    </AbsoluteFill>
  );
};
