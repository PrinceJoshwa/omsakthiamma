'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Globe2, Users, MapPin, ScrollText, Calendar, Medal } from 'lucide-react';

export default function ShreeChakraWorldRecord() {
  const stats = [
    { icon: Users, count: '9,800+', label: 'செவ்வாடை பக்தர்கள்', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Globe2, count: '19', label: 'நாடுகள்', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: MapPin, count: '10', label: 'இந்திய மாநிலங்கள்', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Award, count: '3', label: 'உலக சாதனைகள்', color: 'text-yellow-600', bg: 'bg-yellow-50' },
  ];

  const pastRecords = [
    { year: '2022', body: 'India Book of Records', category: 'Longest continuous online spiritual chanting' },
    { year: '2023', body: 'World Records Union™', category: 'Largest virtual spiritual text recital' },
    { year: '2023', body: 'Guinness World Records', category: 'Most people watering plants simultaneously' },
    { year: '2024', body: 'World Records Union™', category: 'Highest number of spiritual text recitations' },
    { year: '2025', body: 'World Records Union™', category: 'Most miracle testimonies collected' },
  ];

  return (
    <main className="bg-white overflow-x-hidden pt-24 pb-16">
{/* 1. HERO SECTION (UPDATED: Text Left, Image Right) */}
      <section className="relative w-full bg-gradient-to-b from-orange-50 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat mix-blend-multiply"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="px-6 py-2 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wider uppercase mb-6 inline-block shadow-sm">
                Mupperum Ulaga Sadanai
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a1a1a] mb-6 leading-tight">
                Drawing the Shree Chakra <br />
                <span className="text-[#a7150b]">World Record</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8">
                மேல்மருவத்தூர் ஆதிபராசக்தி செவ்வாடை பக்தர்கள் உலக நன்மைக்காக ஶ்ரீசக்கரம் வரைந்து மூலமந்திரம் எழுதி, குரு போற்றி கோடி அர்ச்சனை சிறப்பு வழிபாடு செய்து உலக சாதனை படைத்துள்ளனர்.
              </p>
            </motion.div>

            {/* Right Column: Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[350px] md:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image 
                src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772860679/WhatsApp_Image_2026-03-06_at_2.39.02_PM_axzonu.jpg" 
                alt="Devotees drawing Shree Chakra"
                fill
                className="object-fill"
                priority
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`p-4 rounded-full ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{stat.count}</h3>
              <p className="text-sm md:text-base font-bold text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT THE EVENT (TAMIL CONTENT) */}
      <section className="max-w-5xl mx-auto px-4 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-orange-50/50 p-8 md:p-12 rounded-3xl border border-orange-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <ScrollText className="text-[#a7150b] w-8 h-8" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">நிகழ்வின் சிறப்பம்சங்கள்</h2>
          </div>
          <div className="space-y-6 text-gray-700 leading-loose text-base md:text-lg text-justify font-medium">
            <p>
              மேல்மருவத்தூர் ஆதிபராசக்தி சித்தர் பீட ஆன்மிக குரு அருள்மிகு பங்காரு அடிகளார் அம்மா அவர்களின் 86வது அவதார பெருமங்கல விழாவை முன்னிட்டு மேல்மருவத்தூர் ஆதிபராசக்தி ஆன்மிக இயக்க தலைவர் திருமதி. லட்சுமி பங்காரு அடிகளார் அம்மா அவர்கள் தலைமையில் உலக நன்மை வேண்டி சிறப்பு சங்கல்பம் நடைபெற்றது.
            </p>
            <p>
              ஆன்மிக இயக்க துணை தலைவர் முனைவர். ஸ்ரீதேவி பங்காரு அவர்கள் துவக்கி வைத்து வாழ்த்துரை வழங்கிய இந்த சிறப்பான நிகழ்வில், அமெரிக்கா, இலங்கை, மலேசியா, ஐக்கிய அரபு நாடுகள் (அபுதாபி, ஷார்ஜா), சிங்கப்பூர், சுவிட்சர்லாந்து, பிரான்ஸ், கனடா, ஆஸ்திரேலியா உள்ளிட்ட 19 நாடுகளைச் சேர்ந்த பக்தர்களும், இந்தியாவின் 10 மாநிலங்கள் மற்றும் தமிழ்நாட்டின் அனைத்து மாவட்டங்களைச் சார்ந்த பக்தர்களும் நேரிலும் இணையத்திலும் ஒருங்கிணைந்து பங்கேற்றனர்.
            </p>
            <p>
              9,800 செவ்வாடை பக்தர்கள் மிகுந்த ஆர்வத்துடன் கலந்து கொண்டு ஸ்ரீசக்கரம் வரைந்து, மூலமந்திரம் எழுதி, குரு போற்றி மந்திரத்தை ஒரு கோடி முறைக்கும் மேலாக படித்து உலக சாதனை நிகழ்த்தினர். அதிகாரப்பூர்வ தீர்ப்பாளர், ஐரோப்பாவைச் சேர்ந்த திருமதி. அலிஸ் ரெனோ பங்கேற்று உலக சாதனை பதக்கங்கள் மற்றும் விருதுகளை திருமதி. அம்மா அவர்களின் திருக்கரங்களில் வழங்கி கௌரவித்தார்.
            </p>
            <div className="mt-8 p-4 bg-white border-l-4 border-[#a7150b] rounded-r-lg shadow-sm">
              <p className="text-sm italic text-gray-600">
                <span className="font-bold text-[#a7150b]">குறிப்பு:</span> 15.10.2023 அன்றைய நவராத்திரி அருள்வாக்கில் அருட்பெருந்தெய்வம் பங்காரு அடிகளார் அம்மா அவர்கள் இட்ட அருளாணையின் வண்ணம் இந்த உலக சாதனை நிகழ்வு நடைபெற்றது என்பது குறிப்பிடத்தக்கது.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. THE 3 WORLD RECORDS & CERTIFICATES */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">Official World Records</h2>
          <p className="text-gray-600">Recognized by World Records Union & Asia Book of Records on March 3, 2026</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Most People Simultaneously Drawing the Sri Chakra",
              authority: "World Records Union",
              desc: "8,822 participants across 258 locations collectively created the sacred diagram in unison.",
              img: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704445/WhatsApp_Image_2026-03-05_at_10.44.59_AM_1_hmj7vr.jpg" 
            },
            {
              title: "Largest Simultaneous Virtual Recital",
              authority: "Asia Book of Records",
              desc: "Devotees from multiple locations joined virtually to chant the sacred GuruPotri 108 Mantra.",
              img: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704434/WhatsApp_Image_2026-03-05_at_10.44.59_AM_2_tlv38j.jpg" 
            },
            {
              title: "Most People Simultaneously Writing a Spiritual Text",
              authority: "World Records Union",
              desc: "8,822 participants across 258 locations transcribed the sacred text in unison.",
              img: "https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704445/WhatsApp_Image_2026-03-05_at_10.44.59_AM_1_hmj7vr.jpg" 
            },
          ].map((record, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-72 w-full bg-gray-50 p-4">
                {/* Note: Update these Image URLs with your actual local or Cloudinary paths */}
                <Image 
                  src={record.img}
                  alt={record.title}
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between border-t border-gray-100">
                <div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full mb-4 inline-block">
                    {record.authority}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{record.title}</h3>
                  <p className="text-gray-600 text-sm">{record.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. EVENT GALLERY / HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
         <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative h-96 rounded-2xl overflow-hidden shadow-lg group"
            >
               <Image 
                  src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704439/WhatsApp_Image_2026-03-05_at_10.44.59_AM_3_keicjr.jpg" 
                  alt="Award Ceremony with Amma" 
                  fill 
                  className="object-fill group-hover:scale-105 transition-transform duration-700" 
               />
            </motion.div>
            <div className="grid grid-rows-2 gap-6">
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative h-full rounded-2xl overflow-hidden shadow-lg group"
               >
                  <Image 
                     src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704459/WhatsApp_Image_2026-03-05_at_10.44.57_AM_qnbh5k.jpg" 
                     alt="Devotees writing" 
                     fill 
                     className="object-fill group-hover:scale-105 transition-transform duration-700" 
                  />
               </motion.div>
               <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative h-full rounded-2xl overflow-hidden shadow-lg group"
               >
                  <Image 
                     src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1772704439/WhatsApp_Image_2026-03-05_at_10.44.57_AM1_x09ubc.jpg" 
                     alt="Receiving the Award" 
                     fill 
                     className="object-fill group-hover:scale-105 transition-transform duration-700" 
                  />
               </motion.div>
            </div>
         </div>
      </section>

      {/* 6. HISTORICAL RECORDS TABLE */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <Medal className="w-12 h-12 text-[#a7150b] mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">MASM Spiritual Milestones</h2>
          <p className="text-gray-600 mt-2">A legacy of global spiritual impact from 2022 to 2025.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-4 font-bold text-gray-900">Year</th>
                  <th className="p-4 font-bold text-gray-900">Record Body</th>
                  <th className="p-4 font-bold text-gray-900">Category</th>
                </tr>
              </thead>
              <tbody>
                {pastRecords.map((record, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50/30 transition-colors">
                    <td className="p-4 text-gray-700 font-semibold">{record.year}</td>
                    <td className="p-4 text-gray-700">{record.body}</td>
                    <td className="p-4 text-gray-600">{record.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}