import { Zap } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Demo', href: 'https://pos.103.145.37.138.sslip.io' },
    { label: 'Changelog', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'GitHub', href: 'https://github.com/saurabhwebdev/swiftbill' },
    { label: 'Support', href: '#contact' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-[hsl(var(--border))/0.5]">
      {/* Subtle glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[hsl(var(--primary)/0.4)] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr,1fr,1fr,1fr] gap-12 lg:gap-8 py-16 lg:py-20">
          {/* Brand column */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary))] shadow-[0_0_15px_hsl(var(--primary)/0.2)]">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-[18px] font-bold tracking-tight text-foreground">
                SwiftBill
              </span>
            </a>
            <p className="text-[14px] text-[hsl(var(--muted-foreground))] leading-relaxed mb-6">
              Lightning-fast POS for modern retail. Built for Indian businesses with
              GST compliance, offline capability, and multi-terminal support.
            </p>
            {/* GitHub */}
            <a
              href="https://github.com/saurabhwebdev/swiftbill"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors duration-300"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[12px] font-semibold text-[hsl(var(--muted-foreground))] uppercase tracking-[0.15em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[14px] text-[hsl(var(--muted-foreground))] hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 border-t border-[hsl(var(--border))/0.4]">
          <p className="text-[12px] text-[hsl(var(--muted-foreground))/0.6]">
            &copy; {new Date().getFullYear()} Unison Apps. All rights reserved.
          </p>
          <p className="text-[12px] text-[hsl(var(--muted-foreground))/0.4]">
            Built with React + Django
          </p>
        </div>
      </div>
    </footer>
  )
}
