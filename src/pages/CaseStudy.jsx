import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Lightbulb, Wrench, Rocket, CircleCheck, ChevronLeft, ChevronRight, Scale, Signpost, ShieldCheck, Megaphone } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectIcon, { PlatformIcon } from '../components/ProjectIcon'
import ProjectVisual from '../components/ProjectVisual'
import { hasTechIcon, TechIcon } from '../components/TechIcon'
import { projects } from '../projects'
import { aiAssurance } from '../aiAssurance'

function ScreenshotGallery({ project }) {
 const galleryRef = useRef(null)
 const [active, setActive] = useState(0)
 const isWide = project.gallery.length === 1
 const isDesktop = project.mediaType === 'desktop'
 const isPortraitWeb = project.galleryLayout === 'portrait-web'
 const isPhoneWeb = project.galleryLayout === 'phone-web'
 const isRetinaWeb = project.galleryLayout === 'web-retina'

 const move = (direction) => {
  const gallery = galleryRef.current
  if (!gallery) return
  const frames = [...gallery.querySelectorAll('.gallery-frame')]
  const next = Math.max(0, Math.min(frames.length - 1, active + direction))
  frames[next]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  setActive(next)
 }

 const syncActive = () => {
  const gallery = galleryRef.current
  if (!gallery || isWide) return
  const centre = gallery.scrollLeft + gallery.clientWidth / 2
  const frames = [...gallery.querySelectorAll('.gallery-frame')]
  let closest = 0
  frames.forEach((frame, index) => {
   const frameCentre = frame.offsetLeft + frame.clientWidth / 2
   if (Math.abs(frameCentre - centre) < Math.abs((frames[closest]?.offsetLeft || 0) + (frames[closest]?.clientWidth || 0) / 2 - centre)) closest = index
  })
  setActive(closest)
 }

 return <div className="max-w-6xl mx-auto">
  <div ref={galleryRef} onScroll={syncActive} className={`case-gallery ${isWide ? 'case-gallery-wide' : ''} ${isDesktop ? 'case-gallery-desktop' : ''} ${isPortraitWeb ? 'case-gallery-web-portrait' : ''} ${isPhoneWeb ? 'case-gallery-phone-web' : ''} ${isRetinaWeb ? 'case-gallery-retina-web' : ''}`}>
   {project.gallery.map((src,i)=><figure key={src} className={`gallery-frame gallery-frame-${i+1}`}><picture>{i === 0 && project.mobileCover && <source media="(max-width: 767px)" srcSet={project.mobileCover}/>}<img src={src} alt={`${project.title} product screen ${i+1}`} loading={i > 1 ? 'lazy' : 'eager'} style={{'--mobile-focus': project.mobileObjectPosition || 'center'}}/></picture></figure>)}
  </div>
  {!isWide && <div className="gallery-controls">
   <p><span>{String(active + 1).padStart(2,'0')}</span> / {String(project.gallery.length).padStart(2,'0')} <em>Use the arrows or swipe through the product</em></p>
   <div><button onClick={()=>move(-1)} disabled={active===0} aria-label="Previous screenshot"><ChevronLeft size={20}/></button><button onClick={()=>move(1)} disabled={active===project.gallery.length-1} aria-label="Next screenshot"><ChevronRight size={20}/></button></div>
  </div>}
 </div>
}

