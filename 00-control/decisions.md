# Decisions log

> One-line decisions with date and reason. Don't re-litigate what's here.
> If reversing a decision, add a new entry — don't edit the old one.

---

## 2026-07-19 - Homepage V4 uses a disciplined proof-and-conversion sequence
**Why:** V3 established the right category and differentiator but still read more like a product
essay than a lead-generation page. V4 applies Fletch PMM discipline and the persuasion order of the
Standard Issue template: one champion, recognizable category, outcome, three reasons to believe,
dual CTA, old-way/new-way contrast, product proof, a concrete three-step path, founder conviction,
and a final ask. UpSight keeps its own visual identity and person-level continuity story. We are
explicitly excluding unsupported logo walls, integrations, migration promises, testimonials, and
metrics rather than copying template filler. The primary CTA remains **"Analyze 3 conversations"**
and the assisted path is **"Analyze them with Rick."**

## 2026-07-19 - Homepage V3 enters the customer-intelligence category plainly
**Why:** V2 found the right product mechanism but made visitors decode “compounding customer
knowledge” before naming the category. Current Dovetail, Enterpret, and Listen Labs messaging shows
the stronger pattern: recognizable category, short point of view, familiar product jobs, and one
dominant proof experience. The homepage now says **customer intelligence platform**, leads with
**“Know your customers. Not just their feedback.”**, and organizes the product around **unify,
understand, act**. Person-level continuity remains the differentiator, expressed lower as
**“Customer intelligence should not reset.”** The CTA is **“Analyze 3 conversations”** because the
value is the analysis, not the upload mechanic. The multi-person Remotion marquee remains the first
major proof, and the five-tool problem is one compact visual interruption instead of a long
comparison section.

## 2026-07-19 - Homepage V2 differentiation = compounding customer context
**Why:** External review showed that calls-and-surveys analysis, automated themes, citations,
multimodal responses, and testimonial collection are already claimed by Dovetail, Enterpret,
Listen Labs, Typeform, Fathom, and Senja. Customer feedback analysis remains the familiar doorway,
but it is not the reason to switch. The homepage now leads with **“Every customer conversation
should build on the last.”** UpSight's differentiated combination is a living customer profile,
context that improves the next question, patterns across people, and one evidence base for internal
decisions and external stories. The page explicitly contrasts the fragmented notetaker + survey +
research repo + CRM/sheet + testimonial workflow, then asks visitors to **upload 3 conversations**
to **see what they add up to**. The multi-conversation Remotion marquee replaces the single-person
video. EOS remains expansion.

## 2026-07-19 - Homepage lead = customer feedback analysis; upload is the acquisition wedge
**Why:** This reverses the 2026-07-01 homepage choice while preserving weekly operating cadence as
an expansion story. Cold visitors already understand the activity of reviewing customer calls and
surveys; they do not yet shop for an operating-intelligence system. Homepage V1 now speaks to a
founder or product lead with unsynthesized feedback, promises recurring needs, missed signals, and
customer stories with source evidence attached, and asks them to **upload a call or survey** to see
what they have been missing. Customer intelligence remains the broader capability, while EOS and
weekly meeting preparation move out of homepage V1. Product, marketing, leadership, and
program/fundraising outputs can appear lower on the page, but donor/nonprofit is not the primary
commercial ICP. Production copy and prototype:
`30-strategy/homepage-wireframe-customer-feedback-2026-07.md`.

## 2026-07-17 — Build the caption system in-house instead of buying Remotion's $100 Animated Captions component
**Why:** The paid component is copy-paste source for React rendering/animation over `@remotion/captions`' `Caption[]` format — three styles, no transcription pipeline. We needed transcription (OpenAI) → correction → timing/trim handling too, so the rendering layer alone wasn't the hard part. Built the full pipeline (`upsight-ssd-demo/05-remotion/src/captions/`, mirrored into `_template-video/05-remotion` for reuse across future videos) instead. Open follow-up: compare rendered output against the paid component's text-fitting/animation polish once a real video is captioned, and buy only if it'd save more than a few hours — see `00-control/open-questions.md`.

## 2026-07-01 — Public wedge = weekly leadership meeting; `messaging-house.md` is the bridge doc
**Why:** The vault had several strong but competing stories: customer evidence layer, revenue-decision workspace, agent-native memory, and weekly operating meeting prep. They can all be true at the product level, but public GTM needs one concrete promise that creates an immediate mental model. Decision: lead broad-market messaging with **"UpSight prepares your weekly leadership meeting from the conversations your team is already having."** Treat the weekly meeting as the **proof** of a broader operating-intelligence product, not the entire product category. EOS stays below the fold or on channel-specific pages; product/research, consultant, and agent-native stories remain valid as landing-page variants. `30-strategy/messaging-house.md` is now the canonical bridge between north-star and GTM execution, and `30-strategy/messaging.md` should stay short and derivative from it.

