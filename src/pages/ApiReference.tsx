import { useState } from 'react'
import { useSEO } from '@/hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  ChevronRight,
  Copy,
  Check,
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  Settings,
  Layers,
  ArrowRight,
  Terminal,
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

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
      className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
    >
      {copied ? (
        <>
          <Check className="w-3 h-3 text-emerald-500" /> Copied
        </>
      ) : (
        <>
          <Copy className="w-3 h-3" /> Copy
        </>
      )}
    </button>
  )
}

const methodColors: Record<string, { text: string; bg: string }> = {
  GET: {
    text: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
  },
  POST: { text: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10' },
  PUT: {
    text: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-500/10',
  },
  PATCH: {
    text: 'text-yellow-600 dark:text-yellow-400',
    bg: 'bg-yellow-500/10',
  },
  DELETE: { text: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10' },
}

const apiGroups = [
  {
    name: 'Authentication',
    icon: Users,
    description: 'User login, registration, and token management',
    endpoints: [
      {
        method: 'POST',
        path: '/api/auth/login/',
        description: 'Login with username and password',
        example: `{
  "username": "admin",
  "password": "admin123"
}`,
        response: `{
  "token": "eyJ0eXAiOiJKV1Q...",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}`,
      },
      {
        method: 'POST',
        path: '/api/auth/register/',
        description: 'Register a new user account',
      },
      {
        method: 'POST',
        path: '/api/auth/refresh/',
        description: 'Refresh an expired access token',
      },
    ],
  },
  {
    name: 'Products',
    icon: Package,
    description: 'CRUD operations for product catalog',
    endpoints: [
      {
        method: 'GET',
        path: '/api/products/',
        description: 'List all products with pagination and search',
        response: `{
  "count": 150,
  "next": "/api/products/?page=2",
  "results": [
    {
      "id": 1,
      "name": "Tata Salt",
      "price": "25.00",
      "stock": 48,
      "category": "Grocery",
      "gst_rate": "5.00"
    }
  ]
}`,
      },
      {
        method: 'POST',
        path: '/api/products/',
        description: 'Create a new product',
        example: `{
  "name": "Tata Salt",
  "price": "25.00",
  "stock": 100,
  "category": "Grocery",
  "gst_rate": "5.00",
  "barcode": "8901234567890"
}`,
      },
      {
        method: 'PUT',
        path: '/api/products/{id}/',
        description: 'Update a product',
      },
      {
        method: 'DELETE',
        path: '/api/products/{id}/',
        description: 'Delete a product',
      },
    ],
  },
  {
    name: 'Sales & Billing',
    icon: ShoppingCart,
    description: 'Create and manage sales transactions',
    endpoints: [
      {
        method: 'GET',
        path: '/api/sales/',
        description: 'List all sales with date filters',
      },
      {
        method: 'POST',
        path: '/api/sales/',
        description: 'Create a new sale / bill',
        example: `{
  "items": [
    { "product_id": 1, "quantity": 2, "price": "25.00" },
    { "product_id": 5, "quantity": 1, "price": "120.00" }
  ],
  "payment_method": "upi",
  "discount": "10.00",
  "customer_phone": "9876543210"
}`,
        response: `{
  "id": 1042,
  "invoice_number": "INV-2026-1042",
  "total": "160.00",
  "gst_amount": "8.00",
  "grand_total": "168.00",
  "created_at": "2026-05-15T14:30:00Z"
}`,
      },
      {
        method: 'GET',
        path: '/api/sales/{id}/',
        description: 'Get sale details with items',
      },
    ],
  },
  {
    name: 'Inventory',
    icon: Layers,
    description: 'Stock management and alerts',
    endpoints: [
      {
        method: 'GET',
        path: '/api/inventory/',
        description: 'Get current stock levels for all products',
      },
      {
        method: 'POST',
        path: '/api/inventory/adjust/',
        description: 'Manually adjust stock (add/remove)',
      },
      {
        method: 'GET',
        path: '/api/inventory/low-stock/',
        description: 'Get products below reorder level',
      },
    ],
  },
  {
    name: 'Reports',
    icon: BarChart3,
    description: 'Sales reports and analytics data',
    endpoints: [
      {
        method: 'GET',
        path: '/api/reports/daily/',
        description: 'Daily sales summary',
      },
      {
        method: 'GET',
        path: '/api/reports/products/',
        description: 'Top selling products for a date range',
      },
      {
        method: 'GET',
        path: '/api/reports/revenue/',
        description: 'Revenue breakdown with GST details',
      },
    ],
  },
  {
    name: 'Settings',
    icon: Settings,
    description: 'Shop configuration and preferences',
    endpoints: [
      {
        method: 'GET',
        path: '/api/settings/',
        description: 'Get current shop settings',
      },
      {
        method: 'PATCH',
        path: '/api/settings/',
        description: 'Update shop settings',
      },
      {
        method: 'GET',
        path: '/api/settings/payment-methods/',
        description: 'List configured payment methods',
      },
    ],
  },
]

export function ApiReference() {
  useSEO({
    title: 'API Reference — SwiftBill REST API Documentation',
    description: 'Full REST API documentation for SwiftBill POS. Endpoints for products, sales, inventory, reports, authentication, and settings with request/response examples.',
    canonical: 'https://tsbill.xyz/api-reference',
    breadcrumbs: [
      { name: 'Home', url: 'https://tsbill.xyz/' },
      { name: 'Documentation', url: 'https://tsbill.xyz/docs' },
      { name: 'API Reference', url: 'https://tsbill.xyz/api-reference' },
    ],
  })
  const [openGroup, setOpenGroup] = useState<string | null>(
    'Authentication',
  )
  const [openEndpoint, setOpenEndpoint] = useState<string | null>(null)

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <Code2 className="w-3 h-3 text-[hsl(var(--primary))]" />
              API Reference
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              REST{' '}
              <span className="text-gradient-accent">API Docs.</span>
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed">
              SwiftBill exposes a full REST API built with Django REST Framework.
              Use it to build custom integrations, mobile apps, or automate your
              workflow.
            </p>
          </Reveal>

          {/* Base URL */}
          <Reveal delay={0.1} className="max-w-2xl mx-auto mb-12">
            <div className="rounded-xl border border-border/60 bg-card p-4 sm:p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-semibold text-muted-foreground uppercase tracking-wider">
                  Base URL
                </span>
                <CopyButton text="https://your-domain.com/api/" />
              </div>
              <code className="block px-3 py-2 rounded-lg bg-[hsl(var(--foreground)/0.04)] text-[14px] font-mono text-foreground/80">
                https://your-domain.com/api/
              </code>
              <p className="text-[12px] text-muted-foreground mt-2">
                All endpoints require authentication via Bearer token unless noted otherwise.
              </p>
            </div>
          </Reveal>

          {/* Auth example */}
          <Reveal delay={0.15} className="max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-[hsl(var(--primary))]" />
              <h3 className="text-[15px] font-semibold text-foreground">
                Authentication
              </h3>
            </div>
            <div className="rounded-xl border border-border/40 bg-[hsl(var(--foreground)/0.02)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border/30">
                <span className="text-[11px] text-muted-foreground font-mono">
                  curl
                </span>
                <CopyButton text='curl -H "Authorization: Bearer YOUR_TOKEN" https://your-domain.com/api/products/' />
              </div>
              <pre className="px-4 py-3 text-[13px] font-mono text-foreground/80 overflow-x-auto">
                {`curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://your-domain.com/api/products/`}
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-16 sm:py-24 bg-muted/20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="mb-10">
            <h2 className="font-display text-[24px] sm:text-[30px] font-[800] text-foreground mb-2">
              Endpoints
            </h2>
            <p className="text-[15px] text-muted-foreground">
              Click on any group to expand and see available endpoints.
            </p>
          </Reveal>

          <div className="space-y-3">
            {apiGroups.map((group, gi) => (
              <Reveal key={group.name} delay={gi * 0.04}>
                <div className="rounded-xl border border-border/60 bg-card overflow-hidden">
                  {/* Group header */}
                  <button
                    onClick={() =>
                      setOpenGroup(
                        openGroup === group.name ? null : group.name,
                      )
                    }
                    className="w-full flex items-center gap-3 p-4 sm:p-5 text-left hover:bg-muted/20 transition-colors"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] flex items-center justify-center">
                      <group.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[15px] font-semibold text-foreground">
                        {group.name}
                      </h3>
                      <p className="text-[12px] text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <span className="shrink-0 text-[12px] text-muted-foreground/50 mr-1">
                      {group.endpoints.length} endpoints
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300 ${openGroup === group.name ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {/* Endpoints */}
                  <AnimatePresence>
                    {openGroup === group.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/30">
                          {group.endpoints.map((ep, ei) => {
                            const mc = methodColors[ep.method]
                            const epKey = `${group.name}-${ei}`
                            return (
                              <div
                                key={ei}
                                className={`${ei > 0 ? 'border-t border-border/20' : ''}`}
                              >
                                <button
                                  onClick={() =>
                                    setOpenEndpoint(
                                      openEndpoint === epKey ? null : epKey,
                                    )
                                  }
                                  className="w-full flex items-center gap-3 px-5 py-3 text-left hover:bg-muted/10 transition-colors"
                                >
                                  <span
                                    className={`shrink-0 px-2 py-0.5 rounded text-[11px] font-bold ${mc.text} ${mc.bg}`}
                                  >
                                    {ep.method}
                                  </span>
                                  <code className="text-[13px] font-mono text-foreground/80 flex-1 min-w-0 truncate">
                                    {ep.path}
                                  </code>
                                  <span className="text-[12px] text-muted-foreground hidden sm:block max-w-[200px] truncate">
                                    {ep.description}
                                  </span>
                                  {(ep.example || ep.response) && (
                                    <ChevronRight
                                      className={`w-3.5 h-3.5 text-muted-foreground/40 shrink-0 transition-transform duration-200 ${openEndpoint === epKey ? 'rotate-90' : ''}`}
                                    />
                                  )}
                                </button>

                                <AnimatePresence>
                                  {openEndpoint === epKey &&
                                    (ep.example || ep.response) && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                          height: 'auto',
                                          opacity: 1,
                                        }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                      >
                                        <div className="px-5 pb-4 space-y-3">
                                          <p className="text-[13px] text-muted-foreground sm:hidden">
                                            {ep.description}
                                          </p>
                                          {ep.example && (
                                            <div>
                                              <div className="flex items-center justify-between mb-1">
                                                <span className="text-[11px] font-semibold text-muted-foreground">
                                                  Request Body
                                                </span>
                                                <CopyButton
                                                  text={ep.example}
                                                />
                                              </div>
                                              <pre className="px-3 py-2 rounded-lg bg-[hsl(var(--foreground)/0.03)] text-[12px] font-mono text-foreground/70 overflow-x-auto">
                                                {ep.example}
                                              </pre>
                                            </div>
                                          )}
                                          {ep.response && (
                                            <div>
                                              <div className="flex items-center justify-between mb-1">
                                                <span className="text-[11px] font-semibold text-muted-foreground">
                                                  Response
                                                </span>
                                                <CopyButton
                                                  text={ep.response}
                                                />
                                              </div>
                                              <pre className="px-3 py-2 rounded-lg bg-[hsl(var(--foreground)/0.03)] text-[12px] font-mono text-foreground/70 overflow-x-auto">
                                                {ep.response}
                                              </pre>
                                            </div>
                                          )}
                                        </div>
                                      </motion.div>
                                    )}
                                </AnimatePresence>
                              </div>
                            )
                          })}
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
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="rounded-2xl border border-border/60 bg-card p-8 sm:p-12 text-center">
              <h2 className="font-display text-[24px] sm:text-[32px] font-[800] text-foreground mb-3">
                Build something great
              </h2>
              <p className="text-[16px] text-muted-foreground mb-8 max-w-lg mx-auto">
                SwiftBill is open source. Fork it, extend it, build custom
                integrations — the API is yours to use.
              </p>
              <a
                href="https://github.com/saurabhwebdev/swiftbill"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 transition-all"
              >
                View on GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
