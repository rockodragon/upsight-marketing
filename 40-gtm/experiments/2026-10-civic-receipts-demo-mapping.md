# Civic receipts demo: the three issue chains (mapping block)

**Companion to:** `2026-10-civic-receipts-demo.md` (the experiment) and the team brief (`40-gtm/assets/collateral/government-accountability-demo-brief-2026-10-08.pdf`).
**Status:** mapping drafted 2026-10-13 from primary documents; awaiting the 10-hour human review before anything is published.
**Method:** three research passes (one per issue) over primary documents only, every URL opened on 2026-10-13; I then re-opened 24 of the key documents myself and all resolved (one SEC filing refuses non-browser requests). Figures from the state's data files were recomputed by script from the files themselves. Newspaper items are marked *secondary* and are pointers, never the evidence.
**Labels used below, per the brief:** `official documented` = a primary document says it · `analyst-inferred` = plausible from documents, not stated · `no link found` = no document found after searching. Status words: announced / funded / underway / completed. "Not documented in reviewed sources" means exactly that.

## The state's process, in its own numbers

Source for this section: engaged.ca.gov pages and data files (`wildfire_agenda_setting_comments.csv`, `lafires_deliberation_all_comments.csv`, `lafires_voting_data_v3.json`), downloaded 2026-10-13; counts computed by script. Real data, not illustrative.

- **Agenda setting (March to 16 May 2025):** 1,289 comments, 52k words, sorted by the state into 11 topics and 38 groups. 276 comments landed in a group called "Other" and 105 got no group: 381 comments, 29.6%, never became a theme.
- **Review and planning:** "a group of policy, disaster relief, and community leaders used their expertise and generative AI" to turn the 1,289 comments into 19 policy options. No document explains what was left out or why.
- **Deliberation:** 251 people cast 3,977 votes on the 19 options and left 1,509 comments and replies. 65 voters were from the Palisades zone, 72 from the Eaton zone, 114 from neither. The page says "more than 3,000 community members were invited."
- **Action plan:** five focus areas with "how we're responding" text: bury power lines (92% average support), water for firefighting (87%), emergency communication networks (86%), a financial-support directory (82%), permitting teams (82%). The page is undated.

