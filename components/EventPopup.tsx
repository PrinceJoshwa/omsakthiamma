// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { X, Calendar, MapPin, Download, Sparkles, ArrowRight, TrainFront, Search, Clock } from 'lucide-react';
// // // import Image from 'next/image';
// // // import Link from 'next/link';

// // // // --- FULL TRAIN DATA (From Railway Image) ---
// // // // I have included ALL the trains here so they appear IN the popup
// // // const trainData = [
// // //   { no: "16368", name: "Kashi Tamil Sangamam", time: "07:20 AM", days: "Tue" },
// // //   { no: "22536", name: "Varanasi - Rameswaram", time: "09:50 AM", days: "Tue" },
// // //   { no: "20849", name: "Bhubaneswar - Rameswaram", time: "09:50 AM", days: "Sat" },
// // //   { no: "20851", name: "Bhubaneswar - Puducherry", time: "09:50 AM", days: "Wed" },
// // //   { no: "22673", name: "Jodhpur - Mannargudi", time: "11:05 AM", days: "Sat" },
// // //   { no: "20481", name: "Bhagat Ki Kothi - Trichy", time: "11:05 AM", days: "Fri" },
// // //   { no: "22404", name: "New Delhi - Puducherry", time: "11:05 AM", days: "Tue" },
// // //   { no: "20498", name: "Firozpur - Rameswaram", time: "11:05 AM", days: "Mon" },
// // //   { no: "22101", name: "Mumbai LTT - Madurai", time: "11:25 AM", days: "Thu" },
// // //   { no: "22632", name: "Bikaner - Madurai", time: "11:25 AM", days: "Tue" },
// // //   { no: "11017", name: "Mumbai LTT - Karaikal", time: "12:45 PM", days: "Sun" },
// // //   { no: "12635", name: "Chennai Egmore - Madurai", time: "03:05 PM", days: "Daily" },
// // //   { no: "22614", name: "Ayodhya - Rameswaram", time: "03:15 PM", days: "Fri" },
// // //   { no: "12652", name: "Delhi Nizamuddin - Madurai", time: "05:35 PM", days: "Wed, Fri" },
// // //   { no: "12642", name: "Delhi Nizamuddin - Kanyakumari", time: "05:35 PM", days: "Tue, Sun" },
// // //   { no: "16101", name: "Chennai Egmore - Kollam", time: "06:25 PM", days: "Daily" },
// // //   { no: "16103", name: "Tambaram - Rameswaram", time: "07:05 PM", days: "Daily" },
// // //   { no: "12667", name: "Chennai Egmore - Nagercoil", time: "08:25 PM", days: "Thu" },
// // //   { no: "22657", name: "Tambaram - Nagercoil", time: "08:25 PM", days: "Sun, Mon, Wed" },
// // //   { no: "12661", name: "Chennai Egmore - Sengottai", time: "09:35 PM", days: "Daily" },
// // //   { no: "20683", name: "Tambaram - Sengottai", time: "09:55 PM", days: "Sun, Tue, Thu" },
// // //   { no: "12637", name: "Chennai Egmore - Madurai", time: "10:05 PM", days: "Daily" },
// // //   { no: "22623", name: "Chennai Egmore - Madurai", time: "11:25 PM", days: "Fri, Sun" },
// // //   { no: "20691", name: "Tambaram - Nagercoil", time: "11:35 PM", days: "Daily" },
// // //   { no: "16865", name: "Chennai Egmore - Thanjavur", time: "11:55 PM", days: "Daily" },
// // //   { no: "16179", name: "Chennai Egmore - Mannargudi", time: "12:20 AM", days: "Daily" },
// // //   { no: "12653", name: "Chennai Egmore - Trichy", time: "12:50 AM", days: "Daily" },
// // //   { no: "22153", name: "Chennai Egmore - Salem", time: "01:15 AM", days: "Daily" },
// // // ];

// // // export default function EventPopup() {
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [activeTab, setActiveTab] = useState<'event' | 'train'>('event'); // Tab State
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [daysToGo, setDaysToGo] = useState(0);

// // //   // Search Logic for Trains
// // //   const filteredTrains = trainData.filter(t => 
// // //     t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// // //     t.no.includes(searchTerm) || 
// // //     t.days.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   // Main Event Data
// // //   const mainEvent = {
// // //     date: "31.01.2026",
// // //     day: "Saturday",
// // //     titleEnglish: "Thaipoosa Jyothi Peruvizha",
// // //     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
// // //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// // //     image: "/om4.jpeg"
// // //   };

// // //   // Other Events Data (Preserved)
// // //   const upcomingEventsList = [
// // //     { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
// // //     { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
// // //     { date: "18.03.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
// // //     { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
// // //   ];

// // //   useEffect(() => {
// // //     const eventDate = new Date('2026-01-31');
// // //     const today = new Date();
// // //     const diffTime = Math.abs(eventDate.getTime() - today.getTime());
// // //     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// // //     setDaysToGo(diffDays);

// // //     const timer = setTimeout(() => {
// // //       setIsOpen(true);
// // //     }, 2000);

// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   if (!isOpen) return null;

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
          
// // //           {/* Backdrop */}
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             onClick={() => setIsOpen(false)}
// // //             className="fixed inset-0 bg-black/75 backdrop-blur-md"
// // //           />

// // //           {/* Popup Container */}
// // //           <motion.div
// // //             initial={{ opacity: 0, scale: 0.95, y: 20 }}
// // //             animate={{ opacity: 1, scale: 1, y: 0 }}
// // //             exit={{ opacity: 0, scale: 0.95, y: 20 }}
// // //             transition={{ type: "spring", bounce: 0.3 }}
// // //             className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
// // //           >
// // //             {/* Close Button */}
// // //             <button
// // //               onClick={() => setIsOpen(false)}
// // //               className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600"
// // //             >
// // //               <X className="w-5 h-5" />
// // //             </button>

