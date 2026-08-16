# Status log

> Append-only. Newest entries on top. Any agent that finishes meaningful work writes here.
> Format: dated header + 3 buckets (Shipped / Stuck / Decided / Surfaced)

---

## 2026-08-15 (visuals v3 — plain English)

**Fixed (Rick's callouts, all fair)**
- **Killed the analyst jargon.** "Separated nobody", "cut at gate 2", "did not separate the
  remaining three" — that was AI slop, not how a buyer talks. Now: "All four had it", "Cut — our
  analysts stopped using it", "The other three cost about the same". **New standing rule in the
  spec: write what the buyer would say out loud. If a label needs a glossary, it's the wrong
  label.**
- **Icons added, with a legend, and the colour logic made explicit** — it was arbitrary before.
  Four states, same meaning on every diagram: grey tick = everyone passed, decided nothing ·
  red minus = knocked someone out · amber star = this decided it · blue tick = chosen. Colour
  never carries meaning alone.
- Seventh pattern added at Rick's suggestion: **feature matrix with the truth on it** — the
  familiar vendor grid, with the one row that actually decided it highlighted. Every vendor
  publishes a matrix; none of them say which row mattered.

**Decided — email capture**
- **No popups, no timed modals, no exit-intent.** On a research site an interstitial reads as
  marketing and costs more trust than the address is worth.
- **The ask fires only when someone tries to do something they can't yet do.** Individual files
  are free forever — they build audience and get cited. Quarterly reports and the older archive
  are gated; clicking through raises an inline form in place, never an overlay. Deliver
  immediately on the same page, remember the reader, never ask twice.

**Note**
- No frontend-designer agent exists in this environment. The build spec is written to serve as
  the designer brief.

## 2026-08-15 (visuals v2)

**Shipped**
- Visual system v2 — six patterns, worked examples, mapped to canonical decision types:
  https://claude.ai/code/artifact/47003a7e-6993-4d77-97ac-df83943952ad
- Build spec §5 rewritten with the pattern library, and new §5b: conversation-lens prompt
  guidance — classify the decision, check the transcript supports the pattern, extract rather
  than infer, plus six interview questions that feed the diagrams.
- **CLAUDE.md house rules: no low-contrast text, and every figure states its source.**

**Fixed (Rick's callouts)**
- **Low-contrast text — second offence.** Now a standing rule in CLAUDE.md, not a one-off fix.
- Timeline is now **vertical top-down** — holds 15 rows as easily as 5 and fits a page.
- "Stated vs. actual" was obtuse because of my sloppiness, all three fair hits: it never said
  *whose* scorecard (theirs, built before vendor calls — now stated on the figure), "—" was
  undefined (now "not scored"), and "never came up again" was vague (now "all four cleared it,
  never discussed after the first round"). Rebuilt on a full realistic SIEM-replacement example.
  It holds up better with real content — 65% of the weight separated nobody.

**Surfaced**
- Three new patterns beyond the original three: **consolidation map** (platform consolidation,
  post-merger standardisation), **cost crossover** (build vs. buy, in-house vs. outsource), and
  **what got skipped** (emergency/forced decisions — under time pressure the omissions are the
  story).
- Eleven canonical decision types now mapped to patterns, so pattern choice is a lookup rather
  than a judgment call each time.

## 2026-08-15 (visuals + build spec)

**Shipped**
- Visual system artifact — three diagram formats with worked illustrative examples:
  https://claude.ai/code/artifact/47003a7e-6993-4d77-97ac-df83943952ad
- `40-gtm/channels/content-seo/decision-files-site-build-spec.md` — handoff spec for a coding
  agent revising thedecisionfiles.com and the report template.

**Decided**
- **Every file gets one diagram, from three formats only:** decision timeline (where time went
  vs. where the call was made), elimination map (where each option died), and **stated vs.
  actual** (scorecard weight vs. what decided it) — the default, because that gap is usually
  the finding.
- **No mind maps.** They show relationships without direction or time; a decision has both.
  Rick's suggestion, dropped on that reasoning and he agreed.

**Surfaced**
- Craig gets the one-pager, not the site — he's the pressure test, and a curmudgeon architect
  is better flattered by "poke holes in this spec" than by an unfinished landing page.

## 2026-08-15 (masthead reset) — Practitioners, not prestige

**Decided**
- **Chenxi Wang off the masthead.** Rick's call and he's right — I picked her on prestige.
  She's an investor, not a practitioner, and won't do real work without deal flow attached.
  Her real use is engagement referrals after a file publishes.
- **Masthead = working practitioners only.** A CISO answers because another practitioner
  vouched, not because a VC is listed. Vendors are customers; media are partners; VCs are
  neither.
- **Order of asks: Craig Merchant → Gary Hayslip → Trey Ford → Laz.**

**Shipped**
- `40-gtm/channels/outreach/decision-files-onepager.md` — the handoff doc. What it is, why it
  doesn't exist yet, the format, the rules, and a closing ask: "where is this naive?"
- Board doc: new persona table + the reversal, records updated.

**Surfaced**
- **Don't wait on the website for Craig.** He's the pressure test, not a prospect. A spec plus
  "poke holes in this" flatters a practitioner; a half-built landing page doesn't. The site is
  for cold outreach only.

## 2026-08-15 (lane call) — Security active, operators deferred

**Decided**
- **Security is the active lane; operators deferred, not killed.** Logged in `decisions.md`.
  Rick's read: operators are the broader segment he wants eventually, and running a few won't
  hurt — so this is sequencing, not abandonment.

**Shipped**
- Eight operator-lane tasks retitled `[DEFERRED — operator lane]` and dropped to P3, each with a
  reason recording what survives the lane change. Nothing archived — the lane stays visible and
  revivable.
- `decision-files-gameplan.md` updated: the "which room" question is closed, and the
  lane-independent mechanics are called out so they don't get deferred along with the topics.

**Surfaced**
- **Four mechanics are lane-independent** and still govern security work: the qualifier test
  ("could someone with no budget answer this credibly?"), week 4 being the week that slips,
  paid advertising the published piece rather than the survey, and the quarterly-report mechanic.
- **Two deferred topics retarget to security better than they worked for operators** — "what does
  your board ask that you can never answer with data?" and "how did you get it approved?" CISOs
  currently have harder board conversations than operators do. Revive as CISO topics, not as
  operator campaigns.
- Also corrected this session: the Techstrong archive is a free sample to open a software sale,
  not an asset — the business is selling UpSight to process Futurum's *incoming* vendor briefings.
  I spent more of Rick's attention on that tactic than it warranted.

## 2026-08-15 (correction) — Archive drift isn't monetizable; the pitch is forward briefings

**Corrected**
- I called the Techstrong archive "a product for Futurum." **Wrong — Rick pushed back and he's
  right.** Historical category drift isn't monetizable: nobody pays for history, a vendor can't
  act on "you renamed yourself twice since 2021," Futurum's own analysts could write that
  retrospective from memory, and a media business monetizes attention — so a retrospective is one
  good article, not a product line.
- **The archive is demo material, not a product.** That's its whole job, and it's enough for that
  job — his data, at a scale that proves the tool, surfacing something he missed while living
  through it.

**Surfaced — what Futurum would actually pay for**
- **The forward-facing briefing pipeline.** An analyst firm's binding constraint is the one
  Stiennon named: too many vendors, not enough analyst hours. Futurum's analysts take hundreds of
  recorded vendor briefings a year that evaporate into one person's memory and some notes.
  Turning every incoming briefing into structured, searchable, comparable data is how a research
  firm scales coverage without hiring analysts — an existing labor cost, and the bottleneck on
  their core product. That's a budget line; a retrospective isn't.
- **Sequence:** archive analysis is the *proof* ("here's what this did to five years of your own
  tapes in an afternoon"); the *pitch* is the next twelve months of briefings. Past drift earns
  the meeting, forward throughput gets bought.
- **Two caveats:** enterprise software sale to a company that could build it itself, so not fast
  money — and it pulls the Futurum relationship into the "UpSight as tooling for research firms"
  lane rather than the security research business. **Noting how persistently this thread keeps
  pulling that direction** (IT-Harvest, now Futurum). That may be a signal about which of the
  three verticals is actually the business.
- Question to ask Alan that sizes the real pitch: how many vendor briefings does the analyst side
  take annually?

## 2026-08-15 (research) — Cyber research/media landscape; Futurum owns Techstrong

**Shipped**
- `20-research/market-intel/cyber-research-media-landscape.md` — who owns which ground, the
  Futurum finding, the archive analysis, reprint economics, and the white space.
- Craig Merchant added (Security Architect — Splunk/Tines/Oracle, Rick's friend). Candidate list
  now lives inside the File #1 task (`bcae83b0`) rather than as separate todos, per Rick.
- Tasks: Futurum/Shimel three-ask sequence (`b5d3763c`, P1), reprint rate card + independence
  rules (`73202000`).

**Surfaced**
- **Futurum Group acquired Techstrong Group in April 2024.** Alan Shimel is an executive inside
  an analyst firm — Futurum = analyst research + Techstrong media + **Signal65 (product testing
  lab)** + Tech Field Day. **That is the NSS-plus-media model already assembled at scale**, and
  the closest existing thing to what The Decision Files would become. The collab is a business
  conversation, not a favor between friends. Risk: pitching methodology to a firm structurally
  able to run it. Lead with tooling and distribution, not method.
- **Rick's archive skepticism is right, and the reason decides the pitch.** Techstrong
  programming is vendor-exec heavy = supply-side. You can't extract "how buyers decided" from
  vendors explaining why their product is good. But hundreds of vendors describing their own
  category across 5+ years IS a **category-evolution dataset** nobody has run — which makes the
  archive a spectacular UpSight demo and a product *for Futurum*, not a research shortcut for us.
- **Reprint rights: $25K–$75K per report per year** (Gartner/Forrester tier, negotiated). Rick's
  instinct was right and I under-ranked it — it's annual and licensable to *multiple* vendors off
  one piece of research, where an engagement is one-to-one and eats his hours. Moves from "later,
  if ever" to a primary line. Three independence rules attached: publish first / published rate
  card open to anyone mentioned / no sponsor touches subjects, questions, or findings.
- **The white space, stated plainly: published, qualitative, demand-side decision research.**
  Analyst firms do demand-side but *quantitative* (surveys, n=400, percentages). Win/loss firms
  do qualitative demand-side but *private*, so it builds no public authority. IT-Harvest, Signal65
  and the quadrant business are *supply-side*. **Nobody publishes rigorous qualitative research on
  how buyers actually decide.** Pitch line: *"Everyone counts buyers. Nobody asks them properly,
  in public."*
- **Subject-selection rule now recorded:** the CISO signs, the ARCHITECT ran the evaluation.
  1 CISO for altitude + 2–3 architects/deputies for mechanism, per file. Buyers only — vendor-side
  people are customers, not subjects. Craig Merchant is the pressure-test dry run before any real
  subject.
- Gartner decline confirmed against Stiennon's numbers: 14,149 (Q4'21) → 11,487 (Q1'26).
- New name for the map: Scott Crawford, InfoSec research director, S&P Global / 451.

## 2026-08-15 (wrap +1) — Corrected the license-validation claim; Stiennon reframe; two new names

**Corrected**
- **The $25K engagement does NOT validate UpSight demand.** Rick caught this and he's right.
  Buying a report is the opposite motivation from buying a tool — a CMO paying for research is
  buying an answer and *not having to do the work*; the tool says *do the work yourself*.
  Usually different people, too. And the interviewees are mostly **vendor-sourced** (they hand
  over the lost-deal list), so what we sell isn't access, it's a neutral third party doing the
  asking — real, but a weaker moat than earlier drafts implied. My "every engagement ends in a
  license conversation" guardrail was wishful. **The engagement validates the problem, not the
  tool.**
- **The replacement is a real test, runnable on engagement #1:** price Tier A (report, $25K)
  against Tier B (report + you keep the workspace and can add your own, $35K). If nobody takes
  B, UpSight is internal production leverage and this is a research firm. Legitimate outcome —
  but know it in month three, not month thirty. Unprompted signal to watch for: does anyone ask
  *"could we keep doing this ourselves?"*

**Surfaced — the Stiennon question**
- **Could he add the demand side? Yes, more easily than we could add supply.** Audience,
  credential, vendor relationships, and interviews aren't capital-intensive.
- **What protects us is that it's orthogonal to his strategy, not adjacent.** His moat is
  comprehensive coverage (4,250 vendors, systematic, agent-queryable); demand research is
  qualitative and one-at-a-time, and 15 deep interviews is the opposite of "comprehensive."
  The risk isn't that he chooses to compete — it's that a customer asks and he says yes. So the
  play is speed: get there before he considers building, and make partnering easier than building.
- **Our moat isn't the interviews, it's the software that makes them cheap.** That's the piece
  he'd have to buy or build.
- **Third vertical surfaced: UpSight sold to research firms as production tooling.** IT-Harvest
  is a research business with a production problem; so are hundreds of boutique analyst shops
  and advisory firms. Rick understands that workflow better than any other founder. Tension to
  decide deliberately: selling to IT-Harvest is good business *and* hands a potential competitor
  demand-side capability. Picks-and-shovels vs. exclusivity-in-security pull opposite ways.
- **New Decision File candidate that may beat Sullivan for #1** (task `e68849a0`): *"Why did you
  cancel Gartner?"* Gartner lost 2,662 clients over 17 straight quarters, starting before
  ChatGPT. Hard budget filter (only subscribers can answer), directly on-thesis (how buyers get
  information and pick vendors = the demand data vendors pay for), and **the closest thing yet
  to the forced-participation lever** — publish how buyers discover vendors and every vendor
  needs to know if they appeared. Stiennon would amplify it; it proves his thesis. Sullivan gets
  attention, this gets buyers.

**Shipped**
- Person records: Darin Anderson (CEO, Nxt Robotics — fits the security lane, usable as buyer
  *and* Decision File subject, SD local) and Adam Watson (SD oncology biotech CEO — **flagged
  off-thesis** for a security publication; he only fits if The Decision Files is "how leaders
  decide" rather than "how security buyers decide", which makes him a useful test of the
  vertical question rather than just a name).

## 2026-08-15 (wrap) — Single entry point written; three warm names mapped to three unlocks

**Shipped**
- `30-strategy/decision-files-gameplan.md` — **the front door.** Thesis in a paragraph, the
  five things it rests on, the critical path, this week's five moves, a map of which doc holds
  what, the open decisions, kill criteria, and what 90 days of "working" looks like.

**Surfaced**
- **Gap Rick caught:** the plan existed across five documents with no entry point. A plan you
  can't hold in your head doesn't get executed — the index is not bureaucracy here, it's the
  thing that makes the rest usable.
- **Three warm names map cleanly onto the three critical-path unlocks, with no overlap:**
  Chenxi Wang → the masthead's first name (unblocks board → site → all outreach);
  Melinda Marks → method read + Kelly Jackson Higgins intro; Trey Ford → early interview for
  File #1. Chenxi moves to #1 on the entire board list — she's the name that makes asks 2–10
  easy, and there's no substitute for her on the list.
- **Do not ask Melinda for a masthead seat.** Omdia is an analyst firm; naming her on a
  competing publication creates an employer conflict and hands her an easy decline. Ask for the
  small clean thing, and say explicitly that you're *not* asking her to attach her name —
  removing the objection before she raises it is what makes a warm ask land.
- Trey Ford record created (CISO Americas, Bugcrowd). Sitting CISO *inside a vendor*, so he
  sees both buyer behavior and industry framing. Offer him the role-only anonymity tier
  unprompted given the subject matter.

## 2026-08-15 (night, final +2) — Read the Dark Reading DR20 piece; first Decision File identified

**Correction to my earlier claim**
- I called DR's "20 Leaders Who Built the CISO Era" a ready-made Tier-2 sourcing list before I
  could read it. **It isn't.** It's an industry retrospective — researchers, hackers, criminals,
  policymakers. Five subjects are deceased (Katz, Kaminsky, Mitnick, Barnaby Jack, Schmidt);
  several more are convicted or exiled. Almost none are enterprise buyers.

**Surfaced**
- **The real asset is the quoted commentators, not the profiled subjects.** Dark Reading called
  ~20 people for quotes — Tyler Shields (CMO, Allstacks), Marshall Heilman (CEO, DTEX), Gary
  Orenstein (CCO, Bitwarden), Morey Haber (BeyondTrust), John Gallagher (Viakoo), Tom Kellerman
  (TrendAI), Casey Ellis + Trey Ford (Bugcrowd), Chris Wysopal (Veracode), Jon Oberheide (Duo),
  George Gerchow (Bedrock Data), Daniel Cuthbert (Santander), Melinda Marks (Omdia), Chris Gibson
  (FIRST), Jake Williams, Melina Scotto. Two properties: **they demonstrably say yes to
  journalists** (the recruiting problem, pre-solved), and **roughly half are vendor-side execs**,
  i.e. buyers.
- **Chenxi Wang (Rain Capital) is the strongest contributor-board candidate seen so far** —
  Forrester analyst, operator, founder, now investor. Methodology peer *and* someone who sees
  dozens of vendors a year; collapses the Pingree and Fitzgerald roles into one person.
- **Melinda Marks is at Omdia, Dark Reading's sister analyst brand** (Informa TechTarget) — a
  structural bridge into the Kelly Jackson Higgins conversation. Also raises the same
  partner-or-competitor call as Stiennon/IT-Harvest.
- **Decision File #1 identified** (UpSight task `bcae83b0`): not a Joe Sullivan profile — instead,
  15 CISOs on what the Sullivan verdict changed in how they actually decide. Personal liability
  is the live anxiety in that market, the outcome is already on the record (convicted, upheld),
  and it changes what buyers demand from vendors, which is why a vendor would pay for it.
  Gerchow's published quote is the Decision Files thesis said by someone else, and he knows
  Sullivan personally — natural first interview.
- **Timing hook:** the DR20 anniversary series is rolling out, which makes the Higgins editorial
  pitch concrete instead of speculative.

## 2026-08-15 (night, final +1) — PR/media assets mapped into three channel layers

**Shipped**
- Records in UpSight Core: Michelle Schafer, Jon Kreuzer, Kelly Jackson Higgins (Dark
  Reading), and a Merritt Group placeholder pending the named contact.
- `30-strategy/business-model-decision-files.md` — new section "How the vendor finds us",
  separating the three layers and their terms.

**Surfaced**
- **Merritt Group is a channel to buyers, not a media relationship** — the most useful
  reframe in this batch. A security PR agency carries 20–40 vendor clients, every one with
  the "we don't know why we lose" problem, and the agency is structurally motivated to bring
  clients something new to defend the retainer. That makes them a referral source for paid
  engagements, better than cold email. Terms: 10–15% first-year rev share, same as the board.
- **Three layers, three different asks, don't collapse them:** syndication (Shimel /
  Security Boulevard — distribution), earned editorial (Dark Reading / Kelly Jackson Higgins
  — credibility), agency channel (Merritt, Schafer, Kreuzer — revenue).
- **Sequencing:** syndication and editorial first, because they make the agency conversation
  easy. "We publish here and here" turns a referral ask into an obvious yes.
- **Dark Reading's "20 Leaders Who Defined the CISO Era" is a ready-made Tier-2 sourcing
  list** — 20 named CISO-era leaders who have already agreed to be public about their
  careers, which is half the recruiting battle. Article is egress-blocked from this
  environment; Rick to paste the names.
- Confirm before outreach: Michelle Schafer's spelling (Rick wrote "Shafer"), Jon Kreuzer's
  firm and role, and that linkedin.com/in/kellyj2 is Kelly Jackson Higgins (inferred).

## 2026-08-15 (night, final) — Board list confirmed; four role-specific asks drafted

**Shipped**
- Person records for all nine prospects now in UpSight Core: Larry Pingree, Richard Stiennon,
  Greg Fitzgerald, Alan Shimel, Mike Fabrico, Gary Hayslip, Demetrios "Laz" Lazarikos
  (Blue Lava), Caleb Sima, Macy Dennis.
- `30-strategy/decision-files-advisory-board.md` — replaced the single generic invitation with
  **four role-specific asks**, because the list contains four different kinds of person and one
  email to all nine would waste the warmest network Rick has.

**Surfaced**
- **Register is the craft point.** These go to people Rick knows. A polished recruiting email
  to an old colleague reads worse than a two-line note — it signals he's become someone who
  sends campaigns. Short, plain, sent one at a time, never merged.
- **Greg Fitzgerald gets a buyer email, not a board invitation.** He's a security-vendor CMO —
  the person who writes the engagement check. One email tests the entire revenue model. Listen
  for the price reaction and which budget line it comes from, not the compliment. The board ask
  can follow later; leading with it throws away the buyer signal.
- **Alan Shimel gets a syndication ask.** Security Boulevard is distribution, not sourcing.
  This is the highest-leverage email on the list — syndication could compress the discovery
  timeline from 6–12 months to weeks.
- **Stiennon: name the IT-Harvest overlap up front.** He runs an adjacent independent practice;
  raising it directly earns more respect than letting him raise it.
- **Laz may fall to Sourcing Contributor** — Blue Lava is a security vendor, so the conflicts
  policy bites. His CISO-peer network is exactly the sourcing asset the board exists for, so
  decide this one explicitly rather than by rule.
- Macy Dennis logged with tier TBD pending Rick's note on background/current role.

## 2026-08-15 (night, latest) — Contributor board list exists; tiered by role

**Shipped**
- Person records created in UpSight (UpSight Core) for the confidently-spelled names:
  Larry Pingree, Richard Stiennon, Greg Fitzgerald, Alan Shimel, Mike Fabrico — each tagged
  with a proposed tier and the reason.

**Surfaced**
- **The security network is warm today, not 2007-warm.** Rick named 9+ people unprompted.
  That resolves the practical half of the vertical question in favor of proceeding — though
  a list of names is not six yeses; the real test is three asks sent this week.
- **The list sorts into four roles, not one**, and they aren't interchangeable:
  *analysts* (Pingree, Stiennon) = methodology credibility · *practitioner CISOs*
  (Hayslip?, Laz?, Sima?) = the sourcing engine · *vendor-side execs* (Fitzgerald, Fabrico)
  = disclosed sourcing only · *media* (Shimel) = distribution/syndication.
- **The board list and the customer list overlap.** Greg Fitzgerald has been CMO at multiple
  security vendors — he is the person who writes the $15–50K engagement check. Asking him as
  a buyer is the fastest available test of the revenue model, and it costs one conversation.
- **Alan Shimel is a different asset entirely.** Techstrong / Security Boulevard is a
  publishing platform, so the ask is syndication, not sourcing — the one path that could
  make discovery work in months instead of the 6–12 assumed for organic.
- **Richard Stiennon runs a competing independent analyst practice (IT-Harvest).** Highest
  credibility on the list if it works; also the clearest overlap. Decide deliberately whether
  he's a contributor, a partner, or neither.
- **Live tension to resolve knowingly:** the conflicts policy bars current vendor employees
  from the Contributing Analyst tier, which moves two of the named six to Sourcing
  Contributor. Recommended (independence is the product, and it's cheapest to protect on day
  one) — but it thins the Contributing tier, and Rick has nineteen years of instinct on where
  this line actually sits. If it loosens, loosen it deliberately and write down why.
- Three names still to confirm (dictation): Gary Hayslip?, Demetrios "Laz" Lazarikos?,
  Caleb Sima? Two unparsed: "Roth, Los" and "Macy Dennis".

## 2026-08-15 (night, later) — Contributor board charter

**Shipped**
- `30-strategy/decision-files-advisory-board.md` — the charter: three commitment tiers,
  compensation options, the conflicts policy, editorial control, the recruiting ask, and
  sequencing. UpSight task `3c357a79`, wired to block the site/masthead task.

**Surfaced**
- **The board answers the moat question I logged earlier.** Access isn't scarce — anyone can
  cold-email twenty CISOs. **Candor is.** A board of recognized ex-CISOs who vouch and source
  is what converts access into candor, and it rests on twenty years of relationships a
  well-funded competitor can't buy.
- It also fixes three other things: throughput (contributors conduct interviews, so 10/month
  becomes 30 without hiring), the "will a vendor pay a one-person shop" objection (a masthead
  means it isn't one, which raises the price ceiling), and the site's missing masthead.
- **It's the precursor to the forced-participation lever.** A category report backed by six
  known CISOs is one a vendor can't afford to be absent from — the closest analog to the NSS
  dynamic, and it only exists with the board.
- **Design calls that decide operating vs. decorative:** call them Contributing Analysts, not
  advisors; make the ask small and specific (2 intros + 1 interview per quarter, not "join my
  board"); pay them, including 10–15% rev share on sourced engagements, which is the term that
  turns the board into a channel; conflicts policy ships *with* the masthead, never after; and
  editorial control stays with Rick — they source and review, he owns the conclusion, or the
  files get consensus-smoothed.
- Couldn't read getupsight.com/about or thedecisionfiles.com — both blocked by this
  environment's egress proxy. The Decision Files bio needs a different job than the UpSight
  one anyway: UpSight's sells a founder to a software buyer; the Files' has to sell
  methodology heritage to a CISO deciding whether to answer an email.

## 2026-08-15 (night) — Business model written up: the NSS Labs motion, applied to buyer decisions

**Shipped**
- `30-strategy/business-model-decision-files.md` — who pays vs. who participates, the three
  revenue lines in the order money arrives, pricing tiers, the money flow, the independence
  firewall, what's the same and different vs. NSS Labs, and the untested assumption.

**Surfaced**
- **Rick ran this exact model at NSS Labs** — independent testing, buyers as source, vendors
  as buyer, reputation built in public and monetized in private. This is a replay of a motion
  he took to a market-leading position, not a new theory.
- **What the vendor buys is candor they cannot obtain internally at any price** — buyers won't
  be honest with the vendor who lost the deal. Independence is the product, same as NSS.
- **The firewall is non-negotiable:** paid engagements are private deliverables; The Decision
  Files publishes only unpaid research. Stated publicly in the methodology note.
- **Three honest differences from NSS.** (1) The moat is weaker at the start — a test lab was
  capital-intensive; interviewing 20 CISOs isn't. (2) But UpSight is a moat NSS never had — it
  makes the research runnable by one person at team scale. (3) The category isn't empty (Clozd,
  Primary Intelligence, DoubleCheck) — the differentiator is that **none of them publish.**
- **The design question that decides franchise vs. practice:** NSS's monopoly came from forced
  participation — absence from a public test was itself damaging. There's no equivalent here
  yet. Closest analog is a recurring category-wide "how buyers chose this year" report where an
  unmentioned vendor is conspicuous. Engineering that is the central problem.
- **Services trap flagged:** engagements are Rick's hours and compete with building UpSight.
  Guardrail — every engagement ends with a license conversation; if they aren't converting,
  catch it at engagement three, not thirty.
- **Untested assumption:** will a security vendor write a $25K check to a one-person shop?
  Cheap test — name two CMOs/CROs who'd take the call today.

## 2026-08-15 (late) — Decision File format spec, after reviewing the live sample

**Shipped**
- `40-gtm/channels/content-seo/decision-file-spec.md` — the format bar, the ten-section
  structure, the anonymity policy, sourcing rules, and publishing mechanics.

**Surfaced**
- **The live sample is an essay about a decision class, not a Decision File.** No person,
  no date, no stake, no quotes, no outcome — its Outcome field literally reads "this is a
  decision rule." It's a synthesis of Rob Markey's HBR piece with a case-study wrapper.
  Three consequences: the discovery play dies (a synthesis competes with its own source
  and loses), the artifact contradicts the product claim (nothing to generate from,
  because there was no conversation), and it under-delivers on what the recruiting email
  promises.
- **The structure is right; the input is wrong.** Keep the 30-Second Brief, Unknowns,
  Decision Principle, and especially Analyst Counterpoint — steel-manning the subject is
  the most distinctive thing in the format and nobody else does it. Fill the same skeleton
  with one real person's real decision.
- **Quotes are the single change that fixes it.** Zero in the sample. A file without a
  quote is an essay with headings; a quote is the receipt, which is UpSight's own product
  metaphor — primary research and product proof in the same stroke. Minimum three.
- **Anonymity policy has to exist before recruiting starts**, or the best subjects decline.
  Three tiers: named / role+shape / labeled composite, with quote approval in writing.
- **Publishing mechanics block the discovery play.** Files currently live as anchors on one
  page (`#b2b-sales`), which can't be indexed or cited individually, on a `pages.dev`
  preview domain. One URL per file, on the real domain, with Article structured data.
- Existing sample is worth keeping — retitled and relabeled as commentary, not as a File.
  The series can't open with it.

## 2026-08-15 (evening) — Decision Files becomes the front door

**Decided**
- **The Decision Files is the front door for all cold outreach. Research recruiting is the
  sales motion.** Logged in `decisions.md`. UpSight-branded cold email stops; product email
  is for people already in a conversation.
- **The written file is the deliverable; audio is a by-product.** Record every interview,
  publish the file, release audio only when the conversation was genuinely good. A podcast
  carries its own production and audience-building burden and doubles week 4.
- **The conversion moment is a live walkthrough**, scheduled as a step: interview → report
  generated in UpSight → walk the subject through it on a call → their approval → publish.
  Never email someone their finished file.

**Shipped**
- `30-strategy/public-survey-engine-strategy.md` — rewritten around the front-door model:
  the two-tier survey/file operation, the conversion moment, site prerequisites, the open
  vertical fork.
- `40-gtm/channels/outreach/decision-files-recruiting-kit.md` — four recruiting emails
  (cold, warm, snowball, report re-engagement), the intern's weekly job, a reply-handling
  table, the handoff to Rick, and per-cycle targets.

**Surfaced**
- **Corrected two earlier calls of mine.** (1) I advised under-claiming the analyst-firm
  label on the assumption Rick had no standing — false; he has more than the label implies,
  so the fix is putting the pedigree on the page, not hedging the claim. (2) I raised a
  conflict-of-interest concern using the wrong standard — the analyst-world conflict is
  evaluating products you take money from, and we publish how people decide, not which
  product wins. What survives is disclosure as genre convention in the methodology note.
- **The site is now a blocker on all outreach.** Every recruit will check it before
  replying; it currently has one sample and no masthead. Nothing goes out until it carries
  the founder bio, a masthead, a methodology note, and three files.
- **Still open, and bigger than anything settled today: which room.** Cybersecurity (warm
  media relationships, real credential, CISOs as source and security vendors as buyer —
  the two-sided model Rick already ran once) vs. the current operator/professional-services
  lane. Can't build authority in two rooms with one founder and one intern. Cheap test: one
  pilot Decision File in security before committing a quarter.

## 2026-08-15 (later still) — Public survey engine: strategy + Q4 calendar

**Shipped**
- `30-strategy/public-survey-engine-strategy.md` — the strategic sketch: the qualifier
  mechanic, the ICP escalation, a ranked six-topic slate, the monthly cycle / quarterly
  report calendar, outreach + paid coupling, and the execution-risk section.
- Q4 motion captured in UpSight as a goal with 8 dependency-chained sub-tasks
  (project: UpSight Core, task `565b9d6d`).

**Decided (proposed — needs Rick's sign-off)**
- **The question is the qualifier.** Topic selection *is* the targeting. Test for every
  topic: could a broke wannabe founder answer this credibly? If yes, kill it. Moves us
  upmarket for free, with no screening step.
- **Convene, don't survey.** The convener of a conversation is the obvious person to
  hire for the job — this is the "get hired" mechanism, and the only one that compounds.
- **One theme a quarter, three cycles, one report — not one topic a week.** Weekly is
  the reason the motion wouldn't get executed. Q4 theme: "How operators actually decide."
- **Never advertise the survey; advertise the report.** Paid starts at Cycle 2, not
  Cycle 1 — no spend before there's a proven asset.

**Surfaced**
- **The ICP escalation needs a real `decisions.md` entry, not a drift.** Proposed:
  PE/VC operating partners + portfolio ops (new lane), owners of professional-services
  firms 20–200, COO/GM/Chief of Staff at 50–500. Not abandoning consultants — moving up
  within them. The 30-day plan locked ICP, so this is a deliberate change and should be
  logged as one.
- Best single topic in the slate is **"what does your board ask that you can never answer
  with data?"** — it collects UpSight-shaped pain from people who have a board, rather
  than describing it. Sales-ready leads by construction.
- **Execution, not strategy, is the risk** (Rick's own read, and it's correct). Rick's
  only irreducible job is ~2.5 hrs of interviews a month. The week that slips is week 4
  — synthesis and publishing. Kill rule: two consecutive cycles that fail to publish.

## 2026-08-15 (later) — Public survey engine run #1 reframed: operators, not engineers

**Decided**
- **Reframed the campaign off model-switching and onto the AI-stack decision small-company
  operators are making.** Same motion, different room: owners, COOs, and fractional
  operators — segment A rank 1, the locked ICP — instead of engineers. Files renamed to
  `40-gtm/campaigns/2026-08-ai-stack-decision-{survey,script}.md`.
- **The subject is the criteria, never the verdict.** We don't ask which tool is best; we
  ask what they checked, what they skipped, and what they'd check first next time. Tool
  names surface in the answers anyway, so we can report the landscape without having
  framed a contest. Published deliverable is the criteria set.
- **Tier 2 is the campaign; Tier 1 is the by-product.** 10–12 interviews (up from 6–10),
  15–25 public responses (down from 25–40). This audience doesn't dogpile a post.

**Surfaced**
- **The interviews are the sales motion, not content.** A 15-min interview with a
  fractional COO about how they choose tools *is* a discovery call — and
  *"can I interview you for a piece I'm publishing"* is a far better cold ask than
  *"want a demo."* The Apollo consultant list and the interview recruiting list are the
  same list. New primary metric: interviews → second meeting booked (≥4).
- Reach drops versus the engineer version. Priced in — 12 conversations with buyers beats
  300 impressions from people who can't buy.
- No ICP guardrail needed anymore; v1 required one because it was off-lane, this isn't.
- Three lines of inquiry the script is built to surface: herd behavior as an unadmitted
  criterion, lock-in/real cost a year in, and the criteria people earned the hard way.

## 2026-08-15 — Public survey engine, run #1: campaign brief + script

**Shipped**
- `40-gtm/campaigns/2026-08-model-switch-public-survey.md` — brief for running Rick's
  real model-switching decision as a public survey (Workstream 3, run #1). Two tiers
  (public ask + 6–10 named practitioner interviews), 10-day box, kill criteria, ICP
  guardrail. **Status: proposed, awaiting Rick's go.**
- `40-gtm/campaigns/2026-08-model-switch-survey-script.md` — the Tier-1 public ask
  and the Tier-2 15-min interview script, with insight targets and interviewer notes.

**Decided (design calls inside the brief, not vault-level decisions)**
- **Don't name Claude or OpenAI in the question.** Asking "what actually decided it"
  instead of "which one" trades a tribal poll for decision reasoning, shifts the
  respondent set toward people who make and defend build decisions, and produces a
  durable framework instead of a stat that decays in three weeks. The vendor names
  surface in the answers regardless.
- Rick's own leaning stays unstated until publication — otherwise the responses are
  agreement and argument, not data.

**Surfaced**
- The campaign consumes one week of the only public-survey slot on an off-ICP topic.
  Capped three ways: one week only, every respondent tagged by how they work (that
  tag is a free read on the 2026-06-01 agent-builder ICP question), and every
  consultant-adjacent respondent routed into outbound template #3.
- Real upside independent of reach: this is the shoot that unblocks video assets
  **F** (dogfood clip) and **G** (Survey VSL), both currently stuck on capture debt.
- New open question logged: does the public-survey motion actually produce booked
  calls, or only reach?

## 2026-07-19 — CI-v2 portrait hero (4:5)

**Shipped**
- `CiV2MoviePortrait` — 1080×1350, paper bg, 90px edge / 85%×82% safe area, centered smaller stack + slide + send-to below. `npm run render:movie-portrait` → `out/ci-v2-movie-portrait.mp4`.

## 2026-07-19 — CI-v2 movie: light paper + produced story end

**Shipped**
- `CiV2Movie` now uses homepage paper (`#eeeef2`) / ink; narrow ~760px center column.
- Kept poker card deal; end is a calm produced asset: **Event Impact** title page → one trimmed clip → bar chart → send chips (no multi-cut flicker). ~22s. `out/ci-v2-movie.mp4`.

## 2026-07-19 — CI-v2 movie rebuilt: cards → analysis → one story

**Shipped**
- Rewrote `CiV2Movie` as one fixed stage (dropped Series of cramped sections): playing-card deal (video → note → Zoom → support) → dissolves to analysis finding → replaced by **one** composite reel titled with the finding; send-to chips for Customers / Internal / Leadership.
- `npm run render:movie` → `out/ci-v2-movie.mp4` (~16s).

**Decided**
- Homepage embed uses the single movie, not three side-by-side story destinations.

## 2026-07-19 — CI-v2 movie: fixed-spot sequential acts

**Shipped**
- New `CiV2Movie`: Cards → Intelligence → Stories replace in one viewport (`Series`).
- `CiV2Stories` no longer shows three destination reels side-by-side; Product → Leadership → GTM swap in the same stage with audience dots.
- Render: `npm run render:movie` → `out/ci-v2-movie.mp4` (~20s). Brief updated in `STACK-BRIEF.md`.

## 2026-07-19 — CI-v2 stack: Cards → Intelligence → Stories

**Shipped**
- Copied Haley + Rylie testimonials into `upsight-ci-v2/04-assets/video/` (`testimonial-haley.mp4`, `testimonial-rylie.mp4`).
- Three stackable compositions for vertical web assembly:
  - `CiV2Cards` — faces + Zoom + note deal in
  - `CiV2Intelligence` — pattern lock
  - `CiV2Stories` — composite reel (Haley/Rylie/discovery) routes to Product / Leadership / GTM as video destinations (not text-only)
- Renders: `05-remotion/out/ci-v2-{cards,intelligence,stories}.mp4`. Brief: `01-script/STACK-BRIEF.md`. `npm run render:stack`.

**Surfaced**
- Stories frame is dense (master reel + three destination reels); may want taller panel or sequential reveal if homepage whitespace is still tight.

## 2026-07-19 — CI-v2 funnel checkpoint + fluid variant

**Shipped**
- Checkpointed media-first scroll at `upsight-ci-v2/_checkpoints/media-first-fast-scroll-2026-07-19/` (source + mp4 + RESTORE.md).
- New composition `CiV2Funnel`: transparent stage, poker-dealt evidence stack → pattern card → outputs; title “Stop starting from zero.”
- Brief: `upsight-ci-v2/01-script/FUNNEL-BRIEF.md`. Studio: select `CiV2Funnel`. Preview render: `npm run render:funnel-preview`; alpha: `npm run render:funnel`.

**Decided**
- Prefer stronger homepage line (“Stop starting from zero”) over soft “feedback that remembers who it’s talking to.”
- Homepage embed should avoid heavy dark wrapper / boxes-in-boxes; media first-class over page background.

**Surfaced**
- Funnel motion still needs eye-pass vs page whitespace; may need larger zoom / fewer chrome borders after first studio look.

## 2026-07-19 — CI-v2 killer-loop homepage hero scaffolded

**Shipped**
- New Remotion project `40-gtm/assets/video/upsight-ci-v2/` — 14s composition `CiV2`: left customer-voice feed → center takeaway → right outputs (product priority / stakeholder reel / story candidate).
- Copy + timing in `01-script/hero.script.json`. Preview stills in `05-remotion/out/preview-*.png`.

**Surfaced**
- Feed clips reuse conversational-intelligence evidence MP4s; swap fresher talking-head cuts when ready.

## 2026-07-19 - homepage V4 conversion-led redesign

**Shipped**
- Rebuilt the hero for one champion, three concrete reasons to believe, a self-serve CTA, an
  assisted founder CTA, and the multi-conversation Remotion proof in the same first experience.
- Replaced the compact tool strip with a direct old-way/new-way comparison: five fragmented tools
  versus one customer-intelligence layer that remembers the person over time.
- Added a three-step first-value path and a founder manifesto without adding unsupported logos,
  testimonials, integrations, migration claims, or metrics.
- Reconciled the short-form messaging, customer-intelligence messaging house, wireframe, README,
  decision log, and prototype around the V4 conversion sequence.
- Verified the page at desktop and mobile widths with no horizontal overflow and real local media
  playing in the browser.

**Decided**
- Borrow the reference template's persuasion order and Fletch's positioning discipline, not its
  visual identity or generic section inventory.
- Keep customer intelligence as the familiar category and person-level continuity as the reason to
  choose UpSight.
- Make the assisted CTA a working session with the prospect's conversations, never a generic demo.

**Surfaced**
- The page now has a credible conversion trail, but named customer outcomes, retention evidence,
  willingness to pay, and activation economics remain the most important proof gaps.

## 2026-07-19 - homepage V3 category-first and visceral redesign

**Shipped**
- Reframed the homepage around the established **customer intelligence platform** category and the
  direct point of view **“Know your customers. Not just their feedback.”**
- Rebuilt the prototype with a light, high-whitespace hero; a dark cinematic multi-conversation
  proof stage; one amber five-tool interruption; and three large product chapters: unify,
  understand, and act.
- Kept the person-level memory mechanism but moved it below the category and product story as
  **“Customer intelligence should not reset.”**
- Changed the primary CTA from **“Upload 3 conversations”** to **“Analyze 3 conversations.”** The
  activation threshold remains concrete while the copy leads with value rather than file transfer.
- Reconciled the short-form messaging, customer-intelligence messaging house, wireframe, competitive
  analysis, prototype README, and decision log to the V3 position.
- Restarted the local preview server and visually verified the refreshed page on desktop and mobile.
  All local assets load, the Remotion video plays in view, semantic checks pass, and horizontal
  overflow is suppressed at the mobile breakpoint.

**Decided**
- Category credibility comes before differentiation: say what market UpSight is in, then show why
  its person-level continuity matters.
- Borrow the market's clear jobs and vocabulary, not competitors' exact claims or visual identity.
- Keep the site visceral through real voices, large product artifacts, contrast, and whitespace,
  not gradients, decorative AI diagrams, or more feature cards.

**Surfaced**
- Dovetail also uses compounding-value language, so “compounding” is a useful product mechanism but
  not ownable homepage territory by itself.
- The next proof gap is commercial rather than visual: a named outcome, measurable time savings, or
  a quantified tool/workflow reduction would make the page more credible against mature competitors.

## 2026-07-19 - homepage V2 competitive reset and compounding-profile prototype

**Shipped**
- Audited Dovetail, Enterpret, Listen Labs, Typeform, Fathom, and Senja. Documented why multi-source
  analysis, themes, citations, multimedia survey responses, and testimonial capture are supporting
  proof rather than defensible homepage differentiation.
- Rebuilt `40-gtm/assets/homepage/customer-intelligence-2026-07/` around compounding customer
  knowledge. V2 uses the existing multi-person Remotion marquee, exposes the five-tool fragmented
  workflow, shows a living customer profile and context-aware follow-up, and moves from individual
  profiles to market patterns and internal/external outcomes.
- Changed the primary in-page CTA to **“Upload 3 conversations”** with **“See what they add up to.”**
  The CTA appears after proof; a compact nav action remains for high-intent visitors.
- Reconciled the wireframe, messaging house, short-form messaging, prototype README, and decision
  log around the V2 position.
- Rendered V2 at 1440px desktop and 390px mobile. Confirmed the Remotion video autoplays, all local
  assets load, and the page has no horizontal overflow.

**Decided**
- **Customer feedback analysis** is a category doorway, not the homepage differentiator.
- The differentiated combination is persistent person context that compounds, improves the next
  interaction, produces patterns across people, and serves both decisions and customer stories.
- “Collapses 5+ tools” means collapsing handoffs and the customer-learning workflow, not claiming
  complete feature parity with five mature software categories.
- One upload proves summarization; three inputs better demonstrate UpSight's differentiated value.

**Surfaced**
- The central claim now creates product-proof obligations: activation must visibly enrich a profile,
  use prior context in a follow-up, and generate an inspectable cross-conversation pattern.
- Unit economics still need validation with an ICP-specific model for media/transcription cost,
  assisted onboarding time, activation, retention, and realistic willingness to pay.

## 2026-07-19 - customer-feedback homepage prototype and GTM message reset

**Shipped**
- Added `30-strategy/homepage-wireframe-customer-feedback-2026-07.md`, a Fletch-style positioning
  map and production-copy wireframe centered on one champion: a founder or head of product already
  conducting customer interviews and surveys.
- Added a responsive coded homepage prototype at
  `40-gtm/assets/homepage/customer-intelligence-2026-07/`. It uses the primary CTA **"Upload a call
  or survey"**, the support promise **"See what you've been missing"**, real product evidence, and
  a real customer-video source moment. No invented logos, metrics, or testimonials.
- Reconciled the canonical messaging docs. `messaging-house-customer-intelligence.md` now owns the
  homepage; `messaging-house.md` now owns the later operating-cadence/EOS expansion; `messaging.md`
  contains the current short-form language.
- Rendered and visually checked the prototype at 1440px desktop and 390px mobile. Confirmed no
  horizontal overflow, all local images and video load, headings are ordered correctly, every link
  has a destination, and the browser reported no console warnings or errors.

**Decided**
- Homepage V1 leads with the existing category **customer feedback analysis**, not a new customer
  intelligence category or the weekly leadership meeting.
- EOS and weekly operating cadence are excluded from homepage V1 and reserved for expansion.
- Primary conversion is self-serve upload; secondary conversion is a founder-assisted working
  session using one real customer conversation.

**Surfaced**
- The deployed site source is not present in this workspace. The prototype is ready to port, but
  production implementation must happen in the app/deployment repository.
- Launch proof debt remains: one named customer quote, one before/after source-to-finding artifact,
  one measured activation result, and a verified privacy statement for uploaded customer data.

## 2026-07-19 — homepage messaging reconciliation for customer-intelligence-first repositioning

**Shipped**
- Added [30-strategy/homepage-messaging-reconciliation-2026-07-19.md](/Users/rickmoy/code/upsight-marketing/30-strategy/homepage-messaging-reconciliation-2026-07-19.md), a working recommendation that reconciles the current **weekly leadership meeting** messaging house with the newer **customer intelligence / receipts** story and recommends the next homepage lead with **"Know your customers better. Share their stories with confidence."**
- Pressure-tested the live `getupsight.com` homepage metadata as of **2026-07-19** against the vault docs. Result: the live site is already closer to the customer-intelligence wedge ("Customer Intelligence with Receipts") than the canonical weekly-meeting messaging house, so the recommendation is to promote that wedge instead of inventing a third story.
- Captured explicit homepage message hierarchy, keep/cut/park guidance, section-by-section homepage structure, ICP recommendation, and unit-economics warnings (especially: donor/nonprofit should stay proof/use-case, not primary ICP; low-price + generous media/transcription usage looks dangerous).

**Surfaced**
- The strategy layer still has a live ownership conflict: `30-strategy/messaging-house.md` owns the public lead as **weekly leadership meeting**, while `30-strategy/messaging-house-customer-intelligence.md` argues the simpler **capture -> understanding** wedge. The new memo recommends resolving this by making customer intelligence the homepage lead and moving EOS/weekly-cadence lower on the page or to a dedicated route.

## 2026-07-17 — Automated caption pipeline for Remotion video projects

**Shipped**
- *Word-timed caption pipeline* in `40-gtm/assets/video/upsight-ssd-demo/05-remotion/src/captions/` — transcribe (OpenAI, word-level timestamps) → correct known product-name mistranscriptions (`data/vocabulary.json`, timing-preserving) → paginate into TikTok-style pages (`@remotion/captions`) → render with a deterministic, FPS-agnostic `CaptionRenderer` in one of three branded presets (**clean** / **emphasis** / **productDemo**). Handles clipped and edited (cuts-removed) timelines.
- *CLI*: `npm run caption-video -- --input <video> --output <captions.json> --preset clean`. Exports caption JSON + SRT.
- *Mirrored into `_template-video/05-remotion`* so every future video scaffolded via `new-video.sh` inherits it automatically (this repo's existing sharing mechanism for Remotion code, since each video project is its own npm package).
- 39 unit tests (timing/corrections/pagination/schemas + fixture transcript); real-render smoke-tested in headless Chrome (all 3 presets, both vocabulary corrections, word-by-word highlight timing) — caught and fixed a real overlap bug in the emphasis preset's active-word scale animation.
- Built the OpenAI call directly against `fetch`/`FormData` rather than the `openai` SDK — its `zod` peer dependency conflicts with the `zod@4.3.6` Remotion itself requires.
- Branch `claude/remotion-caption-pipeline-bo5j5x`, pushed. No PR opened (not requested).

**Stuck**
- Full end-to-end verification (real video → real OpenAI transcription → rendered output) wasn't possible in this session: no `OPENAI_API_KEY`, no `ffmpeg`/`ffprobe`, and no real source video/audio exist in this environment/repo. The render pipeline itself *was* verified against a fixture transcript with real headless Chrome rendering (see above) — only the live transcription call and ffmpeg/ffprobe media-inspection path are unverified against real inputs.

**Surfaced**
- `_template-video/05-remotion/src/compositions/ScenePlaceholder.tsx` had a pre-existing (unrelated) broken import path — fixed in passing since it blocked a clean `npm run typecheck`.


---

## 2026-07-17 — Git LFS enabled for media assets

**Shipped**
- Installed Git LFS, initialized it for this repository, and added repository-wide tracking rules for video, audio, raster images, PDFs, and editable media project formats.
- Renormalized existing tracked media into staged LFS pointers; unrelated working-tree edits remain unstaged.

**Surfaced**
- The previously pushed media blobs remain in Git history. Removing them would require a history rewrite and force-push, so no migration was attempted.

## 2026-06-06 — GTM sales pipeline stood up in UpSight + CRM scoping architecture

**Shipped**
- *GTM sales pipeline live in the UpSight CRM* — project `6dbcbb68` ("UpSight Interviews"), which is the de-facto sales workspace, **not** the project literally named "GTM" (that one is research). 6 deals: **Table Arts Society** ($39/mo, Validate, close 6/14), **Cytodyme** (DJ), **Events.com** (Cheryl Goodman), **Christina Font** (evaluation), plus pre-existing acme / Startup San Diego.
- *Contacts/orgs cleaned up* — added Christina Font + Cheryl Goodman; corrected Cheryl's company (Defense.com → **Events.com**); merged Haley Dall onto **The Table Arts Society**.
- *First EOS Rock* — **"Land paying GTM customers (Q2)"** (due 6/30) with the 3 active-deal tasks laddered under it → surfaces as a Goal in the Portfolio view.

**Stuck**
- *Org delete unusable over MCP* — `deletion-guard` needs the `x-last-user-message` header this Claude Code transport doesn't send, so it fails closed even when the exact phrase is typed. Two empty orgs (Defense.com, Arts Society) must be deleted in the web UI. (Root cause verified in code; not "undeployed.")
- *Project renames* (`6dbcbb68`→"GTM Sales", `3b800115`→"GTM Research") are in-app only — no rename tool over MCP.
- *Junk-task triage* parked — no structured task list over MCP (see d30).

**Decided** (architecture — tracked in Beads `UpSight-vuw`)
- *CRM (deals/orgs) → account-level by default, project-optional.* Account = client (isolation, already RLS-enforced); project = line of inquiry; relationships live at the account; **participants get promoted into the CRM deliberately**; grouping/filtering moves to a view layer (dynamic groups as chips), decoupled from storage. Schema already leans this way (people are account-scoped; org `project_id` nullable; only `opportunities.project_id` is hard-pinned).

**Surfaced / flagged** (filed as Beads in the UpSight repo)
- `UpSight-d30` — structured `fetch_tasks` (filtered task reads); implementation chip spawned.
- `UpSight-x76` — explicit `projectId` on deal/people MCP tools + account/project context switching.
- `UpSight-vuw` (+ `.1/.2/.3`) — account-level CRM decision + build tickets (nullable opp.project_id + account pipeline view; org-create defaults account-level; participant→relationship promotion).
- `UpSight-2ve` — dynamic groups (saved filters) as chips for views & analysis.
- `UpSight-31y` — document the task/Rock/project model in public docs.
- `UpSight-qf0` — org-delete header-guard bug (root cause corrected after initial mis-diagnosis).
- Dogfooding: org-delete friction logged in `10-ops/dogfooding-log.md`.
- Memory: recorded that the sales pipeline lives in `6dbcbb68`, not the "GTM"-named project.

## 2026-06-01 — vault reorg + ICP/market consolidation

**Shipped**
- *Vault restructured to a flow-based numbering scheme* (`00-control → 10-ops → 20-research → 30-strategy → 40-gtm → 99-archive`). Folded the old parallel folders (`market-research/`, `gtm-ops/`, `marketing-assets/`, `UpSight Marketing/`, `UpSight Product/`, `skills-survey/`, old `50-market`/`70-PLG`) into the numbered spine. Competitor research consolidated from 3 folders → 1 (`20-research/market-intel/Competitors/`). `40-gtm/` now has `campaigns/ channels/ assets/ experiments/ plg/`. `CLAUDE.md`/`README.md` rewritten; added `open-questions.md`, `experiments/_index.md`, `40-gtm/_index.md`. **NOTE:** old entries in this log + other docs link to pre-reorg paths (`../50-market/...`) — those links are now stale (historical record left intact).
- *Canonical ICP brief* at [30-strategy/icp/README.md](../30-strategy/icp/README.md) — consolidates all candidate ICPs with market sizing (#people, $ value, TAM/SAM/SOM), competitive chances, and wedge per segment.
- *Apollo competitive teardown* incorporated (from `competitive-apollo.zip`) into `market-intel/Competitors/`. Analyzed **Apollo users vs spreadsheet users → two distinct ICPs** (post-tool vs pre-tool; different urgency/WTP/switching friction).
- *Canonical user journeys* at [30-strategy/user-journeys.md](../30-strategy/user-journeys.md); *battle cards* at `40-gtm/assets/collateral/battle-cards.md`; *outreach* at `40-gtm/channels/outreach/sequences-by-icp.md`; *messaging matrix* at `30-strategy/icp/messaging-by-icp.md`.

**Decided** (see decisions.md)
- Beachhead = founder-led B2B sellers (on spreadsheets); Apollo refugees = acquisition wedge not standalone TAM; agencies = expansion; agent-distribution = parallel motion.

**Surfaced / flagged**
- `_UNSORTED-flagged/` holds misplaced investing/stock data (was `market-research/Raw-Data/`) and personal family photos (were in `UpSight Product/`) — pending your call.
- Pending: reconcile 3 drifted files + delete duplicate GTM dirs from the code repo (`Insights/docs/50-market`, `70-PLG`, `competitive/`).

## 2026-05-25 (Mon) — market scan

**Shipped**
- *Agent-builder ICP deep dive:* New doc at [50-market/agent-builder-icp-deep-dive.md](../50-market/agent-builder-icp-deep-dive.md). Decomposes the $120M→$1.2B "agent builder" TAM into 4 segments (vertical AI agent startups, in-house enterprise teams, AI consultancies, framework ecosystems). Argues segment A (vertical AI agent startups: 11x, Artisan, Conversica, Salesforge, Warmly, Qualified, ~150 funded names) is the 90-day primary — fastest decision, loudest pain, demo lands as-is. Includes named-target buyer/champion/signer map, pricing reality check ($999/mo + $0.005/query overage with co-marketing required), 90-day action sequence, and disqualifiers. Honest stress-test: 97% of headline TAM is actually segment B (enterprise) and requires SOC 2 + references we don't yet have. Realistic 12-month SAM in segment A: $5M–$30M.
- *Donor/fundraising CRM market assessment:* New doc at [50-market/donor-fundraising-crm-market.md](../50-market/donor-fundraising-crm-market.md). Covers market size ($3B+ broad → $9.7B by 2035, 7–12% CAGR), top competitors (Blackbaud, Salesforce Agentforce Nonprofit, Bonterra, DonorPerfect ~11K orgs, Bloomerang, Neon, Virtuous), 14 documented pain points (DP "clunky," migration brutality, AI bolt-on, donor-context-walks-with-staff), and UpSight fit assessment.

**Decided**
- Recommend *not* pivoting to donor CRM vertical. Direct CRM play requires gift processing / DAFs / receipting / NCOA — wrong fight, 5+ years of vertical SaaS work. Coherent only as MCP-based intelligence layer that plugs into existing donor CRMs (Play A in the doc); even then it's a side bet with a ~$45M ARR ceiling vs. agent-builder ICP.

**Surfaced**
- Patricia Sinay + SSD already in pipeline could be design partners for an MCP integration experiment if we want to test Play A cheaply.
- Bonterra rollup (OneCause Oct 2025, 5 brands in 4 years) + Blackbaud/EVERFI signal active PE consolidation — late market for new direct entrants, but supports "tired incumbents = differentiation opening" narrative.

---

## 2026-05-09 (Sat) — weekly review

**Shipped (since 2026-04-25)**
- *Chief-of-staff brain (5/9):* `Insights-a176.2` brain-icon chat button + BAML `RecommendNextMove` reasoning over real project state (research goals, decision questions, open tasks w/ overdue+due-today, 7-day activity counts, stalled opps >10d). Output: situation paragraph + next-best-action with why + 1-3 alternates. 60s cache + stale-while-revalidate. Reassess button forces re-classify. 15 routing tests lock in the survey-trigger fix.
- *v4 layout (5/9):* top nav removed; AIAssistantPanel rail (brand + project switcher + L1/L2 hover-expand + chat + profile); CanvasOverlay as single canonical renderer (killed duplicate CanvasPanel); page-vs-canvas pattern documented (`docs/30-howtos/gen-ui-canvas-pattern.md`); `/pipeline` is canonical example.
- *Gen-UI fast paths (5/9):* 7 fast paths via `runFastPathResponse` helper — person profile, person evidence, task list, task status change, survey results, theme list, opportunity pipeline; interview-prompts fast path resolved the 18k-token researchAgent burn.
- *CRM foundation (5/7):* ADR step 1 unified write path through `features/*/db.ts` (`jiyq`); ADR step 2 REST API for orgs + opps + tasks + interviews (`v4jh`, `78ef`, `w6ln`); org dedup probe `DEDUP_REQUIRED=1` (`bun3`); cross-project scoping; canonical MCP tool registry; multi-account membership resolution.
- *CRM gen-ui (5/7):* 11 missing components registered (`0gri`); evidence panels on org + opp detail (`tbrk`, `73ga`); unified activity timeline (`54wc`); agent routing fixes (`vsri`, `jl3y`, `e0bl`, `927j`); unified `ilike` entity search.
- *Data import (5/9):* AI-powered spreadsheet wizard, RFC 4180 parser, real-world column mapping, import history + provenance, account-settings Data & Imports, session rollback, industry as 1st-class.
- *UX polish (5/9):* path-aware suggestion chips (replacing missing systemContext regex); L2 nav 2-line wrap; theme-blue hover; PageContainer top-gap unification (CRM L2 = /pipeline); evidence-facets URL chunking (postgrest `.in()` length fix); /today 404 → /priorities redirect; setup tags-input keydown bubble fix; mode coupling decoupled from rail.isExpanded.
- *Pipeline dashboard (5/8):* real opportunity data wired; journey distribution panel; task category wiring. Now canonical daily pipeline view.
- *Desktop hardening (5/5–5/6):* orphan-interview recovery on reconnect, transient-network logout fix, R2 replay on startup, WSL crash, speaker attribution, panel state cleanup, beta channel.
- *Tooling (5/9):* loader timing helper (`app/lib/loader-timing.server.ts`) wired into /pipeline as the example.
- *Strategy (5/7):* `traction.md` shipped as canonical scoreboard; Q2 goals defined (3 paying, $300 MRR, desktop reliability shipped).

**Stuck**
- `Insights-kla8` survey email-drop bug — STILL OPEN. Production data loss continuing.
- 4 active deals 10–14 days stale (Cytodyme, SSD, Patricia, Paul).
- Cytodyme close target was today (5/9) — no signal logged.

**Decided**
- Closed `Insights-a176.2` (brain icon shipped). Spawned `Insights-a176.3` (SessionIntent storage). Decision punted: Mastra Memory vs. parallel `session_intents` table — lean Mastra Memory (working memory + thread metadata; thread storage + observationalMemory already wired in `app/mastra/memory.ts`). Decide before writing migrations.
- Created `Insights-skhq` — Direction-C v4 web epic. Tracks the codex-spec implementation that's currently active. Sibling to `Insights-9p5j` (gen-ui fixes) — every v4 page must follow gen-ui principles.
- Pipeline dashboard becomes canonical daily pipeline view; `pipeline.md` shifts to weekly snapshot.
- Sales-first reasserted: Cytodyme decision forced by Tue 5/12 (qualify out if silent).
- This week's killed items: `a176.3` storage layer, `a176.1` suggestions loop, `eifx` token cost, `e1y6` person profile, `jp4q` Focus26 wave 2, LinkedIn 3+4 — all defer.

**Surfaced from UpSight / research**
- Status.md was 3 weeks behind shipped reality — Friday EOD writes from now on.
- Themes file 12 days stale — refresh from MCP before Cytodyme follow-up.
- Evidence-log DJ entry placeholder — fill from real call notes.
- v4 page migration is "compose 3 widgets" not "build a new layout" once DataTable + page-chrome widgets are registered. First domino: /people.

---

## 2026-05-06 (Wed)

**Shipped**
- Ran daily PostHog briefings (5/5, 5/6): 0 new signups; active users 9→7; events 469→361; surveys started 2→0 responses.
- Diagnosed Recall Desktop transcript failures: consistent `mic-drop` pattern, no transcript packets; likely Recall-side degradation + separate Supabase token latency.

**Stuck**
- Desktop recording reliability: still seeing `mic-drop` / no audio capture; need confirmation via Recall status/support and a clean relaunch, then implement hardening/fallbacks.
- P0 survey bug: deferred identity drops respondent email when `respondent_fields=[]` (production data loss).
- Lenses/CRM: org/opportunity scoping and person↔org linking still flaky; need standardized find/create person/org/opp flow.

**Decided**
- Move PostHog API key out of `scripts/posthog-daily.sh` into env/secret store.
- Keep weekly focus on (1) desktop recording reliability, (2) lenses + org-level aggregates for demoability, (3) fixing silent data-loss bugs before new GTM pushes.

**Surfaced from UpSight / research**
- Product usage is steady but small; the app is primarily used for org/opportunity navigation (`interview_detail_viewed` heavy), not surveys. Prioritize making interview capture + synthesis rock-solid before scaling acquisition.

## 2026-04-27 (Mon) — week start

**Shipped**
- Fixed `/priorities` task list revalidation bug: `EditableStatusCell`, `EditablePriorityCell`, `EditableImpactCell` all used `revalidator` (full object) in `useEffect` deps — changed on every revalidation state transition, causing a loop that cancelled the in-flight loader before it could return. Fixed by destructuring `revalidate` (stable function ref) instead.
- Created SSD (Startup San Diego) opportunity in UpSight (`a7665c2f`). Created Bead `Insights-fr1u`.
- Updated weekly priorities: Cytodyme close + SSD demo video as co-equal top priorities.

**Stuck**
- Cytodyme demo (Wed Apr 29) still blocked on `Insights-le1v` (Trigger.dev RECALL_API_KEY missing) and `Insights-6x12` (Windows Recall SDK empty transcripts). Need to ship both before Wed.

**Decided**
- SSD outreach added to P0 this week. They have an active workspace — warm play, low effort, high signal.
- Focus26 wave 2 deprioritized in favor of SSD.
- OpenClaw Tailscale auth parked (time-box expired).

**Surfaced from UpSight / research**
- SSD workspace active at project `ef1a40d1` / account `9c46adb0`. Good demo story angle: cohort intelligence for nonprofit accelerators.

---

## 2026-04-25 (Sat)

**Shipped**
- Set up unified vault structure + priority layer (this system)

**Stuck**
- _(none)_

**Decided**
- Cowork dropped from stack. Two-tool model: Claude Code (doer) + Claude chat (thinker). See `decisions.md`.
- Obsidian vault is source of truth; repo mirrors via `CLAUDE.md`. See `decisions.md`.

**Surfaced from UpSight / research**
- _(populate from UpSight MCP weekly)_

---

<!-- Template for new entries — copy below this line -->

<!--
## YYYY-MM-DD (Day)

**Shipped**
-

**Stuck**
-

**Decided**
-

**Surfaced from UpSight / research**
-
-->
