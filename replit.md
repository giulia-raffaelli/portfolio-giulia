# Giulia Raffaelli — Arcade Portfolio

A personal portfolio website for Giulia Raffaelli, a marketing & brand strategy student. The visual language is an 80s arcade / nerd-movie homage layered over a credible professional portfolio.

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS (custom design system tokens)
- react-router-dom v6 (3 pages: Home, Projects, Curiosity Corner)
- framer-motion (page animations with prefers-reduced-motion support)
- Google Fonts: Press Start 2P, Space Mono, Playfair Display

## Running the App
```bash
npm run dev
```
Serves on port 5000.

## Structure
- `src/App.jsx` — Router setup
- `src/components/Header.jsx` — Persistent nav with GR logo
- `src/components/Footer.jsx` — Persistent footer with copyright
- `src/pages/Home.jsx` — Single-scroll homepage (Hero, About, Work, Education, Beyond Desk, Contact)
- `src/pages/Projects.jsx` — Level Select Map with 3 featured + 11 smaller project cards
- `src/pages/CuriosityCorner.jsx` — Bonus Stage placeholder

## Design System
CSS variables defined in `src/index.css`:
- `--bg: #0B0E1A`, `--panel: #10142A`, `--teal: #3E909E` (primary brand accent)
- `--magenta: #FF2E92`, `--amber: #FFB627`, `--violet: #6C4FF6`
- `--ink: #EDEAE0`, `--ink-dim: #9B9DB0`

Tailwind custom classes: `font-pixel` (Press Start 2P), `font-mono` (Space Mono), `font-serif` (Playfair Display).

## User Preferences
- No emojis in the UI except the Bocconi thesis "SECRET ACHIEVEMENT UNLOCKED 🔓" badge
- Press Start 2P (pixel font) only for short labels/titles, never body copy
- All content must match the spec exactly — no invented stats, dates, or links
