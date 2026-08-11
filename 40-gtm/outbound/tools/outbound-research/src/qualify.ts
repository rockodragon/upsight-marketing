/**
 * List qualification.
 *
 * Apollo's own filters leak: a 1,000-person dental group tagged "medical practice" comes back
 * inside a health-and-wellness search, and Apollo will happily mark it Qualified. Every junk row
 * that survives to the brief stage costs a real API call, so this pass runs first, reads the
 * columns Apollo already gave us, and is free and deterministic.
 *
 * Rules only drop rows on evidence present in the CSV. A missing column is never grounds for a
 * drop, because absence of data is not evidence of a bad fit.
 */

import type { Prospect } from "./prospects";

export type QualifyOptions = {
  minEmployees: number;
  maxEmployees: number;
  /** Substrings matched against the Industry column. */
  industryBlocklist: string[];
  /** Substrings matched against the Keywords column, which is where clinics give themselves away. */
  keywordBlocklist: string[];
  /** Drop anything whose Email Status is not Verified. The playbook requires verified only. */
  requireVerifiedEmail: boolean;
};

/**
 * Defaults tuned for segment G (see `40-gtm/outbound/segment-g-health-beauty-wellness.md`).
 * The blocklists encode that doc's anti-ICP list: providers, manufacturers, and resellers.
 */
export const SEGMENT_G_DEFAULTS: QualifyOptions = {
  /**
   * Deliberately far below segment G's stated 20-300 band. Measured against a real 57-row Apollo
   * export, a floor of 30 dropped Melt Cosmetics (14), The Good Patch (12), Henry Rose (9), and
   * Kreatures of Habit (10) — all squarely on-ICP. DTC brands run lean on contractors and agencies,
   * and Apollo undercounts them badly. The ceiling catches conglomerates reliably; the floor mostly
   * catches good brands, so it is set low enough to only exclude the genuinely pre-revenue.
   */
  minEmployees: 5,
  maxEmployees: 300,
  industryBlocklist: [
    "medical practice",
    "hospital & health care",
    "hospital and health care",
    "mental health care",
    "plastics",
    "packaging & containers",
    // "retail" is deliberately absent: Apollo files many real DTC brands under it, and it dropped
    // Naked & Thriving, an on-ICP skincare brand, in testing. "wholesale" does not have this problem.
    "wholesale",
    "marketing & advertising",
    "management consulting",
    "staffing & recruiting",
    "pharmaceuticals",
  ],
  keywordBlocklist: [
    "dental",
    "dentistry",
    "orthodontics",
    "med spa",
    "medspa",
    "surgical center",
    "surgery center",
    "urgent care",
    "primary care",
    "physical therapy",
    "chiropractic",
    "veterinary",
    "nursing home",
    "home health",
    "contract manufactur",
    "private label",
    "white label",
    "co-packer",
    "copacker",
    "ingredient supplier",
    "multi-level marketing",
    "direct sales",
  ],
  requireVerifiedEmail: true,
};

export type Verdict = {
  prospect: Prospect;
  /** Empty when the row is kept. */
  reasons: string[];
};

export type QualifyResult = {
  kept: Prospect[];
  dropped: Verdict[];
};

/** Apollo writes employee counts as plain integers, but exports elsewhere use "1,000" or "50+". */
export function parseEmployeeCount(value: string | undefined): number | null {
  if (!value) return null;
  const cleaned = value.replace(/[,\s+]/g, "");
  // A range such as "51-200" is judged on its lower bound, the more forgiving read.
  const match = cleaned.match(/^(\d+)/);
  if (!match) return null;
  const parsed = Number.parseInt(match[1], 10);
  return Number.isFinite(parsed) ? parsed : null;
}

const ROLE_INBOX_PREFIXES = [
  "info@",
  "hello@",
  "contact@",
  "support@",
  "sales@",
  "press@",
  "admin@",
  "team@",
  "help@",
  "marketing@",
];

function readColumn(prospect: Prospect, names: string[]): string | undefined {
  const raw = prospect.raw;
  if (!raw) return undefined;
  for (const name of names) {
    const value = raw[name];
    if (value != null && value !== "") return value;
  }
  return undefined;
}

export function qualifyProspect(prospect: Prospect, options: QualifyOptions): string[] {
  const reasons: string[] = [];

  const employees = parseEmployeeCount(readColumn(prospect, ["# employees", "employees", "headcount"]));
  if (employees != null) {
    if (employees < options.minEmployees) {
      reasons.push(`${employees} employees, below ${options.minEmployees}`);
    } else if (employees > options.maxEmployees) {
      reasons.push(`${employees} employees, above ${options.maxEmployees}`);
    }
  }

  const industry = readColumn(prospect, ["industry"])?.toLowerCase();
  if (industry) {
    const hit = options.industryBlocklist.find((term) => industry.includes(term));
    if (hit) reasons.push(`industry "${hit}"`);
  }

  const keywords = readColumn(prospect, ["keywords"])?.toLowerCase();
  if (keywords) {
    const hits = options.keywordBlocklist.filter((term) => keywords.includes(term));
    // One stray keyword is noise; several is a pattern. Brands list hundreds of keywords, so a
    // single "dental" match on a toothpaste brand should not disqualify it.
    if (hits.length >= 2) {
      reasons.push(`keywords ${hits.slice(0, 3).map((h) => `"${h}"`).join(", ")}`);
    }
  }

  const email = readColumn(prospect, ["email", "work email", "primary email"])?.toLowerCase();
  if (email && ROLE_INBOX_PREFIXES.some((prefix) => email.startsWith(prefix))) {
    reasons.push("role inbox");
  }

  if (options.requireVerifiedEmail) {
    const status = readColumn(prospect, ["email status"])?.toLowerCase();
    if (status && status !== "verified") {
      reasons.push(`email status "${status}"`);
    }
  }

  return reasons;
}

export function qualifyProspects(
  prospects: Prospect[],
  options: QualifyOptions = SEGMENT_G_DEFAULTS,
): QualifyResult {
  const kept: Prospect[] = [];
  const dropped: Verdict[] = [];

  for (const prospect of prospects) {
    const reasons = qualifyProspect(prospect, options);
    if (reasons.length === 0) kept.push(prospect);
    else dropped.push({ prospect, reasons });
  }

  return { kept, dropped };
}
