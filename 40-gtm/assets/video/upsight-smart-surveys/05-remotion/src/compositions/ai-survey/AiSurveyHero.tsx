import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import { aiSurveyScript } from "../../lib/script";
import { SceneSurveyHook } from "./SceneSurveyHook";
import { SceneSurveyPromise } from "./SceneSurveyPromise";
import { SceneSurveyModes } from "./SceneSurveyModes";
import { SceneSurveyProduct } from "./SceneSurveyProduct";
import { SceneSurveyClose } from "./SceneSurveyClose";

const sceneComponents: Record<string, React.FC> = {
  hook: SceneSurveyHook,
  promise: SceneSurveyPromise,
  modes: SceneSurveyModes,
  product: SceneSurveyProduct,
  close: SceneSurveyClose,
};

/**
 * AI Survey Hero — script-driven composition.
 * Edit copy in scripts/ai-survey-hero.script.json, then npm run render.
 */
export const AiSurveyHero: React.FC = () => {
  const { fps } = useVideoConfig();
  let from = 0;

  return (
    <MarketingBackground>
      {aiSurveyScript.scenes.map((scene) => {
        const duration = scene.durationSeconds * fps;
        const Component = sceneComponents[scene.id];
        const seq = (
          <Sequence
            key={scene.id}
            from={from}
            durationInFrames={duration}
            name={scene.name}
          >
            <Component />
          </Sequence>
        );
        from += duration;
        return seq;
      })}
    </MarketingBackground>
  );
};
