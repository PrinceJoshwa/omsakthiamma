// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function PoojasDonationsPage() {
//   const poojas = [
//     { name: 'Daily Pooja', price: '$25', description: 'Daily spiritual worship for divine blessings' },
//     { name: 'Special Pooja', price: '$100', description: 'Special ritual for specific intentions' },
//     { name: 'Abhisheka', price: '$200', description: 'Sacred anointing ritual for divine grace' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
//       <section className="py-20 px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
//             Poojas & Donations
//           </h1>
//           <p className="text-xl text-gray-600">
//             Contribute to the divine cause
//           </p>
//         </motion.div>
//       </section>

//       <section className="py-16 px-4 max-w-5xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-16"
//         >
//           <h2 className="text-3xl font-bold text-[#a7150b] mb-8 text-center">Sacred Poojas</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {poojas.map((pooja, idx) => (
//               <motion.div
//                 key={pooja.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 + idx * 0.1 }}
//                 className="p-6 bg-white rounded-lg shadow-lg text-center border-2 border-[#ffc107]"
//               >
//                 <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{pooja.name}</h3>
//                 <p className="text-3xl font-bold text-[#a7150b] mb-4">{pooja.price}</p>
//                 <p className="text-gray-600 mb-4">{pooja.description}</p>
//                 <button className="w-full bg-[#a7150b] text-white py-2 rounded-lg hover:bg-[#8a0d08] transition">
//                   Book Now
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="bg-[#ffc107] rounded-lg p-12 text-center"
//         >
//           <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Support Our Cause</h2>
//           <p className="text-lg text-[#1a1a1a] mb-6">
//             Your donations help us serve humanity and spread spiritual wisdom across the world.
//           </p>
//           <button className="bg-[#a7150b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#8a0d08] transition">
//             Make a Donation
//           </button>
//         </motion.div>
//       </section>
//     </div>
//   );
// }


'use client';

import { motion } from 'framer-motion';

export default function PoojasDonationsPage() {

  const donationList = [
    "GENERAL",
    "DAILY ABHISEGAM",
    "POURNAMI VELAKU POOJA",
    "AMMAVASAI VELI",
    "GOLDEN CHARIOT",
    "SILVER CHARIOT",
    "LAKCHARCHANAI",
    "CHITRAPOURNAM",
    "NAVARATRI KAPPU",
    "ONLINE IRUMUDI"
  ];

  const donation80G = [
    "Women Welfare (80G)",
    "Hospital Donations (80G)",
    "Annadhanam (80G)"
  ];

  return (
    <div className="min-h-screen bg-white pb-20">

      {/* PAGE HEADER */}
      <section className="py-12 px-4 text-center">
        <h1 className="text-4xl font-bold text-[#a7150b]">Donations</h1>
      </section>

      {/* ORANGE BUTTON GRID */}
      <section className="px-4 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16 text-center">
        {donationList.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#ff6600] text-white font-semibold py-6 rounded-sm cursor-pointer hover:bg-[#e35900]"
          >
            {item}
          </motion.div>
        ))}
      </section>

      {/* BANK DETAILS + CHEQUE SECTION (centered) */}
      <section className="px-4 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 mb-16 text-center">

        {/* LEFT: BANK DETAILS */}
        <div>
          <h2 className="text-xl font-bold mb-4">RTGS/IMPS/NEFT</h2>

          <p className="text-sm leading-relaxed">
            ACCOUNT NAME : MASM<br />
            ACCOUNT NUMBER : 1760163000001158<br />
            BANK NAME : KARUR VYSYA BANK<br />
            BRANCH : ACHIYARPPAKKAM (603301)<br />
            IFSC CODE : KVBL0001760<br /><br />

            Once made the payment through the bank transfer, please send
            an email to <span className="font-bold">asqwjd@gmail.com</span> with the
            transaction details (Your name, date, transaction ID, and address).
          </p>
        </div>

        {/* RIGHT: CHEQUE / DRAFT */}
        <div>
          <h2 className="text-xl font-bold mb-4">Cheques / Draft</h2>

          <p className="text-sm leading-relaxed">
            All spiritual friends are requested to donate via cheque or draft
            drawn in favour of MASM, payable at Chennai.<br /><br />

            Melmaruvathur Adhiparasakthi Spiritual Movement,<br />
            ARULMIGU ADHIPARASAKTHI SIDDHAR PEEDAM,<br />
            Melmaruvathur - 603 319, Chengalpattu District,<br />
            Tamil Nadu, India.<br /><br />

            Phone : 044-27529391, 27529313<br />
            Email : asqwjd@gmail.com
          </p>
        </div>

      </section>

      {/* 80G DONATIONS SECTION */}
      <section className="px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-6">80G Donations</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {donation80G.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-[#ff6600] text-white py-6 font-semibold rounded-sm hover:bg-[#e35900]"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
