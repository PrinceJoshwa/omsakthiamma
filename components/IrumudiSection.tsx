// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowRight, Star } from 'lucide-react';

// export default function IrumudiSection() {
//   return (
//     <section className="relative py-16 md:py-24 bg-[#fffbf0] overflow-hidden">
      
//       {/* Decorative Background Elements */}
//       <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"></div>

//       <div className="max-w-7xl mx-auto px-4 relative z-10">
//         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
//           {/* Left: Text Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="flex-1 space-y-6 text-center md:text-left"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase">
//               <Star className="w-3 h-3 fill-current" />
//               Irumudi Festival 2025
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-tamil leading-tight">
//               இன்னல் தணிக்கும் <br/>
//               <span className="text-[#a7150b]">இருமுடி</span>
//             </h2>
            
//             <p className="text-gray-600 text-lg leading-relaxed">
//               "Irumudi" signifies the removal of inner darkness ("Irul") and the union of the soul with the divine. Embark on this sacred journey to cleanse your karma, attain mental peace, and receive Amma's boundless grace.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
//               <Link href="/irumudi-significance">
//                 <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a7150b] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
//                   Read Full Details
//                   <ArrowRight className="w-5 h-5" />
//                 </button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* Right: Visual/Cards */}
//           <motion.div 
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex-1 w-full"
//           >
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-4 translate-y-8">
//                 <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-yellow-400">
//                   <h3 className="font-bold text-gray-800 text-xl mb-1">13 Items</h3>
//                   <p className="text-sm text-gray-500">Sacred Offering Kit</p>
//                 </div>
//                 <div className="bg-[#a7150b] p-6 rounded-2xl shadow-lg text-white">
//                   <h3 className="font-bold text-xl mb-1">48 Days</h3>
//                   <p className="text-sm text-white/80">Mandala Vratam</p>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <div className="bg-orange-500 p-6 rounded-2xl shadow-lg text-white">
//                   <h3 className="font-bold text-xl mb-1">Infinite</h3>
//                   <p className="text-sm text-white/80">Divine Blessings</p>
//                 </div>
//                 <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-red-500">
//                   <h3 className="font-bold text-gray-800 text-xl mb-1">Karma</h3>
//                   <p className="text-sm text-gray-500">Cleansing Ritual</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function IrumudiSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#fffbf0] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase">
              <Star className="w-3 h-3 fill-current" />
              Irumudi Festival 2025
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-tamil leading-tight">
              இன்னல் தணிக்கும் <br/>
              <span className="text-[#a7150b]">இருமுடி</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed font-tamil text-justify md:text-left">
              "இருமுடி என்பதற்கு இருள்முடி என்று பொருள். இதயத்தில் உள்ள இருளைப்போக்க அணியும் முடி. நம்மைத் தீயவர்களிடமிருந்து காப்பாற்றி நல்லொழுக்கத்தோடு வாழ வழி கிடைக்கும்."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Link href="/irumudi-significance">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#a7150b] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto font-tamil">
                  முழு விவரங்கள் படிக்க
                  <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Visual/Cards Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 translate-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-yellow-400">
                  <h3 className="font-bold text-gray-800 text-xl mb-1 font-tamil">13 பொருட்கள்</h3>
                  <p className="text-sm text-gray-500 font-tamil">இருமுடி பையில்</p>
                </div>
                <div className="bg-[#a7150b] p-6 rounded-2xl shadow-lg text-white">
                  <h3 className="font-bold text-xl mb-1 font-tamil">விரதம்</h3>
                  <p className="text-sm text-white/80 font-tamil">3 அல்லது 5 நாட்கள்</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-orange-500 p-6 rounded-2xl shadow-lg text-white">
                  <h3 className="font-bold text-xl mb-1 font-tamil">11 பலன்கள்</h3>
                  <p className="text-sm text-white/80 font-tamil">நன்மைகள்</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border-b-4 border-red-500">
                  <h3 className="font-bold text-gray-800 text-xl mb-1 font-tamil">கர்ம வினை</h3>
                  <p className="text-sm text-gray-500 font-tamil">அகல வழி</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}