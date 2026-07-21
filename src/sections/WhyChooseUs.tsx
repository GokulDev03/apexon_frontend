"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { WHY_US } from "@/lib/content";
import { fadeUp, viewport } from "@/lib/motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Why choose Apexon Web Store"
            title="A partner that works like"
            highlight="part of your team"
            subtitle="No hidden costs, no missed deadlines, no radio silence. Here's what every client gets, on every plan."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                <BadgeCheck className="h-6 w-6 text-brand" />
                <h3 className="mt-3 font-display text-base font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right visual — guarantee panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <div
            aria-hidden
            className="absolute -inset-5 -z-10 rounded-[28px] bg-gradient-to-br from-brand/10 to-accent/10 blur-lg"
          />
          <div className="card overflow-hidden">
            <div className="bg-brand p-8 text-white">
              <p className="font-display text-2xl font-bold leading-snug">
                On-time delivery,<br />or we work free until it ships.
              </p>
              <p className="mt-3 text-sm text-white/80">
                Every plan comes with a written timeline. If we miss it, the
                extra time is on us — that's our delivery guarantee.
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-surface-line">
              {[
                ["24h", "Kickoff call"],
                ["Weekly", "Demo & report"],
                ["NDA", "On request"],
              ].map(([v, l]) => (
                <div key={l} className="p-5 text-center">
                  <p className="font-display text-lg font-bold text-ink">{v}</p>
                  <p className="mt-0.5 text-xs text-ink-soft">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 text-center lg:text-left">
            <Button href="/services" variant="accent" size="lg">
              Start your project today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
