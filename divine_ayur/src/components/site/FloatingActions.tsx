import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, CalendarDays } from "lucide-react";

import { defaultWhatsappMessage, telHref, whatsappHref } from "@/config/site";

/**
 * Floating call + WhatsApp buttons (all pages) and a sticky mobile action bar.
 */
export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6">
        <a
          href={telHref}
          aria-label="Call the clinic"
          className="group flex items-center gap-2"
        >
          <span className="pointer-events-none hidden rounded-full bg-deep px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 shadow-soft transition-opacity group-hover:opacity-100 sm:block">
            Call Now
          </span>
          <span className="grid size-13 place-items-center rounded-full bg-deep text-primary-foreground shadow-lift transition-transform hover:scale-105">
            <Phone className="size-5" aria-hidden />
          </span>
        </a>
        <a
          href={whatsappHref(defaultWhatsappMessage)}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2"
        >
          <span className="pointer-events-none hidden rounded-full bg-deep px-3 py-1.5 text-xs font-medium text-primary-foreground opacity-0 shadow-soft transition-opacity group-hover:opacity-100 sm:block">
            Chat on WhatsApp
          </span>
          <span className="animate-pulse-ring grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-lift transition-transform hover:scale-105">
            <MessageCircle className="size-6" aria-hidden />
          </span>
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <nav
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background/95 backdrop-blur sm:hidden"
      >
        <a href={telHref} className="flex flex-col items-center gap-1 py-3 text-xs font-medium text-deep">
          <Phone className="size-5" aria-hidden />
          Call
        </a>
        <a
          href={whatsappHref(defaultWhatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-medium text-deep"
        >
          <MessageCircle className="size-5" aria-hidden />
          WhatsApp
        </a>
        <Link
          to="/appointment"
          className="flex flex-col items-center gap-1 bg-primary py-3 text-xs font-semibold text-primary-foreground"
        >
          <CalendarDays className="size-5" aria-hidden />
          Appointment
        </Link>
      </nav>
    </>
  );
}