## 2026-06-06 — Sales lives in project `6dbcbb68` ("GTM Sales"), NOT the project named "GTM"
**The model:** Account = client (the isolation boundary). Project = a line of inquiry. CRM (deals + people + orgs) currently lives in **one** project because the deal/people MCP tools hardwire to a single context project.
**The fact to keep straight:** That project is **`6dbcbb68`** — currently mislabeled "UpSight Interviews", rename it to **"GTM Sales"**. The project literally named **"GTM"** (`3b800115`) is **research** — interviews/insights, *no deals*; rename it "GTM Research". **URL tell:** the segment right after `/a/<account>/` is the *project*; if it's not `6dbcbb68`, you're not in sales (that's why org links 404'd from `3b800115`).
**Status:** interim. The real fix is account-level CRM so pipeline isn't trapped in one project — tracked in Beads `UpSight-vuw` (+ `x76`, `qf0`). Until then: do all sales work in `6dbcbb68`.

## 2026-06-02 — Draft the "AI CRM" category at top-of-funnel; fight on the decision workflow
**Why:** Day.ai pressure-test. The category is wide open (Day.ai ~10 people, launched Feb 2026) — don't cede the *language*. Use AI-CRM framing for drafting/SEO/comparison ("Day.ai alternative," "the AI CRM that shows who's warm / slipping / blocked"), but keep the *product fight* on the revenue-decision workflow + multi-source + receipts (we won't out-automate them on CRM hygiene). This **refines, not reverses**, the "not a broad AI CRM" decision below. Reasoning: `30-strategy/revenue-gtm-decision-memo-2026-06-02.md` (Addendum §1). *Convention: long-form decision records (ADR-style) live as dated memos in `30-strategy/`; this log is their one-line index.*

## 2026-06-02 — Price on workspace value plus metered costly usage, not strict seats
**Why:** For the SMB beachhead, teammate inclusion improves stickiness while transcription and heavy analysis drive the real variable cost. Decision: keep public pricing, include multiple members on paid workspace plans, and meter expensive usage with transparent included allowances plus overages or spend caps. Lead the product on revenue decisions ("who is warm, who is slipping, what is blocking the next step"), not broad AI CRM or generic research language. Full rationale: `30-strategy/revenue-gtm-decision-memo-2026-06-02.md`.

## 2026-06-02 — Deliver revenue signals on Today first; use Pipeline/People as drill-down
**Why:** Founders need a plain answer to "what needs my attention now?" The Today page is the right action surface for ranked `Warm`, `Slipping`, and `Blocked` cards. Pipeline and People should expose the same model as filters, badges, and saved views; the task dependency graph explains blockers but is too abstract to be the first blocker surface. Consultant expansion should be workspace-based (extra client workspaces), not seat-based. Full rationale: `30-strategy/revenue-gtm-decision-memo-2026-06-02.md`.

## 2026-06-01 — Vault numbering is flow-based (00→99), not arbitrary
**Why:** The old numbers were starter-kit defaults. Reordered so folders read as a narrative — **how we run (00 control, 10 ops) → what we learn (20 research) → what we decide (30 strategy) → what we ship (40 gtm) → archive (99)**. Inputs precede outputs; ops sits by control; research (customer voice + market intel) is one place; PLG nests under gtm; email has one home (`channels/lifecycle/`); no funnel-stage folders. Renumbering again requires a new decision entry.

