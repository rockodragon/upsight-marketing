---
tags:
  - qa
  - desktop
---
# Smoke Test — Desktop Install (macOS + Windows)

**Use this every time a new `desktop-v*` installer ships to R2.** Runs ~20 min. Flag anything that diverges from Expected.

**Latest build under test:** `desktop-v2026.04.17.1` (Apr 17, 2026)

**What this build contains** (merged via PRs 161, 162, 163 into `main`):
- Media sync root-cause fix + processing_metadata merge
- Oval-shape panel restore (tray Show Recorder)
- Diarization: stopped collapsing every turn to signed-in host
- Tray menu cleanup (Sign In/Out, Quit with force-exit fallback)
- Persistent unread dot + tab count badge (replaces green flash)
- Realtime evidence convergence onto BAML batch path
- Tasks dedup by intent-slug
- OAuth 90s timeout + branded callback page
- Follow-up email draft generation for every named participant (even without email)
- Desktop + web PostHog instrumentation (web-side shipped)
- Person first/last name edit reliability

**Installers**
- macOS ARM64: `https://pub-...r2.dev/desktop/darwin/arm64/UpSight.dmg`
- Windows x64: `https://pub-...r2.dev/desktop/win32/x64/UpSight-Setup.exe`
- (Exact pub URL is in `reference_desktop_download_urls` memory or surfaced via `DesktopAppBanner` on the interviews page.)

---

## macOS plan — 9 steps, golden path

Run in order. If a step fails, pause — later steps often depend on it.

| # | What to do | Expected behavior | Checks |
|---|---|---|---|
| 1 | Install `UpSight.dmg` and launch. Open tray menu (top menu bar). | Tray icon appears (white on dark menu bar). Menu shows: **Show Recorder**, your email, **Sign Out**, **Quit UpSight** (no "Meetings Archive" or "Debug Window"). | Tray cleanup |
| 2 | Click **Sign In**. Sign in via Google OAuth. | Browser opens within ~1s (no "processing" hang). Callback page is branded UpSight dark theme with lock-icon explainer. App returns to signed-in state. | OAuth 90s timeout + branded page |
| 3 | Quit the app via tray → **Quit UpSight**. | Process exits within ~1.5s. | Force-exit fallback |
| 4 | Reopen app, start a Google Meet with one other participant. Start recording. | Floating panel appears. Recording pulse in tray icon. | Recording start |
| 5 | During recording, hit the minimize button on the panel. Then click tray → **Reveal Recorder**. | Panel restores to full rectangular size. **No oval / stretched circle.** | Oval-shape IPC fix |
| 6 | Have the other person speak for ~30 seconds. | Transcript turns labeled with their real name (if known) or `Speaker N` — **never silently attributed to you**. Console log may show `[transcript:speaker-fallback]` warnings if the resolver hit a guess path. | Diarization (Insights-q5j9 + vs5s) |
| 7 | Continue the call ~10 min. Say multiple similar statements e.g. "let's meet Tuesday" then later "how about Thursday?". | Evidence cards appear in the panel without heavy duplication. Tasks tab shows **one** card for "schedule next meeting" (not two). Counts of evidence/tasks should be an order of magnitude lower than before (target <50 for a 10-min call). | Evidence + task dedup |
| 8 | Switch to the Notes tab during the call. Watch the Tasks/Evidence tabs. | Inactive tabs gain a calm blue dot + number badge showing unread count. When you click that tab, the badge clears and the dot removes from visible items. | Unread dot / tab badges |
| 9 | Stop recording. Wait ~2 min. Open the interview in web via the "Open interview" button on the panel. | Interview page loads. `media_url` populated (audio/video player visible). Follow-up email draft card shows at top with the "Add email to send" affordance if participant has no email on file. | Media sync + follow-up draft |

---

## Windows plan — 12 steps

Runs on top of whatever macOS verified, plus Windows-specific risks.

| # | What to do | Expected | Why |
|---|---|---|---|
| W1 | Install `UpSight-Setup.exe`. Confirm Squirrel completes. Launch. | Tray icon visible and **white** on dark taskbar. | Squirrel signing (`5992ee6f`), icon recolor |
| W2 | Sign in via Google OAuth. Allow Windows Firewall prompt if it appears. | Browser opens within ~2s. Callback returns to app. | OAuth loopback binding through Windows Firewall |
| W3 | Quit app. Reopen. | Still signed-in (no re-auth needed). | `keytar` DPAPI credential persistence |
| W4 | Right-click tray. | Menu shows: Show Recorder, your email, Sign Out, Quit UpSight. No Archive/Debug items. | Tray rewrite |
| W5 | Click Quit while idle. Check Task Manager. | `UpSight.exe` process exits within ~1.5s. No orphan processes. | Force-exit fallback |
| W6 | Start a Google Meet recording. Speak 10s. | Live transcript **appears in the panel** during recording (not only post-call). | This is the `Insights-vuy7` verification — untested since 2026-04-14 |
| W7 | During recording, minimize panel → tray → Reveal Recorder. | Full rectangular panel restores. No oval. | Oval-shape IPC |
| W8 | Recording with 2+ participants. | Turns labeled correctly (real names or `Speaker N`). | Diarization fix |
| W9 | Say "Tuesday" then "Thursday" about a meeting. | One task for "schedule next meeting", not two. | Task dedup_key |
| W10 | Stop recording. Wait 30s. | `recording-ended` fires (check `%APPDATA%\UpSight\upsight-debug.log`). Media URL populates on web. | Windows finalization fallback timer (`bd29390cc`) |
| W11 | Start recording → immediately Quit app. | R2 has a clean complete upload for that session (no truncation). | SDK graceful shutdown under new Quit |
| W12 | Repeat W7 at 150% Windows display scale (Settings → Display). | Panel still restores to correct full size. | DPI + `getBounds()` math |

---

## Backend verification (after install, from web)

In addition to the desktop flows above, verify on `getupsight.com`:

| # | What | Where |
|---|---|---|
| B1 | Edit first name on a person detail page. | Change persists on refresh. No UI revert. (`Insights` name-edit fix) |
| B2 | Open **Admin → Missing Media** page. | Interviews recovered via backfill no longer appear. Count should be near 0 within ~10 min of the R2 build deploy. |
| B3 | Open the interview detail page for the demo call. | `FollowUpDraft` card renders at top. "Add email to send" button shows when participant has no email. |
| B4 | Open chat on `/home`: ask "show me the follow-up drafts for [interview title]". | opsAgent calls `displayComponent("FollowUpDraft")` — widget renders, not plain text body. |
| B5 | Check PostHog live events. | `recording_completed`, `interview_added`, `action_created`, `insight_pinned`, etc. firing server-side (not blocked by ad-blockers). |

---

## If something fails

1. Grab the last 40 lines of `%APPDATA%\UpSight\upsight-debug.log` (Windows) or `~/Library/Application Support/UpSight/upsight-debug.log` (macOS).
2. Note which step number + which expected behavior diverged.
3. Paste to Rick or open an `Insights-*` bead referencing this test plan.

---

## Related beads

- `Insights-vuy7` P0 — Windows real-time transcript fix verification (see W6)
- `Insights-g5im` closed — oval-shape fix (see M5 / W7)
- `Insights-q5j9` closed — diarization (see M6 / W8)
- `Insights-iiby` closed — realtime evidence dedup (see M7 / W9)
- `Insights-vp6d` closed — task dedup (see M7 / W9)
- `Insights-9e99` closed — unread dot (see M8)
- `Insights-ngl9` closed — OAuth short-term fix (see M2 / W2)
- `Insights-wvxw` closed — media sync root cause (see M9 / W10)
- `Insights-w94i` in_progress — follow-up draft widget rendering (see M9 / B3 / B4)
- `Insights-le1v` P0 — Trigger.dev RECALL_API_KEY env (fix before running B2 on a fresh install)
