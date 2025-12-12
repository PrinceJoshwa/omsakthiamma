// 'use client';

// import { motion } from 'framer-motion';
// import { Clock, MapPin, CalendarDays } from 'lucide-react';

// // Data from Image 2
// const timingData = [
//   {
//     time: "03.00 AM To 11.00 AM",
//     districts: ["Ramanathapuram", "Kanyakumari", "Sivagangai", "Andhra Pradesh", "Virudhunagar"]
//   },
//   {
//     time: "11.00 AM To 02.00 PM",
//     districts: ["Chennai (3)", "Kanchipuram", "Chengalpattu", "Tiruvannamalai", "Villupuram"]
//   },
//   {
//     time: "03.00 AM To 10.00 AM & 4.00 PM To 7.00 PM",
//     districts: ["Karnataka"]
//   },
//   {
//     time: "11.00 AM To 02.00 PM & 4.00 PM To 7.00 PM", // Corrected Am to Pm based on context
//     districts: ["Kallakurichi", "Thanjavur", "Cuddalore", "Salem"]
//   },
//   {
//     time: "03.00 AM To 11.00 AM & 4.00 PM To 7.00 PM",
//     districts: ["Kerala", "Coimbatore", "Tiruppur", "Thoothukudi"]
//   },
//   {
//     time: "01.00 PM To 5.00 PM",
//     districts: ["Krishnagiri (North, South)", "Ranipet", "Erode", "Karur", "Dharmapuri", "Tirupattur", "Tiruvallur", "Theni", "Namakkal", "Vellore"]
//   },
//   {
//     time: "05.00 AM To 7.00 PM",
//     districts: ["Nilgiris"]
//   },
//   {
//     time: "09.00 AM To 01.00 PM",
//     districts: ["Ariyalur", "Trichy", "Tirunelveli", "Tenkasi", "Pudukkottai", "Puducherry", "Perambalur", "Madurai"]
//   },
//   {
//     time: "3.00 PM To 7.00 PM",
//     districts: ["Dindigul"]
//   }
// ];

// export default function DistrictTimingsPage() {
  
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { staggerChildren: 0.1 } }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Header */}
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center mb-12"
//         >
//           <div className="inline-flex items-center gap-2 bg-[#a7150b] text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-4 shadow-lg">
//             <CalendarDays className="w-5 h-5" />
//             Thaipoosam 2025-26
//           </div>
//           <h1 className="text-2xl md:text-4xl font-black text-[#1a1a1a] mb-3 font-tamil leading-tight">
//             மாவட்ட வாரியாக இருமுடி செலுத்தும் நேரம்
//           </h1>
//           <p className="text-gray-600 font-medium">District-wise Irumudi Submission Schedule</p>
//         </motion.div>

//         {/* Timings Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="show"
//           className="grid md:grid-cols-2 gap-6"
//         >
//           {timingData.map((slot, idx) => (
//             <motion.div 
//               key={idx}
//               variants={itemVariants}
//               className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
//             >
//               {/* Time Header */}
//               <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-start gap-3">
//                 <div className="bg-white p-2 rounded-lg text-[#a7150b] shadow-sm">
//                   <Clock className="w-5 h-5" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-gray-800 text-lg">{slot.time}</h3>
//                   <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
//                     Allotted Slot
//                   </p>
//                 </div>
//               </div>

//               {/* District List */}
//               <div className="p-5">
//                 <div className="flex flex-wrap gap-2">
//                   {slot.districts.map((district, dIdx) => (
//                     <span 
//                       key={dIdx} 
//                       className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-[#a7150b] text-sm font-semibold border border-red-100"
//                     >
//                       <MapPin className="w-3 h-3" />
//                       {district}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         <div className="mt-12 text-center text-gray-400 text-sm">
//           * Please adhere strictly to your district's allotted time slot.
//         </div>

//       </div>
//     </main>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, CalendarDays, Info } from 'lucide-react';

// FULL DATA FROM IMAGE 2
const timingData = [
  {
    time: "03.00 AM To 11.00 AM",
    districts: ["Ramanathapuram", "Kanyakumari", "Sivagangai", "Andhra Pradesh", "Virudhunagar"]
  },
  {
    time: "11.00 AM To 02.00 PM",
    districts: ["Chennai (3)", "Kanchipuram", "Chengalpattu", "Tiruvannamalai", "Villupuram"]
  },
  {
    time: "03.00 AM To 10.00 AM & 4.00 PM To 7.00 PM",
    districts: ["Karnataka"]
  },
  {
    time: "11.00 AM To 02.00 PM & 4.00 PM To 7.00 PM", // Contextual correction from "02.00 Am" typo in image
    districts: ["Kallakurichi", "Thanjavur", "Cuddalore", "Salem"]
  },
  {
    time: "03.00 AM To 11.00 AM & 4.00 PM To 7.00 PM",
    districts: ["Kerala", "Coimbatore", "Tiruppur", "Thoothukudi"]
  },
  {
    time: "01.00 PM To 5.00 PM",
    districts: ["Krishnagiri (North, South)", "Ranipet", "Erode", "Karur", "Dharmapuri", "Tirupattur", "Tiruvallur", "Theni", "Namakkal", "Vellore"]
  },
  {
    time: "05.00 AM To 7.00 PM",
    districts: ["Nilgiris"]
  },
  {
    time: "09.00 AM To 01.00 PM",
    districts: ["Ariyalur", "Trichy", "Tirunelveli", "Tenkasi", "Pudukkottai", "Puducherry", "Perambalur", "Madurai"]
  },
  {
    time: "3.00 PM To 7.00 PM",
    districts: ["Dindigul"]
  }
];

export default function DistrictTimingsPage() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#a7150b] text-white px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-4 shadow-lg">
            <CalendarDays className="w-5 h-5" />
            Thaipoosam 2025-26
          </div>
          <h1 className="text-2xl md:text-4xl font-black text-[#1a1a1a] mb-3 font-tamil leading-tight">
            மாவட்ட வாரியாக இருமுடி செலுத்தும் நேரம்
          </h1>
          <p className="text-gray-600 font-medium">District-wise Irumudi Submission Schedule</p>
        </motion.div>

        {/* Info Alert */}
        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 mb-8 text-blue-800 text-sm md:text-base font-medium">
          <Info className="w-5 h-5 shrink-0" />
          <p>Please find your district below and adhere strictly to the allotted time slot for Irumudi submission.</p>
        </div>

        {/* Timings Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-6"
        >
          {timingData.map((slot, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden group"
            >
              {/* Time Header */}
              <div className="bg-gray-50 p-4 border-b border-gray-100 flex items-start gap-3">
                <div className="bg-white p-2 rounded-lg text-[#a7150b] shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg">{slot.time}</h3>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">
                    Allotted Time Slot
                  </p>
                </div>
              </div>

              {/* District List */}
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  {slot.districts.map((district, dIdx) => (
                    <span 
                      key={dIdx} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-[#a7150b] text-sm font-semibold border border-red-100 font-tamil"
                    >
                      <MapPin className="w-3 h-3" />
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center text-gray-400 text-sm font-tamil">
          ஓம் சக்தி!
        </div>

      </div>
    </main>
  );
}