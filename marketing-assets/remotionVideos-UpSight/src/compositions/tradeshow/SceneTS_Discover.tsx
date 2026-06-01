import React from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { colors, fonts, layout, springConfident } from "../../lib/brand";
import { MonoLabel } from "../../components/MonoLabel";

/**
 * Scene 4 — Discover: AI-Guided Conversations (17-26s)
 *
 * Single-focus sequential reveal:
 *   Phase 1: Headline + label
 *   Phase 2: Chat bubbles appear one by one (centered, full-width)
 *   Phase 3: Bubbles compress upward, "insight detected" badge pops
 *   Phase 4: Theme summary line appears as the takeaway
 */

interface ChatMsg {
  sender: "ai" | "user";
  text: string;
  delay: number;
}

const CONVERSATION: ChatMsg[] = [
  {
    sender: "ai",
    text: "What's the biggest challenge with your current workflow?",
    delay: 30,
  },
  {
    sender: "user",
    text: "Onboarding takes too long. We lose people in the first 3 minutes.",
    delay: 60,
  },
  {
    sender: "ai",
    text: "Can you walk me through what happens in those 3 minutes?",
    delay: 95,
  },
  {
    sender: "user",
    text: "Too many setup steps. They expect it to just work.",
    delay: 125,
  },
];

const ChatBubble: React.FC<{
  msg: ChatMsg;
  compressProgress: number;
  index: number;
  total: number;
}> = ({ msg, compressProgress, index, total }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - msg.delay,
    fps,
    config: springConfident,
  });

  const isAI = msg.sender === "ai";
  const slideY = interpolate(progress, [0, 1], [30, 0]);

  // During compression, bubbles scale down and move up
  const compressScale = interpolate(compressProgress, [0, 1], [1, 0.7]);
  const compressY = interpolate(
    compressProgress,
    [0, 1],
    [0, -60 - index * 20],
  );
  const compressOpacity = interpolate(
    compressProgress,
    [0, 0.6, 1],
    [1, 0.8, 0.3],
  );

  return (
    <div
      style={{
        opacity: progress * compressOpacity,
        transform: `translateY(${slideY + compressY}px) scale(${compressScale})`,
        display: "flex",
        justifyContent: isAI ? "flex-start" : "flex-end",
        width: "100%",
        maxWidth: 900,
      }}
    >
      <div
        style={{
          maxWidth: "80%",
          padding: "18px 26px",
          borderRadius: layout.radius + 4,
          background: isAI ? colors.bgDarkAlt : "rgba(56, 189, 248, 0.08)",
          border: `1px solid ${
            isAI ? "rgba(245, 158, 11, 0.15)" : "rgba(56, 189, 248, 0.15)"
          }`,
          fontFamily: fonts.sans,
          fontSize: 22,
          fontWeight: 400,
          color: colors.textLight,
          lineHeight: 1.45,
        }}
      >
        {isAI && (
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 12,
              fontWeight: 500,
              color: colors.amber,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            UpSight AI
          </div>
        )}
        {msg.text}
      </div>
    </div>
  );
};

export const SceneTS_Discover: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headlineOpacity = interpolate(frame, [8, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Compression phase: bubbles compress, takeaway appears
  const compressProgress = interpolate(frame, [170, 210], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Takeaway: themes extracted
  const takeawayProgress = spring({
    frame: frame - 210,
    fps,
    config: springConfident,
  });
  const takeawayY = interpolate(takeawayProgress, [0, 1], [30, 0]);

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 120px",
        flexDirection: "column",
      }}
    >
      <MonoLabel text="// discover" delay={5} />

      <div
        style={{
          fontFamily: fonts.sans,
          fontSize: 56,
          fontWeight: 900,
          color: colors.textLight,
          letterSpacing: "-0.03em",
          marginTop: 24,
          marginBottom: 48,
          textAlign: "center",
          opacity: headlineOpacity,
        }}
      >
        Conversations That Actually{" "}
        <span style={{ color: colors.sky }}>Discover</span>
      </div>

      {/* Centered conversation */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "center",
          width: "100%",
          maxWidth: 900,
        }}
      >
        {CONVERSATION.map((msg, i) => (
          <ChatBubble
            key={i}
            msg={msg}
            compressProgress={compressProgress}
            index={i}
            total={CONVERSATION.length}
          />
        ))}
      </div>

      {/* Takeaway: theme extraction result */}
      <div
        style={{
          marginTop: 40,
          opacity: takeawayProgress,
          transform: `translateY(${takeawayY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 14,
            fontWeight: 500,
            color: colors.amber,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          3 themes auto-extracted
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
          }}
        >
          {["Onboarding friction", "Time-to-value", "Setup complexity"].map(
            (theme, i) => {
              const tagProgress = spring({
                frame: frame - (220 + i * 12),
                fps,
                config: { damping: 20, stiffness: 150, mass: 0.7 },
              });

              return (
                <div
                  key={i}
                  style={{
                    opacity: tagProgress,
                    transform: `scale(${interpolate(tagProgress, [0, 1], [0.8, 1])})`,
                    padding: "12px 24px",
                    background: colors.bgDarkAlt,
                    border: `1px solid rgba(56, 189, 248, 0.2)`,
                    borderRadius: 8,
                    fontFamily: fonts.sans,
                    fontSize: 18,
                    fontWeight: 600,
                    color: colors.sky,
                  }}
                >
                  {theme}
                </div>
              );
            },
          )}
        </div>
      </div>
    </AbsoluteFill>
  );
};
