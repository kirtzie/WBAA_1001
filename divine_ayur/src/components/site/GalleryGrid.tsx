import { useState } from "react";
import { X } from "lucide-react";
import { motion } from "motion/react";

import { images } from "@/config/site";

/** Replace these entries (or the files in src/assets) to change the gallery. */
export const galleryItems = [
  { src: images.reception, alt: "Clinic reception and waiting area", span: "row-span-2" },
  { src: images.panchkarma, alt: "Panchkarma Shirodhara therapy in progress", span: "" },
  { src: images.consultation, alt: "Ayurvedic doctor consulting a patient", span: "" },
  { src: images.physiotherapy, alt: "Physiotherapy knee rehabilitation session", span: "row-span-2" },
  { src: images.herbs, alt: "Ayurvedic herbal medicines and preparations", span: "" },
  { src: images.spine, alt: "Physiotherapy and spine care treatment room", span: "" },
  { src: images.patient, alt: "Happy patient with the clinic doctor", span: "" },
  { src: images.hero, alt: "Ayurveda therapy room set for treatment", span: "row-span-2" },
];

export function GalleryGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState<number | null>(null);
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;
  const activeItem = active === null ? null : items[active];


  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.button
            key={item.alt}
            type="button"
            onClick={() => setActive(index)}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`group relative overflow-hidden rounded-3xl border border-border shadow-soft ${item.span}`}
            aria-label={`View larger: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-3 left-4 right-4 text-left text-xs font-medium text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.alt}
            </span>
          </motion.button>
        ))}
      </div>

      {activeItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-deep/90 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-background/15 text-primary-foreground"
          >
            <X className="size-5" />
          </button>
          <img
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-h-[85vh] w-auto rounded-3xl object-contain shadow-lift"
          />
        </div>
      ) : null}
    </>
  );
}
