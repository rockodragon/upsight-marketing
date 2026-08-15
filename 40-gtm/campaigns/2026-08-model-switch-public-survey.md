# Campaign — "How did you actually decide?" (public survey engine, run #1)

- **Status:** proposed → awaiting Rick's go
- **Opened:** 2026-08-15 | **Owner:** Rick `[R]`, with `[I]` on production
- **Window:** Mon 2026-08-17 launch → publish the decision by Wed 2026-08-26. Hard stop.
- **Slot it consumes:** one week of Workstream 3 (`00-control/30-day-get-in-the-game-2026-07-22.md`). Week 2 returns to consultants.
- **Assets:** [`2026-08-model-switch-survey-script.md`](2026-08-model-switch-survey-script.md)

---

## The one-liner

Rick has a real decision to make — whether to move the model his work is built
on. Instead of deciding privately, he runs the decision **in public, through
UpSight**: a broad public ask plus 6–10 named interviews with practitioners he
respects, synthesized into themes, ending in a published decision with receipts.

The product demo is not a screenshot of a survey. **The demo is a decision that
got made, and the evidence trail behind it.**

## Why this and why now

- **Real stakes are the whole asset.** A public survey with nothing riding on it
  reads as a stunt. This one ends in a call Rick actually has to live with. That
  is not fakeable and no competitor's demo has it.
- **Distribution is free.** Model-switching is the highest-velocity topic in the
  space right now. Respondents come to us; a consultant survey has to be dragged
  into existence. Same lift, far more reach.
- **It clears capture debt.** Assets **F** (dogfood clip) and **G** (Survey VSL)
  are both blocked on real footage — a real Personalized Ask, a real AI-interviewer
  follow-up, a real theme view with a real N (`40-gtm/outbound/video-explainer-plan.md` §3).
  This campaign *is* that shoot. One week of running it unblocks two assets.
- **It probes a live open question.** `00-control/open-questions.md` (2026-06-01)
  still asks whether agent-builders are a real ICP. This gives a cheap read on
  that without a separate research project — see the ICP guardrail below.

## The design call that makes or breaks it

**Do not name Claude or OpenAI in the public question.**

| If we name the vendors | If we ask about the decision |
|---|---|
| We get a tribal poll — people perform loyalty in public | We get decision processes: what they ran, what it cost, what tipped it |
| Respondents skew to people with a favorite (devs, AI-Twitter) | Respondents skew to people who **make and defend build decisions** — thick with fractional CTOs, technical consultants, agency leads |
| Output is "58% prefer X" — decays in weeks, and isn't ours | Output is a decision framework with named reasoning attached — 6-month shelf life, ours |
| Rick's own leaning contaminates every answer | Rick's leaning stays private until publication, so the data is clean |

The vendor names come out **in the answers anyway**. That means we can report the
split honestly without having framed it — better data *and* better content.

## Shape — two tiers, deliberately cheap

