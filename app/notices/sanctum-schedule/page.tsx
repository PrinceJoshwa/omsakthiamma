// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import { Calendar, Users, Clock, AlertCircle, Search, Phone } from 'lucide-react';
// // // // import { useState } from 'react';

// // // // // FULL DATA FROM IMAGE 1 (Dec 01 - Dec 31)
// // // // const scheduleData = [
// // // //   { date: '01.12.2025', day: 'Monday', reg: 'CU', mandram: 'Chittoor Urban District Mandrams', district: 'Chittoor Urban' },
// // // //   { date: '02.12.2025', day: 'Tuesday', reg: 'RPN', mandram: 'Ranipet North Circle Mandrams', district: 'Ranipet' },
// // // //   { date: '03.12.2025', day: 'Wednesday', reg: 'TVS-50', mandram: 'Komakkambedu', district: 'Tiruvallur' },
// // // //   { date: '04.12.2025', day: 'Thursday', reg: 'SS13, SS19, SS20, SS21, SS22', mandram: 'Karthigai Pournami - Annur, Thithipalayam, Press Colony, Karamadai, Mettupalayam', district: 'Coimbatore' },
// // // //   { date: '05.12.2025', day: 'Friday', reg: 'KUW-23', mandram: 'Veerasolapuram', district: 'Kallakurichi' },
// // // //   { date: '06.12.2025', day: 'Saturday', reg: 'KA211', mandram: 'Gowtham Nagar', district: 'Karnataka' },
// // // //   { date: '07.12.2025', day: 'Sunday', reg: 'AR', mandram: 'Sendurai Circle Mandrams', district: 'Ariyalur' },
// // // //   { date: '08.12.2025', day: 'Monday', reg: 'MNA-08', mandram: 'Korattur', district: 'North Chennai' },
// // // //   { date: '09.12.2025', day: 'Tuesday', reg: 'TMCG', mandram: 'Chengam Circle Mandrams', district: 'Tiruvannamalai' },
// // // //   { date: '10.12.2025', day: 'Wednesday', reg: 'VP', mandram: 'Villupuram District Mandrams', district: 'Villupuram' },
// // // //   { date: '11.12.2025', day: 'Thursday', reg: 'RPE', mandram: 'Ranipet East Circle Mandrams', district: 'Ranipet' },
// // // //   { date: '12.12.2025', day: 'Friday', reg: 'TJ', mandram: 'Karaikal Circle Mandrams', district: 'Thanjavur' },
// // // //   { date: '13.12.2025', day: 'Saturday', reg: 'MCI-14', mandram: 'Koyambedu', district: 'Central Chennai' },
// // // //   { date: '14.12.2025', day: 'Sunday', reg: 'KUW-73', mandram: 'Periya Siruvathur', district: 'Kallakurichi' },
// // // //   { date: '15.12.2025', day: 'Monday', reg: 'EDW-09', mandram: 'Thudupathi', district: 'Erode' },
// // // //   { date: '16.12.2025', day: 'Tuesday', reg: 'SLS-02', mandram: 'Sankagiri', district: 'Salem' },
// // // //   { date: '17.12.2025', day: 'Wednesday', reg: 'PDW-21', mandram: 'Shanmuga Nagar', district: 'Pudukkottai' },
// // // //   { date: '18.12.2025', day: 'Thursday', reg: 'MCI-10', mandram: 'Saidapet', district: 'Central Chennai' },
// // // //   { date: '19.12.2025', day: 'Friday', reg: 'SS-30', mandram: 'Margazhi Amavasai - Oddapatti Sakthi Peedam', district: 'Dharmapuri' },
// // // //   { date: '20.12.2025', day: 'Saturday', reg: 'RNW-08', mandram: 'Melakodumalur', district: 'Ramanathapuram' },
// // // //   { date: '21.12.2025', day: 'Sunday', reg: 'RNC-08 & RNC-21', mandram: 'Athiyuthu & Ponkulam', district: 'Ramanathapuram' },
// // // //   { date: '22.12.2025', day: 'Monday', reg: 'CD', mandram: 'Cuddalore District Mandrams', district: 'Cuddalore' },
// // // //   { date: '23.12.2025', day: 'Tuesday', reg: 'MDN-16', mandram: 'Kallanai', district: 'Madurai' },
// // // //   { date: '24.12.2025', day: 'Wednesday', reg: 'NKN-02', mandram: 'Rasipuram', district: 'Namakkal' },
// // // //   { date: '25.12.2025', day: 'Thursday', reg: 'TNN-09', mandram: 'Kari Valam Vantha Nallur', district: 'Tirunelveli' },
// // // //   { date: '26.12.2025', day: 'Friday', reg: 'TR 67 & TR 74', mandram: 'Kalakkudi & Kavi Barathi Nagar', district: 'Trichy' },
// // // //   { date: '27.12.2025', day: 'Saturday', reg: 'KPS-25', mandram: 'Damalvar', district: 'Kanchipuram' },
// // // //   { date: '28.12.2025', day: 'Sunday', reg: 'KUN-01', mandram: 'Sankarapuram', district: 'Kallakurichi' },
// // // //   { date: '29.12.2025', day: 'Monday', reg: 'CB 37', mandram: 'State Bank Colony', district: 'Coimbatore' },
// // // //   { date: '30.12.2025', day: 'Tuesday', reg: 'MNA-01', mandram: 'Ambattur', district: 'North Chennai' },
// // // //   { date: '31.12.2025', day: 'Wednesday', reg: 'KA', mandram: 'English New Year 2026 Karnataka State Mandrams', district: 'Karnataka' },
// // // // ];

// // // // export default function SanctumSchedulePage() {
// // // //   const [searchTerm, setSearchTerm] = useState('');

// // // //   const filteredData = scheduleData.filter(item => 
// // // //     item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //     item.mandram.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
// // // //       <div className="max-w-7xl mx-auto">
        
// // // //         {/* Header */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: -20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="text-center mb-10"
// // // //         >
// // // //           <div className="inline-flex items-center gap-2 bg-red-100 text-[#a7150b] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
// // // //             <Calendar className="w-4 h-4" />
// // // //             Dec 2025 Schedule
// // // //           </div>
// // // //           <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 font-tamil">
// // // //             கருவறைப் பணி (Sanctum Service)
// // // //           </h1>
// // // //           <p className="text-gray-600">Detailed Schedule for Dec 01, 2025 - Dec 31, 2025</p>
// // // //         </motion.div>

// // // //         {/* Search */}
// // // //         <div className="mb-6 max-w-md mx-auto relative">
// // // //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
// // // //           <input 
// // // //             type="text"
// // // //             placeholder="Search District or Mandram..."
// // // //             className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a7150b] shadow-sm"
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //           />
// // // //         </div>

