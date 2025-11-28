'use client';

import { motion } from 'framer-motion';

export default function SacredFestivalsSection() {
  const festivals = [
    { 
      title: "Thai Poosam and Irumudi", 
      description: "Tamil Month of Thai"
    },
    { 
      title: "Amma's Birthday", 
      description: "Adigalar’s day of incarnation" 
    },
    { 
      title: "Aadi Pooram", 
      description: "Tamil Month of Aadi" 
    },
    { 
      title: "Pournami Velaku Pooja", 
      description: "Full Moon Celebrations" 
    },
    { 
      title: "Ammavasai Velvi", 
      description: "New Moon Rituals" 
    },
    { 
      title: "Navratri Kappu", 
      description: "Nine Nights of Celebration" 
    }
  ];

  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold text-center mb-16 spiritual-text"
        >
          Sacred Festivals
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {festivals.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ x: 5 }}
              className="bg-[#fffcf2] border-l-[6px] border-[#7a0f07] rounded-r-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-center h-32"
            >
              <h3 className="text-2xl font-bold text-[#7a0f07] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}