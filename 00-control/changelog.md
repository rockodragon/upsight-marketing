# UpSight Changelog

Append-only. One entry per calendar week. Format: `## YYYY-WW (Mon DD – Sun DD)`.
Each bullet: one line, plain English, user-facing impact first.
Tags: `shipped` = live + validated · `needs-qa` = code landed, not yet hand-tested · `fixed` = bug resolved

---

## 2026-W22 (May 25 – May 31)

- **[shipped]** Pipeline bugs fixed: staging CI was silently overwriting prod Trigger.dev env vars on every deploy — transcription, reaper, and orchestrator now run against prod DB (71d0b6236)
- **[needs-qa]** Speaker metrics backfilled for last 10 days — talk-time %, question count, longest monologue now visible on interview detail page for 17 interviews
- **[needs-qa]** Brain-dump intake (EOS portfolio) — paste messy thoughts → AI extracts task list → review checklist → batch create + auto-organize
- **[needs-qa]** CSV task-list import in chat — upload Asana/ClickUp/Todoist export, classifier detects task intent, routes to brain-dump extract flow
- **[needs-qa]** Priorities page: subtasks nest under parent goals with expand/collapse toggle and X/Y done completion badge
- **[needs-qa]** AI coaching hover panel on pipeline signal chips — backend + CoachingHoverPanel + DraftModal (T1.5 Phase 1 + 2)
- **[needs-qa]** Stakeholder coverage warning on late-stage deals — amber banner when economic buyer/champion/technical buyer missing
- **[needs-qa]** Entity links in chat styled as pill chips — internal links in brand color, external with arrow icon
- **[shipped]** Shape chip in TaskCreateModal — OUTCOME_SHAPED tasks show amber "Goal" suggestion with rationale
- **[shipped]** Goal detail page: inline-edit polish, next_step field, dashed-underline affordance
