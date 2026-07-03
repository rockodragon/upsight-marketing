import React from "react";
import { Composition } from "remotion";
import { AiSurveyHero } from "./compositions/ai-survey/AiSurveyHero";
import { aiSurveyScript } from "./lib/script";
import { presets } from "./lib/brand";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps, durationSeconds } = aiSurveyScript.format;

  return (
    <>
      <Composition
        id="AiSurveyHero"
        component={AiSurveyHero}
        width={width ?? presets.homeHero.width}
        height={height ?? presets.homeHero.height}
        fps={fps ?? presets.homeHero.fps}
        durationInFrames={durationSeconds * (fps ?? presets.homeHero.fps)}
      />
    </>
  );
};
