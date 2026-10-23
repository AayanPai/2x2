# 2×2 Software — Website

A responsive single-page company website built with **React + Vite**. The page uses a restrained black-and-white visual system for 2×2 Software and a separate dark, electric-blue visual system for Bifrost.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Vite outputs the production-ready site to `dist/`.

## Project structure

```text
2x2-software-site/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── assets/       # Logo marks and supplied Bifrost screenshots
└── src/
    ├── main.jsx      # Page sections and navigation
    └── styles.css    # Responsive layout and visual design
```

The Bifrost buttons link to `https://bifrostd.netlify.app`. Update `bifrostUrl` near the top of `src/main.jsx` if the live URL changes.
