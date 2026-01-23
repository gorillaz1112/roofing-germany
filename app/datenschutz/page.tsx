import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung von Dach Service 24 Plus. Informationen zur Erhebung und Verarbeitung personenbezogener Daten.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Datenschutzerklärung
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="prose prose-gray max-w-none">
              <h2 className="text-xl font-semibold text-foreground">
                1. Datenschutz auf einen Blick
              </h2>
              
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Allgemeine Hinweise
              </h3>
              <p className="mt-4 text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was
                mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
                besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Ausführliche Informationen
                zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Datenerfassung auf dieser Website
              </h3>
              <p className="mt-4 font-medium text-foreground">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </p>
              <p className="mt-2 text-muted-foreground">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
                „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung
                entnehmen.
              </p>

              <p className="mt-4 font-medium text-foreground">
                Wie erfassen wir Ihre Daten?
              </p>
              <p className="mt-2 text-muted-foreground">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
                ein Kontaktformular eingeben.
              </p>
              <p className="mt-2 text-muted-foreground">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
                Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
                allem technische Daten (z. B. Internetbrowser, Betriebssystem oder
                Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
                automatisch, sobald Sie diese Website betreten.
              </p>

              <p className="mt-4 font-medium text-foreground">
                Wofür nutzen wir Ihre Daten?
              </p>
              <p className="mt-2 text-muted-foreground">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
                der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
                Nutzerverhaltens verwendet werden.
              </p>

              <p className="mt-4 font-medium text-foreground">
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </p>
              <p className="mt-2 text-muted-foreground">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
                Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
                erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
                dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung
                jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
                Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                2. Hosting
              </h2>
              <p className="mt-4 text-muted-foreground">
                Wir hosten die Inhalte unserer Website bei Vercel Inc. Vercel ist ein
                Dienst der Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
              </p>
              <p className="mt-2 text-muted-foreground">
                Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Datenschutz
              </h3>
              <p className="mt-4 text-muted-foreground">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
                sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
                entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerklärung.
              </p>
              <p className="mt-2 text-muted-foreground">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
                Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
                persönlich identifiziert werden können. Die vorliegende
                Datenschutzerklärung erläutert, welche Daten wir erheben und wofür
                wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
                geschieht.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Hinweis zur verantwortlichen Stelle
              </h3>
              <p className="mt-4 text-muted-foreground">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <address className="mt-4 not-italic text-muted-foreground">
                <p className="font-semibold text-foreground">Dach Service 24 Plus</p>
                <p>Industriestraße 68</p>
                <p>50389 Wesseling</p>
                <p className="mt-2">
                  Telefon:{" "}
                  <a href="tel:+491634679816" className="text-primary hover:underline">
                    +49 163 4679816
                  </a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:dachservice24plus@gmail.com"
                    className="text-primary hover:underline"
                  >
                    dachservice24plus@gmail.com
                  </a>
                </p>
              </address>
              <p className="mt-4 text-muted-foreground">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die
                allein oder gemeinsam mit anderen über die Zwecke und Mittel der
                Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
                o. Ä.) entscheidet.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Speicherdauer
              </h3>
              <p className="mt-4 text-muted-foreground">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
                bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
                ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
                zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
                wir keine anderen rechtlich zulässigen Gründe für die Speicherung
                Ihrer personenbezogenen Daten haben; in diesem Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <p className="mt-4 text-muted-foreground">
                Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
                Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
                jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
                erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="mt-4 text-muted-foreground">
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
                Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
                Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
                oder des Orts des mutmaßlichen Verstoßes zu.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                4. Datenerfassung auf dieser Website
              </h2>
              
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Server-Log-Dateien
              </h3>
              <p className="mt-4 text-muted-foreground">
                Der Provider der Seiten erhebt und speichert automatisch Informationen
                in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns
                übermittelt. Dies sind:
              </p>
              <ul className="mt-4 list-disc pl-6 text-muted-foreground">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
                vorgenommen.
              </p>
              <p className="mt-2 text-muted-foreground">
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
                der technisch fehlerfreien Darstellung und der Optimierung seiner
                Website – hierzu müssen die Server-Log-Dateien erfasst werden.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-foreground">
                Anfrage per E-Mail, Telefon oder WhatsApp
              </h3>
              <p className="mt-4 text-muted-foreground">
                Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird Ihre
                Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
                (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter.
              </p>
              <p className="mt-2 text-muted-foreground">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
                unserem berechtigten Interesse an der effektiven Bearbeitung der an
                uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                5. Analyse-Tools und Werbung
              </h2>
              <p className="mt-4 text-muted-foreground">
                Diese Website nutzt Vercel Analytics zur statistischen Auswertung der
                Besucherzugriffe. Vercel Analytics ist ein datenschutzfreundliches
                Analyse-Tool, das keine persönlichen Daten speichert und keine Cookies
                verwendet. Weitere Informationen finden Sie in der
                Datenschutzerklärung von Vercel.
              </p>

              <h2 className="mt-8 text-xl font-semibold text-foreground">
                6. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="mt-4 text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie
                an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.
                Eine verschlüsselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von "http://" auf "https://" wechselt und an
                dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="mt-2 text-muted-foreground">
                Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
                Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>

              <p className="mt-8 text-sm text-muted-foreground">
                Stand: Januar 2026
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
