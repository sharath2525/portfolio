# Sharath Chandra — GenAI Engineering Portfolio

[![Portfolio](public/og.png)](https://sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site)

A production-focused portfolio showcasing applied generative AI, RAG applications, agentic workflows, browser extensions, automation, and backend engineering.

[View the live portfolio](https://sharath-chandra-portfolio.sharathprvtairdrops.chatgpt.site) · [GitHub profile](https://github.com/sharath2525) · [LinkedIn](https://linkedin.com/in/d-sharath-chandra)

## Focus

- Applied GenAI products built around real user problems
- Retrieval-augmented generation and LLM integrations
- Agentic workflows and AI-assisted automation
- Python, TypeScript, APIs, and workflow orchestration
- Production reliability, observability, and safe delivery

## Featured work

- **IPO Fast Check** — Mobile-first Indian IPO allotment and market-information utility
- **Claude Limit Guard** — Privacy-conscious browser extension for Claude usage visibility
- **AI Context Capsule** — Reusable context and structured summaries across AI conversations
- **Hyperliquid AI Trading Agent** — Technical-signal pipeline with a structured AI analysis gate
- **IQ Quiz Contest** — Open-source wallet-aware Base mini app with timed logic challenges

Each project card links to its live experience, source repository, or store listing when available.

## Technology

- React 19 and TypeScript
- Vinext and Vite
- Nitro adapter for Vercel
- CSS with responsive layouts and accessible interaction states
- Lucide icons
- Open Graph, structured data, robots, and sitemap metadata

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run lint
npm run build
```

Vercel-compatible build:

```bash
$env:NITRO_PRESET="vercel" # PowerShell
npm run build:vercel
```

On macOS or Linux:

```bash
NITRO_PRESET=vercel npm run build:vercel
```

## Content updates

Portfolio records are centralized in `app/content.ts`:

- Profile and contact links
- Projects
- Skill groups and logos
- Experience
- Education
- Publication

Images and documents live under `public/`. Layout and page copy are in `app/page.tsx`, metadata is in `app/layout.tsx`, and responsive styling is in `app/globals.css`.

For detailed maintenance instructions, see [`docs/PORTFOLIO-MAINTENANCE.md`](docs/PORTFOLIO-MAINTENANCE.md).

## Deployment

The repository includes a Vercel build adapter and secure response headers in `vercel.json`. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the GitHub, Vercel, and GoDaddy custom-domain checklist.

Set this public environment variable in Vercel after connecting the final domain:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Never commit `.env` files, API keys, access tokens, private keys, or service credentials. The included `.gitignore` excludes common secret and local-state files.

## Project structure

```text
app/                   Portfolio page, content, metadata, and styles
public/projects/       Project screenshots
public/skills/         Skill and technology logos
docs/                  Maintenance and deployment guides
vite.config.ts         Sites and Vercel build adapters
vercel.json            Vercel build and security-header configuration
```

## License

The source and visual design are provided for this personal portfolio. No reuse license is granted unless the owner provides one separately.
