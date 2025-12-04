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
//   ScanLine, // Added for QR Code section
//   DoorOpen  // Added for Gate section
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
//           className="max-w-5xl mx-auto space-y-10"
//         >

//           {/* --- 1. PARKING (EXPANDED) --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
//               <Car className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">1. வாகன நிறுத்தம் (Parking)</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   <strong className="text-blue-800">இடம்:</strong> அனைத்து வாகனங்களும் <strong>MEDICAL COLLEGE GROUND</strong>-ல் மட்டுமே நிறுத்த வேண்டும்.
//                 </li>
//                 <li>
//                   <strong className="text-red-600">தடை:</strong> தேசிய நெடுஞ்சாலை மற்றும் சோத்துபாக்கம் சாலைகளில் நிறுத்தக் கூடாது. [cite_start]மீறினால் அந்த மன்றத்தின் <strong>பதிவு (Registration) ரத்து செய்யப்படும்</strong>[cite: 29].
//                 </li>
//                 <li>
//                   பார்க்கிங் டோக்கன் (Parking Token) வைத்திருப்பவர்கள் மட்டுமே அனுமதிக்கப்படுவார்கள்.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 2. TIMING & TOKEN VALIDITY --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-[#a7150b] p-4 text-white flex items-center gap-3">
//               <Clock className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">2. நேரம் & டோக்கன் செல்லுபடி</h2>
//             </div>
//             <div className="p-6 text-gray-700 leading-relaxed font-tamil">
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 <div className="bg-red-50 p-4 rounded-xl border border-red-100">
//                   <h3 className="font-bold text-[#a7150b] mb-2">முக்கிய நேரங்கள்</h3>
//                   <ul className="space-y-2 text-sm">
//                     [cite_start]<li>• <strong>G-SHED:</strong> இரவு 6 மணிக்கு மூடப்படும்[cite: 33].</li>
//                     [cite_start]<li>• <strong>QLINE Entrance:</strong> இரவு 7.30 மணி வரை மட்டும் திறந்திருக்கும்[cite: 35].</li>
//                     [cite_start]<li>• <strong>கருவறை:</strong> இரவு 8 மணிக்கு நடை சார்த்தப்படும்[cite: 38].</li>
//                   </ul>
//                 </div>
//                 <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
//                   <h3 className="font-bold text-orange-800 mb-2">டோக்கன் விதிமுறை</h3>
//                   <p className="text-sm">
//                     இன்றைய தேதியிட்ட டோக்கன் <strong>இன்று மட்டுமே</strong> செல்லும். [cite_start]நாளைய தேதிக்கான முன்பதிவு டோக்கனை வைத்துக்கொண்டு இன்று வர அனுமதி இல்லை[cite: 37].
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* --- 3. TOKEN HANDLING & QR SCAN (NEW) --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-indigo-600 p-4 text-white flex items-center gap-3">
//               <ScanLine className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">3. டோக்கன் பாதுகாப்பு & ஸ்கேனிங் (QR Code)</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   <strong>பாதுகாப்பு:</strong> டோக்கனை கசக்கவோ, இரண்டாக மடிக்கவோ, அல்லது <strong>நீரில் நனைக்கவோ கூடாது</strong>. [cite_start]QR Code சேதமடைந்தால் ஸ்கேன் செய்ய முடியாது[cite: 50].
//                 </li>
//                 <li>
//                   <strong>தனிநபர் பொறுப்பு:</strong> ஒவ்வொருவரும் தங்கள் டோக்கனை தனித்தனியாக கையில் வைத்திருக்க வேண்டும். [cite_start]குழுவின் டோக்கன்களை ஒரே நபர் வைத்திருக்கக் கூடாது[cite: 57].
//                 </li>
//                 <li>
//                   [cite_start]<strong>ஸ்கேனிங் முறை:</strong> டோக்கன் சரிபார்க்கும் இடத்தில் (Token Set), உங்கள் டோக்கனில் உள்ள QR Code-ஐ ஸ்கேன் செய்த பிறகே உள்ளே செல்ல அனுமதிக்கப்படுவீர்கள்[cite: 62].
//                 </li>
//                 <li>
//                   டோக்கன் தொலைந்துவிட்டால் அல்லது கிழிந்துவிட்டால், மீண்டும் காணிக்கை செலுத்தி புதிய டோக்கன் பெற வேண்டும்.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 4. DRESS CODE & GATE ACCESS (EXPANDED) --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-orange-500 p-4 text-white flex items-center gap-3">
//               <Shirt className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">4. ஆடை & நுழைவாயில் விபரம் (Gates)</h2>
//             </div>
//             <div className="p-6 space-y-5 text-gray-700 leading-relaxed font-tamil">
              
