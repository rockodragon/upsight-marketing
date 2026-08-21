import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { AudioCueTrack } from "../components/AudioCueTrack";
import { SceneCanvas } from "../components/CanvasLayer";
import { MarketingBackground } from "../components/MarketingBackground";
import {
  getSceneDurationInFrames,
  getTotalDurationInFrames,
  videoScript,
} from "../lib/script";

/**
 * Script-driven composition.
 * Scenes stay editable from JSON, which makes AI-generated clips much easier
 * to refine with exact placement, timing, transitions, and audio cues.
 */
export const VideoHero: React.FC = () => {
  const { fps } = useVideoConfig();
  let from = 0;

  return (
    <MarketingBackground>
      <AudioCueTrack
        cues={videoScript.audioBed}
        durationInFrames={getTotalDurationInFrames()}
      />
      {videoScript.scenes.map((scene) => {
        const duration = getSceneDurationInFrames(scene, fps);
        const seq = (
          <Sequence key={scene.id} from={from} durationInFrames={duration} name={scene.name}>
            <SceneCanvas scene={scene} durationInFrames={duration} />
            <AudioCueTrack cues={scene.audio} durationInFrames={duration} />
          </Sequence>
        );
        from += duration;
        return seq;
      })}
    </MarketingBackground>
  );
};
