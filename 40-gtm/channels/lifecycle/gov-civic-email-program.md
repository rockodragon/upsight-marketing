---
title: Government & Civic Email Program
date: 2026-09-17
status: proposed — not decided yet, see section 0
owner: rick
tags: [email, lifecycle, gov, civic, public-sector, outbound, publication]
governed-by: 00-control/decisions.md 2026-08-15 (publication first, research recruiting as the sales motion)
tension-with: 20-research/market-intel/deliberative-intelligence-market.md (civic rated a poor first GTM)
---

# Government & Civic Email Program

Who this is for: the staff at public agencies who have to collect public input and then
answer for what they did with it. Not elected officials, not IT, not procurement.

The plan in one line: don't try to sell government agencies over email. Build an audience
of them around a publication that analyzes public comment records, and sell a few small
paid readouts to the people who reply.

---

## 0. Two things this has to square with

### Our own research said civic is a bad first market

`20-research/market-intel/deliberative-intelligence-market.md` from June scores civic
engagement as "real but slow," 6 to 24 month cycles, "strategically aligned, poor first
GTM." It says treat it as a later vertical unless we have a strong distribution partner or
an anchor customer.

That's right about selling to them. It says nothing about building an audience among them,
and the two have very different economics:

| | Selling (what June ruled out) | Building an audience (this plan) |
|---|---|---|
| What you count | Meetings booked | Named people on a list |
| Cost of being wrong | A quarter | An afternoon |
| Blocked by procurement | Yes, 6 to 24 months | No. Reading an email needs no PO |
| Value if it's slow | Goes to zero | Keeps accruing |
| What you're closing | Demo, RFP, contract | A paid readout under the card limit (section 6) |

June's own caveat was "unless there's a distribution partner or an anchor customer."
Building an audience is how you get one.

Cap this at one day a week. It's a second lane. Security stays the main one.

### We decided to stop cold product email

From `decisions.md`, 2026-08-15: cold product email asks a stranger for a meeting from a
position of needing something, while a research interview asks an expert for their
expertise and produces the same conversation.

That decision helps here rather than getting in the way, and the research-ask actually
works better in government than in private companies:

The source material is free. Comment dockets, engagement reports, meeting minutes and staff
reports are all public record. We can analyze a real agency's real data without asking
anyone or waiting for a customer.

Peer proof is what moves them. Nobody in government cares what a vendor claims. They care
which agency like theirs has done this and what happened. That's a publication output, not
a sales output.

Being cited helps their career. Public engagement is a credentialed profession, with IAP2's
CP3 and MCP3 designations [S]. "Can I interview you for something I'm publishing" lands
differently on someone whose standing comes from being recognized for their practice.

Everything you send them is a public record. Vendor email to a public employee about public
business is generally disclosable [S]. That rules out the usual outbound tricks, which
suits us, because plain useful email is what we'd send anyway.

So: same machine as The Decision Files, pointed at a market where the raw data is free.

---

## 1. What email actually does here

Normal B2B email assumes send, interest, meeting, deal. That breaks at step three in
government, because the person with the problem usually can't buy and the person who can
buy doesn't have the problem. So don't optimize for it.

Here's what email does instead, roughly in order of value.

**It gets forwarded.** Agency staff forward useful things constantly, across departments and
through association listservs. One good artifact probably reaches five to twenty people per
send [E]. So write every email to survive being forwarded: no "hi {{first}}" that looks
stupid on a forward, no gated links, nothing that says "just for you."

**It builds a list that outlasts the buying cycle.** A 24 month cycle only hurts if you're
paying for attention the whole time. If they subscribed, it costs you one email a month.

**It puts you in the room before the RFP is written.** Agency RFP requirements usually get
drafted by the same staff who read your newsletter, often by borrowing language from
whatever they read last on the subject. This is the most valuable thing on this page and
almost nobody aims at it.

**It produces interviews, which make the publication, which grows the list.**

It won't book demos. Don't measure it that way. Kill criteria are in section 9.

---

## 2. Who to target

The person you want is whoever has to write the summary that goes to council. Not the
director who signs it, not the clerk who posts it.

### Tier 1, the list you actually build

