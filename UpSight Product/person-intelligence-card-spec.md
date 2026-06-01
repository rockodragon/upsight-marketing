# Person Intelligence Card — Full Spec

> **Date**: 2026-04-03
> **Status**: Ready to build
> **Prototype**: `_bmad-output/planning-artifacts/person-company-cards.html`
> **Wireframe concepts**: `_bmad-output/planning-artifacts/insights-canvas-concepts.html`
> **Plan file**: `.claude/plans/wobbly-splashing-nebula.md`
> **Related docs**: [Persona Flow Matrix](../50-market/persona-flow-matrix.md) · [Competitive Analysis](../market-research/competitive-card-analysis.md) · [Person Intelligence Matrix](../../Code/ai/Insights/docs/20-features-prds/features/person-intelligence-matrix.md)

---

## What This Is

A redesigned person detail card that tells a founder or AE exactly what to do with a contact in 3 seconds. Replaces the current PersonScorecard with a verdict-first layout backed by materialized server-side signals.

**Card structure (from wireframe iteration):**
```
Score/ICP + Champion/Blocker/Authority (user-editable)
Status (one-line with colored dot)
What would move them / what's in the way (+ key quote)
Last touch · deal context (→ linked to opportunity)
Themes (compact, top 3 with counts)
───
Next Steps (heading)
  → Action 1                              [Do now] [Create task]
  → Action 2 [BANT gap: no budget holder] [Do now] [Create task]
  → Action 3                              [Do now] [Create task]
```

---

## Architecture: person_signals Table

### Why Materialize

`lastContactDate`, `stakeholderStance`, `conversationCount`, `contactStatus` are currently computed client-side or per-request. This is wrong because:
- Server-side agents need these values (Mastra tools, Trigger.dev tasks)
- List views need to sort/filter by recency or status without loading every person's interviews
- BANT gap detection shouldn't run per-request — it should be cached after lens processing
- User overrides (editing the stance or status) need a place to persist

### Schema: `person_signals`

```sql
create table person_signals (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references people(id) on delete cascade,
  account_id uuid not null references accounts.accounts(id) on delete cascade,
  project_id uuid not null references projects(id) on delete cascade,

  -- Materialized signals
  last_contact_at timestamptz,
  conversation_count integer not null default 0,
  survey_count integer not null default 0,

  -- Stakeholder classification (user-overridable)
  stakeholder_stance text,          -- champion | blocker | evaluator | technical | authority | neutral
  stakeholder_stance_source text default 'inferred',  -- inferred | manual

  -- Contact status
  contact_status text,              -- active | cold | new | no_contact

  -- Deal linkage
  primary_opportunity_id uuid references opportunities(id) on delete set null,

  -- BANT gaps (cached)
  bant_gap_count integer not null default 0,
  bant_gaps jsonb default '[]'::jsonb,

  -- User overrides
  user_status_note text,
  user_notes jsonb default '{}'::jsonb,

  -- Audit
  computed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique(person_id, project_id)
);
```

### OPEN ARCHITECTURE QUESTION: Stakeholder Stance Scope

**Does stakeholder_stance live per-person-per-project or per-person-per-deal?**

The same person could be a "champion" for Deal A but a "blocker" for Deal B (different product lines, different contexts). The options:

**Option A: On person_signals (per-person-per-project) — simpler**
- One stance per person per project
- Good enough for most 3-50 person companies where one person = one deal context
- Simpler UI — one badge on the card
- Risk: wrong when a person spans multiple deals

