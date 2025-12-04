// 'use client';

// import { motion } from 'framer-motion';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// export default function ContactSection() {
//   return (
//     <section className="py-20 px-4 bg-gray-50">
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="max-w-5xl mx-auto"
//       >
//         <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
//           Contact & Location
//         </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               icon: MapPin,
//               title: 'Address',
//               details: [
//                 'Adhiparasakthi Siddhar Peedam',
//                 'Melmaruvathur, Chengalpattu District',
//                 'Tamil Nadu - 603319',
//               ],
//             },
//             {
//               icon: Phone,
//               title: 'Phone',
//               details: ['044-27529391', '044-27529313'],
//             },
//             {
//               icon: Mail,
//               title: 'Email',
//               details: ['aspwct@gmail.com'],
//             },
//             {
//               icon: Clock,
//               title: 'Hours',
//               details: [
//                 'Morning: 5:00 AM - 12:00 PM',
//                 'Evening: 4:00 PM - 9:00 PM',
//               ],
//             },
//           ].map((item, idx) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               className="p-6 bg-white rounded-lg shadow-lg text-center"
//             >
//               <item.icon className="w-8 h-8 mx-auto mb-4 text-[#a7150b]" />
//               <h3 className="font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
//               {item.details.map((detail, i) => (
//                 <p key={i} className="text-sm text-gray-600">
//                   {detail}
//                 </p>
//               ))}
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           viewport={{ once: true }}
//           className="mt-12 text-center"
//         >
//           <p className="text-lg text-gray-700 mb-6">
//             Have questions? We're here to help you on your spiritual journey.
//           </p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-[#a7150b] text-white rounded-lg font-bold hover:bg-[#8a0d08] transition"
//           >
//             Send us a Message
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] text-center mb-8 md:mb-12 spiritual-text">
          Contact & Location
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            {
              icon: MapPin,
              title: 'Address',
              details: [
                'Adhiparasakthi Siddhar Peedam',
                'Melmaruvathur, Chengalpattu District',
                'Tamil Nadu - 603319',
              ],
            },
            {
              icon: Phone,
              title: 'Phone',
              details: ['044-27529391', '044-27529313'],
            },
            {
              icon: Mail,
              title: 'Email',
              details: ['aspwct@gmail.com'],
            },
            {
              icon: Clock,
              title: 'Hours',
              details: [
                'Morning: 5:00 AM - 12:00 PM',
                'Evening: 4:00 PM - 9:00 PM',
              ],
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-lg text-center flex flex-col items-center h-full"
            >
              <item.icon className="w-8 h-8 mb-4 text-[#a7150b]" />
              <h3 className="font-bold text-[#1a1a1a] mb-3 text-lg">{item.title}</h3>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 text-center"
        >
          <p className="text-base md:text-lg text-gray-700 mb-6">
            Have questions? We're here to help you on your spiritual journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#a7150b] text-white rounded-lg font-bold hover:bg-[#8a0d08] transition text-sm md:text-base"
          >
            Send us a Message
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}