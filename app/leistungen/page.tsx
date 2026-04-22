import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { StaggerGrid, StaggerItem } from '@/components/motion/stagger-grid';
import { HoverCard } from '@/components/motion/hover-card';
import { ArrowRight, Phone } from 'lucide-react';
import { SITE } from '@/lib/seo/site';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
  title: 'Unsere Leistungen',
  description:
    'Alle Dachdeckerleistungen von Dachbau Pro: Dachmontage, Dachreparatur, Abdichtung, Zimmerei, Dachentwässerung, Dachausbau, Dachisolierung, Dachfenster und Schornsteinsanierung in Wesseling und Köln.',
  alternates: { canonical: '/leistungen' },
};

const services = [
  {
    title: 'Dachmontage',
    description:
      'Professionelle Neueindeckung und komplette Dachkonstruktion für Neubauten und Sanierungen.',
    href: '/leistungen/dachmontage',
    image: '/images/img-20250729-wa0055-1.jpg',
  },
  {
    title: 'Dachreparatur',
    description:
      'Schnelle und zuverlässige Reparaturen bei Sturmschäden, Undichtigkeiten und Verschleiß.',
    href: '/leistungen/dachreparatur',
    image: '/images/img-20250729-wa0054-1.jpg',
  },
  {
    title: 'Abdichtung',
    description:
      'Hochwertige Dachabdichtung und Hydroisolation für dauerhaften Schutz vor Feuchtigkeit.',
    href: '/leistungen/abdichtung',
    image: '/images/img-20250729-wa0057-1.jpg',
  },
  {
    title: 'Zimmerei',
    description:
      'Fachgerechte Holzkonstruktionen, Dachstühle und Sparrenwechsel vom Zimmermannsteam.',
    href: '/leistungen/zimmerei',
    image: '/images/img-20250729-wa0060-1.jpg',
  },
  {
    title: 'Dachentwässerung',
    description:
      'Installation und Wartung von Regenrinnen, Fallrohren und kompletten Entwässerungssystemen.',
    href: '/leistungen/dachentwaesserung',
    image: '/images/img-20250729-wa0066-1.jpg',
  },
  {
    title: 'Dachausbau',
    description:
      'Neuer Wohnraum durch professionelle Mansardenausbauten und Dachgeschossausbau.',
    href: '/leistungen/dachausbau',
    image: '/images/whatsapp-image-2025-07-29-at-19.jpg',
  },
  {
    title: 'Dachisolierung',
    description:
      'Energieeffiziente Wärmedämmung – sparen Sie Heizkosten mit moderner Isolierung.',
    href: '/leistungen/dachisolierung',
    image: '/images/img-20250729-wa0056-1.jpg',
  },
  {
    title: 'Dachfenster',
    description:
      'Einbau und Austausch von Dachfenstern für mehr Licht und bessere Belüftung.',
    href: '/leistungen/dachfenster',
    image: '/images/img-20250729-wa0053-1.jpg',
  },
  {
    title: 'Schornstein',
    description:
      'Schornsteinsanierung, Verkleidung und zuverlässige Abdichtung für sicheren Betrieb.',
    href: '/leistungen/schornstein',
    image: '/images/22.jpg',
  },
];

export default function LeistungenPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Startseite', url: '/' },
    { name: 'Leistungen', url: '/leistungen' },
  ]);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
        />

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(15_13_13/0.35)_0%,rgb(15_13_13/0.9)_100%)]"
          />

          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                Alles rund ums Dach
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-tight md:text-hero">
                Unsere <span className="text-gradient-brand">Leistungen</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lead leading-relaxed text-secondary-foreground/85">
                Von der kleinen Reparatur bis zur kompletten Dachsanierung –
                alle Dachdeckerleistungen aus einer Hand. Professionell,
                zuverlässig und zu fairen Preisen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <StaggerGrid className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <StaggerItem key={service.href}>
                  <HoverCard lift={4}>
                    <Link
                      href={service.href}
                      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary hover:shadow-[var(--shadow-brand)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={`${service.title} – Dachbau Pro Wesseling`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(15_13_13/0.7)_100%)]"
                        />
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
                          {service.title}
                        </span>
                      </div>
                      <div className="p-5">
                        <h2 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {service.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                        <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
                          Mehr erfahren
                          <ArrowRight
                            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div className="mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight">
                Kostenlose Beratung anfordern
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns
                für eine unverbindliche Beratung und ein kostenloses Angebot.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontakt">
                    Jetzt Anfrage senden
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href={SITE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    {SITE.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
