// // import PageTemplate from '@/components/PageTemplate';

// // export default function SpiritualConferencesPage() {
// //   return (
// //     <PageTemplate
// //       title="Spiritual Conferences"
// //       subtitle="Gathering for Divine Learning"
// //       imageSrc="/placeholder.svg?key=s5b9c"
// //       content="Our spiritual conferences bring together seekers, teachers, and masters for collective learning and spiritual growth. These events create platforms for sharing knowledge and deepening spiritual understanding."
// //     />
// //   );
// // }


// import PageTemplate from '@/components/PageTemplate';

// export default function SpiritualConferencesPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Conferences"
//       subtitle="Gathering for Divine Learning"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       content={`
// The main focus of the Om Sakthi movement is to promote spiritual awareness and awakening. With this in mind, the Trust conducts many spiritual conferences to develop solidarity among the people and for the welfare of the common man. Being part of this movement is like being a global citizen, always working towards the common good. This is what The Mother desires. This is what The Mother aspires for and constantly tries to inspire in Her devotees.

// Religious heads from different faiths have been part of these conferences. National leaders like former Indian presidents, Giani Zail Singh and Shankar Dayal Sharma have also participated in these conferences in 1986 and ‘88, respectively.

// Eight conferences have so far been conducted by the Trust to develop spiritual solidarity among all the people of the world and for the welfare of the world at large, to pray for rains and to develop natural resources. With the Blessings of the Supreme Mother and His Holiness, mammoth processions and Yagnas are conducted, solely by women. Charitable activities are the highlights of these conferences. So far, eight such conferences have been held at various places.
//       `}
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { Globe, Users, CloudRain } from "lucide-react";

export default function SpiritualConferencesPage() {
  return (
    <PageTemplate
      title="Spiritual Conferences"
      subtitle="Gathering for Global Welfare"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Mission Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Globe className="w-12 h-12 text-[#a7150b] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Promoting Awareness & Unity</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            The main focus of the Om Sakthi movement is to promote spiritual awareness and awakening. The Trust conducts many spiritual conferences to develop solidarity among the people and for the welfare of the common man. Being part of this movement is like being a global citizen, always working towards the common good.
          </p>
          <p className="mt-4 text-gray-500 font-medium italic">
            "This is what The Mother desires. This is what The Mother aspires for and constantly tries to inspire in Her devotees."
          </p>
        </motion.div>

        {/* Notable Attendees */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-900 opacity-20 pattern-grid-lg"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6">Distinguished Participation</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Religious heads from different faiths have been part of these conferences. National leaders have also graced these occasions:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                Giani Zail Singh (1986)
              </span>
              <span className="px-6 py-3 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                Shankar Dayal Sharma (1988)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Activities & Impact */}
        <div className="grid md:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500"
           >
             <div className="flex items-center gap-3 mb-4 text-blue-600">
               <Users className="w-6 h-6" />
               <h3 className="text-xl font-bold">Eight Conferences</h3>
             </div>
             <p className="text-gray-600 leading-relaxed">
               Eight conferences have so far been conducted by the Trust to develop spiritual solidarity among all the people of the world and for the welfare of the world at large.
             </p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500"
           >
             <div className="flex items-center gap-3 mb-4 text-green-600">
               <CloudRain className="w-6 h-6" />
               <h3 className="text-xl font-bold">Yagnas & Processions</h3>
             </div>
             <p className="text-gray-600 leading-relaxed">
               With the Blessings of the Supreme Mother, mammoth processions and Yagnas are conducted solely by women to pray for rains and develop natural resources. Charitable activities are the highlights.
             </p>
           </motion.div>
        </div>

      </div>
    </PageTemplate>
  );
}