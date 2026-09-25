# Site fixes spec — getupsight.com, September 2026

> **For:** the local session that has `epic-hq/UpSight` checked out. **Written:** 2026-09-25.
> **Why:** these are Phase 2 of `seo-plan-2026-09-gsc-bofu-loop.md`. Every item was found by
> crawling the live site on 2026-09-25; nothing here is speculative. Ordered by how many pages
> each fix affects. Estimated total: one working day.
> **Do not** touch homepage copy or design. Metadata, schema, links and templates only.

---

## 1. Sitemap (12 URLs affected)

Current `https://getupsight.com/sitemap.xml` emits `http://` URLs while every page canonical is
`https://`. Fix and reshape:

| Action | URL | Priority / changefreq |
|---|---|---|
| Change scheme on every entry | all | `https://` |
| Add | `/pricing` | 0.9 weekly |
| Add | `/about` | 0.6 monthly |
| Add | `/solutions` | 0.8 weekly |
| Add | `/docs` and `/docs/chatbots-mcp` | 0.6 monthly |
| Remove | `/login` | no search value |
| Keep, only once §4 gives it a title | `/sign-up` | 0.8 monthly |
| Add when live | `/compare/upsight-vs-dovetail`, `/mcp-server`, `/customer-call-analysis` | 0.9 weekly |

`lastmod` should be the real last-edit date of each page, not the build date. Today every entry
says 2026-09-25, which tells Google nothing.

## 2. Blog template (5 posts affected)

### 2a. Meta descriptions
Every post currently renders `Read <title> on the Upsight blog`. Replace with a per-post
`meta_description` field. Proposed copy, each ≤ 155 characters. **Four of the five were written
from the title only; check each against the post body before shipping.**

| Slug | Meta description | Chars |
|---|---|---|
| `customer-discovery-questions-not-to-ask` | Ten customer discovery questions that get polite, useless answers, and the question to ask instead of each one. Ask about the past, not the future. | see check below |
| `how-to-talk-to-customers-guide-to-customer-discovery` | How to talk to customers so the conversation produces evidence: who to interview, what to ask, how to capture what was said, and how to read it for product-market fit. | see check below |
| `what-is-customer-discovery-a-practical-guide-for-2026` | Customer discovery is turning conversations into evidence you can verify. The five-step process, the six mistakes that waste interviews, and the tools that work in 2026. | see check below |
| `stop-vibe-coding-your-way-to-nowhere` | Why building on gut feeling kills startups, why technical founders skip customer discovery anyway, and how to get evidence before you write more code. | see check below |
| `from-assumptions-to-evidence` | The best product teams build on proof, not opinion. How to turn assumptions into testable claims, gather evidence from customer conversations, and decide with receipts. | see check below |

(Verified body: only `what-is-customer-discovery`. The other four are inferred from title and H1.)

### 2b. FAQPage schema
Every post ends with a "Frequently Asked Questions" section of H3 question + paragraph answer. The
landing pages already emit `FAQPage` JSON-LD; the blog template emits only `BlogPosting`. Generate
`FAQPage` from the FAQ section at build time: `name` = H3 text verbatim, `text` = first paragraph of
the answer, capped at 300 characters.

### 2c. Author and dates
- `author` is currently `{"@type":"Person","name":"Rick"}`. Make it
  `{"@type":"Person","name":"Rick Moy","url":"https://getupsight.com/about"}`. If an author page
  is ever built, point `url` there instead.
- All five posts carry `dateModified: 2026-03-29` from one bulk edit. Set `dateModified` from the
  content's real last edit, or omit it. A single shared date across all posts reads as a template
  stamp, not a signal.

### 2d. Brand casing
Blog `<title>`s end in `| Upsight Blog`; the blog index is `Blog | Upsight - Customer Insights &
Best Practices`. Product is "UpSight" everywhere else. Fix the template string once.

## 3. Homepage `<head>` (highest-traffic page: 223 of 383 impressions)

Missing today: canonical, `og:title`, `og:description`, `og:image`, Twitter card, any JSON-LD.

