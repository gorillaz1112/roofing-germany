import Link from "next/link"
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
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
            <span className="text-lg font-bold leading-tight text-foreground">
              Dach Service
            </span>
            <span className="text-xs font-medium text-primary">24 Plus</span>
          </div>
        </Link>

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
