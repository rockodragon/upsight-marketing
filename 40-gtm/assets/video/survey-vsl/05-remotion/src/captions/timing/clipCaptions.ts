type Timed = { startMs: number; endMs: number };

/**
 * Keeps only the portion of `items` that falls within [clipStartMs, clipEndMs),
 * clips tokens that cross a boundary, and rebases remaining timestamps so the
 * clip start becomes 0. Pure — does not mutate `items`.
 */
export function clipCaptionsToRange<T extends Timed>(
  items: T[],
  clipStartMs: number,
  clipEndMs: number,
): T[] {
  if (clipEndMs <= clipStartMs) {
    throw new Error(
      `clipEndMs (${clipEndMs}) must be greater than clipStartMs (${clipStartMs})`,
    );
  }

  const result: T[] = [];

  for (const item of items) {
    if (item.endMs <= clipStartMs || item.startMs >= clipEndMs) {
      continue;
    }

    const clampedStart = Math.max(item.startMs, clipStartMs);
    const clampedEnd = Math.min(item.endMs, clipEndMs);

    result.push({
      ...item,
      startMs: clampedStart - clipStartMs,
      endMs: clampedEnd - clipStartMs,
    });
  }

  return result;
}
