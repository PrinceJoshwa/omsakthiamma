// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { 
// //   X, 
// //   Calendar, 
// //   MapPin, 
// //   Download, 
// //   Sparkles, 
// //   ArrowRight, 
// //   TrainFront, 
// //   Search, 
// //   Clock, 
// //   ExternalLink,
// //   HeartHandshake 
// // } from 'lucide-react';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // // --- UPDATED TRAIN DATA (From Document Schedules) ---
// // const trainData = [
// //   // DOWN TRAINS (Southbound) [cite: 1]
// //   { no: "16159", name: "MS-MAQ (Egmore - Mangalore)", time: "00:35", days: "DAILY" },
// //   { no: "17655", name: "COA-PDY (Kakinada - Puducherry)", time: "07:40", days: "SUN, TUE, FRI" },
// //   { no: "66051", name: "MS-PDY MEMU", time: "08:20", days: "DAILY" },
// //   { no: "17653", name: "KCG-PDY (Kacheguda - Puducherry)", time: "08:45", days: "MON, THU, SAT" },
// //   { no: "22675", name: "MS-TPJ CHOLAN", time: "09:20", days: "DAILY" },
// //   { no: "16111", name: "TPDY-PDY-MEMU", time: "09:55", days: "DAILY" },
// //   { no: "66045", name: "TBM-VM-MEMU", time: "11:10", days: "DAILY" },
// //   { no: "16127", name: "MS-GUV (Chennai - Guruvayur)", time: "12:00", days: "DAILY" },
// //   { no: "06191", name: "TBM-TPJ SPL", time: "16:25", days: "Expt. Mon, Thu" },
// //   { no: "12605", name: "MS-KKDI PALLAVAN", time: "17:00", days: "DAILY" },
// //   { no: "20605", name: "MS-TCN CHENDUR", time: "17:20", days: "DAILY" },
// //   { no: "12633", name: "MS-CAPE KANNIYAKUMARI", time: "18:40", days: "DAILY" },
// //   { no: "22661", name: "MS-RMM SETHU", time: "19:15", days: "DAILY" },
// //   { no: "66055", name: "TBM-VM-MEMU", time: "19:35", days: "DAILY" },
// //   { no: "16115", name: "MS-PDY (Chennai - Puducherry)", time: "19:48", days: "DAILY" },
// //   { no: "16351", name: "CSMT-NCJ (Mumbai - Nagercoil)", time: "20:00", days: "TUE, SAT" },
// //   { no: "12693", name: "MS-TN PEARLCITY", time: "20:45", days: "DAILY" },
// //   { no: "20635", name: "MS-QLN ANANTAPURI", time: "21:20", days: "DAILY" },
// //   { no: "12665", name: "HWH-CAPE (Howrah - Kanyakumari)", time: "21:30", days: "TUE" },
// //   { no: "20681", name: "TBM-SCT SILAMBU", time: "21:45", days: "WED, FRI, SAT" },
// //   { no: "16751", name: "MS-RMM (Chennai - Rameswaram)", time: "21:55", days: "DAILY" },
// //   { no: "12631", name: "MS-TEN NELLAI", time: "22:10", days: "DAILY" },
// //   { no: "12663", name: "HWH-TPJ (Howrah - Trichy)", time: "22:25", days: "MON, FRI" },
// //   { no: "16175", name: "MS-KIK (Chennai - Karaikal)", time: "22:25", days: "DAILY" },
  
// //   // UP TRAINS (Northbound) [cite: 3]
// //   { no: "16160", name: "MAQ-MS (Mangalore - Egmore)", time: "01:40", days: "DAILY" },
// //   { no: "22154", name: "SA-MS (Salem - Egmore)", time: "01:50", days: "DAILY" },
// //   { no: "20636", name: "QLN-MS ANANTAPURI", time: "03:40", days: "DAILY" },
// //   { no: "12634", name: "CAPE-MS (Kanyakumari - Egmore)", time: "04:10", days: "DAILY" },
// //   { no: "12632", name: "TEN-MS NELLAI", time: "04:40", days: "DAILY" },
// //   { no: "22662", name: "RMM-MS SETHU", time: "04:50", days: "DAILY" },
// //   { no: "12694", name: "TN-MS PEARLCITY", time: "05:10", days: "DAILY" },
// //   { no: "16752", name: "RMM-MS (Rameswaram - Egmore)", time: "05:20", days: "DAILY" },
// //   { no: "66056", name: "VM-TBM MEMU", time: "06:20", days: "DAILY" },
// //   { no: "16116", name: "PDY-MS (Puducherry - Egmore)", time: "07:25", days: "DAILY" },
// //   { no: "20606", name: "TCN-MS (Tiruchendur - Egmore)", time: "08:25", days: "DAILY" },
// //   { no: "12606", name: "KKDI-MS PALLAVAN", time: "10:25", days: "DAILY" },
// //   { no: "06190", name: "TPJ-TBM (Trichy - Tambaram)", time: "11:00", days: "Expt. Mon, Thu" },
// //   { no: "17654", name: "PDY-KCG: KACHEGUDA", time: "14:35", days: "SUN, TUE, FRI" },
// //   { no: "66046", name: "VM-MSB MEMU", time: "14:40", days: "DAILY" },
// //   { no: "17656", name: "PDY-COA: CIRCAR", time: "15:10", days: "MON, THU, SAT" },
// //   { no: "16112", name: "PDY-TPTY (Puducherry - Tirupati)", time: "16:50", days: "DAILY" },
// //   { no: "12666", name: "CAPE-HWH (Kanyakumari - Howrah)", time: "17:10", days: "SAT" },
// //   { no: "12664", name: "TPJ-HWH (Trichy - Howrah)", time: "17:10", days: "TUE, FRI" },
// //   { no: "16352", name: "NCJ-CSMT (Nagercoil - Mumbai)", time: "17:15", days: "SUN, THU" },
// //   { no: "22676", name: "TPJ-MS-CHOLAN", time: "17:25", days: "DAILY" },
// //   { no: "66052", name: "PDY-MS MEMU", time: "17:50", days: "DAILY" },
// //   { no: "16128", name: "GUV-MS (Guruvayur - Egmore)", time: "18:30", days: "DAILY" },
// // ];

