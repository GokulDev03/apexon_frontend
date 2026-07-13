"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Button from "@/components/Button";
import { fadeUp, viewport } from "@/lib/motion";
import { COMPANY } from "@/lib/content";

export default function CTA() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative overflow-hidden rounded-2.5xl bg-brand px-6 py-14 text-center md:px-12 md:py-20"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(50%_60%_at_80%_0%,rgba(255,255,255,0.14),transparent_60%),radial-gradient(40%_50%_at_10%_100%,rgba(249,115,22,0.25),transparent_60%)]"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Let&apos;s Build Something Amazing Together.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
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
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 md:text-base"
              >
                <PhoneCall className="h-4 w-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
