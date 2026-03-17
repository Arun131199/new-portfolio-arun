import { useState, useEffect, useRef } from 'react'
import { RESUME_URL } from '../App'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#specialities' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

// ── Contact details ──
const WHATSAPP_NUMBER = '918056098117' // country code + number, no +
const EMAIL = 'kumaravelarunkumar12@gmail.com'
const WHATSAPP_MESSAGE = 'Hi Arunkumar, I saw your portfolio and would like to discuss a project opportunity.'

function Navbar() {
  const [active, setActive] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showHireModal, setShowHireModal] = useState(false)
  const modalRef = useRef()

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

  useEffect(() => {
    const handleOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowHireModal(false)
      }
    }

    if (showHireModal) {
      document.addEventListener('mousedown', handleOutside)
    }

    return () => document.removeEventListener('mousedown', handleOutside)
  }, [showHireModal])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    window.open(url, '_blank')
    setShowHireModal(false)
  }

  const handleEmail = () => {
    const subject = encodeURIComponent('Project Opportunity — Portfolio Inquiry')
    const body = encodeURIComponent(`Hi Arunkumar,\n\nI came across your portfolio and would like to discuss a potential opportunity.\n\nLooking forward to hearing from you.`)
    window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank')
    setShowHireModal(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__logo">
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" width="12" height="12">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          Arunkumar
        </div>

        <ul className="navbar__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>

              <a href={link.href}
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
          <button className="navbar__hire" onClick={() => setShowHireModal(true)}>
            Hire Me
          </button>
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

              <a key={link.href}
                href={link.href}
                className={active === link.href.replace('#', '') ? 'active' : ''}
                onClick={(e) => scrollTo(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            <a className="navbar__hire"
              href={RESUME_URL}
              download="Arunkumar_Resume.docx"
              style={{ width: 'fit-content' }}
            >
              Download Resume
            </a>
          </div>
        )}
      </nav >

      {/* ── Hire Me Modal ── */}
      {
        showHireModal && (
          <div
            className="hire-modal__overlay"
            onClick={() => setShowHireModal(false)}
          >
            <div
              className="hire-modal"
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                className="hire-modal__close"
                onClick={() => setShowHireModal(false)}
              >
                ✕
              </button>

              {/* Header */}
              <div className="hire-modal__header">
                <div className="hire-modal__avatar">AK</div>
                <div>
                  <div className="hire-modal__name">Arunkumar K</div>
                  <div className="hire-modal__role">
                    🚀 Available for Frontend Roles
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="hire-modal__msg">
                Let’s build something impactful together.
                Choose your preferred way to connect 👇
              </p>

              {/* WhatsApp */}
              <button
                className="hire-modal__btn hire-modal__btn--whatsapp"
                onClick={handleWhatsApp}
              >
                <WhatsAppIcon />
                <div>
                  <div>Chat on WhatsApp</div>
                  <small>Quick response ⚡</small>
                </div>
                <span className="hire-modal__btn-sub">+91 805 609 8117</span>
              </button>

              {/* Email */}
              <button
                className="hire-modal__btn hire-modal__btn--email"
                onClick={handleEmail}
              >
                <EmailIcon />
                <div>
                  <div>Send an Email</div>
                  <small>Formal discussion 📩</small>
                </div>
                <span className="hire-modal__btn-sub">{EMAIL}</span>
              </button>

              {/* Extra CTA */}
              <div className="hire-modal__footer">
                <span>Response within 24 hours ⏱</span>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

function DownloadIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,12 2,6" />
    </svg>
  )
}

export default Navbar