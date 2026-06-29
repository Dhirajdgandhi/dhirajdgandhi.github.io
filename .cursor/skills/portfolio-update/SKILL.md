---
name: portfolio-update
description: >-
  Add or update content on Dhiraj's personal portfolio (the Next.js app in
  portfolio/). Use whenever the user says they did something new and want it on
  their site/portfolio — a new job/role or degree, a recommendation or person
  they worked with, a passion update (dance, tennis, skiing, connection,
  mentorship), a new goal, a thought/post, or a side-project. Works from a
  single freeform text prompt: classifies it to the right section(s), extracts
  media links/timestamps/captions, organizes it into the typed fields, refines
  copy in the user's own voice, edits the data file, and rebuilds.
---

# Portfolio Update

The portfolio is a Next.js + Tailwind + Framer Motion app at `portfolio/`.
All content lives in typed arrays under `portfolio/data/`, decoupled from UI.
**You only ever edit `portfolio/data/*.ts`** — never the components — unless the
user explicitly asks for a design change.

## Section → file → skill map

| The user is adding… | Data file | Section skill |
|---|---|---|
| A job / role / degree / education | `portfolio/data/experience.ts` | `portfolio-experience` |
| A person / recommendation | `portfolio/data/people.ts` | `portfolio-people` |
| A passion update (dance, tennis, skiing, connection, mentorship) | `portfolio/data/passions.ts` | `portfolio-passion` |
| A goal | `portfolio/data/goals.ts` | `portfolio-goal` |
| A thought / note / post | `portfolio/data/thoughts.ts` | `portfolio-thought` |
| A technical side project | `portfolio/data/projects.ts` | `portfolio-project` |
| Name / role / share-description / preview photo | `portfolio/data/profile.ts` + `app/layout.tsx` | (see "Social share preview") |

Types for every entry are in `portfolio/data/types.ts` — read it first so the
object you add matches the shape exactly.

## Working from a single freeform prompt

