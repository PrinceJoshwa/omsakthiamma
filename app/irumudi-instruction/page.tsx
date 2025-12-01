// 'use client';

// import React from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import { motion } from 'framer-motion';
// import { 
//   Car, 
//   Ticket, 
//   AlertTriangle, 
//   Users, 
//   Shirt, 
//   ShieldCheck, 
//   Clock, 
//   Info,
//   MapPin
// } from 'lucide-react';

// export default function IrumudiInstructionPage() {
  
//   // --- ANIMATION VARIANTS ---
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <PageTemplate 
//       title="Irumudi Instructions" 
//       subtitle="இருமுடி செலுத்துவதற்கான இயக்க விதிமுறைகள் மற்றும் வழிமுறைகள் (2025 - 2026)"
//       noTopPadding={true}
//       noContentTopPadding={true}
//     >
//       <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="max-w-5xl mx-auto space-y-12"
//         >

//           {/* --- 1. PARKING & ARRIVAL --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
//               <Car className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">வாகன நிறுத்தம் & அனுமதி</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   <strong className="text-blue-800">வாகன நிறுத்தும் இடம்:</strong> அனைத்து வாகனங்களும் <strong>MEDICAL COLLEGE GROUND</strong>-ல் மட்டுமே நிறுத்த வேண்டும். தேசிய நெடுஞ்சாலை மற்றும் சோத்துபாக்கம் சாலைகளில் நிறுத்தக் கூடாது. மீறினால் மன்றத்தின் பதிவு ரத்து செய்யப்படும்.
//                 </li>
//                 <li>
//                   பார்க்கிங் டோக்கன் (Parking Token) வாங்கியவர்கள் மட்டுமே இருமுடி செலுத்த அனுமதிக்கப்படுவார்கள்.
//                 </li>
//                 <li>
//                   காவல் துறையின் நடவடிக்கைகளுக்கு நிர்வாகம் பொறுப்பல்ல.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 2. TOKEN & TIMING RULES --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-[#a7150b] p-4 text-white flex items-center gap-3">
//               <Clock className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">நேரம் & டோக்கன் விதிமுறைகள்</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <div className="grid md:grid-cols-2 gap-6 mb-4">
//                 <div className="bg-red-50 p-4 rounded-xl border border-red-100">
//                   <h3 className="font-bold text-[#a7150b] mb-2">நேரங்கள்</h3>
//                   <ul className="space-y-2 text-sm">
//                     <li>• <strong>G-SHED:</strong> இரவு 6 மணிக்கு அடைக்கப்படும்.</li>
//                     <li>• <strong>QLINE Entrance:</strong> இரவு 7.30 மணி வரை திறந்திருக்கும்.</li>
//                     <li>• <strong>கருவறை:</strong> இரவு 8 மணிக்கு நடை சார்த்தப்படும்.</li>
//                   </ul>
//                 </div>
//                 <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
//                   <h3 className="font-bold text-orange-800 mb-2">டோக்கன் செல்லுபடி</h3>
//                   <p className="text-sm">
//                     இன்றைய தேதியில் பெறப்பட்ட டோக்கன் <strong>இன்று மட்டுமே</strong> செல்லும். பழைய டோக்கன்கள் அல்லது நாளைக்கான முன்பதிவு டோக்கன்கள் இன்று செல்லாது.
//                   </p>
//                 </div>
//               </div>
              
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   இருமுடி செலுத்த வரும் அனைவரும் (குழந்தைகள், முதியோர் உட்பட) தனித்தனியாக டோக்கன் பெற்றிருக்க வேண்டும்.
//                 </li>
//                 <li>
//                   டோக்கனை கசக்கவோ, கிழிக்கவோ, நனைக்கவோ கூடாது. சேதமடைந்தால் புதிய டோக்கன் வாங்க வேண்டும்.
//                 </li>
//                 <li>
//                   குடும்பத்தினர் அல்லது குழுவினரின் டோக்கனை ஒரே நபர் வைத்திருக்கக் கூடாது. ஒவ்வொருவரும் தங்கள் டோக்கனை கையில் வைத்திருக்க வேண்டும்.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 3. DRESS CODE & ITEMS --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-orange-500 p-4 text-white flex items-center gap-3">
//               <Shirt className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">ஆடை & இருமுடி விபரம்</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   அனைவரும் <strong>செவ்வாடை</strong> அல்லது குரு சக்தி அணியக்கூடிய <strong>ஆரஞ்சு</strong> நிற ஆடை மட்டுமே அணிய வேண்டும். வேறு வண்ண ஆடைகள் தவிர்க்கப்பட வேண்டும்.
//                 </li>
//                 <li>
//                   ஆலயத்தில் அனுமதிக்கப்பட்ட இருமுடி பை மற்றும் சக்திமாலை மட்டுமே அணிய வேண்டும்.
//                 </li>
//                 <li>
//                   இருமுடி டோக்கன் மற்றும் உணவு டோக்கன் இரண்டையும் தனித்தனியாக பிரித்து வைத்திருக்க வேண்டும்.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 4. SAFETY & GENERAL INSTRUCTIONS --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-green-600 p-4 text-white flex items-center gap-3">
//               <ShieldCheck className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">பாதுகாப்பு & பொது அறிவுரைகள்</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              
//               {/* Special Queue Info */}
//               <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg text-green-800 text-sm mb-4">
//                 <Users className="w-5 h-5 mt-0.5 shrink-0" />
//                 <p>
//                   <strong>மாற்றுத்திறனாளிகள் / முதியோர்:</strong> கேட்-3 (Gate-3) வழியாக செல்லலாம். வீல் சேர் (Wheel Chair) தேவைப்படுவோர் கேட்-10 செக்யூரிட்டியை அணுகவும்.
//                 </p>
//               </div>

