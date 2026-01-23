import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Unsere Leistungen",
  description:
    "Alle Dachdeckerleistungen von Dach Service 24 Plus: Dachmontage, Dachreparatur, Abdichtung, Zimmerei, Dachentwässerung, Dachausbau und mehr in Wesseling und Köln.",
  alternates: {
    canonical: "/leistungen",
  },
}

const services = [
  {
    title: "Dachmontage",
    description:
      "Professionelle Neueindeckung und komplette Dachkonstruktion für Neubauten und Sanierungen. Wir verwenden nur hochwertige Materialien für langlebige Ergebnisse.",
    href: "/leistungen/dachmontage",
    image: "/images/img-20250729-wa0055-1.jpg",
  },
  {
    title: "Dachreparatur",
    description:
      "Schnelle und zuverlässige Reparaturen bei Sturmschäden, Undichtigkeiten und altersbedingtem Verschleiß. Notdienst für dringende Fälle verfügbar.",
    href: "/leistungen/dachreparatur",
    image: "/images/img-20250729-wa0054-1.jpg",
  },
  {
    title: "Abdichtung",
    description:
      "Hochwertige Dachabdichtung und Hydroisolation für langfristigen Schutz vor Feuchtigkeit und Wasserschäden an Flachdächern und Balkonen.",
    href: "/leistungen/abdichtung",
    image: "/images/img-20250729-wa0057-1.jpg",
  },
  {
    title: "Zimmerei",
    description:
      "Fachgerechte Holzkonstruktionen, Dachstühle, Sparrenwechsel und Tragwerkserneuerung vom erfahrenen Zimmermannsteam.",
    href: "/leistungen/zimmerei",
    image: "/images/img-20250729-wa0060-1.jpg",
  },
  {
    title: "Dachentwässerung",
    description:
      "Installation und Wartung von Regenrinnen, Fallrohren und kompletten Entwässerungssystemen für optimalen Wasserabfluss.",
    href: "/leistungen/dachentwaesserung",
    image: "/images/img-20250729-wa0066-1.jpg",
  },
  {
    title: "Dachausbau",
    description:
      "Schaffen Sie neuen Wohnraum durch professionelle Mansardenausbauten und Dachgeschossausbau mit optimaler Raumausnutzung.",
    href: "/leistungen/dachausbau",
    image: "/images/whatsapp-image-2025-07-29-at-19.jpg",
  },
  {
    title: "Dachisolierung",
    description:
      "Energieeffiziente Wärmedämmung für Ihr Dach – sparen Sie Heizkosten und schützen Sie die Umwelt mit moderner Isolierung.",
    href: "/leistungen/dachisolierung",
    image: "/images/img-20250729-wa0056-1.jpg",
  },
  {
    title: "Dachfenster",
    description:
      "Einbau und Austausch von Dachfenstern namhafter Hersteller für mehr natürliches Licht und bessere Belüftung.",
    href: "/leistungen/dachfenster",
    image: "/images/img-20250729-wa0053-1.jpg",
  },
  {
    title: "Schornstein",
    description:
      "Schornsteinsanierung, professionelle Verkleidung und zuverlässige Abdichtung für sicheren und effizienten Betrieb.",
    href: "/leistungen/schornstein",
    image: "/images/22.jpg",
  },
]

export default function LeistungenPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Von der kleinen Reparatur bis zur kompletten Dachsanierung – wir
              bieten Ihnen alle Dachdeckerleistungen aus einer Hand. Professionell,
              zuverlässig und zu fairen Preisen.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Kostenlose Beratung anfordern
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns für eine
              unverbindliche Beratung und ein kostenloses Angebot.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+491634679816">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  +49 163 4679816
                </a>
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
