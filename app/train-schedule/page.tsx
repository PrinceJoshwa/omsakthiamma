// "use client";

// import React, { useState } from "react";
// import PageTemplate from "@/components/PageTemplate";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, TrainFront, Clock, CalendarDays, MapPin } from "lucide-react";

// // Full data from your Railway Image
// const trainData = [
//   { no: "16368", name: "Kashi Tamil Sangamam - Kanyakumari Exp", days: "Tuesday Only", time: "07:20 AM", type: "Express" },
//   { no: "22536", name: "Varanasi - Rameswaram Express", days: "Tuesday Only", time: "09:50 AM", type: "Express" },
//   { no: "20849", name: "Bhubaneswar - Rameswaram Express", days: "Saturday Only", time: "09:50 AM", type: "Express" },
//   { no: "20851", name: "Bhubaneswar - Puducherry Express", days: "Wednesday Only", time: "09:50 AM", type: "Express" },
//   { no: "22673", name: "Jodhpur - Mannargudi Express", days: "Saturday Only", time: "11:05 AM", type: "Express" },
//   { no: "20481", name: "Bhagat Ki Kothi - Trichy Express", days: "Friday Only", time: "11:05 AM", type: "Express" },
//   { no: "22404", name: "New Delhi - Puducherry Express", days: "Tuesday Only", time: "11:05 AM", type: "Express" },
//   { no: "20498", name: "Firozpur Cantonment - Rameswaram Exp", days: "Monday Only", time: "11:05 AM", type: "Express" },
//   { no: "22101", name: "Mumbai LTT - Madurai Express", days: "Thursday Only", time: "11:25 AM", type: "Express" },
//   { no: "22632", name: "Bikaner - Madurai Express", days: "Tuesday Only", time: "11:25 AM", type: "Express" },
//   { no: "11017", name: "Mumbai LTT - Karaikal Express", days: "Sunday Only", time: "12:45 PM", type: "Express" },
//   { no: "12635", name: "Chennai Egmore - Madurai Vaigai Exp", days: "Daily", time: "03:05 PM", type: "Superfast" },
//   { no: "22614", name: "Ayodhya Cantt - Rameswaram Exp", days: "Friday Only", time: "03:15 PM", type: "Express" },
//   { no: "12652", name: "Delhi Nizamuddin - Madurai Sampark Kranti", days: "Wed, Fri", time: "05:35 PM", type: "Express" },
//   { no: "12642", name: "Delhi Nizamuddin - Kanyakumari Thirukkural", days: "Tue, Sun", time: "05:35 PM", type: "Express" },
//   { no: "16101", name: "Chennai Egmore - Kollam Express", days: "Daily", time: "06:25 PM", type: "Express" },
//   { no: "16103", name: "Tambaram - Rameswaram Boat Mail", days: "Daily", time: "07:05 PM", type: "Express" },
//   { no: "12667", name: "Chennai Egmore - Nagercoil Exp", days: "Thursday Only", time: "08:25 PM", type: "Express" },
//   { no: "22657", name: "Tambaram - Nagercoil Express", days: "Sun, Mon, Wed", time: "08:25 PM", type: "Express" },
//   { no: "12661", name: "Chennai Egmore - Sengottai Pothigai Exp", days: "Daily", time: "09:35 PM", type: "Superfast" },
//   { no: "20683", name: "Tambaram - Sengottai Express", days: "Sun, Tue, Thu", time: "09:55 PM", type: "Express" },
//   { no: "12637", name: "Chennai Egmore - Madurai Pandian Exp", days: "Daily", time: "10:05 PM", type: "Superfast" },
//   { no: "22623", name: "Chennai Egmore - Madurai Mahal Exp", days: "Fri, Sun", time: "11:25 PM", type: "Express" },
//   { no: "20691", name: "Tambaram - Nagercoil Antyodaya Exp", days: "Daily", time: "11:35 PM", type: "Antyodaya" },
//   { no: "16865", name: "Chennai Egmore - Thanjavur Uzhavan Exp", days: "Daily", time: "11:55 PM", type: "Express" },
//   { no: "16179", name: "Chennai Egmore - Mannargudi Mannai Exp", days: "Daily", time: "12:20 AM", type: "Express" },
//   { no: "12653", name: "Chennai Egmore - Trichy Rockfort Exp", days: "Daily", time: "12:50 AM", type: "Superfast" },
//   { no: "22153", name: "Chennai Egmore - Salem Express", days: "Daily", time: "01:15 AM", type: "Express" },
// ];

