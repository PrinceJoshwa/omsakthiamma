'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SiddharPeedamPage() {
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
            Siddhar Peedam
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sacred Temple of Spiritual Excellence
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/sacred-temple-architecture.jpg"
              alt="Siddhar Peedam"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#a7150b]">Welcome to Siddhar Peedam</h2>
            <p className="text-gray-700 leading-relaxed">
              A beacon of spiritual wisdom and divine knowledge, Siddhar Peedam stands as a sanctuary for seekers of truth.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Established with the vision of spreading spiritual enlightenment, our peedam embraces ancient wisdom with modern compassion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join us in the eternal quest for self-realization and spiritual transformation through sacred practices and divine grace.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-gray-100">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Core Principles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Wisdom', 'Compassion', 'Enlightenment'].map((principle) => (
              <div key={principle} className="bg-white p-6 rounded-lg shadow text-center">
                <h4 className="text-xl font-bold text-[#a7150b] mb-2">{principle}</h4>
                <p className="text-gray-600">Placeholder description of {principle}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
