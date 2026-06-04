import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, ArrowRight } from 'lucide-react'

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

const sections = [
  {
    title: 'What information we collect',
    content: `When you use our website (swiftbill.in), we may collect:

• **Contact form data** — your name, email address, and message when you reach out to us through the contact form.
• **Basic analytics** — anonymous page views and visit counts to understand how people use our website. We do not track individual users.

When you use the SwiftBill POS application (self-hosted):

• **No data is collected by us.** SwiftBill is self-hosted software. All your shop data — products, sales, customers, invoices — stays on your own server. We have zero access to it.
• If you use our Pro Setup or Enterprise services, we may temporarily access your server during installation with your explicit permission.`,
  },
  {
    title: 'How we use your information',
    content: `• **Contact form submissions** are used only to respond to your inquiry. We do not add you to any marketing list unless you explicitly ask for updates.
• **Analytics data** helps us understand which pages are useful and where to improve. This data is aggregated and anonymous.
• We never sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: 'Your data, your server',
    content: `SwiftBill is open-source, self-hosted software. This means:

• **You own your data.** All shop data (products, sales, customer info, invoices) is stored on your server, under your control.
• **We cannot access your data** unless you explicitly grant us access for support purposes.
• **You can export or delete your data** at any time through the application or by directly accessing your database.
• **No vendor lock-in.** If you stop using SwiftBill, your data remains on your server in standard database formats.`,
  },
  {
    title: 'Cookies',
    content: `Our website uses minimal cookies:

• **Essential cookies** for basic website functionality (theme preference, session management).
• **No advertising cookies.** We do not serve ads or use tracking cookies.
• **No third-party cookies.** We don't embed social media trackers or advertising networks.

The SwiftBill POS application uses session cookies for authentication — these are necessary for the app to work and contain no personal information.`,
  },
  {
    title: 'Third-party services',
    content: `• **GitHub** — our source code is hosted on GitHub. If you contribute to SwiftBill or open issues, GitHub's privacy policy applies to those interactions.
• **Vercel** — this website is hosted on Vercel. Vercel may collect anonymous performance metrics.
• **Google Fonts** — we load fonts from Google's CDN, which may log basic access information.

We do not use any analytics platforms, advertising networks, or customer tracking tools on this website.`,
  },
  {
    title: 'Data security',
    content: `• All website traffic is encrypted via HTTPS.
• Contact form submissions are transmitted securely and stored only in our email inbox.
• For self-hosted SwiftBill: security depends on your server configuration. We provide security best practices in our documentation and our Pro/Enterprise services include security hardening.
• We recommend all SwiftBill users change the default admin password immediately after installation.`,
  },
  {
    title: 'Children\'s privacy',
    content: `SwiftBill is business software designed for shop owners and their staff. We do not knowingly collect information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will delete it promptly.`,
  },
  {
    title: 'Changes to this policy',
    content: `We may update this privacy policy from time to time. When we do, we'll update the "Last updated" date at the top of this page. For significant changes, we'll post a notice on our GitHub repository.`,
  },
  {
    title: 'Contact us',
    content: `If you have questions about this privacy policy or how we handle your data:

• **Email:** tsbill@gmail.com
• **GitHub:** https://github.com/saurabhwebdev/swiftbill/issues
• **Address:** Happy Apps, India`,
  },
]

export function Privacy() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <Shield className="w-3 h-3 text-[hsl(var(--primary))]" />
              Legal
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              Privacy Policy
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed">
              Your privacy matters. Here's exactly what data we collect, why,
              and how we use it — in plain language.
            </p>
            <p className="text-[13px] text-muted-foreground/60 mt-4">
              Last updated: June 1, 2026
            </p>
          </Reveal>

          {/* TL;DR */}
          <Reveal delay={0.05} className="mb-14">
            <div className="rounded-2xl border border-[hsl(var(--primary)/0.2)] bg-[hsl(var(--primary)/0.03)] p-5 sm:p-6">
              <h3 className="font-display text-[16px] font-[700] text-foreground mb-2">
                The short version
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                SwiftBill is self-hosted — your shop data stays on your server and
                we never see it. This website only collects what you voluntarily
                submit via the contact form. We don't use tracking cookies,
                advertising networks, or sell any data. That's it.
              </p>
            </div>
          </Reveal>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.03}>
                <div>
                  <h2 className="font-display text-[18px] sm:text-[20px] font-[700] text-foreground mb-3">
                    {i + 1}. {section.title}
                  </h2>
                  <div className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed space-y-3 prose-strong:text-foreground prose-strong:font-semibold">
                    {section.content.split('\n\n').map((para, pi) => (
                      <p
                        key={pi}
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html: para.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong>$1</strong>',
                          ),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Back to home */}
          <Reveal delay={0.1} className="mt-14 text-center">
            <a
              href="/"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-[hsl(var(--primary))] hover:underline"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
              Back to home
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
