"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";
import Button from "@/components/Button";
import { fadeUp, stagger } from "@/lib/motion";
import { TRUSTED_BY } from "@/lib/content";

const HERO_POINTS = [
  "Fixed-price plans — book online in minutes",
  "Kickoff call within 24 hours",
  "100+ projects delivered across 5+ countries",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Soft background wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_10%,#EAF1FE_0%,transparent_60%),radial-gradient(40%_40%_at_10%_90%,#FFF4EC_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} custom={0} className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted IT Services Partner
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-5 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Building Digital Products{" "}
            <span className="text-brand">That Shape the Future</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            We help startups and businesses build scalable websites, mobile
            apps, AI solutions, and enterprise software — with transparent
            pricing you can book online.
          </motion.p>

          <motion.ul variants={fadeUp} custom={3} className="mt-6 space-y-2.5">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm text-ink-soft">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/services" variant="accent" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#how-it-works" variant="outline" size="lg">
              How It Works
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" role="img" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.9/5 client rating
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-brand" />
              50+ businesses served
            </span>
          </motion.div>
        </motion.div>

        {/* Visual — booking card mock */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand/10 via-transparent to-accent/10 blur-xl"
          />
          <div className="card overflow-hidden">
            <div className="border-b border-surface-line bg-surface-alt px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Live booking preview
              </p>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between rounded-xl border border-surface-line p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Website Development</p>
                  <p className="text-xs text-ink-soft">Professional plan · 21 days</p>
                </div>
                <p className="font-display text-lg font-bold text-ink">₹54,998</p>
              </div>
              <div className="rounded-xl border border-brand/25 bg-brand-light/60 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-brand-dark">Order confirmed</p>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    APX-2026-1042
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-soft">
                  Kickoff call scheduled — tomorrow, 11:00 AM
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["24h", "Kickoff"],
                  ["Weekly", "Updates"],
                  ["Fixed", "Pricing"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-surface-alt p-3 text-center">
                    <p className="font-display text-sm font-bold text-ink">{v}</p>
                    <p className="text-xs text-ink-soft">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trusted by strip */}
      <div className="container-x mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-surface-line pt-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Trusted by
          </span>
          {TRUSTED_BY.map((brand) => (
            <span key={brand} className="font-display text-sm font-semibold text-ink-faint">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
