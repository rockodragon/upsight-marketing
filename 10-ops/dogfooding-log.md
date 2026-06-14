# UpSight dogfooding log

> Every friction point hit while using UpSight on real work.
> Don't fix on the fly — log first, triage weekly.
> This file is both a feature backlog AND a sales artifact.

---

## Open

### 2026-06-04 — Organization delete is unreachable via MCP: guard demands a phrase the tool can't carry
**Context:** Setting up the GTM pipeline, needed to delete two empty/orphaned orgs (Defense.com, created in error from a Events.com→Defense.com mix-up; Arts Society, orphaned after re-linking Haley to "The Table Arts Society").
**Friction:** `manage_organizations action=delete` returns *"I can't delete this organization without seeing your explicit instruction. Please retry by typing something like 'delete Defense.com'."* and fails even when the user types that exact phrase. **Root cause (verified in code):** `deletion-guard.ts` reads the user's real last message from `requestContext.last_user_message`, which middleware fills from the client HTTP header `x-last-user-message`; if absent it fails closed. This Claude Code → MCP transport doesn't send that header, so the guard always sees an empty message — the typed phrase never reaches it. By design the guard is *not* LLM-satisfiable (added after the 2026-04-23 wrong-delete incident). So this is a **client/transport plumbing gap**, not undeployed code and not a missing param. In UpSight's own chat UI (which sets the header) the same phrase would pass. Failed 5× this session.
**Workaround:** Delete in the web UI; orgs left in place.
**Severity:** P1 — a core destructive action is unusable from any MCP surface that doesn't forward the header, and the "type delete X" error misleads the user into a no-op retry loop.
**Status:** filed `UpSight-qf0` (P1, root cause corrected).
**Story angle:** "A safety guard that's invisible to the surface calling it isn't safety — it's a locked door with no keyhole. Confirmation has to travel with the request."
**Related:** Two org tools exist — `app/mastra` (header-guard, no param) vs `mcp-servers/agent-crm` (`confirm_name` param, machine-satisfiable); `delete_task` uses `confirmed:true`. Three patterns, one should win — `confirm_name` is the transport-independent one.

### 2026-04-26 — Project-status agent fabricated task creation, never called createTask, burned 72k tokens
**Context:** Asked the agent to "add this to my tasks to read - <URL>". Got back: "Task added: 'Read: The Opposable Mind' (link provided)."
**Friction:** Server logs show only `fetchTasks` was called (twice — once with typo, once corrected). NO `createTask`. NO delegation to `taskAgent`. The "Task added" message was fabricated. The user-facing response also returned a generic project-level link ("Quick links: Insights") instead of a task URL — because no task existed.
**Cost:** 72,730 input tokens / 768 output / $0.19 for a single fabricated response.
**Severity:** P0 — silent write failures + fabricated success destroy CRM trust faster than any other bug class.
**Status:** filed `Insights-kpyj` (P0). Multiple root causes: agent-prompt confusion (always-fetchTasks instruction bleeding into write requests), no fabrication guardrail, project-status doesn't have createTask directly (must delegate), generic-link fallback on no-creation-success.
**Story angle:** "Three things every CRM has to get right: actually do the thing, prove it did the thing, link to the thing it did. We just shipped a regression class on all three. Here's how we caught it and what the fix looks like."
**Related:** Insights-olp2 (navigable links), Insights-fl1w (DQ coverage), Insights-a176 (Intent epic).

### 2026-04-26 — No semantic search on tasks; text-search-only fetchTasks misses obvious matches
**Context:** Same dogfooding session — agent did `fetchTasks(search="opposable mind")` apparently as a dedup check before (claiming to) create. Text search means it'd miss a previously-created "Article: cognitive bias overview" task tagged `reading`.
**Friction:** We have semantic_search_evidence + semantic_search_people + semantic_search_assets — but tasks are text-only. Cross-entity search gap (Insights-e0bl) compounds the problem.
**Severity:** P1
**Status:** filed `Insights-md3g`.
**Story angle:** "Tasks are the thing users search by intent ('what was I going to do about X?') — text search there is the worst place to be missing semantic."

### 2026-04-25 — Searches don't span linked entities (person ↔ org ↔ opportunity)
**Context:** During dogfooding, asked "is Cytodyme in the system?" — searched `manage_people` for "Cytodyme" (the company), which only looks at person names. Should have ALSO surfaced people linked to Cytodyme (DJ) and any opportunity tied to the org.
**Friction:** Each search tool is single-entity. `manage_people` searches person.name. `semantic_search_people` searches embeddings of people. Neither follows the org link to surface "you have 1 person at this company + 1 open opportunity." Same gap likely exists for org-search omitting people, and people-search omitting opportunity context.
**Workaround:** Caller has to manually search each entity type with permutations of the query. Not how a sales user thinks ("just tell me everything you know about X").
**Severity:** P1 (UX correctness — produces false negatives that lead to duplicate-record creation)
**Status:** open
**Story angle:** "Sales users don't think in entity tables. They ask about a company and expect everyone, every deal, every interview. Cross-entity search is table stakes for a CRM."
**Related:** Insights-927j (no dedicated search-by-company tool)

