import React from "react";
import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../components/MarketingBackground";
import { videoScript } from "../lib/script";
import { ScenePlaceholder } from "./ScenePlaceholder";

/**
 * Script-driven composition — scenes read copy from 01-script/hero.script.json.
 * Replace ScenePlaceholder with real scene components as you build.
 */
export const VideoHero: React.FC = () => {
  const { fps } = useVideoConfig();
  let from = 0;

  return (
    <MarketingBackground>
      {videoScript.scenes.map((scene) => {
        const duration = scene.durationSeconds * fps;
        const seq = (
          <Sequence key={scene.id} from={from} durationInFrames={duration} name={scene.name}>
            <ScenePlaceholder sceneId={scene.id} />
          </Sequence>
        );
        from += duration;
        return seq;
      })}
    </MarketingBackground>
  );
};
