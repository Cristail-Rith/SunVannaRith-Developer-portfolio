import Brand from '../ui/Brand.jsx'

function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="site-header  ">
      <nav className="nav-shell" aria-label="Main navigation">
        <Brand />
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☼' : '☾'}</span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <a className="nav-cta" href="#contact">Hire me</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
