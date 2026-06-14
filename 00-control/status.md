# Status log

> Append-only. Newest entries on top. Any agent that finishes meaningful work writes here.
> Format: dated header + 3 buckets (Shipped / Stuck / Decided / Surfaced)

---

## 2026-06-06 — GTM sales pipeline stood up in UpSight + CRM scoping architecture

**Shipped**
- *GTM sales pipeline live in the UpSight CRM* — project `6dbcbb68` ("UpSight Interviews"), which is the de-facto sales workspace, **not** the project literally named "GTM" (that one is research). 6 deals: **Table Arts Society** ($39/mo, Validate, close 6/14), **Cytodyme** (DJ), **Events.com** (Cheryl Goodman), **Christina Font** (evaluation), plus pre-existing acme / Startup San Diego.
- *Contacts/orgs cleaned up* — added Christina Font + Cheryl Goodman; corrected Cheryl's company (Defense.com → **Events.com**); merged Haley Dall onto **The Table Arts Society**.
- *First EOS Rock* — **"Land paying GTM customers (Q2)"** (due 6/30) with the 3 active-deal tasks laddered under it → surfaces as a Goal in the Portfolio view.

**Stuck**
- *Org delete unusable over MCP* — `deletion-guard` needs the `x-last-user-message` header this Claude Code transport doesn't send, so it fails closed even when the exact phrase is typed. Two empty orgs (Defense.com, Arts Society) must be deleted in the web UI. (Root cause verified in code; not "undeployed.")
- *Project renames* (`6dbcbb68`→"GTM Sales", `3b800115`→"GTM Research") are in-app only — no rename tool over MCP.
- *Junk-task triage* parked — no structured task list over MCP (see d30).

**Decided** (architecture — tracked in Beads `UpSight-vuw`)
- *CRM (deals/orgs) → account-level by default, project-optional.* Account = client (isolation, already RLS-enforced); project = line of inquiry; relationships live at the account; **participants get promoted into the CRM deliberately**; grouping/filtering moves to a view layer (dynamic groups as chips), decoupled from storage. Schema already leans this way (people are account-scoped; org `project_id` nullable; only `opportunities.project_id` is hard-pinned).

**Surfaced / flagged** (filed as Beads in the UpSight repo)
- `UpSight-d30` — structured `fetch_tasks` (filtered task reads); implementation chip spawned.
- `UpSight-x76` — explicit `projectId` on deal/people MCP tools + account/project context switching.
- `UpSight-vuw` (+ `.1/.2/.3`) — account-level CRM decision + build tickets (nullable opp.project_id + account pipeline view; org-create defaults account-level; participant→relationship promotion).
- `UpSight-2ve` — dynamic groups (saved filters) as chips for views & analysis.
- `UpSight-31y` — document the task/Rock/project model in public docs.
- `UpSight-qf0` — org-delete header-guard bug (root cause corrected after initial mis-diagnosis).
- Dogfooding: org-delete friction logged in `10-ops/dogfooding-log.md`.
- Memory: recorded that the sales pipeline lives in `6dbcbb68`, not the "GTM"-named project.

## 2026-06-01 — vault reorg + ICP/market consolidation

