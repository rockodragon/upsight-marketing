---
title: Nessa Run Sheet — Start Here (daily structure + only the docs you need)
date: 2026-06-09
status: active
owner: rick
audience: Nessa (GTM intern) — THIS is your home doc; ignore the rest of the vault for now
tags: [ops, outreach, onboarding, run-sheet, nessa]
---

# Nessa Run Sheet — Start Here

> **Read this doc, not the whole vault.** The strategy folders (`30-strategy/…`) are background
> for Rick — you do **not** need them to do great work. Everything you need is below or linked here.
> When in doubt, do the next thing on today's checklist and ask Rick if blocked.

---

## Your mission (in two sentences)
You're running a **research-led outreach** program: become part of the communities where founders and
event organizers hang out, talk to people about how they work, capture what they say, and flag the warm ones.

**The honest thing you're offering — your North Star:** we're doing research on how people track and
follow up with customers (and how organizers handle attendee & sponsor feedback), so we can understand
them better — and we'll **write a short research report and share it back with the community.** That
shared report is the reason we're having these conversations, and it's the thing you can always offer
people: *"I'll send you the findings."* The research is genuinely useful; leads are the byproduct.
(Doc 5 shows exactly what that report looks like.)

---

## The motion (the whole play on one screen)

```mermaid
flowchart TD
    A[Be in the communities<br/>read - like - comment - earn the right]
    B[Make the research offer<br/>we will share a short report back]
    C{They engage?}
    D[Short survey - 90 sec]
    E[15-min research chat]
    F[Tag in UpSight]
    G[A - Hot<br/>fits and wants more]
    H[B - Nurture<br/>maybe or lukewarm]
    I[C - Research<br/>not now]
    J[Hand to Rick in 24h]
    M[Rick: free-read demo<br/>warm / slipping / blocking on their data]
    N[Trial UpSight]
    O[Paying customer]
    K[Nurture - re-offer in 2-3 weeks]
    L[Mine best quotes for copy]
    R[Short research report<br/>shared back to everyone]

    A --> B --> C
    C -->|prefers async| D
    C -->|prefers to talk| E
    D --> F
    E --> F
    F --> G
    F --> H
    F --> I
    G --> J --> M --> N --> O
    H --> K
    I --> L
    D --> R
    E --> R
    R -.->|delivers the promise| A

    classDef hot fill:#ffe3e3,stroke:#e03131,color:#000;
    classDef win fill:#d3f9d8,stroke:#2f9e44,color:#000;
    classDef report fill:#e7f5ff,stroke:#1971c2,color:#000;
    class G,J,M,N hot;
    class O win;
    class R report;
```

> Nessa owns the top (community → research → survey/chat → tag). Rick takes the hot ones from the
> handoff down: **free-read demo on their own data → trial → paying customer** (green). The report
> (blue) loops back and keeps you welcome in the community next time.

---

## The funnels — three paths, one motion

We run three funnels at once. **Cold is the floor; warm seeds are the engine; the report makes it
compound.** And on the *research* goal, nearly every conversation is a win no matter who buys.
All numbers illustrative; trial→paid is an industry estimate, not a promise.

### Funnel A — the floor: cold / community path  ·  ~1 customer per 100

```mermaid
flowchart TD
    S1[100 community-warmed touches]
    S2[~15 replies<br/>12-20%]
    S3[~8 agree to survey or chat<br/>~50% of replies]
    S4[~6 complete<br/>~70%]
    S5[~3 Segment A - yes to call<br/>25-45% of completers]
    S6[~1-2 free-read demos<br/>~50% of A graduate]
    S7[~1 trial]
    S8[~0-1 paying customer<br/>trial to paid ~20-30%]

    S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> S7 --> S8

    classDef top fill:#fff3bf,stroke:#f08c00,color:#000;
    classDef win fill:#d3f9d8,stroke:#2f9e44,color:#000;
    class S1,S2,S3,S4 top;
    class S8 win;
```

> This is the **floor**, not the expected case — cold always converts low. It's still worth running
> because the wide top (yellow) is where the research + quotes come from.

### Funnel B — the engine: warm seeds + referrals  ·  ~1 customer per 20  ·  START HERE

```mermaid
flowchart TD
    W1[20 warm seeds<br/>Rick intros + referrals]
    W2[~10-12 research chats<br/>~55% - warm = high yes]
    W3[~5 Segment A<br/>~45% of chats]
    W4[~2-3 free-read demos]
    W5[~1-2 trials]
    W6[~1 paying customer<br/>1 per ~20 seeds]

    W1 --> W2 --> W3 --> W4 --> W5 --> W6

    classDef warm fill:#fff3bf,stroke:#f08c00,color:#000;
    classDef win fill:#d3f9d8,stroke:#2f9e44,color:#000;
    class W1,W2 warm;
    class W6 win;
```

> Same motion, **~5× the conversion** — warm people say yes far more often. This is why Rick's seed
> list is the single biggest lever, and why you always work seeds before cold.

### Funnel C — the flywheel: the report makes it compound

