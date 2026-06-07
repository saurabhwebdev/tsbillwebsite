import { useState } from 'react'
import { useSEO } from '@/hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  LifeBuoy,
  MessageSquare,
  Mail,
  BookOpen,
  ChevronRight,
  ArrowRight,
  Search,
  Zap,
  Clock,
  Shield,
  HeartHandshake,
} from 'lucide-react'
import { GithubIcon } from '@/components/icons/GithubIcon'

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

const supportChannels = [
  {
    icon: GithubIcon,
    title: 'GitHub Issues',
    description: 'Report bugs, request features, or browse existing issues.',
    action: 'Open GitHub Issues',
    href: 'https://github.com/saurabhwebdev/swiftbill/issues',
    badge: 'Best for bugs',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Support',
    description: 'Quick questions? Chat with us directly on WhatsApp.',
    action: 'Chat on WhatsApp',
    href: 'https://wa.me/919876543210',
    badge: 'Fastest reply',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description:
      'For detailed queries, setup help, or enterprise inquiries.',
    action: 'Send Email',
    href: 'mailto:theswiftbill@gmail.com',
    badge: 'Detailed help',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description:
      'Step-by-step guides for installation, configuration, and usage.',
    action: 'Read Docs',
    href: '/docs',
    badge: 'Self-service',
  },
]

const commonIssues = [
  {
    q: 'I forgot my admin password. How do I reset it?',
    a: 'You can reset it via the command line: run `python manage.py changepassword admin` from your server. If you don\'t have server access, contact us and we\'ll help you reset it.',
  },
  {
    q: 'My receipt printer isn\'t working with SwiftBill.',
    a: 'SwiftBill uses the browser\'s print function. Make sure your thermal printer is set as the default printer in your system settings. For 80mm thermal printers, set the paper size to 80mm in print preferences.',
  },
  {
    q: 'Products are showing wrong stock numbers.',
    a: 'Go to Settings → Inventory and run "Reconcile Stock." This recalculates all stock levels from your sales history. If the issue persists, check if you have multiple terminals that might be out of sync.',
  },
  {
    q: 'GST calculations seem incorrect on my bills.',
    a: 'Check your GST rates in Settings → Tax/GST. Make sure you\'ve set the correct HSN codes and rates for each product. SwiftBill calculates CGST+SGST for intrastate and IGST for interstate automatically.',
  },
  {
    q: 'The app is slow or not loading properly.',
    a: 'Clear your browser cache and reload. If you\'re self-hosting, check that your server has at least 1GB RAM and PostgreSQL is running. For cloud hosting, our Pro Setup service can optimize your configuration.',
  },
  {
    q: 'How do I migrate data from my old billing software?',
    a: 'SwiftBill supports CSV import for products. Export your product list from your old software as CSV, then use our bulk import tool in Products → Import. For complete data migration, our Enterprise plan includes custom migration support.',
  },
  {
    q: 'Can multiple people use SwiftBill at the same time?',
    a: 'Yes! SwiftBill supports multiple users and terminals. Create separate accounts for each staff member with appropriate roles (Admin, Manager, or Cashier) in Settings → Users & Roles.',
  },
  {
    q: 'SwiftBill is not working offline after the first setup.',
    a: 'Make sure you\'ve opened SwiftBill in Chrome or Edge and clicked "Install" when prompted. The PWA must be installed for offline mode to work. Also ensure you\'ve visited all the pages you need while online first.',
  },
]

const supportTiers = [
  {
    tier: 'Community',
    icon: HeartHandshake,
    responseTime: '2-3 business days',
    channels: ['GitHub Issues', 'Documentation'],
    description: 'Free support through our open-source community.',
  },
  {
    tier: 'Pro',
    icon: Zap,
    responseTime: 'Within 24 hours',
    channels: ['WhatsApp', 'Email', 'GitHub'],
    description:
      'Priority support for Pro Setup customers. Direct access to our team.',
  },
  {
    tier: 'Enterprise',
    icon: Shield,
    responseTime: 'Within 4 hours',
    channels: ['Dedicated WhatsApp', 'Email', 'Phone', 'Screen share'],
    description:
      'Dedicated support with SLA guarantees. Custom training included.',
  },
]

