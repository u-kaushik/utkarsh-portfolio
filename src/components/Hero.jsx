import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from('.hero-sub', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
      })
      gsap.from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[100dvh] w-full overflow-hidden"
    >
      {/* Background video — ISS Earth orbit */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/earth-hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
        />
      </div>
      {/* Gradient overlay — warm dark */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#110C0A] via-[#110C0A]/85 to-[#110C0A]/40" />

      {/* Content — bottom-left third */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-16 md:pb-24 max-w-4xl">
        <div className="overflow-hidden">
          <h1 className="hero-line font-heading font-bold text-offwhite text-3xl md:text-5xl tracking-tight leading-tight">
            Build the
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line font-drama italic text-signal text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.9] -mt-1 md:-mt-3">
            future.
          </h1>
        </div>

        <p className="hero-sub font-heading text-offwhite/70 text-base md:text-lg mt-6 md:mt-8 max-w-lg leading-relaxed">
          I'm Utkarsh. I turn ambitious ideas into production software — full-stack products, AI systems, and automation pipelines. Tell me what you're imagining. I'll make it real.
        </p>

        <div className="hero-cta mt-8">
          <a
            href="#contact"
            className="btn-magnetic inline-flex items-center px-8 py-4 rounded-full font-heading font-semibold text-sm bg-signal text-offwhite"
          >
            <span className="btn-bg bg-offwhite rounded-full" />
            <span className="relative z-10">Get in touch</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-offwhite/40 text-[10px] tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-offwhite/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-3 bg-signal animate-bounce" />
        </div>
      </div>
    </section>
  )
}