// // // //         {/* Table Card */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ delay: 0.1 }}
// // // //           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12"
// // // //         >
// // // //           <div className="overflow-x-auto">
// // // //             <table className="w-full text-left border-collapse">
// // // //               <thead>
// // // //                 <tr className="bg-[#a7150b] text-white text-sm uppercase tracking-wider">
// // // //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Date & Day</th>
// // // //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Reg No</th>
// // // //                   <th className="p-4 font-bold border-r border-red-800">Mandram</th>
// // // //                   <th className="p-4 font-bold">District</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="text-gray-700 text-sm md:text-base">
// // // //                 {filteredData.map((row, idx) => (
// // // //                   <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
// // // //                     <td className="p-4 border-r border-gray-100 font-medium whitespace-nowrap">
// // // //                       <div className="text-[#a7150b] font-bold">{row.date}</div>
// // // //                       <div className="text-gray-500 text-xs uppercase">{row.day}</div>
// // // //                     </td>
// // // //                     <td className="p-4 border-r border-gray-100 font-mono text-xs font-bold">{row.reg}</td>
// // // //                     <td className="p-4 border-r border-gray-100 font-medium font-tamil">{row.mandram}</td>
// // // //                     <td className="p-4 font-bold text-gray-800 font-tamil">{row.district}</td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //           {filteredData.length === 0 && (
// // // //             <div className="p-8 text-center text-gray-500">No results found.</div>
// // // //           )}
// // // //         </motion.div>

// // // //         {/* Instructions Card (Exact text from bottom of Image 1) */}
// // // //         <motion.div 
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ delay: 0.2 }}
// // // //           className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-8 rounded-r-2xl shadow-sm"
// // // //         >
// // // //           <div className="flex items-center gap-3 mb-4">
// // // //             <AlertCircle className="w-6 h-6 text-yellow-700" />
// // // //             <h3 className="text-xl font-bold text-yellow-800 font-tamil">முக்கிய அறிவுரைகள் (Important Instructions)</h3>
// // // //           </div>
          
// // // //           <div className="grid md:grid-cols-2 gap-8 text-yellow-900/80 leading-relaxed font-tamil text-[15px]">
// // // //             <ul className="space-y-4 list-disc ml-5">
// // // //               <li>
// // // //                 கருவறைப்பணிக்கு <strong>160 தொண்டர்களுக்கு</strong> குறையாமல் அனைத்து தொண்டர்களையும் மனமுவந்து செய்யக்கூடியவராக அழைத்து வரவும்.
// // // //               </li>
// // // //               <li>
// // // //                 அந்தந்த மாவட்ட இணைச்செயலாளர் (வேள்வி) உடன் வரவேண்டும்.
// // // //               </li>
// // // //               <li>
// // // //                 அனைவரும் புறப்படும் இடத்திலிருந்து <strong>முழு சீருடையில்</strong> (Full Uniform) வரவேண்டும். மகளிர் கைத்தறி நூல் ஆடை அணிந்தவர்களாக இருக்கவேண்டும்.
// // // //               </li>
// // // //               <li>
// // // //                 மந்திர நூல் முழுமையாக படிக்கத் தெரிந்தவர்கள் <strong>10 பேராவது</strong> இருக்க வேண்டும்.
// // // //               </li>
// // // //             </ul>
// // // //             <ul className="space-y-4 list-disc ml-5">
// // // //               <li>
// // // //                 முதல் நாள் மாலை <strong>3.30 மணிக்கு</strong> முன் சித்தர்பீடத்திற்கு வந்து விடவும். அன்னையின் ஆணைப்படி ஒவ்வொரு மன்றமும் அன்னதானத்தை சிறப்பாக செய்யவும்.
// // // //               </li>
// // // //               <li>
// // // //                 <strong>2 சாக்கு (கோணிப்பை)</strong> அளவிற்கு வேப்பிலை கொண்டுவரவும்.
// // // //               </li>
// // // //               <li>
// // // //                 ஊரிலிருந்து புறப்படும் முன் கீழ்க்காணும் எண்ணில் தகவல் சொல்லவும்.
// // // //               </li>
// // // //               <li className="font-bold text-red-600 bg-red-50 p-2 rounded">
// // // //                 குறிப்பு: தவிர்க்க இயலாத நிலையில் குறிப்பிட்ட மன்றம் பணிக்கு வரமுடியாத நிலை ஏற்படும் போது, அந்த மாவட்டத்தலைவர் கருவறைப்பணிக்கு மாற்று மன்றத்தை ஏற்பாடு செய்து சித்தர்பீடத்திற்கு உடனே அனுப்பி வைக்க வேண்டும்.
// // // //               </li>
// // // //             </ul>
// // // //           </div>

// // // //           {/* Footer Contact Info from Image 1 */}
// // // //           <div className="mt-8 pt-6 border-t border-yellow-200 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-600 font-tamil">
// // // //              <p>பெறுநர்: தொடர்புடைய மாவட்டத்தலைவர்/சக்திபீடத்தலைவர்/மாவட்ட இணைச்செயலாளர் (வேள்வி)</p>
// // // //              <p className="flex items-center gap-2 mt-2 md:mt-0 text-[#a7150b]">
// // // //                <Phone className="w-4 h-4" /> 044 2752 9096 (Admin Office MASM)
// // // //              </p>
// // // //           </div>
// // // //         </motion.div>

// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // 'use client';

// // // import { motion } from 'framer-motion';
// // // import { Calendar, Users, Clock, AlertCircle, Search, Phone } from 'lucide-react';
// // // import { useState } from 'react';

