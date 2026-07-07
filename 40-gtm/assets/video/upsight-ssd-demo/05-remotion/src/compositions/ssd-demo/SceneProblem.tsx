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

const NOTES = [
  "Founder call — something about enterprise?",
  "Maria mentioned security review??",
  "James — onboarding too slow",
  "TODO: find that quote about ICP",
  "Call 4 — forgot to log",
  "Pattern? not sure",
];

export const SceneProblem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = getScene("problem");
  const fade = useSceneFade(durationInFrames, 8);

  const headline = spring({ frame: frame - 6, fps, config: { damping: 28, stiffness: 140, mass: 0.7 } });

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 60 }}>
      <MonoLabel text={scene.label ?? ""} delay={4} />

      <div style={{ display: "flex", gap: 48, marginTop: 36, alignItems: "center", width: "100%", maxWidth: 1400 }}>
        <div style={{ flex: 1, opacity: headline, transform: `translateY(${interpolate(headline, [0, 1], [30, 0])}px)` }}>
          <div style={{ fontFamily: fonts.sans, fontWeight: 900, fontSize: 52, color: colors.textLight, letterSpacing: "-0.03em", lineHeight: 1.2 }}>
            {scene.headline}
          </div>
          <div style={{ fontFamily: fonts.sans, fontWeight: 700, fontSize: 36, color: colors.amber, marginTop: 12 }}>
            {scene.headlineAccent}
          </div>
        </div>

        <div
          style={{
            width: 480,
            padding: 28,
            borderRadius: layout.radius,
            background: colors.bgDarkAlt,
            border: "1px solid rgba(238,238,242,0.08)",
            fontFamily: fonts.sans,
            fontSize: 16,
            color: colors.textDim,
            lineHeight: 1.8,
          }}
        >
          <div style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.textDimAlt, marginBottom: 16, letterSpacing: "0.1em" }}>
            FOUNDER CALL NOTES — Untitled
          </div>
          {NOTES.map((line, i) => {
            const o = spring({ frame: frame - 12 - i * 4, fps, config: { damping: 26, stiffness: 120, mass: 0.8 } });
            return (
              <div key={i} style={{ opacity: o, transform: `translateX(${interpolate(o, [0, 1], [-12, 0])}px)`, marginBottom: 6 }}>
                • {line}
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
