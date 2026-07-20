import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import type { OutputCard } from "../lib/script";
import { ChipLabel } from "./MonoLabel";

type OutputStackProps = {
  outputs: OutputCard[];
  startAt?: number;
};

const ACCENTS = [colors.amber, colors.sky, colors.green] as const;

export const OutputStack: React.FC<OutputStackProps> = ({
  outputs,
  startAt = 0,
}) => {
  const frame = useCurrentFrame();

  const shellIn = interpolate(frame, [startAt, startAt + 16], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div
      style={{
        width: 500,
        display: "flex",
        flexDirection: "column",
        gap: 22,
        opacity: shellIn,
      }}
    >
      <ChipLabel text="Ready to act" delay={startAt} tone="amber" />

      {outputs.map((output, i) => {
        const enter = startAt + 10 + i * 16;
        const opacity = interpolate(frame, [enter, enter + 14], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const x = interpolate(frame, [enter, enter + 14], [28, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
        const accent = ACCENTS[i % ACCENTS.length];

        return (
          <div
            key={output.id}
            style={{
              opacity,
              translate: `${x}px 0px`,
              borderRadius: layout.radius,
              border: `1px solid ${accent}40`,
              background: colors.bgDarkAlt,
              padding: "26px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 15,
                letterSpacing: "0.04em",
                color: accent,
                background: `${accent}18`,
                border: `1px solid ${accent}33`,
                borderRadius: 999,
                padding: "6px 12px",
                alignSelf: "flex-start",
              }}
            >
              {output.label}
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontWeight: 800,
                fontSize: 32,
                letterSpacing: "-0.03em",
                color: colors.textLight,
                lineHeight: 1.15,
              }}
            >
              {output.title}
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 20,
                color: colors.textDim,
                lineHeight: 1.35,
              }}
            >
              {output.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};
