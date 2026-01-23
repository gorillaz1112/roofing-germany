import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachausbau & Mansarden",
  description:
    "Professioneller Dachausbau in Wesseling und Köln. Mansardenausbau und Dachgeschossausbau für mehr Wohnraum. Kompetente Beratung und Planung!",
  alternates: {
    canonical: "/leistungen/dachausbau",
  },
}

const relatedServices = [
  { title: "Zimmerei", href: "/leistungen/zimmerei" },
  { title: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { title: "Dachfenster", href: "/leistungen/dachfenster" },
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
]

const benefits = [
  "Mehr Wohnraum ohne Anbau",
  "Wertsteigerung Ihrer Immobilie",
  "Individuelle Raumgestaltung",
  "Energieeffiziente Ausführung",
  "Alles aus einer Hand",
  "Koordination aller Gewerke",
]

export default function DachausbauPage() {
  return (
    <ServicePageTemplate
      title="Dachausbau & Mansarden"
      description="Schaffen Sie neuen Wohnraum durch professionelle Mansardenausbauten und Dachgeschossausbau mit optimaler Raumausnutzung und hochwertiger Ausführung."
      heroImage="/images/whatsapp-image-2025-07-29-at-19.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Neuer Wohnraum unterm Dach
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Ein Dachausbau bietet die perfekte Möglichkeit, zusätzlichen Wohnraum
            zu schaffen, ohne die Grundfläche Ihres Hauses zu vergrößern. Bei
            Dach Service 24 Plus planen und realisieren wir Ihren Dachausbau
            von Anfang bis Ende.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Dachausbau-Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachgeschossausbau:</span>
              Kompletter Ausbau ungenutzter Dachräume
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Mansardenausbau:</span>
              Erweiterung durch Mansardenkonstruktion
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachgauben:</span>
              Mehr Licht und Stehhöhe durch Gaubeneinbau
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachterrassen:</span>
              Außenbereiche im Dachgeschoss
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachanhebung:</span>
              Mehr Raumhöhe durch Anhebung des Daches
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Von der Planung bis zur Fertigstellung
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir begleiten Sie durch den gesamten Prozess: von der ersten Idee
            über die Bauantragstellung bis zur schlüsselfertigen Übergabe.
            Dabei koordinieren wir alle notwendigen Gewerke und sorgen für
            einen reibungslosen Ablauf.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Ein professionell ausgebautes Dachgeschoss steigert nicht nur Ihren
            Wohnkomfort, sondern auch den Wert Ihrer Immobilie erheblich.
            Sprechen Sie uns an – wir beraten Sie gerne zu den Möglichkeiten.
          </p>
        </>
      }
    />
  )
}
