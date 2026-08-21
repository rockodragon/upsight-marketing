import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Avatar, Frame, PlayGlyph } from "../components/Primitives";
import { colors, layout, type } from "../lib/brand";
import {
  DANA,
  PEOPLE,
  QUOTES,
  THEME,
  WAITING,
  personById,
  type Person,
} from "../lib/cast";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";
import { useTyped } from "../components/Primitives";

export const BeatPattern: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const snap = interpolate(s, [0.4, 2.2], [0, 1], ease);
  const open = s >= 6.5;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        {open ? <ThemeOpen /> : <ThemeSnap snap={snap} />}
      </Frame>
    </AbsoluteFill>
  );
};

const ThemeSnap: React.FC<{ snap: number }> = ({ snap }) => (
  <div style={{ position: "relative", width: 1400, height: 640 }}>
    {QUOTES.map((q, i) => {
      const startX = (i % 3) * 420 - 420;
      const startY = Math.floor(i / 3) * 160 - 80;
      const x = interpolate(snap, [0, 1], [startX, 0]);
      const y = interpolate(snap, [0, 1], [startY, 0]);
      const person = personById(q.personId);
      return (
        <div
          key={q.personId}
          style={{
            position: "absolute",
            left: 700 + x - 200,
            top: 280 + y,
            opacity: interpolate(snap, [0, 0.3, 1], [1, 0.85, 0]),
            width: 400,
            fontFamily: fontSans,
            fontSize: 20,
            color: colors.textDim,
          }}
        >
          {person.name}: “{q.text.slice(0, 48)}…”
        </div>
      );
    })}
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        translate: "-50% -50%",
        opacity: snap,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.headline,
          fontWeight: 700,
          color: colors.text,
          letterSpacing: "-0.03em",
        }}
      >
        {THEME}
      </div>
      <div
        style={{
          marginTop: 16,
          fontFamily: fontMono,
          fontSize: type.bodySm,
          color: colors.sky,
        }}
      >
        14 people
      </div>
    </div>
  </div>
);

