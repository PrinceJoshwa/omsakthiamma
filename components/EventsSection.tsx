// 'use client';

// import { motion } from 'framer-motion';
// import { Clock, MapPin, Calendar } from 'lucide-react';
// import Link from 'next/link';

// export default function EventsSection() {
//   // Data extracted from the 2026 Schedule PDF
//   const upcomingEvents = [
//     {
//       month: 'JAN',
//       day: '31',
//       year: '2026',
//       title: 'Thaipoosa Jyothi Peruvizha',
//       subtitle: 'தைப்பூசஜோதி பெருவிழா',
//       time: 'All Day Celebration',
//       description: 'The grand festival of Divine Light. Devotees carry Irumudi and seek blessings at the Sanctum Sanctorum.',
//     },
//     {
//       month: 'MAR',
//       day: '03',
//       year: '2026',
//       title: "Amma's 86th Avatar Day",
//       subtitle: '86வது அவதார திருநாள்',
//       time: 'Grand Celebration',
//       description: 'Celebrating the 86th divine birthday of Arul Thiru Bangaru Adigalar with special poojas and annadhanam.',
//     },
//     {
//       month: 'APR',
//       day: '14',
//       year: '2026',
//       title: 'Tamil New Year',
//       subtitle: 'தமிழ் வருடப்பிறப்பு',
//       time: 'Morning Special Pooja',
//       description: 'Special prayers to welcome the Hevilambi Tamil New Year with prosperity and grace.',
//     },
//     {
//       month: 'APR',
//       day: '30',
//       year: '2026',
//       title: 'Chitra Pournami Velvi',
//       subtitle: 'சித்திரை பௌர்ணமி வேள்வி',
//       time: 'Evening Yagam',
//       description: 'A powerful full moon fire ritual (Velvi) performed to cleanse karma and bring universal peace.',
//     },
//     {
//       month: 'AUG',
//       day: '14',
//       year: '2026',
//       title: '55th Aadipooram Festival',
//       subtitle: '55வது ஆடிப்பூர பெருவிழா',
//       time: 'Grand Festival',
//       description: 'One of the most significant festivals dedicated to the Mother Goddess, celebrated with immense devotion.',
//     },
//     {
//       month: 'OCT',
//       day: '11',
//       year: '2026',
//       title: 'Navarathri Begins',
//       subtitle: 'நவராத்திரி ஆரம்பம்',
//       time: '9 Days of Celebration',
//       description: 'The start of the nine sacred nights worshipping the different forms of Sakthi.',
//     },
//   ];

//   return (
//     <section className="py-24 px-4 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
        
//         {/* Section Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold tracking-wider uppercase">
//             Mark Your Calendar
//           </span>
//           <h2 className="text-4xl font-bold text-[#1a1a1a] mt-4 mb-4 spiritual-text">
//             Upcoming Major Events
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Join us for these auspicious occasions in 2026 and receive the divine blessings of Adhiparasakthi.
//           </p>
//         </motion.div>

//         {/* Events Grid */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {upcomingEvents.map((event, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1 }}
//               viewport={{ once: true }}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-6 group"
//             >
//               {/* Date Badge */}
//               <div className="flex flex-col items-center justify-center shrink-0 w-20 h-24 bg-orange-50 rounded-lg border border-orange-100 group-hover:border-[#ffc107] transition-colors">
//                 <span className="text-xs font-bold text-[#a7150b] uppercase tracking-wider">{event.month}</span>
//                 <span className="text-3xl font-bold text-[#1a1a1a] leading-none my-1">{event.day}</span>
//                 <span className="text-xs font-medium text-gray-500">{event.year}</span>
//               </div>

//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#a7150b] transition-colors">
//                   {event.title}
//                 </h3>
//                 <p className="text-sm font-bold text-gray-500 mb-3 font-tamil opacity-80">
//                   {event.subtitle}
//                 </p>
                
//                 <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
//                   <div className="flex items-center gap-1.5">
//                     <Clock className="w-4 h-4 text-[#ffc107]" />
//                     <span>{event.time}</span>
//                   </div>
//                 </div>

