import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Menu,
  ChevronDown,
  Clock,
  Siren,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/nav-link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SITE } from "@/lib/seo/site";

// Single source of truth for services nav
const services = [
  { name: "Alle Leistungen", href: "/leistungen" },
  { name: "Dachmontage", href: "/leistungen/dachmontage" },
  { name: "Dachreparatur", href: "/leistungen/dachreparatur" },
  { name: "Abdichtung", href: "/leistungen/abdichtung" },
  { name: "Zimmerei", href: "/leistungen/zimmerei" },
  { name: "Dachentwässerung", href: "/leistungen/dachentwaesserung" },
  { name: "Dachausbau", href: "/leistungen/dachausbau" },
  { name: "Dachisolierung", href: "/leistungen/dachisolierung" },
  { name: "Dachfenster", href: "/leistungen/dachfenster" },
  { name: "Schornstein", href: "/leistungen/schornstein" },
];

const navLinks = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Notfall", href: "/notfall" },
  { name: "Kontakt", href: "/kontakt" },

  { name: "Datenschutz", href: "/datenschutz" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      {/* Thin top utility bar - hidden on mobile to save vertical space */}
      <div className="hidden border-b border-border/60 bg-secondary text-secondary-foreground lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-5 text-secondary-foreground/70">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Mo–Fr 07:00–18:00 Uhr
            </span>
            <span className="flex items-center gap-1.5">
              {SITE.address.city} · Köln · Bonn · Region
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/notfall"
              className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 font-semibold text-primary-foreground shadow-[var(--shadow-brand-sm)] transition-transform hover:scale-[1.03]"
            >
              <Siren className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
              24h Notdienst
            </Link>
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 text-secondary-foreground/90 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Fixed row height so the oversized mobile logo can overflow without pushing the header taller */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 overflow-visible px-3 sm:h-20 sm:gap-4 sm:px-4 lg:h-24">
        {/* Logo – intentionally ~3x taller than the header row on mobile so it reads at a glance; overflows visually but the header bar height stays fixed */}
        <Link
          href="/"
          aria-label="Dachbau Pro – Startseite"
          className="relative z-50 flex shrink-0 items-center"
        >
          <Image
            src="/images/de-logo.png"
            alt="Dachbau Pro Dachdeckermeister Wesseling"
            width={260}
            height={96}
            priority
            fetchPriority="high"
            className="h-32 w-auto sm:h-14 md:h-16 lg:h-20"
            sizes="(max-width: 640px) 380px, (max-width: 1024px) 210px, 260px"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Hauptnavigation"
        >
          <NavLink href="/" exact>
            Startseite
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger className="group relative inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground data-[state=open]:text-foreground">
              Leistungen
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" sideOffset={12} className="w-56">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link
                    href={service.href}
                    className="w-full cursor-pointer focus:bg-primary/10 focus:text-primary"
                  >
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/ueber-uns">Über uns</NavLink>
          <NavLink
            href="/notfall"
            className="text-primary hover:text-primary-deep"
          >
            <Siren className="mr-1 h-3.5 w-3.5" aria-hidden="true" />
            Notfall
          </NavLink>
          <NavLink href="/kontakt">Kontakt</NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="group flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>{SITE.phone}</span>
          </a>

          <Button asChild size="lg" className="shadow-[var(--shadow-brand-sm)]">
            <Link href="/kontakt">
              Kostenlose Anfrage
              <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full max-w-sm overflow-y-auto"
          >
            <SheetTitle className="sr-only">Navigationsmenü</SheetTitle>

            <div className="flex flex-col gap-6 pt-6">
              {/* Emergency CTA pinned to top of the drawer */}
              <SheetClose asChild>
                <Link
                  href="/notfall"
                  className="flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-[var(--shadow-brand-sm)]"
                >
                  <span className="flex items-center gap-2 font-semibold">
                    <Siren
                      className="h-5 w-5 animate-pulse"
                      aria-hidden="true"
                    />
                    24h Dach-Notdienst
                  </span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </SheetClose>

              <nav
                className="flex flex-col gap-1"
                aria-label="Mobile Navigation"
              >
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                    >
                      {link.name}
                      <ArrowRight
                        className="h-4 w-4 opacity-40"
                        aria-hidden="true"
                      />
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              <div className="h-px bg-border" />

              <div>
                <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Unsere Leistungen
                </p>
                <div className="flex flex-col">
                  {services.map((service) => (
                    <SheetClose asChild key={service.href}>
                      <Link
                        href={service.href}
                        className="rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex flex-col gap-3">
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-base font-medium text-foreground"
                >
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  {SITE.phone}
                </a>

                <SheetClose asChild>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/kontakt">Kostenlose Anfrage</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
