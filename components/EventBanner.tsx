// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import Image from 'next/image';
// // // // import { Calendar, MapPin } from 'lucide-react';

// // // // export default function EventBanner() {
// // // //   // Event Schedule Data derived from the poster
// // // //   const events = [
// // // //     {
// // // //       date: "March 1, 2026 (Sunday)",
// // // //       title: "Silver Chariot Procession",
// // // //       desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
// // // //       color: "bg-gray-100 border-l-4 border-gray-400"
// // // //     },
// // // //     {
// // // //       date: "March 2, 2026 (Monday)",
// // // //       title: "Golden Chariot Procession",
// // // //       desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
// // // //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// // // //     },
// // // //     {
// // // //       date: "March 3, 2026 (Tuesday)",
// // // //       title: "Floral Chariot Procession",
// // // //       desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
// // // //       color: "bg-red-50 border-l-4 border-red-500"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// // // //       <div className="max-w-6xl mx-auto">
        
// // // //         <div className="grid md:grid-cols-12 gap-8 items-center">
          
// // // //           {/* 1. LEFT SIDE: Content & Schedule */}
// // // //           {/* Spans 7 columns on desktop */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, x: -50 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             viewport={{ once: true }}
// // // //             className="md:col-span-7 space-y-6 order-2 md:order-1"
// // // //           >
// // // //             {/* Header */}
// // // //             <div>
// // // //               <span className="inline-block px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-3">
// // // //                 Upcoming Grand Event
// // // //               </span>
// // // //               <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 leading-tight">
// // // //                 86th Avathara Thirunal <br/>
// // // //                 <span className="text-[#a7150b]">Perumangala Vizha</span>
// // // //               </h2>
// // // //               <p className="text-gray-600 text-lg">
// // // //                 Celebrating the divine life of Arulthiru Bangaru Adigalar.
// // // //               </p>
// // // //             </div>

// // // //             {/* Schedule List */}
// // // //             <div className="space-y-4">
// // // //               {events.map((event, idx) => (
// // // //                 <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
// // // //                   <div className="flex items-start gap-3">
// // // //                     <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// // // //                     <div>
// // // //                       <h4 className="font-bold text-gray-900">{event.date}</h4>
// // // //                       <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
// // // //                       <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>

// // // //             {/* CTA / Location */}
// // // //             <div className="pt-4 flex flex-col sm:flex-row gap-4">
// // // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // // //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // //                 <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
// // // //               </div>
// // // //             </div>

// // // //           </motion.div>

// // // //           {/* 2. RIGHT SIDE: The Vertical Poster Image */}
// // // //           {/* Spans 5 columns on desktop */}
// // // //           <motion.div 
// // // //             initial={{ opacity: 0, x: 50 }}
// // // //             whileInView={{ opacity: 1, x: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // //             viewport={{ once: true }}
// // // //             className="md:col-span-5 relative order-1 md:order-2"
// // // //           >
// // // //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group">
// // // //               {/* Image Container - Aspect ratio suited for vertical poster */}
// // // //               <div className="aspect-[9/14] relative w-full"> 
// // // //                 <Image 
// // // //                   // Make sure to put the image in your public folder and rename it
// // // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
// // // //                   alt="86th Avathara Thirunal Poster"
// // // //                   fill
// // // //                   className="object-cover"
// // // //                   priority
// // // //                 />
// // // //               </div>
              
// // // //               {/* Shine Effect */}
// // // //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // //             </div>
// // // //           </motion.div>

// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import Image from 'next/image';
// // // import { Calendar, MapPin } from 'lucide-react';

// // // export default function EventBanner() {
// // //   const events = [
// // //     {
// // //       date: "March 1, 2026 (Sunday)",
// // //       title: "Silver Chariot Procession",
// // //       desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
// // //       color: "bg-gray-100 border-l-4 border-gray-400"
// // //     },
// // //     {
// // //       date: "March 2, 2026 (Monday)",
// // //       title: "Golden Chariot Procession",
// // //       desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
// // //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// // //     },
// // //     {
// // //       date: "March 3, 2026 (Tuesday)",
// // //       title: "Floral Chariot Procession",
// // //       desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
// // //       color: "bg-red-50 border-l-4 border-red-500"
// // //     }
// // //   ];

// // //   return (
// // //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// // //       <div className="max-w-6xl mx-auto">
        
// // //         {/* --- 1. CENTERED TOP BADGE --- */}
// // //         {/* This sits outside the grid, centered at the very top */}
// // //         <div className="flex justify-center mb-10">
// // //           <motion.span 
// // //             initial={{ opacity: 0, y: -10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // //           >
// // //             Upcoming Grand Event
// // //           </motion.span>
// // //         </div>

// // //         <div className="grid md:grid-cols-12 gap-8 items-start">
          
