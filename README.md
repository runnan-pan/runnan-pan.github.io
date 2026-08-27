# runnan-pan.github.io

Personal site for [Runnan Pan](https://runnan-pan.github.io). Built with Astro, Tailwind CSS, and TypeScript. Hosted on GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`. `/` sends you to English or Chinese based on `localStorage` or the browser language.

## Pages and languages

Routes live under `src/pages/[lang]/`. Both `/en/` and `/zh/` are generated from the same files.

To add a page:

1. Add a key in `src/i18n/config.ts` (`routes` and, if needed, `navRoutes`).
2. Add copy in `src/i18n/ui.ts` for `en` and `zh`.
3. Create `src/pages/[lang]/your-page.astro`.

Translations, profile links, work, and projects are in `src/i18n/` and `src/data/`.

## Images

Put page images in `src/assets/images/`:

- `portraits/` — photos
- `work/` — company or role images
- `projects/` — project covers
- `shared/` — logos, Open Graph images, icons

Register reused images in `src/assets/images/registry.ts`. Current SVGs are placeholders — replace them with real files and keep the same export names, or add new ones.

## Deploy

Pushing to `main` builds and publishes via `.github/workflows/deploy.yml`.

In the GitHub repo: **Settings → Pages → Source → GitHub Actions**.
