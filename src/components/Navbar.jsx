import { useState, useEffect } from 'react'
import { RESUME_URL } from '../App'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#specialities' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      const sections = document.querySelectorAll('section[id]')
      let current = 'hero'
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) current = sec.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">
        <div className="navbar__logo-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" width="12" height="12">
            <polyline points="16 18 22 12 16 6"/>
            <polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        Arunkumar
      </div>

      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={active === link.href.replace('#', '') ? 'active' : ''}
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <a className="navbar__resume" href={RESUME_URL} download="Arunkumar_Resume.docx">
          <DownloadIcon /> Resume
        </a>
        <button className="navbar__hire">Hire Me</button>
      </div>

      <button
        className={`navbar__ham ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href.replace('#', '') ? 'active' : ''}
              onClick={(e) => scrollTo(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a className="navbar__hire" href={RESUME_URL} download="Arunkumar_Resume.docx" style={{ width: 'fit-content' }}>
            Download Resume
          </a>
        </div>
      )}
    </nav>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z"/>
    </svg>
  )
}

export default Navbar
