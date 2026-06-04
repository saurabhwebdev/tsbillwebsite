import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Demo } from '@/pages/Demo'
import { Changelog } from '@/pages/Changelog'
import { Documentation } from '@/pages/Documentation'
import { ApiReference } from '@/pages/ApiReference'
import { Support } from '@/pages/Support'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <About />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/api-reference" element={<ApiReference />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
