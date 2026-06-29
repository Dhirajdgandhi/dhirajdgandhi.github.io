# Personal Portfolio

A polished, minimal, light-mode personal site built with **Next.js (App Router)**,
**TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Aesthetic is
Linear/Vercel-inspired: spacious, monochrome with a single restrained accent,
and subtle scroll-reveal motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build / typecheck
```

## Pages (multi-page, one route per tab)

Each section is its own route with a persistent top nav and animated page
transitions (Framer Motion `template.tsx`).

| Route | Page |
|---|---|
| `/` | **Hero** — intro, social icons, résumé + contact CTAs |
| `/experience` | Work experience — vertical interactive timeline |
| `/people` | People I worked with — recommendation/quote cards |
| `/passions` | Passions — tabbed: dance, tennis, skiing, connection building (hero media + first-person story + stats) |
| `/goals` | Goals — status-tagged cards |
| `/thoughts` | Thoughts — notes/posts |
| `/projects` | Technical projects — hover-lift cards with stack tags + repo/demo links |
| `/connect` | Connect — sign-off + contact |

## Editing content

All content is decoupled from the UI and lives in typed files under [`data/`](data/):

| File | Section |
|---|---|
| `data/profile.ts` | name, headline, socials, email, résumé |
| `data/experience.ts` | work experience |
| `data/people.ts` | people I worked with |
| `data/passions.ts` | passions (tabs) |
| `data/goals.ts` | goals |
| `data/thoughts.ts` | thoughts |
| `data/projects.ts` | technical projects |
| `data/types.ts` | shared types (the shape of every entry) |

Swap the placeholder objects for your real content — the UI updates automatically.

### Media

Drop images/videos in `public/<section>/` (e.g. `public/passions/skiing.jpg`)
and reference them with a leading slash (`/passions/skiing.jpg`). Passions with
no media fall back to a clean gradient.

## Updating via Claude / Cursor (Skills)

This repo ships **Agent Skills** so you can update the site by just describing
what you did. From `.cursor/skills/`:

- `portfolio-update` — umbrella router + shared workflow
- `portfolio-experience`, `portfolio-people`, `portfolio-passion`,
  `portfolio-goal`, `portfolio-thought`, `portfolio-project`

Say something like *"I just did a new ski trip, add it to my portfolio"* or
*"add my new project to the site"* and the agent will interview you, refine the
copy **in your own voice**, ask for image/video links, edit the right `data/*.ts`
file, and rebuild.

## Deploy

- **Vercel**: import the repo (zero config).
- **GitHub Pages**: add `output: "export"` to `next.config.ts` and publish the
  generated `out/` directory.