const ThemeOpen: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 12], [0, 1], ease);
  return (
    <div style={{ opacity: op, width: "100%", maxWidth: 1480 }}>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 40,
          fontWeight: 700,
          color: colors.text,
          marginBottom: 28,
          letterSpacing: "-0.02em",
        }}
      >
        {THEME}
        <span style={{ marginLeft: 16, color: colors.sky, fontFamily: fontMono, fontSize: 24, fontWeight: 500 }}>
          14 people
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {QUOTES.slice(0, 5).map((q, i) => {
          const person = personById(q.personId);
          const playing = i === 0;
          return (
            <div
              key={q.personId}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 18px",
                borderRadius: layout.radius,
                background: playing ? colors.cardAlt : colors.card,
                border: `1px solid ${playing ? colors.sky : colors.rule}`,
              }}
            >
              <Avatar person={person} accent={person.id === DANA.id} />
              <PlayGlyph color={playing ? colors.sky : colors.textDim} />
              <div
                style={{
                  fontFamily: fontSans,
                  fontSize: 22,
                  color: colors.text,
                  flex: 1,
                }}
              >
                {q.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BeatWho: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const group = s >= 6.8;
  const tenth = interpolate(s, [8.4, 9.4], [0, 1], ease);

  const founders = PEOPLE.filter((p) => p.role === "founder").slice(0, 6);
  const enterprise = PEOPLE.filter((p) => p.role === "enterprise").slice(0, 6);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        {group ? (
          <ChurnGroup tenth={tenth} />
        ) : (
          <div style={{ display: "flex", gap: 32, width: "100%", maxWidth: 1480 }}>
            <Column title="Founders" people={founders} />
            <Column title="Enterprise buyers" people={enterprise} />
          </div>
        )}
      </Frame>
    </AbsoluteFill>
  );
};

const Column: React.FC<{ title: string; people: Person[] }> = ({ title, people }) => (
  <div
    style={{
      flex: 1,
      padding: 28,
      borderRadius: layout.radius + 4,
      background: colors.card,
      border: `1px solid ${colors.rule}`,
    }}
  >
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 32,
        fontWeight: 700,
        color: colors.text,
        marginBottom: 20,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {people.map((p) => (
        <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar person={p} accent={p.id === DANA.id} />
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 22,
              color: colors.text,
            }}
          >
            {p.name}
            <span style={{ color: colors.textDim }}> · {p.company}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ChurnGroup: React.FC<{ tenth: number }> = ({ tenth }) => {
  const nine = PEOPLE.slice(0, 9);
  const tenthPerson = PEOPLE[9];
  return (
    <div
      style={{
        width: 720,
        padding: 36,
        borderRadius: layout.radius + 6,
        background: colors.card,
        border: `1px solid ${colors.rule}`,
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 36,
          fontWeight: 700,
          color: colors.text,
          marginBottom: 8,
        }}
      >
        Churn risk — {tenth > 0.5 ? 10 : 9} people
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          marginTop: 22,
        }}
      >
        {nine.map((p) => (
          <Avatar key={p.id} person={p} size={48} accent={p.id === DANA.id} />
        ))}
        <div
          style={{
            opacity: tenth,
            translate: `${interpolate(tenth, [0, 1], [24, 0])}px 0`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Avatar person={tenthPerson} size={48} />
        </div>
      </div>
      <div
        style={{
          opacity: tenth,
          marginTop: 20,
          fontFamily: fontSans,
          fontSize: 22,
          color: colors.textDim,
        }}
      >
        {tenthPerson.name} · Joined because: “we’re evaluating alternatives.”
      </div>
    </div>
  );
};

export const BeatAsk: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const draft = useTyped("You mentioned onboarding took three weeks…", 8, 0.9);
  const ask = s >= 9.5;

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        <div
          style={{
            width: "100%",
            maxWidth: 1100,
            padding: 40,
            borderRadius: layout.radius + 6,
            background: colors.card,
            border: `1px solid ${colors.rule}`,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              fontFamily: fontMono,
              fontSize: type.label,
              color: colors.textDim,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Going back out · 9 people
          </div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 34,
              fontWeight: 500,
              color: colors.text,
              letterSpacing: "-0.02em",
              minHeight: 48,
            }}
          >
            {draft}
          </div>
          <AskLine
            q="What would three days of onboarding have changed?"
            because="because she said this → three weeks and I never got the hours back"
            delay={4.2}
          />
          <AskLine q="How was onboarding?" because="already answered — June" skipped delay={5.6} />
          <AskLine q="Would you renew today?" because="already answered — June" skipped delay={6.4} />
          {ask ? (
            <div
              style={{
                marginTop: 8,
                fontFamily: fontSans,
                fontSize: 28,
                color: colors.amber,
                fontWeight: 600,
              }}
            >
              …and would you be open to fifteen minutes?
            </div>
          ) : null}
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const AskLine: React.FC<{
  q: string;
  because: string;
  skipped?: boolean;
  delay: number;
}> = ({ q, because, skipped, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op = interpolate(frame, [delay * fps, delay * fps + 12], [0, 1], ease);
  return (
    <div style={{ opacity: skipped ? op * 0.55 : op }}>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 24,
          color: skipped ? colors.textDim : colors.text,
          textDecoration: skipped ? "line-through" : "none",
        }}
      >
        {q}
      </div>
      <div
        style={{
          marginTop: 4,
          fontFamily: fontMono,
          fontSize: 16,
          color: skipped ? colors.amber : colors.sky,
        }}
      >
        {because}
      </div>
    </div>
  );
};

export const BeatWaiting: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const bookAt = compact ? 3.2 : 5.4;
  const leaveAt = compact ? 5.0 : 7.4;
  const tickAt = compact ? 6.2 : 9.2;
  const booked = s >= bookAt;
  const left = s >= leaveAt;
  const tick = interpolate(s, [tickAt, tickAt + 0.6], [14, 15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const rows = WAITING.filter((w) => !(left && w.kind === "dana"));

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        <div style={{ width: "100%", maxWidth: 1100 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: 22,
            }}
          >
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 40,
                fontWeight: 700,
                color: colors.text,
                letterSpacing: "-0.02em",
              }}
            >
              Waiting on
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 28,
                color: colors.sky,
              }}
            >
              {THEME} · {Math.round(tick)} people
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {rows.map((row) => {
              const person = personById(row.personId);
              const isDana = row.kind === "dana";
              return (
                <div
                  key={row.personId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "12px 16px",
                    borderRadius: layout.radius,
                    background: isDana && booked ? "rgba(34,197,94,0.12)" : colors.card,
                    border: `1px solid ${isDana && booked ? colors.ok : colors.rule}`,
                  }}
                >
                  <Avatar person={person} size={40} accent={isDana} />
                  <div
                    style={{
                      fontFamily: fontSans,
                      fontSize: 22,
                      color: colors.text,
                      width: 120,
                    }}
                  >
                    {person.name}
                  </div>
                  <div
                    style={{
                      fontFamily: fontSans,
                      fontSize: 20,
                      color: isDana && booked ? colors.ok : colors.textDim,
                      flex: 1,
                    }}
                  >
                    {isDana && booked ? "booked — leaving the list" : row.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Frame>
    </AbsoluteFill>
  );
};
