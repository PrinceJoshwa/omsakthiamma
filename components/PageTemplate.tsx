'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  content: string;
  imageOnRight?: boolean;
}

export default function PageTemplate({
  title,
  subtitle,
  imageSrc,
  content,
  imageOnRight = false,
}: PageTemplateProps) {
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
            {title}
          </h1>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? 'md:flex-row-reverse' : ''}`}
        >
          {!imageOnRight && (
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          )}

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#a7150b]">{title}</h2>
            <p className="text-gray-700 leading-relaxed">{content}</p>
            <div className="space-y-2">
              <p className="text-gray-700 leading-relaxed">
                This is a sacred place of spiritual transformation and divine wisdom.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We welcome all seekers of truth and spiritual enlightenment.
              </p>
            </div>
          </div>

          {imageOnRight && (
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          )}
        </motion.div>
      </section>

      <section className="py-16 px-4 bg-[#ffc107]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
            Explore More Spiritual Wisdom
          </h3>
          <p className="text-lg text-[#1a1a1a] opacity-80">
            Visit other sections to deepen your spiritual understanding
          </p>
        </motion.div>
      </section>
    </div>
  );
}
