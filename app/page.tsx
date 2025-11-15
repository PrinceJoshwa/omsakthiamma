'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import PoojaTimingsSection from '@/components/PoojaTimingsSection';
import DonationsSection from '@/components/DonationsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section - WordPress Integrated */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Temple Info Section */}
      <section className="py-20 px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
            Welcome to Om Sakthi Amma Temple
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🕉️',
                title: 'Sacred Traditions',
                description: 'Preserving ancient spiritual practices and wisdom for modern seekers.',
              },
              {
                icon: '✨',
                title: 'Divine Grace',
                description: 'Experience the transformative power of spiritual blessings and guidance.',
              },
              {
                icon: '🙏',
                title: 'Community',
                description: 'Join a loving community of devotees dedicated to spiritual growth.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-lg shadow-lg text-center border-t-4 border-[#ffc107]"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-[#a7150b] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
      <EventsSection />

      {/* Pooja Timings Section */}
      <PoojaTimingsSection />

      {/* Donations Section */}
      <DonationsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
