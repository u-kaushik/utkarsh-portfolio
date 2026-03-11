import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Understand',
    description:
      'Not the technical problem. The business one. What does success look like in revenue, users, or hours saved? Everything starts here.',
    animation: 'helix',
  },
  {
    num: '02',
    title: 'Build',
    description:
      'AI-augmented, full-stack, production-grade. Design through deployment in one pair of hands. No handoffs, no waiting on anyone.',
    animation: 'scanner',
  },
  {
    num: '03',
    title: 'Prove',
    description:
      "Live URLs. Real users. Every project in my portfolio has a working demo you can touch. I don't do mockups.",
    animation: 'waveform',
  },
]

/* Rotating helix */
function HelixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId

    const draw = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(230, 59, 46, 0.3)'
      ctx.lineWidth = 1.5

      for (let strand = 0; strand < 2; strand++) {
        ctx.beginPath()
        for (let i = 0; i <= 60; i++) {
          const t = i / 60
          const angle = t * Math.PI * 4 + frame * 0.02 + strand * Math.PI
          const x = w / 2 + Math.cos(angle) * (w * 0.3)
          const y = t * h
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }

      // Connection lines
      ctx.strokeStyle = 'rgba(230, 59, 46, 0.1)'
      for (let i = 0; i <= 12; i++) {
        const t = i / 12
        const angle = t * Math.PI * 4 + frame * 0.02
        const x1 = w / 2 + Math.cos(angle) * (w * 0.3)
        const x2 = w / 2 + Math.cos(angle + Math.PI) * (w * 0.3)
        const y = t * h
        ctx.beginPath()
        ctx.moveTo(x1, y)
        ctx.lineTo(x2, y)
        ctx.stroke()
      }

      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

/* Scanning laser grid */
function ScannerCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId

    const draw = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Dot grid
      const gap = 24
      const scanY = (frame * 1.5) % h
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          const dist = Math.abs(y - scanY)
          const glow = dist < 30 ? 1 - dist / 30 : 0
          ctx.fillStyle =
            glow > 0
              ? `rgba(230, 59, 46, ${0.2 + glow * 0.8})`
              : 'rgba(17, 17, 17, 0.08)'
          const r = glow > 0 ? 2.5 + glow * 1.5 : 2
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      // Scan line
      ctx.strokeStyle = 'rgba(230, 59, 46, 0.6)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(w, scanY)
      ctx.stroke()

      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

/* Pulsing waveform */
function WaveformSVG() {
  const pathRef = useRef(null)

  useEffect(() => {
    let frame = 0
    let animId

    const animate = () => {
      const points = []
      for (let i = 0; i <= 100; i++) {
        const x = (i / 100) * 400
        const y =
          60 +
          Math.sin(i * 0.15 + frame * 0.05) * 25 +
          Math.sin(i * 0.08 + frame * 0.03) * 15 +
          (Math.random() - 0.5) * 2
        points.push(`${i === 0 ? 'M' : 'L'}${x},${y}`)
      }
      if (pathRef.current) {
        pathRef.current.setAttribute('d', points.join(' '))
      }
      frame++
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <svg viewBox="0 0 400 120" className="w-full h-full" preserveAspectRatio="none">
      <path
        ref={pathRef}
        fill="none"
        stroke="#E63B2E"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line
        x1="0"
        y1="60"
        x2="400"
        y2="60"
        stroke="#111111"
        strokeWidth="0.5"
        opacity="0.1"
      />
    </svg>
  )
}

const animations = { helix: HelixCanvas, scanner: ScannerCanvas, waveform: WaveformSVG }

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        ScrollTrigger.create({
          trigger: card,
          start: 'top 15%',
          end: 'bottom 15%',
          pin: true,
          pinSpacing: true,
          onEnter: () => {
            // Scale and blur the previous card
            if (i > 0 && cardsRef.current[i - 1]) {
              gsap.to(cardsRef.current[i - 1], {
                scale: 0.92,
                opacity: 0.5,
                filter: 'blur(8px)',
                duration: 0.5,
                ease: 'power2.inOut',
              })
            }
          },
          onLeaveBack: () => {
            if (i > 0 && cardsRef.current[i - 1]) {
              gsap.to(cardsRef.current[i - 1], {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.5,
                ease: 'power2.inOut',
              })
            }
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={sectionRef} className="py-24 md:py-32">
      <div className="px-6 md:px-16 lg:px-24 mb-16">
        <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">
          How I Work
        </span>
      </div>

      {steps.map((step, i) => {
        const AnimComponent = animations[step.animation]
        return (
          <div
            key={step.num}
            ref={(el) => (cardsRef.current[i] = el)}
            className="min-h-screen flex items-center px-6 md:px-16 lg:px-24"
          >
            <div className="w-full bg-offwhite border border-paper rounded-[3rem] p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 shadow-sm">
              <div className="flex flex-col justify-center">
                <span className="font-mono text-signal text-sm mb-4">{step.num}</span>
                <h3 className="font-heading font-bold text-4xl md:text-6xl mb-4">
                  {step.title}
                </h3>
                <p className="font-heading text-ink/60 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="h-[250px] md:h-[350px] rounded-[2rem] bg-paper/50 overflow-hidden">
                <AnimComponent />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
