'use client';

import React from 'react';
import PageTemplate from '@/components/PageTemplate';
import { motion } from 'framer-motion';

export default function NoticePage() {
  return (
    <PageTemplate 
      title="Chitra Pournami Velvi" 
      subtitle="Guidelines for Devotees"
      noTopPadding={true}
      noContentTopPadding={true}
      hideFooter={true}
    >
      {/* min-h-screen ensures the background covers the whole page,
        items-start ensures the frame stays at the top and lets the page scroll
      */}
      <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
        
        {/* Big Frame Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          // max-w-4xl or max-w-5xl controls the maximum width of the white paper background
          className="bg-white max-w-4xl w-full shadow-2xl rounded-xl p-4 md:p-8 border border-gray-200"
        >
          {/* Image Wrapper */}
          <div className="w-full">
            <img 
              src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1777462062/Notice-chitra_gqukpz.jpg" 
              alt="Chitra Pournami Notice" 
              // w-full makes the image stretch to fill the frame width
              // h-auto lets the height scale proportionally, causing natural page scroll
              className="w-full h-auto rounded-lg shadow-sm border border-gray-100"
            />
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}