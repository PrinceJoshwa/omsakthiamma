// // import PageTemplate from '@/components/PageTemplate';

// // export default function AadiPooramPage() {
// //   return (
// //     <PageTemplate
// //       title="Aadi Pooram"
// //       subtitle="Celebrating Divine Feminine Energy"
// //       imageSrc="/placeholder.svg?key=n9w4x"
// //       content="Aadi Pooram marks the celestial celebration of divine feminine energy and power. This sacred occasion brings devotees together to honor the goddess and seek her infinite blessings for spiritual growth."
// //     />
// //   );
// // }

// import PageTemplate from "@/components/PageTemplate";

// export default function AadiPooramPage() {
  
//   const content = `
//   <h2 class="text-2xl font-bold text-[#a7150b] mb-2 text-center">
//     52nd Aadipooram Kanjivaarpu & Paalabiseygam
//   </h2>

//   <p class="text-lg mb-4 text-center">(20.07.2023 & 21.07.2023)</p>

//   <p>
//     The three important aspects of the Aadipooram festival held over 2 days are serving Kanji (Gruel) to Amma, 
//     devotees themselves performing the Milk Abhishegam (anointment) to Swayambu, and Amma Herself 
//     (in the form of Arul Thiru. Adigalar) performing the noble Angapradhakshanam 
//     (perambulating the Sakthi Peedam by physically rolling on the ground).
//   </p>
//   <p>
//     Serving Kanji (Gruel) is a special offering to Amma. As stated in Her Oracle, 
//     “Son, the Kanji you have brought here as an offering is not an ordinary one. 
//     To Me it is GOD’s divine food (Amirtham). The kanji(gruel) is not made up of rice and ghee, 
//     but it carries with it, the invaluable love, affection and devotion of my devotees.” 
//     Thousands of people bring this gruel, take it around Siddhar Peedam, after which it is served to all.
//   </p>
//   <p>
//     Milk Abhishegam to Swayambu is yet another important event, where everyone is given the opportunity 
//     to enter the Sanctum Sanctorum and perform Abishegam with their own hands. 
//     Amma has advised that devotees with multiple problems will find solace and resolution through this process. 
//     Furthermore, those who are keen to enhance their spiritual growth and development will also benefit from this.
//   </p>
//   <p>
//     Angapradhakshanam by Amma is a highly significant aspect of this festival. 
//     Following a bath, Arul ThiruAdigalar reaches the Sanctum Sanctorum, stands in front of the Swayambu 
//     and becomes an incarnation of Adhiparasakthi in a fraction of second. In this transcendent state, 
//     Amma resembles a cobra, and leaps from the Sanctum Sanctorum to the Mandapam, around two metres away, 
//     and then goes around the Siddhar Peedam. Such feats are beyond the human comprehension and ability. 
//   </p>
//   <p>
//     The purpose of this is to save people from their fate and destiny. As such, 
//     devotees are encouraged to perform Angapradhakshanam, while at Siddhar Peedam, 
//     to cleanse themselves of their negatives, and magnify their spiritual energies.
//   </p>
//   `;

//   return (
//     <PageTemplate
//       title="Aadi Pooram"
//       subtitle=""
//       content={content}
//       imageSrc={undefined}   // No image
//       hideFooter={true}      // Remove yellow footer
//       noTopPadding={true}    // Fix huge gap
//       hideContent={false}    // Show content
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Utensils, 
  Droplet, 
  Activity, 
  CalendarDays 
} from "lucide-react";

// --- FESTIVAL HIGHLIGHTS DATA ---
const festivalHighlights = [
  {
    title: "Serving Kanji (Gruel)",
    description: "Thousands bring gruel as an offering. Amma has declared, 'The Kanji you bring is not just rice and ghee; it carries your invaluable love and devotion. To Me, it is God's divine food (Amirtham).'",
    icon: <Utensils className="w-8 h-8 text-white" />,
    color: "bg-orange-500"
  },
  {
    title: "Milk Abhishekam",
    description: "A rare opportunity where every devotee enters the Sanctum Sanctorum to perform Milk Abhishekam to the Swayambu with their own hands, resolving personal problems and enhancing spiritual growth.",
    icon: <Droplet className="w-8 h-8 text-white" />,
    color: "bg-blue-500"
  },
  {
    title: "Angapradhakshanam by Amma",
    description: "The pinnacle of the festival. Amma, incarnating as Adhiparasakthi, resembles a cobra and leaps from the Sanctum to the Mandapam in a transcendent state—a feat beyond human ability—to save devotees from their karma.",
    icon: <Activity className="w-8 h-8 text-white" />,
    color: "bg-[#a7150b]"
  }
];

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
};

export default function AadiPooramPage() {
  return (
    <PageTemplate
      title="Aadi Pooram Festival"
      subtitle="The Celebration of Divine Grace"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* --- 1. HEADER & INTRO --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-[#a7150b] px-5 py-2 rounded-full mb-6 font-bold border border-red-100 shadow-sm">
            <CalendarDays className="w-5 h-5" />
            <span>Grand 2-Day Celebration</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-serif">
            The Aadipooram festival is a profound spiritual event comprising three major aspects: 
            <strong> Serving Kanji</strong>, <strong>Milk Abhishekam</strong>, and the miraculous <strong>Angapradhakshanam</strong> by Amma.
          </p>
        </motion.div>

        {/* --- 2. IMAGE GALLERY (NEW) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {/* Left Image: Procession */}
          <motion.div 
            variants={imageVariants}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
          >
            <Image 
              src="/aadipooramfes.jpg" 
              alt="Women carrying pots in procession" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">Sacred Procession</p>
              <p className="text-sm opacity-90">Devotees carrying offerings with devotion</p>
            </div>
          </motion.div>

          {/* Right Image: Interaction/Abishekam */}
          <motion.div 
            variants={imageVariants}
            className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
          >
            <Image 
              src="/adipooramfes1.jpeg" 
              alt="Devotees serving and receiving blessings" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-bold text-lg">Divine Offering</p>
              <p className="text-sm opacity-90">Sharing the 'Kanji' (Gruel) as Amirtham</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- 3. HIGHLIGHTS GRID --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {festivalHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${item.color}`}></div>
              
              <div className={`p-4 rounded-full ${item.color} shadow-lg mb-6 transform transition-transform hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- 4. CLOSING NOTE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[#a7150b] opacity-10 pattern-dots"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-white">Spiritual Cleansing</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg">
              "Devotees are encouraged to perform Angapradhakshanam at the Siddhar Peedam to cleanse themselves of negativity and magnify their spiritual energies. This festival is a direct path to saving one's soul from fate and destiny."
            </p>
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}