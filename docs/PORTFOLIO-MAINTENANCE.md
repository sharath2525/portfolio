# Sharath Chandra — Internal Portfolio Maintenance Guide

This repository contains the source for Sharath Chandra's personal portfolio.

Live website: [sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site](https://sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site)

The site uses React, TypeScript, Vinext, and CSS. Most normal content updates do **not** require editing the page layout. Personal information, projects, skills, experience, education, and publication data are kept together in `app/content.ts`.

## Quick file map

| What you want to change | File or folder |
| --- | --- |
| Name, email, role, GitHub, LinkedIn | `app/content.ts` → `profile` |
| Projects and project links | `app/content.ts` → `projects` |
| Skill groups and skill logos | `app/content.ts` → `skillGroups` |
| Experience, education, publication | `app/content.ts` |
| Hero text, about text, focus cards, hero logos | `app/page.tsx` |
| Navigation links and section order | `app/page.tsx` |
| Website title and social-sharing description | `app/layout.tsx` |
| Colors, spacing, card sizes, typography, mobile layout | `app/globals.css` |
| Project screenshots | `public/projects/` |
| Skill logo files | `public/skills/` |
| Downloadable résumé | `public/sharath-chandra-resume.pdf` |
| Browser icon | `public/favicon.svg` |
| Social-sharing image | `public/og.png` |

## Run the website locally

Requirements:

- Node.js 22.13 or newer
- npm

Install dependencies once:

```bash
npm install
```

Start the local development website:

```bash
npm run dev
```

Open the local URL printed in the terminal. Changes normally appear automatically after saving a file.

Before publishing, check that the production build succeeds:

```bash
npm run build
```

Optional checks:

```bash
npm run lint
npm run format
```

## Update personal and contact information

Open `app/content.ts` and edit the `profile` object at the top:

```ts
export const profile = {
  name: 'Your Full Name',
  shortName: 'Your Display Name',
  role: 'Your Current Official Role',
  targetRole: 'Your Target Role',
  location: 'City, Country',
  email: 'you@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-profile',
};
```

These values are reused in the navigation, social links, contact section, metadata, and email buttons.

Important:

- Keep complete URLs beginning with `https://`.
- Do not remove commas between properties.

## Add a new project

All projects are stored in the `projects` array in `app/content.ts`. Every project automatically receives the same card width, image height, information layout, and responsive behavior. There is no `layout`, `wide`, `tall`, or `featured` setting.

### Step 1: Add the screenshot

Save a clear screenshot in `public/projects/`.

Recommended image rules:

- Use PNG, JPG, JPEG, or WebP.
- A landscape image around 1600 × 1000 pixels works well.
- Keep the important interface near the center because the card uses `object-fit: cover`.
- Use a lowercase, hyphenated filename such as `expense-tracker.png`.
- Avoid spaces in filenames.

### Step 2: Copy a project object

Copy one existing object inside the `projects` array and replace its values:

```ts
{
  number: '06',
  title: 'Expense Tracker',
  label: 'Finance Application',
  tagline: 'Understand spending without spreadsheet work.',
  description:
    'A responsive expense tracker with category analytics, monthly summaries, and exportable reports.',
  stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker'],
  highlights: ['Category analytics', 'CSV export', 'Responsive dashboard'],
  image: '/projects/expense-tracker.png',
  year: '2026',
  status: 'Live product',
  links: [
    { label: 'Live website', href: 'https://example.com', type: 'live' },
    {
      label: 'Source code',
      href: 'https://github.com/your-username/expense-tracker',
      type: 'code',
    },
  ],
},
```

### Project field reference

| Field | Purpose |
| --- | --- |
| `number` | Display order such as `01`, `02`, or `06` |
| `title` | Main project name |
| `label` | Short category shown above the title |
| `tagline` | One-sentence product promise |
| `description` | What the project does and why it is useful |
| `stack` | Technology badges displayed on the card |
| `highlights` | Three important features or outcomes |
| `image` | Path beginning with `/projects/` |
| `year` | Project year |
| `status` | Examples: `Live product`, `Open source`, `In development` |
| `links` | Live demo, store listing, and/or source-code buttons |

Link types currently supported by the page are:

- `type: 'live'` — displays the external-link icon.
- `type: 'code'` — displays the code icon.

A project can have only source code, only a live link, or both. Remove an unwanted link object instead of leaving its URL empty.

### Reorder or remove projects

- To reorder projects, move complete project objects up or down inside the array.
- To remove a project, delete its complete object from the opening `{` through its closing `},`.
- Renumber the remaining projects after reordering.
- Do not edit project card sizes when adding a project; the grid handles them automatically.

## Add a new skill or logo

Skills are stored in the `skillGroups` array in `app/content.ts`.

### Step 1: Add the logo file

Save the logo in `public/skills/`.

Recommended logo rules:

- SVG is preferred because it stays sharp at every screen size.
- PNG is also supported; use a transparent background.
- Use a lowercase filename, for example `typescript.svg`.
- Use official brand artwork when possible.
- Do not rename an existing logo unless you also update every matching path in the code.

### Step 2: Add the skill entry

Add one object inside the required group's `skills` array:

```ts
{ name: 'TypeScript', icon: '/skills/typescript.svg' },
```

Example skill group:

```ts
{
  number: '05',
  title: 'Frontend Engineering',
  description: 'Accessible interfaces and responsive product experiences.',
  skills: [
    { name: 'TypeScript', icon: '/skills/typescript.svg' },
    { name: 'React', icon: '/skills/react.svg' },
  ],
},
```

To move a skill, move its entire `{ name, icon }` object to another group's `skills` array. To remove it, delete that object. Skill cards and logo tiles resize automatically.

## Change the six hero technology logos

The floating logos around the `AI` circle are controlled by `heroTechnologies` near the top of `app/page.tsx`:

```ts
const heroTechnologies = [
  { name: 'Python', icon: '/skills/python.svg' },
  { name: 'LangChain', icon: '/skills/langchain.svg' },
  { name: 'n8n', icon: '/skills/n8n.svg' },
  { name: 'Docker', icon: '/skills/docker.svg' },
  { name: 'Anthropic', icon: '/skills/anthropic.svg' },
  { name: 'AWS', icon: '/skills/amazonwebservices.svg' },
];
```

Keep this list at six items unless you also add positioning rules for additional icons in `app/globals.css`. The existing positions use `.hero-tech-icon:nth-child(1)` through `.hero-tech-icon:nth-child(6)`.

## Update hero and about content

Open `app/page.tsx`.

The following text is written directly in the page component:

- Main name and arrow in the hero heading
- Hero role
- Hero introduction
- Main action-button labels
- `Current system state` panel content
- Hero statistics
- Moving technology ticker
- About heading and paragraphs

Search for the exact visible sentence you want to replace. Keep the surrounding HTML tags unchanged unless you intend to change the structure.

The four About focus cards come from `focusAreas` near the top of `app/page.tsx`:

```ts
const focusAreas = [
  {
    icon: Bot,
    label: 'GenAI systems',
    detail: 'RAG, agents, LLM integration',
  },
];
```

Icons are imported from `lucide-react`. When using a new Lucide icon, add it to the import list at the top of `app/page.tsx` and then reference it in `focusAreas`.

## Update experience

Edit `experience` in `app/content.ts`:

```ts
export const experience = {
  company: 'Company Name',
  role: 'Job Title',
  location: 'City, Country',
  period: 'Month Year — Present',
  summary: 'A concise overview of the role and its impact.',
  highlights: [
    'First responsibility or achievement.',
    'Second responsibility or achievement.',
  ],
};
```

Each highlight automatically becomes a separate row. Keep each highlight concise and begin it with a strong action verb.

The current page is designed for one primary experience. Adding multiple positions requires changing the rendering structure in `app/page.tsx`, not only duplicating this object.

## Update education and publication

Edit these objects in `app/content.ts`:

```ts
export const education = {
  degree: 'Degree Name',
  school: 'College or University',
  period: '2020 — 2024',
  score: 'CGPA 7.03',
};

export const publication = {
  title: 'Publication Title',
  venue: 'Journal or Conference',
  year: '2026',
};
```

Like experience, the current design displays one education card and one publication card. Multiple records require a small layout change in `app/page.tsx`.

## Replace the résumé

Replace `public/sharath-chandra-resume.pdf` with the new PDF while keeping the same filename. The existing Download Résumé link will continue working automatically.

If you use a different filename, also change this path in `app/page.tsx`:

```tsx
href="/sharath-chandra-resume.pdf"
```

Always test the download after replacing the file.

## Navigation and section IDs

Navigation links in `app/page.tsx` use page anchors:

```tsx
<a href="#work">Work</a>
```

The destination section must use the matching ID:

```tsx
<section id="work">
```

Current IDs:

| Navigation target | Section ID |
| --- | --- |
| Home | `top` |
| About | `about` |
| Work | `work` |
| Skills | `skills` |
| Experience | `experience` |
| Education | `education` |
| Contact | `contact` |

When adding a new section, give it a unique ID and add a matching navigation link. Do not use spaces inside IDs.

## Change website title and social-sharing text

Edit `metadata` in `app/layout.tsx` to update:

- Browser-tab title
- Search and sharing description
- Open Graph title and description
- X/Twitter card title and description
- Social image alt text

The social preview image is `public/og.png`. Replace it only when the visual brand or headline changes. Keep it landscape and verify that all text remains readable at small sizes.

The browser icon is `public/favicon.svg`.

## Change colors and overall theme

The main reusable colors are at the top of `app/globals.css` inside `:root`:

```css
:root {
  --background: #f1efe7;
  --foreground: #151714;
  --secondary: #d8ff4f;
  --muted-foreground: #5d6059;
  --accent: #ff694d;
  --border: #bcb9ae;
}
```

Primary controls:

| Variable | Used for |
| --- | --- |
| `--background` | Main page background |
| `--foreground` | Main text and strong borders |
| `--secondary` | Lime highlight color |
| `--accent` | Coral accent, arrows, and hover details |
| `--muted-foreground` | Secondary paragraph text |
| `--border` | Default borders |
| `--radius` | Shared corner radius token |

Some sections intentionally use direct colors such as `#181a17`. Search `app/globals.css` for that color if you want to change all dark surfaces.

If dark mode is enabled later, update the matching values inside `.dark` as well.

## Change specific layout areas

Use these CSS selectors in `app/globals.css`:

| Area | Important selectors |
| --- | --- |
| Site maximum width | `.site-shell` |
| Top navigation | `.topbar`, `.nav-links`, `.availability` |
| Hero columns and spacing | `.hero`, `.hero-copy`, `.hero-panel` |
| Hero title | `.hero h1` |
| Reusable section spacing | `.section` |
| About focus cards | `.focus-grid`, `.focus-card` |
| Project grid columns and gaps | `.projects-bento` |
| Project card size | `.project-showcase` |
| Project image height | `.project-media` |
| Project text area | `.project-info` |
| Skill-group columns | `.skills-table` |
| Skill logo tiles | `.skill-logo-grid`, `.skill-logo` |
| Experience section | `.section-experience`, `.experience-*` |
| Education/publication cards | `.learning-grid`, `.learning-card` |
| Contact section | `.section-contact`, `.contact-grid` |

Project cards deliberately use one standard size. If you change `.project-showcase` or `.project-media`, every project changes together.

## Responsive behavior

Responsive rules are near the bottom of `app/globals.css`:

- Above 900px: three project columns.
- From 561px to 900px: two project columns.
- At 560px and below: one project column with mobile spacing.

When changing desktop CSS, also inspect the `@media (max-width: 900px)` and `@media (max-width: 560px)` sections. A desktop-only fix can otherwise create a mobile problem.

Test at approximately these widths:

- 1440px desktop
- 1024px small laptop/tablet landscape
- 768px tablet
- 390px mobile

## Add an entirely new section

1. Add the new content data to `app/content.ts` if it is repeatable or likely to change.
2. Import that data in `app/page.tsx`.
3. Add a `<section>` with a unique `id` in the desired location.
4. Add a matching navigation link if the section should appear in navigation.
5. Add section-specific styles in `app/globals.css`.
6. Add tablet and mobile rules if needed.
7. Run `npm run build`.
8. Check every navigation link, image, external URL, and mobile layout.

## Common mistakes and fixes

### An image does not display

- Confirm the file exists under `public/`.
- Paths must start with `/`, for example `/projects/my-project.png`.
- Match uppercase and lowercase letters exactly.
- Include the file extension.

### A project causes a build error

- Check every quote, comma, `{`, `}`, `[`, and `]`.
- Keep text inside quotes.
- Ensure `stack`, `highlights`, and `links` remain arrays.
- Copy a working project object instead of writing one from memory.

### A button opens the wrong page

- Use complete external URLs beginning with `https://`.
- Do not reuse another project's URL after copying its object.

### A skill logo looks too small or too large

- Prefer a tightly cropped SVG with a transparent background.
- Avoid logos that contain large invisible padding.
- Global logo dimensions are controlled by `.skill-logo img`.

### Hero logos overlap

- Keep `heroTechnologies` at six items.
- If adding more, create a new `.hero-tech-icon:nth-child(...)` position for each one.

### A navigation link does nothing

- Make sure its `href="#name"` exactly matches a section's `id="name"`.

## Safe editing checklist

Before publishing:

- [ ] The local page loads without an error.
- [ ] `npm run build` succeeds.
- [ ] Every project has the correct screenshot.
- [ ] Every live and source-code URL opens the intended project.
- [ ] Project numbers are ordered correctly.
- [ ] Skill names match their logos.
- [ ] Email, GitHub, and LinkedIn links are correct.
- [ ] Résumé download works.
- [ ] Desktop, tablet, and mobile layouts remain readable.
- [ ] No unfinished placeholder text remains.
- [ ] No private API keys, passwords, or personal secrets were added to the repository.

## Publishing future changes

After editing, run:

```bash
npm run build
```

Then push the update to GitHub for an automatic Vercel deployment, or ask Codex to publish the updated portfolio. A useful request is:

> Update my existing portfolio from the current files, verify all checks, and publish it through the connected production host.

For a new project, you can provide Codex with:

- GitHub repository URL
- Live website URL, if available
- Project screenshot
- Preferred project name and status
- Any features you particularly want highlighted

Codex can then add the project using the existing equal-size card system and publish it.

## Repository structure

```text
Portfolio/
├── app/
│   ├── content.ts        # Editable portfolio records
│   ├── globals.css       # Theme, layout, cards, and responsive rules
│   ├── layout.tsx        # Fonts and website metadata
│   └── page.tsx          # Page structure and sections
├── public/
│   ├── projects/         # Project screenshots
│   ├── skills/           # Technology logos
│   ├── favicon.svg       # Browser icon
│   ├── og.png            # Social-sharing image
│   └── sharath-chandra-resume.pdf
├── package.json          # Commands and dependencies
├── README.md             # Public GitHub project overview
└── docs/
    ├── PORTFOLIO-MAINTENANCE.md  # This internal guide
    └── DEPLOYMENT.md             # GitHub, Vercel, and GoDaddy guide
```

## Recommended editing approach

For normal updates, begin with `app/content.ts`. Only edit `app/page.tsx` when changing page wording, section structure, navigation, focus cards, or hero logos. Edit `app/globals.css` only when changing the visual design or responsive behavior.

Keeping content, structure, and styling separate makes future updates safer:

- `content.ts` = what the website says
- `page.tsx` = where each section appears
- `globals.css` = how everything looks
- `public/` = images, logos, résumé, and branding assets
