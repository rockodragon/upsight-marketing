import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import {
  AnswerSpreadsheet,
  GoneStamp,
  HaveVsNeed,
  ScoreDashboard,
} from "../../components/ProblemContrast";
import {
  CsatScoreView,
  EvidenceReceipt,
  FollowUpBubble,
  NextBestAction,
  PatternPunch,
} from "../../components/SpineVisuals";
import { SAFE, colors, easeConfident, layout, type } from "../../lib/brand";
import { fontMono, fontSans } from "../../lib/fonts";
import {
  activeBeat,
  getSceneDurationInFrames,
  surveyScript,
} from "../../lib/script";

const easeOpts = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(...easeConfident),
};

export type SurveyVslProps = {
  burnCaptions?: boolean;
  withVoiceover?: boolean;
};

/**
 * Account Signal VSL — CI-v2 paper · LinkedIn 16:9 (1920×1080).
 */
export const SurveyVsl: React.FC<SurveyVslProps> = ({
  burnCaptions = true,
  withVoiceover = false,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const starts: number[] = [];
  let acc = 0;
  for (const scene of surveyScript.scenes) {
    starts.push(acc);
    acc += getSceneDurationInFrames(scene, fps);
  }

  const sceneIndex = Math.max(
    0,
    starts.findIndex((start, i) => {
      const end = start + getSceneDurationInFrames(surveyScript.scenes[i], fps);
      return frame >= start && frame < end;
    }),
  );
  const scene = surveyScript.scenes[sceneIndex];
  const local = (frame - starts[sceneIndex]) / fps;
  const caption = activeBeat(scene, local).caption;

  const captionReserve = burnCaptions ? 100 : 0;
  let voFrom = 0;

  return (
    <MarketingBackground>
      {withVoiceover
        ? surveyScript.scenes.map((s) => {
            const dur = getSceneDurationInFrames(s, fps);
            const seq = (
              <Sequence key={s.id} from={voFrom} durationInFrames={dur} layout="none">
                <Audio src={staticFile(`audio/vo/${s.id}.mp3`)} />
              </Sequence>
            );
            voFrom += dur;
            return seq;
          })
        : null}

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
            return surveyScript.scenes.map((s) => {
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
    case "hook":
      return <HookScene />;
    case "problem":
      return <ProblemScene />;
    case "spine":
      return <SpineScene />;
    case "contrast":
      return <ContrastScene />;
    case "mechanism":
      return <MechanismScene />;
    case "cta":
      return <CtaScene />;
    default:
      return null;
  }
};

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const showGone = frame >= 4 * fps;

  return (
    <FrameStack>
      <Eyebrow>Last answer before they left</Eyebrow>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          minHeight: 0,
        }}
      >
        <CsatScoreView dim={showGone} compact />
        {showGone ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GoneStamp delay={0} />
          </div>
        ) : null}
      </div>
    </FrameStack>
  );
};

const ProblemScene: React.FC = () => (
  <FrameStack>
    <Eyebrow>The blind spot</Eyebrow>
    <Headline>A score never tells you why.</Headline>
    <div
      style={{
        flex: 1,
        display: "flex",
        gap: 20,
        minHeight: 0,
        marginTop: 8,
      }}
    >
      <ScoreDashboard />
      <AnswerSpreadsheet delay={6} />
    </div>
  </FrameStack>
);

const SpineScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = frame / fps;

  const stage =
    s < 5
      ? "csat"
      : s < 10
        ? "followup"
        : s < 17
          ? "receipt"
          : s < 23
            ? "nba"
            : "punch";

  const receipt = (
    <EvidenceReceipt
      quote="Should be fine — but our CFO froze spend until Q3."
      tag="CFO froze spend"
      who="Jordan Hale · VP CS"
      when="Mar 12 · follow-up"
      illustrative
    />
  );

  return (
    <FrameStack>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Eyebrow>The one screen · Account Signal</Eyebrow>
        <IllustrativePill />
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
        {stage === "csat" ? <CsatScoreView /> : null}
        {stage === "followup" ? (
          <>
            <CsatScoreView dim compact delay={0} />
            <FollowUpBubble delay={4} />
          </>
        ) : null}
        {stage === "receipt" ? receipt : null}
        {stage === "nba" ? (
          <>
            {receipt}
            <NextBestAction
              delay={6}
              action="Loop in the exec sponsor before renewal."
            />
          </>
        ) : null}
        {stage === "punch" ? (
          <PatternPunch delay={0} count={13} theme="CFO froze spend" />
        ) : null}
      </div>
    </FrameStack>
  );
};

const ContrastScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <FrameStack>
      <Eyebrow>Have vs need</Eyebrow>
      <div style={{ flex: 1, minHeight: 0, marginTop: 8 }}>
        <HaveVsNeed showNeed={frame >= 7 * fps} />
      </div>
    </FrameStack>
  );
};

const MechanismScene: React.FC = () => {
  const frame = useCurrentFrame();
  const t = interpolate(frame, [0, 14], [0, 1], easeOpts);
  return (
    <AbsoluteFill
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: t,
        translate: `0px ${interpolate(t, [0, 1], [20, 0])}px`,
        padding: "0 40px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 1280 }}>
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.hero,
            fontWeight: 900,
            letterSpacing: "-0.035em",
            lineHeight: 1.15,
            color: colors.ink,
          }}
        >
          A form stops at 7.
        </div>
        <div
          style={{
            marginTop: 20,
            fontFamily: fontSans,
            fontSize: type.headline,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.3,
            color: colors.ink,
          }}
        >
          UpSight asks the next question, keeps the receipt,
          <br />
          and{" "}
          <span style={{ color: colors.amber }}>tells you the move.</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const CtaScene: React.FC = () => {
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
        gap: 24,
        textAlign: "center",
        opacity: t,
        padding: "0 48px",
      }}
    >
      <Img
        src={staticFile("logos/upsight-logo.png")}
        style={{ width: 72, height: 72, objectFit: "contain" }}
      />
      <div
        style={{
          fontFamily: fontSans,
          fontSize: late ? type.headline : 48,
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
              marginTop: 4,
              padding: "20px 40px",
              borderRadius: layout.radius + 6,
              background: colors.amber,
              fontFamily: fontSans,
              fontSize: 30,
              fontWeight: 800,
              color: colors.ink,
            }}
          >
            {surveyScript.cta.label}
          </div>
          <div
            style={{
              fontFamily: fontMono,
              fontSize: type.label,
              color: colors.inkDim,
              letterSpacing: "0.04em",
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
            maxWidth: 800,
            lineHeight: 1.35,
          }}
        >
          30 minutes — what the form missed, and the next move.
        </div>
      )}
    </AbsoluteFill>
  );
};

const FrameStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AbsoluteFill
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 0,
    }}
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

const IllustrativePill: React.FC = () => (
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
    Illustrative
  </span>
);

/** Burned captions — dark chip on paper for muted LinkedIn autoplay */
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
          border: `1px solid rgba(56,189,248,0.35)`,
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
