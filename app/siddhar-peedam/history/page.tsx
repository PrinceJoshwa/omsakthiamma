// import PageTemplate from '@/components/PageTemplate';

// export default function HistoryPage() {
//   return (
//     <PageTemplate
//       title="History of Siddhar Peedam"
//       subtitle="Centuries of Spiritual Heritage"
//       // imageSrc="/om1.jpeg"
//       content="In these Holy Lands at Melmaruvathur, where the current Siddhar Peedam is consecrated, stood a Neem tree and a huge Snake mound underneath it.  One day, in 1960s, milk began to ooze out from the aforesaid Neem Tree.  Wonderstruck by the miracle, people in the surrounding villages, thinking it to be a Divine Happening, drank the oozing milk.  The milk was delicious though the sap of the Neem tree will always taste bitter.  It served as a miracle-medicine for curing the various diseases of the village people. The people slowly started realizing the Divine Power and Grace of the tree.
// On 28th November 1966, there was a violent storm in Tamil Nadu. The Snake mound under the Neem tree was eroded in the heavy rain. The Neem tree (from which the milk oozed out) also got uprooted due to the violent gusty winds.The Swayambu (Swayambu means “self-manifested” or that which is created by its own accord) emerged beneath the uprooted Neem tree. People then understood the revelation that it was because of the power of The Swayambu, the milk had high medicinal values, and the place became so sacred. The Sanctum Sanctorum of today’s SiddharPeedam is established in this very same place. The Swayambu is situated right in front of the Adhiparasakthi statue.
// In 1971, the first Oracle came through His Holiness, The Adigalar and The Power prophesied that, “it’s descending to earth as The Mother and She should be worshipped as the Goddess Adhiparasakthi, and the world would go through a Spiritual Revolution and a New Renaissance would emerge’.
// Initially, The Swayambu alone was worshipped for many years. Thereafter, on 25thNovember 1977, the idol of Mother Adhiparasakthi was installed in the Sanctum Sanctorum. Mother Adhiparasakthi instructed the unique form of this idol through Her Oracles. The idol is one metre tall, seated on a thousand-petal lotus seat, with Her right leg folded and the left leg resting on the lotus petal. The thousand-petal lotus signifies and denotes meditation. She holds the bud of a lotus in Her right hand and the fingers of Her left are folded in a way depicting the Chin Mudra. Her hair is plaited and knotted upwards like a crown."
//       // imagePosition="bottom"
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Droplet, 
  CloudLightning, 
  Mic2, 
  Flower // ⭐ Fixed: Changed from 'flower' to 'Flower'
} from "lucide-react";

// --- 1. STRUCTURED DATA FOR TIMELINE ---
const historyEvents = [
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

// --- 2. ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
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
          {/* ⭐ Using the image file you provided: 5743intro.jpg */}
          {/* Ensure this file is inside your /public folder */}
          <Image
            src="/5743intro.jpg" 
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

        {/* --- TIMELINE SECTION --- */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12 md:space-y-0"
          >
            {historyEvents.map((event, index) => {
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
                      
                      {/* Hover effect accent */}
                      <div className={`absolute top-0 left-0 w-1 h-full ${event.accentColor} opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                      {/* Year/Date Badge */}
                      <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold text-white mb-4 ${event.accentColor} shadow-sm`}>
                        {event.year} {event.date && <span className="opacity-90">• {event.date}</span>}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node/Icon */}
                  <div className="relative flex items-center justify-center w-12 md:w-2/12 my-6 md:my-0">
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 md:hidden`}></div> {/* Mobile line */}
                    <div className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${event.accentColor} transform transition-transform hover:scale-110`}>
                      {event.icon}
                    </div>
                  </div>

                  {/* Empty Space for the other side */}
                  <div className="hidden md:block md:w-5/12" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20 max-w-3xl mx-auto bg-red-50 p-8 rounded-2xl"
        >
          <p className="text-lg text-[#a7150b] font-serif leading-relaxed italic">
            This holy land has become a beacon of spiritual revolution, inviting all to witness the Divine Grace of Adhiparasakthi.
          </p>
        </motion.div>

      </div>
    </PageTemplate>
  );
}