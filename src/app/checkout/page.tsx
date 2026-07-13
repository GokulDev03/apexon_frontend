"use client";

import Link from "next/link";
import { Suspense, useMemo, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  Loader2,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { getService, formatINR } from "@/lib/content";
import { createOrder } from "@/services/contact";

function CheckoutContent() {
  const router = useRouter();
  const params = useSearchParams();
  const service = getService(params.get("service") ?? "");
  const plan = useMemo(
    () => service?.plans.find((p) => p.id === (params.get("plan") ?? "")),
    [service, params]
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!service || !plan) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-2xl font-bold text-ink">
          Nothing to check out yet
        </h1>
        <p className="mt-3 text-ink-soft">
          Pick a service and a plan first — checkout picks up from there.
        </p>
        <Link
          href="/services"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Browse services
        </Link>
      </div>
    );
  }

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  // const onSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   setError("");
  //   setSubmitting(true);
  //   const res = await createOrder({
  //     serviceSlug: service.slug,
  //     serviceTitle: service.title,
  //     planName: plan.name,
  //     price: plan.price,
  //     customer: form,
  //   });
  //   setSubmitting(false);
  //   if (!res.ok || !res.orderNumber) {
  //     setError(res.message ?? "Could not place the order. Please check your details and try again.");
  //     return;
  //   }
  //   const q = new URLSearchParams({
  //     order: res.orderNumber,
  //     service: service.slug,
  //     plan: plan.id,
  //   });
  //   router.push(`/booking/success?${q.toString()}`);
  // };
   
  const onSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setError("");

  const message = `
New Booking Request 🚗

Service: ${service.title}
Plan: ${plan.name}
Price: ${formatINR(plan.price)}

Customer Details:
Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company || "N/A"}

Project Details:
${form.notes || "No additional notes"}
`;

  const whatsappNumber = "919025649921";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp
  window.open(whatsappUrl, "_blank");

  // Go success page
  const q = new URLSearchParams({
    service: service.slug,
    plan: plan.id,
  });

  router.push(`/booking/success?${q.toString()}`);
};
  return (
    <div className="container-x py-12 md:py-16">
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft transition-colors hover:text-brand"
      >
        <ArrowLeft className="h-4 w-4" /> Back to plans
      </Link>

      <h1 className="mt-5 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Confirm your booking
      </h1>
      <p className="mt-2 text-sm text-ink-soft md:text-base">
        Step 3 of 4 — share your details and we&apos;ll schedule your kickoff call.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Form */}
        <form onSubmit={onSubmit} className="card p-6 md:p-8">
          <h2 className="font-display text-lg font-semibold text-ink">Your details</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="label">Full name *</label>
              <input
                id="name"
                required
                minLength={2}
                value={form.name}
                onChange={set("name")}
                placeholder="Priya Sharma"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="email" className="label">Work email *</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={set("email")}
                placeholder="priya@company.com"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="phone" className="label">Phone *</label>
              <input
                id="phone"
                type="tel"
                required
                pattern="[+()\-\s\d]{7,16}"
                value={form.phone}
                onChange={set("phone")}
                placeholder="+91 90256 49921"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="company" className="label">Company (optional)</label>
              <input
                id="company"
                value={form.company}
                onChange={set("company")}
                placeholder="Acme Pvt Ltd"
                className="input"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="label">
                Tell us about your project (optional)
              </label>
              <textarea
                id="notes"
                rows={4}
                maxLength={1000}
                value={form.notes}
                onChange={set("notes")}
                placeholder="Goals, timeline, links to references…"
                className="input resize-y"
              />
            </div>
          </div>

          {error && (
            <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-accent-dark disabled:pointer-events-none disabled:opacity-60 md:text-base"
          >
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Placing your order…
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" /> Confirm booking · {formatINR(plan.price)}
              </>
            )}
          </button>
          <p className="mt-3 text-center text-xs text-ink-faint">
            No payment is charged now — our team confirms scope on the kickoff
            call, then shares a secure payment link.
          </p>
        </form>

        {/* Order summary */}
        <aside className="h-max space-y-5 lg:sticky lg:top-36">
          <div className="card overflow-hidden">
            <div className="border-b border-surface-line bg-surface-alt px-6 py-4">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Order summary
              </h2>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-display text-base font-semibold text-ink">
                    {service.title}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">{plan.name} plan</p>
                </div>
                <p className="font-display text-lg font-bold text-ink">
                  {formatINR(plan.price)}
                </p>
              </div>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink-soft">
                <Clock className="h-4 w-4 text-brand" />
                Delivery in ~{plan.deliveryDays} days
              </p>
              <ul className="mt-5 space-y-2 border-t border-surface-line pt-5">
                {plan.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-soft">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    {f}
                  </li>
                ))}
                {plan.features.length > 4 && (
                  <li className="text-sm text-ink-faint">
                    +{plan.features.length - 4} more included
                  </li>
                )}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-surface-line pt-5">
                <p className="text-sm font-medium text-ink">Total</p>
                <p className="font-display text-xl font-bold text-ink">
                  {formatINR(plan.price)}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <ShieldCheck className="h-5 w-5" /> Apexon delivery guarantee
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-emerald-700">
              Written timeline on every plan. If we miss it, the extra time is
              on us. Cancel free before the kickoff call.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <div className="bg-surface-alt pt-28 md:pt-36">
      <Suspense
        fallback={
          <div className="container-x flex items-center justify-center py-32">
            <Loader2 className="h-6 w-6 animate-spin text-brand" />
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>
    </div>
  );
}
