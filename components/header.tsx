import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
]

const navLinks = [
  { name: "Startseite", href: "/" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Impressum", href: "/impressum" },
  { name: "Datenschutz", href: "/datenschutz" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo + text */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-4 -mb-12"
        >
          {/* Big 2× logo */}
          <div className="relative h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40">
            <Image
              src="/logo-ghermania.svg"
              alt="Dach Service 24 Plus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Original text layout */}
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-foreground">
              Dach Service
            </span>
            <span className="text-xs font-medium text-primary">24 Plus</span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Hauptnavigation">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Startseite
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Leistungen
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {services.map((service) => (
                <DropdownMenuItem key={service.href} asChild>
                  <Link href={service.href} className="w-full cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/ueber-uns"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Über uns
          </Link>

          <Link
            href="/kontakt"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+491634679816"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>+49 163 4679816</span>
          </a>

          <Button asChild>
            <Link href="/kontakt">Kostenlose Anfrage</Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Menü öffnen">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full max-w-sm">
            <SheetTitle className="sr-only">Navigationsmenü</SheetTitle>

            <nav className="flex flex-col gap-4 pt-8" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}

              <div className="my-4 h-px bg-border" />

              <p className="text-sm font-semibold text-muted-foreground">
                Unsere Leistungen
              </p>

              {services.map((service) => (
                <SheetClose asChild key={service.href}>
                  <Link
                    href={service.href}
                    className="text-base text-foreground hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </SheetClose>
              ))}

              <div className="my-4 h-px bg-border" />

              <a
                href="tel:+491634679816"
                className="flex items-center gap-2 text-lg font-medium text-primary"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                +49 163 4679816
              </a>

              <SheetClose asChild>
                <Button asChild className="mt-4 w-full">
                  <Link href="/kontakt">Kostenlose Anfrage</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
