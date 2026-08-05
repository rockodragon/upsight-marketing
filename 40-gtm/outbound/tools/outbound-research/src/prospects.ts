/**
 * Prospect input handling.
 *
 * The expected source is a CSV exported from Exa Websets (see
 * `40-gtm/outbound/exa-websets-intern-guide.md`), but header names vary between exports and
 * between Websets and Apollo, so headers are matched by alias rather than exact string.
 */

export type Prospect = {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
};

/** Parse RFC-4180-ish CSV: quoted fields, escaped `""`, and newlines inside quotes. */
export function parseCsv(input: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  let i = 0;

  // Strip a UTF-8 BOM, which Excel and Google Sheets both like to emit.
  const text = input.charCodeAt(0) === 0xfeff ? input.slice(1) : input;

  const endField = (): void => {
    row.push(field);
    field = "";
  };
  const endRow = (): void => {
    endField();
    // Skip rows that are entirely empty, which trailing newlines produce.
    if (row.some((cell) => cell.trim() !== "")) rows.push(row);
    row = [];
  };

  while (i < text.length) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += char;
      i += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (char === ",") {
      endField();
      i += 1;
      continue;
    }
    if (char === "\r") {
      // Handle CRLF and a lone CR.
      if (text[i + 1] === "\n") i += 1;
      endRow();
      i += 1;
      continue;
    }
    if (char === "\n") {
      endRow();
      i += 1;
      continue;
    }

    field += char;
    i += 1;
  }

  if (field !== "" || row.length > 0) endRow();

  return rows;
}

const HEADER_ALIASES: Record<keyof Prospect | "fullName", string[]> = {
  firstName: ["first name", "firstname", "first"],
  lastName: ["last name", "lastname", "last", "surname"],
  fullName: ["full name", "fullname", "name", "person", "contact", "contact name"],
  role: ["job title", "title", "role", "position", "job"],
  company: ["company", "company name", "organization", "organisation", "employer", "account"],
};

function normalizeHeader(header: string): string {
  return header.trim().toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
}

function findColumn(headers: string[], aliases: string[]): number {
  const normalized = headers.map(normalizeHeader);
  for (const alias of aliases) {
    const index = normalized.indexOf(alias);
    if (index !== -1) return index;
  }
  return -1;
}

/** Split "Ada Lovelace" into first and last. Single-token names become the first name. */
export function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(" "),
  };
}

/**
 * Derive a company name from a website when the export has a domain but no company column,
 * which is the shape the Websets guide's five columns produce.
 */
export function companyFromWebsite(website: string): string {
  const trimmed = website.trim();
  if (!trimmed) return "";
  const withoutScheme = trimmed.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  const host = withoutScheme.split(/[/?#]/)[0];
  const label = host.split(".")[0];
  if (!label) return "";
  return label
    .split(/[-_]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export type ParseProspectsResult = {
  prospects: Prospect[];
  /** Rows dropped for missing required fields, with 1-indexed CSV line numbers. */
  skipped: { line: number; reason: string }[];
};

export function parseProspectsCsv(csv: string): ParseProspectsResult {
  const rows = parseCsv(csv);
  if (rows.length === 0) return { prospects: [], skipped: [] };

  const headers = rows[0];
  const firstNameCol = findColumn(headers, HEADER_ALIASES.firstName);
  const lastNameCol = findColumn(headers, HEADER_ALIASES.lastName);
  const fullNameCol = findColumn(headers, HEADER_ALIASES.fullName);
  const roleCol = findColumn(headers, HEADER_ALIASES.role);
  const companyCol = findColumn(headers, HEADER_ALIASES.company);
  const websiteCol = findColumn(headers, [
    "company website",
    "website",
    "domain",
    "company domain",
    "company url",
  ]);

  if (fullNameCol === -1 && firstNameCol === -1) {
    throw new Error(
      `CSV has no name column. Expected one of: ${[...HEADER_ALIASES.fullName, ...HEADER_ALIASES.firstName].join(", ")}`,
    );
  }
  if (companyCol === -1 && websiteCol === -1) {
    throw new Error(
      `CSV has no company column. Expected one of: ${[...HEADER_ALIASES.company, "company website", "domain"].join(", ")}`,
    );
  }

  const prospects: Prospect[] = [];
  const skipped: { line: number; reason: string }[] = [];

  for (let r = 1; r < rows.length; r += 1) {
    const row = rows[r];
    const cell = (index: number): string => (index >= 0 ? (row[index] ?? "").trim() : "");

    let firstName = cell(firstNameCol);
    let lastName = cell(lastNameCol);
    if (!firstName && fullNameCol !== -1) {
      const split = splitFullName(cell(fullNameCol));
      firstName = split.firstName;
      lastName = lastName || split.lastName;
    }

    const role = cell(roleCol);
    const company = cell(companyCol) || companyFromWebsite(cell(websiteCol));

    const missing: string[] = [];
    if (!firstName) missing.push("name");
    if (!company) missing.push("company");
    if (missing.length > 0) {
      skipped.push({ line: r + 1, reason: `missing ${missing.join(" and ")}` });
      continue;
    }

    prospects.push({
      firstName,
      lastName,
      // The brief reads badly without a role, but the role is not worth dropping a row over.
      role: role || "unknown role",
      company,
    });
  }

  return { prospects, skipped };
}

/** Stable, filesystem-safe slug used for output filenames and resume checks. */
export function prospectSlug(prospect: Prospect): string {
  const raw = [prospect.firstName, prospect.lastName, prospect.company]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const slug = raw
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "prospect";
}
