import { publications } from '../data.js'

const bibtex1 = `@incollection{mukherjee2026mentoragen,
  title={MentoraGen: Integrating AI-Driven Socratic Scaffolding Into the Design of Pedagogically-Aligned Programming Education},
  author={Mukherjee, Debosmita},
  booktitle={IGI Global Scientific Publishing},
  note={Expected publication: August -- September 2026},
  year={2026}
}`

const bibtex2 = `@misc{mukherjee2026mentoragen,
  title={MentoraGen AI-Powered Educational Assistant},
  author={Mukherjee, Debosmita},
  note={Group Project, Brainware University (2023 -- 2027)},
  year={2026}
}`

function copyBibtex(e, id) {
  try {
    navigator.clipboard.writeText(id === 1 ? bibtex1 : bibtex2)
  } catch {
    /* clipboard not available */
  }
  const btn = e.currentTarget
  const original = btn.textContent
  btn.textContent = 'Copied!'
  btn.style.background = 'var(--primary)'
  btn.style.color = 'var(--on-primary)'
  setTimeout(() => {
    btn.textContent = original
    btn.style.background = ''
    btn.style.color = ''
  }, 1500)
}

export default function Research() {
  return (
    <section className="block" id="research">
      <div>
        <span className="section-label">// 06. Peer-Reviewed Scholarship</span>
        <h2 className="headline-lg section-title">Research & Systems Publications</h2>
      </div>
      <div className="research-grid">
        {publications.map((p) => (
          <div className="paper-card" key={p.id}>
            <div>
              <div className="paper-badge-row">
                <span className={p.badgeClass}>{p.badge}</span>
                <span className="paper-doi">{p.doi}</span>
              </div>
              <h3 className="paper-title">{p.title}</h3>
              <p className="paper-desc body-sm">{p.desc}</p>
            </div>
            <div className="paper-actions">
              <button className="btn-cite" onClick={(e) => copyBibtex(e, p.id)}>
                <span className="material-symbols" style={{ fontSize: '16px' }}>
                  menu_book
                </span>
                Cite (BibTeX)
              </button>
              <a className={p.readClass} href={p.readUrl || '#'} target="_blank" rel="noopener noreferrer">
                <span className="material-symbols" style={{ fontSize: '16px' }}>
                  description
                </span>
                {p.readLabel}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
