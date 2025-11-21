import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Om Sakthi Amma | Spiritual Wisdom & Divine Grace",
  description:
    "Experience spiritual enlightenment through the teachings and grace of Om Sakthi Amma. Discover divine wisdom, sacred traditions, and transformative spiritual practices.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* Added scroll to top button */}
        {/* <ScrollToTop /> */}
      </body>
    </html>
  );
}
