
// "use client";

// import { useState } from "react";

// export default function Calendar() {
//   const [date, setDate] = useState(new Date());

//   const monthNames = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December"
//   ];

//   const year = date.getFullYear();
//   const month = date.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   let days = [];
//   for (let i = 0; i < firstDay; i++) days.push(null);
//   for (let d = 1; d <= daysInMonth; d++) days.push(d);

//   const nextMonth = () =>
//     setDate(new Date(year, month + 1, 1));
//   const prevMonth = () =>
//     setDate(new Date(year, month - 1, 1));

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow border">
//       <div className="flex justify-between items-center mb-6">
//         <button className="px-4 py-2 bg-gray-200 rounded" onClick={prevMonth}>
//           ←
//         </button>

//         <h2 className="text-xl font-bold">
//           {monthNames[month]} {year}
//         </h2>

//         <button className="px-4 py-2 bg-gray-200 rounded" onClick={nextMonth}>
//           →
//         </button>
//       </div>

//       <div className="grid grid-cols-7 font-semibold text-center border-b pb-2">
//         <div>Sun</div><div>Mon</div><div>Tue</div>
//         <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
//       </div>

//       <div className="grid grid-cols-7 gap-2 mt-3">
//         {days.map((d, i) => (
//           <div
//             key={i}
//             className="h-16 flex items-center justify-center border rounded bg-gray-50"
//           >
//             {d ?? ""}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, Moon, Sun, Sparkles, Globe } from 'lucide-react';

type EventType = 'festivals' | 'Ammavasai' | 'pournami' | 'google';