// // //             {/* --- LEFT SIDE: IMAGE (Always Visible) --- */}
// // //             <div className="relative hidden md:block w-2/5 h-full bg-red-900">
// // //               <Image
// // //                 src={mainEvent.image}
// // //                 alt="Event Banner"
// // //                 fill
// // //                 className="object-cover opacity-90"
// // //               />
// // //               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
// // //               <div className="absolute bottom-0 left-0 w-full p-8 text-white">
// // //                 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
// // //                   <Sparkles className="w-3 h-3" />
// // //                   Upcoming Festival
// // //                 </div>
// // //                 <h2 className="text-3xl font-bold leading-tight mb-2">{mainEvent.titleEnglish}</h2>
// // //                 <p className="text-lg text-white/80 font-tamil mb-6">{mainEvent.titleTamil}</p>
                
// // //                 <div className="flex gap-4">
// // //                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center min-w-[70px]">
// // //                       <div className="text-2xl font-bold">{daysToGo}</div>
// // //                       <div className="text-[10px] uppercase tracking-wider opacity-70">Days</div>
// // //                    </div>
// // //                    <div className="bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/10 flex-grow">
// // //                       <div className="text-sm opacity-70 uppercase mb-1">Event Date</div>
// // //                       <div className="text-xl font-bold text-[#ffc107]">{mainEvent.date}</div>
// // //                    </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* --- RIGHT SIDE: TABS & CONTENT --- */}
// // //             <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
              
// // //               {/* 1. TABS HEADER */}
// // //               <div className="flex border-b border-gray-200">
// // //                 <button
// // //                   onClick={() => setActiveTab('event')}
// // //                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
// // //                     activeTab === 'event' ? 'text-[#a7150b] bg-red-50/50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <span className="flex items-center justify-center gap-2">
// // //                     <Calendar className="w-4 h-4" /> Festival Details
// // //                   </span>
// // //                   {activeTab === 'event' && (
// // //                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />
// // //                   )}
// // //                 </button>
// // //                 <button
// // //                   onClick={() => setActiveTab('train')}
// // //                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
// // //                     activeTab === 'train' ? 'text-blue-600 bg-blue-50/50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
// // //                   }`}
// // //                 >
// // //                   <span className="flex items-center justify-center gap-2">
// // //                     <TrainFront className="w-4 h-4" /> Train Schedule
// // //                   </span>
// // //                   {activeTab === 'train' && (
// // //                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
// // //                   )}
// // //                 </button>
// // //               </div>

// // //               {/* 2. SCROLLABLE CONTENT AREA */}
// // //               <div className="flex-grow overflow-y-auto p-6 bg-white">
                
// // //                 {/* === TAB 1: EVENT DETAILS === */}
// // //                 {activeTab === 'event' && (
// // //                   <motion.div 
// // //                     initial={{ opacity: 0, x: -10 }} 
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     className="space-y-6"
// // //                   >
// // //                      {/* Mobile Image */}
// // //                      <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
// // //                         <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
// // //                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
// // //                            <h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2>
// // //                         </div>
// // //                      </div>

// // //                      {/* Location Card */}
// // //                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
// // //                         <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
// // //                         <div>
// // //                           <p className="text-xs font-bold text-gray-400 uppercase">Venue</p>
// // //                           <p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p>
// // //                         </div>
// // //                      </div>

// // //                      {/* Description */}
// // //                      <div className="space-y-2">
// // //                         <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
// // //                         <p className="text-gray-600 leading-relaxed text-sm">
// // //                           Join us for the grand <strong>Thaipoosa Jyothi Peruvizha</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy flame.
// // //                         </p>
// // //                      </div>

// // //                      {/* Other Events List (Preserved!) */}
// // //                      <div className="pt-4 border-t border-gray-100">
// // //                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
// // //                           Upcoming Events
// // //                         </h3>
// // //                         <div className="space-y-3">
// // //                           {upcomingEventsList.map((evt, idx) => (
// // //                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
// // //                               <div className="w-12 text-center shrink-0">
// // //                                 <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
// // //                                 <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
// // //                               </div>
// // //                               <div>
// // //                                 <div className="text-sm font-bold text-gray-800">{evt.title}</div>
// // //                                 <div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div>
// // //                               </div>
// // //                             </div>
// // //                           ))}
// // //                         </div>
// // //                      </div>
// // //                   </motion.div>
// // //                 )}

// // //                 {/* === TAB 2: TRAIN SCHEDULE (ALL TRAINS) === */}
// // //                 {activeTab === 'train' && (
// // //                   <motion.div 
// // //                     initial={{ opacity: 0, x: 10 }} 
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     className="space-y-4 h-full flex flex-col"
// // //                   >
// // //                     {/* Search Input */}
// // //                     <div className="sticky top-0 bg-white z-10 pb-2">
// // //                       <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
// // //                         <Search className="w-5 h-5 text-gray-400 ml-2" />
// // //                         <input 
// // //                           type="text" 
// // //                           placeholder="Search (e.g. Madurai, 12635)..." 
// // //                           value={searchTerm}
// // //                           onChange={(e) => setSearchTerm(e.target.value)}
// // //                           className="w-full p-2 outline-none text-sm bg-transparent"
// // //                         />
// // //                       </div>
// // //                       <div className="text-xs text-center text-gray-400 mt-2">
// // //                         Displaying {filteredTrains.length} special stops at Melmaruvathur
// // //                       </div>
// // //                     </div>

// // //                     {/* Scrollable Train List */}
// // //                     <div className="flex-grow space-y-3 pb-4">
// // //                       {filteredTrains.length > 0 ? (
// // //                         filteredTrains.map((train, idx) => (
// // //                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
// // //                             <div className="flex items-center gap-3 overflow-hidden">
// // //                                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">
// // //                                  #{train.no}
// // //                                </div>
// // //                                <div className="min-w-0">
// // //                                  <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
// // //                                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
// // //                                    <Calendar className="w-3 h-3" /> {train.days}
// // //                                  </p>
// // //                                </div>
// // //                             </div>
// // //                             <div className="text-right shrink-0 pl-2">
// // //                                <div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm">
// // //                                  <Clock className="w-3 h-3" /> {train.time}
// // //                                </div>
// // //                             </div>
// // //                           </div>
// // //                         ))
// // //                       ) : (
// // //                         <div className="text-center py-10 opacity-50">
// // //                            <TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" />
// // //                            <p className="text-sm font-medium text-gray-500">No trains match your search</p>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </motion.div>
// // //                 )}

