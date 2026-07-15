"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { fadeUp, viewport } from "@/lib/motion";

const TECH_STACK = ["Next.js", "React", "Node.js", "WhatsApp API"];

export default function Projects() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-brand-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
            Our Work
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            See What We&apos;ve <span className="text-brand">Built</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            A real product, shipped end-to-end — proof of what we can build for you.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="group relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-surface-line bg-gradient-to-br from-surface-alt to-white shadow-card transition-all duration-500 hover:shadow-lift lg:grid lg:grid-cols-2"
        >
          {/* Image side */}
          <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-light/40 via-surface-alt to-white p-8 lg:p-10">
            {/* Live badge */}
            <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Live
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl shadow-lift ring-1 ring-black/5 transition-transform duration-500 group-hover:scale-[1.03]">
              <Image
                src="/projects/as-service.png"
                alt="AS Serive — appliance repair booking website screenshot"
                width={900}
                height={600}
                className="h-auto w-full object-cover object-top"
              />
              {/* subtle gradient fade at bottom of image */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Details side */}
          <div className="flex flex-col justify-center p-7 md:p-10">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-light px-3 py-1.5 text-xs font-semibold text-brand">
              <Code2 className="h-3.5 w-3.5" />
              Full-Stack Web App
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
              AS Service
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
              Full-stack booking website with WhatsApp integration — customers
              browse services, pick a plan, and confirm bookings that land
              straight in the client&apos;s WhatsApp inbox.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-brand/20 bg-white px-3 py-1 text-xs font-medium text-brand"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Mini stats row */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-surface-line py-4">
              <div>
                <p className="font-display text-lg font-bold text-ink">5000+</p>
                <p className="text-xs text-ink-soft">Customers</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink">4.8/5</p>
                <p className="text-xs text-ink-soft">Google rating</p>
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink">6+</p>
                <p className="text-xs text-ink-soft">Areas served</p>
              </div>
            </div>

            
             <a  href="https://mechanic-frontend-smoky.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:gap-3 hover:bg-brand-dark hover:shadow-md"
            >
              View Live Project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}