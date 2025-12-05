// import PageTemplate from '@/components/PageTemplate';

// export default function UniquenessPage() {
//   return (
//     <PageTemplate
//       title="Our Uniqueness"
//       subtitle="What Sets Us Apart"
//             noTopPadding={true}
//       noContentTopPadding={true}
//       // imageSrc="/placeholder.svg?key=h7p2k"
//             content={`
//         <h3 class="text-2xl font-bold text-[#a7150b]">Divine Incarnation (Avatar)</h3>
//         <p>Melmaruvathur is a place of marvel because Goddess Adhiparasakthi has incarnated Herself in the human form (Avatar) as Arulthiru Bangaru Adigalar (fondly called as 'AMMA' meaning mother in Tamil - symbolising His motherly affection to one and all), and provides solutions to the innumerable complex problems of human beings.</p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">Beyond Religions And Boundaries – One Mother, One Race</h3>
//         <p>The name "Siddhar Peedam" is used instead of the conventional word "temple" since 21 Siddhars (highly evolved souls or God realized beings similar to Jesus, Buddha, Moses, Mohammed or great spiritual masters/gurus) belonging to various religions are in Jeeva Samaadhi (leaving the mortal body but living in astral plane) here. Thus this Siddhar Peedam is not considered to be a Hindu temple, and welcomes people of all religions under the proclamation "ONE MOTHER ONE RACE".</p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">Uniform Colour And Its Significance</h3>
//         <p>Devotees throng Melmaruvathur and the Siddhar Peedam in RED robes or clothes. The red colour has been chosen to symbolise the pigment of blood, which is common to all human beings on this Mother Earth, irrespective of caste, creed, gender, religion or any other discrimination.</p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">No To Priests</h3>
//         <p>One of the unique features of this Siddhar Peedam is that it does not have appointed priests to perform or conduct daily prayers unlike in other temples. The devotees (including women) are allowed to perform Archanas and Abhishekams themselves, in accordance with the procedures laid by the Mother Adhiparasakthi through Her Oracles. Every day, each one of the odd Worshipping Centres (Mandrams in Tamil) is given the noble task of serving at the Sanctum Sanctorum.</p>

//         <h3 class="text-2xl font-bold text-[#a7150b]">Prominence To Women At The Siddhar Peedam</h3>
//         <p>Amma has said that one of the foremost reasons for Her incarnation is to give a divine place to the women folk by involving them in spirituality. Women are given utmost importance in all the activities and festivals at the Siddhar Peedam. Women are even allowed during their menstrual periods to perform regular prayers at the Sanctum Sanctorum (which is prohibited in Hindu temples all over the world). Amma emphasises that it is only a natural phenomenon which should not prohibit women from worshipping God and that would certainly pave the way for their upliftment. Many women have significantly attained and conquered unscaled heights in spiritualism – performing Yagnas, Kumbhabhishekams and Archanas in the Sanctum Sanctorum at this Siddhar Peedam.</p>
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
  Heart, 
  Globe2, 
  Droplet, 
  HandMetal, 
  Flower 
} from "lucide-react";