// // //               </div>

// // //               {/* 3. FOOTER ACTIONS */}
// // //               <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3 shrink-0">
// // //                   <a
// // //                     href="/event-pdf.pdf"
// // //                     target="_blank" 
// // //                     rel="noopener noreferrer"
// // //                     className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
// // //                   >
// // //                     Download Full PDF Schedule
// // //                     <Download className="w-4 h-4" />
// // //                   </a>
// // //               </div>

// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // }

// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, Calendar, MapPin, Download, Sparkles, ArrowRight, TrainFront, Search, Clock, ExternalLink } from 'lucide-react';
// // import Image from 'next/image';
// // import Link from 'next/link';

// // // --- TRAIN DATA ---
// // const trainData = [
// //   { no: "16368", name: "Kashi Tamil Sangamam", time: "07:20 AM", days: "Tue" },
// //   { no: "22536", name: "Varanasi - Rameswaram", time: "09:50 AM", days: "Tue" },
// //   { no: "20849", name: "Bhubaneswar - Rameswaram", time: "09:50 AM", days: "Sat" },
// //   { no: "20851", name: "Bhubaneswar - Puducherry", time: "09:50 AM", days: "Wed" },
// //   { no: "22673", name: "Jodhpur - Mannargudi", time: "11:05 AM", days: "Sat" },
// //   { no: "20481", name: "Bhagat Ki Kothi - Trichy", time: "11:05 AM", days: "Fri" },
// //   { no: "22404", name: "New Delhi - Puducherry", time: "11:05 AM", days: "Tue" },
// //   { no: "20498", name: "Firozpur - Rameswaram", time: "11:05 AM", days: "Mon" },
// //   { no: "22101", name: "Mumbai LTT - Madurai", time: "11:25 AM", days: "Thu" },
// //   { no: "22632", name: "Bikaner - Madurai", time: "11:25 AM", days: "Tue" },
// //   { no: "11017", name: "Mumbai LTT - Karaikal", time: "12:45 PM", days: "Sun" },
// //   { no: "12635", name: "Chennai Egmore - Madurai", time: "03:05 PM", days: "Daily" },
// //   { no: "22614", name: "Ayodhya - Rameswaram", time: "03:15 PM", days: "Fri" },
// //   { no: "12652", name: "Delhi Nizamuddin - Madurai", time: "05:35 PM", days: "Wed, Fri" },
// //   { no: "12642", name: "Delhi Nizamuddin - Kanyakumari", time: "05:35 PM", days: "Tue, Sun" },
// //   { no: "16101", name: "Chennai Egmore - Kollam", time: "06:25 PM", days: "Daily" },
// //   { no: "16103", name: "Tambaram - Rameswaram", time: "07:05 PM", days: "Daily" },
// //   { no: "12667", name: "Chennai Egmore - Nagercoil", time: "08:25 PM", days: "Thu" },
// //   { no: "22657", name: "Tambaram - Nagercoil", time: "08:25 PM", days: "Sun, Mon, Wed" },
// //   { no: "12661", name: "Chennai Egmore - Sengottai", time: "09:35 PM", days: "Daily" },
// //   { no: "20683", name: "Tambaram - Sengottai", time: "09:55 PM", days: "Sun, Tue, Thu" },
// //   { no: "12637", name: "Chennai Egmore - Madurai", time: "10:05 PM", days: "Daily" },
// //   { no: "22623", name: "Chennai Egmore - Madurai", time: "11:25 PM", days: "Fri, Sun" },
// //   { no: "20691", name: "Tambaram - Nagercoil", time: "11:35 PM", days: "Daily" },
// //   { no: "16865", name: "Chennai Egmore - Thanjavur", time: "11:55 PM", days: "Daily" },
// //   { no: "16179", name: "Chennai Egmore - Mannargudi", time: "12:20 AM", days: "Daily" },
// //   { no: "12653", name: "Chennai Egmore - Trichy", time: "12:50 AM", days: "Daily" },
// //   { no: "22153", name: "Chennai Egmore - Salem", time: "01:15 AM", days: "Daily" },
// // ];

// // export default function EventPopup() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeTab, setActiveTab] = useState<'event' | 'train'>('event');
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [daysToGo, setDaysToGo] = useState(0);

// //   const filteredTrains = trainData.filter(t => 
// //     t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
// //     t.no.includes(searchTerm) || 
// //     t.days.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const mainEvent = {
// //     date: "31.01.2026",
// //     day: "Saturday",
// //     titleEnglish: "Thaipoosa Jyothi Peruvizha",
// //     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
// //     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
// //     // image: "/om4.jpeg"
// //     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
// //   };

// //   const upcomingEventsList = [
// //     { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
// //     { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
// //   ];

// //   useEffect(() => {
// //     const eventDate = new Date('2026-01-31');
// //     const today = new Date();
// //     const diffTime = Math.abs(eventDate.getTime() - today.getTime());
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
          
// //           {/* Backdrop */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             onClick={() => setIsOpen(false)}
// //             className="fixed inset-0 bg-black/80 backdrop-blur-md"
// //           />

// //           {/* Popup Container */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95, y: 20 }}
// //             animate={{ opacity: 1, scale: 1, y: 0 }}
// //             exit={{ opacity: 0, scale: 0.95, y: 20 }}
// //             transition={{ type: "spring", bounce: 0.3 }}
// //             className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
// //           >
// //             {/* Close Button */}
// //             <button
// //               onClick={() => setIsOpen(false)}
// //               className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
// //             >
// //               <X className="w-5 h-5" />
// //             </button>

// //             {/* --- LEFT SIDE: IMAGE (Hidden on Mobile) --- */}
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
// //                   <Sparkles className="w-3 h-3" />
// //                   Upcoming Festival
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

