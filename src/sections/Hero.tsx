"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Users } from "lucide-react";
import Button from "@/components/Button";
import { fadeUp, stagger } from "@/lib/motion";
import { TRUSTED_BY } from "@/lib/content";

const HERO_POINTS = [
  "Fixed-price plans — book online in minutes",
  "Kickoff call within 24 hours",
  "100+ projects delivered across 5+ countries",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-36 pb-16 md:pt-44 md:pb-24">
      {/* Soft background wash */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_10%,#EAF1FE_0%,transparent_60%),radial-gradient(40%_40%_at_10%_90%,#FFF4EC_0%,transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]"
      />

      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span variants={fadeUp} custom={0} className="eyebrow">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted IT Services Partner
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-5 font-display text-4xl font-bold leading-[1.12] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Building Digital Products{" "}
            <span className="text-brand">That Shape the Future</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            We help startups and businesses build scalable websites, mobile
            apps, AI solutions, and enterprise software — with transparent
            pricing you can book online.
          </motion.p>

          <motion.ul variants={fadeUp} custom={3} className="mt-6 space-y-2.5">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2.5 text-sm text-ink-soft">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/services" variant="accent" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/#how-it-works" variant="outline" size="lg">
              How It Works
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={5}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-soft"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="flex" role="img" aria-label="Rated 4.9 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              4.9/5 client rating
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="h-4 w-4 text-brand" />
              50+ businesses served
            </span>
          </motion.div>
        </motion.div>

        {/* Visual — booking card mock */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand/10 via-transparent to-accent/10 blur-xl"
          />
          <div className="card overflow-hidden">
            <div className="border-b border-surface-line bg-surface-alt px-6 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
                Live booking preview
              </p>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between rounded-xl border border-surface-line p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Website Development</p>
                  <p className="text-xs text-ink-soft">Professional plan · 21 days</p>
                </div>
                <p className="font-display text-lg font-bold text-ink">₹54,998</p>
              </div>
              <div className="rounded-xl border border-brand/25 bg-brand-light/60 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-brand-dark">Order confirmed</p>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    APX-2026-1042
                  </span>
                </div>
                <p className="mt-1 text-xs text-ink-soft">
                  Kickoff call scheduled — tomorrow, 11:00 AM
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  ["24h", "Kickoff"],
                  ["Weekly", "Updates"],
                  ["Fixed", "Pricing"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-xl bg-surface-alt p-3 text-center">
                    <p className="font-display text-sm font-bold text-ink">{v}</p>
                    <p className="text-xs text-ink-soft">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trusted by strip */}
      <div className="container-x mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-surface-line pt-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-faint">
            Trusted by
          </span>
          {TRUSTED_BY.map((brand) => (
            <span key={brand} className="font-display text-sm font-semibold text-ink-faint">
              {brand}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { 
//   ArrowRight, 
//   Star, 
//   Layers, 
//   TrendingUp, 
//   Cpu, 
//   Globe,
//   Gauge,
//   LineChart,
//   BarChart3,
//   Search,
//   Zap,
//   Shield,
//   Smartphone,
//   Laptop
// } from "lucide-react";
// import Button from "@/components/Button";
// import { fadeUp, stagger } from "@/lib/motion";

// const FLOATING_CHIPS = [
//   "Website Development",
//   "Web Applications",
//   "SEO Optimization",
//   "UI/UX Design",
//   "API Integration",
//   "Landing Pages",
//   "Maintenance",
//   "AI Automation"
// ];

// // Continuous gentle floating animation configuration for high-end SaaS feeling
// const floatAnimation = (delay: number = 0, yRange: number = 8) => ({
//   animate: {
//     y: [-yRange, yRange, -yRange],
//     transition: {
//       duration: 6,
//       repeat: Infinity,
//       repeatType: "reverse" as const,
//       ease: "easeInOut",
//       delay: delay,
//     },
//   },
// });

// export default function Hero() {
//   return (
//     <section id="home" className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28">
//       {/* Background Gradients & Grid */}
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_85%_15%,rgba(249,115,22,0.08)_0%,transparent_100%),radial-gradient(50%_50%_at_65%_75%,rgba(238,245,255,0.9)_0%,transparent_100%)]"
//       />
//       <div
//         aria-hidden
//         className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_80%)]"
//       />

//       <div className="container-x grid items-center gap-12 lg:grid-cols-12">
//         {/* Left Column: Content */}
//         <motion.div 
//           className="lg:col-span-6 flex flex-col"
//           variants={stagger} 
//           initial="hidden" 
//           animate="visible"
//         >
//           <motion.h1
//             variants={fadeUp}
//             custom={1}
//             className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[#0F172A] sm:text-5xl lg:text-[3.6rem]"
//           >
//             Building{" "}
//             <span className="bg-gradient-to-r from-[#F97316] to-[#EA580C] bg-clip-text text-transparent">
//               Digital Solutions
//             </span>{" "}
//             For Modern Businesses
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             custom={2}
//             className="mt-6 max-w-xl text-base leading-relaxed text-[#0F172A]/70 md:text-lg"
//           >
//             Apexon engineers high-performance websites, scalable web applications, 
//             seamless mobile apps, advanced AI solutions, tailored SEO strategy, premium UI/UX, 
//             and enterprise software built to drive absolute business growth.
//           </motion.p>

//           {/* CTA Action Buttons */}
//           <motion.div
//             variants={fadeUp}
//             custom={3}
//             className="mt-8 flex flex-col gap-4 sm:flex-row"
//           >
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button href="/contact" variant="accent" size="lg" className="bg-[#F97316] text-white hover:bg-[#EA580C] transition-all duration-300 shadow-md shadow-orange-500/10">
//                 Book a Free Consultation
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button href="/services" variant="outline" size="lg" className="border-[#0F172A]/20 text-[#0F172A] hover:bg-[#EEF5FF] transition-all duration-300">
//                 View Services
//               </Button>
//             </motion.div>
//           </motion.div>

//           {/* Trust Matrix Section */}
//           <motion.div
//             variants={fadeUp}
//             custom={4}
//             className="mt-12 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#0F172A]/10 pt-8 sm:grid-cols-4"
//           >
//             <div className="flex flex-col gap-1">
//               <span className="flex items-center gap-1 text-sm font-semibold text-[#0F172A]">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <Star key={i} className="h-3.5 w-3.5 fill-[#F97316] text-[#F97316]" />
//                 ))}
//               </span>
//               <span className="text-xs text-[#0F172A]/60 font-medium">5.0 Rating Matrix</span>
//             </div>
            
//             <div className="flex flex-col gap-0.5">
//               <span className="flex items-center gap-1.5 text-sm font-bold text-[#0F172A]">
//                 <Layers className="h-4 w-4 text-[#F97316]" />
//                 100+ Projects
//               </span>
//               <span className="text-xs text-[#0F172A]/60 font-medium">Delivered Successfully</span>
//             </div>

//             <div className="flex flex-col gap-0.5">
//               <span className="flex items-center gap-1.5 text-sm font-bold text-[#0F172A]">
//                 <Cpu className="h-4 w-4 text-[#F97316]" />
//                 20+ Techs
//               </span>
//               <span className="text-xs text-[#0F172A]/60 font-medium">Modern Cutting-Edge Stack</span>
//             </div>

//             <div className="flex flex-col gap-0.5">
//               <span className="flex items-center gap-1.5 text-sm font-bold text-[#0F172A]">
//                 <Globe className="h-4 w-4 text-[#F97316]" />
//                 Worldwide
//               </span>
//               <span className="text-xs text-[#0F172A]/60 font-medium">Global Enterprise Clients</span>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Right Column: Premium Mockup and Glassmorphism Dashboard Scene */}
//         <div className="relative lg:col-span-6 hidden lg:flex items-center justify-center h-[560px]">
//           {/* Subtle Background Glow under Mockups */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-400/10 blur-[100px] rounded-full -z-10" />
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 15 }}
//             // animate={{ opacity: 1, scale: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
//             className="relative w-full h-full flex items-center justify-center"
//             {...floatAnimation(0, 4)}
//           >
//             {/* Primary MacBook Base Mockup Simulation */}
//             <div className="relative w-[85%] aspect-[16/10] bg-[#0F172A] rounded-2xl p-2 shadow-2xl border border-white/10 overflow-hidden transform -rotate-2 group">
//               <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col relative border border-[#0F172A]/10">
//                 {/* Simulated Web Application UI inside MacBook */}
//                 <div className="h-6 bg-[#EEF5FF] border-b border-[#0F172A]/5 flex items-center px-3 gap-1.5">
//                   <div className="w-2 h-2 rounded-full bg-red-400" />
//                   <div className="w-2 h-2 rounded-full bg-yellow-400" />
//                   <div className="w-2 h-2 rounded-full bg-green-400" />
//                   <div className="h-4 bg-white/80 rounded w-40 mx-auto border border-[#0F172A]/5 text-[9px] flex items-center justify-center text-[#0F172A]/40">
//                     apexon.io/dashboard
//                   </div>
//                 </div>
//                 <div className="flex-1 bg-slate-50 p-3 grid grid-cols-12 gap-2 text-[10px]">
//                   <aside className="col-span-3 border-r border-[#0F172A]/5 pr-1 space-y-1">
//                     <div className="h-3 w-12 bg-[#F97316]/10 rounded font-bold text-[#F97316] text-[8px] flex items-center px-1 mb-2">APEXON</div>
//                     <div className="h-3 bg-[#EEF5FF] rounded" />
//                     <div className="h-3 bg-transparent rounded" />
//                     <div className="h-3 bg-transparent rounded" />
//                   </aside>
//                   <main className="col-span-9 space-y-2">
//                     <div className="h-10 bg-white rounded-lg border border-[#0F172A]/5 p-2 flex justify-between items-center">
//                       <div>
//                         <div className="font-semibold text-[#0F172A] text-[9px]">Hero Performance</div>
//                         <div className="text-[7px] text-emerald-500">Live & Stable</div>
//                       </div>
//                       <div className="w-16 h-full bg-orange-50 rounded" />
//                     </div>
//                     <div className="grid grid-cols-3 gap-1.5">
//                       <div className="h-12 bg-white rounded border border-[#0F172A]/5" />
//                       <div className="h-12 bg-white rounded border border-[#0F172A]/5" />
//                       <div className="h-12 bg-[#0F172A] rounded border border-[#0F172A]/5" />
//                     </div>
//                   </main>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Phone Mockup Simulation */}
//             <motion.div 
//               className="absolute bottom-6 right-4 w-[120px] aspect-[9/19] bg-[#0F172A] rounded-[24px] p-1.5 shadow-2xl border border-white/20 z-20"
//               {...floatAnimation(0.5, 6)}
//             >
//               <div className="w-full h-full bg-white rounded-[19px] overflow-hidden relative border border-[#0F172A]/10 flex flex-col">
//                 <div className="h-4 bg-white flex justify-center items-center">
//                   <div className="w-12 h-2.5 bg-[#0F172A] rounded-b-md" />
//                 </div>
//                 <div className="flex-1 bg-gradient-to-b from-[#EEF5FF] to-white p-2">
//                   <div className="text-[7px] font-bold text-[#F97316]">APEXON</div>
//                   <div className="text-[9px] font-extrabold text-[#0F172A] mt-1 leading-none">Scalable Web Apps</div>
//                   <div className="w-full h-12 bg-[#0F172A] rounded-md mt-2 p-1 text-[5px] text-white">
//                     UI Design System
//                   </div>
//                   <div className="w-full h-8 bg-white shadow-sm border border-black/5 rounded-md mt-1.5" />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Glassmorphism Card 1: SEO Score */}
//             <motion.div 
//               className="absolute top-6 left-2 w-36 backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-3 z-30"
//               {...floatAnimation(1, 5)}
//             >
//               <div className="flex items-center justify-between">
//                 <span className="text-[10px] font-semibold text-[#0F172A]/60 uppercase tracking-wider">SEO Score</span>
//                 <Search className="h-3 w-3 text-[#F97316]" />
//               </div>
//               <div className="flex items-baseline gap-1 mt-1">
//                 <span className="text-xl font-bold text-[#0F172A]">98<span className="text-xs text-[#F97316]">+</span></span>
//                 <span className="text-[9px] text-emerald-500 font-medium">Excellent</span>
//               </div>
//               <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
//                 <div className="bg-gradient-to-r from-orange-400 to-[#F97316] w-[98%] h-full rounded-full" />
//               </div>
//             </motion.div>

//             {/* Glassmorphism Card 2: Analytics & Performance */}
//             <motion.div 
//               className="absolute -top-4 right-14 w-44 backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-3 z-30"
//               {...floatAnimation(1.8, 8)}
//             >
//               <div className="flex items-center gap-2">
//                 <div className="p-1 bg-emerald-50 rounded-lg">
//                   <Gauge className="h-3.5 w-3.5 text-emerald-500" />
//                 </div>
//                 <div>
//                   <div className="text-[11px] font-bold text-[#0F172A]">Performance</div>
//                   <div className="text-[8px] text-[#0F172A]/50">Global Core Web Vitals</div>
//                 </div>
//               </div>
//               <div className="mt-2.5 flex items-center justify-between border-t border-black/5 pt-2">
//                 <div className="text-center">
//                   <div className="text-[10px] font-bold text-emerald-500">99</div>
//                   <div className="text-[7px] text-[#0F172A]/40 uppercase">Speed</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-[10px] font-bold text-[#0F172A]">0.1s</div>
//                   <div className="text-[7px] text-[#0F172A]/40 uppercase">LCP</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-[10px] font-bold text-[#0F172A]">0ms</div>
//                   <div className="text-[7px] text-[#0F172A]/40 uppercase">TBT</div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Glassmorphism Card 3: Revenue Chart */}
//             <motion.div 
//               className="absolute bottom-12 -left-8 w-48 backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-3 z-30"
//               {...floatAnimation(2.5, 6)}
//             >
//               <div className="flex items-center justify-between mb-1.5">
//                 <span className="text-[10px] font-bold text-[#0F172A]">Conversion MRR</span>
//                 <TrendingUp className="h-3 w-3 text-emerald-500" />
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-lg font-extrabold text-[#0F172A]">$42,890</span>
//                 <span className="text-[8px] font-medium bg-emerald-50 text-emerald-600 px-1 rounded">+14.2%</span>
//               </div>
//               {/* Mini Sparkline Simulation */}
//               <div className="mt-2 h-7 flex items-end gap-1">
//                 <div className="w-full bg-[#EEF5FF] h-[40%] rounded-sm" />
//                 <div className="w-full bg-[#EEF5FF] h-[55%] rounded-sm" />
//                 <div className="w-full bg-[#EEF5FF] h-[45%] rounded-sm" />
//                 <div className="w-full bg-[#EEF5FF] h-[75%] rounded-sm" />
//                 <div className="w-full bg-orange-200 h-[65%] rounded-sm" />
//                 <div className="w-full bg-[#F97316] h-[95%] rounded-sm" />
//               </div>
//             </motion.div>

//             {/* Glassmorphism Card 4: Micro Metrics (Visitors & Security) */}
//             <motion.div 
//               className="absolute top-1/2 -right-12 backdrop-blur-md bg-white/70 border border-white/30 shadow-xl rounded-2xl p-2.5 z-30 flex flex-col gap-2"
//               {...floatAnimation(1.2, 4)}
//             >
//               <div className="flex items-center gap-2">
//                 <Shield className="h-3.5 w-3.5 text-[#F97316]" />
//                 <span className="text-[9px] font-bold text-[#0F172A] whitespace-nowrap">SSL Secured</span>
//               </div>
//               <div className="flex items-center gap-2 border-t border-black/5 pt-1.5">
//                 <Zap className="h-3.5 w-3.5 text-amber-500" />
//                 <span className="text-[9px] font-bold text-[#0F172A] whitespace-nowrap">Edge Optimized</span>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Bottom Segment: Floating Feature Chips Row */}
//       <div className="container-x mt-20">
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 0.6 }}
//           className="flex flex-wrap justify-center items-center gap-3 border-t border-[#0F172A]/5 pt-10"
//         >
//           {FLOATING_CHIPS.map((chip, idx) => (
//             <motion.span
//               key={chip}
//               whileHover={{ 
//                 scale: 1.05, 
//                 backgroundColor: "#EEF5FF", 
//                 borderColor: "rgba(249,115,22,0.3)",
//                 color: "#F97316"
//               }}
//               transition={{ type: "spring", stiffness: 400, damping: 15 }}
//               className="px-4 py-2 text-xs font-semibold rounded-full border border-[#0F172A]/10 bg-white text-[#0F172A]/80 shadow-sm cursor-default transition-colors duration-200"
//             >
//               {chip}
//             </motion.span>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }