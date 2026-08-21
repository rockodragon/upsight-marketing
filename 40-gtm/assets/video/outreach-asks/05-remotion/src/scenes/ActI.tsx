import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Frame, Super } from "../components/Primitives";
import { colors, type } from "../lib/brand";
import { MARCH_QUOTE } from "../lib/cast";
import { fontMono } from "../lib/fonts";
import { ease, holdFade } from "../lib/motion";

export type ActIMode = "master" | "paid30" | "social15";

/**
 * Black. White text, unhurried. Then a waveform that stops on the line.
 * No logo. Silence after August is the point.
 */
export const ActI: React.FC<{ mode?: ActIMode }> = ({ mode = "master" }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;

  const times =
    mode === "paid30"
      ? { march: [0, 0.6, 2.8, 3.2], august: [3.2, 3.8, 5.6, 6.2], wave: 6.0, had: 8.4 }
      : mode === "social15"
        ? { march: [0, 0.6, 3.6, 4.2], august: [4.0, 4.6, 7.4, 8.2], wave: 7.8, had: 99 }
        : { march: [0, 1.1, 7.2, 8.0], august: [8.0, 9.0, 13.2, 14.2], wave: 13.6, had: 24 };

  const marchOp = holdFade(
    s,
    times.march[0],
    times.march[1],
    times.march[2],
    times.march[3],
  );
  const augustOp = holdFade(
    s,
    times.august[0],
    times.august[1],
    times.august[2],
    times.august[3],
  );
  const waveOp = interpolate(s, [times.wave, times.wave + 0.8], [0, 1], ease);
  const hadOp =
    times.had < 50
      ? interpolate(s, [times.had, times.had + 0.7], [0, 1], ease)
      : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        <div
          style={{
            position: "absolute",
            opacity: marchOp,
            translate: `0 ${interpolate(marchOp, [0, 1], [16, 0])}px`,
          }}
        >
          <Super
            text="In March, a customer told you exactly why they'd leave."
            weight={300}
          />
        </div>
        <div
          style={{
            position: "absolute",
            opacity: augustOp,
            translate: `0 ${interpolate(augustOp, [0, 1], [16, 0])}px`,
          }}
        >
          <Super text="In August, they left." size={type.hero} weight={500} />
        </div>
        <div
          style={{
            opacity: waveOp * (1 - hadOp),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 36,
            width: "100%",
          }}
        >
          <Waveform progress={interpolate(s, [times.wave, times.wave + 5], [0.08, 0.72], ease)} />
          <div
            style={{
              opacity: interpolate(s, [times.wave + 2.2, times.wave + 2.9], [0, 1], ease),
              maxWidth: 1100,
              padding: "22px 28px",
              borderTop: `1px solid ${colors.rule}`,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                color: colors.textDimAlt,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Minute 19
            </div>
            <Super
              text={`“${MARCH_QUOTE}”`}
              size={36}
              weight={400}
              align="left"
              maxWidth={1100}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            opacity: hadOp,
            translate: `0 ${interpolate(hadOp, [0, 1], [14, 0])}px`,
          }}
        >
          <Super text="You didn't miss the signal. You had it." weight={500} />
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const BARS = [
  8, 14, 22, 18, 36, 28, 44, 20, 52, 30, 18, 40, 64, 48, 26, 38, 16, 58, 42, 24,
  70, 34, 22, 46, 18, 32, 54, 28, 12, 40, 62, 36, 20, 48, 14, 30, 56, 24, 18, 44,
  10, 26, 38, 50, 22, 16, 34, 60, 28, 12, 42, 20, 36, 52, 18, 30, 46, 14, 24, 40,
];

const Waveform: React.FC<{ progress: number }> = ({ progress }) => {
  const playhead = Math.floor(progress * BARS.length);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 5, height: 88 }}>
      {BARS.map((h, i) => {
        const on = i <= playhead;
        const at = i === playhead;
        return (
          <div
            key={i}
            style={{
              width: 4,
              height: h,
              borderRadius: 2,
              background: at ? colors.sky : on ? colors.text : colors.rule,
              opacity: on ? 1 : 0.55,
            }}
          />
        );
      })}
    </div>
  );
};
