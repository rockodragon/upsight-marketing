import React from "react";
import { useVideoConfig } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { MarketingBackground } from "../../components/MarketingBackground";
import { ssdScript, TRANSITION_FRAMES } from "../../lib/script";
import { SceneProblem } from "./SceneProblem";
import { SceneRecord } from "./SceneRecord";
import { SceneEvidence } from "./SceneEvidence";
import { SceneThemes } from "./SceneThemes";
import { SceneProfile, SceneCloser } from "./SceneProfile";

const sceneComponents: Record<string, React.FC> = {
  problem: SceneProblem,
  record: SceneRecord,
  evidence: SceneEvidence,
  themes: SceneThemes,
  profile: SceneProfile,
  closer: SceneCloser,
};

/**
 * SSD Demo — script-driven from 01-script/hero.script.json.
 * Scenes are joined with crossfades via <TransitionSeries>; each crossfade
 * overlaps TRANSITION_FRAMES, so the total render is shorter than the sum of
 * scene durations (see totalDurationInFrames in lib/script.ts).
 */
export const SsdDemo: React.FC = () => {
  const { fps } = useVideoConfig();
  const { scenes } = ssdScript;

  // TransitionSeries expects a flat, alternating list of Sequence / Transition
  // children — build it imperatively so React.Children can read the sequence.
  const children: React.ReactNode[] = [];
  scenes.forEach((scene, i) => {
    const Component = sceneComponents[scene.id];
    const duration = Math.round(scene.durationSeconds * fps);

    children.push(
      <TransitionSeries.Sequence
        key={scene.id}
        durationInFrames={duration}
        name={scene.name}
      >
        <Component />
      </TransitionSeries.Sequence>,
    );

    if (i < scenes.length - 1) {
      children.push(
        <TransitionSeries.Transition
          key={`transition-${scene.id}`}
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />,
      );
    }
  });

  return (
    <MarketingBackground>
      <TransitionSeries from={-23}>{children}</TransitionSeries>
    </MarketingBackground>
  );
};
