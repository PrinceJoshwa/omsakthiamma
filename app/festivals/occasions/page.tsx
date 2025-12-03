// import PageTemplate from '@/components/PageTemplate';

// export default function OccasionsPage() {
//   return (
//     <PageTemplate
//       title="Sacred Occasions"
//       subtitle="Celebrating Divine Moments"
//       // imageSrc="/placeholder.svg?key=j5s8t"
//             noTopPadding={true}
//       noContentTopPadding={true}
//       content="Throughout the year, we celebrate significant spiritual occasions that honor the divine and bring our community together. Each occasion carries deep spiritual significance and transformative power."
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Flame,      // Thai Poosam
  Gift,       // Birthday
  Moon,       // Chitra Pournami
  Droplet,    // Aadi Pooram
  Sparkles,   // Navaratri
  Calendar
} from "lucide-react";

// --- 1. DETAILED FESTIVAL DATA (Extracted from Image) ---
const occasionsData = [
  {
    title: "Thai Poosam And Irumudi",
    month: "January - February (Thai)",
    // Extracted from image:
    fullDesc: "This festival usually falls in the Tamil Month of 'Thai'. Lakhs of devotees observe strict spiritual discipline (Vrutham) after wearing the 'Sakthi Malai'. They carry the 'Irumudi' (twin bundles containing offerings) on their heads to the Siddhar Peedam. A unique feature of this festival is the 'Angapradakshinam'—devotees rolling on the ground around the Siddhar Peedam to fulfill their vows. It is a grand spectacle of devotion, with the entire area painted red by the sea of devotees.",
    highlights: ["Sakthi Malai Vrutham", "Irumudi Offering", "Angapradakshinam (Rolling on ground)"],
    icon: <Flame className="w-6 h-6 text-orange-500" />,
    accentColor: "border-orange-500",
    imageSrc: "/occasion.jpg", // Using your uploaded 'occasion.jpg'
    imageAlt: "Thai Poosam Irumudi and Fire Pot procession"
  },
  {
    title: "Amma's Birthday",
    month: "March 3rd",
    // Extracted from image:
    fullDesc: "Amma's Birthday is celebrated not just as a joyous occasion but as a day of service to the downtrodden. Originally observed as 'The Son's Day', it later evolved into 'The Day of the Mother'. On this day, grand welfare activities take place. Free marriages are conducted for the poor, irrespective of caste or creed. Welfare assistance—such as distributing tricycles, sewing machines, and iron boxes—is provided to thousands of needy people to help them earn a livelihood.",
    highlights: ["Free Marriages", "Welfare Distribution (Sewing Machines, Tricycles)", "Service to the Poor"],
    icon: <Gift className="w-6 h-6 text-pink-600" />,
    accentColor: "border-pink-600",
    imageSrc: "/ammabirthday.jpg", // Using your uploaded 'ammabirthday.jpg'
    imageAlt: "Amma's Birthday celebrations and welfare distribution"
  },
  {
    title: "Chitra Pournami",
    month: "April - May (Chithirai)",
    // Extracted from image:
    fullDesc: "Celebrated on the Full Moon day of the Chithirai month. The highlight is the magnificent 'Kalasa Vilakku Yagnam'. In this grand ritual, 10,008 women participate, performing the Yagna together. The primary objective of this massive prayer is to evoke nature's blessings for rain and to protect the world from natural calamities. It is a collective prayer for World Peace.",
    highlights: ["10,008 Women Yagnam", "Kalasa Vilakku Puja", "Prayers for Rain & World Peace"],
    icon: <Moon className="w-6 h-6 text-yellow-500" />,
    accentColor: "border-yellow-500",
    imageSrc: "/chitrapournami.jpg", // Using your uploaded 'chitrapournami.jpg'
    imageAlt: "Chitra Pournami Yagnam setups"
  },
  {
    title: "Aadi Pooram",
    month: "July - August (Aadi)",
    // Extracted from image:
    fullDesc: "This festival honors the Mother Goddess. The Swayambu idol is bathed with 'Koozh' (Gruel) from thousands of pots carried by devotees. This offering is known as 'Kanjikalayam'. Amma Herself leads the procession carrying a pot of gruel to the Sanctum Sanctorum. Devotees also perform Angapradakshinam (rolling on the ground) as a mark of total surrender to the Divine Mother.",
    highlights: ["Gruel (Koozh) Abishekam", "Amma carrying the Pot", "Angapradakshinam"],
    icon: <Droplet className="w-6 h-6 text-red-600" />,
    accentColor: "border-red-600",
    imageSrc: "/aadipooram.jpg", // Using your uploaded 'aadipooram.jpg'
    imageAlt: "Aadi Pooram Gruel Pot procession"
  },
  {
    title: "Navaratri",
    month: "September - October (Purattasi)",
    // Extracted from image:
    fullDesc: "The nine-day festival celebrating the triumph of Good over Evil. An 'Akhandam' (Eternal Lamp) is lit in the Sanctum Sanctorum. Throughout these days, 'Laksharchana' (chanting of 100,000 names of the Goddess) is performed. The Swayambu Amman is adorned with different special Alankarams (decorations) daily. On the final day (Vijayadasami), the 'Velli Ratham' (Silver Chariot) procession takes place, which is pulled exclusively by women devotees.",
    highlights: ["Akhandam (Eternal Lamp)", "Laksharchana", "Daily Alankarams", "Silver Chariot (Women only)"],
    icon: <Sparkles className="w-6 h-6 text-indigo-500" />,
    accentColor: "border-indigo-500",
    imageSrc: "/navratri.jpeg", // Using your uploaded 'navratri.jpeg'
    imageAlt: "Navaratri Alankarams and Silver Chariot"
  }
];

