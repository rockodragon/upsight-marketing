import React from "react";
import { colors, layout } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";

const fillBox: React.CSSProperties = {
  width: "100%",
  height: "100%",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  background: colors.card,
  borderRadius: layout.radius + 10,
  boxShadow: "0 20px 56px rgba(5,5,8,0.1)",
  overflow: "hidden",
};

/** CSAT card — packed top-to-bottom (score + meta grid) */
export const MockCsatCard: React.FC<{ score?: string; dim?: boolean }> = ({
  score = "7/10",
  dim,
}) => (
  <div
    style={{
      ...fillBox,
      border: `3px solid ${dim ? colors.rule : colors.green}`,
      padding: "32px 32px 36px",
      justifyContent: "space-between",
      opacity: dim ? 0.5 : 1,
      gap: 18,
    }}
  >
    <div
      style={{
        fontFamily: fontMono,
        fontSize: 17,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: colors.inkDim,
      }}
    >
      Customer satisfaction
    </div>

    <div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: 100,
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: colors.ink,
            lineHeight: 0.95,
          }}
        >
          Fine.
        </div>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: 100,
            fontWeight: 900,
            color: colors.green,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
          }}
        >
          {score}
        </div>
      </div>
      <div
        style={{
          marginTop: 22,
          height: 18,
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

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
      {[
        ["Trend", "Stable ▲"],
        ["Segment", "Enterprise"],
        ["Owner", "CS · Jordan"],
        ["Status", "Looks healthy"],
      ].map(([k, v]) => (
        <div
          key={k}
          style={{
            padding: "20px 18px",
            borderRadius: layout.radius,
            background: "rgba(5,5,8,0.04)",
            border: `1px solid ${colors.rule}`,
          }}
        >
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.inkDim,
              marginBottom: 8,
            }}
          >
            {k}
          </div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 26,
              fontWeight: 800,
              color: colors.ink,
            }}
          >
            {v}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const MockContractCut: React.FC = () => (
  <div
    style={{
      rotate: "-8deg",
      fontFamily: fontMono,
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "0.12em",
      color: colors.red,
      border: `5px solid ${colors.red}`,
      borderRadius: 10,
      padding: "24px 34px",
      background: "rgba(239,68,68,0.14)",
      textTransform: "uppercase",
    }}
  >
    Contract cut
  </div>
);

/** Personalized Ask — compact rows + history panel (no stretched empty slabs) */
export const MockPersonalizedAsk: React.FC = () => {
  const qs = [
    { q: "What blocked renewal last quarter?", from: "Call · Feb 3" },
    { q: "How is the CFO feeling about spend?", from: "Notes · Mar 1" },
    { q: "Anything ‘fine’ is covering?", from: "Last survey · 7/10" },
    { q: "Who else is in the buying group now?", from: "Call · Jan 18" },
    { q: "What would make renewing easy?", from: "Notes · Mar 8" },
  ];
  return (
    <div
      style={{
        ...fillBox,
        border: `1px solid ${colors.rule}`,
        padding: 18,
        gap: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 0,
          paddingBottom: 10,
          borderBottom: `1px solid ${colors.rule}`,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: fontMono,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: colors.amber,
            }}
          >
            Personalized Ask
          </div>
          <div
            style={{
              fontFamily: fontSans,
              fontSize: 24,
              fontWeight: 800,
              color: colors.ink,
              marginTop: 2,
            }}
          >
            Jordan Lee · Acme
          </div>
        </div>
        <div
          style={{
            fontFamily: fontMono,
            fontSize: 13,
            color: colors.inkDim,
            textAlign: "right",
          }}
        >
          3 calls · 1 survey · 12 notes
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, flexShrink: 0 }}>
        {qs.map((item) => (
          <div
            key={item.q}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px 14px",
              borderRadius: layout.radius,
              background: "rgba(56,189,248,0.1)",
              border: `1px solid ${colors.sky}40`,
              gap: 3,
            }}
          >
            <div
              style={{
                fontFamily: fontMono,
                fontSize: 11,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: colors.sky,
              }}
            >
              From {item.from}
            </div>
            <div
              style={{
                fontFamily: fontSans,
                fontSize: 22,
                fontWeight: 700,
                color: colors.ink,
                letterSpacing: "-0.02em",
                lineHeight: 1.25,
              }}
            >
              {item.q}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          flex: 1,
          minHeight: 0,
          borderRadius: layout.radius,
          background: "rgba(5,5,8,0.03)",
          border: `1px solid ${colors.rule}`,
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontFamily: fontMono,
            fontSize: 12,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.inkDim,
          }}
        >
          History this ask was drafted from
        </div>
        {[
          "“Procurement is slowing everything down.” — Feb call",
          "NPS 7 · no comment · Mar survey",
          "Champion went quiet after QBR — CS note",
        ].map((line) => (
          <div
            key={line}
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              fontFamily: fontSans,
              fontSize: 18,
              fontWeight: 600,
              color: colors.ink,
              lineHeight: 1.3,
              padding: "0 12px",
              borderRadius: 8,
              background: colors.card,
              border: `1px solid ${colors.rule}`,
            }}
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
};

