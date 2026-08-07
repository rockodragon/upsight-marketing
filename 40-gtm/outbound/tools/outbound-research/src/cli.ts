import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

import {
  BriefError,
  buildQuery,
  createExaClient,
  generateBriefWithRetry,
  mapWithConcurrency,
} from "./exa";
import { parseProspectsCsv, prospectSlug, type Prospect } from "./prospects";
import { DEFAULT_SEARCH_TYPE, SEARCH_TYPES, type SearchType } from "./schema";
import { qualifyProspects, SEGMENT_G_DEFAULTS } from "./qualify";
import { renderBriefMarkdown, renderRunSummary } from "./render";

/** The template's own sample list, kept so `--sample` can smoke-test the wiring cheaply. */
const SAMPLE_PROSPECTS: Prospect[] = [
  { firstName: "Cameron", lastName: "Adams", role: "CPO", company: "Canva" },
  { firstName: "Yuhki", lastName: "Yamashita", role: "CPO", company: "Figma" },
  { firstName: "Farhan", lastName: "Thawar", role: "Head of Engineering", company: "Shopify" },
  { firstName: "Gene", lastName: "Lee", role: "Head of Growth Eng", company: "Ramp" },
];

type Options = {
  input?: string;
  outDir: string;
  limit?: number;
  concurrency: number;
  force: boolean;
  dryRun: boolean;
  sample: boolean;
  searchType: SearchType;
  qualify: boolean;
};

const USAGE = `
Generate grounded outbound research briefs with Exa deep search.

Usage:
  npm run brief -- --input <prospects.csv> [options]
  npm run brief -- --sample --limit 1 --dry-run

Options:
  --input <path>       CSV of prospects. Exported from Exa Websets or Apollo.
  --sample             Use the four built-in sample prospects instead of a CSV.
  --out <dir>          Output directory for briefs. Default: ./briefs
  --limit <n>          Only process the first n prospects. Use this before a full run.
  --concurrency <n>    Parallel requests. Default: 3
  --type <variant>     deep-lite | deep | deep-reasoning. Default: deep.
                       deep-lite is cheaper but returns background, not current news, so
                       its triggers are often years stale. Use it only for bio research.
  --qualify            Drop rows that fail the segment G fit rules before spending anything.
                       Free, deterministic, reads Apollo's own columns. Recommended.
  --force              Regenerate briefs that already exist. Costs money again.
  --dry-run            Print what would be requested. Makes no API calls, spends nothing.
  --help               Show this message.

The CSV needs a name column and a company column. Header names are matched loosely, so a
Websets export with "Full name" / "Job title" / "Company website" works as-is.
`.trim();

function parseArgs(argv: string[]): Options | null {
  const options: Options = {
    outDir: "./briefs",
    concurrency: 3,
    force: false,
    dryRun: false,
    sample: false,
    searchType: DEFAULT_SEARCH_TYPE,
    qualify: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = (): string => {
      const value = argv[i + 1];
      if (value == null || value.startsWith("--")) {
        throw new Error(`${arg} needs a value`);
      }
      i += 1;
      return value;
    };

    switch (arg) {
      case "--help":
      case "-h":
        return null;
      case "--input":
        options.input = next();
        break;
      case "--out":
        options.outDir = next();
        break;
      case "--limit": {
        const value = Number.parseInt(next(), 10);
        if (!Number.isFinite(value) || value <= 0) throw new Error("--limit must be a positive integer");
        options.limit = value;
        break;
      }
      case "--concurrency": {
        const value = Number.parseInt(next(), 10);
        if (!Number.isFinite(value) || value <= 0) {
          throw new Error("--concurrency must be a positive integer");
        }
        options.concurrency = value;
        break;
      }
      case "--type": {
        const value = next();
        if (!(SEARCH_TYPES as readonly string[]).includes(value)) {
          throw new Error(`--type must be one of: ${SEARCH_TYPES.join(", ")}`);
        }
        options.searchType = value as SearchType;
        break;
      }
      case "--qualify":
        options.qualify = true;
        break;
      case "--force":
        options.force = true;
        break;
      case "--dry-run":
        options.dryRun = true;
        break;
      case "--sample":
        options.sample = true;
        break;
      default:
        throw new Error(`Unknown option: ${arg}`);
    }
  }

  return options;
}

