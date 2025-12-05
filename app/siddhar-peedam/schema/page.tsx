// // import PageTemplate from '@/components/PageTemplate';

// // export default function SchemaPage() {
// //   return (
// //     <PageTemplate
// //       title="Organizational Schema"
// //       subtitle="Structure of Spiritual Governance"
// //       imageSrc="/placeholder.svg?key=f4n9g"
// //       content="Our organizational structure ensures effective delivery of spiritual programs and community services. We maintain transparent governance guided by spiritual principles and the welfare of all members."
// //     />
// //   );
// // }

// import PageTemplate from '@/components/PageTemplate';

// export default function SchemaPage() {
//   return (
//     <PageTemplate
//       title="Organizational Schema"
//       subtitle="Structure of Spiritual Governance"
//             noTopPadding={true}
//       noContentTopPadding={true}
//       // imageSrc="/placeholder.svg?key=f4n9g"
//       content={`
//         <p>
//           Adhiparasakthi has declared in Her Oracle that she is not restricted by the Agama Rules (common rules governing the construction and consecration of the different structures in a Hindu temple).  It is said that the structures in the Siddhar Peedam have been established according to the Divine orders of Adhiparasakthi. The structures like Kodimaram (Flag Post), Balipeedam (place of sacrifice) and Vahanangal (the palanquins and such other similar structures to carry the presiding deities in a Hindu temple) are not present here.
//         </p>
//         <h3 class="text-2xl font-bold text-[#a7150b]">The Om Sakthi Podium</h3>
//         <p>
//           The Om Sakthi Podium, with the Trident in its centre, stands vibrantly at the entrance and in front of the Siddhar Peedam. Since The Adhiparasakthi is the Mother of all Gods and Goddesses, there are no separate structures for the Navagrahas (the 9 planets generally termed as Planetary Lords, which can be usually seen in the Hindu Temples) in the Siddhar Peedam. The Mother has strongly ascertained, “Those who surrender to Me need not pray to the Planetary Lords. They are just My officers who carry out the work of implementing My Law of Karma. If you go round the Om Sakthi Podium, all the evil effects will be reduced in intensity or fully nullified.”
//         </p>
//         <h3 class="text-2xl font-bold text-[#a7150b]">The Sanctum Sanctorum</h3>
//         <p>
//           In the Sanctum Sanctorum, The Divine mother, Adhiparasakthi showers Her Choicest Blessings from the Lotus Peedam. She showers Her Blessings in the ‘sitting’ posture folding Her right leg and letting Her left leg down.  Keeping the left leg down signifies that The Divine Mother Adhiparasakthi has the highest place in everything.  She holds the Lotus Bud in Her right hand signifying Gnana (wisdom) and depicts the Chin Mudra (index finger touching the thumb and the other fingers stretched out) in the left hand. The Swayambu is situated right in front of the Adhiparasakthi statue.  Anointments (Abishekam) and Archanas (pooja) are performed to the Adhiparasakthi statue and Swayambu, everyday.
//         </p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">The Puttru Mandapam</h3>
//         <p>
//           The Puttru Mandapam structure (Snake Mound) is to the right of the Sanctum Sanctorum.  Here Adhiparasakthi resides in the form of Cobra. It is in this Divine Place that Adhiparasakthi delivers Her Oracle.
//         </p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">Saptha Kanniyar Kovil (Temple of Matrikas)</h3>
//         <p>
//           To the right of Puttru Mandapam is the SapthaKanniyar Temple (Saptha means seven;Kanni means virgin;Kanniyar, the plural form means virgins). They are the accompanying Angels of Adhiparasakthi.  The details about them are as follows: (1) Lord Brahma’s Power-Brahmi (2) Lord Vishnu’s Power-Vaishnavi (3) LordMaheswaran’s Power-Maheswari (4) Lord Kuma-ran’s Power-Kowmari (5) Lord Indra’s Power- Indhrani (6) Lord Varaha’s Power-Vaaragiand (7) Lord Rudra’s Power-Chamundi. The temple of the virgins will normally be open atop, without any roof.  So also are The Virgins of this temple, with walls on four sides, but roofless.
//         </p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">The Naga Peedam</h3>
//         <p>
//          Naga Peedam is situated behind the Putrumandapam.  Upon worshipping the deity in the Naga Peedam by lighting lemon lamp, the devotees can gain the benefits of worshipping three Godesses Kanchi Kamakshi, Kasi Visalakshi and Madurai Meenakshi thereby nullifying family related problems and fostering unity within the family members.
//         </p>
//         <h3 class="text-2xl font-bold text-[#a7150b]">Arutkoodam (His Holy Abode)</h3>
//         <p>
//          The divine Arutkoodam is situated in the North-Western corner of the Siddhar Peedam. At Arutkoodam, the devotees perform Paadha Pooja to His Holiness for getting His Divine Blessings and Guidance to get rid of their personal problems.
//         </p>
//       `}
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  MountainSnow, // For Swayambu
  Accessibility, // For posture
  HandMetal, // For mudra/hand gesture
  Flower2 // For lotus peedam
} from "lucide-react";

