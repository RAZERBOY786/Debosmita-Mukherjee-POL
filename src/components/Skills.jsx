import { useState } from 'react'
import { skills, skillTabs } from '../data.js'

const accentToClass = {
  emerald: {
    icon: 'skill-icon-emerald',
    pct: 'skill-pct',
    fill: 'skill-fill-emerald',
    years: 'skill-years-emerald',
  },
  amber: {
    icon: 'skill-icon-amber',
    pct: 'skill-pct-amber',
    fill: 'skill-fill-amber',
    years: 'skill-years-amber',
  },
  muted: {
    icon: 'skill-icon-muted',
    pct: 'skill-pct',
    fill: 'skill-fill-emerald',
    years: 'skill-years-emerald',
  },
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const visible = []
  for (const cat of Object.keys(skills)) {
    if (active === 'all' || active === cat) {
      skills[cat].forEach((s) => visible.push({ ...s, category: cat }))
    }
  }

  return (
    <section className="block" id="skills">
      <div className="skills-head-row">
        <div>
          <span className="section-label">// 01. Technical Arsenal</span>
          <h2 className="headline-lg section-title">Skills & Architecture Matrix</h2>
        </div>
        <div className="filter-tabs">
          {skillTabs.map((t) => (
            <button
              key={t.key}
              className={`filter-tab ${active === t.key ? 'active' : ''}`}
              onClick={() => setActive(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="skills-grid">
        {visible.map((s) => {
          const c = accentToClass[s.accent]
          return (
            <div className="skill-card" key={s.name}>
              <div>
                <div className="skill-head">
                  <span className="skill-name">
                    <span className={`material-symbols ${c.icon}`}>{s.icon}</span>
                    {s.name}
                  </span>
                  <span className={c.pct}>{s.pct}%</span>
                </div>
                <div className="skill-track">
                  <div className={`skill-fill ${c.fill}`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
              <div className="skill-foot">
                <span>{s.desc}</span>
                <span className={c.years}>{s.years}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
