import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dachbau Pro – Dachdecker Wesseling & Köln',
    short_name: 'Dachbau Pro',
    description:
      'Ihr zuverlässiger Dachdecker-Meisterbetrieb in Wesseling und Köln. Dachmontage, Reparatur, Abdichtung und 24h Notdienst.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    lang: 'de-DE',
    dir: 'ltr',
    background_color: '#ffffff',
    theme_color: '#EF1C24',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
