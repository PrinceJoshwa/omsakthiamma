// // import PageTemplate from '@/components/PageTemplate';

// // export default function YouthWingsPage() {
// //   return (
// //     <PageTemplate
// //       title="Youth Wings"
// //       subtitle="Guiding the Next Generation"
// //       imageSrc="/placeholder.svg?key=q3z7a"
// //       content="Our youth wings provide spiritual education and guidance to young seekers. We empower the next generation with spiritual wisdom and practical tools for a meaningful and purposeful life."
// //     />
// //   );
// // }

// import PageTemplate from '@/components/PageTemplate';

// export default function YouthWingsPage() {
//   return (
//     <PageTemplate
//       title="Youth Wings"
//       subtitle="Guiding the Next Generation"
//       noTopPadding={false}
//       noContentTopPadding={true}
//       content={`
// Youth Wings are functioning at various centres with a view to mould the young minds in the right direction to save them from the clutches of drugs and alcohol; and to prepare them spiritually to face the day-to-day problems. They carry out relief works in draught and famine-stricken areas, and earth quake affected areas.
//       `}
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake } from "lucide-react";

export default function YouthWingsPage() {
  return (
    <PageTemplate
      title="Youth Wings"
      subtitle="Guiding the Next Generation"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-xl text-gray-600 font-serif max-w-3xl mx-auto">
            "Youth Wings are functioning at various centres with a view to mould the young minds in the right direction."
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Pillar 1: Guidance */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500"
          >
            <div className="p-3 bg-indigo-50 rounded-full w-fit mb-6 text-indigo-600">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Guidance & Protection</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              The objective is to save youth from the clutches of drugs and alcohol; and to prepare them spiritually to face day-to-day problems.
            </p>
          </motion.div>

          {/* Pillar 2: Service */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500"
          >
            <div className="p-3 bg-green-50 rounded-full w-fit mb-6 text-green-600">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Disaster Relief</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              They carry out relief works in draught and famine-stricken areas, and earth quake affected areas, serving those in dire need.
            </p>
          </motion.div>

        </div>

      </div>
    </PageTemplate>
  );
}