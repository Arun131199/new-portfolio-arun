import { useEffect, useRef, Suspense } from 'react'
import { gsap } from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'
import './Hero.css'


function CoolMan() {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/cool_man.glb`)
  const modelRef = useRef()

  useFrame((state) => {
    if (!modelRef.current) return
    modelRef.current.position.y = -1.0 + Math.sin(state.clock.elapsedTime * 0.8) * 0.08
    modelRef.current.rotation.y += 0.003
  })

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.3}
      position={[0, -1, 0]}
    />
  )
}
function Loader() {
  const ref = useRef()
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.02
      ref.current.rotation.y += 0.01
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.5, 0.1, 16, 60]} />
      <meshStandardMaterial color="#22c55e" wireframe />
    </mesh>
  )
}

function ModelCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 1.0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={2.0} color="#ffffff" />
      <directionalLight position={[5, 8, 5]} intensity={3.0} color="#ffffff" />
      <directionalLight position={[-4, 4, -3]} intensity={1.0} color="#aaffaa" />
      <pointLight position={[2, 3, 3]} intensity={2.5} color="#ffffff" />
      <pointLight position={[-2, 1, 2]} intensity={1.5} color="#22c55e" />
      <pointLight position={[0, -1, 3]} intensity={1.0} color="#ffffff" />

      <Suspense fallback={<Loader />}>
        <CoolMan />
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.45}
          scale={5}
          blur={2}
          color="#22c55e"
        />
      </Suspense>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  )
}


function Hero() {
  const rightRef = useRef(null)

  useEffect(() => {

    const els = ['.hero__eyebrow', '.hero__title', '.hero__desc', '.hero__btns', '.hero__stats-row']
    gsap.set(els, { opacity: 1, y: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo('.hero__eyebrow',
      { opacity: 0, y: 22 }, { opacity: 1, y: 0, duration: 0.55 }, 0.25)
      .fromTo('.hero__title',
        { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.65 }, 0.45)
      .fromTo('.hero__desc',
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.65)
      .fromTo('.hero__btns',
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.8)
      .fromTo('.hero__stats-row',
        { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, 0.95)

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.2)', delay: 0.4 }
      )
    }

    const onMouse = (e) => {
      if (!rightRef.current) return
      const mx = (e.clientX / window.innerWidth - 0.5) * 18
      const my = (e.clientY / window.innerHeight - 0.5) * 12
      gsap.to(rightRef.current, {
        x: mx * 0.28,
        y: my * 0.18,
        duration: 1.4,
        ease: 'power2.out',
      })
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__grid" />
      <div className="hero__glow" />

      <div className="hero__left">
        <p className="hero__eyebrow">Hello, I'm a Frontend Developer</p>

        <h1 className="hero__title">
          This is your<br />developer<br />
          <span className="hero__accent">Arunkumar K</span>
        </h1>

        <p className="hero__desc">
          Frontend Developer with 2+ years of experience building scalable,
          high-performance React.js applications. Proficient in TypeScript,
          Redux Toolkit, Material UI, and RESTful APIs.
        </p>

        <div className="hero__btns">
          <button
            className="btn-primary"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me for Projects
          </button>
          <button
            className="btn-ghost"
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

        <div className="hero__stats-row">
          <div className="hero__stat">
            <span className="stat-num">2+</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Live Apps</span>
          </div>
        </div>
      </div>

      <div className="hero__right" ref={rightRef}>
        <div className="hero__badge">
          <span className="hero__badge-star">✦</span>
          <span className="hero__badge-text">React<br />Dev</span>
        </div>

        <div className="hero__model-frame">
          <div className="hero__model-ring" />
          <div className="hero__model-ring hero__model-ring--2" />
          <div className="hero__model-canvas">
            <ModelCanvas />
          </div>
          <div className="corner corner--tl" />
          <div className="corner corner--br" />
        </div>
      </div>
    </section>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/cool_man.glb`)

export default Hero