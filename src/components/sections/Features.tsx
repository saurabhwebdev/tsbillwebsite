import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'See how your business is doing — at a glance',
    description:
      "Open the app and instantly see today's sales, number of bills, top-selling items, and payment breakdowns. No spreadsheets, no guessing.",
    screenshot: '/screenshots/dashboard.png',
    label: 'Dashboard',
  },
  {
    title: 'Bill customers in seconds',
    description:
      'Tap products, scan barcodes, or search by name — the bill is ready before your customer finishes packing. Accepts cash, card, and UPI.',
    screenshot: '/screenshots/sales.png',
    label: 'Billing',
  },
  {
    title: 'Your entire catalog, organized',
    description:
      'Add products with photos, set prices, apply GST rates, and sort them into categories. Finding any item takes just one search.',
    screenshot: '/screenshots/products.png',
    label: 'Products',
  },
  {
    title: 'Never run out of stock again',
    description:
      'Track exactly how much stock you have, get alerts when items are running low, and record every stock-in and stock-out.',
    screenshot: '/screenshots/inventory.png',
    label: 'Inventory',
  },
  {
    title: 'Run multiple billing counters',
    description:
      'Got a busy store? Open separate billing counters for different cashiers — each with its own cash drawer and sales tracking.',
    screenshot: '/screenshots/terminals.png',
    label: 'Counters',
  },
  {
    title: 'Know what your customers want',
    description:
      "When customers ask for something you don't have, log it. See what's most requested so you know exactly what to stock next.",
    screenshot: '/screenshots/demand.png',
    label: 'Demand',
  },
  {
    title: 'Accept every payment method',
    description:
      'Cash, cards, UPI, mobile wallets — turn on the ones you accept with a single toggle. Refund policies, all in one place.',
    screenshot: '/screenshots/settings-payments.png',
    label: 'Payments',
  },
  {
    title: 'Make it yours',
    description:
      'Choose light or dark mode, pick your accent color, adjust the layout — make the app look and feel the way you like it.',
    screenshot: '/screenshots/settings-appearance.png',
    label: 'Customize',
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        !isEven ? 'lg:[direction:rtl]' : ''
      }`}
    >
      {/* Text */}
      <div className={`${!isEven ? 'lg:[direction:ltr]' : ''}`}>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] text-[12px] font-semibold tracking-wide uppercase mb-4">
          {feature.label}
        </span>
        <h3 className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-[800] leading-[1.15] tracking-tight text-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-[15px] sm:text-[16px] text-muted-foreground leading-relaxed max-w-md">
          {feature.description}
        </p>
      </div>

      {/* Screenshot in a browser-style frame */}
      <div className={`${!isEven ? 'lg:[direction:ltr]' : ''}`}>
        <div
          className="relative rounded-xl overflow-hidden"
          style={{
            boxShadow:
              '0 4px 6px -1px rgba(0,0,0,0.07), 0 12px 40px -4px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.06)',
          }}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#f5f5f5] dark:bg-[#2a2a2c] border-b border-black/[0.06] dark:border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
              <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 mx-8">
              <div className="h-5 rounded-md bg-black/[0.04] dark:bg-white/[0.06] max-w-[220px] mx-auto" />
            </div>
          </div>

          {/* Screenshot */}
          <img
            src={feature.screenshot}
            alt={feature.title}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function Features() {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="features" className="relative py-20 sm:py-28 lg:py-36">
      {/* Background */}
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
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
            Everything you need
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-[900] leading-[1.1] tracking-tight text-foreground mb-4">
            Built for shopkeepers,{' '}
            <span className="text-gradient-accent">not engineers.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed">
            Simple tools that make running your shop easier. No training needed
            — if you can use a phone, you can use SwiftBill.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-36">
          {features.map((feature, i) => (
            <FeatureCard key={feature.label} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
