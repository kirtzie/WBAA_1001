import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  MessageCircle,
  CalendarDays,
  ShieldCheck,
  Sparkles,
  Leaf,
  HeartPulse,
} from "lucide-react";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { ReviewCards, ReviewsCta, ServiceCard } from "@/components/site/Cards";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import {
  clinic,
  defaultWhatsappMessage,
  faqs,
  images,
  services,
  stats,
  telHref,
  whatsappHref,
  whyChooseUs,
} from "@/config/site";

const seoTitle =
  "Divine Ayurveda & Physiotherapy Clinic | Best Ayurvedic & Physiotherapy Clinic in Rohtak";
const seoDescription =
  "Divine Ayurveda & Physiotherapy Clinic provides expert Ayurvedic consultation, Panchkarma, Physiotherapy, Spine Care, Knee Care, Skin Disorders, Infertility Treatment, Swarna Prashan, and holistic healthcare in Rohtak.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seoTitle },
      { name: "description", content: seoDescription },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
    ],
    links: [{ rel: "canonical", href: clinic.siteUrl }],
  }),
  component: Home,
});

const whyIcons = [ShieldCheck, HeartPulse, Leaf, Sparkles, ShieldCheck, Leaf, HeartPulse, Sparkles];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={images.hero}
          alt="Ayurveda therapy room with Shirodhara vessel and herbal preparations"
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-24 sm:py-32 lg:min-h-[86vh] lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gold backdrop-blur">
              <Leaf className="size-3.5" aria-hidden /> Rohtak, Haryana
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
              Natural Healing.
              <br />
              Modern Care.
              <br />
              <span className="text-gradient-gold">Trusted Treatment.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Classical Ayurveda, safe Panchkarma and advanced physiotherapy under one roof — with
              personalised plans that treat the cause, not just the symptom.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/appointment">
                  <CalendarDays className="size-4" aria-hidden /> Book Appointment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
              >
                <a href={whatsappHref(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" aria-hidden /> WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <a href={telHref}>
                  <Phone className="size-4" aria-hidden /> Call Now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <p className="font-display text-3xl font-semibold text-deep sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={images.consultation}
                alt="Ayurvedic physician consulting a patient at the clinic"
                loading="lazy"
                width={1200}
                height={800}
                className="rounded-[2rem] object-cover shadow-lift"
              />
              <div className="absolute -bottom-8 -right-4 hidden w-56 rounded-3xl bg-deep p-6 text-primary-foreground shadow-lift sm:block">
                <p className="font-display text-2xl font-semibold text-gold">12+ Years</p>
                <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80">
                  of trusted Ayurvedic and physiotherapy practice in Rohtak
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              align="left"
              eyebrow="About the clinic"
              title="Where classical Ayurveda meets modern rehabilitation"
              subtitle="Divine Ayurveda & Physiotherapy Clinic was founded on a simple belief — patients deserve unhurried attention and honest advice. From Nadi Pariksha to guided exercise therapy, everything we do is built around your body and your daily life."
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Qualified BAMS & MPT practitioners",
                "Hygienic, supervised Panchkarma rooms",
                "Transparent, affordable treatment plans",
                "Diet and lifestyle guidance included",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" size="lg" className="mt-8 rounded-full">
              <Link to="/about">
                More about us <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Why choose us"
            title="Care that patients in Rohtak trust"
            subtitle="Eight reasons families return to us — and recommend us to others."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i % whyIcons.length]!;
              return (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-base font-semibold text-deep">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Our treatments"
          title="Specialised Ayurveda & physiotherapy care"
          subtitle="From Panchkarma detox to spine rehabilitation — twenty focused treatment programmes."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <ServiceCard
                slug={service.slug}
                title={service.title}
                short={service.short}
                image={service.image}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="rounded-full">
            <Link to="/services">
              View all treatments <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Patient stories"
            title="What our patients say"
            subtitle="Real experiences from families across Rohtak."
          />
          <div className="mt-14">
            <ReviewCards />
            <ReviewsCta />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Inside the clinic"
          title="A calm, clean space to heal"
          subtitle="Therapy rooms, reception and treatments — take a look before you visit."
        />
        <div className="mt-14">
          <GalleryGrid limit={4} />
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/gallery">
              Open full gallery <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="FAQ" title="Questions patients ask us" />
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-base font-medium text-deep">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA + booking form */}
      <section id="book" className="bg-deep py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            tone="inverted"
            eyebrow="Book your visit"
            title="Start your healing journey today"
            subtitle="Fill the form and your details reach us instantly on WhatsApp — or simply call the clinic."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-whatsapp text-primary-foreground hover:bg-whatsapp/90"
            >
              <a href={whatsappHref(defaultWhatsappMessage)} target="_blank" rel="noreferrer">
                <MessageCircle className="size-4" aria-hidden /> WhatsApp Us
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={telHref}>
                <Phone className="size-4" aria-hidden /> {clinic.phone}
              </a>
            </Button>
          </div>
          <div className="mt-14 rounded-[2rem] bg-background p-6 shadow-lift sm:p-10">
            <AppointmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
