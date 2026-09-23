# Econ-Dev Lane — Data Rights Structure

> **Status:** Draft v1 — commercial structure, pre-counsel | **Author:** Rick Moy (with Claude) | **Date:** 2026-09-23
> **Lane:** Decision support for economic development organizations — EDCs, chambers, city/county econ-dev offices
> **Strategic order for the lane:** grant reporting is the wedge, early warning is the retention story.
> **The decision this document exists to structure and defend:** **UpSight holds the corpus.**
> **Related:** `30-strategy/pricing-strategy.md` (pricing frame), `00-control/decisions.md` (log the corpus decision there)

---

## 0. Read this first

**This is a commercial structure written to be taken to a lawyer. It is not legal advice.**

I am not a lawyer and neither is the tool that helped draft this. Every clause below is a
negotiating position and a description of how the business should work — not a legal opinion, not
a compliance certification, and not something to paste into a signed agreement without review.

Selling to California public agencies puts the **California Public Records Act** in play, and
federal pass-through money brings its own **disclosure, audit and records-retention** rules. Both
are areas where getting it approximately right is the same as getting it wrong.

**Sections that most need review by California counsel before use — in priority order:**

| # | Section | Why it needs a lawyer | Kind of counsel |
|---|---|---|---|
| 1 | **§6 Public records exposure** | Whether raw interview material in an agency's hands is disclosable, and whether any exemption actually holds, is a fact-specific call under CPRA case law. This is the section where being wrong breaks a promise to a small business owner. | California public agency / municipal law |
| 2 | **§9 The clauses** — specifically 9.7 (Public Records Handling) and 9.2–9.4 (Ownership and the two license grants) | These are the operative terms. 9.7 must survive a city attorney's redline; 9.2–9.4 are what make or break the corpus position. | Commercial/tech transactions + public contracting |
| 3 | **§3.6 The CCPA two-hat problem** | Whether UpSight is a "business," a "service provider," or both under Civ. Code § 1798.140 is the single legal characterization that decides whether cross-client benchmarking is lawful at all. Get this wrong and §2 Layer 5 is illegal, not just contested. | California privacy |
| 4 | **§3 The consent chain** — recording consent specifically | California is an all-party consent state for confidential communications (Pen. Code § 632). Field recording in a shop is exactly the fact pattern where "confidential communication" gets litigated. | California privacy / criminal-adjacent civil |
| 5 | **§6.6 Federal pass-through** | 2 CFR Part 200 rights-in-data and access-to-records provisions may override contract terms on federally funded engagements. The flow-down language in the prime award controls. | Federal grants counsel |
| 6 | **§7 De-identification thresholds** | The thresholds below are drawn from federal statistical practice by analogy. They are defensible practice, not a legal safe harbor. | Privacy / statistical disclosure |

**Throughout this document I mark the difference explicitly:**

- **LAW:** what a statute, regulation or case actually says, with a source and date accessed.
- **JUDGMENT:** my structuring choice, which is contestable and which counsel may overrule.

Where I am unsure of a recodified section number I say so rather than asserting it.

---

## 1. The decision being structured

UpSight accumulates a body of business conversations, interviews, survey responses and evidence
across corridors and across clients. **That body — the corpus — stays with UpSight.**

Clients get rights to their own data and to the outputs, generously and perpetually. They do not
get to walk away with the corpus, and no single agency owns it.

This is the entire long-term value of the lane. Without it, every contract is a consulting
engagement that resets to zero on signature day, and UpSight is competing with a person and a
notebook. With it, year three in a corridor is cheaper and sharper than year one, and a new client
in Chula Vista benefits on day one from three years of work in City Heights. Intelligence
compounds instead of resetting.

Everything below exists to make that position (a) honest to the business owners who are the
source, (b) survivable in front of a city attorney, and (c) drafted tightly enough that a deal
doesn't die in redline.

---

## 2. The corpus, layer by layer