// // // // FULL DATA FROM IMAGE (Feb 01 2026 - Feb 28 2026) - Corrected Spellings
// // // const scheduleData = [
// // //   { date: '01.02.2026', day: 'Sunday', reg: 'ED', mandram: 'Thaipusa Jyothi Peruvizha 2026', district: 'Erode' },
// // //   { date: '02.02.2026', day: 'Monday', reg: 'FM', mandram: 'Foreign Country Mandrams', district: '-' },
// // //   { date: '03.02.2026', day: 'Tuesday', reg: 'TRE-06', mandram: 'Mel Kalkandarkottai', district: 'Trichy' },
// // //   { date: '04.02.2026', day: 'Wednesday', reg: 'MN', mandram: 'North Chennai District Mandrams', district: 'North Chennai' },
// // //   { date: '05.02.2026', day: 'Thursday', reg: 'MDN-09', mandram: 'Anaiyur', district: 'Madurai' },
// // //   { date: '06.02.2026', day: 'Friday', reg: 'KSE-05', mandram: 'Thimmapuram', district: 'Krishnagiri South' },
// // //   { date: '07.02.2026', day: 'Saturday', reg: 'RPS', mandram: 'Ranipettai South Vatta Mandrams', district: 'Ranipettai' },
// // //   { date: '08.02.2026', day: 'Sunday', reg: 'NKE-26', mandram: 'Kadappalli', district: 'Namakkal' },
// // //   { date: '09.02.2026', day: 'Monday', reg: 'TJW-18', mandram: 'Thaligai Viduthi', district: 'Thanjavur' },
// // //   { date: '10.02.2026', day: 'Tuesday', reg: 'DPW', mandram: 'Dharmapuri West Vatta Mandrams', district: 'Dharmapuri' },
// // //   { date: '11.02.2026', day: 'Wednesday', reg: 'TMS-46', mandram: 'Thachampattu, Annanagar', district: 'Tiruvannamalai' },
// // //   { date: '12.02.2026', day: 'Thursday', reg: 'ARS-02', mandram: 'Jayankondam', district: 'Ariyalur' },
// // //   { date: '13.02.2026', day: 'Friday', reg: 'CD', mandram: 'Cuddalore Vatta Mandrams', district: 'Cuddalore' },
// // //   { date: '14.02.2026', day: 'Saturday', reg: 'MCI-14', mandram: 'Koyambedu', district: 'Central Chennai' },
// // //   { date: '15.02.2026', day: 'Sunday', reg: 'DPC-38 & 39', mandram: 'Thoppur Check Post & Thoppur GP Nagar', district: 'Dharmapuri' },
// // //   { date: '16.02.2026', day: 'Monday', reg: 'MSE-07', mandram: 'Thirisulam', district: 'South Chennai' },
// // //   { date: '17.02.2026', day: 'Tuesday', reg: 'RP & TI', mandram: 'Masi Amavasai - Ranipettai, Tirupattur Districts', district: 'Ranipettai & Tirupattur' },
// // //   { date: '18.02.2026', day: 'Wednesday', reg: 'RNE-08 & 10', mandram: 'Iragunathapuram & Idinthakal', district: 'Ramanathapuram' },
// // //   { date: '19.02.2026', day: 'Thursday', reg: 'MDS-02', mandram: 'Thirumangalam - Pothu', district: 'Madurai' },
// // //   { date: '20.02.2026', day: 'Friday', reg: 'KU', mandram: 'Kallakurichi District Mandrams', district: 'Kallakurichi' },
// // //   { date: '21.02.2026', day: 'Saturday', reg: 'TVE-12', mandram: 'Nathamedu', district: 'Tiruvallur' },
// // //   { date: '22.02.2026', day: 'Sunday', reg: 'DPE', mandram: 'Dharmapuri East Mandrams', district: 'Dharmapuri' },
// // //   { date: '23.02.2026', day: 'Monday', reg: 'TP', mandram: 'Tiruppur District Mandrams', district: 'Tiruppur' },
// // //   { date: '24.02.2026', day: 'Tuesday', reg: 'VP', mandram: 'Villupuram District Mandrams', district: 'Villupuram' },
// // //   { date: '25.02.2026', day: 'Wednesday', reg: 'CU', mandram: 'Chittoor Urban District Mandrams', district: '-' },
// // //   { date: '26.02.2026', day: 'Thursday', reg: 'VEE', mandram: 'Vellore East Mandrams', district: 'Vellore' },
// // //   { date: '27.02.2026', day: 'Friday', reg: 'CR', mandram: 'Chittoor Rural District Mandrams', district: '-' },
// // //   { date: '28.02.2026', day: 'Saturday', reg: 'NK', mandram: 'Namakkal District Mandrams', district: 'Namakkal' },
// // // ];

// // // export default function SanctumSchedulePage() {
// // //   const [searchTerm, setSearchTerm] = useState('');

// // //   const filteredData = scheduleData.filter(item => 
// // //     item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     item.mandram.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   return (
// // //     <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* Header */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: -20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           className="text-center mb-10"
// // //         >
// // //           <div className="inline-flex items-center gap-2 bg-red-100 text-[#a7150b] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
// // //             <Calendar className="w-4 h-4" />
// // //             Feb 2026 Schedule
// // //           </div>
// // //           <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 font-tamil">
// // //             கருவறைப் பணி (Sanctum Service)
// // //           </h1>
// // //           <p className="text-gray-600">Detailed Schedule for Feb 01, 2026 - Feb 28, 2026</p>
// // //         </motion.div>

// // //         {/* Search */}
// // //         <div className="mb-6 max-w-md mx-auto relative">
// // //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
// // //           <input 
// // //             type="text"
// // //             placeholder="Search District or Mandram..."
// // //             className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a7150b] shadow-sm"
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //           />
// // //         </div>

// // //         {/* Table Card */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.1 }}
// // //           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12"
// // //         >
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full text-left border-collapse">
// // //               <thead>
// // //                 <tr className="bg-[#a7150b] text-white text-sm uppercase tracking-wider">
// // //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Date & Day</th>
// // //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Reg No</th>
// // //                   <th className="p-4 font-bold border-r border-red-800">Mandram</th>
// // //                   <th className="p-4 font-bold">District</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="text-gray-700 text-sm md:text-base">
// // //                 {filteredData.map((row, idx) => (
// // //                   <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
// // //                     <td className="p-4 border-r border-gray-100 font-medium whitespace-nowrap">
// // //                       <div className="text-[#a7150b] font-bold">{row.date}</div>
// // //                       <div className="text-gray-500 text-xs uppercase">{row.day}</div>
// // //                     </td>
// // //                     <td className="p-4 border-r border-gray-100 font-mono text-xs font-bold">{row.reg}</td>
// // //                     <td className="p-4 border-r border-gray-100 font-medium font-tamil">{row.mandram}</td>
// // //                     <td className="p-4 font-bold text-gray-800 font-tamil">{row.district}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //           {filteredData.length === 0 && (
// // //             <div className="p-8 text-center text-gray-500">No results found.</div>
// // //           )}
// // //         </motion.div>

// // //         {/* Instructions Card (Exact text from bottom of Image 1) */}
// // //         <motion.div 
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ delay: 0.2 }}
// // //           className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-8 rounded-r-2xl shadow-sm"
// // //         >
// // //           <div className="flex items-center gap-3 mb-4">
// // //             <AlertCircle className="w-6 h-6 text-yellow-700" />
// // //             <h3 className="text-xl font-bold text-yellow-800 font-tamil">முக்கிய அறிவுரைகள் (Important Instructions)</h3>
// // //           </div>
          
// // //           <div className="grid md:grid-cols-2 gap-8 text-yellow-900/80 leading-relaxed font-tamil text-[15px]">
// // //             <ul className="space-y-4 list-disc ml-5">
// // //               <li>
// // //                 கருவறைப்பணிக்கு <strong>160 தொண்டர்களுக்கு</strong> குறையாமல் அனைத்து தொண்டர்களையும் மனமுவந்து செய்யக்கூடியவராக அழைத்து வரவும்.
// // //               </li>
// // //               <li>
// // //                 அந்தந்த மாவட்ட இணைச்செயலாளர் (வேள்வி) உடன் வரவேண்டும்.
// // //               </li>
// // //               <li>
// // //                 அனைவரும் புறப்படும் இடத்திலிருந்து <strong>முழு சீருடையில்</strong> (Full Uniform) வரவேண்டும். மகளிர் கைத்தறி நூல் ஆடை அணிந்தவர்களாக இருக்கவேண்டும்.
// // //               </li>
// // //               <li>
// // //                 மந்திர நூல் முழுமையாக படிக்கத் தெரிந்தவர்கள் <strong>10 பேராவது</strong> இருக்க வேண்டும்.
// // //               </li>
// // //             </ul>
// // //             <ul className="space-y-4 list-disc ml-5">
// // //               <li>
// // //                 முதல் நாள் மாலை <strong>3.30 மணிக்கு</strong> முன் சித்தர்பீடத்திற்கு வந்து விடவும். அன்னையின் ஆணைப்படி ஒவ்வொரு மன்றமும் அன்னதானத்தை சிறப்பாக செய்யவும்.
// // //               </li>
// // //               <li>
// // //                 <strong>2 சாக்கு (கோணிப்பை)</strong> அளவிற்கு வேப்பிலை கொண்டுவரவும்.
// // //               </li>
// // //               <li>
// // //                 ஊரிலிருந்து புறப்படும் முன் கீழ்க்காணும் எண்ணில் தகவல் சொல்லவும்.
// // //               </li>
// // //               <li className="font-bold text-red-600 bg-red-50 p-2 rounded">
// // //                 குறிப்பு: தவிர்க்க இயலாத நிலையில் குறிப்பிட்ட மன்றம் பணிக்கு வரமுடியாத நிலை ஏற்படும் போது, அந்த மாவட்டத்தலைவர் கருவறைப்பணிக்கு மாற்று மன்றத்தை ஏற்பாடு செய்து சித்தர்பீடத்திற்கு உடனே அனுப்பி வைக்க வேண்டும்.
// // //               </li>
// // //             </ul>
// // //           </div>

