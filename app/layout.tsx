// // // import type { Metadata } from "next";
// // // import { Geist, Geist_Mono } from 'next/font/google';
// // // import "./globals.css";
// // // import Header from "@/components/Header";
// // // import Footer from "@/components/Footer";
// // // import ScrollToTop from "@/components/ScrollToTop";
// // // import WhatsAppChat from "@/components/WhatsAppChat";

// // // const geistSans = Geist({ subsets: ["latin"] });
// // // const geistMono = Geist_Mono({ subsets: ["latin"] });

// // // export const metadata: Metadata = {
// // //   title: "Om Sakthi Amma | Spiritual Wisdom & Divine Grace",
// // //   description:
// // //     "Experience spiritual enlightenment through the teachings and grace of Om Sakthi Amma. Discover divine wisdom, sacred traditions, and transformative spiritual practices.",
// // //   viewport: {
// // //     width: "device-width",
// // //     initialScale: 1,
// // //     maximumScale: 1,
// // //   },
// // //     generator: 'v0.app'
// // // };

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   return (
// // //     <html lang="en">
// // //       <body className={`${geistSans.className} flex flex-col min-h-screen`}>
// // //         <Header />
// // //         <main className="flex-1">{children}</main>
// // //         <Footer />
// // //         {/* Added scroll to top button */}
// // //         {/* <ScrollToTop /> */}
// // //         <WhatsAppChat />
// // //       </body>
// // //     </html>
// // //   );
// // // }

// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from 'next/font/google';
// // import "./globals.css";
// // import Header from "@/components/Header";
// // import Footer from "@/components/Footer";
// // import ScrollToTop from "@/components/ScrollToTop";
// // import WhatsAppChat from "@/components/WhatsAppChat";
// // import NextTopLoader from 'nextjs-toploader'; // <--- 1. IMPORT THIS

// // const geistSans = Geist({ subsets: ["latin"] });
// // const geistMono = Geist_Mono({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Om Sakthi Amma | Spiritual Wisdom & Divine Grace",
// //   description:
// //     "Experience spiritual enlightenment through the teachings and grace of Om Sakthi Amma. Discover divine wisdom, sacred traditions, and transformative spiritual practices.",
// //   viewport: {
// //     width: "device-width",
// //     initialScale: 1,
// //     maximumScale: 1,
// //   },
// //   generator: 'v0.app'
// // };

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <html lang="en">
// //       <body className={`${geistSans.className} flex flex-col min-h-screen`}>
// //         {/* 2. ADD THIS COMPONENT AT THE VERY TOP OF BODY */}
// //         <NextTopLoader 
// //           color="#a7150b"
// //           initialPosition={0.08}
// //           crawlSpeed={200}
// //           height={3}
// //           crawl={true}
// //           showSpinner={false}
// //           easing="ease"
// //           speed={200}
// //           shadow="0 0 10px #a7150b,0 0 5px #a7150b"
// //         />
        
// //         <Header />
// //         <main className="flex-1">{children}</main>
// //         <Footer />
// //         {/* <ScrollToTop /> */}
// //         <WhatsAppChat />
// //       </body>
// //     </html>
// //   );
// // }

// import type { Metadata, Viewport } from "next"; // <--- 1. Import Viewport type
// import { Geist, Geist_Mono } from 'next/font/google';
// import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";
// import WhatsAppChat from "@/components/WhatsAppChat";
// import NextTopLoader from 'nextjs-toploader';

// const geistSans = Geist({ subsets: ["latin"] });
// const geistMono = Geist_Mono({ subsets: ["latin"] });

// // 2. Export Viewport separately
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
// };

// export const metadata: Metadata = {
//   title: "Om Sakthi Amma | Spiritual Wisdom & Divine Grace",
//   description:
//     "Experience spiritual enlightenment through the teachings and grace of Om Sakthi Amma. Discover divine wisdom, sacred traditions, and transformative spiritual practices.",
//     icons: {
//     icon: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
//     shortcut: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
//     apple: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png", // optional
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.className} flex flex-col min-h-screen`}>
//         <NextTopLoader 
//           color="#a7150b"
//           initialPosition={0.08}
//           crawlSpeed={200}
//           height={3}
//           crawl={true}
//           showSpinner={false}
//           easing="ease"
//           speed={200}
//           shadow="0 0 10px #a7150b,0 0 5px #a7150b"
//         />
        
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//         {/* <ScrollToTop /> */}
//         <WhatsAppChat />
//       </body>
//     </html>
//   );
// }

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script"; // ✅ important
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

/* ✅ Viewport */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

/* ✅ Metadata */
export const metadata: Metadata = {
  title: "Om Sakthi Amma | Spiritual Wisdom & Divine Grace",
  description:
    "Experience spiritual enlightenment through the teachings and grace of Om Sakthi Amma. Discover divine wisdom, sacred traditions, and transformative spiritual practices.",
  icons: {
    icon: "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
    shortcut:
      "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
    apple:
      "https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png",
  },
};

/* ✅ Root Layout */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} flex flex-col min-h-screen`}>

        {/* ✅ Google Analytics (Correct Next.js Way) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7Y54RC9RB"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H7Y54RC9RB');
          `}
        </Script>

        {/* ✅ Page Loader */}
        <NextTopLoader
          color="#a7150b"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #a7150b,0 0 5px #a7150b"
        />

        {/* ✅ Layout Components */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppChat />

      </body>
    </html>
  );
}