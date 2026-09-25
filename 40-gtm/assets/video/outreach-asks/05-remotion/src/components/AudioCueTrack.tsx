import React from "react";
import { Html5Audio, Sequence, staticFile } from "remotion";
import type { AudioCue } from "../lib/script";

const getVolumeEnvelope = (
  frame: number,
  durationInFrames: number,
  cue: AudioCue
): number => {
  const baseVolume = cue.volume ?? 1;
  const fadeInFrames = cue.fadeInFrames ?? 0;
  const fadeOutFrames = cue.fadeOutFrames ?? 0;

  let volume = baseVolume;

  if (fadeInFrames > 0 && frame < fadeInFrames) {
    volume *= frame / fadeInFrames;
  }

  if (fadeOutFrames > 0 && frame > durationInFrames - fadeOutFrames) {
    volume *= Math.max(0, (durationInFrames - frame) / fadeOutFrames);
  }

  return volume;
};

const AudioCueClip: React.FC<{
  cue: AudioCue;
  durationInFrames: number;
}> = ({ cue, durationInFrames }) => {
  return (
    <Html5Audio
      src={staticFile(cue.src)}
      trimBefore={cue.trimBeforeFrames}
      trimAfter={cue.trimAfterFrames}
      playbackRate={cue.playbackRate}
      loop={cue.loop}
      name={cue.id}
      volume={(frame) => getVolumeEnvelope(frame, durationInFrames, cue)}
    />
  );
};

export const AudioCueTrack: React.FC<{
  cues?: AudioCue[];
  durationInFrames: number;
}> = ({ cues, durationInFrames }) => {
  if (!cues?.length) return null;

  return (
    <>
      {cues.map((cue) => {
        const from = cue.fromFrames ?? 0;
        const cueDuration = Math.max(
          1,
          cue.durationFrames ?? durationInFrames - from
        );

        return (
          <Sequence
            key={cue.id}
            from={from}
            durationInFrames={cueDuration}
            name={`audio:${cue.id}`}
          >
            <AudioCueClip cue={cue} durationInFrames={cueDuration} />
          </Sequence>
        );
      })}
    </>
  );
};
