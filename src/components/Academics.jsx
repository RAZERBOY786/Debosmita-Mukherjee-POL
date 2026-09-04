import { education, certifications } from '../data.js'

export default function Academics() {
  return (
    <section className="block" id="academics">
      <div className="academics-grid">
        {/* Education */}
        <div className="edu-card">
          <div>
            <div className="skills-head-row" style={{ flexDirection: 'row', alignItems: 'center' }}>
              <span className="section-label">// 04. Academic Pedigree</span>
              <span className="edu-badge">{education.badge}</span>
            </div>
            <div className="edu-list">
              {education.degrees.map((d, i) => (
                <div className={`edu-entry edu-entry-${education.degreeAccent[i] || 'muted'}`} key={d.title}>
                  <div className="edu-entry-top">
                    <span className="edu-entry-period">{d.period}</span>
                    <span className="edu-entry-grade">{d.grade}</span>
                  </div>
                  <h3 className="edu-entry-title">{d.title}</h3>
                  <p className="edu-entry-school">{d.school}</p>
                  {d.note && <p className="edu-entry-note">{d.note}</p>}
                </div>
              ))}
            </div>
            <div className="courses">
              <span className="courses-label">Rigorous Relevant Coursework (BCA):</span>
              <div className="course-pills">
                {education.courses.map((c) => (
                  <span className="course-pill" key={c}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="edu-footer">
            <span>{education.footerLeft}</span>
            <span style={{ color: 'var(--primary)' }}>{education.footerRight}</span>
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-card">
          <div>
            <span className="section-label" style={{ color: 'var(--secondary)' }}>
              // 05. Credentials & Workshops
            </span>
            <h3 className="headline-sm section-title">Certified Specializations</h3>
            <div className="certs-list">
              {certifications.map((c) => (
                <div className="cert-item" key={c.name}>
                  <div className="cert-info">
                    <span className={`material-symbols ${c.iconClass}`}>{c.icon}</span>
                    <div>
                      <p className="cert-name">{c.name}</p>
                      <p className="cert-org">{c.org}</p>
                    </div>
                  </div>
                  <span className="material-symbols cert-check">check_circle</span>
                </div>
              ))}
            </div>
          </div>
          <div className="certs-foot">WORKSHOPS & COMPETITIONS COMPLETED</div>
        </div>
      </div>
    </section>
  )
}
