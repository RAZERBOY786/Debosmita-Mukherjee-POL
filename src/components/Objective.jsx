import { profile } from '../data.js'

export default function Objective() {
  return (
    <section className="block" id="about">
      <div className="obj-banner">
        <div className="obj-accent" />
        <div className="obj-inner">
          <span className="material-symbols obj-quote">format_quote</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="obj-label">// Career Trajectory & Manifesto</span>
            <p className="obj-text body-lg">{profile.objective}</p>
            <div className="obj-meta">
              <span>LOCATION PREFERENCE: KOLKATA / REMOTE</span>
              <span>•</span>
              <span>DOMAIN: WEB DEVELOPMENT, FRONT-END & BACK-END TECHNOLOGIES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
