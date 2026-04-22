import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';
import { StaggerGrid, StaggerItem } from '@/components/motion/stagger-grid';
import { HoverCard } from '@/components/motion/hover-card';
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  BadgeCheck,
  Home,
  ChevronRight,
} from 'lucide-react';
import { SITE } from '@/lib/seo/site';
import {
  breadcrumbJsonLd,
  serviceJsonLd,
  jsonLdScript,
} from '@/lib/seo/jsonld';

interface ServicePageTemplateProps {
  /** Service title (H1) */
  title: string;
  /** Service slug - matches the app/leistungen/{slug}/ folder */
  slug: string;
  /** Lead description shown under H1 */
  description: string;
  /** Hero/above-the-fold image path in /public */
  heroImage: string;
  /** Bullet list of customer benefits */
  benefits: string[];
  /** Rich body content - usually <p>, <h3>, <ul> */
  content: React.ReactNode;
  /** Optional premium materials tag cloud */
  materials?: string[];
  /** Cards shown at the bottom linking to sibling services */
  relatedServices: Array<{
    title: string;
    href: string;
  }>;
}

export function ServicePageTemplate({
  title,
  slug,
  description,
  heroImage,
  benefits,
  content,
  materials,
  relatedServices,
}: ServicePageTemplateProps) {
  const breadcrumbs = breadcrumbJsonLd([
    { name: 'Startseite', url: '/' },
    { name: 'Leistungen', url: '/leistungen' },
    { name: title, url: `/leistungen/${slug}` },
  ]);

  const service = serviceJsonLd({
    name: title,
    description,
    slug,
    image: heroImage,
  });

  return (
    <>
      <Header />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(service)}
        />
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
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-1.5 text-sm text-secondary-foreground/60">
                  <li>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                    >
                      <Home className="h-3.5 w-3.5" aria-hidden="true" />
                      Startseite
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </li>
                  <li>
                    <Link
                      href="/leistungen"
                      className="transition-colors hover:text-primary"
                    >
                      Leistungen
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="h-3.5 w-3.5" />
                  </li>
                  <li className="text-secondary-foreground">{title}</li>
                </ol>
              </nav>
            </Reveal>

            <Reveal delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                Leistung · Dachbau Pro
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 max-w-3xl text-balance font-display text-h1 font-bold leading-[1.08] tracking-tight md:text-hero">
                {title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lead leading-relaxed text-secondary-foreground/85">
                {description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  asChild
                  className="shadow-[var(--shadow-brand)]"
                >
                  <Link href="/kontakt">
                    Kostenlos anfragen
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white/30 bg-white/5 text-secondary-foreground backdrop-blur hover:bg-white/10"
                >
                  <a href={SITE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    Jetzt anrufen
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl lg:sticky lg:top-28">
                  <Image
                    src={heroImage}
                    alt={`${title} – Dachbau Pro Wesseling`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-primary/25 blur-2xl"
                  />
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary">
                    {content}
                  </div>

                  <div className="mt-10 rounded-2xl border border-border bg-card p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Ihre Vorteile bei uns
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {materials && materials.length > 0 && (
                    <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <BadgeCheck
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          Premium-Materialien aus Deutschland
                        </h3>
                      </div>
                      <p className="mb-4 text-sm text-muted-foreground">
                        Wir verwenden ausschließlich hochwertige Materialien
                        von führenden deutschen Herstellern:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {materials.map((material) => (
                          <span
                            key={material}
                            className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-primary/20"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="border-t border-border bg-muted/40 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight text-foreground">
                Weitere Leistungen
              </h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Entdecken Sie unser komplettes Leistungsspektrum rund ums Dach.
              </p>
            </Reveal>

            <StaggerGrid className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((service) => (
                <StaggerItem key={service.href}>
                  <HoverCard>
                    <Link
                      href={service.href}
                      className="group flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary hover:shadow-[var(--shadow-brand-sm)]"
                    >
                      <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                        {service.title}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative isolate overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
          />
          <div className="mx-auto max-w-5xl px-4 text-center">
            <Reveal>
              <h2 className="text-h2 font-bold tracking-tight">
                Interesse an {title}?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/90">
                Kontaktieren Sie uns für eine kostenlose Beratung und ein
                unverbindliches Angebot.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontakt">
                    Jetzt Anfrage senden
                    <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <a href={SITE.phoneHref}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                    {SITE.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
