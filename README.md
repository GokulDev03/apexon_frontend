# Apexon — Premium Landing Page

Building Digital Products That Shape the Future.

A world-class landing page built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**. No database required — pure frontend.

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve production build
```

> Requires Node.js 18.17+ and an internet connection on first build (Google Fonts: Sora + Inter).

## Project Structure

```
apexon/
├── src/
│   ├── app/          # Next.js App Router (layout, page, sitemap, robots)
│   ├── components/   # Reusable UI (Button, TiltCard, Particles, CursorGlow…)
│   ├── sections/     # Page sections (Hero, Services, Portfolio, Stats…)
│   ├── layouts/      # Navbar + Footer
│   ├── hooks/        # useCountUp, useMagnetic
│   ├── lib/          # Content data + Framer Motion variants
│   ├── services/     # Contact/newsletter service stub (swap for real API)
│   ├── store/        # UI context (mobile menu state)
│   ├── types/        # Shared TypeScript types
│   ├── utils/        # cn() class merger
│   ├── styles/       # globals.css (glass, gradients, ripple, scrollbar)
│   └── assets/       # Static asset sources
├── public/           # logo.png (transparent), logo-full.png, favicon.png
└── tailwind.config.ts
```

## Design System

| Token      | Value     |
| ---------- | --------- |
| Background | `#030712` |
| Primary    | `#2563EB` |
| Accent     | `#7C3AED` |
| Secondary  | `#06B6D4` |
| Text       | `#FFFFFF` / `#94A3B8` |

- Display font: **Sora** · Body font: **Inter**
- Glassmorphism cards, 16–28px radii, soft glows
- Animations: fade-up, scale, parallax hero, hover lift/tilt, button ripple, magnetic buttons, cursor glow, animated counters, particle field, marquee tech stack
- Accessible: skip link, focus rings, aria labels, `prefers-reduced-motion` respected
- SEO: metadata, Open Graph, Twitter cards, sitemap.xml, robots.txt

## Customizing Content

All copy lives in `src/lib/content.ts` — nav links, services, projects, stats, timeline, testimonials, and tech stack. Edit once, updates everywhere.

The newsletter form calls `src/services/contact.ts`, currently a stub. Point it at your real endpoint (Formspree, Resend, custom API) when ready.
