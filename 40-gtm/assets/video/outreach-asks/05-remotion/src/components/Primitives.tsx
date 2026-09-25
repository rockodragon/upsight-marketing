import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { SAFE, colors, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";
import type { Person } from "../lib/cast";

export const Super: React.FC<{
  text: string;
  opacity?: number;
  translateY?: number;
  size?: number;
  weight?: number;
  color?: string;
  align?: "left" | "center";
  maxWidth?: number;
}> = ({
  text,
  opacity = 1,
  translateY = 0,
  size = type.super,
  weight = 400,
  color = colors.text,
  align = "center",
  maxWidth = 1480,
}) => (
  <div
    style={{
      opacity,
      translate: `0 ${translateY}px`,
      fontFamily: fontSans,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing: "-0.025em",
      lineHeight: 1.22,
      textAlign: align,
      maxWidth,
    }}
  >
    {text}
  </div>
);

export const CaptionBar: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: SAFE.x,
        right: SAFE.x,
        bottom: 36,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1080,
          padding: "12px 22px",
          borderRadius: layout.radius,
          background: "rgba(5, 5, 8, 0.82)",
          border: `1px solid ${colors.rule}`,
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.caption,
            fontWeight: 600,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: colors.text,
            textAlign: "center",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

export const PlayGlyph: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = colors.sky,
}) => (
  <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden>
    <circle cx="9" cy="9" r="8.2" fill="none" stroke={color} strokeWidth="1.4" />
    <polygon points="7.2,5.4 13.2,9 7.2,12.6" fill={color} />
  </svg>
);

export const Avatar: React.FC<{
  person: Person;
  size?: number;
  accent?: boolean;
}> = ({ person, size = 44, accent = false }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      background: accent ? colors.skyDim : "rgba(238, 238, 242, 0.1)",
      border: `1px solid ${accent ? colors.sky : colors.rule}`,
      color: accent ? colors.sky : colors.textDim,
      fontFamily: fontSans,
      fontSize: size * 0.38,
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {person.initials}
  </div>
);

export const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: "absolute",
      left: SAFE.x,
      right: SAFE.x,
      top: SAFE.y,
      bottom: SAFE.y + 80,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

export const QuoteCard: React.FC<{
  quote: string;
  name: string;
  date: string;
  opacity?: number;
  scale?: number;
  play?: boolean;
  compact?: boolean;
}> = ({
  quote,
  name,
  date,
  opacity = 1,
  scale = 1,
  play = true,
  compact = false,
}) => (
  <div
    style={{
      opacity,
      scale,
      width: compact ? 520 : 720,
      padding: compact ? "28px 32px" : "36px 40px",
      borderRadius: layout.radius + 6,
      background: colors.card,
      border: `1px solid ${colors.rule}`,
      boxShadow: "0 28px 80px rgba(0,0,0,0.45)",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
      {play ? <PlayGlyph size={22} /> : null}
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          color: colors.textDim,
          letterSpacing: "0.04em",
        }}
      >
        {name} · {date}
      </div>
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: compact ? 26 : 32,
        fontWeight: 500,
        color: colors.text,
        lineHeight: 1.35,
        letterSpacing: "-0.02em",
      }}
    >
      “{quote}”
    </div>
  </div>
);

export const Citation: React.FC<{ opacity?: number }> = ({ opacity = 1 }) => (
  <div
    style={{
      opacity,
      fontFamily: fontMono,
      fontSize: type.citation,
      color: colors.textDimAlt,
      letterSpacing: "0.02em",
      lineHeight: 1.4,
      maxWidth: 720,
      textAlign: "center",
    }}
  >
    People disclose more when they believe no human is listening.
    <span style={{ color: colors.textDim }}> · Lucas et al., 2014</span>
  </div>
);

export const useTyped = (text: string, startFrame: number, charsPerFrame = 0.85) => {
  const frame = useCurrentFrame();
  const count = Math.floor(
    interpolate(frame, [startFrame, startFrame + text.length / charsPerFrame], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }),
  );
  return text.slice(0, count);
};
