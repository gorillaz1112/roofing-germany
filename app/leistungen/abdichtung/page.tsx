import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Abdichtung & Hydroisolation",
  description:
    "Professionelle Dachabdichtung und Hydroisolation in Wesseling und Köln. Flachdächer, Balkone und Terrassen zuverlässig abdichten. Kostenlose Beratung!",
  alternates: {
    canonical: "/leistungen/abdichtung",
  },
}

const relatedServices = [
  { title: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { title: "Dachentwässerung", href: "/leistungen/dachentwaesserung" },
  { title: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { title: "Dachausbau", href: "/leistungen/dachausbau" },
]

const benefits = [
  "Langfristiger Schutz vor Feuchtigkeit",
  "Hochwertige Abdichtungsmaterialien",
  "Fachgerechte Verarbeitung",
  "Lösung für alle Dachformen",
  "Garantie auf Dichtigkeit",
  "Regelmäßige Wartungsangebote",
]

export default function AbdichtungPage() {
  return (
    <ServicePageTemplate
      title="Abdichtung & Hydroisolation"
      description="Hochwertige Dachabdichtung und Hydroisolation für langfristigen Schutz vor Feuchtigkeit und Wasserschäden an Flachdächern, Balkonen und Terrassen."
      heroImage="/images/img-20250729-wa0057-1.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Professionelle Abdichtung für maximalen Schutz
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine fachgerechte Abdichtung ist entscheidend für den Schutz Ihres
            Gebäudes vor Feuchtigkeit und Wasserschäden. Bei Dach Service 24 Plus
            bieten wir Ihnen professionelle Abdichtungslösungen für alle
            Anforderungen.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Abdichtungsleistungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Flachdachabdichtung:</span>
              Bitumen- und Kunststoffbahnen für dauerhafte Dichtigkeit
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Balkonabdichtung:</span>
              Schutz vor eindringendem Wasser mit Flüssigabdichtung
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Terrassenabdichtung:</span>
              Professionelle Lösungen für begehbare Flächen
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Kellerabdichtung:</span>
              Schutz vor aufsteigender Feuchtigkeit
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Mauerabdichtung:</span>
              Horizontale und vertikale Abdichtungen
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Moderne Abdichtungsmaterialien
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir arbeiten mit modernsten Abdichtungsmaterialien führender
            Hersteller. Je nach Anforderung setzen wir Bitumenbahnen, EPDM-Folien,
            PVC-Bahnen oder Flüssigkunststoffe ein – immer passend zu Ihrem
            Projekt und Budget.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Nach der Abdichtung bieten wir Ihnen regelmäßige Wartung an, um die
            langfristige Dichtigkeit Ihres Daches zu gewährleisten. So vermeiden
            Sie teure Folgeschäden und haben lange Freude an Ihrem trockenen
            Gebäude.
          </p>
        </>
      }
    />
  )
}
