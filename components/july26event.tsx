// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Calendar, Clock, Youtube, FileText, Printer, MapPin, Sparkles } from 'lucide-react';

// export default function july26event() {
//   return (
//     <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50/30 overflow-hidden border-y-4 border-[#a7150b]">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
//         <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-10 md:mb-14">
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-widest uppercase shadow-sm border border-red-200 mb-4"
//           >
//             <Sparkles className="w-4 h-4" />
//             Special Event Tomorrow
//             <Sparkles className="w-4 h-4" />
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4"
//           >
//             வெட்டவெளி இயற்கை <br />
//             <span className="text-[#a7150b]">உலக மகா கூட்டு வழிபாடு</span>
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto"
//           >
//             "இயற்கையே இறை!" Global Open-Air Nature Maha Pooja
//           </motion.p>
//         </div>

//         <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          
//           {/* LEFT COLUMN: Content & Actions */}
//           <motion.div 
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="md:col-span-7 space-y-8 order-2 md:order-1"
//           >
//             {/* Event Details Card */}
//             <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-orange-100 relative overflow-hidden group">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
//               <div className="grid sm:grid-cols-2 gap-6 mb-8">
//                 <div className="flex items-start gap-4">
//                   <div className="bg-red-50 p-3 rounded-xl">
//                     <Calendar className="w-6 h-6 text-[#a7150b]" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Date</p>
//                     <p className="font-bold text-gray-900 text-lg">July 26, 2026</p>
//                     <p className="text-sm text-[#a7150b] font-semibold">Sunday / ஞாயிறு</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start gap-4">
//                   <div className="bg-orange-50 p-3 rounded-xl">
//                     <Clock className="w-6 h-6 text-orange-600" />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Time</p>
//                     <p className="font-bold text-gray-900 text-lg">9:15 AM - 10:30 AM</p>
//                     <p className="text-sm text-orange-600 font-semibold">IST</p>
//                   </div>
//                 </div>
//               </div>

//               <p className="text-gray-700 leading-relaxed text-justify mb-6 font-medium">
//                 "இயற்கையோடு இணைந்து வாழ வேண்டும்! இயற்கையை வளர்த்தெடுக்கத் தொண்டாற்ற வேண்டும்!" என்ற ஆன்மீக குரு அருள்திரு பங்காரு அடிகளார் அம்மா அருளிய அருள்வாக்குகளுக்கு இணங்க, உலக நன்மைக்காக நடைபெறும் இந்த வெட்டவெளி வழிபாட்டில் அனைவரும் கலந்து கொள்ளுமாறு அன்புடன் அழைக்கிறோம்.
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
//                 <Link 
//                   href="https://youtube.com/live/xeVH-sx2IbM" 
//                   target="_blank"
//                   className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
//                 >
//                   <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
//                   <Youtube className="w-6 h-6" />
//                   Watch Live Telecast
//                 </Link>

//                 <Link 
//                   href="https://drive.google.com/drive/folders/1NEFbkk-rJJxBO9Z3trNr3z82bcy02xoG" 
//                   target="_blank"
//                   className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-xl font-bold shadow-md hover:bg-red-50 hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <FileText className="w-6 h-6" />
//                   View Press Release
//                 </Link>
//               </div>
//             </div>

//             {/* Banner Printing Instructions Box */}
//             <div className="bg-[#fff9e6] border-l-4 border-[#ffc107] p-5 rounded-r-xl shadow-sm">
//               <div className="flex items-start gap-4">
//                 <Printer className="w-8 h-8 text-[#d9a406] flex-shrink-0 mt-1" />
//                 <div>
//                   <h4 className="font-bold text-gray-900 mb-2">Banner Printing Instructions / பேனர் குறிப்பு</h4>
//                   <p className="text-sm text-gray-800 mb-2 font-medium">
//                     Omsakthi dear sakthis! Kindly print the banner with your location name included in it either in <strong>3×4</strong> size or in <strong>6×4</strong> size 🙏
//                   </p>
//                   <p className="text-sm text-[#a7150b] font-medium leading-relaxed">
//                     ஓம்சக்தி! தங்களது பகுதி விவரத்தினை பூர்த்தி செய்து <strong>3×4</strong> அல்லது <strong>6×4</strong> என்ற அளவிலோ பேனரை பிரிண்ட் செய்து கொள்ள வேண்டுகிறோம் அன்பு சக்திகளே! 🙏
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </motion.div>

//           {/* RIGHT COLUMN: Poster Image */}
//           <motion.div 
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="md:col-span-5 relative order-1 md:order-2"
//           >
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white group w-full max-w-md mx-auto md:max-w-full">
//               {/* Note: Update the src below with your hosted Cloudinary URL for "WhatsApp Image 2026-07-25 at 3.00.51 PM.jpeg" */}
//               <div className="aspect-[3/4] relative w-full bg-orange-100/50"> 
//                 <Image 
//                   src="/WhatsApp Image 2026-07-25 at 3.00.51 PM.jpeg" 
//                   alt="Nature Maha Pooja Event Poster"
//                   fill
//                   className="object-cover"
//                   priority
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, Youtube, FileText, Printer, Sparkles, X } from 'lucide-react';

