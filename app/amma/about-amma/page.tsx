
// // 'use client';

// // import React from 'react';
// // import PageTemplate from '@/components/PageTemplate';
// // import { motion } from 'framer-motion';
// // import Image from 'next/image';
// // import { Quote, Sparkles, HeartHandshake, Globe } from 'lucide-react';

// // export default function AboutAmmaPage() {
// //   // Animation variants for scroll reveal effects
// //   const fadeInUp = {
// //     hidden: { opacity: 0, y: 30 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
// //   };

// //   return (
// //     <PageTemplate 
// //       title="His Holiness Arulthiru Bangaru Adigalar" 
// //       subtitle="The Incarnation of Adhiparasakthi"
// //       noContentTopPadding={true} // Allows our custom design to start higher
// //     >
// //       {/* --- HERO INTRODUCTION SECTION --- */}
// //       <div className="relative bg-gradient-to-b from-red-50 via-orange-50 to-white py-16 px-4 overflow-hidden">
// //         {/* Decorative background element */}
// //         <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
        
// //         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
// //           {/* Image 1: Main Hero Image */}
// //           <motion.div 
// //             initial={{ opacity: 0, scale: 0.9 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 1 }}
// //             className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
// //           >
// //             <Image 
// //               src="/amma-main.jpg" // Replace with your actual image path in public folder
// //               alt="His Holiness Arulthiru Bangaru Adigalar representing maternal love"
// //               fill
// //               className="object-cover"
// //               priority
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b]/40 to-transparent"></div>
// //           </motion.div>

// //           <motion.div 
// //             variants={fadeInUp}
// //             initial="hidden"
// //             animate="visible"
// //             className="w-full md:w-1/2 space-y-6 text-center md:text-left"
// //           >
// //             <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold uppercase tracking-wider mb-2">
// //               <Sparkles className="w-4 h-4" /> The Guiding Spirit
// //             </div>
// //             <h1 className="text-4xl md:text-5xl font-bold text-[#a7150b] font-serif leading-tight">
// //               The Divine Mother to Millions
// //             </h1>
// //             <p className="text-xl text-gray-700 leading-relaxed font-medium">
// //               Respected and adored as <span className="text-[#a7150b] font-bold">"AMMA"</span> (Mother) by millions of devotees, His Holiness Arulthiru Bangaru Adigalar is the guiding spirit of Melmaruvathur Siddhar Peedam.
// //             </p>
// //             <p className="text-gray-600 leading-relaxed">
// //               He is the living embodiment of maternal love, compassion, and grace, showering blessings upon all who seek solace.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </div>

// //       {/* --- MAIN CONTENT CONTAINER --- */}
// //       <div className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        
// //         {/* SECTION 1: THE DIVINE INCARNATION (Image Left, Text Right) */}
// //         <motion.section 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={fadeInUp}
// //           className="grid md:grid-cols-2 gap-12 items-center"
// //         >
// //           {/* Image 2: Early Life */}
// //           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl md:order-1 order-2">
// //              <Image 
// //                src="/amma-early-life.jpg" // Replace with image of younger Amma or birthplace
// //                alt="Early life of Arulthiru Bangaru Adigalar"
// //                fill
// //                className="object-cover"
// //              />
// //           </div>
// //           <div className="space-y-6 md:order-2 order-1">
// //             <h2 className="text-3xl font-bold text-gray-800 font-serif relative inline-block">
// //               The Divine Incarnation
// //               <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#a7150b] rounded-full"></span>
// //             </h2>
// //             <div className="prose prose-lg text-gray-600 leading-relaxed">
// //               <p>
// //                 Born on <strong>March 3, 1941</strong>, in the humble village of Melmaruvathur to the pious couple, Sri. Gopala Naicker and Smt. Meenakshi Ammal, Arulthiru Bangaru Adigalar showed signs of divinity right from childhood.
// //               </p>
// //               <p>
// //                 Distinctive in his behavior and imbued with a deep spiritual inclination, it was evident that he was destined for a higher purpose. He led a simple life as a school teacher, known for his righteousness and simplicity, before his true spiritual calling was revealed to the world.
// //               </p>
// //             </div>
// //           </div>
// //         </motion.section>


