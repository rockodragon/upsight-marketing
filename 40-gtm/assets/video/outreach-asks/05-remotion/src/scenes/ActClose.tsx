import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Avatar, Frame, PlayGlyph, Super } from "../components/Primitives";
import { SAFE, colors, layout, type } from "../lib/brand";
import { DANA, MARCH_QUOTE, THEME } from "../lib/cast";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";
import { videoScript } from "../lib/script";

const LINES = [
  {
    at: 0,
    super: "Know why they leave — while they're still here.",
    artifact: "Dana · March 12 · play",
  },
  {
    at: 7,
    super: "Sell to the segment that actually buys.",
    artifact: "Founders ≠ enterprise buyers",
  },
  {
    at: 14,
    super: "Build what they'll pay for.",
    artifact: "14 clips · the argument is over",
  },
];

export const ActV: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const line = [...LINES].reverse().find((l) => s >= l.at) ?? LINES[0];
  const local = s - line.at;
  const op = interpolate(local, [0, 0.55], [0, 1], ease);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        <div
          style={{
            opacity: op,
            translate: `0 ${interpolate(op, [0, 1], [18, 0])}px`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            textAlign: "center",
            maxWidth: 1400,
          }}
        >
          <Super text={line.super} size={type.headline} weight={600} />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 18px",
              borderRadius: layout.radius,
              background: colors.card,
              border: `1px solid ${colors.rule}`,
            }}
          >
            <PlayGlyph size={18} />
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                color: colors.textDim,
              }}
            >
              {line.artifact}
            </div>
          </div>
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

export const ActVI: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const ctaAt = compact ? 2.2 : 9.2;
  const quoteOp = interpolate(s, [0, 0.6, ctaAt - 0.4, ctaAt], [0, 1, 1, 0], ease);
  const ctaOp = interpolate(s, [ctaAt, ctaAt + 0.5], [0, 1], ease);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <div
        style={{
          position: "absolute",
          left: SAFE.x,
          right: SAFE.x,
          top: SAFE.y,
          bottom: SAFE.y,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <div
          style={{
            opacity: quoteOp,
            width: 920,
            padding: 32,
            borderRadius: layout.radius + 6,
            background: colors.card,
            border: `1px solid ${colors.rule}`,
          }}
        >
          <div
            style={{
              fontFamily: fontMono,
              fontSize: type.label,
              color: colors.sky,
              marginBottom: 14,
            }}
          >
            {THEME} · churn risk · follow-up answered
          </div>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <Avatar person={DANA} size={52} accent />
            <div>
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: 28,
                  fontWeight: 500,
                  color: colors.text,
                  lineHeight: 1.35,
                }}
              >
                “{MARCH_QUOTE}”
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontFamily: fontMono,
                  fontSize: 16,
                  color: colors.textDim,
                }}
              >
                Dana · March 12 · now findable
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: compact ? "relative" : "absolute",
            opacity: ctaOp,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 22,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 40,
              fontWeight: 700,
              color: colors.text,
              letterSpacing: "-0.03em",
            }}
          >
            {videoScript.cta.tagline}
          </div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 26,
              color: colors.textDim,
            }}
          >
            {videoScript.cta.supporting}
          </div>
          <CtaButton />
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CtaButton: React.FC = () => {
  const frame = useCurrentFrame();
  const cursor = interpolate(frame, [8, 22], [-40, 0], ease);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          padding: "18px 36px",
          borderRadius: layout.radius + 4,
          background: colors.amber,
          fontFamily: fontSans,
          fontSize: 26,
          fontWeight: 800,
          color: colors.ink,
        }}
      >
        {videoScript.cta.label}
      </div>
      <div
        style={{
          position: "absolute",
          right: -8,
          bottom: -10,
          translate: `${cursor}px ${interpolate(cursor, [-40, 0], [12, 0])}px`,
          width: 18,
          height: 18,
          borderRadius: 2,
          background: colors.text,
          clipPath: "polygon(0 0, 100% 70%, 42% 70%, 42% 100%)",
        }}
      />
    </div>
  );
};
