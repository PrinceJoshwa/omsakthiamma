// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import HeroSection from '@/components/HeroSection';
// // import AboutSection from '@/components/AboutSection';
// // import EventsSection from '@/components/EventsSection';
// // import PoojaTimingsSection from '@/components/PoojaTimingsSection';
// // import DonationsSection from '@/components/DonationsSection';
// // import ContactSection from '@/components/ContactSection';

// // export default function Home() {
// //   return (
// //     <main className="bg-white">
// //       {/* Hero Section */}
// //       <HeroSection />

// //       {/* About Section */}
// //       <AboutSection />

// //       {/* Temple Info / Mantra Section */}
// //       <section className="py-20 px-4 bg-orange-50 pattern-bg">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //           className="max-w-7xl mx-auto"
// //         >
// //           <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-16 spiritual-text">
// //             Divine Mantras
// //           </h2>

// //           <div className="grid md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 icon: '🕉️',
// //                 title: 'Moola Manthiram',
// //                 description: 'OMSAKTHIYE PARASAKTHIYE! • OMSAKTHIYE ADHIPARASAKTHIYE! • OMSAKTHIYE MARUVOOR ARASIYE! • OMSAKTHIYE OM VINAYAGA! • OMSAKTHIYE OM KAMAKSHIYE! • OMSAKTHIYE OM BANGARU KAMAKSHIYE!',
// //                 color: 'border-red-500'
// //               },
// //               {
// //                 icon: '🙏',
// //                 title: 'மூலமந்திரம்',
// //                 description: 'ஓம் சக்தியே! பராசக்தியே! • ஓம் சக்தியே! ஆதிபராசக்தியே! • ஓம் சக்தியே! மருவூர் அரசியே! • ஓம் சக்தியே! ஓம் விநாயகா! • ஓம் சக்தியே! ஓம் காமாட்சியே! • ஓம் சக்தியே! ஓம் பங்காரு காமாட்சியே!',
// //                 color: 'border-yellow-500'
// //               },
// //               {
// //                 icon: '✨',
// //                 title: 'Divine Blessings',
// //                 description: 'அன்று குளிர்ந்து நோய் தீர்த்த நாள் முழுவதும் மலர் சொரியும் பூமாறி அருளும்',
// //                 color: 'border-orange-500'
// //               },
// //             ].map((item, idx) => (
// //               <motion.div
// //                 key={item.title}
// //                 initial={{ opacity: 0, y: 30 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: idx * 0.2 }}
// //                 viewport={{ once: true }}
// //                 className={`p-8 bg-white rounded-xl shadow-xl text-center border-t-4 ${item.color} hover:shadow-2xl transition-shadow`}
// //               >
// //                 <div className="text-5xl mb-6">{item.icon}</div>
// //                 <h3 className="text-2xl font-bold text-[#a7150b] mb-4">{item.title}</h3>
// //                 <p className="text-gray-700 font-medium leading-loose text-sm md:text-base">{item.description}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </section>

// //       {/* NEW SECTION: Gallery using om3, om4, om5 */}
// //       <section className="py-24 px-4 bg-white">
// //         <div className="max-w-7xl mx-auto">
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             className="text-center mb-12"
// //           >
// //             <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-4">Sacred Moments</h2>
// //             <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of divine grace and spiritual fervor at Melmaruvathur.</p>
// //           </motion.div>
          
// //           <div className="grid md:grid-cols-3 gap-6">
// //             {[
// //               { src: "/om3.jpeg", alt: "Divine Pooja" },
// //               { src: "/om4.jpeg", alt: "Temple Celebration" },
// //               { src: "/om5.jpeg", alt: "Sacred Procession" },
// //             ].map((img, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, scale: 0.9 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 transition={{ delay: idx * 0.2, duration: 0.5 }}
// //                 viewport={{ once: true }}
// //                 className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
// //               >
// //                 <Image
// //                   src={img.src}
// //                   alt={img.alt}
// //                   fill
// //                   className="object-cover transition-transform duration-500 group-hover:scale-110"
// //                 />
// //                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Events Section */}
// //       <EventsSection />

// //       {/* Pooja Timings Section */}
// //       <PoojaTimingsSection />

// //       {/* Donations Section */}
// //       <DonationsSection />

// //       {/* Contact Section */}
// //       <ContactSection />
// //     </main>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import EventsSection from '@/components/EventsSection';
// import PoojaTimingsSection from '@/components/PoojaTimingsSection';
// import PoojaTimings from '@/components/Pooja';
// import DonationsSection from '@/components/DonationsSection';
// import ContactSection from '@/components/ContactSection';