// --- 1. STRUCTURED DATA ---
const uniquenessPoints = [
  {
    title: "Divine Incarnation (Avatar)",
    content: "Melmaruvathur is a place of marvel because Goddess Adhiparasakthi has incarnated Herself in the human form (Avatar) as Arulthiru Bangaru Adigalar (fondly called as 'AMMA' meaning mother in Tamil - symbolising His motherly affection to one and all), and provides solutions to the innumerable complex problems of human beings.",
    icon: <Heart className="w-6 h-6 text-white" />,
    color: "bg-red-600",
    // image: "/amma.jpg", 
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939240/amma_wdurjp.jpg", 
    imageAlt: "Arulthiru Bangaru Adigalar"
  },
  {
    title: "Beyond Religions And Boundaries",
    subtitle: "One Mother, One Race",
    content: "The name 'Siddhar Peedam' is used instead of the conventional word 'temple' since 21 Siddhars (highly evolved souls or God realized beings similar to Jesus, Buddha, Moses, Mohammed or great spiritual masters/gurus) belonging to various religions are in Jeeva Samaadhi (leaving the mortal body but living in astral plane) here. Thus this Siddhar Peedam is not considered to be a Hindu temple, and welcomes people of all religions under the proclamation 'ONE MOTHER ONE RACE'.",
    icon: <Globe2 className="w-6 h-6 text-white" />,
    color: "bg-blue-600",
    image: null // Text-heavy section, better as a wide card
  },
  {
    title: "Uniform Colour And Its Significance",
    content: "Devotees throng Melmaruvathur and the Siddhar Peedam in RED robes or clothes. The red colour has been chosen to symbolise the pigment of blood, which is common to all human beings on this Mother Earth, irrespective of caste, creed, gender, religion or any other discrimination.",
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-[#a7150b]",
    // image: "/history.jpg", // Using the collage showing the red crowd
    image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939272/history_thy63d.jpg", 
    imageAlt: "Devotees in Red Robes"
  },
  {
    title: "No To Priests",
    content: "One of the unique features of this Siddhar Peedam is that it does not have appointed priests to perform or conduct daily prayers unlike in other temples. The devotees (including women) are allowed to perform Archanas and Abhishekams themselves, in accordance with the procedures laid by the Mother Adhiparasakthi through Her Oracles. Every day, each one of the odd Worshipping Centres (Mandrams) is given the noble task of serving at the Sanctum Sanctorum.",
    icon: <HandMetal className="w-6 h-6 text-white" />,
    color: "bg-orange-500",
    image: null
  },
  {
    title: "Prominence To Women",
    content: "Amma has said that one of the foremost reasons for Her incarnation is to give a divine place to the women folk by involving them in spirituality. Women are given utmost importance in all the activities and festivals at the Siddhar Peedam. Women are even allowed during their menstrual periods to perform regular prayers at the Sanctum Sanctorum (which is prohibited in Hindu temples all over the world). Amma emphasises that it is only a natural phenomenon which should not prohibit women from worshipping God and that would certainly pave the way for their upliftment. Many women have significantly attained and conquered unscaled heights in spiritualism – performing Yagnas, Kumbhabhishekams and Archanas.",
    icon: <Flower className="w-6 h-6 text-white" />,
    color: "bg-pink-600",
    image: null
  }
];

// --- 2. ANIMATIONS ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function UniquenessPage() {
  return (
    <PageTemplate
      title="Our Uniqueness"
      subtitle="What Sets Us Apart"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Intro Text */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xl text-gray-600 font-serif leading-relaxed">
            Melmaruvathur Siddhar Peedam differs significantly from conventional temples. Here, spirituality transcends rituals, embracing humanity, equality, and service.
          </p>
          <div className="w-24 h-1 bg-[#a7150b] mx-auto mt-6 rounded-full opacity-30"></div>
        </motion.div>

        {/* Uniqueness Features List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 md:space-y-24"
        >
          {uniquenessPoints.map((point, index) => {
            // Alternating Layout logic for items with images
            const isEven = index % 2 === 0;
            const hasImage = Boolean(point.image);

            return (
              <motion.div 
                key={index} 
                variants={cardVariants}
                className={`flex flex-col ${hasImage ? (isEven ? "lg:flex-row" : "lg:flex-row-reverse") : "max-w-4xl mx-auto"} gap-8 items-center`}
              >
                
                {/* IMAGE SECTION (If image exists) */}
                {hasImage && point.image && (
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                      <Image
                        src={point.image}
                        alt={point.imageAlt || point.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 ${point.color} mix-blend-multiply opacity-20`}></div>
                    </div>
                  </div>
                )}

                {/* CONTENT SECTION */}
                <div className={`w-full ${hasImage ? "lg:w-1/2" : ""}`}>
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
                    
                    {/* Decorative Top Line */}
                    <div className={`absolute top-0 left-0 w-full h-1 ${point.color}`}></div>

                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-full ${point.color} shadow-md flex-shrink-0`}>
                        {point.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {point.title}
                        </h3>
                        {point.subtitle && (
                          <span className="text-sm uppercase tracking-wider font-bold text-gray-400">
                            {point.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      {point.content}
                    </p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing Call to Action / Quote */}
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mt-20 bg-gray-900 text-white rounded-3xl p-10 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[#a7150b] opacity-20 pattern-grid-lg"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Experience the Equality</h3>
            <p className="max-w-2xl mx-auto text-gray-300 mb-6">
              "One Mother, One Race." Visit Melmaruvathur to witness a spiritual revolution where caste, creed, and gender hold no barriers.
            </p>
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}