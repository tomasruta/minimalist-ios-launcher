# SESSION LOG: minimalist-ios-launcher

## Session 1 — 2026-01-09 (evening, ~2 hrs)
**Built:** Scriptable widget for minimalist iOS home screen launcher

**What happened:**
- Created `MinimalistLauncher.js` — a Scriptable widget that replaces the iOS home screen with a clean, text-based app launcher
- Discussed approaches for configuring which apps appear (hardcoded list vs. config file vs. Shortcuts integration)
- Chose hardcoded list for simplicity — easy to edit directly in the script
- Deployed to Scriptable on iOS via iCloud sync (`~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/`)
- Iterated on font weight/size 5 times based on screenshot feedback (systemFont 22 → light 24 → system 28 → medium 28 → semibold 32)
- Fixed double-background issue by switching widget background from white to `Color.clear()`

**Files:** `MinimalistLauncher.js`

**Decision:** Went with Scriptable (JavaScript) over Shortcuts because it gives full control over the widget layout and doesn't require a separate app for each launcher action.

**Dead ends:**
- Font matching was a multi-round guessing game — Claude can't extract exact font specs from screenshots
- Widget initially had its own white background layered on top of the iOS widget background

---

## Session 2 — 2026-01-09 to 2026-01-22 (long-running session, multiple working periods)

One continuous Claude Code session spanning ~2 weeks with distinct phases.

### Phase 1: Jan 9-12 — Trying to recover Session 1
- Wanted to find the previous session in the Claude Code sidebar — it wasn't showing up
- Tried multiple fixes: `git init`, recreating folder structure alongside the JSONL, clearing app cache
- None worked — the old session was created before `git init`, so the `gitBranch` field was empty
- Claude Code's sidebar only reliably shows sessions linked to git repos — likely a bug
- **Dead end:** `/sessions`, `/resume`, `claude --resume` — none exist in the Claude Code desktop app

### Phase 2: Jan 15-16 — GitHub repo and README
- Created GitHub repo `tomasruta/minimalist-ios-launcher` (initially private, then made public)
- Initial commit with `MinimalistLauncher.js` and `MinimalistLauncher-Spec.md`
- Added `README.md` with setup instructions and URL schemes table

**Commits:**
- `Initial commit: Minimalist iOS launcher widget`
- `Add README with setup instructions`

### Phase 3: Jan 16 — Wispr Flow URL scheme hunt
- Tried adding Wispr Flow to the launcher
- Tested URL schemes: `wisprflow://`, `wispr://`, `flow://` — none worked (all fell back to opening Scriptable)
- Composed message to Wispr Flow support asking for their URL scheme
- Support replied: "not a current feature"
- Claude drafted a push-back message (most iOS apps have this via `CFBundleURLSchemes` in Info.plist)
- **Dead end:** Wispr Flow genuinely doesn't support URL schemes. Suggested Shortcuts workaround (`shortcuts://run-shortcut?name=...`) as fallback — adds ~0.5s delay.

### Phase 4: Jan 18-19 — App list overhaul
- Removed ChatGPT and Gemini from launcher
- Added Elite HRV and Brilliant
- URL scheme testing results:
  - `elitehrv://` — worked immediately
  - `brilliant://` — worked (after trying `org.brilliant.mobile://` first, which failed)
  - Wispr Flow — still no working scheme, removed from launcher

**Commits:**
- `Update apps: remove ChatGPT/Gemini, add Elite HRV/Brilliant`

### Phase 5: Jan 22 — Final tweaks
- Confirmed Brilliant works with `brilliant://`, re-added to launcher
- Another Wispr Flow URL scheme attempt (still no luck)

**Final app list:** Google Maps, Claude, Elite HRV, Brilliant

**Decision:** Kept Wispr Flow out of the launcher. The Shortcuts workaround exists but adds noticeable delay. Will revisit if they add URL scheme support.

---