// // // --- MASTER EVENT LIST (Preserved) ---
// // const masterEventList = [
// //   {
// //     date: "31.01.2026",
// //     titleEnglish: "Thaipoosa Jyothi Peruvizha",
// //     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "17.02.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" 
// //   },
// //   {
// //     date: "03.03.2026",
// //     titleEnglish: "Amma's 86th Birthday",
// //     titleTamil: "86வது அவதார திருநாள்",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "18.03.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "19.03.2026",
// //     titleEnglish: "Telugu New Year",
// //     titleTamil: "தெலுங்கு வருடப்பிறப்பு",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "01.04.2026",
// //     // day: "Wednesday",
// //     titleEnglish: "Pournami Pooja",
// //     titleTamil: "பௌர்ணமி பூஜை",
// //     // type: "pournami",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "14.04.2026",
// //     titleEnglish: "Tamil New Year",
// //     titleTamil: "தமிழ் வருடப்பிறப்பு",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "17.04.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "30.04.2026",
// //     titleEnglish: "Chitra Pournami Velvi",
// //     titleTamil: "சித்திரை பௌர்ணமி வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },

// //   // MAY
// //   {
// //     date: "01.05.2026",
// //     titleEnglish: "Labour Day",
// //     titleTamil: "தொழிலாளர் தினம்",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "16.05.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "31.05.2026",
// //     titleEnglish: "Pournami Pooja",
// //     titleTamil: "பௌர்ணமி பூஜை",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },

// //   // JUNE
// //   {
// //     date: "14.06.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "29.06.2026",
// //     titleEnglish: "Pournami Pooja",
// //     titleTamil: "பௌர்ணமி பூஜை",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },

// //   // JULY
// //   {
// //     date: "14.07.2026",
// //     titleEnglish: "Ammavasai Velvi",
// //     titleTamil: "அமாவாசை வேள்வி",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   },
// //   {
// //     date: "29.07.2026",
// //     titleEnglish: "Pournami Pooja",
// //     titleTamil: "பௌர்ணமி பூஜை",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   }
// // ];

// // const parseDate = (dateStr: string) => {
// //   const [day, month, year] = dateStr.split('.').map(Number);
// //   return new Date(year, month - 1, day);
// // };

// // export default function EventPopup() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState<'volunteer' | 'event' | 'train'>('volunteer');
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [daysToGo, setDaysToGo] = useState(0);
// //   const [mainEvent, setMainEvent] = useState(masterEventList[0]);

// //   const filteredTrains = trainData.filter(t => 
// //     t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //     t.no.includes(searchTerm) || 
// //     t.days.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const upcomingEventsList = [
// //     { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
// //     { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
// //     { date: "18.03.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
// //     { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
// //   ];

// //   useEffect(() => {
// //     const today = new Date();
// //     today.setHours(0, 0, 0, 0);

// //     const upcomingEvent = masterEventList.find(event => {
// //       const eventDate = parseDate(event.date);
// //       return eventDate >= today;
// //     });

// //     const targetEvent = upcomingEvent || masterEventList[masterEventList.length - 1];
// //     setMainEvent(targetEvent);

// //     const targetDateObj = parseDate(targetEvent.date);
// //     const diffTime = targetDateObj.getTime() - today.getTime();
// //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// //     setDaysToGo(diffDays);

// //     const timer = setTimeout(() => {
// //       setIsOpen(true);
// //     }, 2000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (!isOpen) return null;

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 md:py-8">
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsOpen(false)}
// //             className="fixed inset-0 bg-black/80 backdrop-blur-md"
// //           />

// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //             animate={{ opacity: 1, scale: 1, y: 0 }}
// //             exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //             transition={{ type: "spring", bounce: 0.3 }}
// //             className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
// //           >
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
// //             >
// //               <X className="w-5 h-5" />
// //             </button>

// //             {/* LEFT SIDE: IMAGE */}
// //             <div className="relative hidden md:block w-2/5 h-full bg-red-900">
// //               <Image
// //                 src={mainEvent.image}
// //                 alt="Event Banner"
// //                 fill
// //                 className="object-cover opacity-90"
// //               />
// //               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
// //               <div className="absolute bottom-0 left-0 w-full p-8 text-white">
// //                 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
// //                   <Sparkles className="w-3 h-3" /> Upcoming Festival
// //                 </div>
// //                 <h2 className="text-3xl font-bold leading-tight mb-2">{mainEvent.titleEnglish}</h2>
// //                 <p className="text-lg text-white/80 font-tamil mb-6">{mainEvent.titleTamil}</p>
// //                 <div className="flex gap-4">
// //                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center min-w-[70px]">
// //                       <div className="text-2xl font-bold">{daysToGo}</div>
// //                       <div className="text-[10px] uppercase tracking-wider opacity-70">Days</div>
// //                    </div>
// //                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 flex-grow">
// //                       <div className="text-sm opacity-70 uppercase mb-1">Event Date</div>
// //                       <div className="text-xl font-bold text-[#ffc107]">{mainEvent.date}</div>
// //                    </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* RIGHT SIDE: CONTENT */}
// //             <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
// //               <div className="flex-none flex border-b border-gray-200">
// //                 <button onClick={() => setActiveTab('volunteer')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'volunteer' ? 'text-orange-600 bg-orange-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
// //                   <span className="flex items-center justify-center gap-2"><HeartHandshake className="w-4 h-4" /> Volunteer</span>
// //                   {activeTab === 'volunteer' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />}
// //                 </button>
// //                 <button onClick={() => setActiveTab('event')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
// //                   <span className="flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Festival</span>
// //                   {activeTab === 'event' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />}
// //                 </button>
// //                 <button onClick={() => setActiveTab('train')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
// //                   <span className="flex items-center justify-center gap-2"><TrainFront className="w-4 h-4" /> Trains</span>
// //                   {activeTab === 'train' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />}
// //                 </button>
// //               </div>

// //               <div className="flex-grow overflow-y-auto p-6 bg-white relative">
// //                 {activeTab === 'volunteer' && (
// //                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 h-full flex flex-col justify-center">
// //                     <div className="text-center">
// //                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-6">
// //                          <HeartHandshake className="w-3 h-3" /> Seva Opportunity
// //                        </div>
// //                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight leading-tight">Serve with <span className="text-[#a7150b]">Devotion.</span> <br />Grow with Grace.</h2>
// //                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
// //                           <p className="text-lg font-serif italic text-gray-700 leading-relaxed">"செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."</p>
// //                        </div>
// //                        <p className="text-gray-600 font-medium mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.</p>
// //                        <div className="mb-8"><p className="text-[#a7150b] font-bold text-sm md:text-base">"ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."</p></div>
// //                     </div>
// //                   </motion.div>
// //                 )}

