'use client';

import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function PoojaTimingsSection() {
  const poojaTimings = [
    { name: 'Subhaprabatha Archana', time: '5:30 AM - 6:30 AM' },
    { name: 'Mangala Harathi', time: '7:00 AM - 8:00 AM' },
    { name: 'Midday Archana', time: '12:00 PM - 1:00 PM' },
    { name: 'Sayartha Archana', time: '5:30 PM - 6:30 PM' },
    { name: 'Sandhya Harathi', time: '7:00 PM - 8:00 PM' },
    { name: 'Night Prayers', time: '8:30 PM - 9:00 PM' },
  ];

  return (
    <section className="py-20 px-4 bg-[#ffc107]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
          Daily Pooja Timings
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {poojaTimings.map((pooja, idx) => (
            <motion.div
              key={pooja.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-[#a7150b]" />
                <h3 className="font-bold text-[#1a1a1a]">{pooja.name}</h3>
              </div>
              <p className="text-[#a7150b] font-semibold">{pooja.time}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
