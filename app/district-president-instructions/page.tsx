// // 'use client';

// // import React from 'react';
// // import PageTemplate from '@/components/PageTemplate'; 
// // import { FileText, Calendar, Mail, Phone } from 'lucide-react';

// // export default function DistrictInstructionsPage() {
// //   return (
// //     <PageTemplate 
// //       title="District President Instructions" 
// //       subtitle="Official Circular / அதிகாரப்பூர்வ சுற்றறிக்கை"
// //       noTopPadding={true}
// //       noContentTopPadding={true}
// //       hideFooter={true}
// //     >
// //       <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
// //         <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-none md:rounded-lg overflow-hidden border border-gray-200 print:shadow-none">
          
// //           {/* --- LETTERHEAD SECTION --- */}
// //           <div className="border-b-4 border-[#a7150b] p-6 md:p-10 text-center relative bg-white">
            
// //             {/* Header Text */}
// //             <div className="space-y-2 mb-6">
// //               <p className="text-xs text-gray-500 flex justify-between px-4 font-tamil">
// //                 <span>குருவடி சரணம்!</span>
// //                 <span className="font-bold text-[#a7150b]">ஓம் சக்தி</span>
// //                 <span>ஒரே தாய்! ஒரே குலம்!</span>
// //               </p>
              
// //               <h1 className="text-2xl md:text-3xl font-bold text-[#a7150b] font-tamil leading-snug">
// //                 மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்கம்
// //               </h1>
// //               <p className="text-gray-700 font-medium font-tamil">
// //                 மேல்மருவத்தூர் - 603 319.<br/>
// //                 தமிழ்நாடு, இந்தியா.
// //               </p>
// //             </div>

// //             {/* Founder Box */}
// //             <div className="bg-yellow-100 border border-yellow-300 rounded-full px-4 py-2 inline-block mb-4">
// //               <p className="text-[#a7150b] font-bold text-sm md:text-base font-tamil">
// //                 நிறுவனத்தலைவர்: ஆன்மிககுரு அருள்திரு பங்காரு அடிகளார்
// //               </p>
// //             </div>

// //             {/* Contact Details Grid */}
// //             <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-2 md:gap-0 mt-4 border-t border-gray-100 pt-4">
// //               <div className="border border-green-600 rounded-full px-4 py-1 text-green-700 font-bold font-tamil">
// //                 தலைவர்: V. திருமதி லட்சுமி
// //               </div>
// //               <div className="text-right space-y-1">
// //                 <p className="flex items-center gap-2 justify-end">
// //                   <Phone className="w-4 h-4" /> 044 - 27529096
// //                 </p>
// //                 <p className="flex items-center gap-2 justify-end">
// //                   <Mail className="w-4 h-4" /> masm992007@gmail.com
// //                 </p>
// //                 <p className="font-bold text-gray-800 pt-1">தேதி: 27.11.2025</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* --- BODY SECTION --- */}
// //           <div className="p-8 md:p-12 space-y-8">
            
// //             {/* Subject */}
// //             <div className="text-center space-y-2">
// //               <h2 className="text-xl md:text-2xl font-bold text-gray-900 font-tamil underline decoration-[#a7150b]/30 underline-offset-8">
// //                 தைப்பூச சக்தி மாலை இருமுடி விழா 2025 – 2026
// //               </h2>
// //               <h3 className="text-lg font-bold text-gray-700 font-tamil">
// //                 சுற்றறிக்கை
// //               </h3>
// //             </div>

// //             {/* Salutation */}
// //             <div>
// //               <p className="text-lg font-bold text-gray-800 font-tamil mb-4">
// //                 மாவட்ட தலைவர்கள், துணைத் தலைவர்கள் கவனத்திற்கு,
// //               </p>
// //             </div>

