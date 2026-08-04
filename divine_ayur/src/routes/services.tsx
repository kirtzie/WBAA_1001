import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, CheckCircle2, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clinic, services, whatsappHref } from "@/config/site";

const title = "Treatments & Services | Ayurveda, Panchkarma & Physiotherapy in Rohtak";
const description =
  "Explore all treatments at Divine Ayurveda & Physiotherapy Clinic Rohtak: Panchkarma, physiotherapy, spine and knee care, arthritis, slip disc, sciatica, skin disorders, infertility, Swarna Prashan and more.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${clinic.siteUrl}/services` }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-deep py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Treatments</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Twenty focused treatment programmes
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Each programme combines Ayurvedic medicine, therapy and lifestyle guidance — designed for
            your condition and reviewed at every follow-up.
          </p>
          <nav aria-label="Treatments" className="mt-9 flex flex-wrap gap-2">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-medium transition-colors hover:border-gold hover:text-gold"
              >
                {service.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="space-y-24">
          {services.map((service, index) => (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-32"
              aria-labelledby={`${service.slug}-title`}
            >
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <Reveal>
                  <figure className="overflow-hidden rounded-[2rem] shadow-lift">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="aspect-[4/3] size-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </figure>
                </Reveal>
                <Reveal delay={0.1}>
                  <SectionHeading
                    align="left"
                    eyebrow={`Treatment ${String(index + 1).padStart(2, "0")}`}
                    title={service.title}
                    subtitle={service.description}
                  />
                  <h3 id={`${service.slug}-title`} className="sr-only">
                    {service.title}
                  </h3>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <Accordion type="single" collapsible className="mt-7 space-y-2">
                    {service.faqs.map((faq, i) => (
                      <AccordionItem
                        key={faq.q}
                        value={`${service.slug}-${i}`}
                        className="rounded-2xl border border-border bg-card px-5"
                      >
                        <AccordionTrigger className="text-left text-sm font-medium text-deep">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild className="rounded-full">
                      <Link to="/appointment" search={{ treatment: service.title }}>
                        <CalendarDays className="size-4" aria-hidden /> Book Appointment
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <a
                        href={whatsappHref(
                          `Hello ${clinic.name}, I would like to know more about ${service.title}.`,
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle className="size-4" aria-hidden /> Ask on WhatsApp
                      </a>
                    </Button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
