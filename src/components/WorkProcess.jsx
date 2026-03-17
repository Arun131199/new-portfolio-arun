import { useEffect, useRef } from 'react'
import './WorkProcess.css'

const STEPS = [
  { num: '01', title: 'Understand Requirements', desc: 'Deeply analyse project requirements, user stories, and design specs before writing a single line of code.' },
  { num: '02', title: 'Architecture & Setup', desc: 'Design reusable component architecture, set up Redux Toolkit state management, and configure React Router.' },
  { num: '03', title: 'Build & Integrate', desc: 'Develop UI components with MUI/Tailwind, integrate REST APIs, and implement business logic with custom hooks.' },
  { num: '04', title: 'Test & Optimise', desc: 'Write Jest/Enzyme tests, optimise performance with useMemo/useCallback, and ensure cross-browser compatibility.' },
]

function WorkProcess() {
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
    <section id="process" className="section" ref={sectionRef}>
      <div className="sec-eyebrow">About Me</div>
      <div className="sec-title">My <span>work process</span></div>
      <div className="sec-line" />
      <p className="sec-sub">A structured approach to delivering high-quality frontend solutions — from planning to deployment.</p>
      <div className="process__grid">
        {STEPS.map((step) => (
          <div className="process-card fade-up" key={step.num}>
            <div className="process-card__num">{step.num}</div>
            <div className="process-card__title">{step.title}</div>
            <div className="process-card__desc">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkProcess