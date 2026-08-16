import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Overview', href: '/' },
  { label: 'Growth', href: '/growth' },
  { label: 'Product', href: '/product' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/#contact' },
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
          ? 'bg-[#F7F2EA]/90 backdrop-blur-xl border border-[#6E2924]/[0.12] shadow-lg'
          : 'bg-[#F7F2EA]/70 backdrop-blur-md border border-[#6E2924]/[0.08]'
      } rounded-full px-4 sm:px-6 py-3 flex items-center gap-4 sm:gap-8`}
    >
      <Link
        to="/"
        className="font-heading font-bold text-sm tracking-tight text-[#2A1D18]"
      >
        UK.
      </Link>

      {/* Desktop links */}
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) =>
          isHome && link.href.startsWith('/#') ? (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="lift font-heading text-sm tracking-tight text-[#5F5049] hover:text-[#8F2F2A] transition-colors duration-500"
            >
              {link.label}
            </button>
          ) : (
            <Link
              key={link.label}
              to={link.href}
              className="lift font-heading text-sm tracking-tight text-[#5F5049] hover:text-[#8F2F2A] transition-colors duration-500"
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {isHome ? (
        <button
          onClick={() => handleNavClick('/#contact')}
          className={`btn-magnetic hidden lg:inline-flex flex-none items-center whitespace-nowrap px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors duration-500 ${
            scrolled
              ? 'bg-signal text-white'
              : 'bg-[#8F2F2A] text-white border border-[#8F2F2A]'
          }`}
        >
          <span className="btn-bg bg-[#1A1210] rounded-full" />
          <span className="relative z-10">Get in touch</span>
        </button>
      ) : (
        <Link
          to="/#contact"
          className={`btn-magnetic hidden lg:inline-flex flex-none items-center whitespace-nowrap px-5 py-2 rounded-full text-sm font-heading font-semibold transition-colors duration-500 ${
            scrolled
              ? 'bg-signal text-white'
              : 'bg-[#8F2F2A] text-white border border-[#8F2F2A]'
          }`}
        >
          <span className="btn-bg bg-[#1A1210] rounded-full" />
          <span className="relative z-10">Get in touch</span>
        </Link>
      )}

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden font-mono text-xs text-[#2A1D18]"
      >
        {mobileOpen ? '[CLOSE]' : '[MENU]'}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-[#F7F2EA]/95 backdrop-blur-xl border border-[#6E2924]/[0.12] rounded-2xl p-6 flex flex-col gap-4 min-w-[200px] lg:hidden shadow-xl">
          {navLinks.map((link) =>
            isHome && link.href.startsWith('/#') ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-heading text-sm text-[#5F5049] hover:text-[#8F2F2A] text-left"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-heading text-sm text-[#5F5049] hover:text-[#8F2F2A]"
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
