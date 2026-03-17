import { useEffect, useRef } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    label: 'INDIGO',
    name: 'Indigo Airlines Website Clone',
    tags: ['React.js', 'TypeScript', 'Redux', 'MUI', 'Jest', 'Enzyme'],
    desc: 'Pixel-accurate clone of IndiGo Airlines UI with full booking flow, seat selection, custom hooks, and Redux Toolkit global state management.',
    github: 'https://github.com/Arun131199',
  },
  {
    label: 'TRAVEL',
    name: 'Travel Booking Application',
    tags: ['React.js', 'TypeScript', 'Redux', 'REST API', 'MUI', 'Jest'],
    desc: 'Full-featured travel app with flight search, trip planning, booking confirmation, and multi-step payment flow using normalised Redux store.',
    github: 'https://github.com/Arun131199',
  },
  {
    label: 'FOCULT',
    name: 'Focult – Employee Monitoring',
    tags: ['React.js', 'TypeScript', 'MUI', 'Tailwind', 'RTL'],
    desc: 'Production SPA for employee activity tracking, attendance, and performance data with real-time REST API integration at Emayam Technology.',
    github: 'https://github.com/Arun131199',
  },
]

function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = sectionRef.current?.querySelectorAll('.fade-up')
      if (!cards?.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      cards.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="section section--alt" ref={sectionRef}>
      <div className="sec-eyebrow">Portfolio</div>
      <div className="sec-title">My <span>projects</span></div>
      <div className="sec-line" />
      <div className="projects__grid">
        {PROJECTS.map((proj) => (
          <div className="proj-card fade-up" key={proj.name}>
            <div className="proj-card__thumb">
              <span className="proj-card__label">{proj.label}</span>
            </div>
            <div className="proj-card__body">
              <div className="proj-card__tags">
                {proj.tags.map((t) => <span className="ptag" key={t}>{t}</span>)}
              </div>
              <div className="proj-card__name">{proj.name}</div>
              <div className="proj-card__desc">{proj.desc}</div>
              <a className="proj-card__link" href={proj.github} target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects