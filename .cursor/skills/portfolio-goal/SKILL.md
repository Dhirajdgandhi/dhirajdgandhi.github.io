---
name: portfolio-goal
description: >-
  Add or update a goal on Dhiraj's portfolio. Use when the user sets a new goal,
  hits a milestone, or wants to change a goal's status on their site. Edits
  portfolio/data/goals.ts.
---

# Portfolio · Goals

Edit `portfolio/data/goals.ts`. Entries render as cards with a status badge.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Goal` in data/types.ts)
- `id` — kebab-case, unique
- `title`, `description` (1–2 sentences, first person)
- `horizon` — e.g. `"2026"`, `"Ongoing"`, `"Long-term"`
- `status` — one of `"exploring" | "in-progress" | "done"`

## Interview
Ask: the goal, a one-line why/what, the time horizon, and current status. Use
`AskQuestion` for status (exploring / in-progress / done).

## Voice
Keep it in the user's words and ambition level — don't inflate or genericize.

## Then
Append (or update an existing goal's `status`), then publish with `./build-site.sh` from the repo root (see `portfolio-update`).