| Title | Agency type | Why they open it |
|---|---|---|
| Public Engagement / Public Involvement Manager | City, county, transit, MPO | It's their job title, and they have almost no peer benchmarks |
| Communications / Public Information Officer | City, county, special district | In small agencies they own the comment period |
| Long-range or Comprehensive Planner | City and county planning | General plan updates draw the biggest comment volumes |
| Environmental / NEPA coordinator | Transit, DOT, utility, federal field office | Comment response is a legal deliverable |
| Research or Evaluation analyst | Large cities, state agencies, health departments | Already doing this synthesis by hand |
| Engagement consultant | Private firms working for agencies | Buys fast, no procurement, brings 5 to 15 agencies with them |

Don't skip the consultants. The firms doing public involvement for agencies are the ones
buying Darzin, Jambo and Consultation Manager (see
`20-research/market-intel/Competitors/consulting-adjacent/`). They have the same problem,
they can sign, they decide in about two weeks, and each one has a portfolio of agency
clients. They may well be the distribution partner June said this market needed.

### Tier 2, aware but not marketed to

City Manager, Assistant City Manager, Planning Director, Chief of Staff, Transit GM. They
get the forwards. They don't subscribe. Write for Tier 1 in a way Tier 2 won't wince at.

### Tier 3, skip for now

Elected officials, IT, procurement, state CDOs. They show up at contract time.

### Agency types, best first

1. **Mid-size cities, 100K to 750K population.** Real comment volume, real staff, small
   purchase authority, no giant procurement office. Start here.
2. **Transit agencies and MPOs.** Federally driven engagement requirements, recurring plan
   cycles, actual engagement staff.
3. **Counties.** Health, parks and planning each run their own comment periods.
4. **Special districts** (water, air, parks). Small, underserved, quick decisions, thin budgets.
5. **State agencies.** More money, much slower. Year two.
6. **Federal.** Only for credibility through the publication. Not a revenue target this year.

---

## 3. What to publish

The test for anything we write: could a public engagement manager use this in a meeting next
Tuesday, and would they be a little annoyed they didn't already have it?

### The main thing: take apart a real comment docket

Pick a closed public comment docket from a real agency. Run it through UpSight. Publish the
analysis with the quotes behind it. One a month.

Same format every time:

1. What the record actually contained. Themes, ranked, with counts.
2. Where the public agreed and where it split. The agreement and disagreement map. This is
   the thing our architecture does that others don't, and nobody in this market publishes it.
3. Which groups drove which theme. The segment by theme matrix.
4. What the official summary carried through and what it didn't. Written as a method
   observation, never as a gotcha.
5. How it was done, in enough detail that someone could repeat it by hand.
6. Links from every theme back to the actual comment in the public record.

Why nobody else does this: consultants do the same work privately for five figures, and
vendors publish "AI for public comment" articles that contain no actual analysis. As far as
I can tell, nobody publishes the finished analysis of a real docket for free with the
receipts attached. Check that before the first one publishes. If someone is already doing
it, adapt rather than find out in public.

Why a reader can use it immediately: it's a benchmark (this is what 4,000 comments look like
when someone actually reads them), a method they can copy, and an argument they can put in
a budget request.

Why it's cheap for us: the input is free, we don't need anyone's permission, and the
teardown doubles as the product demo.

Rules for doing it without wrecking the relationship:

- Write about what the record contained, not about what the agency should have done. One
  public embarrassment and this whole market closes to us. They all talk to each other.
- Send the agency the analysis before it publishes and offer to fix anything we got wrong.
  It's the right thing to do and it's also the warmest introduction available to us
  (track 2, section 5).
- Prefer dockets where the agency comes off as competent. The story is the method.
- On the piece itself, say which numbers come from the public record and which we computed.

### Four things to write once and mail forever

| Asset | What it does for them | Why they can't get it now |
|---|---|---|
| A council-ready comment synthesis memo template: themes, dissent, evidence IDs, what changed as a result | It's the document they have to produce anyway and mostly rebuild from scratch each time | Every agency reinvents it. There's no standard |
| A "did we actually listen" defensibility checklist | Engagement records get challenged on appeal, in court, and at the podium | It's legal-adjacent, so nobody gives it away |
| Engagement method cards: one per technique, when to use it, real cost, who it oversamples | Picking the method is the job, and the oversampling column is what makes it honest | Vendor content never admits what its own channel gets wrong |
| A peer benchmark table: what N comment periods looked like, volume, channels, response rates, cost | Answers the only question their director asks, which is what agencies like us do | Somebody has to assemble public data nobody has bothered to assemble |

