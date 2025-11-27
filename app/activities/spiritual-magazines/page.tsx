// import PageTemplate from '@/components/PageTemplate';

// export default function SpiritualMagazinesPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Magazines"
//       subtitle="Sharing Divine Knowledge"
//       noTopPadding={false}
//       noContentTopPadding={true}
//       // imageSrc="/placeholder.svg?key=r4a8b"
//       content="One of the ways, the voice of The Divine Mother, the activities of the Peedam and the various houses reach the world is through different publications of the Peedam. Sakthi Oli is a monthly magazine that is circulated far and wide; Sakthi Maalai is a fortnightly publication enabling volunteers and Worshipping Centres to share information. Other books and publications form a source of information on personal experiences with The Peedam and Amma. One can subscribe to the various publications at the office in the Peedam.

// www.sakthioli.com"
//       // imageOnRight={true}
//     />
//   );
// }

"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import { motion } from "framer-motion";
import { BookOpen, Newspaper, Library, ExternalLink } from "lucide-react";

export default function SpiritualMagazinesPage() {
  return (
    <PageTemplate
      title="Spiritual Publications"
      subtitle="The Voice of the Divine Mother"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        
        {/* Intro */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-xl text-gray-700 leading-relaxed font-serif">
            "One of the ways the voice of The Divine Mother, the activities of the Peedam, and the various houses reach the world is through the different publications of the Peedam."
          </p>
        </motion.div>

        {/* Magazines Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sakthi Oli */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-[#a7150b] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-50 rounded-full text-[#a7150b]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Sakthi Oli</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              A <strong>monthly magazine</strong> that is circulated far and wide, carrying the divine messages and activities of the Peedam to devotees everywhere.
            </p>
          </motion.div>

          {/* Sakthi Maalai */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-50 rounded-full text-orange-500">
                <Newspaper className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Sakthi Maalai</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              A <strong>fortnightly publication</strong> enabling volunteers and Worshipping Centres to share information and stay connected with the movement's pulse.
            </p>
          </motion.div>
        </div>

        {/* Other Publications & Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-1 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-gray-500 font-semibold uppercase tracking-wider text-sm">
              <Library className="w-4 h-4" />
              <span>Resources</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Books & Subscriptions</h3>
            <p className="text-gray-600 leading-relaxed">
              Other books and publications form a source of information on personal experiences with The Peedam and Amma. One can subscribe to the various publications at the office in the Peedam.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <a 
              href="http://www.sakthioli.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#a7150b] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-700 transition-colors"
            >
              Visit Sakthi Oli <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-center text-gray-400 text-sm mt-3">www.sakthioli.com</p>
          </div>
        </motion.div>

      </div>
    </PageTemplate>
  );
}