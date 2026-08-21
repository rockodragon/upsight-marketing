import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { colors, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

const cardShell: React.CSSProperties = {
  background: colors.card,
  border: `1px solid ${colors.rule}`,
  borderRadius: layout.radius + 8,
  boxShadow: "0 28px 60px rgba(0,0,0,0.38)",
};

export const SpreadsheetRow: React.FC<{ dead?: boolean; compact?: boolean }> = ({
  dead = false,
  compact = false,
}) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 7], [0, 1], ease);
  const blink = Math.floor(frame / 8) % 2 === 0 ? 1 : 0;
  const die = dead ? interpolate(frame, [0, 8], [0, 1], ease) : 0;

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: compact ? 820 : 980,
        padding: compact ? "22px 24px" : "28px 32px",
        opacity: enter,
        translate: `0px ${interpolate(enter, [0, 1], [18, 0])}px`,
        filter: `saturate(${1 - die * 0.85})`,
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.textDim,
          marginBottom: 18,
        }}
      >
        responses.csv
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70px 1.2fr 1.6fr",
          fontFamily: fontMono,
          fontSize: 18,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: colors.textDimAlt,
          padding: "0 8px 12px",
          borderBottom: `1px solid ${colors.rule}`,
        }}
      >
        <span>#</span>
        <span>Email</span>
        <span>Q1 · How was it?</span>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "70px 1.2fr 1.6fr",
          alignItems: "center",
          padding: "18px 8px",
          marginTop: 6,
          borderRadius: layout.radius,
          background: dead ? "rgba(238,238,242,0.03)" : "rgba(56,189,248,0.08)",
          border: `1px solid ${dead ? colors.rule : "rgba(56,189,248,0.28)"}`,
          opacity: interpolate(die, [0, 1], [1, 0.45]),
        }}
      >
        <span
          style={{
            fontFamily: fontMono,
            fontSize: 22,
            color: colors.textDim,
          }}
        >
          1
        </span>
        <span
          style={{
            fontFamily: fontSans,
            fontSize: 28,
            fontWeight: 600,
            color: colors.textDim,
          }}
        >
          alex@…
        </span>
        <span
          style={{
            fontFamily: fontSans,
            fontSize: 32,
            fontWeight: 700,
            color: dead ? colors.textDimAlt : colors.text,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          Fine
          {dead ? null : (
            <span
              style={{
                width: 3,
                height: 28,
                background: colors.sky,
                opacity: blink,
                display: "inline-block",
              }}
            />
          )}
        </span>
      </div>
      {dead ? (
        <div
          style={{
            marginTop: 16,
            fontFamily: fontMono,
            fontSize: type.label,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: colors.textDimAlt,
            opacity: interpolate(frame, [3, 10], [0, 1], ease),
          }}
        >
          Forgotten · start at zero
        </div>
      ) : null}
    </div>
  );
};

const TOUCHES = [
  { when: "Mar 12 · form", text: "Evaluating tools before Q4." },
  { when: "Apr 3 · call", text: "Budget owner confirmed." },
  { when: "May 18 · video", text: "The team is bought in." },
];

