import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const services = [
  { name: "Dachmontage", href: "/leistungen/dachmontage" },
  { name: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { name: "Abdichtung", href: "/leistungen/abdichtung" },
  { name: "Zimmerei", href: "/leistungen/zimmerei" },
  { name: "Dachentwässerung", href: "/leistungen/dachentwaesserung" },
  { name: "Dachausbau", href: "/leistungen/dachausbau" },
  { name: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { name: "Dachfenster", href: "/leistungen/dachfenster" },
]

const quickLinks = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Kontakt", href: "/kontakt" },
]

const legalLinks = [
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary-foreground"
                  aria-hidden="true"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">
                  Dach Service
                </span>
                <span className="text-xs font-medium text-primary">24 Plus</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary-foreground/80">
              Dach Service 24 Plus bietet zuverlässige Dachlösungen mit qualitativ
              hochwertigem Handwerk und hervorragendem Kundenservice in Wesseling
              und Umgebung.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Schnellzugriff
            </h3>
            <nav aria-label="Schnellzugriff">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Leistungen
            </h3>
            <nav aria-label="Leistungen">
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </h3>
            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://maps.google.com/?q=Industriestraße+68,+50389+Wesseling"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>Industriestraße 68<br />50389 Wesseling</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+491634679816"
                    className="flex items-center gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    +49 163 4679816
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:dachservice24plus@gmail.com"
                    className="flex items-center gap-3 text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    dachservice24plus@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-secondary-foreground/20 pt-8 md:flex-row">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Dach Service 24 Plus. Alle Rechte vorbehalten.
          </p>
          <nav aria-label="Rechtliche Links">
            <ul className="flex gap-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
