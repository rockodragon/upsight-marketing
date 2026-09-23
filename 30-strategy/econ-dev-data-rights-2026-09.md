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

## 4. What the client gets

A vague grant here kills deals. A procurement officer who cannot tell a council member exactly what
the city owns at the end of the contract will not sign. So: specific, enumerated, generous.

### 4.1 Outputs — perpetual and unrestricted for their own corridor

The client receives, and owns a **perpetual, irrevocable, worldwide, royalty-free license** to use,
reproduce, modify, distribute, translate, excerpt and publicly display:

- Every report, memo, brief, dashboard view, chart and map UpSight delivers under the engagement.
- Every theme, indicator, score, count and trend line for their own geography (Layer 4).
- Every quote that appears in a delivered output, at the attribution state the speaker approved.
- Benchmark comparisons that include their corridor (Layer 5 outputs — the comparison, not the
  underlying data), with attribution to UpSight as source.

**Explicitly permitted, because these are the actual use cases and ambiguity here is a deal-killer:**

- Submitting outputs verbatim in federal, state, county, foundation and philanthropic grant
  applications, progress reports and closeout reports.
- Including outputs in staff reports, council and board packets, and CEQA or planning documents.
- Publishing outputs on the agency's website, in press releases, in annual reports, on social.
- Sharing outputs with the agency's own funders, auditors, consultants, subrecipients and
  coalition partners.
- Continuing all of the above **after the contract ends, forever, with no further payment** — the
  grant survives termination for any reason, including non-renewal and including termination for
  UpSight's breach.

**The one restriction:** the client may not resell the outputs as a standalone commercial data
product, or license them to a third party whose business is selling economic-development
intelligence. Using them, publishing them, and giving them away are all fine. Reselling them as
data is not.

### 4.2 Their own businesses — full export, open format

On request at any time during the term, and once within 90 days after termination, the client
receives a machine-readable export (CSV plus JSON) of the Layer 3 records for businesses in their
own geography:

- Business name, address, contact name, contact role, contact email and phone where collected
- Industry classification, employee-count band, years in operation, ownership type
- Every engagement touchpoint: date, channel, correspondent, topic tags
- Every theme and indicator value attached to that business, per period
- Every quote attributed to that business **at the attribution state the speaker approved**, with
  the linked evidence identifier
- The consent state per business — so the client can see what they are and are not allowed to do
  with each record

**Open format, no proprietary encoding, no license key, no expiry.** They can load it into
Salesforce, ArcGIS, Excel, or a filing cabinet. It is theirs.

### 4.3 Evidence access — the differentiator, delivered

For the term of the engagement plus 12 months, the client's named users get **view-level access in
UpSight** to the evidence underneath their own findings: click a number in the report, see the
quotes behind it, see the conversation each quote came from. Read-only, audit-logged, no bulk
export of Layer 1.

**JUDGMENT:** The 12-month tail is deliberate. A grant closeout report is often written nine months
after the engagement ends, and the moment a program officer asks "what's this number based on"
is the moment the client either renews or doesn't. Giving away the tail costs nothing and is
worth more than a discount.

### 4.4 Audit support

UpSight will, at no additional charge, respond to a funder's or auditor's request for methodology
documentation, sampling approach, response rates, and a certification that the reported figures
derive from the described evidence. See §6.6 for how auditor access to underlying records is
handled without turning the corpus into agency-held records.

### 4.5 What the client does not get — stated plainly in the contract, not hidden

- Bulk export or file delivery of recordings and transcripts (Layer 1). View-only, per §4.3.
- Any data about businesses outside their geography.
- The cross-corridor benchmark as a dataset, or any other client's corridor-level detail.
- Ownership of UpSight's models, prompts, taxonomy, indicator definitions or platform.
- Any right to assign, sublicense or transfer the above to a successor entity except per §8.3.

