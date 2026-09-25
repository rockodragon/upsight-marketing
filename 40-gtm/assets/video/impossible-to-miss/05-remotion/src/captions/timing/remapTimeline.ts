import type { TimelineSegment } from "../types";

type Timed = { startMs: number; endMs: number };

export type RemapTimelineResult<T> = {
  items: T[];
  dropped: Array<{ item: T; reason: string }>;
};

/**
 * Maps source-timeline items onto an edited output timeline made of kept
 * segments (e.g. after removing a section of the middle of a video).
 *
 * Segments are expected to be non-overlapping in source time and given in
 * output order. A token that crosses a segment boundary is clipped to the
 * segment. A token outside every segment is dropped.
 */
export function remapTokensToTimeline<T extends Timed>(
  items: T[],
  segments: TimelineSegment[],
): RemapTimelineResult<T> {
  const remapped: T[] = [];
  const dropped: Array<{ item: T; reason: string }> = [];

  for (const item of items) {
    const overlapping = segments.filter(
      (segment) => item.endMs > segment.sourceStartMs && item.startMs < segment.sourceEndMs,
    );

    if (overlapping.length === 0) {
      dropped.push({ item, reason: "outside all timeline segments" });
      continue;
    }

    for (const segment of overlapping) {
      const clampedSourceStart = Math.max(item.startMs, segment.sourceStartMs);
      const clampedSourceEnd = Math.min(item.endMs, segment.sourceEndMs);
      const outputStart = segment.outputStartMs + (clampedSourceStart - segment.sourceStartMs);
      const outputEnd = segment.outputStartMs + (clampedSourceEnd - segment.sourceStartMs);

      if (outputStart < 0 || outputEnd < 0) {
        dropped.push({ item, reason: "negative output timestamp" });
        continue;
      }

      remapped.push({
        ...item,
        startMs: outputStart,
        endMs: outputEnd,
      });
    }
  }

  remapped.sort((a, b) => a.startMs - b.startMs);

  const items_: T[] = [];
  let lastEndMs = -Infinity;

  for (const item of remapped) {
    if (item.startMs < lastEndMs) {
      dropped.push({ item, reason: "overlaps a previously placed caption on the output timeline" });
      continue;
    }
    items_.push(item);
    lastEndMs = Math.max(lastEndMs, item.endMs);
  }

  if (dropped.length > 0) {
    console.warn(
      `[remapTokensToTimeline] dropped ${dropped.length} caption item(s): ` +
        dropped.map((d) => d.reason).join("; "),
    );
  }

  return { items: items_, dropped };
}
