import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

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
        <span className="contact-reveal font-mono text-[10px] text-offwhite/30 tracking-widest uppercase block mb-8">
          Get in touch
        </span>

        <h2 className="contact-reveal font-heading font-bold text-3xl md:text-5xl text-offwhite mb-4">
          Have something you want to build?
        </h2>
        <h2 className="contact-reveal font-drama italic text-signal text-5xl md:text-[6rem] leading-[0.95] mb-8">
          Let's talk.
        </h2>

        <p className="contact-reveal font-heading text-offwhite/50 text-base md:text-lg mb-12 max-w-lg">
          Whether it's a full product, an AI system, or a conversation about how I can add value to your team. I'd rather show you what I can do than talk about it.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="mailto:ukaushik@hotmail.co.uk"
            className="contact-reveal btn-magnetic inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-signal text-offwhite font-heading font-semibold text-sm"
          >
            <span className="btn-bg bg-[#1A1210] rounded-full" />
            <Mail size={16} className="relative z-10" />
            <span className="relative z-10">ukaushik@hotmail.co.uk</span>
          </a>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/utkarshkaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-reveal btn-magnetic inline-flex items-center justify-center gap-2 sm:gap-3 flex-1 sm:flex-none px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#0A66C2] text-offwhite font-heading font-semibold text-sm"
            >
              <span className="btn-bg bg-[#1A1210] rounded-full" />
              <Linkedin size={16} className="relative z-10" />
              <span className="relative z-10">LinkedIn</span>
              <ArrowUpRight size={14} className="relative z-10 opacity-50" />
            </a>

            <a
              href="https://github.com/u-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-reveal btn-magnetic inline-flex items-center justify-center gap-2 sm:gap-3 flex-1 sm:flex-none px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-offwhite/[0.06] border border-offwhite/[0.1] text-offwhite font-heading font-semibold text-sm"
            >
              <span className="btn-bg bg-signal rounded-full" />
              <Github size={16} className="relative z-10" />
              <span className="relative z-10">GitHub</span>
              <ArrowUpRight size={14} className="relative z-10 opacity-50" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}