
// "use client";

// import React from "react";
// import PageTemplate from "@/components/PageTemplate"; // Adjust path if needed
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { 
//   Droplet, 
//   CloudLightning, 
//   Mic2, 
//   Flower, 
//   ArrowRight
// } from "lucide-react";

// // --- HIGHLIGHTS DATA (Your Original Data) ---
// const highlights = [
//   {
//     year: "1960s",
//     title: "The Miracle of the Neem Tree",
//     icon: <Droplet className="w-6 h-6 text-white" />,
//     description: "In these Holy Lands, a Neem tree and a huge Snake mound stood. One day, delicious milk began to ooze from the Neem tree, serving as a miracle-medicine for villagers' diseases. People slowly started realizing the Divine Power and Grace of the tree.",
//     accentColor: "bg-blue-500"
//   },
//   {
//     year: "1966",
//     date: "November 28th",
//     title: "The Storm & The Swayambu Emergence",
//     icon: <CloudLightning className="w-6 h-6 text-white" />,
//     description: "A violent storm eroded the Snake mound and uprooted the Neem tree. Beneath it, the Swayambu ('self-manifested') emerged. This revelation explained the sacredness of the place. The Sanctum Sanctorum is established in this very spot today.",
//     accentColor: "bg-gray-600"
//   },
//   {
//     year: "1971",
//     title: "The First Oracle & Prophecy",
//     icon: <Mic2 className="w-6 h-6 text-white" />,
//     description: "The first Oracle came through His Holiness, The Adigalar. The Power prophesied that 'it's descending to earth as The Mother and She should be worshipped as the Goddess Adhiparasakthi, and the world would go through a Spiritual Revolution'.",
//     accentColor: "bg-purple-500"
//   },
//   {
//     year: "1977",
//     date: "November 25th",
//     title: "Installation of the Idol",
//     icon: <Flower className="w-6 h-6 text-white" />, 
//     description: "After years of worshipping the Swayambu, the idol of Mother Adhiparasakthi was installed. Its unique form—one meter tall, seated on a thousand-petal lotus, with Her right leg folded and holding a lotus bud—was instructed by The Mother herself through Oracles.",
//     accentColor: "bg-[#a7150b]" 
//   },
// ];

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.3 } }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
// };

// export default function HistoryPage() {
//   return (
//     <PageTemplate
//       title="History of Siddhar Peedam"
//       subtitle="Centuries of Spiritual Heritage & Divine Revelation"
//       noTopPadding={true}
//       noContentTopPadding={true}
//     >
//       <div className="max-w-5xl mx-auto px-4 py-12">
        
//         {/* --- HERO IMAGE --- */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-16 border-4 border-white"
//         >
//           <Image
//             src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939189/5743intro_gzfxmy.jpg" 
//             alt="History of Siddhar Peedam Collage"
//             fill
//             className="object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//           <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
//              <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed">
//                "From a humble Neem tree to a global spiritual center, witnessing the descent of the Divine Mother."
//              </p>
//           </div>
//         </motion.div>

//         {/* --- HIGHLIGHT TIMELINE SECTION --- */}
//         <div className="relative mb-20">
//           {/* Vertical Line */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//             className="space-y-12 md:space-y-0"
//           >
//             {highlights.map((event, index) => {
//               const isEven = index % 2 === 0;
//               return (
//                 <motion.div
//                   key={index}
//                   variants={itemVariants}
//                   className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
//                 >
//                   {/* Content Card */}
//                   <div className={`w-full md:w-5/12 ${isEven ? "md:pl-8" : "md:pr-8"}`}>
//                     <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
//                       <div className={`absolute top-0 left-0 w-1 h-full ${event.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
//                       <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-4 ${event.accentColor} shadow-sm`}>
//                         {event.year} {event.date && <span className="opacity-90">• {event.date}</span>}
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
//                       <p className="text-gray-600 leading-relaxed text-base">
//                         {event.description}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Timeline Node */}
//                   <div className="relative flex items-center justify-center w-12 md:w-2/12 my-6 md:my-0">
//                     <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${event.accentColor} transform transition-transform hover:scale-110`}>
//                       {event.icon}
//                     </div>
//                   </div>
//                   <div className="hidden md:block md:w-5/12" />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* --- VIEW ALL BUTTON --- */}
//         <div className="flex flex-col items-center justify-center py-10">
//             <Link 
//                 href="/all-historical-events"
//                 className="group flex items-center gap-3 bg-[#a7150b] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#8a1109] transition-all hover:scale-105 z-20"
//             >
//                 View Complete Historical Events
//                 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
//             </Link>
//             <p className="mt-4 text-gray-500 text-sm">Including detailed records from 1941 to present</p>
//         </div>