// //             {/* Main Content Paragraph (Transcribed from Image) */}
// //             <div className="prose max-w-none text-gray-700 leading-loose text-lg font-tamil text-justify">
// //               <p>
// //                 இருமுடி விழா <strong>(15.12.2025 முதல் 31.01.2026 வரை)</strong> மற்றும் தைப்பூச விழா <strong>(01.02.2026)</strong> அன்று வெகு விமரிசையாக கொண்டாடப்படவுள்ளது.
// //               </p>
// //               <p className="mt-4">
// //                 ஆகையால் இயக்கத்தின் சட்டதிட்டங்களுக்கு உட்பட்டு இருமுடி செலுத்தும் விதிமுறைகள் மற்றும் வழிமுறைகள் இத்துடன் இணைக்கப்பட்டுள்ளது. இதனை மாவட்ட தலைவர்கள், துணைத் தலைவர்கள், மன்ற தலைவர்கள், இருமுடி செலுத்த வரும் சக்திகளை அழைத்து வரும் குழு பொறுப்பாளர்கள் அவசியம் சக்திமாலை அணிந்து வரும் பக்தர்களிடம் கூறி முழுமையாக கடைபிடிக்க செய்யுமாறு அறிவுறுத்தப்படுகிறது.
// //               </p>
// //             </div>

// //             {/* English Translation (Optional Help) */}
// //             <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100 text-sm text-blue-800">
// //               <h4 className="font-bold mb-2 flex items-center gap-2">
// //                 <FileText className="w-4 h-4" /> English Summary
// //               </h4>
// //               <p>
// //                 The Irumudi Festival (Dec 15, 2025 – Jan 31, 2026) and Thaipoosam (Feb 1, 2026) are to be celebrated grandly. District Presidents and group leaders are requested to strictly ensure that all devotees wearing Sakthi Malai follow the attached rules and regulations of the movement.
// //               </p>
// //             </div>

// //             {/* Signature Area */}
// //             {/* <div className="mt-16 flex justify-end">
// //               <div className="text-right space-y-1">
// //                 <div className="h-12 w-32 ml-auto mb-2 bg-[url('/signature-placeholder.png')] bg-contain bg-no-repeat bg-right opacity-50"></div> 
// //                 <p className="font-bold text-gray-800 font-tamil">துணைத்தலைவர் – ACMEC TRUST</p>
// //                 <p className="font-bold text-gray-800 font-tamil">துணைத்தலைவர் – MASM</p>
// //               </div>
// //             </div> */}

// //           </div>

// //         </div>
// //       </div>
// //     </PageTemplate>
// //   );
// // }

// // 'use client';

// // import React from 'react';
// // import PageTemplate from '@/components/PageTemplate';
// // import { motion } from 'framer-motion';
// // import { 
// //   FileText, 
// //   UserCheck, 
// //   CalendarDays, 
// //   Mail, 
// //   Phone, 
// //   Building2, 
// //   AlertCircle 
// // } from 'lucide-react';

// // export default function DistrictInstructionsPage() {
  
// //   // Animation Variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     show: { opacity: 1, y: 0 }
// //   };

// //   return (
// //     <PageTemplate 
// //       title="District President Instructions" 
// //       subtitle="Official Circular / அதிகாரப்பூர்வ சுற்றறிக்கை"
// //       noTopPadding={true}
// //       noContentTopPadding={true}
// //       hideFooter={true}
// //     >
// //       <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
// //         <motion.div 
// //           variants={containerVariants}
// //           initial="hidden"
// //           animate="show"
// //           className="max-w-5xl mx-auto space-y-8"
// //         >

// //           {/* --- 1. OFFICIAL LETTERHEAD CARD --- */}
// //           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative">
// //             <div className="bg-[#a7150b] h-2 w-full"></div>
// //             <div className="p-8 relative">
// //               {/* Background Watermark */}
// //               <div className="absolute top-0 right-0 p-10 opacity-5">
// //                 <Building2 className="w-40 h-40 text-[#a7150b]" />
// //               </div>

// //               <div className="text-center space-y-4 relative z-10">
// //                 <p className="text-xs text-gray-500 font-bold tracking-widest uppercase flex justify-center gap-8">
// //                   <span>குருவடி சரணம்!</span>
// //                   <span className="text-[#a7150b]">ஓம் சக்தி</span>
// //                   <span>ஒரே தாய்! ஒரே குலம்!</span>
// //                 </p>
                
// //                 <h1 className="text-2xl md:text-4xl font-bold text-[#a7150b] font-tamil leading-tight">
// //                   மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்கம்
// //                 </h1>
                
