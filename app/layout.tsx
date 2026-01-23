import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Dach Service 24 Plus | Dachdecker in Wesseling & Köln',
    template: '%s | Dach Service 24 Plus'
  },
  description: 'Ihr zuverlässiger Dachdecker in Wesseling und Umgebung. Dachmontage, Dachreparatur, Abdichtung, Zimmerei und mehr. Qualitätsarbeit zu fairen Preisen. Jetzt kostenlos anfragen!',
  keywords: ['Dachdecker', 'Wesseling', 'Köln', 'Dachreparatur', 'Dachmontage', 'Abdichtung', 'Zimmerei', 'Dachausbau', 'Dachsanierung', 'Regenrinne', 'Dachfenster'],
  authors: [{ name: 'Dach Service 24 Plus' }],
  creator: 'Dach Service 24 Plus',
  publisher: 'Dach Service 24 Plus',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://dachservice24plus.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dach Service 24 Plus | Dachdecker in Wesseling & Köln',
    description: 'Ihr zuverlässiger Dachdecker in Wesseling und Umgebung. Dachmontage, Dachreparatur, Abdichtung, Zimmerei und mehr.',
    url: 'https://dachservice24plus.de',
    siteName: 'Dach Service 24 Plus',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#b45309',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RoofingContractor",
              "name": "Dach Service 24 Plus",
              "image": "https://dachservice24plus.de/og-image.jpg",
              "description": "Zuverlässige Dachlösungen mit qualitativ hochwertigem Handwerk und hervorragendem Kundenservice.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Industriestraße 68",
                "addressLocality": "Wesseling",
                "postalCode": "50389",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 50.8269,
                "longitude": 6.9744
              },
              "url": "https://dachservice24plus.de",
              "telephone": "+49 163 4679816",
              "email": "dachservice24plus@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "07:00",
                "closes": "18:00"
              },
              "areaServed": ["Wesseling", "Köln", "Bonn", "Brühl", "Hürth", "Frechen"]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
