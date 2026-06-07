import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'

const Demo = lazy(() => import('@/pages/Demo').then((m) => ({ default: m.Demo })))
const Changelog = lazy(() => import('@/pages/Changelog').then((m) => ({ default: m.Changelog })))
const Documentation = lazy(() => import('@/pages/Documentation').then((m) => ({ default: m.Documentation })))
const ApiReference = lazy(() => import('@/pages/ApiReference').then((m) => ({ default: m.ApiReference })))
const Support = lazy(() => import('@/pages/Support').then((m) => ({ default: m.Support })))
const Privacy = lazy(() => import('@/pages/Privacy').then((m) => ({ default: m.Privacy })))
const Terms = lazy(() => import('@/pages/Terms').then((m) => ({ default: m.Terms })))
const Blog = lazy(() => import('@/pages/Blog').then((m) => ({ default: m.Blog })))
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  useSEO({
    title: 'SwiftBill — Free Open-Source POS Billing Software for Indian Retail',
    description: 'Lightning-fast billing software with GST compliance, offline mode, multi-terminal support, barcode scanning, UPI payments, and inventory management. 100% free and open source.',
    canonical: 'https://tsbill.xyz/',
    breadcrumbs: [{ name: 'Home', url: 'https://tsbill.xyz/' }],
  })
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

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[hsl(var(--primary))] border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main className="pt-16 lg:pt-[72px]">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/changelog" element={<Changelog />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