Rights differ per layer. Treating "the data" as one thing is how these deals go wrong — it forces
a single yes/no on a question that has five different right answers.

### 2.1 The five layers

**Layer 1 — Raw capture.**
Audio and video recordings, machine transcripts, correspondent field notes, raw survey submissions
including free-text, photographs of a storefront or a sign. Everything as captured, unedited,
fully attributed to a named human being. This is the most sensitive layer and the least useful
one: nobody makes a decision from three hours of tape.

**Layer 2 — Verbatim quotes.**
An extracted span of raw capture — a sentence or a paragraph — with a pointer back to its exact
location in Layer 1 and to the person who said it. This is UpSight's actual product mechanic:
every insight stays linked to the verbatim quote behind it. A quote has an attribution state:
*named* (Maria Ortega, Ortega Hardware), *role-only* (a hardware store owner on the 4700 block),
or *anonymous* (a corridor business owner).

**Layer 3 — Person and business profiles.**
The persistent record: who this person is, what business they run, where, how long, employee
count, what they've told us across every touchpoint and every year. The longitudinal spine. This
is what makes early warning possible — you cannot detect that a business's outlook has degraded
if you don't have last year's outlook attached to the same business.

**Layer 4 — Derived themes and indicators.**
Themes, counts, trend lines, indicator scores, segment rollups. "Rent pressure" as a theme with 14
supporting quotes. "Corridor confidence index, 4th quarter." Derived by UpSight's models and
analysts from Layers 2 and 3. Scoped to a geography, a time window, and a client engagement.

**Layer 5 — The cross-corridor benchmark.**
The aggregate that only exists because UpSight works across many clients: how this corridor's
permit friction compares to eleven others; what a foot-traffic decline of this shape usually
precedes; which interventions preceded recovery elsewhere. **No single client can generate this
layer, at any price, because no single client has more than one corridor.** This is the compounding
asset, and it is the layer that must never be contractually assignable to a client.

### 2.2 Who gets what — the rights matrix

*Source: UpSight structuring decision, 2026-09-23. This is a proposed commercial position, not a
description of an existing contract or of law.*

| Layer | Held where | Client's rights | Participating business's rights | UpSight's rights |
|---|---|---|---|---|
| **L1 Raw capture** | UpSight systems only. Never delivered to the client as files. | **View-only**, in UpSight, for their own corridor, during the term and for 12 months after. No export, no bulk download, no copy in agency custody. | Access to their own recording and transcript on request; correction of factual errors; deletion request per §8.4. | Full rights to retain, process and derive, for the consented purposes only. Not published, not sold, not shown to another client. |
| **L2 Verbatim quotes** | UpSight systems. Selected quotes appear in delivered outputs. | Perpetual right to use **quotes from their own corridor** that appear in their delivered outputs — including attributed quotes where the speaker approved attribution. Evidence-linked view of all quotes behind their findings. | Controls attribution state. Named attribution requires a separate, specific yes on the exact sentence (§3.3). Can downgrade named → anonymous at any time going forward. | Retain all quotes. Reuse **de-identified** quotes in cross-client analysis (L5). Publish a named quote only with that person's publication consent. |
| **L3 Person/business profiles** | UpSight systems. | **Full export** of the profile records for businesses in their own corridor — open format, machine-readable, theirs to keep and to load anywhere. See §4.2 for the exact field list. | Access, correction, deletion request. Consent choices are stored on the profile and are binding. | Retain the persistent profile, including across client engagements, so year-over-year comparison works. Profiles are the spine; they do not reset when a contract ends. |
| **L4 Derived themes and indicators** | UpSight systems; delivered as outputs. | **Perpetual, irrevocable, royalty-free right** to use, reproduce, modify and publish all themes, indicators and findings **for their own corridor** — in grant reports, council presentations, press, anything. Including after termination. | No individual rights at this layer (it is already aggregated), but suppression rules in §7 protect them here. | Own the underlying method and models. Retain the derived layer for corridor history and to feed L5. |
| **L5 Cross-corridor benchmark** | UpSight only. | **Right to receive and use benchmark comparisons that include their corridor**, in reports and publicly, with attribution to UpSight. No right to the constituent data, no right to other clients' corridor-level detail, no right to the benchmark as a dataset. | Not applicable at the individual level; contribution is de-identified and subject to §7 thresholds. | **Sole ownership.** This layer is UpSight's and is not assignable to any client under any circumstance, including the ones in §8. |

