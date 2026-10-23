// JSON-LD helpers for structured data (rich results in Google).
import { site } from './site';
import type { FaqItem } from '../components/FAQ.astro';

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a },
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: `${site.url}${path}`,
  provider: { '@id': `${site.url}/#business` },
  areaServed: ['Wellington', 'New Zealand', 'Online'],
});
