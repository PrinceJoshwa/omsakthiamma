// 'use client';

// import React from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import { motion } from 'framer-motion';
// import { 
//   Sparkles, 
//   Heart, 
//   ShoppingBag, 
//   Flame, 
//   Sun, 
//   Moon, 
//   AlertCircle, 
//   CheckCircle2, 
//   Leaf, 
//   Droplets 
// } from 'lucide-react';

// export default function IrumudiSpiritualPage() {
  
//   // Animation Variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   // Data: Irumudi Items (Front Bag)
//   const irumudiItems = [
//     { id: 1, ta: "தேங்காய்", en: "Coconut" },
//     { id: 2, ta: "கற்பூரம்", en: "Camphor" },
//     { id: 3, ta: "மஞ்சள்", en: "Turmeric" },
//     { id: 4, ta: "குங்குமம்", en: "Kumkum" },
//     { id: 5, ta: "ஊதுபத்தி", en: "Incense Sticks" },
//     { id: 6, ta: "எலுமிச்சம்பழம்", en: "Lemon" },
//     { id: 7, ta: "கதம்பப்பொடி / அபிஷேகத்தூள்", en: "Abhishekam Powder" },
//     { id: 8, ta: "பன்னீர்", en: "Rose Water" },
//     { id: 9, ta: "சந்தனம்", en: "Sandalwood Paste" },
//     { id: 10, ta: "டைமண்ட் கல்கண்டு", en: "Diamond Sugar Candy" },
//     { id: 11, ta: "சாம்பிராணி", en: "Sambrani" },
//     { id: 12, ta: "மெழுகுவர்த்தி", en: "Candle" },
//     { id: 13, ta: "நல்லெண்ணெய் / நெய்", en: "Gingelly Oil / Ghee" },
//   ];

//   // Data: Benefits
//   const benefits = [
//     "உடல்நலமின்றி கஷ்டப்படுபவர்கள் உடல்நலம் பெறுவர் (Relief from chronic illness)",
//     "ஊழ்வினை அறுந்து மன அமைதியும், உறுதியும் பெறுவர் (Mental peace and removal of karma)",
//     "தடைபட்ட திருமணங்கள் தடைநீங்கி திருமணம் கூடும் (Removal of marriage obstacles)",
//     "குழந்தைப்பேறு இல்லாதவர்கட்கு மகப்பேறு கிடைக்கும் (Blessing of child for childless couples)",
//     "கல்வி, அறிவு, மேன்மைகள் பெருகும் (Growth in education and wisdom)",
//     "வேலையின்றி அவதிப்படுபவர்க்கு வேலை வாய்ப்பு கிடைக்கும் (Employment opportunities)",
//     "வியாபாரிகளுக்கு வாணிபம் பெருகி நியாயமான லாபம் கிடைக்கும் (Business growth)",
//     "விவசாயிகளுக்கு வளம் பெருகும் (Prosperity in agriculture)",
//     "குடும்பத்தொல்லைகள் தீர்ந்து மன அமைதி, செல்வச் செழிப்பையும் பெறுவர் (Family harmony and wealth)",
//     "நம்மைத் தீயவர்களிடமிருந்து காப்பாற்றி நல்லொழுக்கத்தோடு வாழ வழி கிடைக்கும் (Protection from evil)",
//     "எந்த நியாயமான கோரிக்கையும் நிறைவேறும் (Fulfillment of righteous wishes)"
//   ];

//   // Data: Fasting Rules
//   const fastingRules = [
//     "வயது வரம்பின்றி, சாதி மத பேதமின்றி அனைவரும் மாலை அணியலாம்.",
//     "5 அல்லது 3 நாட்கள் விரதம் இருந்து பிறகு இருமுடி செலுத்த வேண்டும்.",
//     "விரத நாட்களில் சிகப்பு நிற ஆடை உடுத்த வேண்டும்.",
//     "விரத நாட்களில் ஒரு வேளை உணவைத் தவிர்க்க வேண்டும்.",
//     "காலை, மாலை இருவேளைகளிலும் நீராடி அன்னையை வழிபட வேண்டும்.",
//     "லாகிரி, போதை வஸ்துக்களைத் (Intoxicants) தவிர்க்க வேண்டும்.",
//     "வழக்கமான படுக்கை வசதிகளைத் தவிர்த்து செவ்வாடை/மஞ்சளாடை விரித்து உறங்க வேண்டும்.",
//     "சினிமா, கேளிக்கைகளைத் தவிர்த்து அன்னையின் நினைவில் இருக்க வேண்டும்.",
//     "9 முறை இருமுடி செலுத்தியவர்கள் மஞ்சள், சிகப்பு கலந்த ஆரஞ்சு நிற ஆடை அணியலாம்."
//   ];

//   return (
//     <PageTemplate 
//       title="The Sacred Irumudi" 
//       subtitle="இன்னல் தணிக்கும் இருமுடி - விரத முறைகள் மற்றும் பலன்கள்"
//     >
//       <div className="min-h-screen bg-[#fffbf0] font-sans">
        
//         {/* --- Hero Intro Section --- */}
//         <div className="relative bg-[#a7150b] text-white py-16 px-4 overflow-hidden">
//           <div className="absolute inset-0 opacity-10 pattern-bg"></div>
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="max-w-4xl mx-auto text-center relative z-10"
//           >
//             <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
//             <h1 className="text-3xl md:text-5xl font-bold font-tamil mb-6 leading-tight">
//               "இருமுடி என்பது <span className="text-yellow-400">இருள்முடி</span>"
//             </h1>
//             <p className="text-lg md:text-xl leading-relaxed opacity-90 font-tamil max-w-3xl mx-auto">
//               இதயத்தில் உள்ள இருளைப்போக்க அணியும் முடி என்று பொருள். மனிதனின் அகமும் புறமும் ஒன்றாக இருக்க வேண்டும் என்பதையே இருமுடி குறிக்கிறது.
//             </p>
//             <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
//               <p className="text-sm md:text-base font-medium">
//                 "Inner Darkness Removal & Divine Union"
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

//           {/* --- 1. THE 13 SACRED ITEMS (Grid) --- */}
//           <motion.section 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//             <div className="text-center mb-12">
//               <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">The Offering</span>
//               <h2 className="text-3xl font-bold text-gray-800 mt-2 font-tamil">இருமுடி பையில் இருக்க வேண்டியவை</h2>
//               <p className="text-gray-600 mt-2">The 13 Sacred Items for the Front Bag (Mun Kattu)</p>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//               {irumudiItems.map((item) => (
//                 <motion.div 
//                   key={item.id}
//                   variants={itemVariants}
//                   className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
//                 >
//                   <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#a7150b] font-bold mb-3 group-hover:bg-[#a7150b] group-hover:text-white transition-colors">
//                     {item.id}
//                   </div>
//                   <h3 className="font-bold text-gray-800 font-tamil text-lg mb-1">{item.ta}</h3>
//                   <p className="text-xs text-gray-500 uppercase tracking-wide">{item.en}</p>
//                 </motion.div>
//               ))}
              
//               {/* Back Bag Special Card */}
//               <motion.div variants={itemVariants} className="bg-[#a7150b] p-6 rounded-xl shadow-md text-white flex flex-col items-center text-center col-span-2 md:col-span-1 lg:col-span-1">
//                 <ShoppingBag className="w-10 h-10 mb-3 text-yellow-400" />
//                 <h3 className="font-bold font-tamil text-lg mb-1">பின் கட்டு (Back Bag)</h3>
//                 <p className="text-xs text-white/80 uppercase tracking-wide mb-2">For Annadhanam</p>
//                 <p className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full">
//                   1 Kg Raw Rice + Offering
//                 </p>
//               </motion.div>
//             </div>
//           </motion.section>

//           {/* --- 2. BENEFITS SECTION (List) --- */}
//           <motion.section 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
//           >
//             <div className="grid md:grid-cols-2">
//               <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 flex flex-col justify-center">
//                 <Heart className="w-12 h-12 text-[#a7150b] mb-6" />
//                 <h2 className="text-3xl font-bold text-gray-800 font-tamil mb-4">
//                   இருமுடி செலுத்துவதால் ஏற்படும் நன்மைகள்
//                 </h2>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   "When you wear the Sakthi Malai with a true heart and surrender to Amma, miracles happen."
//                 </p>
//                 <div className="bg-white/60 p-6 rounded-xl border border-orange-100 italic text-gray-700 font-tamil">
//                   "கிடைக்கின்ற வாய்ப்பையும், கொடுக்கின்ற வாய்ப்பையும் நழுவ விடாதே" <br/>
//                   <span className="text-sm text-[#a7150b] font-bold mt-2 block">- அன்னை அருள்வாக்கு</span>
//                 </div>
//               </div>

