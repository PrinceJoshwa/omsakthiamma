// 'use client';

// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Quote, Sparkles, RefreshCw } from 'lucide-react';
// import { getDailyMessage, ammaMessages } from '@/lib/messages'; // Adjust import path

// export default function DailyMessageSection() {
//   const [message, setMessage] = useState("");
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setMessage(getDailyMessage());
//     setIsClient(true);
//   }, []);

//   // Optional: Function to manually refresh for a random message
//   const handleRefresh = () => {
//     const randomIndex = Math.floor(Math.random() * ammaMessages.length);
//     setMessage(ammaMessages[randomIndex]);
//   };

//   if (!isClient) return null; // Prevent hydration mismatch

//   return (
//     <section className="py-16 px-4 bg-gradient-to-b from-white to-red-50">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-10"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#a7150b]/10 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
//             <Sparkles className="w-3 h-3" />
//             Amma's Divine Voice
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
//             Message of the Day
//           </h2>
//         </motion.div>

//         {/* Message Card */}
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-red-100 text-center"
//         >
//           {/* Decorative Quote Icon */}
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a7150b] p-4 rounded-full shadow-lg text-white">
//             <Quote className="w-8 h-8 fill-current" />
//           </div>

//           {/* The Message */}
//           <div className="mt-6 mb-8">
//             <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed font-serif italic">
//               "{message}"
//             </p>
//           </div>

//           {/* Footer / Signature */}
//           <div className="flex flex-col items-center gap-2">
//             <div className="w-16 h-1 bg-[#a7150b]/20 rounded-full mb-2"></div>
//             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
//               — Adhiparasakthi
//             </p>
//           </div>

//           {/* Refresh Button (Optional) */}
//           <button 
//             onClick={handleRefresh}
//             className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#a7150b] hover:bg-red-50 rounded-full transition-colors"
//             title="Get another message"
//           >
//             <RefreshCw className="w-5 h-5" />
//           </button>

//         </motion.div>

//       </div>
//     </section>
//   );
// }

'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, RefreshCw } from 'lucide-react';
import { getDailyMessage, ammaMessages } from '@/lib/messages'; 

export default function DailyMessageSection() {
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const [key, setKey] = useState(0); // Used to trigger re-animation on refresh

  useEffect(() => {
    setMessage(getDailyMessage());
    setIsClient(true);
  }, []);

  const handleRefresh = () => {
    const randomIndex = Math.floor(Math.random() * ammaMessages.length);
    setMessage(ammaMessages[randomIndex]);
    setKey(prev => prev + 1); // Trigger animation re-render
  };

  if (!isClient) return null;

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      
      {/* --- Background Elements --- */}
      {/* Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 -z-20"></div>
      
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] -z-10"></div>
      
      {/* Floating Orbs (Decorative) */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>


      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur-sm border border-red-100 text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
            <Sparkles className="w-3 h-3" />
            Divine Guidance
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif">
            Amma's Message
          </h2>
        </motion.div>

        {/* Message Card */}
        <div className="relative">
          
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden"
          >
            {/* Top Red Accent Bar */}
            <div className="h-2 w-full bg-gradient-to-r from-orange-500 via-[#a7150b] to-orange-500"></div>

            <div className="p-8 md:p-14 text-center">
              
              {/* Quote Icon */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gradient-to-br from-[#a7150b] to-red-600 p-4 rounded-full shadow-lg shadow-red-200 text-white">
                  <Quote className="w-8 h-8 fill-current" />
                </div>
              </div>

              {/* Text Animation Container */}
              <AnimatePresence mode='wait'>
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xl md:text-3xl text-gray-800 font-medium leading-relaxed font-serif text-shadow-sm">
                    {message}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Decorative Separator */}
              <div className="flex items-center justify-center gap-4 mt-10 mb-2 opacity-50">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#a7150b]"></div>
                <div className="w-2 h-2 rounded-full bg-[#a7150b]"></div>
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#a7150b]"></div>
              </div>

              <p className="text-sm font-bold text-[#a7150b] uppercase tracking-widest mt-4">
                Adhiparasakthi
              </p>

            </div>

            {/* Refresh Button (Floating) */}
            <motion.button 
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleRefresh}
              className="absolute top-6 right-6 p-3 text-gray-400 hover:text-[#a7150b] hover:bg-red-50 rounded-full transition-colors focus:outline-none"
              title="New Message"
            >
              <RefreshCw className="w-6 h-6" />
            </motion.button>

          </motion.div>

          {/* Background Card Decoration (Layered Look) */}
          <div className="absolute -inset-4 bg-white/40 rounded-[2.5rem] -z-10 blur-xl"></div>
        
        </div>

      </div>
    </section>
  );
}