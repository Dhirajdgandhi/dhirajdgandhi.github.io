---
name: portfolio-people
description: >-
  Add a person / recommendation / testimonial ("people I worked with") to
  Dhiraj's portfolio. Use when the user got a recommendation, wants to feature a
  colleague, manager, mentor, or collaborator on their site. Edits
  portfolio/data/people.ts.
---

# Portfolio · People I Worked With

Edit `portfolio/data/people.ts`. Entries render as quote cards.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Person` in data/types.ts)
- `id` — kebab-case, unique
- `name`, `title` (their role), `relationship` (e.g. "Manager at Google")
- `quote` — one or two genuine sentences in THEIR voice (the recommender's)
- `avatar?` — `/people/<file>.jpg` (drop file in `portfolio/public/people/`) or a URL
- `href?` — their LinkedIn / profile link

## Interview
Ask: who they are, their title, how you worked together, the exact quote/blurb
(paste verbatim — do not paraphrase someone else's words), a profile link, and
an optional photo.

## Voice
A quote from another person is **verbatim** — never reword it. Only fix obvious
typos with the user's OK.

## Then
Append the object, run `npm run build` in `portfolio/`.
