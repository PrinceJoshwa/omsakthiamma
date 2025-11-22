// 'use client';

// import { motion } from 'framer-motion';
// import { Star, Heart, Flame, Sparkles, ArrowRight } from 'lucide-react';
// import Link from 'next/link';

// export default function SpecialOccasionsSection() {
//   const occasions = [
//     {
//       title: "Thai Poosam And Irumudi",
//       icon: Star,
//       link: "/thai-poosam" // Update with actual links later
//     },
//     {
//       title: "Amma's Birthday",
//       icon: Heart,
//       link: "/ammas-birthday"
//     },
//     {
//       title: "Aadi Pooram",
//       icon: Flame,
//       link: "/aadi-pooram"
//     },
//     {
//       title: "Navarathri",
//       icon: Sparkles,
//       link: "/navarathri"
//     }
//   ];

//   return (
//     <section className="w-full">
//       {/* 1. Yellow Banner Header */}
//       <div className="w-full bg-[#ffc107] py-8 shadow-sm border-b border-yellow-400">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Special Occasions
//         </h1>
//       </div>

//       {/* 2. Main Content Area with Dark Background like image (but nicer) */}
//       <div className="py-16 px-4"> {/* Using a refined grey from your image */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto space-y-6"
//         >
//           {occasions.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ delay: idx * 0.1, duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <Link href={item.link} className="block group">
//                 <div className="relative overflow-hidden bg-gradient-to-r from-[#7a0f07] to-[#a7150b] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-900/30 transform group-hover:-translate-y-1">
                  
//                   {/* Decorative sheen effect */}
//                   <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  
//                   <div className="p-8 md:p-10 flex items-center justify-between relative z-10">
//                     <div className="flex items-center gap-6">
//                       {/* Icon Circle */}
//                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ffc107] transition-colors duration-300">
//                         <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#ffc107] group-hover:text-[#7a0f07] transition-colors duration-300" />
//                       </div>
                      
//                       {/* Text */}
//                       <h3 className="text-xl md:text-3xl font-bold text-white tracking-wide group-hover:text-yellow-100 transition-colors">
//                         {item.title}
//                       </h3>
//                     </div>

//                     {/* Arrow Icon */}
//                     <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white/50 group-hover:text-[#ffc107] transform group-hover:translate-x-2 transition-all duration-300" />
//                   </div>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Star, Heart, Flame, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SpecialOccasionsSection() {
  const occasions = [
    { title: "Thai Poosam", icon: Star, link: "/thai-poosam" },
    { title: "Amma's Birthday", icon: Heart, link: "/ammas-birthday" },
    { title: "Aadi Pooram", icon: Flame, link: "/aadi-pooram" },
    { title: "Navarathri", icon: Sparkles, link: "/navarathri" }
  ];

  return (
    <section className="w-full">
      {/* 1. Yellow Banner Header */}
      <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm border-b border-yellow-400">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Special Occasions
        </h1>
      </div>

      {/* 2. Main Content Area */}
      <div className="py-10 md:py-16 px-4"> 
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4 md:space-y-6"
        >
          {occasions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={item.link} className="block group">
                <div className="relative overflow-hidden bg-gradient-to-r from-[#7a0f07] to-[#a7150b] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-900/30 transform group-hover:-translate-y-1">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
                  
                  <div className="p-6 md:p-10 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#ffc107] transition-colors duration-300">
                        <item.icon className="w-5 h-5 md:w-8 md:h-8 text-[#ffc107] group-hover:text-[#7a0f07] transition-colors duration-300" />
                      </div>
                      <h3 className="text-lg md:text-3xl font-bold text-white tracking-wide group-hover:text-yellow-100 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-white/50 group-hover:text-[#ffc107] transform group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}