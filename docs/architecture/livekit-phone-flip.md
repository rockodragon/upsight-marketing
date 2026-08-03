# LiveKit voice agent → phone calls (inbound + outbound)

> **Research only — nothing built.** Recommendation doc for flipping the existing LiveKit
> interview agent onto the PSTN.
>
> **Canonical home is `Insights/docs/architecture/`,** not this vault (per `CLAUDE.md`: product
> specs/architecture live in the app repo). Parked here because that's where the research thread
> ran. Move it on the next Insights pass.
>
> Date: 2026-08-03

---

## TL;DR

The agent code barely changes. **Telephony is not an agent problem — it's a trunk, identity, and
consent problem.**

- LiveKit's SIP bridge puts a phone caller into a LiveKit room as a normal participant. Our
  existing agent already knows how to talk to a participant in a room. That part is ~a day.
- The real work is: (1) who is this caller and which study are they in, (2) call lifecycle
  (voicemail, busy, hangup, transfer), (3) 8 kHz audio degrading STT/TTS, (4) TCPA + AI-disclosure
  + all-party recording consent.
- **Recommend: ship inbound first.** Inbound is ~2–3 days of real work and carries almost no
  regulatory risk because the participant dials us. Outbound is where TCPA lives and should be
  gated behind a written consent capture in the recruit flow.

**Suggested sequencing**
| Phase | Scope | Effort | Risk |
|---|---|---|---|
| 0 | Inbound pilot on a LiveKit-issued US number, one study, PIN entry | 2–3 days | Low |
| 1 | Inbound at scale: per-study numbers, ANI→participant lookup, recording-consent preamble | ~1 week | Low–med |
| 2 | Outbound: BYO trunk (Telnyx), scheduled dial-out, voicemail detection, retry policy | ~1.5–2 weeks | **High (TCPA)** |
| 3 | Warm transfer to a human researcher, DTMF, inbound IVR-free routing | ~1 week | Med |

---

## 1. How the plumbing actually works

LiveKit's SIP service (`livekit/sip`) is a SIP↔WebRTC bridge. A phone call becomes a
`SIPParticipant` in a room; from the agent's perspective it's just another participant publishing
audio. Three objects to configure:

**Inbound trunk** — tells LiveKit "accept calls to these numbers I own." Carries auth, allowed
numbers, IP allowlist, and `headers_to_attributes` (map `X-*` SIP INVITE headers onto participant
attributes — this is the hook for passing study context from the carrier layer).

**Dispatch rule** — decides which room an inbound caller lands in. Two types:
- *Individual dispatch* — a new room per call (`call-` prefix). This is what we want; each
  interview is isolated.
- *Direct dispatch* — everyone into one named room, optionally PIN-gated.

The dispatch rule also carries `room_config.agents[].{agent_name, metadata}` — a
`RoomAgentDispatch`. **Use explicit agent dispatch, not automatic**, so multiple agents can coexist
in one LiveKit project (we already have `projectStatusAgent` et al. — automatic dispatch would
have every agent racing to join every phone room).

**Outbound trunk** — the credentials/URI to hand calls to a carrier. Outbound is initiated in code:
`CreateSIPParticipant(room_name, sip_trunk_id, sip_call_to, wait_until_answered=True)`. Note the
ordering in LiveKit's own example — **start the `AgentSession` before dialing**, so the agent
doesn't miss the first "hello?" while it's still booting.

