// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function ActivitiesSection() {
//   const activities = [
//     // { title: "Social Service", desc: "Helping the needy", image: "/om3.jpeg" },
//     // { title: "Medical Camps", desc: "Health for all", image: "/om4.jpeg" },
//     // { title: "Education", desc: "Empowering minds", image: "/om5.jpeg" },
//     // { title: "Annadhanam", desc: "Feeding the hungry", image: "/om3.jpeg" },
//     // { title: "Spirituality", desc: "Divine path", image: "/om4.jpeg" },
//     { title: "Social Service", href: "/activities/social-activity", desc: "Helping the needy", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg" },
//     { title: "Medical Camps", href:"", desc: "Health for all", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" },
//     { title: "Education", href:"", desc: "Empowering minds", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939095/om5_ppv6nl.jpg" },
//     { title: "Annadhanam", href:"", desc: "Feeding the hungry", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg" },
//     { title: "Spirituality", href:"", desc: "Divine path", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" },
//   ];

//   const supportOptions = [
//     "Daily Abhisegam", "Golden Chariot", "Women Welfare", "Annadhanam"
//   ];

//   return (
//     <section className="w-full bg-white mb-10 md:mb-20">
//       {/* Activities Banner */}
//       <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-10 md:mb-16">
//         <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Activities
//         </h1>
//       </div>

//       <div className="max-w-7xl mx-auto px-4">
//         {/* 1. Activities Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-20">
//           {activities.map((act, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.03 }}
//               // Responsive Height: h-64 on mobile, h-72 on desktop
//               className="bg-[#8a0d08] p-4 rounded-lg shadow-lg text-white flex flex-col items-center text-center h-64 md:h-72 relative overflow-hidden group"
//             >
//               <div className="w-full h-28 md:h-32 relative mb-4 rounded overflow-hidden border border-white/10">
//                 <Image 
//                   src={act.image} 
//                   alt={act.title} 
//                   fill 
//                   className="object-cover transition-transform duration-500 group-hover:scale-110" 
//                 />
//               </div>
              
//               <h3 className="text-lg font-bold mb-2 relative z-10">{act.title}</h3>
//               <p className="text-xs opacity-90 relative z-10">{act.desc}</p>

//               {/* Card Stack Effect */}
//               <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-[#5c0a06] rounded-lg opacity-50"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* 2. Support Our Mission Section */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-[#fffcf2] rounded-xl border border-orange-100 p-6 md:p-16 text-center shadow-sm relative overflow-hidden"
//         >
//            <div className="absolute inset-0 opacity-5 pattern-bg pointer-events-none"></div>

//           <h2 className="text-2xl md:text-4xl font-bold text-[#5c0a06] mb-8 md:mb-10 relative z-10">
//             Support Our Mission
//           </h2>

//           <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">
//             {supportOptions.map((option, idx) => (
//               <motion.button
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#5c0a06] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-md hover:bg-[#7a0f07] transition-colors w-full md:w-auto md:min-w-[220px] text-sm md:text-base border border-red-900"
//               >
//                 {option}
//               </motion.button>
//             ))}
//           </div>

//           <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wide relative z-10">
//             80G Tax Exemption Available
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';  // ⭐ ADDED

export default function ActivitiesSection() {
  const activities = [
    { title: "Social Service", href: "/activities/social-activity",Target: "_blank", desc: "Helping the needy", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg" },
    { title: "Medical Camps", href: "http://acmectrust.org/",Target: "_blank", desc: "Health for all", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" },
    { title: "Education", href: "http://acmectrust.org/",Target: "_blank", desc: "Empowering minds", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939095/om5_ppv6nl.jpg" },
    { title: "Annadhanam", href: "https://www.acmectrust.org/donate-thaipoosam-india/", Target: "_blank", desc: "Feeding the hungry", image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg" },
    { title: "Spirituality", href: "http://masm.omsakthiamma.in/", desc: "Divine path", Target: "_blank",image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" },
  ];

  const supportOptions = [
    { label: "Daily Abhisegam", href: "https://masm.omsakthiamma.in/donate-abhisegam/", Target: "_blank" },
    { label: "Golden Chariot", href: "https://masm.omsakthiamma.in/donate-other/?c=GCP", Target: "_blank" },
    { label: "Women Welfare", href: "https://aspwct.omsakthiamma.in/", Target: "_blank" },
    { label: "Annadhanam", href: "https://www.acmectrust.org/donate-thaipoosam-india/",Target: "_blank" },
  ];

  return (
    <section className="w-full bg-white mb-10 md:mb-20">

      {/* Activities Banner */}
      <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-10 md:mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Activities
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* 1. Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12 md:mb-20">

          {activities.map((act, idx) => (
            <Link key={idx} href={act.href} className="block">  {/* ⭐ WRAPPED WITH LINK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#8a0d08] p-4 rounded-lg shadow-lg text-white flex flex-col items-center text-center h-64 md:h-72 relative overflow-hidden group cursor-pointer"
              >
                <div className="w-full h-28 md:h-32 relative mb-4 rounded overflow-hidden border border-white/10">
                  <Image 
                    src={act.image} 
                    alt={act.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                
                <h3 className="text-lg font-bold mb-2">{act.title}</h3>
                <p className="text-xs opacity-90">{act.desc}</p>

                <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-[#5c0a06] rounded-lg opacity-50"></div>
              </motion.div>
            </Link>
          ))}

        </div>

        {/* 2. Support Our Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fffcf2] rounded-xl border border-orange-100 p-6 md:p-16 text-center shadow-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-5 pattern-bg pointer-events-none"></div>

          <h2 className="text-2xl md:text-4xl font-bold text-[#5c0a06] mb-8 md:mb-10 relative z-10">
            Support Our Mission
          </h2>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 md:mb-8 relative z-10">

            {supportOptions.map((option, idx) => (
              <Link key={idx} href={option.href}> {/* ⭐ NAVIGATION ADDED */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#5c0a06] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold shadow-md hover:bg-[#7a0f07] transition-colors w-full md:w-auto md:min-w-[220px] text-sm md:text-base border border-red-900"
                >
                  {option.label}
                </motion.button>
              </Link>
            ))}

          </div>

          <p className="text-gray-500 text-xs md:text-sm font-medium tracking-wide relative z-10">
            80G Tax Exemption Available
          </p>
        </motion.div>
      </div>
    </section>
  );
}
