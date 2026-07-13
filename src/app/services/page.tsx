import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Browse Apexon's IT services with transparent fixed-price plans — website development, mobile apps, AI, cloud, SaaS, e-commerce, and marketing.",
};

export default function ServicesPage() {
  return (
    <div className="bg-surface-alt">
      {/* Page header */}
      <div className="border-b border-surface-line bg-white pt-36 pb-12 md:pt-44 md:pb-16">
        <div className="container-x max-w-3xl text-center md:mx-auto">
          <span className="eyebrow">Services & pricing</span>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            Choose a service, <span className="text-brand">book it today</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
            Every service comes with three transparent plans. Compare, pick
            your scope, and confirm your booking in minutes — no sales calls
            required (unless you want one).
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} slug={service.slug} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