//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   சித்தர்பீடத்தில் இரவு நேர தங்குதல் தவிர்க்கப்பட வேண்டும்.
//                 </li>
//                 <li>
//                   இருமுடி செலுத்திய பின் சுற்றுலா செல்லாமல் ஊர் திரும்ப வேண்டும்.
//                 </li>
//                 <li>
//                   ஏரி, குளம், கடல் போன்ற நீர்நிலைகளில் இறங்க வேண்டாம்.
//                 </li>
//                 <li>
//                   குழந்தைகள்/பெரியவர்கள் தொலைந்து போவதை தவிர்க்க, மன்ற பொறுப்பாளரின் போன் நம்பர் கொண்ட <strong>அடையாள அட்டை (ID Card)</strong> அணிவது அவசியம்.
//                 </li>
//                 <li>
//                   உடமைப் பொருட்களுக்கு (நகை, பணம், செல்போன்) பக்தர்களே பொறுப்பு.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 5. WARNINGS --- */}
//           <motion.div variants={itemVariants} className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
//             <div className="flex items-start gap-3">
//               <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
//               <div>
//                 <h3 className="font-bold text-yellow-800 mb-2 font-tamil">எச்சரிக்கை</h3>
//                 <p className="text-sm text-yellow-800/90 leading-relaxed font-tamil">
//                   M.A.S.M இயக்கம் அங்கீகரிக்காத வெளி நபர்களை நம்பி ஏமாறாதீர்கள். எந்த ஒரு குளறுபடி அல்லது முறைகேடு தொடர்பான புகார்கள் வந்தால் இயக்கத்தின் மூலம் நடவடிக்கை எடுக்கப்படும்.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           <div className="text-center pt-8 pb-4">
//             <p className="font-bold text-[#a7150b] text-lg font-tamil">ஓம் சக்தி!</p>
//           </div>

//         </motion.div>
//       </div>
//     </PageTemplate>
//   );
// }

'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { motion } from 'framer-motion';
import { 
  Car, 
  Ticket, 
  AlertTriangle, 
  Users, 
  Shirt, 
  ShieldCheck, 
  Clock, 
  ScanLine, // Added for QR Code section
  DoorOpen  // Added for Gate section
} from 'lucide-react';

