import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Clapperboard,
  FileDown,
  LineChart,
  Search,
  Send,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectVisual from '../components/ProjectVisual'
import ProjectIcon from '../components/ProjectIcon'
import { projects } from '../projects'

const proof = [
  {
    slug: 'coaching-funnel',
    label: 'Lifecycle and qualification system',
    title: 'Coach Qualification Funnel',
    summary: 'A joined journey from a useful coaching assessment to personalised value, a paid-programme application and a gated sales call.',
    work: 'Designed and built the assessment, profile-routing logic, tailored four-week Pro Pass preview and qualification handoff. The full mobile journey is ready for launch; completion and conversion results are not yet claimed.',
    signal: '15-question assessment · Personalisation · Application logic · Call gate',
  },
  {
    slug: 'clear-halal',
    label: 'Consumer growth system',
    title: 'Clear Halal',
    summary: 'A scan-led halal product checker that gives the growth work a real product and audience to start from.',
    work: 'The app, landing page and store story are live. I am now researching competitor and creator patterns and building an AI-assisted content workflow around clear user questions. Paid testing comes after the organic work starts producing a useful signal.',
    signal: 'Live product · Growth system in progress',
  },
  {
    slug: 'globotrotter',
    label: 'App launch and organic growth',
    title: 'GloboTrotter',
    summary: 'A visual travel memory and planning product built around the moments people already want to share.',
    work: 'The build taught me what happens when distribution starts too late. I am now using ASO research, onboarding teardowns and real product moments to tighten the positioning and shape a more useful launch plan.',
    signal: 'Product story · ASO research · Launch learning',
  },
  {
    slug: 'mission-control',
    label: 'Marketing engineering',
    title: 'Mission Control',
    summary: 'An operating system that joins prospect research, campaigns, replies and reporting into one visible loop.',
    work: 'Built the workflow and data layer behind list handling, campaign state, inbox classification and performance reporting, with clear human control over consequential sends.',
    signal: 'CRM workflows · Automation · Human review',
  },
  {
    slug: 'rca-flow',
    label: 'Customer-led B2B product',
    title: 'RCA Flow',
    summary: 'A property workflow shaped around interviews with the people doing the work, then delivered as a live pilot.',
    work: 'Turned user interviews and a spreadsheet-heavy process into a clear product story, working software and a simpler route from first demo to team onboarding.',
    signal: 'User interviews · B2B story · Pilot delivery',
  },
]

const loop = [
  { icon: Search, step: '01', title: 'Research', copy: 'Find the customer language, competitor patterns, creator formats and objections worth acting on.' },
  { icon: Clapperboard, step: '02', title: 'Make', copy: 'Turn the evidence into hooks, scripts, briefs, landing pages and useful product stories.' },
  { icon: Send, step: '03', title: 'Ship', copy: 'Publish across the right channel with clean tracking, a clear owner and a reason for every test.' },
  { icon: LineChart, step: '04', title: 'Learn', copy: 'Feed saves, comments, CTR, conversion and customer replies back into the next round.' },
]

const coachingFunnelStages = [
  { step: '01', title: 'Assess', copy: 'A 15-question mobile assessment captures how a coach responds in real situations.' },
  { step: '02', title: 'Personalise', copy: 'The scoring model turns those choices into a distinct coaching profile, relevant comparisons and development priorities.' },
  { step: '03', title: 'Bridge to product', copy: 'A tailored four-week Pro Pass plan makes the next step tangible before asking for commitment.' },
  { step: '04', title: 'Qualify', copy: 'A short application gathers intent and context, then gates the call booking step for suitable applicants.' },
]

const coachingFunnelScreens = [
  { src: '/work/coaching-funnel/01-assessment.webp', label: '01 · Behavioural assessment', alt: 'Mobile coaching assessment with a situational multiple-choice question' },
  { src: '/work/coaching-funnel/02-results.webp', label: '02 · Personalised result', alt: 'Mobile personalised coaching profile result for The Live Experimenter' },
  { src: '/work/coaching-funnel/03-pathway.webp', label: '03 · Pro Pass pathway', alt: 'Mobile personalised four-week Pro Pass development plan' },
  { src: '/work/coaching-funnel/04-application.webp', label: '04 · Qualified application', alt: 'Mobile transition from a personalised plan into a founding Pro Pass application' },
]

