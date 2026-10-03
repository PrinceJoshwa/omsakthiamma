"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search } from "lucide-react";

const groceryList = [
  { id: 1, name: "வெல்லம்", unit: "750 kg" },
  { id: 2, name: "சர்க்கரை", unit: "750 kg" },
  { id: 3, name: "பச்சரிசி", unit: "2650 kg" },
  { id: 4, name: "புழுங்கல் அரிசி", unit: "6735 kg" },
  { id: 5, name: "துவரம் பருப்பு", unit: "2286 kg" },
  { id: 6, name: "பாசி பருப்பு", unit: "970 kg" },
  { id: 7, name: "கடலை பருப்பு", unit: "312 kg" },
  { id: 8, name: "உளுந்து", unit: "601 kg" },
  { id: 9, name: "கருப்பு மூக்கடலை", unit: "470 kg" },
  { id: 10, name: "வெள்ளை மூக்கடலை", unit: "210 kg" },
  { id: 11, name: "பச்சை பட்டாணி", unit: "245 kg" },
  { id: 12, name: "வெள்ளை பட்டாணி", unit: "80 kg" },
  { id: 13, name: "நிலக்கடலை", unit: "30 kg" },
  { id: 14, name: "சிகப்பு காராமணி", unit: "30 kg" },
  { id: 15, name: "வெள்ளை காராமணி", unit: "30 kg" },
  { id: 16, name: "மொச்சை", unit: "160 kg" },
  { id: 17, name: "பச்சை பயிறு", unit: "85 kg" },
  { id: 18, name: "பொட்டுக்கடலை", unit: "89 kg" },
  { id: 19, name: "மீல் மேக்கர் (சோயா)", unit: "156 kg" },
  { id: 20, name: "ஆயில் tin", unit: "124 tins" },
  { id: 21, name: "நெய் tin", unit: "10 tins" },
  { id: 22, name: "நெய் litres", unit: "30 lit" },
  { id: 23, name: "நல்லெண்ணெய் tin", unit: "6 tins" },
  { id: 24, name: "பெருங்காயம் (தூள்)", unit: "10 kg" },
  { id: 25, name: "பெருங்காயம் (கட்டி)", unit: "7.4 kg" },
  { id: 26, name: "ரவை", unit: "670 kg" },
  { id: 29, name: "முந்திரி", unit: "80 kg" },
  { id: 30, name: "சம்பா ரவை", unit: "250 kg" },
  { id: 31, name: "சேமியா", unit: "130 kg" },
  { id: 32, name: "கடுகு", unit: "30 kg" },
  { id: 33, name: "வெந்தயம்", unit: "5 kg" },
  { id: 34, name: "சிக்கன் மசாலா", unit: "15 kg" },
  { id: 35, name: "மட்டன் மசாலா", unit: "15 kg" },
  { id: 36, name: "கரம் மசாலா", unit: "5 kg" },
  { id: 37, name: "மல்லி தூள்", unit: "8 kg" },
  { id: 38, name: "குழம்பு மிளகாய் தூள்", unit: "199 kg" },
  { id: 39, name: "மஞ்சள் தூள்", unit: "10 kg" },
  { id: 40, name: "காய்ந்த மிளகாய்", unit: "75 kg" },
  { id: 41, name: "புளி", unit: "408 kg" },
  { id: 42, name: "பூண்டு", unit: "150 kg" },
  { id: 43, name: "தனியா", unit: "150 kg" },
  { id: 44, name: "கோதுமை மாவு", unit: "120 kg" },
  { id: 45, name: "வத்தல்", unit: "24 kg" },
  { id: 46, name: "சோம்பு", unit: "15 kg" },
  { id: 47, name: "சீரகம்", unit: "68 kg" },
  { id: 48, name: "மிளகு", unit: "68 kg" },
];

export default function AnnadhanamBanner() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = groceryList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto p-4 md:p-8 font-sans">
      <div className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col">
        
        {/* CENTERED HEADER */}
        <div className="p-8 md:p-10 flex flex-col items-center justify-center text-center w-full" style={{ backgroundColor: "#a7150b" }}>
          <div 
            className="inline-block px-4 py-1.5 mb-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm" 
            style={{ backgroundColor: "#ffc107", color: "#a7150b" }}
          >
            ISO & EATRIGHT CERTIFIED
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white tracking-tight">
            நவராத்திரி விழா 2026
          </h1>
          <p className="font-medium text-lg md:text-xl mb-6" style={{ color: "#ffc107" }}>
            சமையலுக்கு பயன்படும் மளிகை பொருட்களின் விபரம்
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium text-white/90">
            <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <MapPin size={18} style={{ color: "#ffc107" }} />
              <span>GST Road, Melmaruvathur</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-lg backdrop-blur-sm">
              <Calendar size={18} style={{ color: "#ffc107" }} />
              <span>29.09.2026</span>
            </div>
          </div>
        </div>

        {/* CONTENT SPLIT: LEFT IMAGE, RIGHT LIST */}
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
          
          {/* Left Column: Image - FIXED WRAPPER */}
{/* Left Column: Image - FIXED WRAPPER */}
          <div className="relative bg-gray-50 flex items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-gray-100 h-[600px]">
            <div className="w-full h-full bg-white rounded-xl shadow-sm border border-gray-200 p-2 flex items-center justify-center overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1791011572/WhatsApp_Image_2026-09-29_at_8.08.59_PM_mjqpux.jpg" 
                alt="Annadhanam Original Document" 
                // Changed from object-fill to object-contain
                className="object-contain w-full h-full rounded-xl"
              />
            </div>
          </div>

          {/* Right Column: Scrollable List */}
          <div className="flex flex-col h-[600px]">
            
            {/* Search Sticky Header */}
            <div className="p-5 bg-white border-b border-gray-100 flex-shrink-0 z-10 shadow-sm">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="பொருட்களை தேட..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none transition-all"
                  style={{ 
                    boxShadow: searchTerm ? "0 0 0 2px rgba(167, 21, 11, 0.1)" : "",
                    borderColor: searchTerm ? "#a7150b" : "" 
                  }}
                />
              </div>
            </div>

            {/* Tight Scroll Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar bg-gray-50/50">
              {filteredList.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.01 }}
                  key={item.id}
                  className="flex items-center justify-between p-3.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-red-100 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span 
                      className="flex items-center justify-center w-8 h-8 rounded-lg text-xs font-bold transition-colors"
                      style={{ backgroundColor: "rgba(167, 21, 11, 0.05)", color: "#a7150b" }}
                    >
                      {item.id}
                    </span>
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                      {item.name}
                    </span>
                  </div>
                  <span 
                    className="font-bold px-3 py-1 rounded-md text-sm border"
                    style={{ 
                      backgroundColor: "rgba(255, 193, 7, 0.1)", 
                      color: "#a7150b",
                      borderColor: "rgba(255, 193, 7, 0.3)" 
                    }}
                  >
                    {item.unit}
                  </span>
                </motion.div>
              ))}
              
              {filteredList.length === 0 && (
                <div className="h-full flex items-center justify-center text-gray-400 font-medium pb-10">
                  பொருட்களை தேட... (No items found)
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: #a7150b;
        }
      `}} />
    </div>
  );
}