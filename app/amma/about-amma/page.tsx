// 'use client';

// import React from 'react';
// import PageTemplate from '@/components/PageTemplate';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { Quote, Sparkles, Globe } from 'lucide-react';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.12 } }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
// };

// export default function AboutAmmaPage() {
//   return (
//     <PageTemplate
//       title="About Amma"
//       subtitle="His Holiness Arulthiru Bangaru Adigalar — The Incarnation of Adhiparasakthi"
//       noContentTopPadding
//     >
//       {/* HERO */}
//       <header className="bg-gradient-to-b from-[#fff7f6] to-white py-12 md:py-20">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={containerVariants}
//           >
//             <motion.div variants={itemVariants} className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px]">
//               {/* <Image src="/amma_child.jpg" alt="Young Amma" fill className="object-cover" /> */}
//               <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Young Amma" fill className="object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#a7150b]/40 to-transparent pointer-events-none" />
//             </motion.div>
//           </motion.div>

//           <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants}>
//             <motion.div variants={itemVariants} className="space-y-6">
//               <div className="inline-flex items-center gap-3 px-3 py-2 rounded-full bg-red-50 text-[#a7150b] font-semibold">
//                 <Sparkles className="w-4 h-4" /> About Amma
//               </div>

//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#a7150b] leading-tight">
//                 His Holiness Arulthiru Bangaru Adigalar
//               </h1>

//               <p className="text-gray-700 text-lg leading-relaxed">
//                 Revered by millions as <strong>Amma</strong>, His Holiness Arulthiru Bangaru Adigalar is regarded as the living
//                 incarnation of <strong>Adhiparasakthi</strong>. Born in Melmaruvathur, his life is a testament to compassion,
//                 service and spiritual guidance.
//               </p>

//               <div className="flex gap-4 items-center">
//                 <div className="text-sm bg-[#a7150b] text-white px-4 py-2 rounded-full font-medium">March 3, 1941</div>
//                 <div className="text-sm text-gray-500">Melmaruvathur</div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </header>

//       {/* MAIN */}
//       <main className="max-w-6xl mx-auto px-4 py-16 space-y-20">

//         {/* Section: Divine Incarnation (Image Left / Text Right) */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div variants={itemVariants} className="relative h-[380px] rounded-2xl overflow-hidden shadow-xl">
//             {/* <Image src="/amma_young.jpg" alt="Early life" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_doqfqv.jpg" alt="Early life" fill className="object-cover" />
//             <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#a7150b]/10 blur-xl" />
//           </motion.div>

//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">The Divine Incarnation</h2>

//             <p>
//               Born on <strong>March 3, 1941</strong>, Arulthiru Bangaru Adigalar displayed signs of spiritual depth from childhood.
//               Raised in Melmaruvathur by Sri. Gopala Naicker and Smt. Meenakshi Ammal, his early life blended humble living with a growing
//               devotion that later manifested as divine oracles and service.
//             </p>

//             <p>
//               The term <em>Avatār</em> denotes one who descends in human form to restore righteousness. The devotees believe Amma to be the
//               living medium of Mother Adhiparasakthi, guiding millions through spiritual counsel and social upliftment.
//             </p>
//           </motion.div>
//         </motion.section>

//         {/* Section: Possessed by the Divine (Image Right / Text Left) */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div variants={itemVariants} className="order-last lg:order-first prose prose-lg text-gray-700">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Possessed By The Divine</h2>
//             <p>
//               In an early incident, a cobra coiled calmly around the sleeping child, leaving his family astonished but unharmed.
//               Such events were interpreted by devotees as early signs of divine protection and presence.
//             </p>
//             <p>
//               The family’s devotion to the local Mariamman temple and the miracles recorded by villagers further strengthened
//               the belief that the Divine chose this child as a vessel to speak oracles and bless the people.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="relative h-[360px] rounded-2xl overflow-hidden shadow-xl">
//             {/* <Image src="/amma_young_boy.jpg" alt="Divine possession" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_boy_huvjp1.jpg" alt="Divine possession" fill className="object-cover" />
//             <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f59e0b]/6 blur-xl" />
//           </motion.div>
//         </motion.section>