## 2026-06-01 — ICP bet: founder-led B2B sellers beachhead; Apollo = wedge, not a market
**Why:** Per the 2026-06-01 "between sheets and silos" thesis + market sizing + competitive analysis. Founder-led B2B sellers (on spreadsheets) = beachhead (lowest CAC, the wedge is the buying reason, Cytodyme proof). Pre-CRM/spreadsheet SMBs = largest adjacent $ market. **Apollo refugees = acquisition wedge into the above, not a standalone TAM** (they churn over data/cost/support, not CI depth — so don't lead with CI depth there). Boutique agencies = expansion. Agent-distribution = parallel higher-ceiling motion. NOT doing: enterprise, donor CRM, events-led. Full rationale: `30-strategy/icp/README.md`.

## 2026-05-27 — Themes vs Lenses: sharpen the divide (Option 1)
**Why:** Themes and Lenses had been competing as parallel synthesis surfaces with no clear difference, leaving users to invent the distinction. Decided to keep both top-level but make the divide explicit and bridged: **Themes = emergent patterns the AI surfaces from your data (exploratory, bottom-up)**; **Lenses = structured frameworks you bring to score against (operational, top-down)**. Rejected merging (would lose the standalone discovery read) and demoting Themes (too opinionated this early; the founder/researcher journey still needs an exploratory entry). Sidebar copy updated to telegraph the difference. Theme detail pages now expose two bridges: "Verify signals →" (drill into the underlying receipts) and "Promote to Lens →" (turn a discovered pattern into a scoring rubric). Lens auto-prefill from theme context filed as follow-up. Tracked in `Insights-poul`.

## 2026-05-07 — Traction report lives in `00-control/traction.md` (markdown-first, UpSight-bound)
**Why:** Need a single living document that functions as both a sales pipeline report and an investor traction slide. Markdown version is the working draft; will migrate to UpSight app natively once the CRM view supports it. `traction.md` is the canonical source; `pipeline.md` remains for deal-level detail and agent write-backs from MCP.

## 2026-05-07 — Q2 2026 goals set (were blank)
**Why:** `north-star.md` had `_(define)_` placeholders. Set 3 concrete targets: (1) 3 paying customers, (2) $300 MRR, (3) desktop recording reliability shipped. These are the minimum viable signal for angel-round conversations.

## 2026-04-26 — Dynamic Groups vs segment labels: two distinct concepts, no parallel entity
**Why:** "Segment" was leaking across two layers and we were about to ship a third (`fshj` Phase 1's proposed `segments` table would have made it three). Pinning the model:

- **Dynamic Groups** are saved rules (`audiences.rule` = `ConditionGroup`) — what users create, view, edit, and reference. Renamed from "Audiences" in `Insights-hsfy`. The DB table stays `audiences` for back-compat; the user-facing surface is always "Dynamic Group."
- **Segment labels** are person-level facets (`person_facet(kind_slug='segment_label')`) — input data that rules can match against via `source: "segment"`. They are a kind of facet, not a kind of saved entity.

These live at different layers and that's deliberate. Engine-plumbing names ("segment source", `PersonBranchingContext.segments[]`) stay because they're precise technical terms; user-facing copy always says "Dynamic Group." AI-suggested cohorts (the `SuggestSegments` BAML in `fshj`) write to `audiences`, not a parallel table.

**Rejected:** a separate `segments` table with `definition jsonb`, on the grounds that it would duplicate ~80% of `audiences` and force every routing surface (surveys, branching, evaluation) to dispatch on which entity it was looking at. Two saved-rule entities means every feature has to integrate twice.

**Implications:** `fshj` rewritten to drop the `segments` table. Phase 1 is now "AI suggests Dynamic Groups." UI copy audit filed as a separate bead. `PersonBranchingContext.segments[]` stays as a deliberate fast-path for the most common rule type (mirror of `facets["segment_label"]`); documented, not deprecated.

## 2026-04-26 — Staging-first PR workflow: all feature PRs target `staging`, never `main`
**Why:** PR #236 was merged directly to `main`, bypassing `staging`. The branches diverged: `main` had #236, `staging` had #237 (2sqv) — promoting `staging → main` after the fact would have shown a phantom diff. Recovered by merging `main` back into `staging` (commit `0ec900272`), but the underlying rule needs to be explicit.

**The rule:**

1. **Every feature PR targets `staging`.** Never open a PR with `main` as the base unless it's the staging-promotion PR itself.
2. **Only `staging → main` PRs allowed against `main`.** That's the single promotion path; reviewing one PR is reviewing all the work on staging since the last promotion.
3. **CI runs the same suite on both.** Staging deploys to staging environment; main deploys to prod. Anything that's good on staging is the candidate for the next promotion.

**Rejected:** "small fixes can go straight to main" — that's how this happened. The cost of the divergence outweighs the friction of a one-extra-click PR-to-staging.

**Enforcement (pending):** branch protection on `main` requiring base = `staging` would catch this at the platform layer. Filed as a bead — until then, the rule lives in `AGENTS.md` and CLAUDE.md.

## 2026-04-25 — Tasks live in Beads, sales lives in UpSight, vault holds narrative
**Why:** Markdown was carrying too much load — tasks (better in Beads, queryable + agent-friendly), sales pipeline (better in UpSight, since UpSight IS a CRM and we should dogfood). Vault keeps strategy, decisions, narrative content, and research notes. Single mental model: structured data → its proper system; narrative → markdown.

## 2026-04-25 — Vault structure: Obsidian = source of truth, repo mirrors
**Why:** Two physical locations (repo `docs/`, Obsidian vault) with cross-domain agents. Obsidian wins because it spans both build + GTM and is where planning happens. Repo `docs/` stays the home for build artifacts but every important doc gets a pointer in `10-build/`.

## 2026-04-25 — Drop Cowork. Stack = Claude Code + Claude chat
**Why:** Cowork is Claude Code wrapped for non-coders. Rick is a developer comfortable in Claude Code. Cowork adds a third surface without unique capability. Two-tool model: Claude Code = execution (build + GTM file ops), Claude chat = strategy/thinking.

## 2026-04-25 — Sales has its own daily ritual + dedicated weekly section
**Why:** Active named deals (Cytodyme, Apollo-fatigue prospects) move on a daily cadence. Folding them into a weekly priority list let deals slip. Daily 5-min pipeline check + dedicated sales section in the weekly review fixes this.

## 2026-04-25 — At least 2 of 5 weekly priorities must be #gtm
**Why:** Solo founder build-bias is documented and predictable. Forcing a ratio in `priorities.md` is the smallest mechanism that fights it.

---

<!-- Template — copy below this line -->

<!--
## YYYY-MM-DD — Short decision title
**Why:** One paragraph. What you chose, what you rejected, why.
-->
