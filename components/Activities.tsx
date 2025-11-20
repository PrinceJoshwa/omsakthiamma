// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function ActivitiesSection() {
//   const activities = [
//     { title: "Social Service", desc: "Helping the needy" },
//     { title: "Medical Camps", desc: "Health for all" },
//     { title: "Education", desc: "Empowering minds" },
//     { title: "Annadhanam", desc: "Feeding the hungry" },
//     { title: "Spirituality", desc: "Divine path" },
//   ];

//   const supportOptions = [
//     "Daily Abhisegam", "Golden Chariot", "Women Welfare", "Annadhanam"
//   ];

//   return (
//     <section className="w-full bg-white mb-20">
//       {/* Activities Banner */}
//       <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Activities
//         </h1>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {/* 1. Activities Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
//           {activities.map((act, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               className="bg-[#8a0d08] p-4 rounded-lg shadow-lg text-white flex flex-col items-center text-center h-64 relative"
//             >
//               {/* Image Placeholder Box */}
//               <div className="w-full h-28 bg-red-100/20 mb-4 rounded flex items-center justify-center border border-white/10">
//                 <span className="text-white/50 text-sm">Image</span>
//               </div>
              
//               <h3 className="text-lg font-bold mb-2">{act.title}</h3>
//               <p className="text-xs opacity-80">{act.desc}</p>

//               {/* Card Stack Effect (visual decoration) */}
//               <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-[#5c0a06] rounded-lg opacity-50"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 2. Support Our Mission Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-[#fffcf2] rounded-xl border border-orange-100 p-8 md:p-16 text-center shadow-sm"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-[#5c0a06] mb-10">
//             Support Our Mission
//           </h2>

//           <div className="flex flex-wrap justify-center gap-6 mb-8">
//             {supportOptions.map((option, idx) => (
//               <motion.button
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#5c0a06] text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-[#7a0f07] transition-colors min-w-[220px] text-sm md:text-base"
//               >
//                 {option}
//               </motion.button>
//             ))}
//           </div>

//           <p className="text-gray-500 text-sm font-medium tracking-wide">
//             80G Tax Exemption Available
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ActivitiesSection() {
  // Added specific images for each activity
  // You can swap these paths later when you have specific photos for Medical Camps, etc.
  const activities = [
    { title: "Social Service", desc: "Helping the needy", image: "/om3.jpeg" },
    { title: "Medical Camps", desc: "Health for all", image: "/om4.jpeg" },
    { title: "Education", desc: "Empowering minds", image: "/om5.jpeg" },
    { title: "Annadhanam", desc: "Feeding the hungry", image: "/om3.jpeg" },
    { title: "Spirituality", desc: "Divine path", image: "/om4.jpeg" },
  ];

  const supportOptions = [
    "Daily Abhisegam", "Golden Chariot", "Women Welfare", "Annadhanam"
  ];

  return (
    <section className="w-full bg-white mb-20">
      {/* Activities Banner */}
      <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Activities
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* 1. Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#8a0d08] p-4 rounded-lg shadow-lg text-white flex flex-col items-center text-center h-72 relative overflow-hidden group"
            >
              {/* REAL IMAGE COMPONENT */}
              <div className="w-full h-32 relative mb-4 rounded overflow-hidden border border-white/10">
                <Image 
                  src={act.image} 
                  alt={act.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <h3 className="text-lg font-bold mb-2 relative z-10">{act.title}</h3>
              <p className="text-xs opacity-90 relative z-10">{act.desc}</p>

              {/* Card Stack Effect (visual decoration) */}
              <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-[#5c0a06] rounded-lg opacity-50"></div>
            </motion.div>
          ))}
        </div>

        {/* 2. Support Our Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fffcf2] rounded-xl border border-orange-100 p-8 md:p-16 text-center shadow-sm relative overflow-hidden"
        >
           {/* Subtle Pattern Background */}
           <div className="absolute inset-0 opacity-5 pattern-bg pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#5c0a06] mb-10 relative z-10">
            Support Our Mission
          </h2>

          <div className="flex flex-wrap justify-center gap-6 mb-8 relative z-10">
            {supportOptions.map((option, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#5c0a06] text-white px-8 py-4 rounded-full font-bold shadow-md hover:bg-[#7a0f07] transition-colors min-w-[220px] text-sm md:text-base border border-red-900"
              >
                {option}
              </motion.button>
            ))}
          </div>

          <p className="text-gray-500 text-sm font-medium tracking-wide relative z-10">
            80G Tax Exemption Available
          </p>
        </motion.div>
      </div>
    </section>
  );
}