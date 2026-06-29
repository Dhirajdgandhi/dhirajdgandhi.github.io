---
name: portfolio-project
description: >-
  Add or update a technical side-project on Dhiraj's portfolio ("side quests").
  Use when the user builds or ships a project and wants it featured, with a tech
  stack, description, and repo/demo links. Edits portfolio/data/projects.ts.
---

# Portfolio · Technical Projects (Side Quests)

Edit `portfolio/data/projects.ts`. Entries render as hover-lift cards.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Project` in data/types.ts)
- `id` — kebab-case, unique
- `title`, `description` (1–2 sentences, what it is + why interesting)
- `stack[]` — technologies used (these become tags)
- `year?`
- `repo?` — GitHub URL · `demo?` — live URL (omit or `"#"` if none)
- `featured?` — true to highlight

## Interview
Ask: project name, what it does, the stack, year, repo link, live demo link, and
whether to feature it.

## Voice
Keep the description in the user's voice — concrete over buzzwordy. Don't overclaim.

## Then
Append (or prepend if newest), run `npm run build` in `portfolio/`.
