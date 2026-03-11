import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Bot, LayoutDashboard, FileSearch, Building2 } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Autonomous App Factory',
    year: '2025',
    description:
      'Multi-agent pipeline that produces real software artifacts. Swift code, App Store metadata, pricing strategy, marketing copy. AI makes all routing and dispatch decisions. No human orchestration.',
    tags: ['Python', 'Multi-Agent', 'LLM Orchestration'],
    github: 'https://github.com/u-kaushik',
    live: '#',
    icon: Bot,
    mockup: {
      gradient: 'from-signal/20 via-ink/10 to-ink/5',
      lines: [
        { w: '60%', color: 'bg-signal/30' },
        { w: '80%', color: 'bg-ink/10' },
        { w: '45%', color: 'bg-signal/20' },
        { w: '70%', color: 'bg-ink/10' },
        { w: '55%', color: 'bg-signal/15' },
      ],
      label: 'agent-orchestrator.py',
    },
  },
  {
    title: 'Mission Control',
    year: '2025',
    description:
      'My personal AI operating system. A live dashboard integrating agents, task orchestration, semantic memory, and EOS business frameworks into one command interface. Jarvis runs it all via Telegram.',
    tags: ['TypeScript', 'React', 'Supabase', 'AI Agents'],
    github: 'https://github.com/u-kaushik',
    live: '#',
    icon: LayoutDashboard,
    mockup: {
      gradient: 'from-ink/10 via-paper to-offwhite',
      type: 'dashboard',
      label: 'dashboard.tsx',
    },
  },
  {
    title: 'Apply-Pilot',
    year: '2026',
    description:
      'AI-powered job application platform. Forked an open-source Python backend, designed and shipped an entirely new responsive frontend in under 24 hours. Scrapes listings, scores fit, tailors CVs, automates applications.',
    tags: ['Python', 'React', 'AI/ML', 'Rapid Build'],
    github: 'https://github.com/u-kaushik',
    live: '#',
    icon: FileSearch,
    mockup: {
      gradient: 'from-signal/10 via-offwhite to-paper',
      lines: [
        { w: '90%', color: 'bg-ink/8' },
        { w: '75%', color: 'bg-signal/20' },
        { w: '85%', color: 'bg-ink/8' },
        { w: '60%', color: 'bg-signal/15' },
        { w: '70%', color: 'bg-ink/8' },
      ],
      label: 'apply-pilot.tsx',
    },
  },
  {
    title: 'RCA Flow',
    year: '2025',
    description:
      'Multi-tenant SaaS for UK surveyor firms. Role-based workflows, CSV import at scale, approval chains, automated PDF reports, team analytics. Deployed on GCP.',
    tags: ['React', 'Firebase', 'GCP', 'Multi-tenant'],
    github: 'https://github.com/u-kaushik',
    live: '#',
    icon: Building2,
    mockup: {
      gradient: 'from-paper via-ink/5 to-offwhite',
      type: 'table',
      label: 'rca-flow.tsx',
    },
  },
]

