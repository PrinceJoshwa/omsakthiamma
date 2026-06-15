// // // // // // // // 'use client';

// // // // // // // // import { motion } from 'framer-motion';
// // // // // // // // import Image from 'next/image';
// // // // // // // // import { Calendar, MapPin } from 'lucide-react';

// // // // // // // // export default function EventBanner() {
// // // // // // // //   // Event Schedule Data derived from the poster
// // // // // // // //   const events = [
// // // // // // // //     {
// // // // // // // //       date: "March 1, 2026 (Sunday)",
// // // // // // // //       title: "Silver Chariot Procession",
// // // // // // // //       desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
// // // // // // // //       color: "bg-gray-100 border-l-4 border-gray-400"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       date: "March 2, 2026 (Monday)",
// // // // // // // //       title: "Golden Chariot Procession",
// // // // // // // //       desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
// // // // // // // //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       date: "March 3, 2026 (Tuesday)",
// // // // // // // //       title: "Floral Chariot Procession",
// // // // // // // //       desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
// // // // // // // //       color: "bg-red-50 border-l-4 border-red-500"
// // // // // // // //     }
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// // // // // // // //       <div className="max-w-6xl mx-auto">
        
// // // // // // // //         <div className="grid md:grid-cols-12 gap-8 items-center">
          
// // // // // // // //           {/* 1. LEFT SIDE: Content & Schedule */}
// // // // // // // //           {/* Spans 7 columns on desktop */}
// // // // // // // //           <motion.div 
// // // // // // // //             initial={{ opacity: 0, x: -50 }}
// // // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="md:col-span-7 space-y-6 order-2 md:order-1"
// // // // // // // //           >
// // // // // // // //             {/* Header */}
// // // // // // // //             <div>
// // // // // // // //               <span className="inline-block px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-3">
// // // // // // // //                 Upcoming Grand Event
// // // // // // // //               </span>
// // // // // // // //               <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 leading-tight">
// // // // // // // //                 86th Avathara Thirunal <br/>
// // // // // // // //                 <span className="text-[#a7150b]">Perumangala Vizha</span>
// // // // // // // //               </h2>
// // // // // // // //               <p className="text-gray-600 text-lg">
// // // // // // // //                 Celebrating the divine life of Arulthiru Bangaru Adigalar.
// // // // // // // //               </p>
// // // // // // // //             </div>

// // // // // // // //             {/* Schedule List */}
// // // // // // // //             <div className="space-y-4">
// // // // // // // //               {events.map((event, idx) => (
// // // // // // // //                 <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
// // // // // // // //                   <div className="flex items-start gap-3">
// // // // // // // //                     <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// // // // // // // //                     <div>
// // // // // // // //                       <h4 className="font-bold text-gray-900">{event.date}</h4>
// // // // // // // //                       <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
// // // // // // // //                       <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               ))}
// // // // // // // //             </div>

// // // // // // // //             {/* CTA / Location */}
// // // // // // // //             <div className="pt-4 flex flex-col sm:flex-row gap-4">
// // // // // // // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // // // // // // //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // // // // // //                 <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //           </motion.div>

// // // // // // // //           {/* 2. RIGHT SIDE: The Vertical Poster Image */}
// // // // // // // //           {/* Spans 5 columns on desktop */}
// // // // // // // //           <motion.div 
// // // // // // // //             initial={{ opacity: 0, x: 50 }}
// // // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // // //             viewport={{ once: true }}
// // // // // // // //             className="md:col-span-5 relative order-1 md:order-2"
// // // // // // // //           >
// // // // // // // //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group">
// // // // // // // //               {/* Image Container - Aspect ratio suited for vertical poster */}
// // // // // // // //               <div className="aspect-[9/14] relative w-full"> 
// // // // // // // //                 <Image 
// // // // // // // //                   // Make sure to put the image in your public folder and rename it
// // // // // // // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
// // // // // // // //                   alt="86th Avathara Thirunal Poster"
// // // // // // // //                   fill
// // // // // // // //                   className="object-cover"
// // // // // // // //                   priority
// // // // // // // //                 />
// // // // // // // //               </div>
              
// // // // // // // //               {/* Shine Effect */}
// // // // // // // //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // // // // // //             </div>
// // // // // // // //           </motion.div>

// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // 'use client';

// // // // // // // import { motion } from 'framer-motion';
// // // // // // // import Image from 'next/image';
// // // // // // // import { Calendar, MapPin } from 'lucide-react';

// // // // // // // export default function EventBanner() {
// // // // // // //   const events = [
// // // // // // //     {
// // // // // // //       date: "March 1, 2026 (Sunday)",
// // // // // // //       title: "Silver Chariot Procession",
// // // // // // //       desc: "Velli Ratham procession inviting Arulthiru Amma to the Peedam.",
// // // // // // //       color: "bg-gray-100 border-l-4 border-gray-400"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       date: "March 2, 2026 (Monday)",
// // // // // // //       title: "Golden Chariot Procession",
// // // // // // //       desc: "Thanga Ratham procession & Paadha Pooja by devotees.",
// // // // // // //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       date: "March 3, 2026 (Tuesday)",
// // // // // // //       title: "Floral Chariot Procession",
// // // // // // //       desc: "Malar Ratham procession, Grand Birthday Celebrations & Welfare Aid Distribution.",
// // // // // // //       color: "bg-red-50 border-l-4 border-red-500"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// // // // // // //       <div className="max-w-6xl mx-auto">
        