// //                 {activeTab === 'event' && (
// //                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
// //                      <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
// //                         <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
// //                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"><h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2></div>
// //                      </div>
// //                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
// //                         <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
// //                         <div><p className="text-xs font-bold text-gray-400 uppercase">Venue</p><p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p></div>
// //                      </div>
// //                      <div className="space-y-2">
// //                         <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
// //                         <p className="text-gray-600 leading-relaxed text-sm">Join us for the grand <strong>{mainEvent.titleEnglish}</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy occasion.</p>
// //                      </div>
// //                      <div className="pt-4 border-t border-gray-100">
// //                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">Upcoming Events</h3>
// //                          <div className="space-y-3">
// //                            {upcomingEventsList.map((evt, idx) => (
// //                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
// //                               <div className="w-12 text-center shrink-0">
// //                                 <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
// //                                 <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
// //                               </div>
// //                               <div><div className="text-sm font-bold text-gray-800">{evt.title}</div><div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div></div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                      </div>
// //                   </motion.div>
// //                 )}

// //                 {activeTab === 'train' && (
// //                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 h-full flex flex-col">
// //                     <div className="sticky top-0 bg-white z-10 pb-2">
// //                       <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
// //                         <Search className="w-5 h-5 text-gray-400 ml-2" />
// //                         <input type="text" placeholder="Search (e.g. Madurai, 12631)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 outline-none text-sm bg-transparent" />
// //                       </div>
// //                       <div className="text-xs text-center text-gray-400 mt-2">{filteredTrains.length} trains stopping at Melmaruvathur</div>
// //                     </div>
// //                     <div className="flex-grow space-y-3 pb-2">
// //                       {filteredTrains.length > 0 ? (
// //                         filteredTrains.map((train, idx) => (
// //                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
// //                             <div className="flex items-center gap-3 overflow-hidden">
// //                                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">#{train.no}</div>
// //                                <div className="min-w-0">
// //                                  <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
// //                                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> {train.days}</p>
// //                                </div>
// //                             </div>
// //                             <div className="text-right shrink-0 pl-2"><div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm"><Clock className="w-3 h-3" /> {train.time}</div></div>
// //                           </div>
// //                         ))
// //                       ) : (
// //                         <div className="text-center py-10 opacity-50"><TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" /><p className="text-sm font-medium text-gray-500">No trains match your search</p></div>
// //                       )}
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </div>

// //               <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
// //                   {activeTab === 'volunteer' && (
// //                     <Link href="/activities/volunteer" onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#a7150b] text-white rounded-xl font-bold hover:bg-[#8a0d08] transition-all flex items-center justify-center gap-2 text-sm shadow-md group">Apply for Volunteering <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
// //                   )}
// //                   {activeTab === 'event' && (
// //                     <div className="space-y-3">
// //                       <Link href="/all-events" onClick={() => setIsOpen(false)} className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-sm">View All Events <ArrowRight className="w-4 h-4" /></Link>
// //                       <a href="/event-pdf.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm">Download PDF <Download className="w-4 h-4" /></a>
// //                     </div>
// //                   )}
// //                   {activeTab === 'train' && (
// //                     <Link href="/train-schedule" onClick={() => setIsOpen(false)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md">Open Full Schedule Page <ExternalLink className="w-4 h-4" /></Link>
// //                   )}
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   X, 
//   Calendar, 
//   MapPin, 
//   Download, 
//   Sparkles, 
//   ArrowRight, 
//   TrainFront, 
//   Search, 
//   Clock, 
//   ExternalLink,
//   HeartHandshake,
//   FileText
// } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// // --- UPDATED TRAIN DATA (From Document Schedules) ---
// const trainData = [
//   // DOWN TRAINS (Southbound)
//   { no: "16159", name: "MS-MAQ (Egmore - Mangalore)", time: "00:35", days: "DAILY" },
//   { no: "17655", name: "COA-PDY (Kakinada - Puducherry)", time: "07:40", days: "SUN, TUE, FRI" },
//   { no: "66051", name: "MS-PDY MEMU", time: "08:20", days: "DAILY" },
//   { no: "17653", name: "KCG-PDY (Kacheguda - Puducherry)", time: "08:45", days: "MON, THU, SAT" },
//   { no: "22675", name: "MS-TPJ CHOLAN", time: "09:20", days: "DAILY" },
//   { no: "16111", name: "TPDY-PDY-MEMU", time: "09:55", days: "DAILY" },
//   { no: "66045", name: "TBM-VM-MEMU", time: "11:10", days: "DAILY" },
//   { no: "16127", name: "MS-GUV (Chennai - Guruvayur)", time: "12:00", days: "DAILY" },
//   { no: "06191", name: "TBM-TPJ SPL", time: "16:25", days: "Expt. Mon, Thu" },
//   { no: "12605", name: "MS-KKDI PALLAVAN", time: "17:00", days: "DAILY" },
//   { no: "20605", name: "MS-TCN CHENDUR", time: "17:20", days: "DAILY" },
//   { no: "12633", name: "MS-CAPE KANNIYAKUMARI", time: "18:40", days: "DAILY" },
//   { no: "22661", name: "MS-RMM SETHU", time: "19:15", days: "DAILY" },
//   { no: "66055", name: "TBM-VM-MEMU", time: "19:35", days: "DAILY" },
//   { no: "16115", name: "MS-PDY (Chennai - Puducherry)", time: "19:48", days: "DAILY" },
//   { no: "16351", name: "CSMT-NCJ (Mumbai - Nagercoil)", time: "20:00", days: "TUE, SAT" },
//   { no: "12693", name: "MS-TN PEARLCITY", time: "20:45", days: "DAILY" },
//   { no: "20635", name: "MS-QLN ANANTAPURI", time: "21:20", days: "DAILY" },
//   { no: "12665", name: "HWH-CAPE (Howrah - Kanyakumari)", time: "21:30", days: "TUE" },
//   { no: "20681", name: "TBM-SCT SILAMBU", time: "21:45", days: "WED, FRI, SAT" },
//   { no: "16751", name: "MS-RMM (Chennai - Rameswaram)", time: "21:55", days: "DAILY" },
//   { no: "12631", name: "MS-TEN NELLAI", time: "22:10", days: "DAILY" },
//   { no: "12663", name: "HWH-TPJ (Howrah - Trichy)", time: "22:25", days: "MON, FRI" },
//   { no: "16175", name: "MS-KIK (Chennai - Karaikal)", time: "22:25", days: "DAILY" },
  
