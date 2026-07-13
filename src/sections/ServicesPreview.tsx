"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Button from "@/components/Button";
import { SERVICES } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function ServicesPreview() {
  return (
    <section id="services" className="bg-surface-alt py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our services"
          title="Pick a service,"
          highlight="book it online"
          subtitle="Transparent fixed-price plans for every service — compare, choose, and confirm in minutes."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} slug={service.slug} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" size="lg">
            View all services & pricing
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