The user usually just pastes a sentence or two ("add my MBA at Sofia, started
2026, courses X/Y/Z" or "put this YouTube video in the dance tab, caption: 53K
views, start at 5s"). Turn that into well-organized content **without making them
fill a form**:

1. **Classify** the prompt to one (or more) sections using the map above. A
   single prompt can touch several sections — handle each (e.g. an MBA goes in
   *experience* AND can seed a *goal*). If it clearly fits nothing, ask.
2. **Extract structured bits** from the text yourself:
   - **Media links** — YouTube/Vimeo/Instagram URLs, image/video links, or a
     filename they dropped in. Decide image vs. video vs. youtube (see Media).
   - **Timestamps** — "start at 5s", "0:05–0:25" → `start`/`end`.
   - **Caption** — any "caption: …" or aside like "my most-viewed, 53K" →
     `media.caption`.
   - **Stats / numbers / dates** → the section's `stats`/`start`/`horizon`/etc.
   - **The story / bullets** → the prose field, kept in their voice.
3. **Infer placement**: reverse-chronological sections (experience, thoughts)
   get prepended; tabs/lists keep a sensible order. Give a unique kebab `id`.
4. **Only ask what you truly can't infer** (one short batch). Don't re-ask for
   things already in the prompt. Pick sensible defaults and state them.
5. Edit the data file(s), then rebuild (step 6).

## The standard workflow (every section follows this)

```
- [ ] 1. Identify the section + open its data file and the type in types.ts
- [ ] 2. Interview the user for the fields (one focused batch of questions)
- [ ] 3. Refine the copy IN THE USER'S VOICE (see Voice rules) and confirm
- [ ] 4. Collect media links (image/video) and place/record them correctly
- [ ] 5. Edit the data file: prepend/append a typed object with a unique id
- [ ] 6. Verify: run the build and report the result
```

### 1. Identify + read
Open the target data file and `portfolio/data/types.ts`. Match the existing
object style (field order, formatting).

### 2. Interview
Ask only for the fields that section needs (the section skill lists them). Use
the `AskQuestion` tool when choices are discrete (e.g. goal status). Ask in one
batch; don't drip questions.

### 3. Voice rules (important)
This is the user's personal site. **Keep their words.**
- Use their phrasing verbatim where they gave you copy.
- Only lightly fix grammar/flow; do not corporate-ify or inflate.
- When you do rewrite a sentence, show the before/after and get an OK before saving.
- Match the existing first-person, understated tone already in the data files.
- Never invent achievements, numbers, or quotes.

### 4. Media
Sections with a `media` object (passions) support three kinds. Pick the right
`type`:

| Source the user gives | `type` | `src` | Extras |
|---|---|---|---|
| Image file/URL | `"image"` | `/passions/<file>` or URL | `fit`, `caption` |
| Local video file | `"video"` | `/passions/<file>` | `start`/`end` trim, `poster`, `caption` |
| YouTube link | `"youtube"` | full URL **or** the 11-char id | `start`/`end` seconds, `caption` |

- **Local file**: tell the user to drop it in `portfolio/public/<section>/`
  (e.g. `portfolio/public/passions/skiing.jpg`) and set `src` to
  `/<section>/<file>` (leading slash, no `public`). Copy it there yourself if
  it's already somewhere in the repo.
- **YouTube**: use `type: "youtube"`; the component extracts the id from any
  `watch?v=`, `youtu.be/`, `/embed/`, or `/shorts/` URL. "start at 5s" →
  `start: 5`; a range → `start`/`end` (seconds). Plays with controls (not muted
  autoplay) so sound works.
- **`fit`**: default `"cover"` crops to fill the 4:3 box. Use `"contain"` for
  screenshots/cards that must show fully (e.g. the Topmate card) — it frames the
  asset on a surface background instead of cropping.
- **`caption`**: a short line shown under the media (e.g. "My most viewed video
  — 53K and counting"). Pull it straight from the prompt.
- **`gallery`**: extra images shown beneath the hero — `[{ src, alt }]`. Use
  when the user gives **multiple photos** for one item (e.g. a "self" + "group"
  pair); the hero is the most personal/representative shot, the rest go here.
- **`start`/`end`**: for local video, values in (0,1] are a fraction of the
  duration and the clip loops; for YouTube they're plain seconds.
- Other post links (Instagram, articles) that aren't the hero still go in the
  `links: []` array.
- If no media yet, omit `media` — the UI shows a clean gradient fallback.

### 5. Edit
Append (or prepend, for reverse-chronological sections like experience/thoughts)
a new typed object. Give it a unique, kebab-case `id`. Keep TypeScript valid.

### 6. Verify & publish
- Preview: from `portfolio/`, run `npm run dev` (http://localhost:3000) or
  `npm run build` to catch type/lint errors.
- **Publish the live site:** the actual site is a *static export* served from
  the repo root (GitHub Pages). After editing data, run `./build-site.sh` from
  the repo root to re-export and copy the build to the root. The user then
  commits & pushes.
- Report what changed and where.

## How this site is deployed
- Source of truth = the Next.js app in `portfolio/`.
- The repo root holds the **built static output** (`index.html`, `_next/`,
  route folders like `experience/`, plus assets). GitHub Pages serves it as
  plain static files — no npm at runtime. A `.nojekyll` file at the root is
  required so `_next/` is served.
- The old hand-coded site is archived in `legacy-site/` (ignore it).
- Always edit `portfolio/data/*.ts`, never the generated root files; then
  re-run `./build-site.sh`.

## Social share preview (the link card)

When someone shares the site (iMessage/Slack/LinkedIn/X), the preview comes from
Open Graph metadata in `portfolio/app/layout.tsx` plus a baked image at
`portfolio/public/og.png` (1200×630).

- **Text only** (title / description): edit the `metadata` object's
  `title`, `description`, `openGraph`, and `twitter` fields in `app/layout.tsx`,
  then rebuild. Keep the absolute `metadataBase` so `og:image` resolves.
- **Regenerate the image** (new photo, name, role, or tagline on the card):
  1. Make a lean source photo: `sips --resampleWidth 900 <photo> --out portfolio/public/og-photo.jpg`.
  2. Temporarily create `portfolio/app/opengraph-image.tsx` using `next/og`'s
     `ImageResponse` (must include `export const dynamic = "force-static"` for
     static export). Read the photo via `fs` and embed as a base64 `<img>`; lay
     out photo-left / text-right at 1200×630.
  3. `npm run build`, then copy the rendered file to a real, extensioned asset:
     `cp out/opengraph-image portfolio/public/og.png` (it's PNG bytes).
  4. **Delete** `app/opengraph-image.tsx` and `og-photo.jpg`, point
     `metadata.openGraph.images`/`twitter.images` at `/og.png`, and rebuild.
- Why bake to `og.png`? GitHub Pages serves Next's extensionless
  `/opengraph-image` route with the wrong content-type, so crawlers reject it. A
  real `.png` referenced by absolute URL works everywhere.
- After publishing, re-scrape via LinkedIn Post Inspector / opengraph.xyz —
  platforms cache aggressively.

## Notes
- If the user describes something that doesn't fit an existing section, ask
  whether to add it to the closest section or propose a new one.
