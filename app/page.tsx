'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, Music, ClipboardList, Phone, CalendarCheck } from 'lucide-react';

// Component Imports
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturedVideoSection from '@/components/FeaturedVideo';
import PilgrimServicesSection from '@/components/PilgrimService';
import SacredFestivalsSection from '@/components/SacredFestivels';
import PoojaTimings from '@/components/Pooja';
import PublicationsSection from '@/components/Publication';
import ResourcesSection from '@/components/Resources';
import SpecialOccasionsSection from '@/components/SpecialOccasians';
import GoogleCalendarSection from '@/components/GoogleCalendar';
import LatestUpdatesSection from '@/components/LatestUpdates';
import ActivitiesSection from '@/components/Activities';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import EventPopup from '@/components/EventPopup';
import WhatsAppChat from '@/components/WhatsAppChat';
import DailyMessageSection from '@/components/DailyMessageSection';
import EventBanner from '@/components/EventBanner';

// Audio Player Imports
import MantraPlayer from '@/components/MantraPlayer';
// import { featuredMantras } from '@/lib/mantraData';
import { featuredMantras, mantrasAudioFolder, devotionalSongsFolder } from "@/lib/mantraData";
import IrumudiSection from '@/components/IrumudiSection';
import NoticeCarousel from '@/components/Notification';


export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <EventPopup />
      
      <HeroSection />
      {/* <NoticeCarousel /> */}
      {/* <IrumudiSection /> */}
      <EventBanner /> 
      <DailyMessageSection />
      <FeaturedVideoSection />

      {/* --- NEW SECTION: IRUMUDI BANNER (Added Here) --- */}
      {/* <section className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full rounded-xl overflow-hidden shadow-2xl border-2 border-orange-100"
        >
          <Image 
            src="/home-img.jpeg" 
            alt="Irumudi Peru Vizha 2025-2026 Celebration Details"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority 
          />
        </motion.div>
      </section> */}

      {/* --- COMBINED INTRODUCTION & MANTRAS SECTION --- */}
      <section className="relative py-12 md:py-24 overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-orange-50/50 -z-10 pattern-bg"></div>

        {/* 1. Introduction (About) */}
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
          <AboutSection /> 
        </div>

        {/* 2. DIVINE MANTRAS (TEXT) - RESTORED! */}
        <div className="max-w-7xl mx-auto px-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
              Sacred Chants
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] spiritual-text">
              Divine Mantras
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Chant these powerful mantras to invoke divine blessings and inner peace.
            </p>
          </motion.div>

          {/* <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '🕉️',
                title: 'Moola Manthiram',
                description: 'OMSAKTHIYE PARASAKTHIYE! • OMSAKTHIYE ADHIPARASAKTHIYE! • OMSAKTHIYE MARUVOOR ARASIYE! • OMSAKTHIYE OM VINAYAGA! • OMSAKTHIYE OM KAMAKSHIYE! • OMSAKTHIYE OM BANGARU KAMAKSHIYE!',
                color: 'border-red-500'
              },
              {
                icon: '🙏',
                title: 'மூலமந்திரம்',
                description: 'ஓம்சக்தியே! பராசக்தியே! • ஓம்சக்தியே! ஆதிபராசக்தியே! • ஓம்சக்தியே! மருவூர் அரசியே! • ஓம்சக்தியே! ஓம் விநாயகா! • ஓம்சக்தியே! ஓம் காமாட்சியே! • ஓம்சக்தியே! ஓம் பங்காரு காமாட்சியே!',
                color: 'border-yellow-500'
              },
              {
                icon: '✨',
                title: 'Divine Blessings',
                description: 'எண்ணங்கள் கோடி எழுந்தாடி உனை நாடி என்னைக் கடத்து என்றே இங்கோடி நான் வந்தேன் என்மீதில் அருள்நாடி எவ்விக் குதித்தோடி வா!',
                color: 'border-orange-500'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`relative p-6 md:p-8 bg-white rounded-xl shadow-lg border-t-4 ${item.color} group overflow-hidden`}
              >
                <div className="absolute top-4 right-4 text-8xl md:text-9xl opacity-5 select-none grayscale group-hover:grayscale-0 transition-all duration-500">
                  {item.icon}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-6">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-gray-700 font-medium leading-loose text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div> */}