//         {/* Section: Thirst Quenched / Early Kindness (three images row) */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="space-y-6">
//           <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900">Thirst Quenched By The Divine</motion.h3>

//           <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
//             <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
//               {/* <Image src="/amma_family.jpg" alt="Family and early days" fill className="object-cover" /> */}
//               <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939215/amma_family_x69tkv.jpg" alt="Family and early days" fill className="object-cover" />
//             </div>
//             <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
//               {/* <Image src="/amma_simplicity.jpg" alt="Simplicity & Service" fill className="object-cover" /> */}
//               <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939230/amma_simplicity_yg4gja.jpg" alt="Simplicity & Service" fill className="object-cover" />
//             </div>
//             <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
//               {/* <Image src="/amma_child.jpg" alt="Child devotion" fill className="object-cover" /> */}
//               <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Child devotion" fill className="object-cover" />
//             </div>
//           </motion.div>

//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <p>
//               His Holiness once showed profound humility and simplicity. In childhood episodes recounted by devotees, strangers offered
//               water and shelter, and ordinary acts of kindness became defining moments in his early life of devotion.
//             </p>
//           </motion.div>
//         </motion.section>

//         {/* Section: The True Inner Urge */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center bg-orange-50/40 p-8 rounded-2xl">
//           <motion.div variants={itemVariants} className="relative h-[320px] rounded-xl overflow-hidden shadow-xl">
//             {/* <Image src="/amma_child.jpg" alt="Inner Urge" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Inner Urge" fill className="object-cover" />
//             <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f97316]/8 blur-xl" />
//           </motion.div>

//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <h3 className="text-2xl font-bold text-gray-900">The True Inner Urge Exposed</h3>
//             <p>
//               At a temple festival, a young Amma chose an idol of Devi Bhuvaneshwari when asked by a toy seller, revealing the innate
//               devotional inclination that would shape his life. Years later, the call to spiritual service became irresistible and he
//               embraced his role as a spiritual guide.
//             </p>
//             <p>
//               His journey from teacher to spiritual leader shows the steady unfolding of a life dedicated to the upliftment of others.
//             </p>
//           </motion.div>
//         </motion.section>

//         {/* Section: Family Life */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <h3 className="text-2xl font-bold text-gray-900">Family Life</h3>
//             <p>
//               Shri Adigalar maintained family responsibilities alongside his spiritual calling. He married and lived as a family man,
//               demonstrating that spiritual life and family duties can coexist with humility and compassion.
//             </p>
//             <p>
//               His life exemplifies devotion practiced within family life — a model for devotees seeking spiritual growth without abandoning duties.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="relative h-[360px] rounded-2xl overflow-hidden shadow-lg">
//             {/* <Image src="/amma_family.jpg" alt="Family life image" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939215/amma_family_x69tkv.jpg" alt="Family life image" fill className="object-cover" />
//           </motion.div>
//         </motion.section>

//         {/* Section: Profound Simplicity & Clairvoyance */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center bg-white p-6 rounded-xl">
//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <h3 className="text-2xl font-bold text-gray-900">The Profound Simplicity</h3>
//             <p>
//               Amma's humility and simplicity are the touchstones of his teachings. His devotees often quote his words, "I am just a servant to all,"
//               capturing the essence of his service-first message.
//             </p>

//             <h4 className="mt-6 text-xl font-semibold">Clairvoyance & Oracles</h4>
//             <p>
//               Since 1970, his oracles (Arulvakku) have been recognised by devotees for their accuracy and healing power. These oracles address
//               spiritual and worldly concerns and are a central feature of the Melmaruvathur tradition.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className="relative h-[320px] rounded-xl overflow-hidden shadow-xl">
//             {/* <Image src="/amma_simplicity.jpg" alt="Simplicity image" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939230/amma_simplicity_yg4gja.jpg" alt="Simplicity image" fill className="object-cover" />
//           </motion.div>
//         </motion.section>

