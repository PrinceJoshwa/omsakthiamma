'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AmmaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
            Om Sakthi Amma
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Divine Grace and Spiritual Wisdom
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/spiritual-amma-portrait.jpg"
              alt="Om Sakthi Amma"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#a7150b]">About Amma</h2>
            <p className="text-gray-700 leading-relaxed">
              Amma represents divine consciousness and spiritual enlightenment. Her teachings guide millions towards inner peace and spiritual awakening.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through sacred practices and divine wisdom, Amma shows the path to liberation and eternal bliss for all seekers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her compassion knows no bounds, reaching across the world to touch hearts and transform lives through spiritual grace.
            </p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-[#ffc107]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold text-[#1a1a1a] mb-4">
            Explore Amma's Divine Teachings
          </h3>
          <p className="text-lg text-[#1a1a1a] mb-8">
            Learn more about miracles, divine wisdom, and spiritual messages
          </p>
        </motion.div>
      </section>
    </div>
  );
}
