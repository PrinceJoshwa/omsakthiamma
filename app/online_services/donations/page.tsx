"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Copy, 
  Check, 
  Heart, 
  Droplet, 
  Moon, 
  Sun, 
  Gem, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  CreditCard,
  Mail,
  Utensils,
  Stethoscope,
  Users,
  CreditCard as BankIcon
} from "lucide-react";

// --- DATA STRUCTURES ---

const generalDonations = [
  { name: "General Donation", href: "https://masm.omsakthiamma.in/donate/", icon: <Heart className="w-8 h-8" />, color: "text-red-500", bg: "bg-red-50" },
  { name: "Daily Abhishegam", href: "https://masm.omsakthiamma.in/donate-abhisegam/", icon: <Droplet className="w-8 h-8" />, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Pournami Velaku Pooja", href: "https://masm.omsakthiamma.in/donate-other/?c=VELAKU", icon: <Moon className="w-8 h-8" />, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "Ammavasai Veli", href: "https://masm.omsakthiamma.in/donate-other/?c=A7", icon: <Sun className="w-8 h-8" />, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Golden Chariot", href: "https://masm.omsakthiamma.in/donate-other/?c=GCP", icon: <Gem className="w-8 h-8" />, color: "text-amber-600", bg: "bg-amber-50" },
  { name: "Silver Chariot", href: "https://masm.omsakthiamma.in/donate-other/?c=SIC", icon: <Sparkles className="w-8 h-8" />, color: "text-gray-400", bg: "bg-gray-50" },
  { name: "Lakcharchanai", href: "https://masm.omsakthiamma.in/donate-laksh/", icon: <BookOpen className="w-8 h-8" />, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Chitrapournami", href: "https://masm.omsakthiamma.in/donate-chitrapournami/", icon: <Moon className="w-8 h-8" />, color: "text-indigo-500", bg: "bg-indigo-50" },
  { name: "Navaratri Kappu", href: "https://masm.omsakthiamma.in/donate-navaratri/", icon: <ShieldCheck className="w-8 h-8" />, color: "text-red-600", bg: "bg-red-50" },
  { name: "Online Irumudi", href: "https://www.acmectrust.org/online-darshan/", icon: <CreditCard className="w-8 h-8" />, color: "text-green-600", bg: "bg-green-50" }
];

const taxExemptDonations = [
  { name: "Annadhanam (80G)", href: "https://aspwct.omsakthiamma.in/", icon: <Utensils className="w-6 h-6" />, desc: "Feeding the hungry" },
  { name: "Hospital Donations (80G)", href: "https://acmectrust.org/", icon: <Stethoscope className="w-6 h-6" />, desc: "Medical aid for the poor" },
  { name: "Women Welfare (80G)", href: "https://acmectrust.org/", icon: <Users className="w-6 h-6" />, desc: "Empowering women" }
];


// --- ANIMATION VARIANTS ---

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function PoojasDonationsPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">

      {/* --- HEADER SECTION --- */}
      <div className="bg-[#a7150b] text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Sacred Offerings</h1>
          <p className="text-lg md:text-xl text-red-100/90 leading-relaxed font-light">
            Your contributions sustain the spiritual and charitable activities of the Peedam.
          </p>
        </motion.div>
      </div>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 relative z-20">

        {/* 1. SACRED OFFERINGS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24"
        >
          {generalDonations.map((item, index) => (
            
            <a 
              key={index}
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-pointer border border-gray-100 hover:border-gray-200"
              >
                <div className={`p-4 rounded-full mb-6 transition-colors duration-300 ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-gray-800 font-bold text-sm md:text-base group-hover:text-[#a7150b] transition-colors">
                  {item.name}
                </h3>
              </motion.div>
            </a>
          
          ))}
        </motion.div>



        {/* 2. BANK DETAILS SECTION */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* RTGS / NEFT CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-red-50 p-3 rounded-full text-[#a7150b]">
                <BankIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-serif">Bank Transfer</h2>
            </div>

            <div className="space-y-5">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex justify-between items-center group">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Account Number</p>
                  <p className="text-lg md:text-xl font-mono font-bold text-gray-800 tracking-wide">1760163000001158</p>
                </div>
                <button 
                  onClick={() => handleCopy("1760163000001158", "acc")}
                  className="p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-[#a7150b] transition-colors"
                >
                  {copiedField === "acc" ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 flex justify-between items-center group">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">IFSC Code</p>
                  <p className="text-lg md:text-xl font-mono font-bold text-gray-800 tracking-wide">KVBL0001760</p>
                </div>
                <button 
                  onClick={() => handleCopy("KVBL0001760", "ifsc")}
                  className="p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-[#a7150b] transition-colors"
                >
                  {copiedField === "ifsc" ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 pt-2">
                <div>
                  <p className="font-bold text-gray-900">Bank Name</p>
                  <p>Karur Vysya Bank</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Branch</p>
                  <p>Achiyarppakkam</p>
                </div>
              </div>

              <div className="mt-4 pt-6 border-t border-gray-100">
                <div className="flex gap-3 items-start text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p>
                    After transfer, kindly email transaction details to <strong className="text-blue-700">aspwct@gmail.com</strong>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>




          {/* CHEQUE / DRAFT CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gray-100 p-3 rounded-full text-gray-700">
                <span className="font-serif font-bold text-lg">DD</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 font-serif">Cheque / Draft</h2>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Please draw cheques or drafts in favour of <span className="font-bold text-black bg-yellow-100 px-2 py-0.5 rounded">"MASM"</span>, payable at <span className="font-bold text-black">Chennai</span>.
            </p>

            <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300">
              <p className="text-xs text-gray-400 uppercase font-bold mb-3 tracking-wider">Mailing Address</p>
              <p className="font-medium text-gray-800 leading-7">
                Melmaruvathur Adhiparasakthi Spiritual Movement,<br/>
                ARULMIGU ADHIPARASAKTHI SIDDHAR PEEDAM,<br/>
                Melmaruvathur - 603 319,<br/>
                Chengalpattu District, Tamil Nadu, India.
              </p>
            </div>
          </motion.div>

        </div>




        {/* 3. 80G TAX EXEMPTION SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-orange-500 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-red-600 opacity-20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 font-serif">Tax Exempt Contributions (80G)</h2>

            <div className="grid md:grid-cols-3 gap-6">

              {taxExemptDonations.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                    <div className="mb-4 inline-flex p-4 bg-white/10 rounded-full text-orange-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </a>
              ))}

            </div>

            <p className="mt-10 text-sm text-gray-400 max-w-2xl mx-auto">
              Donations made towards these specific causes are eligible for tax exemption under Section 80G of the Income Tax Act.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
