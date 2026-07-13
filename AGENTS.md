# AGENTS.md — UpSight GTM vault

> This file exists for tools that specifically look for `AGENTS.md` at the repo root. It's a thin
> pointer, not a duplicate — `CLAUDE.md` is the full operating doc for this vault; `10-ops/agents.md`
> is the detailed agent-stack manual. Read those for the real rules. This file just makes sure any
> agent lands on the right doc regardless of which convention it follows.

## Read first

1. `CLAUDE.md` — vault structure, what lives where, house rules.
2. `10-ops/agents.md` — agent roles, standard prompts, rules of engagement.
3. `00-control/priorities.md` + `00-control/decisions.md` + `00-control/open-questions.md` — current direction and settled vs. open questions.

## Building any visual asset — read this before writing any UI, video, or design code

**`30-strategy/brand-style-guide.md`** is the canonical design token reference for UpSight —
colors, typography, motion, radius, iconography — with a copy-paste `:root` CSS block at the top.

Do not invent new colors, fonts, easing curves, or radii. If something is genuinely missing from
that doc, extend it there first, then use it — don't improvise a one-off value in the asset you're
building.

This applies to marketing pages, decks, social images, one-pagers, collateral, and Remotion video
projects under `40-gtm/assets/video/` alike.

## What does NOT live here

Tasks (Beads owns those), sales pipeline (UpSight MCP owns that), product specs/code (`../Insights/`
owns those). See `CLAUDE.md` for the full boundary list.
