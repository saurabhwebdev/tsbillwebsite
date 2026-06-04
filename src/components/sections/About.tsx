import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Heart, Globe, Users, Code, ShieldCheck } from 'lucide-react'

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

const values = [
  {
    icon: Heart,
    title: 'Built with love',
    description:
      'We started SwiftBill because we saw small shopkeepers struggle with expensive, complicated software. Every feature is built with real shop owners in mind.',
  },
  {
    icon: Code,
    title: '100% open source',
    description:
      'We believe great software should be accessible to everyone. SwiftBill\'s entire codebase is open — inspect it, modify it, make it yours.',
  },
  {
    icon: Globe,
    title: 'Made in India',
    description:
      'GST compliance, rupee formatting, UPI payments, Hindi support — SwiftBill is designed from the ground up for Indian retail.',
  },
  {
    icon: ShieldCheck,
    title: 'Your data, your control',
    description:
      'SwiftBill runs on your server. Your sales data, customer info, and business records never leave your control. No third-party has access.',
  },
  {
    icon: Users,
    title: 'Community first',
    description:
      'We grow because our users love us. Feature requests come from real shopkeepers, not boardroom meetings. Your feedback shapes the product.',
  },
  {
    icon: Zap,
    title: 'Speed obsessed',
    description:
      'A billing app that makes you wait is worse than no app at all. SwiftBill is built to be lightning fast — even on older hardware.',
  },
]

const stats = [
  { value: '10K+', label: 'Shops using SwiftBill' },
  { value: '50L+', label: 'Bills generated' },
  { value: '28', label: 'States covered' },
  { value: '4.8★', label: 'Average rating' },
]

export function About() {
  return (
    <section id="about" className="relative">
      {/* Hero block */}
      <div className="relative bg-[hsl(var(--muted)/0.4)] dark:bg-[hsl(var(--muted)/0.2)] py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--primary)/0.04)] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              Our story
            </span>
            <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-[900] leading-[1.1] tracking-tight text-foreground mb-6">
              We believe every shopkeeper deserves{' '}
              <span className="text-gradient-accent">great software.</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed mb-4">
              Walk into any Indian market and you'll see it — shop owners
              scribbling bills on paper, struggling with clunky software that
              costs a fortune, or just winging it with a calculator.
            </p>
            <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed">
              We built SwiftBill to change that. A POS system that's
              fast, free, and actually built for how Indian shops work — with
              GST baked in, UPI payments ready, and no internet required. Because
              running a shop is hard enough. Your billing software shouldn't be.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 py-5 px-4 rounded-2xl border border-border/60 bg-card"
                >
                  <span className="font-display text-[28px] sm:text-[32px] font-[900] text-foreground leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[12px] sm:text-[13px] text-muted-foreground font-medium text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Values grid */}
      <div className="relative py-16 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h3 className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-[800] leading-[1.15] tracking-tight text-foreground mb-3">
              What we{' '}
              <span className="text-gradient-accent">stand for</span>
            </h3>
            <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">
              These aren't just words on a page. They shape every decision we
              make.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 sm:p-7 transition-all duration-300 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.04)]">
                  <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] transition-colors group-hover:bg-[hsl(var(--primary)/0.12)]">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-[17px] sm:text-[18px] font-[700] text-foreground mb-2 leading-snug">
                    {v.title}
                  </h4>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Team / Builder section */}
      <div className="relative bg-[hsl(var(--muted)/0.4)] dark:bg-[hsl(var(--muted)/0.2)] py-16 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-[800] leading-[1.15] tracking-tight text-foreground mb-4">
              Built by{' '}
              <span className="text-gradient-accent">Unison Apps</span>
            </h3>
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-4">
              We're a small team of developers and designers from India who
              believe technology should work for everyone — not just big
              corporations. SwiftBill is our flagship product, and we pour our
              hearts into making it better every single day.
            </p>
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-8">
              Have an idea? Found a bug? Want to contribute? We'd love to hear
              from you. SwiftBill is open source because we believe the best
              software is built together.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a
                href="https://github.com/saurabhwebdev/swiftbill"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300 w-full sm:w-auto"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Contribute on GitHub
              </a>
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
