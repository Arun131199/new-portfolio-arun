import { RESUME_URL } from '../App'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__brand-col">
          <div className="footer__brand">developer · Arunkumar K</div>
          <p className="footer__about">
            Frontend Developer & React Specialist based in Chennai, Tamil Nadu.
            Building high-performance web applications with React.js, TypeScript,
            and modern UI frameworks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <div className="footer__heading">Quick Link</div>
          <ul className="footer__links">
            {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Important */}
        <div>
          <div className="footer__heading">Important</div>
          <ul className="footer__links">
            <li><a href={RESUME_URL} download="Arunkumar_Resume.docx">Resume</a></li>
            <li><a href="https://github.com/Arun131199" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/arunkumar-k-71274b215/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:kumaravelarunkumar12@gmail.com">Email Me</a></li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <div className="footer__heading">Contacts</div>
          <div className="footer__contact-list">
            <div className="footer__contact-item">
              <PhoneIcon />
              <span>+91 805 609 8117</span>
            </div>
            <div className="footer__contact-item">
              <MailIcon />
              <span>kumaravelarunkumar12@gmail.com</span>
            </div>
            <div className="footer__contact-item">
              <PinIcon />
              <span>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          © 2026 <span>Arunkumar K</span>. All rights reserved.
        </p>
        <div className="footer__socials">
          <a href="https://linkedin.com/in/arunkumar-k-71274b215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
          <a href="https://github.com/Arun131199" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
          <a href="mailto:kumaravelarunkumar12@gmail.com" aria-label="Email">@</a>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,12 2,6"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default Footer
