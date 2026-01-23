import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Wrench,
  Star,
  BadgeCheck,
} from "lucide-react"

const services = [
  {
    title: "Dachmontage",
    description:
      "Professionelle Neueindeckung und komplette Dachkonstruktion für Neubauten und Sanierungen. Wir verwenden ausschließlich hochwertige Dachziegel und Materialien von führenden deutschen Herstellern wie Braas, Creaton und Nelskamp.",
    href: "/leistungen/dachmontage",
    image: "/images/img-20250729-wa0055-1.jpg",
  },
  {
    title: "Dachreparatur",
    description:
      "Schnelle und zuverlässige Reparaturen bei Sturmschäden, Undichtigkeiten und Verschleiß. Unser erfahrenes Team identifiziert die Schadensursache präzise und führt fachgerechte Reparaturen durch, die langfristig halten.",
    href: "/leistungen/dachreparatur",
    image: "/images/img-20250729-wa0054-1.jpg",
  },
  {
    title: "Abdichtung",
    description:
      "Hochwertige Dachabdichtung und Hydroisolation für langfristigen Schutz vor Feuchtigkeit. Wir setzen auf bewährte Abdichtungssysteme von SOPREMA, Bauder und anderen Premium-Herstellern für maximale Sicherheit.",
    href: "/leistungen/abdichtung",
    image: "/images/img-20250729-wa0057-1.jpg",
  },
  {
    title: "Zimmerei",
    description:
      "Fachgerechte Holzkonstruktionen, Dachstühle und Sparrenwechsel vom erfahrenen Zimmermann. Wir arbeiten mit ausgewähltem Konstruktionsholz nach deutschen Qualitätsstandards für maximale Stabilität und Langlebigkeit.",
    href: "/leistungen/zimmerei",
    image: "/images/img-20250729-wa0060-1.jpg",
  },
  {
    title: "Dachentwässerung",
    description:
      "Installation und Wartung von Regenrinnen, Fallrohren und kompletten Entwässerungssystemen. Wir verbauen Systeme von Markenherstellern wie Lindab, Zambelli und Rheinzink für dauerhafte Funktionalität.",
    href: "/leistungen/dachentwaesserung",
    image: "/images/img-20250729-wa0066-1.jpg",
  },
  {
    title: "Dachausbau",
    description:
      "Schaffen Sie neuen Wohnraum durch professionelle Mansardenausbauten und Dachgeschossausbau. Von der Planung bis zur Fertigstellung begleiten wir Ihr Projekt mit Expertise und Sorgfalt.",
    href: "/leistungen/dachausbau",
    image: "/images/whatsapp-image-2025-07-29-at-19.jpg",
  },
  {
    title: "Dachisolierung",
    description:
      "Energieeffiziente Wärmedämmung für Ihr Dach mit Premium-Dämmmaterialien von ISOVER, Rockwool und pro clima. Sparen Sie bis zu 30% Heizkosten und verbessern Sie Ihr Wohnklima nachhaltig.",
    href: "/leistungen/dachisolierung",
    image: "/images/img-20250729-wa0056-1.jpg",
  },
  {
    title: "Dachfenster",
    description:
      "Einbau und Austausch von Dachfenstern für mehr Licht und bessere Belüftung. Wir sind zertifizierter Partner für VELUX, Roto und Fakro Dachfenster – die führenden Marken am Markt.",
    href: "/leistungen/dachfenster",
    image: "/images/img-20250729-wa0053-1.jpg",
  },
  {
    title: "Schornstein",
    description:
      "Schornsteinsanierung, Verkleidung und Abdichtung für sicheren Betrieb. Professionelle Schornsteinkopfsanierung und Einfassungen mit hochwertigen Materialien für jahrzehntelange Haltbarkeit.",
    href: "/leistungen/schornstein",
    image: "/images/22.jpg",
  },
]

const benefits = [
  {
    icon: Shield,
    title: "Qualitätsgarantie",
    description: "Wir stehen für erstklassige Arbeit mit langfristiger Garantie auf alle unsere Leistungen. Ihre Zufriedenheit ist unser Maßstab.",
  },
  {
    icon: Clock,
    title: "Schneller Service",
    description: "Flexible Terminplanung und zügige Ausführung Ihrer Projekte. Bei Notfällen sind wir kurzfristig für Sie da.",
  },
  {
    icon: Award,
    title: "Erfahrenes Team",
    description: "Qualifizierte Fachkräfte mit jahrelanger Branchenerfahrung und regelmäßigen Fortbildungen für beste Ergebnisse.",
  },
]

