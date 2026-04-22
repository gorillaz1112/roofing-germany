import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqJsonLd, jsonLdScript } from '@/lib/seo/jsonld';
import { Reveal } from '@/components/motion/reveal';

export type FaqItem = { question: string; answer: string };

// Server component - renders SEO-indexable accordion content + FAQPage JSON-LD
export function Faq({
  items,
  title = 'Häufig gestellte Fragen',
  subtitle,
  id = 'faq',
}: {
  items: FaqItem[];
  title?: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <section className="py-16 md:py-24" id={id} aria-labelledby={`${id}-title`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqJsonLd(items))}
      />
      <div className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="text-center">
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
              FAQ
              <span className="h-px w-8 bg-primary" aria-hidden="true" />
            </p>
            <h2
              id={`${id}-title`}
              className="text-h2 font-bold tracking-tight text-foreground"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 w-full space-y-3"
          >
            {items.map((item, i) => (
              <AccordionItem
                key={item.question}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/40 data-[state=open]:shadow-[var(--shadow-brand-sm)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline data-[state=open]:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
