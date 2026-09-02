export const profile = {
  name: 'Donthula Sharath Chandra',
  shortName: 'Sharath Chandra',
  role: 'Jr. Software Engineer',
  targetRole: 'GenAI Engineer & AI Automation Builder',
  location: 'Hyderabad, India',
  email: 'donthulasharath25@gmail.com',
  github: 'https://github.com/sharath2525',
  linkedin: 'https://linkedin.com/in/d-sharath-chandra',
};

// ADDING A PROJECT
// 1. Copy one complete object inside this array.
// 2. Change its number, title, text, image, stack, highlights, status, and links.
// 3. Save the project screenshot inside public/projects and use its path below.
// Every project automatically uses the same responsive card size—no layout setting is needed.
export const projects = [
  {
    number: '01',
    title: 'IPO Fast Check',
    label: 'Fintech Utility',
    tagline: 'One IPO. One PAN. Quick allotment result.',
    description:
      'A fast, mobile-first product for checking Indian IPO allotment status and following live GMP, price bands, dates, lot sizes, and estimated listing prices.',
    stack: ['Next.js', 'TypeScript', 'Cheerio', 'Server APIs', 'Vercel'],
    highlights: ['Live IPO data', 'Privacy-first PAN flow', 'Registrar fallbacks'],
    image: '/projects/ipoinfo.png',
    year: '2026',
    status: 'Live product',
    links: [
      { label: 'Live website', href: 'https://ipoinfo.online', type: 'live' },
      { label: 'Source code', href: 'https://github.com/sharath2525/Ipoinfo', type: 'code' },
    ],
  },
  {
    number: '02',
    title: 'Claude Limit Guard',
    label: 'Browser Extension',
    tagline: 'Usage limits, exactly where they matter.',
    description:
      'A hardened Chrome and Edge extension that adds live Claude session and weekly usage bars with reset countdowns—without trackers, storage, or broad browser permissions.',
    stack: ['JavaScript', 'Manifest V3', 'Claude API', 'Chrome', 'Edge'],
    highlights: ['Zero permissions', 'No tracking', 'Live reset countdown'],
    image: '/projects/claude-limit-guard.png',
    year: '2026',
    status: 'Chrome Web Store',
    links: [
      { label: 'Chrome store', href: 'https://chromewebstore.google.com/detail/claude-limit-guard/njmlhjabppkblfpcepmikdnejoehdgki', type: 'live' },
      { label: 'Source code', href: 'https://github.com/sharath2525/Claude-Limit-Guard', type: 'code' },
    ],
  },
  {
    number: '03',
    title: 'AI Context Capsule',
    label: 'AI Productivity Extension',
    tagline: 'Carry useful context between AI conversations.',
    description:
      'A Chrome extension that captures ChatGPT and Claude conversations, creates structured smart summaries, and injects reusable context into new chats.',
    stack: ['JavaScript', 'Manifest V3', 'LLM APIs', 'Chrome Storage', 'PDF Export'],
    highlights: ['Raw + smart capsules', 'Multi-provider APIs', 'Context injection'],
    image: '/projects/ai-context-capsule.png',
    year: '2026',
    status: 'Open source',
    links: [
      { label: 'Source code', href: 'https://github.com/sharath2525/AIContextCapsule', type: 'code' },
    ],
  },
  {
    number: '04',
    title: 'Hyperliquid AI Trading Agent',
    label: 'Agentic Market System',
    tagline: 'Code-first signals with an AI analysis gate.',
    description:
      'A perpetual futures research and execution system where technical signals determine direction and risk, while Claude performs structured confluence analysis before qualified trades.',
    stack: ['Python', 'Claude', 'Hyperliquid', 'Technical Analysis', 'Risk Controls'],
    highlights: ['Multi-timeframe signals', 'Fail-closed AI gate', 'Eight risk guards'],
    image: '/projects/trading-bot-architecture.png',
    year: '2026',
    status: 'Open source',
    links: [
      { label: 'Source code', href: 'https://github.com/sharath2525/Trading-bot', type: 'code' },
    ],
  },
  {
    number: '05',
    title: 'IQ Quiz Contest',
    label: 'Base Mini App',
    tagline: 'Timed logic challenges with on-chain access.',
    description:
      'A mobile-optimized IQ quiz mini app with multiple categories, wallet-aware profiles, Base payments, timed challenges, and detailed answer breakdowns.',
    stack: ['Next.js', 'TypeScript', 'Base', 'Farcaster', 'Wagmi'],
    highlights: ['Wallet integration', 'On-chain payments', 'Mobile-first quiz flow'],
    image: '/projects/iq-quiz.png',
    year: '2026',
    status: 'Open source',
    links: [
      { label: 'Source code', href: 'https://github.com/sharath2525/v0-iq-quiz-base-app', type: 'code' },
    ],
  },
] as const;

