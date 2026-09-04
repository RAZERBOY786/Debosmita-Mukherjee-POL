import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Objective from './components/Objective.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Academics from './components/Academics.jsx'
import Research from './components/Research.jsx'
import Achievements, { Hobbies } from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [theme, setTheme] = useState(
    () =>
      document.documentElement.getAttribute('data-theme') || 'light',
  )

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-theme', next)
      try {
        localStorage.setItem('dm-theme', next)
      } catch {
        /* storage unavailable */
      }
      return next
    })
  }

  return (
    <>
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div className="container" style={{ paddingTop: '80px' }}>
          <Hero />
          <Objective />
          <Skills />
          <Experience />
          <Projects />
          <Academics />
          <Research />
          <Achievements />
          <Hobbies />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}
