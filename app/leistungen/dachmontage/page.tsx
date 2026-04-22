import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachmontage - Professionelle Dacheindeckung",
  description:
    "Professionelle Dachmontage und Neueindeckung in Wesseling und Köln. Komplette Dachkonstruktion für Neubauten und Sanierungen mit Premium-Materialien von Braas, Creaton und Nelskamp. Kostenlose Beratung!",
  alternates: {
    canonical: "/leistungen/dachmontage",
  },
}

const relatedServices = [
  { title: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { title: "Zimmerei", href: "/leistungen/zimmerei" },
  { title: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { title: "Dachfenster", href: "/leistungen/dachfenster" },
]

const benefits = [
  "Ausschließlich Premium-Materialien deutscher Hersteller",
  "Fachgerechte Verarbeitung nach aktuellen DIN-Normen",
  "Individuelle Beratung und detaillierte Planung",
  "Bis zu 30 Jahre Garantie auf Material und Arbeit",
  "Termingerechte und saubere Ausführung",
  "Faire und transparente Preisgestaltung ohne versteckte Kosten",
  "Kostenlose Anfahrt im Raum Köln/Bonn",
]

const materials = [
  "Braas",
  "Creaton",
  "Nelskamp",
  "Jacobi",
  "Monier",
  "Eternit",
]

export default function DachmontageePage() {
  return (
    <ServicePageTemplate
      title="Dachmontage"
      slug="dachmontage"
      description="Professionelle Neueindeckung und komplette Dachkonstruktion für Neubauten und Sanierungen. Wir verwenden ausschließlich Premium-Dachziegel und Materialien führender deutscher Hersteller für ein Dach, das Generationen hält."
      heroImage="/images/img-20250729-wa0055-1.jpg"
      benefits={benefits}
      materials={materials}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Komplette Dacheindeckung vom Profi
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Eine professionelle Dachmontage ist die Grundlage für ein sicheres und
            langlebiges Dach. Bei Dachbau Pro bieten wir Ihnen
            umfassende Dacheindeckungsarbeiten für Neubauten sowie komplette
            Dachsanierungen – immer mit dem Anspruch höchster Qualität und unter 
            Verwendung erstklassiger Materialien.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir wissen: Ein Dach ist nur so gut wie die Materialien, aus denen es 
            gebaut wird. Deshalb setzen wir ausschließlich auf bewährte 
            Premium-Produkte von führenden deutschen Herstellern wie Braas, Creaton, 
            Nelskamp und Jacobi. Diese Marken stehen für jahrzehntelange Erfahrung, 
            geprüfte Qualität und umfassende Garantieleistungen.
          </p>
          
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unsere Eindeckungsmaterialien
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Unser erfahrenes Team arbeitet mit verschiedenen hochwertigen 
            Eindeckungsmaterialien, die perfekt auf Ihre Anforderungen und 
            Ihr Budget abgestimmt werden:
          </p>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Tondachziegel:</span>
              Klassische, natürliche Ton-Dachziegel in vielen Farben und Formen – 
              atmungsaktiv, langlebig und umweltfreundlich. Produkte von Braas, 
              Creaton und Jacobi garantieren höchste Qualität.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Betondachsteine:</span>
              Moderne Betondachsteine bieten ein hervorragendes Preis-Leistungs-Verhältnis 
              bei hoher Widerstandsfähigkeit. Marken wie Braas Frankfurter Pfanne 
              sind seit Jahrzehnten bewährt.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Schiefer:</span>
              Edle Naturschiefer-Eindeckung für anspruchsvolle Dächer – das Premium-Material 
              für eine einzigartige Optik und extreme Langlebigkeit.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Metalldächer:</span>
              Langlebige Stehfalz- und Trapezbleche aus Zink, Kupfer oder Aluminium 
              für moderne Architektur und Industrieanwendungen.
            </li>
          </ul>
          
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Der Ablauf Ihrer Dachmontage
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Von der ersten Beratung bis zur finalen Abnahme begleiten wir Sie durch
            das gesamte Projekt. Unser strukturierter Prozess garantiert ein 
            reibungsloses Ergebnis:
          </p>
          <ol className="mt-4 space-y-3 list-decimal list-inside text-muted-foreground">
            <li><span className="font-medium text-foreground">Kostenlose Beratung vor Ort</span> – Wir begutachten Ihr Dach und besprechen Ihre Wünsche</li>
            <li><span className="font-medium text-foreground">Detailliertes Angebot</span> – Transparente Kalkulation ohne versteckte Kosten</li>
            <li><span className="font-medium text-foreground">Materialauswahl</span> – Gemeinsam wählen wir die optimalen Materialien</li>
            <li><span className="font-medium text-foreground">Terminplanung</span> – Verbindliche Termine, die wir einhalten</li>
            <li><span className="font-medium text-foreground">Professionelle Ausführung</span> – Saubere Arbeit durch erfahrene Fachkräfte</li>
            <li><span className="font-medium text-foreground">Abnahme und Dokumentation</span> – Sie erhalten alle Unterlagen und Garantiezertifikate</li>
          </ol>
          
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Unser Leistungsumfang
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Wir kümmern uns um alle notwendigen Arbeiten für Ihre neue Dacheindeckung:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Demontage und fachgerechte Entsorgung der alten Eindeckung</li>
            <li>• Prüfung und ggf. Sanierung der Unterkonstruktion</li>
            <li>• Anbringung von Unterspannbahn und Konterlattung</li>
            <li>• Neue Dachlattung nach Herstellervorgaben</li>
            <li>• Fachgerechte Verlegung der Dachziegel oder -steine</li>
            <li>• Einbau von First-, Grat- und Ortgangziegeln</li>
            <li>• Alle Anschlüsse an Kamine, Wände und Durchdringungen</li>
            <li>• Installation von Schneefangsystemen und Laufrosten</li>
          </ul>
          
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Nach Fertigstellung erhalten Sie eine ausführliche Dokumentation und
            unsere Garantie auf fachgerechte Ausführung. Selbstverständlich stehen
            wir Ihnen auch nach Abschluss der Arbeiten für Fragen und regelmäßige 
            Wartung zur Verfügung.
          </p>
        </>
      }
    />
  )
}
