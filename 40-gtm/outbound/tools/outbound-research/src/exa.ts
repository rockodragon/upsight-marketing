import Exa from "exa-js";

import type { Prospect } from "./prospects";
import {
  OUTBOUND_BRIEF_OUTPUT_SCHEMA,
  OUTBOUND_BRIEF_SYSTEM_PROMPT,
  OutboundBriefSchema,
  normalizeGrounding,
  type GroundingSource,
  type OutboundBrief,
} from "./schema";

export type BriefResult = {
  brief: OutboundBrief;
  grounding: GroundingSource[];
};

/**
 * Structured deep-search options and the `output` envelope are newer than the published
 * exa-js types, so the call is made through a narrow local interface rather than `any`.
 * If a future exa-js release types these natively, delete this block and call `exa.search`
 * directly.
 */
type DeepSearchOptions = {
  type: "deep";
  systemPrompt: string;
  outputSchema: unknown;
};

type DeepSearchResponse = {
  output?: {
    content?: unknown;
    grounding?: unknown;
  };
};

type DeepSearchClient = {
  search(query: string, options: DeepSearchOptions): Promise<DeepSearchResponse>;
};

export function createExaClient(apiKey: string): DeepSearchClient {
  return new Exa(apiKey) as unknown as DeepSearchClient;
}

/** The query string sent to Exa. Kept verbatim from the template. */
export function buildQuery(prospect: Prospect): string {
  return `Generate an outbound research brief for ${prospect.firstName} ${prospect.lastName}, ${prospect.role} at ${prospect.company}`;
}

export class BriefError extends Error {
  constructor(
    message: string,
    readonly retryable: boolean,
  ) {
    super(message);
    this.name = "BriefError";
  }
}

/** Retry on transport blips and rate limits, but never on a schema or auth failure. */
function isRetryableTransportError(error: unknown): boolean {
  const status = (error as { status?: number; statusCode?: number } | null)?.status ??
    (error as { statusCode?: number } | null)?.statusCode;
  if (typeof status === "number") {
    return status === 408 || status === 409 || status === 429 || status >= 500;
  }
  const message = error instanceof Error ? error.message.toLowerCase() : "";
  return (
    message.includes("timeout") ||
    message.includes("econnreset") ||
    message.includes("etimedout") ||
    message.includes("socket hang up") ||
    message.includes("fetch failed")
  );
}

export async function generateBrief(
  client: DeepSearchClient,
  prospect: Prospect,
): Promise<BriefResult> {
  const result = await client.search(buildQuery(prospect), {
    type: "deep",
    systemPrompt: OUTBOUND_BRIEF_SYSTEM_PROMPT,
    outputSchema: OUTBOUND_BRIEF_OUTPUT_SCHEMA,
  });

  const content = result.output?.content;
  if (content == null) {
    throw new BriefError("Exa returned no output.content for this prospect", false);
  }

  // Deep search may hand back the structured object directly or as a JSON string.
  const raw =
    typeof content === "string"
      ? (() => {
          try {
            return JSON.parse(content) as unknown;
          } catch {
            throw new BriefError("Exa returned output.content that is not valid JSON", false);
          }
        })()
      : content;

  const parsed = OutboundBriefSchema.safeParse(raw);
  if (!parsed.success) {
    const issues = parsed.error.issues
      .slice(0, 3)
      .map((issue) => `${issue.path.join(".") || "(root)"}: ${issue.message}`)
      .join("; ");
    throw new BriefError(`Exa output did not match the brief schema — ${issues}`, false);
  }

  return {
    brief: parsed.data,
    grounding: normalizeGrounding(result.output?.grounding),
  };
}

export type RetryOptions = {
  attempts?: number;
  baseDelayMs?: number;
  sleep?: (ms: number) => Promise<void>;
};

export async function generateBriefWithRetry(
  client: DeepSearchClient,
  prospect: Prospect,
  options: RetryOptions = {},
): Promise<BriefResult> {
  const attempts = options.attempts ?? 3;
  const baseDelayMs = options.baseDelayMs ?? 1_000;
  const sleep = options.sleep ?? ((ms: number) => new Promise((r) => setTimeout(r, ms)));

  let lastError: unknown;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await generateBrief(client, prospect);
    } catch (error) {
      lastError = error;
      const retryable =
        error instanceof BriefError ? error.retryable : isRetryableTransportError(error);
      if (!retryable || attempt === attempts) break;
      await sleep(baseDelayMs * 2 ** (attempt - 1));
    }
  }

  throw lastError;
}

/** Run `worker` over `items` with bounded concurrency, preserving input order in the output. */
export async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;

  const runners = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index);
    }
  });

  await Promise.all(runners);
  return results;
}
