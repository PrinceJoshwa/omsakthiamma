'use client';

import { motion } from 'framer-motion';

export default function FeaturedVideoSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide uppercase">
            Divine Darshan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
            Featured video of Arul Thiru Bangaru Adigalar
          </h2>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffc107] bg-black"
        >
          {/* YouTube Embed */}
          {/* REPLACE THE 'src' URL BELOW WITH YOUR ACTUAL YOUTUBE VIDEO LINK */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/vP5pR7mu6ks?si=oVAidRTxsLDB49Ze" 
            title="Arul Thiru Bangaru Adigalar Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Optional Description or CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Witness the divine grace and spiritual message of Arul Thiru Bangaru Adigalar.
          </p>
        </div>

      </div>
    </section>
  );
}