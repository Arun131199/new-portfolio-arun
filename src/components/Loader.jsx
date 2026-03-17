import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Loader.css'

function Loader({ onComplete }) {
    const loaderRef = useRef(null)
    const progressRef = useRef(null)
    const percentRef = useRef(null)
    const textRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.fromTo(
            progressRef.current,
            { width: '0%' },
            {
                width: '100%',
                duration: 3.5,
                ease: 'power2.inOut',
            }
        )


        const obj = { val: 0 }
        tl.to(
            obj,
            {
                val: 100,
                duration: 3.5,
                ease: 'power2.inOut',
                onUpdate: () => {
                    if (percentRef.current)
                        percentRef.current.textContent = Math.round(obj.val) + '%'
                },
            },
            0
        )

        tl.from(
            '.loader__letter',
            {
                opacity: 0,
                y: 30,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power3.out'
            },
            0
        )
        tl.to(
            loaderRef.current,
            {
                yPercent: -100,
                duration: 0.9,
                ease: 'power4.inOut',
                delay: 0.3,
                onComplete: () => onComplete?.(),
            }
        )
    }, [onComplete])

    const name = 'ARUNKUMAR'

    return (
        <div className="loader" ref={loaderRef}>
            <div className="loader__bg" />

            <div className="loader__name" ref={textRef}>
                {name.split('').map((char, i) => (
                    <span className="loader__letter" key={i}>{char}</span>
                ))}
            </div>

            <div className="loader__role">Frontend Developer</div>

            <div className="loader__bar-wrap">
                <div className="loader__bar" ref={progressRef} />
            </div>

            <div className="loader__percent" ref={percentRef}>0%</div>
            <div className="loader__dots">
                {Array.from({ length: 25 }).map((_, i) => (
                    <div className="loader__dot" key={i} />
                ))}
            </div>
        </div>
    )
}

export default Loader