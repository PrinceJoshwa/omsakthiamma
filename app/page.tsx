// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import HeroSection from '@/components/HeroSection';
// import AboutSection from '@/components/AboutSection';
// import EventsSection from '@/components/EventsSection';
// import PoojaTimingsSection from '@/components/PoojaTimingsSection';
// import DonationsSection from '@/components/DonationsSection';
// import ContactSection from '@/components/ContactSection';

// export default function Home() {
//   return (
//     <main className="bg-white">
//       {/* Hero Section - WordPress Integrated */}
//       <HeroSection />

//       {/* About Section */}
//       <AboutSection />

//       {/* Temple Info Section */}
//       <section className="py-20 px-4 bg-gray-50">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
//             Welcome to Om Sakthi Amma Temple
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '🕉️',
//                 title: 'Sacred Traditions',
//                 description: 'Preserving ancient spiritual practices and wisdom for modern seekers.',
//               },
//               {
//                 icon: '✨',
//                 title: 'Divine Grace',
//                 description: 'Experience the transformative power of spiritual blessings and guidance.',
//               },
//               {
//                 icon: '🙏',
//                 title: 'Community',
//                 description: 'Join a loving community of devotees dedicated to spiritual growth.',
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//                 className="p-6 bg-white rounded-lg shadow-lg text-center border-t-4 border-[#ffc107]"
//               >
//                 <div className="text-4xl mb-4">{item.icon}</div>
//                 <h3 className="text-2xl font-bold text-[#a7150b] mb-3">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       {/* Events Section */}
//       <EventsSection />

//       {/* Pooja Timings Section */}
//       <PoojaTimingsSection />

//       {/* Donations Section */}
//       <DonationsSection />

//       {/* Contact Section */}
//       <ContactSection />
//     </main>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import PoojaTimingsSection from '@/components/PoojaTimingsSection';
import DonationsSection from '@/components/DonationsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Temple Info / Mantra Section */}
      <section className="py-20 px-4 bg-orange-50 pattern-bg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-16 spiritual-text">
            Divine Mantras
          </h2>

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
                className={`p-8 bg-white rounded-xl shadow-xl text-center border-t-4 ${item.color} hover:shadow-2xl transition-shadow`}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#a7150b] mb-4">{item.title}</h3>
                <p className="text-gray-700 font-medium leading-loose text-sm md:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NEW SECTION: Gallery using om3, om4, om5 */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-4">Sacred Moments</h2>
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

      {/* Events Section */}
      <EventsSection />

      {/* Pooja Timings Section */}
      <PoojaTimingsSection />

      {/* Donations Section */}
      <DonationsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}