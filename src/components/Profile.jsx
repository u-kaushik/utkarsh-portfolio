import { ArrowDownToLine, ArrowRight, Blocks, CircleCheck, Route } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return <section id="about" className="profile-teaser px-6 md:px-16 lg:px-24 py-24 md:py-36">
    <div className="max-w-7xl mx-auto">
      <div className="profile-teaser-grid">
        <div><p className="eyebrow mb-5">A little more context</p><h2>The route here<br/><em>was not a straight line.</em></h2></div>
        <div className="profile-teaser-copy"><p>I came to product engineering after years of turning fairly loose business problems into websites, campaigns and internal tools. It taught me to ask better questions, explain the trade-offs and not disappear once the interesting bit was done.</p></div>
      </div>
      <div className="profile-teaser-points">
        <div><Route size={20}/><strong>Product judgement</strong><span>Find the useful outcome and say the trade-off out loud.</span></div>
        <div><Blocks size={20}/><strong>Hands-on build</strong><span>Swift, React, TypeScript, APIs, data and practical AI workflows.</span></div>
        <div><CircleCheck size={20}/><strong>Last-mile ownership</strong><span>Testing, staging, deployment and the unglamorous bits that make release possible.</span></div>
      </div>
      <div className="profile-teaser-actions"><Link to="/about" className="primary-pill">Explore my background <ArrowRight size={16}/></Link><a href="/Utkarsh-Kaushik-Product-Engineer-CV-Jul-2026.pdf" download className="secondary-pill">Download CV <ArrowDownToLine size={16}/></a></div>
    </div>
  </section>
}
