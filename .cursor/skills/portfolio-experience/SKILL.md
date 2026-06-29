---
name: portfolio-experience
description: >-
  Add or update a work-experience, education, or role entry on Dhiraj's
  portfolio. Use when the user mentions a new job, promotion, internship, team
  change, degree/MBA/course, or wants to edit a past role on their
  site/portfolio. Edits portfolio/data/experience.ts.
---

# Portfolio · Work Experience

Edit `portfolio/data/experience.ts`. Entries render as a vertical timeline,
**newest first**, so prepend new roles to the top of the array. This timeline
holds **both jobs and education** (e.g. the Sofia University MBA) — same shape;
use `role` for the degree and `highlights` for courses.

Follow the standard workflow in the `portfolio-update` skill. Section specifics:

## Fields (type `Experience` in data/types.ts)
- `id` — kebab-case, unique (e.g. `"google-l5"`)
- `company`, `role`, `team?`, `location`
- `start`, `end` — short format like `"Mar 2022"`; use `"Present"` for current
- `highlights[]` — 2–4 impact-first bullets (what changed, not just duties)
- `stack?[]` — key technologies
- `accent?` — brand hex (fallback for the timeline node if no logo)
- `logo?` — company/school logo at `/companies/<file>` (drop file in
  `portfolio/public/companies/`); shown as the circular timeline node

## Interview
Ask: company/school, title/degree, team/org/program, location, start & end
dates, 2–4 things you did/shipped or courses taken, stack/focus areas, a logo
(image link or file), and a brand color if they care. Skip anything already in
the prompt.

## Logo tip
If they only give a company/school name, you can usually grab a square mark from
the org's site favicon/apple-touch-icon (works well on the white node since it's
shown `object-contain`). Avoid white-on-transparent logos — they vanish on the
white node; prefer a colored mark.

## Education / degree example
```ts
{
  id: "sofia-mba",
  company: "Sofia University",
  role: "MBA",
  team: "Business Administration · Leadership",
  location: "Palo Alto, CA",
  start: "2026",
  end: "Present",
  highlights: [
    "Transpersonal Psychology — leading with self-awareness and growing beyond the ego.",
    "Operations — designing systems and processes that scale.",
    "Marketing — understanding what people truly need, and how to win over stakeholders.",
  ],
  stack: ["Leadership", "Psychology", "Operations", "Marketing"],
  accent: "#6B2FA0",
  logo: "/companies/sofia.png",
}
```
A degree often also seeds a **goal** (`portfolio-goal`) — offer to add one.

## Voice
Keep bullets in the user's words; tighten to impact-first phrasing only with
their OK. Don't invent metrics — ask "any numbers you want to include?"

## Then
Prepend the new object, keep types valid, then publish with `./build-site.sh` from the repo root (see `portfolio-update`).
