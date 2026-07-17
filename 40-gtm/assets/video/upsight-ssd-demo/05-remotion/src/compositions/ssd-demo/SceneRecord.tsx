import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../../lib/brand";
import { useFadeIn } from "../../lib/animations";
import { MonoLabel } from "../../components/MonoLabel";
import { getScene } from "../../lib/script";

const TRANSCRIPT_LINES = [
  { speaker: "Maria Santos", text: "Enterprise deals always stall at security review." },
  { speaker: "You", text: "How long does that typically add?" },
  { speaker: "Maria Santos", text: "Six months, minimum. We lose to inertia." },
];

export const SceneRecord: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = getScene("record");
  const fade = useFadeIn(0, 8);

  const shell = spring({ frame: frame - 8, fps, config: { damping: 28, stiffness: 120, mass: 0.8 } });
  const recPulse = Math.sin(frame * 0.12) * 0.3 + 0.7;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: fade, padding: 60 }}>
      <MonoLabel text={scene.label ?? ""} delay={4} />

      <div style={{ marginTop: 28, textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontFamily: fonts.sans, fontWeight: 900, fontSize: 48, color: colors.textLight }}>{scene.headline}</div>
        <div style={{ fontFamily: fonts.sans, fontSize: 24, color: colors.textDim, marginTop: 10 }}>{scene.subhead}</div>
      </div>

      <div
        style={{
          width: 900,
          opacity: shell,
          transform: `translateY(${interpolate(shell, [0, 1], [40, 0])}px)`,
          borderRadius: layout.radius + 4,
          overflow: "hidden",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          boxShadow: `0 30px 80px rgba(0,0,0,0.5)`,
          background: colors.bgDarkAlt,
        }}
      >
        <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(238,238,242,0.06)", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: colors.red, opacity: recPulse, boxShadow: `0 0 12px ${colors.red}` }} />
          <span style={{ fontFamily: fonts.mono, fontSize: 13, color: colors.red, letterSpacing: "0.08em" }}>RECORDING</span>
          <span style={{ fontFamily: fonts.mono, fontSize: 12, color: colors.textDimAlt, marginLeft: "auto" }}>Founder Interview — Maria Santos</span>
        </div>

        <div style={{ padding: 24 }}>
          {TRANSCRIPT_LINES.map((line, i) => {
            const o = spring({ frame: frame - 18 - i * 10, fps, config: { damping: 26, stiffness: 110, mass: 0.85 } });
            const isThem = line.speaker !== "You";
            return (
              <div key={i} style={{ opacity: o, marginBottom: 16, display: "flex", gap: 14 }}>
                <div style={{ fontFamily: fonts.mono, fontSize: 12, color: isThem ? colors.sky : colors.amber, width: 120, flexShrink: 0 }}>
                  {line.speaker}
                </div>
                <div style={{ fontFamily: fonts.sans, fontSize: 17, color: colors.textLight, lineHeight: 1.45 }}>{line.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
