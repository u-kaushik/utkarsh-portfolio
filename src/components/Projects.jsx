import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github } from 'lucide-react'

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
  },
  {
    title: 'Mission Control',
    year: '2025',
    description:
      'My personal AI operating system. A live dashboard integrating agents, task orchestration, semantic memory, and EOS business frameworks into one command interface. Jarvis runs it all via Telegram.',
    tags: ['TypeScript', 'React', 'Supabase', 'AI Agents'],
    github: 'https://github.com/u-kaushik',
    live: '#',
  },
  {
    title: 'Apply-Pilot',
    year: '2026',
    description:
      'AI-powered job application platform. Forked an open-source Python backend, designed and shipped an entirely new responsive frontend in under 24 hours. Scrapes listings, scores fit, tailors CVs, automates applications.',
    tags: ['Python', 'React', 'AI/ML', 'Rapid Build'],
    github: 'https://github.com/u-kaushik',
    live: '#',
  },
  {
    title: 'RCA Flow',
    year: '2025',
    description:
      'Multi-tenant SaaS for UK surveyor firms. Role-based workflows, CSV import at scale, approval chains, automated PDF reports, team analytics. Deployed on GCP.',
    tags: ['React', 'Firebase', 'GCP', 'Multi-tenant'],
    github: 'https://github.com/u-kaushik',
    live: '#',
  },
]

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

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-row group bg-offwhite border border-paper rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:border-signal/30 hover:shadow-md"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Title + year */}
              <div className="md:w-1/3 flex-shrink-0">
                <span className="font-mono text-[10px] text-ink/30 block mb-1">
                  {project.year}
                </span>
                <h3 className="font-heading font-bold text-xl md:text-2xl group-hover:text-signal transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:flex-1">
                <p className="font-heading text-sm text-ink/60 leading-relaxed mb-4">
                  {project.description}
                </p>
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
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 md:flex-shrink-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift w-10 h-10 rounded-full bg-paper flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  <Github size={16} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lift w-10 h-10 rounded-full bg-paper flex items-center justify-center text-ink/40 hover:text-signal hover:bg-signal/5 transition-colors"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
