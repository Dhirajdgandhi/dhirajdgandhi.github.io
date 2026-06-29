---
name: portfolio-thought
description: >-
  Add a thought / note / short post to Dhiraj's portfolio. Use when the user
  wants to publish a reflection, idea, or link to a post on their site. Edits
  portfolio/data/thoughts.ts.
---

# Portfolio · Thoughts

Edit `portfolio/data/thoughts.ts`. Entries render as a list, **newest first** —
prepend new ones.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Thought` in data/types.ts)
- `id` — kebab-case, unique
- `title` — short and specific
- `excerpt` — 1–2 sentences capturing the idea
- `date` — e.g. `"2026"`
- `href?` — link to the full post (omit or `"#"` if none yet)
- `tags?[]` — short lowercase tags

## Interview
Ask: the title, the gist (in their words), a date, a link if it exists, and a
couple of tags.

## Voice
This is the user thinking out loud — preserve their phrasing and point of view.
Polish only with their OK; never replace their take with a generic one.

## Then
Prepend the object, then publish with `./build-site.sh` from the repo root (see `portfolio-update`).