Reference implementation worth reading line by line:
[`livekit-examples/outbound-caller-python`](https://github.com/livekit-examples/outbound-caller-python)
— it already demonstrates voicemail detection, `transfer_sip_participant` (SIP REFER), hangup-by-
`delete_room`, and `noise_cancellation.BVCTelephony()`.

### Inbound flow
```
caller dials number → carrier → SIP INVITE → LiveKit SIP →
  match dispatch rule → create room "call-xxxx" + add SIPParticipant →
  explicit dispatch of "interview-agent" with metadata → agent joins, greets
```

### Outbound flow
```
scheduler → create room → dispatch "interview-agent" w/ metadata {phone, study_id, person_id} →
  agent starts session → CreateSIPParticipant(wait_until_answered) →
  answered? → interview | voicemail? → hang up + mark for retry | SIP 486/480 → retry policy
```

---

## 2. What actually has to be built (the deltas from web)

### 2.1 Identity — the biggest inbound design problem
In the browser, the room token carries the authenticated user and the interview context. **A phone
call carries a phone number and nothing else.** Options, roughly in order of preference:

1. **Number-per-study.** Cheapest to reason about, and the number itself is the context. Costs ~$1/mo
   per number. Breaks down past a few dozen concurrent studies.
2. **ANI (caller-ID) lookup.** Map the calling number to a `person` record we already recruited.
   Available as a participant attribute (`sip.phoneNumber`) unless `hide_phone_number` is set.
   Fails on shared/blocked/spoofed numbers — never treat ANI as authentication, only as a hint.
3. **DTMF PIN.** Participant gets a 6-digit code in the recruit email. Highest assurance, mild
   friction, and it's the only one that works on a single shared number at scale.
4. **X-header injection.** If the carrier or a wrapper adds a header, `headers_to_attributes` maps
   it in. Only useful if something upstream already knows the context.

**Recommendation: (1) for the pilot, (2)+(3) for scale** — ANI to pre-fill, PIN to confirm when ANI
misses. Build the mapping as a small service that the agent calls on join, keyed on participant
attributes; don't bake it into the agent prompt.

### 2.2 Audio quality — this will surprise us
PSTN is **G.711 at 8 kHz mono**. Our web path is 16–48 kHz. Consequences:
- STT accuracy drops noticeably, worst on names, company names, and product jargon — exactly the
  vocabulary a research interview is full of. Mitigate with the transcription-vocabulary hooks we
  already have, and pick a telephony-tuned STT model rather than the web default.
- TTS sounds flatter; voices tuned for 24 kHz can sound sibilant/thin resampled to 8 kHz. Audition
  the voice **on an actual phone call**, not in the browser.
- No browser echo cancellation, plus real background noise (car, street, speakerphone).
  `noise_cancellation.BVCTelephony()` is the telephony-specific Krisp variant and is effectively
  mandatory, not optional.
- Some carriers (Telnyx) can negotiate G.722/Opus wideband where both legs support it — worth
  asking for, but assume 8 kHz for design purposes.

### 2.3 Turn-taking and call lifecycle
- Phone callers have no visual cue that the agent is thinking. Silence >~800 ms reads as a dropped
  call. Budget the pipeline hard: end-of-speech ~100–150 ms, first audio out well under a second.
- Barge-in matters more than on web — people talk over phone agents constantly.
- New states to handle that the browser never had: **ringing, no-answer, busy, voicemail,
  mid-call hangup, DTMF, transfer**. Voicemail detection in LiveKit's example is done by the LLM
  itself (a `detected_answering_machine` tool called after hearing a greeting), which is cheap but
  imperfect; treat a false negative (agent interviews a voicemail box) as an expected failure mode
  and cap it with a timer.
- Hangup is `delete_room`; make sure our post-interview pipeline (transcript → evidence) fires on
  room-deleted, not on a clean agent-side "goodbye" that phone calls won't always reach.
- Warm transfer to a human researcher = `transfer_sip_participant` (SIP REFER). Confirm the carrier
  supports REFER on the trunk before promising it.

### 2.4 Recording and the existing pipeline
Room egress works the same for SIP participants, so transcript/recording capture should carry over
largely unchanged — but **verify the transcript's speaker labels and the participant identity we
key evidence on**, since a SIP participant's identity is the phone number, not a user ID.

---

## 3. Carrier decision

| Option | Inbound | Outbound | Notes |
|---|---|---|---|
| **LiveKit Phone Numbers** | ✅ US local + toll-free, buy from dashboard/CLI | ❌ not yet (announced "coming soon") | No trunk config at all. Fewest network hops → best latency, especially with agents on LiveKit Cloud. **Best pilot path.** |
| **Telnyx** | ✅ | ✅ | ~$0.002/min each way; elastic trunking ~$0.0025 in / $0.005 out, no per-channel fee. Cheapest, has a LiveKit-specific integration + HD voice codecs. |
| **Twilio** | ✅ | ✅ | ~$0.0085/min in, ~$0.014/min out. 30–50% more expensive, but best docs and likely already in our stack. Setup = Origination URI → our `sip:<id>.sip.livekit.cloud;transport=tcp`, Termination URI + credential list matching the LiveKit outbound trunk. |

Plus LiveKit's own SIP minutes (~$0.003–0.004/min, with 1k–5k included depending on tier) on top of
carrier minutes. **All-in, budget roughly $0.01–0.02/min of telephony** before any STT/LLM/TTS cost —
i.e. telephony is *not* the expensive part of an interview; the model stack is.

**Recommendation:** LiveKit Phone Numbers for the inbound pilot (zero trunk work), Telnyx when
outbound becomes real. Don't build on Twilio unless there's an existing billing/ops reason.

---

## 4. Compliance — the actual gate on outbound

This is where "flip a switch" stops being true. Not legal advice; get counsel before phase 2.

**TCPA / FCC.** The FCC's Feb 2024 declaratory ruling holds that an AI-generated voice **is an
"artificial or prerecorded voice"** under the TCPA. That means outbound AI-voice calls need prior
express consent, and statutory damages are **$500–$1,500 per call with no cap** — a 500-person
recruit list is not a rounding error. A July 2024 NPRM proposed going further: specific consent for
AI calls plus an in-call AI disclosure.

**Practical read for us:** research/interview calls to people who opted into a study are a far
better posture than cold outreach, but the consent has to be *captured and provable* — a checkbox
at recruit time with stored timestamp, IP, and exact language, tied to the person record. Build that
into the recruit flow **before** the dialer, not after.

**AI disclosure.** California AB 2905 (effective 2025-01-01) requires upfront disclosure when a call
uses an artificial voice. Other states are following. Disclose regardless of state — it's one
sentence and it removes an entire class of risk.

**Recording consent.** ~15 all-party-consent states (CA, CT, DE, FL, IL, MD, MA, MI, MT, NV, NH, OR,
PA, VT, WA). Interstate calls: comply with the stricter side (*Kearney v. Salomon Smith Barney*).
There's an active plaintiff-bar cottage industry calling businesses specifically to document missing
disclosures.

→ **One spoken preamble solves both, on every call, inbound and outbound:**
> "Hi — this is UpSight's AI research assistant. This call is recorded and transcribed for research.
> Is that okay?"

...with the yes/no captured as a structured field on the interview record, and a hard stop if no.
Do it in the agent's first turn, before any study question, and never make it skippable by config.

**Other outbound-only items:** DNC scrubbing, calling-hours windows (recipient's local time),
A2P 10DLC registration if SMS reminders ride along, and STIR/SHAKEN attestation + branded caller ID
so our number doesn't land as "Spam Likely" (which is an answer-rate problem as much as a compliance
one).

---

## 5. Recommended approach

**Do this:**
1. **Inbound-first pilot.** One LiveKit-issued number, one live study, individual dispatch rule,
   explicit agent dispatch, PIN from the recruit email. Dogfood it on ourselves and 3–5 friendly
   participants before it touches a customer study.
2. **Extract the interview agent from its transport.** The agent shouldn't know whether it's on web
   or phone. Everything phone-specific — greeting/consent preamble, voicemail tool, hangup, transfer,
   noise cancellation profile, STT model choice — becomes config on a session, keyed off a
   `channel: web | phone` flag. This is the single highest-leverage refactor and it's worth doing
   before either quickstart is copy-pasted in.
3. **Build the identity mapping service** (ANI + PIN → person + study) as its own thing. Inbound
   needs it; outbound needs its inverse. It's the piece most likely to be hacked into the agent and
   regretted.
4. **Only then, outbound** — and gate the dialer on the consent-capture field existing in the recruit
   flow. No consent record, no dial. Make that a database constraint, not a code convention.

**Don't do this:**
- Don't run phone and web interviews through two agent codebases. They diverge in a month.
- Don't use automatic agent dispatch — we have other agents in the project.
- Don't trust ANI as identity.
- Don't ship outbound to a cold list under any framing. The economics of $500/call don't work.

**Open unknowns worth resolving before phase 2:**
- Does 8 kHz STT accuracy hold up well enough on our actual interview vocabulary that phone
  transcripts are usable as evidence, or do they become second-class? *(This is testable in a day
  with recorded phone audio and should gate the whole bet.)*
- Is phone even the constraint? If participants are already completing browser interviews, phone may
  be a demo asset (it demos *extremely* well) rather than a completion-rate fix. Worth knowing which
  one we're funding before spending two weeks.

---

## Sources

- [LiveKit — Agents telephony integration](https://docs.livekit.io/telephony/agents-integration/)
- [LiveKit — SIP trunk setup](https://docs.livekit.io/telephony/start/sip-trunk-setup/)
- [LiveKit — Accepting incoming calls](https://docs.livekit.io/agents/quickstarts/inbound-calls/)
- [LiveKit — Making calls using SIP](https://docs.livekit.io/agents/quickstarts/outbound-calls/)
- [LiveKit — Dispatch rule](https://docs.livekit.io/telephony/accepting-calls/dispatch-rule/)
- [LiveKit — Agent dispatch](https://docs.livekit.io/agents/server/agent-dispatch/)
- [LiveKit — Twilio SIP trunk setup](https://docs.livekit.io/telephony/start/providers/twilio/)
- [LiveKit — LiveKit Phone Numbers](https://docs.livekit.io/telephony/start/phone-numbers/) ·
  [launch post](https://livekit.com/blog/introducing-livekit-phone-numbers-zero-to-ringing-in-60-seconds)
- [LiveKit — Audio codec negotiation](https://docs.livekit.io/reference/telephony/codecs-negotiation/)
- [LiveKit — Verifying SIP caller identity](https://livekit.com/blog/verify-sip-caller-identity)
- [`livekit-examples/outbound-caller-python`](https://github.com/livekit-examples/outbound-caller-python)
- [`livekit/sip` — SIP↔WebRTC bridge](https://github.com/livekit/sip)
- [LiveKit pricing](https://livekit.com/pricing)
- [FCC — AI-generated voices in robocalls are illegal (Feb 2024)](https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal) ·
  [FCC 24-17 ruling](https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf) ·
  [July 2024 NPRM fact sheet](https://docs.fcc.gov/public/attachments/DOC-404036A1.pdf)
- [Wilson Sonsini — FCC rules AI voices are "artificial" under the TCPA](https://www.wsgr.com/en/insights/fcc-rules-ai-generated-voices-are-artificial-under-the-tcpa.html)
- [Henson Legal — AI voice agent compliance: TCPA, FCC, state laws (2026)](https://www.henson-legal.com/ai-voice-compliance)
- [Thoughtly — Call recording consent by state](https://thoughtly.com/blog/call-recording-consent-ai-voice-agents-state-guide) ·
  [AI disclosure requirements](https://thoughtly.com/blog/ai-disclosure-requirements-what-to-tell-callers)
- [Telnyx vs Twilio for voice AI (pricing/latency)](https://burki.dev/blog/42-twilio-vs-telnyx-voice-ai) ·
  [Telnyx vs Twilio voice API](https://telnyx.com/resources/telnyx-vs-twilio-which-voice-api-is-better)