export default function TempleCalendar() {
  const [activeTab, setActiveTab] = useState<EventType>('festivals');

  // Data extracted from "DocScanner Nov 20, 2025.pdf" [cite: 8, 13]
  const festivals = [
    { date: "01.01.2026", day: "Thursday", tamil: "ஆங்கில வருடப்பிறப்பு", eng: "English New Year" },
    { date: "15.01.2026", day: "Thursday", tamil: "தைப்பொங்கல்", eng: "Thai Pongal" },
    { date: "31.01.2026", day: "Saturday", tamil: "தைப்பூசஜோதி பெருவிழா", eng: "Thaipoosa Jyothi Festival" },
    { date: "03.03.2026", day: "Tuesday", tamil: "அம்மா அவர்களின் 86வது அவதார திருநாள்", eng: "Amma's 86th Avatar Day" },
    { date: "19.03.2026", day: "Thursday", tamil: "தெலுங்கு வருடப்பிறப்பு", eng: "Telugu New Year" },
    { date: "14.04.2026", day: "Tuesday", tamil: "தமிழ் வருடப்பிறப்பு", eng: "Tamil New Year" },
    { date: "30.04.2026", day: "Thursday", tamil: "சித்திரை பௌர்ணமி வேள்வி", eng: "Chitra Pournami Velvi" },
    { date: "14.08.2026", day: "Friday", tamil: "55வது ஆடிப்பூர பெருவிழா", eng: "55th Aadipooram Festival" },
    { date: "04.09.2026", day: "Friday", tamil: "திருமண நாள்", eng: "Amma & Appa Wedding Anniversary" },
    { date: "11.10.2026", day: "Sunday", tamil: "நவராத்திரி ஆரம்பம்", eng: "Navarathri Starts" },
    { date: "19.10.2026", day: "Monday", tamil: "முக்தி அடைந்தநாள்", eng: "Amma Mukthi Day" },
    { date: "25.12.2026", day: "Friday", tamil: "கிறிஸ்துமஸ்", eng: "Christmas" },
  ];

  // Data extracted from PDF Page 4 [cite: 16]
  const Ammavasai = [
    { date: "18.01.2026", day: "Sunday" },
    { date: "17.02.2026", day: "Tuesday" },
    { date: "18.03.2026", day: "Wednesday" },
    { date: "17.04.2026", day: "Friday" },
    { date: "16.05.2026", day: "Saturday" },
    { date: "14.06.2026", day: "Sunday" },
    { date: "14.07.2026", day: "Tuesday" },
    { date: "12.08.2026", day: "Wednesday" },
    { date: "10.09.2026", day: "Thursday" },
    { date: "10.10.2026", day: "Saturday" },
    { date: "08.11.2026", day: "Sunday" },
    { date: "08.12.2026", day: "Tuesday" },
  ];

  // Data extracted from PDF Page 1 & 2 [cite: 8, 9]
  const pournami = [
    { date: "03.01.2026", day: "Saturday" },
    { date: "01.04.2026", day: "Wednesday" },
    { date: "30.04.2026", day: "Thursday" },
    { date: "31.05.2026", day: "Sunday" },
    { date: "29.06.2026", day: "Monday" },
    { date: "29.07.2026", day: "Wednesday" },
    { date: "27.08.2026", day: "Thursday" },
    { date: "26.09.2026", day: "Saturday" },
    { date: "25.10.2026", day: "Sunday" },
    { date: "24.11.2026", day: "Tuesday" },
    { date: "23.12.2026", day: "Wednesday" },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="temple-calendar">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide">
            TEMPLE SCHEDULE
          </span>
          <h2 className="text-4xl font-bold text-[#1a1a1a] mt-4 mb-2 spiritual-text">
            Sacred Calendar 2026
          </h2>
          <p className="text-gray-500">View upcoming auspicious dates or check the live schedule.</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {[
            { id: 'festivals', label: 'Major Festivals', icon: Sparkles },
            { id: 'Ammavasai', label: 'Ammavasai Velvi', icon: Sun },
            { id: 'pournami', label: 'Pournami Pooja', icon: Moon },
            { id: 'google', label: 'Live Calendar', icon: Globe }, // Merged Google Calendar Tab
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as EventType)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base shadow-sm ${
                activeTab === tab.id
                  ? 'bg-[#a7150b] text-white scale-105 shadow-lg ring-2 ring-red-100'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* 1. FESTIVALS TAB */}
            {activeTab === 'festivals' && (
              <motion.div
                key="festivals"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="divide-y divide-gray-100"
              >
                <div className="grid grid-cols-12 bg-gray-50 p-4 font-bold text-gray-500 text-xs uppercase tracking-wider border-b">
                  <div className="col-span-4 md:col-span-2">Date</div>
                  <div className="col-span-8 md:col-span-10">Occasion</div>
                </div>
                <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                  {festivals.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-12 p-4 md:p-6 items-center hover:bg-orange-50 transition-colors group">
                      <div className="col-span-4 md:col-span-2">
                        <div className="font-bold text-[#a7150b] text-lg leading-none">{item.date.split('.')[0]}</div>
                        <div className="text-xs text-gray-400 uppercase mt-1">{item.day.substring(0,3)}</div>
                      </div>
                      <div className="col-span-8 md:col-span-10">
                        <h4 className="font-bold text-gray-800 text-base md:text-lg group-hover:text-[#a7150b] transition-colors">
                          {item.tamil}
                        </h4>
                        <p className="text-gray-500 text-xs md:text-sm mt-1">{item.eng}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 2. Ammavasai TAB */}
            {activeTab === 'Ammavasai' && (
              <motion.div
                key="Ammavasai"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-gray-50/50 h-full"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#a7150b]">Ammavasai Velvi 2026 [cite: 16]</h3>
                  <p className="text-gray-500 text-sm">Monthly New Moon Sacrificial Fire Rituals</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Ammavasai.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 text-center border border-gray-200 shadow-sm hover:shadow-md hover:border-[#a7150b] transition-all">
                      <div className="text-lg font-bold text-gray-800">{item.date}</div>
                      <div className="text-[#a7150b] font-bold text-xs uppercase mt-1">{item.day}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 3. POURNAMI TAB */}
            {activeTab === 'pournami' && (
              <motion.div
                key="pournami"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-yellow-50/30 h-full"
              >
                 <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#a7150b]">Pournami Pooja 2026 [cite: 8, 9]</h3>
                  <p className="text-gray-500 text-sm">Full Moon Lamp Worship & Prayers</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {pournami.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 text-center border border-yellow-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all">
                      <div className="text-lg font-bold text-gray-800">{item.date}</div>
                      <div className="text-yellow-600 font-bold text-xs uppercase mt-1">{item.day}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* 4. GOOGLE CALENDAR TAB (The Merged Section) */}
            {activeTab === 'google' && (
              <motion.div
                key="google"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-[600px] bg-white"
              >
                 <iframe 
                    src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
                    style={{ border: 0 }} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no"
                    className="w-full h-full"
                    title="Temple Live Calendar"
                  ></iframe>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}