---
tags:
  - marketing
  - outbound
  - ops
  - how-to
---
# Building Contact Lists with Exa Websets — Intern Guide

*No code, no API key. Everything here happens in a browser.*
*Target list definition lives in [[segment-g-health-beauty-wellness]] — read §2 of that doc first so you
know who counts as a good match.*

---

## Setup (one time)

1. Rick invites you to the Exa team — you'll get an email invite. Accept it and set your own password.
   **You get your own login.** Don't share credentials with anyone.
2. Go to **websets.exa.ai** and sign in.
3. You'll land on the Websets dashboard. That's the whole tool.

---

## The workflow

A "Webset" is one saved search that produces a spreadsheet. You'll build several small ones, not one big one.

1. Click **New Webset**.
2. **Describe who you want** in plain English. Say *people*, not companies, when you want contacts —
   Exa will find the person, not just the brand. Use the search text in the next section.
3. **Add criteria.** These are yes/no rules Exa checks on every result before keeping it. Add each rule as
   its own line — don't cram them into one sentence. This is what keeps junk out.
4. **Add enrichment columns** — this is where you request work email, job title, LinkedIn URL.
5. **Run it.** Exa searches, checks each result against your criteria, and fills in the columns.
6. **Export to CSV** when it finishes, and hand it to Rick.

---

## Copy-paste: the search

**Search text:**

```
Marketing decision-makers at US companies that make and sell their own health, wellness, or beauty
products — supplements, skincare, personal care, cosmetics, or consumer health products — at
established brands with roughly 20 to 300 employees that actively use customer testimonials,
reviews, or before-and-after results in their marketing.
```

**Criteria — add each as a separate line:**

```
The company makes and sells its own branded health, wellness, or beauty product
The company is headquartered in the United States
The company has between 20 and 300 employees
The company sells nationally, either online or through retail stores
The company visibly uses customer testimonials, reviews, or user-generated content in its marketing
The person leads marketing, brand, growth, ecommerce, customer experience, or consumer insights at director level or above
The company is not a retailer, marketplace, contract manufacturer, ingredient supplier, agency, clinic, medical provider, or MLM
```

The line about **testimonials and reviews** is the important one. It's what makes this list better than
a plain industry search: it finds brands that already care about customer proof, which is exactly what
UpSight helps with. Don't drop it.

If a test run comes back with too few results, remove the "sells nationally" line first — it's the one
most likely to reject a good company just because the web doesn't say so clearly.

**Enrichment columns to add:**

```
Full name
Job title
LinkedIn URL
Company website
Work email
```

**Never add a phone column.** Two reasons. It costs the same as email for something we rarely use, and
more importantly, when we checked the phone numbers Exa returned, **most of them were wrong**. A wrong
number is worse than none — someone wastes a call, possibly on a stranger. Email only until that changes.

---

## Budget rules — read this before you run anything

We're on the Starter plan: **8,000 credits per month, and they don't roll over.** Credits work like this:

| What | Credits |
|---|---|
| One result that matches all your criteria | 10 |
| Work email on that result | 5 |
| Phone number | 5 |
| Any other extra column | 2 |
| A result that **doesn't** match | **0 — free** |

So **one good contact with an email costs about 15 credits.** That's roughly **500 contacts a month**,
total, across everything you do. Adding phone drops it to about 400.

Because non-matches are free, a search that's too broad isn't a disaster — you only pay for keepers.
The thing that *does* waste credits is running a big list with the wrong criteria and getting 100 good
matches you then throw away.

**So: always test small first.**

1. Run the search capped at **25 results** (~375 credits, about 5% of the month).
2. Open the CSV. Check 5 rows by hand against the criteria — click through to the LinkedIn and the company
   site. Are these really DTC brands that make their own product?
3. If more than 1 in 5 is wrong, **fix the criteria and test again** — don't scale a broken search.
4. Only once a test run looks clean, run the full 100.

Starter caps each Webset at **100 results**, so build several focused searches (one for supplements, one
for skincare, one per city) rather than one giant one. That's better anyway — it makes the results easier
to check.

---

## What good looks like

✅ **Keep:** a brand that makes its own supplements or skincare, sells on its own website, 20–300 people,
and the contact runs marketing, brand, CX, or insights.

❌ **Throw out:**
- Retailers and marketplaces (they sell other people's brands)
- Contract manufacturers, co-packers, ingredient suppliers (no consumers of their own)
- Med spas, gyms, clinics, studios (services, not products)
- MLM / direct-sales companies
- Amazon-only sellers and dropshippers
- Huge companies (L'Oréal, Unilever brands) — too big for us
- Generic inboxes: `info@`, `hello@`, `support@`, `press@` — never keep these

---

## Ask Rick before you

- Add a phone number column
- Run more than 3 full 100-result Websets in a week
- Change the criteria in a way that widens the search a lot

---

## When you're done

Export the CSV and give it to Rick with two notes:
1. **How many results you got**, and roughly what share looked wrong when you spot-checked
2. **Anything the search kept getting wrong** — that's how we improve the criteria next time

Don't email anyone from this list yourself. Rick sends everything from his mailbox.
