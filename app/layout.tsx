import type { Metadata } from "next";
import { Inter, Cormorant } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Serif italic for accent words (reference uses Cormorant italic 700).
const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratik Chogale — Full Stack Developer | AI & Web Applications",
  description:
    "Full Stack Developer building production-ready AI-powered applications, CRM systems, scalable web products and automation workflows.",
  keywords: [
    "Pratik Chogale",
    "Full Stack Developer",
    "AI Applications",
    "CRM",
    "Next.js",
    "Convex",
    "Supabase",
    "Database Optimization",
  ],
  openGraph: {
    title: "Pratik Chogale — Full Stack Developer",
    description:
      "Production-ready AI applications, CRM systems, database optimization, and full-stack product development.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Chogale — Full Stack Developer",
    description:
      "AI-powered applications, CRM systems, and scalable web products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full`}>
      <body className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <SmoothScroll />
        <CustomCursor />
        <RevealOnScroll />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
