import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Listen',
    description:
      'We start with your vision, not a spec doc. What are you trying to build? Who is it for? What does success look like? I need to understand the problem the way you see it.',
    animation: 'helix',
  },
  {
    num: '02',
    title: 'Build',
    description:
      'AI-augmented, full-stack, production-grade. I handle the architecture, the frontend, the backend, the deployment. You get progress you can see and touch, not status updates.',
    animation: 'scanner',
  },
  {
    num: '03',
    title: 'Deliver',
    description:
      'Working software with live URLs. Every project I build is production-ready — real authentication, real data, real infrastructure. Ready for users from day one.',
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

      const gap = 24
      const scanY = (frame * 1.5) % h
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          const dist = Math.abs(y - scanY)
          const glow = dist < 30 ? 1 - dist / 30 : 0
          ctx.fillStyle =
            glow > 0
              ? `rgba(230, 59, 46, ${0.2 + glow * 0.8})`
              : 'rgba(245, 243, 238, 0.06)'
          const r = glow > 0 ? 2.5 + glow * 1.5 : 2
          ctx.beginPath()
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

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
        stroke="#F5F3EE"
        strokeWidth="0.5"
        opacity="0.06"
      />
    </svg>
  )
}

const animations = { helix: HelixCanvas, scanner: ScannerCanvas, waveform: WaveformSVG }

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    // Disable pin scroll on mobile — it's janky on small screens
    const isMobile = window.matchMedia('(max-width: 768px)').matches

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        if (isMobile) {
          // Simple fade-in on mobile
          gsap.from(card, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          })
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: 'top 10%',
            end: 'bottom 10%',
            pin: true,
            pinSpacing: true,
            onEnter: () => {
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
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="protocol" ref={sectionRef} className="py-24 md:py-32">
      <div className="px-6 md:px-16 lg:px-24 mb-16 max-w-7xl mx-auto">
        <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase">
          How We Work Together
        </span>
      </div>

      {steps.map((step, i) => {
        const AnimComponent = animations[step.animation]
        return (
          <div
            key={step.num}
            ref={(el) => (cardsRef.current[i] = el)}
            className="min-h-[auto] md:h-screen flex items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 py-8 md:py-0"
          >
            <div className="w-full max-w-6xl mx-auto bg-[#1A1210] border border-offwhite/[0.06] rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 shadow-lg">
              <div className="flex flex-col justify-center">
                <span className="font-mono text-signal text-sm mb-4">{step.num}</span>
                <h3 className="font-heading font-bold text-4xl md:text-6xl text-offwhite mb-4">
                  {step.title}
                </h3>
                <p className="font-heading text-offwhite/50 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="h-[250px] md:h-[350px] rounded-[2rem] bg-[#0D0908] border border-offwhite/[0.04] overflow-hidden">
                <AnimComponent />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}