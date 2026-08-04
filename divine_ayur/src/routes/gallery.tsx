import { createFileRoute } from "@tanstack/react-router";

import { GalleryGrid } from "@/components/site/GalleryGrid";
import { clinic } from "@/config/site";

const title = "Clinic Gallery | Divine Ayurveda & Physiotherapy Clinic, Rohtak";
const description =
  "Take a look inside Divine Ayurveda & Physiotherapy Clinic in Rohtak — therapy rooms, Panchkarma suite, physiotherapy unit, herbal pharmacy and reception.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: `${clinic.siteUrl}/gallery` }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="bg-deep py-20 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Gallery</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Inside our clinic
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Clean therapy rooms, calm waiting spaces and modern equipment. Tap any photo to view it
            larger.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <GalleryGrid />
      </section>
    </>
  );
}
