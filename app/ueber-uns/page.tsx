import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
  Users,
  Hammer,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Lernen Sie Dach Service 24 Plus kennen. Ihr zuverlässiger Dachdecker in Wesseling mit erfahrenem Team und höchsten Qualitätsansprüchen.",
  alternates: {
    canonical: "/ueber-uns",
  },
}

const values = [
  {
    icon: Shield,
    title: "Qualität",
    description:
      "Wir setzen auf hochwertige Materialien und sorgfältige Verarbeitung für langlebige Ergebnisse.",
  },
  {
    icon: Clock,
    title: "Zuverlässigkeit",
    description:
      "Termine werden eingehalten, Absprachen sind verbindlich. Sie können sich auf uns verlassen.",
  },
  {
    icon: Heart,
    title: "Kundenorientierung",
    description:
      "Ihre Zufriedenheit steht an erster Stelle. Wir hören zu und finden die beste Lösung für Sie.",
  },
  {
    icon: Users,
    title: "Teamarbeit",
    description:
      "Unser eingespieltes Team arbeitet Hand in Hand für optimale Ergebnisse.",
  },
  {
    icon: Hammer,
    title: "Handwerkskunst",
    description:
      "Traditionelles Handwerk kombiniert mit modernen Techniken für perfekte Ausführung.",
  },
  {
    icon: Award,
    title: "Erfahrung",
    description:
      "Jahrelange Erfahrung in allen Bereichen des Dachdeckerhandwerks.",
  },
]

const stats = [
  { value: "500+", label: "Zufriedene Kunden" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Qualitätsgarantie" },
  { value: "24h", label: "Notfall-Service" },
]

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
              Über Dach Service 24 Plus
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Ihr zuverlässiger Partner für alle Dacharbeiten in Wesseling, Köln
              und der gesamten Region. Qualität, Zuverlässigkeit und
              Kundenzufriedenheit sind unsere höchsten Prioritäten.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/whatsapp-image-2025-07-29-at-19.jpg"
                  alt="Dach Service 24 Plus bei der Arbeit"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Wer wir sind
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  Dach Service 24 Plus bietet zuverlässige Dachlösungen mit
                  qualitativ hochwertigem Handwerk und hervorragendem Kundenservice.
                  Von unserem Standort in Wesseling aus betreuen wir Kunden in
                  der gesamten Region Köln/Bonn.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Unser erfahrenes Team besteht aus qualifizierten Dachdeckern
                  und Zimmerleuten, die ihr Handwerk von Grund auf gelernt haben.
                  Wir verbinden traditionelle Handwerkstechniken mit modernsten
                  Materialien und Methoden.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Ob kleine Reparatur oder komplette Dachsanierung – wir behandeln
                  jedes Projekt mit der gleichen Sorgfalt und Professionalität.
                  Dabei legen wir großen Wert auf transparente Kommunikation und
                  faire Preise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center">
                  <CardContent className="p-6">
                    <p className="text-4xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-2 text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Unsere Werte
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Diese Grundsätze leiten unser Handeln und garantieren Ihnen
                erstklassige Arbeit.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <Card key={value.title}>
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground md:text-3xl">
                  Warum Dach Service 24 Plus?
                </h2>
                <ul className="mt-8 space-y-4">
                  {[
                    "Kostenlose Beratung und Angebotserstellung vor Ort",
                    "Qualifizierte und erfahrene Fachkräfte",
                    "Hochwertige Materialien führender Hersteller",
                    "Termingerechte und saubere Ausführung",
                    "Faire und transparente Preisgestaltung",
                    "Garantie auf Arbeit und Material",
                    "Persönlicher Ansprechpartner während des gesamten Projekts",
                    "Notdienst bei akuten Dachschäden",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-secondary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/img-20250729-wa0059-1.jpg"
                  alt="Qualitätsarbeit von Dach Service 24 Plus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Bereit für Ihr Dachprojekt?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und
              ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
