# Competitive Landscape: The Decision Files

Research date: 2026-08-18. Question: does anyone already publish decision-level buyer profiles — one real decision, primary interview, verifiable evidence receipts, analyst-register findings, diagrams (timeline, stated-vs-actual criteria, feature matrix, cost, stakeholder map)? Findings below by category, then positioning table, threats, whitespace.

thedecisionfiles.com is already live with a starter set of cases (SIEM Replacement, roadmap-influence, partner-channel, automation, fulfillment), free-to-read samples, free-membership gate on deeper briefs, paid reports/benchmarks planned — confirming the site itself as the object being positioned, not a hypothetical.

---

## 1. The analyst majors

### Gartner

Four distinct Gartner formats, none of which is a decision-level narrative with verifiable evidence:

- **Peer Insights** — product/vendor **review** platform. Structured, forced-choice ratings (Overall Rating 1–5 required; Support/Delivery 1–5 or N/A; Willingness-to-Recommend 0–10 NPS-style) plus free-text pros/cons, aggregated into vendor scorecards and the "Voice of the Customer" reports that feed the Magic Quadrant. Unit of analysis is the **vendor**, not a decision. Reviewers are anonymized/verified but unnamed; Gartner incentivizes submission (gift cards) rather than compensating for a structured interview. Free to read; Gartner monetizes via vendor subscriptions to the response/analytics portal. [gartner.com/reviews/faq](https://www.gartner.com/reviews/faq), [gpivendorresources.gartner.com — Voice of the Customer Methodology](https://gpivendorresources.gartner.com/en/articles/6746287-voice-of-the-customer-methodology), [blastra.io — How Gartner Peer Insights Actually Works](https://blastra.io/guides/how-gartner-peer-insights-actually-works/)
- **Peer Community / Pulse** — a Slack-adjacent Q&A network (One-Minute Insights, polls, benchmark surveys) for leaders to crowdsource opinion in real time. Ephemeral, conversational, not archived as a citable case. [gartner.com/peer-community/home](https://www.gartner.com/peer-community/home)
- **Case Study** (Gartner research document type) — subscription-gated research notes, typically **anonymized** ("a large North American bank...") illustrating a practice, not a full decision reconstruction with named parties, timeline, or receipts. Sits alongside Magic Quadrant / Critical Capabilities in the research library; access requires a Gartner enterprise subscription (five/six figures annually), not a public price. [gartner.com/en/documents/5613091](https://www.gartner.com/en/documents/5613091)
- **Decision Point** — the closest-sounding format by name, and the furthest in substance. These are **prescriptive decision frameworks** ("Decision Point for Selecting the Right Database Format: Relational, XML or NoSQL"), often shipped with a scoring spreadsheet, to help a technical professional make a *future* choice. They are normative/generic, not a reconstruction of one real buyer's *past* choice — the inverse of a Decision File. [gartner.com/en/documents/2638021](https://www.gartner.com/en/documents/2638021)

**Verdict:** Gartner has built five adjacent primitives (review, community, case study, decision framework, MQ) and never fused them into "here is exactly how Buyer X actually decided, with receipts." Everything is either opinion-aggregate (Peer Insights) or advisory-prescriptive (Decision Point), never a single verifiable narrative.

### Forrester

- **Total Economic Impact (TEI)** — the nearest analog to "evidence + reasoning + outcome," but structurally inverted: the **vendor commissions and pays** Forrester (rates upward of $30–75K, industry-standard) to interview a handful of that vendor's own reference customers, then Forrester builds a hypothetical "composite organization" blending them, quantifying costs/benefits/ROI/payback. Interviews inform the model; they are not published as standalone verifiable transcripts, and the study's entire purpose is vendor marketing collateral (freely downloadable, gated behind a lead form on the vendor's own site). Sample: minimum interview counts set by Forrester, but never public. [forrester.com/policies/tei](https://www.forrester.com/policies/tei), [tei.forrester.com](https://tei.forrester.com/go/forrester/tei/index.html?lang=en-us), example vendor placement: [domo.com — Forrester Research Case Study: TEI of Domo](https://www.domo.com/learn/report/forrester-research-case-study-the-total-economic-impact-of-domo)
- **Forrester case studies** — same pattern: vendor-sponsored, ROI-framed, published as marketing collateral, not editorially independent. [appian.com — Forrester Case Study: Sprint](https://appian.com/resources/resource-center/case-studies/forrester-case-study-sprint.html)

**Verdict:** Forrester's closest artifact to Decision Files is paid for by the *winning* vendor, about the *vendor's* value, not an independent reconstruction of the buyer's reasoning (including what didn't work, what the buyer got wrong, competitors seriously considered and rejected). No adversarial or neutral framing is structurally possible when the vendor is the client.

### IDC

- **PeerScape** — synthesizes 3–5 buyer organizations' practices around a single initiative (e.g., "Advanced Practices for Payers in Provider Data Management," "Peer Insights for Value Stream Management Implementation") into "practices to emulate/avoid." Buyer-centered and practice-focused, closer in spirit to Decision Files than anything at Gartner/Forrester — but it's a **synthesis across several buyers**, anonymized/composited, subscription-gated (my.idc.com), with no single-decision reconstruction, no timestamped evidence, no named individual accountable for a specific real call. [idc.com — PeerScape: Value Stream Management](https://my.idc.com/getdoc.jsp?containerId=US51833524), [idc.com — PeerScape: Provider Data Management](https://my.idc.com/getdoc.jsp?containerId=US54230326)
- **IDC Case Study (IT Executive line)** — similar vendor/practice case format, IDC subscription-gated. [idc.com/itexecutive/casestudy](https://www.idc.com/itexecutive/casestudy)

**Verdict:** IDC PeerScape is the *structurally* closest analyst product to Decision Files' ambition (real buyer practice, not vendor scorecard) — but it composites 3–5 buyers into a lesson, discards the single-decision narrative arc, carries no verifiable receipts, and sits behind an enterprise research subscription no one can link to or cite publicly.

---

## 2. Peer-review / community platforms

G2, TrustRadius, PeerSpot (formerly IT Central Station), and Gartner Peer Insights are all **opinion aggregators at the product/vendor level**, not decision-process documentation:

- Structured star ratings + free text, one review = one reviewer's sentiment about one product.
- PeerSpot differentiates on "triple authentication" (verifying the reviewer is real) and does structure reviews with sections resembling deployment size, use case, and (per PeerSpot's own marketing) "detailed reviews [that] can be turned into case studies" — but the underlying artifact is still a single-vendor opinion, not a reconstructed multi-vendor decision with timeline, criteria-versus-outcome divergence, or stakeholder map. [g2.com/products/peerspot-formerly-it-central-station/reviews](https://www.g2.com/products/peerspot-formerly-it-central-station/reviews), [cuspera.com — TrustRadius vs PeerSpot](https://www.cuspera.com/compare/trustradius-vs-peerspot-formerly-it-central-station/206/11159)
- None of these platforms capture "why did you pick X over Y and Z" as a structured artifact — competitors considered-and-rejected, the criteria that were stated at the outset vs. what actually drove the choice, or a timeline. The review is retrospective sentiment about the winner only; the losers and the process are invisible.
- G2/TrustRadius are monetized by **vendors** buying placement, review-generation campaigns, and comparison-grid ad slots — the reviewed party pays, which is the opposite of Decision Files' model (vendors pay for candor, not placement).

**Verdict:** This category answers "is the product good" at scale; it structurally cannot answer "how did this buyer actually decide" because it only interviews the winner's customer, never reconstructs the full evaluation.

---

## 3. Buyer-intelligence / win-loss vendors

This is the closest **craft** — real interviews, real buyers, real reasoning about a real decision, often with recorded/transcribed evidence. But ownership and publication model are the opposite of Decision Files.

- **Clozd** — 25–30 min structured-but-adaptive interviews with buyers who evaluated (won or lost) a client's deal; interviews recorded/transcribed, GenAI extracts themes/quotes; custom interview guide per client. Deliverable goes to the **commissioning vendor only** — used internally for sales enablement, product, competitive positioning. Never published externally; buyer identity and quotes stay inside the client's walls. [clozd.com — win-loss guide](https://www.clozd.com/how-to-do-win-loss-analysis), [clozd.com — scheduling interviews](https://www.clozd.com/blog/win-loss-101-how-to-effectively-schedule-win-loss-interviews-with-your-buyers-part-3-of-6)
- **Klue / DoubleCheck Research** — Klue acquired DoubleCheck (Jan 2022) and productized win-loss inside its competitive-enablement platform: async AI interviewer (voice/text), live analyst-led interviews, or "bring your own transcript" import. Same ownership model — insight flows to the paying vendor's internal team, not published. [klue.com — DoubleCheck acquisition centralization](https://klue.com/blog/klue-centralizes-win-loss-data-from-clozd-doublecheck-and-more-in-one-central-competitive-enablement-platform), [klue.com — Klue Win-Loss launch](https://klue.com/blog/klue-unlocks-buyer-intelligence-with-the-launch-of-klue-win-loss)
- **Primary Intelligence** — decade-plus incumbent; standardized interview guide capturing "4–6 decision drivers per deal," blends quantitative rating + qualitative open-ended. Same internal-only distribution model. [pragmaticinstitute.com — win-loss analysis](https://www.pragmaticinstitute.com/resources/articles/product/comprehensive-approach-to-win-loss-analysis/)
- **IcebergIQ** — spun out of Eigenworks (2008–2019 win-loss consultancy); 500+ win/loss/churn/VoC interviews/year for B2B software clients; markets itself on being "unbiased" — but unbiased-and-private, findings go to the commissioning company, not published as a citable public record. [icebergiq.com/winloss-analysis](https://www.icebergiq.com/winloss-analysis), [icebergiq.com/about-us](https://www.icebergiq.com/about-us)
- **DoubleCheck, Fletcher CSI**, and others aggregate into Klue's partner network — same pattern. [klue.com/blog/klue-partner-network](https://klue.com/blog/klue-partner-network)
- **UserEvidence / TestBox** are adjacent but distinct: UserEvidence is a customer-proof/reference-matching platform (surveys, G2/TrustRadius ingestion, Gong-call mining → auto-generated quotes/mini-case-studies) — still vendor-owned marketing collateral, not independent decision journalism. [userevidence.com/platform](https://userevidence.com/platform/). TestBox is not evidence/research at all — it's demo-environment automation software for sales engineering ($44,750/yr+, no public content), a false lead for this comparison. [testbox.com](https://www.testbox.com/)

**Who pays / who owns:** In every win-loss vendor case, **the company selling the product being evaluated pays** for the research and owns the output. The interviewed buyer is a data source, not a beneficiary or publisher. Reports "sit in shared drives unopened" per industry surveys — the intelligence is real but structurally trapped and never public. [pragmaticinstitute.com/.../State-of-Win-Loss-Analysis-Report-2023.pdf](https://www.pragmaticinstitute.com/resources/wp-content/uploads/sites/6/2023/10/State-of-Win-Loss-Analysis-Report-2023.pdf)

**Verdict:** Win-loss firms have the exact craft — recorded interviews, structured decision-driver extraction, sometimes video reels and highlighted transcripts — Decision Files needs. The entire industry is privately commissioned and never publishes. This is the single most important adjacent capability with zero public-facing competitor.

---

## 4. Editorial / media analogs

- **Lenny's Newsletter / Podcast** — deep operator interviews on product/growth strategy; conversational, framework-extraction format, not receipts-based. No evidence artifacts (timestamps, criteria matrices); relies on narrative credibility of the guest and Lenny's own synthesis. [lennysnewsletter.com](https://www.lennysnewsletter.com/p/the-operators-guide-to-product-strategy)
- **First Round Review** — nine "digital magazines" of operator playbooks distilled from interviews (e.g., "What It's Like to Raise a B-round"). Positions itself as "applied research" and durable institutional IP, but the artifact is a synthesized playbook/narrative essay, not a single verifiable decision reconstruction with a timeline or stated-vs-actual criteria comparison. [review.firstround.com](https://review.firstround.com/)
- **The Pragmatic Engineer** — "Real-World Engineering Challenges" series reconstructs specific technical decisions at named companies (Cursor's stack, Figma Slides, Salesforce internal tooling) with real detail and sourcing rigor — the closest editorial analog in *rigor*, but scoped to engineering/build decisions, not buyer/vendor-selection decisions, and without standardized diagrams (timeline, feature matrix, cost breakdown, stakeholder map) as a repeatable analyst-register format. [newsletter.pragmaticengineer.com — Real-World Engineering Challenges #7: Choosing Technologies](https://newsletter.pragmaticengineer.com/p/real-world-engineering-challenges-55d)
- **a16z / CIO.com / "How I Built This"** — a16z content is thesis/portfolio-support essays, not third-party accountable narratives; CIO.com runs generic "how to evaluate vendors" advice pieces, not documented real decisions with a name attached; "How I Built This"-style content is founder-story narrative gloss, explicitly the opposite of "preserve the doubt" — survivorship bias is structural to the format.

**Verdict:** Editorial analogs prove market appetite for operator-decision narrative (Lenny's and First Round Review both have large, monetizable audiences) and prove that rigorous single-company reconstruction works editorially (Pragmatic Engineer) — but none combines primary-interview + timestamped evidence + standardized analyst diagrams + a repeatable per-decision unit. All rely on narrative trust in the writer, not verifiable receipts.

---

## 5. Expert networks (GLG, Tegus/AlphaSense, Third Bridge)

- **Tegus (now part of AlphaSense, acquired for $930M, deal closed 2024)** — Expert Transcript Library, 200,000+ transcripts, 25,000+ companies, filterable by investor-led / corporate-led / AlphaSense-led / AI-led, and by transcript type (company deep-dive, Voice of Customer, Channel Check). This is the single closest artifact in the entire landscape to a "Decision File": a **real, recorded, transcribed conversation** with a named-to-the-platform (though redacted-to-the-public) participant, about how a company/product actually performs or was chosen. [help.alpha-sense.com — Tegus Expert Transcript Library](https://help.alpha-sense.com/hc/en-us/articles/43616741825939-Tegus-Expert-Transcript-Library-Understanding-Transcript-Types-Perspectives), [sacra.com/c/tegus](https://sacra.com/c/tegus/)
- **The delta from Decision Files:**
  1. **Access**: gated entirely behind institutional AlphaSense/Tegus subscriptions (institutional investors, hedge funds, PE/VC) — never public, never citable by a marketer or a peer buyer.
  2. **Who pays**: the *investor* pays a subscription; the *interviewee/expert* is often compensated per call — a paid-source model that is the reverse of "vendors pay for candor they can't get," and raises the same incentive question Decision Files should pre-empt (paid sources can be coached/optimized for the fee).
  3. **Unit and synthesis**: a transcript is raw, unedited, unsynthesized — no analyst-register finding, no diagrams, no stated-vs-actual comparison, no receipts beyond the transcript itself (no video, no timestamped moment-level evidence).
  4. **Purpose**: due diligence for capital allocation (should I invest in this company), not operator learning (how should I run my evaluation) — different job-to-be-done even when the raw material overlaps.
- **GLG** — largest network (~1.2M experts), broad but shallower, no dedicated public content arm; volume play. [alpha-sense.com — Top Expert Network Companies 2026](https://www.alpha-sense.com/blog/product/expert-network-companies-buyers-guide/)
- **Third Bridge** — smaller, deeper, analyst-led calls and thematic transcript libraries with more structure; still entirely private/institutional, buy-side clientele. [thirdbridge.com — GLG vs Third Bridge](https://www.thirdbridge.com/en-us/about-us/media/perspectives/glg-vs%20third%20bridge)

**Verdict:** Tegus/AlphaSense is proof that "pay to access real recorded buyer/expert conversations at scale" is a venture-scale business (~$930M exit) — but it is unsynthesized, investor-only, and structurally can't become a public reputation platform without cannibalizing its paid-access moat. It validates demand for raw evidence; it does not compete for the public, analyst-register, receipts-plus-diagrams product.

---

## Positioning

### 2×2: Decision-level vs. Product-level × Public vs. Paywalled-private

```
                         PUBLIC / CITABLE
                                │
        Lenny's, First Round    │
        Review, Pragmatic       │      [Decision Files]
        Engineer (decision-     │      (target: decision-level,
        adjacent, narrative,    │       public register, verifiable
        not receipts-based)     │       receipts)
                                │
   ─────────────────────────────┼─────────────────────────────
   DECISION-LEVEL                │              PRODUCT-LEVEL
                                │
        IDC PeerScape           │      G2, TrustRadius, PeerSpot,
        (decision-adjacent,     │      Gartner Peer Insights
        composited, gated)      │      (product opinion, public,
                                │       no process/receipts)
        Win-loss vendors        │
        (Clozd, Klue/           │      Gartner Case Study, Forrester
        DoubleCheck, Primary    │      TEI/case studies, IDC Case
        Intelligence,           │      Study (vendor-sponsored,
        IcebergIQ) — real       │      gated or gated-then-marketing)
        decision, real          │
        receipts, ZERO public   │      Tegus/AlphaSense, GLG, Third
                                │      Bridge (real receipts, product/
                                │      company-level due diligence,
                                │      investor-paywalled)
                         PAYWALLED / PRIVATE
```

### Second axis: receipts vs. paraphrase

| Player | Unit of analysis | Public? | Evidence form | Who pays |
|---|---|---|---|---|
| Gartner Peer Insights | Product/vendor | Public | Star ratings + free text (paraphrase) | Vendors (subscription) |
| Gartner Case Study / Decision Point | Practice / framework | Subscription-gated | Anonymized narrative / prescriptive | Enterprise research subscribers |
| Forrester TEI / case studies | Vendor ROI | Public (vendor-hosted) | Interview-informed composite model (paraphrase) | Vendor commissions |
| IDC PeerScape | Composite practice (3–5 buyers) | Subscription-gated | Synthesized narrative (paraphrase) | Enterprise research subscribers |
| G2 / TrustRadius / PeerSpot | Product/vendor | Public | Star ratings + free text (paraphrase) | Vendors (placement/ads) |
| Clozd / Klue-DoubleCheck / Primary Intelligence / IcebergIQ | Single deal (win/loss) | **Private to commissioning vendor** | Recorded/transcribed interview, quotes, sometimes video (real receipts) | Commissioning vendor |
| Lenny's / First Round Review | Operator story | Public | Interview → synthesized essay (paraphrase) | Advertisers/subscribers |
| Pragmatic Engineer | Engineering decision | Public | Sourced reporting (light receipts, no video/timestamps) | Subscribers |
| Tegus / AlphaSense | Company/product | **Private, investor-paywalled** | Full recorded transcript (real receipts) | Investor subscription; expert paid per call |
| **Decision Files** | **Single buyer decision** | **Public (freemium)** | **Timestamped video quotes + diagrams (real receipts)** | **Vendors pay for candor; reputation built in public** |

No existing player occupies the public + decision-level + receipts-verifiable cell. Decision Files is the only row with all three.

---

## (b) The three sharpest competitive threats

1. **Win-loss vendors (Clozd, Klue/DoubleCheck, Primary Intelligence, IcebergIQ) productizing a public-facing tier.** They already run the exact interview craft Decision Files needs — recorded calls, structured decision-driver extraction, AI-assisted theming, sometimes highlight reels — at real scale (Clozd: "tens of thousands of buyers" interviewed cumulatively; IcebergIQ: 500+/year). The only thing standing between them and Decision Files' business model is a decision to publish instead of hand insight privately to the vendor who paid. Klue in particular has already shown appetite to platformize and centralize (the DoubleCheck acquisition, the partner network) — a "Klue Public" or "Clozd Case Library" product is a plausible pivot, not a stretch, and they'd start with an existing interview supply chain and enterprise sales relationships Decision Files doesn't have yet.
2. **Tegus/AlphaSense expanding downstream from investor diligence into public/marketing content.** They've already proven the underlying supply (200K+ real transcripts, AI-led interviewer tooling recently launched) and have the AI/production infrastructure (per their "Autonomous AI Agent Interviewer," "Channel Checks") to generate receipts-grade content at a pace no editorial operation can match. Their moat today is paywalled institutional access — but nothing structurally stops a "AlphaSense Public" or spin-out product using the same interview engine pointed at a public, freemium audience, especially post-acquisition capital ($930M deal) and appetite to expand the platform beyond capital markets.
3. **UserEvidence / customer-marketing platforms adding "decision narrative" as a content type.** UserEvidence already ingests Gong calls, G2/TrustRadius reviews, and surveys and auto-generates quotes/mini-case-studies at scale for vendor customers. The gap between "mini-case-study" and "Decision File" is narrower than it looks: if UserEvidence (or a Gong/Clari-adjacent conversation-intelligence player — arguably including UpSight's own category) adds a "reconstruct the buyer's actual evaluation, receipts included" template, it ships as a feature inside an existing GTM stack with existing distribution into thousands of B2B vendors, undercutting Decision Files' "vendors pay for candor" wedge by making it a self-serve module vendors run on their *own* customers rather than paying an independent outlet for it.

## (c) The whitespace claim

Nobody sits at the intersection of decision-level unit of analysis, public/citable distribution, and verifiable (not paraphrased) evidence. Analyst majors publish either product opinion at scale (Peer Insights, G2/TrustRadius/PeerSpot) or vendor-paid ROI narratives (Forrester TEI, Gartner/IDC case studies) — never an independent reconstruction of one buyer's actual decision. Win-loss firms and expert networks (Clozd, Klue, Primary Intelligence, IcebergIQ, Tegus/AlphaSense, GLG, Third Bridge) have the real craft — recorded interviews, structured decision-driver extraction, sometimes full transcripts — but every one of them is privately commissioned or investor-paywalled, so the insight never becomes a citable public record with a name and a reputation attached to it. Editorial analogs (Lenny's, First Round Review, The Pragmatic Engineer) prove the audience and prove that rigorous single-company narrative works as media — but none of them carries timestamped, verifiable evidence or a repeatable analyst-register diagram set (timeline, stated-vs-actual criteria, feature matrix, cost breakdown, stakeholder map); they run on narrative trust in the writer, exactly the "sanitized retrospective" gloss Decision Files explicitly rejects. What nobody does is put a single real decision under an analyst's register — process, criteria, what actually decided it, outcome — and back every claim with a clip you can watch, published where anyone can read it for free and where the vendor, not the buyer, foots the bill for candor. That combination — decision as the unit, receipts as the standard, public as the distribution — is unclaimed.

---

## Sources (deduplicated)

- Gartner Peer Insights: [gartner.com/reviews/faq](https://www.gartner.com/reviews/faq) · [gpivendorresources.gartner.com — Voice of the Customer Methodology](https://gpivendorresources.gartner.com/en/articles/6746287-voice-of-the-customer-methodology) · [blastra.io — How Gartner Peer Insights Actually Works](https://blastra.io/guides/how-gartner-peer-insights-actually-works/) · [gartner.com/peer-community/home](https://www.gartner.com/peer-community/home)
- Gartner Case Study / Decision Point: [gartner.com/en/documents/5613091](https://www.gartner.com/en/documents/5613091) · [gartner.com/en/documents/2638021](https://www.gartner.com/en/documents/2638021)
- Forrester TEI: [forrester.com/policies/tei](https://www.forrester.com/policies/tei) · [tei.forrester.com](https://tei.forrester.com/go/forrester/tei/index.html?lang=en-us) · [domo.com](https://www.domo.com/learn/report/forrester-research-case-study-the-total-economic-impact-of-domo) · [appian.com](https://appian.com/resources/resource-center/case-studies/forrester-case-study-sprint.html)
- IDC PeerScape: [my.idc.com/getdoc.jsp?containerId=US51833524](https://my.idc.com/getdoc.jsp?containerId=US51833524) · [my.idc.com/getdoc.jsp?containerId=US54230326](https://my.idc.com/getdoc.jsp?containerId=US54230326) · [idc.com/itexecutive/casestudy](https://www.idc.com/itexecutive/casestudy)
- Review platforms: [g2.com/products/peerspot-formerly-it-central-station/reviews](https://www.g2.com/products/peerspot-formerly-it-central-station/reviews) · [cuspera.com](https://www.cuspera.com/compare/trustradius-vs-peerspot-formerly-it-central-station/206/11159)
- Win-loss vendors: [clozd.com](https://www.clozd.com/how-to-do-win-loss-analysis) · [clozd.com blog](https://www.clozd.com/blog/win-loss-101-how-to-effectively-schedule-win-loss-interviews-with-your-buyers-part-3-of-6) · [klue.com](https://klue.com/blog/klue-centralizes-win-loss-data-from-clozd-doublecheck-and-more-in-one-central-competitive-enablement-platform) · [klue.com Win-Loss launch](https://klue.com/blog/klue-unlocks-buyer-intelligence-with-the-launch-of-klue-win-loss) · [klue.com partner network](https://klue.com/blog/klue-partner-network) · [pragmaticinstitute.com](https://www.pragmaticinstitute.com/resources/articles/product/comprehensive-approach-to-win-loss-analysis/) · [pragmaticinstitute.com — State of Win-Loss 2023](https://www.pragmaticinstitute.com/resources/wp-content/uploads/sites/6/2023/10/State-of-Win-Loss-Analysis-Report-2023.pdf) · [icebergiq.com](https://www.icebergiq.com/winloss-analysis) · [icebergiq.com/about-us](https://www.icebergiq.com/about-us) · [userevidence.com/platform](https://userevidence.com/platform/) · [testbox.com](https://www.testbox.com/)
- Editorial analogs: [lennysnewsletter.com](https://www.lennysnewsletter.com/p/the-operators-guide-to-product-strategy) · [review.firstround.com](https://review.firstround.com/) · [newsletter.pragmaticengineer.com](https://newsletter.pragmaticengineer.com/p/real-world-engineering-challenges-55d)
- Expert networks: [help.alpha-sense.com — Tegus ETL](https://help.alpha-sense.com/hc/en-us/articles/43616741825939-Tegus-Expert-Transcript-Library-Understanding-Transcript-Types-Perspectives) · [sacra.com/c/tegus](https://sacra.com/c/tegus/) · [alpha-sense.com — Top Expert Network Companies 2026](https://www.alpha-sense.com/blog/product/expert-network-companies-buyers-guide/) · [thirdbridge.com — GLG vs Third Bridge](https://www.thirdbridge.com/en-us/about-us/media/perspectives/glg-vs%20third%20bridge)
- Context on NSS Labs (the model Decision Files is explicitly patterned after): [techtarget.com](https://www.techtarget.com/searchsecurity/news/252490829/NSS-Labs-ceases-operations-amid-financial-turmoil) · [darkreading.com](https://www.darkreading.com/cyber-risk/nss-labs-abrupt-shutdown-leaves-many-unanswered-questions) — NSS Labs shut down Oct 2020 after a PE-funded acquisition dried up funding and after a public dispute with CrowdStrike over adverse test results; its founder relaunched as CyberRatings.org. Relevant risk note: an independent, adversarial-to-vendors testing/rating model is financially fragile unless monetization (here: "vendors pay for candor") is diversified beyond any single vendor relationship, and adverse findings can trigger legal/PR retaliation from the vendor being covered.
- thedecisionfiles.com (site content as of fetch): homepage and case-studies listing fetched directly.
