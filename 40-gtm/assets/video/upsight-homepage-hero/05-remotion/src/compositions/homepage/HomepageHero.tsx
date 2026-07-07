import React from "react";
import { Sequence, useVideoConfig } from "remotion";
import { MarketingBackground } from "../../components/MarketingBackground";
import { homepageHeroScript } from "../../lib/script";
import { SceneHeroTension } from "./SceneHeroTension";
import { SceneHeroPromise } from "./SceneHeroPromise";
import { SceneHeroMeetingPrep } from "./SceneHeroMeetingPrep";
import { SceneHeroClose } from "./SceneHeroClose";

export const HomepageHero: React.FC = () => {
  const { fps } = useVideoConfig();

  return (
    <MarketingBackground>
      <Sequence
        from={0}
        durationInFrames={homepageHeroScript.scenes[0].durationSeconds * fps}
        name="Tension"
      >
        <SceneHeroTension />
      </Sequence>

      <Sequence
        from={homepageHeroScript.scenes[0].durationSeconds * fps}
        durationInFrames={homepageHeroScript.scenes[1].durationSeconds * fps}
        name="Promise"
      >
        <SceneHeroPromise />
      </Sequence>

      <Sequence
        from={
          (homepageHeroScript.scenes[0].durationSeconds +
            homepageHeroScript.scenes[1].durationSeconds) *
          fps
        }
        durationInFrames={homepageHeroScript.scenes[2].durationSeconds * fps}
        name="MeetingPrep"
      >
        <SceneHeroMeetingPrep />
      </Sequence>

      <Sequence
        from={
          (homepageHeroScript.scenes[0].durationSeconds +
            homepageHeroScript.scenes[1].durationSeconds +
            homepageHeroScript.scenes[2].durationSeconds) *
          fps
        }
        durationInFrames={homepageHeroScript.scenes[3].durationSeconds * fps}
        name="Close"
      >
        <SceneHeroClose />
      </Sequence>
    </MarketingBackground>
  );
};