//               <div className="p-10 bg-white">
//                 <ul className="space-y-4">
//                   {benefits.map((benefit, idx) => (
//                     <motion.li 
//                       key={idx}
//                       initial={{ opacity: 0, x: 20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.05 }}
//                       viewport={{ once: true }}
//                       className="flex gap-4 items-start"
//                     >
//                       <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 font-tamil leading-relaxed text-sm md:text-base">
//                         {benefit}
//                       </span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </motion.section>

//           {/* --- 3. FASTING RULES (Cards) --- */}
//           <motion.section 
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//           >
//              <div className="text-center mb-12">
//               <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">The Discipline</span>
//               <h2 className="text-3xl font-bold text-gray-800 mt-2 font-tamil">சக்தி மாலை விரத முறைகள்</h2>
//               <p className="text-gray-600 mt-2">Guidelines for the 3-5 Day Fasting Period</p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {/* Card 1: Basics */}
//               <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-red-500">
//                 <Flame className="w-8 h-8 text-red-500 mb-4" />
//                 <h3 className="font-bold text-lg mb-3">Basic Discipline</h3>
//                 <ul className="space-y-3 text-gray-600 text-sm font-tamil">
//                   <li className="flex gap-2"><span>•</span> 5 அல்லது 3 நாட்கள் விரதம் இருக்க வேண்டும்.</li>
//                   <li className="flex gap-2"><span>•</span> சிகப்பு நிற ஆடை மட்டுமே அணிய வேண்டும்.</li>
//                   <li className="flex gap-2"><span>•</span> ஒரு வேளை உணவைத் தவிர்க்க வேண்டும்.</li>
//                 </ul>
//               </motion.div>

//               {/* Card 2: Lifestyle */}
//               <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-yellow-500">
//                 <Sun className="w-8 h-8 text-yellow-500 mb-4" />
//                 <h3 className="font-bold text-lg mb-3">Daily Routine</h3>
//                 <ul className="space-y-3 text-gray-600 text-sm font-tamil">
//                   <li className="flex gap-2"><span>•</span> காலை, மாலை இருவேளைகளிலும் நீராடி வழிபட வேண்டும்.</li>
//                   <li className="flex gap-2"><span>•</span> படுக்கை வசதிகளைத் தவிர்த்து தரையில் துணி விரித்து உறங்க வேண்டும்.</li>
//                   <li className="flex gap-2"><span>•</span> சினிமா, டிவி, கேளிக்கைகளைத் தவிர்க்க வேண்டும்.</li>
//                 </ul>
//               </motion.div>

//               {/* Card 3: Purity */}
//               <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green-500">
//                 <Leaf className="w-8 h-8 text-green-500 mb-4" />
//                 <h3 className="font-bold text-lg mb-3">Inner Purity</h3>
//                 <ul className="space-y-3 text-gray-600 text-sm font-tamil">
//                   <li className="flex gap-2"><span>•</span> லாகிரி மற்றும் போதை வஸ்துக்களைத் முழுமையாக தவிர்க்க வேண்டும்.</li>
//                   <li className="flex gap-2"><span>•</span> பெண்களின் மாதவிலக்கு இத்திருத்தலத்தில் தடையல்ல.</li>
//                   <li className="flex gap-2"><span>•</span> ஐம்புலன்களையும் அடக்கி அன்னையை மட்டுமே நினைக்க வேண்டும்.</li>
//                 </ul>
//               </motion.div>
//             </div>
//           </motion.section>

//           {/* --- 4. DIVINE CONTRIBUTION (Annadhanam) --- */}
//           <div className="bg-[#a7150b] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
//             <div className="relative z-10 max-w-3xl mx-auto space-y-6">
//               <Droplets className="w-12 h-12 text-yellow-400 mx-auto" />
//               <h2 className="text-2xl md:text-3xl font-bold font-tamil">
//                 "பெருமை பணத்தால் இல்லை; அன்பாலும், தொண்டாலும் வருவதே பெருமை!"
//               </h2>
//               <p className="text-white/90 leading-relaxed font-tamil">
//                 கருவறைக்குள் சென்று சுயம்பாக உள்ள அன்னைக்கு நீங்களே அபிஷேகம் செய்யும் பாக்கியம் இங்கு மட்டுமே கிடைக்கிறது. நீங்கள் கொண்டு வரும் அரிசி லட்சக்கணக்கான பக்தர்களின் அன்னதானத்திற்கு பயன்படுகிறது. இதுவே மிகப்பெரிய புண்ணியம்.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </PageTemplate>
//   );
// }

