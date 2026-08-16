# Interview guide — File 1: which AI models and harnesses to standardise on

**Length:** 15 minutes, hard stop. **Format:** UpSight conversational interview, their choice of voice/video/chat.
**Who:** whoever actually made or dodged the call — CTO, VP/Head of Engineering, Director of Platform or DevEx, or a COO at a smaller company.

> **Rule: ask what they did, never what they'd recommend.** The internet is full of
> recommendations. Nobody has published what people actually checked.

---

## Who to talk to — the filter

**The qualifier: they manage enough engineers that "everyone picks their own" stopped working.**
Below roughly ten engineers there is no standardisation problem, so there's no decision to
study.

**Titles:** CTO · VP/Head/Director of Engineering · Director of Platform, DevEx or Developer
Productivity · COO at companies under ~150 people.

**Company size:** 50–500. Big enough to need a standard, small enough that one identifiable
person made the call.

**LinkedIn search string:**
```
("CTO" OR "VP Engineering" OR "Head of Engineering" OR "Director of Engineering"
 OR "Head of Platform" OR "Developer Experience")
AND ("San Diego" OR "San Francisco Bay Area")
```
Then filter: company headcount 51–500 · posted in the last 90 days · 2nd degree or closer.

**The signal that beats any title filter:** someone who has *posted about rolling out* Copilot,
Cursor, Claude Code, or an internal AI platform. They've already shown they'll talk about it
publicly, which is most of the recruiting problem solved.

**Exclude:** solo developers and consultants (no standardisation problem) · AI influencers
(opinions, not decisions) · anyone at a model or tool vendor (they're the buyer for this
research, not a subject).

**Where to find them locally:** EvoNexus portfolio CTOs · CONNECT members · Rady/UCSD alumni
founders · SD Tech Scene meetups. Bay Area: warm intros only — cold outreach there is noise.

---

## Introduction

> Thanks for the time. Quick context: every engineering team I know is running three or four AI
> models and tools at once, and at some point somebody has to decide what the company actually
> standardises on. I'm interviewing a dozen people who've made that call — or deliberately
> haven't — and publishing what people actually checked.
>
> No right answers, and I'm not testing you. I want how it really went, messy parts included.
> Fifteen minutes and I'll stop at fifteen. You'll see anything I quote before it runs.

---

## Section 1 — What's actually running

### Q1
> What are your engineers using right now? Not what's approved — what's actually running.

*Gets the real state before any story forms. Expect a longer list than they expected to say.*
*Follow-ups: "How many of those are paid for?" · "Which one would cause the most complaints if you switched it off tomorrow?"*

### Q2
> How did each of those get in?

*Separates bottom-up sprawl from a decision. Often the honest answer is "nobody decided, it just happened," which is itself the finding.*

---

## Section 2 — The decision

### Q3
> Was there a moment where somebody said "we need to pick one"? What set that off?

*The trigger. Expect cost, a security review, an incident, or a new exec.*
*Follow-ups: "Roughly when?" · "Was that you, or was someone pushing?"*

### Q4 — **the core question**
> What did you actually check before you committed?

*This is the left-hand column of the diagram. Plain word "check" on purpose — invites a list of real actions, not a framework.*
*Follow-ups: "What did you look at first?" · "Did you write any of it down?" · "What did you take someone's word for instead of testing?" · "How long did it take, start to finish?"*

### Q5
> Who else had to be OK with it?

*The decision unit — security, finance, legal, the loudest staff engineer. Also tells us who else to interview.*

---

## Section 3 — The gap (this is the diagram)

### Q6
> Of the things you checked, which ones actually separated the options?

*The right-hand column. Expect most to separate nobody — benchmarks and context windows are usually table stakes.*

### Q7 — **the finding**
> What ended up mattering that wasn't on your list at all?

*Where the story lives. Expect switching cost, what the team already knew, data handling, or one person's preference.*

### Q8
> Was any of it a partial yes — it worked, but with a limit? Or only if you paid more?

*Feeds the four-state matrix. People don't volunteer "partly" unless asked; they round to yes or no.*

---

## Section 4 — Money

### Q9
> What are you spending on this, and what does the extra buy you over the cheapest option?

*Feeds the cost diagram. The second half is the sharp part — it forces them to name what the premium is actually for.*
*Follow-ups: "Per seat, per token, or a flat deal?" · "Anything that came in above what you budgeted?"*

---

## Section 5 — What happened

### Q10
> Since you decided — what got better, and what broke?

*The outcome. Without this it isn't a Decision File.*
*Follow-ups: "Did anyone route around the decision?" · "Has usage held up or drifted?"*

### Q11
> Knowing what you know now, what would you check first next time?

*The most quotable question in the set. Sit in the silence — the first answer is the polite one.*

---

## Section 6 — Sources

### Q12
> Whose judgment do you actually trust on this? Not the loudest — who you'd call.

*Maps where this audience gets information, and produces the next round of recruits.*
*Follow-up: "Would you introduce me?"*

---

## Close

> That's everything. Anything I should have asked and didn't?

Then: thank them · ask for quote approval and a clip · **offer the synthesis before publication**
(this is why they said yes) · and only if they've leaned in: *"this all ran through the tool I
build — want to see what it did with yours?"*

---

## Interviewer notes

**If you're at minute ten**, drop Q2 and Q9 and go straight to Q7, Q11, Q12. Ending on time is
what earns the second conversation.

**Listen for:**
- **"Nobody really decided."** Common and valuable. Don't let them tidy it into a process.
- **The gap between the stated reason and the real one.** The defensible answer comes first
  ("benchmarks, cost per token"); the real one arrives around minute eleven ("honestly, half the
  team already knew it").
- **Anyone who evaluated and deliberately didn't standardise.** Rarest and most useful — the
  whole public conversation is switchers.

**Traps:**
- **Vendor-speak.** If they start pitching a tool, steer back with *"what did you actually run?"*
- **Recency.** Whatever launched last month will dominate. Q3 anchors to a dated event first.
- **Your own leaning.** Say nothing about what you use until after publication.