**Shipped**
- *Vault restructured to a flow-based numbering scheme* (`00-control → 10-ops → 20-research → 30-strategy → 40-gtm → 99-archive`). Folded the old parallel folders (`market-research/`, `gtm-ops/`, `marketing-assets/`, `UpSight Marketing/`, `UpSight Product/`, `skills-survey/`, old `50-market`/`70-PLG`) into the numbered spine. Competitor research consolidated from 3 folders → 1 (`20-research/market-intel/Competitors/`). `40-gtm/` now has `campaigns/ channels/ assets/ experiments/ plg/`. `CLAUDE.md`/`README.md` rewritten; added `open-questions.md`, `experiments/_index.md`, `40-gtm/_index.md`. **NOTE:** old entries in this log + other docs link to pre-reorg paths (`../50-market/...`) — those links are now stale (historical record left intact).
- *Canonical ICP brief* at [30-strategy/icp/README.md](../30-strategy/icp/README.md) — consolidates all candidate ICPs with market sizing (#people, $ value, TAM/SAM/SOM), competitive chances, and wedge per segment.
- *Apollo competitive teardown* incorporated (from `competitive-apollo.zip`) into `market-intel/Competitors/`. Analyzed **Apollo users vs spreadsheet users → two distinct ICPs** (post-tool vs pre-tool; different urgency/WTP/switching friction).
- *Canonical user journeys* at [30-strategy/user-journeys.md](../30-strategy/user-journeys.md); *battle cards* at `40-gtm/assets/collateral/battle-cards.md`; *outreach* at `40-gtm/channels/outreach/sequences-by-icp.md`; *messaging matrix* at `30-strategy/icp/messaging-by-icp.md`.

**Decided** (see decisions.md)
- Beachhead = founder-led B2B sellers (on spreadsheets); Apollo refugees = acquisition wedge not standalone TAM; agencies = expansion; agent-distribution = parallel motion.

**Surfaced / flagged**
- `_UNSORTED-flagged/` holds misplaced investing/stock data (was `market-research/Raw-Data/`) and personal family photos (were in `UpSight Product/`) — pending your call.
- Pending: reconcile 3 drifted files + delete duplicate GTM dirs from the code repo (`Insights/docs/50-market`, `70-PLG`, `competitive/`).

## 2026-05-25 (Mon) — market scan

**Shipped**
- *Agent-builder ICP deep dive:* New doc at [50-market/agent-builder-icp-deep-dive.md](../50-market/agent-builder-icp-deep-dive.md). Decomposes the $120M→$1.2B "agent builder" TAM into 4 segments (vertical AI agent startups, in-house enterprise teams, AI consultancies, framework ecosystems). Argues segment A (vertical AI agent startups: 11x, Artisan, Conversica, Salesforge, Warmly, Qualified, ~150 funded names) is the 90-day primary — fastest decision, loudest pain, demo lands as-is. Includes named-target buyer/champion/signer map, pricing reality check ($999/mo + $0.005/query overage with co-marketing required), 90-day action sequence, and disqualifiers. Honest stress-test: 97% of headline TAM is actually segment B (enterprise) and requires SOC 2 + references we don't yet have. Realistic 12-month SAM in segment A: $5M–$30M.
- *Donor/fundraising CRM market assessment:* New doc at [50-market/donor-fundraising-crm-market.md](../50-market/donor-fundraising-crm-market.md). Covers market size ($3B+ broad → $9.7B by 2035, 7–12% CAGR), top competitors (Blackbaud, Salesforce Agentforce Nonprofit, Bonterra, DonorPerfect ~11K orgs, Bloomerang, Neon, Virtuous), 14 documented pain points (DP "clunky," migration brutality, AI bolt-on, donor-context-walks-with-staff), and UpSight fit assessment.

**Decided**
- Recommend *not* pivoting to donor CRM vertical. Direct CRM play requires gift processing / DAFs / receipting / NCOA — wrong fight, 5+ years of vertical SaaS work. Coherent only as MCP-based intelligence layer that plugs into existing donor CRMs (Play A in the doc); even then it's a side bet with a ~$45M ARR ceiling vs. agent-builder ICP.

**Surfaced**
- Patricia Sinay + SSD already in pipeline could be design partners for an MCP integration experiment if we want to test Play A cheaply.
- Bonterra rollup (OneCause Oct 2025, 5 brands in 4 years) + Blackbaud/EVERFI signal active PE consolidation — late market for new direct entrants, but supports "tired incumbents = differentiation opening" narrative.

---

## 2026-05-09 (Sat) — weekly review

**Shipped (since 2026-04-25)**
- *Chief-of-staff brain (5/9):* `Insights-a176.2` brain-icon chat button + BAML `RecommendNextMove` reasoning over real project state (research goals, decision questions, open tasks w/ overdue+due-today, 7-day activity counts, stalled opps >10d). Output: situation paragraph + next-best-action with why + 1-3 alternates. 60s cache + stale-while-revalidate. Reassess button forces re-classify. 15 routing tests lock in the survey-trigger fix.
- *v4 layout (5/9):* top nav removed; AIAssistantPanel rail (brand + project switcher + L1/L2 hover-expand + chat + profile); CanvasOverlay as single canonical renderer (killed duplicate CanvasPanel); page-vs-canvas pattern documented (`docs/30-howtos/gen-ui-canvas-pattern.md`); `/pipeline` is canonical example.
- *Gen-UI fast paths (5/9):* 7 fast paths via `runFastPathResponse` helper — person profile, person evidence, task list, task status change, survey results, theme list, opportunity pipeline; interview-prompts fast path resolved the 18k-token researchAgent burn.
- *CRM foundation (5/7):* ADR step 1 unified write path through `features/*/db.ts` (`jiyq`); ADR step 2 REST API for orgs + opps + tasks + interviews (`v4jh`, `78ef`, `w6ln`); org dedup probe `DEDUP_REQUIRED=1` (`bun3`); cross-project scoping; canonical MCP tool registry; multi-account membership resolution.
- *CRM gen-ui (5/7):* 11 missing components registered (`0gri`); evidence panels on org + opp detail (`tbrk`, `73ga`); unified activity timeline (`54wc`); agent routing fixes (`vsri`, `jl3y`, `e0bl`, `927j`); unified `ilike` entity search.
- *Data import (5/9):* AI-powered spreadsheet wizard, RFC 4180 parser, real-world column mapping, import history + provenance, account-settings Data & Imports, session rollback, industry as 1st-class.
- *UX polish (5/9):* path-aware suggestion chips (replacing missing systemContext regex); L2 nav 2-line wrap; theme-blue hover; PageContainer top-gap unification (CRM L2 = /pipeline); evidence-facets URL chunking (postgrest `.in()` length fix); /today 404 → /priorities redirect; setup tags-input keydown bubble fix; mode coupling decoupled from rail.isExpanded.
- *Pipeline dashboard (5/8):* real opportunity data wired; journey distribution panel; task category wiring. Now canonical daily pipeline view.
- *Desktop hardening (5/5–5/6):* orphan-interview recovery on reconnect, transient-network logout fix, R2 replay on startup, WSL crash, speaker attribution, panel state cleanup, beta channel.
- *Tooling (5/9):* loader timing helper (`app/lib/loader-timing.server.ts`) wired into /pipeline as the example.
- *Strategy (5/7):* `traction.md` shipped as canonical scoreboard; Q2 goals defined (3 paying, $300 MRR, desktop reliability shipped).

**Stuck**
- `Insights-kla8` survey email-drop bug — STILL OPEN. Production data loss continuing.
- 4 active deals 10–14 days stale (Cytodyme, SSD, Patricia, Paul).
- Cytodyme close target was today (5/9) — no signal logged.

**Decided**
- Closed `Insights-a176.2` (brain icon shipped). Spawned `Insights-a176.3` (SessionIntent storage). Decision punted: Mastra Memory vs. parallel `session_intents` table — lean Mastra Memory (working memory + thread metadata; thread storage + observationalMemory already wired in `app/mastra/memory.ts`). Decide before writing migrations.
- Created `Insights-skhq` — Direction-C v4 web epic. Tracks the codex-spec implementation that's currently active. Sibling to `Insights-9p5j` (gen-ui fixes) — every v4 page must follow gen-ui principles.
- Pipeline dashboard becomes canonical daily pipeline view; `pipeline.md` shifts to weekly snapshot.
- Sales-first reasserted: Cytodyme decision forced by Tue 5/12 (qualify out if silent).
- This week's killed items: `a176.3` storage layer, `a176.1` suggestions loop, `eifx` token cost, `e1y6` person profile, `jp4q` Focus26 wave 2, LinkedIn 3+4 — all defer.

**Surfaced from UpSight / research**
- Status.md was 3 weeks behind shipped reality — Friday EOD writes from now on.
- Themes file 12 days stale — refresh from MCP before Cytodyme follow-up.
- Evidence-log DJ entry placeholder — fill from real call notes.
- v4 page migration is "compose 3 widgets" not "build a new layout" once DataTable + page-chrome widgets are registered. First domino: /people.

---

## 2026-05-06 (Wed)

**Shipped**
- Ran daily PostHog briefings (5/5, 5/6): 0 new signups; active users 9→7; events 469→361; surveys started 2→0 responses.
- Diagnosed Recall Desktop transcript failures: consistent `mic-drop` pattern, no transcript packets; likely Recall-side degradation + separate Supabase token latency.

**Stuck**
- Desktop recording reliability: still seeing `mic-drop` / no audio capture; need confirmation via Recall status/support and a clean relaunch, then implement hardening/fallbacks.
- P0 survey bug: deferred identity drops respondent email when `respondent_fields=[]` (production data loss).
- Lenses/CRM: org/opportunity scoping and person↔org linking still flaky; need standardized find/create person/org/opp flow.

**Decided**
- Move PostHog API key out of `scripts/posthog-daily.sh` into env/secret store.
- Keep weekly focus on (1) desktop recording reliability, (2) lenses + org-level aggregates for demoability, (3) fixing silent data-loss bugs before new GTM pushes.

**Surfaced from UpSight / research**
- Product usage is steady but small; the app is primarily used for org/opportunity navigation (`interview_detail_viewed` heavy), not surveys. Prioritize making interview capture + synthesis rock-solid before scaling acquisition.

## 2026-04-27 (Mon) — week start

**Shipped**
- Fixed `/priorities` task list revalidation bug: `EditableStatusCell`, `EditablePriorityCell`, `EditableImpactCell` all used `revalidator` (full object) in `useEffect` deps — changed on every revalidation state transition, causing a loop that cancelled the in-flight loader before it could return. Fixed by destructuring `revalidate` (stable function ref) instead.
- Created SSD (Startup San Diego) opportunity in UpSight (`a7665c2f`). Created Bead `Insights-fr1u`.
- Updated weekly priorities: Cytodyme close + SSD demo video as co-equal top priorities.

**Stuck**
- Cytodyme demo (Wed Apr 29) still blocked on `Insights-le1v` (Trigger.dev RECALL_API_KEY missing) and `Insights-6x12` (Windows Recall SDK empty transcripts). Need to ship both before Wed.

**Decided**
- SSD outreach added to P0 this week. They have an active workspace — warm play, low effort, high signal.
- Focus26 wave 2 deprioritized in favor of SSD.
- OpenClaw Tailscale auth parked (time-box expired).

**Surfaced from UpSight / research**
- SSD workspace active at project `ef1a40d1` / account `9c46adb0`. Good demo story angle: cohort intelligence for nonprofit accelerators.

---

## 2026-04-25 (Sat)

**Shipped**
- Set up unified vault structure + priority layer (this system)

**Stuck**
- _(none)_

**Decided**
- Cowork dropped from stack. Two-tool model: Claude Code (doer) + Claude chat (thinker). See `decisions.md`.
- Obsidian vault is source of truth; repo mirrors via `CLAUDE.md`. See `decisions.md`.

**Surfaced from UpSight / research**
- _(populate from UpSight MCP weekly)_

---

<!-- Template for new entries — copy below this line -->

<!--
## YYYY-MM-DD (Day)

**Shipped**
-

**Stuck**
-

**Decided**
-

**Surfaced from UpSight / research**
-
-->
