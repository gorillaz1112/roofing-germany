import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachentwässerung & Regenrinnen",
  description:
    "Professionelle Dachentwässerung in Wesseling und Köln. Regenrinnen, Fallrohre und Entwässerungssysteme fachmännisch installieren und warten. Jetzt anfragen!",
  alternates: {
    canonical: "/leistungen/dachentwaesserung",
  },
}

const relatedServices = [
  { title: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { title: "Abdichtung", href: "/leistungen/abdichtung" },
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
  { title: "Schornstein", href: "/leistungen/schornstein" },
]

const benefits = [
  "Fachgerechte Installation",
  "Hochwertige Materialien aus Zink, Kupfer oder Kunststoff",
  "Individuelle Lösungen für jedes Dach",
  "Regelmäßige Wartung und Reinigung",
  "Schnelle Reparatur bei Schäden",
  "Langlebigkeit und Garantie",
]

export default function DachentwaesserungPage() {
  return (
    <ServicePageTemplate
      title="Dachentwässerung & Regenrinnen"
      slug="dachentwaesserung"
      description="Installation und Wartung von Regenrinnen, Fallrohren und kompletten Entwässerungssystemen für optimalen Wasserabfluss und Schutz Ihrer Fassade."
      heroImage="/images/img-20250729-wa0066-1.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Funktionelle Dachentwässerung für Ihr Gebäude
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine gut funktionierende Dachentwässerung schützt Ihr Gebäude vor
            Wasserschäden an Dach, Fassade und Fundament. Bei Dachbau Pro
            installieren und warten wir komplette Entwässerungssysteme.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Entwässerungslösungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachrinnen:</span>
              Halbrunde und kastenförmige Rinnen in verschiedenen Größen
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Fallrohre:</span>
              Fachgerechte Installation mit Wandbefestigung
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Rinnenhalter:</span>
              Stabile Befestigung für lange Haltbarkeit
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Laubfänger:</span>
              Schutz vor Verstopfungen durch Blätter
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Regensammler:</span>
              Für die Nutzung von Regenwasser im Garten
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Materialien nach Wunsch
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir bieten Dachentwässerungssysteme in verschiedenen Materialien:
            langlebiges Titanzink, edles Kupfer oder kostengünstiger Kunststoff.
            Gerne beraten wir Sie, welches Material für Ihr Projekt am besten
            geeignet ist.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Neben der Installation bieten wir auch regelmäßige Wartung und
            Reinigung Ihrer Dachrinnen an. So vermeiden Sie Verstopfungen und
            stellen einen optimalen Wasserabfluss sicher.
          </p>
        </>
      }
    />
  )
}
