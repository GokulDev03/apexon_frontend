"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/content";
import { fadeUp, viewport } from "@/lib/motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface-alt py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients"
          highlight="say about us"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="card relative flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <Quote aria-hidden className="absolute right-6 top-6 h-8 w-8 text-brand/10" />
              <div className="flex gap-1" role="img" aria-label="Rated 5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5">
                <span
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-full bg-brand text-sm font-bold text-white"
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink-soft">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
