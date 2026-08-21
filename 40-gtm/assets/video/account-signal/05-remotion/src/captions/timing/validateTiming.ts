type Timed = { startMs: number; endMs: number; text?: string; displayText?: string };

export type TimingValidationResult = {
  valid: boolean;
  errors: string[];
};

/**
 * Chronological sanity check for a sequence of timed caption items, in the
 * order they're meant to play. Does not mutate or reorder — just reports.
 */
export function validateCaptionTiming<T extends Timed>(items: T[]): TimingValidationResult {
  const errors: string[] = [];

  let previousEndMs = -Infinity;

  items.forEach((item, index) => {
    const label = item.displayText ?? item.text ?? `#${index}`;

    if (!Number.isFinite(item.startMs) || !Number.isFinite(item.endMs)) {
      errors.push(`item ${index} ("${label}") has a non-finite timestamp`);
      return;
    }

    if (item.startMs < 0) {
      errors.push(`item ${index} ("${label}") has a negative startMs (${item.startMs})`);
    }

    if (item.endMs <= item.startMs) {
      errors.push(
        `item ${index} ("${label}") has endMs (${item.endMs}) <= startMs (${item.startMs})`,
      );
    }

    if (item.startMs < previousEndMs) {
      errors.push(
        `item ${index} ("${label}") starts (${item.startMs}) before the previous item ends (${previousEndMs})`,
      );
    }

    previousEndMs = Math.max(previousEndMs, item.endMs);
  });

  return { valid: errors.length === 0, errors };
}
