import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Avatar, Frame, PlayGlyph } from "../components/Primitives";
import { colors, layout, type } from "../lib/brand";
import { DANA, MARCH_QUOTE } from "../lib/cast";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

const FACTS = [
  { at: 2.2, source: "from a call, March", text: MARCH_QUOTE },
  { at: 3.6, source: "from a survey, June", text: "Would not renew if onboarding stays this slow." },
  { at: 5.0, source: "she said this on camera, August", text: "I never got the hours back." },
];

export const BeatProfile: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const skipAt = compact ? 4.8 : 9.6;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        <div
          style={{
            display: "flex",
            gap: 48,
            width: "100%",
            maxWidth: 1480,
            alignItems: "stretch",
          }}
        >
          <DanaCard seconds={s} />
          {s >= skipAt ? <SkippedQuestions /> : null}
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const DanaCard: React.FC<{ seconds: number }> = ({ seconds }) => {
  const inOp = interpolate(seconds, [0, 0.5], [0, 1], ease);
  const visible = FACTS.filter((f) => seconds >= f.at);

  return (
    <div
      style={{
        opacity: inOp,
        flex: 1,
        padding: 36,
        borderRadius: layout.radius + 6,
        background: colors.card,
        border: `1px solid ${colors.rule}`,
        display: "flex",
        flexDirection: "column",
        gap: 22,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <Avatar person={DANA} size={64} accent />
        <div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 36,
              fontWeight: 700,
              color: colors.text,
              letterSpacing: "-0.02em",
            }}
          >
            Dana
          </div>
          <div
            style={{
              fontFamily: fontMono,
              fontSize: type.label,
              color: colors.textDim,
            }}
          >
            Northline · enterprise buyer
          </div>
        </div>
      </div>
      {visible.length === 0 ? (
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.body,
            color: colors.textDim,
          }}
        >
          A name. A company. One line.
        </div>
      ) : (
        visible.map((f) => (
          <div key={f.source} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
            <PlayGlyph size={20} />
            <div>
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: 24,
                  color: colors.text,
                  lineHeight: 1.35,
                }}
              >
                {f.text}
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontFamily: fontMono,
                  fontSize: 16,
                  color: colors.sky,
                }}
              >
                {f.source}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export const SkippedQuestions: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 12], [0, 1], ease);

  return (
    <div
      style={{
        opacity: op,
        width: 520,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          color: colors.textDim,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 8,
        }}
      >
        Next conversation
      </div>
      <SkipRow text="How was onboarding?" note="already answered — June" />
      <SkipRow text="Would you renew today?" note="already answered — June" />
      <div
        style={{
          padding: "16px 18px",
          borderRadius: layout.radius,
          background: colors.skyDim,
          border: `1px solid rgba(56,189,248,0.35)`,
          fontFamily: fontSans,
          fontSize: 22,
          color: colors.text,
        }}
      >
        What would have to change for those three weeks to become three days?
      </div>
    </div>
  );
};

const SkipRow: React.FC<{ text: string; note: string }> = ({ text, note }) => (
  <div
    style={{
      padding: "16px 18px",
      borderRadius: layout.radius,
      background: colors.bgAlt,
      border: `1px solid ${colors.rule}`,
      opacity: 0.7,
    }}
  >
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 22,
        color: colors.textDim,
        textDecoration: "line-through",
      }}
    >
      {text}
    </div>
    <div
      style={{
        marginTop: 6,
        fontFamily: fontMono,
        fontSize: 16,
        color: colors.amber,
      }}
    >
      {note}
    </div>
  </div>
);
