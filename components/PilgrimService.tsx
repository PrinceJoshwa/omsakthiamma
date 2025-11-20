'use client';

import { motion } from 'framer-motion';
import { 
  Monitor, 
  Flame, 
  Wifi, 
  Activity, 
  Accessibility, 
  Ticket, 
  Hotel, 
  Landmark, 
  Coins, 
  HeartHandshake, 
  ShoppingBag, 
  Users,
  HandHeart,
  Sparkles,
  Gift
} from 'lucide-react';
import Link from 'next/link';

export default function PilgrimServicesSection() {
  
  const services = [
    { icon: Monitor, label: "Seva Electronic DIP" },
    { icon: Flame, label: "Arjitha Sevas" },
    { icon: Wifi, label: "Online Sevas (Virtual)" },
    { icon: Activity, label: "Angapradakshinam" },
    { icon: Accessibility, label: "Differently Abled / Sr. Citizen" },
    { icon: Ticket, label: "Special Entry Darshan" },
    { icon: Hotel, label: "Accommodation" },
    { icon: Sparkles, label: "Ammavari Darshan" },
    { icon: Flame, label: "Divyanugraha Homam" },
    { icon: Users, label: "Angapradakshinam (Locals)" },
    { icon: Coins, label: "Swamyvari (e-hundi)" },
    { icon: HandHeart, label: "Annadanam Trust" },
    { icon: Coins, label: "Ammavari (e-hundi)" },
    { icon: Gift, label: "Donor Privileges" },
    { icon: HandHeart, label: "SRIVANI Trust" },
    { icon: HeartHandshake, label: "Kalyanavedika" },
    { icon: ShoppingBag, label: "Panchagavya Products" },
    { icon: Landmark, label: "Kalyanamandapam" },
    { icon: Landmark, label: "Our Temples" },
  ];

  return (
    <section className="py-20 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] spiritual-text">
            Pilgrim Services
          </h2>
          <Link href="/services" className="text-[#a7150b] font-bold hover:underline mt-4 md:mt-0">
            More Services
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* Circular Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border border-gray-100 group-hover:border-[#a7150b] transition-colors duration-300"
              >
                <service.icon className="w-8 h-8 text-[#a7150b]" />
              </motion.div>
              
              {/* Label */}
              <p className="text-sm font-bold text-gray-800 group-hover:text-[#a7150b] transition-colors px-2 leading-tight">
                {service.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}