export const profile = {
  name: 'Donthula Sharath Chandra',
  shortName: 'Sharath Chandra',
  role: 'Jr. Software Engineer',
  location: 'Hyderabad, India',
  email: 'donthulasharath25@gmail.com',
  phone: '+91 70321 58014',
  github: 'https://github.com/sharath2525',
  linkedin: 'https://linkedin.com/in/d-sharath-chandra',
};

export const projects = [
  {
    number: '01',
    title: 'Document Q&A Chatbot',
    label: 'Retrieval-Augmented Generation',
    description:
      'A PDF-grounded assistant that retrieves semantically relevant document chunks and constrains LLM answers to the source context.',
    stack: ['Python', 'Sentence Transformers', 'ChromaDB', 'Streamlit'],
    status: 'Project details ready — repository link coming next',
    tone: 'lime',
  },
  {
    number: '02',
    title: 'AI Incident Triage & RCA',
    label: 'Agentic Support Operations',
    description:
      'An AI-powered triage agent that finds similar historical incidents, classifies severity, drafts RCA reports, and routes escalation decisions by confidence.',
    stack: ['Python', 'OpenAI Function Calling', 'ChromaDB', 'Flask'],
    status: 'Project details ready — repository link coming next',
    tone: 'coral',
  },
  {
    number: '03',
    title: 'LLM Workflow Automation',
    label: 'Structured Orchestration',
    description:
      'An n8n workflow that ingests events, processes them through an LLM API, and delivers structured output through secure webhook-based integrations.',
    stack: ['n8n', 'OpenAI API', 'Webhooks', 'Environment Secrets'],
    status: 'Project details ready — repository link coming next',
    tone: 'ink',
  },
  {
    number: '04',
    title: 'Automation Micro-Systems',
    label: 'Four Focused Builds',
    description:
      'A practical collection spanning a WhatsApp support bot, SSL certificate monitoring, LLM-assisted web scraping, and automated email response routing.',
    stack: ['n8n', 'LLM APIs', 'WhatsApp', 'Monitoring'],
    status: 'Individual case studies can be added later',
    tone: 'cream',
  },
] as const;

export const skillGroups = [
  {
    number: '01',
    title: 'Generative AI',
    skills: [
      'RAG', 'Agentic AI', 'Prompt Engineering', 'LangChain', 'LangGraph',
      'OpenAI', 'Claude', 'Gemini', 'Llama', 'Hugging Face', 'Embeddings', 'Vector Search',
    ],
  },
  {
    number: '02',
    title: 'Automation & Backend',
    skills: [
      'Python', 'Flask', 'REST APIs', 'Webhooks', 'n8n', 'Power Automate',
      'PowerShell', 'OpenAI Function Calling', 'Streamlit',
    ],
  },
  {
    number: '03',
    title: 'Data & Engineering',
    skills: [
      'Oracle SQL', 'SQL', 'ChromaDB', 'Pandas', 'NumPy', 'JavaScript',
      'Java', '.NET', 'Git', 'Docker', 'Linux', 'AWS',
    ],
  },
  {
    number: '04',
    title: 'Production Operations',
    skills: [
      'ServiceNow', 'JIRA', 'Dynatrace', 'Incident Management', 'RCA', 'CAPA',
      'SLA Management', 'Log Analysis', 'Testing', 'GxP', 'ITIL',
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
