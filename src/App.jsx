import { useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Specialities from './components/Specialities'
import WorkProcess from './components/WorkProcess'
import Projects from './components/Projects'
import Testimonial from './components/Testimonial'
import CtaBand from './components/CtaBand'
import Footer from './components/Footer'

// Resume file: place your resume at /public/Arunkumar_Resume.docx
export const RESUME_URL = '/Arunkumar_Resume.docx'

function App() {
  // Scroll-triggered fade-up for .fade-up elements
  useEffect(() => {
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
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Specialities />
      <WorkProcess />
      <Projects />
      <Testimonial />
      <CtaBand />
      <Footer />
    </>
  )
}

export default App
