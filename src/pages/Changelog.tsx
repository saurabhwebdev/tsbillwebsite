import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Clock,
  Sparkles,
  Bug,
  Wrench,
  Rocket,
  Tag,
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

type ChangeType = 'feature' | 'fix' | 'improvement' | 'breaking'

const typeConfig: Record<
  ChangeType,
  { label: string; icon: typeof Sparkles; color: string; bg: string }
> = {
  feature: {
    label: 'New',
    icon: Sparkles,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  fix: {
    label: 'Fix',
    icon: Bug,
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-500/10',
  },
  improvement: {
    label: 'Improved',
    icon: Wrench,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
  },
  breaking: {
    label: 'Breaking',
    icon: Rocket,
    color: 'text-red-600 dark:text-red-400',
    bg: 'bg-red-500/10',
  },
}

const releases = [
  {
    version: '2.4.0',
    date: 'May 2026',
    title: 'Multi-terminal & Demand Analytics',
    highlights: [
      'Run multiple billing counters from a single account',
      'New demand analytics dashboard to spot trends',
      'Export reports as PDF and Excel',
    ],
    changes: [
      { type: 'feature' as ChangeType, text: 'Multi-terminal support — run up to 10 counters simultaneously' },
      { type: 'feature' as ChangeType, text: 'Demand analytics with trend graphs and top-seller insights' },
      { type: 'feature' as ChangeType, text: 'PDF and Excel export for all reports' },
      { type: 'improvement' as ChangeType, text: 'Faster product search with fuzzy matching' },
      { type: 'fix' as ChangeType, text: 'Fixed receipt printing alignment on thermal printers' },
      { type: 'fix' as ChangeType, text: 'Resolved inventory count mismatch after returns' },
    ],
  },
  {
    version: '2.3.0',
    date: 'March 2026',
    title: 'GST 2.0 Compliance & Receipt Customization',
    highlights: [
      'Updated for latest GST rules and e-invoice format',
      'Fully customizable receipt templates',
      'User roles and permissions system',
    ],
    changes: [
      { type: 'feature' as ChangeType, text: 'GST 2.0 compliance with new e-invoice format support' },
      { type: 'feature' as ChangeType, text: 'Custom receipt templates with drag-and-drop editor' },
      { type: 'feature' as ChangeType, text: 'Role-based access control — Admin, Manager, Cashier roles' },
      { type: 'improvement' as ChangeType, text: 'Receipt printing speed improved by 40%' },
      { type: 'improvement' as ChangeType, text: 'Reduced app bundle size by 25%' },
      { type: 'fix' as ChangeType, text: 'Fixed dark mode toggle not persisting across sessions' },
    ],
  },
  {
    version: '2.2.0',
    date: 'January 2026',
    title: 'Offline Mode & PWA Support',
    highlights: [
      'Full offline billing capability',
      'Install as app on any device',
      'Auto-sync when connection returns',
    ],
    changes: [
      { type: 'feature' as ChangeType, text: 'Complete offline mode — create bills even without internet' },
      { type: 'feature' as ChangeType, text: 'PWA support — install SwiftBill as a native app' },
      { type: 'feature' as ChangeType, text: 'Auto-sync queued transactions when back online' },
      { type: 'improvement' as ChangeType, text: 'Dashboard loads 3x faster with lazy loading' },
      { type: 'improvement' as ChangeType, text: 'Better mobile experience on small screens' },
      { type: 'fix' as ChangeType, text: 'Fixed decimal rounding in tax calculations' },
    ],
  },
  {
    version: '2.1.0',
    date: 'November 2025',
    title: 'Bulk Operations & Payment Methods',
    highlights: [
      'Import hundreds of products via CSV',
      'UPI, card, and split payment support',
      'Stock alerts and reorder levels',
    ],
    changes: [
      { type: 'feature' as ChangeType, text: 'CSV bulk import for products with validation' },
      { type: 'feature' as ChangeType, text: 'Multiple payment methods — UPI, card, cash, and split' },
      { type: 'feature' as ChangeType, text: 'Low stock alerts with configurable reorder points' },
      { type: 'improvement' as ChangeType, text: 'Product images now support drag-and-drop upload' },
      { type: 'fix' as ChangeType, text: 'Fixed search not finding products with special characters' },
      { type: 'fix' as ChangeType, text: 'Corrected GST calculation for interstate transactions' },
    ],
  },
  {
    version: '2.0.0',
    date: 'September 2025',
    title: 'SwiftBill 2.0 — Complete Rewrite',
    highlights: [
      'Rebuilt from scratch with React + Django',
      'Modern, responsive design',
      'Lightning-fast performance',
    ],
    changes: [
      { type: 'breaking' as ChangeType, text: 'Complete rewrite — migration guide available for v1 users' },
      { type: 'feature' as ChangeType, text: 'New React frontend with modern, responsive design' },
      { type: 'feature' as ChangeType, text: 'Django REST backend with PostgreSQL' },
      { type: 'feature' as ChangeType, text: 'Real-time dashboard with live sales data' },
      { type: 'feature' as ChangeType, text: 'Dark mode support throughout the app' },
      { type: 'improvement' as ChangeType, text: '10x faster page loads compared to v1' },
    ],
  },
]

export function Changelog() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="text-center mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <Clock className="w-3 h-3 text-[hsl(var(--primary))]" />
              What's new
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              Changelog
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every update, improvement, and fix — all in one place. We ship
              new features regularly to make SwiftBill better for your shop.
            </p>
          </Reveal>

          {/* Subscribe banner */}
          <Reveal delay={0.1} className="mb-16">
            <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold text-foreground mb-1">
                  Stay updated
                </h3>
                <p className="text-[13px] text-muted-foreground">
                  Star us on GitHub to get notified about new releases.
                </p>
              </div>
              <a
                href="https://github.com/saurabhwebdev/swiftbill"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 h-10 px-5 rounded-xl text-[13px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all shrink-0"
              >
                Star on GitHub
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </Reveal>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border/60 hidden sm:block" />

            <div className="space-y-16">
              {releases.map((release, i) => (
                <Reveal key={release.version} delay={i * 0.04}>
                  <div className="relative sm:pl-14">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 hidden sm:flex items-center justify-center w-[38px] h-[38px]">
                      <div className="w-3 h-3 rounded-full bg-[hsl(var(--primary))] ring-4 ring-background" />
                    </div>

                    {/* Version header */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] text-[13px] font-bold">
                        <Tag className="w-3 h-3" />
                        v{release.version}
                      </span>
                      <span className="text-[13px] text-muted-foreground">
                        {release.date}
                      </span>
                    </div>

                    <h3 className="font-display text-[20px] sm:text-[24px] font-[700] text-foreground mb-3">
                      {release.title}
                    </h3>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {release.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-[14px] text-muted-foreground"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary)/0.4)] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Changes */}
                    <div className="rounded-xl border border-border/40 bg-card/50 overflow-hidden">
                      {release.changes.map((change, ci) => {
                        const cfg = typeConfig[change.type]
                        return (
                          <div
                            key={ci}
                            className={`flex items-start gap-3 px-4 py-3 ${ci > 0 ? 'border-t border-border/30' : ''}`}
                          >
                            <span
                              className={`inline-flex items-center gap-1 shrink-0 px-2 py-0.5 rounded text-[11px] font-semibold ${cfg.color} ${cfg.bg}`}
                            >
                              <cfg.icon className="w-3 h-3" />
                              {cfg.label}
                            </span>
                            <span className="text-[13px] text-foreground/80">
                              {change.text}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
