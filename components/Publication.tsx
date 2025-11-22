'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PublicationsSection() {
  const resources = [
    {
      title: "Articles",
      description: "Explore our collection of spiritual wisdom and teachings",
      link: "/publications/articles" // You can update these links later
    },
    {
      title: "Books",
      description: "Explore our collection of spiritual wisdom and teachings",
      link: "/publications/books"
    },
    {
      title: "Magazine",
      description: "Explore our collection of spiritual wisdom and teachings",
      link: "/publications/magazine"
    }
  ];

  return (
    <section className="w-full">
      {/* 1. Yellow Banner Header */}
      <div className="w-full bg-[#ffc107] py-8 shadow-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight">
          Publications
        </h1>
      </div>

      {/* 2. Main Content Area */}
      {/* <div className="py-16 px-4 bg-gray-50/50"> */}
      <div className="py-12 md:py-16 px-4 bg-gray-50/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-12"
        >
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-[#7a0f07] text-center mb-10 spiritual-text">
            Publications & Resources
          </h2>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#8a0d08] rounded-xl p-8 flex flex-col justify-between shadow-md hover:shadow-xl text-white h-full"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-8 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                
                <div>
                  <Link href={item.link}>
                    <button className="bg-[#ffc107] text-[#1a1a1a] px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-yellow-300 transition-colors shadow-sm">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}