import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Avatar, Citation, Frame } from "../components/Primitives";
import { colors, layout, type } from "../lib/brand";
import { DANA } from "../lib/cast";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

export const BeatInterview: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;

  const stage =
    s < 6 ? "phone" : s < 12 ? "follow" : s < 17 ? "modes" : s < 20 ? "sigh" : "disclosure";

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <Frame>
        {stage === "phone" || stage === "follow" ? <InterviewPane follow={stage === "follow"} /> : null}
        {stage === "modes" || stage === "sigh" ? (
          <div style={{ opacity: interpolate(s, [12, 12.45], [0, 1], ease), width: "100%" }}>
            <ModeSplit highlightVideo={stage === "sigh"} />
          </div>
        ) : null}
        {stage === "disclosure" ? (
          <div style={{ opacity: interpolate(s, [20, 20.5], [0, 1], ease) }}>
            <Disclosure />
          </div>
        ) : null}
      </Frame>
    </AbsoluteFill>
  );
};

const InterviewPane: React.FC<{ follow: boolean }> = ({ follow }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 14], [0, 1], ease);

  return (
    <div
      style={{
        opacity: op,
        display: "flex",
        gap: 48,
        alignItems: "center",
        width: "100%",
        maxWidth: 1480,
      }}
    >
      <Phone />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
        <Bubble who="Uppy" text="What almost made this not work?" />
        <Bubble who="Dana" text="Onboarding took three weeks and I never got the hours back." accent />
        {follow ? (
          <>
            <GreyQuestion text="How was onboarding?" note="skipped — already in motion" />
            <Bubble who="Uppy" text="You said three weeks. What did you lose in that time?" />
          </>
        ) : null}
      </div>
    </div>
  );
};

const Phone: React.FC = () => (
  <div
    style={{
      width: 280,
      height: 520,
      borderRadius: 36,
      background: "#0c0c12",
      border: `2px solid ${colors.rule}`,
      padding: 18,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}
  >
    <div
      style={{
        height: 18,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: 72, height: 8, borderRadius: 8, background: colors.rule }} />
    </div>
    <div
      style={{
        flex: 1,
        borderRadius: 22,
        background: "linear-gradient(180deg, #1a1a24 0%, #0e0e14 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        gap: 12,
      }}
    >
      <Avatar person={DANA} size={72} accent />
      <div
        style={{
          fontFamily: fontSans,
          fontSize: 18,
          color: colors.textDim,
        }}
      >
        Dana · talking
      </div>
      <div style={{ display: "flex", gap: 5, alignItems: "flex-end", height: 28 }}>
        {[10, 18, 14, 22, 12, 20, 16].map((h, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: h,
              borderRadius: 2,
              background: colors.sky,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

const Bubble: React.FC<{
  who: string;
  text: string;
  accent?: boolean;
  dim?: boolean;
}> = ({ who, text, accent, dim }) => (
  <div
    style={{
      padding: "16px 20px",
      borderRadius: layout.radius,
      background: accent ? colors.skyDim : colors.card,
      border: `1px solid ${accent ? "rgba(56,189,248,0.35)" : colors.rule}`,
      opacity: dim ? 0.4 : 1,
    }}
  >
    <div
      style={{
        fontFamily: fontMono,
        fontSize: 16,
        color: accent ? colors.sky : colors.textDimAlt,
        marginBottom: 6,
        letterSpacing: "0.06em",
      }}
    >
      {who}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: type.ui + 2,
        color: colors.text,
        lineHeight: 1.35,
      }}
    >
      {text}
    </div>
  </div>
);

const GreyQuestion: React.FC<{ text: string; note: string }> = ({ text, note }) => (
  <div
    style={{
      padding: "14px 20px",
      borderRadius: layout.radius,
      background: colors.bgAlt,
      border: `1px solid ${colors.rule}`,
      opacity: 0.55,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 16,
    }}
  >
    <div
      style={{
        fontFamily: fontSans,
        fontSize: type.ui,
        color: colors.textDim,
        textDecoration: "line-through",
      }}
    >
      {text}
    </div>
    <div
      style={{
        fontFamily: fontMono,
        fontSize: 16,
        color: colors.amber,
        whiteSpace: "nowrap",
      }}
    >
      {note}
    </div>
  </div>
);

const ModeSplit: React.FC<{ highlightVideo: boolean }> = ({ highlightVideo }) => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 12], [0, 1], ease);
  return (
    <div
      style={{
        opacity: op,
        display: "flex",
        gap: 24,
        width: "100%",
        maxWidth: 1480,
      }}
    >
      <ModeCard label="Typed" body="Onboarding took three weeks." />
      <ModeCard label="Spoken" body="…three weeks, and I never got the hours back." />
      <ModeCard label="On camera" body="a real face. An eye-roll. A laugh." featured={highlightVideo} />
    </div>
  );
};

const ModeCard: React.FC<{ label: string; body: string; featured?: boolean }> = ({
  label,
  body,
  featured,
}) => (
  <div
    style={{
      flex: 1,
      minHeight: 280,
      padding: 28,
      borderRadius: layout.radius + 4,
      background: featured ? colors.cardAlt : colors.card,
      border: `1px solid ${featured ? colors.sky : colors.rule}`,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      scale: featured ? 1.03 : 1,
    }}
  >
    <div
      style={{
        fontFamily: fontMono,
        fontSize: type.label,
        color: featured ? colors.sky : colors.textDim,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 28,
        fontWeight: 500,
        color: colors.text,
        lineHeight: 1.35,
      }}
    >
      {body}
    </div>
    {featured ? (
      <div
        style={{
          marginTop: "auto",
          height: 120,
          borderRadius: layout.radius,
          background: "rgba(56,189,248,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar person={DANA} size={64} accent />
      </div>
    ) : null}
  </div>
);

const Disclosure: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 14], [0, 1], ease);
  return (
    <div
      style={{
        opacity: op,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 32,
        maxWidth: 900,
        textAlign: "center",
      }}
    >
      <Avatar person={DANA} size={96} accent />
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.headline,
          fontWeight: 500,
          color: colors.text,
          letterSpacing: "-0.03em",
          lineHeight: 1.15,
        }}
      >
        People tell a machine things they won’t tell you.
      </div>
      <Citation />
    </div>
  );
};
