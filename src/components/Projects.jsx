import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="block" id="projects">
      <div className="skills-head-row">
        <div>
          <span className="section-label">// 03. Engineering Artifacts</span>
          <h2 className="headline-lg section-title">Academic & Scaled Projects</h2>
        </div>
        <span className="label-md" style={{ color: 'var(--outline)' }}>
          SHOWCASING OPERATIONAL & DISTRIBUTED RIGOR
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="proj-card" key={p.title}>
            <div className={`proj-corner ${p.corner}`} />
            <div>
              <div className="proj-badge-row">
                <span className={p.badgeClass}>{p.badge}</span>
                <span className="proj-version">{p.version}</span>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-subtitle">{p.subtitle}</p>
              <p className="proj-desc body-sm">{p.desc}</p>
            </div>
            <div>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`tech-tag ${t.accent === 'amber' ? 'tech-tag-amber' : ''}`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
              <div className="proj-actions">
                <a className="btn-code" href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols" style={{ fontSize: '16px' }}>
                    code
                  </span>
                  Codebase
                </a>
                <a className={p.demoClass} href="#">
                  <span className="material-symbols" style={{ fontSize: '16px' }}>
                    {p.demoIcon}
                  </span>
                  {p.demoLabel}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
