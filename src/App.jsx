import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CV from './components/CV'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Animation au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, {
      threshold: 0.1
    })

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="w-full min-h-screen bg-primary font-sans text-text-primary flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="flex-1 w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <CV />
              <Certifications />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>

      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}

export default App
