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

## Two other commands

### `--qualify` — free list filtering

Apollo's filters leak. A 1,000-person dental group tagged `medical practice` comes back inside a
health-and-wellness search, and Apollo marks it Qualified. Every junk row that reaches the brief
stage costs a real API call.

```bash
npm run brief -- --input prospects.csv --qualify --dry-run
```

Reads Apollo's own columns and drops rows on evidence already in the CSV: headcount outside
30-300, blocklisted industry, two or more anti-ICP keywords, role inboxes, unverified email.
Free, deterministic, and it reports what it dropped and why.

A missing column never causes a drop. Absence of data is not evidence of a bad fit.

The single-keyword tolerance is deliberate: brands list hundreds of keywords, so one stray
"dental" on a toothpaste brand should not disqualify it. Two or more is a pattern.

Defaults live in `SEGMENT_G_DEFAULTS` in `src/qualify.ts` and encode the anti-ICP list from
[segment-g-health-beauty-wellness.md](../../segment-g-health-beauty-wellness.md).

### `npm run lint` — email standards

"Write a less cringy email" is not enforceable. A rule that fails a draft containing
"I hope this finds you well" is.

```bash
npm run lint -- drafts/amber-cram.md --brief briefs/amber-cram-knew-health.md
```

Checks banned phrases across six categories (filler, flattery, presumption, hype, jargon,
model-slop), em dashes, length, link count, question count, us-versus-them ratio, subject
length, and fake `Re:` threading.

Pass `--brief` and it also enforces the playbook's core rule: **the draft must reuse a concrete
detail from the research**. A generic note that merely sounds personalised fails `no-hook`. This
is the check that matters most, because it is the one a human eye misses.

Exit code is 1 when anything blocking is found, so it can gate a send script.

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
| `--type <variant>` | `deep` | `deep-lite` / `deep` / `deep-reasoning`. See the note in `src/schema.ts`: `deep-lite` returns background rather than current news, so its triggers are often years stale. |
| `--qualify` | off | Drop rows failing the segment G fit rules first. Free. |
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

**Measured: ~$0.24 per brief** (2026-08-05, one sample brief that returned 12 sources).

Do not trust Exa's published Deep Search rate of $12/1k requests for this. That rate is a floor for a
plain deep search. A brief runs a structured research loop that crawls and reasons over a dozen-plus
sources, and it bills on compute, so the real cost lands roughly 20x the headline number. Cost also
scales with how much public material exists about a prospect: a well-covered company generates more
sources and costs more than an obscure one.

At $0.24, a 100-prospect batch is about **$24**, not the $1.20 the list price implies.

**The rule that follows: only brief prospects you are actually going to email.** Run these after list
QA, never across a raw Websets export. At the playbook's 20-emails-a-day cadence with 4-6 touches per
contact, that is roughly 100-150 new prospects a month, or $25-35. Fine. Briefing a whole unqualified
1,000-row export would be $240 for research on people you will never contact.

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
npm test        # vitest, 96 tests, no network
npm run typecheck
```

Tests cover CSV parsing, name/company derivation, schema validation, grounding normalisation,
retry classification, concurrency, markdown rendering, list qualification, and every lint rule.
The Exa client is stubbed, so the suite never makes a network call and never costs money.

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