export const skillGroups = [
  {
    number: '01',
    title: 'AI Systems',
    description: 'Models, orchestration, embeddings, and interfaces for grounded AI products.',
    skills: [
      { name: 'Anthropic Claude', icon: '/skills/anthropic.svg' },
      { name: 'Google Gemini', icon: '/skills/googlegemini.svg' },
      { name: 'LangChain', icon: '/skills/langchain.svg' },
      { name: 'Hugging Face', icon: '/skills/huggingface.svg' },
    ],
  },
  {
    number: '02',
    title: 'Automation & Backend',
    description: 'APIs and workflows that turn repetitive operations into dependable systems.',
    skills: [
      { name: 'n8n', icon: '/skills/n8n.svg' },
      { name: 'Python', icon: '/skills/python.svg' },
      { name: 'Flask', icon: '/skills/flask.svg' },
      { name: 'Streamlit', icon: '/skills/streamlit.svg' },
    ],
  },
  {
    number: '03',
    title: 'Software & Data',
    description: 'Application code, data validation, deployment, and maintainable delivery.',
    skills: [
      { name: 'JavaScript', icon: '/skills/javascript.svg' },
      { name: '.NET', icon: '/skills/dotnet.svg' },
      { name: 'Oracle', icon: '/skills/oracle.svg' },
      { name: 'Docker', icon: '/skills/docker.svg' },
    ],
  },
  {
    number: '04',
    title: 'Production Reliability',
    description: 'Observability, incident response, safe delivery, and cloud foundations for dependable AI systems.',
    skills: [
      { name: 'Linux', icon: '/skills/linux.svg' },
      { name: 'AWS', icon: '/skills/amazonwebservices.svg' },
      { name: 'Git', icon: '/skills/git.svg' },
      { name: 'Jira', icon: '/skills/jira.svg' },
      { name: 'Dynatrace', icon: '/skills/dynatrace.svg' },
    ],
  },
] as const;

export const experience = {
  company: 'Cognizant Technology Solutions',
  role: 'Jr. Software Engineer',
  location: 'Hyderabad, India',
  period: 'October 2024 — Present',
  summary:
    'Supporting healthcare applications in a GxP-regulated environment while improving operations through automation and applied generative AI.',
  highlights: [
    'Resolve P1–P3 incidents, service requests, and problem tickets through ServiceNow and JIRA while maintaining SLA discipline.',
    'Use Dynatrace, application logs, alerts, transaction flows, and Oracle SQL to diagnose production issues and validate data.',
    'Coordinate upgrades and releases, perform unit and integration testing, and support post-deployment production monitoring.',
    'Build PowerShell and Power Automate workflows that reduce repetitive effort in support and application-upgrade operations.',
    'Apply ChatGPT and Microsoft Copilot to log summarization, RCA documentation, and first-level triage experiments.',
  ],
};

export const education = {
  degree: 'Bachelor of Technology, Information Technology',
  school: 'Vardhaman College of Engineering, Hyderabad',
  period: '2020 — 2024',
  score: 'CGPA 7.03',
};

export const publication = {
  title: 'Personalized Mental Health Analysis Using AI',
  venue: 'IEEE ADICS International Conference',
  year: '2024',
};