export const ProfileCard: React.FC<{
  fill?: number;
  glow?: boolean;
  compact?: boolean;
}> = ({ fill = 4, glow = false, compact = false }) => {
  const frame = useCurrentFrame();
  const enter = interpolate(frame, [0, 7], [0, 1], ease);

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: compact ? 640 : 760,
        padding: compact ? "26px 28px" : "32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: compact ? 16 : 20,
        opacity: enter,
        scale: interpolate(enter, [0, 1], [0.94, 1]),
        border: glow ? `1px solid rgba(245,158,11,0.45)` : `1px solid ${colors.rule}`,
        boxShadow: glow
          ? `0 28px 80px ${colors.amberGlow}`
          : cardShell.boxShadow,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: compact ? 52 : 64,
              height: compact ? 52 : 64,
              borderRadius: 99,
              background: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
              flexShrink: 0,
            }}
          />
          <div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: compact ? 30 : 36,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: colors.text,
              }}
            >
              Maya Chen
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                color: colors.textDim,
                marginTop: 4,
              }}
            >
              VP Operations · Northline
            </div>
          </div>
        </div>
        {fill >= 2 ? (
          <div
            style={{
              alignSelf: "flex-start",
              padding: "8px 14px",
              borderRadius: 99,
              background: "rgba(245,158,11,0.16)",
              fontFamily: fontMono,
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.amber,
              opacity: interpolate(frame, [4, 10], [0, 1], ease),
            }}
          >
            Ready
          </div>
        ) : null}
      </div>

      {fill >= 2 ? (
        <div
          style={{
            padding: "16px 18px",
            borderRadius: layout.radius,
            background: "rgba(56,189,248,0.08)",
            opacity: interpolate(frame, [6, 12], [0, 1], ease),
          }}
        >
          <div
            style={{
              fontFamily: fontSans,
              fontSize: compact ? 24 : 28,
              fontWeight: 600,
              color: colors.text,
              lineHeight: 1.35,
            }}
          >
            “We need this in place before the Q4 board.”
          </div>
          <div
            style={{
              marginTop: 8,
              fontFamily: fontMono,
              fontSize: 16,
              color: colors.sky,
            }}
          >
            Last conversation · 2 days ago
          </div>
        </div>
      ) : (
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.bodySm,
            color: colors.textDim,
          }}
        >
          A name. One cell. Nothing else.
        </div>
      )}

      {fill >= 3
        ? TOUCHES.slice(0, fill >= 4 ? 3 : 2).map((t, i) => (
            <div
              key={t.when}
              style={{
                display: "flex",
                gap: 14,
                alignItems: "flex-start",
                opacity: interpolate(frame, [8 + i * 5, 14 + i * 5], [0, 1], ease),
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 99,
                  background: i === 2 ? colors.amber : colors.sky,
                  marginTop: 10,
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: fontSans,
                    fontSize: 22,
                    color: colors.text,
                    lineHeight: 1.3,
                  }}
                >
                  {t.text}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontFamily: fontMono,
                    fontSize: 15,
                    color: colors.textDim,
                  }}
                >
                  {t.when}
                </div>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

const STAGES = [
  { name: "Jordan", role: "Curious", hint: "Just looking", hot: false },
  { name: "Priya", role: "Ready", hint: "Asked for pricing", hot: true },
  { name: "Alex", role: "Nudge", hint: "One more question", hot: false },
];

export const StageCards: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        width: "100%",
        alignItems: "stretch",
      }}
    >
      {STAGES.map((p, i) => {
        const t = interpolate(frame, [i * 4, i * 4 + 7], [0, 1], ease);
        return (
          <div
            key={p.name}
            style={{
              flex: p.hot ? 1.12 : 1,
              opacity: t,
              translate: `0px ${interpolate(t, [0, 1], [20, 0])}px`,
              ...cardShell,
              padding: "28px 26px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              background: p.hot ? "#161410" : colors.card,
              boxShadow: p.hot
                ? `0 28px 70px ${colors.amberGlow}`
                : cardShell.boxShadow,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 99,
                background: p.hot
                  ? "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                  : "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
                opacity: p.hot ? 1 : 0.8,
              }}
            />
            <div
              style={{
                fontFamily: fontSans,
                fontSize: p.hot ? 36 : 30,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: colors.text,
              }}
            >
              {p.name}
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: p.hot ? colors.amber : colors.sky,
              }}
            >
              {p.role}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: type.bodySm,
                color: colors.textDim,
              }}
            >
              {p.hint}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const StageList: React.FC = () => {
  const frame = useCurrentFrame();
  const rows = [
    { name: "Priya Shah", stage: "Ready", hot: true },
    { name: "Jordan Hale", stage: "Curious", hot: false },
    { name: "Alex Kim", stage: "Nudge", hot: false },
  ];

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: 900,
        padding: "28px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
      }}
    >
      {rows.map((r, i) => (
        <div
          key={r.name}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 18px",
            borderRadius: layout.radius,
            background: r.hot ? "rgba(245,158,11,0.12)" : colors.cardAlt,
            opacity: interpolate(frame, [i * 4, 6 + i * 4], [0, 1], ease),
          }}
        >
          <span
            style={{
              fontFamily: fontSans,
              fontSize: 28,
              fontWeight: 700,
              color: colors.text,
            }}
          >
            {r.name}
          </span>
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 18,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: r.hot ? colors.amber : colors.textDim,
            }}
          >
            {r.stage}
          </span>
        </div>
      ))}
    </div>
  );
};

export const FollowUpCard: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: 860,
        padding: "32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 18,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
        translate: `0px ${interpolate(frame, [0, 6], [12, 0], ease)}px`,
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 28,
          color: colors.textDim,
        }}
      >
        To Priya · last said
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 34,
          fontWeight: 700,
          color: colors.text,
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
        }}
      >
        “We need this in place before the Q4 board.”
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          marginTop: 8,
          padding: "16px 28px",
          borderRadius: layout.radius + 4,
          background: colors.amber,
          fontFamily: fontSans,
          fontSize: 24,
          fontWeight: 800,
          color: colors.bg,
          opacity: interpolate(frame, [5, 12], [0, 1], ease),
        }}
      >
        Follow up
      </div>
    </div>
  );
};