// //                 <p className="text-gray-600 font-medium font-tamil text-lg">
// //                   மேல்மருவத்தூர் - 603 319. தமிழ்நாடு, இந்தியா.
// //                 </p>

// //                 <div className="inline-block bg-yellow-50 border border-yellow-200 rounded-full px-6 py-2 mt-4">
// //                   <p className="text-[#a7150b] font-bold text-sm md:text-base font-tamil">
// //                     நிறுவனத்தலைவர்: ஆன்மிககுரு அருள்திரு பங்காரு அடிகளார்
// //                   </p>
// //                 </div>
// //               </div>

// //               {/* Contact Grid */}
// //               <div className="grid md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-100 text-sm text-gray-600">
// //                 <div className="flex flex-col gap-2">
// //                   <div className="flex items-center gap-2">
// //                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-xs">தலைவர்</span>
// //                     <span className="font-bold font-tamil text-gray-800">V. திருமதி லட்சுமி</span>
// //                   </div>
// //                 </div>
// //                 <div className="flex flex-col gap-2 md:text-right">
// //                   <p className="flex items-center gap-2 md:justify-end">
// //                     <Phone className="w-4 h-4 text-gray-400" /> 044 - 27529096
// //                   </p>
// //                   <p className="flex items-center gap-2 md:justify-end">
// //                     <Mail className="w-4 h-4 text-gray-400" /> masm992007@gmail.com
// //                   </p>
// //                   <p className="text-[#a7150b] font-bold mt-1">தேதி: 27.11.2025</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* --- 2. CIRCULAR SUBJECT --- */}
// //           <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#a7150b] to-[#8a0d08] rounded-xl p-6 text-center text-white shadow-lg">
// //             <h2 className="text-xl md:text-2xl font-bold font-tamil mb-2">
// //               தைப்பூச சக்தி மாலை இருமுடி விழா 2025 – 2026
// //             </h2>
// //             <div className="inline-block bg-white/20 px-4 py-1 rounded-lg text-sm font-medium backdrop-blur-sm">
// //               சுற்றறிக்கை (Circular)
// //             </div>
// //           </motion.div>

// //           {/* --- 3. MAIN CONTENT (Split Layout) --- */}
// //           <div className="grid md:grid-cols-3 gap-6">
            
// //             {/* Left: Target Audience */}
// //             <motion.div variants={itemVariants} className="md:col-span-1 space-y-4">
// //               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full">
// //                 <div className="flex items-center gap-3 mb-4 text-[#a7150b]">
// //                   <UserCheck className="w-6 h-6" />
// //                   <h3 className="font-bold text-lg">Attention</h3>
// //                 </div>
// //                 <ul className="space-y-3 text-gray-700 font-tamil leading-relaxed">
// //                   <li className="flex gap-2">
// //                     <span className="text-[#a7150b] font-bold">•</span> மாவட்ட தலைவர்கள்
// //                   </li>
// //                   <li className="flex gap-2">
// //                     <span className="text-[#a7150b] font-bold">•</span> துணைத் தலைவர்கள்
// //                   </li>
// //                   <li className="flex gap-2">
// //                     <span className="text-[#a7150b] font-bold">•</span> மன்ற தலைவர்கள்
// //                   </li>
// //                   <li className="flex gap-2">
// //                     <span className="text-[#a7150b] font-bold">•</span> குழு பொறுப்பாளர்கள்
// //                   </li>
// //                 </ul>
// //               </div>
// //             </motion.div>

// //             {/* Right: Detailed Message */}
// //             <motion.div variants={itemVariants} className="md:col-span-2">
// //               <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative h-full">
// //                 <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 rounded-l-xl"></div>
                
// //                 <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
// //                   <FileText className="w-5 h-5 text-yellow-500" />
// //                   Circular Details
// //                 </h3>