// // // // // // //         {/* --- 1. CENTERED TOP BADGE --- */}
// // // // // // //         {/* This sits outside the grid, centered at the very top */}
// // // // // // //         <div className="flex justify-center mb-10">
// // // // // // //           <motion.span 
// // // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // // // // // //           >
// // // // // // //             Upcoming Grand Event
// // // // // // //           </motion.span>
// // // // // // //         </div>

// // // // // // //         <div className="grid md:grid-cols-12 gap-8 items-start">
          
// // // // // // //           {/* --- 2. LEFT SIDE: Title & Schedule --- */}
// // // // // // //           {/* Title stays here, left aligned */}
// // // // // // //           <motion.div 
// // // // // // //             initial={{ opacity: 0, x: -50 }}
// // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="md:col-span-7 space-y-8 order-2 md:order-1"
// // // // // // //           >
// // // // // // //             {/* Header (Title & Desc only) */}
// // // // // // //             <div className="text-left">
// // // // // // //               <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
// // // // // // //                 86th Avathara Thirunal <br/>
// // // // // // //                 <span className="text-[#a7150b]">Perumangala Vizha</span>
// // // // // // //               </h2>
// // // // // // //               <p className="text-gray-600 text-lg">
// // // // // // //                 Celebrating the divine life of Arulthiru Bangaru Adigalar.
// // // // // // //               </p>
// // // // // // //             </div>

// // // // // // //             {/* Schedule List */}
// // // // // // //             <div className="space-y-4">
// // // // // // //               {events.map((event, idx) => (
// // // // // // //                 <div key={idx} className={`p-4 rounded-r-xl ${event.color} transition-transform hover:translate-x-1 duration-300`}>
// // // // // // //                   <div className="flex items-start gap-3">
// // // // // // //                     <Calendar className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// // // // // // //                     <div>
// // // // // // //                       <h4 className="font-bold text-gray-900">{event.date}</h4>
// // // // // // //                       <h5 className="font-semibold text-[#a7150b]">{event.title}</h5>
// // // // // // //                       <p className="text-sm text-gray-600 mt-1">{event.desc}</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}
// // // // // // //             </div>

// // // // // // //             {/* CTA / Location */}
// // // // // // //             <div className="flex flex-col sm:flex-row gap-4">
// // // // // // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // // // // // //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // // // // //                 <span className="font-medium text-sm">Melmaruvathur Adhiparasakthi Siddhar Peedam</span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //           {/* --- 3. RIGHT SIDE: Poster Image --- */}
// // // // // // //           <motion.div 
// // // // // // //             initial={{ opacity: 0, x: 50 }}
// // // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="md:col-span-5 relative order-1 md:order-2"
// // // // // // //           >
// // // // // // //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group max-w-sm mx-auto md:max-w-full">
// // // // // // //               <div className="aspect-[9/14] relative w-full"> 
// // // // // // //                 <Image 
// // // // // // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771331460/WhatsApp_Image_2026-02-17_at_2.59.22_PM_s0ssyo.jpg" 
// // // // // // //                   // src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1770837614/WhatsApp_Image_2026-02-11_at_5.37.47_PM_s8ejlz.jpg" 
// // // // // // //                   alt="86th Avathara Thirunal Poster"
// // // // // // //                   fill
// // // // // // //                   className="object-fill"
// // // // // // //                   priority
// // // // // // //                 />
// // // // // // //               </div>
// // // // // // //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // 'use client';

// // // // // // import { motion } from 'framer-motion';
// // // // // // import Image from 'next/image';
// // // // // // import { Calendar, MapPin, Eye, FileText, Phone } from 'lucide-react';

// // // // // // export default function EventBanner() {
// // // // // //   const campDetails = [
// // // // // //     {
// // // // // //       icon: Calendar,
// // // // // //       title: "Camp Schedule",
// // // // // //       desc: "March 15 to April 15, 2026 | Monday - Saturday | 9:00 AM to 2:00 PM",
// // // // // //       color: "bg-blue-50 border-l-4 border-blue-500"
// // // // // //     },
// // // // // //     {
// // // // // //       icon: Eye,
// // // // // //       title: "Free Treatments & Aids",
// // // // // //       desc: "Free eye surgery & lens (worth ₹5,000) and free spectacles (worth ₹2,000).",
// // // // // //       color: "bg-green-50 border-l-4 border-green-500"
// // // // // //     },
// // // // // //     {
// // // // // //       icon: FileText,
// // // // // //       title: "Mandatory Requirements",
// // // // // //       desc: "Please bring photocopies (Xerox) of your Aadhaar Card and Ration Card, along with a valid phone number.",
// // // // // //       color: "bg-yellow-50 border-l-4 border-yellow-500"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/30">
// // // // // //       <div className="max-w-6xl mx-auto">
        
