// // "use client";

// // import React, { useState } from "react";
// // import PageTemplate from "@/components/PageTemplate";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { Search, TrainFront, Clock, CalendarDays, MapPin } from "lucide-react";

// // // Same Data Structure
// // const trainData = [
// //   { no: "16368", name: "Kashi Tamil Sangamam - Kanyakumari Exp", nameTamil: "காசி தமிழ் சங்கமம் - கன்னியாகுமரி விரைவு வண்டி", time: "07:20 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
// //   { no: "22536", name: "Varanasi - Rameswaram Express", nameTamil: "வாரணாசி - ராமேஸ்வரம் விரைவு வண்டி", time: "09:50 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
// //   { no: "20849", name: "Bhubaneswar - Rameswaram Express", nameTamil: "புவனேஷ்வர் - ராமேஸ்வரம் விரைவு வண்டி", time: "09:50 AM", days: "Sat Only", daysTamil: "சனி மட்டும்" },
// //   { no: "20851", name: "Bhubaneswar - Puducherry Express", nameTamil: "புவனேஷ்வர் - புதுச்சேரி விரைவு வண்டி", time: "09:50 AM", days: "Wed Only", daysTamil: "புதன் மட்டும்" },
// //   { no: "22673", name: "Jodhpur - Mannargudi Express", nameTamil: "ஜோத்பூர் - மன்னார்குடி விரைவு வண்டி", time: "11:05 AM", days: "Sat Only", daysTamil: "சனி மட்டும்" },
// //   { no: "20481", name: "Bhagat Ki Kothi - Trichy Express", nameTamil: "பகத்கோட்டி - திருச்சி விரைவு வண்டி", time: "11:05 AM", days: "Fri Only", daysTamil: "வெள்ளி மட்டும்" },
// //   { no: "22404", name: "New Delhi - Puducherry Express", nameTamil: "புதுடெல்லி - புதுச்சேரி விரைவு வண்டி", time: "11:05 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
// //   { no: "20498", name: "Firozpur Cantonment - Rameswaram Exp", nameTamil: "ஃபிரோஸ்பூர் கண்டோன்மென்ட் - ராமேஸ்வரம் விரைவு வண்டி", time: "11:05 AM", days: "Mon Only", daysTamil: "திங்கள் மட்டும்" },
// //   { no: "22101", name: "Mumbai LTT - Madurai Express", nameTamil: "மும்பை லோக்மான்ய திலக் - மதுரை விரைவு வண்டி", time: "11:25 AM", days: "Thu Only", daysTamil: "வியாழன் மட்டும்" },
// //   { no: "22632", name: "Bikaner - Madurai Express", nameTamil: "பிகானீர் - மதுரை விரைவு வண்டி", time: "11:25 AM", days: "Tue Only", daysTamil: "செவ்வாய் மட்டும்" },
// //   { no: "11017", name: "Mumbai LTT - Karaikal Express", nameTamil: "மும்பை லோக்மான்ய திலக் - காரைக்கால் விரைவு வண்டி", time: "12:45 PM", days: "Sun Only", daysTamil: "ஞாயிறு மட்டும்" },
// //   { no: "12635", name: "Chennai Egmore - Madurai Vaigai Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை வைகை விரைவு வண்டி", time: "03:05 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "22614", name: "Ayodhya Cantt - Rameswaram Exp", nameTamil: "அயோத்யா கண்டோன்மென்ட் - ராமேஸ்வரம் விரைவு வண்டி", time: "03:15 PM", days: "Fri Only", daysTamil: "வெள்ளி மட்டும்" },
// //   { no: "12652", name: "Delhi Nizamuddin - Madurai Sampark Kranti", nameTamil: "டெல்லி நிஜாமுதீன் - மதுரை சம்பர்க் கிராந்தி விரைவு வண்டி", time: "05:35 PM", days: "Wed, Fri", daysTamil: "புதன், வெள்ளி" },
// //   { no: "12642", name: "Delhi Nizamuddin - Kanyakumari Thirukkural", nameTamil: "டெல்லி நிஜாமுதீன் - கன்னியாகுமரி திருக்குறள் விரைவு வண்டி", time: "05:35 PM", days: "Tue, Sun", daysTamil: "செவ்வாய், ஞாயிறு" },
// //   { no: "16101", name: "Chennai Egmore - Kollam Express", nameTamil: "சென்னை எழும்பூர் - கொல்லம் விரைவு வண்டி", time: "06:25 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "16103", name: "Tambaram - Rameswaram Boat Mail", nameTamil: "தாம்பரம் - ராமேசுவரம் பாம்பன் விரைவு வண்டி", time: "07:05 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "12667", name: "Chennai Egmore - Nagercoil Exp", nameTamil: "சென்னை எழும்பூர் - நாகர்கோவில் விரைவு வண்டி", time: "08:25 PM", days: "Thu Only", daysTamil: "வியாழன் மட்டும்" },
// //   { no: "22657", name: "Tambaram - Nagercoil Express", nameTamil: "தாம்பரம் - நாகர்கோவில் விரைவு வண்டி", time: "08:25 PM", days: "Sun, Mon, Wed", daysTamil: "ஞா, திங்கள், புதன்" },
// //   { no: "12661", name: "Chennai Egmore - Sengottai Pothigai Exp", nameTamil: "சென்னை எழும்பூர் - செங்கோட்டை பொதிகை விரைவு வண்டி", time: "09:35 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "20683", name: "Tambaram - Sengottai Express", nameTamil: "தாம்பரம் - செங்கோட்டை விரைவு வண்டி", time: "09:55 PM", days: "Sun, Tue, Thu", daysTamil: "ஞா, செவ், வியா" },
// //   { no: "12637", name: "Chennai Egmore - Madurai Pandian Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை பாண்டியன் விரைவு வண்டி", time: "10:05 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "22623", name: "Chennai Egmore - Madurai Mahal Exp", nameTamil: "சென்னை எழும்பூர் - மதுரை மகால் விரைவு வண்டி", time: "11:25 PM", days: "Fri, Sun", daysTamil: "வெள்ளி, ஞாயிறு" },
// //   { no: "20691", name: "Tambaram - Nagercoil Antyodaya Exp", nameTamil: "தாம்பரம் - நாகர்கோவில் அந்தியோதயா விரைவு வண்டி", time: "11:35 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "16865", name: "Chennai Egmore - Thanjavur Uzhavan Exp", nameTamil: "சென்னை எழும்பூர் - தஞ்சாவூர் உழவன் விரைவு வண்டி", time: "11:55 PM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "16179", name: "Chennai Egmore - Mannargudi Mannai Exp", nameTamil: "சென்னை எழும்பூர் - மன்னார்குடி மன்னை விரைவு வண்டி", time: "12:20 AM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "12653", name: "Chennai Egmore - Trichy Rockfort Exp", nameTamil: "சென்னை எழும்பூர் - திருச்சி மலைக்கோட்டை விரைவு வண்டி", time: "12:50 AM", days: "Daily", daysTamil: "தினசரி" },
// //   { no: "22153", name: "Chennai Egmore - Salem Express", nameTamil: "சென்னை எழும்பூர் - சேலம் விரைவு வண்டி", time: "01:15 AM", days: "Daily", daysTamil: "தினசரி" },
// // ];