export const BookMeeting: React.FC = () => {
  const frame = useCurrentFrame();
  const booked = interpolate(frame, [10, 20], [0, 1], ease);

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: 860,
        padding: "32px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 30,
          color: colors.text,
          lineHeight: 1.35,
        }}
      >
        Warm answer. Don’t break the thread.
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
        <div
          style={{
            padding: "16px 26px",
            borderRadius: layout.radius + 4,
            background: colors.amber,
            fontFamily: fontSans,
            fontSize: 24,
            fontWeight: 800,
            color: colors.bg,
            opacity: interpolate(frame, [3, 10], [0, 1], ease),
          }}
        >
          Book 20 min
        </div>
        <div
          style={{
            padding: "16px 26px",
            borderRadius: layout.radius + 4,
            background: colors.cardAlt,
            fontFamily: fontSans,
            fontSize: 24,
            fontWeight: 650,
            color: colors.textDim,
            opacity: interpolate(frame, [3, 10], [0, 1], ease),
          }}
        >
          Keep talking
        </div>
      </div>
      <div
        style={{
          marginTop: 8,
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.sky,
          opacity: booked,
        }}
      >
        Booked · Thu 10:30 · still in the thread
      </div>
    </div>
  );
};

const PlayMark: React.FC = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <path d="M8 6.5v15l13-7.5L8 6.5z" fill="#050508" />
  </svg>
);

export const VoiceAsk: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 8) * 0.06;

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: 760,
        padding: "36px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 22,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 36,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: colors.text,
          lineHeight: 1.25,
          maxWidth: 640,
        }}
      >
        What’s blocking a decision this quarter?
      </div>
      <div
        style={{
          width: 88,
          height: 88,
          borderRadius: 99,
          background: colors.sky,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          scale: pulse,
          boxShadow: `0 16px 40px ${colors.skyDim}`,
        }}
      >
        <PlayMark />
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.bodySm,
          color: colors.textDim,
        }}
      >
        Hold to talk · or type
      </div>
    </div>
  );
};

export const QuestionCard: React.FC<{ heard?: boolean }> = ({ heard = false }) => {
  const frame = useCurrentFrame();
  const dots = [0, 1, 2, 3];

  return (
    <div
      style={{
        ...cardShell,
        width: "100%",
        maxWidth: 820,
        padding: "40px 44px",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
        translate: `0px ${interpolate(frame, [0, 6], [12, 0], ease)}px`,
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: heard ? 40 : 44,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: colors.text,
          lineHeight: 1.22,
        }}
      >
        {heard
          ? "You feel heard — not processed."
          : "What’s the one thing we should know before we talk?"}
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        {dots.map((d) => (
          <div
            key={d}
            style={{
              width: 12,
              height: 12,
              borderRadius: 99,
              background: d === 0 ? colors.sky : colors.rule,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const QUOTES = [
  "We don’t have time for another tool.",
  "If it remembered context, we’d actually use it.",
  "Just tell me who’s ready — and what to say.",
];

export const PitchStack: React.FC<{ synthesize?: boolean }> = ({
  synthesize = false,
}) => {
  const frame = useCurrentFrame();

  if (synthesize) {
    return (
      <div
        style={{
          ...cardShell,
          width: "100%",
          maxWidth: 900,
          padding: "36px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          boxShadow: `0 28px 80px ${colors.amberGlow}`,
          opacity: interpolate(frame, [0, 7], [0, 1], ease),
          scale: interpolate(frame, [0, 7], [0.97, 1], ease),
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: colors.text,
            lineHeight: 1.25,
          }}
        >
          They don’t want another form.
          <br />
          They want{" "}
          <span style={{ color: colors.amber }}>memory.</span>
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.body,
            color: colors.textDim,
            lineHeight: 1.4,
          }}
        >
          Their words. Their patterns. Walk in from everything you already know.
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        width: "100%",
        maxWidth: 900,
      }}
    >
      {QUOTES.map((q, i) => (
        <div
          key={q}
          style={{
            ...cardShell,
            padding: "20px 26px",
            opacity: interpolate(frame, [i * 5, i * 5 + 7], [0, 1], ease),
            translate: `0px ${interpolate(
              frame,
              [i * 5, i * 5 + 7],
              [12, 0],
              ease,
            )}px`,
            fontFamily: fontSans,
            fontSize: 30,
            fontWeight: 650,
            color: colors.text,
            lineHeight: 1.3,
          }}
        >
          “{q}”
        </div>
      ))}
    </div>
  );
};