// // Import new components
// import ResourcesSection from '@/components/Resources';
// import GoogleCalendarSection from '@/components/GoogleCalendar';
// import PilgrimServicesSection from '@/components/PilgrimService';
// import PublicationsSection from '@/components/Publication';
// import SpecialOccasionsSection from '@/components/SpecialOccasians';
// import LatestUpdatesSection from '@/components/LatestUpdates';
// import ActivitiesSection from '@/components/Activities';
// import SacredFestivalsSection from '@/components/SacredFestivels';
// import FeaturedVideoSection from '@/components/FeaturedVideo';
// import EventPopup from '@/components/EventPopup';
// import WhatsAppChat from '@/components/WhatsAppChat';

// export default function Home() {
//   return (
//     <main className="bg-white">
//       <EventPopup />
//       {/* Hero Section */}
//       <HeroSection />

//       {/* About Section */}
//       <AboutSection />

//       <FeaturedVideoSection />
//       <PilgrimServicesSection />

//       {/* Temple Info / Mantra Section */}
//       <section className="py-20 px-4 bg-orange-50 pattern-bg">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-7xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-16 spiritual-text">
//             Divine Mantras
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '🕉️',
//                 title: 'Moola Manthiram',
//                 description: 'OMSAKTHIYE PARASAKTHIYE! • OMSAKTHIYE ADHIPARASAKTHIYE! • OMSAKTHIYE MARUVOOR ARASIYE! • OMSAKTHIYE OM VINAYAGA! • OMSAKTHIYE OM KAMAKSHIYE! • OMSAKTHIYE OM BANGARU KAMAKSHIYE!',
//                 color: 'border-red-500'
//               },
//               {
//                 icon: '🙏',
//                 title: 'மூலமந்திரம்',
//                 description: 'ஓம் சக்தியே! பராசக்தியே! • ஓம் சக்தியே! ஆதிபராசக்தியே! • ஓம் சக்தியே! மருவூர் அரசியே! • ஓம் சக்தியே! ஓம் விநாயகா! • ஓம் சக்தியே! ஓம் காமாட்சியே! • ஓம் சக்தியே! ஓம் பங்காரு காமாட்சியே!',
//                 color: 'border-yellow-500'
//               },
//               {
//                 icon: '✨',
//                 title: 'Divine Blessings',
//                 description: 'அன்று குளிர்ந்து நோய் தீர்த்த நாள் முழுவதும் மலர் சொரியும் பூமாறி அருளும்',
//                 color: 'border-orange-500'
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className={`p-8 bg-white rounded-xl shadow-xl text-center border-t-4 ${item.color} hover:shadow-2xl transition-shadow`}
//               >
//                 <div className="text-5xl mb-6">{item.icon}</div>
//                 <h3 className="text-2xl font-bold text-[#a7150b] mb-4">{item.title}</h3>
//                 <p className="text-gray-700 font-medium leading-loose text-sm md:text-base">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-24 px-4 bg-white">
//       <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Sacred Moments
//         </h1>
//       </div>
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-center mb-12"
//           >
//             {/* <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-4"></h2> */}

//             <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of divine grace and spiritual fervor at Melmaruvathur.</p>
//           </motion.div>
          
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { src: "/om3.jpeg", alt: "Divine Pooja" },
//               { src: "/om4.jpeg", alt: "Temple Celebration" },
//               { src: "/om5.jpeg", alt: "Sacred Procession" },
//             ].map((img, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: idx * 0.2, duration: 0.5 }}
//                 viewport={{ once: true }}
//                 className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
//               >
//                 <Image
//                   src={img.src}
//                   alt={img.alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <SacredFestivalsSection />

//       {/* --- NEW SECTIONS ADDED HERE --- */}
//       {/* <PilgrimServicesSection /> */}
//       <PoojaTimings />
//       <PublicationsSection />
//             <ResourcesSection />
//       <SpecialOccasionsSection />
      
//       {/* 1. Resources (Articles/Books) Toggle Section */}


//       {/* 2. Google Calendar Section */}
//       <GoogleCalendarSection />

//       <LatestUpdatesSection />

//       <ActivitiesSection />
      
//       {/* ------------------------------- */}

//       {/* Events Section */}
//       <EventsSection />

//       {/* Pooja Timings Section */}
//       <PoojaTimingsSection />

//       {/* Donations Section */}
//       <DonationsSection />

