# Six Months web app

Mobile-first interactive anniversary web app based on the supplied UI.

## Run
Open `index.html` or run `python -m http.server 8000` inside this folder and visit http://localhost:8000.

## Deploy
Upload this folder to Cloudflare Pages, Netlify, or Vercel as a static site. Set output directory to the root folder, no build command.

## Customize
Edit `CH` (six memories), `RS` (six reasons), and the final letter in `script.js` (and the letter text in `index.html`). The date is set to Friday, November 6, 2026.

Photos are bundled locally. No backend or account needed. Offline caching is supported after first online load.

## Project structure

- `index.html` — page markup
- `styles.css` — visual styling and animations
- `script.js` — interactions and countdown
- `photo-1.jpg`, `photo-2.jpg` — images
- `voice-note.mp3` — personal recording, revealed after opening Friday’s letter with the password; playback requires a connection on first use
- `manifest.webmanifest`, `sw.js`, `icon.svg` — PWA assets

