import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Clock, Leaf } from "lucide-react";

import { clinic, fullAddress, telHref } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-primary-foreground/10">
              <Leaf className="size-5 text-gold" aria-hidden />
            </span>
            <span className="font-display text-lg font-semibold">Divine Ayurveda</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            Authentic Ayurveda and modern physiotherapy under one roof in Rohtak — treating the root
            cause with personalised, unhurried care.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={clinic.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href={clinic.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={clinic.social.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="grid size-10 place-items-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              <Youtube className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Treatments" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
              { to: "/appointment", label: "Book Appointment" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Reach Us
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-gold" aria-hidden />
              <a href={telHref} className="transition-colors hover:text-gold">
                {clinic.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-gold" aria-hidden />
              <a href={`mailto:${clinic.email}`} className="transition-colors hover:text-gold">
                {clinic.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
              <span>
                {clinic.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Find Us
          </h3>
          <div className="mt-5 overflow-hidden rounded-2xl border border-primary-foreground/15">
            <iframe
              src={clinic.mapsEmbed}
              title="Clinic location on Google Maps"
              className="h-48 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {clinic.name}. All rights reserved.
          </p>
          <p>Rohtak, Haryana · Ayurveda · Panchkarma · Physiotherapy</p>
        </div>
      </div>
    </footer>
  );
}
