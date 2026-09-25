import React from "react";
import { Easing, interpolate, useCurrentFrame } from "remotion";
import { colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";

const ease = Easing.bezier(...easeConfident);

const fadeUp = (frame: number, delay: number) => {
  const t = interpolate(frame - delay, [0, 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });
  return {
    opacity: t,
    translate: `0px ${interpolate(t, [0, 1], [18, 0])}px`,
    scale: interpolate(t, [0, 1], [0.97, 1]),
  };
};

const CARD_MAX = 1100;

/**
 * #1 — CSAT score view placeholder (CI-v2 paper card).
 */
export const CsatScoreView: React.FC<{
  dim?: boolean;
  delay?: number;
  compact?: boolean;
}> = ({ dim, delay = 0, compact }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);

  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: compact ? 900 : CARD_MAX,
        background: colors.card,
        border: `2px solid ${dim ? colors.rule : colors.green}`,
        borderRadius: layout.radius + 10,
        overflow: "hidden",
        boxShadow: "0 18px 48px rgba(5,5,8,0.1)",
        opacity: anim.opacity * (dim ? 0.5 : 1),
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 24px",
          borderBottom: `1px solid ${colors.rule}`,
          background: "rgba(5,5,8,0.03)",
        }}
      >
        {["#ef4444", "#f59e0b", "#22c55e"].map((c) => (
          <div
            key={c}
            style={{ width: 11, height: 11, borderRadius: 999, background: c }}
          />
        ))}
        <div
          style={{
            marginLeft: 10,
            fontFamily: fontMono,
            fontSize: type.label,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: colors.inkDim,
          }}
        >
          Account · CSAT response
        </div>
        <div
          style={{
            marginLeft: "auto",
            fontFamily: fontMono,
            fontSize: 16,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: colors.inkDim,
            border: `1px solid ${colors.rule}`,
            borderRadius: 999,
            padding: "6px 12px",
          }}
        >
          Placeholder
        </div>
      </div>

      <div style={{ padding: compact ? "28px 32px" : "32px 40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 24,
            marginBottom: 20,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.inkDim,
                marginBottom: 8,
              }}
            >
              Contact
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: type.bodySm + 4,
                fontWeight: 800,
                color: colors.ink,
                letterSpacing: "-0.02em",
              }}
            >
              Jordan Hale · VP CS
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 18,
                color: colors.inkDim,
                marginTop: 6,
              }}
            >
              Acme Co · renews Apr 2
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.inkDim,
                marginBottom: 8,
              }}
            >
              Mar 12
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 24,
                fontWeight: 700,
                color: colors.blue,
              }}
            >
              Post-call survey
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: fontSans,
              fontSize: compact ? 56 : type.score,
              fontWeight: 900,
              color: colors.ink,
              letterSpacing: "-0.035em",
            }}
          >
            Fine.
          </div>
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: compact ? 56 : type.score,
                fontWeight: 900,
                color: colors.green,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              7/10
            </div>
            <div
              style={{
                fontFamily: fontMono,
                fontSize: type.label,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.green,
                marginTop: 8,
              }}
            >
              Acceptable
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 22,
            height: 10,
            borderRadius: 999,
            background: "rgba(5,5,8,0.08)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "70%",
              height: "100%",
              background: colors.green,
              borderRadius: 999,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const CsatCard = CsatScoreView;

/** #2 — AI follow-up */
export const FollowUpBubble: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD_MAX,
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
        AI interviewer · follow-up
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.body,
          fontWeight: 700,
          color: colors.ink,
          lineHeight: 1.3,
          letterSpacing: "-0.02em",
        }}
      >
        What does “fine” actually mean — anything blocking a clean renew?
      </div>
    </div>
  );
};

/** #3 — Evidence receipt */
export const EvidenceReceipt: React.FC<{
  quote: string;
  tag: string;
  who: string;
  when: string;
  delay?: number;
  illustrative?: boolean;
}> = ({ quote, tag, who, when, delay = 0, illustrative }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);

  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD_MAX,
        background: colors.card,
        border: `2px solid ${colors.amber}`,
        borderRadius: layout.radius + 8,
        padding: "28px 32px",
        boxShadow: `0 16px 40px rgba(5,5,8,0.1), 0 0 0 4px ${colors.amberGlow}`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 14,
          gap: 12,
          flexWrap: "wrap",
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
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          {illustrative ? (
            <span
              style={{
                fontFamily: fontMono,
                fontSize: 16,
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
          ) : null}
          <span
            style={{
              fontFamily: fontMono,
              fontSize: 16,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: colors.ink,
              background: colors.amber,
              borderRadius: 999,
              padding: "8px 14px",
              fontWeight: 500,
            }}
          >
            {tag}
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
        “{quote}”
      </div>
      <div
        style={{
          marginTop: 16,
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          fontFamily: fontMono,
          fontSize: 18,
          color: colors.inkDim,
        }}
      >
        {[who, when].map((m) => (
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

/** Next best action */
export const NextBestAction: React.FC<{
  action: string;
  delay?: number;
}> = ({ action, delay = 0 }) => {
  const frame = useCurrentFrame();
  const anim = fadeUp(frame, delay);
  return (
    <div
      style={{
        ...anim,
        width: "100%",
        maxWidth: CARD_MAX,
        display: "flex",
        borderRadius: layout.radius + 8,
        overflow: "hidden",
        border: `2px solid ${colors.blue}55`,
        background: colors.card,
        boxShadow: "0 12px 32px rgba(5,5,8,0.08)",
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
            lineHeight: 1.28,
          }}
        >
          {action}
        </div>
      </div>
    </div>
  );
};

/** #4 — Pattern across N accounts */
export const PatternPunch: React.FC<{
  delay?: number;
  count?: number;
  theme?: string;
}> = ({ delay = 0, count = 13, theme = "CFO froze spend" }) => {
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
        translate: `0px ${interpolate(t, [0, 1], [16, 0])}px`,
        width: "100%",
        maxWidth: CARD_MAX,
        background: colors.card,
        border: `2px solid ${colors.rule}`,
        borderRadius: layout.radius + 8,
        padding: "28px 32px",
        boxShadow: "0 16px 40px rgba(5,5,8,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 16,
          marginBottom: 16,
          flexWrap: "wrap",
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
          Pattern across book
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.bodySm,
            fontWeight: 700,
            color: colors.inkDim,
          }}
        >
          Driver — not an anecdote
        </div>
      </div>

      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.body,
          fontWeight: 700,
          color: colors.ink,
          marginBottom: 20,
        }}
      >
        Theme: <span style={{ color: colors.amber }}>{theme}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        {Array.from({ length: Math.min(count, 13) }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 36,
              height: 36,
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
            fontSize: 40,
            fontWeight: 900,
            color: colors.amber,
            letterSpacing: "-0.02em",
            marginLeft: 8,
          }}
        >
          → {count} accounts
        </div>
      </div>
    </div>
  );
};

export const ThemePunch = PatternPunch;
