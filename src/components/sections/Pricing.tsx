import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Check,
  Github,
  Download,
  Headphones,
  ArrowRight,
  Heart,
  Server,
  ShieldCheck,
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

const freeFeatures = [
  'Unlimited products & bills',
  'GST compliant invoices',
  'Multi-terminal support',
  'Barcode scanning',
  'UPI, card & cash payments',
  'Inventory management',
  'Demand tracking',
  'Dashboard & reports',
  'Works offline',
  'Dark mode & customization',
  'All future updates — forever',
]

const proFeatures = [
  'We install SwiftBill on your server',
  'Domain & SSL setup included',
  'Database configuration',
  'Full security hardening',
  'Staff training (video call)',
  '30 days of priority support',
  'WhatsApp/phone support',
  'Help with data migration',
]

const enterpriseFeatures = [
  'Everything in Pro Setup',
  'Dedicated account manager',
  'Custom feature development',
  'Multi-store setup',
  'Ongoing maintenance & updates',
  'SLA with guaranteed uptime',
  'Priority bug fixes',
  'Quarterly business reviews',
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
            <Heart className="w-3 h-3 text-[hsl(var(--primary))]" />
            Open source, always
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-[900] leading-[1.1] tracking-tight text-foreground mb-4">
            Free forever.{' '}
            <span className="text-gradient-accent">Seriously.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed">
            SwiftBill is 100% open source. Download it, use it, modify it —
            it's yours. We only charge if you want us to set it up for you or
            need ongoing support.
          </p>
        </Reveal>

        {/* GitHub banner */}
        <Reveal delay={0.1} className="max-w-2xl mx-auto mb-14 sm:mb-20">
          <a
            href="https://github.com/saurabhwebdev/swiftbill"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 py-3 px-5 rounded-xl border border-border bg-card hover:border-[hsl(var(--primary)/0.3)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.04)] transition-all duration-300"
          >
            <Github className="w-5 h-5 text-foreground" />
            <span className="text-[14px] font-medium text-foreground">
              saurabhwebdev/swiftbill
            </span>
            <span className="text-[13px] text-muted-foreground">
              — Star us on GitHub
            </span>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </a>
        </Reveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
          {/* Free / Open Source */}
          <Reveal delay={0}>
            <div className="relative h-full rounded-2xl border border-border/60 bg-card p-7 sm:p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mb-4">
                  <Download className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[22px] font-[800] text-foreground mb-1">
                  Community
                </h3>
                <p className="text-[14px] text-muted-foreground">
                  Self-hosted, open source
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-[48px] font-[900] text-foreground leading-none">
                  ₹0
                </span>
                <span className="text-[15px] text-muted-foreground font-medium">
                  / forever
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {freeFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-[14px] text-muted-foreground leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/saurabhwebdev/swiftbill"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 h-12 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300 w-full"
              >
                <Github className="w-4 h-4" />
                Download from GitHub
              </a>
            </div>
          </Reveal>

          {/* Pro Setup */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-2xl border-2 border-[hsl(var(--primary))] bg-card p-7 sm:p-8 flex flex-col shadow-xl shadow-[hsl(var(--primary)/0.06)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[hsl(var(--primary))] text-white text-[11px] font-bold tracking-wide uppercase">
                Most popular
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[22px] font-[800] text-foreground mb-1">
                  Pro Setup
                </h3>
                <p className="text-[14px] text-muted-foreground">
                  We install & configure everything
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-[48px] font-[900] text-foreground leading-none">
                  ₹4,999
                </span>
              </div>
              <p className="text-[13px] text-muted-foreground mb-6">
                One-time payment · No monthly fees
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {proFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[hsl(var(--primary))] mt-0.5 shrink-0" />
                    <span className="text-[14px] text-muted-foreground leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 h-12 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all duration-300 w-full"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* Enterprise */}
          <Reveal delay={0.2}>
            <div className="relative h-full rounded-2xl border border-border/60 bg-card p-7 sm:p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display text-[22px] font-[800] text-foreground mb-1">
                  Enterprise
                </h3>
                <p className="text-[14px] text-muted-foreground">
                  For growing businesses
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-display text-[48px] font-[900] text-foreground leading-none">
                  Custom
                </span>
              </div>
              <p className="text-[13px] text-muted-foreground mb-6">
                Monthly or annual plans available
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {enterpriseFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-[14px] text-muted-foreground leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 h-12 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300 w-full"
              >
                <Headphones className="w-4 h-4" />
                Talk to us
              </a>
            </div>
          </Reveal>
        </div>

        {/* FAQ / Trust section */}
        <Reveal className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border/60 bg-[hsl(var(--muted)/0.3)] p-8 sm:p-10">
            <h3 className="font-display text-[22px] sm:text-[26px] font-[800] text-foreground mb-6 text-center">
              Common questions
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: 'Is it really free? What\'s the catch?',
                  a: 'No catch. SwiftBill is open source under the MIT license. You can download, modify, and use it for your business — free forever. We make money only when you ask us to set it up or support you.',
                },
                {
                  q: 'I\'m not technical. Can I still use it?',
                  a: 'That\'s exactly why our Pro Setup exists. We handle the entire installation — server, domain, database, everything. You just start billing. And if you ever need help, we\'re a WhatsApp message away.',
                },
                {
                  q: 'What if I want to switch later?',
                  a: 'Your data is yours. SwiftBill runs on your own server, so you\'re never locked in. Export your data anytime. No vendor lock-in, no surprises.',
                },
                {
                  q: 'Do I need to buy a server?',
                  a: 'For the Pro Setup, yes — a small cloud server (starting at ~₹500/month). We\'ll help you pick the right one and set it up. Or you can run SwiftBill on any computer in your shop.',
                },
              ].map((item) => (
                <div key={item.q}>
                  <h4 className="text-[15px] font-semibold text-foreground mb-1.5">
                    {item.q}
                  </h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
