import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useSlideRight, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Evidence cards appear showing what customers actually said.
 * The "aha" moment — the same pain point surfaces across interviews.
 *
 * ASSET NEEDED: None (pure animation). But optionally replace with:
 *   - Screenshot: evidence-cards.png (UpSight evidence view with 4-5 quote cards)
 */

interface EvidenceCard {
  quote: string;
  speaker: string;
  source: string;
  timestamp: string;
}

const EVIDENCE: EvidenceCard[] = [
  {
    quote: '"The onboarding was confusing — I almost gave up"',
    speaker: "Sarah Chen",
    source: "Interview #3",
    timestamp: "12:47",
  },
  {
    quote: '"Setup took way too long, expected it to just work"',
    speaker: "James Park",
    source: "Interview #7",
    timestamp: "8:22",
  },
];

const EvidenceCardComponent: React.FC<{
  card: EvidenceCard;
  index: number;
}> = ({ card, index }) => {
  const style = useSlideRight(22 + index * 28, 50);

  return (
    <div
      style={{
        ...style,
        width: "100%",
        background: colors.bgDarkAlt,
        border: "1px solid rgba(56, 189, 248, 0.12)",
        borderLeft: `3px solid ${colors.sky}`,
        borderRadius: layout.radius,
        padding: "24px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Quote */}
      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 19,
          fontWeight: 500,
          fontStyle: "italic",
          color: colors.textLight,
          lineHeight: 1.45,
        }}
      >
        {card.quote}
      </div>

      {/* Attribution */}
      <div
        style={{
          display: "flex",
          gap: 12,
          alignItems: "center",
          fontFamily: fonts.mono,
          fontSize: 13,
          color: colors.textDimAlt,
        }}
      >
        <span style={{ color: colors.sky }}>{card.speaker}</span>
        <span>·</span>
        <span>{card.source}</span>
        <span>·</span>
        <span>{card.timestamp}</span>
      </div>
    </div>
  );
};

export const SceneEvidenceReveal: React.FC = () => {
  const headlineStyle = useSlideUp(12);
  const countOpacity = useFadeIn(95, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 60,
      }}
    >
      <MonoLabel text="// what customers actually said" delay={5} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 52,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 24,
          marginBottom: 36,
        }}
      >
        Your customers
        <br />
        <span style={{ color: colors.sky }}>already told you</span>
      </div>

      {/* Evidence cards */}
      <div
        style={{
          width: 780,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {EVIDENCE.map((card, i) => (
          <EvidenceCardComponent key={i} card={card} index={i} />
        ))}
      </div>

      {/* Counter badge */}
      <div
        style={{
          marginTop: 32,
          padding: "10px 24px",
          borderRadius: 20,
          background: "rgba(56, 189, 248, 0.1)",
          border: "1px solid rgba(56, 189, 248, 0.2)",
          fontFamily: fonts.mono,
          fontSize: 16,
          color: colors.sky,
          opacity: countOpacity,
        }}
      >
        47 receipts from 10 interviews — auto-extracted
      </div>
    </AbsoluteFill>
  );
};
