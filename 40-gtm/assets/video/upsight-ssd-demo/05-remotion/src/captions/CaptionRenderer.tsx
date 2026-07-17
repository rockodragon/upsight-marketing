import React, { useMemo } from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";
import { CaptionPage } from "./CaptionPage";
import { DEFAULT_LAYOUT, paginateCaptions } from "./pagination";
import { getPreset } from "./presets";
import { remapTokensToTimeline } from "./timing/remapTimeline";
import type { Caption, CaptionRendererProps } from "./types";

/**
 * Reusable, deterministic caption overlay. Current time is always derived
 * from useCurrentFrame()/useVideoConfig().fps — no wall-clock timers or CSS
 * transitions — so the same frame always renders the same output in
 * preview and in `remotion render`.
 *
 * Timing model: internally everything is normalized to composition-local
 * milliseconds (frame 0 == 0ms). `clipStartMs` shifts source timestamps
 * back by that amount; `timeline` (for videos with removed sections) fully
 * replaces that shift via remapTokensToTimeline. If both are given,
 * `timeline` wins.
 */
export const CaptionRenderer: React.FC<CaptionRendererProps> = ({
  captions,
  preset: presetName,
  clipStartMs = 0,
  timeline,
  layout: layoutOverrides,
}) => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const preset = getPreset(presetName);
  const layout = { ...DEFAULT_LAYOUT, ...preset.layoutDefaults, ...layoutOverrides };

  const effectiveCaptions: Caption[] = useMemo(() => {
    if (timeline && timeline.length > 0) {
      return remapTokensToTimeline(captions, timeline).items;
    }

    if (clipStartMs) {
      return captions.map((caption) => ({
        ...caption,
        startMs: caption.startMs - clipStartMs,
        endMs: caption.endMs - clipStartMs,
      }));
    }

    return captions;
  }, [captions, timeline, clipStartMs]);

  const pages = useMemo(
    () => paginateCaptions(effectiveCaptions, layout),
    // layout is a fresh object each render; stringify the parts that affect
    // pagination so this memo doesn't thrash every frame.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [effectiveCaptions, layout.combineTokensWithinMilliseconds, layout.maxWordsPerPage],
  );

  const nowMs = (frame / fps) * 1000;
  const activePage = pages.find((page) => nowMs >= page.startMs && nowMs < page.startMs + page.durationMs);

  if (!activePage) {
    return null;
  }

  return (
    <CaptionPage
      page={activePage}
      nowMs={nowMs}
      fps={fps}
      preset={preset.tokens}
      layout={layout}
      compositionWidth={width}
    />
  );
};
