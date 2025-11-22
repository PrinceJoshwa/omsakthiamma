// 'use client';

// import { motion } from 'framer-motion';
// import { Clock, Sun, Moon, ArrowRight, Info } from 'lucide-react';

// export default function PoojaTimingsSection() {
//   const timings = [
//     { time: '3:00 AM', event: 'Opening of the Sanctum Sanctorum', icon: Moon },
//     { time: '3:00 - 4:00 AM', event: 'Abishekam to the Suyambu and the Presiding Deity', icon: Sun },
//     { time: '4:00 - 5:30 AM', event: 'Alangaram', icon: Sparkles }, // Added dummy icon variable below
//     { time: '5:30 AM', event: 'Maha Deeparathanai & Public Darshan Starts', icon: Sun },
//     { time: '8:00 PM', event: 'Temple will be opened till 8:00 PM for Public Darshan', icon: Moon },
//   ];

//   // Custom icon component for visual variety
//   function Sparkles({ className }: { className?: string }) {
//     return (
//       <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//       </svg>
//     );
//   }

//   return (
//     <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      
//       {/* Header Section */}
//       <motion.div 
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center mb-16"
//       >
//         <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide uppercase">
//           Divine Schedule
//         </span>
//         <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
//           Daily Pooja Timings
//         </h2>
//         <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//           Experience the divine energy through our sacred rituals performed throughout the day.
//         </p>
//       </motion.div>

//       <div className="max-w-4xl mx-auto relative">
        
//         {/* Vertical Line */}
//         <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

//         {/* Timeline Items */}
//         <div className="space-y-8 relative">
//           {timings.map((item, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.15, duration: 0.5 }}
//               viewport={{ margin: "-50px" }}
//               className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 ${
//                 idx % 2 === 0 ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               {/* Time/Content Side */}
//               <div className="w-full md:w-1/2 px-6">
//                 <motion.div 
//                   whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
//                   className={`bg-white p-6 rounded-2xl shadow-md border-l-4 border-[#ffc107] relative
//                     ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}
//                   `}
//                 >
//                   <div className={`flex items-center gap-2 mb-2 text-[#a7150b] font-bold text-lg
//                     ${idx % 2 === 0 ? 'justify-start' : 'md:justify-end'}
//                   `}>
//                     <Clock className="w-5 h-5" />
//                     {item.time}
//                   </div>
//                   <h3 className="text-gray-800 font-semibold text-lg leading-snug">
//                     {item.event}
//                   </h3>
//                 </motion.div>
//               </div>

//               {/* Center Icon */}
//               <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-[#a7150b] rounded-full border-4 border-white shadow-lg z-10">
//                 <item.icon className="w-5 h-5 text-white" />
//               </div>
              
//               {/* Spacer Side (Empty) to balance the grid */}
//               <div className="w-full md:w-1/2 hidden md:block"></div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Footer Info Box */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.5 }}
//           className="mt-16 bg-[#fffcf2] border border-[#ffc107] rounded-2xl p-8 shadow-sm relative overflow-hidden"
//         >
//           <div className="absolute top-0 left-0 w-1 h-full bg-[#ffc107]"></div>
          
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="shrink-0">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
//                 <Info className="w-6 h-6" />
//               </div>
//             </div>
//             <div className="space-y-3 text-sm text-gray-700">
//               <h4 className="font-bold text-lg text-[#7a0f07]">Important Note to Devotees</h4>
//               <p>
//                 The timings given are approximate and may vary on special occasions. 
//                 Standard darshan hours are <span className="font-bold">3:00 AM - 1:00 PM</span> and <span className="font-bold">3:00 PM - 8:00 PM</span>.
//               </p>
//               <p className="text-[#a7150b] font-medium italic">
//                 * On Sundays, Tuesdays, Fridays, Amavasai, Pournami, and Festival days, there will be no break in Darshan timings.
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 flex justify-end">
//             <button className="flex items-center gap-2 px-6 py-2 bg-[#a7150b] text-white rounded-full font-bold text-sm hover:bg-[#8a0d08] transition-all shadow-md hover:shadow-lg group">
//               View Full Guidelines
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Clock, Sun, Moon, ArrowRight, Info } from 'lucide-react';

export default function PoojaTimingsSection() {
  const timings = [
    { time: '3:00 AM', event: 'Opening of the Sanctum Sanctorum', icon: Moon },
    { time: '3:00 - 4:00 AM', event: 'Abishekam', icon: Sun },
    { time: '4:00 - 5:30 AM', event: 'Alangaram', icon: Sun }, 
    { time: '5:30 AM', event: 'Maha Deeparathanai & Public Darshan Starts', icon: Sun },
    { time: '8:00 PM', event: 'Temple closes for Public Darshan', icon: Moon },
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs md:text-sm font-bold tracking-wide uppercase">
          Divine Schedule
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
          Daily Pooja Timings
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        
        {/* Vertical Line (Desktop Only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-6 md:space-y-8 relative">
          {timings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ margin: "-50px" }}
              className={`flex flex-col md:flex-row items-center gap-4 md:gap-0 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Time/Content Side */}
              <div className="w-full md:w-1/2 md:px-6">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className={`bg-white p-5 md:p-6 rounded-2xl shadow-md border-l-4 border-[#ffc107] relative text-center ${
                    idx % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}
                >
                  <div className={`flex items-center justify-center gap-2 mb-2 text-[#a7150b] font-bold text-lg ${
                    idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}>
                    <Clock className="w-5 h-5" />
                    {item.time}
                  </div>
                  <h3 className="text-gray-800 font-semibold text-base md:text-lg leading-snug">
                    {item.event}
                  </h3>
                </motion.div>
              </div>

              {/* Center Icon (Desktop Only) */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 bg-[#a7150b] rounded-full border-4 border-white shadow-lg z-10">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              
              {/* Spacer Side */}
              <div className="w-full md:w-1/2 hidden md:block"></div>
            </motion.div>
          ))}
        </div>

        {/* Footer Info Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 md:mt-16 bg-[#fffcf2] border border-[#ffc107] rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1 h-full bg-[#ffc107]"></div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="shrink-0 hidden md:block">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <Info className="w-6 h-6" />
              </div>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <h4 className="font-bold text-lg text-[#7a0f07]">Important Note</h4>
              <p>
                Standard darshan hours: <span className="font-bold">3:00 AM - 1:00 PM</span> & <span className="font-bold">3:00 PM - 8:00 PM</span>.
              </p>
              <p className="text-[#a7150b] font-medium italic">
                * On Sundays, Tuesdays, Fridays, Amavasai, Pournami, and Festival days, there is NO break.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}