"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";
import { formatINR, getService } from "@/lib/content";

export default function ServiceCard({
  slug,
  index = 0,
}: {
  slug: string;
  index?: number;
}) {
  const service = getService(slug);
  if (!service) return null;
  const from = service.plans[0].price;
  return (
    
    <motion.div
      variants={fadeUp}
      custom={index % 4}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <Link
        href={`/services/${service.slug}`}
        className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift"
      >
        <div className="flex items-start justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
            <service.icon className="h-6 w-6" />
          </div>
          <span className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-ink-soft">
            {service.category}
          </span>
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold text-ink">
          {service.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {service.tagline}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-surface-line pt-4">
          <p className="text-sm text-ink-soft">
           Starting From{" "}
            <span className="font-display text-base font-bold text-ink">
              {formatINR(from)}
            </span>
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
            Book now
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
          
        </div>
      </Link>
      
    </motion.div>
  );
}