export default function CaseStudy(){
 const {slug}=useParams(); const p=projects.find(x=>x.slug===slug)
 const projectIndex=projects.findIndex(x=>x.slug===slug)
 const nextProjects=[projects[(projectIndex+1)%projects.length],projects[(projectIndex+2)%projects.length]]
 const assurance=aiAssurance[slug]
 useEffect(()=>{ window.scrollTo(0,0) },[slug])
 if(!p)return <div className="min-h-screen p-24"><Link to="/">Back home</Link></div>
 return <><Navbar/><main className="case-study">
  <header className="px-6 md:px-16 lg:px-24 pt-40 pb-16"><div className="max-w-6xl mx-auto"><Link to="/#work" className="eyebrow inline-flex gap-2 items-center"><ArrowLeft size={14}/> All work</Link><div className="mt-10"><p className="eyebrow mb-5 case-project-meta"><PlatformIcon project={p}/>{p.type} · {p.status}</p><div className="case-title-lockup"><ProjectIcon project={p} size="hero"/><h1 className="text-[clamp(3.8rem,10vw,8rem)] font-bold tracking-[-.06em] leading-[.9]">{p.title}</h1></div><div className="flex flex-wrap gap-2 mt-7">{p.lenses.map(x=><span className="tag tech-tag" key={x}>{hasTechIcon(x)&&<TechIcon name={x} size={12}/>} {x}</span>)}</div></div><p className="text-xl md:text-3xl text-offwhite/60 mt-10 max-w-3xl leading-relaxed">{p.oneLine}</p></div></header>
  <div className="px-6 md:px-16 lg:px-24"><ScreenshotGallery project={p}/></div>
  <article className="px-6 md:px-16 lg:px-24 py-20 md:py-32"><div className="max-w-6xl mx-auto">
   <section id="overview" className="quick-read"><p className="eyebrow">The short version</p><p>{p.executiveSummary}</p></section>
   {p.growthLens && <section id="growth-lens" className="growth-lens-section">
    <div className="growth-lens-intro"><div className="section-icon"><Megaphone size={22}/></div><p className="eyebrow">Growth lens · {p.growthLens.status}</p><h2>The route to users</h2><p>{p.growthLens.summary}</p></div>
    <div className="growth-lens-points">{p.growthLens.points.map(([title,detail],i)=><div key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div>
   </section>}
   <section id="problem" className="case-split"><p className="eyebrow">The awkward bit</p><div><h2>{p.problem}</h2></div></section>
   <section id="product-bet" className="case-split"><p className="eyebrow">The bet</p><div><blockquote>{p.bet}</blockquote></div></section>
   <section id="tradeoffs" className="judgement-section">
    <div className="judgement-heading"><div className="section-icon"><Scale size={22}/></div><div><p className="eyebrow">Trade-offs</p><h2>What I had to balance</h2></div></div>
    <div className="tradeoff-list">{p.tradeoffs.map(([title,reason],i)=>{const sides=title.split(' vs. ');return <div className="tradeoff-row" key={title}><span className="tradeoff-number">0{i+1}</span><div><div className="balance-line"><strong>{sides[0]}</strong><Scale size={15}/><strong>{sides[1]}</strong></div><p>{reason}</p></div></div>})}</div>
   </section>
   <section id="decisions" className="judgement-section decision-section">
    <div className="judgement-heading"><div className="section-icon"><Signpost size={22}/></div><div><p className="eyebrow">Decision journal</p><h2>What I chose and why</h2></div></div>
    <div className="decision-grid">{p.decisions.map(([decision,reason],i)=><div className="decision-card" key={decision}><span>Decision {String(i+1).padStart(2,'0')}</span><h3>{decision}</h3><p>{reason}</p></div>)}</div>
   </section>
   {assurance && <section id="ai-assurance" className="assurance-section">
    <div className="assurance-intro"><div className="section-icon"><ShieldCheck size={22}/></div><p className="eyebrow">AI assurance</p><h2>Useful AI.<br/>With a fence around it.</h2><blockquote>{assurance.principle}</blockquote></div>
    <div className="assurance-list">{assurance.items.map(([title,detail],i)=><div className="assurance-item" key={title}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div>
   </section>}
   <section id="execution"><p className="eyebrow mb-8">How it got built</p><div className="move-grid">{p.moves.map(([t,d],i)=>{const Icon=[Lightbulb,Wrench,Rocket][i];return <div className="move-card" key={t}><div className="move-icon"><Icon size={20}/></div><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></div>})}</div></section>
   <section id="outcome" className="outcome-block"><CircleCheck size={30}/><p className="eyebrow">Where it landed</p><h2>{p.outcome}</h2><div className="flex flex-wrap gap-3 mt-9">{p.links.map(([l,u])=><a className="primary-pill" href={u} target="_blank" rel="noreferrer" key={u}>{l}<ArrowUpRight size={16}/></a>)}</div></section>
   <section className="next-study">
    <div className="next-study-heading"><p className="eyebrow">Keep going</p><span>Two good places to head next</span></div>
    <div className="next-study-grid">{nextProjects.map(nextProject=><Link to={`/project/${nextProject.slug}`} className="next-study-card" key={nextProject.slug}>
     <ProjectVisual project={nextProject}/>
     <div className="next-study-copy"><p className="eyebrow"><PlatformIcon project={nextProject}/>{nextProject.type}</p><h2 className="project-title-with-icon"><ProjectIcon project={nextProject}/>{nextProject.title}</h2><p>{nextProject.oneLine}</p><span>Read the case study <ArrowRight size={18}/></span></div>
    </Link>)}</div>
   </section>
  </div></article>
 </main><Footer/></>
}
