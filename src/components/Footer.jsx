import { profile } from '../data.js'
import Logo from './Logo.jsx'

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Work Experience', href: '#experience' },
  { label: 'Engineering Works', href: '#projects' },
  { label: 'Publications & Research', href: '#research' },
]

const resourceLinks = [
  { label: 'Skills & Architecture', href: '#skills' },
  { label: 'Academics', href: '#academics' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-brand">
              <div className="brand-mark" style={{ width: 24, height: 24, fontSize: 11 }}>
                <Logo size={24} />
              </div>
              <span className="headline-sm">{profile.name}</span>
            </div>
            <p className="footer-tagline body-sm">
              Aspiring Web Developer building efficient, user-friendly web
              solutions with strong foundations in Python, C, HTML, CSS, and
              JavaScript — continuously learning emerging technologies.
            </p>
            <div className="footer-status">
              <span className="footer-status-label">STATUS:</span>
              <span className="footer-status-value">SYSTEMS ONLINE // READY FOR WEB DEVOPS</span>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Navigation</span>
            {navLinks.map((l) => (
              <a key={l.href} className="footer-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Resources</span>
            {resourceLinks.map((l) => (
              <a key={l.href} className="footer-link" href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Direct</span>
            <a className="footer-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="footer-link" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} {profile.name.split(' ')[0]} · Built with React & Vite
          </span>
          <div className="footer-socials">
            <a className="footer-social" href="#" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="footer-social" href="https://www.linkedin.com/in/debosmita-mukherjee-589203313/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
