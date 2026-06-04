import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: "'Cabinet Grotesk', 'Satoshi', sans-serif" }}>
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground tracking-tight mb-4">
          SwiftBill
        </h1>
        <p className="text-xl text-muted-foreground">
          Website scaffold ready. Building next...
        </p>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
