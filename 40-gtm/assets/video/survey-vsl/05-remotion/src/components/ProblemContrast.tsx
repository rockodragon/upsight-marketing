import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";

const ease = Easing.bezier(...easeConfident);

export const ScoreDashboard: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const rows = [
    { label: "CSAT", value: "7.2" },
    { label: "NPS", value: "+31" },
    { label: "Response", value: "64%" },
  ];
  return (
    <div
      style={{
        opacity: t,
        translate: `0px ${interpolate(t, [0, 1], [16, 0])}px`,
        flex: 1,
        minWidth: 0,
        background: colors.card,
        border: `1px solid ${colors.rule}`,
        borderRadius: layout.radius + 8,
        padding: "24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        boxShadow: "0 12px 32px rgba(5,5,8,0.06)",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.inkDim,
        }}
      >
        Score dashboard
      </div>
      <div style={{ display: "flex", gap: 12, flex: 1 }}>
        {rows.map((r) => (
          <div
            key={r.label}
            style={{
              flex: 1,
              background: "rgba(34,197,94,0.08)",
              border: `1px solid ${colors.green}55`,
              borderRadius: layout.radius,
              padding: "18px 14px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 16,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.inkDim,
              }}
            >
              {r.label}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 44,
                fontWeight: 900,
                color: colors.green,
                letterSpacing: "-0.03em",
              }}
            >
              {r.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AnswerSpreadsheet: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const answers = ["Fine", "OK", "Good", "Fine", "Meh", "Fine", "OK"];
  return (
    <div
      style={{
        opacity: t,
        translate: `0px ${interpolate(t, [0, 1], [16, 0])}px`,
        flex: 1,
        minWidth: 0,
        background: colors.card,
        border: `1px solid ${colors.rule}`,
        borderRadius: layout.radius + 8,
        padding: "24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        boxShadow: "0 12px 32px rgba(5,5,8,0.06)",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.inkDim,
          marginBottom: 6,
        }}
      >
        Open responses · export
      </div>
      {answers.map((a, i) => (
        <div
          key={`${a}-${i}`}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 12px",
            borderRadius: 8,
            background: i % 2 === 0 ? colors.paper : "transparent",
            opacity: interpolate(frame - delay, [6 + i * 2, 14 + i * 2], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 16,
              color: colors.inkDimAlt,
            }}
          >
            Row {i + 1}
          </span>
          <span
            style={{
              fontFamily: fontSans,
              fontSize: 26,
              fontWeight: 700,
              color: colors.ink,
            }}
          >
            {a}
          </span>
        </div>
      ))}
    </div>
  );
};

export const GoneStamp: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return (
    <div
      style={{
        opacity: t,
        scale: interpolate(t, [0, 1], [1.12, 1]),
        rotate: `${interpolate(t, [0, 1], [-8, -6])}deg`,
        border: `4px solid ${colors.red}`,
        borderRadius: 12,
        padding: "18px 28px",
        background: "rgba(239,68,68,0.1)",
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 48,
          fontWeight: 900,
          color: colors.red,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        Contract cut
      </div>
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          color: colors.inkDim,
          marginTop: 6,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        Gone · +21 days
      </div>
    </div>
  );
};

type ContrastRow = { have: string; need: string };

const CONTRAST_ROWS: ContrastRow[] = [
  { have: "Score dashboard", need: "Meaning behind the score" },
  { have: "Spreadsheet of answers", need: "What matters — tagged & attributable" },
  {
    have: "Guessing after the fact",
    need: "A warning + the move, while you can still act",
  },
];

export const HaveVsNeed: React.FC<{ showNeed?: boolean }> = ({ showNeed = true }) => {
  const frame = useCurrentFrame();
  const leftT = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  const rightT = interpolate(frame, [18, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  return (
    <div
      style={{
        display: "flex",
        gap: 24,
        width: "100%",
        height: "100%",
        alignItems: "stretch",
        maxWidth: 1520,
        margin: "0 auto",
      }}
    >
      <Column
        title="What you have"
        tone="muted"
        opacity={leftT}
        rows={CONTRAST_ROWS.map((r) => r.have)}
      />
      <Column
        title="What you needed"
        tone="win"
        opacity={showNeed ? rightT : 0}
        rows={CONTRAST_ROWS.map((r) => r.need)}
      />
    </div>
  );
};

const Column: React.FC<{
  title: string;
  tone: "muted" | "win";
  opacity: number;
  rows: string[];
}> = ({ title, tone, opacity, rows }) => {
  const win = tone === "win";
  return (
    <div
      style={{
        flex: 1,
        opacity,
        translate: `0px ${interpolate(opacity, [0, 1], [16, 0])}px`,
        background: win ? "rgba(245,158,11,0.1)" : colors.card,
        border: `2px solid ${win ? colors.amber : colors.rule}`,
        borderRadius: layout.radius + 10,
        padding: "24px 26px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        boxShadow: win
          ? `0 16px 40px ${colors.amberGlow}`
          : "0 12px 32px rgba(5,5,8,0.06)",
        scale: win ? interpolate(opacity, [0, 1], [0.99, 1.01]) : 1,
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: win ? colors.amber : colors.inkDim,
          fontWeight: 500,
        }}
      >
        {title}
      </div>
      {rows.map((row, i) => (
        <div
          key={row}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "16px 18px",
            borderRadius: layout.radius,
            background: win ? "rgba(245,158,11,0.14)" : colors.paper,
            border: `1px solid ${win ? `${colors.amber}66` : colors.rule}`,
            fontFamily: fontSans,
            fontSize: win ? 30 : 26,
            fontWeight: win ? 800 : 650,
            color: colors.ink,
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            opacity: interpolate(opacity, [0.3 + i * 0.15, 0.55 + i * 0.15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          {row}
        </div>
      ))}
    </div>
  );
};
