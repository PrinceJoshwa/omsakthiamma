"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import MantraPlayer from "@/components/MantraPlayer";
import { mantrasAudioFolder } from "@/lib/mantraData";
import { motion } from "framer-motion";

export default function MantrasAudioPage() {
  return (
    <PageTemplate
      title="Mantras Audio"
      subtitle="Listen to divine mantras and spiritual chants"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-16 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-[#a7150b] mb-6"
        >
          {mantrasAudioFolder.folderName}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {mantrasAudioFolder.songs.length > 0 ? (
            mantrasAudioFolder.songs.map((song, index) => (
              <motion.div
                key={song.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <MantraPlayer
                  title={song.title}
                  src={song.url}
                  duration={song.duration}
                  lightMode={true}
                />
              </motion.div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No mantras uploaded yet.
            </p>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}
