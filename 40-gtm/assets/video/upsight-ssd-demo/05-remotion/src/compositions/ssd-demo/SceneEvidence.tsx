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

export const SceneEvidence: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("evidence");
  const highlights = scene.highlights ?? [];
  const fade = useSceneFade(durationInFrames, 15);

  const headline = spring({ frame: frame - 8, fps, config: { damping: 26, stiffness: 110, mass: 0.85 } });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 60 }}>
      <MonoLabel text={scene.label ?? ""} delay={4} />

      <div style={{ marginTop: 28, textAlign: "center", marginBottom: 36, opacity: headline }}>
        <div style={{ fontFamily: fonts.sans, fontWeight: 900, fontSize: 56, color: colors.textLight }}>{scene.headline}</div>
        <div style={{ fontFamily: fonts.sans, fontWeight: 800, fontSize: 48, color: colors.sky, marginTop: 6 }}>{scene.headlineAccent}</div>
      </div>

      <div style={{ width: 820, display: "flex", flexDirection: "column", gap: 16 }}>
        {highlights.map((h, i) => {
          const o = spring({ frame: frame - 25 - i * 18, fps, config: { damping: 26, stiffness: 100, mass: 0.9 } });
          return (
            <div
              key={i}
              style={{
                opacity: o,
                transform: `translateX(${interpolate(o, [0, 1], [-40, 0])}px)`,
                padding: "20px 24px",
                borderRadius: layout.radius,
                background: colors.bgDarkAlt,
                border: "1px solid rgba(56, 189, 248, 0.15)",
                borderLeft: `3px solid ${colors.sky}`,
              }}
            >
              <div style={{ fontFamily: fonts.sans, fontSize: 18, fontStyle: "italic", color: colors.textLight, lineHeight: 1.45 }}>{h.quote}</div>
              <div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.textDimAlt, marginTop: 10 }}>
                <span style={{ color: colors.sky }}>{h.speaker}</span> · {h.source}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
