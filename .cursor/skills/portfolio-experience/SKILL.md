---
name: portfolio-experience
description: >-
  Add or update a work-experience / role entry on Dhiraj's portfolio. Use when
  the user mentions a new job, promotion, internship, team change, or wants to
  edit a past role on their site/portfolio. Edits portfolio/data/experience.ts.
---

# Portfolio · Work Experience

Edit `portfolio/data/experience.ts`. Entries render as a vertical timeline,
**newest first**, so prepend new roles to the top of the array.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Experience` in data/types.ts)
- `id` — kebab-case, unique (e.g. `"google-l5"`)
- `company`, `role`, `team?`, `location`
- `start`, `end` — short format like `"Mar 2022"`; use `"Present"` for current
- `highlights[]` — 2–4 impact-first bullets (what changed, not just duties)
- `stack?[]` — key technologies
- `accent?` — brand hex (fallback for the timeline node if no logo)
- `logo?` — company logo at `/companies/<file>` (drop file in
  `portfolio/public/companies/`); shown as the circular timeline node

## Interview
Ask: company, title, team/org, location, start & end dates, 2–4 things you
actually did/shipped (impact + scale if known), tech stack, a company logo
(image link or file), and a brand color if they care.

## Voice
Keep bullets in the user's words; tighten to impact-first phrasing only with
their OK. Don't invent metrics — ask "any numbers you want to include?"

## Then
Prepend the new object, keep types valid, run `npm run build` in `portfolio/`.
