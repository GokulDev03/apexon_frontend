import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, ShieldCheck, ArrowLeft, Star } from "lucide-react";
import { SERVICES, getService, formatINR } from "@/lib/content";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Plans & Pricing`,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-b border-surface-line bg-surface-alt pt-36 pb-12 md:pt-44 md:pb-14">
        <div className="container-x">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-card">
                  <service.icon className="h-7 w-7" />
                </div>
                <div>
                  <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
                    {service.category}
                  </span>
                  <h1 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-ink-soft md:text-lg">
                {service.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex" role="img" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </span>
                  4.9/5 from verified clients
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Delivery guarantee on every plan
                </span>
              </div>
            </div>

            {/* Deliverables card */}
            <div className="card w-full shrink-0 p-6 lg:max-w-sm">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
                What&apos;s included
              </h2>
              <ul className="mt-4 space-y-2.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="container-x py-14 md:py-20">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">
          Choose your plan
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-ink-soft md:text-base">
          Fixed prices, written timelines. Pick a plan and book — our team
          calls you within 24 hours to kick off.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {service.plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative flex flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
                plan.popular ? "border-brand shadow-lift ring-1 ring-brand/20" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-lg font-semibold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{plan.description}</p>
              <p className="mt-5">
                <span className="font-display text-4xl font-bold tracking-tight text-ink">
                  {formatINR(plan.price)}
                </span>
                <span className="ml-1 text-sm text-ink-soft">one-time</span>
              </p>
              <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                <Clock className="h-4 w-4 text-brand" />
                Delivery in ~{plan.deliveryDays} days
              </p>
              <ul className="mt-6 flex-1 space-y-2.5 border-t border-surface-line pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/checkout?service=${service.slug}&plan=${plan.id}`}
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
                  plan.popular
                    ? "bg-accent text-white shadow-cta hover:bg-accent-dark"
                    : "bg-brand text-white hover:bg-brand-dark"
                }`}
              >
                Book {plan.name} plan
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-soft">
          Need a custom scope?{" "}
          <Link href="/#contact" className="font-semibold text-brand hover:underline">
            Talk to our team
          </Link>{" "}
          for a tailored quote.
        </p>
      </div>
    </div>
  );
}
