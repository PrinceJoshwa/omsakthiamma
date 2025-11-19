// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { MapPin, Clock, Phone } from 'lucide-react';

// export default function VisitUsPage() {
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
//             Visit Us
//           </h1>
//           <p className="text-xl text-gray-600">
//             Join us for a spiritual experience
//           </p>
//         </motion.div>
//       </section>

//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <div>
//               <h2 className="text-3xl font-bold text-[#a7150b] mb-4">Location</h2>
//               <div className="flex gap-4">
//                 <MapPin className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold">Main Temple Address</p>
//                   <p className="text-gray-600">123 Spiritual Lane, Holy City, State 12345</p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-[#a7150b] mb-4">Visiting Hours</h3>
//               <div className="flex gap-4">
//                 <Clock className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
//                 <div className="space-y-2">
//                   <p><span className="font-semibold">Morning:</span> 5:00 AM - 12:00 PM</p>
//                   <p><span className="font-semibold">Evening:</span> 4:00 PM - 9:00 PM</p>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-2xl font-bold text-[#a7150b] mb-4">Contact</h3>
//               <div className="flex gap-4">
//                 <Phone className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
//                 <div>
//                   <p className="font-semibold">+1 (123) 456-7890</p>
//                   <p className="text-gray-600">info@omsakhtiamma.com</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative h-96 rounded-lg overflow-hidden shadow-lg"
//           >
//             <Image
//               src="/temple-entrance-photo.jpg"
//               alt="Temple"
//               fill
//               className="object-cover"
//             />
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function VisitUsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-left"
        >
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4">Visit Us</h1>
        </motion.div>
      </section>

      {/* MAP + ADDRESS SECTION */}
      <section className="px-4 pb-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.694708505044!2d79.738536!3d12.927615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a531f20c8a4a993%3A0xcb80752d19f2cdc6!2sOm%20Shakthi%20Temple!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              loading="lazy"
              className="rounded-lg shadow-md border"
            ></iframe>
          </motion.div>

          {/* RIGHT: RED ADDRESS BOX */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#8b0000] text-white p-10 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Our Address:</h2>

            <p className="leading-relaxed mb-6">
              Adhiparasakthi Siddhar Peedam  
              Melmaruvathur, Chengalpattu District,  
              Tamil Nadu - 603319
            </p>

            <h3 className="text-xl font-bold mb-3">Distance:</h3>

            <p className="mb-2">From Chennai: 100 KM</p>
            <p>From Chennai Airport: 82 KM</p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
