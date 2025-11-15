'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FestivalsPage() {
  const festivals = [
    { name: 'Aadi Pooram', description: 'Celestial celebration of divine feminine energy' },
    { name: 'Navratri', description: 'Nine nights of divine worship and transformation' },
    { name: 'Deepavali', description: 'Festival of lights celebrating victory of light over darkness' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
            Sacred Festivals
          </h1>
          <p className="text-xl text-gray-600">Celebrate divine occasions with spiritual grace</p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#a7150b]">Festival Calendar</h2>
            <p className="text-gray-700">
              Throughout the year, we celebrate sacred festivals that honor the divine and bring our community together in spiritual harmony.
            </p>
            <div className="space-y-4">
              {festivals.map((festival, idx) => (
                <motion.div
                  key={festival.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="p-4 bg-[#ffc107] rounded-lg"
                >
                  <h3 className="font-bold text-[#1a1a1a]">{festival.name}</h3>
                  <p className="text-sm text-[#1a1a1a] opacity-80">{festival.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/hindu-festival-celebration.jpg"
              alt="Festival celebration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
