---
tags:
  - marketing
  - outbound
  - icp
  - targeting
---
# Segment G — Health, Beauty & Wellness Product Brands

*Extends [[targeting-and-response-playbook]] §1 with a seventh segment. Same operating cadence, same
templates, same list-hygiene rules — this doc only defines **who** and **how to find them cheaply**.*

> **TL;DR**
> - **Beachhead:** US DTC-led supplement and skincare brands, 20–300 employees, $5M–$50M revenue, on Shopify.
> - **Sharpest wedge:** supplements/nutraceuticals can't make a claim they can't substantiate. "Receipts for
>   every insight, auditable to the source" is a *compliance asset* for them, not just a nice-to-have.
> - **Cost split:** Apollo builds the bulk list (email is ~free there). Exa finds the brands Apollo's
>   industry taxonomy misses.
> - **Do not buy phone numbers from either, yet.** See §4 — Exa's phone data failed a hands-on check.

---

## 1. Why this segment fits UpSight

Three of the playbook's problem rows land unusually hard here:

| Playbook problem | Why it's acute for health/beauty/wellness |
|---|---|
| 🔥 **"Surveys are long, boring, and generic"** | These brands already run post-purchase surveys constantly (Fairing, KnoCommerce, Yotpo). They have survey infrastructure and survey fatigue — they know the pain and already budget for it. Warm category, not a cold concept sell. |
| 🔥 **"Marketing needs testimonials — finding people, scheduling, getting video is a hassle"** | UGC *is* the marketing channel in beauty and wellness. Video/audio testimonials are the single highest-value output, and getting them is the daily grind of every brand marketer in this space. |
| **Receipts / "grounded, not generated"** (per [[wedge-icp-refinement-2026-06-26]]) | Supplements and wellness sit under FTC/FDA substantiation rules. A brand claiming "customers report better sleep" needs *attributable, auditable evidence* — not an AI summary. This is the strongest version of our #1 validated theme anywhere in the ICP. |

Fourth, quieter driver: **next-SKU decisions.** Formulation, flavor, scent, and packaging calls are expensive
and irreversible. These teams want structured customer input before committing to a production run.

---

## 2. ICP definition

### Sub-verticals, ranked

| Rank | Sub-vertical | Why this order |
|---|---|---|
| 1 | **Supplements / nutraceuticals** | Compliance pressure makes receipts a *requirement*. Highest willingness to pay for defensible evidence. |
| 2 | **Skincare / clean beauty** | Heaviest UGC and review culture; testimonial wedge lands hardest. Very high volume of targets. |
| 3 | **Functional food & beverage** | Expo West crowd (see §5). Slightly thinner budgets, but dense and reachable. |
| 4 | **Fitness / recovery / wellness devices** | Higher AOV and more considered purchase → richer research need, but a much smaller universe. |

### Firmographics

- **Employees:** 20–300
- **Revenue:** $5M–$50M — but treat headcount as the operative filter. Private DTC brands rarely
  publish revenue, so it can't be verified reliably. At roughly $200–400k revenue per employee,
  20–300 heads brackets the band; the top of the range drifts past $50M, which is an acceptable
  overshoot.
- **Scale proof:** sells nationally **online or** through retail. Online-only is fine and common —
  the point is national reach, not shelf space.
- **Geography:** US. Start LA metro — Silicon Beach is the largest DTC origin market in the country
  (playbook §"Local clusters") — then expand nationally.
- **Model:** owns its brand and sells DTC through its own site. Omnichannel (also in Sephora/Target/Whole
  Foods) is fine and often *better* — retail brands have more at stake on a formulation call.

### Titles

| Company size | Go after |
|---|---|
| Under 30 | Founder, Co-Founder, CEO |
| 30–300 | VP/Head/Director of: Marketing, Brand, Growth, Ecommerce, Customer Experience, Retention, Consumer Insights, Product Development |
| Backup contact | Community Manager, Lifecycle Marketing Manager, Brand Manager — use for multi-threading only |

Per the playbook's gatekeeper rule: under 50 employees, Director *is* the buyer — go direct. At 50–300,
target Director/VP, not the founder.

### Anti-ICP — disqualify fast