**Tier 1 — the public ask (breadth).**
One question, posted to LinkedIn + X, live 72 hours, answered through UpSight (not
a poll widget — the point is that it's our survey). Target **25–40 responses**.

**Tier 2 — named interviews (credibility + amplification).**
6–10 practitioners Rick actually respects, each on a 12–15 min conversational
interview through UpSight. These are the "who else is switching, and what are they
saying" half of the idea. Named people are both the credibility *and* the
distribution — they share the piece that quotes them.

Recruit Tier 2 partly **out of Tier 1** (Q8 in the script asks whose read they
trust — that's a snowball recruiting list handed to us by respondents).

## ICP guardrail — the cost, and how we cap it

This is off-lane. ICP is locked as consultants / fractional operators and that
stays locked. Three guardrails so this doesn't quietly become a pivot:

1. **One week, one slot.** Week 2 of Workstream 3 goes back to a consultant
   question. This is not a new channel and not an ICP re-debate.
2. **Tag every respondent on the way in.** Consultant / fractional / agency /
   in-house / other, stored on the person in UpSight. The **% that come back
   consultant-or-adjacent is a real read on the agent-builder ICP question** —
   free, from a campaign we were running anyway.
3. **Route the tagged ones.** Every consultant-adjacent respondent goes into
   template #3 (survey-respondent) in `40-gtm/outbound/templates.md` — the
   strongest template we have, and this campaign generates its raw material.

If the tagged share comes back thin, that's a genuine answer to a question that's
been open since June, and it cost us one week.

## Production plan

| Day | `[R]` Rick | `[I]` Intern |
|---|---|---|
| Mon 8/17 | Post the public ask. DM the Tier-2 shortlist (aim 12 asks → 6–10 yes). | Build the respondent tracker in UpSight; tag schema ready. |
| Tue–Thu | Run 6–10 named interviews. Screen-capture **every** one — this is the footage. | DM every Tier-1 respondent a thank-you → soft call invite. Tag as they land. |
| Fri 8/21 | Close the public ask. Sit with the synthesis in UpSight. | Pull the theme view + clips; cut asset **F** from the real result. |
| Mon 8/24 | Write the decision post. | Cut the Tier-2 pull-quotes into a named-practitioner card set. |
| Wed 8/26 | **Publish the decision + the receipts.** | Push respondents into template #3. |

**Do not build product for this.** Ship on what exists today. The clip-evidence
gap (`UpSight-n6f0`) is known — lean on the interviewer, the media responses, and
the synthesis, exactly as the 30-day plan already says.

## The publication — what actually goes out

Not a chart. A decision, in this order:

1. The decision, stated plainly, in the first two lines.
2. What was at stake — what's built on it, what switching would have cost.
3. What N people said — the two or three themes UpSight surfaced, each with a
   real quote and a name where we have permission.
4. **The quote that changed my mind.** One. Named. This is the emotional peak.
5. What I'm doing, and what would make me revisit.
6. Soft CTA — the mechanism, one line: *"every answer above is a receipt in
   UpSight — that clustering is the product."*

Named practitioners get the piece before it goes live. Non-negotiable.

## Metrics

| Metric | Target | Why |
|---|---|---|
| Named practitioners interviewed on record | **≥6** | The credibility asset. If this is <4, the piece has no spine. |
| Public responses | 25–40 | Enough for real clustering; more is vanity. |
| Respondents → booked calls | **≥5** | The only number that touches the 30-day one-number. |
| % respondents tagged consultant/fractional/agency | *measure, no target* | The ICP read. |
| Real footage captured for assets F + G | Both unblocked | The durable output even if reach disappoints. |
| Decision published | by 8/26 | Late is dead. Model-timing content decays fast. |

## Kill criteria

- **<15 public responses at 72h** → cut Tier 1. Publish the named interviews alone
  as a short piece and go back to the consultant lane. Do not extend the window.
- **<4 named yeses by Tue** → the "people I respect" premise isn't there. Kill the
  campaign, keep the interviews as private decision input.
- **Slips past 8/26** → publish whatever exists and stop. Do not let it eat week 2.

## Risks

- **Reads as bandwagoning.** Mitigated entirely by ending in a real decision — the
  thing nobody else in that conversation does. If Rick isn't prepared to publish an
  actual call, don't run this.
- **Wrong-audience respondent list.** Accepted and capped above. Reach is the
  by-product; the footage and the named interviews are the deliverable.
- **Rick's leaning leaks and poisons the responses.** Rule: the leaning is not
  stated anywhere — post, DMs, or interviews — until the publication.
- **Timing decay.** The 10-day box is the mitigation. Enforce it.

## Learning graduates to

- Findings on how technical buyers decide → `20-research/voice-of-customer/`.
- The ICP read (consultant-adjacent share) → closes or sharpens the 2026-06-01
  agent-builder question in `00-control/open-questions.md`.
- Whether the public-survey motion produces booked calls at all → this is run #1
  of Workstream 3; the answer sets whether the weekly slot survives the 30 days.
