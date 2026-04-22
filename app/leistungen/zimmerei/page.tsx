import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Zimmerei & Holzbau",
  description:
    "Professionelle Zimmerei in Wesseling und Köln. Dachstühle, Sparrenwechsel und Holzkonstruktionen vom erfahrenen Zimmermannsteam. Jetzt anfragen!",
  alternates: {
    canonical: "/leistungen/zimmerei",
  },
}

const relatedServices = [
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
  { title: "Dachausbau", href: "/leistungen/dachausbau" },
  { title: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { title: "Dachreparatur", href: "/leistungen/dachreparatur" },
]

const benefits = [
  "Erfahrene Zimmerleute mit Fachwissen",
  "Hochwertige Holzverbindungen",
  "Individuelle Planung und Beratung",
  "Präzise Ausführung nach Maß",
  "Statische Berechnungen inklusive",
  "Nachhaltige Holzauswahl",
]

export default function ZimmereiPage() {
  return (
    <ServicePageTemplate
      title="Zimmerei & Holzbau"
      slug="zimmerei"
      description="Fachgerechte Holzkonstruktionen, Dachstühle, Sparrenwechsel und Tragwerkserneuerung vom erfahrenen Zimmermannsteam für Ihr Bauvorhaben."
      heroImage="/images/img-20250729-wa0060-1.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Traditionelles Handwerk trifft moderne Technik
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unser Zimmermannsteam verbindet traditionelles Handwerk mit modernen
            Techniken. Ob Neubau oder Sanierung – wir realisieren Ihre
            Holzkonstruktion mit Präzision und Leidenschaft.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Zimmerei-Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachstuhl:</span>
              Komplette Dachstuhlkonstruktionen für Neubauten
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Sparrenwechsel:</span>
              Austausch beschädigter Dachsparren und Balken
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Tragwerkserneuerung:</span>
              Sanierung und Verstärkung von Holzkonstruktionen
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Gauben:</span>
              Holzkonstruktion für Dachgauben jeder Art
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Carports & Vordächer:</span>
              Individuelle Überdachungslösungen aus Holz
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Qualität in jedem Detail
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir verwenden ausschließlich geprüftes Konstruktionsholz und achten
            auf sorgfältige Verarbeitung jeder einzelnen Verbindung. Unsere
            Zimmerleute arbeiten nach den aktuellen Normen und Vorschriften.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Bei komplexeren Projekten arbeiten wir eng mit Statikern zusammen,
            um die optimale Lösung für Ihr Bauvorhaben zu finden. So stellen
            wir sicher, dass Ihre Holzkonstruktion allen Anforderungen entspricht.
          </p>
        </>
      }
    />
  )
}
