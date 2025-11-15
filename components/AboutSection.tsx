'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/om-sakthi-amma-spiritual-portrait.jpg"
            alt="Om Sakthi Amma"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text">About Om Sakthi Amma</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Om Sakthi Amma represents the pinnacle of spiritual consciousness and divine grace. Her life is dedicated to uplifting humanity and guiding millions toward enlightenment.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Through sacred teachings and transformative spiritual practices, Amma touches the hearts of devotees worldwide, inspiring them to discover their divine nature.
          </p>
          <motion.div
            whileHover={{ x: 5 }}
            className="inline-block"
          >
            <button className="px-8 py-3 bg-[#a7150b] text-white rounded-lg font-bold hover:bg-[#8a0d08] transition">
              Learn More About Amma
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
