import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'Approach', href: '#protocol' },
  { label: 'About', href: '#philosophy' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-[#1A1210]/80 backdrop-blur-xl border border-offwhite/[0.08] shadow-lg'
          : 'bg-transparent'
      } rounded-full px-6 py-3 flex items-center gap-8`}
    >
      <a
        href="#"
        className={`font-heading font-bold text-sm tracking-tight transition-colors duration-500 ${
          scrolled ? 'text-offwhite' : 'text-offwhite'
        }`}
      >
        UK.
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`lift font-heading text-sm tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-offwhite/70 hover:text-offwhite' : 'text-offwhite/70 hover:text-offwhite'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className={`btn-magnetic hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors duration-500 ${
          scrolled
            ? 'bg-signal text-offwhite'
            : 'bg-offwhite/10 text-offwhite border border-offwhite/30'
        }`}
      >
        <span className="btn-bg bg-[#1A1210] rounded-full" />
        <span className="relative z-10">Get in touch</span>
      </a>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`md:hidden font-mono text-xs transition-colors duration-500 ${
          scrolled ? 'text-offwhite' : 'text-offwhite'
        }`}
      >
        {mobileOpen ? '[CLOSE]' : '[MENU]'}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#1A1210]/95 backdrop-blur-xl border border-offwhite/[0.08] rounded-2xl p-6 flex flex-col gap-4 min-w-[200px] md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-heading text-sm text-offwhite/70 hover:text-offwhite"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-magnetic inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-heading font-semibold bg-signal text-offwhite"
          >
            <span className="btn-bg bg-[#1A1210] rounded-full" />
            <span className="relative z-10">Get in touch</span>
          </a>
        </div>
      )}
    </nav>
  )
}
