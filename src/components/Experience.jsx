import { Fragment } from 'react'
import { experience } from '../data.js'

function renderPoint(text) {
  const parts = text.split(/(\[(?:strong|em)\].*?\[\/(?:strong|em)\])/)
  return parts.map((part, i) => {
    if (part.startsWith('[strong]')) {
      return (
        <span className="exp-strong" key={i}>
          {part.replace(/\[\/?strong\]/g, '')}
        </span>
      )
    }
    if (part.startsWith('[em]')) {
      return (
        <span className="exp-accent-emerald" key={i}>
          {part.replace(/\[\/?em\]/g, '')}
        </span>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div>
        <span className="section-label">// 02. Industrial Experience</span>
        <h2 className="headline-lg section-title">Internships & Engineering Track</h2>
      </div>

      <div className="timeline">
        <div className="timeline-rail" />
        {experience.map((e, i) => (
          <div className="exp-item" key={i}>
            <div className={`exp-node ${e.accent === 'amber' ? 'exp-node-amber' : ''}`} />
            <div className="exp-card">
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">{e.role}</h3>
                  <p className={`exp-company-${e.accent}`}>{e.company}</p>
                </div>
                <span className={`exp-date ${e.dateAccent === 'muted' ? 'exp-date-muted' : ''}`}>
                  {e.date}
                </span>
              </div>
              <ul className="exp-list">
                {e.points.map((p, j) => (
                  <li key={j}>{renderPoint(p)}</li>
                ))}
              </ul>
              <div className="exp-tags">
                {e.tags.map((t) => (
                  <span key={t.label} className={`tech-tag ${t.accent === 'amber' ? 'tech-tag-amber' : ''}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