//               {/* Gate Info Grid */}
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
//                   <strong className="block text-orange-900 mb-1">இருமுடி பக்தர்கள்:</strong>
//                   செவ்வாடை அல்லது குரு சக்தி அணியக்கூடிய ஆரஞ்சு நிற ஆடை மட்டுமே அணிய வேண்டும். [cite_start]அனுமதிக்கப்பட்ட இருமுடி பை மட்டுமே பயன்படுத்த வேண்டும்[cite: 66].
//                 </div>
//                 <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
//                   <strong className="block text-gray-900 mb-1">பொது தரிசனம் (Gate-1):</strong>
//                   சக்தி மாலை அணியாத பக்தர்கள் மற்றும் இருமுடி இல்லாதவர்கள் <strong>கேட்-1 (Gate-1)</strong> வழியாக சென்று தரிசனம் செய்ய வேண்டும். [cite_start]இவர்கள் இருமுடி வரிசையில் செல்ல அனுமதி இல்லை[cite: 70].
//                 </div>
//               </div>

//             </div>
//           </motion.div>

//           {/* --- 5. SPECIAL ACCESS (UPDATED) --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-green-600 p-4 text-white flex items-center gap-3">
//               <Users className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">5. சிறப்பு வழி (Gate-3) & உதவி</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <p className="bg-green-50 p-3 rounded text-green-800 border border-green-100">
//                  பின்வருவோர் <strong>கேட்-3 (Gate-3)</strong> வழியாக இருமுடி செலுத்த செல்லலாம்:
//               </p>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ml-2">
//                 <li className="flex items-center gap-2">• மாற்றுத்திறனாளிகள் (Physically Challenged)</li>
//                 <li className="flex items-center gap-2">• முதியோர்கள்</li>
//                 [cite_start]<li className="flex items-center gap-2">• கர்ப்பிணிகள் [cite: 76]</li>
//                 [cite_start]<li className="flex items-center gap-2">• இதய நோயாளிகள் (Heart Patients) [cite: 76]</li>
//               </ul>
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <p>
//                   [cite_start]<strong>வீல் சேர் (Wheel Chair):</strong> தேவைப்படுவோர் <strong>கேட்-10</strong> செக்யூரிட்டியை அணுகவும்[cite: 77].
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* --- 6. SAFETY & GENERAL INSTRUCTIONS (EXPANDED) --- */}
//           <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//             <div className="bg-teal-600 p-4 text-white flex items-center gap-3">
//               <ShieldCheck className="w-6 h-6" />
//               <h2 className="text-lg font-bold font-tamil">6. பாதுகாப்பு & பொது அறிவுரைகள்</h2>
//             </div>
//             <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
//               <ul className="list-disc list-outside ml-5 space-y-3">
//                 <li>
//                   [cite_start]சித்தர்பீடத்தில் இரவு நேர தங்குதல் தவிர்க்கப்பட வேண்டும்[cite: 79].
//                 </li>
//                 <li>
//                   [cite_start]ஏரி, குளம், கடல் போன்ற நீர்நிலைகளில் இறங்க வேண்டாம்[cite: 81].
//                 </li>
//                 <li>
//                   [cite_start]<strong>சுரங்கப்பாதை (Subway):</strong> சித்தர் பீடத்தின் எதிரில் உள்ள பகுதிகளுக்கு செல்ல சுரங்கப் பாதையை பயன்படுத்த வேண்டும்[cite: 82].
//                 </li>
//                 <li>
//                   [cite_start]<strong>அடையாள அட்டை (ID Card):</strong> குழந்தைகள் மற்றும் பெரியவர்கள் தொலைந்து போவதை தவிர்க்க, மன்ற பொறுப்பாளரின் போன் நம்பர் கொண்ட ID Card அணிவது அவசியம்[cite: 84].
//                 </li>
//                 <li>
//                   உடமைப் பொருட்களுக்கு (நகை, பணம், செல்போன்) பக்தர்களே பொறுப்பு.
//                 </li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* --- 7. WARNINGS --- */}
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
//             <p className="font-bold text-[#a7150b] text-xl font-tamil">ஓம் சக்தி!</p>
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

