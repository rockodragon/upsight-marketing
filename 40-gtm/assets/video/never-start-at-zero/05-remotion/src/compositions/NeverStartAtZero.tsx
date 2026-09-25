import React from "react";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import {
  Accent,
  CaptionBar,
  Eyebrow,
  FrameStack,
  Headline,
} from "../components/Primitives";
import {
  BookMeeting,
  FollowUpCard,
  PitchStack,
  ProfileCard,
  QuestionCard,
  SpreadsheetRow,
  StageCards,
  StageList,
  VoiceAsk,
} from "../components/Visuals";
import { SAFE, colors, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import { ease } from "../lib/motion";
import {
  activeBeat,
  getSceneDurationInFrames,
  videoScript,
} from "../lib/script";

export type NeverStartAtZeroProps = {
  burnCaptions?: boolean;
};

export const NeverStartAtZero: React.FC<NeverStartAtZeroProps> = ({
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
  const scene = videoScript.scenes[sceneIndex] ?? videoScript.scenes[0];
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
    case "hook":
      return <HookScene />;
    case "cost":
      return <CostScene />;
    case "shift":
      return <ShiftScene />;
    case "promise":
      return <PromiseScene />;
    case "demo":
      return <DemoScene />;
    case "feeling":
      return <FeelingScene />;
    case "proof":
      return <ProofScene />;
    case "cta":
      return <CtaScene />;
    default:
      return null;
  }
};

const VisualSlot: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 0,
    }}
  >
    {children}
  </div>
);

const HookScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const late = frame >= 2.2 * fps;

  return (
    <FrameStack>
      <Eyebrow>Every form you&apos;ve sent</Eyebrow>
      <Headline>
        {late ? (
          <>
            Next time you start at <Accent>zero</Accent>.
          </>
        ) : (
          <>
            Their answer <Accent>dies there</Accent>.
          </>
        )}
      </Headline>
      <VisualSlot>
        <SpreadsheetRow dead={late} />
      </VisualSlot>
    </FrameStack>
  );
};

const CostScene: React.FC = () => (
  <FrameStack>
    <Eyebrow>The real cost</Eyebrow>
    <Headline>
      They&apos;re not rows. They&apos;re at <Accent>different stages</Accent>.
    </Headline>
    <VisualSlot>
      <StageCards />
    </VisualSlot>
  </FrameStack>
);

const ShiftScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bloom = frame >= 1.4 * fps;
  const fill = frame >= 4.2 * fps ? 4 : frame >= 2.6 * fps ? 3 : 2;

  return (
    <FrameStack>
      <Eyebrow>What if it could</Eyebrow>
      <Headline>
        {bloom ? (
          <>
            A profile that gets <Accent>richer</Accent> every time.
          </>
        ) : (
          <>
            Not recorded. <Accent>Remembered</Accent>.
          </>
        )}
      </Headline>
      <VisualSlot>
        {bloom ? (
          <ProfileCard fill={fill} glow />
        ) : (
          <SpreadsheetRow compact />
        )}
      </VisualSlot>
    </FrameStack>
  );
};

const PromiseScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: 18,
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
        scale: interpolate(frame, [0, 8], [1.08, 1], ease),
        padding: "0 40px",
      }}
    >
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.hero,
          fontWeight: 900,
          letterSpacing: "-0.045em",
          lineHeight: 1.05,
          color: colors.text,
          maxWidth: 1280,
        }}
      >
        You never start at <span style={{ color: colors.amber }}>zero</span>.
      </div>
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.body,
          color: colors.textDim,
          opacity: interpolate(frame, [10, 18], [0, 1], ease),
        }}
      >
        Every interaction compounds.
      </div>
    </AbsoluteFill>
  );
};

