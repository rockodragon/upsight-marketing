# Status log

> Append-only. Newest entries on top. Any agent that finishes meaningful work writes here.
> Format: dated header + 3 buckets (Shipped / Stuck / Decided / Surfaced)

---

## 2026-08-15 — Public survey engine, run #1: campaign brief + script

**Shipped**
- `40-gtm/campaigns/2026-08-model-switch-public-survey.md` — brief for running Rick's
  real model-switching decision as a public survey (Workstream 3, run #1). Two tiers
  (public ask + 6–10 named practitioner interviews), 10-day box, kill criteria, ICP
  guardrail. **Status: proposed, awaiting Rick's go.**
- `40-gtm/campaigns/2026-08-model-switch-survey-script.md` — the Tier-1 public ask
  and the Tier-2 15-min interview script, with insight targets and interviewer notes.

**Decided (design calls inside the brief, not vault-level decisions)**
- **Don't name Claude or OpenAI in the question.** Asking "what actually decided it"
  instead of "which one" trades a tribal poll for decision reasoning, shifts the
  respondent set toward people who make and defend build decisions, and produces a
  durable framework instead of a stat that decays in three weeks. The vendor names
  surface in the answers regardless.
- Rick's own leaning stays unstated until publication — otherwise the responses are
  agreement and argument, not data.

**Surfaced**
- The campaign consumes one week of the only public-survey slot on an off-ICP topic.
  Capped three ways: one week only, every respondent tagged by how they work (that
  tag is a free read on the 2026-06-01 agent-builder ICP question), and every
  consultant-adjacent respondent routed into outbound template #3.
- Real upside independent of reach: this is the shoot that unblocks video assets
  **F** (dogfood clip) and **G** (Survey VSL), both currently stuck on capture debt.
- New open question logged: does the public-survey motion actually produce booked
  calls, or only reach?

## 2026-07-19 — CI-v2 portrait hero (4:5)

**Shipped**
- `CiV2MoviePortrait` — 1080×1350, paper bg, 90px edge / 85%×82% safe area, centered smaller stack + slide + send-to below. `npm run render:movie-portrait` → `out/ci-v2-movie-portrait.mp4`.

## 2026-07-19 — CI-v2 movie: light paper + produced story end

**Shipped**
- `CiV2Movie` now uses homepage paper (`#eeeef2`) / ink; narrow ~760px center column.
- Kept poker card deal; end is a calm produced asset: **Event Impact** title page → one trimmed clip → bar chart → send chips (no multi-cut flicker). ~22s. `out/ci-v2-movie.mp4`.

## 2026-07-19 — CI-v2 movie rebuilt: cards → analysis → one story

**Shipped**
- Rewrote `CiV2Movie` as one fixed stage (dropped Series of cramped sections): playing-card deal (video → note → Zoom → support) → dissolves to analysis finding → replaced by **one** composite reel titled with the finding; send-to chips for Customers / Internal / Leadership.
- `npm run render:movie` → `out/ci-v2-movie.mp4` (~16s).

**Decided**
- Homepage embed uses the single movie, not three side-by-side story destinations.

## 2026-07-19 — CI-v2 movie: fixed-spot sequential acts

**Shipped**
- New `CiV2Movie`: Cards → Intelligence → Stories replace in one viewport (`Series`).
- `CiV2Stories` no longer shows three destination reels side-by-side; Product → Leadership → GTM swap in the same stage with audience dots.
- Render: `npm run render:movie` → `out/ci-v2-movie.mp4` (~20s). Brief updated in `STACK-BRIEF.md`.

## 2026-07-19 — CI-v2 stack: Cards → Intelligence → Stories

**Shipped**
- Copied Haley + Rylie testimonials into `upsight-ci-v2/04-assets/video/` (`testimonial-haley.mp4`, `testimonial-rylie.mp4`).
- Three stackable compositions for vertical web assembly:
  - `CiV2Cards` — faces + Zoom + note deal in
  - `CiV2Intelligence` — pattern lock
  - `CiV2Stories` — composite reel (Haley/Rylie/discovery) routes to Product / Leadership / GTM as video destinations (not text-only)
- Renders: `05-remotion/out/ci-v2-{cards,intelligence,stories}.mp4`. Brief: `01-script/STACK-BRIEF.md`. `npm run render:stack`.

**Surfaced**
- Stories frame is dense (master reel + three destination reels); may want taller panel or sequential reveal if homepage whitespace is still tight.

## 2026-07-19 — CI-v2 funnel checkpoint + fluid variant

**Shipped**
- Checkpointed media-first scroll at `upsight-ci-v2/_checkpoints/media-first-fast-scroll-2026-07-19/` (source + mp4 + RESTORE.md).
- New composition `CiV2Funnel`: transparent stage, poker-dealt evidence stack → pattern card → outputs; title “Stop starting from zero.”
- Brief: `upsight-ci-v2/01-script/FUNNEL-BRIEF.md`. Studio: select `CiV2Funnel`. Preview render: `npm run render:funnel-preview`; alpha: `npm run render:funnel`.

**Decided**
- Prefer stronger homepage line (“Stop starting from zero”) over soft “feedback that remembers who it’s talking to.”
- Homepage embed should avoid heavy dark wrapper / boxes-in-boxes; media first-class over page background.

**Surfaced**
- Funnel motion still needs eye-pass vs page whitespace; may need larger zoom / fewer chrome borders after first studio look.

## 2026-07-19 — CI-v2 killer-loop homepage hero scaffolded

**Shipped**
- New Remotion project `40-gtm/assets/video/upsight-ci-v2/` — 14s composition `CiV2`: left customer-voice feed → center takeaway → right outputs (product priority / stakeholder reel / story candidate).
- Copy + timing in `01-script/hero.script.json`. Preview stills in `05-remotion/out/preview-*.png`.

**Surfaced**
- Feed clips reuse conversational-intelligence evidence MP4s; swap fresher talking-head cuts when ready.

## 2026-07-19 - homepage V4 conversion-led redesign

**Shipped**
- Rebuilt the hero for one champion, three concrete reasons to believe, a self-serve CTA, an
  assisted founder CTA, and the multi-conversation Remotion proof in the same first experience.
- Replaced the compact tool strip with a direct old-way/new-way comparison: five fragmented tools
  versus one customer-intelligence layer that remembers the person over time.
- Added a three-step first-value path and a founder manifesto without adding unsupported logos,
  testimonials, integrations, migration claims, or metrics.
- Reconciled the short-form messaging, customer-intelligence messaging house, wireframe, README,
  decision log, and prototype around the V4 conversion sequence.
- Verified the page at desktop and mobile widths with no horizontal overflow and real local media
  playing in the browser.

**Decided**
- Borrow the reference template's persuasion order and Fletch's positioning discipline, not its
  visual identity or generic section inventory.
- Keep customer intelligence as the familiar category and person-level continuity as the reason to
  choose UpSight.
- Make the assisted CTA a working session with the prospect's conversations, never a generic demo.

**Surfaced**
- The page now has a credible conversion trail, but named customer outcomes, retention evidence,
  willingness to pay, and activation economics remain the most important proof gaps.

## 2026-07-19 - homepage V3 category-first and visceral redesign

**Shipped**
- Reframed the homepage around the established **customer intelligence platform** category and the
  direct point of view **“Know your customers. Not just their feedback.”**
- Rebuilt the prototype with a light, high-whitespace hero; a dark cinematic multi-conversation
  proof stage; one amber five-tool interruption; and three large product chapters: unify,
  understand, and act.
- Kept the person-level memory mechanism but moved it below the category and product story as
  **“Customer intelligence should not reset.”**
- Changed the primary CTA from **“Upload 3 conversations”** to **“Analyze 3 conversations.”** The
  activation threshold remains concrete while the copy leads with value rather than file transfer.
- Reconciled the short-form messaging, customer-intelligence messaging house, wireframe, competitive
  analysis, prototype README, and decision log to the V3 position.
- Restarted the local preview server and visually verified the refreshed page on desktop and mobile.
  All local assets load, the Remotion video plays in view, semantic checks pass, and horizontal
  overflow is suppressed at the mobile breakpoint.

**Decided**
- Category credibility comes before differentiation: say what market UpSight is in, then show why
  its person-level continuity matters.
- Borrow the market's clear jobs and vocabulary, not competitors' exact claims or visual identity.
- Keep the site visceral through real voices, large product artifacts, contrast, and whitespace,
  not gradients, decorative AI diagrams, or more feature cards.

**Surfaced**
- Dovetail also uses compounding-value language, so “compounding” is a useful product mechanism but
  not ownable homepage territory by itself.
- The next proof gap is commercial rather than visual: a named outcome, measurable time savings, or
  a quantified tool/workflow reduction would make the page more credible against mature competitors.

## 2026-07-19 - homepage V2 competitive reset and compounding-profile prototype

**Shipped**
- Audited Dovetail, Enterpret, Listen Labs, Typeform, Fathom, and Senja. Documented why multi-source
  analysis, themes, citations, multimedia survey responses, and testimonial capture are supporting
  proof rather than defensible homepage differentiation.
- Rebuilt `40-gtm/assets/homepage/customer-intelligence-2026-07/` around compounding customer
  knowledge. V2 uses the existing multi-person Remotion marquee, exposes the five-tool fragmented
  workflow, shows a living customer profile and context-aware follow-up, and moves from individual
  profiles to market patterns and internal/external outcomes.
- Changed the primary in-page CTA to **“Upload 3 conversations”** with **“See what they add up to.”**
  The CTA appears after proof; a compact nav action remains for high-intent visitors.
- Reconciled the wireframe, messaging house, short-form messaging, prototype README, and decision
  log around the V2 position.
- Rendered V2 at 1440px desktop and 390px mobile. Confirmed the Remotion video autoplays, all local
  assets load, and the page has no horizontal overflow.

**Decided**
- **Customer feedback analysis** is a category doorway, not the homepage differentiator.
- The differentiated combination is persistent person context that compounds, improves the next
  interaction, produces patterns across people, and serves both decisions and customer stories.
- “Collapses 5+ tools” means collapsing handoffs and the customer-learning workflow, not claiming
  complete feature parity with five mature software categories.
- One upload proves summarization; three inputs better demonstrate UpSight's differentiated value.

**Surfaced**
- The central claim now creates product-proof obligations: activation must visibly enrich a profile,
  use prior context in a follow-up, and generate an inspectable cross-conversation pattern.
- Unit economics still need validation with an ICP-specific model for media/transcription cost,
  assisted onboarding time, activation, retention, and realistic willingness to pay.

## 2026-07-19 - customer-feedback homepage prototype and GTM message reset

**Shipped**
- Added `30-strategy/homepage-wireframe-customer-feedback-2026-07.md`, a Fletch-style positioning
  map and production-copy wireframe centered on one champion: a founder or head of product already
  conducting customer interviews and surveys.
- Added a responsive coded homepage prototype at
  `40-gtm/assets/homepage/customer-intelligence-2026-07/`. It uses the primary CTA **"Upload a call
  or survey"**, the support promise **"See what you've been missing"**, real product evidence, and
  a real customer-video source moment. No invented logos, metrics, or testimonials.
- Reconciled the canonical messaging docs. `messaging-house-customer-intelligence.md` now owns the
  homepage; `messaging-house.md` now owns the later operating-cadence/EOS expansion; `messaging.md`
  contains the current short-form language.
- Rendered and visually checked the prototype at 1440px desktop and 390px mobile. Confirmed no
  horizontal overflow, all local images and video load, headings are ordered correctly, every link
  has a destination, and the browser reported no console warnings or errors.

**Decided**
- Homepage V1 leads with the existing category **customer feedback analysis**, not a new customer
  intelligence category or the weekly leadership meeting.
- EOS and weekly operating cadence are excluded from homepage V1 and reserved for expansion.
- Primary conversion is self-serve upload; secondary conversion is a founder-assisted working
  session using one real customer conversation.

**Surfaced**
- The deployed site source is not present in this workspace. The prototype is ready to port, but
  production implementation must happen in the app/deployment repository.
- Launch proof debt remains: one named customer quote, one before/after source-to-finding artifact,
  one measured activation result, and a verified privacy statement for uploaded customer data.

## 2026-07-19 — homepage messaging reconciliation for customer-intelligence-first repositioning

**Shipped**
- Added [30-strategy/homepage-messaging-reconciliation-2026-07-19.md](/Users/rickmoy/code/upsight-marketing/30-strategy/homepage-messaging-reconciliation-2026-07-19.md), a working recommendation that reconciles the current **weekly leadership meeting** messaging house with the newer **customer intelligence / receipts** story and recommends the next homepage lead with **"Know your customers better. Share their stories with confidence."**
- Pressure-tested the live `getupsight.com` homepage metadata as of **2026-07-19** against the vault docs. Result: the live site is already closer to the customer-intelligence wedge ("Customer Intelligence with Receipts") than the canonical weekly-meeting messaging house, so the recommendation is to promote that wedge instead of inventing a third story.
- Captured explicit homepage message hierarchy, keep/cut/park guidance, section-by-section homepage structure, ICP recommendation, and unit-economics warnings (especially: donor/nonprofit should stay proof/use-case, not primary ICP; low-price + generous media/transcription usage looks dangerous).

**Surfaced**
- The strategy layer still has a live ownership conflict: `30-strategy/messaging-house.md` owns the public lead as **weekly leadership meeting**, while `30-strategy/messaging-house-customer-intelligence.md` argues the simpler **capture -> understanding** wedge. The new memo recommends resolving this by making customer intelligence the homepage lead and moving EOS/weekly-cadence lower on the page or to a dedicated route.

## 2026-07-17 — Automated caption pipeline for Remotion video projects

**Shipped**
- *Word-timed caption pipeline* in `40-gtm/assets/video/upsight-ssd-demo/05-remotion/src/captions/` — transcribe (OpenAI, word-level timestamps) → correct known product-name mistranscriptions (`data/vocabulary.json`, timing-preserving) → paginate into TikTok-style pages (`@remotion/captions`) → render with a deterministic, FPS-agnostic `CaptionRenderer` in one of three branded presets (**clean** / **emphasis** / **productDemo**). Handles clipped and edited (cuts-removed) timelines.
- *CLI*: `npm run caption-video -- --input <video> --output <captions.json> --preset clean`. Exports caption JSON + SRT.
- *Mirrored into `_template-video/05-remotion`* so every future video scaffolded via `new-video.sh` inherits it automatically (this repo's existing sharing mechanism for Remotion code, since each video project is its own npm package).
- 39 unit tests (timing/corrections/pagination/schemas + fixture transcript); real-render smoke-tested in headless Chrome (all 3 presets, both vocabulary corrections, word-by-word highlight timing) — caught and fixed a real overlap bug in the emphasis preset's active-word scale animation.
- Built the OpenAI call directly against `fetch`/`FormData` rather than the `openai` SDK — its `zod` peer dependency conflicts with the `zod@4.3.6` Remotion itself requires.
- Branch `claude/remotion-caption-pipeline-bo5j5x`, pushed. No PR opened (not requested).

**Stuck**
- Full end-to-end verification (real video → real OpenAI transcription → rendered output) wasn't possible in this session: no `OPENAI_API_KEY`, no `ffmpeg`/`ffprobe`, and no real source video/audio exist in this environment/repo. The render pipeline itself *was* verified against a fixture transcript with real headless Chrome rendering (see above) — only the live transcription call and ffmpeg/ffprobe media-inspection path are unverified against real inputs.

**Surfaced**
- `_template-video/05-remotion/src/compositions/ScenePlaceholder.tsx` had a pre-existing (unrelated) broken import path — fixed in passing since it blocked a clean `npm run typecheck`.


---

## 2026-07-17 — Git LFS enabled for media assets

**Shipped**
- Installed Git LFS, initialized it for this repository, and added repository-wide tracking rules for video, audio, raster images, PDFs, and editable media project formats.
- Renormalized existing tracked media into staged LFS pointers; unrelated working-tree edits remain unstaged.

**Surfaced**
- The previously pushed media blobs remain in Git history. Removing them would require a history rewrite and force-push, so no migration was attempted.

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
