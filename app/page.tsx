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
import { Faq } from '@/components/sections/faq';
import { NotfallStrip } from '@/components/sections/notfall-strip';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Wrench,
  BadgeCheck,
  Sparkles,
  Users,
  Home as HomeIcon,
} from 'lucide-react';
import { SITE } from '@/lib/seo/site';

const services = [
  {
    title: 'Dachmontage',
    description:
      'Professionelle Neueindeckung und komplette Dachkonstruktion für Neubauten und Sanierungen – mit Premium-Dachziegeln von Braas, Creaton und Nelskamp.',
    href: '/leistungen/dachmontage',
    image: '/images/img-20250729-wa0055-1.jpg',
  },
  {
    title: 'Dachreparatur',
    description:
      'Schnelle und zuverlässige Reparaturen bei Sturmschäden, Undichtigkeiten und Verschleiß. Wir identifizieren die Ursache präzise und reparieren langfristig.',
    href: '/leistungen/dachreparatur',
    image: '/images/img-20250729-wa0054-1.jpg',
  },
  {
    title: 'Abdichtung',
    description:
      'Hochwertige Dachabdichtung und Hydroisolation für dauerhaften Schutz vor Feuchtigkeit – mit bewährten Systemen von SOPREMA und Bauder.',
    href: '/leistungen/abdichtung',
    image: '/images/img-20250729-wa0057-1.jpg',
  },
  {
    title: 'Zimmerei',
    description:
      'Fachgerechte Holzkonstruktionen, Dachstühle und Sparrenwechsel vom erfahrenen Zimmermann – mit Konstruktionsholz nach deutschen Qualitätsstandards.',
    href: '/leistungen/zimmerei',
    image: '/images/img-20250729-wa0060-1.jpg',
  },
  {
    title: 'Dachentwässerung',
    description:
      'Installation und Wartung von Regenrinnen, Fallrohren und Entwässerungssystemen – von Lindab, Zambelli und Rheinzink für langlebige Funktion.',
    href: '/leistungen/dachentwaesserung',
    image: '/images/img-20250729-wa0066-1.jpg',
  },
  {
    title: 'Dachausbau',
    description:
      'Neuer Wohnraum durch professionelle Mansardenausbauten und Dachgeschoss­ausbau – von der Planung bis zur Fertigstellung.',
    href: '/leistungen/dachausbau',
    image: '/images/whatsapp-image-2025-07-29-at-19.jpg',
  },
  {
    title: 'Dachisolierung',
    description:
      'Energieeffiziente Wärmedämmung mit ISOVER, Rockwool und pro clima. Sparen Sie bis zu 30 % Heizkosten und verbessern Sie Ihr Wohnklima.',
    href: '/leistungen/dachisolierung',
    image: '/images/img-20250729-wa0056-1.jpg',
  },
  {
    title: 'Dachfenster',
    description:
      'Einbau und Austausch von Dachfenstern für mehr Licht und bessere Belüftung. Zertifizierter Partner für VELUX, Roto und Fakro.',
    href: '/leistungen/dachfenster',
    image: '/images/img-20250729-wa0053-1.jpg',
  },
  {
    title: 'Schornstein',
    description:
      'Schornsteinsanierung, Verkleidung und Abdichtung für sicheren Betrieb – mit hochwertigen Materialien für jahrzehntelange Haltbarkeit.',
    href: '/leistungen/schornstein',
    image: '/images/22.jpg',
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Qualitätsgarantie',
    description:
      'Erstklassige Arbeit mit langfristiger Garantie auf alle Leistungen. Ihre Zufriedenheit ist unser Maßstab.',
  },
  {
    icon: Clock,
    title: 'Schneller Service',
    description:
      'Flexible Terminplanung und zügige Ausführung. Bei Notfällen sind wir 24/7 für Sie da.',
  },
  {
    icon: Award,
    title: 'Meisterbetrieb',
    description:
      'Qualifizierte Fachkräfte mit jahrelanger Erfahrung und regelmäßigen Fortbildungen für beste Ergebnisse.',
  },
];

