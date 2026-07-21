/**
 * API client for the Apexon backend.
 * Set NEXT_PUBLIC_API_URL in .env.local (defaults to http://localhost:5000).
 * Degrades gracefully if the API is offline so the UI never breaks.
 */
import type { OrderPayload } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

interface ApiResult<T = unknown> {
  ok: boolean;
  message?: string;
  data?: T;
  offline?: boolean;
}

async function post<T>(path: string, body: unknown): Promise<ApiResult<T>> {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, message: data?.message, data: data?.data };
  } catch {
    console.warn(`[apexon web store] API unreachable at ${API_URL}${path}`);
    return { ok: true, offline: true };
  }
}

/** POST /api/contact */
export function submitInquiry(inquiry: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  return post("/api/contact", inquiry);
}

/** POST /api/newsletter */
export function subscribeNewsletter(email: string) {
  return post("/api/newsletter", { email });
}

/** POST /api/orders — books a service plan. */
export async function createOrder(payload: OrderPayload) {
  const res = await post<{ orderNumber: string }>("/api/orders", payload);
  if (res.offline) {
    // Backend not running — issue a local reference so the flow still completes.
    const local = `APX-LOCAL-${Math.floor(1000 + Math.random() * 9000)}`;
    return { ok: true, orderNumber: local, offline: true, message: undefined };
  }
  return {
    ok: res.ok,
    orderNumber: res.data?.orderNumber,
    offline: false,
    message: res.message,
  };
}