//       {/* Contact Section */}
//       <ContactSection />
//       <WhatsAppChat />
//     </main>
//   );
// }


'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

// Component Imports
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedVideoSection from '@/components/FeaturedVideo';
import PilgrimServicesSection from '@/components/PilgrimService';
import SacredFestivalsSection from '@/components/SacredFestivels';
import PoojaTimings from '@/components/Pooja';
import PublicationsSection from '@/components/Publication';
import ResourcesSection from '@/components/Resources';
import SpecialOccasionsSection from '@/components/SpecialOccasians';
import GoogleCalendarSection from '@/components/GoogleCalendar';
import LatestUpdatesSection from '@/components/LatestUpdates';
import ActivitiesSection from '@/components/Activities';
import EventsSection from '@/components/EventsSection';
import DonationsSection from '@/components/DonationsSection';
import ContactSection from '@/components/ContactSection';
import EventPopup from '@/components/EventPopup';
import WhatsAppChat from '@/components/WhatsAppChat';

export default function Home() {
  return (
    <main className="bg-white">
      <EventPopup />
      
      {/* Hero Section */}
      <HeroSection />
      
      <FeaturedVideoSection />

      {/* --- COMBINED INTRODUCTION & MANTRAS SECTION --- */}
      <section className="relative py-24 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-orange-50/50 -z-10 pattern-bg"></div>

        {/* 1. Introduction (About) */}
        <div className="max-w-7xl mx-auto px-4 mb-20">
          <AboutSection /> 
          {/* Note: Ensure AboutSection doesn't have its own 'section' wrapper with huge padding, 
              or adjust it to fit nicely here. If it does, you might want to extract its content directly here. */}
        </div>

        {/* 2. Divine Mantras (Merged) */}
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Sacred Chants
            </span>
            <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text">
              Divine Mantras
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Chant these powerful mantras to invoke divine blessings and inner peace.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🕉️',
                title: 'Moola Manthiram',
                description: 'OMSAKTHIYE PARASAKTHIYE! • OMSAKTHIYE ADHIPARASAKTHIYE! • OMSAKTHIYE MARUVOOR ARASIYE! • OMSAKTHIYE OM VINAYAGA! • OMSAKTHIYE OM KAMAKSHIYE! • OMSAKTHIYE OM BANGARU KAMAKSHIYE!',
                color: 'border-red-500'
              },
              {
                icon: '🙏',
                title: 'மூலமந்திரம்',
                description: 'ஓம் சக்தியே! பராசக்தியே! • ஓம் சக்தியே! ஆதிபராசக்தியே! • ஓம் சக்தியே! மருவூர் அரசியே! • ஓம் சக்தியே! ஓம் விநாயகா! • ஓம் சக்தியே! ஓம் காமாட்சியே! • ஓம் சக்தியே! ஓம் பங்காரு காமாட்சியே!',
                color: 'border-yellow-500'
              },
              {
                icon: '✨',
                title: 'Divine Blessings',
                description: 'அன்று குளிர்ந்து நோய் தீர்த்த நாள் முழுவதும் மலர் சொரியும் பூமாறி அருளும்',
                color: 'border-orange-500'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-8 bg-white rounded-xl shadow-lg border-t-4 ${item.color} group overflow-hidden`}
              >
                {/* Decorative background icon opacity */}
                <div className="absolute top-4 right-4 text-9xl opacity-5 select-none grayscale group-hover:grayscale-0 transition-all duration-500">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-[#a7150b] mb-4">{item.title}</h3>
                  <p className="text-gray-700 font-medium leading-loose text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- CALL TO ACTION BUTTON --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/festivals/mantras">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#a7150b] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Sparkles className="w-5 h-5" />
                View All Mantras
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>

        </div>
      </section>
      {/* ---------------------------------------------- */}
      
      <PilgrimServicesSection />

      <SpecialOccasionsSection />


      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white">
        <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
            Sacred Moments
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">Glimpses of divine grace and spiritual fervor at Melmaruvathur.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/om3.jpeg", alt: "Divine Pooja" },
              { src: "/om4.jpeg", alt: "Temple Celebration" },
              { src: "/om5.jpeg", alt: "Sacred Procession" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <SacredFestivalsSection />
      <PoojaTimings />
      <PublicationsSection />
      <ResourcesSection />
      <EventsSection />
      <GoogleCalendarSection />
      <LatestUpdatesSection />
      <ActivitiesSection />
      {/* <DonationsSection /> */}
      <ContactSection />
      <WhatsAppChat />
    </main>
  );
}