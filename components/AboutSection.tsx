// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function AboutSection() {
//   return (
//     <section className="py-20 px-4 max-w-5xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="grid md:grid-cols-2 gap-12 items-center"
//       >
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative h-96 rounded-lg overflow-hidden shadow-xl"
//         >
//           <Image
//             src="/om-sakthi-amma-spiritual-portrait.jpg"
//             alt="Om Sakthi Amma"
//             fill
//             className="object-cover"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text">About Om Sakthi Amma</h2>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             Om Sakthi Amma represents the pinnacle of spiritual consciousness and divine grace. Her life is dedicated to uplifting humanity and guiding millions toward enlightenment.
//           </p>
//           <p className="text-gray-700 leading-relaxed text-lg">
//             Through sacred teachings and transformative spiritual practices, Amma touches the hearts of devotees worldwide, inspiring them to discover their divine nature.
//           </p>
//           <motion.div
//             whileHover={{ x: 5 }}
//             className="inline-block"
//           >
//             <button className="px-8 py-3 bg-[#a7150b] text-white rounded-lg font-bold hover:bg-[#8a0d08] transition">
//               Learn More About Amma
//             </button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
        >
          <Image
            src="/om2.jpeg"
            alt="Arul Thiru Bangaru Adigalar"
            fill
            className="object-contain hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] spiritual-text mb-2">Introduction</h2>
            <div className="h-1 w-20 bg-[#a7150b]"></div>
          </div>
          
          <div className="prose prose-lg text-gray-700">
            <p className="leading-relaxed">
              Arulmigu Adhiparasakthi Siddhar Peedam, the Holy Shrine is situated at Melmaruvathur, Tamil Nadu, 92 kms south of Chennai along the NH-45. This place, where the Siddhar Peedam is situated, is being considered as the most Holy place for the past 2000 years.
            </p>
            <p className="leading-relaxed">
              It is in this place, where 21 Siddhars, both men and women, attained Jeeva Samaadhi (leaving the mortal body, but living in astral plane).  These 21 Siddhars belong to various religions.
            </p>
          </div>

          <motion.div
            whileHover={{ x: 10 }}
            className="inline-block"
          >
            {/* <button className="flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#a7150b] text-[#a7150b] rounded-lg font-bold hover:bg-[#a7150b] hover:text-white transition duration-300">
              Read Full Biography
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}