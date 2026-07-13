"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  PhoneCall,
  CalendarClock,
  FileCheck,
  Loader2,
  Copy,
} from "lucide-react";
import { getService, formatINR, COMPANY } from "@/lib/content";

const NEXT_STEPS = [
  {
    icon: PhoneCall,
    title: "Kickoff call within 24 hours",
    description: "Our project lead calls you to confirm scope and answer questions.",
  },
  {
    icon: FileCheck,
    title: "Scope & payment link",
    description: "You receive a written scope document with a secure payment link.",
  },
  {
    icon: CalendarClock,
    title: "Work begins",
    description: "Your dedicated team starts, with weekly demos and progress reports.",
  },
];

function SuccessContent() {
  const params = useSearchParams();
  const orderNumber = params.get("order") ?? "";
  const service = getService(params.get("service") ?? "");
  const plan = service?.plans.find((p) => p.id === (params.get("plan") ?? ""));

  const copyOrder = () => {
    if (orderNumber) void navigator.clipboard?.writeText(orderNumber);
  };

  return (
    <div className="container-x max-w-3xl py-14 md:py-20">
      {/* Confirmation header */}
      <div className="text-center">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </span>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Booking confirmed!
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-ink-soft">
          Thank you — your order is in. A confirmation email is on its way, and
          our team will call you within 24 hours.
        </p>
        {/* {orderNumber && (
          <button
            type="button"
            onClick={copyOrder}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-surface-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-card transition-colors hover:border-brand/40"
            title="Copy order number"
          >
            Order&nbsp;
            <span className="font-display text-brand">{orderNumber}</span>
            <Copy className="h-3.5 w-3.5 text-ink-faint" />
          </button>
        )} */}
      </div>

      {/* Order recap */}
      {service && plan && (
        <div className="card mt-10 overflow-hidden">
          <div className="border-b border-surface-line bg-surface-alt px-6 py-4">
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
              Your order
            </h2>
          </div>
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-light text-brand">
                <service.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-base font-semibold text-ink">
                  {service.title}
                </p>
                <p className="text-sm text-ink-soft">
                  {plan.name} plan · ~{plan.deliveryDays} days delivery
                </p>
              </div>
            </div>
            <p className="font-display text-xl font-bold text-ink">
              {formatINR(plan.price)}
            </p>
          </div>
        </div>
      )}

      {/* What happens next */}
      <div className="mt-12">
        <h2 className="text-center font-display text-xl font-bold text-ink">
          What happens next
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {NEXT_STEPS.map((step, i) => (
            <div key={step.title} className="card relative p-5 text-center">
              <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand px-3 py-0.5 text-xs font-bold text-white">
                {i + 1}
              </span>
              <step.icon className="mx-auto mt-2 h-6 w-6 text-brand" />
              <h3 className="mt-3 text-sm font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Book another service
        </Link>
        <a
          href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-xl border border-surface-line bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
        >
          <PhoneCall className="h-4 w-4" />
          Talk to us now
        </a>
      </div>
    </div>
  );
}

export default function BookingSuccessPage() {
  return (
    <div className="bg-surface-alt pt-28 md:pt-36">
      <Suspense
        fallback={
          <div className="container-x flex items-center justify-center py-32">
            <Loader2 className="h-6 w-6 animate-spin text-brand" />
          </div>
        }
      >
        <SuccessContent />
      </Suspense>
    </div>
  );
}