The benchmark table is the one that compounds. Every teardown adds a row. By month six it's
a dataset nobody else has, built entirely from public records, and it's what gets cited.

### What not to write

Nothing with "AI-powered" in the headline. This audience's concern about AI is whether it
puts them in the newspaper. Lead with evidence and traceability. The fact that every claim
links back to a real comment is the pitch.

No "5 tips for better public engagement." They've read it, and IAP2 does it better.

Nothing that makes them the problem.

No opinions about policy. We're a method publication.

---

## 4. Building the list

You don't need Apollo here, and Apollo is bad at this anyway. Agency staff directories are
published by law and the email format is usually uniform and public.

Where to get names, in order:

1. Association and conference rosters. IAP2 USA has 2,500+ members across 48 states [S].
   Also 3CMA, APA, NAGW, state municipal leagues, APTA, AMPO. Speaker lists and session
   agendas are public and pre-sorted by topic.
2. Comment docket signatories. People who submitted on behalf of an agency or organization
   are in the public record with their affiliation attached.
3. Agency staff directories. Scrape department pages for a target list of maybe 400 agencies.
4. Published engagement reports. The author's name is on the cover, and that's your lead.
5. LinkedIn by hand, for confirming titles only. Don't automate it. `status.md` 2026-08-15
   already settled that.

Aim for 800 to 1,200 verified Tier 1 contacts by week 12 [E]. That's plenty. A list of
40,000 government addresses is a liability.

Legal notes:

CAN-SPAM applies and government recipients aren't an exception. Real postal address, working
one-click unsubscribe, honest subject lines, opt-outs honored within 10 days.

Cold email to the US only. Canada's CASL is consent-based with real penalties, and GDPR
makes cold email to UK and EU agencies messy. They can subscribe. Just don't cold email them.

Write every email as if it'll be read out loud at a public meeting, because it might be.

Never call an agency a customer, a reference or a partner without written permission. In
this world that isn't marketing license, it's a procurement integrity problem.

---

## 5. The four email tracks

### Track 1: the research ask (cold, three emails, stop on reply)

The ask is for their expertise, not a meeting.

> **Subject:** the [CITY] [PLAN NAME] comment record
>
> [Name], I'm looking at how agencies actually process public comment at volume, and I'm
> publishing what I find. It's a 20 minute conversation about how your team handled the
> [N]-comment record on [plan], what you'd do differently, and where the synthesis got hard.
>
> I'll send you the piece before it publishes. Cite you or keep you anonymous, your call.
>
> Any chance you have 20 minutes in the next two weeks?

> **+4 days.** Following up on the [plan] comment period. The part I'm really after is how
> the raw comments became the summary that went to council: who did it, how long it took,
> what got lost. Nobody seems to have written that step down anywhere.

> **+7 days (last one).** If it's not a good time, no problem. I'll send you the finished
> piece anyway, it's free and there's nothing being sold in it. Reply "send it" if you want it.

### Track 2: tell the agency before you publish

This goes to the agency whose docket we analyzed, before the piece is public.

> **Subject:** analysis of your [plan] comment record, before it publishes
>
> [Name], I analyzed the [N] public comments on [plan] from the public record, and I'm
> publishing the results on [date]. You should see it first: [link].
>
> Two things. If I've misread anything, tell me and I'll fix it. And the piece is about
> method, not about your team, so the framing throughout is what the record contained
> rather than what anyone should have done.
>
> If it's useful I'm happy to walk your team through how the analysis was built. No charge,
> nothing being sold.

Each of these is a warm conversation with exactly the right person, built from free public
data, with no list, no ads and no cold ask. This is where the deals come from.

### Track 3: a monthly email, working title "The Public Record"

Naming is Rick's call.

Plain text, under 400 words, same four blocks every month so people can scan it:

1. This month's teardown, three sentences and a link.
2. One method note: a single technique, when it works, what it oversamples.
3. One number from the benchmark table, with its source.
4. One engagement record that got challenged, and why.

No images, no tracking pixel, one or two links, signed by a person.

The subscribe promise: once a month, one public comment record, actually analyzed, no vendor
pitch. Then never break it.

### Track 4: conference and association follow-up

