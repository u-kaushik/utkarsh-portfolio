import { Activity, ArrowDownToLine, BookOpen, Braces, CircleCheck, Clapperboard, Code2, Compass, FlaskConical, GitBranch, Heart, Layers3, LockKeyhole, ShieldCheck, Tv, UserCheck } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RadarChart from '../components/RadarChart'
import { TechLabel } from '../components/TechIcon'

const skillAxes = [
  { label:'Product judgement', shortLabel:'Product', value:94 },
  { label:'UX design', shortLabel:'UX design', value:76 },
  { label:'Engineering', value:83 },
  { label:'AI systems', shortLabel:'AI systems', value:86 },
  { label:'Data analysis', shortLabel:'Data', value:68 },
  { label:'Commercial strategy', shortLabel:'Commercial', value:74 },
  { label:'End-to-end delivery', shortLabel:'Delivery', value:96 },
]

const workingAxes = [
  { label:'Curiosity', value:92 }, { label:'Conscientiousness', shortLabel:'Conscientious', value:88 }, { label:'Candour', value:76 },
  { label:'Collaboration', shortLabel:'Collaborative', value:81 }, { label:'Steadiness', value:84 }, { label:'Initiative', value:89 },
]

const culture = {
  books: [
    { title:'Man’s Search for Meaning', detail:'Viktor E. Frankl', image:'/media/about/mans-search-for-meaning.jpg' },
    { title:'Build the Life You Want', detail:'Arthur C. Brooks and Oprah Winfrey', image:'/media/about/build-the-life-you-want.jpg' },
    { title:'Die With Zero', detail:'Bill Perkins', image:'/media/about/die-with-zero.jpg' },
  ],
  television: [
    { title:'The Last Dance', image:'/media/about/the-last-dance.jpg' },
    { title:'Curb Your Enthusiasm', image:'/media/about/curb-your-enthusiasm.jpg' },
    { title:'The Office (US)', image:'/media/about/the-office-us.jpg' },
  ],
  films: [
    { title:'Rocky', image:'/media/about/rocky.jpg' },
    { title:'Interstellar', image:'/media/about/interstellar.jpg' },
    { title:'Training Day', image:'/media/about/training-day.jpg' },
  ],
}

