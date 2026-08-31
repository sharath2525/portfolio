import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  CircleCheck,
  Database,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import {
  education,
  experience,
  profile,
  projects,
  publication,
  skillGroups,
} from './content';

const focusAreas = [
  { icon: Bot, label: 'GenAI systems', detail: 'RAG, agents, LLM integration' },
  { icon: Workflow, label: 'Automation', detail: 'n8n, PowerShell, Power Automate' },
  { icon: Database, label: 'Backend & data', detail: 'Python, Flask, APIs, Oracle SQL' },
  { icon: ShieldCheck, label: 'Production support', detail: 'RCA, monitoring, GxP operations' },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-shell" id="top">
        <nav className="topbar" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label="Sharath Chandra home">
            DSC<span className="wordmark-dot">.</span>
          </a>
          <div className="nav-links" aria-label="Section links">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="availability" href={`mailto:${profile.email}`}>
            <span aria-hidden="true" /> Open to opportunities
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
              Jr. Software Engineer · GenAI &amp; Automation Builder
            </p>
            <p className="hero-intro">
              I turn production problems into dependable systems—combining
              incident discipline, backend APIs, automation, and practical
              generative AI.
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
            </div>
            <div className="panel-content">
              <p className="panel-label">Current system state</p>
              <p className="panel-status">Building intelligent automation</p>
              <div className="signal-list">
                <span>RAG / LLM APIs</span>
                <span>n8n / Power Automate</span>
                <span>Python / Flask</span>
                <span>Production Support</span>
              </div>
              <p className="panel-location">
                <MapPin size={15} aria-hidden="true" /> Hyderabad · UTC+5:30
              </p>
            </div>
          </aside>
        </section>

        <div className="hero-footer" aria-label="Highlights">
          <p><strong>01+</strong> Years in enterprise software</p>
          <p><strong>08</strong> GenAI &amp; automation builds</p>
          <p><strong>24/7</strong> Production-first mindset</p>
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
            <h2>Operations discipline.<br />AI-forward thinking.</h2>
            <p className="about-lead">
              I&apos;m an IT graduate and software engineer supporting healthcare
              applications in a regulated enterprise environment. My work spans
              incident response, observability, SQL validation, release support,
              and the automations that make those systems easier to run.
            </p>
            <p className="about-copy">
              Outside daily operations, I build GenAI systems with LLM APIs,
              LangChain, LangGraph, RAG, vector search, and n8n. That combination
              lets me approach AI with a production mindset: grounded outputs,
              visible failure modes, clear escalation paths, and useful outcomes.
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
              <p className="section-label">03 / Selected systems</p>
              <h2>Work in progress.<br />Built with intent.</h2>
            </div>
            <p className="section-note">
              Initial case-study structure from the resume. Repositories, demos,
              screenshots, and outcomes can drop in when the project files arrive.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card project-${project.tone}`} key={project.title}>
                <div className="project-topline">
                  <span>{project.number}</span>
                  <span>{project.label}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="project-status">
                  <CircleCheck size={16} aria-hidden="true" />
                  <span>{project.status}</span>
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
              <h2>From signals<br />to shipped systems.</h2>
            </div>
            <p className="section-note">A practical stack across AI, automation, backend engineering, data, and production operations.</p>
          </div>
          <div className="skills-table">
            {skillGroups.map((group) => (
              <article className="skill-row" key={group.title}>
                <span className="skill-number">{group.number}</span>
                <h3>{group.title}</h3>
                <div className="skill-cloud">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
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
            <h2>Have a system to<br />improve? Let&apos;s talk.</h2>
            <a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Sharath Chandra">
              <ArrowUpRight size={56} aria-hidden="true" />
            </a>
          </div>
          <div className="contact-grid">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} aria-hidden="true" /><span>Email</span><strong>{profile.email}</strong>
            </a>
            <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
              <Phone size={18} aria-hidden="true" /><span>Phone</span><strong>{profile.phone}</strong>
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
            <div><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
