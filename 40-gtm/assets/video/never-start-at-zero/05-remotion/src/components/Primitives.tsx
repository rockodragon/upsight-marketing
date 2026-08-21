import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { SAFE, colors, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

export const FrameStack: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <AbsoluteFill
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 18,
      minHeight: 0,
    }}
  >
    {children}
  </AbsoluteFill>
);

export const Eyebrow: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = colors.amber,
}) => (
  <div
    style={{
      alignSelf: "flex-start",
      fontFamily: fontMono,
      fontSize: type.eyebrow,
      fontWeight: 500,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color,
    }}
  >
    {children}
  </div>
);

export const Headline: React.FC<{
  children: React.ReactNode;
  size?: number;
}> = ({ children, size = type.headline }) => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        fontFamily: fontSans,
        fontSize: size,
        fontWeight: 900,
        letterSpacing: "-0.035em",
        lineHeight: 1.12,
        color: colors.text,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
        translate: `0px ${interpolate(frame, [0, 6], [10, 0], ease)}px`,
      }}
    >
      {children}
    </div>
  );
};

export const Accent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <span style={{ color: colors.amber }}>{children}</span>;

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
          maxWidth: 1100,
          padding: "14px 26px",
          borderRadius: layout.radius + 4,
          background: "rgba(5, 5, 8, 0.88)",
          border: `1px solid rgba(56,189,248,0.32)`,
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.caption,
            fontWeight: 650,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: colors.paper,
            textAlign: "center",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
