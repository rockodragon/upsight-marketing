# Andrej Karpathy interview — notes (from Rick)

Source: Rick voice note (2026-05-03)

## Concepts captured

### 1) “Agent makes a wiki automatically”
- Workflow idea: when Rick reads/watches something, an agent auto-creates a **wiki page**.
- Goal: later query the content and ask questions as if “talking to the author’s ideas.”

### 2) Verifiability as a principle for AI applicability
- Stronger domains for AI: **math/coding** because answers are **verifiable**.
- Weaker domains: opinions / ambiguous judgment calls.

### 3) Human role: “You can outsource your thinking, but not your understanding.”
- The shift: outsourcing labor → outsourcing reasoning.
- But “understanding” remains human, because models can still have **context/intent gaps**.

Example given:
- If you’re 50 feet from a car wash, model might say “walk” (short distance), but you need the **car** to wash it.

### 4) Implication for UpSight
- UpSight should use AI to **up-level understanding**, not just generate outputs.
- Key design questions:
  - Agents talking to agents: how do humans interface?
  - Trust: how do we verify/trace?
  - What’s next: product principles and UI for human-in-the-loop.

## Thought leadership hook (for UpSight)
- Working title: **“You can outsource your thinking, but not your understanding.”**
- Angle: AI agents can generate outputs and even reason, but humans still own the mental model.
- UpSight’s job: compress reality into **verifiable understanding** (not vibes), with evidence and traceability.

## Software 3.0 / natural-language configuration (from Rick)
- Idea: “software 3.0” reduces manual setup, because **natural language** drives configuration.
- User doesn’t have to wrangle:
  - API keys
  - environment variables
  - brittle settings screens
  - complex build/deploy/publish pipelines
- Contrast: the pain of configuring systems like “Vercel/Versailles” (publishing builds, build pipelines, setup friction).
- UpSight implication: the product should feel like *intent → done*.
  - Ask in natural language.
  - System resolves required integrations/permissions/config (with safe confirmation).
  - Keep verifiability: show what it configured and why.

Reference video: Andrej Karpathy — *From Vibe Coding to Agentic Engineering*
- https://www.youtube.com/watch?v=96jN2OCOfLs

## Product follow-ups / questions
- What is the MVP for “auto-wiki from content” inside UpSight?
- What does “verifiability” mean in UpSight UX?
  - Evidence traceability
  - Source links, quotes, timestamps
  - Deterministic transforms where possible
- How do we represent “understanding” vs “reasoning” in the UI?
  - Ask: what would help a human build the mental model faster?
