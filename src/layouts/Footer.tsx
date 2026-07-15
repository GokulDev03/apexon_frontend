// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, type FormEvent } from "react";
// import {
//   Github,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Send,
//   MapPin,
//   Mail,
//   Phone,
// } from "lucide-react";
// import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/content";
// import { subscribeNewsletter } from "@/services/contact";
// import logo from "../../public/logo.png";

// const SOCIALS = [
//   { label: "Twitter / X", href: "#", icon: Twitter },
//   { label: "LinkedIn", href: "#", icon: Linkedin },
//   { label: "GitHub", href: "https://github.com/GokulDev03", icon: Github },
//   { label: "Instagram", href: "https://www.instagram.com/apexon_tech.in?igsh=eWthajAybTR0MmJ0&utm_source=qr", icon: Instagram },
// ];

// export default function Footer() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
//   const [feedback, setFeedback] = useState("");

//   const subscribe = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!email) return;
//     setStatus("sending");
//     const res = await subscribeNewsletter(email);
//     setStatus(res.ok ? "done" : "error");
//     setFeedback(
//       res.message ?? (res.ok ? "Subscribed — see you in your inbox." : "Something went wrong.")
//     );
//     if (res.ok) setEmail("");
//   };

//   return (
//     <footer id="contact" className="bg-brand-dark text-white">
//       <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
//         {/* Company */}
//         <div>
//           <Image src={logo} alt="Apexon" className="h-9 w-auto" />
//           <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
//             We help startups and businesses build scalable websites, mobile
//             apps, AI solutions, and enterprise software.
//           </p>
//           <ul className="mt-6 space-y-3 text-sm text-white/70">
          
//             <li  className="flex items-center gap-2.5">
//               <MapPin className="h-4 w-4 text-accent" /> {COMPANY.address}
//             </li>
            
//             <li className="flex items-center gap-2.5">
//               <Mail className="h-4 w-4 text-accent" /> {COMPANY.email}
//             </li>
//             <li className="flex items-center gap-2.5">
//               <Phone className="h-4 w-4 text-accent" /> {COMPANY.phone}
//             </li>
//           </ul>
//         </div>

//         {/* Quick links */}
//         <nav aria-label="Quick links">
//           <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
//             Quick Links
//           </h3>
//           <ul className="mt-5 space-y-3">
//             {NAV_LINKS.map((l) => (
//               <li key={l.href}>
//                 <Link
//                   href={l.href}
//                   className="text-sm text-white/70 transition-colors hover:text-white"
//                 >
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Services */}
//         <nav aria-label="Services">
//           <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
//             Services
//           </h3>
//           <ul className="mt-5 space-y-3">
//             {SERVICES.slice(0, 6).map((s) => (
//               <li key={s.slug}>
//                 <Link
//                   href={`/services/${s.slug}`}
//                   className="text-sm text-white/70 transition-colors hover:text-white"
//                 >
//                   {s.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
//             Newsletter
//           </h3>
//           <p className="mt-5 text-sm leading-relaxed text-white/70">
//             Product engineering insights, once a month. No spam.
//           </p>
//           <form onSubmit={subscribe} className="mt-5">
//             <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5">
//               <label htmlFor="newsletter-email" className="sr-only">
//                 Email address
//               </label>
//               <input
//                 id="newsletter-email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@company.com"
//                 className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 aria-label="Subscribe"
//                 className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-white transition-colors hover:bg-accent-dark"
//               >
//                 <Send className="h-4 w-4" />
//               </button>
//             </div>
//             <p
//               className={`mt-2 h-4 text-xs ${status === "error" ? "text-red-300" : "text-accent"}`}
//               role="status"
//             >
//               {status === "sending" && "Subscribing…"}
//               {(status === "done" || status === "error") && feedback}
//             </p>
//           </form>
//           <div className="mt-4 flex gap-3">
//             {SOCIALS.map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 aria-label={s.label}
//                 className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white/70 transition-all hover:border-accent hover:text-white"
//               >
//                 <s.icon className="h-4 w-4" />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-white/10">
//         <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
//           <p>© {new Date().getFullYear()} Apexon. All rights reserved.</p>
//           <p>GSTIN & MSME registered · Made in India 🇮🇳</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { NAV_LINKS, SERVICES, COMPANY } from "@/lib/content";
import { subscribeNewsletter } from "@/services/contact";
import logo from "../../public/logo.png";

const SOCIALS = [
  { label: "Twitter / X", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/GokulDev03", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/apexon_tech.in?igsh=eWthajAybTR0MmJ0&utm_source=qr", icon: Instagram },
];

const fadeUpFooter = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    const res = await subscribeNewsletter(email);
    setStatus(res.ok ? "done" : "error");
    setFeedback(
      res.message ?? (res.ok ? "Subscribed — see you in your inbox." : "Something went wrong.")
    );
    if (res.ok) setEmail("");
  };

  return (
    <footer id="contact" className="overflow-hidden bg-brand-dark text-white">
      <div className="container-x grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <motion.div
          variants={fadeUpFooter}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="min-w-0"
        >
          <Image src={logo} alt="Apexon" className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            We help startups and businesses build scalable websites, mobile
            apps, AI solutions, and enterprise software.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="break-words">{COMPANY.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="break-all">{COMPANY.email}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="break-words">{COMPANY.phone}</span>
            </li>
          </ul>
        </motion.div>

        {/* Quick links */}
        <motion.nav
          aria-label="Quick links"
          variants={fadeUpFooter}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="min-w-0"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Services */}
        <motion.nav
          aria-label="Services"
          variants={fadeUpFooter}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="min-w-0"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Services
          </h3>
          <ul className="mt-5 space-y-3">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-block text-sm text-white/70 transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Newsletter */}
        <motion.div
          variants={fadeUpFooter}
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="min-w-0"
        >
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
            Newsletter
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Product engineering insights, once a month. No spam.
          </p>
          <form onSubmit={subscribe} className="mt-5">
            <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 p-1.5">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full min-w-0 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark active:scale-95"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p
              className={`mt-2 h-4 text-xs ${status === "error" ? "text-red-300" : "text-accent"}`}
              role="status"
            >
              {status === "sending" && "Subscribing…"}
              {(status === "done" || status === "error") && feedback}
            </p>
          </form>
          <div className="mt-4 flex gap-3">
            {SOCIALS.map((s) => (
             <a 
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/60 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Apexon. All rights reserved.</p>
          <p>GSTIN & MSME registered · Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}