export default function Growth() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')
    document.title = 'Utkarsh Kaushik | Growth Marketing & GTM Systems'
    description?.setAttribute('content', 'Growth marketing and GTM systems across UGC, product launches, marketing automation and customer-led campaigns.')
    return () => {
      document.title = previousTitle
      if (previousDescription) description?.setAttribute('content', previousDescription)
    }
  }, [])

  return <div className="growth-page">
    <Navbar />
    <main>
      <section id="hero" className="growth-hero">
        <img src="/work/clearhalal.png" alt="Clear Halal product interface" className="growth-hero-media" />
        <div className="growth-hero-shade" />
        <div className="growth-hero-inner px-6 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto w-full">
            <p className="eyebrow"><span className="status-dot" /> London · Open to growth, GTM and marketing systems roles</p>
            <h1>I turn product insight into <em>growth systems that learn.</em></h1>
            <p className="growth-hero-copy">I work across research, product stories, UGC, campaign delivery and automation. The useful bit is joining them up, so every launch leaves the next one smarter.</p>
            <div className="hero-actions">
              <a href="#growth-work" className="primary-pill">See the growth work <ArrowRight size={16}/></a>
              <a href="/Utkarsh-Kaushik-Marketing-Operations-Growth-Systems-CV-Sep-2026.pdf" download className="secondary-pill"><FileDown size={16}/> Download marketing operations CV</a>
            </div>
          </div>
        </div>
      </section>

      <section className="growth-proof-strip overview-spine px-6 md:px-16 lg:px-24">
        <div className="overview-spine-grid max-w-7xl mx-auto">
          <div className="overview-spine-intro"><p className="eyebrow">The useful mix</p><p>Hands-on marketing, product sense and enough technical range to build the missing pieces.</p></div>
          <div><Search size={20}/><strong>Market and customer research</strong><span>Find the language, patterns and pain before making more things.</span></div>
          <div><Clapperboard size={20}/><strong>Product and launch work</strong><span>Turn the insight into clear stories, useful assets and a real release.</span></div>
          <div><LineChart size={20}/><strong>Learning systems</strong><span>Keep the signal attached so the next round starts a little smarter.</span></div>
        </div>
      </section>

      <section className="growth-loop-section px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="growth-section-heading">
            <div><p className="eyebrow">How I work</p><h2>Not a pile of posts.<br/>A working feedback loop.</h2></div>
            <p>I like marketing that gets closer to the product over time. Research informs the creative, the creative produces signal and the signal changes what gets made next.</p>
          </div>
          <div className="growth-loop">
            {loop.map(({ icon: Icon, step, title, copy }) => <div className="growth-loop-step" key={title}>
              <div className="growth-loop-top"><span>{step}</span><Icon size={20}/></div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="growth-funnel-case px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="growth-funnel-lead">
            <div>
              <p className="eyebrow">Featured growth systems case study</p>
              <h2>From self-assessment to a <em>qualified conversation.</em></h2>
            </div>
            <div className="growth-funnel-summary">
              <p>I designed and built an end-to-end acquisition and qualification journey for a coaching membership product. It turns a useful free assessment into personalised value, previews the paid experience and moves high-intent coaches into an application before opening the call-booking gate.</p>
              <div className="growth-funnel-status"><span/> Built and ready for launch · Results not yet claimed</div>
            </div>
          </div>

          <div className="growth-funnel-stages" aria-label="Coaching funnel stages">
            {coachingFunnelStages.map(stage => <article key={stage.step}>
              <span>{stage.step}</span>
              <h3>{stage.title}</h3>
              <p>{stage.copy}</p>
            </article>)}
          </div>

          <div className="growth-funnel-phones">
            {coachingFunnelScreens.map((screen, index) => <figure key={screen.src} className={`growth-funnel-phone phone-${index + 1}`}>
              <div className="growth-funnel-device"><img src={screen.src} alt={screen.alt} loading="lazy" /></div>
              <figcaption>{screen.label}</figcaption>
            </figure>)}
          </div>

          <div className="growth-funnel-detail">
            <div>
              <p className="eyebrow">What I owned</p>
              <p className="growth-funnel-detail-lead">The proposition, journey architecture and working product layer.</p>
            </div>
            <ul>
              <li>Assessment structure, scoring and profile-routing logic</li>
              <li>Personalised result, coach comparisons and development narrative</li>
              <li>Paid-product bridge through a tailored four-week plan</li>
              <li>Application logic, intent capture and gated call handoff</li>
              <li>Responsive implementation, data flow, QA and launch preparation</li>
            </ul>
            <div className="growth-funnel-takeaway">
              <p className="eyebrow">Why it matters</p>
              <p>This is more than a quiz or landing page. It is a joined lifecycle system: value first, relevance second, qualification third and human sales time only when the prospect has earned the next step.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="growth-work" className="growth-work px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="growth-section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Real products.<br/>Honest growth work.</h2></div>
            <p>Some parts are shipped and some are being tested now. I have marked the difference clearly. Each story starts with a real product and a customer problem, not a made-up campaign result.</p>
          </div>

          <div className="growth-proof-list">
            {proof.map((item, index) => {
              const project = projects.find(candidate => candidate.slug === item.slug)
              if (!project) return null
              return <article className={`growth-proof-row ${index % 2 ? 'growth-proof-row-reverse' : ''}`} key={item.slug}>
                <Link to={`/project/${item.slug}`} className="growth-proof-visual" aria-label={`Read the ${item.title} case study`}>
                  <ProjectVisual project={project}/>
                </Link>
                <div className="growth-proof-copy">
                  <p className="eyebrow">{item.label}</p>
                  <h3><ProjectIcon project={project}/>{item.title}</h3>
                  <p className="growth-proof-summary">{item.summary}</p>
                  <p>{item.work}</p>
                  <div className="growth-proof-signal">{item.signal}</div>
                  <Link to={`/project/${item.slug}`} className="growth-text-link">Read the full case study <ArrowUpRight size={16}/></Link>
                </div>
              </article>
            })}
          </div>
        </div>
      </section>

      <section className="growth-close px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto growth-close-inner">
          <p className="eyebrow">The positioning</p>
          <h2>A growth operator who understands the product underneath.</h2>
          <p>I am strongest in small, practical teams where product, creative and delivery sit close together. I can do the research, make the assets and improve the workflow, while staying honest about what has shipped and what still needs testing.</p>
          <div className="hero-actions">
            <a href="mailto:ukaushik@hotmail.co.uk" className="primary-pill">Start a conversation <ArrowRight size={16}/></a>
            <Link to="/product" className="secondary-pill">View product engineering work</Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}