```html
<link rel="canonical" href="https://getupsight.com/">
<meta property="og:type" content="website">
<meta property="og:title" content="UpSight | Your last 100 calls already answered this">
<meta property="og:description" content="The roadmap fight. The pricing call. The requirements nobody agrees on. The answer is already in a call you recorded — UpSight finds it and hands it back with the exact moment someone said it.">
<meta property="og:url" content="https://getupsight.com/">
<meta property="og:image" content="https://getupsight.com/og/home.png">  <!-- 1200×630; create if absent -->
<meta name="twitter:card" content="summary_large_image">
```

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://getupsight.com/#org",
      "name": "UpSight",
      "url": "https://getupsight.com/",
      "logo": "https://getupsight.com/icons/icon-512x512.png",
      "founder": {"@type": "Person", "name": "Rick Moy", "url": "https://getupsight.com/about"},
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://getupsight.com/#site",
      "url": "https://getupsight.com/",
      "name": "UpSight",
      "publisher": {"@id": "https://getupsight.com/#org"}
    }
  ]
}
```

`sameAs`: add the real LinkedIn company page and X profile URLs; leave the array empty rather
than guessing. The logo path is the existing 512px icon referenced in the page's `<link>` tags;
swap for a proper logo file if one exists.

## 4. Pages with no `<title>` (2 pages, one of them in the sitemap)

| Page | Title tag | Meta description |
|---|---|---|
| `/about` | About UpSight \| Founder Rick Moy | Rick Moy built UpSight because customer truth kept getting lost after teams did the hard part: talking to customers. Who we are and why receipts matter. |
| `/sign-up` | Sign Up \| Analyze 3 Calls Free \| UpSight | Create a free UpSight account. Upload three recorded calls, pick a lens, and see what you've been missing, with every finding linked to the moment it was said. |

`/sign-up` also has no canonical. Add `https://getupsight.com/sign-up`.

## 5. Landing-page title tags (2 pages; 84–86 characters, truncating around 60)

| Page | Current length | New title tag |
|---|---|---|
| `/customer-discovery` | 86 | Customer Discovery Platform \| UpSight |
| `/customer-discovery-for-consultants` | 84 | Customer Discovery for Consultants \| UpSight |
| `/blog` | 50 but wrong casing | Customer Intelligence Blog \| UpSight |

The `og:title` on both landing pages already says exactly the new text. Make `<title>` match.

## 6. RSS

`/blog/rss.xml` returns HTTP 500. `/feed.xml` is 404. Fix the route or remove the link to it;
AI crawlers and aggregators use feeds.

## 7. Internal links (contextual, in body copy, anchor text = target query)

Today every page links only through the nav and footer. Add these in body copy:

| From | To | Anchor text |
|---|---|---|
| `/customer-discovery` (the "Built for builders" comparison block) | `/compare/upsight-vs-dovetail` | UpSight vs Dovetail |
| `/customer-discovery` (Step 02 Synthesize) | `/blog/what-is-customer-discovery-a-practical-guide-for-2026` | what customer discovery is |
| `/customer-discovery-for-consultants` (Step 01 Capture) | `/blog/customer-discovery-questions-not-to-ask` | questions that get honest answers |
| `/` ("Same call, four answers" section) | `/customer-call-analysis` | how call analysis works |
| `/` ("One summary is not what a call is worth") | `/mcp-server` | or ask Claude directly |
| `/pricing` ("MCP-native" card) | `/mcp-server` | see what the MCP server can do |
| `/pricing` (below plan cards) | `/compare/upsight-vs-dovetail` | compared with Dovetail |
| `/solutions` (Sales & Deal Intelligence) | `/customer-call-analysis` | customer call analysis |
| `/docs/chatbots-mcp` (top) | `/mcp-server` | why teams connect their AI to UpSight |
| each blog post (tools or evidence section) | its persona's landing page | customer discovery platform / customer discovery for consultants |
| each blog post (end) | one sibling post | the sibling's target keyword |
| `/blog/what-is-customer-discovery…` (tools section, where Dovetail is named) | `/compare/upsight-vs-dovetail` | how UpSight compares with Dovetail |

## 8. Organic sign-up attribution (PostHog)

Needed so the experiment has a primary metric. PostHog already sets `$initial_referring_domain`
as a person property on first visit; no new code is required for that. Two small tasks:

1. Confirm the sign-up completion event fires (name it here once known) and that the person
   profile carries `$initial_referring_domain` and `$initial_utm_source`.
2. Create a saved insight: sign-up completions where `$initial_referring_domain` matches
   `google.`, `bing.`, `duckduckgo.`, `search.yahoo.` or `$initial_utm_medium = organic`,
   trended by week. Link it from `40-gtm/experiments/2026-09-gsc-bofu-loop.md`.

## 9. New pages (Phase 3, copy is ready)

Ready-to-build copy with title tag, meta, FAQ and schema blocks:

| URL | Copy |
|---|---|
| `/compare/upsight-vs-dovetail` | `comparison-pages/upsight-vs-dovetail.md` |
| `/mcp-server` (**not** `/mcp`, which is the live endpoint) | `landing-pages/mcp-server.md` |
| `/customer-call-analysis` | `landing-pages/customer-call-analysis.md` |

Each file's frontmatter lists the inbound links to add from existing pages. Build them on the
`/customer-discovery` page template so `BreadcrumbList` and `SoftwareApplication` come for free.
Add each to the sitemap the day it ships and request indexing in Search Console.

## 10. Verification before merge

- `curl -s https://getupsight.com/sitemap.xml | grep -c "http://"` returns 0.
- Every URL in the sitemap returns a `<title>`, a `<meta name="description">` and a canonical.
- Google's Rich Results Test passes `FAQPage` on one blog post and one new page.
- Lighthouse SEO score on `/` and one blog post is ≥ 95.