export default function july26event() {
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <>
      <section className="relative py-12 md:py-20 px-4 bg-gradient-to-br from-orange-50 via-white to-red-50/30 overflow-hidden border-y-4 border-[#a7150b]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-widest uppercase shadow-sm border border-red-200 mb-4"
            >
              <Sparkles className="w-4 h-4" />
              Special Event Tomorrow
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] leading-tight mb-4"
            >
              வெட்டவெளி இயற்கை <br />
              <span className="text-[#a7150b]">உலக மகா கூட்டு வழிபாடு</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto"
            >
              "இயற்கையே இறை!" Global Open-Air Nature Maha Pooja
            </motion.p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            
            {/* LEFT COLUMN: Content & Actions */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-7 space-y-8 order-2 md:order-1"
            >
              {/* Event Details Card */}
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-orange-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-50 p-3 rounded-xl">
                      <Calendar className="w-6 h-6 text-[#a7150b]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Date</p>
                      <p className="font-bold text-gray-900 text-lg">July 26, 2026</p>
                      <p className="text-sm text-[#a7150b] font-semibold">Sunday / ஞாயிறு</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-50 p-3 rounded-xl">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Time</p>
                      <p className="font-bold text-gray-900 text-lg">9:15 AM - 10:30 AM</p>
                      <p className="text-sm text-orange-600 font-semibold">IST</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-justify mb-6 font-medium">
                  "இயற்கையோடு இணைந்து வாழ வேண்டும்! இயற்கையை வளர்த்தெடுக்கத் தொண்டாற்ற வேண்டும்!" என்ற ஆன்மீக குரு அருள்திரு பங்காரு அடிகளார் அம்மா அருளிய அருள்வாக்குகளுக்கு இணங்க, உலக நன்மைக்காக நடைபெறும் இந்த வெட்டவெளி வழிபாட்டில் அனைவரும் கலந்து கொள்ளுமாறு அன்புடன் அழைக்கிறோம்.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                  <Link 
                    href="https://youtube.com/live/xeVH-sx2IbM" 
                    target="_blank"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <Youtube className="w-6 h-6" />
                    Watch Live Telecast
                  </Link>

                  {/* Press Release Button - Triggers Popup */}
                  <button 
                    onClick={() => setShowPdfModal(true)}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#a7150b] border-2 border-[#a7150b] rounded-xl font-bold shadow-md hover:bg-red-50 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FileText className="w-6 h-6" />
                    View Press Release
                  </button>
                </div>
              </div>

              {/* Banner Printing Instructions Box with Google Drive Link */}
              <div className="bg-[#fff9e6] border-l-4 border-[#ffc107] p-5 rounded-r-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <Printer className="w-8 h-8 text-[#d9a406] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Banner Printing / பேனர் குறிப்பு</h4>
                    <p className="text-sm text-gray-800 mb-2 font-medium">
                      Omsakthi dear sakthis! Kindly print the banner with your location name included in it either in <strong>3×4</strong> size or in <strong>6×4</strong> size 🙏
                    </p>
                    <p className="text-sm text-[#a7150b] font-medium leading-relaxed mb-4">
                      ஓம்சக்தி! தங்களது பகுதி விவரத்தினை பூர்த்தி செய்து <strong>3×4</strong> அல்லது <strong>6×4</strong> என்ற அளவிலோ பேனரை பிரிண்ட் செய்து கொள்ள வேண்டுகிறோம் அன்பு சக்திகளே! 🙏
                    </p>
                    
                    {/* Google Drive Link for Banner content */}
                    <Link 
                      href="https://drive.google.com/drive/folders/1NEFbkk-rJJxBO9Z3trNr3z82bcy02xoG" 
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 bg-[#d9a406] text-white rounded-lg font-bold shadow-sm hover:bg-yellow-600 hover:-translate-y-0.5 transition-all text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      Download Banner / Image Files
                    </Link>
                  </div>
                </div>
              </div>

            </motion.div>

            {/* RIGHT COLUMN: Poster Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative order-1 md:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white group w-full max-w-md mx-auto md:max-w-full">
                <div className="aspect-[3/4] relative w-full bg-orange-100/50"> 
                  <Image 
                    src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1784984681/WhatsApp_Image_2026-07-25_at_3.00.51_PM_pnw4ap.jpg" 
                    alt="Nature Maha Pooja Event Poster"
                    fill
                    className="object-fill"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- PRESS RELEASE PDF POPUP MODAL --- */}
      <AnimatePresence>
        {showPdfModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 md:p-10">
            {/* Dark Overlay Background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPdfModal(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[85vh] md:h-[90vh] z-10"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#a7150b] text-white">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <h3 className="text-lg font-bold">Press Release / பத்திரிக்கை செய்தி</h3>
                </div>
                <button 
                  onClick={() => setShowPdfModal(false)}
                  className="p-2 hover:bg-red-800 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* PDF Embed container (Scrollable) */}
              <div className="flex-1 w-full h-full bg-gray-100 p-2 md:p-4 overflow-y-auto">
                <iframe 
                  src="/july-press.pdf" 
                  className="w-full h-full min-h-[60vh] rounded-xl border border-gray-300 shadow-inner bg-white"
                  title="Event Press Release PDF"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}