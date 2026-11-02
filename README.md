# Disha Kataria · Portfolio

Personal portfolio for AI/ML, Data Science and Data Engineering roles.
Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # starts the dev server, usually at http://localhost:5173
```

Other scripts:

```bash
npm run typecheck  # TypeScript check only
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

## Where to edit content

All text and facts live in `src/data/`. You should rarely need to touch the components.

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, headline, intro, status label, email, social links, About text, nav order |
| `src/data/projects.ts` | Project cards in "The Data Laboratory" |
| `src/data/skills.ts` | Skill groups and skills |
| `src/data/education.ts` | Journey timeline, degree summary, school entries |
| `src/data/credentials.ts` | Certifications and Achievements |
| `src/data/types.ts` | The shape of every entry (all optional fields are documented here) |

### Add a project

Projects render as flip cards. Copy one object in `src/data/projects.ts` and edit it.

- **Front:** `title`, `category`, `dates`, `summary`, `frontTags`, `metrics` (headline result chips), and `visual` (`"nexora" | "verity" | "fraud" | "recommender" | "misinformation" | "forecast" | "none"`) or a real `image` placed in `public/projects/`.
- **Back:** `objective`, `dataset` (optional), `approach`, `evaluation`, `implementation`, `technologies`.
- `evaluation` is the model-comparison table. `columns` lists metric names; each row lists one value per column. **Use `null` for anything not recorded.** It shows as "—" with a "not yet recorded" note, never a guessed number. Set `highlight: true` on the model the headline result came from.
- The card back scrolls inside the card; the repository row stays pinned at the bottom.
- `liveUrl` adds a "Live demo" button next to the repository button.
- `githubUrl`: the back of the card shows "Repository link coming soon" until you set this to the real repository URL.
- `collaborative: true` labels team projects; `status` (e.g. "In development") adds a pill; `dates` is optional.
- The grid shows three cards per row on desktop and centres a short last row automatically.

### Add a certification

Add an object to `certifications` in `src/data/credentials.ts`. Set `status` to `"completed"` or `"ongoing"`.
Add `credentialUrl` only for a real verification link; a "View credential" link then appears.

### Add a skill

Skills live in `src/data/skills.ts` as six categories that follow the resume.
Tools go in a category's `shelves` and appear as potion bottles; methods and concepts go in `concepts`
and appear as small tags under the category heading.
Each category sets its `potion` accent colour. The symbol inside each bottle is chosen in
`src/components/skills/skillIcons.ts` (unlisted skills get a sparkle).
Panel placement and bottles per row are set in the `layout` map in `src/components/sections/Skills.tsx`.

### Hero and About text

`src/data/profile.ts` holds the hero copy (`welcome`, `heroTitle`, `tagline`, `heroIntro`) and the About copy
(`subtitle`, `lead`, `traits`, `quote`, `bookLabels` for the owl illustration's book spines).

### Journey

`journey` in `src/data/education.ts` is shown left to right in the order listed (currently newest first); the timeline adapts to any number of milestones. Each milestone picks an `icon`
(`"school" | "book" | "graduation" | "trophy"`).

## Structure

```
src/
  App.tsx                    page composition
  index.css                  theme, base styles, reduced-motion rules
  data/                      all content (edit here)
  hooks/useActiveSection.ts  active nav link while scrolling
  components/
    Navbar.tsx, Footer.tsx
    sections/                one file per page section
    ui/                      Section wrapper, Reveal animation, icons, accent colours
    skills/                  Skills lab: PotionBottle, SkillBottle (bottle + shelf + tooltip),
                             SkillCategory (panel), LabDecor, skillIcons
    art/                     original SVG illustrations: HeroScene (study + castle window),
                             OwlStudy, ProjectArt (card headers), Decor
    visuals/                 Atmosphere (layered backdrop), StarField (stars + dust)
public/favicon.svg
```

## Accessibility and motion

- Skip link, semantic landmarks, labelled sections, visible focus rings.
- Each project card front is a single button; the hidden face is made `inert`, focus moves to the revealed face, and Escape flips back.
- Mobile menu closes with Escape and on link selection.
- With "reduce motion" enabled in the OS, the background is static, the hero arch appears without drawing in, reveal animations are off, and cards cross-fade instead of rotating.