**JUDGMENT:** Put §4.5 in the contract in plain words, on the same page as §4.1. Burying it reads
as a trap when it is found later; stating it next to a long list of generous grants reads as
honest scoping. The sequence "here is everything you get, and here are the four things you don't"
is the one that survives a council meeting.

---

## 5. What UpSight retains — and the argument for why that is fair

### 5.1 The retention

UpSight retains, exclusively and perpetually:

- The full corpus at Layers 1, 2 and 3, across all clients and all periods, subject to participant
  consent and the retention limits in §8.4.
- All Layer 4 derivations, including for terminated engagements, so that corridor history survives
  a gap in contract coverage.
- Layer 5 in its entirety — sole ownership, not assignable to any client under any circumstance.
- The methodology: models, prompts, taxonomies, indicator definitions, question banks, the
  correspondent protocol, and every improvement to them, including improvements suggested by a
  client.

### 5.2 The argument Rick makes out loud to a city attorney

Rehearse this. Not defensively — this is a good argument, and it should sound like one.

> "Fair question. Here's how I think about it, and then tell me where it doesn't hold.
>
> **You're not buying the corpus. You're buying the answer.** The price reflects that. If you want
> to buy a corpus, that's a different product at a different number, and I'll quote it — it's
> roughly what it would cost you to build one from scratch, which is most of a staff position for
> several years plus the software. Almost nobody wants that, because almost nobody wants to run a
> research operation. You want to know what's happening on Fourth Avenue.
>
> **Second: the people who gave us this material gave it to us, not to you.** I stood in forty
> shops and told each owner that the recording stays with us and the city gets the findings. That
> promise is why they talked. If I hand you the recordings because you asked, I've lied to forty of
> your constituents, and next year nobody talks to either of us. Holding the corpus isn't me
> keeping something from you. It's me keeping the thing that makes the answer worth having.
>
> **Third — and you'll like this one better than I do:** you don't want custody of the raw
> material. The moment those transcripts sit in your file system, they're arguably public records
> and someone can request them. A tenant organizer, a reporter, a competitor of one of those
> businesses, the landlord who's raising their rent. Every owner who told me something candid about
> their revenue or their landlord is exposed, and it's your name on the disclosure. Findings
> aggregate that risk away. Raw material doesn't. I'd rather carry that risk on my side of the
> line, and I'm structured to.
>
> **Fourth: what you're giving up, you could never have had.** You have one corridor. The benchmark
> exists because eleven agencies are each paying for one corridor, and the comparison across them
> is the part none of them could fund alone. If I hand the corpus to whoever asks, there is no
> benchmark, and every one of you is back to a survey with a 12% response rate and no idea whether
> your number is good. You're not being deprived of an asset. You're being handed one that doesn't
> otherwise exist.
>
> **Fifth: you benefit from it on day one.** Your first report compares your corridor to the ones
> that came before you. Agencies that signed before you paid for the baseline you get for free on
> signature day. The deal is reciprocal and it's front-loaded in your favor.
>
> **And here's the test for whether this is extractive.** You can walk out with every finding,
> forever, free, and publish it anywhere. You can export every record about every business in your
> city in an open format and load it wherever you want. You can use all of it in grant reporting in
> perpetuity, even if you fire me tomorrow. What you can't take is other cities' data — which was
> never yours — and the recordings, which belong to the people who made them. If that's extraction,
> I'd like to know what a fair deal looks like, because I think that's it.
>
> **One more thing, unprompted:** if UpSight goes away, you don't lose your history. There's an
> escrow — §8.5 — that releases your corridor's evidence to you if I dissolve or stop operating.
> You're not exposed to my company risk."

### 5.3 Where the argument is genuinely weak, and what to concede

Be honest internally about this or it will surprise you in the room.

