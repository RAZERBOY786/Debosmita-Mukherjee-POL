import { useState } from 'react'
import { profile } from '../data.js'

export default function Contact() {
  const [status, setStatus] = useState('')
  const [copied, setCopied] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 800)
  }

  function copyEmail() {
    try {
      navigator.clipboard.writeText(profile.email)
    } catch {
      /* clipboard not available */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="block" id="contact">
      <div>
        <span className="section-label">// 09. Dispatch Terminal</span>
        <h2 className="headline-lg section-title">Initiate Communication</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-form-card">
          <form className="form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label className="field-label">Full Name</label>
                <input className="input" placeholder="e.g. Sarah Connor" type="text" required />
              </div>
              <div className="field">
                <label className="field-label">Email Address</label>
                <input className="input" placeholder="sarah@techcorp.io" type="email" required />
              </div>
            </div>
            <div className="form-grid">
              <div className="field">
                <label className="field-label">Role Inquiries</label>
                <select className="input">
                  <option>Web Developer Position</option>
                  <option>Front-End / Full-Stack Internship</option>
                  <option>Freelance Web Development</option>
                  <option>General Technical Discussion</option>
                </select>
              </div>
              <div className="field">
                <label className="field-label">Subject</label>
                <input className="input" placeholder="Web Development Opportunity" type="text" required />
              </div>
            </div>
            <div className="field">
              <label className="field-label">Message Payload</label>
              <textarea
                className="input"
                placeholder="Describe the role, project scope, and how we can collaborate..."
                rows="4"
                required
              />
            </div>
            <button className="submit-btn" type="submit" disabled={status === 'sending'}>
              <span className="material-symbols" style={{ fontSize: '20px' }}>
                send
              </span>
              {status === 'sending'
                ? 'Transmitting...'
                : status === 'sent'
                  ? 'Transmitted ✓'
                  : 'Transmit Transmission'}
            </button>
            <div className={`form-feedback ${status === 'sent' ? 'show' : ''}`}>
              Payload received successfully! Debosmita will reply within 12-24 hours.
            </div>
          </form>
        </div>

        <div className="quick-column">
          <div className="calendly-card">
            <div>
              <div className="calendly-head">
                <span className="calendly-label">Instant Sync</span>
                <span className="material-symbols calendly-icon">calendar_today</span>
              </div>
              <h4 className="calendly-title">Book a 15-Minute Intro Call</h4>
              <p className="calendly-desc body-sm">
                Skip back-and-forth emails. Pick a direct slot on my calendar for
                introductory screening or technical exploration.
              </p>
            </div>
            <a className="calendly-btn" href="#">
              Schedule on Calendly →
            </a>
          </div>

          <div className="quick-row">
            <div className="quick-info">
              <span className="material-symbols quick-icon-emerald">mark_email_read</span>
              <div style={{ overflow: 'hidden' }}>
                <span className="quick-label">Direct Channel</span>
                <span className="quick-value">{profile.email}</span>
              </div>
            </div>
            <button className={`copy-btn ${copied ? 'copied' : ''}`} onClick={copyEmail}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="quick-row">
            <div className="quick-info">
              <span className="material-symbols quick-icon-amber">badge</span>
              <div>
                <span className="quick-label">Currently</span>
                <span className="quick-value">BCA Student • Web Dev Intern</span>
              </div>
            </div>
            <button className="copy-btn" onClick={() => setStatus('')}>
              Open
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
