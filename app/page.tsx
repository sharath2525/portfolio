import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Mail,
  MapPin,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import {
  education,
  experience,
  profile,
  projects,
  publication,
  skillGroups,
} from './content';
import { siteUrl } from './site-config';

const focusAreas = [
  { icon: Bot, label: 'RAG & LLM apps', detail: 'Grounded generation, retrieval, LLM APIs' },
  { icon: Workflow, label: 'Agentic workflows', detail: 'Tool use, orchestration, evaluation loops' },
  { icon: Database, label: 'AI automation', detail: 'Python, n8n, APIs, structured data flows' },
  { icon: ShieldCheck, label: 'Production reliability', detail: 'Observability, RCA, safe delivery' },
];

const heroTechnologies = [
  { name: 'Python', icon: '/skills/python.svg' },
  { name: 'LangChain', icon: '/skills/langchain.svg' },
  { name: 'n8n', icon: '/skills/n8n.svg' },
  { name: 'Anthropic', icon: '/skills/anthropic.svg' },
  { name: 'Gemini', icon: '/skills/googlegemini.svg' },
  { name: 'Docker', icon: '/skills/docker.svg' },
];

const structuredProfile = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  jobTitle: profile.role,
  description: `${profile.role} building toward ${profile.targetRole} roles through applied AI products and production engineering.`,
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'IN' },
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: ['Generative AI', 'Retrieval-Augmented Generation', 'AI agents', 'LLM APIs', 'Python', 'n8n', 'Production reliability'],
};

