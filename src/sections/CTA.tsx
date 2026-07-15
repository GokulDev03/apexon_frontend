
"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Sparkles } from "lucide-react";
import Button from "@/components/Button";
import { fadeUp, viewport } from "@/lib/motion";
import { COMPANY } from "@/lib/content";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-20 md:py-28">
      {/* decorative floating blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:24px_24px]"
      />

      <div className="container-x relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative mx-auto max-w-3xl rounded-2.5xl border border-surface-line bg-white/80 px-6 py-14 text-center shadow-card backdrop-blur-sm md:px-14 md:py-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            <Sparkles className="h-3.5 w-3.5" />
            Let&apos;s get started
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              Amazing
            </span>{" "}
            Together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink-soft">
            Book a service online in minutes, or talk to our team first —
            free consultation, honest advice, no pressure.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/services" variant="accent" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-surface-line px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-brand hover:bg-brand-light hover:text-brand md:text-base"
            >
              <PhoneCall className="h-4 w-4" />
              {COMPANY.phone}
            </a>
          </div>

          <p className="mt-6 text-xs text-ink-faint">
            No payment now · Free consultation call · Cancel anytime before kickoff
          </p>
        </motion.div>
      </div>
    </section>
  );
}