//   // UP TRAINS (Northbound)
//   { no: "16160", name: "MAQ-MS (Mangalore - Egmore)", time: "01:40", days: "DAILY" },
//   { no: "22154", name: "SA-MS (Salem - Egmore)", time: "01:50", days: "DAILY" },
//   { no: "20636", name: "QLN-MS ANANTAPURI", time: "03:40", days: "DAILY" },
//   { no: "12634", name: "CAPE-MS (Kanyakumari - Egmore)", time: "04:10", days: "DAILY" },
//   { no: "12632", name: "TEN-MS NELLAI", time: "04:40", days: "DAILY" },
//   { no: "22662", name: "RMM-MS SETHU", time: "04:50", days: "DAILY" },
//   { no: "12694", name: "TN-MS PEARLCITY", time: "05:10", days: "DAILY" },
//   { no: "16752", name: "RMM-MS (Rameswaram - Egmore)", time: "05:20", days: "DAILY" },
//   { no: "66056", name: "VM-TBM MEMU", time: "06:20", days: "DAILY" },
//   { no: "16116", name: "PDY-MS (Puducherry - Egmore)", time: "07:25", days: "DAILY" },
//   { no: "20606", name: "TCN-MS (Tiruchendur - Egmore)", time: "08:25", days: "DAILY" },
//   { no: "12606", name: "KKDI-MS PALLAVAN", time: "10:25", days: "DAILY" },
//   { no: "06190", name: "TPJ-TBM (Trichy - Tambaram)", time: "11:00", days: "Expt. Mon, Thu" },
//   { no: "17654", name: "PDY-KCG: KACHEGUDA", time: "14:35", days: "SUN, TUE, FRI" },
//   { no: "66046", name: "VM-MSB MEMU", time: "14:40", days: "DAILY" },
//   { no: "17656", name: "PDY-COA: CIRCAR", time: "15:10", days: "MON, THU, SAT" },
//   { no: "16112", name: "PDY-TPTY (Puducherry - Tirupati)", time: "16:50", days: "DAILY" },
//   { no: "12666", name: "CAPE-HWH (Kanyakumari - Howrah)", time: "17:10", days: "SAT" },
//   { no: "12664", name: "TPJ-HWH (Trichy - Howrah)", time: "17:10", days: "TUE, FRI" },
//   { no: "16352", name: "NCJ-CSMT (Nagercoil - Mumbai)", time: "17:15", days: "SUN, THU" },
//   { no: "22676", name: "TPJ-MS-CHOLAN", time: "17:25", days: "DAILY" },
//   { no: "66052", name: "PDY-MS MEMU", time: "17:50", days: "DAILY" },
//   { no: "16128", name: "GUV-MS (Guruvayur - Egmore)", time: "18:30", days: "DAILY" },
// ];

// // --- MASTER EVENT LIST (Preserved) ---
// const masterEventList = [
//   {
//     date: "31.01.2026",
//     titleEnglish: "Thaipoosa Jyothi Peruvizha",
//     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "17.02.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" 
//   },
//   {
//     date: "03.03.2026",
//     titleEnglish: "Amma's 86th Birthday",
//     titleTamil: "86வது அவதார திருநாள்",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "18.03.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "19.03.2026",
//     titleEnglish: "Telugu New Year",
//     titleTamil: "தெலுங்கு வருடப்பிறப்பு",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "01.04.2026",
//     titleEnglish: "Pournami Pooja",
//     titleTamil: "பௌர்ணமி பூஜை",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "14.04.2026",
//     titleEnglish: "Tamil New Year",
//     titleTamil: "தமிழ் வருடப்பிறப்பு",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "17.04.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "30.04.2026",
//     titleEnglish: "Chitra Pournami Velvi",
//     titleTamil: "சித்திரை பௌர்ணமி வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },

//   // MAY
//   {
//     date: "01.05.2026",
//     titleEnglish: "Labour Day",
//     titleTamil: "தொழிலாளர் தினம்",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "16.05.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "31.05.2026",
//     titleEnglish: "Pournami Pooja",
//     titleTamil: "பௌர்ணமி பூஜை",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },

//   // JUNE
//   {
//     date: "14.06.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "29.06.2026",
//     titleEnglish: "Pournami Pooja",
//     titleTamil: "பௌர்ணமி பூஜை",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },

//   // JULY
//   {
//     date: "14.07.2026",
//     titleEnglish: "Ammavasai Velvi",
//     titleTamil: "அமாவாசை வேள்வி",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   },
//   {
//     date: "29.07.2026",
//     titleEnglish: "Pournami Pooja",
//     titleTamil: "பௌர்ணமி பூஜை",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   }
// ];

// const parseDate = (dateStr: string) => {
//   const [day, month, year] = dateStr.split('.').map(Number);
//   return new Date(year, month - 1, day);
// };

// export default function EventPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState<'volunteer' | 'event' | 'train'>('volunteer');
//   const [searchTerm, setSearchTerm] = useState("");
//   const [daysToGo, setDaysToGo] = useState(0);
//   const [mainEvent, setMainEvent] = useState(masterEventList[0]);

//   const filteredTrains = trainData.filter(t => 
//     t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     t.no.includes(searchTerm) || 
//     t.days.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const upcomingEventsList = [
//     { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
//     { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
//     { date: "18.03.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
//     { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
//   ];

//   useEffect(() => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const upcomingEvent = masterEventList.find(event => {
//       const eventDate = parseDate(event.date);
//       return eventDate >= today;
//     });

//     const targetEvent = upcomingEvent || masterEventList[masterEventList.length - 1];
//     setMainEvent(targetEvent);

//     const targetDateObj = parseDate(targetEvent.date);
//     const diffTime = targetDateObj.getTime() - today.getTime();
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
//     setDaysToGo(diffDays);

