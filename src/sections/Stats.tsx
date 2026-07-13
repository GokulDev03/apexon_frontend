"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { STATS } from "@/lib/content";
import { fadeUp, viewport } from "@/lib/motion";
import type { Stat } from "@/types";

function Counter({ stat }: { stat: Stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="text-center">
      <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        <span ref={ref} className="tabular-nums">{value}</span>
        <span className="text-accent">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/75 md:text-base">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="about" className="bg-brand-dark py-16 md:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4"
      >
        {STATS.map((stat) => (
          <Counter key={stat.label} stat={stat} />
        ))}
      </motion.div>
    </section>
  );
}
