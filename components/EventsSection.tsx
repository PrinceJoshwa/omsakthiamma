'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function EventsSection() {
  const upcomingEvents = [
    {
      title: 'Daily Prayers & Meditation',
      date: 'Every Day',
      time: '5:00 AM - 9:00 PM',
      description: 'Join us for daily spiritual practices',
    },
    {
      title: 'Weekly Satsang',
      date: 'Every Saturday',
      time: '6:00 PM - 8:00 PM',
      description: 'Spiritual discourse and divine wisdom sharing',
    },
    {
      title: 'Monthly Abhisheka',
      date: 'Full Moon Day',
      time: '10:00 AM - 12:00 PM',
      description: 'Sacred anointing ritual for blessings',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -5 }}
              className="p-6 bg-gradient-to-br from-[#ffc107] to-yellow-400 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">{event.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#1a1a1a]">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">{event.date}</span>
                </div>
                <p className="text-[#1a1a1a] font-semibold">{event.time}</p>
                <p className="text-[#1a1a1a] text-sm">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
