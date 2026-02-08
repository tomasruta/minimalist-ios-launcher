# HANDOVER — Minimalist iOS Launcher

## What This Project Is

A minimal, text-based iOS home screen widget that launches apps with a single tap. It runs on the free [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) iOS app and displays a clean list of tappable app names — no icons, colors, or decorations.

## Project Structure

```
minimalist-ios-launcher/
├── MinimalistLauncher.js        # Main widget script (~91 lines)
├── README.md                    # Setup & customization guide
├── MinimalistLauncher-Spec.md   # Original technical specification
├── SESSION_LOG.md               # Development session history
├── HANDOVER.md                  # This file
└── .gitignore                   # Ignores .DS_Store
```

## Tech Stack

- **Language:** JavaScript (ES6)
- **Runtime:** Scriptable (iOS app, free)
- **Dependencies:** None — fully self-contained single file
- **iOS Compatibility:** 14+
- **Sync:** iCloud (edit on Mac, auto-syncs to iPhone)

## How It Works

`MinimalistLauncher.js` creates a Scriptable `ListWidget` with:

1. A configurable `apps` array at the top of the file (name + iOS URL scheme per app)
2. A loop that renders each app as a bold, tappable text row
3. Tapping a row opens the app via its URL scheme

Key styling: transparent background, bold 32pt system font, black text, 16px spacing between rows.

## Current App List

Configured at the top of `MinimalistLauncher.js` (lines 13–19):

| App         | URL Scheme           |
|-------------|----------------------|
| Google Maps | `comgooglemaps://`   |
| Claude      | `claude://`          |
| Elite HRV   | `elitehrv://`        |
| Brilliant   | `brilliant://`       |
| Wispr Flow  | `wispr://dictate`    |

## Customization

### Adding or removing apps

Edit the `apps` array at the top of `MinimalistLauncher.js`:

```javascript
const apps = [
  { name: "App Name", url: "urlscheme://" },
];
```

A reference list of 17+ common URL schemes is included in the code comments (lines 21–40).

### Editing on Mac

Open the file at:
```
~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/MinimalistLauncher.js
```
Changes sync to iPhone automatically via iCloud.

### Styling

| Property       | Location  | Default                  |
|----------------|-----------|--------------------------|
| Font size      | Line 69   | `Font.boldSystemFont(32)` |
| Text color     | Line 70   | `#000000` (black)        |
| Row spacing    | Line 75   | `16` px                  |
| Padding        | Line 53   | `20, 16, 20, 20` (T/L/B/R) |
| Background     | Line 50   | `Color.clear()` (transparent) |

## Setup (From Scratch)

1. Install **Scriptable** from the App Store
2. Add the script: open Scriptable → tap **+** → paste contents of `MinimalistLauncher.js`
3. Add widget to home screen: long-press → **+** → search "Scriptable" → select **Large** size
4. Long-press the widget → **Edit Widget** → select "MinimalistLauncher"

## Known Limitations

- Apps must support iOS URL schemes (most do; some niche apps don't)
- Static list only — no dynamic data or network calls
- Designed for a single Large widget size

## Design Philosophy

Intentionally minimal: no icons, no colors, no animations, no network calls. One JavaScript file, easy to read and edit. Complexity is avoided by design.
