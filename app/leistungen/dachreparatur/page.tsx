import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"

export const metadata: Metadata = {
  title: "Dachreparatur",
  description:
    "Schnelle Dachreparatur in Wesseling und Köln. Sturmschäden, Undichtigkeiten und Verschleiß zuverlässig beheben. Notdienst verfügbar. Jetzt anrufen!",
  alternates: {
    canonical: "/leistungen/dachreparatur",
  },
}

const relatedServices = [
  { title: "Dachmontage", href: "/leistungen/dachmontage" },
  { title: "Abdichtung", href: "/leistungen/abdichtung" },
  { title: "Dachentwässerung", href: "/leistungen/dachentwaesserung" },
  { title: "Schornstein", href: "/leistungen/schornstein" },
]

const benefits = [
  "Schneller Notfall-Service bei akuten Schäden",
  "Gründliche Schadensanalyse vor jeder Reparatur",
  "Verwendung von Original-Ersatzmaterialien deutscher Hersteller",
  "Dauerhafte Reparaturen statt kurzfristiger Flickarbeit",
  "Dokumentation für Versicherungsansprüche",
  "Transparente Preise ohne Überraschungen",
  "Gewährleistung auf alle Reparaturarbeiten",
]

const materials = [
  "Original-Dachziegel",
  "Reparaturmörtel",
  "Dachdichtmassen",
  "Bleianschlüsse",
  "Firsthauben",
]

export default function DachreparaturPage() {
  return (
    <ServicePageTemplate
      title="Dachreparatur"
      slug="dachreparatur"
      description="Schnelle und zuverlässige Reparaturen bei Sturmschäden, Undichtigkeiten und altersbedingtem Verschleiß. Wir sind Ihr Partner für alle Dachreparaturen."
      heroImage="/images/img-20250729-wa0054-1.jpg"
      benefits={benefits}
      materials={materials}
      relatedServices={relatedServices}
      content={
        <>
          <h2 className="text-xl font-semibold text-foreground">
            Schnelle Hilfe bei Dachschäden
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Ein beschädigtes Dach kann schnell zu größeren Problemen führen –
            von Wasserschäden bis hin zu Schimmelbildung. Bei Dachbau Pro
            reagieren wir schnell und zuverlässig auf alle Arten von Dachschäden.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Typische Reparaturarbeiten
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Sturmschäden:</span>
              Ersetzen von verschobenen oder zerbrochenen Dachziegeln
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Undichtigkeiten:</span>
              Lokalisierung und Behebung von Lecks im Dach
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Firstsanierung:</span>
              Erneuerung beschädigter First- und Gratzziegel
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Moosentfernung:</span>
              Professionelle Reinigung und Schutzbehandlung
            </li>
            <li className="flex items-start gap-2">
              <span className="font-medium text-foreground">Anschlussarbeiten:</span>
              Reparatur von Wandanschlüssen und Kehlen
            </li>
          </ul>
          <h3 className="mt-8 text-lg font-semibold text-foreground">
            Notdienst bei akuten Schäden
          </h3>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Bei akuten Dachschäden, etwa nach einem Sturm, sind wir schnell für Sie
            da. Wir sichern Ihr Dach provisorisch ab und führen die notwendigen
            Reparaturen durch, damit Ihr Zuhause wieder geschützt ist.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Bei Versicherungsfällen unterstützen wir Sie mit einer detaillierten
            Dokumentation der Schäden und einem professionellen Kostenvoranschlag
            für Ihre Versicherung.
          </p>
        </>
      }
    />
  )
}
