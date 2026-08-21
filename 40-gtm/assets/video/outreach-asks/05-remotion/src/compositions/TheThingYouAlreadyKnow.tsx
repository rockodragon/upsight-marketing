import React from "react";
import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { CaptionBar } from "../components/Primitives";
import { MarketingBackground } from "../components/MarketingBackground";
import {
  activeBeat,
  getSceneDurationInFrames,
  getTotalDurationInFrames,
  videoScript,
} from "../lib/script";
import { ActI } from "../scenes/ActI";
import { ActII } from "../scenes/ActII";
import { ActIII } from "../scenes/ActIII";
import { BeatInterview } from "../scenes/BeatInterview";
import { BeatProfile } from "../scenes/BeatProfile";
import { BeatAsk, BeatPattern, BeatWaiting, BeatWho } from "../scenes/BeatLoop";
import { ActV, ActVI } from "../scenes/ActClose";

export type FilmProps = {
  burnCaptions?: boolean;
};

const SCENE_BODY: Record<string, React.FC> = {
  "act-i": ActI,
  "act-ii": ActII,
  "act-iii": ActIII,
  "beat-1": BeatInterview,
  "beat-1b": BeatProfile,
  "beat-2": BeatPattern,
  "beat-3": BeatWho,
  "beat-4": BeatAsk,
  "beat-5": BeatWaiting,
  "act-v": ActV,
  "act-vi": ActVI,
};

export const TheThingYouAlreadyKnow: React.FC<FilmProps> = ({
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
  const scene = videoScript.scenes[sceneIndex];
  const local = (frame - starts[sceneIndex]) / fps;
  const caption = activeBeat(scene, local).caption;
  const hideCaption =
    (scene.id === "act-i" && !caption) ||
    (scene.id === "act-vi" && local >= 9);

  return (
    <MarketingBackground>
      {(() => {
        let from = 0;
        return videoScript.scenes.map((s) => {
          const dur = getSceneDurationInFrames(s, fps);
          const start = from;
          from += dur;
          const Body = SCENE_BODY[s.id];
          return (
            <Sequence key={s.id} from={start} durationInFrames={dur} name={s.name}>
              {Body ? <Body /> : <AbsoluteFill />}
            </Sequence>
          );
        });
      })()}
      {burnCaptions && !hideCaption ? <CaptionBar text={caption} /> : null}
    </MarketingBackground>
  );
};

export const filmDuration = () => getTotalDurationInFrames();
