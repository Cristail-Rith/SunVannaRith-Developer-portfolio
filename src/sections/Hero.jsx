import { useState } from 'react'
import Button from '../components/ui/Button.jsx'

function Hero({ introComplete }) {
  const [photoLoaded, setPhotoLoaded] = useState(false)

  return (
    <section id="home" className={`hero${introComplete ? ' is-intro-complete' : ''}`}>
      <div className="section-ambience" aria-hidden="true" />
      <div className="hero-content p-7">
        <p className="eyebrow"><span className="hero-status-dot" aria-hidden="true" /> Hello, I’m</p>
        <h1 className="hero-name" aria-label="Sun VannaRith">
          <span className="hero-name-line">Sun</span>{' '}
          <span className="hero-name-line hero-name-accent">VannaRith<span className="hero-name-period">.</span></span>
        </h1>
        <p className="hero-lead">Student developer exploring the space between <span>web</span> and <span>hardware.</span></p>
        <p className="hero-copy">I study electronics, mathematics, and web development, then bring those ideas to life through hands-on projects.</p>
        <div className="button-row">
          <Button href="#projects" primary>View my projects</Button>
          <Button href="/cv.pdf" download>Download CV</Button>
        </div>
      </div>
      <div className={`portrait${photoLoaded ? ' has-photo' : ''}`}>
        <img
          className="portrait-photo"
          src="/profile.png"
          alt="Portrait of Sun VannaRith"
          onLoad={() => setPhotoLoaded(true)}
          onError={(event) => { event.currentTarget.style.display = 'none' }}
        />
        {!photoLoaded && <>
          <span className="portrait-mark" aria-hidden="true">SV</span>
          <span className="portrait-caption">PROFILE</span>
        </>}
        <div className="portrait-label" aria-hidden="true"><span /> Building and learning</div>
      </div>
    </section>
  )
}

export default Hero