export const MockFollowUpPanel: React.FC = () => (
  <div style={{ ...fillBox, border: `1px solid ${colors.rule}` }}>
    <div
      style={{
        padding: "18px 24px",
        borderBottom: `1px solid ${colors.rule}`,
        fontFamily: fontMono,
        fontSize: 16,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: colors.sky,
        background: "rgba(56,189,248,0.1)",
        flexShrink: 0,
      }}
    >
      AI interviewer · follow-up
    </div>
    <div
      style={{
        flex: 1,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        gap: 14,
        minHeight: 0,
      }}
    >
      <Bubble who="them">Fine. 7/10 — renewal should be fine.</Bubble>
      <Bubble who="ai">
        What does “should” mean — anything blocking a clean renew?
      </Bubble>
      <Bubble who="them" highlight>
        Our CFO just froze discretionary spend.
      </Bubble>
    </div>
  </div>
);

const Bubble: React.FC<{
  who: "them" | "ai";
  children: React.ReactNode;
  highlight?: boolean;
}> = ({ who, children, highlight }) => (
  <div
    style={{
      alignSelf: who === "ai" ? "flex-start" : "flex-end",
      maxWidth: "94%",
      padding: "24px 26px",
      borderRadius: 16,
      background: highlight
        ? "rgba(245,158,11,0.16)"
        : who === "ai"
          ? "rgba(56,189,248,0.14)"
          : "rgba(5,5,8,0.06)",
      border: `1px solid ${
        highlight ? `${colors.amber}66` : who === "ai" ? `${colors.sky}44` : colors.rule
      }`,
      fontFamily: fontSans,
      fontSize: 30,
      fontWeight: highlight ? 800 : 650,
      lineHeight: 1.3,
      color: colors.ink,
      letterSpacing: "-0.02em",
    }}
  >
    {children}
  </div>
);

export const MockEvidenceReceipt: React.FC = () => (
  <div
    style={{
      ...fillBox,
      border: `3px solid ${colors.amber}`,
      padding: 32,
      justifyContent: "space-between",
      gap: 20,
      boxShadow: `0 24px 70px ${colors.amberGlow}`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: fontMono,
          fontSize: 17,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.amber,
        }}
      >
        Evidence receipt
      </div>
      <div
        style={{
          fontFamily: fontMono,
          fontSize: 17,
          fontWeight: 500,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: colors.ink,
          background: "rgba(245,158,11,0.22)",
          border: `1px solid ${colors.amber}`,
          borderRadius: 999,
          padding: "12px 18px",
        }}
      >
        Renewal risk
      </div>
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 44,
        fontWeight: 800,
        lineHeight: 1.2,
        color: colors.ink,
        letterSpacing: "-0.03em",
      }}
    >
      “Our CFO just froze discretionary spend.”
    </div>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        fontFamily: fontMono,
        fontSize: 17,
        color: colors.inkDim,
      }}
    >
      {["Jordan Lee", "Acme · CS", "Mar 12, 2026", "Survey follow-up"].map(
        (m) => (
          <span
            key={m}
            style={{
              padding: "12px 14px",
              borderRadius: 8,
              background: "rgba(5,5,8,0.05)",
              border: `1px solid ${colors.rule}`,
            }}
          >
            {m}
          </span>
        ),
      )}
    </div>
    <div
      style={{
        padding: "20px 22px",
        borderRadius: layout.radius,
        background: "rgba(245,158,11,0.1)",
        border: `1px solid ${colors.amber}55`,
        fontFamily: fontSans,
        fontSize: 26,
        fontWeight: 700,
        color: colors.ink,
      }}
    >
      Why it matters: budget freeze → renewal at risk this quarter
    </div>
  </div>
);

export const MockThemeCluster: React.FC<{ count?: number }> = ({
  count = 13,
}) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      minHeight: 0,
      background: colors.card,
      border: `1px solid ${colors.rule}`,
      borderRadius: layout.radius + 10,
      padding: 24,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 16,
    }}
  >
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 26,
        fontWeight: 800,
        color: colors.ink,
      }}
    >
      Same theme · {count} accounts
    </div>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
      {Array.from({ length: Math.min(count, 13) }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 48,
            height: 48,
            borderRadius: 999,
            background:
              i === 0 ? colors.amber : `rgba(56,189,248,${0.28 + (i % 4) * 0.12})`,
          }}
        />
      ))}
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 32,
          fontWeight: 900,
          color: colors.amber,
        }}
      >
        → {count}
      </div>
    </div>
  </div>
);

export const MockShallowWall: React.FC = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 0,
    }}
  >
    {["Fine.", "7/10", "No notes"].map((t) => (
      <div
        key={t}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: colors.card,
          border: `1px solid ${colors.rule}`,
          borderRadius: layout.radius + 8,
          fontFamily: fontSans,
          fontSize: 64,
          fontWeight: 900,
          color: colors.inkDim,
          letterSpacing: "-0.03em",
        }}
      >
        {t}
      </div>
    ))}
  </div>
);