Within 24 hours of a session or panel, email the people who introduced themselves. One
email, no sequence: the artifact that matches what was discussed, plus the subscribe link.
Conferences are where this audience concentrates, so treat them as list-building, not
lead-gen.

---

## 6. What we're actually selling

Not a demo, not an RFP, not a platform in year one.

Sell a comment period readout. Fixed scope, fixed price, two to three weeks. They send the
comment record, we send back themes, the agreement and disagreement map, the segment matrix,
and a council-ready memo with a quote behind every claim.

Price it under the purchase card limit on purpose. The federal micro-purchase threshold is
$15,000 and the simplified acquisition threshold is $350,000, both effective 2025-10-01 [S].
Below the micro-purchase threshold a cardholder can just buy it without competition. Local
and state limits vary by state and charter, so check per agency, and note that agencies
spending federal grant money follow the federal rules.

So price the readout at $7,500 to $12,000 [E]. Above that you're in an RFP. Below it you're
buyable by the person who has the problem.

One thing to start now because it takes weeks: register on SAM.gov and get a UEI. It's free.
Without it no federal buyer can buy from us at any price, and end-of-fiscal-year money
(federal FY closes September 30) is out of reach. Do it this quarter so next September is
available.

---

## 7. Getting into a .gov inbox

Government mail systems are hostile on purpose: heavy Proofpoint and Microsoft Defender use,
URL rewriting, attachments stripped. Skip this section and the program dies here.

| Rule | Why |
|---|---|
| Separate the domains. Product and transactional mail on the main domain, publication and cold on a different one | One spam trap hit must never touch the app's transactional mail |
| SPF, DKIM and DMARC set up before the first send | Without alignment you won't reach a filtered .gov inbox at all |
| Warm the new domain for at least four weeks | New domain plus government filters means instant quarantine |
| 30 to 40 cold sends per inbox per day, max | Volume is the main spam signal for a young domain |
| Plain text or close to it. No images, no pixel | Image-heavy mail reads as bulk, and pixels get stripped anyway |
| Never use link shorteners | bit.ly and similar are often blocked at the gateway |
| No attachments | Frequently stripped or quarantined. Link to a page |
| Don't read clicks as interest | Security gateways pre-click every link, so your click data will lie to you |
| Don't trust open rates at all | Scanners inflate them and pixels get stripped. Turning off open tracking costs you nothing real |
| Send Tuesday to Thursday, 7:30 to 9:00 their time | Desk-bound staff on 8 to 4 schedules. Monday is meetings, Friday is dead |

Replies, subscribes and forwards are the only numbers worth watching.

Tooling: keep Brevo for the monthly email since it's already our stack
(`brevo-setup.md`), and run cold from a separate domain on a separate tool, so a cold-send
reputation problem can't reach the product's mail.

---

## 8. Calendar

Most cities run July 1 to June 30. The federal government runs October 1 to September 30.
Check per agency, some states and districts differ.

| When | What's happening for them | What we do |
|---|---|---|
| September to October (now) | Federal fiscal year closing, fall conference season | Publish teardown 1. Register SAM.gov. Work conference rosters |
| November to December | Quiet, and next year's work gets planned | Best interview booking window of the year. Run track 1 hard |
| January to March | Budget requests get written for the July 1 fiscal year | The window that matters. Publish the benchmark table and the memo template, the things a staffer pastes into a budget justification |
| April to June | Budgets adopted, spring engagement season | Track 2 at full volume. Comment periods are closing and the records are fresh |
| July to August | New money, new fiscal year, slow because of vacations | Readout proposals land here, converting the January to March budget lines |

---

## 9. What to measure, and when to stop

Through week 12:

| Metric | Target |
|---|---|
| Verified Tier 1 contacts | 800 to 1,200 [E] |
| Teardowns published | 3 |
| Track 1 reply rate | 8% or better. A research ask should clearly beat a sales ask |
| Interviews done | 12 or more |
| Subscribers | 250 or more |
| Track 2 replies from agencies we analyzed | 50% or better. If it's low, the framing is wrong |

Months 4 to 9:

| Metric | Target |
|---|---|
| Paid readouts sold | 2 |
| Conversations with consulting firms | 5 or more |
| Inbound, where they emailed us first | 10 or more |
| An agency putting us in an RFP or scope document | At least 1. That's the real signal |

