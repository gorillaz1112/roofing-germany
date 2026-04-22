import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Reveal } from '@/components/motion/reveal';
import { StaggerGrid, StaggerItem } from '@/components/motion/stagger-grid';
import { HoverCard } from '@/components/motion/hover-card';
import { Phone, Mail, MapPin, Clock, Siren, MessageCircle } from 'lucide-react';
import { SITE } from '@/lib/seo/site';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/seo/jsonld';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Kontaktieren Sie Dachbau Pro in Wesseling. Telefon +49 163 4679816, E-Mail, Adresse und Öffnungszeiten. Kostenlose Beratung und Angebote für alle Dacharbeiten in Wesseling, Köln und Bonn.',
  alternates: { canonical: '/kontakt' },
  other: {
    // Preconnect Google Maps only on the page that actually embeds it
    'link:preconnect': 'https://www.google.com',
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefon',
    content: SITE.phone,
    href: SITE.phoneHref,
    description: 'Schnelle telefonische Beratung',
  },
  {
    icon: Mail,
    title: 'E-Mail',
    content: SITE.email,
    href: `mailto:${SITE.email}`,
    description: 'Antwort innerhalb 24 Stunden',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
    )}`,
    description: 'Unser Standort',
  },
  {
    icon: Clock,
    title: 'Öffnungszeiten',
    content: 'Mo–Fr: 07:00–18:00 Uhr',
    href: null,
    description: 'Notdienst 24/7',
  },
];

export default function KontaktPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Startseite', url: '/' },
    { name: 'Kontakt', url: '/kontakt' },
  ]);

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
        />

        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-secondary py-16 text-secondary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-grid-red opacity-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(15_13_13/0.35)_0%,rgb(15_13_13/0.9)_100%)]"
          />

          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                Wir sind für Sie da
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-tight md:text-hero">
                Nehmen Sie <span className="text-gradient-brand">Kontakt</span>{' '}
                auf
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lead leading-relaxed text-secondary-foreground/85">
                Haben Sie Fragen oder benötigen Sie ein Angebot? Wir beraten
                Sie gerne persönlich und unverbindlich – telefonisch, per
                E-Mail oder direkt vor Ort.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact cards */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <StaggerGrid className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => {
                const content = (
                  <div className="group relative flex h-full flex-col items-center rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50 hover:shadow-[var(--shadow-brand-sm)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h2 className="mt-4 font-display font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="mt-3 text-base font-medium text-primary transition-colors group-hover:text-primary-deep">
                      {item.content}
                    </p>
                  </div>
                );
                return (
                  <StaggerItem key={item.title}>
                    <HoverCard className="h-full">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="block h-full"
                        >
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </StaggerGrid>
          </div>
        </section>

        {/* Split info */}
        <section className="bg-muted/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <h2 className="text-h2 font-bold tracking-tight text-foreground">
                    So erreichen Sie uns
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Unser Büro befindet sich in Wesseling, von wo aus wir
                    schnell in der gesamten Region erreichbar sind. Für eine
                    persönliche Beratung vor Ort vereinbaren Sie gerne einen
                    Termin.
                  </p>
                  <div className="mt-8 space-y-6">
                    {[
                      {
                        title: 'Kostenlose Anfahrt',
                        body: 'In Wesseling und Umgebung ist die Anfahrt kostenlos. Wir kommen zu Ihnen und beraten direkt vor Ort.',
                      },
                      {
                        title: 'Unverbindliches Angebot',
                        body: 'Nach der Besichtigung erhalten Sie ein detailliertes Angebot – transparent und ohne versteckte Kosten.',
                      },
                      {
                        title: 'Schnelle Reaktion',
                        body: 'Wir antworten in der Regel innerhalb von 24 Stunden und vereinbaren zeitnah einen Termin.',
                      },
                    ].map((card) => (
                      <div
                        key={card.title}
                        className="rounded-xl border border-border bg-card p-5"
                      >
                        <h3 className="font-semibold text-foreground">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-muted-foreground">{card.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <h2 className="text-h2 font-bold tracking-tight text-foreground">
                    Unser Einzugsgebiet
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Wir sind in Wesseling und der gesamten Region Köln/Bonn für
                    Sie im Einsatz. Zu unseren Einsatzgebieten gehören unter
                    anderem:
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {SITE.areaServed.map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-muted-foreground">
                    Ihr Ort ist nicht dabei? Fragen Sie uns – wir sind flexibel
                    und kommen gerne auch in andere Regionen.
                  </p>

                  <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-5">
                    <div className="flex items-start gap-3">
                      <Siren
                        className="mt-0.5 h-6 w-6 shrink-0 animate-pulse text-primary"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          24/7 Dach-Notdienst
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Bei Sturmschaden oder undichtem Dach erreichen Sie
                          uns rund um die Uhr unter{' '}
                          <a
                            href={SITE.phoneHref}
                            className="font-semibold text-primary hover:underline"
                          >
                            {SITE.phone}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <h2 className="text-center text-h2 font-bold tracking-tight text-foreground">
                Unser Standort
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5!2d6.9744!3d50.8269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf235d3c0aa8ed%3A0x4f8d6f6c8a8b8b8b!2sIndustriestraße%2068%2C%2050389%20Wesseling!5e0!3m2!1sde!2sde!4v1234567890"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Standort Dachbau Pro in Wesseling"
                  className="w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div className="mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                <MessageCircle className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="text-h2 font-bold tracking-tight">
                Per WhatsApp erreichbar
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                Schnell und unkompliziert: Schreiben Sie uns einfach per
                WhatsApp – wir antworten so schnell wie möglich.
              </p>
              <a
                href="https://wa.me/491634679816?text=Hallo!%20Ich%20interessiere%20mich%20für%20Ihre%20Dachdeckerleistungen.%20Können%20Sie%20mir%20bitte%20ein%20Angebot%20machen?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