**The line that matters:** Layers 1 and 2 never cross a client boundary with identity attached.
Layer 3 crosses only as a scoped export of the client's own corridor. Layer 4 is given away
generously because it is the thing the client actually bought. Layer 5 is UpSight's and is the
reason the business exists.

**JUDGMENT:** The generosity is deliberate and load-bearing. A client who can export everything
about their own businesses, forever, in an open format, has a hard time arguing they were treated
extractively. The concession that costs nothing strategically is the one that wins the room.

---

## 3. The consent chain

### 3.1 Three parties, two contracts, one gap

```
  UpSight ──────contract───────▶ Agency (the client)
     │                                   │
     │                                   │  no contract between
     │ consent (spoken + recorded)       │  these two parties
     │                                   │
     ▼                                   ▼
  Business owner in the corridor ◀╌╌╌╌╌╌╌┘
        (the source)                (constituent relationship,
                                     not a data relationship)
```

*Source: UpSight structuring diagram, 2026-09-23. Solid lines are contracts or consents; the
dashed line is a civic relationship that carries no data rights.*

The business owner is the source of everything in Layers 1–3. The agency is the client. **They are
different parties, and the business owner has not signed the agency's contract.** Nothing the
agency agrees to can give UpSight rights over the business owner's words. Only the business owner
can do that.

This is not a technicality to route around. It is the foundation of the corpus position: because
consent runs to UpSight and not to the agency, the corpus is UpSight's to hold, and handing it to
an agency would be a breach of the promise that obtained it. **The consent chain is what makes the
corpus position principled rather than merely commercial.**

### 3.2 What the business owner must be told, and must agree to

Four things are non-skippable. If any one of these wasn't said and logged, the material is
research-only and never enters the corpus for cross-client use.

1. **Who we are and who's paying.** UpSight, working for [Agency]. Not a secret, ever. A
   correspondent who obscures the client is manufacturing a lawsuit and destroying the lane.
