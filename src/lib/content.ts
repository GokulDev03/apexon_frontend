import {
  Globe,
  Smartphone,
  BrainCircuit,
  PenTool,
  Cloud,
  Layers,
  ShoppingBag,
  Megaphone,
  MousePointerClick,
  ClipboardList,
  CreditCard,
  Rocket,
} from "lucide-react";
import type { NavLink, Service, Step, Stat, Testimonial } from "@/types";

export const COMPANY = {
  name: "Apexon",
  phone: "+91 9025649921",
  email: "apexon.development@gmail.com",
  address: "Chennai · Bengaluru · Remote",
  hours: "Mon–Sat, 9:30 AM – 7:00 PM IST",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

const plans = (
  base: number,
  starterFeatures: string[],
  proFeatures: string[],
  entFeatures: string[],
  days: [number, number, number] = [10, 21, 45]
) => [
  {
    id: "starter",
    name: "Starter",
    price: base,
    description: "For early-stage ideas that need a solid launch.",
    features: starterFeatures,
    deliveryDays: days[0],
  },
  {
    id: "professional",
    name: "Professional",
    price: Math.round(base * 2.2),
    description: "Our most popular plan for growing businesses.",
    features: proFeatures,
    deliveryDays: days[1],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: Math.round(base * 4.5),
    description: "Full-scale delivery with a dedicated team.",
    features: entFeatures,
    deliveryDays: days[2],
  },
];

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    category: "Web",
    tagline: "Fast, SEO-ready websites that convert visitors into customers.",
    description:
      "We design and build high-performance business websites on Next.js — optimised for speed, search rankings, and conversions. Every build includes responsive design, analytics, and a CMS you can update yourself.",
    icon: Globe,
    deliverables: [
      "Custom responsive design (mobile, tablet, desktop)",
      "SEO setup — meta tags, sitemap, structured data",
      "Content management system",
      "Analytics & performance monitoring",
      "SSL, hosting setup & launch support",
    ],
    plans: plans(
      9999,
      ["Up to 5 pages", "Responsive design", "Contact form", "Basic SEO", "1 revision round"],
      ["Up to 12 pages", "CMS integration", "Advanced SEO + blog", "Speed optimisation", "3 revision rounds", "30-day support"],
      ["Unlimited pages", "Custom web application features", "Multi-language support", "Dedicated project manager", "90-day support & SLA"]
    ),
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile",
    tagline: "iOS & Android apps your customers will love to open daily.",
    description:
      "From MVP to app-store launch, we build native-quality apps with React Native — one codebase, two platforms, faster time to market and lower maintenance cost.",
    icon: Smartphone,
    deliverables: [
      "iOS + Android from a single codebase",
      "UI/UX design included",
      "Push notifications & analytics",
      "App Store & Play Store submission",
      "Crash monitoring & release pipeline",
    ],
    plans: plans(
      19999,
      ["MVP with core flows", "Up to 8 screens", "Basic auth", "Store submission", "1 revision round"],
      ["Up to 20 screens", "Payments integration", "Push notifications", "Admin dashboard", "3 revision rounds", "60-day support"],
      ["Unlimited scope (sprint-based)", "Custom backend & APIs", "Offline mode & advanced features", "Dedicated team", "SLA & priority support"],
      [21, 45, 90]
    ),
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    category: "AI",
    tagline: "Practical AI that saves hours — chatbots, automation, insights.",
    description:
      "We integrate LLMs and machine learning into your business workflows — customer-support copilots, document automation, and data intelligence that show ROI in weeks, not years.",
    icon: BrainCircuit,
    deliverables: [
      "Use-case discovery workshop",
      "Custom LLM / chatbot integration",
      "Workflow automation",
      "Private & secure data handling",
      "Team training & documentation",
    ],
    plans: plans(
      29999,
      ["1 AI use case", "Chatbot on your website", "Knowledge-base training", "Basic analytics"],
      ["Up to 3 use cases", "CRM / helpdesk integration", "Custom automation flows", "Monthly tuning", "60-day support"],
      ["Enterprise AI roadmap", "Fine-tuned private models", "On-prem / VPC deployment", "Dedicated AI engineer", "Quarterly reviews"],
      [14, 30, 60]
    ),
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Design",
    tagline: "Interfaces designed with intent — beautiful and conversion-focused.",
    description:
      "Research-driven product design: wireframes, high-fidelity UI, and clickable prototypes your developers can build from without guesswork.",
    icon: PenTool,
    deliverables: [
      "User research & competitor audit",
      "Wireframes & user flows",
      "High-fidelity UI in Figma",
      "Interactive prototype",
      "Developer handoff & design system",
    ],
    plans: plans(
      19999,
      ["Up to 5 screens", "Wireframes + UI", "1 revision round", "Figma handoff"],
      ["Up to 15 screens", "Clickable prototype", "Mini design system", "3 revision rounds", "Usability review"],
      ["Full product design", "Complete design system", "User testing sessions", "Dedicated designer", "Ongoing design support"],
      [7, 14, 30]
    ),
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    category: "Cloud",
    tagline: "Reliable AWS infrastructure that scales with your growth.",
    description:
      "Cloud architecture, migration, and DevOps done right — CI/CD pipelines, monitoring, and cost optimisation so your product stays fast and your bills stay low.",
    icon: Cloud,
    deliverables: [
      "Cloud architecture design",
      "Migration & deployment",
      "CI/CD pipeline setup",
      "Monitoring & alerting",
      "Security hardening & cost review",
    ],
    plans: plans(
      24999,
      ["Single-app deployment", "CI/CD pipeline", "Basic monitoring", "Handover docs"],
      ["Multi-environment setup", "Auto-scaling", "Full observability stack", "Security audit", "60-day support"],
      ["Enterprise architecture", "Multi-region / DR setup", "Compliance (SOC2-ready)", "Dedicated DevOps engineer", "24/7 monitoring"],
      [7, 21, 45]
    ),
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    category: "Product",
    tagline: "From idea to subscription revenue — complete SaaS builds.",
    description:
      "We build multi-tenant SaaS platforms end to end: auth, billing, dashboards, and admin — production-ready and built to scale from your first customer to your ten-thousandth.",
    icon: Layers,
    deliverables: [
      "Product scoping & architecture",
      "Multi-tenant application build",
      "Subscription billing integration",
      "Admin & analytics dashboards",
      "Launch, docs & handover",
    ],
    plans: plans(
      49999,
      ["MVP with core module", "Auth + billing", "Basic dashboard", "Deployment included"],
      ["Full v1 product", "Role-based access", "Advanced dashboards", "Integrations (2)", "90-day support"],
      ["Complete platform build", "Unlimited integrations", "White-labelling", "Dedicated squad", "SLA & roadmap partnership"],
      [30, 60, 120]
    ),
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    category: "Commerce",
    tagline: "High-converting online stores with seamless checkout.",
    description:
      "Custom storefronts with lightning-fast product pages, payment gateways, inventory, and order management — everything you need to sell online professionally.",
    icon: ShoppingBag,
    deliverables: [
      "Custom storefront design",
      "Payment gateway integration",
      "Product & inventory management",
      "Order tracking & notifications",
      "Speed & conversion optimisation",
    ],
    plans: plans(
      34999,
      ["Up to 50 products", "Payment gateway", "Order management", "Responsive store"],
      ["Up to 500 products", "Coupons & campaigns", "Shipping integrations", "Analytics dashboard", "60-day support"],
      ["Unlimited catalogue", "Multi-vendor / marketplace", "ERP integrations", "Dedicated team", "Growth support"],
      [14, 30, 60]
    ),
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Growth",
    tagline: "SEO and performance campaigns that turn traffic into revenue.",
    description:
      "Monthly growth engine: search rankings, paid campaigns, and analytics reporting — with clear KPIs so you always know what your budget is doing.",
    icon: Megaphone,
    deliverables: [
      "SEO audit & keyword strategy",
      "On-page & technical SEO",
      "Google & Meta ad campaigns",
      "Landing page optimisation",
      "Monthly performance reports",
    ],
    plans: plans(
      14999,
      ["SEO for 10 keywords", "1 ad campaign", "Monthly report", "Email support"],
      ["SEO for 30 keywords", "3 ad campaigns", "Landing page A/B tests", "Bi-weekly reviews"],
      ["Full growth retainer", "Unlimited campaigns", "CRO programme", "Dedicated strategist", "Weekly reporting"],
      [30, 30, 30]
    ),
  },
];

