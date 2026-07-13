"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { STEPS } from "@/lib/content";
import { fadeUp, viewport } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title="From idea to kickoff in"
          highlight="4 simple steps"
        />
        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector line */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent md:block"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-[72px] w-[72px] place-items-center rounded-2xl border border-brand/20 bg-white shadow-card">
                <step.icon className="h-7 w-7 text-brand" />
                <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-accent text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[240px] text-sm leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
