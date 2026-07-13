import Link from "next/link";
import { cn } from "@/utils/cn";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-60";

const variants = {
  primary:
    "bg-brand text-white shadow-card hover:bg-brand-dark hover:shadow-lift active:translate-y-px",
  accent:
    "bg-accent text-white shadow-cta hover:bg-accent-dark active:translate-y-px",
  outline:
    "border border-surface-line bg-white text-ink hover:border-brand/40 hover:text-brand",
  ghost: "text-brand hover:bg-brand-light",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-sm md:text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
