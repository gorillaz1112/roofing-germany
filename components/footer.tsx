import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Siren, ArrowUpRight } from 'lucide-react';
import { SITE } from '@/lib/seo/site';

const services = [
  { name: 'Dachmontage', href: '/leistungen/dachmontage' },
  { name: 'Dachreparatur', href: '/leistungen/dachreparatur' },
  { name: 'Abdichtung', href: '/leistungen/abdichtung' },
  { name: 'Zimmerei', href: '/leistungen/zimmerei' },
  { name: 'Dachentwässerung', href: '/leistungen/dachentwaesserung' },
  { name: 'Dachausbau', href: '/leistungen/dachausbau' },
  { name: 'Dachisolierung', href: '/leistungen/dachisolierung' },
  { name: 'Dachfenster', href: '/leistungen/dachfenster' },
  { name: 'Schornstein', href: '/leistungen/schornstein' },
];

const quickLinks = [
  { name: 'Startseite', href: '/' },
  { name: 'Über uns', href: '/ueber-uns' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Notfall 24/7', href: '/notfall' },
  { name: 'Kontakt', href: '/kontakt' },
];

const legalLinks = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
      {/* Red radial glow at top to tie footer into brand */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-80 w-[80%] -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Dachbau Pro – Startseite"
              className="inline-flex items-center rounded-xl bg-white/95 px-4 py-3 shadow-lg ring-1 ring-black/5 transition-transform hover:scale-[1.02]"
            >
              <Image
                src="/full-logo-gherman.png"
                alt="Dachbau Pro"
                width={220}
                height={80}
                className="h-12 w-auto sm:h-14"
                sizes="(max-width: 640px) 160px, 220px"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/80">
              Dachbau Pro – Ihr Dachdecker-Meisterbetrieb in Wesseling, Köln,
              Bonn und Umgebung. Qualitativ hochwertiges Handwerk mit
              Premium-Materialien deutscher Hersteller.
            </p>
            <Link
              href="/notfall"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-brand-sm)] transition-transform hover:scale-[1.03]"
            >
              <Siren className="h-4 w-4 animate-pulse" aria-hidden="true" />
              24h Dach-Notdienst
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Schnellzugriff
            </h3>
            <nav aria-label="Schnellzugriff">
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.name}
                      <ArrowUpRight
                        className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Leistungen
            </h3>
            <nav aria-label="Leistungen">
              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Kontakt
            </h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      {SITE.address.street}
                      <br />
                      {SITE.address.postalCode} {SITE.address.city}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SITE.phoneHref}
                    className="flex items-center gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <Phone
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <Mail
                      className="h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/15 pt-8 md:flex-row">
          <p className="text-xs text-secondary-foreground/60">
            © {new Date().getFullYear()} {SITE.name}. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Links">
            <ul className="flex gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
