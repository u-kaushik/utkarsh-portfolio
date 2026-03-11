import { Linkedin, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-ink rounded-t-[4rem] px-6 md:px-16 lg:px-24 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <h3 className="font-heading font-bold text-offwhite text-lg mb-3">
            Utkarsh Kaushik
          </h3>
          <p className="font-heading text-offwhite/40 text-sm max-w-sm leading-relaxed">
            AI-native full-stack developer. I ship products that make the business case obvious.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://www.linkedin.com/in/utkarshkaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="lift w-9 h-9 rounded-full bg-offwhite/5 flex items-center justify-center text-offwhite/40 hover:text-[#0A66C2] hover:bg-offwhite/10 transition-colors"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com/u-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="lift w-9 h-9 rounded-full bg-offwhite/5 flex items-center justify-center text-offwhite/40 hover:text-offwhite hover:bg-offwhite/10 transition-colors"
            >
              <Github size={15} />
            </a>
            <a
              href="mailto:ukaushik@hotmail.co.uk"
              className="lift w-9 h-9 rounded-full bg-offwhite/5 flex items-center justify-center text-offwhite/40 hover:text-signal hover:bg-offwhite/10 transition-colors"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase mb-4">
            Navigation
          </h4>
          <div className="flex flex-col gap-2">
            {[
              { label: 'Work', href: '#projects' },
              { label: 'Approach', href: '#protocol' },
              { label: 'About', href: '#philosophy' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="lift font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-mono text-[10px] text-offwhite/30 tracking-widest uppercase mb-4">
            Connect
          </h4>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:ukaushik@hotmail.co.uk"
              className="lift font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/utkarshkaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="lift font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/u-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="lift font-heading text-sm text-offwhite/50 hover:text-offwhite transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-offwhite/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] text-offwhite/20">
          &copy; {new Date().getFullYear()} Utkarsh Kaushik. All rights reserved.
        </span>

        {/* System status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
          <span className="font-mono text-[10px] text-offwhite/30">
            System Operational
          </span>
        </div>
      </div>
    </footer>
  )
}