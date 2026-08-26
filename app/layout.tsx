import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { BottomNavigation } from "./components/BottomNavigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { AnimatedBackground } from "./components/AnimatedBackground";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pratik Chogale — Full Stack Developer | AI & Web Applications",
  description:
    "Full Stack Developer building production-ready AI-powered applications, CRM systems, and scalable web products with Next.js, Firebase, Supabase, and Convex.",
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
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full w-full flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <AnimatedBackground />
        <ScrollProgress />
        <Navbar />
        <div className="flex-1 pb-20 md:pb-0">{children}</div>
        <Footer />
        <BottomNavigation />
      </body>
    </html>
  );
}
