import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Schornstein & Kaminverkleidung",
  description:
    "Schornsteinsanierung und Kaminverkleidung in Wesseling und Köln. Professionelle Abdichtung und Verkleidung für sicheren Betrieb. Jetzt anfragen!",
  alternates: {
    canonical: "/leistungen/schornstein",
  },
}

const relatedServices = [
  { title: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { title: "Abdichtung", href: "/leistungen/abdichtung" },
  { title: "Dachentwässerung", href: "/leistungen/dachentwaesserung" },
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
]

const benefits = [
  "Sicherer Betrieb von Heizung und Kamin",
  "Schutz vor Feuchtigkeit",
  "Ästhetische Verkleidung",
  "Langlebige Materialien",
  "Fachgerechte Abdichtung",
  "Wartung und Inspektion",
]

export default function SchornsteinPage() {
  return (
    <ServicePageTemplate
      title="Schornstein & Kaminverkleidung"
      slug="schornstein"
      description="Schornsteinsanierung, professionelle Verkleidung und zuverlässige Abdichtung für sicheren und effizienten Betrieb Ihrer Heizungsanlage."
      heroImage="/images/22.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Schornsteinarbeiten vom Fachmann
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Der Schornstein ist ein wichtiges Element Ihres Daches – er muss
            zuverlässig funktionieren und gegen Witterungseinflüsse geschützt sein.
            Bei Dachbau Pro kümmern wir uns um alle Arbeiten rund um
            den Schornstein.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Schornstein-Leistungen
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Schornsteinverkleidung:</span>
              Schutz und Verschönerung mit Schiefer oder Metall
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Abdichtung:</span>
              Professionelle Abdichtung am Dachanschluss
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Schornsteinkopfsanierung:</span>
              Erneuerung beschädigter Schornsteinköpfe
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Schornsteineinfassung:</span>
              Zink- oder Bleiabdeckungen für dauerhaften Schutz
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Regenhauben:</span>
              Schutz vor Regen und Vogelnestern
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Schutz vor Feuchtigkeit
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Die Abdichtung zwischen Schornstein und Dach ist eine häufige
            Schwachstelle. Durch Temperaturschwankungen und Setzungen können
            hier Undichtigkeiten entstehen. Wir sorgen für eine dauerhafte
            Abdichtung mit hochwertigen Materialien.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine Schornsteinverkleidung aus Schiefer oder Metall schützt das
            Mauerwerk zusätzlich vor Witterungseinflüssen und verleiht Ihrem
            Dach eine ansprechende Optik.
          </p>
        </>
      }
    />
  )
}
