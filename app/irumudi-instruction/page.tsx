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
  Info,
  MapPin
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
          className="max-w-5xl mx-auto space-y-12"
        >

          {/* --- 1. PARKING & ARRIVAL --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
              <Car className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">வாகன நிறுத்தம் & அனுமதி</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  <strong className="text-blue-800">வாகன நிறுத்தும் இடம்:</strong> அனைத்து வாகனங்களும் <strong>MEDICAL COLLEGE GROUND</strong>-ல் மட்டுமே நிறுத்த வேண்டும். தேசிய நெடுஞ்சாலை மற்றும் சோத்துபாக்கம் சாலைகளில் நிறுத்தக் கூடாது. மீறினால் மன்றத்தின் பதிவு ரத்து செய்யப்படும்.
                </li>
                <li>
                  பார்க்கிங் டோக்கன் (Parking Token) வாங்கியவர்கள் மட்டுமே இருமுடி செலுத்த அனுமதிக்கப்படுவார்கள்.
                </li>
                <li>
                  காவல் துறையின் நடவடிக்கைகளுக்கு நிர்வாகம் பொறுப்பல்ல.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 2. TOKEN & TIMING RULES --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#a7150b] p-4 text-white flex items-center gap-3">
              <Clock className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">நேரம் & டோக்கன் விதிமுறைகள்</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                  <h3 className="font-bold text-[#a7150b] mb-2">நேரங்கள்</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>G-SHED:</strong> இரவு 6 மணிக்கு அடைக்கப்படும்.</li>
                    <li>• <strong>QLINE Entrance:</strong> இரவு 7.30 மணி வரை திறந்திருக்கும்.</li>
                    <li>• <strong>கருவறை:</strong> இரவு 8 மணிக்கு நடை சார்த்தப்படும்.</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-800 mb-2">டோக்கன் செல்லுபடி</h3>
                  <p className="text-sm">
                    இன்றைய தேதியில் பெறப்பட்ட டோக்கன் <strong>இன்று மட்டுமே</strong> செல்லும். பழைய டோக்கன்கள் அல்லது நாளைக்கான முன்பதிவு டோக்கன்கள் இன்று செல்லாது.
                  </p>
                </div>
              </div>
              
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  இருமுடி செலுத்த வரும் அனைவரும் (குழந்தைகள், முதியோர் உட்பட) தனித்தனியாக டோக்கன் பெற்றிருக்க வேண்டும்.
                </li>
                <li>
                  டோக்கனை கசக்கவோ, கிழிக்கவோ, நனைக்கவோ கூடாது. சேதமடைந்தால் புதிய டோக்கன் வாங்க வேண்டும்.
                </li>
                <li>
                  குடும்பத்தினர் அல்லது குழுவினரின் டோக்கனை ஒரே நபர் வைத்திருக்கக் கூடாது. ஒவ்வொருவரும் தங்கள் டோக்கனை கையில் வைத்திருக்க வேண்டும்.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 3. DRESS CODE & ITEMS --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-orange-500 p-4 text-white flex items-center gap-3">
              <Shirt className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">ஆடை & இருமுடி விபரம்</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  அனைவரும் <strong>செவ்வாடை</strong> அல்லது குரு சக்தி அணியக்கூடிய <strong>ஆரஞ்சு</strong> நிற ஆடை மட்டுமே அணிய வேண்டும். வேறு வண்ண ஆடைகள் தவிர்க்கப்பட வேண்டும்.
                </li>
                <li>
                  ஆலயத்தில் அனுமதிக்கப்பட்ட இருமுடி பை மற்றும் சக்திமாலை மட்டுமே அணிய வேண்டும்.
                </li>
                <li>
                  இருமுடி டோக்கன் மற்றும் உணவு டோக்கன் இரண்டையும் தனித்தனியாக பிரித்து வைத்திருக்க வேண்டும்.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 4. SAFETY & GENERAL INSTRUCTIONS --- */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-green-600 p-4 text-white flex items-center gap-3">
              <ShieldCheck className="w-6 h-6" />
              <h2 className="text-lg font-bold font-tamil">பாதுகாப்பு & பொது அறிவுரைகள்</h2>
            </div>
            <div className="p-6 space-y-4 text-gray-700 leading-relaxed font-tamil">
              
              {/* Special Queue Info */}
              <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg text-green-800 text-sm mb-4">
                <Users className="w-5 h-5 mt-0.5 shrink-0" />
                <p>
                  <strong>மாற்றுத்திறனாளிகள் / முதியோர்:</strong> கேட்-3 (Gate-3) வழியாக செல்லலாம். வீல் சேர் (Wheel Chair) தேவைப்படுவோர் கேட்-10 செக்யூரிட்டியை அணுகவும்.
                </p>
              </div>

              <ul className="list-disc list-outside ml-5 space-y-3">
                <li>
                  சித்தர்பீடத்தில் இரவு நேர தங்குதல் தவிர்க்கப்பட வேண்டும்.
                </li>
                <li>
                  இருமுடி செலுத்திய பின் சுற்றுலா செல்லாமல் ஊர் திரும்ப வேண்டும்.
                </li>
                <li>
                  ஏரி, குளம், கடல் போன்ற நீர்நிலைகளில் இறங்க வேண்டாம்.
                </li>
                <li>
                  குழந்தைகள்/பெரியவர்கள் தொலைந்து போவதை தவிர்க்க, மன்ற பொறுப்பாளரின் போன் நம்பர் கொண்ட <strong>அடையாள அட்டை (ID Card)</strong> அணிவது அவசியம்.
                </li>
                <li>
                  உடமைப் பொருட்களுக்கு (நகை, பணம், செல்போன்) பக்தர்களே பொறுப்பு.
                </li>
              </ul>
            </div>
          </motion.div>

          {/* --- 5. WARNINGS --- */}
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
            <p className="font-bold text-[#a7150b] text-lg font-tamil">ஓம் சக்தி!</p>
          </div>

        </motion.div>
      </div>
    </PageTemplate>
  );
}