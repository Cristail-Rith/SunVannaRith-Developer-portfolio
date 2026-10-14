const interests = [
  { number: '01', title: 'Electronics', detail: 'Exploring how circuits and devices work.' },
  { number: '02', title: 'Mathematics', detail: 'Building problem-solving skills through linear algebra.' },
  { number: '03', title: 'Web development', detail: 'Turning ideas into useful, interactive experiences.' },
]

function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-ambience" aria-hidden="true" />
      <div className="about-heading about-animate">
        <p className="about-index"><span>01</span> / About</p>
        <h2>Curiosity is<br />where I <em>start.</em></h2>
        <div className="about-signature" aria-hidden="true">
          <span className="about-rule" />
          <span>Student developer</span>
        </div>
        <span className="about-watermark" aria-hidden="true">ABOUT</span>
      </div>

      <article className="about-panel about-animate about-animate-late">
        <div className="about-panel-top"><span>01 — A little introduction</span><span className="about-live"><i /> Always learning</span></div>
        <p className="about-lead">I’m Sun VannaRith, a student developer who enjoys exploring how things work—from electronics and mathematics to the web.</p>
        <p className="about-copy">I learn by building projects and connecting ideas across these fields. Each one gives me another way to solve problems and make something useful.</p>
        <div className="about-interest-grid">
          {interests.map(({ number, title, detail }) => (
            <div className="about-interest" key={number}>
              <span className="about-interest-number">{number}</span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
        <div className="about-panel-bottom"><span>Learn by building</span><span aria-hidden="true">↘</span></div>
      </article>
    </section>
  )
}

export default About
