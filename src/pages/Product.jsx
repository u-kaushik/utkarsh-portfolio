import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ExternalLink, Github, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Profile from '../components/Profile'
import ProjectIcon, { PlatformIcon } from '../components/ProjectIcon'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../projects'
import { hasTechIcon, TechIcon } from '../components/TechIcon'

export default function Product() {
  useEffect(() => {
    document.title = 'Utkarsh Kaushik | Product Engineer · iOS & Web'
  }, [])

  return <>
    <Navbar />
    <main>
      <section id="hero" className="portfolio-hero px-6 md:px-16 lg:px-24">
        <div className="hero-inner max-w-7xl mx-auto w-full pt-40 pb-20 md:pt-48 md:pb-28">
          <p className="eyebrow mb-7"><span className="status-dot" /> London · Open to product engineering roles</p>
          <h1 className="max-w-6xl font-heading font-bold tracking-[-0.055em] leading-[.92] text-[clamp(3.4rem,8vw,7.6rem)]">
            I take useful ideas<br/><span className="font-drama italic font-normal text-signal">all the way to release.</span>
          </h1>
          <p className="hero-intro mt-10 md:mt-14 text-xl md:text-2xl text-offwhite/70 leading-relaxed">I’m Utkarsh Kaushik, a product engineer working across iOS and web. I like the whole job: finding the useful slice, building it properly, testing it on the right device and staying around until it ships.</p>
          <div className="hero-actions mt-10 flex flex-wrap gap-3">
            <a href="#product-work" className="primary-pill">Explore the work <ArrowRight size={16}/></a>
            <a href="mailto:ukaushik@hotmail.co.uk" className="secondary-pill"><Mail size={16}/> Get in touch</a>
          </div>
        </div>
      </section>

      <section className="proof-strip px-6 md:px-16 lg:px-24">
        <div className="proof-strip-inner max-w-7xl mx-auto">
          <div className="proof-strip-intro"><p className="eyebrow">A few useful numbers</p><p>The short version, before you get into the work.</p></div>
          <div className="proof-stat"><strong>3</strong><p>iOS products shipped</p><small>owned end to end, from flow to release</small></div>
          <div className="proof-stat"><strong>13<span> days</span></strong><p>to deploy RCA Flow</p><small>multi-tenant B2B software on GCP</small></div>
          <div className="proof-stat"><strong>7</strong><p>product case studies</p><small>consumer, B2B and internal systems</small></div>
          <div className="proof-stat"><strong>0<span>→</span>1</strong><p>from idea to release</p><small>scope, build, test and ship without hand-offs</small></div>
        </div>
      </section>

      <section id="product-work" className="px-6 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-end mb-14">
            <div><p className="eyebrow mb-4">Selected product work</p><h2 className="section-title">Useful products, properly thought through.</h2></div>
            <p className="text-offwhite/50 md:text-right md:ml-auto max-w-md">The polished screen is only the last bit. These stories show the problem, the awkward choices, the build and what happened next.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => <article className={`project-card project-card-${i+1}`} key={project.slug}>
              <Link to={`/project/${project.slug}`} aria-label={`Read the ${project.title} case study`}><ProjectVisual project={project}/></Link>
              <div className="project-card-body p-6 md:p-8">
                <div className="flex justify-between gap-4"><p className="eyebrow flex items-center gap-2"><PlatformIcon project={project}/>{project.type}</p><ArrowUpRight size={20}/></div>
                <Link to={`/project/${project.slug}`} className="project-card-copy-link"><h3 className="project-title-with-icon text-3xl md:text-4xl font-bold mt-4"><ProjectIcon project={project}/>{project.title}</h3>
                <p className="project-card-one-line text-offwhite/55 mt-3 leading-relaxed">{project.oneLine}</p>
                <p className="project-aside">{project.aside}</p></Link>
                <div className="project-card-tags flex flex-wrap gap-2 mt-6">{project.lenses.map(x=><span className="tag" key={x}>{hasTechIcon(x)&&<TechIcon name={x} size={12}/>} {x}</span>)}</div>
                <div className="project-card-actions">
                  <Link to={`/project/${project.slug}`}>Case study <ArrowRight size={15}/></Link>
                  {project.links.map(([label,url])=><a href={url} target="_blank" rel="noreferrer" key={url}>{label.toLowerCase().includes('github')?<Github size={15}/>:<ExternalLink size={15}/>} {label}</a>)}
                </div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="approach" className="px-6 md:px-16 lg:px-24 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto dual-lens">
          <div><p className="eyebrow mb-5">How the pieces connect</p><h2 className="section-title">I build the product.<br/>I also ask why it should exist.</h2></div>
          <div className="lens-card"><span>01</span><h3>Hands-on product delivery</h3><p>I scope the useful slice, build across web and iOS, connect the data, then work through testing, deployment and release. The last mile still counts.</p></div>
          <div className="lens-card"><span>02</span><h3>Customer and launch judgement</h3><p>Eight years close to small businesses taught me to listen for the real problem. That helps with onboarding, product language and launch. It is useful context for the engineering, not a substitute for it.</p></div>
        </div>
      </section>
      <Profile />
      <Contact />
    </main>
    <Footer />
  </>
}