// //                 <div className="space-y-6 text-gray-700 leading-loose text-lg font-tamil text-justify">
// //                   <p>
// //                     இருமுடி விழா <strong>(15.12.2025 முதல் 31.01.2026 வரை)</strong> மற்றும் தைப்பூச விழா <strong>(01.02.2026)</strong> அன்று வெகு விமரிசையாக கொண்டாடப்படவுள்ளது.
// //                   </p>
// //                   <p className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-base">
// //                     ஆகையால் இயக்கத்தின் சட்டதிட்டங்களுக்கு உட்பட்டு இருமுடி செலுத்தும் விதிமுறைகள் மற்றும் வழிமுறைகள் இத்துடன் இணைக்கப்பட்டுள்ளது. இதனை சம்பந்தப்பட்ட பொறுப்பாளர்கள் அவசியம் சக்திமாலை அணிந்து வரும் பக்தர்களிடம் கூறி முழுமையாக கடைபிடிக்க செய்யுமாறு அறிவுறுத்தப்படுகிறது.
// //                   </p>
// //                 </div>
// //               </div>
// //             </motion.div>

// //           </div>

// //           {/* --- 4. ENGLISH SUMMARY & DATES --- */}
// //           <motion.div variants={itemVariants} className="bg-blue-50 border border-blue-100 rounded-xl p-6">
// //             <div className="flex items-start gap-4">
// //               <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shrink-0">
// //                 <CalendarDays className="w-6 h-6" />
// //               </div>
// //               <div>
// //                 <h4 className="font-bold text-blue-900 mb-2">Important Dates (English Summary)</h4>
// //                 <p className="text-blue-800/80 text-sm leading-relaxed">
// //                   The <strong>Irumudi Festival (Dec 15, 2025 – Jan 31, 2026)</strong> and <strong>Thaipoosam (Feb 1, 2026)</strong> are to be celebrated grandly. All leaders are requested to ensure devotees strictly follow the movement's regulations.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* --- 5. SIGNATURE --- */}
// //           {/* <motion.div variants={itemVariants} className="flex justify-end pt-8">
// //             <div className="text-right space-y-1 text-gray-800 font-medium font-tamil">
// //               <p>துணைத்தலைவர் – ACMEC TRUST</p>
// //               <p>துணைத்தலைவர் – MASM</p>
// //             </div>
// //           </motion.div> */}

// //         </motion.div>
// //       </div>
// //     </PageTemplate>
// //   );
// // }

// 'use client';

// import React from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import { motion } from 'framer-motion';
// import { Phone, Mail } from 'lucide-react';
// import Image from 'next/image';

// export default function CircularPage() {
  
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
//       <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans flex justify-center">

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

//               {/* ❌ Removed Adigalar Photo Placeholder */}
              
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

//               {/* ❌ Removed President Photo Placeholder */}

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
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939083/Screenshot_2025-12-04_161454_hxyemn.png"   // <-- your signature path
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
//       </div>
//     </PageTemplate>
//   );
// }
'use client';

import React, { useState } from 'react';
import PageTemplate from '@/components/PageTemplate';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, X } from 'lucide-react';
import Image from 'next/image';

