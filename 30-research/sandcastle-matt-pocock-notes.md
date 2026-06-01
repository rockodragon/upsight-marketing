# Matt Pocock — Sandcastle (human story distillation)

Source: transcript provided by Rick (2026-05-03)
- Video: https://www.youtube.com/watch?v=E5-QK3CDVQM&t=485s
- Repo: https://github.com/mattpocock/sandcastle

---

## Human story (distilled)
Matt’s been trying for six months to make his coding agents run truly **AFK**, like a parallel team that can pick up backlog tickets, implement features, and even do QA while he’s doing something else.

He gets close, but runs into the same human bottleneck every time: agents constantly stop to ask for **permissions**. The naive fix, “YOLO mode” (bypass permissions), is unacceptable because it can lead to catastrophic outcomes (delete your home directory) or enterprise risks (data exfiltration).

So the real problem becomes trust: **how do you let agents move fast without giving them the keys to your kingdom?**

He tries Docker sandboxes, but the setup and AFK reliability are too painful. Worse, the tools he finds want to sell him a hosted service. What he actually wants is simple and local: a single TypeScript primitive that says, essentially:

> run this prompt, with this agent, inside this sandbox.

So he builds it.

**Sandcastle** is a TypeScript library for orchestrating AI coding agents in isolated sandboxes. It’s intentionally un-opinionated. With one ergonomic primitive (`sandcastle.run`) you can compose workflows that feel like a mini software factory: a planner agent creates a plan, implementers work in parallel branches, reviewers check the work, and a merger agent resolves conflicts and lands changes back into main.

The payoff is leverage: fewer interruptions, more parallelism, and a workflow that scales because it’s just code, not a black-box SaaS.

---

## The story beats (for writing / pitching)
- **Protagonist:** a developer trying to run multiple coding agents in parallel
- **Before:** agents help, but constantly interrupt with permission requests
- **Stakes:** YOLO permission bypass is dangerous (deletion/exfiltration)
- **Attempts:** Docker sandbox solutions, third-party services, none feel right
- **Insight:** AFK requires sandboxing + a simple orchestration primitive
- **Solution:** a TS library (Sandcastle) that composes workflows from `run()`
- **Transformation:** agents become parallel contributors: plan → implement → review → merge
- **Why it matters:** developer velocity goes up; safety/trust improves; process becomes owned and programmable

---

## Product takeaways
### Job to be done
- “Let me run coding agents **unattended** and **in parallel** without risking my machine or leaking data.”

### Core problem
- Permissions are the human bottleneck; removing them without sandboxing is unsafe.

### Differentiators
- **Local + code-first:** a library, not a service.
- **Composable primitive:** `sandcastle.run(agent, sandbox, prompt)`.
- **Workflow templates:** planner/implement/review/merge patterns.
- **Backlog integration:** GitHub issues filtered by label.

### Trust model
- Safety comes from **isolation** (sandbox) plus controlled tooling.
- Quality comes from a **review step** and a stronger “merger” agent to resolve conflicts.

---

## Concrete workflow described
- Install + init:
  - `npm install ai-hero sandcastle`
  - `npx sandcastle init`
  - choose agent (e.g., Claude Code)
  - choose sandbox provider (e.g., Docker)
  - choose backlog manager (GitHub issues) + label filter
  - choose template (parallel planner + review)
- Configure env vars (Anthropic API key + GitHub token, or subscription workaround)
- Add a GitHub issue, label it, run the script
- Planner reads labeled issues → outputs plan JSON
- Implementers create branches, run commands, write tests
- Reviewer checks diffs, enforces standards
- Merger resolves conflicts, merges to main, closes issue

---

## Relevance to UpSight
Sandcastle is basically “Software 3.0 for engineering workflows”:
- **Natural language** drives work (issues/prompts)
- A deterministic system wraps it with **verifiability**:
  - logs
  - diff
  - tests/typechecks
  - review step

UpSight analogue:
- We need the same pattern for business workflows: capture → understand → act, with evidence, review, and safe automation.

---

## Memorable lines / framings (paraphrased)
- “AFK agents need a backlog manager.”
- “YOLO mode is dangerous.”
- “I didn’t want a third-party service, I wanted a simple TS function.”
- “This turns into mini software factories.”
