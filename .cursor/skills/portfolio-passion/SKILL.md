---
name: portfolio-passion
description: >-
  Add or update a passion on Dhiraj's portfolio — dance, tennis, skiing,
  connection building, or a brand-new passion. Use when the user did something
  in a hobby/passion (a performance, match, trip, event) and wants it on their
  site, including a hero image/video, a first-person story, and stats. Edits
  portfolio/data/passions.ts.
---

# Portfolio · Passions

Edit `portfolio/data/passions.ts`. Each passion is a **tab** with a hero
image/video, a first-person story, stats, and optional links. Existing tabs:
`dance`, `tennis`, `skiing`, `connection`.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Two modes
1. **Update an existing passion** (most common): refresh the story, bump stats,
   add a new link/media for something they just did.
2. **Add a new passion**: append a new `Passion` object (becomes a new tab).

## Fields (type `Passion` in data/types.ts)
- `id`, `title`, `tagline`
- `story` — first-person, in THEIR voice (this is the heart of the section)
- `media?` — `{ type: "image" | "video", src, poster?, alt? }`
- `stats[]` — `{ label, value }` (3 reads best)
- `links?[]` — `{ label, href }` for Instagram/YouTube/etc.

## Interview
Ask: which passion (or new one), what happened / what they want to say, an
updated stat or two, and a photo/video or post link.

## Media (see umbrella for full rules)
- Local: drop in `portfolio/public/passions/<file>` → `src: "/passions/<file>"`.
- Video: set `type: "video"` (autoplays muted, looped); add a `poster` if available.
- Post links (Instagram/YouTube) go in `links`, not `media`.
- No media yet → omit `media`; a gradient fallback shows.

## Voice
The `story` must sound like the user. Capture their phrasing; lightly polish only
with their OK. Don't fabricate stats — ask for real numbers or leave "Add".

## Then
Save, then publish with `./build-site.sh` from the repo root (see `portfolio-update`).
