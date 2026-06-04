import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'

function Home() {
  return (
    <>
      <Hero />
      {/* More sections: Features, Pricing, About, Contact will go here */}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
