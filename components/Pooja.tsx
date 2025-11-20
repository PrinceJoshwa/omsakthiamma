// 'use client';

// import { motion } from 'framer-motion';
// import { ArrowRight, Clock } from 'lucide-react';

// export default function PoojaTimings() {
//   const timings = [
//     { time: '3:00 AM', event: 'Opening of the Sanctum Sanctorum' },
//     { time: '3:00 AM - 4:00 AM', event: 'Abishekam to the Suyambu and the Presiding Deity' },
//     { time: '4:00 AM - 5:30 AM', event: 'Alangaram' },
//     { time: '5:30 AM', event: 'Maha Deeparathanai & Public Darshan Starts' },
//     { time: '8:00 PM', event: 'Temple will be opened till 8:00 PM for Public Darshan' },
//   ];

//   return (
//     <section className="py-20 px-4 bg-white">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mx-auto"
//       >
//         {/* Heading */}
//         <h2 className="text-4xl font-bold text-[#1a1a1a] mb-12 text-center md:text-left spiritual-text">
//           Regular Pooja
//         </h2>

//         {/* Timeline Visual (Yellow Circles) */}
//         <div className="relative mb-12 hidden md:flex items-center justify-between px-4">
//           {/* The connecting line */}
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
          
//           {/* Circles */}
//           {[...Array(6)].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={{ scale: 0 }}
//               whileInView={{ scale: 1 }}
//               transition={{ delay: i * 0.1 }}
//               className={`rounded-full flex items-center justify-center border-4 border-white shadow-md
//                 ${i === 0 ? 'w-20 h-20 bg-[#ffc107]' : 'w-12 h-12 bg-[#ffc107]'}`}
//             >
//               {i === 0 && (
//                 <span className="text-xs font-bold text-[#1a1a1a] text-center leading-tight">
//                   3:00<br/>am
//                 </span>
//               )}
//             </motion.div>
//           ))}
//         </div>

//         {/* Content Card */}
//         <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
//           <h3 className="text-3xl font-bold text-[#1a1a1a] mb-8">Poojas</h3>

//           {/* Table Layout */}
//           <div className="space-y-6">
//             {/* Header Row (Hidden on small mobile, visible on larger) */}
//             <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-gray-500 font-semibold text-sm uppercase tracking-wider border-b pb-2 mb-4">
//               <div className="md:col-span-3">Time</div>
//               <div className="md:col-span-9">Pooja</div>
//             </div>

//             {/* Data Rows */}
//             {timings.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-3 border-b border-gray-50 last:border-0 hover:bg-orange-50/30 transition-colors rounded-lg px-2"
//               >
//                 <div className="md:col-span-3 font-bold text-[#a7150b] flex items-center gap-2">
//                   <Clock className="w-4 h-4 md:hidden" />
//                   {item.time}
//                 </div>
//                 <div className="md:col-span-9 text-gray-700 font-medium">
//                   {item.event}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Footer Notes */}
//           <div className="mt-10 space-y-3 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border-l-4 border-[#ffc107]">
//             <p>
//               • The timings given are approximate. It may vary on certain special occasions.
//             </p>
//             <p>
//               • The temple will be opened between <span className="font-bold text-gray-800">3:00 am to 1:00 pm</span> and <span className="font-bold text-gray-800">3:00 pm to 8:00 pm</span>.
//             </p>
//             <p className="font-medium text-[#a7150b]">
//               • On Sundays, Tuesdays, Fridays, Newmoon days, full moon days, and Siddhar Peedam festival days, there will be no break in Darshan Timings.
//             </p>
//           </div>

//           {/* Know More Button */}
//           <div className="mt-8 flex justify-center md:justify-start">
//             <button className="group flex items-center gap-2 px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold hover:bg-[#8a0d08] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               Know More
//               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>

//         </div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

export default function PoojaTimings() {
  // Data for the content list
  const timings = [
    { time: '3:00 AM', event: 'Opening of the Sanctum Sanctorum' },
    { time: '3:00 AM - 4:00 AM', event: 'Abishekam to the Suyambu and the Presiding Deity' },
    { time: '4:00 AM - 5.30 AM', event: 'Alangaram' },
    { time: '5:30 AM', event: 'Maha Deeparathanai & Public Darshan Starts' },
    { time: '8:00 PM', event: 'Temple will be opened till 8:00 PM for Public Darshan' },
  ];

  // Data specifically for the 6 visual circles (derived from table + footer notes)
  const timelineSteps = [
    { time: '3:00', period: 'AM' },
    { time: '4:00', period: 'AM' },
    { time: '5:30', period: 'AM' },
    { time: '1:00', period: 'PM' }, // Break start (from notes)
    { time: '3:00', period: 'PM' }, // Reopen (from notes)
    { time: '8:00', period: 'PM' }, // Close
  ];

  return (
    <section className="py-20 px-4 bg-white">
              <div className="w-full bg-[#ffc107] py-8 shadow-sm border-b border-yellow-400 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
                    Regular Pooja

        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Heading */}
        {/* <h2 className="text-4xl font-bold text-[#1a1a1a] mb-16 text-center md:text-left spiritual-text">
          Regular Pooja
        </h2>
         */}

        {/* Timeline Visual Strip */}
        <div className="relative w-full max-w-4xl mx-auto mb-12 hidden md:block">
          {/* The Grey Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -z-10 transform -translate-y-1/2 flex items-center justify-end">
            <div className="w-2 h-2 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
          </div>

          {/* The Circles */}
          <div className="flex justify-between items-center px-0">
            {timelineSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-[#ffc107] rounded-full flex flex-col items-center justify-center text-center shadow-md border-4 border-white z-10"
              >
                <span className="text-xs font-bold text-[#1a1a1a] leading-none">
                  {step.time}
                </span>
                <span className="text-[10px] font-bold text-[#1a1a1a] uppercase mt-0.5">
                  {step.period}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-8">Poojas</h3>

          {/* Table Layout */}
          <div className="space-y-6">
            {/* Header Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-gray-500 font-semibold text-sm uppercase tracking-wider border-b pb-2 mb-4">
              <div className="md:col-span-3">Time</div>
              <div className="md:col-span-9">Pooja</div>
            </div>

            {/* Data Rows */}
            {timings.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-3 border-b border-gray-50 last:border-0 hover:bg-orange-50/30 transition-colors rounded-lg px-2"
              >
                <div className="md:col-span-3 font-bold text-[#a7150b] flex items-center gap-2">
                  <Clock className="w-4 h-4 md:hidden" />
                  {item.time}
                </div>
                <div className="md:col-span-9 text-gray-700 font-medium">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Notes */}
          <div className="mt-10 space-y-3 text-sm text-gray-600 bg-gray-50 p-6 rounded-lg border-l-4 border-[#ffc107]">
            <p>
              • The timings given are approximate. It may vary on certain special occasions.
            </p>
            <p>
              • The temple will be opened between <span className="font-bold text-gray-800">3:00 am to 1:00 pm</span> and <span className="font-bold text-gray-800">3:00 pm to 8:00 pm</span>.
            </p>
            <p className="font-medium text-[#a7150b]">
              • On Sundays, Tuesdays, Fridays, Newmoon days, full moon days, and Siddhar Peedam festival days, there will be no break in Darshan Timings.
            </p>
          </div>

          {/* Know More Button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button className="group flex items-center gap-2 px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold hover:bg-[#8a0d08] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Know More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}