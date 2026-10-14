import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import About from './sections/About.jsx'
import Contact from './sections/Contact.jsx'
import Hero from './sections/Hero.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'

function App() {
  const [theme, setTheme] = useState(() => window.localStorage.getItem('portfolio-theme') || 'dark')
  const [showIntro, setShowIntro] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!showIntro) return undefined
    const timeout = window.setTimeout(() => setShowIntro(false), 5600)
    return () => window.clearTimeout(timeout)
  }, [showIntro])

  useEffect(() => {
    const elements = document.querySelectorAll('main > section:not(.hero), .project-card, .footer-grid')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })

    elements.forEach((element) => {
      element.classList.add('reveal')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {showIntro && (
        <div className="intro-screen" aria-hidden="true">
          <div className="intro-content">
            <div className="intro-topline"><span>Sun VannaRith</span><span>Portfolio / 01</span></div>
            <div className="intro-copy">
              <p className="intro-kicker"><span /> Personal portfolio</p>
              <h2 className="intro-name"><span>Sun</span><strong>VannaRith<span>.</span></strong></h2>
              <p className="intro-role">Student developer <i>·</i> Web &amp; hardware</p>
              <div className="intro-progress"><span /></div>
              <p className="intro-caption">Designing <i>·</i> Building <i>·</i> Learning</p>
            </div>
            <div className="intro-portrait"><span className="intro-orbit" /><img src="/profile.png" alt="" /><span className="intro-coordinate">SV / 2026</span></div>
            <div className="intro-bottomline"><span>Welcome to my world</span><span>Loading experience <i>↗</i></span></div>
          </div>
        </div>
      )}
      <div className="page-ambience" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero introComplete={!showIntro} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