const DemoScene: React.FC = () => {
  const { fps } = useVideoConfig();
  const beat = 3 * fps;

  return (
    <FrameStack>
      <Eyebrow>What that unlocks</Eyebrow>
      <VisualSlot>
        <Sequence from={0} durationInFrames={beat} layout="none">
          <DemoBeat
            title={
              <>
                Who&apos;s <Accent>ready</Accent> to move.
              </>
            }
          >
            <StageList />
          </DemoBeat>
        </Sequence>
        <Sequence from={beat} durationInFrames={beat} layout="none">
          <DemoBeat title="Follow up in context. One click.">
            <FollowUpCard />
          </DemoBeat>
        </Sequence>
        <Sequence from={beat * 2} durationInFrames={beat} layout="none">
          <DemoBeat title="A warm answer becomes a meeting.">
            <BookMeeting />
          </DemoBeat>
        </Sequence>
        <Sequence from={beat * 3} durationInFrames={beat} layout="none">
          <DemoBeat title="Go deeper. It feels like a conversation.">
            <VoiceAsk />
          </DemoBeat>
        </Sequence>
      </VisualSlot>
    </FrameStack>
  );
};

const DemoBeat: React.FC<{
  title: React.ReactNode;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 22,
      width: "100%",
    }}
  >
    <div
      style={{
        fontFamily: fontSans,
        fontSize: type.headline,
        fontWeight: 900,
        letterSpacing: "-0.035em",
        color: colors.text,
        textAlign: "center",
        lineHeight: 1.15,
      }}
    >
      {title}
    </div>
    {children}
  </div>
);

const FeelingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const heard = frame >= 2.4 * fps;

  return (
    <FrameStack>
      <Eyebrow>Simple to send</Eyebrow>
      <Headline>
        {heard ? (
          <>
            The power lives <Accent>underneath</Accent>.
          </>
        ) : (
          <>
            One link. <Accent>One question</Accent> at a time.
          </>
        )}
      </Headline>
      <VisualSlot>
        <QuestionCard heard={heard} />
      </VisualSlot>
    </FrameStack>
  );
};

const ProofScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pitch = frame >= 3.2 * fps;

  return (
    <FrameStack>
      <Eyebrow>When it clicked</Eyebrow>
      <Headline>
        {pitch ? (
          <>
            Not a blank page. <Accent>Everything you knew</Accent>.
          </>
        ) : (
          <>
            It didn&apos;t give me answers. It gave me a{" "}
            <Accent>pitch</Accent>.
          </>
        )}
      </Headline>
      <VisualSlot>
        <PitchStack synthesize={pitch} />
      </VisualSlot>
    </FrameStack>
  );
};

const CtaScene: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        opacity: interpolate(frame, [0, 6], [0, 1], ease),
        padding: "0 40px",
      }}
    >
      <Img
        src={staticFile("logos/upsight-logo.png")}
        style={{ width: 56, height: 56, objectFit: "contain" }}
      />
      <div
        style={{
          fontFamily: fontSans,
          fontSize: type.headline,
          fontWeight: 900,
          letterSpacing: "-0.035em",
          color: colors.text,
          lineHeight: 1.12,
          maxWidth: 1200,
        }}
      >
        Never start at <span style={{ color: colors.amber }}>zero</span> again.
      </div>
      <ProfileCard fill={2} glow compact />
      <div
        style={{
          padding: "18px 36px",
          borderRadius: layout.radius + 6,
          background: colors.amber,
          fontFamily: fontSans,
          fontSize: 28,
          fontWeight: 800,
          color: colors.bg,
          boxShadow: `0 18px 50px ${colors.amberGlow}`,
          scale: interpolate(frame, [4, 12], [0.92, 1], ease),
        }}
      >
        {videoScript.cta.label}
      </div>
      <div
        style={{
          fontFamily: fontMono,
          fontSize: type.label,
          letterSpacing: "0.06em",
          color: colors.textDim,
        }}
      >
        getupsight.com
      </div>
    </AbsoluteFill>
  );
};
