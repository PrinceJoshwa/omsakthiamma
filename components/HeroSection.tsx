// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function HeroSection() {
//   const posterMobile = "/heromobile.jpeg";   // Mobile image
//   const posterDesktop = "/herofin.jpeg";       // Desktop image

//   return (
//     <section className="relative w-full overflow-hidden mt-16">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[85vh] w-full"
//       >

//         {/* Mobile Hero Image */}
//         <Image
//           src={posterMobile}
//           alt="Om Sakthi Amma - Divine Grace Mobile"
//           fill
//           priority
//           className="object-cover block md:hidden"
//         />

//         {/* Desktop Hero Image */}
//         <Image
//           src={posterDesktop}
//           alt="Om Sakthi Amma - Divine Grace Desktop"
//           fill
//           priority
//           className="object-fill hidden md:block"
//         />

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

//         {/* Content Overlay */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4"
//         >
//           {/* Your heading / content can go here */}
//         </motion.div>

//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  // You can update these images if needed
  const heroImage = "/hero1.jpeg"; // Using a specific image for the 40% side

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row overflow-hidden mt-0">
      
      {/* LEFT SIDE: 60% Text Content with Gradient Background */}
      <div className="w-full md:w-[60%] bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-8 md:p-16 lg:p-20 relative">
        
        {/* Background Decorative Pattern (Optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] mix-blend-multiply"></div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#a7150b] text-sm font-bold tracking-wider mb-6">
            OM SAKTHI
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-6 spiritual-text">
            Melmaruvathur <br />
            <span className="text-[#a7150b]">Adhiparasakthi</span> <br />
            Siddhar Peedam
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            Where spirituality meets service. Experience the divine grace of Arul Thiru Bangaru Adigalar and find inner peace through selfless devotion.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/siddhar-peedam/introduction">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold shadow-lg hover:bg-[#8a0d08] transition-all"
              >
                Learn More
              </motion.button>
            </Link>
            
            <Link href="/poojas-donations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-full font-bold shadow-sm hover:bg-orange-50 transition-all"
              >
                Donate
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: 40% Image */}
      <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-full relative"
        >
          <Image
            src={heroImage}
            alt="Arul Thiru Bangaru Adigalar"
            fill
            priority
            className="object-cover object-top shadow-[-10px_0_30px_rgba(0,0,0,0.1)]" 
          />
          
          {/* Gradient Overlay for smooth blending on mobile */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden"></div>
        </motion.div>
      </div>

    </section>
  );
}