# Minimalist Launcher Widget — Claude Code Spec

## Overview

Build a Scriptable widget for iOS that displays a minimal list of app shortcuts on the home screen. User taps an app name → that app launches.

---

## Technical Requirements

### Platform
- **Scriptable app** for iOS (free, runs JavaScript widgets)
- Widget syncs via iCloud to Mac for easy editing

### Output
- Single file: `MinimalistLauncher.js`
- Place in Scriptable's iCloud folder

---

## Widget Specifications

### Size
- **Large** widget (fills ~2/3 of screen width, tall)

### Styling
| Property | Value |
|----------|-------|
| Background | White (`#FFFFFF`) or system background |
| Text colour | Black (`#000000`) |
| Font | System sans-serif (San Francisco) |
| Font weight | Regular or Medium |
| Font size | ~20-24pt (readable, not cramped) |
| Alignment | Left-aligned |
| Spacing | Generous vertical spacing between items (~12-16pt) |
| Padding | Comfortable margins all around |

### Visual Reference
```
┌─────────────────────────────┐
│                             │
│   Google Maps               │
│                             │
│   ChatGPT                   │
│                             │
│   Claude                    │
│                             │
│   Gemini                    │
│                             │
└─────────────────────────────┘
```

No icons. No decorations. Just text.

---

## App Configuration

### Default Apps (with URL schemes)

```javascript
const apps = [
  { name: "Google Maps", url: "comgooglemaps://" },
  { name: "ChatGPT", url: "chatgpt://" },
  { name: "Claude", url: "claude://" },
  { name: "Gemini", url: "googlegemini://" },
];
```

### Config Section Requirements
- Place `apps` array at the **very top** of the file
- Include clear comments explaining how to add/remove apps
- Example comment showing format for adding new apps

---

## Functionality

### Tap Behaviour
- Tapping anywhere on an app's row opens that app
- Use Scriptable's `widget.url` or tap handler to trigger URL scheme

### Offline
- Must work fully offline (no network calls)

### Widget Refresh
- Scriptable handles this automatically

---

## File Location for Editing

User will edit via Mac Finder at:
```
~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/MinimalistLauncher.js
```

Include this path in a comment at the top of the file.

---

## Code Structure

```javascript
// ===========================================
// MINIMALIST LAUNCHER - CONFIGURATION
// ===========================================
// Edit this file on Mac at:
// ~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/
//
// To add an app:
//   { name: "App Name", url: "urlscheme://" }
//
// Find URL schemes: https://ios.gadgethacks.com/how-to/always-updated-list-ios-app-url-scheme-names-paths-0184033/
// ===========================================

const apps = [
  { name: "Google Maps", url: "comgooglemaps://" },
  { name: "ChatGPT", url: "chatgpt://" },
  { name: "Claude", url: "claude://" },
  { name: "Gemini", url: "googlegemini://" },
];

// ... widget creation code below
```

---

## Testing Checklist

- [ ] Widget displays all four app names
- [ ] Tapping each name opens correct app
- [ ] Styling matches spec (white bg, black text, clean spacing)
- [ ] Works in Large widget size
- [ ] File editable from Mac via iCloud path

---

## Common URL Schemes Reference

Include as comment block in code for user convenience:

```javascript
/*
COMMON URL SCHEMES:
- Safari: x-web-search://
- Maps (Apple): maps://
- Google Maps: comgooglemaps://
- Chrome: googlechrome://
- Gmail: googlegmail://
- YouTube: youtube://
- Spotify: spotify://
- WhatsApp: whatsapp://
- Telegram: telegram://
- Signal: sgnl://
- Slack: slack://
- Notion: notion://
- Obsidian: obsidian://
- ChatGPT: chatgpt://
- Claude: claude://
- Gemini: googlegemini://
- Perplexity: perplexity://
*/
```

---

## Deliverable

Single file `MinimalistLauncher.js` ready to drop into Scriptable's iCloud folder.

No dependencies. No external files. Self-contained.