// //         {/* SECTION 2: THE REVELATION (Text Left, Image Right) */}
// //         <motion.section 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={fadeInUp}
// //           className="grid md:grid-cols-2 gap-12 items-center bg-orange-50/50 p-8 rounded-[2rem]"
// //         >
// //            <div className="space-y-6">
// //             <h2 className="text-3xl font-bold text-gray-800 font-serif relative inline-block">
// //               The Spiritual Transformation
// //               <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#a7150b] rounded-full"></span>
// //             </h2>
// //             <div className="prose prose-lg text-gray-600 leading-relaxed">
// //               <p>
// //                 The turning point occurred on a stormy day when a neem tree in the family land was uprooted, revealing a Swayambu (self-manifested) stone underneath. This was the same Swayambu Arulthiru Adigalar had visions of in his childhood.
// //               </p>
// //               <p>
// //                 On <strong>November 28, 1971</strong>, the power of Goddess Adhiparasakthi descended completely onto him, consecrating him as Her living medium. Since then, he has been delivering <em>Arulvakku</em> (divine oracles) from the Sanctum Sanctorum, guiding devotees with divine wisdom.
// //               </p>
// //             </div>
// //           </div>
// //           {/* Image 3: The Revelation/Swayambu */}
// //           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
// //              <Image 
// //                src="/amma-revelation.jpg" // Replace with image related to the Swayambu or Arulvakku
// //                alt="The spiritual revelation at Melmaruvathur"
// //                fill
// //                className="object-cover"
// //              />
// //           </div>
// //         </motion.section>


// //         {/* --- FEATURED QUOTE --- */}
// //         <motion.div 
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           viewport={{ once: true }}
// //           className="bg-[#a7150b] p-10 rounded-3xl shadow-lg text-center relative overflow-hidden my-12"
// //         >
// //           <Quote className="absolute top-4 left-4 text-white/20 w-16 h-16 transform -scale-x-100" />
// //           <h3 className="text-2xl md:text-4xl font-bold text-white font-serif mb-4 relative z-10">
// //             "One Mother, One Humanity"
// //           </h3>
// //           <p className="text-white/90 text-lg max-w-3xl mx-auto relative z-10 font-medium">
// //             Amma's core teaching transcends all barriers of caste, creed, religion, and language.
// //           </p>
// //         </motion.div>


// //         {/* SECTION 3: PHILOSOPHY & WOMEN'S EMPOWERMENT (Image Left, Text Right) */}
// //         <motion.section 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={fadeInUp}
// //           className="grid md:grid-cols-2 gap-12 items-center"
// //         >
// //           {/* Image 4: Mission/Women */}
// //           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl md:order-1 order-2">
// //              <Image 
// //                src="/amma-mission.jpg" // Replace with image showing women devotees or service
// //                alt="Amma's mission for women's empowerment"
// //                fill
// //                className="object-cover"
// //              />
// //           </div>
// //           <div className="space-y-6 md:order-2 order-1">
// //             <div className="flex items-center gap-2 text-[#a7150b] font-bold uppercase tracking-wider text-sm">
// //               <HeartHandshake className="w-5 h-5" /> A Revolutionary Mission
// //             </div>
// //             <h2 className="text-3xl font-bold text-gray-800 font-serif">
// //               Fostering Universal Brotherhood
// //             </h2>
// //             <div className="prose prose-lg text-gray-600 leading-relaxed">
// //               <p>
// //                 Amma's philosophy is rooted in the principle of "One Mother, One Humanity," fostering universal brotherhood. A significant aspect of his mission is the emancipation of women.
// //               </p>
// //               <p>
// //                 Breaking centuries-old traditions, Amma has given women equal rights in spirituality, allowing them to perform poojas and enter the Sanctum Sanctorum even during their menstrual periods—a revolutionary step in the spiritual history of the world.
// //               </p>
// //             </div>
// //           </div>
// //         </motion.section>


