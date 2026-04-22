import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ScrollToTop } from "@/components/scroll-to-top";
import { UmamiAnalytics } from "@/components/analytics/umami";
import {
  organizationJsonLd,
  websiteJsonLd,
  jsonLdScript,
} from "@/lib/seo/jsonld";
import { SITE } from "@/lib/seo/site";
import "./globals.css";

/* Body font - Inter covers full Latin-ext (for umlauts) and is already widely cached */
const fontSans = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

/* Display font for headings - modern geometric look with great diacritic support */
const fontDisplay = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-display",
  preload: true,
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Dachbau Pro | Dachdecker in Wesseling & Köln",
    template: "%s | Dachbau Pro",
  },
  description:
    "Ihr zuverlässiger Dachdecker in Wesseling und Köln. Dachmontage, Dachreparatur, Abdichtung, Zimmerei, Dachausbau und 24h Notdienst. Premium-Materialien, faire Preise. Jetzt kostenlos anfragen!",
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "business",
  keywords: [
    "Dachdecker Wesseling",
    "Dachdecker Köln",
    "Dachdecker Bonn",
    "Dachreparatur",
    "Dachmontage",
    "Dachabdichtung",
    "Zimmerei",
    "Dachausbau",
    "Dachsanierung",
    "Dachfenster",
    "Dachentwässerung",
    "Schornsteinsanierung",
    "Dachisolierung",
    "Dach Notdienst",
    "Sturmschaden Dach",
    "Dachdeckermeister",
  ],
  formatDetection: { email: true, address: true, telephone: true },
  alternates: {
    canonical: "/",
    languages: { "de-DE": "/" },
  },
  openGraph: {
    type: "website",
    locale: SITE.ogLocale,
    url: SITE.url,
    siteName: SITE.name,
    title: "Dachbau Pro | Dachdecker in Wesseling & Köln",
    description:
      "Ihr zuverlässiger Dachdecker in Wesseling und Köln. Dachmontage, Dachreparatur, Abdichtung, Zimmerei und 24h Notdienst.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dachbau Pro – Dachdecker-Meisterbetrieb in Wesseling & Köln",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dachbau Pro | Dachdecker in Wesseling & Köln",
    description:
      "Ihr zuverlässiger Dachdecker-Meisterbetrieb mit 24h Notdienst in Wesseling, Köln, Bonn und Umgebung.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EF1C24" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0d0d" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-DE"
      className={`${fontSans.variable} ${fontDisplay.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Preload brand logo for LCP on every page */}
        <link
          rel="preload"
          as="image"
          href="/full-logo-gherman.png"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(organizationJsonLd(), "ld-org")}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(websiteJsonLd(), "ld-website")}
        />
      </head>
      <body className="font-sans">
        <ScrollToTop />
        {children}
        <Analytics />
        <UmamiAnalytics />
      </body>
    </html>
  );
}
