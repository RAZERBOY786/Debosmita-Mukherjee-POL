import Logo from './Logo.jsx'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="glow-primary" />
      <div className="glow-secondary" />
      <div className="hero-bg-cs" aria-hidden="true">
        <svg
          className="hero-bg-cs-svg"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="cs-bracket cs-bracket-left"
            d="M80 45 20 150l60 105"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="cs-bracket cs-bracket-right"
            d="m320 45 60 105-60 105"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path className="cs-slash" d="M215 20 185 280" strokeWidth="16" strokeLinecap="round" />
          <path className="cs-brace" d="M140 120v30h30v60h-30v30M200 120l20 60-20 60" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <rect className="cs-cursor" x="200" y="255" width="52" height="10" rx="5" />
        </svg>
      </div>
      <div className="hero-grid">
        <div className="hero-col">
          <div className="status-badge">
            <span className="status-dot-wrap">
              <span className="status-dot-ping" />
              <span className="status-dot-solid" />
            </span>
            <span className="status-text">{profile.status}</span>
          </div>

          <div className="hero-logo">
            <Logo size={80} />
          </div>

          <h1 className="display-hero hero-title">
            {profile.name}
            <span className="hero-subtitle">{profile.role}</span>
          </h1>

          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot dot-error" />
              <span className="terminal-dot dot-secondary" />
              <span className="terminal-dot dot-primary" />
              <span className="terminal-path">~/debosmita/status.sh</span>
            </div>
            <p className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span>{profile.tagline}</span>
              <span className="terminal-cursor" />
            </p>
          </div>

          <div className="contact-mosaic">
            <a className="chip" href={`mailto:${profile.email}`}>
              <span className="material-symbols chip-icon-emerald">mail</span>
              <span>{profile.email}</span>
            </a>
            <a className="chip" href={`tel:${profile.phone}`}>
              <span className="material-symbols chip-icon-amber">call</span>
              <span>{profile.phone}</span>
            </a>
            <span className="chip chip-muted">
              <span className="material-symbols chip-icon-emerald">pin_drop</span>
              <span>{profile.location}</span>
            </span>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <a className="chip" href="#" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="chip" href="https://www.linkedin.com/in/debosmita-mukherjee-589203313/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="chip chip-leet" href="#" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols" style={{ fontSize: '14px' }}>
                  school
                </span>
                <span>{profile.leetcode}</span>
              </a>
            </div>
          </div>

          <div className="hero-cta">
            <a className="btn btn-primary" href="#projects">
              <span className="material-symbols" style={{ fontSize: '20px' }}>
                visibility
              </span>
              View Featured Work
            </a>
            <a className="btn btn-amber" href="#download-cv">
              <span className="material-symbols" style={{ fontSize: '20px' }}>
                file_download
              </span>
              Download Resume (PDF)
            </a>
            <a className="btn btn-ghost" href="#contact">
              <span className="material-symbols" style={{ fontSize: '20px' }}>
                calendar_month
              </span>
              Schedule Intro Call
            </a>
          </div>
        </div>

        <div className="hero-col" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img className="portrait-img" src={`${import.meta.env.BASE_URL}img.jpeg`} alt="Debosmita Mukherjee" />
            </div>
          </div>
        </div>
      </div>

      <div className="stats-bar">
        {profile.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-label">{s.label}</span>
            <div className="stat-value">
              <span className={`stat-num stat-num-${s.accent}`}>{s.value}</span>
              <span className="stat-note">{s.note}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