// // export default function TrainSchedulePage() {
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const filteredTrains = trainData.filter(train => 
// //     train.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //     train.nameTamil.includes(searchTerm) ||
// //     train.no.includes(searchTerm)
// //   );

// //   return (
// //     <PageTemplate
// //       title="Special Train Schedule"
// //       subtitle="Melmaruvathur Stoppages"
// //       noTopPadding={true}
// //       noContentTopPadding={true}
// //       hideFooter={true}    >
// //       <div className="min-h-screen bg-gray-50 pb-20">
        
// //         {/* Header Banner */}
// //         <div className="bg-blue-600 text-white px-4 py-12 text-center">
// //           <div className="max-w-4xl mx-auto">
// //             <h1 className="text-3xl font-bold mb-4">Irumudi Festival Special Stops</h1>
// //             <h2 className="text-xl font-bold mb-4 opacity-90 font-tamil">இருமுடி திருவிழா சிறப்பு ரயில் நிறுத்தம்</h2>
// //             <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30">
// //               <CalendarDays className="w-4 h-4" />
// //               <span className="text-sm font-bold">15 Dec 2025 - 02 Feb 2026</span>
// //             </div>
// //             <p className="text-blue-100 max-w-2xl mx-auto">
// //               Complete list of Villupuram-bound trains with temporary stoppage at Melmaruvathur Railway Station.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Search */}
// //         <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
// //           <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200 flex items-center">
// //             <div className="p-3 text-gray-400">
// //               <Search className="w-6 h-6" />
// //             </div>
// //             <input 
// //               type="text" 
// //               placeholder="Search train (e.g. 'Pandian', 'மதுரை', '12637')..." 
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="w-full p-3 outline-none text-gray-700 font-medium bg-transparent"
// //             />
// //           </div>
// //         </div>

// //         {/* List */}
// //         <div className="max-w-5xl mx-auto px-4 mt-12">
// //           <div className="grid md:grid-cols-2 gap-4">
// //             <AnimatePresence>
// //               {filteredTrains.map((train, index) => (
// //                 <motion.div
// //                   key={index}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
// //                 >
// //                   <div className="flex justify-between items-start mb-3">
// //                     <div className="bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded text-sm">
// //                       #{train.no}
// //                     </div>
// //                     <div className="flex items-center gap-1.5 text-[#a7150b] font-bold bg-red-50 px-2 py-1 rounded text-sm">
// //                       <Clock className="w-3.5 h-3.5" />
// //                       {train.time}
// //                     </div>
// //                   </div>
// //                   <h3 className="text-lg font-bold text-gray-800 mb-1">{train.name}</h3>
// //                   <h4 className="text-sm font-semibold text-gray-600 mb-2 font-tamil">{train.nameTamil}</h4>
                  
// //                   <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
// //                     <MapPin className="w-4 h-4" />
// //                     <span>Melmaruvathur Stoppage</span>
// //                   </div>
// //                   <div className="border-t border-gray-100 pt-3 flex justify-between text-xs font-bold uppercase">
// //                      <div>
// //                         <span className={train.days.includes("Daily") ? "text-green-600" : "text-gray-500"}>{train.days}</span>
// //                         <span className="text-gray-400 mx-1">/</span>
// //                         <span className="font-tamil text-gray-600">{train.daysTamil}</span>
// //                      </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </AnimatePresence>
// //           </div>
// //         </div>
// //       </div>
// //     </PageTemplate>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import PageTemplate from "@/components/PageTemplate";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Clock, CalendarDays, MapPin, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

// // Combined data from DOWN TRAINS and UP TRAINS documents
// const trainData = [
//   // --- DOWN TRAINS (Towards Villupuram/South) ---
//   { no: "16159", name: "MS-MAQ (Chennai Egmore - Mangalore)", via: "VRI", time: "00:35", days: "Daily", direction: "down" },
//   { no: "17655", name: "COA-PDY (Kakinada - Puducherry)", via: "VM", time: "07:40", days: "Sun, Tue, Fri", direction: "down" },
//   { no: "66051", name: "MS-PDY MEMU", via: "VM", time: "08:20", days: "Daily", direction: "down" },
//   { no: "17653", name: "KCG-PDY (Kacheguda - Puducherry)", via: "VM", time: "08:45", days: "Mon, Thu, Sat", direction: "down" },
//   { no: "22675", name: "MS-TPJ CHOLAN", via: "MV", time: "09:20", days: "Daily", direction: "down" },
//   { no: "16111", name: "TPDY-PDY-MEMU", via: "VM", time: "09:55", days: "Daily", direction: "down" },
//   { no: "66045", name: "TBM-VM-MEMU", via: "MTL", time: "11:10", days: "Daily", direction: "down" },
//   { no: "16127", name: "MS-GUV (Chennai - Guruvayur)", via: "VRI", time: "12:00", days: "Daily", direction: "down" },
//   { no: "06191", name: "TBM-TPJ SPL", via: "MV", time: "16:25", days: "Expt. Mon, Thu", direction: "down" },
//   { no: "12605", name: "MS-KKDI PALLAVAN", via: "VRI", time: "17:00", days: "Daily", direction: "down" },
//   { no: "20605", name: "MS-TCN CHENDUR", via: "MV", time: "17:20", days: "Daily", direction: "down" },
//   { no: "12633", name: "MS-CAPE KANNIYAKUMARI", via: "VRI", time: "18:40", days: "Daily", direction: "down" },
//   { no: "22661", name: "MS-RMM SETHU", via: "VRI", time: "19:15", days: "Daily", direction: "down" },
//   { no: "66055", name: "TBM-VM-MEMU", via: "MTL", time: "19:35", days: "Daily", direction: "down" },
//   { no: "16115", name: "MS-PDY (Chennai - Puducherry)", via: "VM", time: "19:48", days: "Daily", direction: "down" },
//   { no: "16351", name: "CSMT-NCJ (Mumbai - Nagercoil)", via: "VRI", time: "20:00", days: "Tue, Sat", direction: "down" },
//   { no: "12693", name: "MS-TN PEARLCITY", via: "VRI", time: "20:45", days: "Daily", direction: "down" },
//   { no: "20635", name: "MS-QLN ANANTAPURI", via: "VRI", time: "21:20", days: "Daily", direction: "down" },
//   { no: "12665", name: "HWH-CAPE (Howrah - Kanyakumari)", via: "VRI", time: "21:30", days: "Tue", direction: "down" },
//   { no: "20681", name: "TBM-SCT SILAMBU", via: "VRI", time: "21:45", days: "Wed, Fri, Sat", direction: "down" },
//   { no: "16751", name: "MS-RMM (Chennai - Rameswaram)", via: "VRI", time: "21:55", days: "Daily", direction: "down" },
//   { no: "12631", name: "MS-TEN NELLAI", via: "VRI", time: "22:10", days: "Daily", direction: "down" },
//   { no: "12663", name: "HWH-TPJ (Howrah - Trichy)", via: "VRI", time: "22:25", days: "Mon, Fri", direction: "down" },
//   { no: "16175", name: "MS-KIK (Chennai - Karaikal)", via: "MV", time: "22:25", days: "Daily", direction: "down" },

//   // --- UP TRAINS (Towards Chennai/Tambaram) ---
//   { no: "16160", name: "MAQ-MS (Mangalore - Chennai)", via: "TBM", time: "01:40", days: "Daily", direction: "up" },
//   { no: "22154", name: "SA-MS (Salem - Chennai)", via: "TBM", time: "01:50", days: "Daily", direction: "up" },
//   { no: "20636", name: "QLN-MS ANANTAPURI", via: "TBM", time: "03:40", days: "Daily", direction: "up" },
//   { no: "12634", name: "CAPE-MS (Kanyakumari - Chennai)", via: "TBM", time: "04:10", days: "Daily", direction: "up" },
//   { no: "12632", name: "TEN-MS NELLAI", via: "TBM", time: "04:40", days: "Daily", direction: "up" },
//   { no: "22662", name: "RMM-MS SETHU", via: "TBM", time: "04:50", days: "Daily", direction: "up" },
//   { no: "12694", name: "TN-MS PEARLCITY", via: "TBM", time: "05:10", days: "Daily", direction: "up" },
//   { no: "16752", name: "RMM-MS (Rameswaram - Chennai)", via: "TBM", time: "05:20", days: "Daily", direction: "up" },
//   { no: "66056", name: "VM-TBM MEMU", via: "SKL", time: "06:20", days: "Daily", direction: "up" },
//   { no: "16116", name: "PDY-MS (Puducherry - Chennai)", via: "TBM", time: "07:25", days: "Daily", direction: "up" },
//   { no: "20606", name: "TCN-MS (Tiruchendur - Chennai)", via: "TBM", time: "08:25", days: "Daily", direction: "up" },
//   { no: "12606", name: "KKDI-MS PALLAVAN", via: "TBM", time: "10:25", days: "Daily", direction: "up" },
//   { no: "06190", name: "TPJ-TBM", via: "SKL", time: "11:00", days: "Expt. Mon, Thu", direction: "up" },
//   { no: "17654", name: "PDY-KCG: KACHEGUDA", via: "MS", time: "14:35", days: "Sun, Tue, Fri", direction: "up" },
//   { no: "66046", name: "VM-MSB MEMU", via: "TBM", time: "14:40", days: "Daily", direction: "up" },
//   { no: "17656", name: "PDY-COA: CIRCAR", via: "MS", time: "15:10", days: "Mon, Thu, Sat", direction: "up" },
//   { no: "16112", name: "PDY-TPTY (Puducherry - Tirupati)", via: "CJ", time: "16:50", days: "Daily", direction: "up" },
//   { no: "12666", name: "CAPE-HWH (Kanyakumari - Howrah)", via: "MS", time: "17:10", days: "Sat", direction: "up" },
//   { no: "12664", name: "TPJ-HWH (Trichy - Howrah)", via: "MS", time: "17:10", days: "Tue, Fri", direction: "up" },
//   { no: "16352", name: "NCJ-CSMT (Nagercoil - Mumbai)", via: "CJ", time: "17:15", days: "Sun, Thu", direction: "up" },
//   { no: "22676", name: "TPJ-MS-CHOLAN", via: "TBM", time: "17:25", days: "Daily", direction: "up" },
//   { no: "66052", name: "PDY-MS MEMU", via: "TBM", time: "17:50", days: "Daily", direction: "up" },
//   { no: "16128", "name": "GUV-MS (Guruvayur - Chennai)", via: "TBM", time: "18:30", days: "Daily", direction: "up" },
// ];

// export default function TrainSchedulePage() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeTab, setActiveTab] = useState("all");

//   const filteredTrains = trainData.filter(train => {
//     const matchesSearch = train.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           train.no.includes(searchTerm) ||
//                           train.via.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesTab = activeTab === "all" || train.direction === activeTab;
//     return matchesSearch && matchesTab;
//   });

//   return (
//     <PageTemplate
//       title="Train Schedule"
//       subtitle="Melmaruvathur Stoppages"
//       noTopPadding={true}
//       noContentTopPadding={true}
//       hideFooter={true}
//     >
//       <div className="min-h-screen bg-gray-50 pb-20">
        
//         {/* Header Banner */}
//         <div className="bg-blue-600 text-white px-4 py-12 text-center">
//           <div className="max-w-4xl mx-auto">
//             <h1 className="text-3xl font-bold mb-4">Melmaruvathur Train Timings</h1>
//             <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30">
//               <CalendarDays className="w-4 h-4" />
//               <span className="text-sm font-bold">Updated: 06 Jan 2026</span>
//             </div>
//             <p className="text-blue-100 max-w-2xl mx-auto">
//               Complete arrival timings for Down (Southbound) and Up (Chennai-bound) trains at Melmaruvathur.
//             </p>
//           </div>
//         </div>

//         {/* Search and Filters */}
//         <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
//           <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
//             <div className="flex items-center border-b border-gray-100 mb-2">
//               <div className="p-3 text-gray-400">
//                 <Search className="w-6 h-6" />
//               </div>
//               <input 
//                 type="text" 
//                 placeholder="Search train name, number or via (e.g. 'Nellai', '12631', 'VRI')..." 
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full p-3 outline-none text-gray-700 font-medium bg-transparent"
//               />
//             </div>
            
//             <div className="flex gap-2 p-2">
//               <button 
//                 onClick={() => setActiveTab("all")}
//                 className={`flex-1 py-2 rounded-lg text-sm font-bold transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
//               >
//                 All Trains
//               </button>
//               <button 
//                 onClick={() => setActiveTab("down")}
//                 className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'down' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-600'}`}
//               >
//                 <ArrowDownCircle className="w-4 h-4" />MLMR DOWN TRAINS (TOWARDS VILLUPURAM)
//               </button>
//               <button 
//                 onClick={() => setActiveTab("up")}
//                 className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${activeTab === 'up' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'}`}
//               >
//                 <ArrowUpCircle className="w-4 h-4" />MLMR UP TRAINS (TOWARDS CHENNAI) 
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Train List */}
//         <div className="max-w-5xl mx-auto px-4 mt-8">
//           <div className="grid md:grid-cols-2 gap-4">
//             <AnimatePresence mode="popLayout">
//               {filteredTrains.map((train) => (
//                 <motion.div
//                   key={`${train.direction}-${train.no}`}
//                   layout
//                   initial={{ opacity: 0, scale: 0.95 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.95 }}
//                   className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
//                 >
//                   <div className="flex justify-between items-start mb-3">
//                     <div className="flex gap-2 items-center">
//                       <div className="bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded text-sm">
//                         #{train.no}
//                       </div>
//                       <span className={`text-[10px] font-black px-2 py-1 rounded uppercase ${train.direction === 'down' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
//                         {train.direction === 'down' ? 'Down' : 'Up'}
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-1.5 text-[#a7150b] font-bold bg-red-50 px-2 py-1 rounded text-sm">
//                       <Clock className="w-3.5 h-3.5" />
//                       {train.time}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{train.name}</h3>
                  
//                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//                     <div className="flex items-center gap-1">
//                       <MapPin className="w-4 h-4 text-gray-400" />
//                       <span>Via: <span className="font-bold text-gray-700">{train.via}</span></span>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs font-bold uppercase">
//                      <span className={train.days.toLowerCase().includes("daily") ? "text-green-600" : "text-orange-600"}>
//                         {train.days}
//                      </span>
//                      <span className="text-gray-400">Stop Service</span>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {filteredTrains.length === 0 && (
//             <div className="text-center py-20 text-gray-400">
//               <p className="text-xl">No trains found matching "{searchTerm}"</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </PageTemplate>
//   );
// }
"use client";

import React, { useState } from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, CalendarDays, MapPin, ArrowDownCircle, ArrowUpCircle } from "lucide-react";