// //             {/* --- RIGHT SIDE: CONTENT AREA --- */}
// //             {/* Using flex-col to make footer sticky properly */}
// //             <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
              
// //               {/* 1. TABS HEADER */}
// //               <div className="flex-none flex border-b border-gray-200">
// //                 <button
// //                   onClick={() => setActiveTab('event')}
// //                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
// //                     activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <span className="flex items-center justify-center gap-2">
// //                     <Calendar className="w-4 h-4" /> Festival Details
// //                   </span>
// //                   {activeTab === 'event' && (
// //                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />
// //                   )}
// //                 </button>
// //                 <button
// //                   onClick={() => setActiveTab('train')}
// //                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
// //                     activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
// //                   }`}
// //                 >
// //                   <span className="flex items-center justify-center gap-2">
// //                     <TrainFront className="w-4 h-4" /> Train Schedule
// //                   </span>
// //                   {activeTab === 'train' && (
// //                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
// //                   )}
// //                 </button>
// //               </div>

// //               {/* 2. SCROLLABLE BODY */}
// //               <div className="flex-grow overflow-y-auto p-6 bg-white relative">
                
// //                 {/* === TAB 1: EVENT DETAILS === */}
// //                 {activeTab === 'event' && (
// //                   <motion.div 
// //                     initial={{ opacity: 0, y: 10 }} 
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="space-y-6"
// //                   >
// //                      {/* Mobile Image */}
// //                      <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
// //                         <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
// //                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
// //                            <h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2>
// //                         </div>
// //                      </div>

// //                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
// //                         <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
// //                         <div>
// //                           <p className="text-xs font-bold text-gray-400 uppercase">Venue</p>
// //                           <p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p>
// //                         </div>
// //                      </div>

// //                      <div className="space-y-2">
// //                         <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
// //                         <p className="text-gray-600 leading-relaxed text-sm">
// //                           Join us for the grand <strong>Thaipoosa Jyothi Peruvizha</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy flame.
// //                         </p>
// //                      </div>

// //                      {/* Other Events */}
// //                      <div className="pt-4 border-t border-gray-100">
// //                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
// //                            Upcoming Events
// //                          </h3>
// //                          <div className="space-y-3">
// //                            {upcomingEventsList.map((evt, idx) => (
// //                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
// //                               <div className="w-12 text-center shrink-0">
// //                                 <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
// //                                 <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
// //                               </div>
// //                               <div>
// //                                 <div className="text-sm font-bold text-gray-800">{evt.title}</div>
// //                                 <div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div>
// //                               </div>
// //                             </div>
// //                           ))}
// //                         </div>
// //                      </div>
// //                   </motion.div>
// //                 )}


// //                 {/* === TAB 2: TRAIN SCHEDULE === */}
// //                 {activeTab === 'train' && (
// //                   <motion.div 
// //                     initial={{ opacity: 0, y: 10 }} 
// //                     animate={{ opacity: 1, y: 0 }}
// //                     exit={{ opacity: 0, y: -10 }}
// //                     transition={{ duration: 0.2 }}
// //                     className="space-y-4 h-full flex flex-col"
// //                   >
// //                     <div className="sticky top-0 bg-white z-10 pb-2">
// //                       <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
// //                         <Search className="w-5 h-5 text-gray-400 ml-2" />
// //                         <input 
// //                           type="text" 
// //                           placeholder="Search (e.g. Madurai, 12635)..." 
// //                           value={searchTerm}
// //                           onChange={(e) => setSearchTerm(e.target.value)}
// //                           className="w-full p-2 outline-none text-sm bg-transparent"
// //                         />
// //                       </div>
// //                       <div className="text-xs text-center text-gray-400 mt-2">
// //                         {filteredTrains.length} trains stopping at Melmaruvathur
// //                       </div>
// //                     </div>

// //                     <div className="flex-grow space-y-3 pb-2">
// //                       {filteredTrains.length > 0 ? (
// //                         filteredTrains.map((train, idx) => (
// //                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
// //                             <div className="flex items-center gap-3 overflow-hidden">
// //                                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">
// //                                  #{train.no}
// //                                </div>
// //                                <div className="min-w-0">
// //                                  <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
// //                                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
// //                                    <Calendar className="w-3 h-3" /> {train.days}
// //                                  </p>
// //                                </div>
// //                             </div>
// //                             <div className="text-right shrink-0 pl-2">
// //                                <div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm">
// //                                  <Clock className="w-3 h-3" /> {train.time}
// //                                </div>
// //                             </div>
// //                           </div>
// //                         ))
// //                       ) : (
// //                         <div className="text-center py-10 opacity-50">
// //                            <TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" />
// //                            <p className="text-sm font-medium text-gray-500">No trains match your search</p>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </motion.div>
// //                 )}

// //               </div>

// //               {/* 3. DYNAMIC FOOTER (Sticky) */}
// //               <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
                  
// //                   {/* Footer for EVENT Tab */}
// //                   {activeTab === 'event' && (
// //                     <div className="space-y-3">
// //                       <Link 
// //                         href="/all-events"
// //                         onClick={() => setIsOpen(false)}
// //                         className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm"
// //                       >
// //                         View All Events
// //                         <ArrowRight className="w-4 h-4" />
// //                       </Link>

// //                       <a
// //                         href="/event-pdf.pdf"
// //                         target="_blank" 
// //                         rel="noopener noreferrer"
// //                         className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
// //                       >
// //                         Download PDF
// //                         <Download className="w-4 h-4" />
// //                       </a>
// //                     </div>
// //                   )}

// //                   {/* Footer for TRAIN Tab */}
// //                   {activeTab === 'train' && (
// //                     <div className="space-y-3">
// //                       <Link 
// //                         href="/train-schedule" 
// //                         onClick={() => setIsOpen(false)}
// //                         className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
// //                       >
// //                         Open Full Schedule Page <ExternalLink className="w-4 h-4" />
// //                       </Link>
// //                     </div>
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
//   HeartHandshake // Added for Volunteer Tab
// } from 'lucide-react';
// import Image from 'next/image';
// import Link from 'next/link';

