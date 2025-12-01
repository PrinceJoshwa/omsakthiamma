// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function HeroSection() {
//   const heroImage = "/hero1.jpeg"; 

//   return (
//     <section className="relative w-full flex flex-col md:flex-row overflow-hidden">
      
//       {/* LEFT SIDE: Text Content */}
//       <div className="w-full md:w-[60%] bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-6 py-16 md:p-20 relative order-2 md:order-1">
        
//         <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] mix-blend-multiply"></div>

//         <motion.div 
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 max-w-2xl text-center md:text-left"
//         >
//           <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#a7150b] text-xs md:text-sm font-bold tracking-wider mb-4 md:mb-6">
//             OM SAKTHI
//           </span>
          
//           <h1 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4 md:mb-6 spiritual-text">
//             Melmaruvathur <br />
//             <span className="text-[#a7150b]">Adhiparasakthi</span> <br />
//             Siddhar Peedam
//           </h1>
          
//           <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
//             Where spirituality meets service. Experience the divine grace of Arul Thiru Bangaru Adigalar.
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             <Link href="/siddhar-peedam/introduction">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-2.5 md:px-8 md:py-3 bg-[#a7150b] text-white rounded-full font-bold shadow-lg hover:bg-[#8a0d08] transition-all text-sm md:text-base"
//               >
//                 Learn More
//               </motion.button>
//             </Link>
            
//             <Link href="/poojas-donations">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-full font-bold shadow-sm hover:bg-orange-50 transition-all text-sm md:text-base mb-4"
//               >
//                 Donate
//               </motion.button>
//             </Link>
//           </div>
//           <Link href="/district-president-instructions">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-2.5 md:px-8 md:py-3 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-full font-bold shadow-sm hover:bg-orange-50 transition-all text-sm md:text-base"
//               >
//                 District President Instructions
//               </motion.button>
//             </Link>
//         </motion.div>
//       </div>

//       {/* RIGHT SIDE: Image */}
//       <div className="w-full md:w-[40%] relative h-[300px] md:h-auto min-h-[300px] md:min-h-[85vh] bg-gray-100 order-1 md:order-2">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="w-full h-full relative"
//         >
//           <Image
//             src={heroImage}
//             alt="Arul Thiru Bangaru Adigalar"
//             fill
//             priority
//             className="object-cover object-top md:shadow-[-10px_0_30px_rgba(0,0,0,0.1)]" 
//           />
//           {/* Mobile Gradient */}
//           <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent md:hidden"></div>
//         </motion.div>
//       </div>

//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, UserCheck, Heart, ArrowRight } from 'lucide-react'; // Icons for clarity

export default function HeroSection() {
  const heroImage = "/hero1.jpeg"; 

  return (
    <section className="relative w-full flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT SIDE: Text Content */}
      <div className="w-full md:w-[60%] bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center p-6 py-16 md:p-20 relative order-2 md:order-1">
        
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] mix-blend-multiply"></div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-[#a7150b] text-xs md:text-sm font-bold tracking-wider mb-4 md:mb-6">
            OM SAKTHI
          </span>
          
          <h1 className="text-3xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4 md:mb-6 spiritual-text">
            Melmaruvathur <br />
            <span className="text-[#a7150b]">Adhiparasakthi</span> <br />
            Siddhar Peedam
          </h1>
          
          <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
            Where spirituality meets service. Experience the divine grace of Arul Thiru Bangaru Adigalar.
          </p>

          {/* --- NEW 2x2 BUTTON GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
            
            {/* 1. Learn More */}
            <Link href="/siddhar-peedam/introduction">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#a7150b] text-white rounded-xl font-bold shadow-lg hover:bg-[#8a0d08] transition-all text-sm md:text-base"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            
            {/* 2. Donate */}
            <Link href="/poojas-donations">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-xl font-bold shadow-sm hover:bg-orange-50 transition-all text-sm md:text-base"
              >
                Donate <Heart className="w-4 h-4" />
              </motion.button>
            </Link>

            {/* --- SEPARATOR LABEL (Optional) --- */}
            <div className="col-span-1 sm:col-span-2 flex items-center gap-3 my-1 opacity-50">
              <div className="h-px bg-gray-300 flex-grow"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Important Circulars</span>
              <div className="h-px bg-gray-300 flex-grow"></div>
            </div>

            {/* 3. District President Instructions */}
            <Link href="/district-president-instructions">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex flex-col items-center justify-center p-3 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
                  <FileText className="w-4 h-4 text-blue-600" /> Instructions to Districts
                </div>
                <span className="text-[10px] text-gray-500 font-tamil mt-1 group-hover:text-blue-600">மாவட்ட தலைவர் அறிவுறுத்தல்கள்</span>
              </motion.button>
            </Link>

            {/* 4. Irumudi Instructions (NEW) */}
            <Link href="/irumudi-instruction">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex flex-col items-center justify-center p-3 bg-white border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 text-gray-800 font-bold text-sm">
                  <UserCheck className="w-4 h-4 text-red-600" /> Devotee Guidelines
                </div>
                <span className="text-[10px] text-gray-500 font-tamil mt-1 group-hover:text-red-600">இருமுடி விதிமுறைகள்</span>
              </motion.button>
            </Link>

          </div>

        </motion.div>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-full md:w-[40%] relative h-[300px] md:h-auto min-h-[300px] md:min-h-[85vh] bg-gray-100 order-1 md:order-2">
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
            className="object-cover object-top md:shadow-[-10px_0_30px_rgba(0,0,0,0.1)]" 
          />
          {/* Mobile Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent md:hidden"></div>
        </motion.div>
      </div>

    </section>
  );
}