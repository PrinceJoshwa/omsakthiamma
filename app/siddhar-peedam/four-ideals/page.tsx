// // import PageTemplate from '@/components/PageTemplate';

// // export default function FourIdealsPage() {
// //   return (
// //     <PageTemplate
// //       title="Four Ideals"
// //       subtitle="Guiding Principles of Siddhar Peedam"
// //       imageSrc="/placeholder.svg?key=i3q4r"
// //       content="Our four core ideals – Dharma, Artha, Kama, and Moksha – provide a comprehensive spiritual framework. These principles guide seekers through all aspects of life toward ultimate spiritual liberation."
// //     />
// //   );
// // }

// import PageTemplate from '@/components/PageTemplate';

// export default function FourIdealsPage() {
//   return (
//     <PageTemplate
//       title="Four Ideals"
//       subtitle="Guiding Principles of Siddhar Peedam"
//             noTopPadding={true}
//       noContentTopPadding={true}
//       content={`
//         <p>The four pillars or ideals of the Om Sakthi movement are:</p>

//         <ol class="list-decimal list-inside space-y-1 text-gray-700">
//           <li>Devotion</li>
//           <li>Charity</li>
//           <li>Service</li>
//           <li>Meditation</li>
//         </ol>

//         <p>
//           The Mother helps all those who sincerely pray to Her. Chanting, charity,
//           meditating deeply and calmly, doing yeomen service—wherever and whenever
//           possible—are given priorities by His Holiness, The Amma.
//         </p>
//       `}
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { 
  Heart,      // For Devotion
  HandHeart,  // For Charity
  Users,      // For Service
  Flower2     // For Meditation (Lotus)
} from "lucide-react";

// --- 1. STRUCTURED DATA ---
const ideals = [
  {
    title: "Devotion",
    subtitle: "Bhakti",
    description: "Sincere prayer and chanting connect the soul to the Divine. The Mother helps all those who surrender to Her with a pure heart.",
    icon: <Heart className="w-8 h-8 text-white" />,
    color: "bg-red-500",
    delay: 0.1
  },
  {
    title: "Charity",
    subtitle: "Dharma",
    description: "The act of giving without expectation. His Holiness emphasizes that helping the needy is a direct service to God.",
    icon: <HandHeart className="w-8 h-8 text-white" />,
    color: "bg-emerald-500",
    delay: 0.2
  },
  {
    title: "Service",
    subtitle: "Seva",
    description: "Doing yeomen service—wherever and whenever possible—is a priority. Service to humanity is service to the Divine.",
    icon: <Users className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
    delay: 0.3
  },
  {
    title: "Meditation",
    subtitle: "Dhyana",
    description: "Meditating deeply and calmly quiets the mind, allowing one to hear the inner voice and receive Divine Grace.",
    icon: <Flower2 className="w-8 h-8 text-white" />,
    color: "bg-purple-500",
    delay: 0.4
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
};

export default function FourIdealsPage() {
  return (
    <PageTemplate
      title="The Four Ideals"
      subtitle="The Pillars of Om Sakthi Movement"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-[#a7150b] mb-6 font-serif">
            Foundations of Spiritual Life
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            "Chanting, charity, meditating deeply and calmly, doing yeomen service—wherever and whenever possible—are given priorities by His Holiness, The Amma."
          </p>
        </motion.div>

        {/* 2x2 Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {ideals.map((ideal, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_10px_30px_rgb(0,0,0,0.1)] transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${ideal.color}`}></div>
              
              {/* Background Glow Effect on Hover */}
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${ideal.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>

              <div className="flex flex-col items-start gap-6 relative z-10">
                {/* Icon Circle */}
                <div className={`p-4 rounded-xl ${ideal.color} shadow-lg transform transition-transform group-hover:rotate-6`}>
                  {ideal.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {ideal.title}
                  </h3>
                  <span className={`text-xs font-bold uppercase tracking-widest ${ideal.color.replace('bg-', 'text-')} opacity-80 mb-3 block`}>
                    {ideal.subtitle}
                  </span>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {ideal.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100"
        >
          <p className="text-lg text-gray-800 font-serif italic">
            The Mother helps all those who sincerely pray to Her. These ideals are the pathway to Her Grace.
          </p>
        </motion.div>

      </div>
    </PageTemplate>
  );
}