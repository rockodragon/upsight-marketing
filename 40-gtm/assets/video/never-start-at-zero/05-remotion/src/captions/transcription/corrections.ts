import type { CaptionCorrection, TimedCaptionToken, VocabularyFile } from "../types";

function normalizeForMatch(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

type CompiledVariant = {
  display: string;
  words: string[];
};

function compileVocabulary(vocabulary: VocabularyFile): CompiledVariant[] {
  const compiled: CompiledVariant[] = [];

  for (const entry of vocabulary.replacements) {
    for (const variant of entry.variants) {
      const words = normalizeForMatch(variant).split(" ").filter(Boolean);
      if (words.length > 0) {
        compiled.push({ display: entry.display, words });
      }
    }
  }

  // Longest variant first so "up site please" doesn't get shadowed by a
  // shorter partial match starting at the same token.
  return compiled.sort((a, b) => b.words.length - a.words.length);
}

/**
 * Finds vocabulary matches in `tokens` without mutating anything. Pure and
 * testable in isolation from `applyCorrections`.
 */
export function findVocabularyCorrections(
  tokens: TimedCaptionToken[],
  vocabulary: VocabularyFile,
): CaptionCorrection[] {
  const variants = compileVocabulary(vocabulary);
  const normalizedTokens = tokens.map((token) => normalizeForMatch(token.displayText));
  const corrections: CaptionCorrection[] = [];
  const consumed = new Array(tokens.length).fill(false);

  for (let start = 0; start < tokens.length; start++) {
    if (consumed[start]) continue;

    for (const variant of variants) {
      const end = start + variant.words.length;
      if (end > tokens.length) continue;
      if (consumed.slice(start, end).some(Boolean)) continue;

      const slice = normalizedTokens.slice(start, end);
      if (slice.join(" ") !== variant.words.join(" ")) continue;

      const sourceTokenIds = tokens.slice(start, end).map((t) => t.id);
      corrections.push({ sourceTokenIds, displayText: variant.display });
      for (let i = start; i < end; i++) consumed[i] = true;
      break;
    }
  }

  return corrections;
}

/**
 * Applies previously-found corrections, merging each matched span into a
 * single token. Timestamps come from the span's first/last source token —
 * correction never invents or shifts timing. Unmatched tokens pass through
 * unchanged.
 */
export function applyCorrections(
  tokens: TimedCaptionToken[],
  corrections: CaptionCorrection[],
): TimedCaptionToken[] {
  const tokenById = new Map(tokens.map((token) => [token.id, token]));
  const correctionByFirstId = new Map<string, CaptionCorrection>();
  const idsInCorrections = new Set<string>();

  for (const correction of corrections) {
    correctionByFirstId.set(correction.sourceTokenIds[0], correction);
    for (const id of correction.sourceTokenIds) idsInCorrections.add(id);
  }

  const result: TimedCaptionToken[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const correction = correctionByFirstId.get(token.id);

    if (correction) {
      const sourceTokens = correction.sourceTokenIds
        .map((id) => tokenById.get(id))
        .filter((t): t is TimedCaptionToken => t !== undefined);

      if (sourceTokens.length !== correction.sourceTokenIds.length) {
        throw new Error(
          `Correction references unknown token id(s): ${correction.sourceTokenIds.join(", ")}`,
        );
      }

      result.push({
        id: sourceTokens[0].id,
        originalText: sourceTokens.map((t) => t.originalText).join(" "),
        displayText: correction.displayText,
        startMs: sourceTokens[0].startMs,
        endMs: sourceTokens[sourceTokens.length - 1].endMs,
        confidence: Math.min(
          ...sourceTokens.map((t) => t.confidence ?? 1),
        ),
        sourceTokenIds: correction.sourceTokenIds,
      });
      continue;
    }

    if (idsInCorrections.has(token.id)) {
      // Consumed as a non-first member of a multi-token correction above.
      continue;
    }

    result.push(token);
  }

  return result;
}