// --- 2. ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } }
};

export default function OccasionsPage() {
  return (
    <PageTemplate
      title="Festive Occasions"
      subtitle="Celebrating Divine Moments"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Intro Text */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-serif italic">
            "Throughout the year, we celebrate significant spiritual occasions that honor the divine and bring our community together. Each occasion carries deep spiritual significance and transformative power."
          </p>
          <div className="w-24 h-1 bg-[#a7150b] mx-auto mt-8 rounded-full opacity-30"></div>
        </motion.div>

        {/* Festivals List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20 md:space-y-32"
        >
          {occasionsData.map((festival, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                // Mobile: Flex-col (Image on top, text below)
                // Desktop: Alternating Row (Image Left/Text Right vs Text Left/Image Right)
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
              >
                
                {/* IMAGE CARD */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-[300px] md:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                    <Image
                      src={festival.imageSrc}
                      alt={festival.imageAlt}
                      fill
                      className="object-fill transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark gradient for text visibility if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                   {/* Decorative Color Backdrop */}
                  <div className={`absolute -inset-4 rounded-3xl ${festival.accentColor.replace('border-', 'bg-')} opacity-10 blur-xl -z-10`}></div>
                </div>

                {/* TEXT CONTENT */}
                <div className="w-full lg:w-1/2 space-y-6 text-left">
                  
                  {/* Header */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full bg-gray-50 border ${festival.accentColor}`}>
                        {festival.icon}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-800 font-serif leading-tight">
                        {festival.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-500 font-medium bg-gray-100 inline-block px-4 py-1.5 rounded-full text-sm">
                      <Calendar className="w-4 h-4" />
                      <span className="uppercase tracking-wider">{festival.month}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="bg-white/50 rounded-xl border border-gray-100 p-6 md:p-0 md:bg-transparent md:border-0">
                    <p className="text-gray-700 leading-8 text-lg">
                      {festival.fullDesc}
                    </p>
                  </div>

                  {/* Highlights Tags */}
                  <div>
                     <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                       Highlights
                     </h4>
                     <div className="flex flex-wrap gap-2">
                       {festival.highlights.map((highlight, idx) => (
                         <span 
                           key={idx} 
                           className={`px-4 py-2 rounded-lg bg-white border shadow-sm text-sm font-semibold text-gray-700 hover:text-white hover:bg-[#a7150b] transition-colors duration-300 cursor-default`}
                         >
                           {highlight}
                         </span>
                       ))}
                     </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <div className="mt-24 text-center text-gray-400 text-sm pb-8">
           <p>© Melmaruvathur Adhiparasakthi Siddhar Peedam</p>
        </div>

      </div>
    </PageTemplate>
  );
}