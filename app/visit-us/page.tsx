'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function VisitUsPage() {
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
            Visit Us
          </h1>
          <p className="text-xl text-gray-600">
            Join us for a spiritual experience
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#a7150b] mb-4">Location</h2>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Main Temple Address</p>
                  <p className="text-gray-600">123 Spiritual Lane, Holy City, State 12345</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#a7150b] mb-4">Visiting Hours</h3>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p><span className="font-semibold">Morning:</span> 5:00 AM - 12:00 PM</p>
                  <p><span className="font-semibold">Evening:</span> 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#a7150b] mb-4">Contact</h3>
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-[#a7150b] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">+1 (123) 456-7890</p>
                  <p className="text-gray-600">info@omsakhtiamma.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/temple-entrance-photo.jpg"
              alt="Temple"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
