import { useSEO } from '@/hooks/useSEO'

export function NotFound() {
  useSEO({
    title: '404 — Page Not Found | SwiftBill',
    description: 'The page you are looking for does not exist. Return to SwiftBill homepage.',
    noindex: true,
  })

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 text-center">
      <div className="max-w-lg mx-auto">
        <div className="text-8xl font-black text-[hsl(var(--primary)/0.2)] mb-6">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/" className="px-6 py-3 rounded-lg bg-[hsl(var(--primary))] text-white font-semibold hover:opacity-90 transition-opacity">
            Go Home
          </a>
          <a href="/blog" className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-colors">
            Read Blog
          </a>
          <a href="/docs" className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-colors">
            Documentation
          </a>
        </div>
      </div>
    </section>
  )
}