function loadProspects(options: Options): { prospects: Prospect[]; skippedRows: number } {
  if (options.sample) {
    return { prospects: SAMPLE_PROSPECTS, skippedRows: 0 };
  }
  if (!options.input) {
    throw new Error("Pass --input <prospects.csv>, or --sample to use the built-in list.");
  }

  const path = resolve(options.input);
  if (!existsSync(path)) throw new Error(`No such file: ${path}`);

  const { prospects, skipped } = parseProspectsCsv(readFileSync(path, "utf8"));
  for (const row of skipped) {
    console.warn(`  skipped ${basename(path)} line ${row.line}: ${row.reason}`);
  }
  return { prospects, skippedRows: skipped.length };
}

async function main(): Promise<number> {
  let options: Options | null;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`${(error as Error).message}\n\n${USAGE}`);
    return 1;
  }
  if (options === null) {
    console.log(USAGE);
    return 0;
  }

  // Node reads .env natively; absence is fine when the key is already exported.
  try {
    process.loadEnvFile(resolve(__dirname, "..", ".env"));
  } catch {
    /* no .env file, fall through to process.env */
  }

  let loaded: { prospects: Prospect[]; skippedRows: number };
  try {
    loaded = loadProspects(options);
  } catch (error) {
    console.error((error as Error).message);
    return 1;
  }

  let { prospects } = loaded;

  if (options.qualify) {
    const { kept, dropped } = qualifyProspects(prospects, SEGMENT_G_DEFAULTS);
    for (const verdict of dropped) {
      console.warn(
        `  dropped ${verdict.prospect.firstName} ${verdict.prospect.lastName} (${verdict.prospect.company}): ${verdict.reasons.join("; ")}`,
      );
    }
    console.log(
      `\nQualified ${kept.length} of ${prospects.length}. Saved roughly $${(dropped.length * 0.24).toFixed(2)} in briefs not run.\n`,
    );
    prospects = kept;
  }

  if (options.limit != null) prospects = prospects.slice(0, options.limit);

  if (prospects.length === 0) {
    console.error("No usable prospects found.");
    return 1;
  }

  const outDir = resolve(options.outDir);
  const targets = prospects.map((prospect) => ({
    prospect,
    path: join(outDir, `${prospectSlug(prospect)}.md`),
  }));

  if (options.dryRun) {
    console.log(
      `Dry run — ${targets.length} prospect(s) via ${options.searchType}, no API calls, no spend.\n`,
    );
    for (const { prospect, path } of targets) {
      const exists = existsSync(path) && !options.force;
      console.log(`${exists ? "skip (exists)" : "would request"}: ${buildQuery(prospect)}`);
    }
    return 0;
  }

  const apiKey = process.env.EXA_API_KEY?.trim();
  if (!apiKey) {
    console.error(
      "EXA_API_KEY is not set. Copy .env.example to .env and add your key.\n" +
        "Get one at https://dashboard.exa.ai/api-keys",
    );
    return 1;
  }

  mkdirSync(outDir, { recursive: true });

  const client = createExaClient(apiKey);
  const generatedOn = new Date().toISOString().slice(0, 10);

  let generated = 0;
  let skippedExisting = 0;
  let failed = 0;

  await mapWithConcurrency(targets, options.concurrency, async ({ prospect, path }) => {
    const label = `${prospect.firstName} ${prospect.lastName} (${prospect.company})`;

    if (existsSync(path) && !options.force) {
      skippedExisting += 1;
      console.log(`  exists, skipping: ${label}`);
      return;
    }

    try {
      const { brief, grounding } = await generateBriefWithRetry(client, prospect, {
        searchType: options.searchType,
      });
      writeFileSync(path, renderBriefMarkdown(prospect, brief, grounding, { generatedOn }), "utf8");
      generated += 1;
      const sources = grounding.length === 0 ? "no sources" : `${grounding.length} sources`;
      console.log(`  ok: ${label} (${sources})`);
    } catch (error) {
      failed += 1;
      const reason =
        error instanceof BriefError ? error.message : ((error as Error).message ?? "unknown error");
      console.error(`  failed: ${label} — ${reason}`);
    }
  });

  console.log(
    `\n${renderRunSummary({ generated, skippedExisting, failed, skippedRows: loaded.skippedRows })}`,
  );
  if (generated > 0) console.log(`Briefs written to ${outDir}`);

  return failed > 0 && generated === 0 ? 1 : 0;
}

main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