// export default function TrainSchedulePage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredTrains = trainData.filter(train => 
//     train.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     train.no.includes(searchTerm) ||
//     train.days.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <PageTemplate
//       title="Special Train Schedule"
//       subtitle="Melmaruvathur Stoppages"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       hideFooter={true}    >
//       <div className="min-h-screen bg-gray-50 pb-20">
        
//         {/* Header Banner */}
//         <div className="bg-blue-600 text-white px-4 py-12 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4">Irumudi Festival Special Stops</h1>
//             <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30">
//               <CalendarDays className="w-4 h-4" />
//               <span className="text-sm font-bold">15 Dec 2025 - 02 Feb 2026</span>
//             </div>
//             <p className="text-blue-100 max-w-2xl mx-auto">
//               Complete list of Villupuram-bound trains with temporary stoppage at Melmaruvathur Railway Station.
//             </p>
//           </div>
//         </div>

//         {/* Search */}
//         <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
//           <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200 flex items-center">
//             <div className="p-3 text-gray-400">
//               <Search className="w-6 h-6" />
//             </div>
//             <input 
//               type="text" 
//               placeholder="Search train (e.g. 'Pandian', 'Sunday', '12637')..." 
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full p-3 outline-none text-gray-700 font-medium bg-transparent"
//             />
//           </div>
//         </div>

//         {/* List */}
//         <div className="max-w-5xl mx-auto px-4 mt-12">
//           <div className="grid md:grid-cols-2 gap-4">
//             <AnimatePresence>
//               {filteredTrains.map((train, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <div className="bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded text-sm">
//                       #{train.no}
//                     </div>
//                     <div className="flex items-center gap-1.5 text-[#a7150b] font-bold bg-red-50 px-2 py-1 rounded text-sm">
//                       <Clock className="w-3.5 h-3.5" />
//                       {train.time}
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-800 mb-2">{train.name}</h3>
//                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
//                     <MapPin className="w-4 h-4" />
//                     <span>Melmaruvathur Stoppage</span>
//                   </div>
//                   <div className="border-t border-gray-100 pt-3 flex justify-between text-xs font-bold uppercase">
//                      <span className={train.days.includes("Daily") ? "text-green-600" : "text-gray-500"}>{train.days}</span>
//                      <span className="text-blue-600">{train.type}</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>
//       </div>
//     </PageTemplate>
//   );
// }

"use client";

import React, { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion, AnimatePresence } from "framer-motion";
import { Search, TrainFront, Clock, CalendarDays, MapPin } from "lucide-react";

