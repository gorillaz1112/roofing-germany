import Link from 'next/link';
import { Siren, Phone, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/seo/site';

// Red emergency banner strip - used on the home page and as a sticky element elsewhere
export function NotfallStrip() {
  return (
    <section
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
      aria-label="24 Stunden Dach-Notdienst"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgb(239_28_36)_0%,rgb(196_18_24)_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-noise"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center md:py-12">
        <div className="flex items-start gap-4">
          <div className="relative mt-0.5">
            <span
              className="absolute inset-0 animate-[pulse-brand_2s_ease-in-out_infinite] rounded-full bg-white/40"
              aria-hidden="true"
            />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <Siren className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              Notdienst rund um die Uhr
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
              Sturmschaden oder Leckage am Dach?
            </h2>
            <p className="mt-1 max-w-xl text-primary-foreground/90">
              Wir sind 24/7 für Sie erreichbar – in Wesseling, Köln, Bonn und
              Umgebung.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-primary shadow-lg transition-transform hover:scale-[1.03]"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link
            href="/notfall"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Mehr zum Notdienst
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