2. **Recording consent — an actual spoken yes, on the recording, before substantive conversation.**
   - **LAW:** California Penal Code § 632 makes it an offense to record a "confidential
     communication" without the consent of all parties; California is an all-party consent state.
     Penalties run to $2,500 per violation and up to a year in county jail. (Source:
     [Cal. Pen. Code § 632, FindLaw](https://codes.findlaw.com/ca/penal-code/pen-sect-632/),
     accessed 2026-09-23.)
   - **JUDGMENT:** A conversation in a shop's back office is exactly the fact pattern where
     "confidential communication" is arguable in both directions. Do not argue it. Get a recorded
     yes every time, including for calls. No yes, no recorder — take notes instead.
3. **Where it goes, and where it doesn't.** The recording goes to UpSight. The agency gets
   findings. Named attribution requires a second, specific yes on the exact sentence.
4. **That we keep it, and reuse it de-identified.** Retention past this project so year-over-year
   comparison works; de-identified reuse in cross-corridor benchmarks. Said in plain words, not
   buried.

And one that is not strictly required but that I think is required to be an honest counterparty:

5. **The public records caveat.** The agency is a public body. What the agency holds can be
   requested. We architect to keep raw material out of their hands, but we cannot promise a court
   will never reach it. Say it. See §6.4 for why saying it is also protective.

### 3.3 The spoken consent script

Written to be said out loud by a correspondent standing in a shop, not read off a clipboard. Plain
words, short sentences, no defined terms.

> **Full version — first contact, in person, recorder off:**
>
> "Hi — I'm [Name]. I work with UpSight. The City of [X] hired us to find out what's actually
> going on for businesses on this street — we're talking to about forty of you.
>
> Before I start, four quick things, and then I'll shut up and listen.
>
> **One.** I'd like to record this, so I can quote you right instead of paraphrasing you wrong. Is
> that OK? *[Wait for an actual yes. If no: "No problem — I'll just take notes." Put the recorder
> away visibly.]*
>
> **Two.** The recording comes to us, not to the city. What the city gets is the report — the
> patterns across all forty businesses. Your name isn't in it unless you put it there.
>
> **Three.** If I want to use something you said with your name on it, I'll email you the exact
> sentence first and you tell me yes or no. You'll never be surprised by seeing yourself in print.
>
> **Four.** We hang onto these conversations. When we come back next year, we can see what changed
> — for you and for the street. And we use what we learn here, with your name and your business
> taken out, to compare this street to other places we work. That comparison is how the city finds
> out whether what's happening to you is a you problem, a this-street problem, or a whole-region
> problem.
>
> One more thing I want to be straight about: the city is a public agency. If they end up holding a
> document, someone can file a public records request and they may have to hand it over. That's
> exactly why we don't give them the recordings — they get findings, not tape. But I'm not going to
> stand here and promise you a judge could never reach it. I'd rather tell you that now.
>
> You can stop me any time, skip anything, or call me later and pull your stuff — here's my card.
> If it's already printed we can't un-print it, but we take it out of everything going forward.
>
> Sound OK? Can I hit record?"

> **Short version — 25 seconds, for a busy counter, an intercept, or a phone call:**
>
> "I'm [Name] with UpSight — the City hired us to find out what's really happening to businesses on
> this block. Can I record so I quote you right? *[yes]* Thanks. Recording stays with us; the city
> gets the findings, not the tape. Your name only goes in if you approve the exact sentence first.
> We keep these so we can see what changes next year, and we use them anonymously to compare this
> street to others. Stop me any time. Ready?"

> **The re-contact line — year two and after, when a profile already exists:**
>
> "We talked last September — you told me about the parking meters and the wholesale prices. I want
> to see what's changed. Same deal as last time: recording stays with us, city gets findings, your
> name only with your OK. Still good?"

> **The attribution ask — separate, later, by email or text, with the exact words quoted back:**
>
> "Quick one. In the report for the City I'd like to use this, exactly as written:
>
> *'[exact sentence]'*
>
> — attributed to you and [Business Name]. Yes or no is fine. If no, I'll use it without your name
> or drop it, your call. No need to explain."

**JUDGMENT — the three rules that keep the script honest:**
- Never say "confidential" or "anonymous" as a blanket promise. Say what actually happens.
- Never say the city will never see it. Say the city gets findings, not raw material, and say why.
- Never bundle the attribution ask into the opening consent. Bundled attribution consent is worth
  nothing and looks like a trick when someone sees their name in a council presentation.

### 3.4 What gets logged, on every participant profile

A consent record that can't be produced is a consent that didn't happen. Store on the L3 profile:

| Field | Value | Why |
|---|---|---|
| `consent_recording` | yes / no / notes-only, plus timestamp offset in the audio where the yes occurs | Pen. Code § 632 defense needs the yes to be locatable, not just asserted |
| `consent_script_version` | e.g. `v1.0-2026-09` | So a later dispute can reconstruct what was actually promised |
| `consent_client_report` | yes / no — may findings from this conversation go into the named client's deliverable | The baseline grant |
| `consent_crosscorridor` | yes / no — may de-identified derivations feed L5 | The corpus grant. A no here means the conversation serves this client only and never enters the benchmark |
| `consent_publication_named` | per-quote: yes / no / pending, with the exact quoted text and the date approved | Named publication is per-sentence, never blanket |
| `consent_retention_years` | default 7, or participant-specified shorter | See §8.4 |
| `withdrawal` | date, scope requested, what was actually done | The record that the promise in §3.3 was kept |
| `correspondent` | who took the consent | Accountability, and training signal when a correspondent's consents are thin |

**JUDGMENT:** `consent_crosscorridor` must be a genuine, separately-refusable toggle, not a
pre-checked box. If it is not genuinely refusable it is not consent, and the whole L5 position
rests on it. Expect a small refusal rate (my guess: under 10%); design the pipeline to handle
those records as client-scoped-only rather than excluding the person entirely.

### 3.5 Survey and passive-collection consent

Not every touch is a conversation. For web surveys and forms, the same four things appear above
the first question in plain language, with the cross-corridor use as a separate checkbox, and the
consent record carries `consent_method: survey` plus the form version. For material the *agency*
hands UpSight (their existing business list, prior survey results, permit data), see §3.6 — that
material arrives under a different hat and is treated differently.

### 3.6 The CCPA two-hat problem — read this one twice

This is the structural crux, and it is easy to sleepwalk into destroying the lane in a single
contract clause.

**LAW:** Under the CCPA as amended, a **service provider** that processes personal information on
behalf of a business is contractually prohibited from combining the personal information it
receives from one business with personal information it receives from another business, subject to
narrow regulatory exceptions. This is Civil Code § 1798.140(ag)(1)(D), and it must appear in the
service-provider contract. (Sources:
[Cal. Civ. Code § 1798.140, FindLaw](https://codes.findlaw.com/ca/civil-code/civ-sect-1798-140/);
[IAPP, "Analyzing the CPRA's new contractual requirements for transfers of personal information"](https://iapp.org/news/a/analyzing-the-cpras-new-contractual-requirements-for-transfers-of-personal-information),
both accessed 2026-09-23.)

**The trap:** Government procurement templates love the words "Contractor shall act as a service
provider with respect to all data." Signing that sentence makes Layer 5 — cross-corridor
benchmarking, the whole compounding asset — contractually prohibited. It would not be a
negotiating loss. It would be the end of the lane, written in a clause nobody read closely.

**JUDGMENT — the structure that avoids it.** UpSight wears two hats in every engagement, and the
contract must say which hat covers what:

| Hat | Applies to | UpSight's role | What UpSight may do |
|---|---|---|---|
| **Hat A — independent collector** | Everything UpSight collects directly from a participating business under the §3.3 consent: L1, L2, L3, and the L4/L5 derivations from them | A **business** in its own right under CCPA, with its own direct relationship and its own consent from the participant | Retain, derive, and use de-identified derivations across clients, strictly within the scope of `consent_crosscorridor` |
| **Hat B — service provider** | Data the **agency supplies** to UpSight: their business registry, prior survey exports, permit and license data, mailing lists | A **service provider** processing on the agency's behalf | Use it only to perform the engagement. **Never** merged into L5. Deleted or returned at termination |

Two consequences to build for, not just to write down:

1. **Agency-supplied data is tagged at ingest and is architecturally walled from the benchmark
   pipeline.** Not a policy — a field on the record and a filter in the L5 query path. If a city
   attorney asks "how do I know our business registry doesn't end up in someone else's benchmark,"
   the answer has to be a mechanism, not an assurance.
2. **The contract must expressly reject a blanket service-provider designation** and substitute the
   two-hat allocation. See clause 9.5. This is the clause most likely to be redlined by reflex and
   most important to win.

**Counsel must confirm:** whether this two-hat characterization holds under CCPA and current CPPA
regulations; whether UpSight meets CCPA applicability thresholds at all at current scale (and what
happens when it does); and whether B2B contact data collected in this posture carries additional
obligations. I am confident this is the right *structure*; I am not competent to certify it is the
right *characterization*.

---
