import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Blocks, Megaphone, Search, Wrench } from 'lucide-react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProjectIcon from '../components/ProjectIcon'
import ProjectVisual from '../components/ProjectVisual'
import { projects } from '../projects'

const featured = ['clear-halal', 'globotrotter', 'mission-control', 'rca-flow']
  .map(slug => projects.find(project => project.slug === slug))
  .filter(Boolean)

export default function Home() {
  useEffect(() => {
    document.title = 'Utkarsh Kaushik | Growth, GTM & Product'
  }, [])

  return <>
    <Navbar />
    <main className="overview-page">
      <section id="hero" className="overview-hero px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto overview-hero-inner">
          <p className="eyebrow"><span className="status-dot" /> London · Growth, GTM and product</p>
          <h1>I find the useful idea,<br/><em>build it, then help it travel.</em></h1>
          <p>I’m Utkarsh Kaushik. I started in web and marketing, moved deeper into product engineering, and now bring the two together. I work from customer and market research through to the product, launch assets and systems behind the campaign.</p>
          <div className="hero-actions">
            <Link to="/growth" className="primary-pill">View growth work <ArrowRight size={16}/></Link>
            <Link to="/product" className="secondary-pill">View product work <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="overview-spine px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto overview-spine-grid">
          <div className="overview-spine-intro"><p className="eyebrow">One joined-up job</p><p>Useful for lean teams where research, marketing and product cannot live in separate rooms.</p></div>
          <div><Search size={20}/><strong>Find the signal</strong><span>Customer language, market gaps, competitor patterns and the right first promise.</span></div>
          <div><Wrench size={20}/><strong>Make it real</strong><span>Products, landing pages, demos, copy and the practical tools needed to ship.</span></div>
          <div><Megaphone size={20}/><strong>Take it to users</strong><span>Launch planning, app listings, content systems and feedback into the next round.</span></div>
        </div>
      </section>

      <section className="overview-lanes px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="overview-section-heading">
            <div><p className="eyebrow">Two views of the same work</p><h2>Choose the part<br/>you need to see.</h2></div>
            <p>The growth view starts with the market and route to users. The product view goes deeper into the decisions, engineering and release work underneath it.</p>
          </div>
          <div className="overview-lane-grid">
            <Link to="/growth" className="overview-lane overview-lane-growth">
              <div><Megaphone size={22}/><p className="eyebrow">Growth & GTM</p></div>
              <h3>Research, positioning, launch work and useful marketing systems.</h3>
              <span>Explore growth work <ArrowUpRight size={18}/></span>
            </Link>
            <Link to="/product" className="overview-lane overview-lane-product">
              <div><Blocks size={22}/><p className="eyebrow">Product engineering</p></div>
              <h3>Product judgement, hands-on builds and ownership through release.</h3>
              <span>Explore product work <ArrowUpRight size={18}/></span>
            </Link>
          </div>
        </div>
      </section>

      <section id="work" className="overview-work px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="overview-section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Products with a story<br/>beyond the build.</h2></div>
            <p>These projects show the range: B2C apps, B2B workflows and internal systems. Each one started with a real problem, not a technology looking for somewhere to land.</p>
          </div>
          <div className="overview-work-grid">
            {featured.map(project => <Link to={`/project/${project.slug}`} className="overview-work-item" key={project.slug}>
              <ProjectVisual project={project}/>
              <div><p className="eyebrow">{project.type}</p><h3><ProjectIcon project={project}/>{project.title}</h3><p>{project.oneLine}</p><span>Read case study <ArrowRight size={16}/></span></div>
            </Link>)}
          </div>
        </div>
      </section>

      <section className="overview-story px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto overview-story-grid">
          <div><p className="eyebrow">The route here</p><h2>Marketing first.<br/>Product next.<br/><em>Both now.</em></h2></div>
          <div><p>I spent years helping small businesses turn loose goals into websites, landing pages and campaigns. That taught me to listen for the real need and work close to the customer.</p><p>Then I learned to build the product itself. At Glenmont Circle I have taken apps across research, UX, code, QA and release. The next step is not a sharp turn back to marketing. It is using both sides of the work together.</p><Link to="/about" className="growth-text-link">Read the full story <ArrowRight size={16}/></Link></div>
        </div>
      </section>
      <Contact />
    </main>
    <Footer />
  </>
}
