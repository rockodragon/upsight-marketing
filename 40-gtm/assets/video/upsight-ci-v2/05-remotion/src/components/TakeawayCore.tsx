import React from "react";
import { Easing, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { ChipLabel } from "./MonoLabel";

type TakeawayCoreProps = {
  takeaway: string;
  label?: string;
  lockAt?: number;
};

/**
 * Center column owns the brand moment: logo + living profile → pattern → proof.
 */
export const TakeawayCore: React.FC<TakeawayCoreProps> = ({
  takeaway,
  label = "UpSight finds the pattern",
  lockAt = 70,
}) => {
  const frame = useCurrentFrame();

  const shellIn = interpolate(frame, [12, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const scan = interpolate(frame, [30, lockAt], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const takeawayIn = interpolate(frame, [lockAt, lockAt + 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const takeawayY = interpolate(frame, [lockAt, lockAt + 22], [22, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const words = ["Living profile", "→", "Pattern", "→", "Proof"];
  const wordCount = Math.min(
    words.length,
    Math.max(
      0,
      Math.floor(
        interpolate(frame, [40, lockAt], [0, words.length], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      ),
    ),
  );

  return (
    <div
      style={{
        width: 620,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        opacity: shellIn,
      }}
    >
      <ChipLabel text={label} delay={8} />

      <div
        style={{
          width: "100%",
          borderRadius: layout.radius,
          border: `1px solid rgba(56,189,248,0.32)`,
          background: colors.bgDarkAlt,
          padding: "40px 40px 44px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: `${14 + scan * 68}%`,
            height: 2,
            background: `linear-gradient(90deg, transparent, ${colors.sky}, transparent)`,
            opacity: takeawayIn > 0.85 ? 0 : 0.45,
          }}
        />

        {/* Brand moment lives here */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
          }}
        >
          <Img
            src={staticFile("logos/upsight-logo.png")}
            style={{ width: 48, height: 48, objectFit: "contain" }}
          />
          <div
            style={{
              fontFamily: fonts.sans,
              fontWeight: 800,
              fontSize: 30,
              color: colors.textLight,
              letterSpacing: "-0.03em",
            }}
          >
            UpSight
          </div>
        </div>

        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: colors.textDim,
            marginBottom: 14,
            textTransform: "uppercase",
          }}
        >
          Living profile + pattern
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 22,
            minHeight: 28,
            opacity: takeawayIn > 0.9 ? 0.45 : 1,
          }}
        >
          {words.slice(0, wordCount).map((w) => (
            <span
              key={w}
              style={{
                fontFamily: fonts.mono,
                fontSize: 18,
                color: w === "→" ? colors.amber : colors.sky,
              }}
            >
              {w}
            </span>
          ))}
        </div>

        <div
          style={{
            opacity: takeawayIn,
            translate: `0px ${takeawayY}px`,
            fontFamily: fonts.sans,
            fontWeight: 800,
            fontSize: 50,
            lineHeight: 1.14,
            letterSpacing: "-0.035em",
            color: colors.textLight,
          }}
        >
          “{takeaway}”
        </div>

        <div
          style={{
            marginTop: 24,
            opacity: interpolate(frame, [lockAt + 18, lockAt + 32], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            fontFamily: fonts.sans,
            fontSize: 22,
            color: colors.textDim,
            lineHeight: 1.35,
          }}
        >
          Sourced from 3+ conversations · linked to source evidence
        </div>
      </div>
    </div>
  );
};