// // //           {/* Footer Contact Info from Image 1 */}
// // //           <div className="mt-8 pt-6 border-t border-yellow-200 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-600 font-tamil">
// // //              <p>பெறுநர்: தொடர்புடைய மாவட்டத்தலைவர்/சக்திபீடத்தலைவர்/மாவட்ட இணைச்செயலாளர் (வேள்வி)</p>
// // //              <p className="flex items-center gap-2 mt-2 md:mt-0 text-[#a7150b]">
// // //                <Phone className="w-4 h-4" /> 044 2752 9096 (Admin Office MASM)
// // //              </p>
// // //           </div>
// // //         </motion.div>

// // //       </div>
// // //     </main>
// // //   );
// // // }

// // 'use client';

// // import { motion } from 'framer-motion';
// // import { Calendar, Users, Clock, AlertCircle, Search, Phone } from 'lucide-react';
// // import { useState } from 'react';

// // const scheduleData = [
// //   { date: '01.04.2026', day: 'Wednesday', reg: 'SS-14', mandram: 'Panguni Pournami - Senthamangalam Sakthipeedam', district: 'Namakkal' },
// //   { date: '02.04.2026', day: 'Thursday', reg: 'TPE-08 & TPE-09', mandram: 'Pudhu Vengkaraiyam Palayam & Durai Ramasamy Nagar', district: 'Tiruppur' },
// //   { date: '03.04.2026', day: 'Friday', reg: 'CD-22', mandram: 'Kattumannarkoil', district: 'Cuddalore' },
// //   { date: '04.04.2026', day: 'Saturday', reg: 'VRTC-01', mandram: 'Kutchampattiputhur, Aruppukottai', district: 'Virudhunagar' },
// //   { date: '05.04.2026', day: 'Sunday', reg: 'TKS-05', mandram: 'Pungampatti', district: 'Tenkasi' },
// //   { date: '06.04.2026', day: 'Monday', reg: 'DGN-11', mandram: 'Sinthalavadampatti', district: 'Dindigul' },
// //   { date: '07.04.2026', day: 'Tuesday', reg: 'TNE-11', mandram: 'Melanatham', district: 'Tirunelveli' },
// //   { date: '08.04.2026', day: 'Wednesday', reg: 'SS-58', mandram: 'Devakottai Sakthipeedam', district: 'Sivaganga' },
// //   { date: '09.04.2026', day: 'Thursday', reg: 'TMKPN-32', mandram: 'Mel Sadayanodai', district: 'Tiruvannamalai' },
// //   { date: '10.04.2026', day: 'Friday', reg: 'PD', mandram: 'Pudukkottai District Mandrams', district: 'Pudukkottai' },
// //   { date: '11.04.2026', day: 'Saturday', reg: 'MCI-14', mandram: 'Koyambedu', district: 'Central Chennai' },
// //   { date: '12.04.2026', day: 'Sunday', reg: 'VP-122 & VP-402', mandram: 'Venmaniyathur and Siruvakkur', district: 'Villupuram' },
// //   { date: '13.04.2026', day: 'Monday', reg: 'TV-83', mandram: 'Arani', district: 'Tiruvallur' },
// //   { date: '14.04.2026', day: 'Tuesday', reg: 'KP & CP', mandram: '"Parabhava" Tamil New Year Festival', district: 'Kanchipuram & Chengalpattu' },
// //   { date: '15.04.2026', day: 'Wednesday', reg: 'KA-94', mandram: 'Koramangla', district: 'Karnataka' },
// //   { date: '16.04.2026', day: 'Thursday', reg: 'KUS 02 & KUS 15', mandram: 'Thimmapuram and Sembakurichi', district: 'Kallakurichi' },
// //   { date: '17.04.2026', day: 'Friday', reg: 'SS-49, SS-50, SS-51', mandram: 'Chithirai Amavasai - Thabal Thanthi Nagar, Palamedu, Karadikkal Sakthipeedams', district: 'Madurai' },
// //   { date: '18.04.2026', day: 'Saturday', reg: 'PEN-11, PEN-18, PEN-19', mandram: 'Pennakonam 1, 2, 3 Mandrams', district: 'Perambalur' },
// //   { date: '19.04.2026', day: 'Sunday', reg: 'RNN-15', mandram: 'Puliyur', district: 'Ramanathapuram' },
// //   { date: '20.04.2026', day: 'Monday', reg: 'TMVV', mandram: 'Vandavasi Circle Mandrams', district: 'Tiruvannamalai' },
// //   { date: '21.04.2026', day: 'Tuesday', reg: 'MD 19', mandram: 'Kochadai', district: 'Madurai' },
// //   { date: '22.04.2026', day: 'Wednesday', reg: 'KA-133', mandram: 'Chellaghatta', district: 'Karnataka' },
// //   { date: '23.04.2026', day: 'Thursday', reg: 'TMKPE-47', mandram: 'Aavoor', district: 'Tiruvannamalai' },
// //   { date: '24.04.2026', day: 'Friday', reg: 'KSW-40', mandram: 'Nappirampatti', district: 'Krishnagiri South' },
// //   { date: '25.04.2026', day: 'Saturday', reg: 'ED', mandram: 'Erode District Mandrams', district: 'Erode' },
// //   { date: '26.04.2026', day: 'Sunday', reg: 'VRAK-01', mandram: 'Aziz Nagar - Aruppukottai', district: 'Virudhunagar' },
// //   { date: '27.04.2026', day: 'Monday', reg: 'KA-211', mandram: 'Gowtham Nagar', district: 'Karnataka' },
// //   { date: '28.04.2026', day: 'Tuesday', reg: 'MD-04', mandram: 'Sokkalinga Nagar', district: 'Madurai' },
// //   { date: '29.04.2026', day: 'Wednesday', reg: 'VRSP-05', mandram: 'Vathirairuppu', district: 'Virudhunagar' },
// //   { date: '30.04.2026', day: 'Thursday', reg: 'TJ', mandram: 'Chitra Pournami Festival', district: 'Thanjavur' },
// // ];

