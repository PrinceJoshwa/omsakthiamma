// 'use client';

// import React, { useState } from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Phone, Mail, X } from 'lucide-react';
// import Image from 'next/image';

// export default function CircularPage() {
  
//   // --- NEW: State for Popup Visibility ---
//   const [showPopup, setShowPopup] = useState(true);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   return (
//     <PageTemplate 
//       title="Official Circular" 
//       subtitle="தைப்பூச சக்தி மாலை இருமுடி விழா 2025 - 2026"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       hideFooter={true}
//     >
//       <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans flex justify-center relative">

//         {/* --- EXISTING CONTENT (UNCHANGED) --- */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="bg-white max-w-[210mm] w-full shadow-2xl print:shadow-none min-h-[297mm] relative flex flex-col"
//         >

//           {/* HEADER */}
//           <div className="p-8 pb-4 text-center space-y-3">

//             {/* Top Slogans */}
//             <div className="flex justify-between text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4 font-tamil">
//               <span>குருவடி சரணம்!</span>
//               <span>ஓம் சக்தி</span>
//               <span>ஒரே தாய்!</span>
//               <span>திருவடி சரணம்!</span>
//               <span>ஒரே குலம்!</span>
//             </div>

//             {/* Logo + Headers */}
//             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
//               <div className="flex-1 space-y-2 text-center">
//                 <h1 className="text-xl md:text-2xl font-extrabold text-[#a7150b] font-tamil leading-tight">
//                   மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்கம்
//                 </h1>

//                 <p className="text-gray-800 font-semibold font-tamil text-sm">
//                   மேல்மருவத்தூர் 603 319. <br/>
//                   தமிழ்நாடு, இந்தியா.
//                 </p>

//                 <div className="text-[#a7150b] font-bold text-sm font-tamil mt-2">
//                   நிறுவனத்தலைவர்: ஆன்மிககுரு அருள்திரு பங்காரு அடிகளார்
//                 </div>

//                 <div className="text-[#a7150b] font-bold text-sm font-tamil">
//                   தலைவர்: V. திருமதி லட்சுமி
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* CONTACT BAR */}
//           <div className="border-t-2 border-b-2 border-[#a7150b] py-2 px-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-800 font-tamil bg-yellow-50/50">
//             <div className="flex items-center gap-4">
//               <span className="flex items-center gap-2">
//                 <Phone className="w-4 h-4 text-[#a7150b]" /> 044-27529096
//               </span>
//               <span className="hidden md:inline">|</span>
//               <span className="flex items-center gap-2">
//                 <Mail className="w-4 h-4 text-[#a7150b]" /> masm992007@gmail.com
//               </span>
//             </div>
//             <div>தேதி : 27.11.2025</div>
//           </div>

//           {/* BODY */}
//           <div className="p-10 md:p-12 space-y-8 flex-grow">
//             <div className="text-center space-y-2">
//               <h2 className="text-xl font-bold text-black font-tamil underline decoration-2 underline-offset-4">
//                 தைப்பூச சக்தி மாலை இருமுடி விழா 2025 - 2026
//               </h2>
//               <h3 className="text-lg font-bold text-black font-tamil">
//                 சுற்றறிக்கை
//               </h3>
//             </div>

//             <div className="text-lg font-bold text-black font-tamil">
//               மாவட்ட தலைவர்கள், துணைத் தலைவர்கள் கவனத்திற்கு,
//             </div>

//             <div className="text-justify text-lg leading-[2.5rem] font-medium text-gray-900 font-tamil">
//               <p>
//                 இருமுடி விழா <strong>(15.12.2025 முதல் 31.01.2026 வரை)</strong> மற்றும் தைப்பூச விழா 
//                 <strong> (01.02.2026)</strong> அன்று வெகு விமரிசையாக கொண்டாடப்படவுள்ளது. 
//                 ஆகையால் இயக்கத்தின் சட்டதிட்டங்களுக்கு உட்பட்டு இருமுடி செலுத்தும் விதிமுறைகள் 
//                 மற்றும் வழிமுறைகள் இத்துடன் இணைக்கப்பட்டுள்ளது. இதனை மாவட்ட 
//                 தலைவர்கள், துணைத் தலைவர்கள், மன்ற தலைவர்கள், இருமுடி செலுத்த வரும் 
//                 சக்திகளை அழைத்துவரும் குழு பொறுப்பாளர்கள் அவசியம் சக்திமாலை அணிந்து 
//                 வரும் பக்தர்களிடம் கூறி முழுமையாக கடைபிடிக்க செய்யுமாறு 
//                 அறிவுறுத்தப்படுகிறது.
//               </p>
//             </div>
//           </div>

//           {/* SIGNATURE SECTION */}
//           <div className="p-12 pt-0 flex justify-end">
//             <div className="text-right space-y-1 font-bold text-black font-tamil text-lg">
              
//               {/* Signature Image */}
//               <div className="h-20 w-48 ml-auto mb-2 relative">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939083/Screenshot_2025-12-04_161454_hxyemn.png"
//                   alt="Signature"
//                   fill
//                   className="object-contain"
//                 />
//               </div>

//               <p>துணைத்தலைவர் - ACMEC TRUST</p>
//               <p>துணைத்தலைவர் - MASM</p>
//             </div>
//           </div>

//           <div className="h-2 bg-[#a7150b] w-full mt-auto"></div>
//         </motion.div>

//         {/* --- NEW: POPUP MODAL OVERLAY --- */}
//         <AnimatePresence>
//           {showPopup && (
//             <motion.div 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
//             >
//               {/* Modal Container */}
//               <motion.div 
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="relative bg-white p-2 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
//               >
//                 {/* Close Button */}
//                 <button 
//                   onClick={() => setShowPopup(false)}
//                   className="absolute -top-4 -right-4 z-10 bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>

//                 {/* Image Container */}
//                 <div className="relative w-full h-full min-h-[300px] md:min-h-[600px] rounded-lg overflow-hidden">
//                    {/* REPLACE src BELOW WITH YOUR IMAGE PATH */}
//                    <Image
//                      src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766557076/WhatsApp_Image_2025-12-22_at_5.06.43_PM_sxg4bi.jpg"
//                      alt="Announcement"
//                      fill
//                      className="object-contain"
//                      priority
//                    />
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//       </div>
//     </PageTemplate>
//   );
// }

'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CircularPage() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <PageTemplate 
      title="Official Circular" 
      subtitle="View Circular"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}
    >
      <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans flex justify-center items-start">

        {/* --- PAPER LAYOUT CONTAINER --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          // Maintains A4 dimensions (210mm x 297mm) and white paper styling
          className="bg-white max-w-[210mm] w-full aspect-[210/297] shadow-2xl print:shadow-none relative overflow-hidden rounded-sm"
        >
          {/* --- FULL IMAGE --- */}
          {/* Make sure '02.02.2026.jpeg' is in your public folder */}
          <Image
            src="/notices/02.02.2026.jpeg"
            alt="Official Circular"
            fill
            className="object-cover" // Ensures the image fills the paper edge-to-edge
            priority
          />

        </motion.div>

      </div>
    </PageTemplate>
  );
}