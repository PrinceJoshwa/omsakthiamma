// import PageTemplate from '@/components/PageTemplate';

// export default function WorshippingCentresPage() {
//   return (
//     <PageTemplate
//       title="Worshipping Centres"
//       subtitle="Spiritual Hubs Across the World"
//       hideFooter={false}
//       noTopPadding={false}
//       noContentTopPadding={true}
//       content={`
// Worshipping centres Micro-Units in different parts of the world. Periodic prayer meetings and religious activities in these centres generate spiritual waves, spreading spirituality throughout the world.

// His Holiness, The Adigalar goes on spiritual tours to Sakthi Peedams, in the country and abroad for gracing His devotees with His blessings and personal interactions. During such tours, He also conducts temple consecrations and Yagnas. The world witnesses grand spiritual processions wherever He visits. The Divine Mother has promised that, soon, the Melmaruvathur Peedam will become the centre for spiritual revival. The road has already been paved, for the movement to take the world by storm.
//       `}
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { Globe2, Plane, Sparkles } from "lucide-react";

export default function WorshippingCentresPage() {
  return (
    <PageTemplate
      title="Worshipping Centres"
      subtitle="Spiritual Hubs Across the World"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">
        
        {/* Micro-Units Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/3 flex justify-center">
             <div className="relative">
               <div className="absolute inset-0 bg-blue-100 rounded-full animate-pulse"></div>
               <Globe2 className="w-32 h-32 text-blue-600 relative z-10" />
             </div>
          </div>
          <div className="md:w-2/3">
             <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">Global Micro-Units</h2>
             <p className="text-gray-600 text-lg leading-relaxed">
               Worshipping centres operate as Micro-Units in different parts of the world. Periodic prayer meetings and religious activities in these centres generate spiritual waves, spreading spirituality throughout the world.
             </p>
          </div>
        </motion.div>

        {/* His Holiness Tours */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
            <div className="flex items-center gap-3 mb-4 text-[#a7150b]">
              <Plane className="w-6 h-6" />
              <h3 className="text-xl font-bold">Spiritual Tours</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              His Holiness, The Adigalar goes on spiritual tours to Sakthi Peedams, in the country and abroad for gracing His devotees with His blessings and personal interactions. During such tours, He also conducts temple consecrations and Yagnas.
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-2xl border border-yellow-100">
            <div className="flex items-center gap-3 mb-4 text-yellow-600">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-bold">Grand Processions</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              The world witnesses grand spiritual processions wherever He visits. The Divine Mother has promised that, soon, the Melmaruvathur Peedam will become the centre for spiritual revival.
            </p>
          </div>
        </motion.div>

        {/* Closing Vision */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl font-serif text-gray-800 italic">
            "The road has already been paved, for the movement to take the world by storm."
          </p>
        </motion.div>

      </div>
    </PageTemplate>
  );
}