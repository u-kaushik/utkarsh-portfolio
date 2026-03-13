import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* ---- Card 1: Diagnostic Shuffler ---- */
function ShufflerCard() {
  const labels = [
    { title: 'Frontend', sub: 'Concept to components in hours' },
    { title: 'Backend', sub: 'API + auth + deploy, same sprint' },
    { title: 'AI Pipeline', sub: 'Agents wired and running' },
    { title: 'Deployment', sub: 'CI/CD, domains, live in minutes' },
  ]
  const [order, setOrder] = useState([0, 1, 2, 3])

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
    <div className="bg-[#1A1210] border border-offwhite/[0.06] rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase mb-2">
        01
      </span>
      <h3 className="font-heading font-bold text-xl text-offwhite mb-2">Idea to Production</h3>
      <p className="font-heading text-sm text-offwhite/50 mb-6">
        You describe the vision. I handle frontend, backend, AI, and deployment. Full-stack means the whole thing ships together, fast.
      </p>
      <div className="relative flex-1 min-h-[160px]">
        {order.map((idx, pos) => (
          <div
            key={idx}
            className="absolute inset-x-0 rounded-2xl px-5 py-4 transition-all duration-500"
            style={{
              top: `${pos * 14}px`,
              zIndex: 4 - pos,
              opacity: pos === 0 ? 1 : pos === 1 ? 0.85 : pos === 2 ? 0.6 : 0.35,
              transform: `scale(${1 - pos * 0.035})`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
              background: pos === 0 ? 'rgba(230, 59, 46, 0.18)' : `rgba(245, 243, 238, ${0.1 - pos * 0.02})`,
              border: pos === 0 ? '1px solid rgba(230, 59, 46, 0.35)' : '1px solid rgba(245, 243, 238, 0.12)',
            }}
          >
            <span className="font-heading font-semibold text-sm text-offwhite">
              {labels[idx].title}
            </span>
            <span className="font-mono text-[11px] text-offwhite/50 ml-3">
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
    '> Jarvis: new task from client brief...',
    '> Sola: researching competitor landscape',
    '> Archie: architecture drafted, 3 services',
    '> Kai: build complete, 12 components',
    '> Iris: code review passed, 0 issues',
    '> Luna: 3 brand assets generated',
    '> Dash: deployed to production',
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
    <div className="bg-[#1A1210] border border-offwhite/[0.06] rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase">
          02
        </span>
        <span className="ml-auto flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
          <span className="font-mono text-[10px] text-signal">Live Feed</span>
        </span>
      </div>
      <h3 className="font-heading font-bold text-xl text-offwhite mb-2">
        AI-Native Architecture
      </h3>
      <p className="font-heading text-sm text-offwhite/50 mb-6">
        I build systems where AI agents handle research, drafting, review, and deployment. Not AI bolted on after the fact — designed in from the start.
      </p>
      <div className="flex-1 bg-[#0D0908] rounded-xl p-4 font-mono text-[11px] leading-relaxed overflow-hidden border border-offwhite/[0.04]">
        {lines.map((line, i) => (
          <div key={i} className="text-offwhite/40">
            {line}
          </div>
        ))}
        <div className="text-offwhite/80">
          {currentMsg}
          <span className="cursor-blink text-signal">_</span>
        </div>
      </div>
    </div>
  )
}

/* ---- Card 3: Business Metrics Animation ---- */
function MetricsCard() {
  const metrics = [
    { label: 'Conversion', target: 24.3, suffix: '%', up: true },
    { label: 'Revenue', target: 48, suffix: 'k', up: true },
    { label: 'Dev Cost', target: 72, suffix: '%', up: false },
  ]
  const [values, setValues] = useState(metrics.map(() => 0))
  const [phase, setPhase] = useState(0)

  // Animate metrics counting up, then reset
  useEffect(() => {
    if (phase === 0) {
      // Count up
      let frame = 0
      const interval = setInterval(() => {
        frame++
        const p = Math.min(frame / 50, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        setValues(metrics.map((m) => +(m.target * ease).toFixed(1)))
        if (p >= 1) {
          clearInterval(interval)
          setTimeout(() => setPhase(1), 3000)
        }
      }, 40)
      return () => clearInterval(interval)
    } else {
      // Reset and restart
      setValues(metrics.map(() => 0))
      const timer = setTimeout(() => setPhase(0), 800)
      return () => clearTimeout(timer)
    }
  }, [phase])

  const stages = ['Brief', 'Scope', 'MVP', 'Launch']
  const activeStage = values[0] === 0 ? 0 : values[0] < 10 ? 1 : values[0] < 20 ? 2 : 3

  return (
    <div className="bg-[#1A1210] border border-offwhite/[0.06] rounded-[2rem] p-8 shadow-sm h-full flex flex-col">
      <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase mb-2">
        03
      </span>
      <h3 className="font-heading font-bold text-xl text-offwhite mb-2">Commercial Instinct</h3>
      <p className="font-heading text-sm text-offwhite/50 mb-6">
        Ten years of working directly with business owners means every technical decision is anchored to a commercial outcome. I build what matters.
      </p>
      <div className="flex-1 flex flex-col gap-3">
        {/* Pipeline stages */}
        <div className="flex items-center gap-1">
          {stages.map((stage, i) => (
            <div key={stage} className="flex items-center flex-1">
              <div
                className={`flex-1 py-1.5 rounded-lg text-center font-mono text-[9px] transition-all duration-500 ${
                  i <= activeStage
                    ? 'bg-signal/20 text-signal border border-signal/30'
                    : 'bg-offwhite/[0.04] text-offwhite/25 border border-offwhite/[0.06]'
                }`}
              >
                {stage}
              </div>
              {i < stages.length - 1 && (
                <div className={`w-2 h-px mx-0.5 transition-colors duration-500 ${i < activeStage ? 'bg-signal/40' : 'bg-offwhite/10'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Metric cards */}
        <div className="flex gap-2 flex-1">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className="flex-1 bg-offwhite/[0.04] border border-offwhite/[0.06] rounded-xl p-3 flex flex-col justify-between"
            >
              <span className="font-mono text-[8px] text-offwhite/30 uppercase">{m.label}</span>
              <span className="font-heading font-bold text-lg text-offwhite/90">
                {m.up ? '' : '-'}{values[i]}{m.suffix}
              </span>
              <div className="flex items-center gap-1">
                <span className={`text-[10px] font-mono ${m.up ? 'text-green-400' : 'text-signal'}`}>
                  {m.up ? '\u2191' : '\u2193'}
                </span>
                <div className="flex-1 h-1 rounded-full bg-offwhite/[0.06] overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${m.up ? 'bg-green-400/60' : 'bg-signal/60'}`}
                    style={{ width: `${(values[i] / m.target) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
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
        <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase">
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
          <MetricsCard />
        </div>
      </div>
    </section>
  )
}