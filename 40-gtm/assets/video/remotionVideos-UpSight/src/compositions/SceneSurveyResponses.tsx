import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideRight, useFadeIn, useCountUp } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Survey responses flowing in — visual of community engagement.
 * Shows a survey link shared, then responses ticking up.
 */

interface Response {
  text: string;
  role: string;
  emoji: string;
}

const RESPONSES: Response[] = [
  { text: "Better docs and tutorials", role: "Developer", emoji: "👩‍💻" },
  { text: "More in-person meetups", role: "Organizer", emoji: "🎤" },
  { text: "Mentorship programs", role: "Member", emoji: "🌍" },
];

const ResponseRow: React.FC<{ resp: Response; index: number }> = ({
  resp,
  index,
}) => {
  const style = useSlideRight(30 + index * 25, 50);

  return (
    <div
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        gap: 18,
        width: "100%",
        background: colors.bgDarkAlt,
        border: "1px solid rgba(34, 197, 94, 0.12)",
        borderLeft: `3px solid ${colors.green}`,
        borderRadius: layout.radius,
        padding: "22px 26px",
      }}
    >
      <span style={{ fontSize: 28 }}>{resp.emoji}</span>
      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 20,
            fontWeight: 500,
            color: colors.textLight,
          }}
        >
          {resp.text}
        </div>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            color: colors.textDimAlt,
            marginTop: 4,
          }}
        >
          {resp.role}
        </div>
      </div>
    </div>
  );
};

export const SceneSurveyResponses: React.FC = () => {
  const headlineStyle = useFadeIn(10, 18);
  const counterOpacity = useFadeIn(100, 20);
  const responseCount = useCountUp(127, 90, 40, 0);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 70,
      }}
    >
      <MonoLabel text="// responses flowing in" delay={5} />

      <div
        style={{
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 48,
          color: colors.textLight,
          textAlign: "center",
          letterSpacing: "-0.03em",
          marginTop: 28,
          marginBottom: 40,
          opacity: headlineStyle,
        }}
      >
        One link. <span style={{ color: colors.green }}>Real answers.</span>
      </div>

      {/* Response cards */}
      <div
        style={{
          width: 720,
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        {RESPONSES.map((resp, i) => (
          <ResponseRow key={i} resp={resp} index={i} />
        ))}
      </div>

      {/* Response counter */}
      <div
        style={{
          marginTop: 36,
          display: "flex",
          alignItems: "baseline",
          gap: 12,
          opacity: counterOpacity,
        }}
      >
        <span
          style={{
            fontFamily: fonts.sans,
            fontWeight: 900,
            fontSize: 48,
            color: colors.green,
          }}
        >
          {responseCount}
        </span>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 18,
            color: colors.textDimAlt,
          }}
        >
          responses in 48 hours
        </span>
      </div>
    </AbsoluteFill>
  );
};