export default function IrumudiInstructionPage() {
  
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTemplate 
      title="Irumudi Instructions" 
      subtitle="இருமுடி செலுத்துவதற்கான இயக்க விதிமுறைகள் மற்றும் வழிமுறைகள் (2025 - 2026)"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="min-h-screen bg-gray-50 py-12 px-4 font-sans">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto space-y-10"
        >

          {/* --- 1. PARKING (EXPANDED) --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
              <Car className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">1. வாகன நிறுத்தம் (Parking)</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  <strong className="text-blue-800">இடம்:</strong> அனைத்து வாகனங்களும் <strong>MEDICAL COLLEGE GROUND</strong>-ல் மட்டுமே நிறுத்த வேண்டும்.
                </li>
                <li>
                  <strong className="text-red-600">தடை:</strong> தேசிய நெடுஞ்சாலை மற்றும் சோத்துபாக்கம் சாலைகளில் நிறுத்தக் கூடாது. [cite_start]மீறினால் அந்த மன்றத்தின் <strong>பதிவு (Registration) ரத்து செய்யப்படும்</strong>[cite: 29].
                </li>
                <li>
                  பார்க்கிங் டோக்கன் (Parking Token) வைத்திருப்பவர்கள் மட்டுமே அனுமதிக்கப்படுவார்கள்.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 2. TIMING & TOKEN VALIDITY --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#a7150b] p-4 text-white flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">2. நேரம் & டோக்கன் செல்லுபடி</h2>
            </div>
            <div className="p-6 text-gray-700 leading-relaxed font-tamil">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <h3 className="font-bold text-[#a7150b] mb-2">முக்கிய நேரங்கள்</h3>
                  <ul className="space-y-2 text-sm">
                    [cite_start]<li>• <strong>G-SHED:</strong> இரவு 6 மணிக்கு மூடப்படும்[cite: 33].</li>
                    [cite_start]<li>• <strong>QLINE Entrance:</strong> இரவு 7.30 மணி வரை மட்டும் திறந்திருக்கும்[cite: 35].</li>
                    [cite_start]<li>• <strong>கருவறை:</strong> இரவு 8 மணிக்கு நடை சார்த்தப்படும்[cite: 38].</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-2">டோக்கன் விதிமுறை</h3>
                  <p className="text-sm">
                    இன்றைய தேதியிட்ட டோக்கன் <strong>இன்று மட்டுமே</strong> செல்லும். [cite_start]நாளைய தேதிக்கான முன்பதிவு டோக்கனை வைத்துக்கொண்டு இன்று வர அனுமதி இல்லை[cite: 37].
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- 3. TOKEN HANDLING & QR SCAN (NEW) --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
              <ScanLine className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">3. டோக்கன் பாதுகாப்பு & ஸ்கேனிங் (QR Code)</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  <strong>பாதுகாப்பு:</strong> டோக்கனை கசக்கவோ, இரண்டாக மடிக்கவோ, அல்லது <strong>நீரில் நனைக்கவோ கூடாது</strong>. [cite_start]QR Code சேதமடைந்தால் ஸ்கேன் செய்ய முடியாது[cite: 50].
                </li>
                <li>
                  <strong>தனிநபர் பொறுப்பு:</strong> ஒவ்வொருவரும் தங்கள் டோக்கனை தனித்தனியாக கையில் வைத்திருக்க வேண்டும். [cite_start]குழுவின் டோக்கன்களை ஒரே நபர் வைத்திருக்கக் கூடாது[cite: 57].
                </li>
                <li>
                  [cite_start]<strong>ஸ்கேனிங் முறை:</strong> டோக்கன் சரிபார்க்கும் இடத்தில் (Token Set), உங்கள் டோக்கனில் உள்ள QR Code-ஐ ஸ்கேன் செய்த பிறகே உள்ளே செல்ல அனுமதிக்கப்படுவீர்கள்[cite: 62].
                </li>
                <li>
                  டோக்கன் தொலைந்துவிட்டால் அல்லது கிழிந்துவிட்டால், மீண்டும் காணிக்கை செலுத்தி புதிய டோக்கன் பெற வேண்டும்.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 4. DRESS CODE & GATE ACCESS (EXPANDED) --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-orange-500 p-4 text-white flex items-center gap-3">
              <Shirt className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">4. ஆடை & நுழைவாயில் விபரம் (Gates)</h2>
            </div>
            <div className="p-6 space-y-5 text-gray-700 leading-relaxed font-tamil">
              
              {/* Gate Info Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <strong className="block text-orange-900 mb-1">இருமுடி பக்தர்கள்:</strong>
                  செவ்வாடை அல்லது குரு சக்தி அணியக்கூடிய ஆரஞ்சு நிற ஆடை மட்டுமே அணிய வேண்டும். [cite_start]அனுமதிக்கப்பட்ட இருமுடி பை மட்டுமே பயன்படுத்த வேண்டும்[cite: 66].
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                  <strong className="block text-gray-900 mb-1">பொது தரிசனம் (Gate-1):</strong>
                  சக்தி மாலை அணியாத பக்தர்கள் மற்றும் இருமுடி இல்லாதவர்கள் <strong>கேட்-1 (Gate-1)</strong> வழியாக சென்று தரிசனம் செய்ய வேண்டும். [cite_start]இவர்கள் இருமுடி வரிசையில் செல்ல அனுமதி இல்லை[cite: 70].
                </div>
              </div>

            </div>
          </motion.div>

          {/* --- 5. SPECIAL ACCESS (UPDATED) --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-green-600 p-4 text-white flex items-center gap-3">
              <Users className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">5. சிறப்பு வழி (Gate-3) & உதவி</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <p className="bg-green-50 p-3 rounded text-green-800 border border-green-100">
                 பின்வருவோர் <strong>கேட்-3 (Gate-3)</strong> வழியாக இருமுடி செலுத்த செல்லலாம்:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ml-2">
                <li className="flex items-center gap-2">• மாற்றுத்திறனாளிகள் (Physically Challenged)</li>
                <li className="flex items-center gap-2">• முதியோர்கள்</li>
                [cite_start]<li className="flex items-center gap-2">• கர்ப்பிணிகள் [cite: 76]</li>
                [cite_start]<li className="flex items-center gap-2">• இதய நோயாளிகள் (Heart Patients) [cite: 76]</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p>
                  [cite_start]<strong>வீல் சேர் (Wheel Chair):</strong> தேவைப்படுவோர் <strong>கேட்-10</strong> செக்யூரிட்டியை அணுகவும்[cite: 77].
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- 6. SAFETY & GENERAL INSTRUCTIONS (EXPANDED) --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-teal-600 p-4 text-white flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">6. பாதுகாப்பு & பொது அறிவுரைகள்</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  [cite_start]சித்தர்பீடத்தில் இரவு நேர தங்குதல் தவிர்க்கப்பட வேண்டும்[cite: 79].
                </li>
                <li>
                  [cite_start]ஏரி, குளம், கடல் போன்ற நீர்நிலைகளில் இறங்க வேண்டாம்[cite: 81].
                </li>
                <li>
                  [cite_start]<strong>சுரங்கப்பாதை (Subway):</strong> சித்தர் பீடத்தின் எதிரில் உள்ள பகுதிகளுக்கு செல்ல சுரங்கப் பாதையை பயன்படுத்த வேண்டும்[cite: 82].
                </li>
                <li>
                  [cite_start]<strong>அடையாள அட்டை (ID Card):</strong> குழந்தைகள் மற்றும் பெரியவர்கள் தொலைந்து போவதை தவிர்க்க, மன்ற பொறுப்பாளரின் போன் நம்பர் கொண்ட ID Card அணிவது அவசியம்[cite: 84].
                </li>
                <li>
                  உடமைப் பொருட்களுக்கு (நகை, பணம், செல்போன்) பக்தர்களே பொறுப்பு.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 7. WARNINGS --- */}
          <motion.div variants={itemVariants} className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2 font-tamil">எச்சரிக்கை</h3>
                <p className="text-sm text-yellow-800/90 leading-relaxed font-tamil">
                  M.A.S.M இயக்கம் அங்கீகரிக்காத வெளி நபர்களை நம்பி ஏமாறாதீர்கள். எந்த ஒரு குளறுபடி அல்லது முறைகேடு தொடர்பான புகார்கள் வந்தால் இயக்கத்தின் மூலம் நடவடிக்கை எடுக்கப்படும்.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="text-center pt-8 pb-4">
            <p className="font-bold text-[#a7150b] text-xl font-tamil">ஓம் சக்தி!</p>
          </div>

        </motion.div>
      </div>
    </PageTemplate>
  );
}