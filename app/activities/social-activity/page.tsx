// import PageTemplate from '@/components/PageTemplate';

// export default function SocialActivityPage() {
//   return (
//     <PageTemplate
//       title="Social Activity"
//       subtitle="Service to Humanity"
//       imageSrc="/social.png"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       content="We believe in serving society through various social initiatives and community projects. Our social activities reflect our commitment to uplifting humanity and creating positive change."
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialActivityPage() {
  return (
    <PageTemplate
      title="Social Activity"
      subtitle="Service to Humanity"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative h-64 md:h-auto bg-gray-100"
            >
              <Image 
                src="/social.png" 
                alt="Social Service Activities"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-10 md:p-14 flex flex-col justify-center bg-white"
            >
              <h3 className="text-2xl font-bold text-[#a7150b] mb-6 font-serif">Commitment to Change</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We believe in serving society through various social initiatives and community projects. Our social activities reflect our commitment to uplifting humanity and creating positive change.
              </p>
              <div className="h-1 w-20 bg-orange-400 rounded-full"></div>
            </motion.div>

          </div>
        </div>

      </div>
    </PageTemplate>
  );
}