| Weak point | The honest reading | Concede this |
|---|---|---|
| Public money produced the data | Substantially true. Public funds paid for the collection effort. The corpus position rests on consent and on the client getting full use of outputs, not on "we paid for it so it's ours." | Concede the framing, hold the position: public money bought a public answer, published and reusable forever. It did not buy custody of private conversations. |
| "You'll sell our data" | Layer 5 is a commercial product. Saying otherwise is a lie. | Say plainly: yes, the benchmark is commercial, it is built from de-identified derivations only, your named businesses and your corridor-level detail are never sold or shown, and you receive the benchmark yourself as part of the deal. |
| The consent was obtained by us, for our benefit | Partly true — the consent script serves UpSight's interest as well as the participant's. | Concede that the structure benefits UpSight. That is what makes it a business. The test is whether the participant was told the truth, and they were. |
| A competitor agency could get intelligence about our city | Only at the aggregated, suppressed, corridor-comparison level. | Offer the reciprocal guarantee in clause 9.4(c): nothing about your corridor appears in another client's output at finer grain than the §7 thresholds allow, and never with a named business. |

---

## 6. Public records exposure — a first-class risk

This risk cuts both ways. It is the strongest argument for the corpus staying on UpSight's side of
the line, **and** it is a promise-keeping obligation to forty business owners who talked candidly
because someone told them it would be handled carefully.

### 6.1 What the law actually says

**LAW — the definition is broad.** "Public records" means "any writing containing information
relating to the conduct of the public's business prepared, owned, used, or retained by any state or
local agency," regardless of physical form. (Source:
[Cal. Gov. Code § 7920.530, California.Public.Law](https://california.public.law/codes/government_code_section_7920.530),
accessed 2026-09-23.) Note the verbs: **prepared, owned, used, or retained.** "Used" is doing a lot
of work and is the verb that should worry us most.

