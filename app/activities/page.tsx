'use client';

import { motion } from 'framer-motion';

export default function ActivitiesPage() {
  const activities = [
    'Worshipping Centres',
    'Sakthi Peedams',
    'Youth Wings',
    'Spiritual Magazines',
    'Spiritual Conferences',
    'Spiritual Tours',
    'Social Activity',
  ];

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
            Our Activities
          </h1>
          <p className="text-xl text-gray-600">
            Spreading spiritual wisdom across the world
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activities.map((activity, idx) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition border-t-4 border-[#a7150b]"
            >
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{activity}</h3>
              <p className="text-gray-600 text-sm">
                Discover more about our {activity.toLowerCase()} initiatives and how you can participate.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
