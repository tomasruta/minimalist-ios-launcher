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
  { name: "Claude", url: "claude://" },
  { name: "Elite HRV", url: "elitehrv://" },
  { name: "Brilliant", url: "brilliant://" },
  { name: "Wispr Flow", url: "wispr://dictate" },
];

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

// ===========================================
// WIDGET CODE
// ===========================================

// Create the widget
let widget = new ListWidget();

// Set transparent background so iOS widget background shows through
widget.backgroundColor = Color.clear();

// Add padding - more on left for better alignment
widget.setPadding(20, 16, 20, 20);

// Add each app to the widget
for (let i = 0; i < apps.length; i++) {
  let app = apps[i];

  // Create a stack for the app row
  let appStack = widget.addStack();
  appStack.layoutHorizontally();
  appStack.centerAlignContent();

  // Make the entire row tappable
  appStack.url = app.url;

  // Add app name text with bold font weight
  let appText = appStack.addText(app.name);
  appText.font = Font.boldSystemFont(32);
  appText.textColor = new Color("#000000");
  appText.leftAlignText();

  // Add spacing between apps (except after the last one)
  if (i < apps.length - 1) {
    widget.addSpacer(16);
  }
}

// Add flexible spacer at the bottom to push content to top
widget.addSpacer();

// Set the widget
if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  // Preview in app
  widget.presentLarge();
}

Script.complete();
