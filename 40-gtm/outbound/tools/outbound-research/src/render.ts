import type { Prospect } from "./prospects";
import type { GroundingSource, OutboundBrief } from "./schema";

/** Escape the pipe characters that would otherwise break a markdown table row. */
function escapeTableCell(value: string): string {
  return value.replace(/\|/g, "\\|").trim();
}

function sourceLabel(source: GroundingSource, index: number): string {
  const title = source.title?.trim();
  if (title) return title;
  const url = source.url ?? "";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return `Source ${index + 1}`;
  }
}

export type RenderOptions = {
  /** ISO date stamp for the front matter. Passed in so rendering stays pure and testable. */
  generatedOn: string;
};

/**
 * Render a brief as a vault-style markdown note: front-matter tags matching the rest of
 * `40-gtm/outbound/`, then the four schema sections, then sources from grounding.
 */
export function renderBriefMarkdown(
  prospect: Prospect,
  brief: OutboundBrief,
  grounding: GroundingSource[],
  options: RenderOptions,
): string {
  const displayName =
    brief.prospect_name?.trim() ||
    [prospect.firstName, prospect.lastName].filter(Boolean).join(" ");

  const lines: string[] = [
    "---",
    "tags:",
    "  - marketing",
    "  - outbound",
    "  - prospect-brief",
    `generated: ${options.generatedOn}`,
    "source: exa-deep-search",
    "---",
    `# ${displayName} — ${prospect.role}, ${prospect.company}`,
    "",
    `*Generated ${options.generatedOn} by \`40-gtm/outbound/tools/outbound-research\`. Every claim below`,
    "should be checked against the sources before it goes into an email.*",
    "",
    "## Prospect context",
    "",
    brief.prospect_context.trim(),
    "",
    "## Overview",
    "",
    "| | |",
    "|---|---|",
    `| **Company** | ${escapeTableCell(brief.overview.company)} |`,
    `| **Product** | ${escapeTableCell(brief.overview.product)} |`,
    `| **Market** | ${escapeTableCell(brief.overview.market)} |`,
    "",
    "## Outbound triggers",
    "",
  ];

  if (brief.outbound_triggers.length === 0) {
    lines.push("_No dated triggers returned. Do not send without a real hook._", "");
  } else {
    for (const trigger of brief.outbound_triggers) {
      lines.push(`- **${trigger.date.trim()}** — ${trigger.text.trim()}`);
    }
    lines.push("");
  }

  lines.push("## Call talking points", "");
  if (brief.call_talking_points.length === 0) {
    lines.push("_None returned._", "");
  } else {
    for (const point of brief.call_talking_points) {
      lines.push(`- ${point.trim()}`);
    }
    lines.push("");
  }

  lines.push("## Sources", "");
  if (grounding.length === 0) {
    lines.push(
      "_Exa returned no grounding for this brief. Treat every claim above as unverified._",
      "",
    );
  } else {
    grounding.forEach((source, index) => {
      lines.push(`${index + 1}. [${sourceLabel(source, index)}](${source.url})`);
    });
    lines.push("");
  }

  return lines.join("\n");
}

/** One-line-per-prospect run summary written to stdout. */
export function renderRunSummary(counts: {
  generated: number;
  skippedExisting: number;
  failed: number;
  skippedRows: number;
}): string {
  const parts = [`${counts.generated} generated`];
  if (counts.skippedExisting > 0) parts.push(`${counts.skippedExisting} already existed`);
  if (counts.failed > 0) parts.push(`${counts.failed} failed`);
  if (counts.skippedRows > 0) parts.push(`${counts.skippedRows} rows skipped`);
  return parts.join(", ");
}
