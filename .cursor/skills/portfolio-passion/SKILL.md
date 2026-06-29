---
name: portfolio-passion
description: >-
  Add or update a passion on Dhiraj's portfolio — dance, tennis, skiing,
  connection building, mentorship, or a brand-new passion. Use when the user did
  something in a hobby/passion (a performance, match, trip, event, mentoring) and
  wants it on their site, including a hero image / local video / YouTube embed
  with optional caption, a first-person story, and stats. Edits
  portfolio/data/passions.ts.
---

# Portfolio · Passions

Edit `portfolio/data/passions.ts`. Each passion is a **tab** with a hero
image / local video / YouTube embed, a first-person story, stats, and optional
links. Existing tabs: `dance`, `tennis`, `skiing`, `connection`, `mentorship`.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Two modes
1. **Update an existing passion** (most common): refresh the story, bump stats,
   add a new link/media for something they just did.
2. **Add a new passion**: append a new `Passion` object (becomes a new tab).

## Fields (type `Passion` in data/types.ts)
- `id`, `title`, `tagline`
- `story` — first-person, in THEIR voice (this is the heart of the section)
- `media?` — `{ type: "image" | "video" | "youtube", src, poster?, alt?, fit?, start?, end?, caption?, gallery? }`
  - `gallery?: { src, alt }[]` — extra images under the hero (e.g. a self + group
    pair). Hero = most representative shot; the rest go in `gallery`.
- `stats[]` — `{ label, value }` (3 reads best); `[]` is fine (block hides)
- `links?[]` — `{ label, href }` for Instagram/Topmate/articles/etc.

## Interview
Ask: which passion (or new one), what happened / what they want to say, an
updated stat or two, and a photo/video or post link. If the prompt already
contains these, don't re-ask — just organize them.

## Media (see umbrella for full rules)
- **Image**: `type: "image"`, local `src: "/passions/<file>"` or a URL.
  Use `fit: "contain"` for a screenshot/card that must show fully (e.g. the
  Topmate card → `topmate.png`); default `cover` crops to the 4:3 box.
- **Local video**: `type: "video"` (autoplays muted, looped); `start`/`end`
  trim (fraction of duration if ≤1, else seconds); add a `poster` if available.
- **YouTube**: `type: "youtube"`, `src` = the watch/share URL or 11-char id;
  `start`/`end` in seconds (e.g. "start at 5s" → `start: 5`). Plays with
  controls and sound (not muted autoplay).
- **`caption`**: short line under the media — pull from the prompt
  (e.g. "My most viewed video — 53K and counting").
- Other post links go in `links`, not `media`. No media yet → omit `media`.

### Examples
```ts
// YouTube with caption, starting at 5s
media: { type: "youtube", src: "https://www.youtube.com/watch?v=SC1XXnYLfvA", start: 5, caption: "My most viewed video — 53K and counting." }

// A card/screenshot shown in full (not cropped)
media: { type: "image", src: "/passions/topmate.png", alt: "Topmate profile", fit: "contain" }
```

## Voice
The `story` must sound like the user. Capture their phrasing; lightly polish only
with their OK. Don't fabricate stats — ask for real numbers or leave "Add".

## Then
Save, then publish with `./build-site.sh` from the repo root (see `portfolio-update`).