export default function Home() {
  return (
    <main id="main-content">
      <a className="skip-link" href="#about">Skip to portfolio content</a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredProfile) }}
      />
      <header className="site-shell" id="top">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Sharath Chandra home">
            DSC<span className="wordmark-dot">.</span>
          </a>
          <div className="nav-links" aria-label="Section links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="availability" href={`mailto:${profile.email}`}>
            <span aria-hidden="true" /> Open to GenAI roles
          </a>
        </nav>

        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">01 / Portfolio — {profile.location}</p>
            <h1>
              Sharath
              <br />
              Chandra<span className="accent-mark">↗</span>
            </h1>
            <p className="hero-role">
              GenAI Engineer · AI Automation Builder
            </p>
            <p className="hero-intro">
              I build applied GenAI products—RAG assistants, agentic workflows,
              LLM-powered tools, and reliable AI automation backed by production
              engineering discipline.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-light" href={`mailto:${profile.email}`}>
                Start a conversation
              </a>
            </div>
            <div className="social-row" aria-label="Social links">
              <a href={profile.github} target="_blank" rel="noreferrer">↗ GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">↗ LinkedIn</a>
              <a href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" /> Email
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Professional focus">
            <div className="panel-orbit" aria-hidden="true">
              <span className="orbit orbit-one" />
              <span className="orbit orbit-two" />
              <span className="orbit-core">AI</span>
              <div className="hero-tech-icons">
                {heroTechnologies.map((technology) => (
                  <span className="hero-tech-icon" key={technology.name}>
                    <Image src={technology.icon} alt="" width={25} height={25} />
                  </span>
                ))}
              </div>
            </div>
            <div className="panel-content">
              <p className="panel-label">Current focus</p>
              <p className="panel-status">Shipping applied GenAI systems</p>
              <div className="signal-list">
                <span>RAG / LLM apps</span>
                <span>Agentic workflows</span>
                <span>Python / n8n</span>
                <span>Production reliability</span>
              </div>
              <p className="panel-location">
                <MapPin size={15} aria-hidden="true" /> Hyderabad · UTC+5:30
              </p>
            </div>
          </aside>
        </section>

        <div className="hero-footer" aria-label="Highlights">
          <p><strong>03</strong> Applied AI products</p>
          <p><strong>05</strong> Featured builds</p>
          <p><strong>01+</strong> Years in enterprise software</p>
        </div>
      </header>

      <div className="ticker" aria-hidden="true">
        <div>
          RAG SYSTEMS <span>✦</span> AGENTIC AI <span>✦</span> WORKFLOW AUTOMATION <span>✦</span>
          PRODUCTION ENGINEERING <span>✦</span> ROOT CAUSE ANALYSIS <span>✦</span> BACKEND APIS <span>✦</span>
        </div>
      </div>

      <section className="section section-about" id="about">
        <div className="section-grid site-shell">
          <div className="section-kicker">
            <p>02 / Profile</p>
            <span>How I work</span>
          </div>
          <div className="about-body">
            <h2>Applied GenAI.<br />Production discipline.</h2>
            <p className="about-lead">
              I build useful GenAI systems with LLM APIs, LangChain, LangGraph,
              retrieval-augmented generation, vector search, and workflow
              automation. My focus is turning AI capabilities into products that
              solve a clear problem—not isolated demos.
            </p>
            <p className="about-copy">
              My enterprise experience supporting regulated healthcare
              applications adds the operational habits behind that work:
              observability, grounded outputs, visible failure modes, careful
              releases, and clear escalation paths.
            </p>
            <div className="focus-grid">
              {focusAreas.map(({ icon: Icon, label, detail }, index) => (
                <article className="focus-card" key={label}>
                  <div className="focus-top">
                    <Icon size={22} aria-hidden="true" />
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{label}</h3>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-work" id="work">
        <div className="site-shell">
          <div className="section-heading-row">
            <div>
              <p className="section-label">03 / Featured projects</p>
              <h2>Applied AI.<br />Useful software.</h2>
            </div>
            <div className="projects-intro">
              <p className="section-note">
                Shipped products, AI agents, browser extensions, and focused
                experiments—each connected to working code or a live experience.
              </p>
              <a className="text-link" href="https://github.com/sharath2525" target="_blank" rel="noreferrer">
                View all repositories <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="projects-bento">
            {projects.map((project) => (
              <article className="project-showcase" key={project.title}>
                <div className="project-media">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface preview`}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                  <div className="project-media-shade" />
                  <div className="project-index"><span>{project.number}</span><span>{project.year}</span></div>
                  <span className="project-live-state">{project.status}</span>
                </div>
                <div className="project-info">
                  <p className="project-label"><FolderKanban size={15} aria-hidden="true" /> {project.label}</p>
                  <h3>{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-highlights" aria-label={`${project.title} highlights`}>
                    {project.highlights.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.stack.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.type === 'code' ? <Code2 size={16} aria-hidden="true" /> : <ExternalLink size={16} aria-hidden="true" />}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-skills" id="skills">
        <div className="site-shell">
          <div className="section-heading-row skills-heading">
            <div>
              <p className="section-label">04 / Toolkit</p>
              <h2>AI first.<br />Production ready.</h2>
            </div>
            <p className="section-note">A practical stack across AI, automation, backend engineering, data, and production operations.</p>
          </div>
          <div className="skills-table">
            {skillGroups.map((group) => (
              <article className="skill-group-card" key={group.title}>
                <div className="skill-group-head">
                  <span className="skill-number">{group.number}</span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>
                <div className="skill-logo-grid">
                  {group.skills.map((skill) => (
                    <div className="skill-logo" key={skill.name}>
                      <div className="skill-logo-image"><Image src={skill.icon} alt="" width={27} height={27} /></div>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-experience" id="experience">
        <div className="section-grid site-shell">
          <div className="section-kicker light-kicker">
            <p>05 / Experience</p>
            <BriefcaseBusiness aria-hidden="true" size={30} />
          </div>
          <div className="experience-body">
            <div className="experience-head">
              <div>
                <p>{experience.period}</p>
                <h2>{experience.role}</h2>
              </div>
              <div className="experience-company">
                <strong>{experience.company}</strong>
                <span>{experience.location}</span>
              </div>
            </div>
            <p className="experience-summary">{experience.summary}</p>
            <ul className="experience-list">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>
                  <ArrowUpRight size={18} aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-learning" id="education">
        <div className="site-shell">
          <p className="section-label">06 / Learning &amp; recognition</p>
          <div className="learning-grid">
            <article className="learning-card education-card">
              <div className="learning-icon"><GraduationCap size={30} aria-hidden="true" /></div>
              <p className="card-overline">Education</p>
              <h2>{education.degree}</h2>
              <p>{education.school}</p>
              <div className="learning-meta"><span>{education.period}</span><span>{education.score}</span></div>
            </article>
            <article className="learning-card publication-card">
              <div className="learning-icon"><BookOpen size={30} aria-hidden="true" /></div>
              <p className="card-overline">Publication</p>
              <h2>“{publication.title}”</h2>
              <p>{publication.venue}</p>
              <div className="learning-meta"><span>Published</span><span>{publication.year}</span></div>
            </article>
          </div>
        </div>
      </section>

      <footer className="section section-contact" id="contact">
        <div className="site-shell">
          <p className="section-label">07 / Contact</p>
          <div className="contact-main">
            <h2>Building with AI?<br />Let&apos;s talk.</h2>
            <a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Sharath Chandra">
              <ArrowUpRight size={56} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /><span>Email</span><strong>{profile.email}</strong>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={18} aria-hidden="true" /><span>LinkedIn</span><strong>Professional profile ↗</strong>
            </a>
            <div>
              <MapPin size={18} aria-hidden="true" /><span>Location</span><strong>{profile.location}</strong>
            </div>
            <a href="/sharath-chandra-resume.pdf" download>
              <Download size={18} aria-hidden="true" /><span>Resume</span><strong>Download PDF</strong>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 {profile.name}</p>
            <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
