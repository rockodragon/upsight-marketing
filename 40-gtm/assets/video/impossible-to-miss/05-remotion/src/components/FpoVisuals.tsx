import React from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";
import { SAFE, colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";

const ease = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(...easeConfident),
};

/** Full-bleed FPO plate standing in for stock / AI footage */
export const FpoPlate: React.FC<{
  title: string;
  subtitle: string;
  /** 0 = cool/underexposed miss, 1 = clear/legible */
  clarity?: number;
  children?: React.ReactNode;
}> = ({ title, subtitle, clarity = 0, children }) => {
  const sat = interpolate(clarity, [0, 1], [0.35, 1]);
  const bright = interpolate(clarity, [0, 1], [0.72, 1]);
  const warm = interpolate(clarity, [0, 1], [0, 1]);

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.bgPlate,
        filter: `saturate(${sat}) brightness(${bright})`,
      }}
    >
      {/* Atmospheric wash — cool → warmer with clarity */}
      <AbsoluteFill
        style={{
          background: `linear-gradient(145deg,
            rgba(8, 12, 28, ${0.85 - warm * 0.35}) 0%,
            rgba(18, 18, 26, 0.5) 45%,
            rgba(40, 28, 12, ${warm * 0.25}) 100%)`,
        }}
      />
      {/* Fake "footage" blocks */}
      <div
        style={{
          position: "absolute",
          left: SAFE.x,
          top: SAFE.y + 40,
          width: 920,
          height: 620,
          borderRadius: layout.radius,
          border: `1px solid ${colors.fpoBorder}`,
          background: colors.fpo,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 80,
            bottom: 80,
            width: 120,
            height: 280,
            borderRadius: 60,
            background: "rgba(238, 238, 242, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 100,
            top: 120,
            width: 420,
            height: 280,
            borderRadius: layout.radius,
            background: "rgba(10, 10, 16, 0.55)",
            border: `1px solid ${colors.fpoBorder}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 24,
            top: 24,
            fontFamily: fontMono,
            fontSize: type.fpo,
            color: colors.textDimAlt,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          FPO plate
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: SAFE.x,
          top: SAFE.y + 40,
          width: 640,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: fontMono,
            fontSize: type.eyebrow,
            color: colors.amber,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.bodySm,
            fontWeight: 500,
            color: colors.textDim,
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </div>
      </div>
      {children}
    </AbsoluteFill>
  );
};

export const MonoLabel: React.FC<{
  text: string;
  style?: React.CSSProperties;
}> = ({ text, style }) => (
  <div
    style={{
      fontFamily: fontMono,
      fontSize: type.label,
      color: colors.amber,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      ...style,
    }}
  >
    {text}
  </div>
);

/** Illustrative signal card — Remotion overlay stand-in */
export const SignalCard: React.FC<{
  label: string;
  title: string;
  detail: string;
  accent?: string;
  opacity?: number;
  translateY?: number;
  style?: React.CSSProperties;
}> = ({
  label,
  title,
  detail,
  accent = colors.sky,
  opacity = 1,
  translateY = 0,
  style,
}) => (
  <div
    style={{
      width: 420,
      padding: "28px 32px",
      borderRadius: layout.radius,
      background: "rgba(10, 10, 16, 0.92)",
      border: `1px solid ${accent}55`,
      boxShadow: `0 24px 60px rgba(0,0,0,0.45), 0 0 40px ${accent}22`,
      opacity,
      translate: `0 ${translateY}px`,
      ...style,
    }}
  >
    <div
      style={{
        fontFamily: fontMono,
        fontSize: 18,
        color: accent,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 34,
        fontWeight: 700,
        color: colors.text,
        marginBottom: 8,
        lineHeight: 1.15,
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 22,
        fontWeight: 450,
        color: colors.textDim,
        lineHeight: 1.35,
      }}
    >
      {detail}
    </div>
  </div>
);

export const CaptionBar: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8], [0.85, 1], ease);

  return (
    <div
      style={{
        position: "absolute",
        left: SAFE.x,
        right: SAFE.x,
        bottom: 48,
        textAlign: "center",
        fontFamily: fontSans,
        fontSize: type.caption,
        fontWeight: 600,
        color: colors.text,
        opacity,
        textShadow: "0 2px 18px rgba(0,0,0,0.75)",
        lineHeight: 1.3,
      }}
    >
      {text}
    </div>
  );
};

export const OnScreenLine: React.FC<{
  text: string | null | undefined;
  fromFrame?: number;
}> = ({ text, fromFrame = 0 }) => {
  const frame = useCurrentFrame();
  if (!text) return null;
  const opacity = interpolate(
    frame,
    [fromFrame, fromFrame + 12],
    [0, 1],
    ease,
  );
  const y = interpolate(frame, [fromFrame, fromFrame + 12], [18, 0], ease);

  return (
    <div
      style={{
        position: "absolute",
        left: SAFE.x,
        bottom: SAFE.y + 110,
        fontFamily: fontSans,
        fontSize: type.onScreen,
        fontWeight: 800,
        color: colors.text,
        opacity,
        translate: `0 ${y}px`,
        maxWidth: 1100,
        lineHeight: 1.1,
      }}
    >
      {text}
    </div>
  );
};
