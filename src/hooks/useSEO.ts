import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical?: string
  type?: 'website' | 'article'
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    section?: string
    tags?: string[]
  }
  breadcrumbs?: { name: string; url: string }[]
  faq?: { question: string; answer: string }[]
  noindex?: boolean
}

function setMeta(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

function removeJsonLd(id: string) {
  const el = document.getElementById(id)
  if (el) el.remove()
}

function injectJsonLd(id: string, data: object) {
  removeJsonLd(id)
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

export function useSEO({ title, description, canonical, type = 'website', article, breadcrumbs, faq, noindex }: SEOProps) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:type"]', 'content', type)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)

    if (canonical) {
      setMeta('link[rel="canonical"]', 'href', canonical)
      setMeta('meta[property="og:url"]', 'content', canonical)
    }

    const robots = noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    setMeta('meta[name="robots"]', 'content', robots)

    if (article) {
      injectJsonLd('seo-article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: canonical,
        datePublished: article.publishedTime,
        dateModified: article.modifiedTime || article.publishedTime,
        author: {
          '@type': 'Organization',
          name: article.author || 'SwiftBill',
          url: 'https://tsbill.xyz',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SwiftBill',
          url: 'https://tsbill.xyz',
          logo: { '@type': 'ImageObject', url: 'https://tsbill.xyz/apple-touch-icon.png' },
        },
        articleSection: article.section,
        keywords: article.tags?.join(', '),
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        inLanguage: 'en-IN',
      })
    } else {
      removeJsonLd('seo-article')
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      injectJsonLd('seo-breadcrumb', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: b.url,
        })),
      })
    } else {
      removeJsonLd('seo-breadcrumb')
    }

    if (faq && faq.length > 0) {
      injectJsonLd('seo-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      })
    } else {
      removeJsonLd('seo-faq')
    }

    return () => {
      removeJsonLd('seo-article')
      removeJsonLd('seo-breadcrumb')
      removeJsonLd('seo-faq')
    }
  }, [title, description, canonical, type, article, breadcrumbs, faq, noindex])
}
