import React from "react";
import {
  AbsoluteFill,
  Easing,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import {
  CaptionBar,
  FpoPlate,
  MonoLabel,
  OnScreenLine,
  SignalCard,
} from "../components/FpoVisuals";
import { MarketingBackground } from "../components/MarketingBackground";
import { SAFE, colors, easeConfident, layout, type } from "../lib/brand";
import { fontMono, fontSans } from "../lib/fonts";
import {
  VIGNETTES,
  activeBeat,
  getSceneDurationInFrames,
  getTotalDurationInFrames,
  sceneStarts,
  videoScript,
} from "../lib/script";

const ease = {
  extrapolateLeft: "clamp" as const,
  extrapolateRight: "clamp" as const,
  easing: Easing.bezier(...easeConfident),
};

export type ImpossibleToMissProps = {
  burnCaptions?: boolean;
};

/**
 * Brand film skeleton — FPO plates + illustrative signal overlays.
 * Timeline mirrors 01-script/hero.script.json (75s @ 30fps).
 */
export const ImpossibleToMiss: React.FC<ImpossibleToMissProps> = ({
  burnCaptions = true,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const starts = sceneStarts(fps);

  const sceneIndex = Math.max(
    0,
    starts.findIndex((start, i) => {
      const end = start + getSceneDurationInFrames(videoScript.scenes[i], fps);
      return frame >= start && frame < end;
    }),
  );
  const scene = videoScript.scenes[sceneIndex] ?? videoScript.scenes[0];
  const localSec = (frame - starts[sceneIndex]) / fps;
  const caption = activeBeat(scene, localSec).caption;

  return (
    <MarketingBackground>
      {(() => {
        let from = 0;
        return videoScript.scenes.map((s) => {
          const dur = getSceneDurationInFrames(s, fps);
          const start = from;
          from += dur;
          return (
            <Sequence key={s.id} from={start} durationInFrames={dur} name={s.name}>
              <SceneBody id={s.id} />
            </Sequence>
          );
        });
      })()}
      {burnCaptions ? <CaptionBar text={caption} /> : null}
    </MarketingBackground>
  );
};

const SceneBody: React.FC<{ id: string }> = ({ id }) => {
  switch (id) {
    case "witness":
      return <WitnessScene />;
    case "turn":
      return <TurnScene />;
    case "proof":
      return <ProofScene />;
    case "land":
      return <LandScene />;
    default:
      return (
        <AbsoluteFill
          style={{
            justifyContent: "center",
            alignItems: "center",
            color: colors.textDim,
            fontFamily: fontSans,
            fontSize: type.body,
          }}
        >
          Unknown scene: {id}
        </AbsoluteFill>
      );
  }
};

/** Act 1 — four vignettes, cool/underexposed FPO */
const WitnessScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const vignetteDur = Math.floor(durationInFrames / VIGNETTES.length);
  const index = Math.min(
    VIGNETTES.length - 1,
    Math.floor(frame / Math.max(1, vignetteDur)),
  );
  const v = VIGNETTES[index];
  const local = frame - index * vignetteDur;
  const plateIn = interpolate(local, [0, 14], [0, 1], ease);
  const scene = videoScript.scenes.find((s) => s.id === "witness")!;
  const beat = activeBeat(scene, frame / fps);

  return (
    <AbsoluteFill style={{ opacity: plateIn }}>
      <FpoPlate title={v.label} subtitle={v.fpo} clarity={0}>
        <div
          style={{
            position: "absolute",
            left: SAFE.x + 40,
            bottom: SAFE.y + 200,
            maxWidth: 720,
            padding: "20px 24px",
            borderRadius: layout.radius,
            background: "rgba(5, 5, 8, 0.72)",
            border: `1px solid ${colors.fpoBorder}`,
          }}
        >
          <MonoLabel text="Lost signal" />
          <div
            style={{
              marginTop: 10,
              fontFamily: fontSans,
              fontSize: type.bodySm,
              color: colors.textDim,
              lineHeight: 1.35,
            }}
          >
            {v.lost}
          </div>
        </div>
        <OnScreenLine text={beat.onScreen} />
        <VignettePips active={index} />
      </FpoPlate>
    </AbsoluteFill>
  );
};

const VignettePips: React.FC<{ active: number }> = ({ active }) => (
  <div
    style={{
      position: "absolute",
      right: SAFE.x,
      bottom: SAFE.y + 120,
      display: "flex",
      gap: 10,
    }}
  >
    {VIGNETTES.map((v, i) => (
      <div
        key={v.id}
        style={{
          width: i === active ? 36 : 12,
          height: 12,
          borderRadius: 6,
          background: i === active ? colors.amber : colors.fpoBorder,
        }}
      />
    ))}
  </div>
);

/**
 * Act 2 — continuous ramp on hero plate (survey → profile chain).
 * Sound duck is FPO (no audio yet); visuals: clarity + signal resolve.
 */
const TurnScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = videoScript.scenes.find((s) => s.id === "turn")!;
  const beat = activeBeat(scene, frame / fps);

  // Ramp timeline (local frames)
  const clarity = interpolate(frame, [0, 20, 90], [0, 0.15, 1], ease);
  const card1 = interpolate(frame, [24, 48], [0, 1], ease);
  const card1Y = interpolate(frame, [24, 48], [28, 0], ease);
  const card2 = interpolate(frame, [55, 80], [0, 1], ease);
  const card2Y = interpolate(frame, [55, 80], [28, 0], ease);
  const card3 = interpolate(frame, [100, 130], [0, 1], ease);
  const card3Y = interpolate(frame, [100, 130], [28, 0], ease);
  const chainLabel = interpolate(frame, [90, 110], [0, 1], ease);

  return (
    <FpoPlate
      title="Turn · compounding signal"
      subtitle="FPO · same desk plate · survey answer resolves into signal"
      clarity={clarity}
    >
      {/* Hold-tone marker (FPO for audio duck) */}
      <div
        style={{
          position: "absolute",
          left: SAFE.x,
          top: SAFE.y,
          opacity: interpolate(frame, [0, 12, 24, 40], [0, 1, 1, 0], ease),
          fontFamily: fontMono,
          fontSize: type.eyebrow,
          color: colors.sky,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        // hold · ambient ducks
      </div>

      <div
        style={{
          position: "absolute",
          right: SAFE.x,
          top: SAFE.y + 160,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <SignalCard
          label="// conversation"
          title="Survey answer lands"
          detail="Would not renew — reason captured"
          accent={colors.sky}
          opacity={card1}
          translateY={card1Y}
        />
        <SignalCard
          label="// profile"
          title="Living profile updates"
          detail="Account risk + theme tagged"
          accent={colors.sky}
          opacity={card2}
          translateY={card2Y}
        />
        <SignalCard
          label="// next move"
          title="Save plan · owner assigned"
          detail="Act before cancel email"
          accent={colors.amber}
          opacity={card3}
          translateY={card3Y}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: SAFE.x,
          bottom: SAFE.y + 200,
          opacity: chainLabel,
          fontFamily: fontMono,
          fontSize: type.label,
          color: colors.amber,
          letterSpacing: "0.14em",
        }}
      >
        conversation → profile → next move
      </div>

      <OnScreenLine text={beat.onScreen} />
    </FpoPlate>
  );
};

/** Act 3 — reverse the four vignettes + illustrative receipts */
const ProofScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scene = videoScript.scenes.find((s) => s.id === "proof")!;
  const beat = activeBeat(scene, frame / fps);

  const slots = [
    ...VIGNETTES.map((v) => ({
      label: v.label,
      title: v.reverse,
      fpo: v.fpo.replace("FPO · ", "REVERSE · "),
      accent: colors.sky,
    })),
    {
      label: "Receipts",
      title: "Not anecdotes. Receipts.",
      fpo: "FPO · illustrative reel / quote card",
      accent: colors.amber,
    },
  ];

  // 4 VO beats map roughly onto reverses; last beat = receipts
  const beatIndex = Math.min(
    slots.length - 1,
    scene.beats.reduce((idx, b, i) => (frame / fps >= b.at ? i : idx), 0),
  );
  // Prefer vignette index cycling for visual variety across 17s
  const slotDur = Math.floor(durationInFrames / slots.length);
  const visualIndex = Math.min(
    slots.length - 1,
    Math.max(beatIndex, Math.floor(frame / Math.max(1, slotDur))),
  );
  const slot = slots[visualIndex];
  const local = frame - visualIndex * slotDur;
  const inOp = interpolate(local, [0, 12], [0, 1], ease);

  return (
    <AbsoluteFill style={{ opacity: inOp }}>
      <FpoPlate title={slot.label} subtitle={slot.fpo} clarity={1}>
        <div
          style={{
            position: "absolute",
            right: SAFE.x,
            top: SAFE.y + 180,
          }}
        >
          <SignalCard
            label={`// ${slot.label.toLowerCase()}`}
            title={slot.title}
            detail="Illustrative stand-in — swap real UI later"
            accent={slot.accent}
            opacity={1}
          />
        </div>
        <OnScreenLine text={beat.onScreen} />
      </FpoPlate>
    </AbsoluteFill>
  );
};

/** Act 4 — land + wordmark, no CTA in master */
const LandScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scene = videoScript.scenes.find((s) => s.id === "land")!;
  const beat = activeBeat(scene, frame / fps);

  const titleIn = interpolate(frame, [8, 32], [0, 1], ease);
  const titleY = interpolate(frame, [8, 32], [24, 0], ease);
  const markIn = interpolate(frame, [fps * 5, fps * 5 + 18], [0, 1], ease);

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at 50% 40%, #12121c 0%, ${colors.bg} 70%)`,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 28,
          maxWidth: 1400,
          padding: `0 ${SAFE.x}px`,
          textAlign: "center",
          opacity: titleIn,
          translate: `0 ${titleY}px`,
        }}
      >
        <MonoLabel text="Impossible to miss" />
        <div
          style={{
            fontFamily: fontSans,
            fontSize: type.hero,
            fontWeight: 900,
            color: colors.text,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          {beat.onScreen === "UpSight"
            ? "Impossible to miss."
            : "They're already telling you."}
        </div>
        <div
          style={{
            opacity: markIn,
            marginTop: 24,
            fontFamily: fontSans,
            fontSize: 40,
            fontWeight: 700,
            color: colors.sky,
            letterSpacing: "-0.01em",
          }}
        >
          UpSight
        </div>
        <div
          style={{
            opacity: markIn,
            fontFamily: fontMono,
            fontSize: type.eyebrow,
            color: colors.textDimAlt,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          FPO · wordmark · no CTA in master
        </div>
      </div>
    </AbsoluteFill>
  );
};

/** Duration helper exported for Root */
export const impossibleToMissDuration = () => getTotalDurationInFrames();
