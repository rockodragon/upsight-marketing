---
title: "Civic receipts demo: page copy"
status: draft
date: 2026-11-13
owner: Rick Moy
experiment: 40-gtm/experiments/2026-10-civic-receipts-demo.md
records_as_of: 2026-10-13
sources:
  - 40-gtm/experiments/2026-10-civic-receipts-demo-mapping.md (all facts about the three issues and the state's process)
  - 40-gtm/experiments/2026-10-civic-receipts-demo.md (hypothesis, guardrails, Carnegie quote, brief reconciliation)
  - 40-gtm/assets/collateral/government-accountability-demo-brief-2026-10-08.pdf (audience, link labels, status words, debate prompt, CTA, state page URLs)
  - 00-control/decisions.md (2026-10-09) and 00-control/open-questions.md (2026-10-08)
  - 00-control/status.md (2026-10-13, 2026-10-16, 2026-10-17) and 10-ops/dogfooding-log.md (2026-10-16, 2026-10-17) for what UpSight actually did with the data
  - 30-strategy/messaging-house-customer-intelligence.md, 30-strategy/messaging.md, 30-strategy/brand-brief.md section 8 (voice)
  - 30-strategy/brand-style-guide.md (figure styling)
---

# Civic receipts demo: page copy

**Conventions.** `[NEED: ...]` marks a fact the vault does not have. `[Figure N]` marks where a figure from the specs below goes. Every fact on the page is as of 13 October 2026, the date of the mapping research, unless a re-check moves it. Nothing here is publishable until the "Claims to verify" list at the bottom is cleared and the brief's 10-hour human review is done.

**Who it is written for.** The team brief names engagement consultants (the first sales hypothesis), cities, foundations and membership organizations. The page is written for a person in one of those seats who has run or paid for public input and has to answer for it. It demonstrates a trace, not a product.

**Order of the three issues.** Power lines, then alerts, then soil. Power lines is the cleanest chain: a document at every step. It teaches the reader the five steps and the three labels before anything goes wrong. Alerts then shows the labels doing work: the state's text is tested claim by claim and several claims have no document behind them. Soil comes last because it is the finding only a comment-level trace can make: an issue residents raised that never reached the option list. It leads straight into "What the gaps show" and the call to action.

---

## Page copy

# Receipts for public input

In 2025, California asked the public what LA fire recovery should focus on. 1,289 comments came in. We followed three issues from what people asked for to what was delivered, with a source for every step.

## What you're looking at

The state's Engaged California process turned those comments into 19 policy options, asked people to rate them, and published an action plan saying "how we're responding." The state already reports its own follow-through. This page adds the trace: which comments, which option, which agency, which document. A [November 2025 commentary](https://carnegieendowment.org/posts/2025/11/engaged-california-la-wildfires-lessons) by a Carnegie Endowment scholar said "participants need to see how their input has been used." Carnegie was itself [a partner in the state's process](https://innovation.ca.gov/blog/posts/fire-survivors-shaping-la-fire-rebuilding-action-plan-engaged-california/).

Each issue runs through five steps, from what people asked for to what was delivered. Each link between steps carries a label:

- **Official documented:** a primary document says it.
- **Analyst-inferred:** documents make it plausible; none says it.
- **No link found:** we searched and found no document.

Delivery is marked announced, funded, underway or completed, as of 13 October 2026. A shared subject does not prove a comment caused a policy. We grade no one; we show what the documents say, and where they are silent.

[Figure 1: The three issues at a glance]

## How this was built

We downloaded the state's data files on 13 October 2026 and recounted every figure. [Figure 2]

- **1,289 comments** went into the state's 10 topics and 36 named groups. 381 of them, 29.6%, landed in a topic's "Other" group or were "general comments" outside any topic, and never became a theme.
- **19 options** were written by "a group of policy, disaster relief, and community leaders" using "their expertise and generative AI." No document we found says what was left out, or why.
- **251 voters** cast 3,977 votes: 65 from the Palisades fire zone, 72 from the Eaton fire zone, 114 from neither. [Figure 3]
- **The action plan** has five focus areas and no date.

We imported the comments into UpSight, our evidence tool, as an anonymous survey: one response per comment. [NEED: theme result: number of themes, and how many of the 381 unthemed comments now sit in one.] [NEED: city mapping: method and count, or cut this.] Every count opens to the comments behind it: [NEED: UpSight public share link].

We traced each issue through primary documents, re-opening 24 key ones by hand. Items found only in news reports are not used.

## 1. Underground power lines: documented at every step, binding at none

**Asked for.** 88 comments in the "Underground power lines" group. Its option, "Bury power lines and equipment safety measures," ranked first of the 19.

**Policy response.** The Governor's Executive Order N-24-25 (March 2025) suspended environmental and coastal permitting for rebuilding power and telecom lines, including undergrounding "if such changes are determined appropriate by the utility or provider." It orders no undergrounding and sets no miles, deadline or money. A 90-day utility report ordered by the Los Angeles Mayor was not found.

**Responsible.** Southern California Edison (SCE) for Altadena and the Malibu area. The Los Angeles Department of Water and Power (LADWP) for Pacific Palisades. The California Public Utilities Commission (CPUC) for costs. Neither executive order binds the telecom companies. No state agency is charged with delivery.

**Commitment.** SCE plans a preliminary 153 circuit miles "over a number of years." LADWP is "committed to undergrounding" in the Palisades where feasible. The county's "more than 150 miles" is SCE's number. No state or county document sets a binding date, mileage or budget. The County Board says telecom companies "have refused"; no complaint to the CPUC was found.

**Delivery.** Underway in the Malibu area and Altadena, with some Malibu-area circuits completed in 2025. LADWP had trenched 1.65 of 6.5 miles of Palisades backbone conduit by December 2025; residential lines had not started. SCE does not publish miles by community, and its own sources disagree on Altadena. [Figure 4] [Figure 5]

**Sources.** Every link opened 14 November 2026.
- [Executive Order N-24-25](https://www.gov.ca.gov/wp-content/uploads/2025/03/N-24-25-Undergrounding-EO-bl_Final-GGN-Signed-.pdf), 27 Mar 2025 (gov.ca.gov)
- [Mayor's Emergency Executive Order No. 5](https://mayor.lacity.gov/news/mayor-bass-issues-emergency-executive-order-help-palisades-residents-expedite-rebuilding-more), 21 Mar 2025 (full text on the Mayor's release)
- SCE [rebuild plan](https://download.edison.com/406/files/20253/ReconstructionRebuildPlan.pdf) and [letter to the Governor](https://download.edison.com/406/files/20253/GOResponse041125.pdf), 11 Apr 2025
- [LA County Blueprint for Rebuilding](https://file.lacounty.gov/SDSInter/lac/1189434_202508BlueprintForRebuildingvSF2.pdf), Jul 2025
- [County Board motion on telecom undergrounding](https://file.lacounty.gov/SDSInter/bos/supdocs/209802.pdf), 18 Nov 2025
- [SCE undergrounding table](https://www.sce.com/outages-safety/wildfire-safety/targeted-undergrounding), read 18 Sep 2026 (the live page is now dated 21 Oct 2026), and Altadena fact sheets, Jul 2026, such as [Gorge/Rosebud](https://www.sce.com/sites/default/files/AboutUs/TransmissionProject/Gorge/2026_REVGorge_Rosebud_ProjectFactSheet.pdf) and [Tola](https://www.sce.com/sites/default/files/AboutUs/TransmissionProject/Tola/2026_REVTolaP1P2_ProjectFactSheet.pdf)
- [LADWP statement on the Palisades](https://pacpalicc.org/wp-content/uploads/2025/12/Alphabets-PR-Statement-12.15.2025.Rev1_.pdf), 15 Dec 2025 (LADWP's meeting recap, posted by the Pacific Palisades Community Council; no copy found on an LADWP site)

## 2. Emergency alerts: county work documented, four credits without a document

**Asked for.** 112 comments on emergency communication. Residents asked for one alert system that reaches everyone, and for post-event information in one place. 88% of votes on "Strengthen emergency communication networks" were supportive.

**Policy response.** In January 2025 the LA County Board of Supervisors ordered an independent review of evacuations and alerts. The McChrystal Group's review (September 2025) found "outdated policies, inconsistent practices, and communications vulnerabilities" and no "clearly recognized, centralized source" of information; the Board adopted an implementation motion 5–0. A Fire Safety Research Institute report for the Governor (October 2026) calls the alert process "overly complex." No agency had adopted it by 13 October.

**Responsible.** The County Board; the county's Office of Emergency Management, Fire Department and Sheriff; and the alert vendor, Genasys.

**Commitment.** Review reports every 90 days: met. Implementation reports at 60 days, then every 90: one came about 16 days late, and one was not found.

**Delivery.** Several county fixes are completed, such as warnings for zones next to an evacuation order. The emergency management budget rose from $10.7 million to $24.3 million; 41 of 81 budgeted positions were filled by August 2026. The cause of the 9 January 2025 countywide false alert is unresolved. [Figure 6]

**The state's text.** Of nine claims, three are official documented, two analyst-inferred and four have no link found, among them a City "biweekly steering committee." [Figure 7]

**Still open.** Nothing we found addresses one system that reaches everyone. The only alert that needs no sign-up, the federal wireless alert, carries English and Spanish only and no map, and the county's 88 cities run different systems.

**Sources.** Every link opened 14 November 2026.
- [County Board motion ordering the review](https://file.lacounty.gov/SDSInter/bos/supdocs/199710.pdf), 28 Jan 2025
- [McChrystal Group after-action review](https://file.lacounty.gov/SDSInter/bos/supdocs/207915.pdf), 25 Sep 2025 (county hub: [lacounty.gov/aar](https://lacounty.gov/aar/))
- [Implementation motion](https://file.lacounty.gov/SDSInter/bos/supdocs/207966.pdf), 30 Sep 2025
- County progress memos, [15 Dec 2025](https://file.lacounty.gov/SDSInter/bos/bc/1197877_BM_ImplementingAfterActionReportRecommendationsfortheJanuary2025EatonandPalisadesFires_121525.pdf) and [3 Aug 2026](https://file.lacounty.gov/SDSInter/bos/bc/1214307_AARBoardMemoSecondReportBack_finalsigned_.pdf)
- [County recommended budget](https://file.lacounty.gov/SDSInter/bos/supdocs/215176.pdf), 14 Apr 2026
- [Fire Safety Research Institute Phase Two report](https://fsri.org/resource/southern-california-fires-incident-analysis-report), 2 Oct 2026 ([release](https://fsri.org/research-update/southern-california-fires-incident-analysis-report-released))
- ["Sounding the Alarm,"](https://robertgarcia.house.gov/sites/evo-subsites/robertgarcia.house.gov/files/evo-media-document/false-alerts-final-report-5.10.pdf) Rep. Garcia, 12 May 2025

## 3. Soil testing: raised by residents, never an option

**Asked for.** 74 comments: 43 in the soil-testing group and 31 more under debris removal. The state's own findings page named soil testing a top concern. None of the 19 options mentions soil, testing, contamination or water quality.

**Policy response.** None in the state's process, and no document says why. Outside it, FEMA told the state in February 2025 that it "will not reimburse the costs for soil testing unless testing shows that positive results are clearly attributed to the fires." The county ran free lead testing and approved a $1 million remediation program. A 2026 state law orders lead and asbestos regulations by 2028 if a companion bill takes effect; its summary does not mention soil.

**Responsible.** Contested. FEMA pointed to the state. A county supervisor called state reimbursement of the county "never a feasible option." We found no agency that takes responsibility for declaring a cleared lot safe.

**Commitment.** From the state's process: none. The EPA promised lead-sampling results by spring 2026 and delivered them in May. Two county report-backs were not found.

**Delivery.** Debris and six inches of soil were removed without confirmation sampling. County sampling found lead averaging above California's screening level in 10 of 23 grids of standing Eaton homes; the EPA found 95 of 100 randomly sampled Eaton parcels below the federal level at the surface. The county's 2025 sample tested metals and other fire chemicals; the EPA sample and the free programs test lead only. Remediation is funded, not started. [Figure 8] [Figure 9]

**Sources.** Every link opened 14 November 2026.
- Engaged California [findings page](https://engaged.ca.gov/lafires-recovery/agenda-setting-findings/), [action plan](https://engaged.ca.gov/lafires-recovery/action-plan/) and data files ([comments](https://engaged.ca.gov/public/data/wildfire_agenda_setting_comments.csv), [deliberation comments](https://engaged.ca.gov/public/data/lafires_deliberation_all_comments.csv), [votes](https://engaged.ca.gov/public/data/lafires_voting_data_v3.json))
- FEMA Region 9 letter, 19 Feb 2025 ([copy at engineering.purdue.edu](https://engineering.purdue.edu/PlumbingSafety/resources/Wildfire-Soils-Cleanup-Theory-2025-FEMA-to-CalOES.pdf)) [NEED: a second copy. On 14 Nov 2026 none was found on fema.gov, caloes.ca.gov, gov.ca.gov or lacounty.gov; request it from Cal OES]
- EPA releases, [12 Jan](https://www.epa.gov/newsreleases/epa-announces-soil-sampling-initiative-help-la-residents-further-validate-fire-cleanup) and [18 May 2026](https://www.epa.gov/newsreleases/epas-eaton-fire-soil-sampling-confirms-federal-cleanup-protocols-effectively)
- County Board motions, [15 Apr](https://file.lacounty.gov/SDSInter/bos/supdocs/202168.pdf) and [4 Nov 2025](https://file.lacounty.gov/SDSInter/bos/supdocs/209300.pdf)
- [County Public Health final findings](https://publichealth.lacounty.gov/phcommon/public/media/mediapubhpdetail.cfm?prid=5138), 12 Sep 2025
- [Supervisor Barger statement](https://kathrynbarger.lacounty.gov/supervisor-barger-issues-statement-on-soil-and-lead-testing-efforts-following-eaton-fire/), 16 Jan 2026
- AB 1642, signed 15 Sep 2026 ([Governor's release](https://www.gov.ca.gov/2026/09/15/governor-newsom-signs-wildfire-recovery-package-to-strengthen-protections-and-focus-on-rebuilding-for-survivors/))

## What the gaps show

1. **An issue can drop out before policy begins.** Soil testing never became an option, so nothing downstream had to answer it. Only a trace from comments to options shows that. Across all topics, 381 comments never became a theme. [NEED: what UpSight's themes found in them.]
2. **Promised reports go missing.** Five reports with official deadlines were not found. [Figure 10]
3. **Credit outruns documents.** Four alerts claims have no document behind them. The power-lines miles are a utility's plan, not a requirement.

**For debate:** when government asks for your input, what should it owe you in return?

**Think we got a link wrong?** Send us the document: [NEED: challenge channel, an email address or form]. We will correct the page and note the change.

## Method and limits

- Three issues, not the whole recovery.
- Comment counts are the state's own groups. Figure 3 shows two vote measures: ours, and the state's "average support."
- The action plan is undated and may change [NEED: publish-day re-check date].
- The comments are public and anonymous. The state's [conditions of use](https://engaged.ca.gov/conditions-of-use/) say information on its site is "in the public domain" unless otherwise indicated.
- UpSight is independent. This page is not affiliated with or endorsed by the State of California, Engaged California, any agency named here, or any campaign.

## Trace your own input

Run public or stakeholder input for a city, a county, a foundation or a client? Bring one set of comments and the decisions that followed. We will trace one issue with you, the same way.

**[Button] Trace one issue with Rick** [NEED: destination, a form or booking link]

---

## Figure specs

**Conventions for every figure.**
- Styling from `30-strategy/brand-style-guide.md`: Inter for text, JetBrains Mono for column labels, brand tokens only. Caption and source text at body contrast (`--mkt-text`, or `--mkt-text-dim` at 0.7 on `--mkt-bg`); never the 0.6 variant on the alt background without checking 4.5:1. Table headers at full text color.
- Status and labels are printed as words in every cell. Color may reinforce a word; it never replaces one.
- No dashes or blank cells. Every cell says in words what it means.
- Status words, each a **proposed definition** for Rick to approve (the brief lists the four words but defines none).
  - **announced** (proposed definition): an official document says it will happen, and we found no approved money and no sign that work has started.
  - **funded** (proposed definition): money for it has been approved, in a budget, rate decision or grant; if work has also started, the cell says "funded, underway".
  - **underway** (proposed definition): a primary document shows the work has started and does not report it finished.
  - **completed** (proposed definition): a primary document reports it finished; the word says nothing about whether it was enough.
  - Two words in one cell mean both are documented. Any other word in a status cell is explained in that row's evidence cell. [NEED: Rick to approve the four proposed definitions, N12]
- Print the caption exactly as written, on the figure, directly under it.

### Figure 1. The three issues at a glance

Type: table, three rows.

| Issue | Comments in the state's groups | Became one of the 19 options? | Responsible body | Binding commitment | Delivery as of 13 Oct 2026 |
|---|---|---|---|---|---|
| Underground power lines | 88 (group "Underground power lines") | Yes: "Bury power lines and equipment safety measures." 95% of 210 votes supportive; the state reports 92% average support | SCE (Altadena, Malibu area); LADWP (Pacific Palisades); CPUC (what ratepayers pay). Telecom companies are bound by neither executive order | SCE plan: a preliminary 153 circuit miles "over a number of years." No binding date, mileage or budget found in any state or county document | Underway in the Malibu area and Altadena; some Malibu-area circuits completed in 2025; Palisades residential lines not started |
| Emergency alerts | 112 on emergency communication, 56 of them on post-emergency communications | Yes: "Strengthen emergency communication networks." 88% of 209 votes supportive; the state reports 86% average support | LA County Board of Supervisors; county Office of Emergency Management, Fire Department and Sheriff | Review reports every 90 days (met). Implementation reports at 60 days, then every 90 (one late, one not found) | Several county fixes completed; budget and staff funded; one alert system that reaches everyone is addressed by no document found |
| Soil testing | 74 (43 in "Soil and other environmental testing", 31 in the "Other" group under "Debris removal") | No. None of the 19 options mentions soil, testing, contamination or water quality | No agency found that takes responsibility for declaring a cleared lot safe | None from the state's process. State lead and asbestos regulations due 31 Dec 2028, only if a companion bill takes effect | Lead sampling completed by the county and the EPA; remediation funded, not started |

Caption: "Source: UpSight trace of the Engaged California comment and voting files (engaged.ca.gov, downloaded 13 Oct 2026) to the primary documents listed under each issue. Records as of 13 Oct 2026. Real data, not illustrative. Comment counts are the state's own groups, recounted by UpSight. 'Supportive' means a vote of 5, 6 or 7 on the state's 7-point scale."

### Figure 2. The state's process, in its own numbers

Type: five-step horizontal flow (stacks vertically on phones). Each step: label, number, one line.

| Step | What happened | Numbers |
|---|---|---|
| 1. Comments, March to 16 May 2025 | The public wrote in | 1,289 comments, about 52,000 words |
| 2. State grouping | Commenters wrote under one of 10 topics or none; the state's AI then sorted each topic's comments into groups | 36 named groups, plus an "Other" group in every topic. 381 comments (29.6%) did not become a theme: 276 in a topic's "Other" group, 105 "general comments" outside any topic |
| 3. Policy options | Leaders "used their expertise and generative AI" to write options | 19 options. What was left out, and why: not documented in reviewed sources |
| 4. Rating | Votes on a 7-point scale, plus comments | 251 voters cast 3,977 votes and left 1,509 comments and replies. Voters: 65 Palisades zone, 72 Eaton zone, 114 outside both. The state says "more than 3,000 community members were invited" |
| 5. Action plan | "How we're responding" text | 5 focus areas. The plan carries no date |

Caption: "Source: Engaged California pages and data files (wildfire_agenda_setting_comments.csv, lafires_deliberation_all_comments.csv, lafires_voting_data_v3.json), engaged.ca.gov, downloaded 13 Oct 2026. Counts recomputed by UpSight from the files. Real data, not illustrative."

### Figure 3. How voters rated seven of the 19 options

Type: table (a dot plot of the four zone columns is optional; if drawn, label every dot with its value and n).

| Option (state's title) | Votes | Supportive, all voters | Palisades zone | Eaton zone | Outside both zones | State's reported average support |
|---|---|---|---|---|---|---|
| Bury power lines and equipment safety measures | 210 | 95% | 98% (n=60) | 91% (n=57) | 95% (n=93) | 92% |
| Improve water systems for firefighting | 209 | 90% | 88% (n=60) | 90% (n=58) | 92% (n=91) | 87% |
| Strengthen emergency communication networks | 209 | 88% | 88% (n=60) | 83% (n=58) | 90% (n=91) | 86% |
| Help people find financial support programs | 211 | 86% | 87% (n=60) | 87% (n=60) | 86% (n=91) | 82% |
| Dedicate teams to support permitting | 212 | 83% | 85% (n=59) | 87% (n=60) | 78% (n=93) | 82% |
| Emergency communication hubs in communities | 215 | 70% | 55% (n=60) | 72% (n=60) | 79% (n=95) | 74%. Not one of the action plan's five focus areas |
| Increased housing density and expedited permits | 214 | 39% | 24% (n=58) | 37% (n=62) | 49% (n=94) | 44%. Not one of the action plan's five focus areas; a separate option from "Dedicate teams to support permitting" |

Caption: "Source: Engaged California voting file lafires_voting_data_v3.json (engaged.ca.gov), downloaded 13 Oct 2026 (permitting-teams row: same file, downloaded 14 Nov 2026); percentages recomputed by UpSight. Real data, not illustrative. Seven of the 19 options shown: the action plan's five focus areas and two others. 'Supportive' = votes of 5, 6 or 7 on the state's 7-point scale, divided by all non-blank votes on that option. n = voters in that zone who voted on that option. 'State's reported average support' is the figure the state shows on its action plan page and stores in the same file. The state does not define it in words; UpSight found it equals each option's average vote rescaled so 'Strongly opposed' is 0% and 'Strongly supportive' is 100%, which matches the state's figure for all 19 options."

Note for the builder: the permitting-teams row ("Dedicate teams to support permitting", the action plan's fifth focus area) was recomputed from `lafires_voting_data_v3.json` on 14 Nov 2026 by the same method; that method reproduces the mapping file's other six rows exactly. The action plan lists its five focus areas under the same titles as the options, so the water and financial-support rows are confirmed matches. The average-support formula is UpSight's reconstruction (analyst-inferred), not a state definition; the caption says so.

### Figure 4. Underground power lines: what has been delivered

Type: table.

| Item | Status | Evidence, with date |
|---|---|---|
| Malibu-area circuits (SCE) | underway, partly completed | 16 miles underway, Apr 2025. Las Flores and Rambla Pacifico work "completed" per a County Board motion, Nov 2025. Mulholland circuit "Completed in 2025"; Merlin and Nicholas in construction for 2026–27; others in permitting for 2027 (SCE table, 18 Sep 2026) |
| Altadena circuits (SCE; 63 of about 85 miles go underground) | underway; none reported complete | Gorge and Rosebud through July 2026; Tola and Lamanda to Oct 2026; Seco from late 2026 to early 2027 (SCE fact sheets, Jul 2026). SCE's own table of 18 Sep 2026 shows no construction marker for any Altadena circuit. The two SCE sources disagree; we have not established which is current |
| SCE underground miles, whole system | completed; not broken out by community | 57 underground miles installed in 2025 (filing with the state Office of Energy Infrastructure Safety, 9 Apr 2026). "About 90 miles... including all rebuild areas since January 2025" (SCE chief executive, 30 Jul 2026). No count for the fire areas alone is published |
| SCE funding | funded in part | CPUC adopted the rate-case undergrounding budget, 18 Sep 2025. About 30 miles "expected to be recovered through CEMA," a disaster cost account; "no other funding opportunities identified" (SCE, 29 Jun 2026). Customers pay through rates, subject to CPUC review |
| Palisades backbone conduit (LADWP; 6.5 miles) | underway | 1.65 miles of trench and 32 underground vaults and structures by 15 Dec 2025; then paused for a contractor change |
| Palisades residential undergrounding (LADWP) | announced | City plan lists six duct-bank projects at $664 million, "pending funding," possibly not possible "without additional funding from the Federal and State governments as well as philanthropy" (AECOM plan for the City, Feb 2026). Start date: no primary document found as of 13 Oct 2026 |
| State money for undergrounding | no primary document found | No state document committing money to undergrounding found as of 13 Oct 2026 |
| Home connection costs | announced, not funded | SCE estimate: $8,000 to $10,000 per home (Apr 2025). No funding for home connections found in primary documents as of 13 Oct 2026 |

Caption: "Source: SCE rebuild plan (11 Apr 2025), SCE targeted-undergrounding table (18 Sep 2026) and Altadena fact sheets (Jul 2026), SCE filings to the Office of Energy Infrastructure Safety (9 Apr and 29 Jun 2026), SCE SEC filing (30 Jul 2026), CPUC fact sheet (18 Sep 2025), County Board motion (18 Nov 2025), LADWP statement (15 Dec 2025), City of LA Infrastructure Restoration Plan (Feb 2026). Status as of 13 Oct 2026. Real data from primary documents, compiled by UpSight. News-only items are excluded."

### Figure 5. Underground power lines: the state's text against the record

Type: table. Column 1 must use the state's exact wording on publish day.

| The state's "how we're responding" text | Label | What the record shows |
|---|---|---|
| "The county and state are working with power... companies" | Official documented | Documented; no qualification found |
| "...and telecommunications companies" | Analyst-inferred | The only primary document on telecom participation records refusal (County Board motion, 18 Nov 2025) |
| "Governor... signed an executive order in March 2025 to fast-track this work" | Official documented | The order lifts permits only. SCE calls it "critical" to its targets |
| "Mayor Karen Bass issued an executive order... climate-resilient infrastructure... hardening utilities" | Official documented | The order commissions reports, not construction. The 90-day report was not found |
| "Utilities are working closely with local leaders" | Official documented | Coordination is documented |
| "Construction is already underway in Malibu, Altadena, and Pacific Palisades" | Official documented for Malibu and Altadena; partly documented for Pacific Palisades | In Pacific Palisades only the backbone conduit is underway; residential lines have not started |
| "It is expected to continue for several more years" | Official documented | SCE: "over a number of years" |
| "The state and county are calling for a coordinated approach to undergrounding power and telecom lines" | County: official documented. State: analyst-inferred | The state's only document is the same-trench permit clause in Executive Order N-24-25 |

Caption: "Source: Engaged California action plan (engaged.ca.gov/lafires-recovery/action-plan/, read 13 Oct 2026; the page is undated) checked against the primary documents listed under issue 1. Labels: official documented = a primary document says it; analyst-inferred = plausible from documents, not stated; no link found = no document found after searching. Real data, compiled by UpSight."

### Figure 6. Emergency alerts: what has been delivered

Type: table.

| Item | Status | Evidence, with date |
|---|---|---|
| Adjacent zones get an evacuation warning when a zone is ordered to evacuate | completed | County tracker; first used in the Canyon, Hawk and King fires (County memo, 3 Aug 2026) |
| Alert templates with timestamps; a vendor prompt before any countywide send; staff job aids | completed | County letter to Rep. Garcia, 1 Apr 2025; County memo, 3 Aug 2026 |
| Monthly alert drills; Sheriff trained 23 stations | underway | Since Jan 2026 (County memo, 3 Aug 2026) |
| Office of Emergency Management moved under the County CEO; budget from $10.7 million and 37 staff to $24.3 million and 81 staff | funded, underway | Recommended budget, 14 Apr 2026. 41 of 81 positions filled by 3 Aug 2026 |
| $20.2 million for emergency-management facilities "consistent with the McChrystal After Action Report" | funded | Supplemental budget fact sheet, 29 Sep 2026. No Board vote record found |
| 24-hour Watch Center | completed, by indirect evidence | Planned for Feb 2026; described as operating in the 3 Aug 2026 memo; no launch notice found |
| One consolidated public alert-information platform | announced | County tracker says "Ongoing" (existing programs continue). No product delivered |
| "EVAC-to-ALERT" single sign-on (the county tracker's name for the item) | announced | County tracker: "No timeline" |
| Cause of the 9 Jan 2025 countywide false alert | unresolved: no agreed cause | County: "unable to be duplicated." Vendor: alert area not saved to the alert channel. FCC: carrier equipment overload and missing alert identifiers (1 Apr 2025). Neither independent review examined it |
| West Altadena warning delay | reviewed; investigation open | Citygate review for County Fire (18 May 2026): no misconduct, no bias. California Attorney General investigation opened 12 Feb 2026; no findings published as of 13 Oct 2026 |
| City of Los Angeles | announced | Emergency Executive Order No. 5 issued; no evaluation and no steering-committee record found. The Fire Safety Research Institute notes the City "has fully implemented Genasys" by Oct 2026 |

Caption: "Source: County Board motions (28 Jan and 30 Sep 2025), County progress memos (15 Dec 2025, 3 Aug 2026), County recommended budget (14 Apr 2026) and supplemental budget fact sheet (29 Sep 2026), County letter to Rep. Garcia and FCC letter (1 Apr 2025), Citygate report (18 May 2026), Attorney General notice (12 Feb 2026), Fire Safety Research Institute report (2 Oct 2026), Mayor's Emergency Executive Order No. 5 (21 Mar 2025). Status as of 13 Oct 2026. Real data from primary documents, compiled by UpSight."

### Figure 7. Emergency alerts: the state's text against the record

Type: table. Column 1 must use the state's exact wording on publish day; rows 1, 2 and 6 to 8 are paraphrased in the mapping file.

| The state's "how we're responding" text | Label | What the record shows |
|---|---|---|
| The County Board ordered an independent review, retained outside experts, and required reports every 90 days | Official documented | The 90-day cadence covered the review. Implementation reports since have been irregular |
| Enhanced training, more rigorous tests, improved targeting, clearer wording, stronger coordination | Official documented, as County work | County memo, 3 Aug 2026; County letter, 1 Apr 2025 |
| That work credited to "the city's Emergency Management Department" | Analyst-inferred | Plausible from documents; no document says the City department did it |
| That work credited to the "County Coordinated Joint Information Center" | No link found | No document found |
| "The city is coordinating a biweekly steering committee" | No link found | No steering-committee record found |
| Implementing recommendations from the McChrystal Group | Official documented | County Board implementation motion, 30 Sep 2025 |
| Implementing recommendations from the Fire Safety Research Institute | No link found | Report published 2 Oct 2026; no body had adopted it as of 13 Oct 2026 |
| Implementing recommendations from "the U.S. Congress" | Analyst-inferred | One Member's report (Rep. Garcia, 12 May 2025), mostly aimed at FEMA and the FCC. No hearing or bill found |
| "Increased federal funding requests" | No link found | No request found |

Caption: "Source: Engaged California action plan (engaged.ca.gov/lafires-recovery/action-plan/, read 13 Oct 2026; the page is undated) checked against the primary documents listed under issue 2. Labels: official documented = a primary document says it; analyst-inferred = plausible from documents, not stated; no link found = no document found after searching. Real data, compiled by UpSight."

### Figure 8. Soil testing: what has been delivered

Type: table.

| Item | Status | Evidence, with date |
|---|---|---|
| Debris and six-inch soil removal, with no sampling to confirm | completed | 5,643 Eaton parcels excavated; the state calls it the "fastest post-disaster debris removal in California history" ([Engaged California action plan](https://engaged.ca.gov/lafires-recovery/action-plan/), "Did you know?" box) |
| County and Roux representative sampling | completed | More than 800 properties, 18 Feb to 26 Mar 2025; preliminary results 10 Apr 2025, final 12 Sep 2025. Tested for metals, PAHs (chemicals from burning) and dioxins. Eaton: lead averaged above California's 80 mg/kg screening level in 10 of 23 grids of standing homes. Palisades: no large-scale impacts, including for lead; two isolated areas exceeded levels for other chemicals. Cleared parcels "can still have areas" above residential screening levels |
| EPA lead sampling, 100 random Eaton parcels | completed | 4,200 borings. 95 of 100 parcels below the federal 200 mg/kg level at the surface; 98 of 100 at six inches (18 May 2026). Lead only, burned footprints only, federal not state level, Eaton only |
| Free county lead testing for residents | underway; moved to USC | Launched May 2025; more than 1,600 samples by 4 Nov 2025; moved to USC's CLEAN program 15 Aug 2026 (USC reports 5,000 to 6,000 samples, funded by FireAid and LA Care) |
| Remediation program | funded, not started | $1 million from the county plus $2 million in state money through the California Community Foundation; launch planned for fall 2026 |
| State regulations (AB 1642) | enacted; regulations not yet written | Signed 15 Sep 2026; regulations due 31 Dec 2028, only if a companion bill takes effect |
| Further state funding for testing | not found | No state funding for testing beyond the items above found as of 13 Oct 2026 |
| Drinking water | completed | All nine fire-affected water systems cleared by 9 May 2025 (State Water Board). Palisades declared safe 7 Mar 2025 after 469 samples. A later Malibu boil-water notice (6 to 8 Aug 2025) came from a Caltrans bridge project, not the fires |

Caption: "Source: County Public Health final findings (12 Sep 2025) and Roux report, Engaged California action plan (read 14 Nov 2026), EPA releases (12 Jan and 18 May 2026), County Board motions (15 Apr and 4 Nov 2025), LA County Development Authority letter (21 Jul 2026), USC CLEAN program page (4 Aug 2026), AB 1642 (chaptered 15 Sep 2026), State Water Board release (9 May 2025), LADWP (7 Mar 2025), LA County Malibu notices (6 and 8 Aug 2025). mg/kg = milligrams of lead per kilogram of soil. Status as of 13 Oct 2026. Real data from primary documents, compiled by UpSight."

### Figure 9. Soil testing: the state's findings text against the record

Type: table.

| The state's findings text | Label | What the record shows |
|---|---|---|
| "Residents want soil testing" | Official documented | The state's own comment file |
| "The federal government has declined comprehensive soil testing" | Official documented | FEMA letter, 19 Feb 2025. Partly overtaken by the EPA's 100-parcel sample, which is lead only and Eaton only |
| "The state... [is] proactively testing soil" | No link found | State soil guidance (Aug 2025) and a remediation appropriation exist; no state-run sampling found [NEED: primary link for DTSC, "Residential Soil Evaluation: Guidance for the 2025 Los Angeles Wildfires", Aug 2025. Its home is dtsc.ca.gov/emergency-wildfire-guidance/, which refused automated requests on 14 Nov 2026; open it in a browser. Do not cite the only copy that loaded, on uphelp.org, a non-government site] |
| "...community, and universities are proactively testing" | Official documented | County and USC testing programs |
| "Confusion about who is responsible persists" | Analyst-inferred | Documents show each level of government deferring to another; none says "confusion" or assigns responsibility |
| A state commitment that answers this finding | No link found | No commitment found in reviewed sources as of 13 Oct 2026 |

Caption: "Source: Engaged California findings page (engaged.ca.gov/lafires-recovery/agenda-setting-findings/, read 14 Nov 2026) checked against the primary documents listed under issue 3. Labels: official documented = a primary document says it; analyst-inferred = plausible from documents, not stated; no link found = no document found after searching. Real data, compiled by UpSight."

### Figure 10. Promised reports we could not find

Type: table.

| Who set the deadline | What was promised | Due | Status as of 13 Oct 2026 |
|---|---|---|---|
| Mayor of Los Angeles, Emergency Executive Order No. 5 (21 Mar 2025) | Report on utility resilience, including undergrounding and joint trenching | 19 Jun 2025 (90 days) | Not found in reviewed sources |
| Mayor of Los Angeles, Emergency Executive Order No. 5 (21 Mar 2025) | City Emergency Management Department evaluation of warning systems | May 2025 (60 days) | Not found in reviewed sources |
| LA County, McChrystal implementation reporting | Implementation progress report | 30 Jan 2026 | Not found in reviewed sources. Reports dated 15 Dec 2025 and 3 Aug 2026 were found |
| LA County Board of Supervisors, motion of 15 Apr 2025 (lead testing near the Eaton burn area) | Report back to the Board | 30 days after the motion | Not found in reviewed sources |
| LA County Board of Supervisors, motion of 4 Nov 2025 (testing extended to the Palisades; remediation money) | Report back to the Board | 60 days after the motion | Not found in reviewed sources |

Caption: "Source: Mayor's Emergency Executive Order No. 5 (21 Mar 2025), County Board motions (30 Sep 2025, 15 Apr 2025, 4 Nov 2025) and County progress memos (15 Dec 2025, 3 Aug 2026), searched by UpSight through 13 Oct 2026. 'Not found' means we searched public sources through 13 Oct 2026 and found no copy; it does not prove the report was never written. Real data, compiled by UpSight."

---

## Claims to verify before publishing

Every factual statement on the page, in the text and in the figures, with the vault source it rests on. "Mapping" means `2026-10-civic-receipts-demo-mapping.md`. Flags: **OK** = in the mapping from a primary document; **QUOTE** = check the words against the document; **FLAG** = the mapping marks it unsupported, uncertain, secondary or a gap, or the sources disagree; **NEED** = missing from the vault; **GK** = general knowledge, not from the vault.

### Open placeholders (fill or cut every one)

Research pass on N1, N5, N7, N9, N10, N12 to N15 done 2026-11-14 (web search and fetch, primary documents only). N2, N3, N4, N6, N8 and N11 are the founder's own decisions and were not researched.

| # | Placeholder | Where on the page | Status, checked 2026-11-14 |
|---|---|---|---|
| N1 | Link to the Carnegie review. A candidate URL sits in `20-research/market-intel/civic-engagement-agenda-evaluation-2026-10.md` (carnegieendowment.org/posts/2025/11/engaged-california-la-wildfires-lessons). That file is outside the brief's list; confirm it is the review and that it holds the quote | Intro | **Resolved.** https://carnegieendowment.org/posts/2025/11/engaged-california-la-wildfires-lessons loads. "The Promise and Potential of Engaged California," Micah Weinberg, nonresident scholar, Carnegie California, 24 Nov 2025; Carnegie labels it commentary and says it takes no institutional positions. Exact words: "Participants need to see how their input has been used; otherwise, trust and future participation will erode." It also asks for "receipts". **Changed on the page:** "review" became "commentary by a Carnegie Endowment scholar", and the page now says Carnegie was a partner in the process: ODI's post of 21 Jul 2025 says ODI worked "in partnership with the Carnegie Endowment for International Peace in this effort" (https://innovation.ca.gov/blog/posts/fire-survivors-shaping-la-fire-rebuilding-action-plan-engaged-california/), and the action plan lists Carnegie under "Our partners and advisors". Rick to confirm the wording |
| N2 | UpSight theme result: number of themes, and how many of the 381 unthemed comments now sit in a theme. Status 2026-10-17 records "Rick clicked Analyze survey; themes expected in 20 to 30 minutes" and no result after that | How this was built; Gaps 1 | Open: founder's decision |
| N3 | City mapping. The coordinator's brief says "mapped by city"; the vault does not show it. The Engaged file has 3 columns and no place column (dogfooding log 2026-10-17). Status 2026-10-09 says the canvas map "stays empty for Engaged until places are extracted from comment text". The mapping counts only 3 to 5 comments per group that name a place | How this was built | Open: founder's decision |
| N4 | UpSight public share link to the comments. The brief requires that viewers can inspect the evidence. The vault places the clean Engaged survey on staging (status 2026-10-17); nothing shows it on production | How this was built | Open: founder's decision |
| N5 | Full URLs for every source. The mapping gives host and file id only (for example `bos/supdocs/199710.pdf`), and no host at all for the SCE rebuild plan and letter or the LADWP statement | Three Sources blocks; figure captions | **Resolved for the three Sources blocks**, except the second FEMA copy (N9). Every URL there loaded on 14 Nov 2026 and was checked against the document's title and date. Notes: the LADWP statement exists only as LADWP's recap posted on pacpalicc.org; AB 1642 is linked through the Governor's release because leginfo.legislature.ca.gov refused automated requests; the SCE table page now reads "Updated as of 10/21/2026". **Caption-only sources also checked and loading:** CPUC rate-case fact sheet, 18 Sep 2025 (https://www.cpuc.ca.gov/-/media/cpuc-website/divisions/energy-division/documents/general-rate-cases/sce/fact-sheet-sce-grc-091825.pdf); SCE petition to amend its wildfire plan, 9 Apr 2026, SCE's copy (https://www.sce.com/sites/default/files/AEM/Wildfire%20Mitigation%20Plan/2026-2028/SCE%202026-2028%20WMP%20Petition%20to%20Amend%20%28April%209%2C%202026%29.pdf); SCE data response ES-DR-EUP-26-02, 29 Jun 2026 (https://www.sce.com/sites/default/files/AEM/Wildfire%20Mitigation%20Plan/2026-2028/ES-DR-EUP-26-02.pdf); supplemental budget fact sheet, 29 Sep 2026 (https://file.lacounty.gov/SDSInter/lac/1218280_2026-27SupplementalBudgetFactSheet.pdf); Citygate report, 18 May 2026 (https://file.lacounty.gov/SDSInter/lac/1208708_InvestigationReportoftheEatonFireEvacuationAlerts_05-18-26_.pdf); Attorney General notice, 12 Feb 2026 (https://oag.ca.gov/node/618579); LACDA letter, 21 Jul 2026 (https://file.lacounty.gov/SDSInter/bos/supdocs/218794.pdf); State Water Board release, 9 May 2025 (https://www.waterboards.ca.gov/press_room/press_releases/2025/pr20250509-la-wildfire-recovery.html; the .pdf address does not load); Malibu notices (https://lacounty.gov/2025/08/06/la-county-waterworks-issues-boil-water-notice-for-portions-of-malibu-due-to-water-supply-disruption/ and https://lacounty.gov/2025/08/08/boil-water-notice-lifted-for-la-county-waterworks-customers-in-malibu/); Roux's post, 6 Nov 2025 (https://www.rouxinc.com/final-report-eaton-and-palisades-fires/). **Still without a URL:** SEC 8-K exhibit (30 Jul 2026), AECOM plan for the City (Feb 2026), County letter to Rep. Garcia and FCC letter (1 Apr 2025), USC CLEAN page, LADWP 7 Mar 2025 notice, the Roux report PDF itself |
| N6 | Challenge channel (email or form), and Rick's agreement to "correct the page and note the change" | After Gaps | Open: founder's decision |
| N7 | The state's definition of "average support" | Figure 3 caption | **Resolved as far as the record allows.** No state page defines it in words (checked the action plan, findings pages and ODI posts of 21 Jul and 21 Nov 2025). The action plan's chart prints the fourth field of each option in https://engaged.ca.gov/public/data/lafires_voting_data_v3.json as "% average support". UpSight recomputed that field for all 19 options: it equals (average vote − 1) ÷ 6 on the 1-to-7 scale, to within 0.0001. The caption gives this as UpSight's finding, not the state's definition (analyst-inferred) |
| N8 | Publish-day re-check date (mapping review step 5) | Method | Open: founder's decision |
| N9 | A second copy of the FEMA letter, from another host or from Cal OES (mapping review step 1) | Issue 3 Sources | **Open.** Searched fema.gov, caloes.ca.gov, gov.ca.gov and lacounty.gov, and the exact sentence, on 14 Nov 2026: no government-hosted copy found. Only the Purdue copy loads (signed by Curtis Brown, FEMA, to Nancy Ward, Cal OES, 19 Feb 2025). Next step: ask Cal OES. The Purdue copy shows the page had cut a condition from the quote; fixed (see row 63) |
| N10 | ca.gov conditions of use for a derivative (experiment file, "Why this dataset") | Method | **Resolved.** https://engaged.ca.gov/conditions-of-use/ (ODI, updated 1 May 2026): "In general, information presented on this website, unless otherwise indicated, is in the public domain. You may distribute or copy it as permitted by law." The statewide policy (https://www.ca.gov/legal/conditions-of-use/) says the same. Neither requires attribution; the page attributes anyway. One caution for Rick: both say permission is needed for information "not owned or created by" the state. The comments were written by residents, and the conditions also give ODI "the unlimited right to use" what is submitted. No data page marks the comment files as restricted. A lawyer's read is optional, not blocking |
| N11 | CTA destination | CTA | Open: founder's decision |
| N12 | Rick confirms the status-word definitions. The brief lists the four words and defines none; the mapping says "per the brief's definitions" | Figure conventions | **Drafted, awaiting Rick.** Four proposed definitions are in the figure conventions, written to fit every status cell on the page, including the paired ones ("funded, underway", "underway, partly completed") |
| N13 | Figure 3: confirm the name match for water (87%) and financial support (82%); confirm whether "Increased housing density and expedited permits" (39% supportive) is the action plan's "permitting teams" (82%); add or exclude the permitting-teams row | Figure 3 | **Resolved.** The action plan (https://engaged.ca.gov/lafires-recovery/action-plan/) names its five focus areas with the option titles themselves: "Improve water systems for firefighting" 87% and "Help people find financial support programs" 82% match. The permitting focus area is the separate option "Dedicate teams to support permitting" (82%, 73 comments), not "Increased housing density and expedited permits", which the state's file scores 44%, the lowest of the 19. So there is no conflict. Permitting row added: 212 votes, 83% supportive; Palisades 85% (n=59), Eaton 87% (n=60), outside both 78% (n=93). Also found: the state's file holds a figure for every option, so "no state figure in our files" was wrong for the hubs row; it is 74% |
| N14 | The state document behind "fastest post-disaster debris removal in California history" | Figure 8 | **Resolved.** The Engaged California action plan itself, "Did you know?" box under permitting: "Federal, state, and local teams cleared debris from the 2025 fires in only six months. This was the fastest post-disaster debris removal in California history." (https://engaged.ca.gov/lafires-recovery/action-plan/) |
| N15 | The source document for the Aug 2025 DTSC and CalRecycle soil guidance; the mapping's issue 3 source list has only the Rev. 11/2024 debris guide | Figure 9 | **Partly resolved; placeholder kept.** The document is DTSC, "Residential Soil Evaluation: Guidance for the 2025 Los Angeles Wildfires", with a cover letter on CalEPA letterhead, Aug 2025 (PDF dated 22 Aug 2025). Its home is https://dtsc.ca.gov/emergency-wildfire-guidance/, but dtsc.ca.gov returned 403 to every automated request, so no DTSC link could be confirmed. The only copy that loaded is on uphelp.org (not a government site; not used). Open it in a browser. **New issue to check there:** that copy's key points say "Property owners are responsible for coordinating sampling and cleanup." If DTSC's copy says the same, Figure 9 row 5 ("none... assigns responsibility") and "Responsible. Contested." need rewording |

### Header, intro and "How this was built"

| # | Claim on the page | Rests on | Flag |
|---|---|---|---|
| 1 | 2025; 1,289 comments on LA fire recovery; collected March to May 2025 (Figure 2: to 16 May) | Mapping, "The state's process" | OK |
| 2 | The state turned them into 19 options, asked people to rate them, published an action plan with "how we're responding" text | Mapping, "The state's process" | OK |
| 3 | The state already reports its own follow-through | Brief p.2, ref [3]; experiment file, 2026-10-09 reconciliation | OK |
| 4 | Carnegie Endowment commentary, Nov 2025: "participants need to see how their input has been used"; Carnegie was a partner in the process | Carnegie page; ODI post, 21 Jul 2025; action plan partner list (N1) | OK, checked 2026-11-14. The words match; the original opens with a capital P. The page now says "commentary", not "review" |
| 5 | Three labels and their definitions; four status words | Brief p.2; mapping header | OK |
| 6 | Records as of 13 Oct 2026 | Mapping header | OK; move to the publish-day date if re-checked |
| 7 | A shared subject does not prove cause | Brief p.2 | OK |
| 8 | State data files downloaded 13 Oct 2026; every figure recounted | Mapping, process source line | OK |
| 9 | The state's 10 topics and 36 named groups (was "11 topics and 38 groups") | Findings page and comment file, checked 2026-11-14 | RESOLVED. The state "asked participants to rate the importance of 10 disaster-related topics", and its data dictionary says "There were 10 topics", plus comments "not in response to a specific topic" labelled "general comment". In the file, "General comment" holds exactly the 105 comments with no group. The file's 38 distinct group values are 36 named groups, "Other" and blank, so "38 groups" had counted "Other" and "no group" as groups. Fixed in the text and Figure 2. Note: the state's findings page shows some group names that differ from the file (for example "Satisfied with debris removal"); the page uses the file's names |
| 10 | 381 comments, 29.6%, in "Other" or no group (Figure 2: 276 + 105) | Mapping; comment file, checked 2026-11-14 | OK; 381 / 1,289 = 29.6%. Confirmed: the 31 "Debris removal and environmental recovery > Other" comments are inside the 276. Do not add them to the 381 anywhere |
| 11 | Options written by "a group of policy, disaster relief, and community leaders" using "their expertise and generative AI" | Mapping; action plan, checked 2026-11-14 | OK. The action plan reads: "A group of policy, disaster relief, and community leaders used their expertise and generative AI to turn the 1,289 comments... into 19 actionable policy options" |
| 12 | No document says what was left out, or why | Mapping | OK (absence) |
| 13 | 251 voters, 3,977 votes; 65 Palisades, 72 Eaton, 114 neither. Figure 2 adds 1,509 comments and replies and "more than 3,000 community members were invited" | Mapping; voting and deliberation files, action plan, checked 2026-11-14 | Voter and vote counts reproduced from the file. Invitation line matches the action plan. NEW FLAG: the action plan says "1,504 Comments and replies"; the deliberation file has 1,509 rows, 7 of them exact duplicates (same id, same text), so 1,502 unique. Figure 2's 1,509 counts the duplicates. Rick to choose 1,502 with a note, or quote the state's 1,504 |
| 14 | Action plan: five focus areas, no date | Mapping | OK; re-read on publish day |
| 15 | Comments imported into UpSight as an anonymous survey, one response per comment | Status 2026-10-16, 2026-10-17; dogfooding log 2026-10-16 | FLAG: done on staging; see N4 |
| 16 | 24 key documents re-opened by hand | Mapping header; experiment file | FLAG: this was the research pass, not the brief's 10-hour human review. Nothing in the vault says the human review is done |
| 17 | Items found only in news reports are not used | Mapping header; review step 3 | OK. Left off the page because they are secondary only: LADWP "up to 45 miles by 2031"; about $142M state advance; McChrystal contract amount; FEMA connection rebate; residents' $30,000 to $40,000 connection costs (no source given at all); Alphabet Streets start in early 2027; the Rebuild Authority "can't control" quote; the Altadena Town Council letter; the Cal OES draft memo; the $25M and $100M ($70M soil) funding asks |

### Issue 1: underground power lines

| # | Claim | Rests on | Flag |
|---|---|---|---|
| 18 | 88 comments in the "Underground power lines" group | Mapping, issue 1; comment file, checked 2026-11-14 | OK. "Emergency communication" (112) is a topic in the state's file, not a group; "Underground power lines" (88) is the largest named group. The page can restore "the largest single group" if wanted |
| 19 | The option "ranked first of the 19" | Voting file, checked 2026-11-14 | OK on the number: it is highest of all 19 on both measures (95% supportive; the state's 92%), and the state's chart places it 19th of 19, "most community support". FLAG on the word only: voters rated each option; the state's own page says "ranked" |
| 20 | EO N-24-25 (Mar 2025) suspended environmental and coastal permitting for rebuilding power and telecom lines; quote "if such changes are determined appropriate by the utility or provider" | gov.ca.gov PDF, checked 2026-11-14 | QUOTE FIXED: the order says "by the utility or provider"; the page had dropped "or provider". GK: "environmental" stands for CEQA |
| 21 | The order mandates no undergrounding and sets no miles, deadline or money | Mapping | OK |
| 22 | A 90-day utility report ordered by the Mayor was not found | Mapping (EEO No. 5, due 19 Jun 2025) | OK (absence) |
| 23 | SCE for Altadena and Malibu area; LADWP for Palisades; CPUC for costs; neither executive order binds telecoms; no state agency charged | Mapping, responsible body | OK. GK: the expansions of LADWP and CPUC |
| 24 | SCE: preliminary 153 circuit miles "over a number of years" | SCE plan and letter, 11 Apr 2025, checked 2026-11-14 | RESOLVED. The letter: about 130 circuit miles in high fire-risk areas (about 40 in Altadena and "more than 90" in the Malibu area) plus about 23 in Altadena outside them = about 153. The 19 under evaluation are not in the 153. Every part is approximate in SCE's text. Quote checked: "implemented over a number of years" |
| 25 | LADWP "committed to undergrounding" in the Palisades where feasible | Mapping (15 Dec 2025) | QUOTE. FLAG: cited via pacpalicc.org, not an LADWP host |
| 26 | The county's "more than 150 miles" is SCE's number | Mapping (Blueprint, footnote 20) | QUOTE |
| 27 | No state or county document sets a binding date, mileage or budget | Mapping, commitment and gaps | OK (absence) |
| 28 | County Board: telecoms "have refused"; no complaint to the CPUC found | Mapping (Horvath motion; PDF 18 Nov 2025, Board action 19 Nov 2025) | QUOTE. The source list uses the PDF date |
| 29 | Underway in Malibu area and Altadena; some Malibu-area circuits completed in 2025 | Mapping, delivery | OK |
| 30 | LADWP: 1.65 of 6.5 miles by Dec 2025; residential lines not started | Mapping | OK |
| 31 | SCE publishes no miles by community; its sources disagree on Altadena | Mapping; review step 2; sce.com, checked 2026-11-14 | FLAG, still open, and wider than the mapping says. SCE posts a separate fact sheet for each Altadena project. On 14 Nov 2026 they ranged from "continue through July 2026" (Gorge/Rosebud, updated 7 Jul 2026) to construction from the second quarter of 2027 and completion by the fourth quarter of 2027 (Gorge/Rosebud H, updated 1 Sep 2026). The table page now reads "Updated as of 10/21/2026" and lists Nicholas for 2027, not 2026 to 2027. Re-read all of them on publish day |
| 32 | Figure 4: Altadena "63 of about 85 miles" | SCE letter, 11 Apr 2025, checked 2026-11-14 | RESOLVED. The letter: about 40 miles in high fire-risk areas plus "the remaining ~45 miles" outside them = about 85; 40 + 23 = 63 planned underground |
| 33 | Figure 4: "About 90 miles..." (SCE chief executive, 30 Jul 2026) | Mapping (SEC 8-K exhibit) | QUOTE |
| 34 | Figure 4: "CEMA", glossed as a disaster cost account | SCE data response ES-DR-EUP-26-02, 29 Jun 2026, checked 2026-11-14 | OK. SCE names it the "Catastrophic Event Memorandum Account (CEMA)"; the gloss fits. Quote checked: "Roughly 30 miles are expected to be recovered through CEMA" |
| 35 | Figure 4: "32 substructures" rendered as "32 underground vaults and structures" | Mapping | FLAG: confirm the term |
| 36 | Figure 4: $664M, six duct-bank projects, "pending funding" (AECOM, Feb 2026) | Mapping | QUOTE |
| 37 | Figure 4: CPUC adopted the rate-case budget, 18 Sep 2025 | Mapping | OK. FLAG: the mapping's "Neither document names Altadena or Malibu" does not say which two documents. The $941M / 177 miles (CPUC) and 212 of 685 miles (SCE) readings are left off; add both or neither |
| 38 | Figure 5: eight label rows | Mapping, link labels for issue 1 | OK. Replace the ellipses with the state's full text on publish day. Row 5 drops the secondary note that the Altadena Town Council contests it |

### Issue 2: emergency alerts

| # | Claim | Rests on | Flag |
|---|---|---|---|
| 39 | 112 comments on emergency communication (Figure 1: 56 on post-emergency communications) | Mapping, issue 2 | OK |
| 40 | Residents asked for one alert system that reaches everyone, and post-event information in one place | Mapping, issue 2 input | FLAG: this is the analyst's summary of the comments. Check it against ids 1204, 1573, 729, 1269 (review step 6) |
| 41 | 88% of votes on "Strengthen emergency communication networks" supportive (Figure 1: of 209; state 86%) | Mapping, vote table | OK |
| 42 | Jan 2025: County Board ordered an independent review of evacuations and alerts | Mapping (motion 28 Jan 2025) | OK |
| 43 | McChrystal review (public 25 Sep 2025): "outdated policies, inconsistent practices, and communications vulnerabilities"; no "clearly recognized, centralized source" | Full review, supdocs/207915.pdf, checked 2026-11-14 | OK. Both phrases are in the review |
| 44 | Board adopted an implementation motion 5–0 | Mapping (30 Sep 2025) | OK |
| 45 | Fire Safety Research Institute report for the Governor (Oct 2026): "overly complex"; no agency had adopted it by 13 Oct | Mapping; FSRI release, checked 2026-11-14 | The release confirms 2 Oct 2026, "conducted at the request of the Office of the Governor", 175 findings and 266 recommendations. QUOTE "overly complex" not checked (the report itself was not opened). The mapping's "federal research institute" is wrong: FSRI is part of UL Research Institutes. The report was 11 days old at reading; re-check adoption on publish day |
| 46 | Responsible: County Board; county Office of Emergency Management, Fire Department, Sheriff; vendor Genasys | Mapping | OK |
| 47 | 90-day review reports met | Mapping (28 Apr, 28 Jul 2025) | OK |
| 48 | Implementation reports: one about 16 days late, one not found | Mapping (15 Dec 2025; 30 Jan 2026) | OK |
| 49 | County fixes completed, including warnings for zones next to an evacuation order | Mapping, delivery | OK |
| 50 | Budget $10.7M to $24.3M; 41 of 81 budgeted positions filled by Aug 2026 | Mapping | OK (81 − 37 = 44 new positions, consistent with the mapping) |
| 51 | Cause of the 9 Jan 2025 countywide false alert unresolved | Mapping | OK |
| 52 | Of nine claims in the state's text: three official documented, two analyst-inferred, four no link found | Mapping, link labels for issue 2 (count of its rows) | FLAG: the coordinator's brief and the mapping's "What the page can say" say three unsupported claims (steering committee, FSRI, Congress). The label list itself has four "no link found" (Joint Information Center, steering committee, FSRI, federal funding requests) and two "analyst-inferred" (City department, Congress). The page follows the label list |
| 53 | A City "biweekly steering committee": no link found | Mapping | OK; quote from the state's text |
| 54 | Nothing found addresses one system that reaches everyone | Mapping, gaps | OK (absence) |
| 55 | The federal wireless alert is the only one needing no sign-up; English and Spanish only; no map; 88 cities run different systems | Mapping, gaps | OK |
| 56 | Figure 6: $20.2M facilities; Watch Center; EVAC-to-ALERT; Citygate; Attorney General investigation; City "has fully implemented Genasys" | Mapping, delivery | OK; QUOTE where quoted; re-check the Attorney General item on publish day |
| 57 | Figure 7: nine rows | Mapping, link labels for issue 2 | FLAG: rows 1, 2 and 6 to 8 are paraphrases in the mapping. Use the state's exact words |
| 58 | Figure 10: the City's 60-day warning-system evaluation, due May 2025, not found | Mapping, issue 2 | OK (absence) |

### Issue 3: soil testing

| # | Claim | Rests on | Flag |
|---|---|---|---|
| 59 | 74 comments: 43 in the soil-testing group, 31 under debris removal | Mapping, issue 3 | FLAG: confirm the 31 "Debris removal > Other" comments are about soil, and see row 10 on overlap with the 381 |
| 60 | The state's findings page named soil testing a top concern | Mapping, "Why these three issues"; link label 1 ("Residents want soil testing") | OK. FLAG: status.md 2026-10-13 calls soil testing "the state's top-ranked topic"; the mapping says the top-ranked topic was "Environmental recovery and clean up" (87% "very important" or "essential"). Not the same thing; the page avoids the status wording |
| 61 | None of the 19 options mentions soil, testing, contamination or water quality | Mapping | OK (absence) |
| 62 | No document says why it was dropped | Mapping | OK (absence) |
| 63 | FEMA, Feb 2025: "will not reimburse the costs for soil testing unless testing shows that positive results are clearly attributed to the fires" | Region 9 letter, 19 Feb 2025 (Purdue copy), checked 2026-11-14 | QUOTE FIXED: the page had cut the sentence before "unless", which turned a conditional refusal into a flat one. Still hosted by Purdue only (N9); the state's request letter was not found |
| 64 | The county ran free lead testing | Mapping, delivery (launched May 2025) | OK |
| 65 | The county approved a $1 million remediation program | Mapping (Altadena Soil Remediation Program, 21 Jul 2026) | OK |
| 66 | A 2026 state law orders lead and asbestos regulations by 2028 if a companion bill takes effect; its summary does not mention soil | Mapping; Governor's release, 15 Sep 2026, checked 2026-11-14 | PARTLY CHECKED. The Governor's release confirms the signing and describes AB 1642 (Harabedian) with AB 1795 as standards for "lead and asbestos contamination from wildfire smoke" in homes; it does not mention soil. The 31 Dec 2028 date, the companion-bill condition and the digest wording were not re-checked, because leginfo.legislature.ca.gov refused automated requests. Check the bill page in a browser |
| 67 | Responsible: contested; FEMA pointed to the state | Mapping | OK |
| 68 | A county supervisor: state reimbursement of the county was "never a feasible option" | Barger statement, 16 Jan 2026, checked 2026-11-14 | OK. Full sentence: "The notion that the State could simply reimburse Los Angeles County for conducting soil testing and remediation in the Eaton fire area was never a feasible option." |
| 69 | No agency takes responsibility for declaring a cleared lot safe | Mapping, responsible body and gaps | OK (absence, phrased as "we found no") |
| 70 | Commitment from the state's process: none | Mapping | OK |
| 71 | EPA promised lead-sampling results by spring 2026, delivered in May | EPA releases, checked 2026-11-14 | OK; "by the end of spring 2026" is in the January release. DATES FIXED: the EPA pages date the releases 12 Jan 2026 and 18 May 2026, not 13 Jan and 19 May; Sources, Figure 8 and its caption now use the EPA dates |
| 72 | Two county report-backs not found | Mapping (30-day after 15 Apr 2025; 60-day after 4 Nov 2025) | OK (absence) |
| 73 | Debris and six inches of soil removed without confirmation sampling | Mapping, delivery | OK |
| 74 | County sampling: lead averaging above California's screening level in 10 of 23 grids of standing Eaton homes (Figure 8: 80 mg/kg) | Public Health final findings, 12 Sep 2025, checked 2026-11-14 | OK |
| 75 | EPA: 95 of 100 randomly sampled Eaton parcels below the federal level at the surface (Figure 8: 200 mg/kg; 98 of 100 at six inches) | Mapping | OK |
| 76 | The county's 2025 sample tested metals and other fire chemicals; the EPA sample and the free programs test lead only (was "All testing so far covers lead only") | Public Health final findings, 12 Sep 2025; Roux post, 6 Nov 2025; checked 2026-11-14 | WRONG, FIXED. Roux tested for "heavy metals, polyaromatic hydrocarbons (PAHs), and dioxins/furans" (Public Health); Roux says 35 contaminants. Also fixed in Figure 8: the two Palisades exceedances were cadmium and thallium in one area and arsenic and PAHs in another, not lead, and the county found no large-scale impacts there "including for lead" |
| 77 | Remediation funded, not started | Mapping (launch "this fall" 2026) | OK; re-check on publish day |
| 78 | Figure 8: remediation money is $1M county plus $2M state via the California Community Foundation | Mapping | FLAG: the mapping says the state's $2M budget line was "not located". Its gap line "Funding is $3M against asks..." could mean this $1M + $2M or the separate "up to $3M" lead-paint settlement fund (15 Apr 2025 motion, purpose not stated). The page leaves the lead-paint fund out until its purpose is confirmed |
| 79 | Figure 8: county sampling "final 12 Sep 2025" | Public Health final findings; Roux post; checked 2026-11-14 | RESOLVED. The county released the final findings on 12 Sep 2025 and said "The full report is available on our website." 6 Nov 2025 is the date of Roux's own web post announcing the report, not a later finding. Keep 12 Sep 2025. The report PDF itself was not found on the county site, so its cover date is unconfirmed |
| 80 | Figure 8: all nine fire-affected water systems cleared by 9 May 2025 | State Water Board release, 9 May 2025; LA County notices, 6 and 8 Aug 2025; checked 2026-11-14 | RESOLVED, no conflict. The Water Board: "the final system of the nine impacted public water systems has been cleared" (Las Flores Water Co., Altadena). The Malibu notice was a separate event, issued 6 Aug 2025 "following a low-pressure event caused by a Caltrans bridge replacement project" and lifted 8 Aug 2025. Figure 8 now says so |
| 81 | Figure 8: county testing moved to USC on 15 Aug 2026 | Mapping (USC CLEAN page dated 4 Aug 2026) | FLAG (minor): the source predates the transfer date |
| 82 | Figure 9: six label rows | Mapping, link labels for issue 3; findings page, checked 2026-11-14 | OK; see N15 for row 3 and for a possible change to row 5. CAPTION FIXED: it cited /agenda-setting-data-insights/, the data-visualization page; the quoted soil text is on /agenda-setting-findings/. The quoted text matches that page |

### Gaps, method, call to action

| # | Claim | Rests on | Flag |
|---|---|---|---|
| 83 | Five reports with official deadlines were not found (Figure 10) | Mapping: issue 1 (Mayor's 90-day report), issue 2 (City 60-day evaluation; County report for 30 Jan 2026), issue 3 (two Board report-backs) | OK. The count is mine, across the mapping. Re-search each on publish day |
| 84 | Four alerts claims have no document behind them | Mapping, link labels for issue 2 | OK (see row 52) |
| 85 | The power-lines miles are a utility's plan, not a requirement | Mapping, issue 1 and "What the page can say" | OK |
| 86 | Debate prompt: "When government asks for your input, what should it owe you in return?" | Brief p.2 | OK (the brief's wording) |
| 87 | Comment counts are the state's own groups | Mapping, issue inputs | OK |
| 88 | Independence line | Experiment guardrails; brief p.2 ("clear independent attribution") | OK. If the page goes to the Possibility Lab, consider naming UC Berkeley too (the guardrail names it) |
| 89 | CTA: trace one issue with Rick | Brief p.2 ("Close with a sales invitation to map the viewer's own stakeholder feedback"); messaging house ("Analyze them with Rick", no generic demo) | OK. Have the data-handling answer ready before the CTA goes live (experiment guardrails) |

### Also before publishing

- Run the brief's 10-hour human review. The vault shows the research pass (mapping, 2026-10-13), not the review.
- Review step 6: the page quotes no resident. If a quote is added, check the ids against the CSV text first. The step says "eight representative comment ids"; the mapping lists twelve (four per issue) plus #2402.
- Review step 4 (McChrystal recommendation count, about 79 rows against 90 in the press): no count is on the page. Keep it off until reconciled.
- Non-partisan check: officials are named only as the authors of documents (the Governor, the Mayor, a county supervisor, Rep. Garcia in a source title).
- Expansions taken from general knowledge (GK), not the vault: CPUC, LADWP, Cal OES, CEQA (as "environmental"), Office of Energy Infrastructure Safety (for "Energy Safety"), LA County Development Authority (for "LACDA"), CEMA (as "a disaster cost account"). Verify each.