// // --- TRAIN DATA ---
// const trainData = [
//   { no: "16368", name: "Kashi Tamil Sangamam", time: "07:20 AM", days: "Tue" },
//   { no: "22536", name: "Varanasi - Rameswaram", time: "09:50 AM", days: "Tue" },
//   { no: "20849", name: "Bhubaneswar - Rameswaram", time: "09:50 AM", days: "Sat" },
//   { no: "20851", name: "Bhubaneswar - Puducherry", time: "09:50 AM", days: "Wed" },
//   { no: "22673", name: "Jodhpur - Mannargudi", time: "11:05 AM", days: "Sat" },
//   { no: "20481", name: "Bhagat Ki Kothi - Trichy", time: "11:05 AM", days: "Fri" },
//   { no: "22404", name: "New Delhi - Puducherry", time: "11:05 AM", days: "Tue" },
//   { no: "20498", name: "Firozpur - Rameswaram", time: "11:05 AM", days: "Mon" },
//   { no: "22101", name: "Mumbai LTT - Madurai", time: "11:25 AM", days: "Thu" },
//   { no: "22632", name: "Bikaner - Madurai", time: "11:25 AM", days: "Tue" },
//   { no: "11017", name: "Mumbai LTT - Karaikal", time: "12:45 PM", days: "Sun" },
//   { no: "12635", name: "Chennai Egmore - Madurai", time: "03:05 PM", days: "Daily" },
//   { no: "22614", name: "Ayodhya - Rameswaram", time: "03:15 PM", days: "Fri" },
//   { no: "12652", name: "Delhi Nizamuddin - Madurai", time: "05:35 PM", days: "Wed, Fri" },
//   { no: "12642", name: "Delhi Nizamuddin - Kanyakumari", time: "05:35 PM", days: "Tue, Sun" },
//   { no: "16101", name: "Chennai Egmore - Kollam", time: "06:25 PM", days: "Daily" },
//   { no: "16103", name: "Tambaram - Rameswaram", time: "07:05 PM", days: "Daily" },
//   { no: "12667", name: "Chennai Egmore - Nagercoil", time: "08:25 PM", days: "Thu" },
//   { no: "22657", name: "Tambaram - Nagercoil", time: "08:25 PM", days: "Sun, Mon, Wed" },
//   { no: "12661", name: "Chennai Egmore - Sengottai", time: "09:35 PM", days: "Daily" },
//   { no: "20683", name: "Tambaram - Sengottai", time: "09:55 PM", days: "Sun, Tue, Thu" },
//   { no: "12637", name: "Chennai Egmore - Madurai", time: "10:05 PM", days: "Daily" },
//   { no: "22623", name: "Chennai Egmore - Madurai", time: "11:25 PM", days: "Fri, Sun" },
//   { no: "20691", name: "Tambaram - Nagercoil", time: "11:35 PM", days: "Daily" },
//   { no: "16865", name: "Chennai Egmore - Thanjavur", time: "11:55 PM", days: "Daily" },
//   { no: "16179", name: "Chennai Egmore - Mannargudi", time: "12:20 AM", days: "Daily" },
//   { no: "12653", name: "Chennai Egmore - Trichy", time: "12:50 AM", days: "Daily" },
//   { no: "22153", name: "Chennai Egmore - Salem", time: "01:15 AM", days: "Daily" },
// ];

// export default function EventPopup() {
//   const [isOpen, setIsOpen] = useState(false);
//   // UPDATED: Added 'volunteer' to the state type
//   const [activeTab, setActiveTab] = useState<'event' | 'train' | 'volunteer'>('event');
//   const [searchTerm, setSearchTerm] = useState("");
//   const [daysToGo, setDaysToGo] = useState(0);

//   const filteredTrains = trainData.filter(t => 
//     t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//     t.no.includes(searchTerm) || 
//     t.days.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const mainEvent = {
//     date: "31.01.2026",
//     day: "Saturday",
//     titleEnglish: "Thaipoosa Jyothi Peruvizha",
//     titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
//     location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
//     image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
//   };

//   const upcomingEventsList = [
//     { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
//     { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
//   ];

//   useEffect(() => {
//     const eventDate = new Date('2026-01-31');
//     const today = new Date();
//     const diffTime = Math.abs(eventDate.getTime() - today.getTime());
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
          
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setIsOpen(false)}
//             className="fixed inset-0 bg-black/80 backdrop-blur-md"
//           />

//           {/* Popup Container */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ type: "spring", bounce: 0.3 }}
//             className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setIsOpen(false)}
//               className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             {/* --- LEFT SIDE: IMAGE (Hidden on Mobile) --- */}
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
//                   <Sparkles className="w-3 h-3" />
//                   Upcoming Festival
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

//             {/* --- RIGHT SIDE: CONTENT AREA --- */}
//             <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
              
//               {/* 1. TABS HEADER */}
//               <div className="flex-none flex border-b border-gray-200">
//                 <button
//                   onClick={() => setActiveTab('event')}
//                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
//                     activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     <Calendar className="w-4 h-4" /> Festival
//                   </span>
//                   {activeTab === 'event' && (
//                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />
//                   )}
//                 </button>
//                 <button
//                   onClick={() => setActiveTab('train')}
//                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
//                     activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     <TrainFront className="w-4 h-4" /> Trains
//                   </span>
//                   {activeTab === 'train' && (
//                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
//                   )}
//                 </button>
//                 {/* --- NEW TAB: VOLUNTEER --- */}
//                 <button
//                   onClick={() => setActiveTab('volunteer')}
//                   className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
//                     activeTab === 'volunteer' ? 'text-orange-600 bg-orange-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   <span className="flex items-center justify-center gap-2">
//                     <HeartHandshake className="w-4 h-4" /> Volunteer
//                   </span>
//                   {activeTab === 'volunteer' && (
//                     <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />
//                   )}
//                 </button>
//               </div>

//               {/* 2. SCROLLABLE BODY */}
//               <div className="flex-grow overflow-y-auto p-6 bg-white relative">
                
