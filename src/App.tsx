import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

function Home() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-display text-5xl sm:text-7xl font-bold text-foreground tracking-tight mb-6">
          SwiftBill
        </h1>
        <p className="text-lg sm:text-xl text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
          Website coming soon. Building something extraordinary.
        </p>
      </div>
    </div>
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