// // // // // //         {/* --- 1. CENTERED TOP BADGE --- */}
// // // // // //         <div className="flex justify-center mb-10">
// // // // // //           <motion.span 
// // // // // //             initial={{ opacity: 0, y: -10 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // // // // //           >
// // // // // //             Special Medical Camp
// // // // // //           </motion.span>
// // // // // //         </div>

// // // // // //         <div className="grid md:grid-cols-12 gap-8 items-start">
          
// // // // // //           {/* --- 2. LEFT SIDE: Title & Schedule --- */}
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0, x: -50 }}
// // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="md:col-span-7 space-y-8 order-2 md:order-1"
// // // // // //           >
// // // // // //             {/* Header */}
// // // // // //             <div className="text-left">
// // // // // //               <h2 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-4 leading-tight">
// // // // // //                 Free Eye Medical <br/>
// // // // // //                 <span className="text-[#a7150b]">Treatment Camp 2026</span>
// // // // // //               </h2>
// // // // // //               <p className="text-gray-600 text-lg">
// // // // // //                 Organized by Adhiparasakthi Hospital in commemoration of the 86th Avathara Perumangala Vizha of Spiritual Guru Arulthiru Bangaru Adigalar.
// // // // // //               </p>
// // // // // //             </div>

// // // // // //             {/* Camp Details List */}
// // // // // //             <div className="space-y-4">
// // // // // //               {campDetails.map((item, idx) => {
// // // // // //                 const Icon = item.icon;
// // // // // //                 return (
// // // // // //                   <div key={idx} className={`p-4 rounded-r-xl ${item.color} transition-transform hover:translate-x-1 duration-300`}>
// // // // // //                     <div className="flex items-start gap-3">
// // // // // //                       <Icon className="w-5 h-5 text-gray-700 mt-1 flex-shrink-0" />
// // // // // //                       <div>
// // // // // //                         <h4 className="font-bold text-gray-900">{item.title}</h4>
// // // // // //                         <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 );
// // // // // //               })}
// // // // // //             </div>

// // // // // //             {/* CTA / Location & Contact */}
// // // // // //             <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
// // // // // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // // // // //                 <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // // // //                 <span className="font-medium text-sm">Adhiparasakthi Hospital, Melmaruvathur - 603 319</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-2 text-gray-600 bg-white px-5 py-3 rounded-lg border border-gray-200 shadow-sm">
// // // // // //                 <Phone className="w-5 h-5 text-[#a7150b]" />
// // // // // //                 <span className="font-medium text-sm">Toll Free: 1800 599 0999</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //           {/* --- 3. RIGHT SIDE: Poster Image --- */}
// // // // // //           <motion.div 
// // // // // //             initial={{ opacity: 0, x: 50 }}
// // // // // //             whileInView={{ opacity: 1, x: 0 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //             viewport={{ once: true }}
// // // // // //             className="md:col-span-5 relative order-1 md:order-2"
// // // // // //           >
// // // // // //             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group max-w-sm mx-auto md:max-w-full">
// // // // // //               <div className="aspect-[9/14] relative w-full"> 
// // // // // //                 {/* Remember to update this src with the actual URL of the new poster if you have it hosted */}
// // // // // //                 <Image 
// // // // // //                   src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772701329/WhatsApp_Image_2026-03-05_at_12.18.24_PM_j23g5m.jpg" 
// // // // // //                   alt="Free Eye Camp 2026 Poster"
// // // // // //                   fill
// // // // // //                   className="object-fill"
// // // // // //                   priority
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
// // // // // //             </div>
// // // // // //           </motion.div>

// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // 'use client';

// // // // // import { useState } from 'react';
// // // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // // import Image from 'next/image';
// // // // // import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// // // // // export default function EventBanner() {
// // // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // // //   // Note: Place notice1.jpg and notice2.jpg in your Next.js 'public' folder, 
// // // // //   // or replace these paths with your hosted image URLs (e.g., Cloudinary).
// // // // //   const notices = [
// // // // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice1_thc7bt.jpg", 
// // // // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice2_zujh5s.jpg"
// // // // //   ];

// // // // //   const nextSlide = () => {
// // // // //     setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
// // // // //   };

// // // // //   const prevSlide = () => {
// // // // //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? notices.length - 1 : prevIndex - 1));
// // // // //   };

// // // // //   return (
// // // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/50">
// // // // //       <div className="max-w-5xl mx-auto">
        
// // // // //         {/* --- 1. TOP BADGE & HEADINGS --- */}
// // // // //         <div className="text-center mb-10 space-y-4">
// // // // //           <motion.span 
// // // // //             initial={{ opacity: 0, y: -10 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // // // //           >
// // // // //             Om Sakthi
// // // // //           </motion.span>
          
// // // // //           <motion.h2 
// // // // //             initial={{ opacity: 0, y: 10 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
// // // // //           >
// // // // //             Chithirai Pournami <span className="text-[#a7150b]">Peruvizha 2026</span>
// // // // //           </motion.h2>

