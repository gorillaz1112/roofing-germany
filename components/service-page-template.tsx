import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Phone, BadgeCheck } from "lucide-react"

interface ServicePageTemplateProps {
  title: string
  description: string
  heroImage: string
  benefits: string[]
  content: React.ReactNode
  materials?: string[]
  relatedServices: Array<{
    title: string
    href: string
  }>
}

export function ServicePageTemplate({
  title,
  description,
  heroImage,
  benefits,
  content,
  materials,
  relatedServices,
}: ServicePageTemplateProps) {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-sm text-secondary-foreground/60">
                <li>
                  <Link href="/" className="hover:text-secondary-foreground">
                    Startseite
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/leistungen" className="hover:text-secondary-foreground">
                    Leistungen
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-secondary-foreground">{title}</li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
              {description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/kontakt">
                  Kostenlos anfragen
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent"
              >
                <a href="tel:+491634679816">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid items-start gap-12 lg:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:sticky lg:top-24">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div>
                <div className="prose prose-gray max-w-none">
                  {content}
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground">
                    Ihre Vorteile bei uns
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {materials && materials.length > 0 && (
                  <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <BadgeCheck className="h-6 w-6 text-primary" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-foreground">
                        Premium-Materialien aus Deutschland
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Wir verwenden ausschließlich hochwertige Materialien von führenden deutschen Herstellern:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {materials.map((material) => (
                        <span
                          key={material}
                          className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Weitere Leistungen
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary hover:bg-card/80"
                >
                  <span className="font-medium text-foreground">
                    {service.title}
                  </span>
                  <ArrowRight className="h-4 w-4 text-primary" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-primary-foreground md:text-3xl">
              Interesse an {title}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
              Kontaktieren Sie uns noch heute für eine kostenlose Beratung und
              ein unverbindliches Angebot. Wir freuen uns auf Ihre Anfrage!
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontakt">
                  Jetzt Anfrage senden
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+491634679816">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  +49 163 4679816
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
