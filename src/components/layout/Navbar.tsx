import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' as const }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[hsl(0,0%,3%)/0.85] backdrop-blur-xl border-b border-[hsl(var(--border))/0.5]'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 sm:px-8 h-16 lg:h-[72px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary))] shadow-[0_0_20px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-shadow duration-500">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-display text-[18px] font-bold tracking-tight text-foreground">
              SwiftBill
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-[14px] font-medium text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[hsl(var(--primary))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://pos.103.145.37.138.sslip.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-[13px] font-semibold text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))] hover:text-foreground hover:border-[hsl(var(--foreground)/0.3)] transition-all duration-300"
            >
              Try Demo
            </a>
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-semibold text-white bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.9)] shadow-[0_0_20px_hsl(var(--primary)/0.25)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl text-foreground hover:bg-[hsl(var(--muted))] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[hsl(0,0%,3%)/0.95] backdrop-blur-2xl" />

            {/* Menu content */}
            <div className="relative flex flex-col h-full pt-20 pb-8 px-6">
              <nav className="flex-1 flex flex-col justify-center gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                      ease: 'easeOut' as const,
                    }}
                    className="text-[32px] font-display font-bold text-foreground/80 hover:text-foreground py-3 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' as const }}
                className="flex flex-col gap-3"
              >
                <a
                  href="https://pos.103.145.37.138.sslip.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center h-12 rounded-xl text-[15px] font-semibold text-foreground border border-[hsl(var(--border))] hover:border-[hsl(var(--foreground)/0.3)] transition-all"
                >
                  Try Demo
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 h-12 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