// // // // //           <motion.div 
// // // // //             initial={{ opacity: 0 }}
// // // // //             whileInView={{ opacity: 1 }}
// // // // //             viewport={{ once: true }}
// // // // //             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
// // // // //           >
// // // // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // // // //               <Calendar className="w-5 h-5 text-[#a7150b]" />
// // // // //               <span className="font-medium text-sm">April 30 - May 01, 2026</span>
// // // // //             </div>
// // // // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // // // //               <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // // //               <span className="font-medium text-sm">Adhiparasakthi Siddhar Peetam, Melmaruvathur</span>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         {/* --- 2. CAROUSEL SECTION --- */}
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, scale: 0.95 }}
// // // // //           whileInView={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           viewport={{ once: true }}
// // // // //           className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-4xl mx-auto"
// // // // //         >
// // // // //           {/* Aspect ratio container (16:9 works well for landscape spreads) */}
// // // // //           <div className="relative w-full aspect-video bg-orange-50/20">
// // // // //             <AnimatePresence mode="wait">
// // // // //               <motion.div
// // // // //                 key={currentIndex}
// // // // //                 initial={{ opacity: 0, x: 50 }}
// // // // //                 animate={{ opacity: 1, x: 0 }}
// // // // //                 exit={{ opacity: 0, x: -50 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //                 className="absolute inset-0"
// // // // //               >
// // // // //                 <Image 
// // // // //                   src={notices[currentIndex]} 
// // // // //                   alt={`Chithirai Pournami Invitation Page ${currentIndex + 1}`}
// // // // //                   fill
// // // // //                   className="object-contain p-2"
// // // // //                   priority={currentIndex === 0}
// // // // //                 />
// // // // //               </motion.div>
// // // // //             </AnimatePresence>

// // // // //             {/* Navigation Arrows */}
// // // // //             <button 
// // // // //               onClick={prevSlide}
// // // // //               className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // // // //               aria-label="Previous Slide"
// // // // //             >
// // // // //               <ChevronLeft className="w-6 h-6" />
// // // // //             </button>
            
// // // // //             <button 
// // // // //               onClick={nextSlide}
// // // // //               className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // // // //               aria-label="Next Slide"
// // // // //             >
// // // // //               <ChevronRight className="w-6 h-6" />
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Carousel Indicators (Dots) */}
// // // // //           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
// // // // //             {notices.map((_, idx) => (
// // // // //               <button
// // // // //                 key={idx}
// // // // //                 onClick={() => setCurrentIndex(idx)}
// // // // //                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
// // // // //                   currentIndex === idx 
// // // // //                     ? "bg-[#a7150b] w-8" 
// // // // //                     : "bg-gray-400 hover:bg-[#a7150b]/60"
// // // // //                 }`}
// // // // //                 aria-label={`Go to slide ${idx + 1}`}
// // // // //               />
// // // // //             ))}
// // // // //           </div>
// // // // //         </motion.div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // 'use client';

// // // // import { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';
// // // // import Image from 'next/image';
// // // // import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// // // // export default function EventBanner() {
// // // //   const [currentIndex, setCurrentIndex] = useState(0);

// // // //   // Note: Place notice1.jpg and notice2.jpg in your Next.js 'public' folder, 
// // // //   // or replace these paths with your hosted image URLs (e.g., Cloudinary).
// // // //   const notices = [
// // // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice1_thc7bt.jpg", 
// // // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice2_zujh5s.jpg"
// // // //   ];

// // // //   const nextSlide = () => {
// // // //     setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
// // // //   };

// // // //   const prevSlide = () => {
// // // //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? notices.length - 1 : prevIndex - 1));
// // // //   };

// // // //   return (
// // // //     <section className="py-12 md:py-20 px-4 bg-orange-50/50">
// // // //       {/* Increased max-width here from max-w-5xl to max-w-7xl */}
// // // //       <div className="max-w-7xl mx-auto">
        
// // // //         {/* --- 1. TOP BADGE & HEADINGS --- */}
// // // //         <div className="text-center mb-10 space-y-4">
// // // //           <motion.span 
// // // //             initial={{ opacity: 0, y: -10 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // // //           >
// // // //             Om Sakthi
// // // //           </motion.span>
          
// // // //           <motion.h2 
// // // //             initial={{ opacity: 0, y: 10 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             viewport={{ once: true }}
// // // //             className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
// // // //           >
// // // //             Chitra Pournami <span className="text-[#a7150b]">Peruvizha 2026</span>
// // // //           </motion.h2>

// // // //           <motion.div 
// // // //             initial={{ opacity: 0 }}
// // // //             whileInView={{ opacity: 1 }}
// // // //             viewport={{ once: true }}
// // // //             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
// // // //           >
// // // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // // //               <Calendar className="w-5 h-5 text-[#a7150b]" />
// // // //               <span className="font-medium text-sm">April 30 - May 01, 2026</span>
// // // //             </div>
// // // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // // //               <MapPin className="w-5 h-5 text-[#a7150b]" />
// // // //               <span className="font-medium text-sm">Adhiparasakthi Siddhar Peetam, Melmaruvathur</span>
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>

