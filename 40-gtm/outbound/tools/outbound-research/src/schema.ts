import { z } from "zod";

/**
 * The JSON schema sent to Exa as `outputSchema`.
 *
 * Kept verbatim from the Exa "Outbound Research" agent-tool template. Changing the
 * descriptions changes the model's output, so treat edits here as a prompt change and
 * re-check a sample brief afterwards.
 */
export const OUTBOUND_BRIEF_OUTPUT_SCHEMA = {
  type: "object",
  required: ["prospect_context", "overview", "outbound_triggers", "call_talking_points"],
  properties: {
    prospect_name: { type: "string", description: "Prospect's full name" },
    prospect_context: {
      type: "string",
      description: "One sentence about the prospect's role, remit, or likely priorities.",
    },
    overview: {
      type: "object",
      required: ["company", "product", "market"],
      properties: {
        company: { type: "string", description: "Company overview. 12 words or less." },
        product: { type: "string", description: "Product overview. 12 words or less." },
        market: { type: "string", description: "Market overview. 12 words or less." },
      },
    },
    outbound_triggers: {
      type: "array",
      description:
        "Recent news or signals that make outreach timely for this prospect. Return 2-4 dated bullets.",
      items: {
        type: "object",
        required: ["date", "text"],
        properties: {
          date: { type: "string", description: "Event date in Month YYYY format." },
          text: {
            type: "string",
            description: "Trigger text tied to the prospect's role or priorities.",
          },
        },
      },
    },
    call_talking_points: {
      type: "array",
      description: "Call talking points grounded in the triggers and prospect role.",
      items: { type: "string" },
    },
  },
} as const;

/**
 * The system prompt sent alongside the schema. Verbatim from the template.
 */
export const OUTBOUND_BRIEF_SYSTEM_PROMPT = `You are generating concise outbound research for a sales call.
Ground every claim in current public information.
Tie company signals back to the specific prospect's role.
No em dashes.
Stop researching as soon as you have 2 to 4 solid dated triggers. Do not keep searching for more.
Cite only the sources you actually used for the triggers and talking points, at most 5.`;

/**
 * Deep search variants, cheapest first. Billing is compute-driven, so lighter costs less.
 *
 * Default is `deep`, not `deep-lite`, despite the cost. Measured 2026-08-05 on matched runs:
 * `deep` returned three triggers all dated the current month, sourced to news outlets.
 * `deep-lite` returned triggers dated January 2025 and June 2022, sourced to evergreen podcasts
 * and blog posts. It does not do live news retrieval, which is the entire job here. A brief whose
 * newest trigger is four years old fails the playbook rule that every email carry a real, timely,
 * sourced hook, so the cheaper variant buys nothing usable.
 *
 * Use `deep-lite` only when you want background on a person rather than a reason to reach out now.
 */
export const SEARCH_TYPES = ["deep-lite", "deep", "deep-reasoning"] as const;
export type SearchType = (typeof SEARCH_TYPES)[number];
export const DEFAULT_SEARCH_TYPE: SearchType = "deep";

/** Runtime validation of what Exa actually returns for `output.content`. */
export const OutboundBriefSchema = z.object({
  prospect_name: z.string().optional(),
  prospect_context: z.string(),
  overview: z.object({
    company: z.string(),
    product: z.string(),
    market: z.string(),
  }),
  outbound_triggers: z.array(
    z.object({
      date: z.string(),
      text: z.string(),
    }),
  ),
  call_talking_points: z.array(z.string()),
});

export type OutboundBrief = z.infer<typeof OutboundBriefSchema>;

/**
 * Grounding is normalised permissively on purpose: we control the brief schema above, but
 * not the shape of Exa's citation payload, and a shape we did not anticipate should degrade
 * to "no sources shown" rather than throw away a brief we already paid for.
 */
export const GroundingSourceSchema = z
  .object({
    url: z.string().optional(),
    title: z.string().optional(),
    id: z.string().optional(),
    text: z.string().optional(),
    snippet: z.string().optional(),
  })
  .passthrough();

export type GroundingSource = z.infer<typeof GroundingSourceSchema>;

/**
 * Pull a flat list of sources out of whatever `output.grounding` came back as.
 * Handles an array of sources, a `{ citations: [...] }` / `{ sources: [...] }` wrapper, and
 * nested arrays. Anything unrecognised yields an empty list.
 */
export function normalizeGrounding(grounding: unknown): GroundingSource[] {
  const candidates: unknown[] = [];

  const collect = (value: unknown, depth: number): void => {
    if (value == null || depth > 4) return;
    if (Array.isArray(value)) {
      for (const item of value) collect(item, depth + 1);
      return;
    }
    if (typeof value !== "object") return;

    const record = value as Record<string, unknown>;
    // A wrapper object: descend into the array-valued keys that plausibly hold sources.
    for (const key of ["citations", "sources", "results", "references"]) {
      if (key in record) {
        collect(record[key], depth + 1);
        return;
      }
    }
    candidates.push(record);
  };

  collect(grounding, 0);

  const sources: GroundingSource[] = [];
  const seen = new Set<string>();

  for (const candidate of candidates) {
    const parsed = GroundingSourceSchema.safeParse(candidate);
    if (!parsed.success) continue;
    // A source with no URL cannot be cited, which is the only thing we use grounding for.
    const url = parsed.data.url;
    if (!url) continue;
    if (seen.has(url)) continue;
    seen.add(url);
    sources.push(parsed.data);
  }

  return sources;
}
