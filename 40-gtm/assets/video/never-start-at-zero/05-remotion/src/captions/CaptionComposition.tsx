import React, { useEffect, useState } from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  cancelRender,
  continueRender,
  delayRender,
  staticFile,
  useVideoConfig,
} from "remotion";
import { CaptionRenderer } from "./CaptionRenderer";
import { tokensToCaptions } from "./pagination";
import { CaptionDocumentSchema } from "./schemas";
import type { Caption, CaptionPresetName } from "./types";

export type CaptionCompositionProps = {
  videoSrc: string;
  captionsSrc: string;
  captionPreset: CaptionPresetName;
  clipStartMs?: number;
  clipEndMs?: number;
};

/**
 * Example integration: an OffthreadVideo with the caption pipeline's JSON
 * output overlaid. `captionsSrc` is a path under `public/` (i.e. passed to
 * staticFile()), written by `scripts/caption-video.ts`.
 *
 * FPS-agnostic and clip-aware: trims are computed in frames from the
 * composition's actual fps (never hardcoded to 30), and `clipStartMs` is
 * forwarded to CaptionRenderer so caption timing stays in sync with
 * whatever portion of the source video this composition plays.
 */
export const CaptionComposition: React.FC<CaptionCompositionProps> = ({
  videoSrc,
  captionsSrc,
  captionPreset,
  clipStartMs,
  clipEndMs,
}) => {
  const { fps } = useVideoConfig();
  const [captions, setCaptions] = useState<Caption[] | null>(null);

  useEffect(() => {
    const handle = delayRender(`Loading captions from ${captionsSrc}`);

    fetch(staticFile(captionsSrc))
      .then((res) => res.json())
      .then((json) => {
        const document = CaptionDocumentSchema.parse(json);
        setCaptions(tokensToCaptions(document.tokens));
        continueRender(handle);
      })
      .catch((error) => {
        cancelRender(error);
      });
  }, [captionsSrc]);

  const msToFrames = (ms: number) => Math.round((ms / 1000) * fps);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <OffthreadVideo
        src={staticFile(videoSrc)}
        trimBefore={clipStartMs !== undefined ? msToFrames(clipStartMs) : undefined}
        trimAfter={clipEndMs !== undefined ? msToFrames(clipEndMs) : undefined}
      />
      {captions ? (
        <CaptionRenderer captions={captions} preset={captionPreset} clipStartMs={clipStartMs} />
      ) : null}
    </AbsoluteFill>
  );
};
