import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import { ssdScript } from "../../lib/script";
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

/** SSD Demo — script-driven from 01-script/hero.script.json (150s) */
export const SsdDemo: React.FC = () => {
  const { fps } = useVideoConfig();
  let from = 0;

  return (
    <MarketingBackground>
      {ssdScript.scenes.map((scene) => {
        const duration = scene.durationSeconds * fps;
        const Component = sceneComponents[scene.id];
        const seq = (
          <Sequence key={scene.id} from={from} durationInFrames={duration} name={scene.name}>
            <Component />
          </Sequence>
        );
        from += duration;
        return seq;
      })}
    </MarketingBackground>
  );
};