| Option (state's title) | Votes | Supportive, all | Palisades zone | Eaton zone | Outside both zones |
|---|---|---|---|---|---|
| Bury power lines and equipment safety measures | 210 | 95% | 98% (n=60) | 91% (n=57) | 95% (n=93) |
| Improve water systems for firefighting | 209 | 90% | 88% (n=60) | 90% (n=58) | 92% (n=91) |
| Strengthen emergency communication networks | 209 | 88% | 88% (n=60) | 83% (n=58) | 90% (n=91) |
| Help people find financial support programs | 211 | 86% | 87% (n=60) | 87% (n=60) | 86% (n=91) |
| Emergency communication hubs in communities | 215 | 70% | 55% (n=60) | 72% (n=60) | 79% (n=95) |
| Increased housing density and expedited permits | 214 | 39% | 24% (n=58) | 37% (n=62) | 49% (n=94) |

Source: `lafires_voting_data_v3.json` (engaged.ca.gov, downloaded 2026-10-13). "Supportive" = votes of 5, 6 or 7 on the state's 7-point scale, divided by all non-blank votes on that option. n = voters in that zone who voted on that option. The state's page reports "average support" by a different formula (its 92% for power lines); both are shown on the demo page with their definitions.

## Why these three issues

- **Underground power lines:** the largest single group of comments (88) and the top-ranked option. The best case for a chain with official documents at every step. Tests whether the state's "action now" text survives contact with the documents.
- **Emergency alerts:** 112 comments, an option at 86%, and the richest public record (two independent reviews, Board motions, congressional letters, a state Attorney General investigation). Tests whether what was delivered matches what residents asked for.
- **Soil testing:** 74 comments and the state's own findings page named it a top concern. It never became one of the 19 options. Tests whether the process can lose a resident priority without anyone saying so.

Insurance (86 comments across two groups) is the fourth candidate if a reviewer wants to swap one out.

## Issue 1: underground power lines and utility equipment safety

**Input (dataset).** 88 comments in "Underground power lines" (topic "Infrastructure and utilities restoration"), 3,467 words; 3 name a place. Representative comment ids: 1159, 915, 1503, 1574. Option #19 "Bury power lines and equipment safety measures": 92% average support (state), 95% supportive (recomputed), 90 deliberation comments.

**Policy response.**
- Governor's Executive Order N-24-25, 27 Mar 2025: suspends CEQA and Coastal Act permitting for rebuilding damaged electric and telecom lines, "including the undergrounding... if such changes are determined appropriate by the utility," and for other utilities in the same trench. It orders no undergrounding, sets no miles, no deadline, no money, no telecom duty. The "150 miles" in the press is Southern California Edison's number, not the order's.
- Mayor Bass Emergency Executive Order No. 5, 21 Mar 2025: orders a 90-day report (due 19 Jun 2025) on utility resilience including undergrounding and joint trenching. The report was not found.
- SCE rebuild plan and letter to the Governor, 11 Apr 2025: a preliminary 153 circuit miles (about 40 in Altadena and more than 90 in the Malibu area in high-fire-risk zones, 23 more in Altadena outside them, 19 under evaluation), "over a number of years," subject to permitting, customer plans and funding. Most of the Malibu scope "was already targeted for undergrounding" in SCE's wildfire plan and pending rate case, "accelerated during the rebuild."
- CPUC decision D.25-09-030, 18 Sep 2025: adopts a targeted-undergrounding budget (fact sheet: $941M for 177 miles; SCE reads it as 212 miles for 2025 to 2028, against 685 requested). Neither document names Altadena or Malibu.
- LA County Blueprint for Rebuilding, July 2025: "the County and State have committed to underground more than 150 miles." Footnote 20: "In alignment with Southern California Edison planning schedule." The number is SCE's.
- Horvath motion, Board action 19 Nov 2025: telecoms "have refused" to underground; directs Public Works and County Counsel to initiate CPUC proceedings including a complaint. No complaint or CPUC order found.

**Responsible body.** SCE for Altadena and the Malibu area; LADWP for Pacific Palisades; CPUC for cost recovery; telecoms (Frontier, Spectrum, AT&T) own their lines and are bound by neither order. No state agency is charged with delivering undergrounding. The county's new Rebuild Authority (launched 19 May 2026) says it "can coordinate, can advocate, but can't control" the utilities' investment decisions (*secondary*, Pasadena Now, 19 Aug 2026).

**Commitment or deadline.** SCE: 153 circuit miles "over a number of years," circuit targets 2025 to 2027. LADWP: "committed to undergrounding electrical utilities in the Palisades" where feasible, with owner opt-outs that may leave overhead service (15 Dec 2025); the "up to 45 miles by 2031" figure exists only in secondary accounts of a 26 Mar 2026 webinar. State and county: no binding date, miles or funding in any document. Telecom: not documented in reviewed sources.

**Delivery evidence.**

| Item | Status | Evidence, with date |
|---|---|---|
| Malibu area circuits (SCE) | underway, partly completed | 16 miles underway Apr 2025; Las Flores/Rambla Pacifico work "completed" per county motion Nov 2025; Mulholland circuit "Completed in 2025," Merlin and Nicholas in construction for 2026-27, others in permitting for 2027 (SCE table, 18 Sep 2026) |
| Altadena circuits (SCE, 63 of about 85 miles) | underway, none reported complete | Gorge/Rosebud through July 2026, Tola and Lamanda to Oct 2026, Seco Q4 2026 to Q1 2027 (SCE fact sheets, July 2026). SCE's own 18 Sep 2026 table shows no construction marker for any Altadena circuit, which conflicts with its fact sheets |
| SCE system-wide miles | completed, not broken out | 57 underground miles installed in 2025 (Energy Safety filing, 9 Apr 2026); "about 90 miles... including all rebuild areas since January 2025" (CEO, 30 Jul 2026). No rebuild-only count is published |
| SCE funding | funded in part | Rate case budget adopted 18 Sep 2025; "roughly 30 miles expected to be recovered through CEMA"; "no other funding opportunities identified" (29 Jun 2026). Ratepayers pay, subject to CPUC review |
| Palisades backbone conduit (LADWP, 6.5 miles) | underway | 1.65 miles of trench and 32 substructures by 15 Dec 2025, paused for a contractor change |
| Palisades residential undergrounding (LADWP) | announced | Alphabet Streets "begins in early 2027" (*secondary*, Palisadian-Post, 12 Oct 2026). City plan lists six duct-bank projects at $664M, "pending funding," possibly impossible "without additional funding from the Federal and State governments as well as philanthropy" (AECOM plan, Feb 2026) |
| State money for undergrounding | reported only | About $142M from the state's $2.5B relief fund as a repayable advance pending FEMA (*secondary*, NBC4, 2 and 7 Jul 2026). No primary document found |
| Home connection costs | announced, not funded | SCE estimate $8,000 to $10,000 per home (Apr 2025); residents report $30,000 to $40,000; county FEMA rebate application (75%, non-retroactive, decision about end of 2027) is *secondary* |

Source: documents listed under Sources, issue 1; status words per the brief's definitions.

**Link labels for the state's "how we're responding" text.**
- "The county and state are working with power... companies": `official documented`.
- "...and telecommunications companies": `analyst-inferred`. The only primary document on telecom participation records refusal.
- "Governor... signed an executive order in March 2025 to fast-track this work": `official documented`. Permits only. SCE says the order is "critical" to its targets.
- "Mayor Karen Bass issued an executive order... climate-resilient infrastructure... hardening utilities": `official documented`. The order commissions reports, not construction.
- "Utilities are working closely with local leaders": `official documented` for coordination; contested by the Altadena Town Council, whose April 2026 letter had no county response by June (*secondary*).
- "Construction is already underway in Malibu, Altadena, and Pacific Palisades": `official documented` for Malibu and Altadena; Pacific Palisades is the backbone conduit only, residential lines not started.
- "It is expected to continue for several more years": `official documented`.
- "The state and county are calling for a coordinated approach to undergrounding power and telecom lines": county `official documented`; state `analyst-inferred` (its only document is the same-trench permit clause).

**Gaps against what residents asked.** No binding date or requirement anywhere. Not every line goes underground (Altadena 63 of about 85 miles; LADWP "where feasible"). Who pays the home connection is unresolved. No telecom mandate. No per-community count of miles completed. The mayor's 90-day report is missing.

## Issue 2: emergency alerts and post-event communication

**Input (dataset).** 112 comments in "Emergency communication," 56 of them "Post-emergency communications" (1,856 words; 5 name a place). Representative ids: 1204, 1573, 729, 1269. Residents asked for one alert system that reaches everyone and for post-event information in one place. Option #17 "Strengthen emergency communication networks": 86% average support (state), 88% supportive (recomputed), 59 deliberation comments. Option #9 "Emergency communication hubs": 70% supportive, with the widest zone split (55% Palisades, 72% Eaton).

**Policy response.**
- Board motion (Barger, Horvath), 28 Jan 2025: retain a consultant to review evacuation policies and alert systems; report in writing in 90 days and every 90 days until complete. McChrystal Group retained 3 Feb 2025; contract amount not in any primary document.
- McChrystal after-action review, public 25 Sep 2025; Board received and filed it and adopted an implementation motion 5-0 on 30 Sep 2025 (first progress report at 60 days, then every 90). Scope: county only (OEM, Fire, Sheriff), 31 Dec 2024 to 23 Jan 2025.
- Findings: "no single point of failure" but "outdated policies, inconsistent practices, and communications vulnerabilities." Decision-to-alert 20 to 30 minutes. In Altadena, OEM received no direction from 1:12 to about 3:00 a.m.; the first alert covering west of Lake Avenue went at 3:25 a.m.; the fire front crossed Lake after about 5:00 a.m. No "clearly recognized, centralized source" of information. OEM had 37 staff for 10.5 million people and no dedicated operating budget.
- Fire Safety Research Institute (UL), at the Governor's request: Phase Two report 2 Oct 2026, 724 pages, 175 findings, 266 recommendations. Finding 120 calls the alert process "overly complex" and recommends an end-to-end review of the regional system. No body has adopted or commissioned it.
- Congress: Rep. Garcia and 13 members' oversight letters (3 Feb 2025) and his report "Sounding the Alarm" (12 May 2025) on the 9 Jan false alert, a Member's report, not a committee's; it states Altadena is "NOT COVERED." Rep. Chu's letter (29 Sep 2025) asked why west Altadena was not warned and for no-opt-in warnings; no response found. No hearing or bill found.
- City: Mayor's Emergency Executive Order No. 5 (21 Mar 2025) tasks the Emergency Management Department with a 60-day evaluation of warning systems. No evaluation found.

**Responsible body.** LA County Board of Supervisors (ordered and adopted); County Counsel (retained, reported); CEO Office of Emergency Management, County Fire and the Sheriff (implementation); vendor Genasys; Cal OES ran the county's wireless alerts 10 to 30 Jan 2025; FEMA and the FCC on the echo-alert inquiry; the Office of the Governor commissioned FSRI. The state page's attribution of the training, testing and wording work to the City's Emergency Management Department and the County's Joint Information Center has no document behind it.

**Commitment or deadline.** 90-day review reports (met: 28 Apr and 28 Jul 2025). Implementation reports at 60 days then every 90 (first came 15 Dec 2025, about 16 days late; a promised 30 Jan 2026 report was not found; next found 3 Aug 2026). City: 60-day evaluation due May 2025, not found. FSRI and Congress: recommendations only.

**Delivery evidence.**

| Item | Status | Evidence, with date |
|---|---|---|
| Adjacent zones get an Evacuation Warning when a zone is ordered | completed | County tracker; first used in the Canyon, Hawk and King fires (CEO memo, 3 Aug 2026) |
| Alert templates with timestamps; Genasys prompt before a countywide send; job aids | completed | County letter to Rep. Garcia, 1 Apr 2025; CEO memo, 3 Aug 2026 |
| Monthly alert drills; Sheriff trained 23 stations | underway | Since Jan 2026 (CEO memo, 3 Aug 2026) |
| OEM moved under the CEO; budget $10.7M and 37 staff to $24.3M and 81 staff, 44 new positions | funded, underway | Recommended budget 14 Apr 2026; 41 of 81 positions filled by 3 Aug 2026 |
| $20.2M for emergency-management facilities "consistent with the McChrystal After Action Report" | funded | Supplemental budget fact sheet, 29 Sep 2026; no Board vote record found |
| 24-hour Watch Center | completed, indirect | Planned Feb 2026; referred to as operating in the 3 Aug 2026 memo; no launch notice |
| One consolidated public alert-information platform | announced | Tracker says "Ongoing*" (existing programs continue); no product |
| EVAC-to-ALERT single sign-on | announced | Tracker: "No timeline" |
| Root cause of the 9 Jan 2025 countywide false alert | unresolved | County: "unable to be duplicated"; vendor: polygon not saved to the alert channel; FCC: carrier equipment overload and missing alert identifiers (1 Apr 2025). Neither independent review examined it |
| West Altadena warning delay | reviewed, open | Citygate (for County Fire, 18 May 2026): no misconduct, no bias. California Attorney General investigation opened 12 Feb 2026, no findings yet |
| City of LA | announced | EO No. 5 issued; no evaluation, no steering-committee record; FSRI notes the City "has fully implemented Genasys" by Oct 2026 |

Source: documents listed under Sources, issue 2; status words per the brief's definitions.

**Link labels for the state's text.**
- Board ordered an independent review; retained outside experts; report every 90 days: `official documented` (the 90 days is the review phase; implementation cadence has been irregular).
- Enhanced training, more rigorous tests, improved targeting, clearer wording, stronger coordination: `official documented` as County work.
- Attributing that work to "the city's Emergency Management Department": `analyst-inferred`. To the "County Coordinated Joint Information Center": `no link found`.
- "The city is coordinating a biweekly steering committee": `no link found`.
- "Implementing recommendations from... the McChrystal Group": `official documented`. "...the Fire Safety Research Institute": `no link found` (report eleven days old at reading; nothing adopted). "...the U.S. Congress": `analyst-inferred` (one Member's report, mostly aimed at FEMA and the FCC).
- "Increased federal funding requests": `no link found`.

**Gaps against what residents asked.** One system reaching everyone: not addressed. The county review assumes residents use "two or three" channels; only the federal wireless alert needs no opt-in, and it is English and Spanish only, 90 or 360 characters, no map; the 88 cities run different systems. Post-event information in one place: the recommended consolidated platform has no delivered product; the second McChrystal report (Sep 2026) recommends a one-stop recovery web platform, unfunded.

## Issue 3: soil and environmental testing after debris removal

**Input (dataset).** 43 comments in "Soil and other environmental testing" plus 31 in "Debris removal > Other" (together 74; the testing group alone is 1,798 words, 5 name a place). Representative ids: 1283, 1505, 630, 1711. The state's findings page ranked "Environmental recovery and clean up" first of ten topics: 87% of participants rated it "very important" or "essential." Deliberation option: **none**. None of the 19 options mentions soil, testing, contamination or water quality. The action plan never mentions soil. Seven of the 1,509 deliberation comments raised it anyway (e.g. #2402).

**Policy response.**
- State process: none. No document explains why the issue was dropped between agenda setting and the 19 options.
- FEMA Region 9 letter to Cal OES, 19 Feb 2025: FEMA "has not funded soil testing" in five years of California fires; removing six inches of soil is "sufficient"; testing "would delay recovery by several months"; FEMA "will not reimburse the costs for soil testing"; "we encourage the State to conduct soil testing if they wish to do so." The letter is hosted by Purdue University, not fema.gov; the state's request letter was not found. A county motion of 4 Nov 2025 confirms FEMA and the Army Corps declined post-removal confirmation testing.
- Partial federal reversal: EPA, 13 Jan 2026, FEMA-funded voluntary lead sampling at 100 randomly selected Eaton parcels. Results 19 May 2026.
- County: motion 15 Apr 2025, up to $3M from a lead-paint settlement fund for intact homes downwind within a mile of the Eaton burn area (report back in 30 days: not found); motion 4 Nov 2025 extending to the Palisades and asking the California Community Foundation to use $2M of state money for remediation (report back in 60 days: not found); $1M Altadena Soil Remediation Program approved 21 Jul 2026.
- State outside the process: DTSC and CalRecycle residential soil guidance, Aug 2025; $2M to the Community Foundation via the 2025-26 budget (line not located); AB 1642, chaptered 15 Sep 2026, orders lead and asbestos regulations by 31 Dec 2028, operative only if a companion bill takes effect; its digest does not mention soil. The state's own debris guide (Rev. 11/2024) includes soil testing to background levels for state-managed cleanups; the LA fires ran under the federal program.

**Responsible body.** Contested; no agency accepted responsibility for clearing a parcel as safe. FEMA pointed to the state. A Cal OES draft memo asked whether the state should keep paying for testing at all (*secondary*, LA Times via Hoodline, 17 Jan 2026; the agency said it reflected no adopted policy). Supervisor Barger (16 Jan 2026): state reimbursement of the county was "never a feasible option." County Public Health says its results are "not intended to imply cleanup or specific remediation is necessary" (12 Sep 2025).

**Commitment or deadline.** FEMA: none, a refusal. EPA: results "by the end of spring 2026," delivered 19 May 2026. County: 30- and 60-day report-backs (not found); free testing "scheduled to run through 2026"; remediation launch "this fall" (2026). State: regulations by 31 Dec 2028, not a soil-clearance commitment. Engaged California: none.

**Delivery evidence.**

| Item | Status | Evidence, with date |
|---|---|---|
| Debris and six-inch soil removal, no confirmation sampling | completed | 5,643 Eaton parcels excavated; "fastest post-disaster debris removal in California history" (state) |
| County and Roux representative sampling | completed | More than 800 properties, 18 Feb to 26 Mar 2025; preliminary 10 Apr 2025, final 12 Sep 2025. Eaton: 10 of 23 grids of intact homes averaged lead above California's 80 mg/kg screening level. Palisades: two isolated exceedances. Cleared parcels "can still have areas" above the level |
| EPA 100-parcel lead sampling | completed | 4,200 borings; 95 of 100 parcels below the federal 200 mg/kg level at the surface, 98 of 100 at six inches (19 May 2026). Lead only, burned footprints only, federal not state level, Eaton only |
| Free county lead testing for residents | underway, transferred | Launched May 2025; more than 1,600 samples by 4 Nov 2025; transferred to USC's CLEAN program 15 Aug 2026 (USC reports 5,000 to 6,000 samples, funded by FireAid and LA Care) |
| Remediation program | funded, not started | $1M county plus $2M state via the Community Foundation; launch "this fall" 2026 |
| State regulations | enacted, not delivered | AB 1642 signed 15 Sep 2026; due 31 Dec 2028 |
| Further state funding for testing | not found | Coalition asked $25M; county delegation asked $100M including $70M for soil (*secondary*, Palisades News, 21 Jul 2026). No outcome found |
| Drinking water | completed | All nine affected systems cleared by 9 May 2025 (State Water Board); Palisades declared safe 7 Mar 2025 after 469 samples; Malibu boil notice lifted 8 Aug 2025 |

Source: documents listed under Sources, issue 3; status words per the brief's definitions.

**Link labels for the state's findings text.**
- "Residents want soil testing": `official documented` (the state's own CSV).
- "The federal government has declined comprehensive soil testing": `official documented`; partly overtaken by the 100-parcel EPA sample, which is lead-only and Eaton-only.
- "The state... [is] proactively testing soil": `no link found`. State guidance and a remediation appropriation exist; state-conducted sampling does not.
- "...community, and universities are proactively testing": `official documented`.
- "Confusion about who is responsible persists": `analyst-inferred`. The documents show each level deferring to another; none says "confusion" or assigns responsibility.
- Any state commitment answering this finding: `no link found`.

**Gaps against what residents asked.** No parcel-level certification of safety before rebuilding exists anywhere. No named responsible body. All programs are lead-only. Standing homes and yards are covered only by voluntary testing. Funding is $3M against asks of $25M and $70M. The two Board report-backs, the state budget line, and the Cal OES request letter are missing from the public record.

## What the page can say, honestly

- **Power lines:** the one issue where the state's text holds up. Two orders removed permits, one utility committed 153 miles and is building, and ratepayers are paying. Nobody set a date, nobody bound the telecoms, and nobody publishes miles completed by community.
- **Alerts:** the county did what the page says and more. The page also credits a City steering committee, a federal research institute's recommendations and "the U.S. Congress" with work no document shows. The resident ask, one system that reaches everyone, is addressed by nothing.
- **Soil:** residents asked, the state's own findings page agreed, and the issue never reached the 19 options. Twenty months later no agency has said a cleared lot is safe.

## Human review, before publishing (the brief's 10 hours)

1. Read the FEMA letter from a second host or request it from Cal OES; it is cited from a university mirror.
2. Reconcile SCE's 18 Sep 2026 circuit table against its July 2026 fact sheets for Altadena; one of them is stale.
3. Drop or re-source every *secondary* item: LADWP's 45 miles by 2031, the $142M state advance, the McChrystal contract amount, the FEMA connection rebate.
4. Confirm the McChrystal recommendation count against the county tracker (about 79 rows parsed; press says 90).
5. Re-read the state pages on publish day; the action plan is undated and changes.
6. Check the eight representative comment ids above against the CSV text before any quote appears on the page.
7. Keep every "not documented in reviewed sources" line; they are the product.

## Sources

**Issue 1:** gov.ca.gov N-24-25 (27 Mar 2025, PDF) and release (27 Mar 2025) · mayor.lacity.gov EEO No. 5 (21 Mar 2025) and FEMA mitigation letter (2 Sep 2026) · recovery.lacity.gov Infrastructure Restoration Plan and AECOM PDF (Feb 2026) · file.lacounty.gov Blueprint for Rebuilding `lac/1189434` (Jul 2025) and release (4 Aug 2025) · Horvath motion `bos/supdocs/209802.pdf` (18 Nov 2025) and release (19 Nov 2025) · Barger release on the Rebuild Authority (19 May 2026) · SCE letter `GOResponse041125.pdf` and plan `ReconstructionRebuildPlan.pdf` and release (11 Apr 2025) · sce.com targeted-undergrounding table (18 Sep 2026) and fact sheets (Jul 2026) · energized.edison.com (19 Mar 2025, 7 May 2026) · cpuc.ca.gov rate-case fact sheet (18 Sep 2025) and CEMA letter (5 Feb 2025) · Energy Safety filing fileid 60543 (9 Apr 2026) and SCE data response ES-DR-EUP-26-02 (29 Jun 2026) · SEC 8-K exhibit (30 Jul 2026) · LADWP statement via pacpalicc.org (15 Dec 2025), fact sheet (Jul 2025), booklet (rev. Jul 2026). *Secondary:* NBC4 (6 Mar 2025; 2 and 7 Jul 2026), Palisades News (31 Mar 2026), the-canyon.org (27 Mar 2026), Palisadian-Post (12 Oct 2026), Pasadena Now (17 Jun and 19 Aug 2026), Westside Current (31 Mar 2026).

**Issue 2:** Board motion `bos/supdocs/199710.pdf` (28 Jan 2025) · County Counsel reports and full review text `199873.pdf` (Apr and Jul 2025) · counsel.lacounty.gov retention notice (7 Feb 2025) · lacounty.gov release (25 Sep 2025) and hub lacounty.gov/aar · Amendment 1 `lac/1208709` (May 2026) · implementation motion `207966.pdf` and proceedings `sop/1193852_093025.pdf` (30 Sep 2025) · CEO memos `bc/1197877` (15 Dec 2025) and `bc/1214307` (3 Aug 2026) · recommended budget `215176.pdf` (14 Apr 2026) · supplemental budget fact sheet `lac/1218280` (29 Sep 2026) · county actions summary `lac/1192779` · lacounty.gov alert statement (10 Jan 2025) · County letter to Rep. Garcia (1 Apr 2025), Garcia letters (3 Feb 2025) and report (12 May 2025), FCC letter (1 Apr 2025), all on robertgarcia.house.gov · Chu letter (29 Sep 2025) · fsri.org Phase One (20 Nov 2025) and Phase Two release and report (2 Oct 2026) · Citygate report `lac/1208708` (18 May 2026) · oag.ca.gov (12 Feb 2026) · mayor.lacity.gov EEO No. 5 (21 Mar 2025) · second McChrystal review `lac/1217422` (Sep 2026) · Presidential EO 14377 (29 Jan 2026).

**Issue 3:** engaged.ca.gov findings, action plan, data files · innovation.ca.gov posts (21 Jul and 21 Nov 2025) · FEMA letter via engineering.purdue.edu (19 Feb 2025) · epa.gov releases (13 Jan and 19 May 2026) · chu.house.gov (3 Jun 2025, 15 Jan 2026), friedman.house.gov (14 Jan 2026) · Board motions `bos/supdocs/202168.pdf` (15 Apr 2025), `209300.pdf` (4 Nov 2025), LACDA letter `218794.pdf` (21 Jul 2026) · lacounty.gov (10 Apr 2025) · publichealth.lacounty.gov final findings prid 5138 (12 Sep 2025), program page and FAQ (11 May 2026), ArcGIS storymap · recovery.lacounty.gov (22 May 2025) · kathrynbarger.lacounty.gov (15 Apr, 22 May, 4 Nov 2025; 16 Jan and 21 Jul 2026) · calrecycle.ca.gov debris guide Doc 127224 (Rev. 11/2024) · AB 1642 via digitaldemocracy.calmatters.org (chaptered 15 Sep 2026) · gov.ca.gov recovery package release (15 Sep 2026) · waterboards.ca.gov release (9 May 2025) and recovery page · Pasadena Water and Power (24 Jan 2025), Kinneloa (8 and 29 Jan 2025), LADWP (7 Mar 2025), lacounty.gov Malibu notice (8 Aug 2025) · rouxinc.com final report (6 Nov 2025) · USC CLEAN page (4 Aug 2026). *Secondary:* LAist (21 May 2025), Hoodline (17 Jan 2026), Palisades News (21 Jul 2026).