// // // //         {/* --- 2. CAROUSEL SECTION --- */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, scale: 0.95 }}
// // // //           whileInView={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           viewport={{ once: true }}
// // // //           /* Increased from max-w-4xl to max-w-6xl for a much larger frame */
// // // //           className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-6xl mx-auto"
// // // //         >
// // // //           {/* Adjusted aspect ratio to be slightly taller on mobile, maintaining a wide view on desktop */}
// // // //           <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-orange-50/20">
// // // //             <AnimatePresence mode="wait">
// // // //               <motion.div
// // // //                 key={currentIndex}
// // // //                 initial={{ opacity: 0, x: 50 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 exit={{ opacity: 0, x: -50 }}
// // // //                 transition={{ duration: 0.3 }}
// // // //                 className="absolute inset-0"
// // // //               >
// // // //                 <Image 
// // // //                   src={notices[currentIndex]} 
// // // //                   alt={`Chitra Pournami Invitation Page ${currentIndex + 1}`}
// // // //                   fill
// // // //                   /* Removed padding so the image fills the container better */
// // // //                   className="object-contain"
// // // //                   priority={currentIndex === 0}
// // // //                 />
// // // //               </motion.div>
// // // //             </AnimatePresence>

// // // //             {/* Navigation Arrows */}
// // // //             <button 
// // // //               onClick={prevSlide}
// // // //               className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // // //               aria-label="Previous Slide"
// // // //             >
// // // //               <ChevronLeft className="w-6 h-6" />
// // // //             </button>
            
// // // //             <button 
// // // //               onClick={nextSlide}
// // // //               className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // // //               aria-label="Next Slide"
// // // //             >
// // // //               <ChevronRight className="w-6 h-6" />
// // // //             </button>
// // // //           </div>

// // // //           {/* Carousel Indicators (Dots) */}
// // // //           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
// // // //             {notices.map((_, idx) => (
// // // //               <button
// // // //                 key={idx}
// // // //                 onClick={() => setCurrentIndex(idx)}
// // // //                 className={`w-3 h-3 rounded-full shadow-sm transition-all duration-300 ${
// // // //                   currentIndex === idx 
// // // //                     ? "bg-[#a7150b] w-8" 
// // // //                     : "bg-gray-300 hover:bg-[#a7150b]/60"
// // // //                 }`}
// // // //                 aria-label={`Go to slide ${idx + 1}`}
// // // //               />
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // 'use client';

// // // import { useState, useEffect } from 'react'; // <-- Added useEffect
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import Image from 'next/image';
// // // import { Calendar, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

// // // export default function EventBanner() {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   // Note: Place notice1.jpg and notice2.jpg in your Next.js 'public' folder, 
// // //   // or replace these paths with your hosted image URLs (e.g., Cloudinary).
// // //   const notices = [
// // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice1_thc7bt.jpg", 
// // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1776797744/notice2_zujh5s.jpg",
// // //     "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777462062/Event-banner-chitra_vgpywy.jpg",
// // //   ];

// // //   const nextSlide = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
// // //   };

// // //   const prevSlide = () => {
// // //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? notices.length - 1 : prevIndex - 1));
// // //   };

// // //   // --- AUTO-PLAY LOGIC ---
// // //   useEffect(() => {
// // //     // Change slide every 5 seconds (5000 milliseconds)
// // //     const timer = setInterval(() => {
// // //       setCurrentIndex((prevIndex) => (prevIndex === notices.length - 1 ? 0 : prevIndex + 1));
// // //     }, 5000);

// // //     // Cleanup function: clears the interval if the component unmounts 
// // //     // OR if currentIndex changes (which resets the timer when manual buttons are clicked)
// // //     return () => clearInterval(timer);
// // //   }, [currentIndex, notices.length]); 

// // //   return (
// // //     <section className="py-12 md:py-20 px-4 bg-orange-50/50">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* --- 1. TOP BADGE & HEADINGS --- */}
// // //         <div className="text-center mb-10 space-y-4">
// // //           <motion.span 
// // //             initial={{ opacity: 0, y: -10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// // //           >
// // //             Om Sakthi
// // //           </motion.span>
          
// // //           <motion.h2 
// // //             initial={{ opacity: 0, y: 10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
// // //           >
// // //             Chitra Pournami <span className="text-[#a7150b]">Peruvizha 2026</span>
// // //           </motion.h2>

// // //           <motion.div 
// // //             initial={{ opacity: 0 }}
// // //             whileInView={{ opacity: 1 }}
// // //             viewport={{ once: true }}
// // //             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
// // //           >
// // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // //               <Calendar className="w-5 h-5 text-[#a7150b]" />
// // //               <span className="font-medium text-sm">April 30 - May 01, 2026</span>
// // //             </div>
// // //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// // //               <MapPin className="w-5 h-5 text-[#a7150b]" />
// // //               <span className="font-medium text-sm">Adhiparasakthi Siddhar Peetam, Melmaruvathur</span>
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         {/* --- 2. CAROUSEL SECTION --- */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, scale: 0.95 }}
// // //           whileInView={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 0.6 }}
// // //           viewport={{ once: true }}
// // //           className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-6xl mx-auto"
// // //         >
// // //           <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-orange-50/20">
// // //             <AnimatePresence mode="wait">
// // //               <motion.div
// // //                 key={currentIndex}
// // //                 initial={{ opacity: 0, x: 50 }}
// // //                 animate={{ opacity: 1, x: 0 }}
// // //                 exit={{ opacity: 0, x: -50 }}
// // //                 transition={{ duration: 0.3 }}
// // //                 className="absolute inset-0"
// // //               >
// // //                 <Image 
// // //                   src={notices[currentIndex]} 
// // //                   alt={`Chitra Pournami Invitation Page ${currentIndex + 1}`}
// // //                   fill
// // //                   className="object-contain"
// // //                   priority={currentIndex === 0}
// // //                 />
// // //               </motion.div>
// // //             </AnimatePresence>

