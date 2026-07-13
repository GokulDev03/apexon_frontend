"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { cn } from "@/utils/cn";

interface Props {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={cn(
        "mb-12 max-w-3xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
        {title} {highlight && <span className="text-brand">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
