import { achievements, hobbies } from '../data.js'

export default function Achievements() {
  return (
    <section className="block" id="achievements">
      <div>
        <span className="section-label">// 07. Competitive Milestones</span>
        <h2 className="headline-lg section-title">Achievements & Honors</h2>
      </div>
      <div className="achievements-grid">
        {achievements.map((a) => (
          <div className="ach-card" key={a.title}>
            <div>
              <div className={`ach-icon-wrap ${a.iconClass}`}>
                <span className="material-symbols" style={{ fontSize: '24px' }}>
                  {a.icon}
                </span>
              </div>
              <span className={`ach-badge ${a.badgeClass}`}>{a.badge}</span>
              <h4 className="ach-title">{a.title}</h4>
              <p className="ach-desc body-sm">{a.desc}</p>
            </div>
            <span className={`ach-foot ${a.footClass}`}>{a.foot}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Hobbies() {
  return (
    <section className="block" id="hobbies">
      <div>
        <span className="section-label">// 08. Off the Terminal</span>
        <h2 className="headline-lg section-title">Hobbies & Dimensions</h2>
      </div>
      <div className="hobbies-grid">
        {hobbies.map((h) => (
          <div className="hobby-card" key={h.title}>
            <span className="hobby-emoji">{h.emoji}</span>
            <h4 className="hobby-title">{h.title}</h4>
            <p className="hobby-desc body-sm">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