export default function About(){return <><Navbar/><main className="about-page">
  <header className="about-hero px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <p className="eyebrow">Growth · GTM · Product</p>
    <h1>I like the bit where<br/><em>an idea has to find its people.</em></h1>
    <div className="about-hero-deck"><p>I work across customer research, product, launch work and the systems that hold it together. I can help find the useful promise, make the thing real and stay close enough to learn what happens next.</p><a href="/Utkarsh-Kaushik-Growth-GTM-CV-Jul-2026.pdf" download className="primary-pill">Download Growth & GTM CV <ArrowDownToLine size={16}/></a></div>
  </div></header>

  <section className="about-story px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto about-story-grid">
    <div><p className="eyebrow">The route here</p><h2>Marketing first.<br/>Product next.<br/>Both now.</h2></div>
    <div className="about-story-copy"><p>I spent eight years working directly with small businesses. The brief was often vague, the budget was real and the work still had to help. I turned those conversations into websites, landing pages, campaigns and simple internal tools.</p><p>Over time, I kept getting pulled toward the product itself. At Glenmont Circle that became the work: researching app ideas, shaping flows, building iOS and web products, connecting the data, testing on real devices and getting releases over the line.</p><p>Now I am joining those sides properly. The products give the marketing something real to work with. The marketing makes me ask better questions before and after the build. I am not claiming a finished growth machine. I am building and testing the system on products I actually own.</p></div>
  </div></section>

  <section className="about-photo-journal px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="photo-journal-heading"><p className="eyebrow">A few frames</p><h2>Work, travel and<br/>the bit in between.</h2></div>
    <div className="photo-journal-grid">
      <figure className="photo-frame photo-frame-travel"><img src="/media/about/personal/san-sebastian.jpg" alt="Utkarsh overlooking the coast in San Sebastián" loading="lazy"/><figcaption><span>01</span><p>San Sebastián, 2024</p><em>A very good day trip.</em></figcaption></figure>
      <figure className="photo-frame photo-frame-work"><img src="/media/about/personal/at-the-desk.jpg" alt="Utkarsh working at his desk" loading="lazy"/><figcaption><span>02</span><p>At the desk</p><em>Where the unglamorous bits get done.</em></figcaption></figure>
      <figure className="photo-frame photo-frame-arsenal"><img src="/media/about/personal/arsenal-night.jpg" alt="Arsenal supporters celebrating outside the Emirates Stadium at night" loading="lazy"/><figcaption><span>03</span><p>North London, May 2026</p><em>A fairly loud evening.</em></figcaption></figure>
    </div>
  </div></section>

  <section className="about-timeline px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <p className="eyebrow">Experience</p>
    <div className="timeline-row"><span>2024 to now</span><div><h3>Growth & Product Marketing Operator</h3><strong>Glenmont Circle · Part-time</strong><p>Taking small B2C apps from research and positioning through product build, launch assets, App Store work and early growth tests.</p></div></div>
    <div className="timeline-row"><span>2016 to 2024</span><div><h3>Founder / Web & Growth Marketing Consultant</h3><strong>Kaush Media</strong><p>Working directly with business owners on websites, landing pages, offers, lead capture, campaigns and practical marketing systems.</p></div></div>
    <div className="timeline-row"><span>Education</span><div><h3>MSc Performance Analysis · BA Business Management</h3><strong>Middlesex University · University of Westminster</strong><p>One degree taught me to follow the evidence. The other gave me the commercial context to know why it matters.</p></div></div>
  </div></section>

  <section className="about-charts px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="about-chart-heading"><div><p className="eyebrow">Working range</p><h2>Broad enough to connect.<br/>Hands-on enough to help.</h2></div><p>This is my honest read of the work in the portfolio. My clearest strength is joining customer, commercial and product thinking, then doing enough of the delivery myself to keep the work moving.</p></div>
    <article className="chart-card chart-card-wide skills-card"><div className="chart-visual"><div className="chart-card-title"><Code2 size={20}/><div><p className="eyebrow">Capability map</p><h3>Where I add the most value</h3></div></div><RadarChart axes={skillAxes} label="Self-assessed capability across seven product engineering domains"/></div><div className="domain-breakdown domain-breakdown-expanded">
      <div><span>01</span><h3>Product judgement</h3><p>Finding the useful slice, shaping flows and making trade-offs explicit.</p><strong>Core strength</strong></div>
      <div><span>02</span><h3>End-to-end delivery</h3><p>Taking the work through build, testing, deployment and release.</p><strong>Strongest spike</strong></div>
      <div><span>03</span><h3>Hands-on making</h3><p>Landing pages, demos, Swift, React, TypeScript, APIs and production data flows.</p><strong>Build the missing piece</strong></div>
      <div><span>04</span><h3>AI systems</h3><p>Bounded workflows, structured outputs, evals, guardrails and recovery.</p><strong>Practical, not theatrical</strong></div>
      <div><span>05</span><h3>Growth and UX</h3><p>Positioning, onboarding, landing pages, app listings, product copy and customer journeys.</p><strong>Designing for behaviour</strong></div>
      <div><span>06</span><h3>Data analysis</h3><p>Product analytics, market evidence, model outputs and decision support.</p><strong>Evidence before instinct</strong></div>
      <div><span>07</span><h3>Commercial context</h3><p>Offers, pricing, subscriptions, ASO, funnel thinking and route-to-market choices.</p><strong>Close to the reason</strong></div>
    </div></article>
  </div></section>

  <section className="about-personality px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="about-chart-heading"><div><p className="eyebrow">Personality and working style</p><h2>Helpful clues.<br/>Not a horoscope.</h2></div><p>This is a self-reflection based on how I tend to work. It is not a formal HEXACO, DISC or Myers-Briggs assessment, so treat the interpretations as useful hypotheses rather than settled science.</p></div>
    <article className="chart-card chart-card-wide personality-card"><div className="chart-visual"><div className="chart-card-title"><Compass size={20}/><div><p className="eyebrow">Working-style radar</p><h3>How I tend to show up</h3></div></div><RadarChart axes={workingAxes} label="Self-reflected working style radar"/></div><div className="personality-readouts">
      <div><span>HEXACO-inspired</span><h3>Open and conscientious</h3><p>Curiosity pulls me toward unfamiliar problems. Conscientiousness keeps the release details from quietly becoming somebody else’s problem.</p></div>
      <div><span>DISC-inspired</span><h3>C with a useful streak of D</h3><p>I prefer evidence, structure and quality, but I am comfortable making the call and moving the work forward when the path is clear.</p></div>
      <div><span>Myers-Briggs-inspired</span><h3>INTJ-leaning working hypothesis</h3><p>Systems-minded, independent and future-oriented. The caveat matters: behaviour changes with the team, the problem and the stakes.</p></div>
    </div></article>
  </div></section>

  <section className="about-stack px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto about-stack-grid">
    <div><p className="eyebrow">Tools I use in the work</p><h2>The tools change. The job does not.</h2></div>
    <div className="stack-groups">
      <div><span>Growth work</span><div><TechLabel name="ASO"/><TechLabel name="Analytics"/><TechLabel name="AI workflows"/></div></div>
      <div><span>Pages & products</span><div><TechLabel name="React"/><TechLabel name="TypeScript"/><TechLabel name="Swift"/></div></div>
      <div><span>Systems & delivery</span><div><TechLabel name="Firebase"/><TechLabel name="GCP"/><TechLabel name="GitHub"/></div></div>
    </div>
  </div></section>

  <section className="about-ai px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="about-ai-heading"><div><p className="eyebrow">How I work with AI</p><h2>Faster is useful.<br/>Accountable is non-negotiable.</h2></div><div><p>I use AI throughout research, product thinking and engineering. It can shorten the distance between an idea and something testable. It does not remove my responsibility for what gets built.</p><p>The level of control should match the risk. A brainstorm can be loose. Anything touching money, identity, health, customer data or a release needs a much tighter fence.</p></div></div>
    <div className="ai-practice-grid">
      {[[ShieldCheck,'Bound the job','Give the model the smallest useful task, context and tool access. More access is not the same as more intelligence.'],[LockKeyhole,'Protect the boundary','Keep secrets, permissions and consequential actions server-side. The model should never quietly inherit authority.'],[Braces,'Structure the output','Use typed schemas and validation so the product accepts known shapes, not persuasive-looking prose.'],[FlaskConical,'Test it repeatedly','Run fixed examples and edge cases through an eval harness. Version prompts and models so changes can be compared, not merely admired.'],[UserCheck,'Keep a human in the loop','Review high-impact outputs and make uncertainty visible. AI can recommend; the accountable person still makes the call.'],[Activity,'Plan for failure','Use logs, timeouts, durable queues and clear fallbacks. A failed model call should be recoverable, not mysterious.']].map(([Icon,title,text],i)=><article key={title}><span>{String(i+1).padStart(2,'0')}</span><Icon size={21}/><h3>{title}</h3><p>{text}</p></article>)}
    </div>
    <div className="ai-philosophy-note"><p>My rule of thumb</p><blockquote>Use AI to increase the quality and speed of the work. Never use it to blur who is responsible for the result.</blockquote></div>
  </div></section>

  <section className="about-principles px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="about-chart-heading"><div><p className="eyebrow">How I work</p><h2>Four habits that keep the work honest.</h2></div></div>
    <div className="principle-grid">{[[Layers3,'Choose the useful slice','Start with what the user needs, not the feature list we could make.'],[GitBranch,'Name the trade-off','Say what we gain, what we lose and where the risk sits.'],[Code2,'Build to learn','Get the real path working, test it properly and tighten from evidence.'],[CircleCheck,'Own the last mile','Deployment and release checks are part of the product, even when they are not the fun part.']].map(([Icon,title,text],i)=><article key={title}><span>0{i+1}</span><Icon size={21}/><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>

  <section id="personal" className="about-personal px-6 md:px-16 lg:px-24"><div className="max-w-6xl mx-auto">
    <div className="about-personal-heading"><div><p className="eyebrow">Away from the build</p><h2>Books, screens and<br/>a few firm positions.</h2></div><p>Work matters a lot to me. It is still not the whole person. These are a few things that have stayed with me, plus some choices I will defend with very different levels of seriousness.</p></div>
    <div className="culture-grid">
      <article><div className="culture-title"><BookOpen size={20}/><p className="eyebrow">Favourite books</p></div><div className="media-shelf">{culture.books.map(item=><div className="media-card" key={item.title}><img src={item.image} alt={`${item.title} cover`} loading="lazy"/><strong>{item.title}</strong>{item.detail&&<span>{item.detail}</span>}</div>)}</div></article>
      <article><div className="culture-title"><Tv size={20}/><p className="eyebrow">Favourite television</p></div><div className="media-shelf">{culture.television.map(item=><div className="media-card" key={item.title}><img src={item.image} alt={`${item.title} poster`} loading="lazy"/><strong>{item.title}</strong></div>)}</div></article>
      <article><div className="culture-title"><Clapperboard size={20}/><p className="eyebrow">Favourite films</p></div><div className="media-shelf">{culture.films.map(item=><div className="media-card" key={item.title}><img src={item.image} alt={`${item.title} poster`} loading="lazy"/><strong>{item.title}</strong></div>)}</div></article>
    </div>
    <div className="this-or-that"><div><Heart size={19}/><div><p className="eyebrow">This, every time</p><h3>A few low-stakes hills.</h3></div></div><div className="choice-list">{[['Salty','over','Sweet'],['Window','over','Aisle'],['Kindle','over','Audiobook'],['Hip hop','over','Rock'],['London','over','NYC'],['Messi','and','Ronaldo']].map(([pick,connector,other])=><span key={pick}><strong>{pick}</strong><small>{connector}</small>{other}</span>)}</div></div>
  </div></section>
</main><Footer/></>}
