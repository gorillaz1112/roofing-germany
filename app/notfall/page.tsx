import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { StaggerGrid, StaggerItem } from '@/components/motion/stagger-grid';
import {
  Phone,
  Siren,
  Cloud,
  Droplets,
  Flame,
  AlertTriangle,
  Wind,
  TreePine,
  ArrowRight,
  Clock,
  Shield,
  FileCheck,
} from 'lucide-react';
import { SITE } from '@/lib/seo/site';
import {
  breadcrumbJsonLd,
  emergencyServiceJsonLd,
  jsonLdScript,
} from '@/lib/seo/jsonld';

export const metadata: Metadata = {
  title: 'Dach-Notdienst 24/7 Wesseling & Köln – Sturmschaden Sofort-Hilfe',
  description:
    'Dach undicht? Sturmschaden? Unser 24/7 Dach-Notdienst ist in Wesseling, Köln, Bonn und Umgebung in 60–90 Min. vor Ort. Sofort anrufen: 0178 2482183.',
  alternates: { canonical: '/notfall' },
  openGraph: {
    title: 'Dach-Notdienst 24/7 Wesseling & Köln',
    description:
      'Dach undicht? Sturmschaden? Unser 24/7 Dach-Notdienst ist schnell vor Ort.',
    url: `${SITE.url}/notfall`,
    type: 'website',
  },
};

const reasons = [
  {
    icon: Wind,
    title: 'Sturmschaden',
    description:
      'Abgerissene Dachziegel, gelöste Dachpfannen oder verbogene Metallteile nach Orkan oder Gewitter.',
  },
  {
    icon: Droplets,
    title: 'Wasserschaden / Leckage',
    description:
      'Durchnässte Decken, tropfendes Wasser, Wasserflecken – Feuchtigkeitsschäden dürfen sich nicht ausbreiten.',
  },
  {
    icon: TreePine,
    title: 'Baumfall / Sturmwurf',
    description:
      'Ein Baum oder Ast ist auf Ihr Dach gestürzt und hat die Eindeckung durchschlagen.',
  },
  {
    icon: Cloud,
    title: 'Hagel- und Schneelast',
    description:
      'Nach schweren Hagel- oder Schneeereignissen: gerissene Ziegel, eingedrückte Dachentwässerung.',
  },
  {
    icon: Flame,
    title: 'Nach Brand / Blitzschlag',
    description:
      'Sichern und Abdichten des Daches nach einem Brand oder Blitzeinschlag – für Versicherungsfälle.',
  },
  {
    icon: AlertTriangle,
    title: 'Drohende Einsturzgefahr',
    description:
      'Durchgebogene Dachsparren, absacker oder sichtbare Risse – wir sichern die Konstruktion sofort.',
  },
];

const steps = [
  {
    icon: Phone,
    title: '1. Anrufen',
    description:
      'Rufen Sie unsere 24/7-Notfallnummer an. Wir erfassen Schadensart, Ort und Dringlichkeit in wenigen Minuten.',
  },
  {
    icon: Clock,
    title: '2. Anrücken',
    description:
      'Im Kerngebiet Wesseling/Köln/Bonn sind wir in der Regel innerhalb von 60–90 Minuten vor Ort.',
  },
  {
    icon: Shield,
    title: '3. Sichern',
    description:
      'Wir sichern die Schadstelle sofort provisorisch (Plane, Notabdichtung), damit kein Wasser mehr eindringt.',
  },
  {
    icon: FileCheck,
    title: '4. Sanieren',
    description:
      'Wir erstellen einen Sanierungsvorschlag inkl. Versicherungs-Dokumentation und setzen die Reparatur zeitnah um.',
  },
];

export default function NotfallPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Startseite', url: '/' },
    { name: 'Notfall', url: '/notfall' },
  ]);

  return (
    <>
      <Header />
      <main>
        {/* Emergency JSON-LD + Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(emergencyServiceJsonLd())}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
        />

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary py-20 text-secondary-foreground md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-90"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(15_13_13/0.55)_0%,rgb(15_13_13/0.85)_100%)]"
          />

          <div className="relative mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                <span
                  className="absolute inset-0 animate-[pulse-brand_2s_ease-in-out_infinite] rounded-full bg-primary/50"
                  aria-hidden="true"
                />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-brand)]">
                  <Siren className="h-10 w-10" aria-hidden="true" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
                24/7 · Rund um die Uhr
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-balance font-display text-hero font-bold leading-[1.05] tracking-tight">
                Dach-Notdienst <span className="text-gradient-brand">24/7</span>
                <br />
                Wesseling &amp; Köln
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-2xl text-lead text-secondary-foreground/85">
                Sturmschaden, Leckage oder eingestürzte Dachteile? Unser
                Notdienst ist rund um die Uhr erreichbar und im Kerngebiet in{' '}
                <strong className="text-primary-foreground">
                  60 bis 90 Minuten
                </strong>{' '}
                bei Ihnen.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 text-xl font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03] sm:w-auto"
                >
                  <Phone
                    className="h-6 w-6 transition-transform group-hover:rotate-12"
                    aria-hidden="true"
                  />
                  Jetzt anrufen: {SITE.phone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-secondary-foreground/70">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  Rund um die Uhr erreichbar
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" aria-hidden="true" />
                  Sofort-Sicherung der Schadstelle
                </span>
                <span className="flex items-center gap-2">
                  <FileCheck
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                  Versicherungs-Dokumentation
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* When to call us */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <div className="text-center">
                <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Wann Sie uns anrufen sollten
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                </p>
                <h2 className="text-h2 font-bold tracking-tight text-foreground">
                  Sofort handeln bei diesen Situationen
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                  Jede Minute zählt: Je schneller ein Dachschaden fachgerecht
                  gesichert wird, desto geringer sind die Folgeschäden an
                  Dämmung, Decken und Innenräumen.
                </p>
              </div>
            </Reveal>

            <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((reason) => (
                <StaggerItem key={reason.title}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-brand-sm)]">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/15"
                    />
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                      <reason.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Process steps */}
        <section className="border-y border-border bg-muted/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <div className="text-center">
                <h2 className="text-h2 font-bold tracking-tight text-foreground">
                  So reagieren wir auf Ihren Notruf
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Vier klare Schritte – vom Anruf bis zur fachgerechten
                  Sanierung.
                </p>
              </div>
            </Reveal>

            <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <StaggerItem key={step.title}>
                  <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-brand-sm)]">
                      <step.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Service area */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-8 md:p-12">
                <div className="grid items-center gap-10 md:grid-cols-2">
                  <div>
                    <h2 className="text-h2 font-bold tracking-tight text-foreground">
                      Einsatzgebiet rund um die Uhr
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      Von unserem Stützpunkt in Wesseling erreichen wir die
                      gesamte Region Köln/Bonn innerhalb kürzester Zeit. In
                      Randgebieten vereinbaren wir ein schnelles Anrücken
                      individuell.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      className="mt-6 shadow-[var(--shadow-brand)]"
                    >
                      <a href={SITE.phoneHref}>
                        <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                        Notfall melden
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SITE.areaServed.map((city) => (
                      <span
                        key={city}
                        className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Final CTA with sticky-feeling red band */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div className="mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight">
                Jede Minute zählt – wir sind für Sie da.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                Rufen Sie uns an – unabhängig von der Uhrzeit. Wir beraten Sie
                kurz am Telefon und sind schnellstmöglich vor Ort.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-lg transition-transform hover:scale-[1.03]"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {SITE.phone}
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link href="/kontakt">
                    Kontaktformular
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
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