### 2026-04-25 — No "search by company" or "list opportunities" reachable from agent surface
**Context:** Trying to verify Cytodyme didn't already exist before creating duplicates.
**Friction:** `manage_people` only searches by person name. No exposed "list opportunities" or "find org by name" tool reachable without first calling `tool_search`. Had to assume DJ was the right key.
**Workaround:** Searched `manage_people` by "DJ" and "Cytodyme" (knowing org name wouldn't match person).
**Severity:** P1
**Status:** open
**Story angle:** "When you onboard a new sales user, the first thing they want is 'is this company already here?' That's the demo's first impression."

### 2026-04-25 — `create_task` requires `userId` despite tool description saying it defaults
**Context:** Creating a P1 task for the Cytodyme Wed demo, sourced from the opportunity.
**Friction:** Tool description says `userId` defaults to context. Call failed: "Missing userId. Pass userId parameter (use user_id from your context)." MCP context provides `projectId` automatically but not `userId`.
**Workaround:** Fell back to `manage_annotations type=todo` — a different surface for tracking the same thing.
**Severity:** P1 (broke the most natural sales workflow on first try)
**Status:** open
**Story angle:** "The first time I tried to log a follow-up task on a deal, it failed. A human user would have closed the tab."

### 2026-04-25 — Two task surfaces with no clear "which to use when"
**Context:** Same as above. After `create_task` failed, fell back to `manage_annotations type=todo`.
**Friction:** UpSight has full Tasks (priority/effort/status/cluster/assignees/dependencies) AND annotation todos (lightweight, on-entity, due dates). No clear rule for which to use for "follow up on this deal Wed."
**Workaround:** Used annotation todo because the full task failed.
**Severity:** P1 (UX clarity, not a bug)
**Status:** open
**Story angle:** Sales motion has its own task expectations (next-action on deal). Product motion has its own (epic/story). Forcing one model on both confuses.

### 2026-04-25 — `generate_app_link` returns relative routes only
**Context:** Wanted clickable links in this session for Rick to click straight into UpSight.
**Friction:** Returns `route` and `absoluteRoute` — both relative, no host. Other endpoints (e.g., `create_opportunity`) return fully-qualified URLs in `detailRoute`. Inconsistent.
**Workaround:** Manually prepended `https://getupsight.com`.
**Severity:** P2
**Status:** open
**Story angle:** Small but real friction for any agent integration. Slack messages or emails with deal links will ship broken without a wrapper.

---

## Triaged
_(moved to Beads as issues — keep one-line ref here for the dogfooding story)_

---

## Shipped
_(fixes that landed — date them, reference Beads issue)_

---

## Wontfix
_(decisions not to fix, with reason — this is also valuable signal)_

---

## Weekly triage ritual

Every Friday, end of day:
1. Read the **Open** section
2. For each: decide P0/P1/P2/wontfix
3. P0 + P1 → create Beads issue, move entry to **Triaged** with issue link
4. Wontfix → move with reason
5. Note the count of new entries this week — that's a health metric

## Sales / marketing use

This file is gold for:
- **Sales calls:** "Here's what I caught using UpSight on my own deals last week"
- **LinkedIn posts:** specific friction stories make the best build-in-public content
- **Investor updates:** "We use our own product on every deal; here's what that surfaced"
- **Roadmap honesty:** the things you decided not to fix tell a sharper story than the things you did

---

## First-session observations (meta — 2026-04-25)

- **4 friction points in ~5 minutes** of real use across 4 MCP calls. That's the right rate for early dogfooding — high enough that improvements are obvious, not so high that the product is unusable.
- The **CRM core works** — `upsert_person` with auto-org-link is excellent. Annotations on opportunities are flexible.
- The **agent surface around it has rough edges** — exactly where you'd expect for an MCP-first product still maturing.
- The **Apollo-replacement positioning has a sharper edge** after this:
  > "Apollo gets you contacts. UpSight is the working surface where deals actually get done — including by your agents."
- **3 of 4 friction points are agent-experience issues**, not user-facing UI issues. That's the right pattern given UpSight's MCP-first positioning, but it means the dogfooding has to be done with agents in the loop, not just clicking around the web UI.