export const STEPS: Step[] = [
  {
    title: "Choose a service",
    description: "Browse our services and pick the one that fits your goal.",
    icon: MousePointerClick,
  },
  {
    title: "Select your plan",
    description: "Transparent pricing — compare plans and choose your scope.",
    icon: ClipboardList,
  },
  {
    title: "Book & confirm",
    description: "Share your details and confirm the order in two minutes.",
    icon: CreditCard,
  },
  {
    title: "We deliver",
    description: "A dedicated team starts within 24 hours and keeps you updated.",
    icon: Rocket,
  },
];

export const STATS: Stat[] = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export const WHY_US = [
  {
    title: "Fixed-price plans",
    description: "Know the cost before you start — no hourly surprises.",
  },
  {
    title: "Fast delivery",
    description: "Clear timelines on every plan, tracked in weekly updates.",
  },
  {
    title: "Secure development",
    description: "NDA on request, OWASP-compliant code, and private repos.",
  },
  {
    title: "24/7 support",
    description: "A real team on call — long after launch day.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Booked the Professional website plan on a Friday, had our kickoff call Monday morning. Delivered a week early and conversion is up 42%.",
    name: "Sarah Mitchell",
    role: "CEO, Nova Finance",
    initials: "SM",
  },
  {
    quote:
      "The fixed-price model made it easy to get budget approved. Clear scope, clear timeline, zero drama — exactly how vendors should work.",
    name: "Arjun Ramesh",
    role: "CTO, Medly Health",
    initials: "AR",
  },
  {
    quote:
      "They treated our startup like their own. From the first call to launch, every detail was considered. We've already booked our second project.",
    name: "Elena Kovács",
    role: "Founder, Cartelle",
    initials: "EK",
  },
];

export const TRUSTED_BY = [
  "Nova Finance",
  "Medly Health",
  "Cartelle",
  "Sensai",
  "GridWorks",
  "Farmlink",
];

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const getService = (slug: string) =>
  SERVICES.find((s) => s.slug === slug);