// // export default function SanctumSchedulePage() {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const filteredData = scheduleData.filter(item => 
// //     item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //     item.mandram.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
// //       <div className="max-w-7xl mx-auto">
        
// //         {/* Header */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center mb-10"
// //         >
// //           <div className="inline-flex items-center gap-2 bg-red-100 text-[#a7150b] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
// //             <Calendar className="w-4 h-4" />
// //             April 2026 Schedule
// //           </div>
// //           <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 font-tamil">
// //             கருவறைப் பணி (Sanctum Service)
// //           </h1>
// //           <p className="text-gray-600">Detailed Schedule for April 01, 2026 - April 30, 2026</p>
// //         </motion.div>

// //         {/* Search */}
// //         <div className="mb-6 max-w-md mx-auto relative">
// //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
// //           <input 
// //             type="text"
// //             placeholder="Search District or Mandram..."
// //             className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a7150b] shadow-sm"
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //         </div>

// //         {/* Table Card */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.1 }}
// //           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12"
// //         >
// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="bg-[#a7150b] text-white text-sm uppercase tracking-wider">
// //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Date & Day</th>
// //                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Reg No</th>
// //                   <th className="p-4 font-bold border-r border-red-800">Mandram</th>
// //                   <th className="p-4 font-bold">District</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="text-gray-700 text-sm md:text-base">
// //                 {filteredData.map((row, idx) => (
// //                   <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
// //                     <td className="p-4 border-r border-gray-100 font-medium whitespace-nowrap">
// //                       <div className="text-[#a7150b] font-bold">{row.date}</div>
// //                       <div className="text-gray-500 text-xs uppercase">{row.day}</div>
// //                     </td>
// //                     <td className="p-4 border-r border-gray-100 font-mono text-xs font-bold">{row.reg}</td>
// //                     <td className="p-4 border-r border-gray-100 font-medium font-tamil">{row.mandram}</td>
// //                     <td className="p-4 font-bold text-gray-800 font-tamil">{row.district}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //           {filteredData.length === 0 && (
// //             <div className="p-8 text-center text-gray-500">No results found.</div>
// //           )}
// //         </motion.div>

// //         {/* Instructions Card (Exact text from bottom of Image 1) */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ delay: 0.2 }}
// //           className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-8 rounded-r-2xl shadow-sm"
// //         >
// //           <div className="flex items-center gap-3 mb-4">
// //             <AlertCircle className="w-6 h-6 text-yellow-700" />
// //             <h3 className="text-xl font-bold text-yellow-800 font-tamil">முக்கிய அறிவுரைகள் (Important Instructions)</h3>
// //           </div>
          
// //           <div className="grid md:grid-cols-2 gap-8 text-yellow-900/80 leading-relaxed font-tamil text-[15px]">
// //             <ul className="space-y-4 list-disc ml-5">
// //               <li>
// //                 கருவறைப்பணிக்கு <strong>160 தொண்டர்களுக்கு</strong> குறையாமல் அனைத்து தொண்டர்களையும் மனமுவந்து செய்யக்கூடியவராக அழைத்து வரவும்.
// //               </li>
// //               <li>
// //                 அந்தந்த மாவட்ட இணைச்செயலாளர் (வேள்வி) உடன் வரவேண்டும்.
// //               </li>
// //               <li>
// //                 அனைவரும் புறப்படும் இடத்திலிருந்து <strong>முழு சீருடையில்</strong> (Full Uniform) வரவேண்டும். மகளிர் கைத்தறி நூல் ஆடை அணிந்தவர்களாக இருக்கவேண்டும்.
// //               </li>
// //               <li>
// //                 மந்திர நூல் முழுமையாக படிக்கத் தெரிந்தவர்கள் <strong>10 பேராவது</strong> இருக்க வேண்டும்.
// //               </li>
// //             </ul>
// //             <ul className="space-y-4 list-disc ml-5">
// //               <li>
// //                 முதல் நாள் மாலை <strong>3.30 மணிக்கு</strong> முன் சித்தர்பீடத்திற்கு வந்து விடவும். அன்னையின் ஆணைப்படி ஒவ்வொரு மன்றமும் அன்னதானத்தை சிறப்பாக செய்யவும்.
// //               </li>
// //               <li>
// //                 <strong>2 சாக்கு (கோணிப்பை)</strong> அளவிற்கு வேப்பிலை கொண்டுவரவும்.
// //               </li>
// //               <li>
// //                 ஊரிலிருந்து புறப்படும் முன் கீழ்க்காணும் எண்ணில் தகவல் சொல்லவும்.
// //               </li>
// //               <li className="font-bold text-red-600 bg-red-50 p-2 rounded">
// //                 குறிப்பு: தவிர்க்க இயலாத நிலையில் குறிப்பிட்ட மன்றம் பணிக்கு வரமுடியாத நிலை ஏற்படும் போது, அந்த மாவட்டத்தலைவர் கருவறைப்பணிக்கு மாற்று மன்றத்தை ஏற்பாடு செய்து சித்தர்பீடத்திற்கு உடனே அனுப்பி வைக்க வேண்டும்.
// //               </li>
// //             </ul>
// //           </div>

// //           {/* Footer Contact Info from Image 1 */}
// //           <div className="mt-8 pt-6 border-t border-yellow-200 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-600 font-tamil">
// //              <p>பெறுநர்: தொடர்புடைய மாவட்டத்தலைவர்/சக்திபீடத்தலைவர்/மாவட்ட இணைச்செயலாளர் (வேள்வி)</p>
// //              <p className="flex items-center gap-2 mt-2 md:mt-0 text-[#a7150b]">
// //                <Phone className="w-4 h-4" /> 044 2752 9096 (Admin Office MASM)
// //              </p>
// //           </div>
// //         </motion.div>

// //       </div>
// //     </main>
// //   );
// // }

// 'use client';

// import { motion, AnimatePresence } from 'framer-motion';
// import { Calendar, Users, Clock, AlertCircle, Search, Phone, Eye, X, ImageIcon } from 'lucide-react';
// import { useState } from 'react';

