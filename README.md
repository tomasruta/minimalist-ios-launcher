# Minimalist iOS Launcher

A simple text-based app launcher widget for iOS using [Scriptable](https://scriptable.app/).

No icons. No clutter. Just tap the app name to launch it.

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

## Setup

1. Install [Scriptable](https://apps.apple.com/app/scriptable/id1405459188) from the App Store (free)

2. Copy `MinimalistLauncher.js` to your Scriptable folder:
   - **On iPhone**: Open Scriptable > tap + > paste the code
   - **On Mac**: Copy to `~/Library/Mobile Documents/iCloud~dk~simonbs~Scriptable/Documents/`

3. Add the widget to your home screen:
   - Long-press home screen > tap +
   - Search for Scriptable
   - Choose **Large** widget size
   - Long-press the widget > Edit Widget > select "MinimalistLauncher"

## Customization

Edit the `apps` array at the top of the file:

```javascript
const apps = [
  { name: "Google Maps", url: "comgooglemaps://" },
  { name: "ChatGPT", url: "chatgpt://" },
  { name: "Claude", url: "claude://" },
  { name: "Gemini", url: "googlegemini://" },
];
```

### Common URL Schemes

| App | URL Scheme |
|-----|------------|
| Safari | `x-web-search://` |
| Apple Maps | `maps://` |
| Google Maps | `comgooglemaps://` |
| Chrome | `googlechrome://` |
| Gmail | `googlegmail://` |
| YouTube | `youtube://` |
| Spotify | `spotify://` |
| WhatsApp | `whatsapp://` |
| Telegram | `telegram://` |
| Slack | `slack://` |
| Notion | `notion://` |
| Obsidian | `obsidian://` |
| ChatGPT | `chatgpt://` |
| Claude | `claude://` |
| Perplexity | `perplexity://` |

Find more URL schemes: [iOS URL Scheme List](https://ios.gadgethacks.com/how-to/always-updated-list-ios-app-url-scheme-names-paths-0184033/)

## License

MIT