//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!isOpen) return null;

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 md:py-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black/80 backdrop-blur-md"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", bounce: 0.3 }}
//             className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
//           >
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             {/* LEFT SIDE: IMAGE */}
//             <div className="relative hidden md:block w-2/5 h-full bg-red-900">
//               <Image
//                 src={mainEvent.image}
//                 alt="Event Banner"
//                 fill
//                 className="object-cover opacity-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
//               <div className="absolute bottom-0 left-0 w-full p-8 text-white">
//                 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
//                   <Sparkles className="w-3 h-3" /> Upcoming Festival
//                 </div>
//                 <h2 className="text-3xl font-bold leading-tight mb-2">{mainEvent.titleEnglish}</h2>
//                 <p className="text-lg text-white/80 font-tamil mb-6">{mainEvent.titleTamil}</p>
//                 <div className="flex gap-4">
//                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center min-w-[70px]">
//                       <div className="text-2xl font-bold">{daysToGo}</div>
//                       <div className="text-[10px] uppercase tracking-wider opacity-70">Days</div>
//                    </div>
//                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 flex-grow">
//                       <div className="text-sm opacity-70 uppercase mb-1">Event Date</div>
//                       <div className="text-xl font-bold text-[#ffc107]">{mainEvent.date}</div>
//                    </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SIDE: CONTENT */}
//             <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
//               <div className="flex-none flex border-b border-gray-200">
//                 <button onClick={() => setActiveTab('volunteer')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'volunteer' ? 'text-orange-600 bg-orange-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
//                   <span className="flex items-center justify-center gap-2"><HeartHandshake className="w-4 h-4" /> Volunteer</span>
//                   {activeTab === 'volunteer' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />}
//                 </button>
//                 <button onClick={() => setActiveTab('event')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
//                   <span className="flex items-center justify-center gap-2"><Calendar className="w-4 h-4" /> Festival</span>
//                   {activeTab === 'event' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />}
//                 </button>
//                 <button onClick={() => setActiveTab('train')} className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
//                   <span className="flex items-center justify-center gap-2"><TrainFront className="w-4 h-4" /> Trains</span>
//                   {activeTab === 'train' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />}
//                 </button>
//               </div>

//               <div className="flex-grow overflow-y-auto p-6 bg-white relative">
                
//                 {/* --- VOLUNTEER TAB (UPDATED WITH CHITHIRAI POURNAMI FORM) --- */}
//                 {activeTab === 'volunteer' && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 flex flex-col pb-4">
//                     <div className="text-center pt-2">
//                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-4">
//                          <HeartHandshake className="w-3 h-3" /> Seva Opportunity
//                        </div>
//                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">Serve with <span className="text-[#a7150b]">Devotion.</span></h2>
                       
//                        {/* NEW: Chithirai Pournami Offline Form Highlight Card */}
//                        <div className="bg-gradient-to-br from-red-50 to-orange-50/50 border border-red-100 p-5 rounded-2xl shadow-sm text-left mb-6 relative overflow-hidden">
//                           <div className="absolute -right-4 -top-4 text-red-100/50 pointer-events-none">
//                              <FileText className="w-24 h-24" />
//                           </div>
//                           <div className="relative z-10">
//                               <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
//                                 <Sparkles className="w-4 h-4 text-[#a7150b]" /> Chithirai Pournami 2026 Velvi
//                               </h3>
//                               <p className="text-sm text-gray-700 mb-4 leading-relaxed pr-4">
//                                 Registering for the upcoming Velvi? Download the official physical form. Please attach a <strong>stamp-size photograph</strong> and your <strong>Aadhar copy</strong>, and ensure it has the required signatures before submission.
//                               </p>
//                               <a 
//                                 href="/Volunteer-Form.pdf" 
//                                 download="Melmaruvathur_Volunteer_Form.pdf"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center justify-center gap-2 bg-white text-[#a7150b] border border-red-200 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-red-50 transition-colors w-full md:w-auto"
//                               >
//                                 <Download className="w-4 h-4" /> Download PDF Form
//                               </a>
//                           </div>
//                        </div>

//                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
//                           <p className="text-sm md:text-base font-serif italic text-gray-700 leading-relaxed">"செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."</p>
//                        </div>
//                        <p className="text-gray-600 font-medium mb-6 max-w-lg mx-auto leading-relaxed text-sm">Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.</p>
//                        <div className="mb-2"><p className="text-[#a7150b] font-bold text-sm">"ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."</p></div>
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* --- EVENT TAB --- */}
//                 {activeTab === 'event' && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
//                      <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
//                         <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"><h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2></div>
//                      </div>
//                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
//                         <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
//                         <div><p className="text-xs font-bold text-gray-400 uppercase">Venue</p><p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p></div>
//                      </div>
//                      <div className="space-y-2">
//                         <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
//                         <p className="text-gray-600 leading-relaxed text-sm">Join us for the grand <strong>{mainEvent.titleEnglish}</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy occasion.</p>
//                      </div>
//                      <div className="pt-4 border-t border-gray-100">
//                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">Upcoming Events</h3>
//                          <div className="space-y-3">
//                            {upcomingEventsList.map((evt, idx) => (
//                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
//                               <div className="w-12 text-center shrink-0">
//                                 <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
//                                 <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
//                               </div>
//                               <div><div className="text-sm font-bold text-gray-800">{evt.title}</div><div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div></div>
//                             </div>
//                           ))}
//                         </div>
//                      </div>
//                   </motion.div>
//                 )}

//                 {/* --- TRAIN TAB --- */}
//                 {activeTab === 'train' && (
//                   <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 h-full flex flex-col">
//                     <div className="sticky top-0 bg-white z-10 pb-2">
//                       <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
//                         <Search className="w-5 h-5 text-gray-400 ml-2" />
//                         <input type="text" placeholder="Search (e.g. Madurai, 12631)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 outline-none text-sm bg-transparent" />
//                       </div>
//                       <div className="text-xs text-center text-gray-400 mt-2">{filteredTrains.length} trains stopping at Melmaruvathur</div>
//                     </div>
//                     <div className="flex-grow space-y-3 pb-2">
//                       {filteredTrains.length > 0 ? (
//                         filteredTrains.map((train, idx) => (
//                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
//                             <div className="flex items-center gap-3 overflow-hidden">
//                                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">#{train.no}</div>
//                                <div className="min-w-0">
//                                  <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
//                                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> {train.days}</p>
//                                </div>
//                             </div>
//                             <div className="text-right shrink-0 pl-2"><div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm"><Clock className="w-3 h-3" /> {train.time}</div></div>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="text-center py-10 opacity-50"><TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" /><p className="text-sm font-medium text-gray-500">No trains match your search</p></div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </div>

