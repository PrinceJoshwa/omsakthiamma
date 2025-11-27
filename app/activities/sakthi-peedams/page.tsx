// // import PageTemplate from '@/components/PageTemplate';

// // export default function SakhtiPeedamsPage() {
// //   return (
// //     <PageTemplate
// //       title="Sakthi Peedams"
// //       subtitle="Centers of Divine Feminine Power"
// //       imageSrc="/placeholder.svg?key=p2y6z"
// //       content="Sakthi Peedams are sacred centers dedicated to the worship of divine feminine energy. These locations hold immense spiritual significance and serve as powerful centers for spiritual practices and transformations."
// //       imageOnRight={true}
// //     />
// //   );
// // }

// import PageTemplate from '@/components/PageTemplate';

// export default function SakthiPeedamsPage() {
//   return (
//     <PageTemplate
//       title="Sakthi Peedams"
//       subtitle="Centers of Divine Feminine Power"
//       noTopPadding={false}
//       noContentTopPadding={true}
//       content={`
// Amma has permitted and also has directed certain ardent devotees to construct Sakthi Peedams or Divine Centres with Sanctum Sanctorum for the Mother Deity, as in the Siddar Peedam. Amma has declared that these Sakthi Peedams should serve as branches of the main SiddharPeedam at Melmaruvathur.

// One of the highlights of the Peedam and the Trust activities is the feeding of the devotees every forenoon through the noble activity of ANNA DHAANAM (feeding the poor and hungry). Anybody can contribute and specify the choice of food to be served. The feeding happens on a larger scale on all special occasions also. More details can be viewed under the head ‘Festive Occasions’.
//       `}
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { MapPin, Utensils } from "lucide-react";

export default function SakthiPeedamsPage() {
  return (
    <PageTemplate
      title="Sakthi Peedams"
      subtitle="Centers of Divine Feminine Power"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-16">

        {/* Section 1: The Branches */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center text-[#a7150b] shadow-inner">
              <MapPin className="w-16 h-16" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Divine Branches</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Amma has permitted and directed certain ardent devotees to construct Sakthi Peedams or Divine Centres with Sanctum Sanctorum for the Mother Deity, similar to the Siddhar Peedam. Amma has declared that these Sakthi Peedams should serve as branches of the main Siddhar Peedam at Melmaruvathur.
            </p>
          </div>
        </motion.div>

        {/* Section 2: Anna Dhaanam */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 relative overflow-hidden"
        >
          {/* Decorative Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-10 text-orange-600">
            <Utensils className="w-40 h-40" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-500 rounded-lg text-white">
                <Utensils className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">Anna Dhaanam</h2>
            </div>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                One of the highlights of the Peedam and the Trust activities is the feeding of the devotees every forenoon through the noble activity of <strong>ANNA DHAANAM</strong> (feeding the poor and hungry).
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>Anybody can contribute and specify the choice of food to be served.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1.5">•</span>
                  <span>The feeding happens on a larger scale on all special occasions also.</span>
                </li>
              </ul>
              <div className="pt-4">
                 <span className="text-sm font-bold text-orange-600 uppercase tracking-wide">
                   More details can be viewed under ‘Festive Occasions’
                 </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}