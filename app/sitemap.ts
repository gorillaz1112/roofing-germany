import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo/site';

const services = [
  'dachmontage',
  'dachreparatur',
  'abdichtung',
  'zimmerei',
  'dachentwaesserung',
  'dachausbau',
  'dachisolierung',
  'dachfenster',
  'schornstein',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE.url;
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
    {
      url: `${baseUrl}/leistungen`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/notfall`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...services.map((slug) => ({
      url: `${baseUrl}/leistungen/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  return entries;
}
