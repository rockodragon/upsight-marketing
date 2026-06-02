---
title: Claude Code Brief — Pricing Gates and Entitlements
date: 2026-06-02
status: handoff
owner: rick
tags: [pricing, entitlements, implementation]
---

# Claude Code Brief — Pricing Gates and Entitlements

Use this brief in the app/code repo, not the docs vault.

## Goal

Align product gates and entitlement logic with the current GTM/pricing decision:

- Free
- Starter
- Team
- consultant extra workspaces
- Scale/API as a separate heavier-usage path

We are optimizing for:

- low-friction team adoption
- workspace-based expansion
- transparent costly-usage gating
- no strict seat-first pricing for the SMB motion

## Business rules

### Plans

#### Free
- 1 workspace
- 2 members max
- hard cap on included costly usage
- basic evidence extraction and search
- read-only or limited write where appropriate

#### Starter
- 1 workspace
- 3 members included
- included monthly allowance for transcription + heavy analysis
- receipts, Today decision board, themes, core lenses
- overage tracking and spend-cap support if implemented

#### Team
- 3 workspaces
- 10 members included
- larger monthly allowance
- exports / richer support / higher usage ceilings

#### Consultant expansion
- extra workspace purchasable without rebuying seats
- should compose on top of Team or a consultant-enabled account model

#### Scale/API
- separate from SMB gating if possible
- usage-heavy API/MCP entitlements should not distort the SMB plan model

## What to audit in code

Find and update:

- pricing gate constants
- entitlement tables / feature maps
- seat limits
- workspace limits
- feature flags for themes, lenses, exports, API, MCP write access
- onboarding upgrade prompts
- billing copy that still references old tiers or old prices
- reverse-trial / trial-grant logic

## Product surfaces to update

### 1. Pricing page
- reflect Free / Starter / Team / Scale
- explain included usage plus overages in plain language
- do not use opaque "credits" wording

### 2. Upgrade gates
- show the relevant blocked resource:
  - member limit
  - workspace limit
  - transcription allowance
  - heavy analysis allowance
- recommend the next plan or extra workspace add-on

### 3. Settings / billing
- show current plan
- show current workspace count, member count, and usage
- show what is included versus consumed
- allow spend cap if billing stack supports it

### 4. Today / decision board surfaces
- if feature-gated, gate by plan cleanly
- do not hide the concept entirely on lower plans; teaser states are acceptable

## Data / billing model suggestions

If the current model is seat-first, refactor toward:

- `plan_type`
- `workspace_limit`
- `member_limit`
- `included_transcription_units`
- `included_analysis_units`
- `has_export`
- `has_api_access`
- `has_mcp_write`
- `supports_extra_workspaces`

Potential add-on model:

- `extra_workspace_count`
- `extra_workspace_unit_price`

If existing billing primitives make overages hard, start with:

- included usage
- hard cap at plan limit
- manual upgrade prompt

That is acceptable as V1 if it simplifies launch.

## UX rules

- gate expensive usage, not basic collaboration first
- explain limits in plain English
- always show why something is blocked
- always show the upgrade path
- avoid "contact sales" unless truly necessary

## Success criteria

1. Public pricing page matches the current strategy.
2. In-app gates match the public pricing promise.
3. Users can understand what they get without reading docs.
4. Consultants can expand by workspace.
5. No old `$15 / $29 / $35` or strict seat-based artifacts remain in the user-facing pricing flow.

## Notes for implementation

- If exact included usage amounts are still unresolved, structure the code so those values live in one config object.
- Prefer a single canonical entitlement map consumed by pricing page, upgrade dialogs, and server-side checks.
- Flag any current product areas that still assume `per-seat` billing or `single-workspace-only` plans.
