// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Calendar, MapPin } from 'lucide-react';

// export default function EventBanner() {
//   // Event Schedule Data derived from the poster
//   const events = [
//     {
//       date: "March 1, 2026 (Sunday)",
//       title: "Silver Chariot Procession",
//       desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
//       color: "bg-gray-100 border-l-4 border-gray-400"
//     },
//     {
//       date: "March 2, 2026 (Monday)",
//       title: "Golden Chariot Procession",
//       desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
//       color: "bg-yellow-50 border-l-4 border-yellow-500"
//     },
//     {
//       date: "March 3, 2026 (Tuesday)",
//       title: "Floral Chariot Procession",
//       desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
//       color: "bg-red-50 border-l-4 border-red-500"
//     }
//   ];

//   return (
//     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
//       <div className="max-w-6xl mx-auto">
        
//         <div className="grid md:grid-cols-12 gap-8 items-center">
          
//           {/* 1. LEFT SIDE: Content & Schedule */}
//           {/* Spans 7 columns on desktop */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="md:col-span-7 space-y-6 order-2 md:order-1"
//           >
//             {/* Header */}
//             <div>
//               <span className="inline-block px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-3">
//                 Upcoming Grand Event
//               </span>
//               <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 leading-tight">
//                 86th Avathara Thirunal <br/>
//                 <span className="text-[#a7150b]">Perumangala Vizha</span>
//               </h2>
//               <p className="text-gray-600 text-lg">
//                 Celebrating the divine life of Arulthiru Bangaru Adigalar.
//               </p>
//             </div>

//             {/* Schedule List */}
//             <div className="space-y-4">
//               {events.map((event, idx) => (
//                 <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
//                   <div className="flex items-start gap-3">
//                     <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold text-gray-900">{event.date}</h4>
//                       <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
//                       <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA / Location */}
//             <div className="pt-4 flex flex-col sm:flex-row gap-4">
//               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
//                 <MapPin className="w-5 h-5 text-[#a7150b]" />
//                 <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
//               </div>
//             </div>

//           </motion.div>

//           {/* 2. RIGHT SIDE: The Vertical Poster Image */}
//           {/* Spans 5 columns on desktop */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="md:col-span-5 relative order-1 md:order-2"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group">
//               {/* Image Container - Aspect ratio suited for vertical poster */}
//               <div className="aspect-[9/14] relative w-full"> 
//                 <Image 
//                   // Make sure to put the image in your public folder and rename it
//                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
//                   alt="86th Avathara Thirunal Poster"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
              
//               {/* Shine Effect */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

export default function EventBanner() {
  const events = [
    {
      date: "March 1, 2026 (Sunday)",
      title: "Silver Chariot Procession",
      desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
      color: "bg-gray-100 border-l-4 border-gray-400"
    },
    {
      date: "March 2, 2026 (Monday)",
      title: "Golden Chariot Procession",
      desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
      color: "bg-yellow-50 border-l-4 border-yellow-500"
    },
    {
      date: "March 3, 2026 (Tuesday)",
      title: "Floral Chariot Procession",
      desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
      color: "bg-red-50 border-l-4 border-red-500"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-orange-50/30">
      <div className="max-w-6xl mx-auto">
        
        {/* --- 1. CENTERED TOP BADGE --- */}
        {/* This sits outside the grid, centered at the very top */}
        <div className="flex justify-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            Upcoming Grand Event
          </motion.span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* --- 2. LEFT SIDE: Title & Schedule --- */}
          {/* Title stays here, left aligned */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-8 order-2 md:order-1"
          >
            {/* Header (Title & Desc only) */}
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
                86th Avathara Thirunal <br/>
                <span className="text-[#a7150b]">Perumangala Vizha</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Celebrating the divine life of Arulthiru Bangaru Adigalar.
              </p>
            </div>

            {/* Schedule List */}
            <div className="space-y-4">
              {events.map((event, idx) => (
                <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{event.date}</h4>
                      <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
                      <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA / Location */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
                <MapPin className="w-5 h-5 text-[#a7150b]" />
                <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
              </div>
            </div>
          </motion.div>

          {/* --- 3. RIGHT SIDE: Poster Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-5 relative order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group max-w-sm mx-auto md:max-w-full">
              <div className="aspect-[9/14] relative w-full"> 
                <Image 
                  src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
                  alt="86th Avathara Thirunal Poster"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}