//               {/* FOOTER */}
//               <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
//                   {activeTab === 'volunteer' && (
//                     <Link href="/activities/volunteer" onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#a7150b] text-white rounded-xl font-bold hover:bg-[#8a0d08] transition-all flex items-center justify-center gap-2 text-sm shadow-md group">Apply for Volunteering Online <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
//                   )}
//                   {activeTab === 'event' && (
//                     <div className="space-y-3">
//                       <Link href="/all-events" onClick={() => setIsOpen(false)} className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-sm">View All Events <ArrowRight className="w-4 h-4" /></Link>
//                       <a href="/event-pdf.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm">Download PDF <Download className="w-4 h-4" /></a>
//                     </div>
//                   )}
//                   {activeTab === 'train' && (
//                     <Link href="/train-schedule" onClick={() => setIsOpen(false)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md">Open Full Schedule Page <ExternalLink className="w-4 h-4" /></Link>
//                   )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Calendar, 
  MapPin, 
  Download, 
  Sparkles, 
  ArrowRight, 
  TrainFront, 
  Search, 
  Clock, 
  ExternalLink,
  HeartHandshake,
  FileText,
  Moon // Added Moon icon for Chithra Pournami
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- UPDATED TRAIN DATA (From Document Schedules) ---
const trainData = [
  // DOWN TRAINS (Southbound)
  { no: "16159", name: "MS-MAQ (Egmore - Mangalore)", time: "00:35", days: "DAILY" },
  { no: "17655", name: "COA-PDY (Kakinada - Puducherry)", time: "07:40", days: "SUN, TUE, FRI" },
  { no: "66051", name: "MS-PDY MEMU", time: "08:20", days: "DAILY" },
  { no: "17653", name: "KCG-PDY (Kacheguda - Puducherry)", time: "08:45", days: "MON, THU, SAT" },
  { no: "22675", name: "MS-TPJ CHOLAN", time: "09:20", days: "DAILY" },
  { no: "16111", name: "TPDY-PDY-MEMU", time: "09:55", days: "DAILY" },
  { no: "66045", name: "TBM-VM-MEMU", time: "11:10", days: "DAILY" },
  { no: "16127", name: "MS-GUV (Chennai - Guruvayur)", time: "12:00", days: "DAILY" },
  { no: "06191", name: "TBM-TPJ SPL", time: "16:25", days: "Expt. Mon, Thu" },
  { no: "12605", name: "MS-KKDI PALLAVAN", time: "17:00", days: "DAILY" },
  { no: "20605", name: "MS-TCN CHENDUR", time: "17:20", days: "DAILY" },
  { no: "12633", name: "MS-CAPE KANNIYAKUMARI", time: "18:40", days: "DAILY" },
  { no: "22661", name: "MS-RMM SETHU", time: "19:15", days: "DAILY" },
  { no: "66055", name: "TBM-VM-MEMU", time: "19:35", days: "DAILY" },
  { no: "16115", name: "MS-PDY (Chennai - Puducherry)", time: "19:48", days: "DAILY" },
  { no: "16351", name: "CSMT-NCJ (Mumbai - Nagercoil)", time: "20:00", days: "TUE, SAT" },
  { no: "12693", name: "MS-TN PEARLCITY", time: "20:45", days: "DAILY" },
  { no: "20635", name: "MS-QLN ANANTAPURI", time: "21:20", days: "DAILY" },
  { no: "12665", name: "HWH-CAPE (Howrah - Kanyakumari)", time: "21:30", days: "TUE" },
  { no: "20681", name: "TBM-SCT SILAMBU", time: "21:45", days: "WED, FRI, SAT" },
  { no: "16751", name: "MS-RMM (Chennai - Rameswaram)", time: "21:55", days: "DAILY" },
  { no: "12631", name: "MS-TEN NELLAI", time: "22:10", days: "DAILY" },
  { no: "12663", name: "HWH-TPJ (Howrah - Trichy)", time: "22:25", days: "MON, FRI" },
  { no: "16175", name: "MS-KIK (Chennai - Karaikal)", time: "22:25", days: "DAILY" },
  
  // UP TRAINS (Northbound)
  { no: "16160", name: "MAQ-MS (Mangalore - Egmore)", time: "01:40", days: "DAILY" },
  { no: "22154", name: "SA-MS (Salem - Egmore)", time: "01:50", days: "DAILY" },
  { no: "20636", name: "QLN-MS ANANTAPURI", time: "03:40", days: "DAILY" },
  { no: "12634", name: "CAPE-MS (Kanyakumari - Egmore)", time: "04:10", days: "DAILY" },
  { no: "12632", name: "TEN-MS NELLAI", time: "04:40", days: "DAILY" },
  { no: "22662", name: "RMM-MS SETHU", time: "04:50", days: "DAILY" },
  { no: "12694", name: "TN-MS PEARLCITY", time: "05:10", days: "DAILY" },
  { no: "16752", name: "RMM-MS (Rameswaram - Egmore)", time: "05:20", days: "DAILY" },
  { no: "66056", name: "VM-TBM MEMU", time: "06:20", days: "DAILY" },
  { no: "16116", name: "PDY-MS (Puducherry - Egmore)", time: "07:25", days: "DAILY" },
  { no: "20606", name: "TCN-MS (Tiruchendur - Egmore)", time: "08:25", days: "DAILY" },
  { no: "12606", name: "KKDI-MS PALLAVAN", time: "10:25", days: "DAILY" },
  { no: "06190", name: "TPJ-TBM (Trichy - Tambaram)", time: "11:00", days: "Expt. Mon, Thu" },
  { no: "17654", name: "PDY-KCG: KACHEGUDA", time: "14:35", days: "SUN, TUE, FRI" },
  { no: "66046", name: "VM-MSB MEMU", time: "14:40", days: "DAILY" },
  { no: "17656", name: "PDY-COA: CIRCAR", time: "15:10", days: "MON, THU, SAT" },
  { no: "16112", name: "PDY-TPTY (Puducherry - Tirupati)", time: "16:50", days: "DAILY" },
  { no: "12666", name: "CAPE-HWH (Kanyakumari - Howrah)", time: "17:10", days: "SAT" },
  { no: "12664", name: "TPJ-HWH (Trichy - Howrah)", time: "17:10", days: "TUE, FRI" },
  { no: "16352", name: "NCJ-CSMT (Nagercoil - Mumbai)", time: "17:15", days: "SUN, THU" },
  { no: "22676", name: "TPJ-MS-CHOLAN", time: "17:25", days: "DAILY" },
  { no: "66052", name: "PDY-MS MEMU", time: "17:50", days: "DAILY" },
  { no: "16128", name: "GUV-MS (Guruvayur - Egmore)", time: "18:30", days: "DAILY" },
];

