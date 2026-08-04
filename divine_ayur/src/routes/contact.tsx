import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import {
  clinic,
  defaultWhatsappMessage,
  fullAddress,
  telHref,
  whatsappHref,
} from "@/config/site";

const title = "Contact & Directions | Divine Ayurveda & Physiotherapy Clinic, Rohtak";
const description =
  "Visit Divine Ayurveda & Physiotherapy Clinic at Sukh Pura Chowk, Rajendra Nagar, Rohtak. Call +91 98120 77194, get directions on Google Maps, or book an appointment online.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${clinic.siteUrl}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-deep py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Visit us in Rajendra Nagar, Rohtak
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Easy to reach from anywhere in the city, with parking nearby. Call ahead to avoid waiting.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <h2 className="font-display text-lg font-semibold text-deep">Clinic details</h2>
                <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>{fullAddress}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="size-5 shrink-0 text-primary" aria-hidden />
                    <a href={telHref} className="transition-colors hover:text-deep">
                      {clinic.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="size-5 shrink-0 text-primary" aria-hidden />
                    <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-deep">
                      {clinic.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <span>
                      {clinic.hours.map((h) => (
                        <span key={h.days} className="block">
                          <strong className="font-medium text-foreground">{h.days}:</strong> {h.time}
                        </span>
                      ))}
                    </span>
                  </li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild className="rounded-full">
                    <a href={clinic.mapsLink} target="_blank" rel="noreferrer">
                      <Navigation className="size-4" aria-hidden /> Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="rounded-full bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
                  >
                    <a href={whatsappHref(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" aria-hidden /> WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  src={clinic.mapsEmbed}
                  title="Divine Ayurveda & Physiotherapy Clinic on Google Maps"
                  className="h-80 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-lift sm:p-9">
              <SectionHeading
                align="left"
                eyebrow="Book online"
                title="Request an appointment"
                subtitle="Your details are sent straight to the clinic on WhatsApp."
              />
              <div className="mt-8">
                <AppointmentForm compact />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
