import { useSEO } from '@/hooks/useSEO'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ExternalLink,
  Play,
  Monitor,
  Smartphone,
  ShieldCheck,
  Zap,
  ArrowRight,
} from 'lucide-react'

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const walkthrough = [
  {
    title: 'Dashboard at a glance',
    description:
      'See today\'s sales, top products, and quick stats the moment you log in. No digging through menus.',
    screenshot: '/screenshots/dashboard.png',
  },
  {
    title: 'Create bills in seconds',
    description:
      'Search products, add to cart, apply discounts, and generate GST-compliant invoices — all from one screen.',
    screenshot: '/screenshots/sales.png',
  },
  {
    title: 'Manage your products',
    description:
      'Add products with photos, set prices, track stock levels, and organize with categories. Bulk import supported.',
    screenshot: '/screenshots/products.png',
  },
  {
    title: 'Real-time inventory',
    description:
      'Stock updates automatically with every sale. Get low-stock alerts before you run out of your best sellers.',
    screenshot: '/screenshots/inventory.png',
  },
  {
    title: 'Multi-terminal support',
    description:
      'Run multiple billing counters from one account. Perfect for busy shops with more than one cashier.',
    screenshot: '/screenshots/terminals.png',
  },
  {
    title: 'Demand insights',
    description:
      'See which products sell most, spot trends, and make smarter purchasing decisions with simple charts.',
    screenshot: '/screenshots/demand.png',
  },
  {
    title: 'Customize everything',
    description:
      'Set up payment methods, taxes, receipt layouts, user roles, and appearance — all from settings.',
    screenshot: '/screenshots/settings.png',
  },
]

export function Demo() {
  useSEO({
    title: 'Live Demo — SwiftBill POS | Try Free Online',
    description: 'Try SwiftBill POS live in your browser. No signup needed. Explore billing, inventory, reports, and all features with our interactive demo.',
    canonical: 'https://tsbill.xyz/demo',
    breadcrumbs: [
      { name: 'Home', url: 'https://tsbill.xyz/' },
      { name: 'Demo', url: 'https://tsbill.xyz/demo' },
    ],
  })
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <Play className="w-3 h-3 text-[hsl(var(--primary))]" />
              Live Demo
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              See SwiftBill{' '}
              <span className="text-gradient-accent">in action.</span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed mb-8">
              No signup needed. Jump into our live demo and explore every
              feature — billing, inventory, reports, settings — exactly as your
              shop would use it.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://pos.103.145.37.138.sslip.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Open Live Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="https://github.com/saurabhwebdev/swiftbill"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300"
              >
                View Source Code
              </a>
            </div>
          </Reveal>

          {/* Demo credentials */}
          <Reveal delay={0.1} className="max-w-md mx-auto mb-16">
            <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-[13px] font-semibold text-foreground">
                  Demo Credentials
                </span>
              </div>
              <div className="flex gap-4 justify-center text-[14px]">
                <div>
                  <span className="text-muted-foreground">Username: </span>
                  <code className="px-2 py-0.5 rounded bg-muted text-foreground font-mono text-[13px]">
                    admin
                  </code>
                </div>
                <div>
                  <span className="text-muted-foreground">Password: </span>
                  <code className="px-2 py-0.5 rounded bg-muted text-foreground font-mono text-[13px]">
                    admin123
                  </code>
                </div>
              </div>
              <p className="text-[12px] text-muted-foreground/60 mt-3">
                Data resets every 24 hours. Feel free to test anything.
              </p>
            </div>
          </Reveal>

          {/* Device info */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-20">
              {[
                {
                  icon: Monitor,
                  title: 'Desktop',
                  desc: 'Full experience on laptop or desktop',
                },
                {
                  icon: Smartphone,
                  title: 'Mobile Ready',
                  desc: 'Works on phones and tablets too',
                },
                {
                  icon: Zap,
                  title: 'Instant Load',
                  desc: 'PWA with offline capability',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center p-4 rounded-xl border border-border/40 bg-card/50"
                >
                  <item.icon className="w-5 h-5 text-[hsl(var(--primary))] mb-2" />
                  <h4 className="text-[14px] font-semibold text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[12px] text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Walkthrough */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display text-[28px] sm:text-[36px] font-[800] text-foreground mb-3">
              A quick tour of SwiftBill
            </h2>
            <p className="text-[16px] text-muted-foreground">
              Here's what you'll find when you open the app. Every screen is
              designed to be simple enough that anyone in your shop can use it.
            </p>
          </Reveal>

          <div className="space-y-20 sm:space-y-28">
            {walkthrough.map((step, i) => (
              <Reveal key={step.title} delay={0.05}>
                <div
                  className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-14 items-center`}
                >
                  <div className="flex-1 max-w-md">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] text-[13px] font-bold mb-4">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-[22px] sm:text-[26px] font-[700] text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="rounded-xl border border-border/60 bg-card overflow-hidden shadow-lg">
                      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border/40 bg-muted/30">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                        <span className="ml-2 text-[11px] text-muted-foreground/50">
                          SwiftBill POS
                        </span>
                      </div>
                      <img
                        src={step.screenshot}
                        alt={step.title}
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-12 text-center">
              <h2 className="font-display text-[24px] sm:text-[32px] font-[800] text-foreground mb-3">
                Ready to try it yourself?
              </h2>
              <p className="text-[16px] text-muted-foreground mb-8 max-w-lg mx-auto">
                Jump into the live demo right now. No signup, no credit card, no
                commitments.
              </p>
              <a
                href="https://pos.103.145.37.138.sslip.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-[52px] px-8 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all"
              >
                <Play className="w-4 h-4" />
                Launch Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
