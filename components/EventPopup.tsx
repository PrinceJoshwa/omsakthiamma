// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { X, Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
// // // import Image from 'next/image';

// // // export default function EventPopup() {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   // Trigger popup after 3 seconds
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       setIsOpen(true);
// // //     }, 3000);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   if (!isOpen) return null;

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-0">
          
// // //           {/* Backdrop with blur */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsOpen(false)}
// // //             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
// // //           />

// // //           {/* Popup Card */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.9, y: 20 }}
// // //             animate={{ opacity: 1, scale: 1, y: 0 }}
// // //             exit={{ opacity: 0, scale: 0.9, y: 20 }}
// // //             transition={{ type: "spring", duration: 0.5 }}
// // //             className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2"
// // //           >
// // //             {/* Left Side: Image / Visual */}
// // //             <div className="relative h-48 md:h-auto bg-[#a7150b]">
// // //               <Image
// // //                 src="/om4.jpeg" // Using your existing image
// // //                 alt="Thaipoosa Jyothi"
// // //                 fill
// // //                 className="object-cover opacity-80 mix-blend-overlay"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
// // //                 <span className="px-3 py-1 bg-[#ffc107] text-[#a7150b] text-xs font-bold uppercase tracking-wider rounded-full w-fit mb-2">
// // //                   Upcoming Major Festival
// // //                 </span>
// // //                 <h3 className="text-white text-2xl font-bold leading-tight">
// // //                   Thaipoosa Jyothi Peruvizha
// // //                 </h3>
// // //                 <p className="text-white/80 text-sm mt-1">
// // //                   Siddhar Peedam, Melmaruvathur
// // //                 </p>
// // //               </div>
// // //             </div>

// // //             {/* Right Side: Content */}
// // //             <div className="p-6 md:p-8 relative bg-white">
// // //               {/* Close Button */}
// // //               <button
// // //                 onClick={() => setIsOpen(false)}
// // //                 className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
// // //               >
// // //                 <X className="w-5 h-5 text-gray-500" />
// // //               </button>

// // //               <div className="mt-2 space-y-6">
// // //                 <div className="space-y-4">
// // //                   <div className="flex items-start gap-4">
// // //                     <div className="p-3 bg-orange-50 rounded-lg text-[#a7150b]">
// // //                       <Calendar className="w-6 h-6" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-sm text-gray-500 font-medium uppercase">Date</p>
// // //                       <p className="text-lg font-bold text-gray-900">January 31, 2026</p>
// // //                       <p className="text-sm text-gray-500">Saturday</p>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flex items-start gap-4">
// // //                     <div className="p-3 bg-orange-50 rounded-lg text-[#a7150b]">
// // //                       <MapPin className="w-6 h-6" />
// // //                     </div>
// // //                     <div>
// // //                       <p className="text-sm text-gray-500 font-medium uppercase">Location</p>
// // //                       <p className="text-base font-bold text-gray-900">
// // //                         Adhiparasakthi Siddhar Peedam
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Description from PDF context */}
// // //                 <p className="text-gray-600 text-sm leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-[#ffc107]">
// // //                   Join us for the grand <strong>Thaipoosa Jyothi Peruvizha</strong> (தைப்பூசஜோதி பெருவிழா). Experience the divine light and seek Amma's blessings on this auspicious day.
// // //                 </p>

// // //                 {/* Action Buttons */}
// // //                 <div className="flex gap-3 pt-2">
// // //                   <button 
// // //                      onClick={() => {
// // //                        document.getElementById('temple-calendar')?.scrollIntoView({ behavior: 'smooth' });
// // //                        setIsOpen(false);
// // //                      }}
// // //                      className="flex-1 bg-[#a7150b] text-white py-3 px-4 rounded-xl font-bold hover:bg-[#8a0d08] transition-colors flex items-center justify-center gap-2 group"
// // //                   >
// // //                     View Schedule
// // //                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// // //                   </button>
// // //                   <button
// // //                     onClick={() => setIsOpen(false)}
// // //                     className="px-6 py-3 border border-gray-200 text-gray-600 font-bold rounded-xl hover:bg-gray-50 transition-colors"
// // //                   >
// // //                     Close
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // }

// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, Calendar, MapPin, ArrowRight, Sparkles } from 'lucide-react';
// // import Image from 'next/image';

// // export default function EventPopup() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [daysToGo, setDaysToGo] = useState(0);

// //   // Event Data from your PDF (Page 1)
// //   const eventDetails = {
// //     date: "31.01.2026",
// //     day: "Saturday",
// //     titleEnglish: "Thaipoosa Jyothi Peruvizha",
// //     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "/om4.jpeg" // Using your existing image
// //   };

// //   useEffect(() => {
// //     // Calculate days remaining
// //     // Note: Using standard date format for calculation (YYYY-MM-DD)
// //     const eventDate = new Date('2026-01-31');
// //     const today = new Date();
// //     const diffTime = Math.abs(eventDate.getTime() - today.getTime());
// //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// //     setDaysToGo(diffDays);

