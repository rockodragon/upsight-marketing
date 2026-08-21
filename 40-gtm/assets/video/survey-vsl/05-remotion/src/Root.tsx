import React from "react";
import { Composition } from "remotion";
import { SurveyVsl } from "./compositions/survey-vsl/SurveyVsl";
import "./lib/fonts";
import {
  getTotalDurationInFrames,
  surveyScript,
} from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const fps = surveyScript.format.fps;
  const durationInFrames = getTotalDurationInFrames(fps);
  const { width, height } = surveyScript.format;

  return (
    <Composition
      id="SurveyVsl"
      component={SurveyVsl}
      width={width}
      height={height}
      fps={fps}
      durationInFrames={durationInFrames}
      defaultProps={{
        burnCaptions: true,
        withVoiceover: false,
      }}
    />
  );
};