<div className="grid md:grid-cols-3 gap-6 md:gap-8">
  {[
    {
      icon: '🕉️',
      title: 'Moola Manthiram',
      description: [
        'OMSAKTHIYE PARASAKTHIYE!',
        'OMSAKTHIYE ADHIPARASAKTHIYE!',
        'OMSAKTHIYE MARUVOOR ARASIYE!',
        'OMSAKTHIYE OM VINAYAGA!',
        'OMSAKTHIYE OM KAMAKSHIYE!',
        'OMSAKTHIYE OM BANGARU KAMAKSHIYE!'
      ],
      color: 'border-red-500'
    },
    {
      icon: '🙏',
      title: 'மூலமந்திரம்',
      description: [
        'ஓம்சக்தியே! பராசக்தியே!',
        'ஓம்சக்தியே! ஆதிபராசக்தியே!',
        'ஓம்சக்தியே! மருவூர் அரசியே!',
        'ஓம்சக்தியே! ஓம் விநாயகா!',
        'ஓம்சக்தியே! ஓம் காமாட்சியே!',
        'ஓம்சக்தியே! ஓம் பங்காரு காமாட்சியே!' // Now forced to stay on one line
      ],
      color: 'border-yellow-500'
    },
    {
      icon: '✨',
      title: 'Divine Blessings',
      // Kept as string for paragraph block
      description: 'எண்ணங்கள் கோடி எழுந்தாடி உனை நாடி என்னைக் கடத்து என்றே இங்கோடி நான் வந்தேன் என்மீதில் அருள்நாடி எவ்விக் குதித்தோடி வா!',
      color: 'border-orange-500'
    },
  ].map((item, idx) => (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      // Reduced side padding (px-4) slightly to give text more room
      className={`relative py-8 px-4 md:p-8 bg-white rounded-xl shadow-lg border-t-4 ${item.color} group overflow-hidden`}
    >
      <div className="absolute top-4 right-4 text-8xl md:text-9xl opacity-5 select-none grayscale group-hover:grayscale-0 transition-all duration-500">
        {item.icon}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="text-4xl md:text-5xl mb-4 md:mb-6">{item.icon}</div>
        <h3 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-4 md:mb-6">{item.title}</h3>
        
        <div className="text-gray-700 font-medium text-sm md:text-base space-y-3 w-full">
          {Array.isArray(item.description) ? (
            item.description.map((line, i) => (
              <p key={i} className="whitespace-nowrap tracking-tight leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="leading-loose">{item.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</div>
          {/* View All Text Mantras Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12 text-center"
          >
            <Link href="/festivals/mantras">
              <button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-[#a7150b] text-white rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Sparkles className="w-5 h-5" />
                Read All Mantras
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* 3. DEVOTIONAL SONGS (AUDIO) - NEW SECTION ADDED BELOW
        <div className="max-w-7xl mx-auto px-4 border-t border-orange-100 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
             Mantra's Audio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] spiritual-text">
              Devotional Songs
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
              Listen to the divine vibrations of Adhiparasakthi.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredMantras.map((song, idx) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <MantraPlayer 
                  title={song.title} 
                  src={song.url} 
                  duration={song.duration} 
                  lightMode={true} 
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/mantras">
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-base shadow-lg hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <Music className="w-5 h-5" />
                View All Songs
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div> */}

{/* DEVOTIONAL SONGS SECTION */}
<div className="max-w-7xl mx-auto px-4 border-t border-orange-100 pt-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-10"
  >
    <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
      Devotional Songs
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
      Devotional Songs Collection
    </h2>
    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
      Listen to soulful songs.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
    {devotionalSongsFolder.songs.slice(0, 2).map((song, idx) => (
      <motion.div
        key={song.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        <MantraPlayer
          title={song.title}
          src={song.url}
          duration={song.duration}
          lightMode={true}
        />
      </motion.div>
    ))}
  </div>

  <div className="text-center">
    <Link href="/devotional-songs">
      <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold text-base shadow-lg hover:bg-[#8a0d08] transition-all duration-300 group">
        View All Devotional Songs
      </button>
    </Link>
  </div>
</div>

{/* MANTRAS AUDIO SECTION */}
<div className="max-w-7xl mx-auto px-4 border-t border-orange-100 pt-16">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-10"
  >
    <span className="px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
      Mantras Audio
    </span>
    <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
      Powerful Mantras Collection
    </h2>
    <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
      Listen to divine mantras.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
    {mantrasAudioFolder.songs.slice(0, 2).map((mantra, idx) => (
      <motion.div
        key={mantra.id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        viewport={{ once: true }}
      >
        <MantraPlayer
          title={mantra.title}
          src={mantra.url}
          duration={mantra.duration}
          lightMode={true}
        />
      </motion.div>
    ))}
  </div>

  <div className="text-center">
    <Link href="/mantras-audio">
      <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold text-base shadow-lg hover:bg-[#8a0d08]  transition-all duration-300 group">
        View All Mantras Audio
      </button>
    </Link>
  </div>
</div>


      </section>
      
      <PilgrimServicesSection />

      {/* Gallery Section */}
      <section className="py-12 md:py-24 px-4 bg-white">
        <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
            Sacred Moments
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-8 md:mb-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">Glimpses of divine grace and spiritual fervor at Melmaruvathur.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              // { src: "/om3.jpeg", alt: "Divine Pooja" },
              // { src: "/om4.jpeg", alt: "Temple Celebration" },
              // { src: "/om5.jpeg", alt: "Sacred Procession" },
              { src: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939123/om3_f76xrf.jpg", alt: "Divine Pooja" },
              { src: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939068/om4_pr5ffn.jpg", alt: "Temple Celebration" },
              { src: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939095/om5_ppv6nl.jpg", alt: "Sacred Procession" },
            ].map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      
      <SacredFestivalsSection />
      
      {/* Daily Message Section */}
      {/* <DailyMessageSection /> */}
      
      <PoojaTimings />
      <PublicationsSection />
      <ResourcesSection />
      <EventsSection />
      <GoogleCalendarSection />
      {/* <LatestUpdatesSection /> */}
      <ActivitiesSection />
      {/* --- NEW VOLUNTEER CTA SECTION --- */}
      <section className="py-12 bg-orange-50/50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-3 inline-block">
              Seva Opportunity
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
              Join as a Volunteer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              "செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
            </p>
          </motion.div>

          {/* The 3 Steps Visual (Mini Version) */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: ClipboardList, title: "Apply Online", desc: "Fill the form" },
              { icon: Phone, title: "Get Verified", desc: "Receive a call" },
              { icon: CalendarCheck, title: "Start Seva", desc: "Visit Peedam" }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-orange-100 flex flex-col items-center"
              >
                <div className="bg-orange-50 p-3 rounded-full mb-3 text-[#a7150b]">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <Link href="/activities/volunteer">
            <button className="px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold shadow-lg hover:bg-[#8a0d08] hover:shadow-xl transition-all duration-300">
              Apply for Volunteering
            </button>
          </Link>
        </div>
      </section>
      <ContactSection />
      <WhatsAppChat />
    </main>
  );
}