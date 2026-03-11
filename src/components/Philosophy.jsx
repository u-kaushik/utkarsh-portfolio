import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = sectionRef.current.querySelectorAll('.reveal-word')
      gsap.from(words, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.04,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const splitWords = (text, className = '') =>
    text.split(' ').map((word, i) => (
      <span key={i} className={`reveal-word inline-block mr-[0.3em] ${className}`}>
        {word}
      </span>
    ))

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 md:px-16 lg:px-24 bg-[#1A0F0D] overflow-hidden"
    >
      {/* Mars dust texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      <div className="relative z-10 max-w-4xl">
        <span className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase block mb-12">
          Philosophy
        </span>

        <p className="font-heading text-offwhite/35 text-lg md:text-2xl mb-8 leading-relaxed">
          {splitWords('You describe what you\'re imagining. The product, the system, the workflow. Most of the time, the gap between that conversation and a working prototype is months of meetings and handoffs.')}
        </p>

        <p className="font-heading text-offwhite text-2xl md:text-4xl lg:text-5xl leading-tight">
          {splitWords('I close that gap. Your')}
          <span className="reveal-word inline-block mr-[0.3em]">
            <span className="font-drama italic text-signal">imagination</span>
          </span>
          {splitWords('becomes production software.')}
        </p>
      </div>
    </section>
  )
}