// // //           {/* --- 2. LEFT SIDE: Title & Schedule --- */}
// // //           {/* Title stays here, left aligned */}
// // //           <motion.div 
// // //             initial={{ opacity: 0, x: -50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             viewport={{ once: true }}
// // //             className="md:col-span-7 space-y-8 order-2 md:order-1"
// // //           >
// // //             {/* Header (Title & Desc only) */}
// // //             <div className="text-left">
// // //               <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
// // //                 86th Avathara Thirunal <br/>
// // //                 <span className="text-[#a7150b]">Perumangala Vizha</span>
// // //               </h2>
// // //               <p className="text-gray-600 text-lg">
// // //                 Celebrating the divine life of Arulthiru Bangaru Adigalar.
// // //               </p>
// // //             </div>

// // //             {/* Schedule List */}
// // //             <div className="space-y-4">
// // //               {events.map((event, idx) => (
// // //                 <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
// // //                   <div className="flex items-start gap-3">
// // //                     <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// // //                     <div>
// // //                       <h4 className="font-bold text-gray-900">{event.date}</h4>
// // //                       <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
// // //                       <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* CTA / Location */}
// // //             <div className="flex flex-col sm:flex-row gap-4">
// // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// // //                 <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
// // //               </div>
// // //             </div>
// // //           </motion.div>

// // //           {/* --- 3. RIGHT SIDE: Poster Image --- */}
// // //           <motion.div 
// // //             initial={{ opacity: 0, x: 50 }}
// // //             whileInView={{ opacity: 1, x: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //             viewport={{ once: true }}
// // //             className="md:col-span-5 relative order-1 md:order-2"
// // //           >
// // //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group max-w-sm mx-auto md:max-w-full">
// // //               <div className="aspect-[9/14] relative w-full"> 
// // //                 <Image 
// // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_s0ssyo.jpg" 
// // //                   // src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
// // //                   alt="86th Avathara Thirunal Poster"
// // //                   fill
// // //                   className="object-fill"
// // //                   priority
// // //                 />
// // //               </div>
// // //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import { Calendar, MapPin, Eye, FileText, Phone } from 'lucide-react';

// // export default function EventBanner() {
// //   const campDetails = [
// //     {
// //       icon: Calendar,
// //       title: "Camp Schedule",
// //       desc: "March 15 to April 15, 2026 | Monday - Saturday | 9:00 AM to 2:00 PM",
// //       color: "bg-blue-50 border-l-4 border-blue-500"
// //     },
// //     {
// //       icon: Eye,
// //       title: "Free Treatments & Aids",
// //       desc: "Free eye surgery & lens (worth ₹5,000) and free spectacles (worth ₹2,000).",
// //       color: "bg-green-50 border-l-4 border-green-500"
// //     },
// //     {
// //       icon: FileText,
// //       title: "Mandatory Requirements",
// //       desc: "Please bring photocopies (Xerox) of your Aadhaar Card and Ration Card, along with a valid phone number.",
// //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// //     }
// //   ];

// //   return (
// //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// //       <div className="max-w-6xl mx-auto">
        
// //         {/* --- 1. CENTERED TOP BADGE --- */}
// //         <div className="flex justify-center mb-10">
// //           <motion.span 
// //             initial={{ opacity: 0, y: -10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// //           >
// //             Special Medical Camp
// //           </motion.span>
// //         </div>

// //         <div className="grid md:grid-cols-12 gap-8 items-start">
          
// //           {/* --- 2. LEFT SIDE: Title & Schedule --- */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: -50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //             viewport={{ once: true }}
// //             className="md:col-span-7 space-y-8 order-2 md:order-1"
// //           >
// //             {/* Header */}
// //             <div className="text-left">
// //               <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
// //                 Free Eye Medical <br/>
// //                 <span className="text-[#a7150b]">Treatment Camp 2026</span>
// //               </h2>
// //               <p className="text-gray-600 text-lg">
// //                 Organized by Adhiparasakthi Hospital in commemoration of the 86th Avathara Perumangala Vizha of Spiritual Guru Arulthiru Bangaru Adigalar.
// //               </p>
// //             </div>

// //             {/* Camp Details List */}
// //             <div className="space-y-4">
// //               {campDetails.map((item, idx) => {
// //                 const Icon = item.icon;
// //                 return (
// //                   <div key={idx} className={`p-4 rounded-r-xl ${item.color} transition-transform hover:translate-x-1 duration-300`}>
// //                     <div className="flex items-start gap-3">
// //                       <Icon className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// //                       <div>
// //                         <h4 className="font-bold text-gray-900">{item.title}</h4>
// //                         <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>

