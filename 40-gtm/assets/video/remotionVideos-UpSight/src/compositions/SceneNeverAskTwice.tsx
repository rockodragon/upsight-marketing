import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useFadeIn, useStrikethrough } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: "Never ask what you already know" — the smart survey moment.
 * Shows questions being skipped because the profile already has answers.
 */

interface Question {
  text: string;
  known: boolean;
  answer?: string;
}

const QUESTIONS: Question[] = [
  { text: "What is your role?", known: true, answer: "Product Manager" },
  { text: "Company size?", known: true, answer: "50 people" },
  { text: "What changed since we last spoke?", known: false },
];

const QuestionRow: React.FC<{ q: Question; index: number }> = ({
  q,
  index,
}) => {
  const style = useSlideUp(18 + index * 28, 40);
  const strikeProgress = useStrikethrough(32 + index * 28, 14);
  const answerOpacity = useFadeIn(36 + index * 28, 12);

  return (
    <div
      style={{
        ...style,
        width: "100%",
        padding: "24px 28px",
        borderRadius: layout.radius,
        background: q.known
          ? "rgba(34, 197, 94, 0.06)"
          : "rgba(56, 189, 248, 0.06)",
        border: `1px solid ${q.known ? "rgba(34, 197, 94, 0.15)" : "rgba(56, 189, 248, 0.15)"}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {/* Status indicator */}
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: q.known ? colors.green : colors.sky,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
            color: colors.bgDark,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {q.known ? "✓" : "?"}
        </div>

        <div style={{ flex: 1 }}>
          {/* Question text — struck through if known */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                fontFamily: fonts.sans,
                fontSize: 21,
                fontWeight: 500,
                color: q.known ? colors.textDimAlt : colors.textLight,
              }}
            >
              {q.text}
            </span>
            {q.known && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  height: 2,
                  width: `${strikeProgress * 100}%`,
                  background: colors.green,
                  opacity: 0.6,
                }}
              />
            )}
          </div>

          {/* Known answer or "asks this" */}
          {q.known && q.answer && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: colors.green,
                marginTop: 6,
                opacity: answerOpacity,
              }}
            >
              Already known: {q.answer}
            </div>
          )}
          {!q.known && (
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 14,
                color: colors.sky,
                marginTop: 6,
                opacity: answerOpacity,
              }}
            >
              → Asks only what's new
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const SceneNeverAskTwice: React.FC = () => {
  const headlineStyle = useSlideUp(8);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// smart surveys" delay={4} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 48,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 28,
          marginBottom: 44,
        }}
      >
        Never ask what you{" "}
        <span style={{ color: colors.green }}>already know</span>
      </div>

      {/* Question rows */}
      <div
        style={{
          width: 700,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {QUESTIONS.map((q, i) => (
          <QuestionRow key={i} q={q} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
