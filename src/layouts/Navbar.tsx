"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/content";
import { useUi } from "@/store/ui-context";
import { cn } from "@/utils/cn";
import logoDark from "../../public/logo-dark.png";

export default function Navbar() {
  const { menuOpen, setMenuOpen } = useUi();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top contact bar */}
      <div className="hidden bg-brand-dark text-white md:block">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Phone className="h-3.5 w-3.5" /> {COMPANY.phone}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/85">
              <Mail className="h-3.5 w-3.5" /> {COMPANY.email}
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 text-white/70">
            <Clock className="h-3.5 w-3.5" /> {COMPANY.hours}
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className={cn(
          "bg-white transition-shadow duration-300",
          scrolled ? "shadow-nav" : "border-b border-surface-line"
        )}
      >
        <nav
          aria-label="Main navigation"
          className="container-x flex items-center justify-between py-3.5"
        >
          <Link href="/" aria-label="Apexon — home" className="shrink-0">
            <Image src={logoDark} alt="Apexon" priority className="h-8 w-auto md:h-9" />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-surface-alt hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/services"
              className="hidden rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition-colors hover:bg-accent-dark lg:inline-flex"
            >
              Book a Service
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-lg border border-surface-line text-ink lg:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-surface-line bg-white lg:hidden"
            >
              <div className="container-x flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-sm font-medium text-ink-soft hover:bg-surface-alt hover:text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Book a Service
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
