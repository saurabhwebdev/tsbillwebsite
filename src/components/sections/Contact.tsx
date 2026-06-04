import { useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Send,
  Mail,
  MessageSquare,
  Github,
  CheckCircle2,
  AlertCircle,
  Loader2,
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

const contactMethods = [
  {
    icon: Mail,
    title: 'Email us',
    description: 'For general inquiries and support',
    value: 'saurabh.thakur@unisonmining.com',
    href: 'mailto:saurabh.thakur@unisonmining.com',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Quick questions? Message us directly',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/919876543210',
  },
  {
    icon: Github,
    title: 'GitHub Issues',
    description: 'Found a bug? Report it on GitHub',
    value: 'Open an issue',
    href: 'https://github.com/saurabhwebdev/swiftbill/issues',
  },
]

export function Contact() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong.',
      )
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
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
        <Reveal className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-4 py-1.5 text-[12px] font-medium text-muted-foreground mb-5">
            <MessageSquare className="w-3 h-3 text-[hsl(var(--primary))]" />
            Get in touch
          </span>
          <h2 className="font-display text-[32px] sm:text-[40px] lg:text-[48px] font-[900] leading-[1.1] tracking-tight text-foreground mb-4">
            We'd love to{' '}
            <span className="text-gradient-accent">hear from you.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-muted-foreground leading-relaxed">
            Whether you need help setting up, have a feature idea, or just want
            to say hi — we're here.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16">
          {/* Left — Contact methods */}
          <div>
            <Reveal>
              <h3 className="font-display text-[20px] sm:text-[22px] font-[700] text-foreground mb-6">
                Reach out directly
              </h3>
            </Reveal>

            <div className="space-y-4 mb-10">
              {contactMethods.map((m, i) => (
                <Reveal key={m.title} delay={i * 0.08}>
                  <a
                    href={m.href}
                    target={m.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      m.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="group flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-card hover:border-[hsl(var(--primary)/0.3)] hover:shadow-md transition-all duration-300"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] flex items-center justify-center group-hover:bg-[hsl(var(--primary)/0.12)] transition-colors">
                      <m.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-foreground mb-0.5">
                        {m.title}
                      </h4>
                      <p className="text-[13px] text-muted-foreground mb-1">
                        {m.description}
                      </p>
                      <span className="text-[13px] font-medium text-[hsl(var(--primary))]">
                        {m.value}
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="rounded-xl border border-border/60 bg-[hsl(var(--muted)/0.3)] p-5 sm:p-6">
                <h4 className="font-display text-[16px] font-[700] text-foreground mb-2">
                  Response time
                </h4>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  We typically reply within 24 hours on weekdays. For urgent
                  setup issues, Pro & Enterprise customers get priority
                  WhatsApp support.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right — Contact form */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
              <h3 className="font-display text-[20px] sm:text-[22px] font-[700] text-foreground mb-6">
                Send us a message
              </h3>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h4 className="font-display text-[20px] font-[700] text-foreground mb-2">
                    Message sent!
                  </h4>
                  <p className="text-[15px] text-muted-foreground mb-6">
                    We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[14px] font-medium text-[hsl(var(--primary))] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[13px] font-medium text-foreground mb-1.5"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[13px] font-medium text-foreground mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[13px] font-medium text-foreground mb-1.5"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full h-11 px-3.5 rounded-xl border border-border bg-background text-[14px] text-foreground focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        What's this about?
                      </option>
                      <option value="Pro Setup — I want help installing SwiftBill">
                        Pro Setup — I want help installing
                      </option>
                      <option value="Enterprise — Custom requirements">
                        Enterprise — Custom requirements
                      </option>
                      <option value="General question">
                        General question
                      </option>
                      <option value="Bug report">Bug report</option>
                      <option value="Feature request">Feature request</option>
                      <option value="Partnership / Collaboration">
                        Partnership / Collaboration
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[13px] font-medium text-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full px-3.5 py-3 rounded-xl border border-border bg-background text-[14px] text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-[hsl(var(--primary)/0.5)] focus:ring-2 focus:ring-[hsl(var(--primary)/0.08)] transition-all resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <p className="text-[13px] text-red-600 dark:text-red-400">
                        {errorMsg}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex items-center justify-center gap-2 h-12 w-full rounded-xl text-[15px] font-semibold text-white bg-[hsl(var(--primary))] hover:opacity-90 disabled:opacity-60 transition-all duration-300"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
