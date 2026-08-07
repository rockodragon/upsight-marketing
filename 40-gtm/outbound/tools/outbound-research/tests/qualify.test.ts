import { describe, expect, it } from "vitest";

import { parseProspectsCsv } from "../src/prospects";
import {
  parseEmployeeCount,
  qualifyProspect,
  qualifyProspects,
  SEGMENT_G_DEFAULTS,
} from "../src/qualify";

function prospectFrom(raw: Record<string, string>) {
  return {
    firstName: "Test",
    lastName: "Person",
    role: "VP Marketing",
    company: "Test Co",
    raw,
  };
}

describe("parseEmployeeCount", () => {
  it("reads a plain integer", () => {
    expect(parseEmployeeCount("150")).toBe(150);
  });

  it("strips thousands separators", () => {
    expect(parseEmployeeCount("1,000")).toBe(1000);
  });

  it("takes the lower bound of a range", () => {
    expect(parseEmployeeCount("51-200")).toBe(51);
  });

  it("handles a trailing plus", () => {
    expect(parseEmployeeCount("500+")).toBe(500);
  });

  it("returns null for missing or unparseable values", () => {
    expect(parseEmployeeCount(undefined)).toBeNull();
    expect(parseEmployeeCount("")).toBeNull();
    expect(parseEmployeeCount("unknown")).toBeNull();
  });
});

describe("qualifyProspect", () => {
  it("keeps a good segment G row", () => {
    const reasons = qualifyProspect(
      prospectFrom({
        "# employees": "150",
        industry: "health wellness & fitness",
        email: "amber@knewhealth.com",
        "email status": "Verified",
      }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toEqual([]);
  });

  it("drops a company above the headcount ceiling", () => {
    const reasons = qualifyProspect(
      prospectFrom({ "# employees": "1000", "email status": "Verified" }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toContain("1000 employees, above 300");
  });

  it("drops a company below the headcount floor", () => {
    const reasons = qualifyProspect(
      prospectFrom({ "# employees": "12", "email status": "Verified" }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toContain("12 employees, below 30");
  });

  it("drops a blocklisted industry", () => {
    const reasons = qualifyProspect(
      prospectFrom({ industry: "medical practice", "email status": "Verified" }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toContain('industry "medical practice"');
  });

  it("drops a row on two or more blocklisted keywords", () => {
    const reasons = qualifyProspect(
      prospectFrom({
        keywords: "healthcare, dental care, orthodontics, med spa",
        "email status": "Verified",
      }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons.some((r) => r.startsWith("keywords"))).toBe(true);
  });

  it("tolerates a single stray keyword, since brands list hundreds", () => {
    const reasons = qualifyProspect(
      prospectFrom({
        keywords: "toothpaste, oral care, dental, clean beauty, personal care",
        "email status": "Verified",
      }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toEqual([]);
  });

  it("drops a role inbox", () => {
    const reasons = qualifyProspect(
      prospectFrom({ email: "info@brand.com", "email status": "Verified" }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toContain("role inbox");
  });

  it("drops an unverified email", () => {
    const reasons = qualifyProspect(
      prospectFrom({ "email status": "Guessed" }),
      SEGMENT_G_DEFAULTS,
    );
    expect(reasons).toContain('email status "guessed"');
  });

  it("never drops on a missing column, since absent data is not evidence", () => {
    expect(qualifyProspect(prospectFrom({}), SEGMENT_G_DEFAULTS)).toEqual([]);
  });
});

describe("qualifyProspects on a real Apollo export shape", () => {
  const csv = [
    "First Name,Last Name,Title,Company Name,Email,Email Status,# Employees,Industry,Keywords",
    'Emmy,Ansinelli,VP of Marketing,Abra Health Group,eansinelli@abrahealth.com,Verified,1000,medical practice,"healthcare, dental care, orthodontics, med spa"',
    'Amber,Cram,Head of Marketing,Knew Health,amber@knewhealth.com,Verified,150,health wellness & fitness,"supplements, clean beauty"',
    'Jenn,Quinn,Director of Marketing,Monarch Plastics,jparker@monarchps.com,Verified,80,plastics,"injection molding"',
  ].join("\n");

  it("keeps the brand and drops the dental group and the manufacturer", () => {
    const { prospects } = parseProspectsCsv(csv);
    const { kept, dropped } = qualifyProspects(prospects);

    expect(kept.map((p) => p.company)).toEqual(["Knew Health"]);
    expect(dropped).toHaveLength(2);
    expect(dropped[0].reasons.join(" ")).toContain("above 300");
    expect(dropped[1].reasons.join(" ")).toContain("plastics");
  });
});
