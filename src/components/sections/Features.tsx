import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  BarChart3,
  Zap,
  Package,
  TrendingDown,
  Monitor,
  Lightbulb,
  CreditCard,
  Palette,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

/* ── Animated wrapper ─────────────────────────────────────────────── */

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

/* ── Screenshot in a polished app frame ───────────────────────────── */

function AppFrame({
  src,
  alt,
  className = '',
}: {
  src: string
  alt: string
  className?: string
}) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-card ${className}`}
      style={{
        boxShadow:
          '0 0 0 1px hsl(var(--border) / 0.5), 0 4px 8px -2px rgba(0,0,0,0.06), 0 16px 56px -8px rgba(0,0,0,0.14)',
      }}
    >
      {/* macOS window bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[hsl(var(--muted))] border-b border-border/60">
        <div className="flex items-center gap-[6px]">
          <div className="w-[11px] h-[11px] rounded-full bg-[#ff5f57] ring-1 ring-black/[0.04]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#febc2e] ring-1 ring-black/[0.04]" />
          <div className="w-[11px] h-[11px] rounded-full bg-[#28c840] ring-1 ring-black/[0.04]" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="h-[22px] w-[180px] rounded-md bg-background border border-border/60 flex items-center justify-center">
            <span className="text-[10px] text-muted-foreground/50 tracking-wide">
              swiftbill.app
            </span>
          </div>
        </div>
        <div className="w-[52px]" />
      </div>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto block"
        loading="lazy"
      />
    </div>
  )
}

/* ── Stat pill ────────────────────────────────────────────────────── */

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 px-4 py-2">
      <span className="font-display text-[22px] sm:text-[26px] font-[800] text-foreground">
        {value}
      </span>
      <span className="text-[11px] sm:text-[12px] text-muted-foreground font-medium">
        {label}
      </span>
    </div>
  )
}

/* ── Small feature card for the grid ─────────────────────────────── */

function MiniCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative h-full rounded-2xl border border-border/60 bg-card p-6 sm:p-7 transition-all duration-300 hover:border-[hsl(var(--primary)/0.3)] hover:shadow-lg hover:shadow-[hsl(var(--primary)/0.04)]">
        <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] transition-colors group-hover:bg-[hsl(var(--primary)/0.12)]">
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="font-display text-[17px] sm:text-[18px] font-[700] text-foreground mb-2 leading-snug">
          {title}
        </h4>
        <p className="text-[14px] text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </Reveal>
  )
}

/* ── Main component ───────────────────────────────────────────────── */

export function Features() {
  return (
    <section id="features" className="relative">
      {/* ▸ Section intro ──────────────────────────────────────────── */}
      <div className="relative py-20 sm:py-28 lg:py-32">
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
          <Reveal className="text-center max-w-2xl mx-auto mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              A day with SwiftBill
            </span>
            <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-[900] leading-[1.1] tracking-tight text-foreground mb-4">
              Your shop runs itself.{' '}
              <span className="text-gradient-accent">Almost.</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed">
              You didn't open a shop to stare at spreadsheets. SwiftBill handles
              the boring stuff so you can focus on what matters — your customers.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ▸ Feature 1 — Dashboard (hero showcase) ─────────────────── */}
      <div className="relative bg-[hsl(var(--muted)/0.4)] dark:bg-[hsl(var(--muted)/0.2)] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[hsl(var(--primary)/0.04)] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-[12px] font-semibold tracking-wide uppercase mb-5">
                <BarChart3 className="w-3.5 h-3.5" />
                Morning — Open your shop
              </span>
              <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-[800] leading-[1.12] tracking-tight text-foreground mb-4">
                Open the app. See{' '}
                <span className="text-gradient-accent">everything.</span>
              </h3>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Before you even unlock the shutters, you already know — how much
                you sold yesterday, which items are flying off the shelves, and
                how your week is shaping up. One screen, the whole picture.
              </p>
              <div className="flex items-center gap-0 divide-x divide-border rounded-xl border border-border bg-card w-fit">
                <Stat value="₹24K" label="Daily sales" />
                <Stat value="142" label="Bills today" />
                <Stat value="98%" label="GST ready" />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <AppFrame
                src="/screenshots/dashboard.png"
                alt="SwiftBill Dashboard showing sales overview"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* ▸ Feature 2 — Billing (hero showcase, reversed) ─────────── */}
      <div className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
              <AppFrame
                src="/screenshots/sales.png"
                alt="SwiftBill POS billing screen with products"
              />
            </Reveal>

            <Reveal delay={0.15} className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-[12px] font-semibold tracking-wide uppercase mb-5">
                <Zap className="w-3.5 h-3.5" />
                Rush hour — Serve faster
              </span>
              <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-[800] leading-[1.12] tracking-tight text-foreground mb-4">
                The queue moves{' '}
                <span className="text-gradient-accent">fast.</span>
              </h3>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-5 max-w-lg">
                Customer walks in. Tap the item, scan the barcode, or just type
                the name. GST calculated. Bill printed. Payment done. Next
                customer, please.
              </p>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-6 max-w-lg">
                Cash, card, or UPI — whatever your customer wants to pay with.
                And if the internet goes down? SwiftBill keeps working. Every
                bill saves locally and syncs when you're back online.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Barcode scan', 'UPI & cards', 'Works offline', 'GST auto-calculated'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1.5 rounded-lg bg-muted text-[13px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ▸ Feature 3 — Products (hero showcase) ──────────────────── */}
      <div className="relative bg-[hsl(var(--muted)/0.4)] dark:bg-[hsl(var(--muted)/0.2)] py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-[12px] font-semibold tracking-wide uppercase mb-5">
                <Package className="w-3.5 h-3.5" />
                Your catalog — Always ready
              </span>
              <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-[800] leading-[1.12] tracking-tight text-foreground mb-4">
                Every product.{' '}
                <span className="text-gradient-accent">One place.</span>
              </h3>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-5 max-w-lg">
                Add a photo, set the price, choose the GST rate, give it a
                category — done. Whether you sell 10 items or 10,000, finding
                anything takes one search.
              </p>
              <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed max-w-lg">
                New stock arrived? Update the price in seconds. Running a
                Diwali sale? Change prices in bulk. Your catalog stays clean,
                organized, and always up to date.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <AppFrame
                src="/screenshots/products.png"
                alt="SwiftBill product catalog with categories"
              />
            </Reveal>
          </div>
        </div>
      </div>

      {/* ▸ Feature 4 — Inventory (full-width showcase) ───────────── */}
      <div className="relative py-16 sm:py-24 lg:py-28 overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] text-[12px] font-semibold tracking-wide uppercase mb-5">
              <TrendingDown className="w-3.5 h-3.5" />
              Stock running low? You'll know first.
            </span>
            <h3 className="font-display text-[28px] sm:text-[36px] lg:text-[40px] font-[800] leading-[1.12] tracking-tight text-foreground mb-4">
              Never tell a customer{' '}
              <span className="text-gradient-accent">"it's out of stock"</span>
            </h3>
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed">
              You know that sinking feeling when a customer asks for something
              and you realize you forgot to reorder? That stops today. SwiftBill
              tracks every single item — what came in, what went out, and
              what's about to run dry. You get alerts before it's too late.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="max-w-5xl mx-auto">
            <AppFrame
              src="/screenshots/inventory.png"
              alt="SwiftBill inventory tracking with stock levels"
            />
          </Reveal>
        </div>
      </div>

      {/* ▸ Feature grid — remaining features ─────────────────────── */}
      <div className="relative bg-[hsl(var(--muted)/0.4)] dark:bg-[hsl(var(--muted)/0.2)] py-16 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
            <h3 className="font-display text-[26px] sm:text-[32px] lg:text-[36px] font-[800] leading-[1.15] tracking-tight text-foreground mb-3">
              And there's{' '}
              <span className="text-gradient-accent">more.</span>
            </h3>
            <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed">
              Every feature is built around one idea — making your day easier.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14 sm:mb-16">
            <MiniCard
              icon={Monitor}
              title="Multiple counters"
              description="Busy store? Open separate billing counters for each cashier. Each one tracks its own cash and sales."
              delay={0}
            />
            <MiniCard
              icon={Lightbulb}
              title="Demand tracking"
              description="A customer asks for something you don't stock? Log it. After a few requests, you'll know exactly what to order."
              delay={0.08}
            />
            <MiniCard
              icon={CreditCard}
              title="All payment modes"
              description="Cash, card, UPI, wallets — toggle the ones your shop accepts. Set up refund rules in two taps."
              delay={0.16}
            />
            <MiniCard
              icon={Palette}
              title="Make it yours"
              description="Dark mode for late nights, light mode for the day. Pick your colors, adjust the layout — it's your app."
              delay={0.24}
            />
          </div>

          {/* Screenshots row for the grid features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                src: '/screenshots/terminals.png',
                alt: 'Multiple billing counters',
              },
              {
                src: '/screenshots/demand.png',
                alt: 'Customer demand tracking',
              },
              {
                src: '/screenshots/settings-payments.png',
                alt: 'Payment method settings',
              },
              {
                src: '/screenshots/settings-appearance.png',
                alt: 'Appearance customization',
              },
            ].map((item, i) => (
              <Reveal key={item.alt} delay={i * 0.08}>
                <div
                  className="rounded-xl overflow-hidden border border-border/60 bg-card transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    boxShadow: '0 2px 12px -4px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto block"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ▸ Closing line ───────────────────────────────────────────── */}
      <div className="relative py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-[26px] sm:text-[32px] lg:text-[40px] font-[800] leading-[1.15] tracking-tight text-foreground mb-4">
              Ready to make your shop{' '}
              <span className="text-gradient-accent">smarter?</span>
            </h3>
            <p className="text-[15px] sm:text-[17px] text-muted-foreground leading-relaxed mb-8">
              Join thousands of shopkeepers who stopped worrying about
              billing, stock, and GST — and started growing their business.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
              <a
                href="https://pos.103.145.37.138.sslip.io/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all duration-300 w-full sm:w-auto"
              >
                Start Free — No card needed
              </a>
              <a
                href="https://pos.103.145.37.138.sslip.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-[15px] font-semibold text-foreground border border-border hover:border-foreground/25 transition-all duration-300 w-full sm:w-auto"
              >
                Try the live demo
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
