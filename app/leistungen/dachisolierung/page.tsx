import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachisolierung & Wärmedämmung",
  description:
    "Professionelle Dachisolierung in Wesseling und Köln. Wärmedämmung für Energieeffizienz und Heizkosten sparen. Jetzt beraten lassen!",
  alternates: {
    canonical: "/leistungen/dachisolierung",
  },
}

const relatedServices = [
  { title: "Dachausbau", href: "/leistungen/dachausbau" },
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
  { title: "Abdichtung", href: "/leistungen/abdichtung" },
  { title: "Zimmerei", href: "/leistungen/zimmerei" },
]

const benefits = [
  "Bis zu 30% Heizkosten sparen",
  "Verbessertes Raumklima",
  "Schutz vor Hitze im Sommer",
  "Umweltfreundliche Materialien",
  "Fördermittel-Beratung",
  "Langfristige Energieeffizienz",
]

export default function DachisolierungPage() {
  return (
    <ServicePageTemplate
      title="Dachisolierung & Wärmedämmung"
      description="Energieeffiziente Wärmedämmung für Ihr Dach – sparen Sie Heizkosten und schützen Sie die Umwelt mit moderner Isolierung vom Fachmann."
      heroImage="/images/img-20250729-wa0056-1.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Energieeffizient leben mit optimaler Dämmung
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine gute Dachisolierung ist der Schlüssel zu einem energieeffizienten
            Zuhause. Über ein ungedämmtes Dach geht bis zu 30% der Heizenergie
            verloren. Mit einer professionellen Wärmedämmung reduzieren Sie Ihre
            Heizkosten nachhaltig.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Dämmungslösungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Aufsparrendämmung:</span>
              Dämmung oberhalb der Sparren für optimale Ergebnisse
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Zwischensparrendämmung:</span>
              Kostengünstige Variante zwischen den Sparren
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Untersparrendämmung:</span>
              Zusätzliche Dämmschicht für maximale Effizienz
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Geschossdeckendämmung:</span>
              Dämmung der obersten Geschossdecke
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Einblasdämmung:</span>
              Nachträgliche Dämmung ohne große Baumaßnahmen
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Moderne Dämmmaterialien
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir arbeiten mit verschiedenen Dämmstoffen: von bewährter Mineralwolle
            über ökologische Holzfaserdämmung bis hin zu hocheffizienten
            PUR-Hartschaumplatten. Gemeinsam finden wir die beste Lösung für
            Ihr Dach.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Übrigens: Für energetische Sanierungen gibt es oft staatliche
            Förderprogramme. Wir beraten Sie gerne zu den Möglichkeiten und
            unterstützen Sie bei der Antragstellung.
          </p>
        </>
      }
    />
  )
}
