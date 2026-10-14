import Button from '../components/ui/Button.jsx'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-ambience" aria-hidden="true" />
      <div className="contact-shell">
        <div className="contact-copy">
          <p className="contact-index"><span>04</span> / Contact</p>
          <h2>Have an idea?<br /><em>Let’s make it real.</em></h2>
          <p className="contact-intro">I enjoy building things for the web and exploring how software connects with hardware. Have a project or an idea to share? Let’s talk.</p>
          <div className="contact-signoff"><span /> Sun VannaRith <i>·</i> Student developer</div>
        </div>

        <div className="contact-card">
          <div className="contact-card-orbit" aria-hidden="true"><span>↗</span></div>
          <div className="contact-card-content">
            <div className="contact-card-head"><span>Start a conversation</span><span className="contact-spark" aria-hidden="true">✳</span></div>
            <h3>Let’s connect.</h3>
            <p>Send a message or find me on these platforms.</p>
            <div className="contact-actions">
              <Button href="mailto:sovvanrith72@gmail.com" primary>Send an email <span aria-hidden="true">↗</span></Button>
              <div className="contact-socials">
                <Button href="https://t.me/RithITEngineer" target="_blank" rel="noreferrer">Telegram <span aria-hidden="true">↗</span></Button>
                <Button href="mailto:sovvanrith72@gmail.com">Email <span aria-hidden="true">↗</span></Button>
              </div>
            </div>
            <div className="contact-card-foot"><span>Web</span><i /> <span>Hardware</span><i /> <span>Ideas</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
