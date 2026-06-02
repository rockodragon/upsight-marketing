# Agents — operating manual

> Two-tool stack. Each agent has a clear role. Don't blur lines.

---

## The stack

### Claude Code = the doer
- **Lives at:** `~/code/upsight` (repo) and `~/Obsidian/upsight-vault` (vault)
- **Reads first:** `00-control/priorities.md`, `00-control/status.md`, `10-ops/agents.md` (this file)
- **Writes to:** `00-control/status.md` (end of session), build artifacts in repo, GTM file updates in vault
- **Owns:** code, sprint reports, drafting LinkedIn posts, updating pipeline.md, refreshing themes from MCP
- **Doesn't own:** strategy decisions, weekly priority rewrites (Rick does these)

### Claude chat (web/mobile) = the thinker
- **Use for:** strategy, prioritization, pressure-testing decisions, drafting from scratch when you need a thought partner
- **Context provision:** paste relevant `00-control/` files OR use a Claude Project with vault files attached
- **Doesn't have file access** — Rick mediates between chat and files
- **Doesn't own:** execution. Outputs go to Claude Code or Rick to apply.

### Beads = the task store
- **Both build and GTM tasks live here**, labeled with the v2 taxonomy: `domain:build` / `domain:gtm` / `domain:ops` (exactly one), optional subdomain (`gtm:sales`, `gtm:content`, `gtm:campaign`, `build:product`, `build:infra`, `build:dogfooding-fix`), and priority (`p0` / `p1` / `p2`).
- **P0 items map** to the week's narrative `00-control/priorities.md`.
- **Claude Code queries Beads** to decide what to work on. Status changes happen in Beads, not markdown.
- **Don't recreate task state** in `now.md` / `next.md` / `pipeline.md` — those are archived.

### UpSight MCP = the data layer
- **Tools:** `manage_people`, `semantic_search_evidence`, `fetch_themes`, `fetch_personas`, `fetch_top_themes_with_people`, etc.
- **Called by:** Claude Code (mostly) and Claude chat (when reasoning about customer signal)
- **Refreshes:** `20-research/voice-of-customer/themes.md` weekly via Claude Code

### OpenClaw = backend agent infrastructure
- Used by `projectStatusAgent` and similar via HTTP from LiveKit
- Not a planning surface — it's a runtime component
- Status: Tailscale auth issue parked, see Beads epic `Insights-2q47`

---

## Standard prompts

### Claude Code — start of session
> "Read `00-control/priorities.md` and `00-control/status.md`. What's the highest-priority item I should work on right now? Don't start work yet — confirm the plan first."

### Claude Code — end of session
> "Append a dated entry to `00-control/status.md` with: Shipped / Stuck / Decided / Surfaced. Then update `00-control/traction.md` if any deal moved today."

### Claude Code — weekly research refresh
> "Pull top themes from UpSight MCP for the current project. Update `20-research/voice-of-customer/themes.md` with mention counts, top 3 people per theme, and one paraphrased quote each. Date the refresh."

### Claude chat — strategy session
> "Here's `priorities.md`, `status.md`, and `00-control/traction.md`. [Paste contents.] Pressure-test my top 5. What am I missing or wrong about?"

---

## Rules of engagement

- **Single source of truth:** Obsidian vault. Repo `docs/` is build-artifact storage; planning happens in vault.
- **Append, don't edit:** `status.md` and `decisions.md` are append-only.
- **No blurred roles:** if Claude chat starts trying to manage files, redirect to Claude Code.
- **No third agent without a reason:** stack is intentionally two surfaces. Adding more = chaos creep.

---

## Working in the `Insights/` repo (gotchas)

Code-domain gotchas live in the repo itself (so agents working on the repo auto-discover them via `Insights/CLAUDE.md`):

- **Lefthook auto-stash on branch switch / `pnpm install`** — recovery procedure is in `Insights/CLAUDE.md` "Package Quirks" section. Short version: files appear "deleted", `git stash list` for `wip-*-not-mine`, `git stash apply`.
- **AgentCRM tool testing rubric** — 9-cell behavioral checklist for every CRM write tool — lives at `Insights/docs/30-howtos/mastra-tools/agentcrm-testing-rubric.md`, referenced from `Insights/CLAUDE.md`.
- **Typecheck discipline** — during coding use `pnpm run check:changed` or `pnpm run check:staged`; run `pnpm run typecheck:baseline` before commit; full `pnpm run typecheck` only when necessary.

This vault file (`10-ops/agents.md`) covers cross-domain agent operating rules. Code-specific things stay on the code side.
