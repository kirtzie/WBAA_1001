import { Link } from "@tanstack/react-router";
import { ArrowRight, Star, Quote } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic, testimonials } from "@/config/site";
import { Reveal } from "./Reveal";

export function ReviewCards({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, count).map((review, i) => (
        <Reveal key={review.name} delay={i * 0.06}>
          <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-lift">
            <Quote className="size-7 text-gold" aria-hidden />
            <div className="mt-4 flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, s) => (
                <Star key={s} className="size-4 fill-gold text-gold" aria-hidden />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">“{review.text}”</p>
            <footer className="mt-6 border-t border-border pt-4">
              <p className="font-display text-sm font-semibold text-deep">{review.name}</p>
              <p className="text-xs text-muted-foreground">{review.area}</p>
            </footer>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

export function ReviewsCta() {
  return (
    <div className="mt-10 text-center">
      <Button asChild variant="outline" size="lg" className="rounded-full">
        <a href={clinic.reviewsLink} target="_blank" rel="noreferrer">
          View Google Reviews
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </Button>
    </div>
  );
}

export function ServiceCard({
  slug,
  title,
  short,
  image,
}: {
  slug: string;
  title: string;
  short: string;
  image: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1200}
          height={800}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-deep">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{short}</p>
        <Link
          to="/services"
          hash={slug}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-deep"
        >
          Learn More
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </article>
  );
}
