// // import PageTemplate from '@/components/PageTemplate';

// // export default function PoojasFestivalPage() {
// //   return (
// //     <PageTemplate
// //       title="Sacred Poojas"
// //       subtitle="Rituals of Divine Worship"
// //       imageSrc="/placeholder.svg?key=k6t1u"
// //       content="Poojas are sacred rituals performed to honor the divine and seek blessings. Each pooja is carefully conducted according to ancient traditions to ensure maximum spiritual benefit for all participants."
// //       imageOnRight={true}
// //     />
// //   );
// // }

// import PageTemplate from '@/components/PageTemplate';

// export default function PoojasFestivalPage() {
//   return (
//     <PageTemplate
//       title="Poojas"
//       subtitle=""
//             noTopPadding={true}
//       noContentTopPadding={true}
//       content={`
//         <table class="w-full text-left text-gray-700">
//           <thead>
//             <tr>
//               <th class="py-2 font-semibold">Time</th>
//               <th class="py-2 font-semibold">Pooja</th>
//             </tr>
//           </thead>

//           <tbody class="space-y-4">
//             <tr>
//               <td class="py-1">3:00 AM</td>
//               <td class="py-1">Opening of the Sanctum Sanctorum</td>
//             </tr>

//             <tr>
//               <td class="py-1">3:00 AM - 4:00 AM</td>
//               <td class="py-1">Abishekam to the Suyambu and the Presiding Deity</td>
//             </tr>

//             <tr>
//               <td class="py-1">4:00 AM - 5:30 AM</td>
//               <td class="py-1">Alangaram</td>
//             </tr>

//             <tr>
//               <td class="py-1">5:30 AM</td>
//               <td class="py-1">Maha Deeparathanai & Public Darshan Starts</td>
//             </tr>

//             <tr>
//               <td class="py-1">8:00 PM</td>
//               <td class="py-1">Temple will be opened till 8:00 PM for Public Darshan</td>
//             </tr>
//           </tbody>
//         </table>

//         <p class="mt-6 text-gray-700 leading-relaxed">
//           The timings given are approximate. It may vary on certain special occasions.
//         </p>

//         <p class="text-gray-700 leading-relaxed">
//           The temple will be opened between 3:00 am to 1:00 pm and 3:00 pm to 8:00 pm.
//         </p>

//         <p class="text-gray-700 leading-relaxed">
//           On Sundays, Tuesdays, Fridays, Newmoon days, Full Moon days, and Siddhar Peedam festival days, 
//           there will be no break in Darshan Timings.
//         </p>
//       `}
//     />
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { 
  Clock, 
  DoorOpen, 
  Droplet, 
  Sparkles, 
  Flame, 
  Moon,
  Sun,
  Calendar
} from "lucide-react";

const schedule = [
  {
    time: "3:00 AM",
    activity: "Opening of the Sanctum Sanctorum",
    icon: <DoorOpen className="w-5 h-5 text-white" />,
    color: "bg-blue-500"
  },
  {
    time: "3:00 AM - 4:00 AM",
    activity: "Abishekam to the Swayambu & Presiding Deity",
    icon: <Droplet className="w-5 h-5 text-white" />,
    color: "bg-cyan-500"
  },
  {
    time: "4:00 AM - 5:30 AM",
    activity: "Alangaram (Divine Decoration)",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    color: "bg-purple-500"
  },
  {
    time: "5:30 AM",
    activity: "Maha Deeparathanai & Public Darshan Starts",
    icon: <Flame className="w-5 h-5 text-white" />,
    color: "bg-[#a7150b]"
  },
  {
    time: "8:00 PM",
    activity: "Temple Closing",
    icon: <Moon className="w-5 h-5 text-white" />,
    color: "bg-indigo-600"
  }
];

const specialDays = [
  "Sundays", "Tuesdays", "Thursday", "Fridays", "New Moon Days", "Full Moon Days", "Festival Days"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function PoojasFestivalPage() {
  return (
    <PageTemplate
      title="Daily Poojas"
      subtitle="Schedule of Divine Worship"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* --- SCHEDULE TIMELINE --- */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="bg-[#a7150b] p-6 text-center">
             <h2 className="text-2xl font-bold text-white font-serif">Daily Schedule</h2>
             <p className="text-white/80 mt-2">Opening Hours: 3:00 AM - 1:00 PM & 3:00 PM - 8:00 PM</p>
          </div>

          <div className="p-6 md:p-10">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              className="space-y-6 relative"
            >
               {/* Vertical Line */}
               <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-gray-200 hidden md:block"></div>

               {schedule.map((item, index) => (
                 <motion.div 
                   key={index} 
                   variants={itemVariants}
                   className="flex flex-col md:flex-row gap-6 md:items-center relative z-10"
                 >
                   {/* Time Badge */}
                   <div className="flex items-center gap-4 md:w-1/3">
                      <div className={`p-3 rounded-full ${item.color} shadow-lg flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <span className="font-bold text-gray-700 bg-gray-50 px-3 py-1 rounded-md border border-gray-200 whitespace-nowrap">
                        {item.time}
                      </span>
                   </div>

                   {/* Activity */}
                   <div className="md:w-2/3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-100 transition-colors">
                      <p className="text-lg font-medium text-gray-800">{item.activity}</p>
                   </div>
                 </motion.div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* --- NOTES CARD --- */}
        <div className="grid md:grid-cols-2 gap-6">
           
           {/* Special Days */}
           <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
             <div className="flex items-center gap-2 mb-4 text-yellow-700">
               <Sun className="w-6 h-6" />
               <h3 className="font-bold text-lg">Continuous Darshan</h3>
             </div>
             <p className="text-gray-700 mb-4 text-sm">
               On the following special days, there will be <strong>no break</strong> in Darshan timings:
             </p>
             <div className="flex flex-wrap gap-2">
               {specialDays.map((day, i) => (
                 <span key={i} className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-yellow-800 border border-yellow-200 shadow-sm">
                   {day}
                 </span>
               ))}
             </div>
           </div>

           {/* Disclaimer */}
           <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-center">
             <div className="flex items-center gap-2 mb-3 text-gray-600">
               <Calendar className="w-5 h-5" />
               <h3 className="font-bold text-lg">Note</h3>
             </div>
             <p className="text-gray-600 text-sm leading-relaxed">
               The timings provided are approximate. They may vary during specific festivals or special occasions as per the temple's schedule.
             </p>
           </div>
        </div>

      </div>
    </PageTemplate>
  );
}