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
import { AnimatedNumber } from '@/components/motion/animated-number';
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
  Users,
  Hammer,
  Heart,
} from 'lucide-react';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'Lernen Sie Dachbau Pro kennen – Ihren zuverlässigen Dachdecker-Meisterbetrieb in Wesseling mit 15+ Jahren Erfahrung, 500+ Projekten und höchsten Qualitätsansprüchen.',
  alternates: { canonical: '/ueber-uns' },
};

const values = [
  {
    icon: Shield,
    title: 'Qualität',
    description:
      'Wir setzen auf hochwertige Materialien und sorgfältige Verarbeitung für langlebige Ergebnisse.',
  },
  {
    icon: Clock,
    title: 'Zuverlässigkeit',
    description:
      'Termine werden eingehalten, Absprachen sind verbindlich. Sie können sich auf uns verlassen.',
  },
  {
    icon: Heart,
    title: 'Kundenorientierung',
    description:
      'Ihre Zufriedenheit steht an erster Stelle. Wir hören zu und finden die beste Lösung für Sie.',
  },
  {
    icon: Users,
    title: 'Teamarbeit',
    description:
      'Unser eingespieltes Team arbeitet Hand in Hand für optimale Ergebnisse.',
  },
  {
    icon: Hammer,
    title: 'Handwerkskunst',
    description:
      'Traditionelles Handwerk kombiniert mit modernen Techniken für perfekte Ausführung.',
  },
  {
    icon: Award,
    title: 'Erfahrung',
    description:
      'Jahrelange Erfahrung in allen Bereichen des Dachdeckerhandwerks.',
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 100, suffix: '%', label: 'Qualitätsgarantie' },
  { value: 24, suffix: 'h', label: 'Notfall-Service' },
];

export default function UeberUnsPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Startseite', url: '/' },
    { name: 'Über uns', url: '/ueber-uns' },
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
                Ihr Meisterbetrieb
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-tight md:text-hero">
                Über <span className="text-gradient-brand">Dachbau Pro</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lead leading-relaxed text-secondary-foreground/85">
                Ihr zuverlässiger Partner für alle Dacharbeiten in Wesseling,
                Köln und der gesamten Region. Qualität, Zuverlässigkeit und
                Kundenzufriedenheit sind unsere höchsten Prioritäten.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/whatsapp-image-2025-07-29-at-19.jpg"
                    alt="Dachbau Pro bei der Arbeit auf einem Dach in Wesseling"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-primary/25 blur-2xl"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div>
                  <h2 className="text-h2 font-bold tracking-tight text-foreground">
                    Wer wir sind
                  </h2>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Dachbau Pro bietet zuverlässige Dachlösungen mit qualitativ
                    hochwertigem Handwerk und hervorragendem Kundenservice.
                    Von unserem Standort in Wesseling aus betreuen wir Kunden
                    in der gesamten Region Köln/Bonn.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Unser erfahrenes Team besteht aus qualifizierten
                    Dachdeckern und Zimmerleuten, die ihr Handwerk von Grund
                    auf gelernt haben. Wir verbinden traditionelle
                    Handwerkstechniken mit modernsten Materialien und Methoden.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Ob kleine Reparatur oder komplette Dachsanierung – wir
                    behandeln jedes Projekt mit der gleichen Sorgfalt und
                    Professionalität. Dabei legen wir großen Wert auf
                    transparente Kommunikation und faire Preise.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-muted/40 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/40">
                    <p className="font-display text-4xl font-bold text-primary">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-2 text-muted-foreground">{stat.label}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Was uns antreibt
                </p>
                <h2 className="text-h2 font-bold tracking-tight text-foreground">
                  Unsere Werte
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Diese Grundsätze leiten unser Handeln und garantieren Ihnen
                  erstklassige Arbeit.
                </p>
              </div>
            </Reveal>
            <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <HoverCard className="h-full">
                    <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:shadow-[var(--shadow-brand-sm)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <value.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Reasons */}
        <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-70"
          />
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <h2 className="text-h2 font-bold tracking-tight">
                    Warum Dachbau Pro?
                  </h2>
                  <ul className="mt-8 space-y-4">
                    {[
                      'Kostenlose Beratung und Angebotserstellung vor Ort',
                      'Qualifizierte und erfahrene Fachkräfte',
                      'Hochwertige Materialien führender deutscher Hersteller',
                      'Termingerechte und saubere Ausführung',
                      'Faire und transparente Preisgestaltung',
                      'Umfassende Garantie auf Arbeit und Material',
                      'Persönlicher Ansprechpartner während des gesamten Projekts',
                      '24/7 Notdienst bei akuten Dachschäden',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-secondary-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/img-20250729-wa0059-1.jpg"
                    alt="Qualitätsarbeit von Dachbau Pro – Detailaufnahme einer Premium-Dacheindeckung"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div className="mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight">
                Bereit für Ihr Dachprojekt?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                Kontaktieren Sie uns noch heute für eine kostenlose Beratung
                und ein unverbindliches Angebot.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontakt">
                    Jetzt Kontakt aufnehmen
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
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
