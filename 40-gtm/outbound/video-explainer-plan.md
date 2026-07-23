# UpSight Explainer Video Plan — Remotion Production Slate

**Goal:** make a small set of short explainer videos. Each video sells ONE benefit that one audience already cares about. This lets prospects (potential customers) find the videos on our site or on LinkedIn. It also lets Rick drop a video link into outbound (cold emails and messages sent to new prospects). This document is a plan for a producer. It does not build any videos itself — it says what to build, and in what order.

We build these videos with Remotion (a tool that makes videos using code, instead of a traditional video editor).

**Sources used:**
- `website-solutions-content.md` — the so-what (the one benefit the viewer actually cares about) for each audience.
- `templates.md` and `targeting-and-response-playbook.md` — who to send each video to, in what order, and which outbound template needs a video link.
- `app/features/marketing/pages/index.tsx`, `landing/ProductDemoSection.tsx`, `customer-discovery-for-consultants.tsx`, `event-organizers.tsx`, `solutions.tsx` — the real product wording, and real spots on the website where a video can be embedded (placed to play).
- The Remotion work already done in `upsight-marketing/40-gtm/assets/video/` — existing video components (reusable building blocks) and a full video-making pipeline (a set of steps from script to finished file — see §3, section 3, below).

---

## Build order & voice — decided 2026-07-23

**What to build, in order:**

1. **Animated Hero VSL — Nessa's brief** (52s, plus 15s and 30s cutdowns). This is the "what is UpSight" piece, and it **replaces Asset A (Hero) and Asset B (How it works)** below — Nessa's animated version merges and upgrades both into one. Build this first: it is a complete, ready brief that reuses clips we already have, needs no filming, and fills the homepage's empty "Demo video coming soon" slot. Two small tweaks before building: let the **"tells you what to ask next"** scene be the emotional peak (it is the one differentiated beat), and use **"Speak to an Advisor"** as the closing call to action (to match the founder-led site). Brief: https://docs.google.com/document/d/1fds57cDg8ILpV9UwZzahAREMahHzinO8EvaMX8vgOOc/edit
2. **Survey VSL — "The Survey That Talks Back" (Asset G), in Rick's founder voice.** Our sharpest, most-differentiated converter, and the engine for the LinkedIn public-survey motion. Build second: it lands harder once the Hero has set the context, and it needs real Personalized-Ask + AI-interviewer footage captured first. Script: `survey-vsl-script.md`.
3. **The persona cuts** (C consultants, D event organizers, E founders/PMF) and the recurring **dogfood / LinkedIn clip (F)** — recut from the Hero's and Survey VSL's real footage.

**Voice, by job (the rule):**

- **Brand / explainer (the Hero) → animated, no founder on camera.** A broad "what we do" is more polished and reusable as animation; a face earns nothing there and costs Rick a shoot day.
- **Differentiated / sales pieces (Survey VSL, dogfood clips) → Rick's founder voice.** These convert on trust — the founder making a claim and backing it. That is where the face and voice are worth the time.

---

## 1. The "so-what" ladder

so-what = the one benefit the viewer actually cares about, not a feature name.

This table ranks audiences by how fast they tend to respond, using the order set in `targeting-and-response-playbook.md` §1 (fastest signal first, slowest last). Row 1 is our primary ICP (ideal customer profile — the customer type we most want): fractional operators (consultants who work part-time for several companies at once). Row 3 is the PMF (product-market fit — proof that customers actually want what you built) audience. Each "Opening hook" below is the exact first line of VO (voice-over — the spoken narration) for that video.

| Rank | Audience | The ONE benefit | Opening hook |
|---|---|---|---|
| 1 | **Consultants / fractional operators** (primary ICP) | Turn 8 stakeholder interviews into a defensible recommendation — in minutes, not 3 days of synthesis | *"You just ran 8 stakeholder interviews. Now comes 3 days turning notes into something you can defend. What if that took minutes?"* |
| 2 | **Event & community organizers** | A sponsor recap backed by real attendee proof, not a deck of adjectives | *"The event ends, the energy's gone — and you owe sponsors a recap built from a recording nobody rewatched."* |
| 3 | **Founders / product teams (PMF)** | A roadmap you can defend with receipts, not vibes | *"You talk to customers every week. You're still debating what to build from memory."* |
| — | *(second-priority tier — hooks are drafted, but not built yet; see §5)* | | |
| 4 | Customer Success (onboarding/CSAT/churn) | Fix the thing that's actually losing customers — not the one you guessed | *"A customer churns, and the exit interview — if you even get one — is the first time you hear the real reason."* |
| 5 | Sales orgs | Walk into the next call already knowing what this buyer cares about | *"The call happens, then the details evaporate by proposal time."* |
| 6 | Nonprofits (donor development) | See what actually moves your donors, not what your team assumes | *"Hundreds of donor conversations a year, and it all lives in one gift officer's memory."* |