export default function CircularPage() {
  
  // --- NEW: State for Popup Visibility ---
  const [showPopup, setShowPopup] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <PageTemplate 
      title="Official Circular" 
      subtitle="தைப்பூச சக்தி மாலை இருமுடி விழா 2025 - 2026"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}
    >
      <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans flex justify-center relative">

        {/* --- EXISTING CONTENT (UNCHANGED) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="bg-white max-w-[210mm] w-full shadow-2xl print:shadow-none min-h-[297mm] relative flex flex-col"
        >

          {/* HEADER */}
          <div className="p-8 pb-4 text-center space-y-3">

            {/* Top Slogans */}
            <div className="flex justify-between text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest border-b border-gray-100 pb-2 mb-4 font-tamil">
              <span>குருவடி சரணம்!</span>
              <span>ஓம் சக்தி</span>
              <span>ஒரே தாய்!</span>
              <span>திருவடி சரணம்!</span>
              <span>ஒரே குலம்!</span>
            </div>

            {/* Logo + Headers */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="flex-1 space-y-2 text-center">
                <h1 className="text-xl md:text-2xl font-extrabold text-[#a7150b] font-tamil leading-tight">
                  மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்கம்
                </h1>

                <p className="text-gray-800 font-semibold font-tamil text-sm">
                  மேல்மருவத்தூர் 603 319. <br/>
                  தமிழ்நாடு, இந்தியா.
                </p>

                <div className="text-[#a7150b] font-bold text-sm font-tamil mt-2">
                  நிறுவனத்தலைவர்: ஆன்மிககுரு அருள்திரு பங்காரு அடிகளார்
                </div>

                <div className="text-[#a7150b] font-bold text-sm font-tamil">
                  தலைவர்: V. திருமதி லட்சுமி
                </div>
              </div>

            </div>
          </div>

          {/* CONTACT BAR */}
          <div className="border-t-2 border-b-2 border-[#a7150b] py-2 px-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-800 font-tamil bg-yellow-50/50">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#a7150b]" /> 044-27529096
              </span>
              <span className="hidden md:inline">|</span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#a7150b]" /> masm992007@gmail.com
              </span>
            </div>
            <div>தேதி : 27.11.2025</div>
          </div>

          {/* BODY */}
          <div className="p-10 md:p-12 space-y-8 flex-grow">
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold text-black font-tamil underline decoration-2 underline-offset-4">
                தைப்பூச சக்தி மாலை இருமுடி விழா 2025 - 2026
              </h2>
              <h3 className="text-lg font-bold text-black font-tamil">
                சுற்றறிக்கை
              </h3>
            </div>

            <div className="text-lg font-bold text-black font-tamil">
              மாவட்ட தலைவர்கள், துணைத் தலைவர்கள் கவனத்திற்கு,
            </div>

            <div className="text-justify text-lg leading-[2.5rem] font-medium text-gray-900 font-tamil">
              <p>
                இருமுடி விழா <strong>(15.12.2025 முதல் 31.01.2026 வரை)</strong> மற்றும் தைப்பூச விழா 
                <strong> (01.02.2026)</strong> அன்று வெகு விமரிசையாக கொண்டாடப்படவுள்ளது. 
                ஆகையால் இயக்கத்தின் சட்டதிட்டங்களுக்கு உட்பட்டு இருமுடி செலுத்தும் விதிமுறைகள் 
                மற்றும் வழிமுறைகள் இத்துடன் இணைக்கப்பட்டுள்ளது. இதனை மாவட்ட 
                தலைவர்கள், துணைத் தலைவர்கள், மன்ற தலைவர்கள், இருமுடி செலுத்த வரும் 
                சக்திகளை அழைத்துவரும் குழு பொறுப்பாளர்கள் அவசியம் சக்திமாலை அணிந்து 
                வரும் பக்தர்களிடம் கூறி முழுமையாக கடைபிடிக்க செய்யுமாறு 
                அறிவுறுத்தப்படுகிறது.
              </p>
            </div>
          </div>

          {/* SIGNATURE SECTION */}
          <div className="p-12 pt-0 flex justify-end">
            <div className="text-right space-y-1 font-bold text-black font-tamil text-lg">
              
              {/* Signature Image */}
              <div className="h-20 w-48 ml-auto mb-2 relative">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939083/Screenshot_2025-12-04_161454_hxyemn.png"
                  alt="Signature"
                  fill
                  className="object-contain"
                />
              </div>

              <p>துணைத்தலைவர் - ACMEC TRUST</p>
              <p>துணைத்தலைவர் - MASM</p>
            </div>
          </div>

          <div className="h-2 bg-[#a7150b] w-full mt-auto"></div>
        </motion.div>

        {/* --- NEW: POPUP MODAL OVERLAY --- */}
        <AnimatePresence>
          {showPopup && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            >
              {/* Modal Container */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative bg-white p-2 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setShowPopup(false)}
                  className="absolute -top-4 -right-4 z-10 bg-white text-gray-800 p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Image Container */}
                <div className="relative w-full h-full min-h-[300px] md:min-h-[600px] rounded-lg overflow-hidden">
                   {/* REPLACE src BELOW WITH YOUR IMAGE PATH */}
                   <Image
                     src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1766557076/WhatsApp_Image_2025-12-22_at_5.06.43_PM_sxg4bi.jpg"
                     alt="Announcement"
                     fill
                     className="object-contain"
                     priority
                   />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTemplate>
  );
}