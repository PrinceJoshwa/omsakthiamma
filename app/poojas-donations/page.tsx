'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PoojasDonationsPage() {
  const poojas = [
    { name: 'Daily Pooja', price: '$25', description: 'Daily spiritual worship for divine blessings' },
    { name: 'Special Pooja', price: '$100', description: 'Special ritual for specific intentions' },
    { name: 'Abhisheka', price: '$200', description: 'Sacred anointing ritual for divine grace' },
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
            Poojas & Donations
          </h1>
          <p className="text-xl text-gray-600">
            Contribute to the divine cause
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-[#a7150b] mb-8 text-center">Sacred Poojas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {poojas.map((pooja, idx) => (
              <motion.div
                key={pooja.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-lg text-center border-2 border-[#ffc107]"
              >
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{pooja.name}</h3>
                <p className="text-3xl font-bold text-[#a7150b] mb-4">{pooja.price}</p>
                <p className="text-gray-600 mb-4">{pooja.description}</p>
                <button className="w-full bg-[#a7150b] text-white py-2 rounded-lg hover:bg-[#8a0d08] transition">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-[#ffc107] rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">Support Our Cause</h2>
          <p className="text-lg text-[#1a1a1a] mb-6">
            Your donations help us serve humanity and spread spiritual wisdom across the world.
          </p>
          <button className="bg-[#a7150b] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#8a0d08] transition">
            Make a Donation
          </button>
        </motion.div>
      </section>
    </div>
  );
}