// Combined data from DOWN TRAINS and UP TRAINS documents
const trainData = [
  // --- DOWN TRAINS (Towards Villupuram/South) ---
  { no: "16159", name: "MS-MAQ (Chennai Egmore - Mangalore)", via: "VRI", time: "00:35", days: "Daily", direction: "down" },
  { no: "17655", name: "COA-PDY (Kakinada - Puducherry)", via: "VM", time: "07:40", days: "Sun, Tue, Fri", direction: "down" },
  { no: "66051", name: "MS-PDY MEMU", via: "VM", time: "08:20", days: "Daily", direction: "down" },
  { no: "17653", name: "KCG-PDY (Kacheguda - Puducherry)", via: "VM", time: "08:45", days: "Mon, Thu, Sat", direction: "down" },
  { no: "22675", name: "MS-TPJ CHOLAN", via: "MV", time: "09:20", days: "Daily", direction: "down" },
  { no: "16111", name: "TPDY-PDY-MEMU", via: "VM", time: "09:55", days: "Daily", direction: "down" },
  { no: "66045", name: "TBM-VM-MEMU", via: "MTL", time: "11:10", days: "Daily", direction: "down" },
  { no: "16127", name: "MS-GUV (Chennai - Guruvayur)", via: "VRI", time: "12:00", days: "Daily", direction: "down" },
  { no: "06191", name: "TBM-TPJ SPL", via: "MV", time: "16:25", days: "Expt. Mon, Thu", direction: "down" },
  { no: "12605", name: "MS-KKDI PALLAVAN", via: "VRI", time: "17:00", days: "Daily", direction: "down" },
  { no: "20605", name: "MS-TCN CHENDUR", via: "MV", time: "17:20", days: "Daily", direction: "down" },
  { no: "12633", name: "MS-CAPE KANNIYAKUMARI", via: "VRI", time: "18:40", days: "Daily", direction: "down" },
  { no: "22661", name: "MS-RMM SETHU", via: "VRI", time: "19:15", days: "Daily", direction: "down" },
  { no: "66055", name: "TBM-VM-MEMU", via: "MTL", time: "19:35", days: "Daily", direction: "down" },
  { no: "16115", name: "MS-PDY (Chennai - Puducherry)", via: "VM", time: "19:48", days: "Daily", direction: "down" },
  { no: "16351", name: "CSMT-NCJ (Mumbai - Nagercoil)", via: "VRI", time: "20:00", days: "Tue, Sat", direction: "down" },
  { no: "12693", name: "MS-TN PEARLCITY", via: "VRI", time: "20:45", days: "Daily", direction: "down" },
  { no: "20635", name: "MS-QLN ANANTAPURI", via: "VRI", time: "21:20", days: "Daily", direction: "down" },
  { no: "12665", name: "HWH-CAPE (Howrah - Kanyakumari)", via: "VRI", time: "21:30", days: "Tue", direction: "down" },
  { no: "20681", name: "TBM-SCT SILAMBU", via: "VRI", time: "21:45", days: "Wed, Fri, Sat", direction: "down" },
  { no: "16751", name: "MS-RMM (Chennai - Rameswaram)", via: "VRI", time: "21:55", days: "Daily", direction: "down" },
  { no: "12631", name: "MS-TEN NELLAI", via: "VRI", time: "22:10", days: "Daily", direction: "down" },
  { no: "12663", name: "HWH-TPJ (Howrah - Trichy)", via: "VRI", time: "22:25", days: "Mon, Fri", direction: "down" },
  { no: "16175", name: "MS-KIK (Chennai - Karaikal)", via: "MV", time: "22:25", days: "Daily", direction: "down" },

  // --- UP TRAINS (Towards Chennai/Tambaram) ---
  { no: "16160", name: "MAQ-MS (Mangalore - Chennai)", via: "TBM", time: "01:40", days: "Daily", direction: "up" },
  { no: "22154", name: "SA-MS (Salem - Chennai)", via: "TBM", time: "01:50", days: "Daily", direction: "up" },
  { no: "20636", name: "QLN-MS ANANTAPURI", via: "TBM", time: "03:40", days: "Daily", direction: "up" },
  { no: "12634", name: "CAPE-MS (Kanyakumari - Chennai)", via: "TBM", time: "04:10", days: "Daily", direction: "up" },
  { no: "12632", name: "TEN-MS NELLAI", via: "TBM", time: "04:40", days: "Daily", direction: "up" },
  { no: "22662", name: "RMM-MS SETHU", via: "TBM", time: "04:50", days: "Daily", direction: "up" },
  { no: "12694", name: "TN-MS PEARLCITY", via: "TBM", time: "05:10", days: "Daily", direction: "up" },
  { no: "16752", name: "RMM-MS (Rameswaram - Chennai)", via: "TBM", time: "05:20", days: "Daily", direction: "up" },
  { no: "66056", name: "VM-TBM MEMU", via: "SKL", time: "06:20", days: "Daily", direction: "up" },
  { no: "16116", name: "PDY-MS (Puducherry - Chennai)", via: "TBM", time: "07:25", days: "Daily", direction: "up" },
  { no: "20606", name: "TCN-MS (Tiruchendur - Chennai)", via: "TBM", time: "08:25", days: "Daily", direction: "up" },
  { no: "12606", name: "KKDI-MS PALLAVAN", via: "TBM", time: "10:25", days: "Daily", direction: "up" },
  { no: "06190", name: "TPJ-TBM", via: "SKL", time: "11:00", days: "Expt. Mon, Thu", direction: "up" },
  { no: "17654", name: "PDY-KCG: KACHEGUDA", via: "MS", time: "14:35", days: "Sun, Tue, Fri", direction: "up" },
  { no: "66046", name: "VM-MSB MEMU", via: "TBM", time: "14:40", days: "Daily", direction: "up" },
  { no: "17656", name: "PDY-COA: CIRCAR", via: "MS", time: "15:10", days: "Mon, Thu, Sat", direction: "up" },
  { no: "16112", name: "PDY-TPTY (Puducherry - Tirupati)", via: "CJ", time: "16:50", days: "Daily", direction: "up" },
  { no: "12666", name: "CAPE-HWH (Kanyakumari - Howrah)", via: "MS", time: "17:10", days: "Sat", direction: "up" },
  { no: "12664", name: "TPJ-HWH (Trichy - Howrah)", via: "MS", time: "17:10", days: "Tue, Fri", direction: "up" },
  { no: "16352", name: "NCJ-CSMT (Nagercoil - Mumbai)", via: "CJ", time: "17:15", days: "Sun, Thu", direction: "up" },
  { no: "22676", name: "TPJ-MS-CHOLAN", via: "TBM", time: "17:25", days: "Daily", direction: "up" },
  { no: "66052", name: "PDY-MS MEMU", via: "TBM", time: "17:50", days: "Daily", direction: "up" },
  { no: "16128", "name": "GUV-MS (Guruvayur - Chennai)", via: "TBM", time: "18:30", days: "Daily", direction: "up" },
];