'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  ShoppingBag, 
  Flame, 
  Sun, 
  AlertCircle, 
  CheckCircle2, 
  Leaf, 
  Droplets,
  Star,
  Users,
  Moon,
  Tv
} from 'lucide-react';

export default function IrumudiSpiritualPage() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // 13 Items for Front Bag
  const irumudiItems = [
    { id: 1, name: "தேங்காய்" },
    { id: 2, name: "கற்பூரம்" },
    { id: 3, name: "மஞ்சள்" },
    { id: 4, name: "குங்குமம்" },
    { id: 5, name: "ஊதுபத்தி" },
    { id: 6, name: "எலுமிச்சம்பழம்" },
    { id: 7, name: "கதம்பப்பொடி / அபிஷேகத்தூள்" },
    { id: 8, name: "பன்னீர்" },
    { id: 9, name: "சந்தனம்" },
    { id: 10, name: "டைமண்ட் கல்கண்டு" },
    { id: 11, name: "சாம்பிராணி" },
    { id: 12, name: "மெழுகுவர்த்தி" },
    { id: 13, name: "நல்லெண்ணெய் / நெய்" },
  ];

  // 11 Benefits
  const benefits = [
    "உடல்நலமின்றி கஷ்டப்படுபவர்கள் உடல்நலம் பெறுவர்.",
    "ஊழ்வினை அறுந்து மன அமைதியும், உறுதியும் பெறுவர்.",
    "தடைபட்ட திருமணங்கள் தடைநீங்கி திருமணம் கூடும்.",
    "குழந்தைப்பேறு இல்லாதவர்கட்கு மகப்பேறு கிடைக்கும்.",
    "கல்வி, அறிவு, மேன்மைகள் பெருகும்.",
    "வேலையின்றி அவதிப்படுபவர்க்கு வேலை வாய்ப்பு, பதவி உயர்வு கிடைக்கும்.",
    "வியாபாரிகளுக்கு வாணிபம் பெருகி நியாயமான லாபம் கிடைக்கும்.",
    "விவசாயிகளுக்கு வளம் பெருகும்.",
    "குடும்பத்தொல்லைகள் தீர்ந்து மன அமைதி, செல்வச் செழிப்பையும் பெறுவர்.",
    "நம்மைத் தீயவர்களிடமிருந்து காப்பாற்றி நல்லொழுக்கத்தோடு வாழ வழி கிடைக்கும்.",
    "பக்தியிலே இணைந்து ஆன்மிகத்திலே ஈடுபாடு உண்டாகும் மற்றும் நியாயமான கோரிக்கைகள் நிறைவேறும்."
  ];

  // 11 Fasting Rules
  const fastingRules = [
    { text: "வயது வரம்பின்றி குடும்பத்தில் உள்ள அனைவரும் (ஆடவர், மகளிர், சிறுவர்) சக்திமாலை அணிந்து இருமுடி செலுத்தலாம்.", icon: <Users className="w-5 h-5 text-blue-500"/> },
    { text: "எந்த மதத்தினரும் மாலை அணிந்து இருமுடி எடுக்கலாம்.", icon: <Heart className="w-5 h-5 text-red-500"/> },
    { text: "உங்கள் பகுதியில் உள்ள ஆதிபராசக்தி வார வழிபாட்டு மன்றத்திற்குச் சென்று சக்திமாலை அணிந்து இருமுடி எடுக்க வேண்டும்.", icon: <Star className="w-5 h-5 text-yellow-500"/> },
    { text: "சக்தி மாலை அணியும் பக்தர்கள் 5 அல்லது 3 நாட்கள் விரதம் இருந்து பிறகு இருமுடி செலுத்த வேண்டும்.", icon: <Sun className="w-5 h-5 text-orange-500"/> },
    { text: "விரத நாட்களில் சிகப்பு நிற ஆடை உடுத்த வேண்டும்.", icon: <Heart className="w-5 h-5 text-red-600"/> },
    { text: "விரத நாட்களில் ஒரு வேளை உணவைத் தவிர்க்க வேண்டும்.", icon: <Leaf className="w-5 h-5 text-green-500"/> },
    { text: "காலை, மாலை இருவேளைகளிலும் நீராடி அன்னையை வழிபடுதல் வேண்டும்.", icon: <Droplets className="w-5 h-5 text-blue-400"/> },
    { text: "விரத நாட்களில் லாகிரி, போதை வஸ்துக்களைத் தவிர்க்க வேண்டும்.", icon: <AlertCircle className="w-5 h-5 text-red-700"/> },
    { text: "உறங்கும்போது வழக்கமாக படுக்கை வசதிகளைத் தவிர்த்து செவ்வாடை அல்லது மஞ்சளாடை விரித்து அதன் மேல் உறங்க வேண்டும்.", icon: <Moon className="w-5 h-5 text-indigo-500"/> },
    { text: "டி.வி, சினிமா, கிளப் போன்ற கேளிக்கைகளைத் தவிர்த்து ஐம்புலன்களையும் அடக்கி, அன்னையின் திருநாமத்தை நினைவில் நிறுத்த வேண்டும்.", icon: <Tv className="w-5 h-5 text-gray-500"/> },
    { text: "ஒன்பது முறை இருமுடி செலுத்தியவர்கள் மஞ்சள், சிகப்பு கலந்த ஆரஞ்சு நிறத்தில் உள்ள ஆடைகளையே அணிந்து வரவேண்டும்.", icon: <Flame className="w-5 h-5 text-orange-600"/> }
  ];

  return (
    <PageTemplate 
      title="இன்னல் தணிக்கும் இருமுடி" 
      subtitle="விரத முறைகள், பொருட்கள் மற்றும் ஆன்மீக பலன்கள்"
    >
      <div className="min-h-screen bg-[#fffbf0] font-sans">
        
        {/* --- Hero Intro Section --- */}
        <div className="relative bg-[#a7150b] text-white py-16 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-bg"></div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl font-bold font-tamil mb-6 leading-tight">
              "இருமுடி என்பது <span className="text-yellow-400">இருள்முடி</span>"
            </h1>
            <p className="text-lg md:text-xl opacity-90 font-tamil max-w-3xl mx-auto leading-loose text-justify md:text-center">
              இதயத்தில் உள்ள இருளைப்போக்க அணியும் முடி என்று பொருள். கணவன்-மனைவி இருவரின் அகத்தோற்றத்தையும் முடிபோடுவது என்று பொருள்; மற்றும் மனிதனின் அகமும் புறமும் ஒன்றாக இருக்க வேண்டும் என்பதையும் இருமுடி குறிக்கும்.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">

          {/* --- 1. DIVINE MESSAGE (Arulvakku) --- */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border-l-8 border-yellow-400"
          >
            <h2 className="text-2xl font-bold text-[#a7150b] font-tamil mb-6 flex items-center gap-3">
              <Sparkles className="w-6 h-6" />
              அன்னை ஆதிபராசக்தியின் அருள்வாக்கு
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700 font-tamil text-lg leading-relaxed">
              <div className="space-y-4 text-justify">
                <p>
                  "அன்னையை மனமுருக நினைத்து, தன் குறைகளுக்காக வேண்டி சக்தி மாலை அணிந்து முறைப்படி விரதமிருந்து மேல்மருவத்தூர் ஆலயம் வலம் வந்து அன்னையை சரணடைந்தால் நினைத்த பலன் அத்தனையும் நிறைவேறும்."
                </p>
                <p className="font-bold text-[#a7150b]">
                  "9 முறை சக்தி மாலை அணிந்தவர்களை எந்தவித தீய சக்தியும் அண்டாது."
                </p>
                <p className="text-sm bg-gray-50 p-3 rounded-lg border border-gray-200">
                  "பெருமை பணத்தால் இல்லை; அன்பாலும், தொண்டாலும் வருகின்ற பெருமையே பெருமை! அவற்றிற்குத்தான் பலனுண்டு."
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 flex flex-col justify-center">
                <h3 className="font-bold text-gray-800 mb-2 border-b border-orange-200 pb-2">மகளிருக்கு சிறப்பு அனுமதி</h3>
                <p className="italic text-justify">
                  "மாலை அணிந்து விரதம் இருந்து ஆலயம் வந்து திரும்புவதற்கு மகளிர்க்கு மாதவிலக்கு தடையல்ல. ஏற்றுக்கொள்பவள் நான்; மற்றவர்கள் தடையிட்டாலும் எனக்குத் தடையல்ல!"
                </p>
              </div>
            </div>
          </motion.section>

          {/* --- 2. THE 13 SACRED ITEMS --- */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">பூஜை பொருட்கள்</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 font-tamil">இருமுடி பையில் இருக்க வேண்டியவை</h2>
              <p className="text-gray-600 mt-2 font-tamil">முன்கட்டில் வைக்க வேண்டிய 13 பொருட்கள்</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {irumudiItems.map((item) => (
                <motion.div 
                  key={item.id}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#a7150b] font-bold mb-3 group-hover:bg-[#a7150b] group-hover:text-white transition-colors">
                    {item.id}
                  </div>
                  <h3 className="font-bold text-gray-800 font-tamil text-lg mb-1">{item.name}</h3>
                </motion.div>
              ))}
              
              {/* Back Bag Special Card */}
              <motion.div variants={itemVariants} className="bg-[#a7150b] p-6 rounded-xl shadow-md text-white flex flex-col items-center text-center col-span-2 md:col-span-1 lg:col-span-1">
                <ShoppingBag className="w-10 h-10 mb-3 text-yellow-400" />
                <h3 className="font-bold font-tamil text-lg mb-1">பின்கட்டு</h3>
                <p className="text-sm font-medium bg-black/20 px-3 py-1 rounded-full mt-2">
                  ஒரு கிலோ பச்சரிசி + காணிக்கை
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* --- 3. BENEFITS SECTION --- */}
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 flex flex-col justify-center">
                <Heart className="w-12 h-12 text-[#a7150b] mb-6" />
                <h2 className="text-3xl font-bold text-gray-800 font-tamil mb-4 leading-normal">
                  இருமுடி நன்மைகள்
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 font-tamil text-lg">
                  கோரிக்கை வைத்து சங்கல்பம் செய்து சக்தி மாலை அணிந்து உண்மை உணர்வுடன் இருமுடி செலுத்தினால் 11 வகையான நன்மைகள் கிட்டும்.
                </p>
                <div className="bg-white/60 p-6 rounded-xl border border-orange-100 italic text-gray-700 font-tamil">
                  "கிடைக்கின்ற வாய்ப்பையும், கொடுக்கின்ற வாய்ப்பையும் நழுவ விடாதே" <br/>
                  <span className="text-sm text-[#a7150b] font-bold mt-2 block">- அன்னை அருள்வாக்கு</span>
                </div>
              </div>

              <div className="p-10 bg-white">
                <ul className="space-y-5">
                  {benefits.map((benefit, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-tamil leading-relaxed text-base md:text-lg">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* --- 4. FASTING RULES --- */}
          <motion.section 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
             <div className="text-center mb-12">
              <span className="text-[#a7150b] font-bold tracking-widest uppercase text-sm">விரத முறை</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 font-tamil">சக்தி மாலை விரத முறைகள்</h2>
              <p className="text-gray-600 mt-2 font-tamil">கடைபிடிக்க வேண்டிய 11 விதிமுறைகள்</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fastingRules.map((rule, idx) => (
                 <motion.div 
                    key={idx}
                    variants={itemVariants} 
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors"
                 >
                    <div className="mb-4">{rule.icon}</div>
                    <p className="text-gray-700 font-tamil leading-relaxed text-justify">{rule.text}</p>
                 </motion.div>
              ))}
            </div>
          </motion.section>

          {/* --- 5. CHARITY & CONCLUSION --- */}
          <div className="bg-[#a7150b] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto space-y-6">
              <Droplets className="w-12 h-12 text-yellow-400 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold font-tamil leading-relaxed">
                அன்னதானப் புண்ணியம்
              </h2>
              <p className="text-white/90 leading-relaxed font-tamil text-lg text-justify md:text-center">
                நாம் எடுத்துச் செல்லும் அரிசி அன்னதானத்திற்கு உதவுவதால் அன்னதானப் புண்ணியம் கிட்டுகிறது. 
                அதேபோல் நாம் செலுத்தும் காணிக்கை அறநிலையின் சார்பாக செய்யப்படும் பல்வேறு மருத்துவ, கல்வி, சமுதாயப் பணிகளுக்குப் பயன்படுவதால் அந்தப் புண்ணியமும் நமக்குக் கிட்டுகிறது.
              </p>
            </div>
          </div>

        </div>
      </div>
    </PageTemplate>
  );
}