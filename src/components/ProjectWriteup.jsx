import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Globe, Github } from 'lucide-react'

export default function ProjectWriteup({ project }) {
  const [activeSection, setActiveSection] = useState(project.sections[0]?.id || '')
  const contentRef = useRef(null)

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    const sections = contentRef.current?.querySelectorAll('[data-section]')
    sections?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#110C0A]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#110C0A]/80 backdrop-blur-xl border-b border-offwhite/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-heading text-sm text-offwhite/60 hover:text-offwhite transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-signal/10 border border-signal/25 font-heading text-xs text-signal hover:bg-signal/20 transition-all"
              >
                <Globe size={12} />
                <span className="hidden sm:inline">Live Demo</span>
                <span className="sm:hidden">Demo</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-offwhite/[0.06] border border-offwhite/[0.1] font-heading text-xs text-offwhite/60 hover:text-offwhite transition-all"
              >
                <Github size={12} />
                <span className="hidden sm:inline">Source</span>
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 pt-24 pb-24">
        {/* Hero area */}
        <div className="mb-16 md:mb-20 pt-8">
          <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase block mb-4">
            {project.year} &middot; Case Study
          </span>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-offwhite mb-4">
            {project.title}
          </h1>
          <p className="font-drama italic text-signal text-xl sm:text-2xl md:text-3xl mb-8">
            {project.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-offwhite/30 bg-offwhite/[0.05] border border-offwhite/[0.08] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Layout: sidebar + content */}
        <div className="flex gap-12 lg:gap-16">
          {/* Sidebar — desktop only */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="sticky top-28">
              <div className="relative pl-4">
                {/* Vertical line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-offwhite/[0.08]" />
                {/* Active indicator */}
                <div
                  className="absolute left-0 w-px bg-signal transition-all duration-300 ease-out"
                  style={{
                    top: `${project.sections.findIndex((s) => s.id === activeSection) * 40}px`,
                    height: '32px',
                  }}
                />
                <div className="flex flex-col gap-2">
                  {project.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block py-1.5 font-heading text-sm transition-colors duration-200 ${
                        activeSection === section.id
                          ? 'text-offwhite'
                          : 'text-offwhite/30 hover:text-offwhite/60'
                      }`}
                    >
                      {section.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </aside>

          {/* Mobile section nav */}
          <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#1A1210]/90 backdrop-blur-xl border border-offwhite/[0.1] rounded-full px-2 py-1.5 flex gap-1 overflow-x-auto max-w-[90vw]">
            {project.sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-mono text-[10px] transition-all ${
                  activeSection === section.id
                    ? 'bg-signal/20 text-signal'
                    : 'text-offwhite/40'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Content */}
          <div ref={contentRef} className="flex-1 min-w-0">
            {project.content}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="border-t border-offwhite/[0.06] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
          >
            &larr; Back to portfolio
          </Link>
          <div className="flex items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading text-sm text-signal hover:text-offwhite transition-colors"
              >
                <Globe size={14} />
                See Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heading text-sm text-offwhite/40 hover:text-offwhite transition-colors"
              >
                <Github size={14} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
