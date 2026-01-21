# CodeCraft — Rivka's Portfolio

This is a personal portfolio site built with React, TypeScript, Vite and Tailwind CSS.

<!-- CI and Pages badges -->
[![CI](https://github.com/rivksh/codecraft-site/actions/workflows/ci.yml/badge.svg)](https://github.com/rivksh/codecraft-site/actions/workflows/ci.yml)
[![Pages](https://github.com/rivksh/codecraft-site/actions/workflows/gh-pages.yml/badge.svg)](https://rivksh.github.io/codecraft-site/)

Quick start

1. Install dependencies

```powershell
npm install
```

2. Start dev server

```powershell
npm run dev
```

3. Build for production

```powershell
npm run build
```

Notes

- The project uses Vite. If you see PostCSS/Tailwind errors, ensure `tailwindcss`, `@tailwindcss/postcss`, `postcss` and `autoprefixer` are installed (they are in `devDependencies`).
- Edit content in `src/components/` and replace placeholder images in `public/`.

Next steps / TODO

- Replace placeholder images and CV with real files (put them in `public/`).
- Hook contact form to a serverless endpoint (Formspree, Netlify Functions, or similar).
- Add Project detail pages or modal views.
- Deploy to Vercel / Netlify.

Notes

- A social preview image is available at `public/social.svg` for better sharing. You can replace with a PNG at `public/social.png` if preferred by the platform.
- Placeholder project images are in `public/projects/` (`bookkeeping.svg`, `palettepro.svg`, `car-rental.svg`) — replace these with real screenshots.