**Option B: On a deal-person junction — more correct**
- `opportunity_stakeholders` table: `(opportunity_id, person_id, stance, stance_source)`
- `person_signals.stakeholder_stance` becomes the "rollup" (most recent or primary deal's stance)
- More complex but handles multi-deal scenarios
- Aligns with how Gong does it (contact → deal level, not global)

**Recommendation for architect review:** Start with Option A (simpler, fits 3-50 company size). Add `opportunity_stakeholders` junction in Phase 2 if multi-deal scenarios emerge. The `person_signals` table can serve as the rollup/cache regardless.

---

## Suggested Task System

### New task status: `suggested`

Tasks in `suggested` status:
- Created by AI (BANT gaps, recency signals, lens recommendations)
- Visible in task lists with distinct visual treatment (Lightbulb icon, violet)
- User promotes to `todo` via "Create task" button, or "Do now" for immediate action
- Persist — not regenerated each time the page loads
- Can be dismissed when no longer applicable
- Feed into project status chat ("what should I do?")
- Link back to source via `task_links` (entity_type: person, link_type: source)

### Task lifecycle
```
AI generates → "suggested" (visible but not in workflow)
  → User: "Create task" → becomes "backlog" or "todo" with due date
  → User: "Do now" → becomes "in_progress"
  → User: "Dismiss" → becomes "archived"
  → System: source condition resolved → auto-archive
```

---

## Trigger.dev: computePersonSignals Task

**Location:** `src/trigger/people/computePersonSignals.ts`

**Trigger points:**
1. After `finalizeInterviewTaskV2` completes (for all people linked to the interview)
2. After ICP scoring runs
3. After BANT lens analysis completes
4. On-demand (user clicks "recompute" or agent requests it)

**Logic:**
1. Query `interview_people` → count conversations, find max created_at
2. Query `conversation_lens_analyses` (template_key: sales-bant) → extract hygiene gaps, stakeholder stance
3. Query `opportunities` via person's org → link primary opportunity
4. Derive contact_status: no interviews → no_contact, >14d → cold, else → active
5. Upsert into `person_signals` (preserves manual overrides via `stakeholder_stance_source` check)

---

## Insights Canvas (Future — Not This Sprint)

Three concepts wireframed. Decision:
- **Concept A: The Diagnosis** → new default Insights landing page (revenue-framed narrative)
- **Concept B: Agreement Map** → drill-down view (Rick likes this)
- **Concept C: Assumptions Tested** → deprioritized (requires hypothesis capture, maps to dropped researcher persona)

Current themes page (`/insights/themes`) stays as detailed exploration view.

---

## Company Card (Future — Not This Sprint)

Wireframed at `_bmad-output/planning-artifacts/person-company-cards.html` (Company Cards tab):
- AI verdict with revenue context
- Stakeholder map (champion/blocker/neutral + gap rows with "+ Create task")
- BANT gaps → suggested tasks with source attribution
- Open tasks linked to account
- Themes rolled up per company

---

## Competitive Positioning (from analysis)

**Where this card wins vs. Gong/HubSpot/Day.ai:**
1. BANT gaps → auto-suggested tasks (nobody else does gap → task)
2. Multi-source evidence (surveys + calls + transcripts in one view)
3. Company-level stakeholder gap detection ("you haven't talked to the budget holder")
4. Evidence quotes persistent on card (push vs. pull)

**Where we need to catch up (future):**
- Deal likelihood score (distinct from ICP)
- Configurable warning thresholds
- Per-person "Ask Anything" queryable history
- Calendar integration for pre-call briefings

Full analysis: `Docs_obsidian/.../market-research/competitive-card-analysis.md`

---

## Personas Served

| Persona | What this card gives them |
|---|---|
| **Consultant** | Stakeholder stance, key quote, "draft follow-up" action |
| **Founder** | Contact status, deal context, BANT gaps to close |
| **Sales/BD** | ICP score, opportunity link, next steps prioritized by deal impact |
| **Product Lead** | Themes, conversation count, "send survey" action |

Full persona definitions: `Docs_obsidian/.../50-market/persona-flow-matrix.md`

---

## Sprint Scope (Priority Order)

1. `person_signals` schema + migration
2. `computePersonSignals` Trigger.dev task
3. PersonIntelligenceCard reads from `person_signals`
4. `suggested` task status (types + component — already built in prototype)
5. Override affordances (stance dropdown persists, status note, dismiss gaps)
6. Wire into `finalizeInterviewTaskV2`
7. Tests

---

## Files Reference

**Prototype (in worktree `condescending-edison`):**
- `app/features/people/components/PersonIntelligenceCard.tsx` — the card component
- `app/features/people/pages/detail.tsx` — loader + render changes
- `app/features/tasks/types.ts` — suggested status added
- `app/features/tasks/components/TaskStatus.tsx` — suggested visual config

**Wireframes:**
- `_bmad-output/planning-artifacts/person-company-cards.html` — person + company cards
- `_bmad-output/planning-artifacts/insights-canvas-concepts.html` — 3 insights concepts
- `_bmad-output/planning-artifacts/upsight-v5.html` — full layout with nav

**Schema to create:**
- `supabase/schemas/15_person_signals.sql` — new table

**Trigger task to create:**
- `src/trigger/people/computePersonSignals.ts` — signal computation

**Existing code to modify:**
- `src/trigger/interviews/finalizeInterview.ts` — wire signal computation
- `app/features/people/pages/detail.tsx` — read from person_signals
