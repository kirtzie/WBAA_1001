import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, MessageCircle, CalendarDays, MapPin, Clock, X, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { clinic, defaultWhatsappMessage, telHref, whatsappHref } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50">
      {/* Desktop sticky contact bar */}
      <div className="hidden bg-deep text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="size-3.5 text-gold" aria-hidden />
              {clinic.address.line1}, {clinic.address.city}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="size-3.5 text-gold" aria-hidden />
              Mon–Sat 9:00 AM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={telHref}
              className="flex items-center gap-2 rounded-full px-3 py-1 font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <Phone className="size-3.5" aria-hidden /> {clinic.phone}
            </a>
            <a
              href={whatsappHref(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full px-3 py-1 font-medium transition-colors hover:bg-primary-foreground/10"
            >
              <MessageCircle className="size-3.5" aria-hidden /> WhatsApp
            </a>
            <Link
              to="/appointment"
              className="flex items-center gap-2 rounded-full bg-gold px-3 py-1 font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              <CalendarDays className="size-3.5" aria-hidden /> Book Appointment
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-2xl bg-gradient-emerald text-primary-foreground">
              <Leaf className="size-5" aria-hidden />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-semibold text-deep sm:text-lg">
                Divine Ayurveda
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                &amp; Physiotherapy Clinic
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.to
                    ? "bg-secondary text-deep"
                    : "text-muted-foreground hover:bg-secondary hover:text-deep",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/appointment">Book Appointment</Link>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm p-0">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <span className="font-display font-semibold text-deep">Menu</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="size-5 text-muted-foreground" />
                </button>
              </div>
              <nav className="flex flex-col p-3" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/appointment"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                >
                  Book Appointment
                </Link>
              </nav>
              <div className="space-y-3 border-t border-border px-5 py-5 text-sm text-muted-foreground">
                <a href={telHref} className="flex items-center gap-2">
                  <Phone className="size-4 text-primary" aria-hidden /> {clinic.phone}
                </a>
                <p className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  {clinic.address.line1}, {clinic.address.line2}, {clinic.address.city}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
