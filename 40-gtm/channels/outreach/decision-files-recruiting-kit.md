# The Decision Files — research recruiting kit

**Owner:** `[I]` intern recruits · `[R]` Rick interviews and closes
**Status:** ready to run once the site prerequisites are met (`30-strategy/public-survey-engine-strategy.md`)

> This replaces product cold email as our opening move. We do not ask strangers for
> a meeting. We ask experts for their expertise.

---

## The one rule

**The recruiter never sells.** Not a soft pitch, not "by the way we also build a
tool," not a link to the product. The ask is the interview, full stop. The moment a
recruiting email smells like lead gen, the whole motion loses the thing that makes
it work — and the person tells their peers.

UpSight comes up in exactly one place: the live walkthrough at the end, with someone
who has already given us an hour. Nowhere else.

---

## Email 1 — cold recruit

**Subject:** your call on [specific decision] — 15 min for The Decision Files?

> Hi {{first_name}},
>
> [PERSONALIZE — one real, specific line: a decision they've publicly discussed, a
> role change, something they wrote. If you can't fill this with something real,
> don't send it.]
>
> I run The Decision Files — we publish how experienced operators actually made hard
> calls: what the situation was, what they weighed, how they decided, and how it
> actually turned out. Not opinion pieces. One decision, told properly.
>
> I'd like to interview you about [the specific decision]. Fifteen minutes, and I
> hard-stop at fifteen. You'd approve anything I quote before it runs, and I'll send
> you the finished file first.
>
> Worth 15 minutes in the next two weeks?
>
> Rick Moy
> The Decision Files

**Why this converts:** the ask is their expertise, not their budget. It's finite and
specific. Approval rights remove the risk. And the byline does work a product email
can't — *"I run a research publication"* is a different social position than *"I sell
software."*

---

## Email 2 — warm / referral

**Subject:** {{referrer}} suggested you for The Decision Files

> Hi {{first_name}},
>
> {{referrer}} mentioned you were the one who [PERSONALIZE — the specific call they
> made] and said it'd make a good file.
>
> The Decision Files publishes how operators actually made hard decisions —
> situation, what was at stake, how they decided, how it went. Fifteen minutes,
> hard-stopped, you approve anything I quote.
>
> Any interest?

---

## Email 3 — snowball (from an interview)

Sent same-day after an interview, to a name the subject gave us.

**Subject:** {{subject_name}} pointed me your way

> Hi {{first_name}},
>
> I interviewed {{subject_name}} last week for The Decision Files — we publish how
> operators actually made hard calls. When I asked whose judgment they trust on
> [topic], your name came up.
>
> Same ask: 15 minutes, hard-stopped, you approve anything I quote. Interested?

*This is the highest-converting email in the kit. Always ask for the names, always
send it inside 48 hours while the referral is warm.*

---

## Email 4 — the report re-engagement

For everyone who ignored the first ask, sent after a cycle publishes.

**Subject:** the piece ran — here's what your peers said

> Hi {{first_name}},
>
> You didn't take me up on this, which is fair — but 30 of your peers did, and the
> piece is out: [link].
>
> The short version: [one genuinely interesting finding, stated plainly].
>
> Still open to 15 minutes if you'd want to be in the next one.

---

## The intern's job, week by week

| Week | What `[I]` does |
|---|---|
| 1 | Build/refresh the list. Send 30 recruiting asks (Email 1 + 2). Log every person in UpSight. |
| 2 | Chase yeses into booked calendar slots. Send Email 3 for every name Rick collects. |
| 3 | Keep booking. Schedule the **live walkthroughs** for week 4. Pull themes + clips. |
| 4 | Send Email 4 to the non-responders. Log outcomes. Prep the next cycle's list. |

**Daily rhythm:** ~10 personalized asks, not 30 blasted. One real hook each — the
same hard rule as `templates.md`. If the personalization line can't be filled with
something real, that person doesn't get an email today.

---

## Handling replies

| Reply | What to do |
|---|---|
| **Yes** | Book it inside 7 days. Send the calendar hold immediately with the three questions we'll cover, so they can think. Never send a long prep doc. |
| **"What is this / who are you?"** | One short reply: the publication, the format, the founder's background (empirical research firm, 2007, nearly acquired by Gartner), a link to a published file. Do not mention UpSight. |
| **"Not now, ask me later"** | Real yes with a date on it. Log in UpSight with a follow-up for the next cycle. These convert well. |
| **"No thanks, but here's my quick take"** | **This is evidence — log it.** Thank them, ask if you can quote the take, and add them to the report list. Many become yeses at cycle 2. |
| **Hard no** | Thank them, remove them, don't re-ask. |
| **"Are you selling something?"** | Answer honestly and briefly: *"The Decision Files is published by UpSight — I built it, and the research is how I learn. No pitch attached to this; the interview is the ask."* Then let it go. Honesty here is why the motion survives. |

---

## The handoff to Rick

`[I]` hands over a booked slot plus a one-page brief: who they are, the decision
we're asking about, the real hook used, anything they said in the reply thread.
Generate it with `generate_pre_meeting_brief` in UpSight — dogfood it.

`[R]` runs the interview, and **owns the two things that can't be delegated:** asking
for the referral names at the end, and doing the live walkthrough.

---

## Tracking — all of it in UpSight

Every person recruited is a person record. Tag: `df-recruit`, plus the cycle and the
outcome (`asked` / `yes` / `interviewed` / `walkthrough` / `not-now` / `no`).

**Numbers to watch per cycle:**

| Metric | Target |
|---|---|
| Asks sent | 30 |
| Interview yeses | ≥10 |
| Interviews completed | ≥8 |
| Live walkthroughs done | ≥6 |
| → second meeting / real sales conversation | **≥4** |

The last row is the only one that touches revenue. If walkthroughs are happening and
second meetings aren't, the problem is the walkthrough, not the recruiting — fix
that before sending more asks.