// // //             {/* Navigation Arrows */}
// // //             <button 
// // //               onClick={prevSlide}
// // //               className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // //               aria-label="Previous Slide"
// // //             >
// // //               <ChevronLeft className="w-6 h-6" />
// // //             </button>
            
// // //             <button 
// // //               onClick={nextSlide}
// // //               className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white text-[#a7150b] rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
// // //               aria-label="Next Slide"
// // //             >
// // //               <ChevronRight className="w-6 h-6" />
// // //             </button>
// // //           </div>

// // //           {/* Carousel Indicators (Dots) */}
// // //           <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
// // //             {notices.map((_, idx) => (
// // //               <button
// // //                 key={idx}
// // //                 onClick={() => setCurrentIndex(idx)}
// // //                 className={`w-3 h-3 rounded-full shadow-sm transition-all duration-300 ${
// // //                   currentIndex === idx 
// // //                     ? "bg-[#a7150b] w-8" 
// // //                     : "bg-gray-300 hover:bg-[#a7150b]/60"
// // //                 }`}
// // //                 aria-label={`Go to slide ${idx + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </motion.div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import { Calendar, MapPin, Sparkles } from 'lucide-react';

// // export default function EventBanner() {
// //   // Single image URL for the event notice
// //   // const noticeImage = "https://res.cloudinary.com/dvd7o5nph/image/upload/v1779967952/notice_rwti9z.jpg";
// //   const noticeImage = "https://res.cloudinary.com/dvd7o5nph/image/upload/v1781469049/hero-omsakthi_ti7zw5.jpg";

// //   // Extracted schedule from the Tamil invitation poster
// //   const schedule = [
// //     { date: "August 13, 2026", day: "Thursday", title: "Kalasa Vilakku Poojai", tamilTitle: "கலச விளக்கு பூசை" },
// //     { date: "August 14, 2026", day: "Friday", title: "Aadi Pooram (Kanji Vaarppu)", tamilTitle: "ஆடிப்பூரம் - கஞ்சிவார்ப்பு" },
// //     { date: "August 15, 2026", day: "Saturday", title: "Paal Abhishekam", tamilTitle: "பாலாபிஷேகம்" }
// //   ];

// //   return (
// //     <section className="py-12 md:py-20 px-4 bg-orange-50/50">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* --- 1. TOP BADGE & HEADINGS --- */}
// //         <div className="text-center mb-10 space-y-4">
// //           <motion.span 
// //             initial={{ opacity: 0, y: -10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="inline-block px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase shadow-sm"
// //           >
// //             Om Sakthi
// //           </motion.span>
          
// //           <motion.h2 
// //             initial={{ opacity: 0, y: 10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             className="text-3xl md:text-5xl font-bold text-[#1a1a1a] leading-tight"
// //           >
// //             55th Aadi Pooram <span className="text-[#a7150b]">Peruvizha 2026</span>
// //           </motion.h2>

// //           <motion.div 
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             viewport={{ once: true }}
// //             className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4"
// //           >
// //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// //               <Calendar className="w-5 h-5 text-[#a7150b]" />
// //               <span className="font-medium text-sm">August 13 - 15, 2026</span>
// //             </div>
// //             <div className="flex items-center gap-2 text-gray-700 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
// //               <MapPin className="w-5 h-5 text-[#a7150b]" />
// //               <span className="font-medium text-sm text-center">Melmaruvathur Suyambu Adhiparasakthi Siddhar Peetam</span>
// //             </div>
// //           </motion.div>
// //         </div>

// //         {/* --- 2. IMAGE SECTION --- */}
// //         <motion.div 
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="relative rounded-2xl overflow-hidden shadow-2xl border-[4px] border-[#ffc107] bg-white w-full max-w-4xl mx-auto mb-16"
// //         >
// //           <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-orange-50/20">
// //             <Image 
// //               src={noticeImage} 
// //               alt="Aadi Pooram Invitation Page"
// //               fill
// //               className="object-fill"
// //               priority
// //             />
// //           </div>
// //         </motion.div>