// const scheduleData = [
//   { date: '01.04.2026', day: 'Wednesday', reg: 'SS-14', mandram: 'Panguni Pournami - Senthamangalam Sakthipeedam', district: 'Namakkal' },
//   { date: '02.04.2026', day: 'Thursday', reg: 'TPE-08 & TPE-09', mandram: 'Pudhu Vengkaraiyam Palayam & Durai Ramasamy Nagar', district: 'Tiruppur' },
//   { date: '03.04.2026', day: 'Friday', reg: 'CD-22', mandram: 'Kattumannarkoil', district: 'Cuddalore' },
//   { date: '04.04.2026', day: 'Saturday', reg: 'VRTC-01', mandram: 'Kutchampattiputhur, Aruppukottai', district: 'Virudhunagar' },
//   { date: '05.04.2026', day: 'Sunday', reg: 'TKS-05', mandram: 'Pungampatti', district: 'Tenkasi' },
//   { date: '06.04.2026', day: 'Monday', reg: 'DGN-11', mandram: 'Sinthalavadampatti', district: 'Dindigul' },
//   { date: '07.04.2026', day: 'Tuesday', reg: 'TNE-11', mandram: 'Melanatham', district: 'Tirunelveli' },
//   { date: '08.04.2026', day: 'Wednesday', reg: 'SS-58', mandram: 'Devakottai Sakthipeedam', district: 'Sivaganga' },
//   { date: '09.04.2026', day: 'Thursday', reg: 'TMKPN-32', mandram: 'Mel Sadayanodai', district: 'Tiruvannamalai' },
//   { date: '10.04.2026', day: 'Friday', reg: 'PD', mandram: 'Pudukkottai District Mandrams', district: 'Pudukkottai' },
//   { date: '11.04.2026', day: 'Saturday', reg: 'MCI-14', mandram: 'Koyambedu', district: 'Central Chennai' },
//   { date: '12.04.2026', day: 'Sunday', reg: 'VP-122 & VP-402', mandram: 'Venmaniyathur and Siruvakkur', district: 'Villupuram' },
//   { date: '13.04.2026', day: 'Monday', reg: 'TV-83', mandram: 'Arani', district: 'Tiruvallur' },
//   { date: '14.04.2026', day: 'Tuesday', reg: 'KP & CP', mandram: '"Parabhava" Tamil New Year Festival', district: 'Kanchipuram & Chengalpattu' },
//   { date: '15.04.2026', day: 'Wednesday', reg: 'KA-94', mandram: 'Koramangla', district: 'Karnataka' },
//   { date: '16.04.2026', day: 'Thursday', reg: 'KUS 02 & KUS 15', mandram: 'Thimmapuram and Sembakurichi', district: 'Kallakurichi' },
//   { date: '17.04.2026', day: 'Friday', reg: 'SS-49, SS-50, SS-51', mandram: 'Chithirai Amavasai - Thabal Thanthi Nagar, Palamedu, Karadikkal Sakthipeedams', district: 'Madurai' },
//   { date: '18.04.2026', day: 'Saturday', reg: 'PEN-11, PEN-18, PEN-19', mandram: 'Pennakonam 1, 2, 3 Mandrams', district: 'Perambalur' },
//   { date: '19.04.2026', day: 'Sunday', reg: 'RNN-15', mandram: 'Puliyur', district: 'Ramanathapuram' },
//   { date: '20.04.2026', day: 'Monday', reg: 'TMVV', mandram: 'Vandavasi Circle Mandrams', district: 'Tiruvannamalai' },
//   { date: '21.04.2026', day: 'Tuesday', reg: 'MD 19', mandram: 'Kochadai', district: 'Madurai' },
//   { date: '22.04.2026', day: 'Wednesday', reg: 'KA-133', mandram: 'Chellaghatta', district: 'Karnataka' },
//   { date: '23.04.2026', day: 'Thursday', reg: 'TMKPE-47', mandram: 'Aavoor', district: 'Tiruvannamalai' },
//   { date: '24.04.2026', day: 'Friday', reg: 'KSW-40', mandram: 'Nappirampatti', district: 'Krishnagiri South' },
//   { date: '25.04.2026', day: 'Saturday', reg: 'ED', mandram: 'Erode District Mandrams', district: 'Erode' },
//   { date: '26.04.2026', day: 'Sunday', reg: 'VRAK-01', mandram: 'Aziz Nagar - Aruppukottai', district: 'Virudhunagar' },
//   { date: '27.04.2026', day: 'Monday', reg: 'KA-211', mandram: 'Gowtham Nagar', district: 'Karnataka' },
//   { date: '28.04.2026', day: 'Tuesday', reg: 'MD-04', mandram: 'Sokkalinga Nagar', district: 'Madurai' },
//   { date: '29.04.2026', day: 'Wednesday', reg: 'VRSP-05', mandram: 'Vathirairuppu', district: 'Virudhunagar' },
//   { date: '30.04.2026', day: 'Thursday', reg: 'TJ', mandram: 'Chitra Pournami Festival', district: 'Thanjavur' },
// ];

// export default function SanctumSchedulePage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Replace this with your actual May schedule image path
//   const mayScheduleImageUrl = "https://res.cloudinary.com/dvd7o5nph/image/upload/q_auto/f_auto/v1775109838/WhatsApp_Image_2026-03-31_at_3.41.24_PM_jvbyxa.jpg";

//   const filteredData = scheduleData.filter(item => 
//     item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.mandram.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-10"
//         >
//           <div className="inline-flex items-center gap-2 bg-red-100 text-[#a7150b] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
//             <Calendar className="w-4 h-4" />
//             April 2026 Schedule
//           </div>
//           <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 font-tamil">
//             கருவறைப் பணி (Sanctum Service)
//           </h1>
//           <p className="text-gray-600">Detailed Schedule for April 01, 2026 - April 30, 2026</p>
//         </motion.div>

//         {/* Search */}
//         <div className="mb-8 max-w-md mx-auto relative">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input 
//             type="text"
//             placeholder="Search District or Mandram..."
//             className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a7150b] shadow-sm"
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* Table Card */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12"
//         >
//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-[#a7150b] text-white text-sm uppercase tracking-wider">
//                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Date & Day</th>
//                   <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Reg No</th>
//                   <th className="p-4 font-bold border-r border-red-800">Mandram</th>
//                   <th className="p-4 font-bold">District</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700 text-sm md:text-base">
//                 {filteredData.map((row, idx) => (
//                   <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
//                     <td className="p-4 border-r border-gray-100 font-medium whitespace-nowrap">
//                       <div className="text-[#a7150b] font-bold">{row.date}</div>
//                       <div className="text-gray-500 text-xs uppercase">{row.day}</div>
//                     </td>
//                     <td className="p-4 border-r border-gray-100 font-mono text-xs font-bold">{row.reg}</td>
//                     <td className="p-4 border-r border-gray-100 font-medium font-tamil">{row.mandram}</td>
//                     <td className="p-4 font-bold text-gray-800 font-tamil">{row.district}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {filteredData.length === 0 && (
//             <div className="p-8 text-center text-gray-500">No results found.</div>
//           )}
//         </motion.div>

//         {/* Upcoming May Schedule Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 mb-12"
//         >
//           <div className="flex items-center gap-4">
//             <div className="bg-gray-100 p-4 rounded-full text-[#a7150b]">
//               <ImageIcon className="w-8 h-8" />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-gray-900 mb-1">Upcoming Schedule</h3>
//               <p className="text-gray-600 text-sm">May 2026 Sanctum Service (மே 2026 கருவறைப் பணி)</p>
//             </div>
//           </div>
          
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#a7150b] hover:bg-red-800 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-sm"
//           >
//             <Eye className="w-5 h-5" />
//             View May Schedule
//           </button>
//         </motion.div>

