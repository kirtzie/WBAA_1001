import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";

import { AppointmentForm } from "@/components/site/AppointmentForm";
import { Reveal } from "@/components/site/Reveal";
import { clinic, fullAddress, telHref } from "@/config/site";

const title = "Book an Appointment | Divine Ayurveda & Physiotherapy Clinic, Rohtak";
const description =
  "Book your Ayurveda, Panchkarma or physiotherapy appointment at Divine Ayurveda & Physiotherapy Clinic, Rohtak. Fill the form and your request reaches the clinic instantly on WhatsApp.";

export const Route = createFileRoute("/appointment")({
  validateSearch: (search: Record<string, unknown>) => ({
    treatment: typeof search["treatment"] === "string" ? search["treatment"] : undefined,
  }),
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${clinic.siteUrl}/appointment` }],
  }),
  component: Appointment,
});

function Appointment() {
  const { treatment } = Route.useSearch();

  return (
    <>
      <section className="bg-deep py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Appointment</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Book your consultation
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Share a few details and we will confirm your slot on WhatsApp during clinic hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-card p-6 shadow-lift sm:p-9">
              <AppointmentForm defaultTreatment={treatment ?? ""} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <aside className="space-y-6">
              <div className="rounded-3xl bg-secondary/60 p-7">
                <h2 className="font-display text-base font-semibold text-deep">What happens next</h2>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  {[
                    "Your details open in WhatsApp, pre-filled",
                    "Our team confirms the slot during clinic hours",
                    "Carry any past reports to your first visit",
                    "First consultation takes about 30–40 minutes",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-border p-7 text-sm text-muted-foreground">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden /> {fullAddress}
                </p>
                <p className="mt-4 flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden />
                  <a href={telHref} className="hover:text-deep">
                    {clinic.phone}
                  </a>
                </p>
                <p className="mt-4 flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <span>
                    {clinic.hours.map((h) => (
                      <span key={h.days} className="block">
                        {h.days}: {h.time}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
