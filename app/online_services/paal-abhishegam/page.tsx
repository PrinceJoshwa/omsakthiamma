'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, Globe, UserCheck, HeartHandshake, ArrowRight } from 'lucide-react';

export default function PaalAbhishegamPage() {
  return (
    <main className="bg-[#FFFBF0] min-h-screen overflow-x-hidden font-sans pb-20">
      
      {/* 1. GRAND HERO SECTION */}
      <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center py-20 overflow-hidden bg-gradient-to-br from-[#4a0402] via-[#a7150b] to-[#5a0502]">
        
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
        
        {/* Subtle Glowing Orbs for Premium Effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/40 text-[#ffc107] rounded-full text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(255,193,7,0.3)]">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              ஓம் சக்தி
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-semibold text-orange-100 mb-4 tracking-wide drop-shadow-md">
              மேல்மருவத்தூர் ஆதிபராசக்தி சித்தர் பீடம்
            </h3>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D1] via-[#FFD700] to-[#DAA520] mb-6 leading-[1.2] drop-shadow-2xl py-2">
              ஆடிப்பூரப் பால் அபிஷேகத்தை <br className="hidden md:block" />
              உங்கள் சார்பாகச் செய்யுங்கள்
            </h1>
          </motion.div>
        </div>
        
        {/* Curved Bottom Edge for overlapping next section */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] md:h-[80px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,152,102.13,321.39,56.44Z" fill="#FFFBF0"></path>
          </svg>
        </div>
      </section>

      {/* 2. OVERLAPPING QUOTE CARD */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 -mt-16 md:-mt-24 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-10 border-b-4 border-[#a7150b] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#a7150b] to-[#ffc107]"></div>
          <p className="text-2xl md:text-3xl text-[#a7150b] font-bold italic leading-relaxed">
            “பக்திக்கு தூரம் ஒரு தடையில்லை;<br />
            பக்தியின் தூய்மையே அம்மாவே சேர்ந்திடும்!”
          </p>
        </motion.div>
      </section>

      {/* 3. CONTENT DESCRIPTION */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg border border-orange-100/50"
        >
          <div className="space-y-8 text-gray-700 text-lg md:text-xl leading-loose font-medium text-justify md:text-left">
            <p className="relative">
              <span className="absolute -left-6 top-0 text-5xl text-orange-200 opacity-50">"</span>
              அருள்மிகு ஆதிபராசக்தி சித்தர் பீடத்தில் ஆடிப்பூரப் பெருவிழா என்பது அபரிமிதமான ஆன்மீக சக்தி நிறைந்த காலமாகும். உங்கள் சொந்தக் கைகளால் பால் அபிஷேகம் செய்வது எல்லையில்லா மகிழ்ச்சியைத் தரும் என்றாலும், சில நேரங்களில் தூரம், உடல்நலம் அல்லது வேலைப்பளு காரணமாக நம்மால் நேரில் வர முடிவதில்லை என்பதை நாங்கள் அறிவோம். உண்மையான பக்தி என்பது நேரில் இருப்பதை விட, இதயத்தின் தூய்மையால் அளவிடப்படுகிறது என்பதே அம்மா நமக்குக் கற்பிக்கும் பாடம்.
            </p>
            <p>
              எந்த ஒரு பக்தரும் இந்தப் புனிதமான வாய்ப்பைத் தவறவிடக் கூடாது என்பதற்காக, உங்கள் சார்பாகப் பால் அபிஷேகம் செய்யும் வசதியை நாங்கள் ஏற்படுத்தியுள்ளோம். காணிக்கை செலுத்துவதன் மூலம், <strong className="text-[#a7150b] bg-red-50 px-2 py-1 rounded">மதிப்பிற்குரிய திருமதி. அம்மா உங்கள் சார்பாகச் சுயம்புவுக்கு அபிஷேகம் செய்வார்கள்.</strong> உங்களின் பிரத்யேகப் பிரார்த்தனைகள் நேரடியாகக் கருவறைக்குக் கொண்டு செல்லப்படும்.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 4. PREMIUM STEPS GRID */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="w-10 h-10" />,
              title: 'பதிவு செய்க',
              description: 'எங்களின் பிரத்யேக இணையதளத்திற்குச் செல்லவும்.',
              gradient: 'from-blue-500 to-cyan-500',
              shadow: 'hover:shadow-blue-500/20'
            },
            {
              icon: <UserCheck className="w-10 h-10" />,
              title: 'விவரங்கள்',
              description: 'உங்கள் பெயர் மற்றும் நட்சத்திரத்தை உள்ளிடவும்.',
              gradient: 'from-emerald-500 to-green-500',
              shadow: 'hover:shadow-green-500/20'
            },
            {
              icon: <HeartHandshake className="w-10 h-10" />,
              title: 'பங்களிப்பு',
              description: 'பால் காணிக்கைக்கான பாதுகாப்பான கட்டணத்தைச் செலுத்தவும்.',
              gradient: 'from-orange-500 to-yellow-500',
              shadow: 'hover:shadow-orange-500/20'
            },
            {
              icon: <Sparkles className="w-10 h-10" />,
              title: 'ஆசீர்வாதம்',
              description: 'ஆடிப்பூர விழாவின் போது திருமதி அம்மா உங்கள் காணிக்கையை நிறைவேற்றுவார்கள்.',
              gradient: 'from-[#a7150b] to-red-600',
              shadow: 'hover:shadow-red-500/20'
            },
          ].map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${step.shadow} group`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${step.gradient} rounded-t-3xl opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="flex flex-col items-center text-center mt-4">
                <div className={`p-5 rounded-2xl mb-6 bg-gradient-to-br ${step.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 font-medium text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. GRAND DONATION CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-3xl shadow-[0_10px_40px_rgba(167,21,11,0.15)] p-10 md:p-14 overflow-hidden border border-[#a7150b]/20"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-orange-200 rounded-tl-3xl m-4"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-orange-200 rounded-br-3xl m-4"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              பக்தியால் தூரத்தைக் கடப்போம்.
            </h3>
            <p className="text-[#a7150b] font-bold text-xl mb-10">
              அம்மாவின் அருள் உங்கள் வாழ்வில் நிறையட்டும்.
            </p>
            
            <Link href="https://masm.omsakthiamma.in/donate/">
              <button className="relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#a7150b] to-[#7a0a06] rounded-full shadow-2xl hover:shadow-[#a7150b]/50 hover:-translate-y-1 overflow-hidden group">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative flex items-center gap-3">
                  காணிக்கை செலுத்த (Donate Now)
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}