import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideRight, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

/**
 * Scene: Slack-style debate showing the "old way" —
 * team arguing about what to build with no evidence.
 */

interface SlackMsg {
  name: string;
  role: string;
  text: string;
  emoji: string;
}

const MESSAGES: SlackMsg[] = [
  {
    name: "Sarah",
    role: "PM",
    emoji: "🎯",
    text: "Customers want better onboarding",
  },
  {
    name: "Marcus",
    role: "CEO",
    emoji: "👔",
    text: "No — they need more integrations",
  },
  {
    name: "Dev",
    role: "Eng Lead",
    emoji: "⚙️",
    text: "My gut says retention is fine...",
  },
];

const SlackMessage: React.FC<{ msg: SlackMsg; index: number }> = ({
  msg,
  index,
}) => {
  const style = useSlideRight(18 + index * 28, 50);

  return (
    <div
      style={{
        ...style,
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        width: "100%",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 8,
          background: colors.bgDarkAlt,
          border: "1px solid rgba(238,238,242,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 22,
          flexShrink: 0,
        }}
      >
        {msg.emoji}
      </div>

      <div style={{ flex: 1 }}>
        {/* Name + role */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
          <span
            style={{
              fontFamily: fonts.sans,
              fontWeight: 700,
              fontSize: 18,
              color: colors.textLight,
            }}
          >
            {msg.name}
          </span>
          <span
            style={{
              fontFamily: fonts.mono,
              fontSize: 13,
              color: colors.textDimAlt,
            }}
          >
            {msg.role}
          </span>
        </div>

        {/* Message text */}
        <div
          style={{
            fontFamily: fonts.sans,
            fontSize: 20,
            fontWeight: 400,
            color: colors.textDim,
            lineHeight: 1.45,
            marginTop: 4,
          }}
        >
          {msg.text}
        </div>
      </div>
    </div>
  );
};

export const SceneSlackDebate: React.FC = () => {
  const weeksLater = useFadeIn(110, 20);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// every team meeting" delay={5} />

      {/* Slack-style message list */}
      <div
        style={{
          marginTop: 40,
          width: 780,
          display: "flex",
          flexDirection: "column",
          gap: 32,
          background: "rgba(10,10,16,0.6)",
          border: "1px solid rgba(238,238,242,0.04)",
          borderRadius: layout.radius,
          padding: "40px 40px",
        }}
      >
        {MESSAGES.map((msg, i) => (
          <SlackMessage key={i} msg={msg} index={i} />
        ))}
      </div>

      {/* "3 weeks later: still debating" */}
      <div
        style={{
          marginTop: 48,
          fontFamily: fonts.mono,
          fontSize: 22,
          fontWeight: 500,
          color: colors.red,
          letterSpacing: "0.06em",
          opacity: weeksLater,
        }}
      >
        3 weeks later: still debating
      </div>
    </AbsoluteFill>
  );
};
