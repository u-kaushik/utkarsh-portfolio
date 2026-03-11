import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ---- Card 1: Diagnostic Shuffler ---- */
function ShufflerCard() {
  const labels = [
    { title: 'Frontend', sub: 'Design to deployed in hours' },
    { title: 'Backend', sub: 'API to production, same day' },
    { title: 'AI Pipeline', sub: 'Autonomous by morning' },
  ]
  const [order, setOrder] = useState([0, 1, 2])

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev]
        next.unshift(next.pop())
        return next
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-offwhite border border-paper rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-2">
        01
      </span>
      <h3 className="font-heading font-bold text-xl mb-2">Solo ≠ Slow</h3>
      <p className="font-heading text-sm text-ink/60 mb-6">
        One developer. Team-grade output. I've shipped multi-tenant SaaS, autonomous AI pipelines, and production apps — each in weeks.
      </p>
      <div className="relative flex-1 min-h-[140px]">
        {order.map((idx, pos) => (
          <div
            key={idx}
            className="absolute inset-x-0 bg-paper border border-ink/5 rounded-2xl px-5 py-4 transition-all duration-500"
            style={{
              top: `${pos * 16}px`,
              zIndex: 3 - pos,
              opacity: 1 - pos * 0.25,
              transform: `scale(${1 - pos * 0.04})`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <span className="font-heading font-semibold text-sm">
              {labels[idx].title}
            </span>
            <span className="font-mono text-[11px] text-ink/50 ml-3">
              {labels[idx].sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---- Card 2: Telemetry Typewriter ---- */
function TypewriterCard() {
  const messages = [
    '> Agent Jarvis: routing task to Echo...',
    '> Pipeline: 4 artifacts generated',
    '> Memory: semantic context updated',
    '> Scraper: 12 leads enriched',
    '> Deploy: production build live',
    '> Agent Luna: 3 assets rendered',
    '> System: all agents operational',
  ]
  const [lines, setLines] = useState([])
  const [currentMsg, setCurrentMsg] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const msg = messages[msgIdx % messages.length]
    if (charIdx < msg.length) {
      const timer = setTimeout(() => {
        setCurrentMsg(msg.slice(0, charIdx + 1))
        setCharIdx(charIdx + 1)
      }, 30 + Math.random() * 40)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev.slice(-4), msg])
        setCurrentMsg('')
        setCharIdx(0)
        setMsgIdx(msgIdx + 1)
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [charIdx, msgIdx])

  return (
    <div className="bg-offwhite border border-paper rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">
          02
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
          <span className="font-mono text-[10px] text-signal">Live Feed</span>
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl mb-2">
        AI Runs the Show
      </h3>
      <p className="font-heading text-sm text-ink/60 mb-6">
        I don't bolt AI onto existing stacks. My systems have agents making routing decisions, pipelines handling orchestration, humans intervening only when they want to.
      </p>
      <div className="flex-1 bg-ink rounded-xl p-4 font-mono text-[11px] leading-relaxed overflow-hidden">
        {lines.map((line, i) => (
          <div key={i} className="text-offwhite/50">
            {line}
          </div>
        ))}
        <div className="text-offwhite">
          {currentMsg}
          <span className="cursor-blink text-signal">_</span>
        </div>
      </div>
    </div>
  )
}

/* ---- Card 3: Cursor Protocol Scheduler ---- */
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const [activeDay, setActiveDay] = useState(-1)
  const [cursorPos, setCursorPos] = useState({ x: -30, y: 50, visible: false })
  const [saved, setSaved] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const sequence = [
      // cursor enters
      () => setCursorPos({ x: 10, y: 50, visible: true }),
      // move to Tuesday
      () => setCursorPos({ x: 95, y: 20, visible: true }),
      // click Tuesday
      () => setActiveDay(2),
      // move to Thursday
      () => setCursorPos({ x: 175, y: 20, visible: true }),
      // click Thursday
      () => setActiveDay(4),
      // move to Save
      () => setCursorPos({ x: 200, y: 55, visible: true }),
      // click Save
      () => setSaved(true),
      // cursor fades
      () => setCursorPos({ x: 260, y: 55, visible: false }),
      // reset
      () => {
        setActiveDay(-1)
        setSaved(false)
        setCursorPos({ x: -30, y: 50, visible: false })
      },
    ]

    const timer = setTimeout(() => {
      sequence[step]()
      setStep((s) => (s + 1) % sequence.length)
    }, step === sequence.length - 1 ? 2000 : 700)

    return () => clearTimeout(timer)
  }, [step])

  return (
    <div className="bg-offwhite border border-paper rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase mb-2">
        03
      </span>
      <h3 className="font-heading font-bold text-xl mb-2">Built to Earn</h3>
      <p className="font-heading text-sm text-ink/60 mb-6">
        A decade of client work taught me something most developers never learn: code that doesn't move a business metric is expensive typing.
      </p>
      <div className="flex-1 relative bg-paper rounded-xl p-4 overflow-hidden">
        {/* Week grid */}
        <div className="flex gap-2 mb-3">
          {days.map((d, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono text-xs transition-all duration-300 ${
                i === activeDay || (activeDay >= 2 && (i === 2 || i === 4) && i <= activeDay)
                  ? 'bg-signal text-offwhite scale-95'
                  : 'bg-offwhite text-ink/50'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        {/* Save button */}
        <div
          className={`inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[10px] transition-all duration-300 ${
            saved ? 'bg-signal text-offwhite' : 'bg-ink/5 text-ink/40'
          }`}
        >
          {saved ? 'Saved' : 'Save'}
        </div>
        {/* Animated cursor */}
        <svg
          className="absolute pointer-events-none transition-all duration-500 ease-out"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            opacity: cursorPos.visible ? 1 : 0,
          }}
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
        >
          <path
            d="M1 1L1 16.5L5.5 12.5L9 20L12 18.5L8.5 11L14 10.5L1 1Z"
            fill="#111111"
            stroke="#F5F3EE"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  )
}

/* ---- Features Section ---- */
export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="mb-12">
        <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">
          What I bring
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="feature-card">
          <ShufflerCard />
        </div>
        <div className="feature-card">
          <TypewriterCard />
        </div>
        <div className="feature-card">
          <SchedulerCard />
        </div>
      </div>
    </section>
  )
}