export default function TrainSchedulePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredTrains = trainData.filter(train => {
    const matchesSearch = train.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          train.no.includes(searchTerm) ||
                          train.via.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || train.direction === activeTab;
    return matchesSearch && matchesTab;
  });

  return (
    <PageTemplate
      title="Train Schedule"
      subtitle="Melmaruvathur Stoppages"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}
    >
      <div className="min-h-screen bg-gray-50 pb-20">
        
        {/* Header Banner */}
        <div className="bg-blue-600 text-white px-4 py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Melmaruvathur Train Timings</h1>
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 border border-white/30">
              <CalendarDays className="w-4 h-4" />
              <span className="text-sm font-bold">Updated: 06 Jan 2026</span>
            </div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Complete arrival timings for Down (Southbound) and Up (Chennai-bound) trains at Melmaruvathur.
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-200">
            <div className="flex items-center border-b border-gray-100 mb-2">
              <div className="p-3 text-gray-400">
                <Search className="w-6 h-6" />
              </div>
              <input 
                type="text" 
                placeholder="Search train name, number or via (e.g. 'Nellai', '12631', 'VRI')..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 outline-none text-gray-700 font-medium bg-transparent"
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-2 p-2">
              <button 
                onClick={() => setActiveTab("all")}
                className={`flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-bold transition-colors ${activeTab === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                All Trains
              </button>
              <button 
                onClick={() => setActiveTab("down")}
                className={`flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-bold flex flex-col md:flex-row items-center justify-center gap-1 transition-colors ${activeTab === 'down' ? 'bg-[#d81b11] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <div className="flex items-center gap-1">
                   <ArrowDownCircle className="w-4 h-4" /> 
                   <span>MLMR DOWN TRAINS</span>
                </div>
                <span className="text-[10px] md:text-xs font-normal opacity-90">(TOWARDS VILLUPURAM)</span>
              </button>
              <button 
                onClick={() => setActiveTab("up")}
                className={`flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-bold flex flex-col md:flex-row items-center justify-center gap-1 transition-colors ${activeTab === 'up' ? 'bg-gray-100 text-gray-600 border border-gray-300' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
              >
                <div className="flex items-center gap-1">
                  <ArrowUpCircle className="w-4 h-4" /> 
                  <span>MLMR UP TRAINS</span>
                </div>
                <span className="text-[10px] md:text-xs font-normal opacity-90">(TOWARDS CHENNAI)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Train List */}
        <div className="max-w-5xl mx-auto px-4 mt-8">
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredTrains.map((train) => (
                <motion.div
                  key={`${train.direction}-${train.no}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:border-blue-300 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-2 items-center">
                      <div className="bg-blue-50 text-blue-700 font-mono font-bold px-2 py-1 rounded text-sm">
                        #{train.no}
                      </div>
                      <span className={`text-[10px] font-black px-2 py-1 rounded uppercase ${train.direction === 'down' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}>
                        {train.direction === 'down' ? 'Down' : 'Up'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#a7150b] font-bold bg-red-50 px-2 py-1 rounded text-sm">
                      <Clock className="w-3.5 h-3.5" />
                      {train.time}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-2 leading-tight">{train.name}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>Via: <span className="font-bold text-gray-700">{train.via}</span></span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs font-bold uppercase">
                     <span className={train.days.toLowerCase().includes("daily") ? "text-green-600" : "text-orange-600"}>
                        {train.days}
                     </span>
                     <span className="text-gray-400">Stop Service</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredTrains.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-xl">No trains found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}