//                 {/* === TAB 1: EVENT DETAILS === */}
//                 {activeTab === 'event' && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 10 }} 
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-6"
//                   >
//                      {/* Mobile Image */}
//                      <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
//                         <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
//                            <h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2>
//                         </div>
//                      </div>

//                      <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
//                         <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
//                         <div>
//                           <p className="text-xs font-bold text-gray-400 uppercase">Venue</p>
//                           <p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p>
//                         </div>
//                      </div>

//                      <div className="space-y-2">
//                         <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
//                         <p className="text-gray-600 leading-relaxed text-sm">
//                           Join us for the grand <strong>Thaipoosa Jyothi Peruvizha</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy flame.
//                         </p>
//                      </div>

//                      {/* Other Events */}
//                      <div className="pt-4 border-t border-gray-100">
//                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
//                            Upcoming Events
//                          </h3>
//                          <div className="space-y-3">
//                            {upcomingEventsList.map((evt, idx) => (
//                             <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
//                               <div className="w-12 text-center shrink-0">
//                                 <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
//                                 <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
//                               </div>
//                               <div>
//                                 <div className="text-sm font-bold text-gray-800">{evt.title}</div>
//                                 <div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                      </div>
//                   </motion.div>
//                 )}


//                 {/* === TAB 2: TRAIN SCHEDULE === */}
//                 {activeTab === 'train' && (
//                   <motion.div 
//                     initial={{ opacity: 0, y: 10 }} 
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-4 h-full flex flex-col"
//                   >
//                     <div className="sticky top-0 bg-white z-10 pb-2">
//                       <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
//                         <Search className="w-5 h-5 text-gray-400 ml-2" />
//                         <input 
//                           type="text" 
//                           placeholder="Search (e.g. Madurai, 12635)..." 
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           className="w-full p-2 outline-none text-sm bg-transparent"
//                         />
//                       </div>
//                       <div className="text-xs text-center text-gray-400 mt-2">
//                         {filteredTrains.length} trains stopping at Melmaruvathur
//                       </div>
//                     </div>

//                     <div className="flex-grow space-y-3 pb-2">
//                       {filteredTrains.length > 0 ? (
//                         filteredTrains.map((train, idx) => (
//                           <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
//                             <div className="flex items-center gap-3 overflow-hidden">
//                                <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">
//                                  #{train.no}
//                                </div>
//                                <div className="min-w-0">
//                                  <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
//                                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
//                                    <Calendar className="w-3 h-3" /> {train.days}
//                                  </p>
//                                </div>
//                             </div>
//                             <div className="text-right shrink-0 pl-2">
//                                <div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm">
//                                  <Clock className="w-3 h-3" /> {train.time}
//                                </div>
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="text-center py-10 opacity-50">
//                            <TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" />
//                            <p className="text-sm font-medium text-gray-500">No trains match your search</p>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}

//                 {/* === TAB 3: VOLUNTEER (NEW CONTENT) === */}
//                 {activeTab === 'volunteer' && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.2 }}
//                     className="space-y-6 h-full flex flex-col justify-center"
//                   >
//                     <div className="text-center">
//                        {/* Badge */}
//                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-6">
//                          <HeartHandshake className="w-3 h-3" />
//                          Seva Opportunity
//                        </div>

//                        {/* Title */}
//                        <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight leading-tight">
//                          Serve with <span className="text-[#a7150b]">Devotion.</span> <br />
//                          Grow with Grace.
//                        </h2>

//                        {/* Tamil Quote 1 */}
//                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
//                           <p className="text-lg font-serif italic text-gray-700 leading-relaxed">
//                             "செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
//                           </p>
//                        </div>

//                        {/* Description */}
//                        <p className="text-gray-600 font-medium mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
//                          Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.
//                        </p>

//                        {/* Tamil Quote 2 (Small) */}
//                        <div className="mb-8">
//                          <p className="text-[#a7150b] font-bold text-sm md:text-base">
//                            "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
//                          </p>
//                        </div>
//                     </div>
//                   </motion.div>
//                 )}

//               </div>

//               {/* 3. DYNAMIC FOOTER (Sticky) */}
//               <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
                  
//                   {/* Footer for EVENT Tab */}
//                   {activeTab === 'event' && (
//                     <div className="space-y-3">
//                       <Link 
//                         href="/all-events"
//                         onClick={() => setIsOpen(false)}
//                         className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm"
//                       >
//                         View All Events
//                         <ArrowRight className="w-4 h-4" />
//                       </Link>

//                       <a
//                         href="/event-pdf.pdf"
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
//                       >
//                         Download PDF
//                         <Download className="w-4 h-4" />
//                       </a>
//                     </div>
//                   )}

//                   {/* Footer for TRAIN Tab */}
//                   {activeTab === 'train' && (
//                     <div className="space-y-3">
//                       <Link 
//                         href="/train-schedule" 
//                         onClick={() => setIsOpen(false)}
//                         className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
//                       >
//                         Open Full Schedule Page <ExternalLink className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   )}

//                   {/* Footer for VOLUNTEER Tab */}
//                   {activeTab === 'volunteer' && (
//                     <div className="space-y-3">
//                       <Link 
//                         href="/activities/volunteer" 
//                         onClick={() => setIsOpen(false)}
//                         className="w-full py-3 bg-[#a7150b] text-white rounded-xl font-bold hover:bg-[#8a0d08] transition-all flex items-center justify-center gap-2 text-sm shadow-md group"
//                       >
//                         Apply for Volunteering <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                       </Link>
//                     </div>
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
  HeartHandshake 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- FULL TRAIN DATA (Preserved from Original) ---