//                 <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
//                   {event.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View Full Calendar Button */}
// <div className="mt-12 text-center">
//            {/* UPDATED LINK HERE */}
//            <Link href="/all-events"> 
//              <button 
//                className="px-8 py-3 bg-white border-2 border-[#a7150b] text-[#a7150b] rounded-full font-bold hover:bg-[#a7150b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
//              >
//                View Full Events
//              </button>
//            </Link>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Link from 'next/link';

export default function EventsSection() {
  // Data extracted from the 2026 Schedule PDF
  const upcomingEvents = [
    // {
    //   month: 'JAN',
    //   day: '31',
    //   year: '2026',
    //   title: 'Thaipoosa Jyothi Peruvizha',
    //   subtitle: 'தைப்பூசஜோதி பெருவிழா',
    //   time: 'All Day Celebration',
    //   description: 'The grand festival of Divine Light. Devotees carry Irumudi and seek blessings at the Sanctum Sanctorum.',
    // },
    {
      month: 'MAR',
      day: '03',
      year: '2026',
      title: "Amma's 86th Avatar Day",
      subtitle: '86வது அவதார திருநாள்',
      time: 'Grand Celebration',
      description: 'Celebrating the 86th divine birthday of Arul Thiru Bangaru Adigalar with special poojas and annadhanam.',
    },
    {
      month: 'APR',
      day: '14',
      year: '2026',
      title: 'Tamil New Year',
      subtitle: 'தமிழ் வருடப்பிறப்பு',
      time: 'Morning Special Pooja',
      description: 'Special prayers to welcome the Hevilambi Tamil New Year with prosperity and grace.',
    },
    {
      month: 'APR',
      day: '30',
      year: '2026',
      title: 'Chitra Pournami Velvi',
      subtitle: 'சித்திரை பௌர்ணமி வேள்வி',
      time: 'Evening Yagam',
      description: 'A powerful full moon fire ritual (Velvi) performed to cleanse karma and bring universal peace.',
    },
    {
      month: 'AUG',
      day: '14',
      year: '2026',
      title: '55th Aadipooram Festival',
      subtitle: '55வது ஆடிப்பூர பெருவிழா',
      time: 'Grand Festival',
      description: 'One of the most significant festivals dedicated to the Mother Goddess, celebrated with immense devotion.',
    },
    {
      month: 'OCT',
      day: '11',
      year: '2026',
      title: 'Navarathri Begins',
      subtitle: 'நவராத்திரி ஆரம்பம்',
      time: '9 Days of Celebration',
      description: 'The start of the nine sacred nights worshipping the different forms of Sakthi.',
    },
  ];

  return (
    <section className="py-12 md:py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold tracking-wider uppercase">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-4 mb-4 spiritual-text">
            Upcoming Major Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Join us for these auspicious occasions in 2026 and receive the divine blessings of Adhiparasakthi.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row gap-4 md:gap-6 group"
            >
              {/* Date Badge */}
              <div className="flex flex-row sm:flex-col items-center justify-center sm:shrink-0 w-full sm:w-20 h-16 sm:h-24 bg-orange-50 rounded-lg border border-orange-100 group-hover:border-[#ffc107] transition-colors gap-2 sm:gap-0">
                <span className="text-xs font-bold text-[#a7150b] uppercase tracking-wider">{event.month}</span>
                <span className="text-2xl md:text-3xl font-bold text-[#1a1a1a] leading-none my-0 sm:my-1">{event.day}</span>
                <span className="text-xs font-medium text-gray-500">{event.year}</span>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#a7150b] transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs md:text-sm font-bold text-gray-500 mb-2 font-tamil opacity-80">
                  {event.subtitle}
                </p>
                
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs md:text-sm text-gray-600 mb-3">
                  <Clock className="w-4 h-4 text-[#ffc107]" />
                  <span>{event.time}</span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Calendar Button */}
        <div className="mt-10 md:mt-12 text-center">
           <Link href="/all-events"> 
             <button 
               className="px-6 py-2.5 md:px-8 md:py-3 bg-white border-2 border-[#a7150b] text-[#a7150b] rounded-full font-bold hover:bg-[#a7150b] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm md:text-base"
             >
               View Full Events
             </button>
           </Link>
        </div>

      </div>
    </section>
  );
}