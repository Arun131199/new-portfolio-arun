import './Specialities.css'

const SPECS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    name: 'React.js Development',
    desc: 'Scalable SPAs using functional components, custom hooks, Redux Toolkit, and React Router v6 for complex web applications.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    name: 'Responsive UI Design',
    desc: 'Pixel-perfect, mobile-first UIs using Material UI (MUI), Tailwind CSS, Bootstrap, and Framer Motion animations.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    name: 'REST API Integration',
    desc: 'Seamless API integration with Axios, following HTTP standards with proper status codes, error handling, and loading states.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    name: 'Testing & Quality',
    desc: 'Reliable code with Jest, Enzyme, and React Testing Library covering components, hooks, and business logic.',
  },
]

function Specialities() {
  return (
    <section id="specialities" className="section section--alt">
      <div className="sec-eyebrow">Speciality</div>
      <div className="sec-title">My <span>specialities</span></div>
      <div className="sec-line" />
      <p className="sec-sub">
        Building modern, responsive web applications with cutting-edge frontend
        technologies and best practices.
      </p>
      <div className="spec__grid">
        {SPECS.map((s) => (
          <div className="spec-card fade-up" key={s.name}>
            <div className="spec-card__icon">{s.icon}</div>
            <div className="spec-card__name">{s.name}</div>
            <div className="spec-card__desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specialities
