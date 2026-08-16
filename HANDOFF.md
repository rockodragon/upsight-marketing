# HANDOFF — The Decision Files

**Written:** 2026-08-16, from a cloud session that couldn't reach two of the repos.
**Pick this up locally**, where you have all repos and a browser session.

---

## Read these first, in order

1. `30-strategy/decision-files-gameplan.md` — **the front door.** Thesis, critical path, this week's moves, map of every other doc.
2. `40-gtm/channels/content-seo/decision-files-site-build-spec.md` — the build spec. Website (§1–4), visual system (§5), lens→widgets (§5a), lens prompts (§5b), CI checks (§8).
3. `40-gtm/campaigns/decision-files-use-cases.md` — the three locked files.
4. `40-gtm/campaigns/file1-ai-tooling-interview-guide.md` — ready to run.

Open these two in a browser — they're the reference implementations:
- `40-gtm/channels/content-seo/reference/visual-patterns.html` — eight diagram patterns
- `40-gtm/channels/content-seo/reference/example-decision-file.html` — a complete file page with widgets in place

> ⚠️ **The example file is fabricated.** Every detail — the company, the $180K, the 2014
> payments service, 78% adoption — is invented to show the layout. **It is not research and
> must never publish as a Decision File.** If it goes on the site at all it goes at
> `/preview/template`, noindex, with the fabrication stated in the first line.

---

## What's done

- Strategy, business model, contributor board, conflicts policy, use cases — all committed to `main`.
- Visual system: 8 patterns, plain-English labels, 4-state matrix, icon legend, contrast verified (all text ≥5.7:1, both themes).
- Build spec including gen-ui widget contracts and CI checks.
- File 1 interview guide with the recruiting filter.
- ~20 people in UpSight (project: UpSight Core, goal `565b9d6d`) tagged by role and ask.

## What's blocked, and why

| Blocked | Reason | Fix locally |
|---|---|---|
| Widgets in the app | `epic-hq/UpSight` — cross-owner repo, cloud sessions can't hold two owners | Just open the repo. Rick reports widgets are already built and generating. |
| The website | `rockodragon/decision-files` — GitHub credential had no access from cloud | Should work locally. If not, check the Claude GitHub App's repo grants. |
| LinkedIn scan | No browser session in the container | Search string is in the file-1 guide §"Who to talk to" |

## Do next — in this order

1. **Run one real interview.** Craig Merchant first as a pressure test — send `40-gtm/channels/outreach/decision-files-onepager.md` and ask where it's naive. Then a real subject from the file-1 list.
2. **Publish file 1 from that interview.** The site is worth nothing without it; three real files is the site's own definition of done.
3. **Build the site** against the spec — one URL per file, real domain, `Article` schema, the email gate that only fires on a gated click.
4. **Send the two emails that answer business questions**, neither of which needs the site: Greg Fitzgerald / Tyler Shields as *buyers* (is there a $25K check?) and Alan Shimel on syndication + the briefing pipeline (drafts in `30-strategy/decision-files-advisory-board.md`).

## Two things not to lose

**The language rule.** Write what the buyer would say out loud — "too expensive", not "eliminated on cost criteria". If a label needs a glossary it's the wrong label. This is the difference between a practitioner trusting the page and closing it.

**Evidence IDs on every cell.** Click a cell, see the quote. That's the differentiator no analyst firm has, and it's what turns the interview walkthrough into the demo.

## Still open

- Which lane long-term: security is active, operators deferred (not killed). File 1 is deliberately in the operator lane — hot topic, richer vendors, easier subjects, and a warm-up before the critical cybersecurity friends.
- Will a vendor pay $15–50K? Test with the Fitzgerald/Shields email.
- What's the forced-participation lever? Best candidate is the recurring category report.
- Is UpSight-for-research-firms a third vertical? Both IT-Harvest and Futurum pulled that way.
