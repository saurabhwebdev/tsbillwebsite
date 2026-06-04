import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, WifiOff } from 'lucide-react'

const POSScene = lazy(() => import('@/components/3d/POSScene'))

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' as const },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[hsl(var(--primary)/0.04)] blur-[120px]" />
        <div className="dark:block hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(var(--primary)/0.08)] blur-[100px]" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,0.85fr] gap-12 lg:gap-8 items-center">
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

          {/* Right — 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' as const }}
            className="relative"
          >
            {/* Glow behind 3D */}
            <div className="absolute inset-0 -m-12 rounded-full bg-[hsl(var(--primary)/0.06)] blur-[80px] dark:bg-[hsl(var(--primary)/0.12)]" />

            <div className="relative h-[320px] sm:h-[400px] lg:h-[500px]">
              <Suspense
                fallback={
                  <div className="h-full flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--primary)/0.1)] animate-pulse" />
                  </div>
                }
              >
                <POSScene />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
