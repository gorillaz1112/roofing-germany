import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum-Seite – Rechtliche Angaben werden vom Website-Inhaber noch bereitgestellt.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(15_13_13/0.35)_0%,rgb(15_13_13/0.9)_100%)]"
          />
          <div className="mx-auto max-w-7xl px-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              Rechtliches
            </span>
            <h1 className="mt-6 font-display text-h1 font-bold tracking-tight md:text-hero">
              Impressum
            </h1>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4">
            <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-12">
              <p className="text-xl font-semibold text-foreground">
                Die Angaben zum Impressum werden vom Inhaber der Website zu
                einem späteren Zeitpunkt bereitgestellt.
              </p>
              <p className="mt-6 text-muted-foreground">
                <strong>Hinweis:</strong> Aktuell liegen uns keine rechtlichen
                Pflichtangaben (wie Anbieterinformationen oder Kontakt) vor.
                Das rechtlich vorgeschriebene Impressum wird ergänzt, sobald
                die Daten vom Eigentümer übermittelt wurden.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