export default function IrumudiRulesPage() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTemplate 
      title="Instructions" 
      subtitle="Detailed Rules & Regulations 2025-26"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}
    >
      <div className="min-h-screen bg-gray-100 py-8 px-4 font-sans flex justify-center">
        
        {/* --- DOCUMENT CONTAINER (A4 Style) --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="bg-white max-w-[210mm] w-full shadow-xl print:shadow-none min-h-[297mm] p-8 md:p-12 text-gray-900 leading-relaxed"
        >
          
          {/* --- HEADER --- */}
          <div className="text-center border-b-2 border-[#a7150b] pb-6 mb-8 space-y-2">
            <h1 className="text-xl md:text-2xl font-bold text-[#a7150b] font-tamil">
              மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்கம் (M.A.S.M)
            </h1>
            <h2 className="text-lg font-bold text-black font-tamil">
              தைப்பூச சக்தி மாலை இருமுடி விழா 2025 - 2026
            </h2>
            <div className="text-base font-semibold underline decoration-1 underline-offset-4 mt-2 font-tamil">
              இருமுடி செலுத்துவதற்கான இயக்க விதிமுறைகள் மற்றும் வழிமுறைகள்
            </div>
          </div>

          {/* --- CONTENT SECTIONS --- */}
          <div className="space-y-8 font-tamil text-[15px] md:text-[16px] text-justify">

            {/* Section: Parking */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                வாகன நிறுத்தும் இடம் (MEDICAL COLLEGE GROUND)
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">1.</span>
                  <span>
                    இருமுடி விழாவின் போது மாவட்டங்கள் தங்களின் ஏற்பாட்டில் கொண்டு வரும் வாகனங்கள் அனைத்தும், வாகன நிறுத்தும் இடத்தில் (MEDICAL COLLEGE GROUND) மட்டுமே நிறுத்த வேண்டும். தேசிய நெடுஞ்சாலை மற்றும் சோத்துபாக்கம் சாலைகளில் வாகனங்களை நிறுத்துதல் கூடாது. மீறினால் அந்த மன்றத்தின் பதிவு /ஆன்லைன் பதிவானது ரத்து செய்யப்படும். மேலும் காவல் துறையின் நடவடிக்கைகளுக்கு நிர்வாகம் பொறுப்பல்ல என்பதை தெரிவித்துக் கொள்கிறோம்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">2.</span>
                  <span>
                    பார்க்கிங் டோக்கன் வாங்கியவர்கள் மட்டுமே இருமுடி செலுத்த அனுமதி கொடுக்கப்படும்.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: Timing & G-Shed */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                இருமுடி காணிக்கை செலுத்தும் இடம் (G'SHED) & நேரங்கள்
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">3.</span>
                  <span>
                    இருமுடி காணிக்கை செலுத்தும் இடம் (G'SHED) இரவு 6 மணிக்கு அடைக்கப்படும்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">4.</span>
                  <span>
                    இன்றைய தேதியில் பெறப்பட்ட இருமுடி டோக்கன் இன்று ஒரே நாளுக்கு மட்டுமே செல்லுபடியாகும். பழைய (முந்தைய) தேதியில் உள்ள இருமுடி டோக்கன்கள் கொண்டு இன்று இருமுடி செலுத்த வந்தால் செல்லாது.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">5.</span>
                  <span>
                    நாளை/அடுத்த தேதிகளுக்கான முன்பதிவு செய்தவர்கள் இன்றைய தினம் வர அனுமதி இல்லை. அன்றைய தினம் முன்பதிவு செய்தவர்களுக்கு மட்டுமே அனுமதி, இருமுடி டோக்கன்கள் வழங்கப்படும்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">6.</span>
                  <span>
                    கருவறையானது இரவு 8 மணிக்கு நடை சார்த்தப்படும். (இருமுடி வரிசை நுழைவாயில் இரவு 7.30 மணி வரை தோராயமாக திறந்திருக்கும்).
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: Warning */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                எச்சரிக்கை பதிவு
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">7.</span>
                  <span>
                    இருமுடி செலுத்த வருகின்ற பக்தர்கள் M.A.S.M இயக்கம் அங்கீகரிக்காத வெளி நபர்களை நம்பி ஏமாறாதீர்கள். இருமுடி தொடர்பான அனைத்து விதிமுறைகளும் இயக்கத்தின் சட்ட நடைமுறைகளுக்கு உட்பட்டவை. எந்த ஒரு குளறுபடி, முறைகேடு தொடர்பான புகார்கள் வந்தால் இயக்கத்தின் மூலம் தேவையான நடவடிக்கை எடுக்கப்படும்.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: Token Rules */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                இருமுடி செலுத்தும் சக்திகள் கடைபிடிக்க வேண்டிய விதி முறைகள்
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">8.</span>
                  <span>
                    இருமுடி செலுத்த வரும் பக்தர்கள் அனைவரும் (கைக்குழந்தைகள், சிறுவர்கள், முதியோர்கள், மாற்றுத்திறனாளிகள் உட்பட) இருமுடி அனுமதி டோக்கனை தங்களுடைய பொறுப்பாளரிடம் பெற்றுக் கொண்ட பிறகுதான் இருமுடி வரிசையில் (QLINE) செல்லவேண்டும். இருமுடி அனுமதி டோக்கன் இல்லாமல் இருமுடி வரிசையில் செல்ல அனுமதி கிடையாது.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">9.</span>
                  <span>
                    இருமுடி சக்தி மாலை அணிந்த கைக்குழந்தைகள், இருமுடி அபிஷேக காணிக்கை செலுத்தி இருமுடி அனுமதி டோக்கன் பெற்றுக்கொண்ட பிறகு தான் ஆலயத்திற்குள் சென்று இருமுடி அபிஷேகம் செய்ய அனுமதி வழங்கப்படும்.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: Token Safety */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                இருமுடி டோக்கனை பாதுகாப்பாக கொண்டு வருதல்
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">10.</span>
                  <span>
                    இருமுடி டோக்கனை கசக்காமல், தவறுதலாக இரண்டாக மடிக்காமல், தவறாக மாற்றி (குறுக்கே) கிழிக்காமல், தண்ணீரில் நனையாமல் பத்திரமாக பாதுகாப்பாக கொண்டு வர வேண்டும். டோக்கன் சரி பார்க்கும் இடத்தில் கொடுக்கும் வரை இருமுடி டோக்கனை பாதுகாத்து கவனமுடன் கொண்டு வருவது பக்தர்களின் பொறுப்பு ஆகும். டோக்கன் தவற விட்டாலோ (அ) தவறுதலாக கிழிந்து விட்டாலோ மீண்டும் காணிக்கை செலுத்தி புதிய டோக்கனை பெற்றுக் கொண்ட பின்னரே இருமுடி செலுத்த அனுமதி அளிக்கப்படும்.
                  </span>
                </li>
              </ul>
            </motion.section>

             {/* Section: Inside Token Set */}
             <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                டோக்கன் செட்டிற்குள் (டோக்கன் சரி பார்க்கும் இடம்) வரும்பொழுது
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">11.</span>
                  <span>
                    இருமுடி செலுத்த வழங்கப்பட்டுள்ள இருமுடி டோக்கன் மற்றும் உணவு டோக்கன் இரண்டையும் தனித்தனியாக பிரித்து பாதுகாப்பாக வைத்திருக்க வேண்டும்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">12.</span>
                  <span>
                     இருமுடி செலுத்தும் சக்திகள் தங்களுடைய இருமுடிப்பையையும், இருமுடி டோக்கனும் இல்லாமல் டோக்கன் சரி பார்க்கும் கவுண்டருக்கு (டோக்கன் செட்) செல்ல அனுமதி இல்லை.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">13.</span>
                  <span>
                    சிறுவர்கள் முதல் பெரியவர்கள் வரை ஒவ்வொருவரும் தங்களுடைய இருமுடி பையையும் தங்களுடைய தனித்தனி இருமுடி டோக்கனையும் கையில் வைத்திருந்தே கட்டாயம் வர வேண்டும். ஒரே நபரிடம் குடும்பத்தினர் அல்லது குழுவினரின் டோக்கனை வைத்திருக்க கூடாது.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">14.</span>
                  <span>
                    டோக்கன் சரி பார்க்கும் கவுண்டரில் ஒவ்வொருவரும் தனித்தனியாக இருமுடிப்பை படம் உள்ள க்யூ ஆர் கோடு (QR CODE) கொண்ட இருமுடி டோக்கனை மட்டும் காண்பித்து ஸ்கேன் செய்த பின்னர், டோக்கனை கொடுத்துவிட்டு சென்ற பிறகுதான் ஆலயத்திற்குள் சென்று அபிஷேகம் செய்ய அனுமதி வழங்கப்படும்.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: Missing Items & Dress Code */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                 ஆடை கட்டுப்பாடு & இதர வழிமுறைகள்
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">15.</span>
                  <span>
                    <strong>டோக்கன் இல்லாமல் வந்தவர்கள்:</strong> இருமுடிப்பையும், இருமுடி டோக்கனும் இல்லாமல் வரும் சக்திகள் டோக்கன் பெறுகின்ற வரையில் காத்திருந்து தங்கள் பொறுப்பாளரிடம் இருமுடி டோக்கன் வாங்கிய பிறகு டோக்கன் சரிபார்க்கும் கவுண்டரில் ஸ்கேன் செய்த பிறகு தான் அனுமதிக்கப்படுவர்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">16.</span>
                  <span>
                    இருமுடி செலுத்த வரும் சக்திகள் அனைவரும் அவர்களின் இருமுடி பைக்கு ஏற்றவாறு செவ்வாடை / குரு சக்தி அணியக்கூடிய ஆரஞ்சு நிற ஆடை அவசியம் அணிந்து வர வேண்டும். வேறு வண்ண ஆடைகளை அணிந்து வருவதை தவிர்க்க வேண்டும்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">17.</span>
                  <span>
                    ஆலயத்தில் அனுமதிக்கப்பட்ட இருமுடி பை மற்றும் சக்திமாலை மட்டுமே சக்திகள் அணிந்து வர வேண்டும்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">18.</span>
                  <span>
                    <strong>இலவச பொது தரிசனம் (கேட்-1):</strong> சக்தி மாலை அணியாத பக்தர்கள், அருள்மிகு பங்காரு சித்தர் மற்றும் அன்னை ஆதிபராசக்தியை தரிசனம் செய்ய இலவச பொது தரிசனம் கேட் -1 நுழைவாயில் வழியாக க்யூ லைனில் செல்ல வேண்டும். இவர்கள் இருமுடி வரிசையில் செல்ல அனுமதி இல்லை.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">19.</span>
                  <span>
                    உணவு டோக்கனை தங்கள் பையில் பத்திரமாக வைத்துக் கொள்ளவும்.
                  </span>
                </li>
              </ul>
            </motion.section>

             {/* Section: Special Access */}
             <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                உடல் ஊனமுற்றோர்கள்/மாற்றுத் திறனாளிகள் (கேட்-3)
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">20.</span>
                  <span>
                    இருமுடி சக்தி மாலை அணிந்து வரும் சக்திகள் (உடல் ஊனமுற்றோர்கள்/மாற்றுத் திறனாளிகள், கர்ப்பிணிகள் மற்றும் இதய நோயாளிகள் போன்றோர்) தங்களுடைய அடையாள அட்டை மற்றும் இருமுடி டோக்கனை பொறுப்பாளரிடம் பெற்று கொண்டு கேட்-3 வழியாக இருமுடி செலுத்த செல்லலாம். வீல் சேர் (WHEEL CHAIR) சேவையை கேட்-10 செக்யூரிட்டியிடம் தொடர்பு கொண்டு பயன்படுத்திக் கொள்ளலாம்.
                  </span>
                </li>
              </ul>
            </motion.section>

            {/* Section: General Notices */}
            <motion.section variants={sectionVariants}>
              <h3 className="font-bold text-lg text-[#a7150b] mb-2 bg-yellow-50 p-2 border-l-4 border-[#a7150b]">
                பக்தர்களுக்கு முக்கிய அறிவிப்பு
              </h3>
              <ul className="space-y-3 pl-2">
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">21.</span>
                  <span>
                    சித்தர்பீடத்தில் இரவு நேர தங்குதல் தவிர்க்கப்பட வேண்டும்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">22.</span>
                  <span>
                    இருமுடி செலுத்திய பின்னர் சுற்றுலா தலங்களுக்கு செல்லாமல் தங்களுடைய பகுதிக்கு திரும்பி செல்ல வேண்டும்.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">23.</span>
                  <span>
                    இருமுடி செலுத்த வரும் பக்தர்கள் அருகில் உள்ள நீர் நிலைகளான ஏரி, குளம், குட்டை, கடல் பகுதிகளில் இறங்க வேண்டாம்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">24.</span>
                  <span>
                     சித்தர் பீடத்தின் எதிரில் உள்ள பகுதிகளுக்கு செல்ல சுரங்கப் பாதையை பயன்படுத்த வேண்டும்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">25.</span>
                  <span>
                    ஆதிபராசக்தியை தரிசனம் செய்ய வரும் இருமுடி பக்தர்கள் மன்றத்தின் மூலம் பொறுப்பாளர் தொலைபேசி/ கைபேசி எண் (CELL NO) கூடிய அடையாள அட்டையை அவசியம் அணிந்து வரவும்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">26.</span>
                  <span>
                    கூட்ட நேரங்களில் குழுவிலிருந்து பிரிந்துவிடும் சக்திகளை (குழந்தைகள்/பெரியவர்கள்) அவர்கள் குழுவினரிடம் ஒப்படைக்க ஏதுவாக அடையாள அட்டையை மேற்கூறிய விபரங்களுடன் அணிந்து வருவது அவசியம்.
                  </span>
                </li>
                 <li className="flex gap-3">
                  <span className="font-bold min-w-[20px]">27.</span>
                  <span>
                    <strong>பக்தர்களின் உடமை பொருட்கள்- பக்தர்களே பொறுப்பு:</strong> கூட்ட நெரிச்சலை தவிர்ப்பதற்காகவும், பக்தர்களின் உடமை பொருட்கள் பாதுகாப்பு (பணம், செல்போன், நகை) மற்றும் நலன் கருதியும் அந்தந்த மன்றங்களை இருமுடி நாட்களுக்கு ஏற்றவாறு மாவட்டங்கள் சீராக அனுப்ப வேண்டும்.
                  </span>
                </li>
              </ul>
            </motion.section>

          </div>

          <div className="mt-12 text-center">
            <p className="font-bold text-[#a7150b] text-xl font-tamil">ஓம் சக்தி!</p>
          </div>

        </motion.div>
      </div>
    </PageTemplate>
  );
}