export function Support() {
  useSEO({
    title: 'Support — SwiftBill POS Help Center & FAQ',
    description: 'Get help with SwiftBill POS. Browse common issues, troubleshooting guides, and contact our support team via WhatsApp, email, or GitHub.',
    canonical: 'https://tsbill.xyz/support',
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredIssues = commonIssues.filter(
    (issue) =>
      !searchQuery ||
      issue.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.a.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <LifeBuoy className="w-3 h-3 text-[hsl(var(--primary))]" />
              Help Center
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              How can we{' '}
              <span className="text-gradient-accent">help you?</span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed">
              Stuck somewhere? We've got you. Browse common solutions below
              or reach out through any of our support channels.
            </p>
          </Reveal>

          {/* Support Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {supportChannels.map((ch, i) => (
              <Reveal key={ch.title} delay={i * 0.06}>
                <a
                  href={ch.href}
                  target={ch.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    ch.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group flex items-start gap-4 p-5 rounded-xl border border-border/60 bg-card hover:border-[hsl(var(--primary)/0.3)] hover:shadow-md transition-all duration-300"
                >
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] flex items-center justify-center group-hover:bg-[hsl(var(--primary)/0.12)] transition-colors">
                    <ch.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-[15px] font-semibold text-foreground">
                        {ch.title}
                      </h3>
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground">
                        {ch.badge}
                      </span>
                    </div>
                    <p className="text-[13px] text-muted-foreground mb-2">
                      {ch.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[hsl(var(--primary))]">
                      {ch.action}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-8">
            <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground mb-2">
              Common Issues & Solutions
            </h2>
            <p className="text-[15px] text-muted-foreground">
              Quick fixes for the most frequently asked questions.
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.05} className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for a solution..."
                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all"
              />
            </div>
          </Reveal>

          <div className="space-y-3">
            {filteredIssues.map((issue, i) => (
              <Reveal key={i} delay={i * 0.03}>
                <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  >
                    <span className="text-[14px] font-semibold text-foreground">
                      {issue.q}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-90' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                          <p className="text-[14px] text-muted-foreground leading-relaxed">
                            {issue.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredIssues.length === 0 && (
            <div className="text-center py-8">
              <p className="text-[14px] text-muted-foreground mb-3">
                No results for "{searchQuery}".
              </p>
              <a
                href="/#contact"
                className="text-[14px] font-medium text-[hsl(var(--primary))] hover:underline"
              >
                Contact us for help
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground mb-2">
              Support Tiers
            </h2>
            <p className="text-[15px] text-muted-foreground">
              Choose the level of support that fits your shop.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {supportTiers.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.06}>
                <div
                  className={`h-full p-6 rounded-xl border bg-card ${i === 1 ? 'border-[hsl(var(--primary)/0.3)] ring-1 ring-[hsl(var(--primary)/0.1)]' : 'border-border/60'}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${i === 1 ? 'bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))]' : 'bg-muted text-muted-foreground'}`}
                    >
                      <tier.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[17px] font-bold text-foreground">
                      {tier.tier}
                    </h3>
                  </div>
                  <p className="text-[13px] text-muted-foreground mb-4">
                    {tier.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-3.5 h-3.5 text-[hsl(var(--primary))]" />
                    <span className="text-[13px] font-semibold text-foreground">
                      {tier.responseTime}
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {tier.channels.map((ch) => (
                      <li
                        key={ch}
                        className="flex items-center gap-2 text-[13px] text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--primary)/0.4)]" />
                        {ch}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="text-center mt-8">
            <a
              href="/#pricing"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[hsl(var(--primary))] hover:underline"
            >
              Compare plans & pricing
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
