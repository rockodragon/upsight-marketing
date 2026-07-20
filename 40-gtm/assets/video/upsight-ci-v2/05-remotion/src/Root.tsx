import React from "react";
import { Composition } from "remotion";
import { CiV2 } from "./compositions/CiV2";
import { CiV2Cards } from "./compositions/CiV2Cards";
import { CiV2Funnel } from "./compositions/CiV2Funnel";
import { CiV2Intelligence } from "./compositions/CiV2Intelligence";
import {
  CiV2Movie,
  CiV2MoviePortrait,
  CiV2MoviePortraitAlpha,
  getMovieDurationInFrames,
  MOVIE_HEIGHT,
  MOVIE_WIDTH,
  PORTRAIT_MOVIE_HEIGHT,
  PORTRAIT_MOVIE_WIDTH,
} from "./compositions/CiV2Movie";
import { CiV2Stories } from "./compositions/CiV2Stories";
import {
  getStackDurationInFrames,
  getTotalDurationInFrames,
  videoScript,
} from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = videoScript.format;
  const durationInFrames = getTotalDurationInFrames(videoScript);

  return (
    <>
      <Composition
        id="CiV2"
        component={CiV2}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={durationInFrames}
      />
      <Composition
        id="CiV2Funnel"
        component={CiV2Funnel}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={Math.round(12 * fps)}
      />

      {/* Preferred homepage embed: tight inline size */}
      <Composition
        id="CiV2Movie"
        component={CiV2Movie}
        width={MOVIE_WIDTH}
        height={MOVIE_HEIGHT}
        fps={fps}
        durationInFrames={getMovieDurationInFrames()}
      />
      {/* 4:5 portrait homepage hero — safe area for object-fit: cover */}
      <Composition
        id="CiV2MoviePortrait"
        component={CiV2MoviePortrait}
        width={PORTRAIT_MOVIE_WIDTH}
        height={PORTRAIT_MOVIE_HEIGHT}
        fps={fps}
        durationInFrames={getMovieDurationInFrames()}
      />
      <Composition
        id="CiV2MoviePortraitAlpha"
        component={CiV2MoviePortraitAlpha}
        width={PORTRAIT_MOVIE_WIDTH}
        height={PORTRAIT_MOVIE_HEIGHT}
        fps={fps}
        durationInFrames={getMovieDurationInFrames()}
      />

      {/* Optional: separate renders if the page wants scroll-stacked clips */}
      <Composition
        id="CiV2Cards"
        component={CiV2Cards}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={getStackDurationInFrames("CiV2Cards")}
      />
      <Composition
        id="CiV2Intelligence"
        component={CiV2Intelligence}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={getStackDurationInFrames("CiV2Intelligence")}
      />
      <Composition
        id="CiV2Stories"
        component={CiV2Stories}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={getStackDurationInFrames("CiV2Stories")}
      />
    </>
  );
};
