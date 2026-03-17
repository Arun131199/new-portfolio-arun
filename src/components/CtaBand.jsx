import { useEffect, useRef } from 'react'
import './CtaBand.css'

function CtaBand() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = sectionRef.current?.querySelectorAll('.cta-band__left, .cta-band__btn')
      if (!els?.length) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      els.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="contact" className="cta-band" ref={sectionRef}>
      <div className="cta-band__left fade-up">
        <h2 className="cta-band__title">
          Have any <span>project idea?</span>
        </h2>
        <p className="cta-band__sub">Let's build something great together.</p>
      </div>

      < a className="cta-band__btn fade-up"
        href="mailto:kumaravelarunkumar12@gmail.com"
      >
        Contact Now →
      </a>
    </section>
  )
}

export default CtaBand