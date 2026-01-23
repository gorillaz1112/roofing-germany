import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachfenster & Lichtkuppeln",
  description:
    "Dachfenster-Einbau und -Austausch in Wesseling und Köln. VELUX und andere Marken fachgerecht montiert. Mehr Licht für Ihr Dachgeschoss!",
  alternates: {
    canonical: "/leistungen/dachfenster",
  },
}

const relatedServices = [
  { title: "Dachausbau", href: "/leistungen/dachausbau" },
  { title: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
  { title: "Abdichtung", href: "/leistungen/abdichtung" },
]

const benefits = [
  "Mehr natürliches Licht im Dachgeschoss",
  "Bessere Belüftung und Raumklima",
  "Energieeffiziente Fenster",
  "Fachgerechte Abdichtung",
  "Alle führenden Hersteller",
  "Garantie auf Einbau und Material",
]

export default function DachfensterPage() {
  return (
    <ServicePageTemplate
      title="Dachfenster & Lichtkuppeln"
      description="Einbau und Austausch von Dachfenstern namhafter Hersteller für mehr natürliches Licht und bessere Belüftung in Ihrem Dachgeschoss."
      heroImage="/images/img-20250729-wa0053-1.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Licht und Luft für Ihr Dachgeschoss
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Dachfenster verwandeln dunkle Dachräume in helle, freundliche
            Wohnbereiche. Bei Dach Service 24 Plus installieren wir Dachfenster
            aller führenden Hersteller – fachgerecht und mit zuverlässiger
            Abdichtung.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Dachfenster-Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Neueinbau:</span>
              Installation von Dachfenstern in bestehende Dächer
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Fenstertausch:</span>
              Austausch alter gegen moderne, energieeffiziente Fenster
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Lichtkuppeln:</span>
              Für Flachdächer und flach geneigte Dächer
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Dachausstiege:</span>
              Für den Zugang zu Dachterrassen oder Wartungszwecke
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Zubehör:</span>
              Rollos, Jalousien und Insektenschutz
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Markenqualität für Ihr Dach
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir arbeiten mit namhaften Herstellern wie VELUX, Roto und Fakro.
            So können Sie sicher sein, dass Sie ein hochwertiges Produkt mit
            langer Lebensdauer erhalten.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Besonders wichtig ist uns die fachgerechte Abdichtung des Fensterrahmens.
            Nur so ist dauerhafter Schutz vor eindringendem Wasser gewährleistet.
            Wir verwenden ausschließlich vom Hersteller freigegebene
            Eindeckrahmen und Anschlussprodukte.
          </p>
        </>
      }
    />
  )
}
