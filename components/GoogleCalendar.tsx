// 'use client';

// import { motion } from 'framer-motion';

// export default function GoogleCalendarSection() {
//   return (
//     <section className="py-10 md:py-20 px-4 bg-white">
//       <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-8 md:mb-12">
//         <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
//           Temple Calendar
//         </h1>
//       </div>
      
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-6xl mx-auto"
//       >
//         {/* Responsive Calendar Wrapper: 400px on mobile, 600px on desktop */}
//         <div className="relative w-full h-[400px] md:h-[600px] bg-gray-50 rounded-xl overflow-hidden shadow-xl border border-gray-200">
//           <iframe 
//             src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
//             style={{ border: 0 }} 
//             width="100%" 
//             height="100%" 
//             frameBorder="0" 
//             scrolling="no"
//             className="w-full h-full"
//             title="Temple Calendar"
//           ></iframe>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';

export default function GoogleCalendarSection() {
  return (
    <section className="py-10 md:py-20 px-4 bg-white">
      {/* Title Section */}
      <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-8 md:mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Temple Calendar
        </h1>
      </div>

      {/* Calendar Animation Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Responsive Frame Box */}
        <div className="relative w-full h-[400px] md:h-[600px] bg-gray-50 rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=009592eac3140521c76f0c6911784723f593f84d96ce165a257e1f05189d283f%40group.calendar.google.com&ctz=Asia%2FKolkata"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            className="w-full h-full"
            title="Temple Calendar"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
}
