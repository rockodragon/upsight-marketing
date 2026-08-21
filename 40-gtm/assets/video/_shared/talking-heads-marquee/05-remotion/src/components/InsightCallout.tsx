import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, fonts, layout } from "../lib/brand";

type InsightCalloutProps = {
  theme: string;
  quote: string;
  delay?: number;
  x: number;
  y: number;
  align?: "left" | "right";
  compact?: boolean;
  /** Extra upward travel — use when rising out of the marquee band */
  risePx?: number;
  /**
   * Absolute Y of the marquee top edge. When set, draws a connector line
   * from the bubble tail down into the reel.
   */
  connectToY?: number;
  /** Horizontal anchor within the bubble for the connector (default ~48) */
  connectorAnchorX?: number;
};

/**
 * Speech-bubble callout for the extracted quote + theme label.
 * Sized ~50% larger than the original for on-screen readability.
 */
export const InsightCallout: React.FC<InsightCalloutProps> = ({
  theme,
  quote,
  delay = 0,
  x,
  y,
  align = "left",
  compact = false,
  risePx = 16,
  connectToY,
  connectorAnchorX = 48,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 140, mass: 0.85 },
  });

  const opacity = interpolate(progress, [0, 0.35], [0, 1], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(progress, [0, 1], [0.88, 1]);
  const translateY = interpolate(progress, [0, 1], [risePx, 0]);

  const lineProgress = interpolate(progress, [0.15, 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const bubbleBottomApprox = compact ? 150 : 180;
  const lineStartY = y + translateY + bubbleBottomApprox;
  const lineEndY = connectToY ?? lineStartY + 40;
  const lineHeight = Math.max(0, (lineEndY - lineStartY) * lineProgress);
  const lineX = x + connectorAnchorX;

  return (
    <>
      {connectToY !== undefined ? (
        <>
          <div
            style={{
              position: "absolute",
              left: lineX,
              top: lineStartY,
              width: 2,
              height: lineHeight,
              opacity: opacity * 0.95,
              background: `linear-gradient(180deg, ${colors.sky}dd 0%, ${colors.amber}aa 100%)`,
              boxShadow: `0 0 14px ${colors.amberGlow}`,
              zIndex: 15,
              transformOrigin: "top center",
            }}
          />
          {/* Anchor dot on the marquee edge */}
          <div
            style={{
              position: "absolute",
              left: lineX - 5,
              top: lineStartY + lineHeight - 5,
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: colors.amber,
              boxShadow: `0 0 16px ${colors.amberGlow}`,
              opacity: opacity * lineProgress,
              zIndex: 16,
            }}
          />
        </>
      ) : null}

      <div
        style={{
          position: "absolute",
          left: x,
          top: y,
          maxWidth: compact ? 420 : 630,
          opacity,
          scale,
          translate: `0 ${translateY}px`,
          transformOrigin: "bottom center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            background: colors.card,
            border: `1.5px solid ${colors.rule}`,
            borderRadius: layout.radius + 8,
            padding: compact ? "16px 22px" : "22px 28px",
            boxShadow: "0 16px 40px rgba(5,5,8,0.12)",
          }}
        >
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: compact ? 20 : 27,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.amber,
              marginBottom: compact ? 8 : 12,
            }}
          >
            {theme}
          </div>
          <div
            style={{
              fontFamily: fonts.sans,
              fontSize: compact ? 27 : 39,
              fontWeight: 650,
              lineHeight: 1.28,
              color: colors.ink,
            }}
          >
            “{quote}”
          </div>
        </div>
        {/* Tail points down toward the marquee / connector */}
        <div
          style={{
            width: 18,
            height: 18,
            background: colors.card,
            borderRight: `1.5px solid ${colors.rule}`,
            borderBottom: `1.5px solid ${colors.rule}`,
            transform: "rotate(45deg)",
            marginTop: -10,
            marginLeft: align === "right" ? "auto" : connectorAnchorX - 9,
            marginRight: align === "right" ? connectorAnchorX - 9 : undefined,
          }}
        />
      </div>
    </>
  );
};
