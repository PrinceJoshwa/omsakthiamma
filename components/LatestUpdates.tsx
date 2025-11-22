// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';

// export default function LatestUpdatesSection() {
//   const updates = [
//     {
//       title: "Articles",
//       description: "Explore our collection of spiritual wisdom and teachings",
//       link: "/articles"
//     },
//     {
//       title: "Books",
//       description: "Explore our collection of spiritual wisdom and teachings",
//       link: "/books"
//     },
//     {
//       title: "Magazine",
//       description: "Explore our collection of spiritual wisdom and teachings",
//       link: "/magazine"
//     }
//   ];

//   return (
//     <section className="w-full bg-white mb-10">
//       {/* Yellow Banner Header */}
//       <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Latest updates
//         </h1>
//       </div>

//       {/* Content Container */}
//       <div className="py-12 px-4">
//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-12">
//           <h2 className="text-3xl font-bold text-[#7a0f07] text-center mb-8">
//             Publications & Resources
//           </h2>

//           <div className="grid md:grid-cols-3 gap-6">
//             {updates.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ y: -5 }}
//                 className="bg-[#8a0d08] rounded-xl p-8 flex flex-col justify-between text-white shadow-lg h-full min-h-[240px]"
//               >
//                 <div>
//                   <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
//                   <p className="text-white/90 text-sm leading-relaxed mb-6">
//                     {item.description}
//                   </p>
//                 </div>
//                 <button className="bg-[#ffc107] text-[#1a1a1a] px-6 py-2 rounded font-bold text-sm hover:bg-yellow-300 transition-colors w-fit">
//                   Learn More
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LatestUpdatesSection() {
  const updates = [
    { title: "Articles", description: "Explore spiritual wisdom", link: "/articles" },
    { title: "Books", description: "Our divine collection", link: "/books" },
    { title: "Magazine", description: "Monthly spiritual insights", link: "/magazine" }
  ];

  return (
    <section className="w-full bg-white mb-10">
      {/* Yellow Banner Header */}
      <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Latest updates
        </h1>
      </div>

      {/* Content Container */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#7a0f07] text-center mb-6 md:mb-8">
            Publications & Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {updates.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-[#8a0d08] rounded-xl p-6 md:p-8 flex flex-col justify-between text-white shadow-lg h-full min-h-[200px] md:min-h-[240px]"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-4 md:mb-6">
                    {item.description}
                  </p>
                </div>
                <Link href={item.link}>
                  <button className="bg-[#ffc107] text-[#1a1a1a] px-6 py-2 rounded font-bold text-xs md:text-sm hover:bg-yellow-300 transition-colors w-fit">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}