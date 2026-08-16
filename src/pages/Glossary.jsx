import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Search, X } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectIcon from '../components/ProjectIcon'
import { glossaryTerms } from '../glossary'

export default function Glossary() {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const words = query.trim().toLowerCase().split(/\s+/).filter(word => word.length > 1 && !['how', 'you', 'the', 'and', 'for', 'what', 'does', 'do', 'is', 'are', 'can', 'to'].includes(word))
    if (!words.length) return glossaryTerms
    return glossaryTerms.filter(item => {
      const haystack = [item.term, item.category, item.definition, ...(item.aliases || []), ...item.mentions.flatMap(x => [x.project, x.context])].join(' ').toLowerCase()
      return words.every(word => haystack.includes(word.replace(/[^a-z0-9]/g, '')))
    })
  }, [query])

  return <><Navbar/><main className="glossary-page">
    <header className="glossary-hero px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <p className="eyebrow"><BookOpen size={14}/> Plain English, deliberately</p>
        <h1>The useful words.<br/><span>Without the fog.</span></h1>
        <p className="glossary-deck">Product and engineering have more than enough jargon already. Search a term, a project or the question you are actually trying to answer.</p>
        <label className="glossary-search">
          <Search size={24}/>
          <input value={query} onChange={event => setQuery(event.target.value)} autoFocus placeholder="Try “how do you test AI?” or “App Store”" aria-label="Search the glossary"/>
          {query && <button onClick={() => setQuery('')} aria-label="Clear search"><X size={19}/></button>}
        </label>
        <div className="glossary-meta"><span>{results.length} {results.length === 1 ? 'term' : 'terms'}</span><span>Results update as you type</span></div>
      </div>
    </header>
    <section className="glossary-results px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {results.length ? <div className="glossary-grid">{results.map(item => <article className="glossary-card" key={item.term}>
          <div className="glossary-card-top"><span>{item.category}</span><b>{item.term.slice(0,1)}</b></div>
          <h2>{item.term}</h2>
          {item.aliases && <p className="glossary-alias">Also called {item.aliases.join(', ')}</p>}
          <p className="glossary-definition">{item.definition}</p>
          <div className="glossary-mentions"><p>Where it shows up</p>{item.mentions.map(x => <Link to={x.href} key={`${x.href}-${x.context}`}><ProjectIcon project={x.project} size="sm"/><span><strong>{x.project}</strong>{x.context}</span><ArrowRight size={16}/></Link>)}</div>
        </article>)}</div> : <div className="glossary-empty"><Search size={28}/><h2>No match yet.</h2><p>Try a shorter phrase, a project name or a word such as “AI”, “App Store” or “data”.</p><button onClick={() => setQuery('')}>Clear search</button></div>}
      </div>
    </section>
  </main><Footer/></>
}