**LAW — the CPRA was renumbered, not rewritten.** Effective January 1, 2023, AB 473 recodified the
CPRA from Gov. Code §§ 6250–6276.48 into §§ 7920.000–7930.215. The recodification made no
substantive change and did not disturb prior case law. (Source:
[Somach Simmons & Dunn, "New Year, New California Public Records Act Organization and Codification"](https://somachlaw.com/policy-alert/new-year-new-california-public-records-act-organization-and-codification/),
accessed 2026-09-23.) **Practical note for drafting:** many agency templates still cite the old
§ 6250 numbers. Cite both.

**LAW — the catch-all balancing test.** An agency may withhold a record by showing it is exempt
under an express provision, "or that on the facts of the particular case the public interest served
by not disclosing the record clearly outweighs the public interest served by disclosure." (Source:
[Cal. Gov. Code § 7922.000, Justia](https://law.justia.com/codes/california/code-gov/title-1/division-10/part-2/chapter-3/article-1/section-7922-000/),
accessed 2026-09-23; formerly § 6255.) The agency bears the burden, case by case. This is a real
exemption but it is not a shield you can plan around — it is an argument someone has to win later.

**LAW — the economic development exemption.** The CPRA does not require disclosure of "corporate
financial records, corporate proprietary information including trade secrets, and information
relating to siting within the state furnished to a government agency by a private company for the
purpose of permitting the agency to work with the company in retaining, locating, or expanding a
facility within California." (Source:
[Cal. Gov. Code § 7927.605, California.Public.Law](https://california.public.law/codes/government_code_section_7927.605),
accessed 2026-09-23; formerly § 6254.15.)

> **JUDGMENT, and an important caution:** this exemption is tempting and is probably narrower than
> it looks. It is written for the case where a company is negotiating with an agency about staying,
> locating or expanding, and it hands over its financials. A corridor retention interview with a
> hardware store about rent pressure is *adjacent* to that — arguably it is exactly "information
> furnished to a government agency for the purpose of permitting the agency to work with the
> company in retaining a facility." But that is an argument, not a settled answer, and § 7927.605(b)
> expressly requires disclosure of the *incentives* an agency offers once a decision or permit
> application occurs. **Do not build the architecture on this exemption.** Raise it with counsel as
> a possible second line of defense, behind the structural moves in §6.5.

**LAW — the incorporation-by-reference exemption.** The CPRA does not require disclosure of records
whose disclosure is exempted or prohibited by federal or state law, "including, but not limited to,
provisions of the Evidence Code relating to privilege." (Source:
[Cal. Gov. Code § 7927.705, Justia](https://law.justia.com/codes/california/code-gov/title-1/division-10/part-5/chapter-13/section-7927-705/),
accessed 2026-09-23; formerly § 6254(k).) This is the hook through which the Evidence Code
§ 1060 trade secret privilege and several hundred other statutory protections reach the CPRA.
Counsel should assess whether any of them reach this material.

### 6.2 What becomes a public record when an agency receives it

**JUDGMENT, informed by the § 7920.530 definition:**

| What the agency receives | My read on public-record status | Confidence |
|---|---|---|
| The delivered report and its findings | **Public record.** Prepared for and retained by the agency, relating to the public's business. Assume it will be disclosed and write it accordingly. | High |
| Charts, indicator values, corridor-level aggregates in the report | **Public record.** Same. | High |
| A named quote in the report | **Public record**, and already published with the speaker's specific approval, so no new harm. | High |
| Emails between UpSight and agency staff about the engagement | **Public record.** Including the ones where someone speculates about a specific business. Train staff and correspondents accordingly. | High |
| A transcript file emailed to a program manager | **Public record.** Once it is in the agency's mailbox it is retained by the agency. This is the failure mode to engineer against. | High |
| Raw recordings held only in UpSight's system, which agency staff can view but not control | **Probably not a public record** — see §6.3. But this is the contested question and it is where counsel matters most. | Medium |
| Agency staff's own notes taken while viewing evidence in UpSight | **Public record.** A staffer who copies quotes into a Word doc has just created a disclosable record containing raw material. Address this in onboarding, not just in contract. | High |

### 6.3 Does raw interview material handed to an agency become disclosable?

**If it is handed over: assume yes.** A transcript delivered as a file and retained by the agency
fits the § 7920.530 definition on its face. An exemption might apply — personal privacy, the
§ 7922.000 balancing test, possibly § 7927.605 — but every one of those is an argument the agency
has to make, at its own discretion, possibly years later, possibly with a different city attorney
who does not care about our promise to Maria Ortega. **We do not control that outcome and cannot
promise anyone we do.**

**If it is never handed over, the picture is much better.**

**LAW:** In *Anderson-Barker v. Superior Court* (2019) 31 Cal.App.5th 528, the Court of Appeal held
that the City of Los Angeles's contractual right to *access* data held in private towing companies'
systems was **not** sufficient to establish constructive possession under the CPRA. A contractual
right to access data in a third party's possession does not equate to the **right to control** that
data, and treating it otherwise would "effectively transform any privately-held information that a
state or local agency has contracted to access into a disclosable public record." (Sources:
[Anderson-Barker v. Superior Court, Justia](https://law.justia.com/cases/california/court-of-appeal/2019/b285391.html);
[Burke Williams & Sorensen client alert](https://www.bwslaw.com/publications/access-to-private-entity-records-is-not-enough-to-compel-disclosure-obligations-under-the-california-public-records-act/),
both accessed 2026-09-23.)

**LAW — the counterweight.** There is authority that a private entity's records are disclosable
where an agency has **delegated a governmental function** to that entity; the classic example is a
private waste-hauler's financial records where the city contracted out trash collection. (Source:
[The People's Business: A Guide to the California Public Records Act, League of California Cities](https://www.calcities.org/docs/default-source/city-attorneys/the-people's-business.pdf),
accessed 2026-09-23.)

> **JUDGMENT — this is the most important legal consequence in the document.** *Anderson-Barker* is
> the reason the architecture works, and the delegated-function line is the reason it can be
> attacked. So the structure must do two things at once:
>
> 1. **Give the agency access without control.** View-only seats, UpSight-operated systems, UpSight
>    retention policy, UpSight's own contracts with participants. The contract should say in terms
>    that the client has no right to direct, control, dispose of, or compel production of Layer 1
>    and Layer 2 material, and that UpSight retains sole custody and control.
> 2. **Avoid looking like a delegated governmental function.** UpSight is a vendor performing
>    research and analysis on its own methodology, with its own consent relationship with
>    participants — not an outsourced arm of the agency's business-retention program, not
>    speaking for the agency, not exercising agency authority. Watch the scope of work language:
>    "Contractor shall conduct the City's business retention and expansion program" is a much worse
>    sentence for us than "Contractor shall deliver corridor research and analysis to the City."
>
> **Counsel must confirm:** whether *Anderson-Barker* survives on these facts, whether the
> delegated-function line reaches this scope of work, and whether the view-only access itself
> creates a "used or retained" problem under § 7920.530.

### 6.4 The collision with what we promised a business owner

Here is the uncomfortable center of this section. A correspondent tells a shop owner the
conversation will be handled carefully. The agency is a public body. Public records law does not
care what a private company promised a third party.

**A confidentiality promise does not create a CPRA exemption.** An agency cannot contract away
its disclosure obligations, and a vendor's assurance to a source binds the vendor, not the public.
If the record is in agency hands and no exemption applies, it goes out.

Three consequences:

1. **Never promise absolute confidentiality.** The script in §3.3 deliberately says "I'm not going
   to stand here and promise you a judge could never reach it." That sentence costs a small amount
   of rapport and buys the ability to sleep. It is also the sentence that makes the whole structure
   honest rather than a liability dressed as a promise.
2. **The architecture is the promise.** What we can actually promise is a *design*: the raw material
   never goes into agency custody; the agency receives findings; named attribution is per-sentence
   and opt-in; aggregates are suppressed below threshold. Promise the design, describe it plainly,
   and keep it.
3. **This is why the corpus position is also an ethics position.** Handing the corpus to an agency
   on demand is not just a commercial loss. It converts forty private conversations into
   disclosable public records, which is the outcome every participant was told would not happen.
   Say that out loud in the negotiation — it is the strongest version of the argument and it is
   true.

### 6.5 The six moves that reduce exposure

*Source: UpSight structuring judgment, 2026-09-23. Ordered by how much protection they buy per unit
of negotiating difficulty.*

| # | Move | What it buys | How hard to get |
|---|---|---|---|
| 1 | **Deliver findings, never files.** No transcript, recording or raw survey export is ever transmitted to the client as a file, by any channel, including "just this once for the grant officer." | Keeps the material out of agency custody entirely — the single highest-value move. | Easy, until a program manager asks nicely. Enforce in the product: no bulk export at Layer 1, for anyone. |
| 2 | **Access without control.** Named view-only seats in UpSight; UpSight owns the system, sets retention, holds the participant relationship; contract states client has no right of control or disposition over L1/L2. | Puts the arrangement inside the *Anderson-Barker* line rather than outside it. | Medium. Some counsel will want a right to compel production; see §10.B. |
| 3 | **Scope-of-work hygiene.** Describe the engagement as research and analysis delivered to the agency, not as the agency's program operated by a contractor. | Keeps distance from the delegated-function exception. | Easy if caught early in the RFP response. Nearly impossible to fix after award. |
| 4 | **Aggregation thresholds baked into the product**, per §7, so delivered outputs are already suppressed before they are public records. | Means that disclosure of a delivered output — which *will* happen — does not identify individual businesses. | Easy. Do it in the pipeline, not in review. |
| 5 | **A public-records cooperation clause** (9.7): notice to UpSight within a defined window when a request touches engagement material, UpSight supports the agency's exemption analysis at no charge, and UpSight may seek its own protective relief at its own expense. | Turns a surprise into a process, and gives UpSight standing to act before material goes out. | Medium. Agencies accept notice-and-cooperate; they resist anything that looks like a veto. Do not ask for a veto — it is unenforceable and it makes you look naive. |
| 6 | **Staff onboarding on the copy-paste problem.** Agency users are told, in writing, that anything they extract from the evidence view into their own files becomes an agency record. | Closes the largest practical leak, which is a well-meaning analyst building a spreadsheet of quotes. | Easy and usually appreciated — city attorneys like this slide. |

### 6.6 Federal pass-through money

EDA, CDBG, ARPA-descendant and state-administered federal funds are common in this lane, and they
bring their own rules that a contract between UpSight and a city cannot override.

**LAW — rights in data.** Under the Uniform Guidance, the federal agency reserves "a royalty-free,
nonexclusive, and irrevocable right to reproduce, publish, or otherwise use the work for Federal
purposes," and the Federal Government has the right to obtain, reproduce, publish or otherwise use
data produced under a federal award, and to authorize others to do so for federal purposes.
(Source: [2 CFR § 200.315, Cornell LII](https://www.law.cornell.edu/cfr/text/2/200.315), accessed
2026-09-23.)

**LAW — the FOIA research-data channel.** The same section provides that the recipient must provide
research data relating to published research findings produced under a federal award if requested
by the federal agency in response to a FOIA request. (Source: same, accessed 2026-09-23.) This is
the descendant of the Shelby Amendment and it is a genuine route by which underlying material can
be pulled into federal hands and then out through FOIA.

**LAW — access to records and retention.** Recipients and subrecipients must retain federal award
records for three years from submission of the final financial report (2 CFR § 200.334), and
federal agency and pass-through entity rights of access last as long as the records are retained,
not merely for the retention period (2 CFR § 200.337). (Sources:
[2 CFR § 200.334](https://www.law.cornell.edu/cfr/text/2/200.334),
[2 CFR § 200.337](https://www.law.cornell.edu/cfr/text/2/200.337), both Cornell LII, accessed
2026-09-23.)

**JUDGMENT — how to live with this:**

- **Ask, at qualification, whether the engagement is federally funded and under which program.**
  Put it on the intake checklist. The flow-down terms in the prime award control, and they are not
  negotiable by us or by the city.
- **Grant a direct auditor right, narrowly.** Clause 9.10 gives federal awarding agencies,
  pass-through entities, the Comptroller General and their designees a right of access to UpSight's
  relevant records for audit — **at UpSight's premises or in UpSight's systems**, rather than by
  delivering copies into agency custody. This satisfies § 200.337 without converting the corpus into
  agency-held records. Whether it fully satisfies a given awarding agency is a question for grants
  counsel.
- **Keep "research data produced under the award" as narrow as the facts allow.** Layers 4 and 5 for
  the client's own corridor are arguably produced under the award. The cross-client corpus is not
  produced under any single award and predates most of them. Say so in the contract, and keep
  cost-allocation records that support it. **Counsel must confirm this holds.**
- **Be realistic.** On a federally funded engagement, the exposure is higher and less controllable
  than on a locally funded one. That is a reason to price federal engagements differently and to
  tell participants the truth about it, not a reason to avoid them — the wedge is grant reporting,
  so federal money is the point.

---

## 7. De-identification and small numbers

In a 20-business corridor, "three businesses on this block reported X" can identify all three. In a
corridor with one hotel, "the lodging sector reports Y" identifies the hotel. This is the failure
mode that will actually hurt a real person, and it is the one most likely to be caused by us rather
than by a records request.

### 7.1 The reference points

**LAW (by analogy, not by application).** HIPAA's Safe Harbor method deems data de-identified when
18 enumerated identifiers are removed **and** the holder has no actual knowledge that the remaining
information could identify an individual. (Source:
[45 CFR § 164.514, Cornell LII](https://www.law.cornell.edu/cfr/text/45/164.514); HHS
[de-identification guidance](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html),
both accessed 2026-09-23.) **HIPAA does not apply to us.** What is worth stealing is the structure:
a mechanical rule *plus* an actual-knowledge backstop. A rule alone is not enough when the analyst
knows perfectly well which store it is.

**Practice standard.** Federal statistical agencies use threshold rules and cell suppression, with
complementary suppression of additional cells so a suppressed value cannot be recovered by
subtraction from a row or column total. (Source:
[FCSM Statistical Policy Working Paper 22, Report on Statistical Disclosure Limitation Methodology](https://nces.ed.gov/FCSM/pdf/SPWP22_rev.pdf),
accessed 2026-09-23.) Complementary suppression is the part amateurs forget and it is why
"just hide the small cells" does not work.

### 7.2 The rules

**JUDGMENT — UpSight's standard. These are proposed operating thresholds, not legal requirements.**

**R1 — Minimum cell size, n ≥ 5.** No count, percentage, average or theme prevalence is reported for
any group of fewer than 5 responding businesses. Below 5, report "fewer than 5 responses — not
reported" in the cell. Never a dash, never a blank. (House rule: undefined symbols are defects.)

**R2 — Complementary suppression.** When a cell is suppressed under R1, suppress at least one
additional cell in the same row and in the same column, chosen so that no suppressed value is
recoverable by subtraction from any reported total. If a table has only one suppressible cell,
suppress the total as well or collapse the dimension.

**R3 — Dominance.** Do not report an aggregate where a single business accounts for more than 50%
of the measure, or where two businesses together account for more than 75%, even if n ≥ 5. Common
with employment and revenue measures on a corridor with one anchor tenant. Collapse into a wider
geography or a wider category instead.

**R4 — Geographic floor.** Block-face and street-segment granularity is reported only where n ≥ 10.
Below that, roll up to corridor. Corridor-level reporting requires n ≥ 5 and R3 compliance.

**R5 — Sector floor.** Do not cross industry with geography below corridor level. "Restaurants on
the 4700 block" is almost always identifying. Report sector at corridor level or wider.

**R6 — Temporal smoothing.** Do not report a change measure (up 3, down 2) where the numerator is
below 5. Report direction in words with a stated basis: "slightly more businesses reported rent
pressure than last year (based on fewer than 5 additional responses — treat as directional only)."

**R7 — The actual-knowledge backstop.** Even where R1–R6 pass, if the analyst or correspondent
knows the cell identifies a specific business, it is suppressed. This is a required reviewer
question on every deliverable, and it is answered by a human, in writing, on the review checklist.

**R8 — Quote de-identification standard for cross-client reuse (L5).** A quote entering Layer 5 has
removed: business name, person name, street address and block, distinctive business descriptors
(the only tattoo parlor, the one with the mural), named landlords, named staff, named competitors,
the client agency's name, and any date more specific than month-and-year. Retained: sector band,
employee-count band, tenure band, corridor type, region. **A quote that cannot survive this without
losing its meaning does not enter Layer 5.** Better to lose the quote than to re-identify the
speaker.

**R9 — The re-identification test, quarterly.** Someone who was not on the project takes a published
deliverable, a public business registry and Google Maps, and tries to name businesses. Log what
they get. If they succeed, the thresholds move up and the deliverable is corrected. This is a
standing task, not an aspiration.

### 7.3 What to say on the figure itself

House rule: every chart and diagram states its source and whether the data is real or illustrative.
For this lane, add the suppression note. On every figure:

> Source: UpSight corridor research, [Corridor], [Month Year]. Base: [n] responding businesses of
> [N] contacted. Cells with fewer than 5 responses are not reported and are labeled as such.
> Real data.

And where a benchmark comparison appears:

> Benchmark: UpSight cross-corridor index, [n] corridors, [date range]. Constituent corridors are
> de-identified; no individual business appears. Real data.

---