// //         {/* --- 3. SCHEDULE SECTION --- */}
// //         <div className="max-w-5xl mx-auto">
// //           <h3 className="text-2xl md:text-3xl font-bold text-center text-[#1a1a1a] mb-8">
// //             Event Schedule
// //           </h3>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //             {schedule.map((item, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 className="bg-white rounded-xl p-6 border border-red-100 shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-[#a7150b] relative overflow-hidden"
// //               >
// //                 <div className="absolute top-0 right-0 p-4 opacity-10">
// //                   <Sparkles className="w-12 h-12 text-[#a7150b]" />
// //                 </div>
// //                 <p className="text-[#a7150b] font-bold text-sm mb-1 uppercase tracking-wider">{item.day}</p>
// //                 <p className="text-gray-500 text-sm mb-4 font-medium flex items-center gap-2">
// //                   <Calendar className="w-4 h-4" /> {item.date}
// //                 </p>
// //                 <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
// //                 <p className="text-md text-red-800/80 font-medium">{item.tamilTitle}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { Calendar, Info, Sparkles } from 'lucide-react';

// export default function EventBanner() {
//   const noticeImage = "https://res.cloudinary.com/dvd7o5nph/image/upload/v1781469049/hero-omsakthi_ti7zw5.jpg";

//   const schedule = [
//     { 
//       date: "13.08.2026", 
//       tamilDay: "ஆடி வியாழன் 28", 
//       title: "கலச விளக்கு பூசை",
//       color: "border-l-[#a7150b]"
//     },
//     { 
//       date: "14.08.2026", 
//       tamilDay: "ஆடி வெள்ளி 29", 
//       title: "ஆடிப்பூரம் (கஞ்சிவார்ப்பு)",
//       color: "border-l-[#ffc107]"
//     },
//     { 
//       date: "15.08.2026", 
//       tamilDay: "ஆடி சனி 30", 
//       title: "பாலாபிஷேகம்",
//       color: "border-l-[#a7150b]"
//     }
//   ];

//   return (
//     <section className="py-12 md:py-20 px-4 bg-orange-50/40">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="grid md:grid-cols-12 gap-10 items-start">
          
//           {/* --- 1. LEFT SIDE: Tamil Content from Image --- */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="md:col-span-7 space-y-6 order-2 md:order-1"
//           >
//             {/* Header / Title */}
//             <div>
//               <span className="inline-block px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-red-200">
//                 அழைப்பிதழ்
//               </span>
//               <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 leading-tight">
//                 55 - ஆம் ஆண்டு <br/>
//                 <span className="text-[#a7150b]">ஆடிப்பூர பெருவிழா</span>
//               </h2>
//               <p className="text-[#a7150b] font-bold text-lg mb-2">
//                 அன்னையின் அருள் நாடும் அன்பரீர்!
//               </p>
//               <p className="text-gray-700 leading-relaxed text-justify">
//                 அருள்மிகு அன்னை ஆதிபராசக்தியின் அருளாணையின் வண்ணமும் அம்மா அருள்மிகு பங்காரு சித்சர் அவர்கள் அருளாசியுடனும் 55- ஆம் ஆண்டு ஆடிப்பூர பெருவிழா மேல்மருவத்தூர் சுயம்பு அருள்மிகு ஆதிபராசக்தி சித்தர் பீடத்தில் அம்மா அருள்மிகு பங்காரு சித்சர் அவர்களின் 86-ஆம் ஆண்டு சிறப்பாக நடைபெற உள்ளது.
//               </p>
//             </div>

//             {/* Schedule List */}
//             <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
//               {schedule.map((item, idx) => (
//                 <div key={idx} className={`flex items-center gap-4 p-3 bg-orange-50/50 rounded-xl border-l-4 ${item.color}`}>
//                   <div className="bg-white p-2 rounded-lg shadow-sm">
//                     <Calendar className="w-5 h-5 text-[#a7150b]" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
//                     <p className="text-sm text-gray-600 font-medium">
//                       {item.tamilDay} | {item.date}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Middle Paragraph */}
//             <p className="text-gray-700 leading-relaxed text-justify">
//               மேற்கண்ட இவ்விழாவை கோவை மாவட்ட மேல்மருவத்தூர் ஆதிபராசக்தி மன்றங்கள், சக்திபீடங்கள், பக்தர்கள் செவ்வாடை தொண்டர்கள் அனைவரும் பல ஆண்டுகளாக பொறுப்பேற்று தொடர்ந்து நடத்தி அன்னையின் அருளைப் பெற்று வருகிறோம். இவ்வாண்டும் அதேபோல சீரும் சிறப்புமாக ஆடிப்பூர விழாவை கொண்டாட நிதி மற்றும் பொருள் உதவிகளை கொடுத்து தொண்டு செய்து அன்னையின் அருள் பெற வேண்டுகிறோம்.
//             </p>

//             {/* Bottom Info Boxes (Kurippu & Arulvaakku) */}
//             <div className="grid sm:grid-cols-2 gap-4 pt-2">
//               <div className="bg-white p-5 rounded-xl border border-yellow-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
//                 <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
//                   <Info className="w-16 h-16 text-yellow-600" />
//                 </div>
//                 <h5 className="font-bold text-[#a7150b] mb-2 border-b border-red-100 pb-2 inline-block">குறிப்பு:</h5>
//                 <p className="text-sm text-gray-700 leading-snug">
//                   அன்னைக்கு அக்னி சட்டி எடுத்தல், கஞ்சி கலயம் எடுத்தல், சுயம்பு அன்னைக்கு பாலாபிஷேகம் செய்தல் போன்ற நிகழ்ச்சியில் கலந்து கொண்டு அன்னையின் அருள் பெற வேண்டுகிறோம்.
//                 </p>
//               </div>

