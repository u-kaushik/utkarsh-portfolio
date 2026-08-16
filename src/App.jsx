import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import ScrollReveal from './components/ScrollReveal'
import CaseStudy from './pages/CaseStudy'
import Glossary from './pages/Glossary'
import About from './pages/About'
import Growth from './pages/Growth'
import Home from './pages/Home'
import Product from './pages/Product'

export default function App(){return <><ScrollToHash/><ScrollReveal/><Routes><Route path="/" element={<Home/>}/><Route path="/growth" element={<Growth/>}/><Route path="/product" element={<Product/>}/><Route path="/about" element={<About/>}/><Route path="/project/:slug" element={<CaseStudy/>}/><Route path="/glossary" element={<Glossary/>}/></Routes></>}
