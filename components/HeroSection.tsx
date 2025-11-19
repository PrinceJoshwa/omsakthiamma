// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// interface HeroPoster {
//   hero_poster?: string;
//   hero_poster_mobile?: string;
// }

// export default function HeroSection() {
//   const [heroData, setHeroData] = useState<HeroPoster | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Fetch hero poster from WordPress REST API
//     const fetchHeroPoster = async () => {
//       try {
//         // Replace with your actual WordPress site URL
//         const wpSiteUrl = process.env.NEXT_PUBLIC_WP_SITE_URL || 'https://example.com/wp-json';
        
//         // Example API endpoint - adjust based on your WordPress setup
//         const response = await fetch(`${wpSiteUrl}/wp/v2/pages?slug=home`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0 && data[0].acf) {
//             setHeroData({
//               hero_poster: data[0].acf.hero_poster || '',
//               hero_poster_mobile: data[0].acf.hero_poster_mobile || '',
//             });
//           }
//         }
//       } catch (error) {
//         console.log('[v0] WordPress fetch - using placeholder instead:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchHeroPoster();
//   }, []);

//   // Fallback poster URL
//   const posterUrl = heroData?.hero_poster || '/spiritual-om-sakthi-amma-hero-poster.jpg';
//   const posterMobileUrl = heroData?.hero_poster_mobile || '/spiritual-om-sakthi-amma-mobile-hero.jpg';

//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Desktop Hero */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-screen hidden md:block"
//       >
//         <Image
//           src={posterUrl || "/placeholder.svg"}
//           alt="Om Sakthi Amma - Divine Grace"
//           fill
//           priority
//           className="object-cover"
//         />
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/20"></div>

//         {/* Content Overlay */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10"
//         >
//           <h1 className="text-6xl font-bold mb-4 spiritual-text drop-shadow-lg">
//             Om Sakthi Amma
//           </h1>
//           <p className="text-2xl mb-8 drop-shadow-lg">
//             Divine Grace • Spiritual Wisdom • Eternal Blessings
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-[#a7150b] text-white rounded-lg font-bold hover:bg-[#8a0d08] transition shadow-lg"
//           >
//             Explore Our Teachings
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Mobile Hero */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-96 md:hidden"
//       >
//         <Image
//           src={posterMobileUrl || "/placeholder.svg"}
//           alt="Om Sakthi Amma - Divine Grace"
//           fill
//           priority
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/30"></div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4"
//         >
//           <h1 className="text-4xl font-bold mb-2 spiritual-text drop-shadow-lg">
//             Om Sakthi Amma
//           </h1>
//           <p className="text-lg mb-4 drop-shadow-lg">
//             Divine Grace & Spiritual Wisdom
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-6 py-2 bg-[#a7150b] text-white rounded-lg font-bold text-sm hover:bg-[#8a0d08] transition shadow-lg"
//           >
//             Explore
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* WordPress Integration Info */}
//       <div className="absolute bottom-4 right-4 text-xs text-gray-400 z-20 hidden lg:block">
//         <p>API: {process.env.NEXT_PUBLIC_WP_SITE_URL || 'Not configured'}</p>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  // Using om1.jpg as the main hero image
  const posterUrl = '/herofin.jpeg';
  
  return (
    <section className="relative w-full overflow-hidden mt-16"> {/* Added mt-16 to account for fixed header */}
      {/* Desktop Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[85vh] w-full"
      >
        <Image
          src={posterUrl}
          alt="Om Sakthi Amma - Divine Grace"
          fill
          priority
          className="object-fill"
        />
        {/* Overlay Gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>

        {/* Content Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4"
        >
          {/* <h1 className="text-5xl md:text-7xl font-bold mb-6 spiritual-text drop-shadow-xl">
            Melmaruvathur Adhiparasakthi Siddhar Peedam
          </h1> */}
          {/* <div className="space-y-3 mb-10 drop-shadow-xl max-w-3xl bg-black/20 p-6 rounded-xl backdrop-blur-sm border border-white/10">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed">
              எங்கெங்கு இருந்ததோ அங்குங்கு பக்தி வளரும்
            </p>
            <p className="text-xl md:text-2xl opacity-90 text-yellow-100">
              அறிவுகள் நிறையவும் அதிசயமாய் இருக்கும்
            </p>
          </div> */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#a7150b] text-white rounded-full font-bold text-lg hover:bg-[#8a0d08] transition shadow-2xl border-2 border-[#ffc107]"
          >
            Explore Our Teachings
          </motion.button> */}
        </motion.div>
      </motion.div>
    </section>
  );
}