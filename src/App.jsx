import { lazy, Suspense, useEffect, useState } from 'react'
import Loader from './components/Loader'

const TopBar = lazy(() => import("./components/TopBar"))
const Navbar = lazy(() => import("./components/Navbar"))
const Hero = lazy(() => import("./components/Hero"))
const Specialities = lazy(() => import("./components/Specialities"))
const WorkProcess = lazy(() => import("./components/WorkProcess"))
const Projects = lazy(() => import("./components/Projects"))
const Testimonial = lazy(() => import("./components/Testimonial"))
const CtaBand = lazy(() => import("./components/CtaBand"))
const Footer = lazy(() => import("./components/Footer"))

export const RESUME_URL = '/new-portfolio-arun/Arunkumar_Resume.docx'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) return

    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.fade-up')
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
      els.forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }, 300)

    return () => clearTimeout(timer)
  }, [loading])

  return (
    <>

      {loading && <Loader onComplete={() => setLoading(false)} />}

      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Suspense fallback={null}>
          <TopBar />
          <Navbar />
          <Hero />
          <Specialities />
          <WorkProcess />
          <Projects />
          <Testimonial />
          <CtaBand />
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

export default App