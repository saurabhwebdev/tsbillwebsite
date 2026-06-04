import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, ArrowRight } from 'lucide-react'

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
    title: 'The Software',
    content: `SwiftBill is open-source POS (Point of Sale) software released under the MIT License. You are free to:

• **Use** SwiftBill for any purpose — personal or commercial, no fees.
• **Modify** the source code to suit your needs.
• **Distribute** copies of SwiftBill, including modified versions.
• **Include** SwiftBill in your own commercial products or services.

The only requirement is that you include the original copyright notice and license text in any copy or substantial portion of the software.`,
  },
  {
    title: 'No warranty',
    content: `SwiftBill is provided "as is" without warranty of any kind, express or implied. This includes, but is not limited to:

• **No guarantee of accuracy** — while we strive for correct tax calculations and billing, you are responsible for verifying that invoices meet your local tax authority requirements.
• **No guarantee of availability** — since SwiftBill is self-hosted, uptime depends on your server and infrastructure.
• **No guarantee against data loss** — you are responsible for backing up your data. We provide documentation on setting up automated backups.

We are not liable for any damages arising from the use of SwiftBill, including but not limited to lost profits, lost data, or business interruption.`,
  },
  {
    title: 'Paid Services',
    content: `We offer optional paid services alongside the free software:

**Pro Setup (₹4,999 one-time)**
• Remote installation and configuration on your server
• Initial data migration assistance
• 30 days of priority support after setup
• Does not include ongoing hosting or server costs

**Enterprise (Custom pricing)**
• Dedicated support with SLA guarantees
• Custom feature development
• On-site or remote training for your staff
• Custom integrations with your existing tools

Paid services are non-refundable once work has commenced. If we are unable to complete the setup for technical reasons on our end, a full refund will be provided.`,
  },
  {
    title: 'Your responsibilities',
    content: `When using SwiftBill, you are responsible for:

• **Compliance** — ensuring your use of SwiftBill meets all local laws, tax regulations, and business licensing requirements in your jurisdiction.
• **Security** — keeping your server secure, changing default passwords, applying updates, and protecting customer data stored in the system.
• **Backups** — regularly backing up your database and ensuring you can recover from data loss.
• **Accuracy** — verifying that tax rates, prices, and invoice details are correctly configured for your business.
• **Data protection** — if you store customer personal data in SwiftBill, complying with applicable data protection laws (such as India's DPDP Act).`,
  },
  {
    title: 'Website usage',
    content: `This website (swiftbill.in) is provided for informational purposes. By using this website:

• You agree not to use the contact form for spam, harassment, or illegal purposes.
• You acknowledge that the demo environment is shared and resets periodically — do not enter real business data.
• You may not attempt to gain unauthorized access to our servers, the demo environment beyond provided credentials, or any connected systems.`,
  },
  {
    title: 'Intellectual property',
    content: `• The SwiftBill source code is open-source under the MIT License.
• The SwiftBill name, logo, and website design are the property of Unison Apps. You may not use these to represent your own product without written permission.
• Screenshots, documentation text, and marketing copy on this website are copyrighted by Unison Apps.
• Contributions to the SwiftBill repository on GitHub are subject to the repository's license terms.`,
  },
  {
    title: 'Third-party services',
    content: `SwiftBill may integrate with or depend on third-party services:

• **PostgreSQL** — database engine, subject to the PostgreSQL License.
• **Django** — web framework, subject to the BSD License.
• **React** — frontend library, subject to the MIT License.

We are not responsible for the availability, terms, or policies of third-party services. If a third-party dependency changes its license terms, we will update SwiftBill accordingly.`,
  },
  {
    title: 'Limitation of liability',
    content: `To the maximum extent permitted by law, Unison Apps and its contributors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:

• Loss of profits or revenue
• Loss of data or business information
• Business interruption
• Cost of substitute goods or services

This applies whether the claim is based on warranty, contract, tort, or any other legal theory, even if we have been advised of the possibility of such damages.`,
  },
  {
    title: 'Changes to these terms',
    content: `We may update these terms from time to time. Changes will be reflected by updating the "Last updated" date. Continued use of SwiftBill or this website after changes constitutes acceptance of the new terms.

For significant changes, we will post a notice on our GitHub repository.`,
  },
  {
    title: 'Governing law',
    content: `These terms are governed by the laws of India. Any disputes arising from these terms or your use of SwiftBill shall be subject to the exclusive jurisdiction of the courts in India.`,
  },
  {
    title: 'Contact',
    content: `For questions about these terms:

• **Email:** saurabh.thakur@unisonmining.com
• **GitHub:** https://github.com/saurabhwebdev/swiftbill
• **Entity:** Unison Apps, India`,
  },
]

export function Terms() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
              <FileText className="w-3 h-3 text-[hsl(var(--primary))]" />
              Legal
            </span>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-[900] leading-[1.08] tracking-tight text-foreground mb-5">
              Terms of Service
            </h1>
            <p className="text-[17px] sm:text-[19px] text-muted-foreground leading-relaxed">
              The rules for using SwiftBill software and this website. We've
              kept it straightforward.
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
                SwiftBill is free, open-source software under the MIT License.
                Use it however you want. We offer optional paid services for
                installation and support. The software comes without warranty — you're
                responsible for your own data, backups, and tax compliance.
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
                  <div className="text-[14px] sm:text-[15px] text-muted-foreground leading-relaxed space-y-3">
                    {section.content.split('\n\n').map((para, pi) => (
                      <p
                        key={pi}
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html: para.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-foreground font-semibold">$1</strong>',
                          ),
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Back */}
          <Reveal delay={0.1} className="mt-14 flex items-center justify-center gap-6">
            <a
              href="/privacy"
              className="text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
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