Every hook opens with the audience's problem or wanted outcome. It never opens with a feature name. This matches the voice already set in `templates.md`: "the value is framed as *their* problem, not our feature list."

---

## 2. The asset set, prioritized

Seven assets. The build order (the order we actually make them in) is in §3 — it is not the same as the order in the table below.

Two kinds of "on screen" appear in the table: a talking head (a person speaking to camera) with real product screens, or motion graphics (animated text and shapes, with no filmed footage). Some assets mix both.

| # | Asset | Length | Audience / so-what | On screen |
|---|---|---|---|---|
| A | **Hero — "What UpSight does"** | 60–90s | Universal (leads on #3 PMF hook — most self-evident to a cold viewer) | Talking head + real product screens |
| B | **"How it works" — 3 steps** | 30–40s | Universal, mechanism not audience | Remotion motion graphics (talking-heads-marquee visual language) |
| C | **Consultants cut** | 30–45s | Rank 1 | Real screens + motion-graphic evidence callouts |
| D | **Event organizers cut** | 30–45s | Rank 2 | Motion graphics now → real event/kiosk footage once captured |
| E | **Founders/PMF cut** | 30–45s | Rank 3 | Real screens (recut of Hero's back half) |
| F | **Dogfood/LinkedIn clip** (recurring template, not one-off) | 45–60s | Whoever answered the public survey | Real screen recording of the actual clustering result |
| G | **Survey VSL — "The Survey That Talks Back"** | ~2–2.5 min | Feature-explicit (sells the surveys directly, like the Hero — not a persona cut) | Real Personalized Ask flow + real AI-interviewer follow-up + real evidence/theme view |

**Note — the AI interviewer is its own sellable idea, not just a survey feature.** The AI interviewer (voice or chat that asks a real follow-up question, then turns the answer into evidence for the same evidence pipeline as every other asset here) stands on its own. Its core insight — *a form can't ask a follow-up question, UpSight can* — could be pitched by itself one day, not only bundled with Personalized Ask the way asset G does it. See `survey-vsl-script.md`, where this idea comes from.

### A — Hero: "What UpSight does" (60–90s)

- **Hook:** *"You talk to customers constantly. You can't find what was actually said."* (Written for the PMF audience, but general enough to open the homepage.)
- **Script beats** (one beat per line, in order):
  - Hook (the line above).
  - Problem — the evidence is buried in a recording nobody watched again.
  - How — we capture every channel → AI pulls out the evidence (a quote, plus who said it and when) → evidence groups into themes (patterns found across many pieces of evidence).
  - Proof — a real evidence/theme screen, with the quote highlighted on screen.
  - CTA (call to action — what we ask the viewer to do next) — "Upload your first conversation. See what's actually going on."
- **On screen:** a real talking head plus real product screens (the evidence view, the theme-cluster view). No made-up UI (user interface — the screens a person sees and clicks). This is the "default to real" mode (§3) already planned for this exact audience in the sibling repo's `customer-intelligence-linkedin` script — **finish that script. Do not write a new one.**
- **Fills a real, already-built slot:** `app/features/marketing/pages/landing/ProductDemoSection.tsx` is a placeholder page. It says "Demo video coming soon" and has a suggested script in a TODO comment. That script matches this Hero almost beat-for-beat: upload → extract receipts (the AI-found quotes with proof — who said it and when) → search themes → click a finding → share.

### B — "How it works in 3 steps" (30–40s)

- **Hook:** *"One conversation becomes a receipt. A hundred conversations become a pattern."*
- **Beats** (one beat per line):
  - Capture — every channel flows into one stream.
  - Evidence — AI pulls out the quote, the speaker, and the timestamp: a receipt.
  - Themes — receipts group into patterns you can search and share.
- **On screen:** pure Remotion motion graphics. No real footage needed, so we can build this one first. It reuses three existing components: `FilmReelMarquee` (the "many conversations" scrolling reel), `InsightCallout` (a quote bubble with a line pointing back to its source — this IS the receipt idea, shown visually), and `TalkingMediaTile`.
- **Why build this one first:** it proves the pipeline (capture → evidence → themes) and the so-what ladder work as a video, before any real footage is scheduled.

### C — Consultants cut (30–45s)

- **Hook:** the rank-1 hook from §1.
- **Beats** (one beat per line):
  - Hook (the rank-1 hook from §1).
  - Problem — senior consultants burn hours writing up notes instead of advising clients.
  - How — capture every stakeholder interview → AI maps where stakeholders agree, disagree, or conflict.
  - Proof — click a recommendation and see exactly which stakeholder said it.
  - CTA — "Speak to an Advisor."
- **On screen:** real product screens (the same evidence/theme view as the Hero, just narrated differently), plus `InsightCallout`-style motion graphics for the "click a recommendation → see the source" beat. There is no consultant-specific screen in the product yet — the real capability behind this is the same generic capture → evidence → theme flow used for PMF. Do not invent a "stakeholder alignment map" screen. It does not exist in the product.
- **Source page:** `customer-discovery-for-consultants.tsx` already has a 4-step flow (Capture → Synthesize → Defend → Execute). Use it as the shot list (the list of what to film, in order).

### D — Event organizers cut (30–45s)

- **Hook:** the rank-2 hook from §1.
- **Beats** (one beat per line):
  - Hook (the rank-2 hook from §1).
  - Problem — the best moments are scattered across recordings, forms, and people's memory.
  - How — capture every session, plus attendee interviews, plus the feedback survey.
  - Proof — a highlight clip with quote, speaker, and timestamp, ready for a sponsor deck (the slide presentation shown to event sponsors).
  - CTA — "Speak to an Advisor."
- **On screen:** no real event or kiosk (a self-serve recording booth) footage exists yet. Use `TalkingMediaTile` + `InsightCallout` motion graphics as a stand-in (the same "receipt" visual language as asset B), and swap in real kiosk/session footage the next time a live event runs. Call this out clearly as **capture debt** (real footage we still owe ourselves, not yet filmed) — the sibling repo tracks the same kind of gap in its own `get-assets.md` risk log for a trade-show video.
- **Source page:** `event-organizers.tsx` has a 4-step flow (Capture → Extract → Cluster → Prove). Use it as the shot list.

### E — Founders/PMF cut (30–45s)

- **Hook:** the rank-3 hook from §1 (this is the same hook as the Hero — this asset is a recut (an edit that reuses existing footage) of A, not a fresh shoot).
- **Beats:** the same shape as the Hero, just shorter. Drop the "how" detail. Keep:
  - Hook (same as the Hero).
  - Proof.
  - CTA — "See how discovery works."
- **On screen:** the same real screens as the Hero (A). Build this by trimming A's footage, not by filming again.
- **Source page:** `/customer-discovery` and the "product-market-fit" block on `/solutions`.

### F — Dogfood/LinkedIn clip (recurring template)

- **Hook:** *"I ran your answer through UpSight — here's what it found."*
- **Beats:**
  - Thanks for answering.
  - Real clustering (grouping) result on screen — how many people answered, the theme found, and the exact quotes.
  - "That clustering is the product."
  - A soft CTA (a gentle ask, not a hard sell).
- **On screen:** 100% real — a screen recording of the actual survey's theme/evidence view. This makes `templates.md` template #3 visible on screen. That doc says: "Apollo can't write this one... this is the slice worth doing in UpSight." **Build this as a reusable Remotion wrapper** (a fixed intro/outro with our logo, plus a caption track), not a one-off video — Rick will want to run this after every public survey or poll, swapping in only the new screen recording and theme name.

### G — Survey VSL ("The Survey That Talks Back") (~2–2.5 min)

- **Hook:** the cold open in `survey-vsl-script.md` — a shallow survey answer ("Fine. 7/10.") followed by "three weeks later, they were gone."
- **What it sells:** two product levers, together — **Personalized Ask** (each contact gets their own questions, drafted from real history with them) and the **AI interviewer** (voice or chat that asks a real follow-up question, then turns the answer into evidence). This asset is feature-explicit (it sells the surveys head-on, the way the Hero sells the whole product, not the way a persona cut like C, D, or E does).
- **Full beats:** see `survey-vsl-script.md` for the whole script, beat by beat (cold open → the problem → the mechanism → two proof scenarios → the media unlock → the CTA). Do not recreate the beats here — that file is the source of truth (the one up-to-date place to read them).
- **On screen:** "default to real" mode (§3) — show the real Personalized Ask flow, the real AI-interviewer follow-up, and a real evidence/theme view. The script's two proof scenarios are illustrative (examples, not real customer data), and must stay labeled "illustrative" on screen. No fabricated testimonials or fake logos.
- **Source page:** `survey-vsl-script.md`. It also names the `SurveyVSL.mp4` slot as its destination (a rewrite) and a future surveys section on the site (§4).

---

## 3. Production approach

Production means how we actually make each video, step by step.

### Two modes already established in prior art — match mode to asset

Prior art means earlier work already done that we can reuse. The sibling marketing repo (`upsight-marketing/40-gtm/assets/video/`) already uses two clear, deliberate styles for making videos. Use both. Do not invent a third:

1. **Motion graphics / "evidence visual language"** — built in `_shared/talking-heads-marquee/05-remotion/`. A fully reusable set of components:
   - `src/lib/brand.ts` — our colors (amber `#f59e0b`, sky `#38bdf8`, plus a paper/ink light-mode palette — a set of colors used together), our fonts (Inter/JetBrains Mono), and `layout.radius` (corner rounding).
   - `src/components/MarketingBackground.tsx` — the paper-background wrapper.
   - `src/components/FilmReelMarquee.tsx` — a horizontal scrolling reel of media tiles (video/audio/call clips) — the "many conversations flowing in" visual.
   - `src/components/InsightCallout.tsx` — a speech-bubble quote callout **with a line connecting it down to the source reel**. This IS the receipt idea, shown visually (a quote, its theme, and a literal line back to who said it and when). Reuse it exactly for asset B, and as the connecting visual in C and D.
   - `src/components/TalkingMediaTile.tsx` — a single media tile that grows into frame, with a speaker avatar (small profile picture) and a waveform (a line showing sound levels over time).
   - `src/components/SpeakerWaveform.tsx` and `src/components/MonoLabel.tsx` — smaller supporting pieces.
   - Use this mode for: all of asset B, and for B-roll (extra footage shown over the narration) or insert shots in A, C, and D, wherever a real screen doesn't exist yet.

2. **"Default to real"** — spelled out in `customer-intelligence-linkedin/01-script/source-customer-intelligence-linkedin-script.md`: *"This video's entire argument is 'trust the evidence, not an AI's word for it' — so the video itself has to earn that same trust... wherever a scene claims a real UpSight capability, show the real thing."* In this mode, Remotion's job is to **frame and reveal** real footage — using crossfades (one shot fading smoothly into the next), browser-chrome framing (showing the screen inside a browser-window frame, so it reads as a real product), and quote-highlight overlays timed to the real footage. Never invent a graphic to stand in for a real capability.
   - Use this mode for: asset A (Hero), E (PMF cut), F (dogfood — 100% real by definition), G (Survey VSL), and C/D once real screens/footage exist.

### Reuse the existing 5-step pipeline, don't reinvent one

`upsight-marketing/40-gtm/assets/video/_template-video/` is a working scaffold (starter structure) with 5 steps:
`01-script` (copy + a creative-brief JSON file) → `02-capture` (raw screen recordings) → `03-audio` (VO/music) → `04-assets` (cleaned files, linked into Remotion's `public/` folder) → `05-remotion` (build and render — render means export the final video file).

`scripts/new-video.sh <slug>` (slug = a short id used as the project's folder name) starts a new project from this template. Every project also ships a caption pipeline (`npm run caption-video`) for burned-in, word-timed captions — required for LinkedIn (autoplays muted, meaning it plays automatically with no sound). Follow this same pipeline for every new asset. Don't build a parallel structure.

### Reconcile with WIP already in flight before building new

WIP means work in progress — work already started but not finished. "In flight" means it's happening right now. The sibling repo has more unfinished and already-rendered work than this task's brief first mentioned — check before rebuilding:

- **`customer-intelligence-linkedin/`** — the script is fully written (see asset A/F above). The audience already matches ranks 1–3 exactly, but the capture and audio folders are empty (nothing is filmed yet). **This is asset A's script — finish it, don't rewrite it.**
- **`upsight-ci-v2/`** — the most recently touched project (renders dated Jul 19–21). It's a homepage-hero motion piece, mid-pivot (mid-change) per its own `FUNNEL-BRIEF.md` ("boxed dark marquee reads as UI inside a UI... prefer transparent Remotion layer"). Several versions are already rendered (`ci-v2-movie.mp4`, `ci-v2-funnel-preview.mp4`, `ci-v2-cards.mp4`, and others), but the brief's messaging ("Deal → Converge → Act") doesn't map cleanly onto the so-what ladder in §1. **Audit before reusing** — likely salvage the transparent-layer/funnel motion technique for B's B-roll, not the messaging.
- **`upsight-homepage-hero/`** (rendered `hero.mp4`) and **`upsight-smart-surveys/`** (rendered `hero.mp4`) — both fully rendered but positioned on older messaging ("leadership meeting prep," feature-tour of survey response modes) that predates the evidence/receipts so-what ladder this plan is built from. Don't embed these as-is; they're candidates for B-roll only.
- **`upsight-ssd-demo/`** (rendered `ssd-demo.mp4`, 2:30) and **`upsight-conversational-intelligence/`** (multiple renders incl. a VSL-style cut) — longer-form assets, out of scope for this lean slate (see §5), but don't re-plan long-form from zero later without checking these first.
- **`final/SurveyVSL.mp4`** and **`final/semifinal.mp4`** — already-rendered "final" cuts sitting outside any slug folder. Watch these before building F — one may already BE a version of the dogfood clip. Also watch them before building **asset G**: `survey-vsl-script.md` names the `SurveyVSL.mp4` slot as its own destination (a rewrite), so one of these old renders is likely the thing asset G is meant to replace, not asset F.
- **Component drift risk (risk of copies growing apart):** at least two divergent copies of `brand.ts`/`MarketingBackground.tsx` already exist (`talking-heads-marquee` vs `upsight-ci-v2`). Don't add a third — either import from `_shared/talking-heads-marquee/05-remotion/src/lib` and `.../components` directly, or copy once and note the copy is canonical (the official, correct-going-forward one) going forward.

### Build order

1. **Audit** — 30 minutes: watch `final/SurveyVSL.mp4`, `final/semifinal.mp4`, and the `upsight-ci-v2` renders; decide salvage vs. ignore. Don't start building until this is done — it's cheap and prevents duplicate work.
2. **Asset B (3 steps)** — pure motion graphics, no capture dependency, fastest to ship, proves the so-what ladder reads correctly in video form using components that already exist.
3. **Asset A (Hero)** — record the talking head + capture the real screens per the `customer-intelligence-linkedin` script's shot list (call recording view, survey in progress, evidence drill-down). This is the critical-path asset (the one everything else depends on) — it unblocks E and fills the homepage's literal open slot.
4. **Asset E (PMF cut)** — recut of A, same day as A's edit.
5. **Assets C & D** — new VO + captions over a mix of A's real screens and B's motion-graphic connectors; D explicitly waits on real event footage for its final pass (ship the motion-graphics version first, swap later).
6. **Asset F template** — build the reusable wrapper once a real public survey/poll has a clean clustering result to show; this is a recurring production process, not a single render — expect to re-run it every time Rick does the dogfood loop.

---

## 4. Distribution

Distribution means how and where we publish each finished video.

### Webpages (embed real product-screen cuts, not raw motion graphics, wherever a visitor is deciding)

| Asset | Page | Slot |
|---|---|---|
| A — Hero | Homepage (`app/features/marketing/pages/index.tsx`) | `landing/ProductDemoSection.tsx` — replace the "Demo video coming soon" placeholder per its own embed TODO |
| B — 3 steps | Homepage, above or below the Hero embed; also usable on `/solutions` hero as a jump-in loop | New slot — short enough to autoplay muted on load |
| C — Consultants | `customer-discovery-for-consultants.tsx` | Hero section or "The Flow" section |
| D — Event organizers | `event-organizers.tsx` | Hero section or "The Problem" section |
| E — PMF | `/solutions` (`solutions.tsx`, `id="product-market-fit"` block — first of the 7) | Next to the block's existing `proof` line |
| F — Dogfood | Not embedded on a page — LinkedIn-native + direct link only (see below) | — |
| G — Survey VSL | A surveys section on the site (new — this section doesn't exist yet) | The existing `SurveyVSL.mp4` slot — rewrite it with this script |

Note: consultants have no block on `/solutions` (that page covers PMF, sales,
donor, onboarding, CSAT, churn, event-organizers — 7 blocks, not consultants) —
per `website-solutions-content.md`'s own placement logic, consultants are
served by their dedicated page, so C only needs one home, not two.

### LinkedIn cadence

Cadence means how often, and in what order, we publish posts.

- **Native upload, not a link post** — LinkedIn favors native video (a file uploaded directly to LinkedIn, not a link to it elsewhere), and the `customer-intelligence-linkedin` script's own production note applies to all of these: it autoplays muted, so captions must be burned in (the pipeline's caption step, §3).
- **Asset F (dogfood) — event-driven, not calendar-driven.** Post it every time a public survey/poll wraps, tied to the loop `templates.md` #3 describes. This is the single strongest organic (unpaid, non-ad) post type in the plan — it demonstrates the product on data the audience helped create.
- **Assets A/B/E — evergreen cadence** (a steady schedule not tied to one event), spaced out (not same week), each with a segment-specific first line (the hook from §1) since LinkedIn's algorithm rewards a strong first two lines before "see more."
- **Asset G (Survey VSL) — native upload, captions burned in**, same rule as every other video here.
- Crop 16:9 (wide, landscape) masters to 1:1 (square) or 4:5 (tall) for the feed; keep 16:9 originals for the website embeds in the table above — one render, two aspect-ratio (frame-shape) exports.

### Outbound — mapped to `templates.md`

| Template | The ask | Video to link |
|---|---|---|
| 1. Cold — consultant/fractional operator | *"Worth a 2-minute example on one of your engagements?"* | **C — Consultants cut** |
| 2. Warm — referral intro | *"Open to me sending a short example tailored to [their world]?"* | Whichever of C/D/E matches their world; **A (Hero)** as fallback |
| 3. Public-survey respondent (dogfood loop) | *"I ran all the responses through UpSight..."* | **F — the dogfood clip itself** — this is the literal subject of the email |
| 4. Re-engagement | *"Want me to send a quick before/after?"* | **A (Hero)** — shows the full arc; swap to a feature-specific clip once one exists |
| 5. Trigger — react to a recent post | *"Curious how are you capturing that today?"* | Segment cut matching the post's topic (C/D/E); **A** as fallback |
| Feedback / response-rate / testimonials angle | Any outbound message about survey feedback, low response rates, or asking for a testimonial | **G — Survey VSL** |

For 1/3, prefer a link that opens the clip directly (not buried mid-page) —
a direct render URL (once R2-hosted — R2 is the cloud storage where the
finished videos are hosted — following the sibling repo's existing
`deploy-to-r2.sh` convention: `https://pub-....r2.dev/videos/<name>.mp4`) or a
page anchor (a link straight to one section of a page, like
`/event-organizers#hero`), never a bare homepage link for a "2-minute example"
ask.

---

## 5. What NOT to make yet

- **Separate cuts for CS/onboarding/CSAT/churn, sales, and donor development** (ladder ranks 4–6). Hooks are drafted in §1 for later use, but per `website-solutions-content.md`'s own placement logic, only sales and churn are even candidates for dedicated pages "once traffic or search data" justifies it — don't get ahead of that signal with video either.
- **A video for all 7 `/solutions` blocks.** Ship the lean 7-asset slate, prove it moves outbound replies and homepage demo requests, then decide which additional blocks earn a cut.
- **Long-form product demo / VSL (2–3 min+, video sales letter).** `upsight-ssd-demo` (2:30) and the `upsight-conversational-intelligence` VSL-style renders already partially cover this ground — audit those (§3 step 1) before ever planning a new long-form asset. (Asset G, the Survey VSL, is separate: it's already part of this plan's build slate, and the script keeps it to about 2–2.5 minutes.)
- **Paid-ad aspect-ratio remixes** (9:16 Reels/TikTok/Shorts, display-ad sizes). Defer until the organic short cuts prove engagement — don't multiply export formats before the message is validated.
- **A new visual style.** Extend `brand.ts` + the marquee/callout language that already exists; don't design a second illustration system.
- **Bespoke per-prospect renders.** The entire point of this slate is reusable links dropped into outbound — never build a one-off Remotion render for a single lead.
- **Reconciling every old WIP render into a finished product** (`upsight-ci-v2`'s multiple composition variants, `upsight-homepage-hero`, `upsight-smart-surveys`). Audit-and-salvage only (§3 step 1); don't let finishing old, off-message renders block shipping the new slate.
