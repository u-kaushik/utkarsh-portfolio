import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Github, ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
    <section
      id="contact"
      ref={sectionRef}
      className="px-6 md:px-16 lg:px-24 py-24 md:py-32"
    >
      <div className="max-w-3xl">
        <span className="contact-reveal font-mono text-[10px] text-ink/40 tracking-widest uppercase block mb-8">
          Get in touch
        </span>

        <h2 className="contact-reveal font-heading font-bold text-3xl md:text-5xl mb-4">
          Interested?
        </h2>
        <h2 className="contact-reveal font-drama italic text-signal text-5xl md:text-[6rem] leading-[0.95] mb-8">
          Let's talk.
        </h2>

        <p className="contact-reveal font-heading text-ink/60 text-base md:text-lg mb-12 max-w-lg">
          Whether you need a full product built, an AI system designed, or just want to see if I'm the right fit for your team. No fluff, just a straight conversation.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:ukaushik@hotmail.co.uk"
            className="contact-reveal btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-signal text-offwhite font-heading font-semibold text-sm"
          >
            <span className="btn-bg bg-ink rounded-full" />
            <Mail size={16} className="relative z-10" />
            <span className="relative z-10">ukaushik@hotmail.co.uk</span>
          </a>

          <a
            href="https://github.com/u-kaushik"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-reveal btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-offwhite font-heading font-semibold text-sm"
          >
            <span className="btn-bg bg-signal rounded-full" />
            <Github size={16} className="relative z-10" />
            <span className="relative z-10">GitHub</span>
            <ArrowUpRight size={14} className="relative z-10 opacity-50" />
          </a>
        </div>
      </div>
    </section>
  )
}
