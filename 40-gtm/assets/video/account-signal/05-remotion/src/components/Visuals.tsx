import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";

const ease = Easing.bezier(...easeConfident);
const CARD = 1080;

const fadeUp = (frame: number, delay: number) => {
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return {
    opacity: t,
    translate: `0px ${interpolate(t, [0, 1], [16, 0])}px`,
  };
};

export const ApproachCards: React.FC<{ late?: boolean }> = ({ late }) => {
  const frame = useCurrentFrame();
  const items = [
    { title: "Another survey", note: "More scores. Same shallow answers." },
    { title: "CRM note", note: "“Lost — price.” Rarely the truth." },
    { title: "Wait for QBR", note: "Calendar moves. The account doesn’t." },
  ];
  return (
    <div style={{ display: "flex", gap: 18, width: "100%", maxWidth: 1520 }}>
      {items.map((item, i) => {
        const t = interpolate(frame, [i * 6, i * 6 + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        return (
          <div
            key={item.title}
            style={{
              flex: 1,
              opacity: t * (late ? 0.45 : 1),
              translate: `0px ${interpolate(t, [0, 1], [18, 0])}px`,
              background: colors.card,
              border: `1px solid ${colors.rule}`,
              borderRadius: layout.radius + 8,
              padding: "28px 26px",
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
                marginBottom: 14,
              }}
            >
              Usual path
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 34,
                fontWeight: 800,
                color: colors.ink,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: type.bodySm,
                color: colors.inkDim,
                lineHeight: 1.35,
              }}
            >
              {item.note}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const SourcePills: React.FC = () => {
  const frame = useCurrentFrame();
  const sources = ["Survey follow-ups", "Call transcripts", "Email threads"];
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
      {sources.map((s, i) => {
        const t = interpolate(frame, [4 + i * 5, 16 + i * 5], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        return (
          <div
            key={s}
            style={{
              opacity: t,
              translate: `0px ${interpolate(t, [0, 1], [12, 0])}px`,
              padding: "18px 28px",
              borderRadius: 999,
              background: colors.card,
              border: `2px solid ${colors.blue}44`,
              fontFamily: fontSans,
              fontSize: 32,
              fontWeight: 700,
              color: colors.ink,
              boxShadow: "0 10px 28px rgba(5,5,8,0.06)",
            }}
          >
            {s}
          </div>
        );
      })}
    </div>
  );
};

export const OutcomeRow: React.FC = () => {
  const frame = useCurrentFrame();
  const outcomes = [
    { label: "Reason", detail: "You can defend" },
    { label: "Receipt", detail: "You can click" },
    { label: "Next move", detail: "You can act" },
  ];
  return (
    <div style={{ display: "flex", gap: 18, width: "100%", maxWidth: 1320 }}>
      {outcomes.map((o, i) => {
        const t = interpolate(frame, [8 + i * 6, 20 + i * 6], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        return (
          <div
            key={o.label}
            style={{
              flex: 1,
              opacity: t,
              translate: `0px ${interpolate(t, [0, 1], [14, 0])}px`,
              background: colors.card,
              border: `2px solid ${i === 2 ? colors.amber : colors.rule}`,
              borderRadius: layout.radius + 8,
              padding: "26px 24px",
              textAlign: "center",
              boxShadow:
                i === 2
                  ? `0 14px 36px ${colors.amberGlow}`
                  : "0 10px 28px rgba(5,5,8,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 36,
                fontWeight: 900,
                color: i === 2 ? colors.amber : colors.ink,
                letterSpacing: "-0.02em",
              }}
            >
              {o.label}
            </div>
            <div
              style={{
                marginTop: 10,
                fontFamily: fontSans,
                fontSize: type.bodySm,
                color: colors.inkDim,
              }}
            >
              {o.detail}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const FineCard: React.FC<{ dim?: boolean; delay?: number }> = ({
  dim,
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        opacity: anim.opacity * (dim ? 0.5 : 1),
        width: "100%",
        maxWidth: CARD,
        background: colors.card,
        border: `2px solid ${dim ? colors.rule : colors.green}`,
        borderRadius: layout.radius + 10,
        padding: "36px 40px",
        boxShadow: "0 16px 40px rgba(5,5,8,0.08)",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.inkDim,
          marginBottom: 16,
        }}
      >
        Scoreboard · Mar 12
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.score,
            fontWeight: 900,
            color: colors.ink,
            letterSpacing: "-0.035em",
          }}
        >
          Fine.
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.score,
            fontWeight: 900,
            color: colors.green,
            letterSpacing: "-0.04em",
          }}
        >
          7/10
        </div>
      </div>
    </div>
  );
};

export const FollowUp: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD,
        padding: "24px 28px",
        borderRadius: layout.radius + 6,
        background: "rgba(2,132,199,0.08)",
        border: `2px solid ${colors.blue}44`,
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.blue,
          marginBottom: 10,
        }}
      >
        Follow-up · wherever the words are
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.body,
          fontWeight: 700,
          color: colors.ink,
          lineHeight: 1.3,
        }}
      >
        What does “fine” actually mean — anything blocking a clean renew?
      </div>
    </div>
  );
};

export const Receipt: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD,
        background: colors.card,
        border: `2px solid ${colors.amber}`,
        borderRadius: layout.radius + 8,
        padding: "28px 32px",
        boxShadow: `0 16px 40px rgba(5,5,8,0.08), 0 0 0 4px ${colors.amberGlow}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 14,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: fontMono,
            fontSize: type.label,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.amber,
            fontWeight: 500,
          }}
        >
          Evidence receipt
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 15,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.inkDim,
              border: `1px solid ${colors.rule}`,
              borderRadius: 999,
              padding: "6px 12px",
            }}
          >
            Illustrative
          </span>
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 15,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: colors.ink,
              background: colors.amber,
              borderRadius: 999,
              padding: "6px 12px",
              fontWeight: 500,
            }}
          >
            CFO froze spend
          </span>
        </div>
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.quote,
          fontWeight: 700,
          lineHeight: 1.28,
          color: colors.ink,
          letterSpacing: "-0.02em",
        }}
      >
        “Should be fine — but our CFO froze spend until Q3.”
      </div>
      <div
        style={{
          marginTop: 16,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          fontFamily: fontMono,
          fontSize: 17,
          color: colors.inkDim,
        }}
      >
        {["Jordan Hale · VP CS", "Mar 12 · follow-up"].map((m) => (
          <span
            key={m}
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: `1px solid ${colors.rule}`,
              background: colors.paper,
            }}
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
};

export const NextMove: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD,
        display: "flex",
        borderRadius: layout.radius + 8,
        overflow: "hidden",
        border: `2px solid ${colors.blue}55`,
        background: colors.card,
      }}
    >
      <div style={{ width: 10, background: colors.blue, flexShrink: 0 }} />
      <div style={{ padding: "22px 28px", flex: 1 }}>
        <div
          style={{
            fontFamily: fontMono,
            fontSize: type.label,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.blue,
            marginBottom: 10,
          }}
        >
          Next best action
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.body,
            fontWeight: 800,
            color: colors.ink,
            letterSpacing: "-0.02em",
          }}
        >
          Loop in the exec sponsor before renewal.
        </div>
      </div>
    </div>
  );
};

export const Pattern: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return (
    <div
      style={{
        opacity: t,
        translate: `0px ${interpolate(t, [0, 1], [14, 0])}px`,
        width: "100%",
        maxWidth: CARD,
        background: colors.card,
        border: `2px solid ${colors.rule}`,
        borderRadius: layout.radius + 8,
        padding: "28px 32px",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: colors.amber,
          marginBottom: 12,
        }}
      >
        Pattern across the book
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.body,
          fontWeight: 700,
          color: colors.ink,
          marginBottom: 18,
        }}
      >
        Theme: <span style={{ color: colors.amber }}>CFO froze spend</span>
        <span style={{ color: colors.inkDim }}> — driver, not anecdote</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        {Array.from({ length: 13 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 34,
              height: 34,
              borderRadius: 999,
              background:
                i === 0 ? colors.amber : `rgba(2,132,199,${0.2 + (i % 5) * 0.1})`,
              border: `1px solid ${colors.rule}`,
              opacity: interpolate(frame - delay, [i * 2, i * 2 + 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />
        ))}
        <div
          style={{
            fontFamily: fontSans,
            fontSize: 38,
            fontWeight: 900,
            color: colors.amber,
            marginLeft: 6,
          }}
        >
          → 13 accounts
        </div>
      </div>
    </div>
  );
};

export const LandThree: React.FC = () => {
  const frame = useCurrentFrame();
  const items = [
    { title: "The receipt", sub: "Click the finding → who said it" },
    { title: "The move", sub: "Not just risk — the next action" },
    { title: "The pattern", sub: "One line → matched across accounts" },
  ];
  return (
    <div style={{ display: "flex", gap: 18, width: "100%", maxWidth: 1400 }}>
      {items.map((item, i) => {
        const t = interpolate(frame, [i * 5, i * 5 + 12], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        });
        return (
          <div
            key={item.title}
            style={{
              flex: 1,
              opacity: t,
              translate: `0px ${interpolate(t, [0, 1], [16, 0])}px`,
              background: colors.card,
              border: `2px solid ${i === 1 ? colors.amber : colors.rule}`,
              borderRadius: layout.radius + 8,
              padding: "28px 26px",
              boxShadow:
                i === 1
                  ? `0 14px 36px ${colors.amberGlow}`
                  : "0 10px 28px rgba(5,5,8,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 34,
                fontWeight: 900,
                color: colors.ink,
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              {item.title}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: type.bodySm,
                color: colors.inkDim,
                lineHeight: 1.35,
              }}
            >
              {item.sub}
            </div>
          </div>
        );
      })}
    </div>
  );
};
