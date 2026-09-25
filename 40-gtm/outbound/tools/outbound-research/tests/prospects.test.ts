import { describe, expect, it } from "vitest";

import {
  companyFromWebsite,
  parseCsv,
  parseProspectsCsv,
  prospectSlug,
  splitFullName,
} from "../src/prospects";

describe("parseCsv", () => {
  it("parses quoted fields containing commas and newlines", () => {
    const rows = parseCsv('a,"b,c","d\ne"\n1,2,3\n');
    expect(rows).toEqual([
      ["a", "b,c", "d\ne"],
      ["1", "2", "3"],
    ]);
  });

  it("unescapes doubled quotes", () => {
    expect(parseCsv('name\n"She said ""hi"""')).toEqual([["name"], ['She said "hi"']]);
  });

  it("handles CRLF line endings and a trailing newline", () => {
    expect(parseCsv("a,b\r\n1,2\r\n")).toEqual([
      ["a", "b"],
      ["1", "2"],
    ]);
  });

  it("strips a UTF-8 BOM", () => {
    expect(parseCsv("﻿a,b\n1,2")[0]).toEqual(["a", "b"]);
  });
});

describe("splitFullName", () => {
  it("splits first and last", () => {
    expect(splitFullName("Ada Lovelace")).toEqual({ firstName: "Ada", lastName: "Lovelace" });
  });

  it("keeps multi-word surnames together", () => {
    expect(splitFullName("Ana de Armas Diaz")).toEqual({
      firstName: "Ana",
      lastName: "de Armas Diaz",
    });
  });

  it("handles a single token", () => {
    expect(splitFullName("Cher")).toEqual({ firstName: "Cher", lastName: "" });
  });
});

describe("companyFromWebsite", () => {
  it("derives a name from a URL", () => {
    expect(companyFromWebsite("https://www.moonjuice.com/collections")).toBe("Moonjuice");
  });

  it("title-cases hyphenated domains", () => {
    expect(companyFromWebsite("true-botanicals.com")).toBe("True Botanicals");
  });

  it("returns empty for blank input", () => {
    expect(companyFromWebsite("  ")).toBe("");
  });
});

describe("parseProspectsCsv", () => {
  it("keeps the full source row so qualification rules can read extra columns", () => {
    const csv = ["Full name,Company,# Employees", "Jane Rivera,Osea,150"].join("\n");
    expect(parseProspectsCsv(csv).prospects[0].raw).toMatchObject({
      "# employees": "150",
      company: "Osea",
    });
  });

  it("reads a Websets-shaped export with full name and company website", () => {
    const csv = [
      "Full name,Job title,Work email,LinkedIn URL,Company website",
      "Jane Rivera,VP Marketing,jane@osea.com,https://linkedin.com/in/jrivera,https://oseamalibu.com",
    ].join("\n");

    const { prospects, skipped } = parseProspectsCsv(csv);

    expect(skipped).toEqual([]);
    expect(prospects).toHaveLength(1);
    expect(prospects[0]).toMatchObject({
      firstName: "Jane",
      lastName: "Rivera",
      role: "VP Marketing",
      company: "Oseamalibu",
    });
  });

  it("prefers an explicit company column over the website", () => {
    const csv = [
      "First Name,Last Name,Title,Company,Website",
      "Sam,Cho,Head of Brand,Ritual,https://ritual.com",
    ].join("\n");

    expect(parseProspectsCsv(csv).prospects[0]).toMatchObject({
      firstName: "Sam",
      lastName: "Cho",
      role: "Head of Brand",
      company: "Ritual",
    });
  });

  it("skips rows missing a name or company and reports the line number", () => {
    const csv = [
      "Full name,Job title,Company",
      "Jane Rivera,VP Marketing,Osea",
      ",Director of CX,Ritual",
      "Sam Cho,Head of Brand,",
    ].join("\n");

    const { prospects, skipped } = parseProspectsCsv(csv);

    expect(prospects).toHaveLength(1);
    expect(skipped).toEqual([
      { line: 3, reason: "missing name" },
      { line: 4, reason: "missing company" },
    ]);
  });

  it("keeps a row with no role rather than dropping it", () => {
    const csv = ["Full name,Company", "Jane Rivera,Osea"].join("\n");
    expect(parseProspectsCsv(csv).prospects[0].role).toBe("unknown role");
  });

  it("throws a helpful error when there is no company column at all", () => {
    expect(() => parseProspectsCsv("Full name,Job title\nJane Rivera,VP")).toThrow(
      /no company column/i,
    );
  });
});

describe("prospectSlug", () => {
  it("builds a filesystem-safe slug", () => {
    expect(
      prospectSlug({ firstName: "Jane", lastName: "Rivera", role: "VP", company: "OSEA Malibu" }),
    ).toBe("jane-rivera-osea-malibu");
  });

  it("is stable regardless of role", () => {
    const base = { firstName: "Jane", lastName: "Rivera", company: "Osea" };
    expect(prospectSlug({ ...base, role: "VP" })).toBe(prospectSlug({ ...base, role: "CMO" }));
  });
});
