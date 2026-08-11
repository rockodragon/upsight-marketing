import { existsSync, readFileSync } from "node:fs";
import { basename, resolve } from "node:path";

import { formatFindings, lintEmail } from "./lint";

const USAGE = `
Lint an outbound email draft against the playbook's sending rules.

Usage:
  npm run lint -- <draft.md> [--brief <brief.md>]
  npm run lint -- drafts/*.md

Options:
  --brief <path>   The prospect's brief. Enables the hook check: the draft must reuse a
                   concrete detail from the research, not just sound personalised.
  --max-words <n>  Word ceiling for the body. Default: 120
  --help           Show this message.

Exit code is 1 if any draft has a blocking finding, so this can gate a send script.
`.trim();

function main(): number {
  const argv = process.argv.slice(2);
  if (argv.length === 0 || argv.includes("--help") || argv.includes("-h")) {
    console.log(USAGE);
    return argv.length === 0 ? 1 : 0;
  }

  const files: string[] = [];
  let briefPath: string | undefined;
  let maxWords: number | undefined;

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--brief") {
      briefPath = argv[i + 1];
      i += 1;
    } else if (arg === "--max-words") {
      maxWords = Number.parseInt(argv[i + 1] ?? "", 10);
      i += 1;
    } else if (arg.startsWith("--")) {
      console.error(`Unknown option: ${arg}\n\n${USAGE}`);
      return 1;
    } else {
      files.push(arg);
    }
  }

  if (files.length === 0) {
    console.error(`No draft files given.\n\n${USAGE}`);
    return 1;
  }

  let briefText: string | undefined;
  if (briefPath) {
    const path = resolve(briefPath);
    if (!existsSync(path)) {
      console.error(`No such brief: ${path}`);
      return 1;
    }
    briefText = readFileSync(path, "utf8");
  }

  let blocking = 0;

  for (const file of files) {
    const path = resolve(file);
    if (!existsSync(path)) {
      console.error(
        `No such file: ${path}\n` +
          "  Drafts are files you write. Put one in drafts/ and pass its path, for example:\n" +
          "    npm run lint -- drafts/lindsey-locke-kreatures-of-habit.md \\\n" +
          "      --brief briefs/lindsey-locke-kreatures-of-habit.md",
      );
      blocking += 1;
      continue;
    }

    const findings = lintEmail(readFileSync(path, "utf8"), {
      briefText,
      ...(Number.isFinite(maxWords) && maxWords ? { maxWords } : {}),
    });
    const errors = findings.filter((f) => f.severity === "error").length;
    blocking += errors;

    console.log(`\n${basename(path)}`);
    console.log(formatFindings(findings));
  }

  return blocking > 0 ? 1 : 0;
}

process.exitCode = main();
