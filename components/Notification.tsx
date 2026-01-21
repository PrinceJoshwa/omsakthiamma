'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NoticeCarousel() {
  // --- CAROUSEL STATE ---
  const [currentNotice, setCurrentNotice] = useState(0);

  // Add your image paths here
  const notices = [
    "/notice1.jpeg", 
    "/notice2.jpeg"
  ];

  const nextNotice = () => {
    setCurrentNotice((prev) => (prev === notices.length - 1 ? 0 : prev + 1));
  };

  const prevNotice = () => {
    setCurrentNotice((prev) => (prev === 0 ? notices.length - 1 : prev - 1));
  };

  return (
    <section className="py-12 bg-gray-50 border-b border-orange-100">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
            Important Announcements
          </h2>
          {/* <p className="text-gray-600 mt-2">
            Use the arrows to view all circulars
          </p> */}
        </div>

        {/* Carousel Container */}
        <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          
          {/* The Image Area */}
          <div className="relative aspect-[4/5] md:aspect-[16/9] w-full flex items-center justify-center bg-black/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentNotice}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <Image
                  src={notices[currentNotice]}
                  alt={`Notice ${currentNotice + 1}`}
                  fill
                  className="object-contain p-2"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Arrow */}
          <button 
            onClick={prevNotice}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Right Arrow */}
          <button 
            onClick={nextNotice}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Bottom Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-10">
            {notices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentNotice(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentNotice ? "bg-[#a7150b] w-6" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}