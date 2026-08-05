# Outbound Research

Generate grounded outbound research briefs with Exa deep search. One prospect in, one markdown
brief out: prospect context, company/product/market overview, dated outbound triggers, and call
talking points, with sources from Exa's grounding.

Built from Exa's **Outbound Research** agent-tool template. The request behaviour is preserved
exactly: `type: "deep"`, the template's query construction, `systemPrompt`, and `outputSchema`.

**Why it lives here:** the playbook rule is *"every email must have one real, specific, sourced hook
or it does not go out"* ([targeting-and-response-playbook.md](../../targeting-and-response-playbook.md)).
This produces that hook, with the source attached. It consumes the CSV Nessa exports from Websets
([exa-websets-intern-guide.md](../../exa-websets-intern-guide.md)), so the chain is:

```
Websets list  →  CSV  →  outbound-research  →  brief with sources  →  email hook
```

---

## Setup

```bash
npm install
```

Then add your key. **This uses the Exa API (pay-as-you-go), which is billed separately from
Websets credits.** A Websets subscription does not cover it and vice versa.

```bash
cp .env.example .env
```

Put your key in `.env` as `EXA_API_KEY=...`. Get one at https://dashboard.exa.ai/api-keys.
`.env` is gitignored at the repo root — never commit it.

---

## Usage

Always dry-run first. It makes no API calls and spends nothing:

```bash
npm run brief -- --input prospects.csv --dry-run
```

Then generate one brief to check the output before spending on a batch:

```bash
npm run brief -- --input prospects.csv --limit 1
```

Then the full run:

```bash
npm run brief -- --input prospects.csv
```

### Options

| Option | Default | What it does |
|---|---|---|
| `--input <path>` | — | CSV of prospects, exported from Websets or Apollo |
| `--sample` | — | Use the template's four built-in prospects instead of a CSV |
| `--out <dir>` | `./briefs` | Where briefs are written |
| `--limit <n>` | all | Only process the first n prospects |
| `--concurrency <n>` | `3` | Parallel requests |
| `--force` | off | Regenerate briefs that already exist. **Costs money again.** |
| `--dry-run` | off | Print what would be requested. No API calls, no spend. |

### Input CSV

Needs a **name** column and a **company** column. Headers are matched loosely, so a Websets export
works as-is:

```csv
Full name,Job title,Work email,LinkedIn URL,Company website
Jane Rivera,VP Marketing,jane@oseamalibu.com,https://linkedin.com/in/jrivera,https://oseamalibu.com
```

Recognised aliases: `full name` / `name` / `contact`, or `first name` + `last name`; `job title` /
`title` / `role`; `company` / `organization` / `account`; `company website` / `domain` / `website`.

When there's no company column, the company is derived from the website — `oseamalibu.com` becomes
`Oseamalibu`, which is close enough for the query but not pretty. **Add a real `Company` column to
your Websets enrichments if you can**; it produces better briefs than a domain-derived guess.

Rows missing a name or company are skipped and reported with their line number. A missing role is
kept (it degrades the brief but is not worth dropping a row over).

---

## Cost control

Deep search is roughly **$0.012–0.015 per brief** at list prices, so a 100-prospect batch is about
$1.20–1.50. Verify against your first invoice rather than trusting that number.

Three things keep the bill down:

1. **`--dry-run` is free.** Use it to check the CSV parsed correctly before spending anything.
2. **Existing briefs are skipped by default.** Re-running the same CSV costs nothing for prospects
   already generated. `--force` overrides this and re-bills every row.
3. **Schema failures are not retried.** A malformed response is a bad request, not a blip, and
   retrying it would just pay twice for the same failure. Only 429s, 5xx, and timeouts retry
   (3 attempts, exponential backoff).

---

## Output

One markdown file per prospect in `--out`, named `<first>-<last>-<company>.md`, with vault-style
front matter so the briefs sit alongside the rest of `40-gtm/outbound/`.

If Exa returns no grounding, the brief says so explicitly rather than quietly rendering an empty
Sources section. Same for an empty trigger list, which prints *"Do not send without a real hook."*

---

## Development

```bash
npm test        # vitest, 50 tests, no network
npm run typecheck
```

Tests cover CSV parsing, name/company derivation, schema validation, grounding normalisation,
retry classification, concurrency, and markdown rendering. The Exa client is stubbed, so the suite
never makes a network call and never costs money.

### Notes for future edits

- **`src/schema.ts` is a prompt, not just a type.** The `description` fields in
  `OUTBOUND_BRIEF_OUTPUT_SCHEMA` steer the model's output. Editing them changes the briefs, so
  re-check a sample after any change.
- **Grounding is parsed permissively on purpose.** We control the brief schema; we don't control
  Exa's citation payload shape. An unrecognised shape degrades to "no sources" rather than
  discarding a brief already paid for.
- **`src/exa.ts` casts the SDK client.** Structured deep-search options and the `output` envelope
  are newer than the published `exa-js` types. If a future release types them natively, delete the
  local `DeepSearchClient` interface and call `exa.search` directly.
