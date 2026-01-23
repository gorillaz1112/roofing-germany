import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Dach Service 24 Plus in Wesseling. Telefon, E-Mail und Adresse. Kostenlose Beratung und Angebote für alle Dacharbeiten.",
  alternates: {
    canonical: "/kontakt",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 163 4679816",
    href: "tel:+491634679816",
    description: "Rufen Sie uns an für eine schnelle Beratung",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "dachservice24plus@gmail.com",
    href: "mailto:dachservice24plus@gmail.com",
    description: "Schreiben Sie uns Ihre Anfrage",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Industriestraße 68, 50389 Wesseling",
    href: "https://maps.google.com/?q=Industriestraße+68,+50389+Wesseling",
    description: "Unser Standort in Wesseling",
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    content: "Mo-Fr: 07:00 - 18:00 Uhr",
    href: null,
    description: "Wir sind für Sie erreichbar",
  },
]

const serviceAreas = [
  "Wesseling",
  "Köln",
  "Bonn",
  "Brühl",
  "Hürth",
  "Frechen",
  "Bergheim",
  "Pulheim",
  "Erftstadt",
  "Bornheim",
  "Troisdorf",
  "Siegburg",
]

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
              Kontakt
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              Haben Sie Fragen oder benötigen Sie ein Angebot? Kontaktieren Sie
              uns – wir beraten Sie gerne persönlich und unverbindlich.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <Card key={item.title} className="text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                      <item.icon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <h2 className="mt-4 font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-3 block font-medium text-foreground hover:text-primary"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="mt-3 font-medium text-foreground">
                        {item.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  So erreichen Sie uns
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Unser Büro befindet sich in Wesseling, von wo aus wir schnell
                  in der gesamten Region erreichbar sind. Für eine persönliche
                  Beratung vor Ort vereinbaren Sie gerne einen Termin.
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Kostenlose Anfahrt
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      In Wesseling und Umgebung ist die Anfahrt für Sie kostenlos.
                      Wir kommen zu Ihnen und beraten Sie direkt vor Ort.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Unverbindliches Angebot
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Nach der Besichtigung erhalten Sie ein detailliertes und
                      unverbindliches Angebot. Keine versteckten Kosten.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Schnelle Reaktion
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Wir antworten in der Regel innerhalb von 24 Stunden auf
                      Ihre Anfrage und vereinbaren zeitnah einen Besichtigungstermin.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Unser Einzugsgebiet
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Wir sind in Wesseling und der gesamten Region Köln/Bonn für
                  Sie im Einsatz. Zu unseren Einsatzgebieten gehören unter anderem:
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-muted-foreground">
                  Ihr Ort ist nicht dabei? Fragen Sie uns – wir sind flexibel und
                  kommen auch gerne in andere Regionen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Standort
            </h2>
            <div className="mt-8 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5!2d6.9744!3d50.8269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf235d3c0aa8ed%3A0x4f8d6f6c8a8b8b8b!2sIndustriestraße%2068%2C%2050389%20Wesseling!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Dach Service 24 Plus in Wesseling"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              WhatsApp Kontakt
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Sie möchten uns schnell und unkompliziert erreichen? Schreiben Sie
              uns einfach per WhatsApp – wir antworten so schnell wie möglich!
            </p>
            <a
              href="https://wa.me/491634679816?text=Hallo!%20Ich%20interessiere%20mich%20für%20Ihre%20Dachdeckerleistungen.%20Können%20Sie%20mir%20bitte%20ein%20Angebot%20machen?"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Per WhatsApp kontaktieren
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
