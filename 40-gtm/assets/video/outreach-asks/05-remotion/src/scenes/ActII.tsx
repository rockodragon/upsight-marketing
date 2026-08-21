import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { Frame, Super } from "../components/Primitives";
import { colors, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";

const ARTIFACTS = [
  { kind: "Call recording", title: "QBR · Acme · Mar 12", body: "19:14  Dana  — onboarding" },
  { kind: "Notion", title: "customer feedback (old)", body: "Untitled · last edited 11 months ago" },
  { kind: "Survey", title: "40 rows · CSAT export", body: "Fine / 7 / n/a / Fine / …" },
  { kind: "Notes", title: "laptop · don't share", body: "she said something about weeks — ?" },
  { kind: "Slack", title: "thread · 11 replies", body: "anyone remember who said onboarding was…" },
  { kind: "Call recording", title: "Kickoff · Northline", body: "transcript not indexed" },
  { kind: "Doc", title: "research dump 2025", body: "Copy of Copy of feedback.xlsx" },
  { kind: "Email", title: "fwd: customer call notes", body: "looping you in — didn't write it down" },
];

export const ActII: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;

  const wallOp = interpolate(s, [0, 0.6, 15.2, 16.4], [0, 1, 1, 0], ease);
  const drift = interpolate(s, [0, 16], [80, -1480], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const folderOp = interpolate(s, [15.6, 16.8], [0, 1], ease);
  const stack = interpolate(s, [18.5, 20.2], [0, 1], ease);
  const superOp = interpolate(s, [16.2, 17.2], [0, 1], ease);

  return (
    <AbsoluteFill style={{ backgroundColor: colors.bg }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: wallOp,
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 28,
            paddingLeft: 80,
            translate: `${drift}px 0`,
          }}
        >
          {ARTIFACTS.map((a) => (
            <Artifact key={a.title} {...a} />
          ))}
        </div>
      </div>

      <Frame>
        <div
          style={{
            opacity: folderOp,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div style={{ position: "relative", width: 280, height: 200 }}>
            {[0, 1, 2, 3, 4].map((i) => {
              const shown = i === 0 ? 1 : stack;
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: interpolate(shown, [0, 1], [0, i * 10]),
                    top: interpolate(shown, [0, 1], [0, i * 14]),
                    opacity: interpolate(shown, [0, 1], [i === 0 ? 1 : 0, 1]),
                  }}
                >
                  <Folder />
                </div>
              );
            })}
          </div>
          <div
            style={{
              opacity: superOp,
              translate: `0 ${interpolate(superOp, [0, 1], [12, 0])}px`,
            }}
          >
            <Super text="Research goes in. Nothing compounds." size={type.headline} weight={500} />
          </div>
        </div>
      </Frame>
    </AbsoluteFill>
  );
};

const Artifact: React.FC<{ kind: string; title: string; body: string }> = ({
  kind,
  title,
  body,
}) => (
  <div
    style={{
      width: 380,
      height: 220,
      padding: 24,
      borderRadius: layout.radius,
      background: colors.card,
      border: `1px solid ${colors.rule}`,
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    }}
  >
    <div
      style={{
        fontFamily: fontMono,
        fontSize: 16,
        color: colors.textDimAlt,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {kind}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 26,
        fontWeight: 600,
        color: colors.text,
        letterSpacing: "-0.02em",
      }}
    >
      {title}
    </div>
    <div
      style={{
        fontFamily: fontSans,
        fontSize: 20,
        color: colors.textDim,
        lineHeight: 1.35,
      }}
    >
      {body}
    </div>
  </div>
);

const Folder: React.FC = () => (
  <div style={{ width: 240 }}>
    <div
      style={{
        width: 88,
        height: 18,
        borderRadius: "6px 6px 0 0",
        background: colors.folder,
      }}
    />
    <div
      style={{
        height: 148,
        borderRadius: "0 10px 10px 10px",
        background: colors.folder,
        border: `1px solid ${colors.rule}`,
      }}
    />
  </div>
);