// //             {/* CTA / Location & Contact */}
// //             <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
// //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// //                 <span className="font-medium text-sm">Adhiparasakthi Hospital, Melmaruvathur - 603 319</span>
// //               </div>
// //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// //                 <Phone className="w-5 h-5 text-[#a7150b]" />
// //                 <span className="font-medium text-sm">Toll Free: 1800 599 0999</span>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* --- 3. RIGHT SIDE: Poster Image --- */}
// //           <motion.div 
// //             initial={{ opacity: 0, x: 50 }}
// //             whileInView={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             viewport={{ once: true }}
// //             className="md:col-span-5 relative order-1 md:order-2"
// //           >
// //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group max-w-sm mx-auto md:max-w-full">
// //               <div className="aspect-[9/14] relative w-full"> 
// //                 {/* Remember to update this src with the actual URL of the new poster if you have it hosted */}
// //                 <Image 
// //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772701329/WhatsApp_Image_2026-03-05_at_12.18.24_PM_j23g5m.jpg" 
// //                   alt="Free Eye Camp 2026 Poster"
// //                   fill
// //                   className="object-fill"
// //                   priority
// //                 />
// //               </div>
// //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// export default function EventBanner() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Note: Place notice1.jpg and notice2.jpg in your Next.js 'public' folder, 
//   // or replace these paths with your hosted image URLs (e.g., Cloudinary).
//   const notices = [
//     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice1_thc7bt.jpg", 
//     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice2_zujh5s.jpg"
//   ];

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? notices.length - 1 : prevIndex - 1));
//   };

//   return (
//     <section className="py-12 md:py-20 px-4 bg-orange-50/50">
//       <div className="max-w-5xl mx-auto">
        
//         {/* --- 1. TOP BADGE & HEADINGS --- */}
//         <div className="text-center mb-10 space-y-4">
//           <motion.span 
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
//           >
//             Om Sakthi
//           </motion.span>
          
//           <motion.h2 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
//           >
//             Chithirai Pournami <span className="text-[#a7150b]">Peruvizha 2026</span>
//           </motion.h2>

//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
//           >
//             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
//               <Calendar className="w-5 h-5 text-[#a7150b]" />
//               <span className="font-medium text-sm">April 30 - May 01, 2026</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
//               <MapPin className="w-5 h-5 text-[#a7150b]" />
//               <span className="font-medium text-sm">Adhiparasakthi Siddhar Peetam, Melmaruvathur</span>
//             </div>
//           </motion.div>
//         </div>

//         {/* --- 2. CAROUSEL SECTION --- */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-4xl mx-auto"
//         >
//           {/* Aspect ratio container (16:9 works well for landscape spreads) */}
//           <div className="relative w-full aspect-video bg-orange-50/20">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentIndex}
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -50 }}
//                 transition={{ duration: 0.3 }}
//                 className="absolute inset-0"
//               >
//                 <Image 
//                   src={notices[currentIndex]} 
//                   alt={`Chithirai Pournami Invitation Page ${currentIndex + 1}`}
//                   fill
//                   className="object-contain p-2"
//                   priority={currentIndex === 0}
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation Arrows */}
//             <button 
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
//               aria-label="Previous Slide"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
            
//             <button 
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
//               aria-label="Next Slide"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Carousel Indicators (Dots) */}
//           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
//             {notices.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentIndex === idx 
//                     ? "bg-[#a7150b] w-8" 
//                     : "bg-gray-400 hover:bg-[#a7150b]/60"
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EventBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Note: Place notice1.jpg and notice2.jpg in your Next.js 'public' folder, 
  // or replace these paths with your hosted image URLs (e.g., Cloudinary).
  const notices = [
    "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice1_thc7bt.jpg", 
    "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice2_zujh5s.jpg"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? notices.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-orange-50/50">
      {/* Increased max-width here from max-w-5xl to max-w-7xl */}
      <div className="max-w-7xl mx-auto">
        
        {/* --- 1. TOP BADGE & HEADINGS --- */}
        <div className="text-center mb-10 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
          >
            Om Sakthi
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
          >
            Chithirai Pournami <span className="text-[#a7150b]">Peruvizha 2026</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
          >
            <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <Calendar className="w-5 h-5 text-[#a7150b]" />
              <span className="font-medium text-sm">April 30 - May 01, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
              <MapPin className="w-5 h-5 text-[#a7150b]" />
              <span className="font-medium text-sm">Adhiparasakthi Siddhar Peetam, Melmaruvathur</span>
            </div>
          </motion.div>
        </div>

        {/* --- 2. CAROUSEL SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          /* Increased from max-w-4xl to max-w-6xl for a much larger frame */
          className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-6xl mx-auto"
        >
          {/* Adjusted aspect ratio to be slightly taller on mobile, maintaining a wide view on desktop */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-orange-50/20">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image 
                  src={notices[currentIndex]} 
                  alt={`Chithirai Pournami Invitation Page ${currentIndex + 1}`}
                  fill
                  /* Removed padding so the image fills the container better */
                  className="object-contain"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Carousel Indicators (Dots) */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {notices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full shadow-sm transition-all duration-300 ${
                  currentIndex === idx 
                    ? "bg-[#a7150b] w-8" 
                    : "bg-gray-300 hover:bg-[#a7150b]/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}