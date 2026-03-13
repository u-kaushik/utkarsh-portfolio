import { Routes, Route } from 'react-router-dom'
import ScrollToHash from './components/ScrollToHash'
import Starfield from './components/Starfield'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FactoryWriteup from './pages/FactoryWriteup'
import MissionWriteup from './pages/MissionWriteup'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="relative">
      <Starfield />
      <div className="relative z-10">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/app-factory" element={<FactoryWriteup />} />
          <Route path="/project/mission-control" element={<MissionWriteup />} />
        </Routes>
      </div>
    </div>
  )
}