```mermaid
flowchart LR
    P1[Run research<br/>chats + surveys]
    P2[Publish short<br/>benchmark report]
    P3[Inbound: downloads,<br/>signups, replies]
    P4[Warmer community<br/>+ credibility]
    P5[Next batch<br/>converts higher]

    P1 --> P2 --> P3 --> P4 --> P5 --> P1

    classDef fly fill:#e7f5ff,stroke:#1971c2,color:#000;
    class P1,P2,P3,P4,P5 fly;
```

> Cold and warm both *grind* — the report makes them **compound.** Each round produces a report; the
> report pulls inbound and warms the community, so every following batch starts warmer.

### The yield that doesn't depend on anyone buying
> ~**100% of conversations** produce a usable quote or insight. Even a zero-customer week moves the real
> near-term goal — understanding the customer — forward. **Conversations and quotes are the win you control.**

## This week's focus: **60% founders / 40% event organizers**
Two tracks. Spend more time on founders. Pick which track a given block is for and stick to it.

---

## The ONLY docs you need

| When | Doc | What it gives you |
|---|---|---|
| Daily | **This run sheet** | Your tasks + rhythm |
| Founders track | `research-led-leadgen-founder-spreadsheet-2026-06-09.md` → **Outreach copy** + **Short survey** sections only | What to send + the survey |
| Events track | `nessa-event-organizer-leadgen-2026-06-09.md` → **Outreach copy** + **Short survey** sections only | What to send + the survey |
| When someone's interested | `nessa-outreach-kit-2026-06-03.md` → **Talk track** + the **free-read offer** | How to run the chat + the next offer |
| When responses come in | `assets/collateral/research-benchmark-report-template.md` | The report you promised them |

> You can ignore everything else in the repo. If a doc isn't in this table, you don't need it this week.

---

## Daily rhythm (basically the same every day)

Work in this order, every session:

1. **Be in the communities — read, like, comment (do this first).** Before any names or messages,
   spend real time in the forums and groups (founders: StartupSD / r/SaaS / Lenny's; events:
   #eventprofs / event groups). Read posts, like, leave genuine comments, get a feel for how each
   community talks. You're becoming a familiar face and **earning the right** to ask. This comes
   before everything else — no links, no selling.
2. **Work the warm seeds.** Once Rick has added names to the **Seed research list** (in each track's
   doc), reach out to the top unworked person, or follow up on one you've already messaged.
3. **Make the research offer.** When you've earned it, share what we're doing — honestly:
   *"We're doing research on how people track and follow up with customers, to understand them better.
   We'll write up a short research report and share it back. Could I get your take?"* Use the
   **Outreach copy** for today's track; personalize the first line (prove you looked). Stop on reply.
4. **Run / book chats (rolling).** Anyone who says yes → book or run the 15-min chat. Use the **Talk track**
   doc. Always close by confirming you'll send them the findings. Tag them in UpSight after (see below).
5. **Log it.** Fill today's row in your log (template at the bottom). Drop questions for Rick in there.

**Daily goals:** keep growing your presence in the communities · work several warm seeds · make a
healthy batch of genuine, personalized asks · keep your chat calendar filling. Quality beats raw count —
a day with 2 great chats and a dozen real interactions beats 30 rushed messages.

---

## Weekly rhythm
You do basically the same thing every day — no day-specific to-do list. Just keep the rhythm going,
and we review at the end of the week.

- **Touch base with Rick: Monday, Wednesday, Friday.** Quick check-ins — what's working, what's stuck,
  any warm ones to hand off.
- **End of week:** a short recap → *people reached / chats done / best quotes you heard / what's stuck.*
  We'll look at it together and adjust for next week.

---

## After every chat — tag in UpSight
Put the person in UpSight and tag their segment:
- **A — hot:** fits the profile + said yes to more → tell Rick within 24h (he runs the next step).
- **B — nurture:** lukewarm / "maybe" → note it, follow up in 2–3 weeks.
- **C — research:** not interested in a call → still grab their best quote.

> You don't sell or demo. You research, flag the hot ones, and hand them to Rick. That's the job.

---

## When to ask Rick (don't stay stuck)
- Can't find people to message → ask Rick for warm intros / seed names.
- Someone replied with a hard question about the product → hand to Rick, don't improvise.
- A message keeps getting no replies → bring it Friday, we'll rewrite it together.
- **Rule: stuck more than ~30 min on the same thing → ping Rick.** Don't burn an afternoon stuck.

---

## Your daily log (copy this row each day)

| Date | Track (F/E) | Touches sent | Replies | Chats booked/done | Best quote you heard | Stuck on / Q for Rick |
|------|-------------|--------------|---------|-------------------|----------------------|-----------------------|
|  |  |  |  |  |  |  |

> Keep it here or wherever Rick wants. The "best quote" column matters — those quotes become our marketing.

---

## What good looks like

**Each week**
- **5–8 real research chats** done.
- Several people tagged **Segment A** and handed to Rick.
- **12+ real quotes** about how people actually work, captured in your log.

**By end of week 2**
- **15–20 conversations** across both tracks.
- A steady handful of Segment A leads in Rick's hands.
- You understand the customer better than when you started — that's the real deliverable.

It is **not** about volume of messages — it's about real conversations and real quotes.