/* Browser-frame mockup with code lines */
function CodeMockup({ mockup }) {
  return (
    <div className="w-full h-full bg-ink rounded-2xl overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-ink border-b border-offwhite/5">
        <span className="w-2 h-2 rounded-full bg-signal/60" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="font-mono text-[9px] text-offwhite/20 ml-2">{mockup.label}</span>
      </div>
      {/* Code content */}
      <div className={`flex-1 bg-gradient-to-br ${mockup.gradient} p-4 flex flex-col gap-2 justify-center`}>
        {mockup.lines?.map((line, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full ${line.color}`}
            style={{ width: line.w }}
          />
        ))}
      </div>
    </div>
  )
}

/* Dashboard mockup */
function DashboardMockup({ mockup }) {
  return (
    <div className="w-full h-full bg-ink rounded-2xl overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-ink border-b border-offwhite/5">
        <span className="w-2 h-2 rounded-full bg-signal/60" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="font-mono text-[9px] text-offwhite/20 ml-2">{mockup.label}</span>
      </div>
      {/* Dashboard layout */}
      <div className="flex-1 p-3 flex gap-2">
        {/* Sidebar */}
        <div className="w-1/4 bg-offwhite/5 rounded-lg p-2 flex flex-col gap-1.5">
          <div className="h-1.5 w-3/4 rounded-full bg-signal/30" />
          <div className="h-1 w-full rounded-full bg-offwhite/5" />
          <div className="h-1 w-5/6 rounded-full bg-offwhite/5" />
          <div className="h-1 w-2/3 rounded-full bg-offwhite/8" />
          <div className="h-1 w-4/5 rounded-full bg-offwhite/5" />
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Stat cards */}
          <div className="flex gap-2">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex-1 bg-offwhite/5 rounded-lg p-2">
                <div className="h-1 w-1/2 rounded-full bg-offwhite/10 mb-1.5" />
                <div className="h-2 w-3/4 rounded-full bg-signal/20" />
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="flex-1 bg-offwhite/5 rounded-lg p-2 flex items-end gap-1">
            {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 65].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-signal/20 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* Table mockup */
function TableMockup({ mockup }) {
  return (
    <div className="w-full h-full bg-ink rounded-2xl overflow-hidden flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-ink border-b border-offwhite/5">
        <span className="w-2 h-2 rounded-full bg-signal/60" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="w-2 h-2 rounded-full bg-ink/40 border border-offwhite/10" />
        <span className="font-mono text-[9px] text-offwhite/20 ml-2">{mockup.label}</span>
      </div>
      {/* Table layout */}
      <div className="flex-1 p-3 flex flex-col gap-1">
        {/* Header row */}
        <div className="flex gap-2 pb-1.5 border-b border-offwhite/5">
          <div className="w-1/4 h-1.5 rounded-full bg-offwhite/15" />
          <div className="w-1/5 h-1.5 rounded-full bg-offwhite/15" />
          <div className="w-1/6 h-1.5 rounded-full bg-offwhite/15" />
          <div className="flex-1" />
          <div className="w-1/6 h-1.5 rounded-full bg-signal/25" />
        </div>
        {/* Data rows */}
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="flex gap-2 py-1 border-b border-offwhite/[0.03]">
            <div className="w-1/4 h-1 rounded-full bg-offwhite/8" />
            <div className="w-1/5 h-1 rounded-full bg-offwhite/5" />
            <div className="w-1/6 h-1 rounded-full bg-offwhite/5" />
            <div className="flex-1" />
            <div
              className={`w-1/6 h-1 rounded-full ${
                n <= 3 ? 'bg-green-500/20' : 'bg-offwhite/8'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-row', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="px-6 md:px-16 lg:px-24 py-24 md:py-32">
      <div className="mb-16">
        <span className="font-mono text-[10px] text-ink/40 tracking-widest uppercase">
          Selected Work
        </span>
      </div>

      <div className="space-y-6">
        {projects.map((project) => {
          const Icon = project.icon
          const MockupComponent =
            project.mockup.type === 'dashboard'
              ? DashboardMockup
              : project.mockup.type === 'table'
                ? TableMockup
                : CodeMockup
          return (
            <div
              key={project.title}
              className="project-row group bg-offwhite border border-paper rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:border-signal/30 hover:shadow-md overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                {/* Mockup preview */}
                <div className="lg:w-2/5 h-[180px] md:h-[200px] flex-shrink-0">
                  <MockupComponent mockup={project.mockup} />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={18} className="text-signal" />
                      <span className="font-mono text-[10px] text-ink/30">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-xl md:text-2xl mb-3 group-hover:text-signal transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-heading text-sm text-ink/60 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-ink/40 bg-paper px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lift w-9 h-9 rounded-full bg-paper flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/5 transition-colors"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lift w-9 h-9 rounded-full bg-paper flex items-center justify-center text-ink/40 hover:text-signal hover:bg-signal/5 transition-colors"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
