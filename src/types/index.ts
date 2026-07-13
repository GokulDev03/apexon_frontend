import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number; // INR
  description: string;
  features: string[];
  deliveryDays: number;
  popular?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  deliverables: string[];
  plans: Plan[];
}

export interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface OrderPayload {
  serviceSlug: string;
  serviceTitle: string;
  planName: string;
  price: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    company?: string;
    notes?: string;
  };
}