const trainData = [
  { no: "16368", name: "Kashi Tamil Sangamam", time: "07:20 AM", days: "Tue" },
  { no: "22536", name: "Varanasi - Rameswaram", time: "09:50 AM", days: "Tue" },
  { no: "20849", name: "Bhubaneswar - Rameswaram", time: "09:50 AM", days: "Sat" },
  { no: "20851", name: "Bhubaneswar - Puducherry", time: "09:50 AM", days: "Wed" },
  { no: "22673", name: "Jodhpur - Mannargudi", time: "11:05 AM", days: "Sat" },
  { no: "20481", name: "Bhagat Ki Kothi - Trichy", time: "11:05 AM", days: "Fri" },
  { no: "22404", name: "New Delhi - Puducherry", time: "11:05 AM", days: "Tue" },
  { no: "20498", name: "Firozpur - Rameswaram", time: "11:05 AM", days: "Mon" },
  { no: "22101", name: "Mumbai LTT - Madurai", time: "11:25 AM", days: "Thu" },
  { no: "22632", name: "Bikaner - Madurai", time: "11:25 AM", days: "Tue" },
  { no: "11017", name: "Mumbai LTT - Karaikal", time: "12:45 PM", days: "Sun" },
  { no: "12635", name: "Chennai Egmore - Madurai", time: "03:05 PM", days: "Daily" },
  { no: "22614", name: "Ayodhya - Rameswaram", time: "03:15 PM", days: "Fri" },
  { no: "12652", name: "Delhi Nizamuddin - Madurai", time: "05:35 PM", days: "Wed, Fri" },
  { no: "12642", name: "Delhi Nizamuddin - Kanyakumari", time: "05:35 PM", days: "Tue, Sun" },
  { no: "16101", name: "Chennai Egmore - Kollam", time: "06:25 PM", days: "Daily" },
  { no: "16103", name: "Tambaram - Rameswaram", time: "07:05 PM", days: "Daily" },
  { no: "12667", name: "Chennai Egmore - Nagercoil", time: "08:25 PM", days: "Thu" },
  { no: "22657", name: "Tambaram - Nagercoil", time: "08:25 PM", days: "Sun, Mon, Wed" },
  { no: "12661", name: "Chennai Egmore - Sengottai", time: "09:35 PM", days: "Daily" },
  { no: "20683", name: "Tambaram - Sengottai", time: "09:55 PM", days: "Sun, Tue, Thu" },
  { no: "12637", name: "Chennai Egmore - Madurai", time: "10:05 PM", days: "Daily" },
  { no: "22623", name: "Chennai Egmore - Madurai", time: "11:25 PM", days: "Fri, Sun" },
  { no: "20691", name: "Tambaram - Nagercoil", time: "11:35 PM", days: "Daily" },
  { no: "16865", name: "Chennai Egmore - Thanjavur", time: "11:55 PM", days: "Daily" },
  { no: "16179", name: "Chennai Egmore - Mannargudi", time: "12:20 AM", days: "Daily" },
  { no: "12653", name: "Chennai Egmore - Trichy", time: "12:50 AM", days: "Daily" },
  { no: "22153", name: "Chennai Egmore - Salem", time: "01:15 AM", days: "Daily" },
];

