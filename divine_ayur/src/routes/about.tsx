import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Eye, HeartHandshake, Leaf, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { clinic, images, stats } from "@/config/site";

const title = "About Us | Divine Ayurveda & Physiotherapy Clinic, Rohtak";
const description =
  "Meet the team behind Divine Ayurveda & Physiotherapy Clinic in Rohtak — our mission, values, natural healing philosophy, modern equipment and 12+ years of patient care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${clinic.siteUrl}/about` }],
  }),
  component: About,
});

const pillars = [
  {
    icon: Compass,
    title: "Our Mission",
    text: "To make authentic, safe Ayurveda accessible to every family in Rohtak — combined with modern physiotherapy so recovery is complete, not partial.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be Haryana's most trusted integrative healing centre, known for honest diagnosis, ethical advice and results that last.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Unhurried listening, transparent pricing, hygiene without compromise, and treating every patient the way we would treat our own family.",
  },
];

const timeline = [
  { year: "2013", title: "The clinic opens", text: "A single consultation room at Sukh Pura Chowk with a focus on classical Ayurvedic medicine." },
  { year: "2016", title: "Panchkarma unit added", text: "Dedicated therapy rooms and trained therapists for Vamana, Virechana, Basti and Nasya." },
  { year: "2019", title: "Physiotherapy wing", text: "IFT, ultrasound, TENS and traction equipment introduced alongside manual therapy." },
  { year: "2022", title: "Speciality programmes", text: "Structured protocols for spine care, infertility, skin disorders and Swarna Prashan." },
  { year: "Today", title: "15,000+ patients treated", text: "A full integrative centre serving families across Rohtak and nearby districts." },
];

function About() {
  return (
    <>
      <section className="bg-deep py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About us</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Healing rooted in tradition, guided by evidence
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            For over a decade, Divine Ayurveda &amp; Physiotherapy Clinic has treated chronic pain,
            lifestyle disorders and rehabilitation needs with a blend of classical Ayurveda and modern
            therapy — right here in Rohtak.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <img
              src={images.reception}
              alt="Reception and waiting area of the clinic"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="A clinic built around the patient, not the queue"
              subtitle="We started with one belief: most chronic problems are not solved in a five-minute visit. So we built a clinic where consultations are long, diagnosis is thorough, and every plan is written for one person only."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Our physicians combine Nadi Pariksha and classical assessment with modern investigation
              reports. Our physiotherapists use calibrated equipment and measured progress tracking.
              Together, this means faster relief and fewer relapses.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What drives us" title="Mission, vision and values" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground">
                    <pillar.icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-deep">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Philosophy"
              title="Natural healing, without shortcuts"
              subtitle="Ayurveda treats the person, not just the disease. We correct digestion, sleep, movement and stress alongside medicines — because those are what keep results stable."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: Leaf, text: "Root-cause diagnosis before any prescription" },
                { icon: Stethoscope, text: "Modern equipment for measurable rehabilitation" },
                { icon: HeartHandshake, text: "Experienced team of physicians and therapists" },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <item.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <ol className="relative space-y-8 border-l border-border pl-8">
              {timeline.map((item) => (
                <li key={item.year} className="relative">
                  <span className="absolute -left-[41px] grid size-5 place-items-center rounded-full border-2 border-primary bg-background">
                    <span className="size-2 rounded-full bg-primary" />
                  </span>
                  <p className="font-display text-sm font-semibold text-gold-foreground">{item.year}</p>
                  <h3 className="mt-1 font-display text-base font-semibold text-deep">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="bg-deep py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-primary-foreground/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
        <h2 className="font-display text-3xl font-semibold text-deep">Ready to meet our team?</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Book a consultation and get a clear diagnosis with a plan you can actually follow.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full">
          <Link to="/appointment">
            Book Appointment <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Button>
      </section>
    </>
  );
}
