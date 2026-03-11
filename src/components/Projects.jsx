import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, Bot, LayoutDashboard, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ============================================
   LIVE MOCKUP: Agent Pipeline Visualization
   ============================================ */
function AgentPipelineMockup() {
  const canvasRef = useRef(null)
  const [agents] = useState([
    { name: 'SOLA', x: 0.08, y: 0.18, color: '#E63B2E' },
    { name: 'ARCHIE', x: 0.28, y: 0.45, color: '#E63B2E' },
    { name: 'KAI', x: 0.5, y: 0.18, color: '#E63B2E' },
    { name: 'IRIS', x: 0.72, y: 0.45, color: '#E63B2E' },
    { name: 'DASH', x: 0.92, y: 0.18, color: '#E63B2E' },
    { name: 'JARVIS', x: 0.5, y: 0.7, color: '#E8E4DD' },
  ])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let frame = 0
    let animId

    const draw = () => {
      const dpr = 2
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // Draw connection lines with animated pulse
      // Sola→Archie→Kai→Iris→Dash pipeline, all connecting to Jarvis (orchestrator)
      const connections = [
        [0, 1], [1, 2], [2, 3], [3, 4],
        [0, 5], [1, 5], [2, 5], [3, 5], [4, 5],
      ]
      connections.forEach(([a, b]) => {
        const from = agents[a]
        const to = agents[b]
        const fx = from.x * w, fy = from.y * h
        const tx = to.x * w, ty = to.y * h

        // Static line
        ctx.strokeStyle = 'rgba(232, 228, 221, 0.08)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(fx, fy)
        ctx.lineTo(tx, ty)
        ctx.stroke()

        // Animated particle along line
        const speed = 0.001 + (a * 0.0003)
        const t = ((frame * speed) + a * 0.2) % 1
        const px = fx + (tx - fx) * t
        const py = fy + (ty - fy) * t
        const glow = ctx.createRadialGradient(px, py, 0, px, py, 8)
        glow.addColorStop(0, 'rgba(230, 59, 46, 0.8)')
        glow.addColorStop(1, 'rgba(230, 59, 46, 0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(px, py, 8, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw agent nodes
      agents.forEach((agent, i) => {
        const x = agent.x * w
        const y = agent.y * h
        const pulse = Math.sin(frame * 0.03 + i) * 3

        // Outer ring
        ctx.strokeStyle = i === 5 ? 'rgba(232, 228, 221, 0.3)' : 'rgba(230, 59, 46, 0.3)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(x, y, 18 + pulse, 0, Math.PI * 2)
        ctx.stroke()

        // Inner dot
        ctx.fillStyle = i === 5 ? '#E8E4DD' : '#E63B2E'
        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fill()

        // Label
        ctx.fillStyle = 'rgba(245, 243, 238, 0.5)'
        ctx.font = '9px "Space Mono", monospace'
        ctx.textAlign = 'center'
        ctx.fillText(agent.name, x, y + 32)
      })

      // Bottom status bar
      const barY = h * 0.78
      ctx.fillStyle = 'rgba(245, 243, 238, 0.03)'
      ctx.fillRect(w * 0.08, barY, w * 0.84, 1)

      const statuses = ['ROUTING', 'BUILDING', 'DEPLOYING', 'COMPLETE']
      const activeIdx = Math.floor((frame * 0.01) % 4)
      statuses.forEach((s, i) => {
        const sx = w * (0.15 + i * 0.22)
        ctx.fillStyle = i === activeIdx ? 'rgba(230, 59, 46, 0.9)' : 'rgba(245, 243, 238, 0.15)'
        ctx.font = `${i === activeIdx ? 'bold ' : ''}9px "Space Mono", monospace`
        ctx.textAlign = 'center'
        ctx.fillText(s, sx, barY + 20)
        if (i === activeIdx) {
          ctx.fillStyle = 'rgba(230, 59, 46, 0.15)'
          ctx.fillRect(sx - 30, barY + 8, 60, 16)
        }
      })

      frame++
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(animId)
  }, [agents])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

/* ============================================
   LIVE MOCKUP: Mission Control Dashboard
   ============================================ */
function DashboardLiveMockup() {
  const [counters, setCounters] = useState({ tasks: 0, agents: 0, uptime: 0 })
  const [feed, setFeed] = useState([])
  const [bars, setBars] = useState(Array(16).fill(20))
  const feedIdx = useRef(0)

  const feedMessages = [
    { agent: 'Jarvis', msg: 'Routed task #847 to Echo', type: 'route' },
    { agent: 'Sola', msg: 'Research complete — 12 sources', type: 'done' },
    { agent: 'Archie', msg: 'Architecture drafted for module', type: 'done' },
    { agent: 'Kai', msg: 'Build complete — 3 components', type: 'done' },
    { agent: 'Iris', msg: 'Code review passed, 0 issues', type: 'approve' },
    { agent: 'Luna', msg: 'Generated 3 assets via Nano Banana', type: 'done' },
    { agent: 'Echo', msg: 'Draft complete — 1,200 words', type: 'done' },
    { agent: 'Quinn', msg: 'Approval: blog post #23', type: 'approve' },
    { agent: 'Dash', msg: 'Deployed to production', type: 'done' },
    { agent: 'Jarvis', msg: 'Memory: stored semantic context', type: 'route' },
    { agent: 'System', msg: 'All 9 agents operational', type: 'metric' },
  ]

  // Animate counters
  useEffect(() => {
    const targets = { tasks: 847, agents: 9, uptime: 99.7 }
    let frame = 0
    const interval = setInterval(() => {
      frame++
      const p = Math.min(frame / 40, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCounters({
        tasks: Math.floor(targets.tasks * ease),
        agents: Math.floor(targets.agents * ease),
        uptime: +(targets.uptime * ease).toFixed(1),
      })
      if (p >= 1) clearInterval(interval)
    }, 40)
    return () => clearInterval(interval)
  }, [])

  // Animate feed
  useEffect(() => {
    const interval = setInterval(() => {
      const msg = feedMessages[feedIdx.current % feedMessages.length]
      setFeed((prev) => [msg, ...prev].slice(0, 5))
      feedIdx.current++
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  // Animate chart bars
  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map((v) => Math.max(15, Math.min(95, v + (Math.random() - 0.45) * 20)))
      )
    }, 800)
    return () => clearInterval(interval)
  }, [])

  const typeColor = { route: 'text-signal', done: 'text-green-400', metric: 'text-offwhite/60', approve: 'text-yellow-400' }

  return (
    <div className="w-full h-full flex flex-col gap-3 p-1">
      {/* Stat row */}
      <div className="flex gap-3">
        {[
          { label: 'Tasks routed', value: counters.tasks.toLocaleString(), accent: false },
          { label: 'Active agents', value: counters.agents, accent: true },
          { label: 'Uptime %', value: counters.uptime, accent: false },
        ].map((stat) => (
          <div key={stat.label} className={`flex-1 rounded-xl p-3 ${stat.accent ? 'bg-signal/10 border border-signal/20' : 'bg-offwhite/[0.04] border border-offwhite/[0.06]'}`}>
            <span className="font-mono text-[9px] text-offwhite/30 block mb-1">{stat.label}</span>
            <span className={`font-heading font-bold text-lg ${stat.accent ? 'text-signal' : 'text-offwhite/80'}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom: chart + feed */}
      <div className="flex-1 flex gap-3 min-h-0">
        {/* Chart */}
        <div className="flex-1 bg-offwhite/[0.03] border border-offwhite/[0.05] rounded-xl p-3 flex flex-col">
          <span className="font-mono text-[8px] text-offwhite/20 mb-2">THROUGHPUT</span>
          <div className="flex-1 flex items-end gap-[3px]">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all duration-700 ease-out"
                style={{
                  height: `${h}%`,
                  background: h > 70 ? 'rgba(230,59,46,0.5)' : 'rgba(232,228,221,0.12)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Live feed */}
        <div className="w-2/5 bg-offwhite/[0.03] border border-offwhite/[0.05] rounded-xl p-3 flex flex-col overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-dot" />
            <span className="font-mono text-[8px] text-signal">LIVE</span>
          </div>
          <div className="flex-1 flex flex-col gap-1.5 overflow-hidden">
            {feed.map((item, i) => (
              <div
                key={`${item.msg}-${i}`}
                className={`font-mono text-[9px] leading-tight transition-opacity duration-300 ${i === 0 ? 'opacity-100' : 'opacity-40'}`}
              >
                <span className={typeColor[item.type]}>{item.agent}</span>
                <span className="text-offwhite/25"> {item.msg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   MAIN PROJECTS SECTION
   ============================================ */
const projects = [
  {
    id: 'factory',
    title: 'Autonomous App Factory',
    year: '2025',
    tagline: 'AI agents that build software without human orchestration.',
    description:
      'Multi-agent pipeline where AI makes every routing and dispatch decision. Produces Swift code, App Store metadata, pricing strategy, and marketing copy from a single input. No human in the loop.',
    tags: ['Python', 'Multi-Agent', 'LLM Orchestration', 'Prompt Chaining'],
    github: 'https://github.com/u-kaushik/Auto-App-Factory-Portfolio',
    live: 'https://github.com/u-kaushik/Auto-App-Factory-Portfolio',
    icon: Bot,
    bg: 'bg-ink',
    accent: 'signal',
    MockupComponent: AgentPipelineMockup,
  },
  {
    id: 'mission',
    title: 'Mission Control',
    year: '2025',
    tagline: 'A personal AI operating system. One interface for everything.',
    description:
      'Live dashboard integrating 9 AI agents, task orchestration, semantic memory, and EOS business execution. Jarvis coordinates via Telegram. The system gets smarter over time.',
    tags: ['TypeScript', 'React', 'Supabase', 'Semantic Memory', 'EOS'],
    github: 'https://github.com/u-kaushik/Mission-Control-Portfolio',
    live: 'https://github.com/u-kaushik/Mission-Control-Portfolio',
    icon: LayoutDashboard,
    bg: 'bg-[#0D0D14]',
    accent: 'signal',
    MockupComponent: DashboardLiveMockup,
  },
]

export default function Projects() {
  const sectionRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return
        const content = card.querySelector('.project-content')
        const mockup = card.querySelector('.project-mockup')
        const tags = card.querySelectorAll('.project-tag')

        gsap.from(content, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
          },
        })

        gsap.from(mockup, {
          x: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 60%',
          },
        })

        gsap.from(tags, {
          y: 15,
          opacity: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 50%',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef}>
      {/* Section label */}
      <div className="px-6 md:px-16 lg:px-24 pt-24 pb-8">
        <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">
          Selected Work
        </span>
      </div>

      {projects.map((project, i) => {
        const Icon = project.icon
        return (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`${project.bg} ${i === 0 ? 'rounded-t-[3rem]' : ''} ${i === projects.length - 1 ? 'rounded-b-[3rem]' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Content — left on even, right on odd */}
                <div className={`project-content ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <Icon size={20} className="text-signal" />
                    <span className="font-mono text-[10px] text-offwhite/30 tracking-wider">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-3xl md:text-4xl text-offwhite mb-3">
                    {project.title}
                  </h3>
                  <p className="font-drama italic text-signal text-lg md:text-xl mb-6">
                    {project.tagline}
                  </p>
                  <p className="font-heading text-sm text-offwhite/50 leading-relaxed mb-8 max-w-md">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="project-tag font-mono text-[10px] text-offwhite/30 bg-offwhite/[0.05] border border-offwhite/[0.08] px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lift inline-flex items-center gap-2 font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
                    >
                      <Github size={15} />
                      <span>Source</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lift inline-flex items-center gap-2 font-heading text-sm text-signal hover:text-offwhite transition-colors"
                    >
                      <span>View project</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Mockup — large, dark, animated */}
                <div className={`project-mockup ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-offwhite/[0.03] border border-offwhite/[0.06] rounded-[2rem] p-4 md:p-5 h-[300px] md:h-[380px]">
                    <project.MockupComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