// --- 1. STRUCTURED DATA FOR CARDS ---
// I've created distinct features based on the description of the deity and sanctum.
const sanctumFeatures = [
  {
    title: "The Swayambu",
    icon: <MountainSnow className="w-8 h-8 text-white" />,
    description: "The 'self-manifested' divine form situated right in front of the main idol. It is the primordial source of power in the sanctum.",
    accentColor: "bg-stone-600"
  },
  {
    title: "Divine Posture",
    icon: <Accessibility className="w-8 h-8 text-white" />,
    description: "The Mother is in a sitting posture with Her right leg folded. Her left leg is let down, signifying Her supreme place above everything.",
    accentColor: "bg-[#a7150b]" // Theme color
  },
  {
    title: "Sacred Hand Gestures",
    icon: <HandMetal className="w-8 h-8 text-white" />,
    description: "She holds a Lotus Bud in Her right hand, representing Gnana (wisdom), and depicts the Chin Mudra with Her left hand.",
    accentColor: "bg-amber-500"
  },
  {
    title: "Lotus Peedam",
    icon: <Flower2 className="w-8 h-8 text-white" />,
    description: "Adhiparasakthi is seated on a magnificent thousand-petal lotus throne, showering Her choicest blessings upon devotees.",
    accentColor: "bg-pink-500"
  },
];

// --- 2. ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" } }
};

export default function SanctumPage() {
  return (
    <PageTemplate
      title="The Sanctum Sanctorum"
      subtitle="The Divine Abode of Adhiparasakthi"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      {/* Assuming you have saved the deity image as '/public/deity.png'. 
        Replace this with the actual path to your image.
      */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* --- HERO SECTION WITH IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-20 group"
        >
          <Image
            // src="/deity.jpg" 
            src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939332/deity_bpbqhk.jpg" 
            alt="Adhiparasakthi Deity in Sanctum Sanctorum"
            fill
            className="object-fill object-top transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b]/80 via-transparent to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
             <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">
               Illustrious Adhiparasakthi
             </h2>
             <p className="text-white/90 text-lg md:text-xl leading-relaxed font-light">
               Witness the divine form, seated on the Lotus Peedam, bestowing grace and wisdom upon the world.
             </p>
          </div>
        </motion.div>

        {/* --- INTRODUCTORY TEXT --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-serif">
            In the heart of the Siddhar Peedam lies the Sanctum Sanctorum, where The Divine Mother showers Her blessings. Every aspect of Her form and the sanctum holds deep spiritual significance.
          </p>
        </motion.div>

        {/* --- FEATURE GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {sanctumFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-1 relative overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Colored accent border/background */}
              <div className={`absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20 ${feature.accentColor}`}></div>
              
              <div className="relative bg-white h-full rounded-xl p-8 z-10 flex flex-col md:flex-row items-start gap-6">
                {/* Icon Container */}
                <div className={`flex-shrink-0 p-4 rounded-full shadow-lg ${feature.accentColor} transform transition-transform group-hover:scale-110 group-hover:rotate-6`}>
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#a7150b] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- CLOSING SECTION --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24 bg-red-50 rounded-3xl p-10 border border-red-100"
        >
          <h3 className="text-2xl font-bold text-[#a7150b] mb-4 font-serif">
            Anointments & Archanas
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Daily Abishekam (anointments) and Archanas (poojas) are performed with utmost devotion to both the Adhiparasakthi statue and the Swayambu, maintaining the sanctity of this divine space.
          </p>
        </motion.div>

      </div>
    </PageTemplate>
  );
}