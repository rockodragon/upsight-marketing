import { describe, expect, it } from "vitest";

import { extractBriefAnchors, formatFindings, lintEmail, splitSubjectAndBody } from "../src/lint";

/** A draft that should pass everything. Short, specific, one ask, about them. */
const GOOD_EMAIL = `Subject: Your August reformulation post

Amber, you mentioned in August 2026 that Knew Health reformulated the sleep blend
after customer complaints about taste.

How did you decide the new formula was actually better? Most brands I talk to are
stuck reading scattered reviews.

Worth 20 minutes next week?

Rick`;

function rules(text: string, options = {}): string[] {
  return lintEmail(text, options).map((f) => f.rule);
}

describe("splitSubjectAndBody", () => {
  it("splits a leading subject line", () => {
    const { subject, body } = splitSubjectAndBody("Subject: Hello there\n\nBody text.");
    expect(subject).toBe("Hello there");
    expect(body.trim()).toBe("Body text.");
  });

  it("treats a draft with no subject as all body", () => {
    expect(splitSubjectAndBody("Just a body.").subject).toBeUndefined();
  });
});

describe("lintEmail", () => {
  it("passes a short, specific, single-ask draft", () => {
    expect(lintEmail(GOOD_EMAIL)).toEqual([]);
  });

  it.each([
    ["I hope this email finds you well.", "filler"],
    ["Just following up on my last note.", "filler"],
    ["Quick question for you.", "filler"],
    ["Big fan of what you're building.", "flattery"],
    ["I wanted to say I'm really impressed by your growth.", "flattery"],
    ["I imagine you're buried in customer feedback.", "presumption"],
    ["This is a total game-changer for brands.", "hype"],
    ["We help you leverage customer data.", "jargon"],
    ["Let me delve into why this matters.", "ai-tell"],
    ["In today's fast-paced market, brands need speed.", "ai-tell"],
    ["Let me know if you'd like to learn more.", "weak-close"],
  ])("flags %j as %s", (text, expected) => {
    expect(rules(text)).toContain(expected);
  });

  it("flags em dashes, which the brief prompt already bans", () => {
    expect(rules("We looked at your reviews — they are glowing.")).toContain("em-dash");
  });

  it("flags an over-long body", () => {
    expect(rules(`word `.repeat(200), { maxWords: 120 })).toContain("length");
  });

  it("flags more than one link", () => {
    expect(rules("See https://a.com and https://b.com today.")).toContain("links");
  });

  it("flags more than two questions", () => {
    expect(rules("Free? Next week? Or later? Maybe Friday?")).toContain("multiple-asks");
  });

  it("flags a draft that talks mostly about us", () => {
    const text = "I built UpSight. I think we solve this. I would love to show you. I can demo.";
    expect(rules(text)).toContain("self-centred");
  });

  it("flags a fake Re: subject as a trust problem", () => {
    expect(rules("Subject: Re: our chat\n\nFollowing on.")).toContain("fake-thread");
  });

  it("warns on a long subject line", () => {
    const text = "Subject: A really quite long subject line about many different things\n\nHi.";
    expect(rules(text)).toContain("subject-length");
  });

  it("warns on a runaway sentence", () => {
    const long = `This is a sentence that simply refuses to end and keeps on adding yet more and more clauses well past the point where any reader would still be paying any attention at all to it.`;
    expect(rules(long)).toContain("sentence-length");
  });
});

describe("hook grounding", () => {
  const brief = `
## Outbound triggers
- **August 2026** — Knew Health reformulated its sleep blend after customer complaints.
`;

  it("passes when the draft reuses a detail from the brief", () => {
    const draft = "Amber, your August 2026 reformulation caught my eye. Worth 20 minutes?";
    expect(rules(draft, { briefText: brief })).not.toContain("no-hook");
  });

  it("fails a generic draft even when it sounds personalised", () => {
    const draft = "Amber, saw you are doing great things in wellness. Worth 20 minutes?";
    expect(rules(draft, { briefText: brief })).toContain("no-hook");
  });

  it("does not run the hook check when no brief is supplied", () => {
    expect(rules("Totally generic note.")).not.toContain("no-hook");
  });
});

describe("extractBriefAnchors", () => {
  it("pulls dated triggers, proper nouns, and figures", () => {
    const anchors = extractBriefAnchors(
      "- **August 2026** — Knew Health raised 20M for its Sleep Blend line.",
    );
    expect(anchors).toContain("August 2026");
    expect(anchors).toContain("Knew Health");
  });
});

describe("formatFindings", () => {
  it("reports a clean draft", () => {
    expect(formatFindings([])).toBe("Clean. No findings.");
  });

  it("separates blocking from advisory counts", () => {
    const output = formatFindings(lintEmail("I hope this finds you well. " + "word ".repeat(200)));
    expect(output).toMatch(/blocking/);
    expect(output).toMatch(/advisory/);
  });
});
