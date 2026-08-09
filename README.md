# Noah — Portfolio (Next.js 14 · GitHub Pages)

Dynamic rewrite of noahwatson-369.github.io. Built with **Next.js App Router**,
**Tailwind CSS**, **Framer Motion**, static-exported to `out/` for GitHub Pages.

## Tech stack

| Area          | Choice                                   |
|---------------|------------------------------------------|
| Framework     | Next.js 14.2 (App Router)                |
| Export        | `output: 'export'` → static `out/`      |
| Styling       | Tailwind CSS (dark, purple/blue)        |
| Animation     | Framer Motion                           |
| Icons         | Font Awesome 6 (CDN)                    |
| Fonts         | Orbitron · Space Grotesk · JetBrains Mono |
| Data          | Plain JS modules in `data/`              |

## Editing your content

Everything is data-driven — no component edits needed:

| File                  | What it holds                              |
|-----------------------|-------------------------------------------|
| `data/profile.js`     | Name, brand, taglines, tagline, stats, disclaimers |
| `data/skills.js`      | Skill cards and tags                      |
| `data/projects.js`    | Projects, capabilities, filters           |
| `data/contact.js`     | Email / Telegram / X / Discord / Session ID |
| `data/site-config.js` | Visitor counter URL + toggle              |

### Visitor counter

`data/site-config.js` uses a `no-cors` fetch to
`https://api.countapi.xyz/hit/<key>`. Swap `counterUrl` for any JSON API
returning `{ value }`, `{ hits }` or `{ count }` (e.g. a hitscounter service),
or set `counterEnabled: false` to hide it.

## Commands

```bash
npm install
npm run dev      # local dev on http://localhost:3000
npm run build    # static export into ./out
```

Replace `"next start"` usage in production — for static hosting serve `out/` with
any static server:

```bash
npx serve out
```

## Deploy to GitHub Pages — option A: GitHub Actions (recommended)

1. Push this repo to GitHub (`main` branch) — e.g.
   `github.com/noahwatson-369/noahwatson-369.github.io`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. Done. Push to `main` auto-builds and deploys
   (`./.github/workflows/deploy.yml`).

## Deploy — option B: manual upload

```bash
npm install
npm run build
```

Upload the contents of `out/` to the repository root of
`noahwatson-369.github.io` (or switch Settings → Pages → Deploy from a branch →
`main` / `left` — see below), then push.

Note: Next.js emits a `.nojekyll` file inside `out/` automatically.

## Editing notes

- All text is English and matches the original static site.
- Fonts and icons load from CDNs — an internet connection is required at view time.
- For a project site under `/<repo>/`, set `basePath` in `next.config.js`; the
  user-site GitHub Pages (`.github.io`) deploys at the root, so none is set here.