// Same Data Structure
const trainData = [
  { no: "16368", name: "Kashi Tamil Sangamam - Kanyakumari Exp", nameTamil: "காசி தமிழ் சங்கமம் - கன்னியாகுமரி விரைவு வண்டி", time: "07:20 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
  { no: "22536", name: "Varanasi - Rameswaram Express", nameTamil: "வாரணாசி - ராமேஸ்வரம் விரைவு வண்டி", time: "09:50 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
  { no: "20849", name: "Bhubaneswar - Rameswaram Express", nameTamil: "புவனேஷ்வர் - ராமேஸ்வரம் விரைவு வண்டி", time: "09:50 AM", days: "Sat Only", daysTamil: "சனி மட்டும்" },
  { no: "20851", name: "Bhubaneswar - Puducherry Express", nameTamil: "புவனேஷ்வர் - புதுச்சேரி விரைவு வண்டி", time: "09:50 AM", days: "Wed Only", daysTamil: "புதன் மட்டும்" },
  { no: "22673", name: "Jodhpur - Mannargudi Express", nameTamil: "ஜோத்பூர் - மன்னார்குடி விரைவு வண்டி", time: "11:05 AM", days: "Sat Only", daysTamil: "சனி மட்டும்" },
  { no: "20481", name: "Bhagat Ki Kothi - Trichy Express", nameTamil: "பகத்கோட்டி - திருச்சி விரைவு வண்டி", time: "11:05 AM", days: "Fri Only", daysTamil: "வெள்ளி மட்டும்" },
  { no: "22404", name: "New Delhi - Puducherry Express", nameTamil: "புதுடெல்லி - புதுச்சேரி விரைவு வண்டி", time: "11:05 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
  { no: "20498", name: "Firozpur Cantonment - Rameswaram Exp", nameTamil: "ஃபிரோஸ்பூர் கண்டோன்மென்ட் - ராமேஸ்வரம் விரைவு வண்டி", time: "11:05 AM", days: "Mon Only", daysTamil: "திங்கள் மட்டும்" },
  { no: "22101", name: "Mumbai LTT - Madurai Express", nameTamil: "மும்பை லோக்மான்ய திலக் - மதுரை விரைவு வண்டி", time: "11:25 AM", days: "Thu Only", daysTamil: "வியாழன் மட்டும்" },
  { no: "22632", name: "Bikaner - Madurai Express", nameTamil: "பிகானீர் - மதுரை விரைவு வண்டி", time: "11:25 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
  { no: "11017", name: "Mumbai LTT - Karaikal Express", nameTamil: "மும்பை லோக்மான்ய திலக் - காரைக்கால் விரைவு வண்டி", time: "12:45 PM", days: "Sun Only", daysTamil: "ஞாயிறு மட்டும்" },
  { no: "12635", name: "Chennai Egmore - Madurai Vaigai Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை வைகை விரைவு வண்டி", time: "03:05 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "22614", name: "Ayodhya Cantt - Rameswaram Exp", nameTamil: "அயோத்யா கண்டோன்மென்ட் - ராமேஸ்வரம் விரைவு வண்டி", time: "03:15 PM", days: "Fri Only", daysTamil: "வெள்ளி மட்டும்" },
  { no: "12652", name: "Delhi Nizamuddin - Madurai Sampark Kranti", nameTamil: "டெல்லி நிஜாமுதீன் - மதுரை சம்பர்க் கிராந்தி விரைவு வண்டி", time: "05:35 PM", days: "Wed, Fri", daysTamil: "புதன், வெள்ளி" },
  { no: "12642", name: "Delhi Nizamuddin - Kanyakumari Thirukkural", nameTamil: "டெல்லி நிஜாமுதீன் - கன்னியாகுமரி திருக்குறள் விரைவு வண்டி", time: "05:35 PM", days: "Tue, Sun", daysTamil: "செவ்வாய், ஞாயிறு" },
  { no: "16101", name: "Chennai Egmore - Kollam Express", nameTamil: "சென்னை எழும்பூர் - கொல்லம் விரைவு வண்டி", time: "06:25 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "16103", name: "Tambaram - Rameswaram Boat Mail", nameTamil: "தாம்பரம் - ராமேசுவரம் பாம்பன் விரைவு வண்டி", time: "07:05 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "12667", name: "Chennai Egmore - Nagercoil Exp", nameTamil: "சென்னை எழும்பூர் - நாகர்கோவில் விரைவு வண்டி", time: "08:25 PM", days: "Thu Only", daysTamil: "வியாழன் மட்டும்" },
  { no: "22657", name: "Tambaram - Nagercoil Express", nameTamil: "தாம்பரம் - நாகர்கோவில் விரைவு வண்டி", time: "08:25 PM", days: "Sun, Mon, Wed", daysTamil: "ஞா, திங்கள், புதன்" },
  { no: "12661", name: "Chennai Egmore - Sengottai Pothigai Exp", nameTamil: "சென்னை எழும்பூர் - செங்கோட்டை பொதிகை விரைவு வண்டி", time: "09:35 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "20683", name: "Tambaram - Sengottai Express", nameTamil: "தாம்பரம் - செங்கோட்டை விரைவு வண்டி", time: "09:55 PM", days: "Sun, Tue, Thu", daysTamil: "ஞா, செவ், வியா" },
  { no: "12637", name: "Chennai Egmore - Madurai Pandian Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை பாண்டியன் விரைவு வண்டி", time: "10:05 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "22623", name: "Chennai Egmore - Madurai Mahal Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை மகால் விரைவு வண்டி", time: "11:25 PM", days: "Fri, Sun", daysTamil: "வெள்ளி, ஞாயிறு" },
  { no: "20691", name: "Tambaram - Nagercoil Antyodaya Exp", nameTamil: "தாம்பரம் - நாகர்கோவில் அந்தியோதயா விரைவு வண்டி", time: "11:35 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "16865", name: "Chennai Egmore - Thanjavur Uzhavan Exp", nameTamil: "சென்னை எழும்பூர் - தஞ்சாவூர் உழவன் விரைவு வண்டி", time: "11:55 PM", days: "Daily", daysTamil: "தினசரி" },
  { no: "16179", name: "Chennai Egmore - Mannargudi Mannai Exp", nameTamil: "சென்னை எழும்பூர் - மன்னார்குடி மன்னை விரைவு வண்டி", time: "12:20 AM", days: "Daily", daysTamil: "தினசரி" },
  { no: "12653", name: "Chennai Egmore - Trichy Rockfort Exp", nameTamil: "சென்னை எழும்பூர் - திருச்சி மலைக்கோட்டை விரைவு வண்டி", time: "12:50 AM", days: "Daily", daysTamil: "தினசரி" },
  { no: "22153", name: "Chennai Egmore - Salem Express", nameTamil: "சென்னை எழும்பூர் - சேலம் விரைவு வண்டி", time: "01:15 AM", days: "Daily", daysTamil: "தினசரி" },
];

export default function TrainSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTrains = trainData.filter(train => 
    train.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    train.nameTamil.includes(searchTerm) ||
    train.no.includes(searchTerm)
  );

  return (
    <PageTemplate
      title="Special Train Schedule"
      subtitle="Melmaruvathur Stoppages"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}    >
      <div className="min-h-screen bg-gray-50 pb-20">
        
        {/* Header Banner */}
        <div className="bg-blue-600 text-white px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Irumudi Festival Special Stops</h1>
            <h2 className="text-xl font-bold mb-4 opacity-90 font-tamil">இருமுடி திருவிழா சிறப்பு ரயில் நிறுத்தம்</h2>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30">
              <CalendarDays className="w-4 h-4" />
              <span className="text-sm font-bold">15 Dec 2025 - 02 Feb 2026</span>
            </div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Complete list of Villupuram-bound trains with temporary stoppage at Melmaruvathur Railway Station.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200 flex items-center">
            <div className="p-3 text-gray-400">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Search train (e.g. 'Pandian', 'மதுரை', '12637')..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 outline-none text-gray-700 font-medium bg-transparent"
            />
          </div>
        </div>

        {/* List */}
        <div className="max-w-5xl mx-auto px-4 mt-12">
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredTrains.map((train, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded text-sm">
                      #{train.no}
                    </div>
                    <div className="flex items-center gap-1.5 text-[#a7150b] font-bold bg-red-50 px-2 py-1 rounded text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {train.time}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{train.name}</h3>
                  <h4 className="text-sm font-semibold text-gray-600 mb-2 font-tamil">{train.nameTamil}</h4>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>Melmaruvathur Stoppage</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between text-xs font-bold uppercase">
                     <div>
                        <span className={train.days.includes("Daily") ? "text-green-600" : "text-gray-500"}>{train.days}</span>
                        <span className="text-gray-400 mx-1">/</span>
                        <span className="font-tamil text-gray-600">{train.daysTamil}</span>
                     </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}