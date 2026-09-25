import React from "react";
import { Composition } from "remotion";
import { CaptionComposition } from "./captions/CaptionComposition";
import { TheThingYouAlreadyKnow } from "./compositions/TheThingYouAlreadyKnow";
import { PaidCut30, SocialCut15 } from "./compositions/Cuts";
import { getTotalDurationInFrames, videoScript } from "./lib/script";

export const RemotionRoot: React.FC = () => {
  const { width, height, fps } = videoScript.format;

  return (
    <>
      <Composition
        id="TheThingYouAlreadyKnow"
        component={TheThingYouAlreadyKnow}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={getTotalDurationInFrames(fps)}
        defaultProps={{ burnCaptions: true }}
      />
      <Composition
        id="PaidCut30"
        component={PaidCut30}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={30 * fps}
      />
      <Composition
        id="SocialCut15"
        component={SocialCut15}
        width={width}
        height={height}
        fps={fps}
        durationInFrames={15 * fps}
      />
      <Composition
        id="CaptionDemo"
        component={CaptionComposition}
        width={1080}
        height={1920}
        fps={30}
        durationInFrames={30 * 30}
        defaultProps={{
          videoSrc: "video/demo-source.mp4",
          captionsSrc: "captions/demo-source.json",
          captionPreset: "clean",
        }}
      />
    </>
  );
};
