# PLG Documentation

This folder owns PLG strategy and nurture execution.

## Strategy
- `./activation-strategy.md` -- Reverse trial design, campaign flows, feature gates
- `./instrumentation-plan.md` -- User journey stages, behavioral triggers, cohort definitions

## Nurture (Brevo-first)
- `../channels/lifecycle/plan.md` (single source of truth for nurture orchestration)
- `../channels/lifecycle/brevo-setup.md` -- Brevo configuration, webhook setup
- `../channels/lifecycle/email-sequences.md` -- Full email content for 18 templates
- `../channels/lifecycle/dashboard-spec.md` -- PostHog nurture dashboard spec

## PostHog Implementation (Developer Reference)
- `/docs/features/analytics/posthog-server-implementation-guide.md` -- **Canonical event catalog**: all 21 implemented events, code patterns, PLG mapping, unimplemented event backlog

## PostHog Operations
- `/docs/60-ops-observability/posthog-setup-guide.md` -- Dashboard and funnel setup steps
- `/docs/60-ops-observability/posthog-events-implemented.md` -- Legacy detailed event reference (being consolidated)
- `/docs/60-ops-observability/posthog-tracking.md` -- Legacy tracking guide (being consolidated)
- `/docs/60-ops-observability/posthog-implementation-summary.md` -- Historical: first event implementation notes
