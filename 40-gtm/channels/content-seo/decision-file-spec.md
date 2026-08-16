# The Decision File — format spec

**Purpose:** every published file is primary research about one real decision made by one real person. This spec exists because the first sample drifted into essay form, and that drift is the single thing that would kill the strategy.

---

## The bar

A file ships only if all five are true:

1. **A real person made a real decision.** Named, or described precisely enough to be
   real (see anonymity below).
2. **There is a date and a stake.** When it happened, and what was on the line —
   dollars, headcount, a timeline, a customer.
3. **There are direct quotes.** At least three, in their words. **A file without a
   quote is an essay with headings.**
4. **There is an outcome.** What actually happened afterward. This is the field that
   makes a file worth citing, and it's the one almost nobody else publishes.
5. **It came from a conversation we ran.** Not a synthesis of someone else's article.

> **The disqualifier:** if the file could have been written without talking to
> anyone, it is not a Decision File. Publish it as a blog post or don't publish it.

### Why the bar is this high

- **Discovery only works on unique sourcing.** A synthesis of an HBR piece competes
  with HBR and loses — you cannot outrank your own source. Primary research about a
  decision nobody else has documented has no competitor.
- **It's the product proof.** The claim is that UpSight turns a conversation into
  this. If there was no conversation, the artifact contradicts the pitch.
- **It's the promise in the recruiting email.** We tell people we publish how
  operators actually made hard calls. Sophisticated readers check.

---

## The structure

Keep the skeleton from the first sample — it's good. Change what fills it.

### 1. Title
The decision, not the theme. *"Why Convoy's VP Ops Killed a Signed Vendor Contract
Three Weeks In"* — not *"When the Loudest Customer Story Wins the Room."*

### 2. 30-Second Brief
| Field | Requirement |
|---|---|
| **Who** | Name, role, company (or the anonymity form below). Forces a real subject. |
| **The decision** | The specific call, with roughly when. |
| **What was at stake** | A number wherever one exists. |
| **What they chose** | One sentence. |
| **What happened** | The outcome. **Never "this is a decision rule."** |
| **Core lesson** | One line, quotable standalone. |

### 3. The Situation
Their circumstances in their words. Opens with a quote where possible.

### 4. How They Decided
The actual process — what they checked, who they consulted, what they skipped, how
long it took. This is the heart of the file and the most-quoted section. Not a tidy
framework: the real, messy sequence.

### 5. What They'd Do Differently
Where the honesty lives, and where the best pull-quote almost always comes from.

### 6. Signals That Mattered
Generalizable patterns from this case. Fine to be analytical here — it's earned,
because sections 3–5 did the primary work first.

### 7. Unknowns
What this single case can't tell us. Frequency, representativeness, economics.
Keep this — naming the limits is a credibility signal and it's rare.

### 8. Decision Principle
The portable rule. Written to be quoted without the rest of the file.

### 9. Analyst Counterpoint
The strongest case against the subject's decision, argued properly. **This is the
most distinctive section in the format — nobody else steel-mans their own subject.**
It's what makes a file read as analysis rather than advocacy.

### 10. Methodology Note
How the subject was found, how the interview ran, how quotes were approved, and that
The Decision Files is published by UpSight. Disclosure as method, not confession.

---

## Anonymity policy — decide this before recruiting

Many of the best decisions can't be told with a name on them. Without a stated
policy, good subjects decline. Three tiers, offered explicitly in the interview:

1. **Named** — name, role, company. Strongest, always ask first.
2. **Role + shape** — *"a VP Ops at a 200-person logistics company."* Preserves
   credibility; loses the amplification.
3. **Composite** — only across 3+ interviews, **labeled as a composite on the page.**
   Never present a composite as one person.

Whichever tier: the subject approves their quotes before publication, in writing.
Say so in the recruiting email — it's a large part of why people say yes.

---

## Sourcing outside material

Secondary sources are fine as *context* inside a file built on a real interview —
"this matches what Markey found in HBR" is a strength. A file whose spine is someone
else's article is not a Decision File.

If a piece of published research is worth writing about on its own, publish it as a
clearly-labeled commentary post, in a different template, not in the Files series.

---

## Publishing mechanics

- **One URL per file.** The current sample lives at an anchor
  (`decision-files.pages.dev/#b2b-sales`). Anchors on a shared page don't get indexed
  as separate works and can't be cited individually — which defeats the entire
  discovery rationale. Each file needs its own page, title, meta description, and
  publish date.
- **Move off `pages.dev`.** A recruiting email linking to a preview domain is a
  credibility hit at exactly the wrong moment. Ship on thedecisionfiles.com.
- **Structured data.** `Article` schema with author, datePublished, and the subject's
  organization. This is how a file becomes machine-citable rather than just readable.
- **The Brief block goes near the top of the HTML** — it's the section models and
  search snippets will lift.

---

## What to do with the existing sample

Keep it, retitled and relabeled as a **commentary piece**, not a Decision File. It's
well-written and it's a fine demonstration of the house voice. It just isn't
evidence, and the series can't open with it.

**The first three real files are the site blocker.** One reads like an experiment;
three read like a publication.