//         {/* Instructions Card (Moved to the absolute end) */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-8 rounded-r-2xl shadow-sm"
//         >
//           <div className="flex items-center gap-3 mb-4">
//             <AlertCircle className="w-6 h-6 text-yellow-700" />
//             <h3 className="text-xl font-bold text-yellow-800 font-tamil">முக்கிய அறிவுரைகள் (Important Instructions)</h3>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 text-yellow-900/80 leading-relaxed font-tamil text-[15px]">
//             <ul className="space-y-4 list-disc ml-5">
//               <li>
//                 கருவறைப்பணிக்கு <strong>160 தொண்டர்களுக்கு</strong> குறையாமல் அனைத்து தொண்டர்களையும் மனமுவந்து செய்யக்கூடியவராக அழைத்து வரவும்.
//               </li>
//               <li>
//                 அந்தந்த மாவட்ட இணைச்செயலாளர் (வேள்வி) உடன் வரவேண்டும்.
//               </li>
//               <li>
//                 அனைவரும் புறப்படும் இடத்திலிருந்து <strong>முழு சீருடையில்</strong> (Full Uniform) வரவேண்டும். மகளிர் கைத்தறி நூல் ஆடை அணிந்தவர்களாக இருக்கவேண்டும்.
//               </li>
//               <li>
//                 மந்திர நூல் முழுமையாக படிக்கத் தெரிந்தவர்கள் <strong>10 பேராவது</strong> இருக்க வேண்டும்.
//               </li>
//             </ul>
//             <ul className="space-y-4 list-disc ml-5">
//               <li>
//                 முதல் நாள் மாலை <strong>3.30 மணிக்கு</strong> முன் சித்தர்பீடத்திற்கு வந்து விடவும். அன்னையின் ஆணைப்படி ஒவ்வொரு மன்றமும் அன்னதானத்தை சிறப்பாக செய்யவும்.
//               </li>
//               <li>
//                 <strong>2 சாக்கு (கோணிப்பை)</strong> அளவிற்கு வேப்பிலை கொண்டுவரவும்.
//               </li>
//               <li>
//                 ஊரிலிருந்து புறப்படும் முன் கீழ்க்காணும் எண்ணில் தகவல் சொல்லவும்.
//               </li>
//               <li className="font-bold text-red-600 bg-red-50 p-2 rounded">
//                 குறிப்பு: தவிர்க்க இயலாத நிலையில் குறிப்பிட்ட மன்றம் பணிக்கு வரமுடியாத நிலை ஏற்படும் போது, அந்த மாவட்டத்தலைவர் கருவறைப்பணிக்கு மாற்று மன்றத்தை ஏற்பாடு செய்து சித்தர்பீடத்திற்கு உடனே அனுப்பி வைக்க வேண்டும்.
//               </li>
//             </ul>
//           </div>

//           <div className="mt-8 pt-6 border-t border-yellow-200 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-600 font-tamil">
//              <p>பெறுநர்: தொடர்புடைய மாவட்டத்தலைவர்/சக்திபீடத்தலைவர்/மாவட்ட இணைச்செயலாளர் (வேள்வி)</p>
//              <p className="flex items-center gap-2 mt-2 md:mt-0 text-[#a7150b]">
//                <Phone className="w-4 h-4" /> 044 2752 9096 (Admin Office MASM)
//              </p>
//           </div>
//         </motion.div>

//       </div>

//       {/* Image Viewing Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div 
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
//             onClick={() => setIsModalOpen(false)}
//           >
//             <motion.div 
//               initial={{ scale: 0.95 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.95 }}
//               className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button 
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-0 right-0 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-md transition-colors"
//                 aria-label="Close modal"
//               >
//                 <X className="w-6 h-6" />
//               </button>
              
//               <div className="w-full h-full p-2 flex items-center justify-center">
//                 <img 
//                   src={mayScheduleImageUrl} 
//                   alt="May 2026 Sanctum Schedule" 
//                   className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
//                 />
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//     </main>
//   );
// }

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, AlertCircle, Search, Phone, Eye, X, ImageIcon } from 'lucide-react';
import { useState } from 'react';

// FULL DATA FROM IMAGE 1 (May 01 2026 - May 31 2026) - Corrected Spellings from Tamil transcription
const scheduleData = [
  { date: '01.05.2026', day: 'Friday', reg: 'TJ', mandram: 'சித்திரை பௌர்ணமி வேள்விப்பெருவிழா', district: 'தஞ்சை' },
  { date: '02.05.2026', day: 'Saturday', reg: 'SLW-20', mandram: 'காடையாம்பட்டி', district: 'சேலம்' },
  { date: '03.05.2026', day: 'Sunday', reg: 'VR-03', mandram: 'விருதுநகர்', district: 'விருதுநகர்' },
  { date: '04.05.2026', day: 'Monday', reg: 'KA-160', mandram: 'Swathanthra Nagar', district: 'Karnataka' },
  { date: '05.05.2026', day: 'Tuesday', reg: 'SLE-28', mandram: 'புத்திரகவுண்டன்பாளையம்', district: 'சேலம்' },
  { date: '06.05.2026', day: 'Wednesday', reg: 'SGN-07', mandram: 'காரைக்குடி செக்காலை', district: 'சிவகங்கை' },
  { date: '07.05.2026', day: 'Thursday', reg: 'DPN-31', mandram: 'மகேந்திரமங்கலம்', district: 'தர்மபுரி வடக்கு' },
  { date: '08.05.2026', day: 'Friday', reg: 'PEW-02', mandram: 'வெங்கலம்', district: 'பெரம்பலூர்' },
  { date: '09.05.2026', day: 'Saturday', reg: 'MCI-14', mandram: 'கோயம்பேடு', district: 'மத்திய சென்னை' },
  { date: '10.05.2026', day: 'Sunday', reg: 'TMCY-04', mandram: 'பழனியப்பா நகர்', district: 'திருவண்ணாமலை' },
  { date: '11.05.2026', day: 'Monday', reg: 'SGN-10', mandram: 'திருவேகம்பத்து', district: 'சிவகங்கை' },
  { date: '12.05.2026', day: 'Tuesday', reg: 'DGE-01', mandram: 'மலையடிவாரம்', district: 'திண்டுக்கல்' },
  { date: '13.05.2026', day: 'Wednesday', reg: 'ARN-04', mandram: 'அசாவீரன் குடிக்காடு', district: 'அரியலூர்' },
  { date: '14.05.2026', day: 'Thursday', reg: 'DPN-03', mandram: 'பந்தாரஹள்ளி', district: 'தர்மபுரி வடக்கு' },
  { date: '15.05.2026', day: 'Friday', reg: 'TJC-21', mandram: 'சுவாமிநாதன் நகர்', district: 'தஞ்சை' },
  { date: '16.05.2026', day: 'Saturday', reg: 'KA', mandram: 'Vaikasi Amavasai Velvi', district: 'Karnataka' },
  { date: '17.05.2026', day: 'Sunday', reg: 'KSE-02', mandram: 'காவேரிப்பட்டணம்', district: 'கிருஷ்ணகிரி தெற்கு' },
  { date: '18.05.2026', day: 'Monday', reg: 'RNC-05', mandram: 'அரியநாயகி பிள்ளைச் சந்து', district: 'இராமநாதபுரம்' },
  { date: '19.05.2026', day: 'Tuesday', reg: 'DGE-59', mandram: 'எரியோடு', district: 'திண்டுக்கல்' },
  { date: '20.05.2026', day: 'Wednesday', reg: 'TMV', mandram: 'வந்தவாசி வட்ட மன்றங்கள்', district: 'திருவண்ணாமலை' },
  { date: '21.05.2026', day: 'Thursday', reg: 'VRST-04', mandram: 'மேல காந்தி நகர்', district: 'விருதுநகர்' },
  { date: '22.05.2026', day: 'Friday', reg: 'TTN-01', mandram: 'எட்டையபுரம்', district: 'தூத்துக்குடி' },
  { date: '23.05.2026', day: 'Saturday', reg: 'NKN-04', mandram: 'இராசிபுரம் பொது', district: 'நாமக்கல்' },
  { date: '24.05.2026', day: 'Sunday', reg: 'TMA', mandram: 'ஆரணி வட்ட மன்றங்கள்', district: 'திருவண்ணாமலை' },
  { date: '25.05.2026', day: 'Monday', reg: 'TRS-03', mandram: 'இந்தியன் வங்கி காலனி', district: 'திருச்சி' },
  { date: '26.05.2026', day: 'Tuesday', reg: 'TIW-21', mandram: 'பச்சூர்', district: 'திருப்பத்தூர்' },
  { date: '27.05.2026', day: 'Wednesday', reg: 'MDN-03', mandram: 'ரேஸ் கோர்ஸ்', district: 'மதுரை' },
  { date: '28.05.2026', day: 'Thursday', reg: 'TKS-01', mandram: 'விக்ரமசிங்கபுரம்', district: 'தென்காசி' },
  { date: '29.05.2026', day: 'Friday', reg: 'TTN-02', mandram: 'எட்டையபுரம் நடுவிற்பட்டி', district: 'தூத்துக்குடி' },
  { date: '30.05.2026', day: 'Saturday', reg: 'KA-245', mandram: 'K.G. Doddi', district: 'Karnataka' },
  { date: '31.05.2026', day: 'Sunday', reg: 'MM', mandram: 'Vaikasi Pournami Vilakku Poojai', district: 'Maharashtra' },
];

