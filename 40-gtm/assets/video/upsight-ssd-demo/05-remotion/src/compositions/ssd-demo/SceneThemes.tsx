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

export const SceneThemes: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("themes");
  const quotes = scene.quotes ?? [];
  const fade = useSceneFade(durationInFrames, 15);

  const themeIn = spring({ frame: frame - 15, fps, config: { damping: 24, stiffness: 120, mass: 0.8 } });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 60 }}>
      <MonoLabel text={scene.label ?? ""} delay={4} />

      <div style={{ marginTop: 24, textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontFamily: fonts.sans, fontWeight: 900, fontSize: 48, color: colors.textLight }}>{scene.headline}</div>
        <div style={{ fontFamily: fonts.sans, fontSize: 22, color: colors.textDim, marginTop: 10, fontStyle: "italic" }}>{scene.subhead}</div>
      </div>

      <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1200, alignItems: "flex-start" }}>
        <div
          style={{
            width: 320,
            opacity: themeIn,
            transform: `scale(${interpolate(themeIn, [0, 1], [0.9, 1])})`,
            padding: 24,
            borderRadius: layout.radius,
            background: "rgba(245, 158, 11, 0.08)",
            border: `2px solid ${colors.amber}`,
          }}
        >
          <div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.amber, letterSpacing: "0.1em" }}>THEME</div>
          <div style={{ fontFamily: fonts.sans, fontWeight: 800, fontSize: 24, color: colors.textLight, marginTop: 10, lineHeight: 1.3 }}>
            {scene.themeTitle}
          </div>
          <div style={{ fontFamily: fonts.mono, fontSize: 14, color: colors.green, marginTop: 12 }}>{scene.themeCount}</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 14 }}>
          {quotes.map((q, i) => {
            const o = spring({ frame: frame - 35 - i * 20, fps, config: { damping: 26, stiffness: 100, mass: 0.9 } });
            return (
              <div
                key={i}
                style={{
                  opacity: o,
                  transform: `translateY(${interpolate(o, [0, 1], [20, 0])}px)`,
                  padding: "16px 20px",
                  borderRadius: layout.radius,
                  background: colors.bgDarkAlt,
                  border: "1px solid rgba(238,238,242,0.08)",
                }}
              >
                <div style={{ fontFamily: fonts.sans, fontSize: 17, color: colors.textLight, fontStyle: "italic" }}>{q.text}</div>
                <div style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.sky, marginTop: 8 }}>{q.speaker}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
