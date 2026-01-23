import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum von Dach Service 24 Plus. Angaben gemäß § 5 TMG und Kontaktdaten.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Impressum
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <address className="mt-4 not-italic text-muted-foreground">
                <p className="font-semibold text-foreground">Dach Service 24 Plus</p>
                <p>Industriestraße 68</p>
                <p>50389 Wesseling</p>
                <p>Deutschland</p>
              </address>

              <h2 className="mt-8 text-xl font-semibold text-foreground">Kontakt</h2>
              <p className="mt-4 text-muted-foreground">
                Telefon:{" "}
                <a href="tel:+491634679816" className="text-primary hover:underline">
                  +49 163 4679816
                </a>
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:dachservice24plus@gmail.com"
                  className="text-primary hover:underline"
                >
                  dachservice24plus@gmail.com
                </a>
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Berufsbezeichnung
              </h2>
              <p className="mt-4 text-muted-foreground">
                Dachdeckermeisterbetrieb / Zimmerei
                <br />
                Berufsbezeichnung verliehen in: Deutschland
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Zuständige Kammer
              </h2>
              <p className="mt-4 text-muted-foreground">
                Handwerkskammer zu Köln
                <br />
                Heumarkt 12
                <br />
                50667 Köln
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mt-4 text-muted-foreground">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Haftung für Inhalte
              </h2>
              <p className="mt-4 text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
                auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
                §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                übermittelte oder gespeicherte fremde Informationen zu überwachen oder
                nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className="mt-4 text-muted-foreground">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                von entsprechenden Rechtsverletzungen werden wir diese Inhalte
                umgehend entfernen.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Haftung für Links
              </h2>
              <p className="mt-4 text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
                der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-4 text-muted-foreground">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
                ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                Urheberrecht
              </h2>
              <p className="mt-4 text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
                sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4 text-muted-foreground">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
                eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
