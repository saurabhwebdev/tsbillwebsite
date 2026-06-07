import { useState } from 'react'
import { useSEO } from '@/hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BookOpen,
  Download,
  Settings,
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  Shield,
  ChevronRight,
  Search,
  Zap,
  ArrowRight,
  Terminal,
  Globe,
  Database,
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

const quickStart = [
  {
    step: 1,
    title: 'Clone the repository',
    code: 'git clone https://github.com/saurabhwebdev/swiftbill.git',
  },
  {
    step: 2,
    title: 'Install backend dependencies',
    code: 'cd swiftbill && pip install -r requirements.txt',
  },
  {
    step: 3,
    title: 'Run database migrations',
    code: 'python manage.py migrate',
  },
  {
    step: 4,
    title: 'Start the development server',
    code: 'python manage.py runserver',
  },
]

const guides = [
  {
    icon: Download,
    title: 'Installation Guide',
    description:
      'Step-by-step setup for Ubuntu, Windows, and macOS. Get SwiftBill running in under 10 minutes.',
    tags: ['Beginner', 'Setup'],
  },
  {
    icon: ShoppingCart,
    title: 'Creating Your First Bill',
    description:
      'Learn how to add products, apply discounts, choose payment methods, and print GST-compliant receipts.',
    tags: ['Beginner', 'Billing'],
  },
  {
    icon: Package,
    title: 'Product & Inventory Management',
    description:
      'Add products, set categories, manage stock levels, configure low-stock alerts, and bulk import via CSV.',
    tags: ['Beginner', 'Products'],
  },
  {
    icon: Settings,
    title: 'Shop Configuration',
    description:
      'Set up your shop details, GST numbers, payment methods, receipt templates, and appearance preferences.',
    tags: ['Setup', 'Settings'],
  },
  {
    icon: Users,
    title: 'Users & Roles',
    description:
      'Create accounts for your staff with different access levels — Admin, Manager, and Cashier roles explained.',
    tags: ['Admin', 'Security'],
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    description:
      'Understand your dashboard stats, generate sales reports, track demand trends, and export data.',
    tags: ['Reports', 'Analytics'],
  },
  {
    icon: Globe,
    title: 'Multi-Terminal Setup',
    description:
      'Run multiple billing counters from one SwiftBill instance. Perfect for busy shops with several cashiers.',
    tags: ['Advanced', 'Setup'],
  },
  {
    icon: Shield,
    title: 'Security Best Practices',
    description:
      'Secure your installation — change default passwords, configure HTTPS, set up backups, and manage access.',
    tags: ['Advanced', 'Security'],
  },
  {
    icon: Database,
    title: 'Backup & Restore',
    description:
      'Schedule automatic database backups, restore from backup, and migrate between servers without losing data.',
    tags: ['Advanced', 'Admin'],
  },
]

const faq = [
  {
    q: 'Do I need technical knowledge to use SwiftBill?',
    a: 'Not at all. SwiftBill is designed for shopkeepers, not developers. The interface is simple and we have step-by-step guides for everything. If you can use WhatsApp, you can use SwiftBill.',
  },
  {
    q: 'What are the system requirements?',
    a: 'SwiftBill runs on any modern computer or device with a web browser. For self-hosting, you need Python 3.10+ and PostgreSQL. A basic VPS with 1GB RAM is sufficient for most shops.',
  },
  {
    q: 'Can I use it offline?',
    a: 'Yes! SwiftBill has a PWA mode that lets you create bills even without internet. Transactions automatically sync when your connection comes back.',
  },
  {
    q: 'How do I update to a new version?',
    a: 'Pull the latest code from GitHub, run database migrations, and restart. We provide migration scripts that handle everything automatically. Data is always preserved.',
  },
]

export function Documentation() {
  useSEO({
    title: 'Documentation — SwiftBill POS Setup & User Guide',
    description: 'Complete guide to install, configure, and use SwiftBill POS. Step-by-step tutorials for billing, inventory, products, reports, user roles, and security.',
    canonical: 'https://tsbill.xyz/docs',
    breadcrumbs: [
      { name: 'Home', url: 'https://tsbill.xyz/' },
      { name: 'Documentation', url: 'https://tsbill.xyz/docs' },
    ],
    faq: faq.map(f => ({ question: f.q, answer: f.a })),
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredGuides = guides.filter(
    (g) =>
      !searchQuery ||
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <BookOpen className="w-3 h-3 text-[hsl(var(--primary))]" />
              Documentation
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              Learn{' '}
              <span className="text-gradient-accent">SwiftBill.</span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed">
              Everything you need to set up, configure, and get the most out of
              SwiftBill for your shop. Written in plain language.
            </p>
          </Reveal>

          {/* Search */}
          <Reveal delay={0.1} className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search guides..."
                className="w-full h-[52px] pl-12 pr-4 rounded-2xl border border-border bg-card text-[15px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 sm:py-20 bg-muted/20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <Terminal className="w-5 h-5 text-[hsl(var(--primary))]" />
              <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground">
                Quick Start
              </h2>
            </div>
            <p className="text-[15px] text-muted-foreground">
              Get SwiftBill running on your machine in 4 steps.
            </p>
          </Reveal>

          <div className="space-y-3">
            {quickStart.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-card">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] text-[13px] font-bold">
                    {step.step}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[14px] font-semibold text-foreground mb-1.5">
                      {step.title}
                    </h4>
                    <code className="block px-3 py-2 rounded-lg bg-[hsl(var(--foreground)/0.04)] text-[13px] font-mono text-foreground/80 overflow-x-auto">
                      {step.code}
                    </code>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-6 text-center">
            <a
              href="https://github.com/saurabhwebdev/swiftbill#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[hsl(var(--primary))] hover:underline"
            >
              Full installation guide on GitHub
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground mb-2">
              Guides
            </h2>
            <p className="text-[15px] text-muted-foreground">
              Step-by-step tutorials for every part of SwiftBill.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGuides.map((guide, i) => (
              <Reveal key={guide.title} delay={i * 0.04}>
                <div className="group h-full p-5 rounded-xl border border-border/60 bg-card hover:border-[hsl(var(--primary)/0.3)] hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] flex items-center justify-center group-hover:bg-[hsl(var(--primary)/0.12)] transition-colors">
                      <guide.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-foreground mb-1 flex items-center gap-1">
                        {guide.title}
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-[hsl(var(--primary))] group-hover:translate-x-0.5 transition-all" />
                      </h3>
                    </div>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                    {guide.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {guide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredGuides.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[15px] text-muted-foreground">
                No guides match "{searchQuery}". Try a different search.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-10">
            <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground mb-2">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="space-y-3">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                  >
                    <span className="text-[14px] sm:text-[15px] font-semibold text-foreground">
                      {item.q}
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
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                          <p className="text-[14px] text-muted-foreground leading-relaxed">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              <Zap className="w-8 h-8 text-[hsl(var(--primary))] mx-auto mb-4" />
              <h2 className="font-display text-[24px] sm:text-[32px] font-[800] text-foreground mb-3">
                Need help getting started?
              </h2>
              <p className="text-[16px] text-muted-foreground mb-8 max-w-lg mx-auto">
                Our Pro Setup service includes complete installation,
                configuration, and training for your staff.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/#pricing"
                  className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all"
                >
                  View Pro Setup
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
