import React from "react";
import { AbsoluteFill } from "remotion";
import { colors, fonts, layout } from "../lib/brand";
import { useSlideUp, useFadeIn } from "../lib/animations";
import { MonoLabel } from "../components/MonoLabel";

interface ChatMessage {
  role: "bot" | "user";
  text: string;
}

const MESSAGES: ChatMessage[] = [
  {
    role: "bot",
    text: "Hey! Quick question — what's your biggest challenge with customer research?",
  },
  {
    role: "user",
    text: "Honestly, I never get enough responses to surveys...",
  },
  {
    role: "bot",
    text: "That's really common. What if you could get 3x the insights in half the time?",
  },
];

const ChatBubble: React.FC<{ msg: ChatMessage; index: number }> = ({
  msg,
  index,
}) => {
  const style = useSlideUp(25 + index * 18, 40);
  const isBot = msg.role === "bot";

  return (
    <div
      style={{
        ...style,
        alignSelf: isBot ? "flex-start" : "flex-end",
        maxWidth: "82%",
        padding: "20px 28px",
        borderRadius: layout.radius,
        ...(isBot
          ? {
              borderBottomLeftRadius: 2,
              background: colors.bgDarkAlt,
              border: `1px solid rgba(56, 189, 248, 0.15)`,
              color: colors.textLight,
            }
          : {
              borderBottomRightRadius: 2,
              background: "rgba(56, 189, 248, 0.08)",
              border: `1px solid rgba(56, 189, 248, 0.12)`,
              color: colors.sky,
            }),
        fontFamily: fonts.sans,
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 1.55,
      }}
    >
      {msg.text}
    </div>
  );
};

export const SceneSolution: React.FC = () => {
  const headlineStyle = useSlideUp(10);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: 80,
      }}
    >
      <MonoLabel text="// the better way" delay={5} />

      <div
        style={{
          ...headlineStyle,
          fontFamily: fonts.sans,
          fontWeight: 900,
          fontSize: 82,
          color: colors.textLight,
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
          marginTop: 20,
        }}
      >
        <span style={{ color: colors.sky }}>AI Conversations</span>
        <br />
        That Actually Convert
      </div>

      {/* Chat demo */}
      <div
        style={{
          marginTop: 48,
          width: 720,
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        {MESSAGES.map((msg, i) => (
          <ChatBubble key={i} msg={msg} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