- Amazon-only resellers, dropshippers, and white-label arbitrage — no brand equity, no research budget
- MLM / direct-sales companies
- Contract manufacturers, co-packers, private-label suppliers, ingredient suppliers (they have no consumers)
- Beauty *retailers*, marketplaces, subscription boxes that don't own a brand
- Global conglomerates (L'Oréal, Unilever, P&G brands) — buying committee, procurement, 9-month cycle
- Pre-revenue / pre-launch brands — no customers to research yet
- Med spas, clinics, gyms, studios — services, not products; different problem entirely

---

## 3. Apollo recipe — the bulk list

**Cost principle: Apollo email/export credits are effectively unlimited on paid plans; mobile credits are
rationed at 75–100/month. Build the whole list here, export emails freely, and reveal zero mobile numbers.**

On phone: this doc previously routed phone enrichment to Exa at $0.07 against Apollo's effective ~$0.79.
**That recommendation is withdrawn** — see the accuracy note in §4. Until one source is verified, buy phone
from neither. The playbook's motion is email-first anyway, so this blocks nothing.

### Filters

**Company**
- Industry: `Cosmetics`, `Health, Wellness and Fitness`, `Consumer Goods`, `Food & Beverages`,
  `Food Production`, `Alternative Medicine`
- Employees: `20–300`
- Location: `United States` (start: `Los Angeles`, `Orange County`, `San Diego`)
- Keywords in company description: `skincare`, `supplement`, `clean beauty`, `nutraceutical`, `wellness`,
  `functional beverage`, `personal care`, `DTC`
- **Technographics — this is the highest-signal filter in the whole recipe:**
  `Shopify` or `Shopify Plus` **AND** any of `Klaviyo`, `Recharge`, `Yotpo`, `Okendo`, `Attentive`,
  `Postscript`, `Gorgias`, `Triple Whale`.
  A brand running Shopify + Klaviyo + a reviews app is definitionally a real DTC operation with a
  retention budget. This single filter kills nearly all the anti-ICP noise above.

**Intent / timing signals** — layer at least one on every saved search:
- Job postings (last 90 days) for: `Consumer Insights`, `Customer Experience`, `Retention Marketing`,
  `Lifecycle Marketing`, `Brand Manager`, `Product Development`
- Job-change filter: VP/Director of Marketing, Brand, or CX hired in the last 90 days
- Funding: raised Seed–Series B in the last 18 months
- Buying Intent topics: `customer experience`, `voice of customer`, `market research`, `survey software`

### Apollo AI Assistant prompt

Paste into Apollo's AI Assistant, then hand-tune the filters it produces:

```
Find US direct-to-consumer health, beauty, and wellness brands that sell their own branded physical
products — supplements, skincare, clean beauty, or functional food and beverage. Companies with 20 to
300 employees that use Shopify plus Klaviyo or a reviews app like Yotpo or Okendo. Exclude retailers,
marketplaces, contract manufacturers, ingredient suppliers, MLM companies, and Amazon-only sellers.

For people, find the Founder or CEO at companies under 30 employees, and VP, Head, or Director of
Marketing, Brand, Growth, Ecommerce, Customer Experience, Retention, or Consumer Insights at companies
with 30 to 300 employees. Prioritize companies that posted a job in the last 90 days for consumer
insights, customer experience, retention marketing, or product development.
```

### List hygiene

Inherits the playbook's rules unchanged: **verified emails only**, catch-all capped at 2–5% of any batch
and only after manual check, never send to `info@` / `hello@` / `support@`. Beauty brands lean heavily on
role inboxes — expect to discard more role-based records here than in other segments.

Tag every export `segment=G` plus the sub-vertical so weekly metrics (§6 of the playbook) can tell
supplements from skincare. These will not perform the same and should be judged separately.

---

## 4. Exa recipe — the signal layer

Exa is **not** the cheaper way to do what Apollo already does. Its job is to find what Apollo's
firmographic taxonomy structurally cannot: brands identified by *behavior* rather than by industry code.

Use Exa for:
- Brands whose founder publicly talks about reformulating based on customer feedback
- Brands that just launched or teased a new SKU (active research need, right now)
- Expo West / Cosmoprof exhibitor lists turned into structured contact rows
- Anything mis-tagged in Apollo's industry taxonomy — a real problem in this vertical, where brands get
  filed under generic `Retail` or `Consumer Goods`

### Cost control — read before running anything

Measured on a real run: **$1.88 for 10 records with email + phone = $0.188/record**, of which only
**$0.09 was data**. The rest was Agent Compute Units — the agent reasoning. Rules:

1. **Never use `effort: "auto"` for bulk work.** Use a fixed effort level (`low` = $0.025/request) so
   cost is bounded and predictable instead of scaling with how much the agent decides to think.
2. **Pass the domain in.** If the agent has to search to work out which company someone's at, you pay for
   that search. Resolve company → domain first, then enrich.
3. **Email only. Do not buy phone.** Pass 1 = email ($0.02). There is no phone pass until the accuracy
   question below is settled.
4. **Batch.** More records per agent run amortizes the fixed reasoning overhead.

### ⚠️ Phone accuracy — unresolved, 2026-08-05

Hands-on check by the growth intern: **Exa phone numbers were mostly wrong.** Anecdotal, not counted, but
consistent enough to act on.

A wrong number is worse than no number: it burns a dial and risks calling an uninvolved stranger. The
$0.07-vs-$0.79 argument only holds if the data is right, so price is not the deciding factor here.

**Until this is quantified, buy phone from neither source.** To settle it, take 10 records, pull phone from
Exa, and check each against LinkedIn or the company's own site. Under ~70% correct, phone enrichment is
off the table until a better source is found (Cognism and Lusha are the usual answers, both pricier).

This matters little in practice: the playbook's motion is email-first, one-to-one, 20 a day.

### Websets query (list building)

```
US-based direct-to-consumer brands that make and sell their own health, beauty, or wellness products —
supplements, skincare, clean beauty, or functional food and beverage — with 20 to 300 employees.
```

Verification criteria (add each as its own criterion so Exa checks them independently):
- Company sells its own branded consumer product, not other brands' products
- Company is not a retailer, marketplace, contract manufacturer, ingredient supplier, or agency
- Company is headquartered in the United States
- Company has between 20 and 300 employees
- Company sells directly to consumers through its own website

Enrichments — **email only on the first pass**: founder or head-of-marketing name, job title,
LinkedIn URL, company domain, work email.

### Agent API prompt (enrichment)

```
For each company in the input data, find the single best contact for customer research and brand
marketing decisions.

Prefer, in this order:
1. VP, Head, or Director of Consumer Insights, Customer Experience, or Retention
2. VP, Head, or Director of Marketing or Brand
3. Founder or CEO, but only if the company has fewer than 30 employees

Return: full name, exact job title, LinkedIn URL, and work email.
Do not return generic role inboxes such as info@, hello@, support@, or press@.
If no contact meets the criteria above, return null rather than a lower-quality guess.
```

Run with `effort: "low"`. Feed it a domain column. Request `email` enrichment only — add a separate
phone pass later, scoped to the shortlist you're actually calling.

> **Open item:** confirm whether Exa's fixed effort levels are all-in or additive to the $0.02/$0.07
> enrichment line items. Test = run 10 records at `effort: "low"` and read the invoice. If all-in, Exa
> drops to ~$0.025/record and becomes the default for everything except bulk email.

---

## 5. The unfair advantage: Natural Products Expo West

**Anaheim Convention Center, ~60,000 attendees** — the largest natural products / supplements / functional
food trade show in the US, and it's a drive away (playbook §"Local clusters" already flags it).

This is the highest-leverage thing in this segment:
- The exhibitor list *is* a pre-qualified target list for sub-verticals 1 and 3 — every exhibitor makes
  and sells its own branded product, which is exactly the anti-ICP filter that's hardest to automate
- Run it through Exa Websets (§4) to turn exhibitor names into structured, enriched rows
- It converts cold outreach into the playbook's strongest mechanic: **warm-from-event**. Per §"Turning
  LA/OC into replies," only use a "we were both there" hook *after actually attending*
- It doubles as a segment F (event organizer) play and a live test bed for the AI Interviewer Kiosk

Batch the trip per the playbook's rule — stack 3–5 booked touches around a single day, and say so in the ask.

---

## 6. Suggested next steps

1. Build the Apollo saved search from §3; verify the technographic filter actually thins the list to real
   DTC brands before exporting anything.
2. Run the Exa `effort: "low"` cost test (§4 open item) — it decides the whole cost model.
3. Draft a segment-G variant of the *cold-consultant* template in [[templates]], led with the
   testimonial/UGC problem for skincare and the substantiation/receipts problem for supplements.
4. Check Expo West 2027 dates and decide whether to attend.