export default function SanctumSchedulePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Replace this with your actual May schedule image path
  const mayScheduleImageUrl = "https://res.cloudinary.com/dvd7o5nph/image/upload/q_auto/f_auto/v1775109838/WhatsApp_Image_2026-03-31_at_3.41.24_PM_jvbyxa.jpg";

  const filteredData = scheduleData.filter(item => 
    item.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.mandram.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-[#a7150b] px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
            <Calendar className="w-4 h-4" />
            May 2026 Schedule
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 font-tamil">
            கருவறைப் பணி (Sanctum Service)
          </h1>
          <p className="text-gray-600">Detailed Schedule for May 01, 2026 - May 31, 2026</p>
        </motion.div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Search District or Mandram..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a7150b] shadow-sm"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#a7150b] text-white text-sm uppercase tracking-wider">
                  <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Date & Day</th>
                  <th className="p-4 font-bold border-r border-red-800 whitespace-nowrap">Reg No</th>
                  <th className="p-4 font-bold border-r border-red-800">Mandram</th>
                  <th className="p-4 font-bold">District</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm md:text-base">
                {filteredData.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-red-50 transition-colors">
                    <td className="p-4 border-r border-gray-100 font-medium whitespace-nowrap">
                      <div className="text-[#a7150b] font-bold">{row.date}</div>
                      <div className="text-gray-500 text-xs uppercase">{row.day}</div>
                    </td>
                    <td className="p-4 border-r border-gray-100 font-mono text-xs font-bold">{row.reg}</td>
                    <td className="p-4 border-r border-gray-100 font-medium font-tamil">{row.mandram}</td>
                    <td className="p-4 font-bold text-gray-800 font-tamil">{row.district}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredData.length === 0 && (
            <div className="p-8 text-center text-gray-500">No results found.</div>
          )}
        </motion.div>


        {/* Instructions Card (Moved to the absolute end) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-50 border-l-8 border-yellow-500 p-6 md:p-8 rounded-r-2xl shadow-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-700" />
            <h3 className="text-xl font-bold text-yellow-800 font-tamil">முக்கிய அறிவுரைகள் (Important Instructions)</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-yellow-900/80 leading-relaxed font-tamil text-[15px]">
            <ul className="space-y-4 list-disc ml-5">
              <li>
                கருவறைப்பணிக்கு <strong>160 தொண்டர்களுக்கு</strong> குறையாமல் அனைத்து தொண்டர்களையும் மனமுவந்து செய்யக்கூடியவராக அழைத்து வரவும்.
              </li>
              <li>
                அந்தந்த மாவட்ட இணைச்செயலாளர் (வேள்வி) உடன் வரவேண்டும்.
              </li>
              <li>
                அனைவரும் புறப்படும் இடத்திலிருந்து <strong>முழு சீருடையில்</strong> (Full Uniform) வரவேண்டும். மகளிர் கைத்தறி நூல் ஆடை அணிந்தவர்களாக இருக்கவேண்டும்.
              </li>
              <li>
                மந்திர நூல் முழுமையாக படிக்கத் தெரிந்தவர்கள் <strong>10 பேராவது</strong> இருக்க வேண்டும்.
              </li>
            </ul>
            <ul className="space-y-4 list-disc ml-5">
              <li>
                முதல் நாள் மாலை <strong>3.30 மணிக்கு</strong> முன் சித்தர்பீடத்திற்கு வந்து விடவும். அன்னையின் ஆணைப்படி ஒவ்வொரு மன்றமும் அன்னதானத்தை சிறப்பாக செய்யவும்.
              </li>
              <li>
                <strong>2 சாக்கு (கோணிப்பை)</strong> அளவிற்கு வேப்பிலை கொண்டுவரவும்.
              </li>
              <li>
                ஊரிலிருந்து புறப்படும் முன் கீழ்க்காணும் எண்ணில் தகவல் சொல்லவும்.
              </li>
              <li className="font-bold text-red-600 bg-red-50 p-2 rounded">
                குறிப்பு: தவிர்க்க இயலாத நிலையில் குறிப்பிட்ட மன்றம் பணிக்கு வரமுடியாத நிலை ஏற்படும் போது, அந்த மாவட்டத்தலைவர் கருவறைப்பணிக்கு மாற்று மன்றத்தை ஏற்பாடு செய்து சித்தர்பீடத்திற்கு உடனே அனுப்பி வைக்க வேண்டும்.
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-yellow-200 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-gray-600 font-tamil">
             <p>பெறுநர்: தொடர்புடைய மாவட்டத்தலைவர்/சக்திபீடத்தலைவர்/மாவட்ட இணைச்செயலாளர் (வேள்வி)</p>
             <p className="flex items-center gap-2 mt-2 md:mt-0 text-[#a7150b]">
               <Phone className="w-4 h-4" /> 044 2752 9096 (Admin Office MASM)
             </p>
          </div>
        </motion.div>

      </div>

    </main>
  );
}