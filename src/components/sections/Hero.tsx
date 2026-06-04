import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, WifiOff, ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  { src: '/screenshots/dashboard.png', label: 'Dashboard' },
  { src: '/screenshots/sales.png', label: 'POS Terminal' },
  { src: '/screenshots/products.png', label: 'Products' },
  { src: '/screenshots/inventory.png', label: 'Inventory' },
  { src: '/screenshots/terminals.png', label: 'Terminals' },
  { src: '/screenshots/demand.png', label: 'Demand Insights' },
  { src: '/screenshots/settings.png', label: 'Settings' },
  { src: '/screenshots/settings-payments.png', label: 'Payments' },
  { src: '/screenshots/settings-appearance.png', label: 'Appearance' },
  { src: '/screenshots/settings-tax-gst.png', label: 'Tax / GST' },
  { src: '/screenshots/settings-receipts.png', label: 'Receipts' },
  { src: '/screenshots/settings-users-roles.png', label: 'Users & Roles' },
  { src: '/screenshots/settings-security.png', label: 'Security' },
]

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

const elasticEase = [0.25, 1.05, 0.44, 0.98] as const

function MacBookSlider() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir)
    setCurrent(index)
  }, [])

  const next = useCallback(() => {
    goTo((current + 1) % screenshots.length, 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + screenshots.length) % screenshots.length, -1)
  }, [current, goTo])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 3500)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '80%' : '-80%',
      scale: 0.95,
      opacity: 1,
    }),
    center: {
      x: 0,
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? '-80%' : '80%',
      scale: 0.95,
      opacity: 0.5,
    }),
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* MacBook Pro */}
      <div className="relative mx-auto overflow-hidden">
        {/* Lid / display assembly */}
        <div
          className="relative rounded-[12px] p-[8px] sm:p-[10px]"
          style={{
            background: 'linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 50%, #2c2c2e 100%)',
            boxShadow: '0 2px 0 0 rgba(255,255,255,0.06) inset, 0 -1px 0 0 rgba(0,0,0,0.4) inset, 0 8px 40px -8px rgba(0,0,0,0.5), 0 2px 12px -2px rgba(0,0,0,0.3)',
          }}
        >
          {/* Top bezel with camera */}
          <div className="flex items-center justify-center h-[14px] sm:h-[18px] mb-[2px]">
            <div
              className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-full"
              style={{
                background: 'radial-gradient(circle at 40% 35%, #1a1e1a 0%, #0d0f0d 60%, #0a0a0a 100%)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 0 3px rgba(0,0,0,0.5) inset',
              }}
            />
          </div>

          {/* Screen */}
          <div
            className="relative overflow-hidden bg-white dark:bg-[#0f0f0f]"
            style={{
              borderRadius: '4px',
              aspectRatio: '16 / 10',
              boxShadow: '0 0 0 1px rgba(0,0,0,0.6) inset',
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="sync">
              <motion.img
                key={current}
                src={screenshots[current].src}
                alt={screenshots[current].label}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { duration: 0.5, ease: elasticEase },
                  scale: { duration: 0.5, ease: elasticEase },
                  opacity: { duration: 0.3 },
                }}
                className="absolute inset-0 w-full h-full object-cover object-top"
                draggable={false}
              />
            </AnimatePresence>

            {/* Screen reflection overlay */}
            <div
              className="absolute inset-0 pointer-events-none z-[5]"
              style={{
                background: 'linear-gradient(115deg, rgba(255,255,255,0.03) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.01) 100%)',
              }}
            />

            {/* Nav arrows */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-black/50 backdrop-blur-sm text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Current label */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[11px] text-white/80 font-medium z-10">
              {screenshots[current].label}
            </div>
          </div>
        </div>

        {/* Hinge — the connecting strip between lid and base */}
        <div
          className="relative h-[6px] sm:h-[8px] mx-[3px]"
          style={{
            background: 'linear-gradient(to bottom, #0e0e0e 0%, #1a1a1a 30%, #2a2a2c 50%, #1a1a1a 70%, #0e0e0e 100%)',
            borderRadius: '0 0 2px 2px',
          }}
        />

        {/* Bottom base / keyboard deck */}
        <div className="relative">
          {/* Main base shape — wider than lid, tapered */}
          <div
            className="relative mx-auto h-[8px] sm:h-[11px]"
            style={{
              width: '108%',
              marginLeft: '-4%',
              background: 'linear-gradient(to bottom, #b8b8ba 0%, #a8a8aa 40%, #c0c0c2 60%, #d0d0d2 100%)',
              borderRadius: '0 0 8px 8px',
              boxShadow: '0 1px 0 0 rgba(255,255,255,0.3) inset, 0 -1px 2px rgba(0,0,0,0.15), 0 4px 12px -4px rgba(0,0,0,0.2)',
            }}
          >
            {/* Front lip notch for opening */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] sm:h-[4px]"
              style={{
                width: '14%',
                background: 'linear-gradient(to bottom, #8a8a8c 0%, #a0a0a2 100%)',
                borderRadius: '0 0 4px 4px',
              }}
            />
          </div>
        </div>

        {/* Realistic shadow */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-3 sm:-bottom-5 pointer-events-none"
          style={{
            width: '90%',
            height: '20px',
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.06) 50%, transparent 80%)',
            filter: 'blur(6px)',
          }}
        />
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-0.5 mt-6">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className="relative flex items-center justify-center w-8 h-8"
            aria-label={`Go to ${screenshots[i].label}`}
          >
            <span className={`block h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? 'w-6 bg-[hsl(var(--primary))]'
                : 'w-1.5 bg-foreground/15 hover:bg-foreground/30'
            }`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[hsl(var(--primary)/0.04)] blur-[120px]" />
        <div className="dark:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--primary)/0.08)] blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex mb-6 lg:mb-8">
              <span className="relative inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.08)] to-transparent animate-[shimmer_3s_infinite] -translate-x-full" />
                <Zap className="h-3 w-3 text-[hsl(var(--primary))]" />
                <span className="relative">Open Source &bull; Built for Indian Retail</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[40px] sm:text-[56px] lg:text-[64px] xl:text-[72px] font-[900] leading-[1.05] tracking-tight text-foreground mb-5 lg:mb-6"
            >
              Your store,
              <br />
              <span className="text-gradient-accent">supercharged.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 lg:mb-10"
            >
              Lightning-fast POS that works offline. GST compliant billing,
              multi-terminal checkout, barcode scanning, and UPI payments —
              everything your retail store needs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href="https://pos.103.145.37.138.sslip.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                Start Free
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
              <a
                href="https://pos.103.145.37.138.sslip.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300 w-full sm:w-auto"
              >
                <Play className="h-4 w-4 fill-current" />
                Live Demo
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start text-[12px] text-muted-foreground/60"
            >
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" />
                GST compliant
              </span>
              <span className="flex items-center gap-1.5">
                <WifiOff className="h-3.5 w-3.5" />
                Works offline
              </span>
            </motion.div>
          </motion.div>

          {/* Right — MacBook with screenshot slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' as const }}
            className="group relative"
          >
            {/* Glow behind MacBook */}
            <div className="absolute inset-0 -m-12 rounded-full bg-[hsl(var(--primary)/0.05)] blur-[80px] dark:bg-[hsl(var(--primary)/0.1)]" />

            <div className="relative">
              <MacBookSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
