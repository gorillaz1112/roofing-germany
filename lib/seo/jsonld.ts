import { SITE } from './site';

// Root Organization / RoofingContractor node - referenced by @id from other schemas
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
    '@id': `${SITE.url}/#org`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    image: `${SITE.url}${SITE.logo}`,
    description:
      'Zuverlässige Dachlösungen mit qualitativ hochwertigem Handwerk und hervorragendem Kundenservice in Wesseling, Köln und Umgebung.',
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Bank Transfer, Invoice',
    availableLanguage: ['de'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.latitude,
        longitude: SITE.geo.longitude,
      },
      geoRadius: 50000,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...SITE.openingHours.days],
      opens: SITE.openingHours.opens,
      closes: SITE.openingHours.closes,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Dachdecker-Leistungen',
      itemListElement: [
        'Dachmontage',
        'Dachreparatur',
        'Abdichtung',
        'Zimmerei',
        'Dachentwässerung',
        'Dachausbau',
        'Dachisolierung',
        'Dachfenster',
        'Schornstein',
      ].map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  } as const;
}

// Search-enabled WebSite node for rich results
export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.locale,
    publisher: { '@id': `${SITE.url}/#org` },
  } as const;
}

type Crumb = { name: string; url: string };
// BreadcrumbList helper so every inner page can emit a breadcrumb JSON-LD
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : `${SITE.url}${c.url}`,
    })),
  } as const;
}

// Individual Service schema - linked to the org via provider @id
export function serviceJsonLd(params: {
  name: string;
  description: string;
  slug: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    serviceType: params.name,
    url: `${SITE.url}/leistungen/${params.slug}`,
    image: params.image ? `${SITE.url}${params.image}` : undefined,
    provider: { '@id': `${SITE.url}/#org` },
    areaServed: SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
  } as const;
}

// Emergency / 24-7 service schema for /notfall
export function emergencyServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    name: `${SITE.name} – 24/7 Dach-Notdienst`,
    url: `${SITE.url}/notfall`,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SITE.areaServed.map((city) => ({ '@type': 'City', name: city })),
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE.url}/notfall`,
      servicePhone: SITE.phone,
      availableLanguage: 'de',
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    provider: { '@id': `${SITE.url}/#org` },
  } as const;
}

// FAQPage schema - SEO gold on Home
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } as const;
}

// Utility to render a JSON-LD script tag with stable stringification
export function jsonLdScript(
  data: object | object[],
  id?: string,
): { __html: string; id?: string } {
  return {
    __html: JSON.stringify(data),
    id,
  };
}
