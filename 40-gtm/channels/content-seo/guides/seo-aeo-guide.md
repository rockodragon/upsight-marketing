# SEO + AI Engine Optimization (AEO) Guide for UpSight Blog Content

> Reference guide for optimizing blog posts for both traditional search (Google) and AI search engines (ChatGPT, Perplexity, Claude, Google AI Overviews).

---

## Part 1: JSON-LD Structured Data

JSON-LD (JavaScript Object Notation for Linked Data) is a `<script>` block in your page's `<head>` that tells search engines **what your content is** using Schema.org vocabulary. It doesn't affect what readers see — it's metadata for machines.

### When to add it
Add JSON-LD when the blog post is published to the actual website (upsight.ai). It goes in the `<head>` of the HTML page, not in the markdown source file. If your CMS supports structured data fields, use those. Otherwise, inject via a custom code block or template.

### Three schema types for every blog post

#### 1. Article Schema
**Purpose:** Tells Google this is a blog article, who wrote it, when, and what it's about.
**What it gets you:** Rich results (author, date, thumbnail in SERPs). Helps AI engines attribute the source when citing.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post title here",
  "author": {
    "@type": "Person",
    "name": "Rick Moy",
    "url": "https://upsight.ai/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "UpSight",
    "logo": {
      "@type": "ImageObject",
      "url": "https://upsight.ai/logo.png"
    }
  },
  "datePublished": "2026-04-01",
  "dateModified": "2026-04-01",
  "description": "Meta description here",
  "image": "https://upsight.ai/blog/og/slug.png",
  "mainEntityOfPage": "https://upsight.ai/blog/slug"
}
```

#### 2. FAQPage Schema
**Purpose:** Maps your FAQ section so Google displays expandable Q&A in search results.
**What it gets you:** FAQ rich snippets — more SERP real estate, higher CTR. **Highest-leverage SEO move.** Also the #1 format AI engines pull from for direct answers.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here."
      }
    }
  ]
}
```

**Rules:**
- Keep answers concise (1-3 sentences in the schema, even if the page has more detail)
- Use the exact same question text as your H3 headings
- Include all FAQ items from the page

#### 3. HowTo Schema
**Purpose:** Maps step-by-step frameworks so Google displays them as process guides.
**What it gets you:** Step-by-step rich results. AI engines love extracting numbered processes.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Process name",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Step title",
      "text": "Step description (1-2 sentences)"
    }
  ]
}
```

**Use when:** Post contains a numbered process/framework.

---

## Part 2: AI Engine Optimization (AEO)

### How AI search engines work

AI search engines (Perplexity, ChatGPT with search, Google AI Overviews) follow this flow:

1. **Query -> web search** for relevant pages
2. **Extract passages** that directly answer the query
3. **Rank by citation confidence** — how quotable, specific, and authoritative is the passage?
4. **Synthesize answer** with inline citations back to your URL

**Your goal:** Make content easy to extract and confident to cite.

### AEO Checklist (apply to every blog post)

#### Structure & Formatting

- [ ] **Bold quotable definition in first 3 paragraphs** — A single sentence that directly defines the topic. AI engines grab the first clean definition they find.
- [ ] **Target keyword in the first paragraph** — Don't bury it. The exact keyword phrase people search for should appear in sentence 1 or 2.
- [ ] **H2s phrased as questions** — Match the questions users actually ask AI engines ("What is X?", "How does X work?", "Why does X matter?")
- [ ] **Numbered steps with bold labels** — Easy for LLMs to extract as structured lists. Format: `### Step N: Bold Title` with a concise description.
- [ ] **FAQ section at bottom** — Direct Q&A pairs are the ideal format for AI citation and Google featured snippets.
- [ ] **Concrete numbers over vague claims** — "12 to 20 conversations" beats "several conversations." "45 minutes per interview" beats "a long time." AI engines prefer specific stats for citation confidence.

#### Extraction-Friendly Patterns

- [ ] **"In short" / summary callouts** — Add a bold one-liner at the end of key sections that summarizes the takeaway. AI engines love grabbing these.
  - Example: **In short:** Customer discovery is a practice, not a phase.
- [ ] **Comparison/contrast framing** — "X vs Y" content performs well in AI search. Include at least one comparison (e.g., "customer discovery vs market research").
- [ ] **Tables for comparisons** — AI engines extract tables very efficiently. Use for tool comparisons, before/after, or feature matrices.
- [ ] **Explicit attributions** — When citing sources, use "According to [source]" format. AI engines use these patterns to assess reliability.
  - Example: "According to Steve Blank's *Four Steps to the Epiphany*..."

#### Authority Signals

- [ ] **Author bio with credentials** — Include at bottom. AI engines weight content higher when they can identify a credible author.
- [ ] **Author schema in JSON-LD** — Link to author's about page or LinkedIn.
- [ ] **Outbound links to authoritative sources** — Reference well-known frameworks, books, or research. Shows you're part of the conversation, not just regurgitating.

#### Keyword Strategy

- [ ] **Primary keyword in H1, first paragraph, and meta description**
- [ ] **Long-tail variants in H2s/H3s** — "customer discovery process", "customer discovery tools", "how to do customer discovery"
- [ ] **Question-based H2s match AI query patterns** — People ask AI engines questions, not keywords
- [ ] **"What is [X] in simple terms?" as an FAQ** — This is the single most common AI query pattern

### Testing After Publishing

Wait 2-4 weeks for indexing, then check:

1. **Perplexity** — Search your target keyword. Does your post get cited?
2. **ChatGPT** — Ask the question your H1 answers. Does it reference your framework?
3. **Google AI Overview** — Search the target keyword. Does your FAQ appear?
4. **Google Search Console** — Check which queries are driving impressions and clicks

### Quick Reference: Content That Gets Cited

| Format | Why AI engines love it | Example |
|--------|----------------------|---------|
| Bold definition sentence | Easy to extract verbatim | "**Customer discovery is turning conversations into evidence you can verify.**" |
| Numbered steps | Structured, easy to list | "Step 1: Write Down Assumptions" |
| FAQ Q&A pairs | Direct question-answer mapping | "How many interviews? 12-20 for pattern recognition." |
| Concrete stats | Citation confidence | "45 minutes per interview" not "a while" |
| Comparison tables | Efficient extraction | Tool comparison matrix |
| "In short" summaries | Single-sentence takeaways | "**In short:** Discovery is a practice, not a phase." |

---

## Part 3: Implementation Notes

### For the UpSight blog specifically:
- JSON-LD should be added at the CMS/template level, not in markdown source files
- The markdown frontmatter (`images.og_image`, `meta_description`, `target_keywords`) feeds the CMS template
- SVG diagrams are stored in `../assets/images/` and referenced from posts
- OG images (1200x630) should be generated for each post for social sharing
- Keep FAQ answers under 300 characters in JSON-LD for optimal snippet display

### Publishing workflow:
1. Write post in markdown with frontmatter
2. Apply AEO checklist above
3. Generate/assign images (hero, framework diagrams, OG image)
4. Create HTML preview to review post + images together
5. Publish to CMS with all metadata
6. Add JSON-LD via CMS structured data fields
7. Test in Perplexity/ChatGPT/Google after 2-4 weeks
