import { useEffect, useRef } from 'react'
import './Testimonial.css'

function Testimonial() {
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
    <section id="testimonial" className="section" ref={sectionRef}>
      <div className="sec-eyebrow">Reviews</div>
      <div className="sec-title">What they <span>say</span></div>
      <div className="sec-line" />
      <div className="testi__grid">
        <div className="testi-card fade-up">
          <div className="testi-card__stars">★ ★ ★ ★ ★</div>
          <p className="testi-card__quote">
            "Arunkumar delivered exactly what we needed — clean, scalable React code
            with great attention to UI detail. The performance optimisations he applied
            made a noticeable difference in our app's speed. Highly recommend."
          </p>
          <div className="testi-card__author">
            <div className="testi-card__avatar">ET</div>
            <div>
              <div className="testi-card__name">Engineering Team</div>
              <div className="testi-card__role">Emayam Technology · 2025</div>
            </div>
          </div>
        </div>

        <div className="testi-card fade-up">
          <div className="testi-card__stars">★ ★ ★ ★ ★</div>
          <p className="testi-card__quote">
            "Great work on our UAV company website. Arunkumar handled the full
            React implementation with TypeScript, API integration, and responsive
            design flawlessly. Communication was smooth throughout the project."
          </p>
          <div className="testi-card__author">
            <div className="testi-card__avatar">VP</div>
            <div>
              <div className="testi-card__name">Product Team</div>
              <div className="testi-card__role">Vayuratha Private Limited · 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial