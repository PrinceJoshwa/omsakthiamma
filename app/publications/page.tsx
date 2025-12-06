// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function PublicationsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <section className="py-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
//             Publications
//           </h1>
//           <p className="text-xl text-gray-600">
//             Sacred wisdom shared through words
//           </p>
//         </motion.div>
//       </section>

//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="grid md:grid-cols-3 gap-8"
//         >
//           {['Articles', 'Books', 'Magazine'].map((category, idx) => (
//             <motion.div
//               key={category}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 + idx * 0.1 }}
//               className="text-center"
//             >
//               <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4">
//                 <Image
//                   src={`/spiritual-.jpg?height=300&width=200&query=spiritual-${category.toLowerCase()}`}
//                   alt={category}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <h3 className="text-2xl font-bold text-[#a7150b] mb-2">{category}</h3>
//               <p className="text-gray-600">
//                 Explore our collection of {category.toLowerCase()} sharing spiritual knowledge and divine wisdom.
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>
//     </div>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Map categories to valid images from your Cloudinary account
const categoryImages: Record<string, string> = {
  Articles: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939103/occasion_tkfaud.jpg",
  Books: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939081/navratri_pcitav.jpg",
  Magazine: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939368/chitrapournami_aiszbx.jpg"
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
            Publications
          </h1>
          <p className="text-xl text-gray-600">
            Sacred wisdom shared through words
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {['Articles', 'Books', 'Magazine'].map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="text-center"
            >
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg mb-4 bg-gray-200">
                <Image
                  // Use the map defined above, fallback to the first image if missing
                  src={categoryImages[category] || categoryImages['Articles']}
                  alt={category}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#a7150b] mb-2">{category}</h3>
              <p className="text-gray-600">
                Explore our collection of {category.toLowerCase()} sharing spiritual knowledge and divine wisdom.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}