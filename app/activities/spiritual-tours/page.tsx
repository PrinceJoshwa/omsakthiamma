// import PageTemplate from '@/components/PageTemplate';

// export default function SpiritualToursPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Tours"
//       subtitle="Pilgrimage Journeys of Awakening"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       content={`On the request of the devotees, His Holiness had toured U.S.A., Malaysia, U.A.E and many places in Tami Nadu and Karnataka to shower Her Choicest Blessings and to propagate Her noble Teachings.`}
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { Map, Plane } from "lucide-react";

export default function SpiritualToursPage() {
  const locations = ["U.S.A.", "Malaysia", "U.A.E.", "Tamil Nadu", "Karnataka"];

  return (
    <PageTemplate
      title="Spiritual Tours"
      subtitle="Pilgrimage Journeys of Awakening"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100"
        >
          <div className="inline-block p-4 bg-blue-50 rounded-full text-blue-600 mb-6">
            <Plane className="w-8 h-8" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Global & Local Blessings</h2>
          
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            On the request of the devotees, His Holiness had toured many places to shower Her Choicest Blessings and to propagate Her noble Teachings.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-700 font-semibold shadow-sm hover:border-[#a7150b] hover:text-[#a7150b] transition-colors"
              >
                <Map className="w-4 h-4" />
                {loc}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}