// //         {/* SECTION 4: SERVICE TO HUMANITY (Text Left, Image Right) */}
// //         <motion.section 
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, margin: "-100px" }}
// //           variants={fadeInUp}
// //           className="grid md:grid-cols-2 gap-12 items-center bg-red-50/50 p-8 rounded-[2rem]"
// //         >
// //            <div className="space-y-6">
// //             <h2 className="text-3xl font-bold text-gray-800 font-serif relative inline-block">
// //               Service as Worship
// //               <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#a7150b] rounded-full"></span>
// //             </h2>
// //             <div className="prose prose-lg text-gray-600 leading-relaxed">
// //               <p>
// //                 "Service to humanity is service to God" is the practical mantra Amma has given to his devotees. Under his guidance, the ACMEC Trust was established, running vast educational and medical institutions that provide free education and medical treatment to the poor and downtrodden.
// //               </p>
// //               <p>
// //                 The "Red-Clad Volunteers" (Chevvadai Thondargal) constitute a disciplined army of selfless workers dedicated to serving society.
// //               </p>
// //             </div>
// //           </div>
// //           {/* Image 5: Service/Volunteers */}
// //           <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
// //              <Image 
// //                src="/amma-service.jpg" // Replace with image of red-clad volunteers or hospital/school
// //                alt="Service activities inspired by Amma"
// //                fill
// //                className="object-cover"
// //              />
// //           </div>
// //         </motion.section>

// //         {/* --- FINAL CONCLUSION --- */}
// //         <motion.div 
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           className="text-center max-w-3xl mx-auto pt-12 pb-8"
// //         >
// //           <Globe className="w-12 h-12 text-[#a7150b] mx-auto mb-6 opacity-50" />
// //           <h2 className="text-3xl font-bold text-gray-800 font-serif mb-6">
// //             A Global Sanctuary
// //           </h2>
// //           <p className="text-xl text-gray-600 leading-relaxed font-medium">
// //             Today, Melmaruvathur Siddhar Peedam is a global spiritual center, drawing millions of devotees from all walks of life. Amma's presence is a beacon of hope, leading humanity from darkness to light, offering the ultimate sanctuary for the soul.
// //           </p>
// //           <div className="mt-8 w-24 h-1 bg-[#a7150b] mx-auto rounded-full opacity-30"></div>
// //         </motion.div>

// //       </div>
// //     </PageTemplate>
// //   );
// // }

// 'use client';

// import React from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Quote, Sparkles, HeartHandshake, Globe } from 'lucide-react';

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
// };

// export default function AboutAmmaPage() {
//   return (
//     <PageTemplate
//       title="About Amma"
//       subtitle="His Holiness Arulthiru Bangaru Adigalar — The Incarnation of Adhiparasakthi"
//       noContentTopPadding
//     >
//       {/* HERO */}
//       <header className="relative bg-gradient-to-b from-[#a7150b]/5 via-white to-white py-12 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
//           <div className="w-full md:w-1/2">
//             <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.9 }}>
//               <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
//                 <Image src="/amma_child.jpg" alt="Young Amma" fill className="object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b]/40 to-transparent"></div>
//               </div>
//             </motion.div>
//           </div>