// //     // Show popup after 2 seconds
// //     const timer = setTimeout(() => {
// //       setIsOpen(true);
// //     }, 2000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (!isOpen) return null;

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          
// //           {/* Dark Backdrop */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsOpen(false)}
// //             className="absolute inset-0 bg-black/70 backdrop-blur-md"
// //           />

// //           {/* Popup Card */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //             animate={{ opacity: 1, scale: 1, y: 0 }}
// //             exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //             transition={{ type: "spring", bounce: 0.3 }}
// //             className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
// //           >
// //             {/* Close Button (Absolute) */}
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90"
// //             >
// //               <X className="w-5 h-5 text-gray-600" />
// //             </button>

// //             {/* Left Side: Image Area */}
// //             <div className="relative w-full md:w-2/5 h-48 md:h-auto bg-red-900">
// //               <Image
// //                 src={eventDetails.image}
// //                 alt="Event Banner"
// //                 fill
// //                 className="object-cover opacity-90"
// //               />
// //               {/* Gradient Overlay */}
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
// //               <div className="absolute bottom-4 left-4 text-white">
// //                 <div className="flex items-center gap-2 mb-2">
// //                   <Sparkles className="w-4 h-4 text-[#ffc107]" />
// //                   <span className="text-xs font-bold uppercase tracking-wider text-[#ffc107]">
// //                     Upcoming Festival
// //                   </span>
// //                 </div>
// //                 <div className="text-2xl font-bold leading-none">
// //                   {daysToGo > 0 ? `${daysToGo} Days` : 'Coming Soon'}
// //                 </div>
// //                 <div className="text-xs text-white/80">to go</div>
// //               </div>
// //             </div>

// //             {/* Right Side: Details */}
// //             <div className="w-full md:w-3/5 p-6 md:p-8 bg-white flex flex-col justify-center">
              
// //               <h2 className="text-2xl md:text-3xl font-bold text-[#a7150b] mb-1 leading-tight">
// //                 {eventDetails.titleEnglish}
// //               </h2>
// //               <h3 className="text-lg md:text-xl font-bold text-gray-600 mb-6 font-tamil">
// //                 {eventDetails.titleTamil}
// //               </h3>

// //               <div className="space-y-4 mb-8">
// //                 {/* Date Row */}
// //                 <div className="flex items-start gap-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
// //                   <div className="bg-white p-2 rounded-md shadow-sm text-[#a7150b]">
// //                     <Calendar className="w-5 h-5" />
// //                   </div>
// //                   <div>
// //                     <p className="text-xs text-gray-500 uppercase font-bold">Date</p>
// //                     <p className="font-bold text-gray-900">{eventDetails.date}</p>
// //                     <p className="text-sm text-gray-600">{eventDetails.day}</p>
// //                   </div>
// //                 </div>

// //                 {/* Location Row */}
// //                 <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
// //                   <div className="bg-white p-2 rounded-md shadow-sm text-gray-600">
// //                     <MapPin className="w-5 h-5" />
// //                   </div>
// //                   <div>
// //                     <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
// //                     <p className="font-medium text-gray-900 text-sm">
// //                       {eventDetails.location}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* CTA Button */}
// //               <button
// //                 onClick={() => {
// //                    document.getElementById('temple-calendar')?.scrollIntoView({ behavior: 'smooth' });
// //                    setIsOpen(false);
// //                 }}
// //                 className="w-full py-3.5 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
// //               >
// //                 View Full Calendar
// //                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
// //               </button>

// //             </div>
// //           </motion.div>
// //         </div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Calendar, MapPin, Download, Sparkles } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function EventPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [daysToGo, setDaysToGo] = useState(0);

//   // Event Data from your PDF (Page 1)
//   const eventDetails = {
//     date: "31.01.2026",
//     day: "Saturday",
//     titleEnglish: "Thaipoosa Jyothi Peruvizha",
//     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "/om4.jpeg" 
//   };

//   useEffect(() => {
//     const eventDate = new Date('2026-01-31');
//     const today = new Date();
//     const diffTime = Math.abs(eventDate.getTime() - today.getTime());
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     setDaysToGo(diffDays);

//     // Show popup after 2 seconds
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          
//           {/* Dark Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="absolute inset-0 bg-black/70 backdrop-blur-md"
//           />

//           {/* Popup Card */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", bounce: 0.3 }}
//             className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90"
//             >
//               <X className="w-5 h-5 text-gray-600" />
//             </button>

//             {/* Left Side: Image Area */}
//             <div className="relative w-full md:w-2/5 h-48 md:h-auto bg-red-900">
//               <Image
//                 src={eventDetails.image}
//                 alt="Event Banner"
//                 fill
//                 className="object-cover opacity-90"
//               />
//               {/* Gradient Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
//               <div className="absolute bottom-4 left-4 text-white">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Sparkles className="w-4 h-4 text-[#ffc107]" />
//                   <span className="text-xs font-bold uppercase tracking-wider text-[#ffc107]">
//                     Upcoming Festival
//                   </span>
//                 </div>
//                 <div className="text-2xl font-bold leading-none">
//                   {daysToGo > 0 ? `${daysToGo} Days` : 'Coming Soon'}
//                 </div>
//                 <div className="text-xs text-white/80">to go</div>
//               </div>
//             </div>