//       </div>
//     </PageTemplate>
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate"; // Adjust path if needed
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Droplet, 
  CloudLightning, 
  Mic2, 
  Flower, 
  ArrowRight
} from "lucide-react";

// --- HIGHLIGHTS DATA (Your Original Data) ---
const highlights = [
  {
    year: "1960s",
    title: "The Miracle of the Neem Tree",
    icon: <Droplet className="w-6 h-6 text-white" />,
    description: "In these Holy Lands, a Neem tree and a huge Snake mound stood. One day, delicious milk began to ooze from the Neem tree, serving as a miracle-medicine for villagers' diseases. People slowly started realizing the Divine Power and Grace of the tree.",
    accentColor: "bg-blue-500"
  },
  {
    year: "1966",
    date: "November 28th",
    title: "The Storm & The Swayambu Emergence",
    icon: <CloudLightning className="w-6 h-6 text-white" />,
    description: "A violent storm eroded the Snake mound and uprooted the Neem tree. Beneath it, the Swayambu ('self-manifested') emerged. This revelation explained the sacredness of the place. The Sanctum Sanctorum is established in this very spot today.",
    accentColor: "bg-gray-600"
  },
  {
    year: "1971",
    title: "The First Oracle & Prophecy",
    icon: <Mic2 className="w-6 h-6 text-white" />,
    description: "The first Oracle came through His Holiness, The Adigalar. The Power prophesied that 'it's descending to earth as The Mother and She should be worshipped as the Goddess Adhiparasakthi, and the world would go through a Spiritual Revolution'.",
    accentColor: "bg-purple-500"
  },
  {
    year: "1977",
    date: "November 25th",
    title: "Installation of the Idol",
    icon: <Flower className="w-6 h-6 text-white" />, 
    description: "After years of worshipping the Swayambu, the idol of Mother Adhiparasakthi was installed. Its unique form—one meter tall, seated on a thousand-petal lotus, with Her right leg folded and holding a lotus bud—was instructed by The Mother herself through Oracles.",
    accentColor: "bg-[#a7150b]" 
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      type: "spring" as const // <--- FIXED: Added 'as const' here
    } 
  }
};

export default function HistoryPage() {
  return (
    <PageTemplate
      title="History of Siddhar Peedam"
      subtitle="Centuries of Spiritual Heritage & Divine Revelation"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* --- HERO IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-16 border-4 border-white"
        >
          <Image
            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939189/5743intro_gzfxmy.jpg" 
            alt="History of Siddhar Peedam Collage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8 max-w-2xl">
             <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed">
               "From a humble Neem tree to a global spiritual center, witnessing the descent of the Divine Mother."
             </p>
          </div>
        </motion.div>

        {/* --- HIGHLIGHT TIMELINE SECTION --- */}
        <div className="relative mb-20">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 md:space-y-0"
          >
            {highlights.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pl-8" : "md:pr-8"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative overflow-hidden group">
                      <div className={`absolute top-0 left-0 w-1 h-full ${event.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                      <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-4 ${event.accentColor} shadow-sm`}>
                        {event.year} {event.date && <span className="opacity-90">• {event.date}</span>}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative flex items-center justify-center w-12 md:w-2/12 my-6 md:my-0">
                    <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${event.accentColor} transform transition-transform hover:scale-110`}>
                      {event.icon}
                    </div>
                  </div>
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* --- VIEW ALL BUTTON --- */}
        <div className="flex flex-col items-center justify-center py-10">
            <Link 
                href="/all-historical-events"
                className="group flex items-center gap-3 bg-[#a7150b] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#8a1109] transition-all hover:scale-105 z-20"
            >
                View Complete Historical Events
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <p className="mt-4 text-gray-500 text-sm">Including detailed records from 1941 to present</p>
        </div>

      </div>
    </PageTemplate>
  );
}