Stop if, at week 12:

- Track 1 replies come in under 4%. The research ask doesn't transfer to government.
- Fewer than 100 subscribers after three teardowns. The content isn't valuable enough.
- No paid readout conversations at all by month 6. The audience is real but the willingness
  to pay isn't. Drop it to a background publication at two hours a month.
- Any month where this takes more than a day a week. It's eating the security lane.

---

## 10. First 12 weeks

**Weeks 1 and 2.** Register SAM.gov and get a UEI, it's free and slow so start now. Buy and
configure the publication domain, set up SPF, DKIM and DMARC, start warming it. Pick the
first docket: closed, 500 to 5,000 comments, machine readable, mid-size agency, a topic with
real disagreement, and an agency that looks competent. Build the Tier 1 list to 150 from one
association roster.

**Weeks 3 and 4.** Run the docket through UpSight and log every friction point in
`10-ops/dogfooding-log.md`. A 3,000 comment public record is the hardest input we've given
it. Publish teardown 1 with the receipts and the method. Send track 2 to that agency before
it publishes. Ship the memo template alongside it, since the teardown proves the method and
the template lets them use it.

**Weeks 5 to 8.** Track 1 to 150 contacts at about 30 a day, and book interviews. Docket 2
published in week 8, with each interview sharpening the next one. First monthly email in
week 6. List to 500.

**Weeks 9 to 12.** Docket 3, plus the defensibility checklist and the benchmark table. Offer
the paid readout to the three warmest track 2 conversations, with a price, a scope and a
date. That's the test that matters. Everything before it is audience building. Go direct to
10 engagement consulting firms, since they're the fast buyer. Review against section 9 in
week 12 and decide: continue, demote, or kill.

Budget one day a week. If it needs two, it's the wrong lane this quarter.

---

## 11. What this doesn't answer

Does the research ask work on public employees the way it works on security practitioners?
They may need clearance to speak on the record. Cheap test: 25 track 1 sends, count replies.

Is the buyer the agency or the consulting firm working for agencies? The firm can sign in
two weeks, the agency has the budget line. Test both, they cost the same.

Does $7,500 to $12,000 sit above impulse and below RFP, or in the dead zone where it's too
much to put on a card and too little to scope properly?

Is this a Decision Files vertical or a separate publication? It's arguably the former.
Either way it's cheaper to settle before the first piece publishes than after.

Does analyzing an agency's docket without asking first cause a problem we haven't thought
of? Track 2's offer to fix errors is the mitigation. Check how it lands on the first one
before doing it again.

---

## Sources

[S] means sourced below. [E] means an estimate, directional only.

- FAR threshold inflation adjustment, micro-purchase $15,000 and simplified acquisition
  $350,000 effective 2025-10-01:
  https://www.federalregister.gov/documents/2025/08/27/2025-16412/federal-acquisition-regulation-inflation-adjustment-of-acquisition-related-thresholds
- FAR Subpart 13.2, actions at or below the micro-purchase threshold:
  https://www.acquisition.gov/far/subpart-13.2
- How federal thresholds apply to local government (MRSC):
  https://mrsc.org/stay-informed/mrsc-insight/november-2025/federal-thresholds
- IAP2 membership size and government agency membership:
  https://www.iap2.org/page/membership and https://iap2usa.org/government
- IAP2 professional certification, CP3 and MCP3:
  https://www.iap2.org/page/professionalcertification
- Public employee email as public record (Reporters Committee for Freedom of the Press):
  https://www.rcfp.org/open-government-sections/6-email/
- Public comment volume and the staff burden of analyzing it (The Regulatory Review):
  https://www.theregreview.org/2021/11/08/management-of-public-comments/
- Federal comment analysis tooling:
  https://resources.data.gov/resources/cdoc_comment_analysis/
- FTA guidance on receiving and responding to public and agency comments:
  https://www.transit.dot.gov/sites/fta.dot.gov/files/docs/regulations-and-guidance/environmental-programs/55996/11-responding-comments.pdf
- Internal: `20-research/market-intel/deliberative-intelligence-market.md`,
  `20-research/market-intel/Competitors/consulting-adjacent/`,
  `00-control/decisions.md` (2026-08-15),
  `40-gtm/channels/lifecycle/brevo-setup.md`
