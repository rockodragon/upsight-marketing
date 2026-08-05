import { describe, expect, it } from "vitest";

import {
  OUTBOUND_BRIEF_OUTPUT_SCHEMA,
  OutboundBriefSchema,
  normalizeGrounding,
} from "../src/schema";

const VALID_BRIEF = {
  prospect_name: "Cameron Adams",
  prospect_context: "Leads product at a design company.",
  overview: { company: "Design platform", product: "Web design tool", market: "Creative software" },
  outbound_triggers: [{ date: "March 2026", text: "Shipped a new AI surface." }],
  call_talking_points: ["Ask about the AI rollout."],
};

describe("OUTBOUND_BRIEF_OUTPUT_SCHEMA", () => {
  it("keeps the four required sections the template depends on", () => {
    expect(OUTBOUND_BRIEF_OUTPUT_SCHEMA.required).toEqual([
      "prospect_context",
      "overview",
      "outbound_triggers",
      "call_talking_points",
    ]);
  });

  it("requires company, product, and market inside overview", () => {
    expect(OUTBOUND_BRIEF_OUTPUT_SCHEMA.properties.overview.required).toEqual([
      "company",
      "product",
      "market",
    ]);
  });
});

describe("OutboundBriefSchema", () => {
  it("accepts a well-formed brief", () => {
    expect(OutboundBriefSchema.safeParse(VALID_BRIEF).success).toBe(true);
  });

  it("accepts a brief with no prospect_name, which is optional in the schema", () => {
    const { prospect_name: _omitted, ...rest } = VALID_BRIEF;
    expect(OutboundBriefSchema.safeParse(rest).success).toBe(true);
  });

  it("rejects a brief missing overview.market", () => {
    const broken = {
      ...VALID_BRIEF,
      overview: { company: "a", product: "b" },
    };
    expect(OutboundBriefSchema.safeParse(broken).success).toBe(false);
  });

  it("rejects a trigger without a date", () => {
    const broken = { ...VALID_BRIEF, outbound_triggers: [{ text: "no date" }] };
    expect(OutboundBriefSchema.safeParse(broken).success).toBe(false);
  });
});

describe("normalizeGrounding", () => {
  it("reads a plain array of sources", () => {
    const sources = normalizeGrounding([
      { url: "https://a.com", title: "A" },
      { url: "https://b.com" },
    ]);
    expect(sources.map((s) => s.url)).toEqual(["https://a.com", "https://b.com"]);
  });

  it("unwraps a citations wrapper", () => {
    expect(normalizeGrounding({ citations: [{ url: "https://a.com" }] })).toHaveLength(1);
  });

  it("deduplicates repeated URLs", () => {
    const sources = normalizeGrounding([
      { url: "https://a.com", title: "First" },
      { url: "https://a.com", title: "Duplicate" },
    ]);
    expect(sources).toHaveLength(1);
    expect(sources[0].title).toBe("First");
  });

  it("drops entries with no URL, since they cannot be cited", () => {
    expect(normalizeGrounding([{ title: "No link" }, { url: "https://a.com" }])).toHaveLength(1);
  });

  it("returns an empty list for null, undefined, and unexpected shapes", () => {
    expect(normalizeGrounding(null)).toEqual([]);
    expect(normalizeGrounding(undefined)).toEqual([]);
    expect(normalizeGrounding("unexpected")).toEqual([]);
    expect(normalizeGrounding(42)).toEqual([]);
  });
});