export default function EventPopup() {
  const [isOpen, setIsOpen] = useState(false);
  // UPDATED: Default state is now 'volunteer' to make it the first tab
  const [activeTab, setActiveTab] = useState<'volunteer' | 'event' | 'train'>('volunteer');
  const [searchTerm, setSearchTerm] = useState("");
  const [daysToGo, setDaysToGo] = useState(0);

  const filteredTrains = trainData.filter(t => 
    t.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.no.includes(searchTerm) || 
    t.days.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mainEvent = {
    date: "31.01.2026",
    day: "Saturday",
    titleEnglish: "Thaipoosa Jyothi Peruvizha",
    titleTamil: "சித்தர் பீடத்தில் தைப்பூசஜோதி பெருவிழா",
    location: "Adhiparasakthi Siddhar Peedam, Melmaruvathur",
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg"
  };

  // RESTORED: All 4 events from original file
  const upcomingEventsList = [
    { date: "17.02.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
    { date: "03.03.2026", title: "Amma's 86th Birthday", tamil: "86வது அவதார திருநாள்" },
    { date: "18.03.2026", title: "Ammavasai Velvi", tamil: "அமாவாசை வேள்வி" },
    { date: "19.03.2026", title: "Telugu New Year", tamil: "தெலுங்கு வருடப்பிறப்பு" },
  ];

  useEffect(() => {
    const eventDate = new Date('2026-01-31');
    const today = new Date();
    const diffTime = Math.abs(eventDate.getTime() - today.getTime());
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
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm transition-all hover:rotate-90 text-gray-600 border border-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* --- LEFT SIDE: IMAGE (Hidden on Mobile) --- */}
            <div className="relative hidden md:block w-2/5 h-full bg-red-900">
              <Image
                src={mainEvent.image}
                alt="Event Banner"
                fill
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#ffc107] text-[#a7150b] rounded-full text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  Upcoming Festival
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

            {/* --- RIGHT SIDE: CONTENT AREA --- */}
            <div className="w-full md:w-3/5 flex flex-col h-full bg-white">
              
              {/* 1. TABS HEADER (Volunteer First) */}
              <div className="flex-none flex border-b border-gray-200">
                {/* TAB 1: VOLUNTEER */}
                <button
                  onClick={() => setActiveTab('volunteer')}
                  className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'volunteer' ? 'text-orange-600 bg-orange-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <HeartHandshake className="w-4 h-4" /> Volunteer
                  </span>
                  {activeTab === 'volunteer' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-orange-600" />
                  )}
                </button>

                {/* TAB 2: FESTIVAL */}
                <button
                  onClick={() => setActiveTab('event')}
                  className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'event' ? 'text-[#a7150b] bg-red-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4" /> Festival
                  </span>
                  {activeTab === 'event' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-[#a7150b]" />
                  )}
                </button>

                {/* TAB 3: TRAINS */}
                <button
                  onClick={() => setActiveTab('train')}
                  className={`flex-1 py-5 text-sm font-bold uppercase tracking-wide transition-colors relative ${
                    activeTab === 'train' ? 'text-blue-600 bg-blue-50/30' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="flex items-center justify-center gap-2">
                    <TrainFront className="w-4 h-4" /> Trains
                  </span>
                  {activeTab === 'train' && (
                    <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-1 bg-blue-600" />
                  )}
                </button>
              </div>

              {/* 2. SCROLLABLE BODY */}
              <div className="flex-grow overflow-y-auto p-6 bg-white relative">
                
                {/* === TAB 1: VOLUNTEER (NEW CONTENT) === */}
                {activeTab === 'volunteer' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6 h-full flex flex-col justify-center"
                  >
                    <div className="text-center">
                       {/* Badge */}
                       <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-6">
                         <HeartHandshake className="w-3 h-3" />
                         Seva Opportunity
                       </div>

                       {/* Title */}
                       <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight leading-tight">
                         Serve with <span className="text-[#a7150b]">Devotion.</span> <br />
                         Grow with Grace.
                       </h2>

                       {/* Tamil Quote 1 */}
                       <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6">
                          <p className="text-lg font-serif italic text-gray-700 leading-relaxed">
                            "செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
                          </p>
                       </div>

                       {/* Description */}
                       <p className="text-gray-600 font-medium mb-8 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
                         Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.
                       </p>

                       {/* Tamil Quote 2 (Small) */}
                       <div className="mb-8">
                         <p className="text-[#a7150b] font-bold text-sm md:text-base">
                           "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
                         </p>
                       </div>
                    </div>
                  </motion.div>
                )}

                {/* === TAB 2: EVENT DETAILS === */}
                {activeTab === 'event' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                     {/* Mobile Image */}
                     <div className="md:hidden relative h-48 rounded-xl overflow-hidden shadow-md">
                        <Image src={mainEvent.image} alt="Event" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                           <h2 className="text-white font-bold text-xl">{mainEvent.titleEnglish}</h2>
                        </div>
                     </div>

                     <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex gap-4 items-center">
                        <div className="p-3 bg-red-50 text-[#a7150b] rounded-full"><MapPin className="w-6 h-6" /></div>
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase">Venue</p>
                          <p className="font-semibold text-gray-800 text-sm md:text-base">{mainEvent.location}</p>
                        </div>
                     </div>

                     <div className="space-y-2">
                        <h3 className="font-bold text-gray-800 text-lg">About the Festival</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Join us for the grand <strong>Thaipoosa Jyothi Peruvizha</strong>. Experience the divine light and seek Amma's blessings on this auspicious day. Thousands of devotees will gather to witness the holy flame.
                        </p>
                     </div>

                     {/* Other Events (Fully Restored) */}
                     <div className="pt-4 border-t border-gray-100">
                         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                           Upcoming Events
                         </h3>
                         <div className="space-y-3">
                           {upcomingEventsList.map((evt, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                              <div className="w-12 text-center shrink-0">
                                <div className="text-xs font-bold text-gray-400">{evt.date.split('.')[1]}</div>
                                <div className="text-sm font-bold text-[#a7150b]">{evt.date.split('.')[0]}</div>
                              </div>
                              <div>
                                <div className="text-sm font-bold text-gray-800">{evt.title}</div>
                                <div className="text-xs text-gray-500 font-tamil">{evt.tamil}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                     </div>
                  </motion.div>
                )}


                {/* === TAB 3: TRAIN SCHEDULE === */}
                {activeTab === 'train' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4 h-full flex flex-col"
                  >
                    <div className="sticky top-0 bg-white z-10 pb-2">
                      <div className="bg-gray-50 p-2 rounded-xl border border-gray-200 flex items-center">
                        <Search className="w-5 h-5 text-gray-400 ml-2" />
                        <input 
                          type="text" 
                          placeholder="Search (e.g. Madurai, 12635)..." 
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full p-2 outline-none text-sm bg-transparent"
                        />
                      </div>
                      <div className="text-xs text-center text-gray-400 mt-2">
                        {filteredTrains.length} trains stopping at Melmaruvathur
                      </div>
                    </div>

                    <div className="flex-grow space-y-3 pb-2">
                      {filteredTrains.length > 0 ? (
                        filteredTrains.map((train, idx) => (
                          <div key={idx} className="bg-white p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all flex items-center justify-between group">
                            <div className="flex items-center gap-3 overflow-hidden">
                               <div className="bg-blue-50 text-blue-700 text-xs font-bold px-2 py-1.5 rounded shrink-0 font-mono">
                                 #{train.no}
                               </div>
                               <div className="min-w-0">
                                 <h4 className="font-bold text-gray-800 text-sm truncate">{train.name}</h4>
                                 <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1">
                                   <Calendar className="w-3 h-3" /> {train.days}
                                 </p>
                               </div>
                            </div>
                            <div className="text-right shrink-0 pl-2">
                               <div className="flex items-center justify-end gap-1 text-[#a7150b] font-bold text-sm">
                                 <Clock className="w-3 h-3" /> {train.time}
                               </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-10 opacity-50">
                           <TrainFront className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                           <p className="text-sm font-medium text-gray-500">No trains match your search</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}

              </div>

              {/* 3. DYNAMIC FOOTER (Sticky) */}
              <div className="flex-none p-4 border-t border-gray-100 bg-gray-50">
                  
                  {/* Footer for VOLUNTEER Tab (Shows first now) */}
                  {activeTab === 'volunteer' && (
                    <div className="space-y-3">
                      <Link 
                        href="/activities/volunteer" 
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 bg-[#a7150b] text-white rounded-xl font-bold hover:bg-[#8a0d08] transition-all flex items-center justify-center gap-2 text-sm shadow-md group"
                      >
                        Apply for Volunteering <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  )}

                  {/* Footer for EVENT Tab */}
                  {activeTab === 'event' && (
                    <div className="space-y-3">
                      <Link 
                        href="/all-events"
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-100 hover:border-gray-300 transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        View All Events
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href="/event-pdf.pdf"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-[#a7150b] to-[#8a0d08] text-white rounded-xl font-bold shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2 text-sm"
                      >
                        Download PDF
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  )}

                  {/* Footer for TRAIN Tab */}
                  {activeTab === 'train' && (
                    <div className="space-y-3">
                      <Link 
                        href="/train-schedule" 
                        onClick={() => setIsOpen(false)}
                        className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                      >
                        Open Full Schedule Page <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  )}

              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}