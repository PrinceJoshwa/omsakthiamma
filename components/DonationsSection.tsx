'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function DonationsSection() {
  return (
    <section className="py-20 px-4 bg-[#a7150b]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <div className="flex justify-center mb-6">
          <Heart className="w-12 h-12 fill-white text-white" />
        </div>

        <h2 className="text-4xl font-bold mb-4 spiritual-text">Support Our Mission</h2>
        <p className="text-lg mb-8 opacity-90">
          Your donations help us continue our spiritual mission and serve the community with divine grace and compassion.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { amount: '₹50', label: 'Daily Pooja' },
            { amount: '₹100', label: 'Special Ritual' },
            { amount: '₹1000', label: 'Temple Support' },
          ].map((item, idx) => (
            <motion.button
              key={item.amount}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/20 rounded-lg hover:bg-white/30 transition backdrop-blur"
            >
              <div className="text-3xl font-bold">{item.amount}</div>
              <div className="text-sm opacity-90">{item.label}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-[#ffc107] text-[#1a1a1a] rounded-lg font-bold hover:bg-yellow-300 transition shadow-lg"
        >
          Make a Donation
        </motion.button>
      </motion.div>
    </section>
  );
}
