import Brand from '../ui/Brand.jsx'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-grid">
          <div className="footer-brand-block">
            <Brand />
            <p className="footer-description">Student developer exploring the space between web and hardware.</p>
            <div className="footer-learning"><span /> Learning by building</div>
          </div>
          <div className="footer-column">
            <p className="footer-label">Explore</p>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-column">
            <p className="footer-label">Find me</p>
            <div className="footer-links">
              <a href="mailto:your.email@example.com">Email <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sun VannaRith</span>
          <span className="footer-built">Built with React <i aria-hidden="true">·</i> Made with curiosity</span>
          <a className="footer-top-link" href="#home">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