//               <div className="bg-white p-5 rounded-xl border border-yellow-200 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
//                 <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
//                   <Sparkles className="w-16 h-16 text-yellow-600" />
//                 </div>
//                 <h5 className="font-bold text-[#a7150b] mb-2 border-b border-red-100 pb-2 inline-block">அருள்வாக்கு:</h5>
//                 <p className="text-sm text-gray-700 leading-snug">
//                   கஞ்சிக்கு அலையாமல் இருக்க வேண்டுமானால் ஆடிப்பூரத்துக்குக் கஞ்சி எடுத்து வந்து ஊற்று. எல்லா சக்திகளையும் ஈர்க்கும் சக்தி ஆடிப்பூர அங்கப்பிரதட்சணத்திற்கு உண்டு.
//                 </p>
//               </div>
//             </div>

//             {/* Footer / Organizers */}
//             <div className="pt-4 border-t border-gray-200">
//               <p className="text-center font-bold text-[#a7150b]">இவண்,</p>
//               <p className="text-center font-semibold text-gray-800">
//                 மேல்மருவத்தூர் ஆதிபராசக்தி மன்றங்கள், <br/>
//                 சக்தி பீடங்கள் கோவை & திருப்பூர் மாவட்டங்கள்.
//               </p>
//             </div>

//           </motion.div>

//           {/* --- 2. RIGHT SIDE: The Poster Image --- */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="md:col-span-5 relative order-1 md:order-2"
//           >
//             <div className="sticky top-24">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group">
//                 <div className="aspect-[3/4] relative w-full"> 
//                   <Image 
//                     src={noticeImage} 
//                     alt="55th Aadi Pooram Invitation Poster"
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';

export default function EventBanner() {
  const noticeImage = "https://res.cloudinary.com/dvd7o5nph/image/upload/v1781469049/hero-omsakthi_ti7zw5.jpg";

  const schedule = [
    { 
      date: "13.08.2026", 
      tamilDay: "ஆடி வியாழன் 28", 
      title: "கலச விளக்கு பூசை",
      color: "border-l-[#a7150b]"
    },
    { 
      date: "14.08.2026, 15.08.2026", 
      tamilDay: "ஆடி வெள்ளி 29, ஆடி சனி 30", 
      title: "ஆடிப்பூரம் (கஞ்சிவார்ப்பு)",
      color: "border-l-[#ffc107]"
    },
    { 
      date: "14.08.2026, 15.08.2026", 
      tamilDay: "ஆடி வெள்ளி 29, ஆடி சனி 30", 
      title: "பாலபிடேகம்",
      color: "border-l-[#a7150b]"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 bg-orange-50/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Changed to md:grid-cols-2 for a perfect 50/50 equal split, items-center to balance vertically */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* --- 1. LEFT SIDE: Important Content Only --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 md:order-1"
          >
            {/* Header / Title */}
            <div>
              <span className="inline-block px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-widest uppercase mb-4 shadow-sm border border-red-200">
                அழைப்பிதழ்
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 leading-tight">
                55 - ஆம் ஆண்டு <br/>
                <span className="text-[#a7150b]">ஆடிப்பூர பெருவிழா</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                மேல்மருவத்தூர் சுயம்பு அருள்மிகு ஆதிபராசக்தி சித்தர் பீடத்தில் அம்மா அவர்களின் அருளாசியுடன் ஆடிப்பூர பெருவிழா சிறப்பாக நடைபெற உள்ளது.
              </p>
            </div>

            {/* Schedule List */}
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              {schedule.map((item, idx) => (
                <div key={idx} className={`flex items-center gap-4 p-3 bg-orange-50/50 rounded-xl border-l-4 ${item.color} transition-transform hover:translate-x-1 duration-300`}>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Calendar className="w-5 h-5 text-[#a7150b]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{item.title}</h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {item.tamilDay} | {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer / Organizers */}
            <div className="flex items-start gap-3 p-4 bg-red-50/50 rounded-xl border border-red-100">
              <MapPin className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-[#a7150b] text-sm mb-1">இவண்,</p>
                <p className="font-semibold text-gray-800 text-sm leading-snug">
                  மேல்மருவத்தூர் ஆதிபராசக்தி மன்றங்கள், சக்தி பீடங்கள் <br/>
                  கோவை & திருப்பூர் மாவட்டங்கள்.
                </p>
              </div>
            </div>

          </motion.div>

          {/* --- 2. RIGHT SIDE: The Poster Image --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-[#ffc107] group w-full max-w-md mx-auto md:max-w-full">
              <div className="aspect-[3/4] relative w-full bg-orange-100/50"> 
                <Image 
                  src={noticeImage} 
                  alt="55th Aadi Pooram Invitation Poster"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Premium shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}