# Jet convo — repo preview/build/eval tool (notes)

Source: Rick voice note (2026-05-03)

## What Jet is building
A tool that makes it easy to:
- **Preview** different GitHub repos
- **Build** them
- **Run/experience** them
- Evaluate how they actually work (not just read docs)

## Job to be done
- Rapidly evaluate open-source solutions:
  - What does it actually do?
  - How does it work?
  - Is it viable for our use case?
  - Can we share findings + notes with others?

## Why it matters
- OSS evaluation often requires 30–60+ minutes of:
  - dependency installs
  - configuration
  - dealing with incomplete/outdated documentation
- This tool compresses that evaluation loop.

## Integration idea
- Put an **MCP server** in front of it so agents can:
  - request a repo evaluation
  - run builds/tests
  - capture runtime behaviors
  - produce a structured “evaluation report” + notes

## Social proof
- Comment from Vercel folks: worth doing, valuable project.

## Additional notes (from Rick)
- Jet’s “guide/role”: training engineers to be better engineers **with AI**.
- Corollary positioning: you can help train business people to do business better with AI (even if you’re not “in training” as a business model). Evergreen: teaching + building.
- Practical insight: the most important enablement for AI coding agents is **browser access** so they can do agentic QA (nobody wants to do manual QA).

## Follow-ups
- Identify what environments it supports (Docker, Nix, devcontainers, remote sandboxes)
- Define evaluation output template (install friction, run commands, screenshots/logs, gotchas, alternatives)
- Decide where these evaluations live (UpSight? Projects/Market-Research?)
- Explore “agentic QA” workflow: browser-enabled runs that capture screenshots + logs + a pass/fail checklist
