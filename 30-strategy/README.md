# Strategy Layer

> This folder is structurally sound. The main problem was not folder taxonomy; it was too many valid strategy stories without a clear hierarchy.

## What governs what

Use these docs in this order when they overlap:

1. `../00-control/north-star.md`
   Sets mission, boundaries, goals, and quarter-level direction.
2. `messaging-house.md`
   The bridge between strategy and execution. Governs the company promise, public wedge, supporting pillars, persona routing, and feature-to-message mapping.
3. `messaging.md`
   Short approved copy and phrasing pulled from the Messaging House.
4. `positioning-brief.md`
   Longer market-facing positioning, objections, proof, and audience framing.
5. `icp/README.md`
   Market and segment priority.
6. `revenue-gtm-decision-memo-2026-06-02.md`
   Revenue workflow, pricing, and operator-buyer framing.
7. `brand-brief.md` and `brand-style-guide.md`
   Voice, identity, visual rules, and expression.
8. `gtm-plan-2026.md`, `marketing-plan-2026-q2.md`, `gtm-channel-strategy.md`
   Channel and execution planning.

## Current judgment on structure

The repo structure is good:

- `00-control/` holds direction and decisions.
- `20-research/` holds inputs and evidence.
- `30-strategy/` should turn those inputs into one company story.
- `40-gtm/` should package that story for channels and campaigns.

The missing piece was a canonical bridge inside `30-strategy/`.

Without that bridge, the vault kept drifting between several true-but-competing stories:

- customer intelligence / evidence layer
- revenue decision board for founder-led sellers
- agent-native memory for AI workflows
- weekly leadership meeting preparation

Those are not four homepages. They are one product seen through different entry points.

## The working hierarchy now

- **Company promise:** weekly leadership meeting, already prepared
- **Underlying product truth:** continuous operating intelligence grounded in evidence
- **Differentiators:** automatically prepared, grounded in evidence, gets smarter every week
- **Channel variants:** consultant, founder-led seller, agent-native, product/research

## Practical rule

When a new page or asset is created, answer these questions in order:

1. Which audience is this for?
2. Is this a homepage-level story or a landing-page story?
3. Which Messaging House pillar does it strengthen?
4. Which existing canonical doc should it inherit from?

If a draft cannot answer those questions cleanly, it probably belongs in research or archive, not as a new source of truth.