//         {/* Section: Service to Humanity */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
//           <motion.div variants={itemVariants} className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl">
//             {/* <Image src="/amma_young.jpg" alt="Service activities" fill className="object-cover" /> */}
//             <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_doqfqv.jpg" alt="Service activities" fill className="object-cover" />
//           </motion.div>

//           <motion.div variants={itemVariants} className="prose prose-lg text-gray-700">
//             <h3 className="text-2xl font-bold text-gray-900">Service As Worship</h3>
//             <p>
//               "Service to humanity is service to God." Under his guidance, institutions that provide free education and medical care were formed.
//               The Red-Clad Volunteers are a visible expression of this service—an organized body working daily to help the needy.
//             </p>
//             <p>
//               The Trust's hospitals, schools and welfare programs continue to uplift thousands, embodying the practical compassion of Amma's mission.
//             </p>
//           </motion.div>
//         </motion.section>

//         {/* FINAL CTA & CONCLUSION */}
//         <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="text-center max-w-3xl mx-auto space-y-6">
//           <motion.div variants={itemVariants}>
//             <Quote className="w-14 h-14 text-[#a7150b] mx-auto opacity-60" />
//           </motion.div>

//           <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
//             A Global Sanctuary
//           </motion.h2>

//           <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
//             Melmaruvathur Siddhar Peedam remains a global centre of devotion and service. Amma's teachings of unity, compassion and active service
//             continue to inspire millions worldwide.
//           </motion.p>

//           <motion.div variants={itemVariants} className="mt-6 mx-auto w-28 h-1 bg-[#a7150b] rounded-full opacity-60" />
//         </motion.section>

//       </main>
//     </PageTemplate>
//   );
// }

'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // <--- 1. Added Variants here
import { Quote, Sparkles, Globe } from 'lucide-react';

// 2. Added type annotation ': Variants' to both objects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants: Variants = {
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
              {/* <Image src="/amma_child.jpg" alt="Young Amma" fill className="object-cover" /> */}
              <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Young Amma" fill className="object-cover" />
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
            {/* <Image src="/amma_young.jpg" alt="Early life" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_doqfqv.jpg" alt="Early life" fill className="object-cover" />
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
            {/* <Image src="/amma_young_boy.jpg" alt="Divine possession" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_boy_huvjp1.jpg" alt="Divine possession" fill className="object-cover" />
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-[#f59e0b]/6 blur-xl" />
          </motion.div>
        </motion.section>

        {/* Section: Thirst Quenched / Early Kindness (three images row) */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="space-y-6">
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900">Thirst Quenched By The Divine</motion.h3>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              {/* <Image src="/amma_family.jpg" alt="Family and early days" fill className="object-cover" /> */}
              <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939215/amma_family_x69tkv.jpg" alt="Family and early days" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              {/* <Image src="/amma_simplicity.jpg" alt="Simplicity & Service" fill className="object-cover" /> */}
              <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939230/amma_simplicity_yg4gja.jpg" alt="Simplicity & Service" fill className="object-cover" />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              {/* <Image src="/amma_child.jpg" alt="Child devotion" fill className="object-cover" /> */}
              <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Child devotion" fill className="object-cover" />
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
            {/* <Image src="/amma_child.jpg" alt="Inner Urge" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939227/amma_child_g8n2n1.jpg" alt="Inner Urge" fill className="object-cover" />
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
            {/* <Image src="/amma_family.jpg" alt="Family life image" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939215/amma_family_x69tkv.jpg" alt="Family life image" fill className="object-cover" />
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
            {/* <Image src="/amma_simplicity.jpg" alt="Simplicity image" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939230/amma_simplicity_yg4gja.jpg" alt="Simplicity image" fill className="object-cover" />
          </motion.div>
        </motion.section>

        {/* Section: Service to Humanity */}
        <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={containerVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="relative h-[340px] rounded-2xl overflow-hidden shadow-xl">
            {/* <Image src="/amma_young.jpg" alt="Service activities" fill className="object-cover" /> */}
            <Image src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939314/amma_young_doqfqv.jpg" alt="Service activities" fill className="object-cover" />
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