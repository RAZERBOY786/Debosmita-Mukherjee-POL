import { useEffect, useState } from 'react'
import { profile } from '../data.js'
import Logo from './Logo.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Academics', href: '#academics' },
  { label: 'Research', href: '#research' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(links[0].href)

  useEffect(() => {
    const onScroll = () => {
      const offset = 130
      let current = links[0].href
      for (const link of links) {
        const el = document.querySelector(link.href)
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset
          if (top <= offset) current = link.href
        }
      }
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 4) {
        current = links[links.length - 1].href
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const headerOffset = 88
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <a className="brand-mark" href="#" onClick={(e) => handleClick(e, '#')} style={{ textDecoration: 'none' }}>
            <Logo size={26} />
          </a>
          <a href="#" className="brand-name" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false) }}>
            {profile.name.split(' ')[0]}
            <span className="brand-dev">/dev</span>
          </a>
        </div>

        <nav className="nav-links">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
              onClick={(e) => handleClick(e, l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="material-symbols" style={{ fontSize: '20px' }}>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button
            className="menu-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label="Open menu"
          >
            <span className="material-symbols" style={{ fontSize: '22px' }}>
              {open ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={`nav-link ${active === l.href ? 'active' : ''}`}
            onClick={(e) => handleClick(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}
