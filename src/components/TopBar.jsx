import './TopBar.css'

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <a href="https://linkedin.com/in/arunkumar-k-71274b215/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
        <a href="https://github.com/Arun131199" target="_blank" rel="noopener noreferrer" aria-label="GitHub">gh</a>
        <a href="mailto:kumaravelarunkumar12@gmail.com" aria-label="Email">@</a>
      </div>
      <div className="topbar__right">
        <span>
          <PhoneIcon />
          <b>+91 805 609 8117</b>
        </span>
        <span>
          <MailIcon />
          <b>kumaravelarunkumar12@gmail.com</b>
        </span>
        <span>
          <PinIcon />
          <b>Chennai, Tamil Nadu</b>
        </span>
      </div>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
    </svg>
  )
}
function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,12 2,6"/>
    </svg>
  )
}
function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

export default TopBar
