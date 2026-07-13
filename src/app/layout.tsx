import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { UiProvider } from "@/store/ui-context";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import "@/styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexon.dev"),
  title: {
    default: "Apexon — Book IT Services Online | Web, Mobile, AI & Cloud",
    template: "%s · Apexon",
  },
  description:
    "Apexon helps startups and businesses build scalable websites, mobile apps, AI solutions, and enterprise software. Transparent fixed-price plans — book online in minutes.",
  keywords: [
    "web development company",
    "mobile app development",
    "AI solutions",
    "SaaS development",
    "book IT services online",
    "Apexon",
  ],
  openGraph: {
    title: "Apexon — Book IT Services Online",
    description:
      "Websites, mobile apps, AI, and cloud — transparent fixed-price plans you can book online.",
    url: "https://apexon.dev",
    siteName: "Apexon",
    type: "website",
    images: [{ url: "/logo-full.png", width: 1100, height: 420, alt: "Apexon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apexon — Book IT Services Online",
    description:
      "Websites, mobile apps, AI, and cloud — fixed-price plans you can book online.",
    images: ["/logo-full.png"],
  },
  icons: { icon: "/favicon.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1D4ED8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-body">
        <UiProvider>
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </UiProvider>
      </body>
    </html>
  );
}
