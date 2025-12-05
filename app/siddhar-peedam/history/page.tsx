// "use client";

// import React, { useState } from "react";
// import PageTemplate from "@/components/PageTemplate";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { 
//   Droplet, 
//   CloudLightning, 
//   Mic2, 
//   Flower, 
//   ChevronDown, 
//   ChevronUp,
//   Award,
//   HeartHandshake,
//   Building,
//   Sparkles,
//   Calendar
// } from "lucide-react";
// import { fullHistoryData } from "@/lib/historyData"; // Ensure this path is correct

// // --- 1. HIGHLIGHTS DATA (Your Original Data - Unchanged) ---
// const historyEvents = [
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

// // --- 2. ANIMATION VARIANTS ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.3 } }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
// };

// const listVariants = {
//   hidden: { opacity: 0, height: 0 },
//   show: { opacity: 1, height: "auto", transition: { duration: 0.8, ease: "easeInOut" } },
//   exit: { opacity: 0, height: 0, transition: { duration: 0.5 } }
// };

// export default function HistoryPage() {
//   const [showFullHistory, setShowFullHistory] = useState(false);

//   // Helper function to get icon based on category
//   const getCategoryIcon = (category: string) => {
//     switch(category) {
//       case "Awards": return <Award className="w-3 h-3 inline mr-1" />;
//       case "Social": return <HeartHandshake className="w-3 h-3 inline mr-1" />;
//       case "Infrastructure": return <Building className="w-3 h-3 inline mr-1" />;
//       case "Divine": return <Sparkles className="w-3 h-3 inline mr-1" />;
//       case "Festival": return <Flower className="w-3 h-3 inline mr-1" />;
//       default: return <Calendar className="w-3 h-3 inline mr-1" />;
//     }
//   };

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
//             src="/5743intro.jpg" 
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
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, amount: 0.1 }}
//             className="space-y-12 md:space-y-0"
//           >
//             {historyEvents.map((event, index) => {
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
//                     <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 md:hidden`}></div>
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

//         {/* --- DIVIDER WITH BUTTON --- */}
//         <div className="flex flex-col items-center justify-center py-10">
//             <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowFullHistory(!showFullHistory)}
//                 className="group flex items-center gap-3 bg-[#a7150b] text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#8a1109] transition-colors z-20"
//             >
//                 {showFullHistory ? "Hide Full Timeline" : "View Complete Historical Events"}
//                 {showFullHistory ? <ChevronUp /> : <ChevronDown />}
//             </motion.button>
//             <p className="mt-4 text-gray-500 text-sm">Including detailed records from 1941 to present</p>
//         </div>

//         {/* --- FULL CHRONOLOGICAL HISTORY SECTION --- */}
//         <AnimatePresence>
//             {showFullHistory && (
//                 <motion.div
//                     variants={listVariants}
//                     initial="hidden"
//                     animate="show"
//                     exit="exit"
//                     className="overflow-hidden bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200 shadow-inner"
//                 >
//                    <div className="text-center mb-10">
//                        <h2 className="text-3xl font-serif font-bold text-gray-800">Chronicles of History</h2>
//                        <p className="text-gray-600 mt-2">A comprehensive list of events during the Incarnation period of Amma.</p>
//                    </div>

//                    <div className="relative border-l-2 border-[#a7150b]/30 ml-4 md:ml-10 space-y-8">
//                        {fullHistoryData.map((item, idx) => (
//                            <motion.div 
//                                 key={idx}
//                                 initial={{ opacity: 0, x: -20 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 viewport={{ once: true, margin: "-50px" }}
//                                 transition={{ delay: 0.1, duration: 0.5 }}
//                                 className="relative pl-8 md:pl-12"
//                            >
//                                {/* Dot on line */}
//                                <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-white border-4 border-[#a7150b]"></div>
                               
//                                <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
//                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
//                                        <div className="flex items-center gap-2">
//                                             <span className="text-[#a7150b] font-bold text-xl">{item.year}</span>
//                                             {item.date && <span className="text-gray-400 font-medium text-sm">| {item.date}</span>}
//                                        </div>
                                       
//                                        {/* Category Badge */}
//                                        <span className="self-start md:self-auto px-3 py-1 bg-gray-100 text-gray-600 text-xs uppercase tracking-wider font-bold rounded-full border border-gray-200">
//                                             {getCategoryIcon(item.category)}
//                                             {item.category}
//                                        </span>
//                                    </div>
//                                    <p className="text-gray-700 mt-1 text-base leading-relaxed">{item.description}</p>
//                                </div>
//                            </motion.div>
//                        ))}
//                    </div>

//                     {/* Closing Quote for Full History */}
//                    <div className="text-center mt-12 pt-8 border-t border-gray-200">
//                        <p className="text-[#a7150b] font-serif italic text-lg">"Om Sakthi"</p>
//                    </div>
//                 </motion.div>
//             )}
//         </AnimatePresence>

//         {/* Closing Statement (Always Visible) */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           className="text-center mt-20 max-w-3xl mx-auto bg-red-50 p-8 rounded-2xl border border-red-100"
//         >
//           <p className="text-lg text-[#a7150b] font-serif leading-relaxed italic">
//             This holy land has become a beacon of spiritual revolution, inviting all to witness the Divine Grace of Adhiparasakthi.
//           </p>
//         </motion.div>

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
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
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