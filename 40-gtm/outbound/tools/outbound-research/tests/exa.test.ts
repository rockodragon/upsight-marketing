import { describe, expect, it, vi } from "vitest";

import {
  BriefError,
  buildQuery,
  generateBrief,
  generateBriefWithRetry,
  mapWithConcurrency,
} from "../src/exa";
import {
  DEFAULT_SEARCH_TYPE,
  OUTBOUND_BRIEF_OUTPUT_SCHEMA,
  OUTBOUND_BRIEF_SYSTEM_PROMPT,
} from "../src/schema";
import type { Prospect } from "../src/prospects";

const PROSPECT: Prospect = {
  firstName: "Cameron",
  lastName: "Adams",
  role: "CPO",
  company: "Canva",
};

const VALID_CONTENT = {
  prospect_name: "Cameron Adams",
  prospect_context: "Leads product.",
  overview: { company: "a", product: "b", market: "c" },
  outbound_triggers: [{ date: "March 2026", text: "Shipped something." }],
  call_talking_points: ["Point one."],
};

function stubClient(response: unknown, spy = vi.fn()) {
  return {
    search: async (query: string, options: unknown) => {
      spy(query, options);
      if (response instanceof Error) throw response;
      return response as { output?: { content?: unknown; grounding?: unknown } };
    },
  };
}

describe("buildQuery", () => {
  it("matches the template's query construction", () => {
    expect(buildQuery(PROSPECT)).toBe(
      "Generate an outbound research brief for Cameron Adams, CPO at Canva",
    );
  });
});

describe("generateBrief", () => {
  it("sends deep search with the template's system prompt and output schema", async () => {
    const spy = vi.fn();
    const client = stubClient({ output: { content: VALID_CONTENT, grounding: [] } }, spy);

    await generateBrief(client, PROSPECT);

    expect(spy).toHaveBeenCalledWith(buildQuery(PROSPECT), {
      type: DEFAULT_SEARCH_TYPE,
      systemPrompt: OUTBOUND_BRIEF_SYSTEM_PROMPT,
      outputSchema: OUTBOUND_BRIEF_OUTPUT_SCHEMA,
    });
  });

  it("defaults to deep, since deep-lite does not do live news retrieval", () => {
    expect(DEFAULT_SEARCH_TYPE).toBe("deep");
  });

  it("honours an explicit search type", async () => {
    const spy = vi.fn();
    const client = stubClient({ output: { content: VALID_CONTENT, grounding: [] } }, spy);

    await generateBrief(client, PROSPECT, "deep-reasoning");

    expect(spy.mock.calls[0][1]).toMatchObject({ type: "deep-reasoning" });
  });

  it("returns the parsed brief and normalised grounding", async () => {
    const client = stubClient({
      output: { content: VALID_CONTENT, grounding: [{ url: "https://canva.com", title: "Canva" }] },
    });

    const { brief, grounding } = await generateBrief(client, PROSPECT);

    expect(brief.prospect_context).toBe("Leads product.");
    expect(grounding).toEqual([{ url: "https://canva.com", title: "Canva" }]);
  });

  it("parses output.content when it arrives as a JSON string", async () => {
    const client = stubClient({ output: { content: JSON.stringify(VALID_CONTENT) } });
    const { brief } = await generateBrief(client, PROSPECT);
    expect(brief.overview.market).toBe("c");
  });

  it("throws a non-retryable error when content is missing", async () => {
    const client = stubClient({ output: {} });
    await expect(generateBrief(client, PROSPECT)).rejects.toBeInstanceOf(BriefError);
  });

  it("throws a non-retryable error when the output does not match the schema", async () => {
    const client = stubClient({ output: { content: { prospect_context: "only this" } } });
    await expect(generateBrief(client, PROSPECT)).rejects.toThrow(/did not match the brief schema/);
  });
});

describe("generateBriefWithRetry", () => {
  it("retries a 429 and succeeds on a later attempt", async () => {
    let calls = 0;
    const client = {
      search: async () => {
        calls += 1;
        if (calls < 3) throw Object.assign(new Error("rate limited"), { status: 429 });
        return { output: { content: VALID_CONTENT, grounding: [] } };
      },
    };

    const { brief } = await generateBriefWithRetry(client, PROSPECT, {
      baseDelayMs: 0,
      sleep: async () => {},
    });

    expect(calls).toBe(3);
    expect(brief.prospect_context).toBe("Leads product.");
  });

  it("does not retry a schema failure, which would just cost money again", async () => {
    let calls = 0;
    const client = {
      search: async () => {
        calls += 1;
        return { output: { content: { wrong: true } } };
      },
    };

    await expect(
      generateBriefWithRetry(client, PROSPECT, { baseDelayMs: 0, sleep: async () => {} }),
    ).rejects.toBeInstanceOf(BriefError);
    expect(calls).toBe(1);
  });

  it("gives up after the configured number of attempts", async () => {
    let calls = 0;
    const client = {
      search: async () => {
        calls += 1;
        throw Object.assign(new Error("server error"), { status: 503 });
      },
    };

    await expect(
      generateBriefWithRetry(client, PROSPECT, { attempts: 2, baseDelayMs: 0, sleep: async () => {} }),
    ).rejects.toThrow(/server error/);
    expect(calls).toBe(2);
  });
});

describe("mapWithConcurrency", () => {
  it("preserves input order in the results", async () => {
    const items = [30, 10, 20];
    const results = await mapWithConcurrency(items, 2, async (item) => {
      await new Promise((r) => setTimeout(r, item));
      return item;
    });
    expect(results).toEqual([30, 10, 20]);
  });

  it("never exceeds the concurrency limit", async () => {
    let active = 0;
    let peak = 0;
    await mapWithConcurrency([1, 2, 3, 4, 5, 6], 2, async () => {
      active += 1;
      peak = Math.max(peak, active);
      await new Promise((r) => setTimeout(r, 5));
      active -= 1;
    });
    expect(peak).toBeLessThanOrEqual(2);
  });

  it("handles an empty list", async () => {
    expect(await mapWithConcurrency([], 3, async () => 1)).toEqual([]);
  });
});