const partners = [
  { name: 'Braas', description: 'Premium Dachziegel' },
  { name: 'Creaton', description: 'Hochwertige Dachsteine' },
  { name: 'VELUX', description: 'Dachfenster-Spezialist' },
  { name: 'ISOVER', description: 'Dämmstoffe' },
  { name: 'Rheinzink', description: 'Dachentwässerung' },
  { name: 'pro clima', description: 'Luftdichtung' },
];

const trustStats = [
  { value: 500, suffix: '+', label: 'Projekte umgesetzt' },
  { value: 15, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 100, suffix: '%', label: 'Qualitätsgarantie' },
  { value: 24, suffix: 'h', label: 'Notdienst' },
];

const faqItems = [
  {
    question: 'In welchem Umkreis arbeitet Dachbau Pro?',
    answer:
      'Wir sind vor allem in Wesseling, Köln, Bonn, Brühl, Hürth, Frechen, Pulheim, Bergheim, Erftstadt, Troisdorf, Siegburg und Bornheim im Einsatz. Im Umkreis von Wesseling ist die Anfahrt für Sie kostenlos. Ihren Ort nicht gefunden? Rufen Sie uns gerne an – wir sind flexibel.',
  },
  {
    question: 'Wie schnell sind Sie bei einem Sturmschaden vor Ort?',
    answer:
      'Bei akuten Sturmschäden oder undichten Dächern rücken wir in unserem Kerngebiet meist innerhalb von 60 bis 90 Minuten aus. Rufen Sie unseren 24/7-Notdienst an – wir sichern die Schadstelle provisorisch und erstellen direkt vor Ort einen Sanierungsvorschlag.',
  },
  {
    question: 'Wie viel kostet eine neue Dacheindeckung?',
    answer:
      'Die Kosten hängen von Dachfläche, Neigung, gewähltem Material (z. B. Ton- oder Betondachstein), Dämmung und Zustand des Dachstuhls ab. Als grobe Orientierung: 80–180 €/m² für die komplette Neueindeckung inklusive Material und Arbeit. Wir erstellen Ihnen nach einer kostenlosen Vor-Ort-Besichtigung ein transparentes Festpreisangebot.',
  },
  {
    question: 'Welche Materialien verwenden Sie?',
    answer:
      'Ausschließlich Premium-Produkte deutscher Hersteller: Dachziegel von Braas, Creaton und Nelskamp, Dachfenster von VELUX, Roto und Fakro, Dämmstoffe von ISOVER, Rockwool und pro clima sowie Entwässerungssysteme von Rheinzink, Lindab und Zambelli. So garantieren wir Langlebigkeit und Herstellergarantie.',
  },
  {
    question: 'Ist die Beratung und das Angebot wirklich kostenlos?',
    answer:
      'Ja. Erstberatung, Besichtigung und Angebotserstellung sind 100 % unverbindlich und kostenlos – ohne versteckte Kosten. Sie entscheiden erst nach Prüfung des detaillierten Angebots, ob Sie uns beauftragen möchten.',
  },
  {
    question: 'Übernehmen Sie auch die Kommunikation mit der Versicherung?',
    answer:
      'Bei Sturm-, Hagel- oder Schneelastschäden dokumentieren wir den Schaden fotografisch, erstellen einen fachlich fundierten Kostenvoranschlag und unterstützen Sie bei der Kommunikation mit Ihrer Gebäudeversicherung.',
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-80"
          />
          <div className="absolute inset-0 -z-20 opacity-[0.14]">
            <Image
              src="/images/whatsapp-image-2025-07-29-at-19.jpg"
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(15_13_13/0.4)_0%,rgb(15_13_13/0.92)_100%)]"
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 md:py-28 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                  Dachdecker-Meisterbetrieb · Wesseling
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-6 text-balance font-display text-hero font-bold leading-[1.02] tracking-tight">
                  Ihr Dach.{' '}
                  <span className="text-gradient-brand">In Meisterhand.</span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-6 max-w-2xl text-lead text-pretty text-secondary-foreground/80">
                  Dachmontage, Reparatur, Abdichtung und 24 h Notdienst in
                  Wesseling, Köln, Bonn und Umgebung. Wir arbeiten ausschließlich
                  mit Premium-Materialien deutscher Hersteller – für Dächer, die
                  Generationen überdauern.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="shadow-[var(--shadow-brand)]"
                  >
                    <Link href="/kontakt">
                      Kostenlose Beratung
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white/30 bg-white/5 text-secondary-foreground backdrop-blur hover:bg-white/10"
                  >
                    <a href={SITE.phoneHref}>
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      {SITE.phone}
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-secondary-foreground/80">
                  {[
                    'Kostenlose Anfahrt im Umkreis',
                    'Faire & transparente Preise',
                    'Deutsche Premium-Materialien',
                    'Schnelle Terminvergabe',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Trust stats card - floats beside hero on lg+ */}
            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg md:gap-4 md:p-6">
                  {trustStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-secondary/40 p-4 md:p-5"
                    >
                      <div className="font-display text-3xl font-bold text-primary md:text-4xl">
                        <AnimatedNumber
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>
                      <p className="mt-1 text-sm text-secondary-foreground/75">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <StaggerGrid className="grid gap-4 md:grid-cols-3 md:gap-6">
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <HoverCard className="h-full">
                    <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-brand-sm)]">
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl transition-opacity group-hover:bg-primary/15"
                      />
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                        <benefit.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Premium Materials */}
        <section className="border-y border-border bg-muted/40 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                  <BadgeCheck className="h-7 w-7" aria-hidden="true" />
                </div>
                <h2 className="text-h2 font-bold tracking-tight text-foreground">
                  Nur Premium-Materialien aus Deutschland
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                  Ein Dach ist nur so gut wie die Materialien, aus denen es
                  gebaut wird. Wir setzen auf bewährte Qualität deutscher
                  Premium-Hersteller – für Dächer, die Generationen überdauern.
                </p>
              </div>
            </Reveal>

            <StaggerGrid className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
              {partners.map((partner) => (
                <StaggerItem key={partner.name}>
                  <div className="flex h-full flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/40">
                    <span className="font-display text-base font-bold text-foreground md:text-lg">
                      {partner.name}
                    </span>
                    <span className="mt-1 text-xs text-muted-foreground">
                      {partner.description}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Services Grid - red gradient-bordered cards */}
        <section className="py-16 md:py-24" id="leistungen">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <div className="text-center">
                <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                  Unsere Leistungen
                  <span className="h-px w-8 bg-primary" aria-hidden="true" />
                </p>
                <h2 className="text-h2 font-bold tracking-tight text-foreground">
                  Alles rund ums Dach – aus einer Hand
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                  Von der kleinen Reparatur bis zur kompletten Dachsanierung.
                  Jedes Projekt wird von erfahrenen Fachkräften mit höchster
                  Sorgfalt ausgeführt.
                </p>
              </div>
            </Reveal>

            <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <StaggerItem key={service.href}>
                  <HoverCard className="h-full" lift={4}>
                    <Link
                      href={service.href}
                      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-[var(--shadow-brand)]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={`${service.title} – Dachbau Pro Wesseling`}
                          fill
                          className="object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgb(15_13_13/0.7)_100%)]"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary/95 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
                          {service.title}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                          {service.title}
                        </h3>
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

            <Reveal delay={0.1}>
              <div className="mt-12 text-center">
                <Button size="lg" asChild className="shadow-[var(--shadow-brand-sm)]">
                  <Link href="/leistungen">
                    Alle Leistungen im Detail
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:aspect-square">
                  <Image
                    src="/images/img-20250729-wa0059-1.jpg"
                    alt="Detailarbeit bei Dachbau Pro – Premium Dachdeckung"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-primary/30 blur-2xl"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Warum Dachbau Pro?
                  </p>
                  <h2 className="text-h2 font-bold tracking-tight text-foreground">
                    Handwerkskunst, die hält.
                  </h2>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    Dachbau Pro bietet zuverlässige Dachlösungen mit qualitativ
                    hochwertigem Handwerk und hervorragendem Kundenservice. Als
                    Ihr kompetenter Partner in Wesseling, Köln, Bonn und der
                    gesamten Region wissen wir: Ihr Dach ist eine der
                    wichtigsten Investitionen in Ihr Zuhause.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Unser Team besteht aus erfahrenen Dachdeckern und
                    Zimmerleuten mit fundierter handwerklicher Ausbildung. Wir
                    verbinden Tradition mit modernsten Materialien.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {[
                      'Kostenlose Beratung und detaillierte Angebotserstellung',
                      'Qualifizierte und erfahrene Fachkräfte',
                      'Ausschließlich Premium-Materialien deutscher Hersteller',
                      'Termingerechte und saubere Ausführung',
                      'Faire und transparente Preisgestaltung',
                      'Umfassende Garantieleistungen',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button asChild className="shadow-[var(--shadow-brand-sm)]">
                      <Link href="/ueber-uns">
                        Mehr über uns erfahren
                        <ArrowRight
                          className="ml-1 h-4 w-4"
                          aria-hidden="true"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="border-y border-border bg-card py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <Reveal>
                <div>
                  <h2 className="text-h2 font-bold tracking-tight text-foreground">
                    Unser Einzugsgebiet
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Von unserem Sitz in Wesseling sind wir schnell bei Ihnen –
                    ob für einen Notfall oder ein geplantes Projekt. Im Umkreis
                    ist die Anfahrt kostenfrei.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
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
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-4">
                  {[
                    {
                      icon: Wrench,
                      title: 'Notfall-Service',
                      body: 'Bei Sturmschäden oder dringenden Reparaturen sind wir 24/7 für Sie da.',
                    },
                    {
                      icon: HomeIcon,
                      title: 'Kostenlose Anfahrt',
                      body: 'Im Umkreis von Wesseling berechnen wir keine Anfahrtskosten.',
                    },
                    {
                      icon: Users,
                      title: 'Meisterbetrieb',
                      body: 'Erfahrene Fachkräfte mit fundierter handwerklicher Ausbildung.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-border bg-background/80 p-5 transition-colors hover:border-primary/40"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                          <item.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Notfall strip */}
        <NotfallStrip />

        {/* FAQ - SEO goldmine */}
        <Faq
          items={faqItems}
          subtitle="Antworten auf die häufigsten Fragen rund ums Dach, unsere Leistungen und Preise."
        />

        {/* Contact cards */}
        <section className="border-t border-border py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <h2 className="text-center text-h2 font-bold tracking-tight text-foreground">
                So erreichen Sie uns
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
                Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir
                sind für Sie da – telefonisch, per E-Mail oder persönlich vor
                Ort.
              </p>
            </Reveal>

            <StaggerGrid className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Phone,
                  title: 'Telefon',
                  subtitle: 'Mo–Fr: 7:00–18:00 Uhr',
                  content: SITE.phone,
                  href: SITE.phoneHref,
                },
                {
                  icon: Mail,
                  title: 'E-Mail',
                  subtitle: 'Antwort innerhalb 24 h',
                  content: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
                {
                  icon: MapPin,
                  title: 'Adresse',
                  subtitle: 'Unser Standort',
                  content: `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
                  href: `https://maps.google.com/?q=${encodeURIComponent(
                    `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
                  )}`,
                },
              ].map((card) => (
                <StaggerItem key={card.title}>
                  <HoverCard>
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        card.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="group relative block h-full overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-brand-sm)]"
                    >
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                        <card.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-display font-semibold text-foreground">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {card.subtitle}
                      </p>
                      <p className="mt-2 text-base font-medium text-primary transition-colors group-hover:text-primary-deep">
                        {card.content}
                      </p>
                    </a>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-noise"
          />
          <div className="mx-auto max-w-7xl px-4 text-center">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight">
                Bereit für Ihr Dachprojekt?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90 leading-relaxed">
                Kontaktieren Sie uns noch heute für eine kostenlose Beratung
                und ein unverbindliches Angebot.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontakt">
                    Jetzt Anfrage senden
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
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
