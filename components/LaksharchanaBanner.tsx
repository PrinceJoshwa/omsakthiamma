"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, Heart } from "lucide-react";

export default function NavarathriLaksharchanaBanner() {
  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col">
        
        {/* CENTERED HEADER */}
        <div className="p-8 md:p-10 flex flex-col items-center justify-center text-center w-full" style={{ backgroundColor: "#a7150b" }}>
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm" 
            style={{ backgroundColor: "#ffc107", color: "#a7150b" }}
          >
            <Sparkles size={14} />
            ஓம் சக்தி அருள்மிகு ஆதிபராசக்தி திருக்கோயில்
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">
            மேல்மருவத்தூரில் நவராத்திரியில் நடைபெறும் லட்சார்ச்சனை..
          </h1>
          <p className="font-medium text-lg md:text-xl mb-6" style={{ color: "#ffc107" }}>
            சிறப்பு வழிபாட்டு விவரங்கள்
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-white/90">
            <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <MapPin size={18} style={{ color: "#ffc107" }} />
              <span>Melmaruvathur</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Calendar size={18} style={{ color: "#ffc107" }} />
              <span>Navaratri 2026</span>
            </div>
          </div>
        </div>

        {/* CONTENT SPLIT: LEFT IMAGE, RIGHT INSTRUCTION CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
          
          {/* Left Column: Official Poster Display */}
          <div className="relative bg-gray-50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-gray-100">
            <div className="w-full h-full min-h-[500px] bg-white rounded-xl shadow-sm border border-gray-200 p-2 flex items-center justify-center overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1791006728/WhatsApp_Image_2026-10-01_at_2.48.21_PM_baslnr.jpg" 
                alt="Navarathri Laksharchana Notice" 
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Displaying the 4 Sacred Options */}
          <div className="flex flex-col p-6 md:p-8 bg-gray-50/50 justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5" style={{ color: "#a7150b" }} />
                லட்சார்ச்சனை சிறப்பு சங்கல்ப விவரங்கள்:
              </h2>

              <div className="space-y-4">
                {[
                  {
                    num: "1",
                    title: "உங்கள் குலதெய்வத்தின் பெயரிலும் லட்சார்ச்சனை செய்யலாம்!",
                    desc: "உங்கள் குலதெய்வத்தின் அருள் பெற குடும்பத்துடன் பெயர் குறிப்பிட்டு அர்ச்சனை."
                  },
                  {
                    num: "2",
                    title: "உங்கள் முன்னோர்களின் பெயர்களிலும் லட்சார்ச்சனை செய்யலாம்!",
                    desc: "மூதாதையர்களின் ஆன்மா சாந்தி பெறவும், அவர்களின் ஆசி கிட்டவும் வழிவகை."
                  },
                  {
                    num: "3",
                    title: "உங்கள் சொத்துக்களின் பெயரிலும் லட்சார்ச்சனை செய்யலாம்! (பட்டா எண் குறிப்பிட்டு)",
                    desc: "சொத்து தொடர்பான தடைகள் நீங்கி சுபிட்சம் பெற்றிட."
                  },
                  {
                    num: "4",
                    title: "உங்களின் வாகனங்களின் பெயரிலும் லட்சார்ச்சனை செய்யலாம்! (பதிவு எண் குறிப்பிட்டு)",
                    desc: "வாகன பாதுகாப்பு மற்றும் நல்வழிப் பயணத்திற்காக."
                  }
                ].map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.num}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-red-100 transition-all group"
                  >
                    <span 
                      className="flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(167, 21, 11, 0.1)", color: "#a7150b" }}
                    >
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-gray-800 text-sm md:text-base group-hover:text-[#a7150b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* External Donation Portal Link CTA */}
            <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-gray-500 font-medium">நன்கொடை / பங்களிப்பு செலுத்த:</span>
              <a 
                href="https://masm.omsakthiamma.in/donate-laksh/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold underline px-4 py-2 rounded-lg text-white transition-all shadow-sm hover:opacity-95"
                style={{ backgroundColor: "#a7150b" }}
              >
                Donate Here!
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}