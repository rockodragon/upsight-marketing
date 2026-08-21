import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import {
  ApproachCards,
  FineCard,
  FollowUp,
  LandThree,
  NextMove,
  OutcomeRow,
  Pattern,
  Receipt,
  SourcePills,
} from "../components/Visuals";
import { SAFE, colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import {
  activeBeat,
  getSceneDurationInFrames,
  videoScript,
} from "../lib/script";

const easeOpts = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(...easeConfident),
};

export type AccountSignalProps = {
  burnCaptions?: boolean;
};

/** Consulting Account Signal — CI-v2 paper · LinkedIn 16:9 */
export const AccountSignal: React.FC<AccountSignalProps> = ({
  burnCaptions = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const starts: number[] = [];
  let acc = 0;
  for (const scene of videoScript.scenes) {
    starts.push(acc);
    acc += getSceneDurationInFrames(scene, fps);
  }

  const sceneIndex = Math.max(
    0,
    starts.findIndex((start, i) => {
      const end = start + getSceneDurationInFrames(videoScript.scenes[i], fps);
      return frame >= start && frame < end;
    }),
  );
  const scene = videoScript.scenes[sceneIndex];
  const local = (frame - starts[sceneIndex]) / fps;
  const caption = activeBeat(scene, local).caption;
  const captionReserve = burnCaptions ? 100 : 0;

  return (
    <MarketingBackground>
      <AbsoluteFill
        style={{
          padding: `${SAFE.y}px ${SAFE.x}px ${SAFE.y + captionReserve}px`,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1520,
            height: "100%",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {(() => {
            let from = 0;
            return videoScript.scenes.map((s) => {
              const dur = getSceneDurationInFrames(s, fps);
              const start = from;
              from += dur;
              return (
                <Sequence key={s.id} from={start} durationInFrames={dur}>
                  <SceneBody id={s.id} />
                </Sequence>
              );
            });
          })()}
        </div>
      </AbsoluteFill>
      {burnCaptions ? <CaptionBar text={caption} /> : null}
    </MarketingBackground>
  );
};

const SceneBody: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case "opener":
      return <OpenerScene />;
    case "approaches":
      return <ApproachesScene />;
    case "lens":
      return <LensScene />;
    case "screen":
      return <ScreenScene />;
    case "land":
      return <LandScene />;
    case "ask":
      return <AskScene />;
    default:
      return null;
  }
};

const OpenerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const late = frame >= 5 * fps;
  const t = interpolate(frame, [0, 12], [0, 1], easeOpts);

  return (
    <FrameStack>
      <Eyebrow>Account Signal</Eyebrow>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          opacity: t,
        }}
      >
        <Headline>
          {late ? (
            <>
              You don&apos;t have the{" "}
              <span style={{ color: colors.amber }}>why</span>.
            </>
          ) : (
            "You already have the scores."
          )}
        </Headline>
        <Sub>
          {late
            ? "In the customer’s own words — in time to do something."
            : "Dashboards. CSAT. CRM. Plenty of signal that stays shallow."}
        </Sub>
      </div>
    </FrameStack>
  );
};

const ApproachesScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const late = frame >= 8 * fps;
  return (
    <FrameStack>
      <Eyebrow>How teams usually try</Eyebrow>
      <Headline>{late ? "Tidy. Still too late." : "Familiar. Incomplete."}</Headline>
      <div style={{ flex: 1, display: "flex", alignItems: "center", minHeight: 0 }}>
        <ApproachCards late={late} />
      </div>
    </FrameStack>
  );
};

const LensScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const showOutcomes = frame >= 7 * fps;
  return (
    <FrameStack>
      <Eyebrow>The lens</Eyebrow>
      <Headline>
        {showOutcomes
          ? "Turn conversations into decisions."
          : "Start where the words already are."}
      </Headline>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
          minHeight: 0,
        }}
      >
        {showOutcomes ? <OutcomeRow /> : <SourcePills />}
      </div>
    </FrameStack>
  );
};

const ScreenScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;
  const stage =
    s < 5
      ? "fine"
      : s < 10
        ? "follow"
        : s < 17
          ? "receipt"
          : s < 23
            ? "move"
            : "pattern";

  return (
    <FrameStack>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Eyebrow>The one screen</Eyebrow>
        <Pill>Illustrative</Pill>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          minHeight: 0,
        }}
      >
        {stage === "fine" ? <FineCard /> : null}
        {stage === "follow" ? (
          <>
            <FineCard dim />
            <FollowUp delay={4} />
          </>
        ) : null}
        {stage === "receipt" ? <Receipt /> : null}
        {stage === "move" ? (
          <>
            <Receipt />
            <NextMove delay={6} />
          </>
        ) : null}
        {stage === "pattern" ? <Pattern /> : null}
      </div>
    </FrameStack>
  );
};

const LandScene: React.FC = () => (
  <FrameStack>
    <Eyebrow>What you walk away with</Eyebrow>
    <Headline>That&apos;s Account Signal.</Headline>
    <div style={{ flex: 1, display: "flex", alignItems: "center", minHeight: 0 }}>
      <LandThree />
    </div>
  </FrameStack>
);

const AskScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const late = frame >= 6 * fps;
  const t = interpolate(frame, [0, 12], [0, 1], easeOpts);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
        textAlign: "center",
        opacity: t,
        padding: "0 40px",
      }}
    >
      <Img
        src={staticFile("logos/upsight-logo.png")}
        style={{ width: 72, height: 72, objectFit: "contain" }}
      />
      <div
        style={{
          fontFamily: fontSans,
          fontSize: late ? type.headline : 46,
          fontWeight: 900,
          letterSpacing: "-0.03em",
          color: colors.ink,
          lineHeight: 1.2,
          maxWidth: 1200,
        }}
      >
        {late
          ? "Before they hand you a 7 on the way out."
          : "Pick 2 accounts you have some suspicions about."}
      </div>
      {late ? (
        <>
          <div
            style={{
              padding: "18px 36px",
              borderRadius: layout.radius + 6,
              background: colors.amber,
              fontFamily: fontSans,
              fontSize: 28,
              fontWeight: 800,
              color: colors.ink,
            }}
          >
            {videoScript.cta.label}
          </div>
          <div
            style={{
              fontFamily: fontMono,
              fontSize: type.label,
              color: colors.inkDim,
            }}
          >
            getupsight.com/advisor
          </div>
        </>
      ) : (
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.bodySm,
            color: colors.inkDim,
            maxWidth: 820,
          }}
        >
          30 minutes — what the scoreboard missed, and what to do next.
        </div>
      )}
    </AbsoluteFill>
  );
};

const FrameStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{ display: "flex", flexDirection: "column", gap: 14, minHeight: 0 }}
  >
    {children}
  </AbsoluteFill>
);

const Eyebrow: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      alignSelf: "flex-start",
      fontFamily: fontMono,
      fontSize: type.eyebrow,
      fontWeight: 500,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: colors.inkDim,
    }}
  >
    {children}
  </div>
);

const Headline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: fontSans,
      fontSize: type.headline,
      fontWeight: 900,
      letterSpacing: "-0.035em",
      lineHeight: 1.12,
      color: colors.ink,
    }}
  >
    {children}
  </div>
);

const Sub: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      fontFamily: fontSans,
      fontSize: type.body,
      fontWeight: 500,
      color: colors.inkDim,
      lineHeight: 1.35,
      maxWidth: 1100,
    }}
  >
    {children}
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span
    style={{
      fontFamily: fontMono,
      fontSize: 16,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: colors.inkDim,
      border: `1px solid ${colors.rule}`,
      borderRadius: 999,
      padding: "8px 14px",
      background: colors.card,
    }}
  >
    {children}
  </span>
);

const CaptionBar: React.FC<{ text: string }> = ({ text }) => {
  if (!text) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: SAFE.x,
        right: SAFE.x,
        bottom: 40,
        display: "flex",
        justifyContent: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          padding: "14px 26px",
          borderRadius: layout.radius + 4,
          background: colors.ink,
        }}
      >
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.caption,
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: colors.paper,
            textAlign: "center",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
