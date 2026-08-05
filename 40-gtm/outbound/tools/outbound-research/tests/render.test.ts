import { describe, expect, it } from "vitest";

import { renderBriefMarkdown, renderRunSummary } from "../src/render";
import type { Prospect } from "../src/prospects";
import type { OutboundBrief } from "../src/schema";

const PROSPECT: Prospect = {
  firstName: "Cameron",
  lastName: "Adams",
  role: "CPO",
  company: "Canva",
};

const BRIEF: OutboundBrief = {
  prospect_name: "Cameron Adams",
  prospect_context: "Leads product at a design company.",
  overview: { company: "Design platform", product: "Web design tool", market: "Creative software" },
  outbound_triggers: [{ date: "March 2026", text: "Shipped a new AI surface." }],
  call_talking_points: ["Ask about the AI rollout."],
};

const OPTIONS = { generatedOn: "2026-08-05" };

describe("renderBriefMarkdown", () => {
  it("renders every schema section", () => {
    const md = renderBriefMarkdown(PROSPECT, BRIEF, [{ url: "https://canva.com" }], OPTIONS);

    expect(md).toContain("# Cameron Adams — CPO, Canva");
    expect(md).toContain("## Prospect context");
    expect(md).toContain("## Overview");
    expect(md).toContain("## Outbound triggers");
    expect(md).toContain("## Call talking points");
    expect(md).toContain("## Sources");
  });

  it("opens with vault-style front matter", () => {
    const md = renderBriefMarkdown(PROSPECT, BRIEF, [], OPTIONS);
    expect(md.startsWith("---\ntags:\n")).toBe(true);
    expect(md).toContain("generated: 2026-08-05");
  });

  it("renders dated triggers as bullets", () => {
    const md = renderBriefMarkdown(PROSPECT, BRIEF, [], OPTIONS);
    expect(md).toContain("- **March 2026** — Shipped a new AI surface.");
  });

  it("links sources by title, falling back to hostname", () => {
    const md = renderBriefMarkdown(
      PROSPECT,
      BRIEF,
      [
        { url: "https://canva.com/news", title: "Canva Newsroom" },
        { url: "https://techcrunch.com/x" },
      ],
      OPTIONS,
    );
    expect(md).toContain("1. [Canva Newsroom](https://canva.com/news)");
    expect(md).toContain("2. [techcrunch.com](https://techcrunch.com/x)");
  });

  it("warns loudly when there is no grounding", () => {
    const md = renderBriefMarkdown(PROSPECT, BRIEF, [], OPTIONS);
    expect(md).toContain("no grounding");
  });

  it("warns when no triggers came back, since a hook is required to send", () => {
    const md = renderBriefMarkdown(PROSPECT, { ...BRIEF, outbound_triggers: [] }, [], OPTIONS);
    expect(md).toContain("Do not send without a real hook.");
  });

  it("escapes pipes so overview text cannot break the table", () => {
    const md = renderBriefMarkdown(
      PROSPECT,
      { ...BRIEF, overview: { ...BRIEF.overview, company: "Design | platform" } },
      [],
      OPTIONS,
    );
    expect(md).toContain("Design \\| platform");
  });

  it("falls back to the CSV name when the model omits prospect_name", () => {
    const { prospect_name: _omitted, ...rest } = BRIEF;
    const md = renderBriefMarkdown(PROSPECT, rest as OutboundBrief, [], OPTIONS);
    expect(md).toContain("# Cameron Adams — CPO, Canva");
  });
});

describe("renderRunSummary", () => {
  it("reports only the counts that are non-zero", () => {
    expect(renderRunSummary({ generated: 3, skippedExisting: 0, failed: 0, skippedRows: 0 })).toBe(
      "3 generated",
    );
  });

  it("includes failures and skips when present", () => {
    expect(renderRunSummary({ generated: 1, skippedExisting: 2, failed: 1, skippedRows: 4 })).toBe(
      "1 generated, 2 already existed, 1 failed, 4 rows skipped",
    );
  });
});
