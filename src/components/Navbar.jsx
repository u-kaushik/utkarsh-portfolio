import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Work', href: '/#projects' },
  { label: 'Approach', href: '/#protocol' },
  { label: 'About', href: '/#philosophy' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) {
      setScrolled(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [location.pathname])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    if (isHome) {
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'bg-[#1A1210]/80 backdrop-blur-xl border border-offwhite/[0.08] shadow-lg'
          : 'bg-transparent'
      } rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-8`}
    >
      <Link
        to="/"
        className="font-heading font-bold text-sm tracking-tight text-offwhite"
      >
        UK.
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {navLinks.map((link) =>
          isHome ? (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="lift font-heading text-sm tracking-tight text-offwhite/70 hover:text-offwhite transition-colors duration-500"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className="lift font-heading text-sm tracking-tight text-offwhite/70 hover:text-offwhite transition-colors duration-500"
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {isHome ? (
        <button
          onClick={() => handleNavClick('/#contact')}
          className={`btn-magnetic hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors duration-500 ${
            scrolled
              ? 'bg-signal text-offwhite'
              : 'bg-offwhite/10 text-offwhite border border-offwhite/30'
          }`}
        >
          <span className="btn-bg bg-[#1A1210] rounded-full" />
          <span className="relative z-10">Get in touch</span>
        </button>
      ) : (
        <Link
          to="/#contact"
          className={`btn-magnetic hidden md:inline-flex items-center px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors duration-500 ${
            scrolled
              ? 'bg-signal text-offwhite'
              : 'bg-offwhite/10 text-offwhite border border-offwhite/30'
          }`}
        >
          <span className="btn-bg bg-[#1A1210] rounded-full" />
          <span className="relative z-10">Get in touch</span>
        </Link>
      )}

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden font-mono text-xs text-offwhite"
      >
        {mobileOpen ? '[CLOSE]' : '[MENU]'}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#1A1210]/95 backdrop-blur-xl border border-offwhite/[0.08] rounded-2xl p-6 flex flex-col gap-4 min-w-[200px] md:hidden">
          {navLinks.map((link) =>
            isHome ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm text-offwhite/70 hover:text-offwhite text-left"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-sm text-offwhite/70 hover:text-offwhite"
              >
                {link.label}
              </Link>
            )
          )}
          {isHome ? (
            <button
              onClick={() => handleNavClick('/#contact')}
              className="btn-magnetic inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-heading font-semibold bg-signal text-offwhite"
            >
              <span className="btn-bg bg-[#1A1210] rounded-full" />
              <span className="relative z-10">Get in touch</span>
            </button>
          ) : (
            <Link
              to="/#contact"
              onClick={() => setMobileOpen(false)}
              className="btn-magnetic inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-heading font-semibold bg-signal text-offwhite"
            >
              <span className="btn-bg bg-[#1A1210] rounded-full" />
              <span className="relative z-10">Get in touch</span>
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}