//             {/* Right Side: Details */}
//             <div className="w-full md:w-3/5 p-6 md:p-8 bg-white flex flex-col justify-center">
              
//               <h2 className="text-2xl md:text-3xl font-bold text-[#a7150b] mb-1 leading-tight">
//                 {eventDetails.titleEnglish}
//               </h2>
//               <h3 className="text-lg md:text-xl font-bold text-gray-600 mb-6 font-tamil">
//                 {eventDetails.titleTamil}
//               </h3>

//               <div className="space-y-4 mb-8">
//                 {/* Date Row */}
//                 <div className="flex items-start gap-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
//                   <div className="bg-white p-2 rounded-md shadow-sm text-[#a7150b]">
//                     <Calendar className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500 uppercase font-bold">Date</p>
//                     <p className="font-bold text-gray-900">{eventDetails.date}</p>
//                     <p className="text-sm text-gray-600">{eventDetails.day}</p>
//                   </div>
//                 </div>

//                 {/* Location Row */}
//                 <div className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg border border-gray-100">
//                   <div className="bg-white p-2 rounded-md shadow-sm text-gray-600">
//                     <MapPin className="w-5 h-5" />
//                   </div>
//                   <div>
//                     <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
//                     <p className="font-medium text-gray-900 text-sm">
//                       {eventDetails.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Download / View All Events Button */}
//               {/* IMPORTANT: Ensure your PDF is named '2026-schedule.pdf' and placed in the 'public' folder */}
//               <a
//                 href="/event-pdf.pdf"
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="w-full py-3.5 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
//               >
//                 Download All Events
//                 <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
//               </a>

//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Download, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [daysToGo, setDaysToGo] = useState(0);

  // Main Highlight Event
  const mainEvent = {
    date: "31.01.2026",
    day: "Saturday",
    titleEnglish: "Thaipoosa Jyothi Peruvizha",
    titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "/om4.jpeg"
  };

  // Short list of upcoming events
  const upcomingEventsList = [
    { date: "17.02.2026", title: "Velvi Amavasai", tamil: "வேள்வி அமாவாசை" },
    { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
    { date: "18.03.2026", title: "Velvi Amavasai", tamil: "வேள்வி அமாவாசை" },
    { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
  ];

  useEffect(() => {
    const eventDate = new Date('2026-01-31');
    const today = new Date();
    const diffTime = Math.abs(eventDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDaysToGo(diffDays);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6 overflow-y-auto">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Left Side: Main Event Image */}
            <div className="relative w-full md:w-2/5 min-h-[200px] md:min-h-full bg-red-900">
              <Image
                src={mainEvent.image}
                alt="Event Banner"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Next Major Event
                </div>
                <h2 className="text-2xl font-bold leading-tight mb-1">{mainEvent.titleEnglish}</h2>
                <p className="text-sm text-white/80 font-tamil mb-4">{mainEvent.titleTamil}</p>
                
                <div className="flex items-center gap-3 text-sm bg-black/30 p-3 rounded-lg backdrop-blur-sm border border-white/10">
                  <div className="text-center pr-3 border-r border-white/20">
                    <div className="text-xl font-bold">{daysToGo}</div>
                    <div className="text-[10px] uppercase opacity-70">Days Left</div>
                  </div>
                  <div>
                    <div className="font-bold text-[#ffc107]">{mainEvent.date}</div>
                    <div className="text-xs opacity-80">{mainEvent.day}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Details */}
            <div className="w-full md:w-3/5 flex flex-col bg-white h-full overflow-y-auto">
              <div className="p-6 md:p-8 flex flex-col h-full">
                
                {/* Location */}
                <div className="flex items-start gap-3 mb-6 pb-6 border-b border-gray-100">
                  <MapPin className="w-5 h-5 text-[#a7150b] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold mb-1">Location</p>
                    <p className="text-sm font-medium text-gray-900">{mainEvent.location}</p>
                  </div>
                </div>

                {/* Upcoming List */}
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    Other Upcoming Events
                  </h3>
                  
                  <div className="space-y-2">
                    {upcomingEventsList.map((evt, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100 group">
                        <div className="w-12 text-center shrink-0">
                          <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
                          <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-bold text-gray-800 group-hover:text-[#a7150b] transition-colors">{evt.title}</div>
                          <div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons Container */}
                <div className="mt-auto pt-4 border-t border-gray-100 space-y-3">
                  
                  {/* 1. Link to Calendar Page (NEW) */}
                  <Link 
                    href="/all-events"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 bg-white border-2 border-[#a7150b] text-[#a7150b] rounded-xl font-bold hover:bg-orange-50 transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    View Full Events
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* 2. Download PDF Button */}
                  <a
                    href="/event-pdf.pdf"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    Download 2026 Schedule PDF
                    <Download className="w-4 h-4" />
                  </a>
                  
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}