//           <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="w-full md:w-1/2">
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 text-[#a7150b] font-semibold">
//               <Sparkles className="w-4 h-4" /> About Amma
//             </div>

//             <h1 className="mt-6 text-4xl md:text-5xl font-bold text-[#a7150b] font-serif leading-tight">
//               His Holiness Arulthiru Bangaru Adigalar
//             </h1>

//             <p className="mt-4 text-gray-700 text-lg leading-relaxed">
//               His Holiness, Arulthiru Amma, is revered by millions as the living incarnation of
//               <strong> Adhiparasakthi</strong>. Born on March 3rd, 1941 in Melmaruvathur village, he is known for
//               his boundless compassion, divinely inspired oracles (Arulvakku), and a life of service to humanity.
//             </p>

//             <p className="mt-3 text-gray-600">
//               The spiritual movement centered at Melmaruvathur Siddhar Peedam focuses on devotion, service and social upliftment.
//             </p>
//           </motion.div>
//         </div>
//       </header>

//       {/* MAIN CONTENT */}
//       <main className="max-w-5xl mx-auto px-4 py-16 space-y-20">

//         {/* ABOUT AMMA — FULL CONTENT */}
//         <section className="space-y-6">
//           <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} className="text-3xl font-bold text-gray-800">
//             About Amma
//           </motion.h2>

//           <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="space-y-4 text-gray-700 prose prose-lg">
//             <p>
//               "When righteousness in the world gives place to unrighteousness, I will descend to Earth
//               and be born there to restore righteousness once again." — Amma's Oracle.
//             </p>

//             <p>
//               Arul Thiru Bangaru Adigalar was born on March 3rd, 1941 at Melmaruvathur village to the noble souls of Sri Gopala Naicker
//               and Smt. Meenakshi Ammal. He was the second child and grew up with a younger brother and sister. His Holiness is believed
//               to be a PROPOEN AVATAR (holding all 16 qualities of an Avatar) and the incarnation of the Supreme power — ADHIPARASAKTHI.
//             </p>

//             <p>
//               The term AVATAR denotes one who has descended to Earth in human form from the spiritual realm of God to re-establish
//               righteousness in the world and to preserve the human race from extinction. Mother Adhiparasakthi, with Her boundless grace,
//               making Herself a standing example, has therefore come down to this physical plane to re-establish the virtues, and to instill
//               spirituality among the masses, taking the human form in Sri. Adigalar.
//             </p>
//           </motion.div>
//         </section>

//         {/* POSSESSED BY THE DIVINE */}
//         <section className="grid md:grid-cols-2 gap-10 items-center">
//           <div className="relative rounded-2xl overflow-hidden h-[360px] shadow-lg">
//             <Image src="/amma_young_boy.jpg" alt="Possessed by the Divine" fill className="object-cover" />
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Possessed By The Divine</h3>
//             <div className="prose prose-lg text-gray-700">
//               <p>
//                 When His Holiness was a young boy, He was sleeping alone while the family members were doing their daily chores.
//                 When His mother peeped through the window to see if all was fine, she was utterly shocked to see a king cobra coiled
//                 around The Child. The family was terrified, but the snake acted calmly and soon left — an early sign of divine presence.
//               </p>

//               <p>
//                 There is also a Goddess Mariamman temple right across Sri.Gopal Naicker's house. Every year, the family would conduct
//                 special auspicious festivals for the Amman. At one such festival, the Divine possessed the young boy. His Holiness
//                 has often recounted these early instances as a demonstration of the Divine's will.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* THIRST QUENCHED — IMAGE ROW */}
//         <section className="space-y-6">
//           <h3 className="text-2xl font-semibold text-gray-800">Thirst Quenched By The Divine</h3>
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="rounded-xl overflow-hidden shadow-md h-48 relative">
//               <Image src="/amma_family.jpg" alt="Family and early days" fill className="object-cover" />
//             </div>
//             <div className="rounded-xl overflow-hidden shadow-md h-48 relative">
//               <Image src="/amma_simplicity.jpg" alt="Simplicity" fill className="object-cover" />
//             </div>
//             <div className="rounded-xl overflow-hidden shadow-md h-48 relative">
//               <Image src="/amma_young.jpg" alt="Young Amma meditation" fill className="object-cover" />
//             </div>
//           </div>

//           <div className="prose prose-lg text-gray-700">
//             <p>
//               Once, His Holiness had been very attached to His elder sister, who died of smallpox at a young age. Every day, He would visit
//               the site where she was buried. For a long time He ate mere roasted peanuts; the evening shadows lengthened; He started feeling
//               thirsty. Though there were wells nearby, He hesitated as He did not know to swim. Suddenly, an elderly woman who passed that way
//               approached His Holiness and offered water to quench The Boy's thirst. He drank the water and was relieved and satisfied greatly.
//             </p>

//             <p>
//               These humble events are recounted by devotees to show how His compassion and grace touched ordinary lives.
//             </p>
//           </div>
//         </section>

//         {/* THE TRUE INNER URGE EXPOSED */}
//         <section className="grid md:grid-cols-2 gap-12 items-center bg-orange-50/40 p-8 rounded-2xl">
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">The True Inner Urge Exposed</h3>
//             <div className="prose prose-lg text-gray-700">
//               <p>
//                 Once, His parents took Him to a temple festival. A toy seller asked Him what toy He wanted to buy. His Holiness immediately pointed
//                 out a particular toy and it was the idol of Devi Bhuvaneshwari. The idol became the first object of devotion and the inner urge of the
//                 Divine Child was clearly exposed.
//               </p>

//               <p>
//                 Many years later, when He was training to become a teacher, He experienced many different kinds of emotions. After completing the teacher's
//                 training course, He got a job as a teacher in Arapacudayur near Achirappakkam. Later the Divine's call became stronger and He stepped
//                 into spiritual ministry, continuing His life's work of guidance and upliftment.
//               </p>
//             </div>
//           </div>

//           <div className="relative h-[320px] rounded-xl overflow-hidden shadow-xl">
//             <Image src="/amma_child.jpg" alt="Inner urge and devotion" fill className="object-cover" />
//           </div>
//         </section>

//         {/* FAMILY LIFE */}
//         <section className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
//             <Image src="/amma_family.jpg" alt="Family life" fill className="object-cover" />
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800 mb-3">Family Life</h3>
//             <div className="prose prose-lg text-gray-700">
//               <p>
//                 Shri.Adigalar, being a saint who involved himself in family life, adds credit to this most noble and spiritual organisation.
//                 He married Selvi.Lakshmi — and was blessed with children. He took up work as a teacher early in life and later embraced spirituality.
//               </p>

//               <p>
//                 The greatness of this Avatar lies in practicing spirituality even as a family man, showing devotees that service, family life, and devotion can be blended.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* THE PROFOUND SIMPLICITY */}
//         <section className="space-y-6">
//           <div className="bg-[#a7150b] rounded-2xl p-8 text-white shadow-lg">
//             <Quote className="w-12 h-12 opacity-20" />
//             <h3 className="text-2xl md:text-3xl font-bold">The Profound Simplicity</h3>
//             <p className="mt-3 text-white/90">
//               His Holiness' Oracles and Miracles attract millions of devotees from all over the world who come to seek His blessings.
//               Even though devotees see Amma as Adhiparasakthi's Avatar, Amma is always humble which can very well be realised through His sayings:
//               <em> "I AM JUST A SERVANT TO ALL." </em>
//             </p>
//           </div>

//           <div className="prose prose-lg text-gray-700">
//             <p>
//               The greatest thing about Amma is his humbleness. His love reaches out to every human being, not only in India, but across the world.
//               He emphasizes the shortest route to attain Divinity — sincere devotion, right conduct and service to fellow beings.
//             </p>
//           </div>
//         </section>

//         {/* CLAIRVOYANCE / ORACLES */}
//         <section className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 p-6 rounded-xl">
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-800">Clairvoyance Or Oracles Of His Holiness</h3>
//             <div className="prose prose-lg text-gray-700">
//               <p>
//                 His Holiness started His Oracles from 1970. Whatever Amma speaks is being recognized by devotees as His Oracle and His words turned true, to the core,
//                 sooner or later. Many devotees have shared how the oracles brought healing, peace and spiritual upliftment in their lives.
//               </p>

//               <p>
//                 His Holiness has revealed many Oracles related to Spiritualism, Nature, Medicine, and practical worldly affairs. These Oracles are known to those who seek
//                 them with devotion, and the tradition continues today.
//               </p>
//             </div>
//           </div>

//           <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg">
//             <Image src="/amma_simplicity.jpg" alt="Clairvoyance" fill className="object-cover" />
//           </div>
//         </section>

//         {/* SERVICE TO HUMANITY */}
//         <section className="grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-4">
//             <h3 className="text-2xl font-semibold text-gray-800">Service to Humanity</h3>
//             <div className="prose prose-lg text-gray-700">
//               <p>
//                 "Service to humanity is service to God" — under His guidance, multiple trusts and institutions were established to provide free education,
//                 medical aid, and relief to the poor. The organisation's hospitals, schools and welfare efforts reflect Amma's practical compassion.
//               </p>
//               <p>
//                 The Red-Clad Volunteers (Chevvadai Thondargal) are a disciplined band of devotees who run daily service activities across the trust's institutions.
//               </p>
//             </div>
//           </div>

//           <div className="relative h-[320px] rounded-xl overflow-hidden shadow-lg">
//             <Image src="/amma_service.jpg" alt="Service activities" fill className="object-cover" />
//             {/* Note: add /public/amma_service.jpg if you have it. Otherwise replace path. */}
//           </div>
//         </section>

//         {/* FINAL CTA / CONCLUSION */}
//         <section className="text-center max-w-3xl mx-auto">
//           <Globe className="w-12 h-12 text-[#a7150b] mx-auto mb-6 opacity-70" />
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">A Global Sanctuary</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Today, Melmaruvathur Siddhar Peedam is a worldwide spiritual center, drawing millions of devotees. Amma's teachings promote unity, compassion and service.
//             The movement continues to uplift countless lives through devotion and practical help.
//           </p>
//           <div className="mt-8 mx-auto w-28 h-1 bg-[#a7150b] rounded-full opacity-60"></div>
//         </section>

//       </main>
//     </PageTemplate>
//   );
// }

'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Sparkles, Globe } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function AboutAmmaPage() {
  return (
    <PageTemplate
      title="About Amma"
      subtitle="His Holiness Arulthiru Bangaru Adigalar — The Incarnation of Adhiparasakthi"
      noContentTopPadding
    >
      {/* HERO */}
      <header className="bg-gradient-to-b from-[#fff7f6] to-white py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
              <Image src="/amma_child.jpg" alt="Young Amma" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b]/40 to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-red-50 text-[#a7150b] font-semibold">
                <Sparkles className="w-4 h-4" /> About Amma
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#a7150b] leading-tight">
                His Holiness Arulthiru Bangaru Adigalar
              </h1>

              <p className="text-gray-700 text-lg leading-relaxed">
                Revered by millions as <strong>Amma</strong>, His Holiness Arulthiru Bangaru Adigalar is regarded as the living
                incarnation of <strong>Adhiparasakthi</strong>. Born in Melmaruvathur, his life is a testament to compassion,
                service and spiritual guidance.
              </p>

              <div className="flex gap-4 items-center">
                <div className="text-sm bg-[#a7150b] text-white px-4 py-2 rounded-full font-medium">March 3, 1941</div>
                <div className="text-sm text-gray-500">Melmaruvathur</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Section: Divine Incarnation (Image Left / Text Right) */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/amma_young.jpg" alt="Early life" fill className="object-cover" />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#a7150b]/10 blur-xl" />
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Divine Incarnation</h2>

            <p>
              Born on <strong>March 3, 1941</strong>, Arulthiru Bangaru Adigalar displayed signs of spiritual depth from childhood.
              Raised in Melmaruvathur by Sri. Gopala Naicker and Smt. Meenakshi Ammal, his early life blended humble living with a growing
              devotion that later manifested as divine oracles and service.
            </p>

            <p>
              The term <em>Avatār</em> denotes one who descends in human form to restore righteousness. The devotees believe Amma to be the
              living medium of Mother Adhiparasakthi, guiding millions through spiritual counsel and social upliftment.
            </p>
          </motion.div>
        </motion.section>

        {/* Section: Possessed by the Divine (Image Right / Text Left) */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="order-last lg:order-first prose prose-lg text-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Possessed By The Divine</h2>
            <p>
              In an early incident, a cobra coiled calmly around the sleeping child, leaving his family astonished but unharmed.
              Such events were interpreted by devotees as early signs of divine protection and presence.
            </p>
            <p>
              The family’s devotion to the local Mariamman temple and the miracles recorded by villagers further strengthened
              the belief that the Divine chose this child as a vessel to speak oracles and bless the people.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/amma_young_boy.jpg" alt="Divine possession" fill className="object-cover" />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f59e0b]/6 blur-xl" />
          </motion.div>
        </motion.section>

        {/* Section: Thirst Quenched / Early Kindness (three images row) */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="space-y-6">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900">Thirst Quenched By The Divine</motion.h3>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/amma_family.jpg" alt="Family and early days" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/amma_simplicity.jpg" alt="Simplicity & Service" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image src="/amma_child.jpg" alt="Child devotion" fill className="object-cover" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <p>
              His Holiness once showed profound humility and simplicity. In childhood episodes recounted by devotees, strangers offered
              water and shelter, and ordinary acts of kindness became defining moments in his early life of devotion.
            </p>
          </motion.div>
        </motion.section>

        {/* Section: The True Inner Urge */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center bg-orange-50/40 p-8 rounded-2xl">
          <motion.div variants={itemVariants} className="relative h-[320px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/amma_child.jpg" alt="Inner Urge" fill className="object-cover" />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f97316]/8 blur-xl" />
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">The True Inner Urge Exposed</h3>
            <p>
              At a temple festival, a young Amma chose an idol of Devi Bhuvaneshwari when asked by a toy seller, revealing the innate
              devotional inclination that would shape his life. Years later, the call to spiritual service became irresistible and he
              embraced his role as a spiritual guide.
            </p>
            <p>
              His journey from teacher to spiritual leader shows the steady unfolding of a life dedicated to the upliftment of others.
            </p>
          </motion.div>
        </motion.section>

        {/* Section: Family Life */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">Family Life</h3>
            <p>
              Shri Adigalar maintained family responsibilities alongside his spiritual calling. He married and lived as a family man,
              demonstrating that spiritual life and family duties can coexist with humility and compassion.
            </p>
            <p>
              His life exemplifies devotion practiced within family life — a model for devotees seeking spiritual growth without abandoning duties.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
            <Image src="/amma_family.jpg" alt="Family life image" fill className="object-cover" />
          </motion.div>
        </motion.section>

        {/* Section: Profound Simplicity & Clairvoyance */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center bg-white p-6 rounded-xl">
          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">The Profound Simplicity</h3>
            <p>
              Amma's humility and simplicity are the touchstones of his teachings. His devotees often quote his words, "I am just a servant to all,"
              capturing the essence of his service-first message.
            </p>

            <h4 className="mt-6 text-xl font-semibold">Clairvoyance & Oracles</h4>
            <p>
              Since 1970, his oracles (Arulvakku) have been recognised by devotees for their accuracy and healing power. These oracles address
              spiritual and worldly concerns and are a central feature of the Melmaruvathur tradition.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-[320px] rounded-xl overflow-hidden shadow-xl">
            <Image src="/amma_simplicity.jpg" alt="Simplicity image" fill className="object-cover" />
          </motion.div>
        </motion.section>

        {/* Section: Service to Humanity */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/amma_young.jpg" alt="Service activities" fill className="object-cover" />
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">Service As Worship</h3>
            <p>
              "Service to humanity is service to God." Under his guidance, institutions that provide free education and medical care were formed.
              The Red-Clad Volunteers are a visible expression of this service—an organized body working daily to help the needy.
            </p>
            <p>
              The Trust's hospitals, schools and welfare programs continue to uplift thousands, embodying the practical compassion of Amma's mission.
            </p>
          </motion.div>
        </motion.section>

        {/* FINAL CTA & CONCLUSION */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="text-center max-w-3xl mx-auto space-y-6">
          <motion.div variants={itemVariants}>
            <Quote className="w-14 h-14 text-[#a7150b] mx-auto opacity-60" />
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            A Global Sanctuary
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
            Melmaruvathur Siddhar Peedam remains a global centre of devotion and service. Amma's teachings of unity, compassion and active service
            continue to inspire millions worldwide.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-6 mx-auto w-28 h-1 bg-[#a7150b] rounded-full opacity-60" />
        </motion.section>

      </main>
    </PageTemplate>
  );
}
