---
name: portfolio-update
description: >-
  Add or update content on Dhiraj's personal portfolio (the Next.js app in
  portfolio/). Use whenever the user says they did something new and want it on
  their site/portfolio — a new job/role, a recommendation or person they worked
  with, a passion update (dance, tennis, skiing, connection building), a new
  goal, a thought/post, or a side-project. Routes to the right section skill,
  interviews the user, refines copy in their own voice, collects image/video
  links, edits the typed data file, and verifies the build.
---

# Portfolio Update

The portfolio is a Next.js + Tailwind + Framer Motion app at `portfolio/`.
All content lives in typed arrays under `portfolio/data/`, decoupled from UI.
**You only ever edit `portfolio/data/*.ts`** — never the components — unless the
user explicitly asks for a design change.

## Section → file → skill map

| The user is adding… | Data file | Section skill |
|---|---|---|
| A job / role | `portfolio/data/experience.ts` | `portfolio-experience` |
| A person / recommendation | `portfolio/data/people.ts` | `portfolio-people` |
| A passion update (dance, tennis, skiing, connection) | `portfolio/data/passions.ts` | `portfolio-passion` |
| A goal | `portfolio/data/goals.ts` | `portfolio-goal` |
| A thought / note / post | `portfolio/data/thoughts.ts` | `portfolio-thought` |
| A technical side project | `portfolio/data/projects.ts` | `portfolio-project` |

Types for every entry are in `portfolio/data/types.ts` — read it first so the
object you add matches the shape exactly.

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
Ask for an image or video link for sections that support it (passions; optional
elsewhere).
- **Local file**: tell the user to drop it in `portfolio/public/<section>/`
  (e.g. `portfolio/public/passions/skiing.jpg`) and set `src` to
  `/<section>/<file>` (leading slash, no `public`).
- **Remote URL** (Instagram, YouTube, a CDN): for passions, links go in the
  `links: []` array; for a hero image use a direct image/video URL as `src`.
- If no media yet, leave `media` out — the UI shows a clean gradient fallback.
- Videos use `type: "video"`; images use `type: "image"`.

### 5. Edit
Append (or prepend, for reverse-chronological sections like experience/thoughts)
a new typed object. Give it a unique, kebab-case `id`. Keep TypeScript valid.

### 6. Verify
From `portfolio/`, run `npm run build` (or rely on the running `npm run dev`).
Fix any type/lint errors. Report what changed and where.

## Notes
- The dev server may already be running on http://localhost:3000.
- Don't touch the user's other site at `dhirajdgandhi.github.io`.
- If the user describes something that doesn't fit an existing section, ask
  whether to add it to the closest section or propose a new one.