// --- MASTER EVENT LIST (Preserved) ---
const masterEventList = [
  {
    date: "31.01.2026",
    titleEnglish: "Thaipoosa Jyothi Peruvizha",
    titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "17.02.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg" 
  },
  {
    date: "03.03.2026",
    titleEnglish: "Amma's 86th Birthday",
    titleTamil: "86வது அவதார திருநாள்",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "18.03.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "19.03.2026",
    titleEnglish: "Telugu New Year",
    titleTamil: "தெலுங்கு வருடப்பிறப்பு",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "01.04.2026",
    titleEnglish: "Pournami Pooja",
    titleTamil: "பௌர்ணமி பூஜை",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "14.04.2026",
    titleEnglish: "Tamil New Year",
    titleTamil: "தமிழ் வருடப்பிறப்பு",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },
  {
    date: "17.04.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  },


  // MAY
  {
    date: "01.05.2026",
    titleEnglish: "Chitra Pournami Velvi",
    titleTamil: "சித்திரை பௌர்ணமி வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },
  // {
  //   date: "01.05.2026",
  //   titleEnglish: "Labour Day",
  //   titleTamil: "தொழிலாளர் தினம்",
  //   location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
  //   image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  // },
  {
    date: "16.05.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },
  {
    date: "31.05.2026",
    titleEnglish: "Pournami Pooja",
    titleTamil: "பௌர்ணமி பூஜை",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },

  // JUNE
  {
    date: "14.06.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },
  {
    date: "29.06.2026",
    titleEnglish: "Pournami Pooja",
    titleTamil: "பௌர்ணமி பூஜை",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },

  // JULY
  {
    date: "14.07.2026",
    titleEnglish: "Ammavasai Velvi",
    titleTamil: "அமாவாசை வேள்வி",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  },
  {
    date: "29.07.2026",
    titleEnglish: "Pournami Pooja",
    titleTamil: "பௌர்ணமி பூஜை",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1777464285/WhatsApp_Image_2026-04-29_at_4.32.20_PM_ruvbdv.jpg"
  }
];

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split('.').map(Number);
  return new Date(year, month - 1, day);
};

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  // Added 'chitra pournami' to the type definition
  const [activeTab, setActiveTab] = useState<'chitra pournami' | 'volunteer' | 'event' | 'train'>('chitra pournami');
  const [searchTerm, setSearchTerm] = useState("");
  const [daysToGo, setDaysToGo] = useState(0);
  const [mainEvent, setMainEvent] = useState(masterEventList[0]);

  const filteredTrains = trainData.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.no.includes(searchTerm) || 
    t.days.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingEventsList = [
    { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
    { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
    { date: "18.03.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
    { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
  ];

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcomingEvent = masterEventList.find(event => {
      const eventDate = parseDate(event.date);
      return eventDate >= today;
    });

    const targetEvent = upcomingEvent || masterEventList[masterEventList.length - 1];
    setMainEvent(targetEvent);

    const targetDateObj = parseDate(targetEvent.date);
    const diffTime = targetDateObj.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    setDaysToGo(diffDays);

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-4 md:py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT SIDE: IMAGE */}
            <div className="relative hidden md:block w-2/5 h-full bg-red-900">
              <Image
                src={mainEvent.image}
                alt="Event Banner"
                fill
                className="object-fill opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> Upcoming Festival
                </div>
                <h2 className="text-3xl font-bold leading-tight mb-2">{mainEvent.titleEnglish}</h2>
                <p className="text-lg text-white/80 font-tamil mb-6">{mainEvent.titleTamil}</p>
                <div className="flex gap-4">
                   <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center min-w-[70px]">
                      <div className="text-2xl font-bold">{daysToGo}</div>
                      <div className="text-[10px] uppercase tracking-wider opacity-70">Days</div>
                   </div>
                   <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 flex-grow">
                      <div className="text-sm opacity-70 uppercase mb-1">Event Date</div>
                      <div className="text-xl font-bold text-[#ffc107]">{mainEvent.date}</div>
                   </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: CONTENT */}
            <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
              <div className="flex-none flex border-b border-gray-200">
                                {/* NEW CHITHRA POURNAMI TAB */}
                <button onClick={() => setActiveTab('chitra pournami')} className={`flex-1 py-3 md:py-5 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'chitra pournami' ? 'text-purple-600 bg-purple-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
                  <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"><Moon className="w-4 h-4" /> <span className="text-[10px] md:text-sm leading-tight text-center">Chitra Pournami</span></span>
                  {activeTab === 'chitra pournami' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-purple-600" />}
                </button>
                <button onClick={() => setActiveTab('volunteer')} className={`flex-1 py-3 md:py-5 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'volunteer' ? 'text-orange-600 bg-orange-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
                  <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"><HeartHandshake className="w-4 h-4" /> <span>Volunteer</span></span>
                  {activeTab === 'volunteer' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />}
                </button>
                <button onClick={() => setActiveTab('event')} className={`flex-1 py-3 md:py-5 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
                  <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"><Calendar className="w-4 h-4" /> <span>Festival</span></span>
                  {activeTab === 'event' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />}
                </button>
                <button onClick={() => setActiveTab('train')} className={`flex-1 py-3 md:py-5 text-xs md:text-sm font-bold uppercase tracking-wide transition-colors relative ${activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
                  <span className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2"><TrainFront className="w-4 h-4" /> <span>Trains</span></span>
                  {activeTab === 'train' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />}
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-6 bg-white relative">
                
                {/* --- VOLUNTEER TAB --- */}
                {activeTab === 'volunteer' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 flex flex-col pb-4">
                    <div className="text-center pt-2">
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-4">
                         <HeartHandshake className="w-3 h-3" /> Seva Opportunity
                       </div>
                       <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">Serve with <span className="text-[#a7150b]">Devotion.</span></h2>
                       
                       <div className="bg-gradient-to-br from-red-50 to-orange-50/50 border border-red-100 p-5 rounded-2xl shadow-sm text-left mb-6 relative overflow-hidden">
                          <div className="absolute -right-4 -top-4 text-red-100/50 pointer-events-none">
                             <FileText className="w-24 h-24" />
                          </div>
                          <div className="relative z-10">
                              <h3 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-[#a7150b]" /> Chithirai Pournami 2026 Velvi
                              </h3>
                              <p className="text-sm text-gray-700 mb-4 leading-relaxed pr-4">
                                Registering for the upcoming Velvi? Download the official physical form. Please attach a <strong>stamp-size photograph</strong> and your <strong>Aadhar copy</strong>, and ensure it has the required signatures before submission.
                              </p>
                              <a 
                                href="/Volunteer-Form.pdf" 
                                download="Melmaruvathur_Volunteer_Form.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#a7150b] border border-red-200 px-5 py-2.5 rounded-xl font-bold text-sm shadow-sm hover:bg-red-50 transition-colors w-full md:w-auto"
                              >
                                <Download className="w-4 h-4" /> Download PDF Form
                              </a>
                          </div>
                       </div>

                       <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                          <p className="text-sm md:text-base font-serif italic text-gray-700 leading-relaxed">"செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."</p>
                       </div>
                       <p className="text-gray-600 font-medium mb-6 max-w-lg mx-auto leading-relaxed text-sm">Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.</p>
                       <div className="mb-2"><p className="text-[#a7150b] font-bold text-sm">"ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."</p></div>
                    </div>
                  </motion.div>
                )}

                {/* --- EVENT TAB --- */}
                {activeTab === 'event' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                     <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
                        <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4"><h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2></div>
                     </div>
                     <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
                        <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
                        <div><p className="text-xs font-bold text-gray-400 uppercase">Venue</p><p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p></div>
                     </div>
                     <div className="space-y-2">
                        <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">Join us for the grand <strong>{mainEvent.titleEnglish}</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy occasion.</p>
                     </div>
                     <div className="pt-4 border-t border-gray-100">
                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">Upcoming Events</h3>
                         <div className="space-y-3">
                           {upcomingEventsList.map((evt, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                              <div className="w-12 text-center shrink-0">
                                <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
                                <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
                              </div>
                              <div><div className="text-sm font-bold text-gray-800">{evt.title}</div><div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div></div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </motion.div>
                )}

                {/* --- TRAIN TAB --- */}
                {activeTab === 'train' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4 h-full flex flex-col">
                    <div className="sticky top-0 bg-white z-10 pb-2">
                      <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
                        <Search className="w-5 h-5 text-gray-400 ml-2" />
                        <input type="text" placeholder="Search (e.g. Madurai, 12631)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full p-2 outline-none text-sm bg-transparent" />
                      </div>
                      <div className="text-xs text-center text-gray-400 mt-2">{filteredTrains.length} trains stopping at Melmaruvathur</div>
                    </div>
                    <div className="flex-grow space-y-3 pb-2">
                      {filteredTrains.length > 0 ? (
                        filteredTrains.map((train, idx) => (
                          <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
                            <div className="flex items-center gap-3 overflow-hidden">
                               <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">#{train.no}</div>
                               <div className="min-w-0">
                                 <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
                                 <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1"><Calendar className="w-3 h-3" /> {train.days}</p>
                               </div>
                            </div>
                            <div className="text-right shrink-0 pl-2"><div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm"><Clock className="w-3 h-3" /> {train.time}</div></div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-10 opacity-50"><TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" /><p className="text-sm font-medium text-gray-500">No trains match your search</p></div>
                      )}
                    </div>
                  </motion.div>
                )}

{  /* --- NEW: CHITHRA POURNAMI TAB --- */}
                {activeTab === 'chitra pournami' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 flex flex-col h-full pb-4">
                    <div className="text-center pt-2">
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                         <Sparkles className="w-3 h-3" /> Special Event
                       </div>
                       <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">Chitra Pournami <span className="text-purple-700">Velvi</span></h2>

                       {/* UPDATED IMAGE CONTAINER: Removed fixed height, uses width/height to auto-scale */}
                       <div className="relative w-full rounded-2xl overflow-hidden shadow-lg mb-6 border border-gray-200 bg-[#fff8ea]">
                         <Image 
                           src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1777280802/chithirai-popup_v08j34.jpg" 
                           alt="Chithra Pournami Velvi Instructions" 
                           width={800} 
                           height={1422} 
                           className="w-full h-auto object-contain"
                           priority
                         />
                       </div>

                       <p className="text-gray-600 font-medium mb-6 max-w-lg mx-auto leading-relaxed text-sm">
                         Join us for the auspicious Chitra Pournami Velvi. Please read the guidelines in the poster above regarding the pooja items and procedures to seek Amma's blessings.
                       </p>
                       
                       <div className="bg-purple-50 p-4 rounded-xl border border-purple-100 flex items-center justify-center gap-3">
                         <Calendar className="w-5 h-5 text-purple-600" />
                         {/* Updated date to match the date on your poster */}
                         <span className="font-bold text-gray-800 text-lg">01.05.2026</span>
                       </div>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* FOOTER */}
              <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
                  {activeTab === 'volunteer' && (
                    <Link href="/activities/volunteer" onClick={() => setIsOpen(false)} className="w-full py-3 bg-[#a7150b] text-white rounded-xl font-bold hover:bg-[#8a0d08] transition-all flex items-center justify-center gap-2 text-sm shadow-md group">Apply for Volunteering Online <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                  )}
                  {activeTab === 'event' && (
                    <div className="space-y-3">
                      <Link href="/all-events" onClick={() => setIsOpen(false)} className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-sm">View All Events <ArrowRight className="w-4 h-4" /></Link>
                      <a href="/event-pdf.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm">Download PDF <Download className="w-4 h-4" /></a>
                    </div>
                  )}
                  {activeTab === 'train' && (
                    <Link href="/train-schedule" onClick={() => setIsOpen(false)} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md">Open Full Schedule Page <ExternalLink className="w-4 h-4" /></Link>
                  )}
                  {/* Footer action for new tab */}
                  {activeTab === 'chitra pournami' && (
                    <Link href="/all-events" onClick={() => setIsOpen(false)} className="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md group">View All Events<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                  )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}