const partners = [
  { name: "Braas", description: "Premium Dachziegel" },
  { name: "Creaton", description: "Hochwertige Dachsteine" },
  { name: "VELUX", description: "Dachfenster-Spezialist" },
  { name: "ISOVER", description: "Dämmstoffe" },
  { name: "Rheinzink", description: "Dachentwässerung" },
  { name: "pro clima", description: "Luftdichtung" },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
          <div className="absolute inset-0 opacity-10">
            <Image
              src="/images/whatsapp-image-2025-07-29-at-19.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                Ihr Dachdecker-Meisterbetrieb in Wesseling
              </p>
              <h1 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
                Professionelle Dacharbeiten mit Premium-Materialien aus Deutschland
              </h1>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
                Dach Service 24 Plus steht für Qualität, Zuverlässigkeit und Handwerkskunst. 
                Wir realisieren Ihr Dachprojekt von der Reparatur bis zur kompletten Neueindeckung – 
                immer mit hochwertigen Materialien führender deutscher Hersteller und erfahrenen Fachkräften.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/kontakt">
                    Kostenlose Beratung
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent">
                  <a href="tel:+491634679816">
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Jetzt anrufen
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-secondary-foreground/70">
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  Kostenlose Anfahrt im Umkreis
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  Faire & transparente Preise
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  Deutsche Premium-Materialien
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
                  Schnelle Terminvergabe
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Materials Section */}
        <section className="border-y border-border bg-card py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <BadgeCheck className="h-7 w-7 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Nur Premium-Materialien aus Deutschland
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                Bei Dach Service 24 Plus verwenden wir ausschließlich hochwertige Materialien von führenden 
                deutschen Herstellern. Denn wir wissen: Ein Dach ist nur so gut wie die Materialien, 
                aus denen es gebaut wird. Deshalb setzen wir auf bewährte Qualität von Marken wie 
                Braas, Creaton, VELUX, ISOVER, Rheinzink und pro clima – für Dächer, die Generationen überdauern.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex flex-col items-center justify-center rounded-lg border border-border bg-muted/50 p-4 text-center"
                >
                  <span className="text-lg font-bold text-foreground">{partner.name}</span>
                  <span className="mt-1 text-xs text-muted-foreground">{partner.description}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Unsere Partnerschaft mit diesen renommierten Herstellern garantiert Ihnen 
              beste Qualität und attraktive Garantieleistungen.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted py-16 md:py-24" id="leistungen">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Unsere Leistungen im Überblick
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-muted-foreground leading-relaxed">
                Von der kleinen Reparatur bis zur kompletten Dachsanierung – wir bieten Ihnen 
                alle Dachdeckerleistungen aus einer Hand. Jedes Projekt wird von unseren erfahrenen 
                Fachkräften mit höchster Sorgfalt und unter Verwendung erstklassiger Materialien ausgeführt. 
                Überzeugen Sie sich selbst von unserem umfassenden Leistungsspektrum.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.href}
                  className="group overflow-hidden border-0 bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Mehr erfahren
                      <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild>
                <Link href="/leistungen">
                  Alle Leistungen im Detail
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:aspect-square">
                <Image
                  src="/images/img-20250729-wa0059-1.jpg"
                  alt="Detailarbeit bei Dach Service 24 Plus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Warum Dach Service 24 Plus?
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Dach Service 24 Plus bietet zuverlässige Dachlösungen mit qualitativ hochwertigem 
                  Handwerk und hervorragendem Kundenservice. Als Ihr kompetenter Partner für alle 
                  Arbeiten rund ums Dach in Wesseling, Köln, Bonn und der gesamten Region verstehen 
                  wir, dass Ihr Dach eine der wichtigsten Investitionen in Ihr Zuhause ist.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Unser Team besteht aus erfahrenen Dachdeckern und Zimmerleuten, die ihr Handwerk 
                  von Grund auf gelernt haben. Wir arbeiten ausschließlich mit hochwertigen Materialien 
                  deutscher Premium-Hersteller – denn wir wissen, dass nachhaltige Qualität nur mit 
                  den besten Produkten erreicht werden kann.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Kostenlose Beratung und detaillierte Angebotserstellung",
                    "Qualifizierte und erfahrene Fachkräfte",
                    "Ausschließlich Premium-Materialien deutscher Hersteller",
                    "Termingerechte und saubere Ausführung",
                    "Faire und transparente Preisgestaltung",
                    "Umfassende Garantieleistungen",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/ueber-uns">
                      Mehr über uns erfahren
                      <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="border-y border-border bg-card py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Unser Einzugsgebiet
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Mit Sitz in Wesseling sind wir Ihr zuverlässiger Dachdeckerbetrieb für die 
                  gesamte Region. Wir sind schnell bei Ihnen – egal ob für einen Notfall oder 
                  ein geplantes Projekt. Im Umkreis von Wesseling ist die Anfahrt für Sie kostenfrei.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Wesseling", "Köln", "Bonn", "Brühl", "Hürth", "Frechen", "Pulheim", "Bergheim", "Troisdorf", "Bornheim"].map((city) => (
                    <span
                      key={city}
                      className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-border bg-muted/50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Wrench className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Notfall-Service</h3>
                      <p className="text-sm text-muted-foreground">
                        Bei Sturmschäden oder dringenden Reparaturen sind wir schnell zur Stelle.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-muted/50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Star className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Kostenlose Anfahrt</h3>
                      <p className="text-sm text-muted-foreground">
                        Im Umkreis von Wesseling berechnen wir keine Anfahrtskosten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Placeholder Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Unsere Partner & Kooperationen
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Wir arbeiten mit renommierten Herstellern und Partnern zusammen, um Ihnen 
                die beste Qualität zu garantieren. Durch unsere langjährigen Partnerschaften 
                profitieren Sie von exklusiven Garantieleistungen und Vorzugskonditionen.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Dachziegel-Hersteller</h3>
                <p className="mt-2 text-muted-foreground">
                  Braas, Creaton, Nelskamp, Jacobi – die führenden Marken für langlebige Dachziegel.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Dachfenster-Spezialisten</h3>
                <p className="mt-2 text-muted-foreground">
                  VELUX, Roto, Fakro – zertifizierte Partnerschaft für professionellen Einbau.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <BadgeCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Dämmstoff-Partner</h3>
                <p className="mt-2 text-muted-foreground">
                  ISOVER, Rockwool, pro clima – Premium-Dämmmaterialien für maximale Energieeffizienz.
                </p>
              </div>
            </div>
            <div className="mt-10 rounded-xl border border-primary/30 bg-primary/5 p-6 md:p-8 text-center">
              <p className="text-lg font-semibold text-foreground">
                Sie sind Hersteller oder Großhändler und möchten Partner werden?
              </p>
              <p className="mt-2 text-muted-foreground">
                Wir sind stets auf der Suche nach weiteren qualitätsorientierten Partnerschaften.
              </p>
              <Button asChild className="mt-4">
                <Link href="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Bereit für Ihr Dachprojekt?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80 leading-relaxed">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und ein unverbindliches 
              Angebot. Unser Team steht Ihnen für alle Fragen rund um Ihr Dach zur Verfügung. 
              Wir freuen uns auf Ihre Anfrage!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Jetzt Anfrage senden
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:+491634679816">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  +49 163 4679816
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              So erreichen Sie uns
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
              Haben Sie Fragen oder möchten Sie ein Angebot anfordern? Wir sind für Sie da – 
              telefonisch, per E-Mail oder persönlich vor Ort.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Telefon</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Mo-Fr: 7:00-18:00 Uhr</p>
                  <a
                    href="tel:+491634679816"
                    className="mt-2 block text-lg font-medium text-primary hover:underline"
                  >
                    +49 163 4679816
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">E-Mail</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                  <a
                    href="mailto:dachservice24plus@gmail.com"
                    className="mt-2 block text-lg font-medium text-primary hover:underline"
                  >
                    dachservice24plus@gmail.com
                  </a>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">Adresse</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Unser Standort</p>
                  <address className="mt-2 text-lg font-medium not-italic text-foreground">
                    Industriestraße 68<br />
                    50389 Wesseling
                  </address>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
