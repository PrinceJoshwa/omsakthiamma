// // // 'use client';

// // // import React, { useState } from 'react';
// // // import PageTemplate from '@/components/PageTemplate';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // import { Folder, ChevronDown, ChevronUp, Music, PlayCircle } from 'lucide-react';
// // // import MantraPlayer from '@/components/MantraPlayer';
// // // import { mantraCollection } from '@/lib/mantraData';

// // // export default function AllMantrasPage() {
// // //   const [openFolderId, setOpenFolderId] = useState<string | null>(null);

// // //   const toggleFolder = (id: string) => {
// // //     setOpenFolderId(openFolderId === id ? null : id);
// // //   };

// // //   return (
// // //     <PageTemplate
// // //       title="Mantra Library"
// // //       subtitle="Complete Collection of Divine Songs"
// // //       noTopPadding={true}
// // //       noContentTopPadding={true}
// // //     >
// // //       <div className="max-w-5xl mx-auto px-4 py-16 min-h-screen bg-gray-50">
        
// // //         <div className="space-y-4">
// // //           {mantraCollection.map((folder, index) => (
// // //             <motion.div
// // //               key={folder.id}
// // //               initial={{ opacity: 0, y: 10 }}
// // //               animate={{ opacity: 1, y: 0 }}
// // //               transition={{ delay: index * 0.05 }}
// // //               className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
// // //             >
// // //               {/* Folder Header */}
// // //               <button
// // //                 onClick={() => toggleFolder(folder.id)}
// // //                 className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
// // //                   openFolderId === folder.id ? 'bg-red-50/50' : 'hover:bg-gray-50'
// // //                 }`}
// // //               >
// // //                 <div className="flex items-center gap-5">
// // //                   {/* Folder Icon */}
// // //                   <div className={`p-3 rounded-lg ${openFolderId === folder.id ? 'bg-[#a7150b] text-white' : 'bg-gray-100 text-gray-500'}`}>
// // //                     <Folder className="w-6 h-6" />
// // //                   </div>
                  
// // //                   <div>
// // //                     <h3 className={`text-lg font-bold ${openFolderId === folder.id ? 'text-[#a7150b]' : 'text-gray-800'}`}>
// // //                       {folder.folderName}
// // //                     </h3>
// // //                     <p className="text-sm text-gray-500 mt-1">{folder.description}</p>
// // //                   </div>
// // //                 </div>
                
// // //                 <div className={`p-2 rounded-full ${openFolderId === folder.id ? 'bg-white text-[#a7150b] shadow-sm' : 'text-gray-400'}`}>
// // //                   {openFolderId === folder.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
// // //                 </div>
// // //               </button>

// // //               {/* Folder Content (Songs List) */}
// // //               <AnimatePresence>
// // //                 {openFolderId === folder.id && (
// // //                   <motion.div
// // //                     initial={{ height: 0, opacity: 0 }}
// // //                     animate={{ height: "auto", opacity: 1 }}
// // //                     exit={{ height: 0, opacity: 0 }}
// // //                     transition={{ duration: 0.3 }}
// // //                     className="border-t border-gray-100 bg-gray-50/30"
// // //                   >
// // //                     <div className="p-6 grid gap-4 md:grid-cols-2">
// // //                       {folder.songs.length > 0 ? (
// // //                         folder.songs.map((song) => (
// // //                           <div key={song.id}>
// // //                              <MantraPlayer 
// // //                                title={song.title} 
// // //                                src={song.url} 
// // //                                duration={song.duration} 
// // //                                lightMode={true}
// // //                              />
// // //                           </div>
// // //                         ))
// // //                       ) : (
// // //                         <div className="col-span-full text-center py-10 text-gray-400 flex flex-col items-center">
// // //                           <Music className="w-10 h-10 mb-2 opacity-30" />
// // //                           <p>No songs uploaded yet.</p>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   </motion.div>
// // //                 )}
// // //               </AnimatePresence>

// // //             </motion.div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </PageTemplate>
// // //   );
// // // }

// // 'use client';

// // import React, { useState } from 'react';
// // import PageTemplate from '@/components/PageTemplate';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Folder, ChevronDown, ChevronUp, Music } from 'lucide-react';
// // import MantraPlayer from '@/components/MantraPlayer';
// // import { mantraCollection } from '@/lib/mantraData';

// // export default function AllMantrasPage() {
// //   const [openFolderId, setOpenFolderId] = useState<string | null>(null);

// //   const toggleFolder = (id: string) => {
// //     setOpenFolderId(openFolderId === id ? null : id);
// //   };

// //   return (
// //     <PageTemplate
// //       title="Mantra Library"
// //       subtitle="Complete Collection of Divine Songs"
// //       noTopPadding={true}
// //       noContentTopPadding={true}
// //     >
// //       <div className="max-w-6xl mx-auto px-4 py-16 min-h-screen bg-gray-50">
        
// //         <div className="space-y-4">
// //           {mantraCollection.map((folder, index) => (
// //             <motion.div
// //               key={folder.id}
// //               initial={{ opacity: 0, y: 10 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: index * 0.05 }}
// //               className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
// //             >
// //               {/* Folder Header */}
// //               <button
// //                 onClick={() => toggleFolder(folder.id)}
// //                 className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
// //                   openFolderId === folder.id ? 'bg-red-50/50' : 'hover:bg-gray-50'
// //                 }`}
// //               >
// //                 <div className="flex items-center gap-5">
// //                   <div className={`p-3 rounded-lg ${openFolderId === folder.id ? 'bg-[#a7150b] text-white' : 'bg-gray-100 text-gray-500'}`}>
// //                     <Folder className="w-6 h-6" />
// //                   </div>
                  
// //                   <div>
// //                     <h3 className={`text-lg font-bold ${openFolderId === folder.id ? 'text-[#a7150b]' : 'text-gray-800'}`}>
// //                       {folder.folderName}
// //                     </h3>
// //                     <p className="text-sm text-gray-500 mt-1 hidden md:block">{folder.description}</p>
// //                   </div>
// //                 </div>
                
// //                 <div className={`p-2 rounded-full ${openFolderId === folder.id ? 'bg-white text-[#a7150b] shadow-sm' : 'text-gray-400'}`}>
// //                   {openFolderId === folder.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
// //                 </div>
// //               </button>

// //               {/* Folder Content */}
// //               <AnimatePresence>
// //                 {openFolderId === folder.id && (
// //                   <motion.div
// //                     initial={{ height: 0, opacity: 0 }}
// //                     animate={{ height: "auto", opacity: 1 }}
// //                     exit={{ height: 0, opacity: 0 }}
// //                     transition={{ duration: 0.3 }}
// //                     className="border-t border-gray-100 bg-gray-50/30"
// //                   >
// //                     <div className="p-6 grid gap-4 md:grid-cols-2">
// //                       {folder.songs.length > 0 ? (
// //                         folder.songs.map((song) => (
// //                           <div key={song.id}>
// //                              <MantraPlayer 
// //                                title={song.title} 
// //                                src={song.url} 
// //                                duration={song.duration} 
// //                                lightMode={true}
// //                              />
// //                           </div>
// //                         ))
// //                       ) : (
// //                         <div className="col-span-full text-center py-10 text-gray-400 flex flex-col items-center">
// //                           <Music className="w-10 h-10 mb-2 opacity-30" />
// //                           <p>No songs uploaded yet.</p>
// //                         </div>
// //                       )}
// //                     </div>
// //                   </motion.div>
// //                 )}
// //               </AnimatePresence>

// //             </motion.div>
// //           ))}
// //         </div>

// //       </div>
// //     </PageTemplate>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import PageTemplate from "@/components/PageTemplate";
// import { motion, AnimatePresence } from "framer-motion";
// import { Folder, ChevronDown, ChevronUp, Music } from "lucide-react";
// import MantraPlayer from "@/components/MantraPlayer";
// import { devotionalSongsFolder } from "@/lib/mantraData";

// export default function AllDevotionalSongsPage() {
//   const [openFolderId, setOpenFolderId] = useState<string | null>(null);

//   const toggleFolder = (id: string) => {
//     setOpenFolderId(openFolderId === id ? null : id);
//   };

//   return (
//     <PageTemplate
//       title="Devotional Songs"
//       subtitle="Complete Collection of Devotional Songs"
//       noTopPadding={true}
//       noContentTopPadding={true}
//     >
//       <div className="max-w-6xl mx-auto px-4 py-16 min-h-screen bg-gray-50">
//         <div className="space-y-4">
//           {[devotionalSongsFolder].map((folder, index) => (
//             <motion.div
//               key={folder.id}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
//             >
//               {/* Folder Header */}
//               <button
//                 onClick={() => toggleFolder(folder.id)}
//                 className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
//                   openFolderId === folder.id
//                     ? "bg-red-50/50"
//                     : "hover:bg-gray-50"
//                 }`}
//               >
//                 <div className="flex items-center gap-5">
//                   <div
//                     className={`p-3 rounded-lg ${
//                       openFolderId === folder.id
//                         ? "bg-[#a7150b] text-white"
//                         : "bg-gray-100 text-gray-500"
//                     }`}
//                   >
//                     <Folder className="w-6 h-6" />
//                   </div>

//                   <div>
//                     <h3
//                       className={`text-lg font-bold ${
//                         openFolderId === folder.id
//                           ? "text-[#a7150b]"
//                           : "text-gray-800"
//                       }`}
//                     >
//                       {folder.folderName}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1 hidden md:block">
//                       {folder.description}
//                     </p>
//                   </div>
//                 </div>

//                 <div
//                   className={`p-2 rounded-full ${
//                     openFolderId === folder.id
//                       ? "bg-white text-[#a7150b] shadow-sm"
//                       : "text-gray-400"
//                   }`}
//                 >
//                   {openFolderId === folder.id ? (
//                     <ChevronUp className="w-5 h-5" />
//                   ) : (
//                     <ChevronDown className="w-5 h-5" />
//                   )}
//                 </div>
//               </button>

//               {/* Folder Content */}
//               <AnimatePresence>
//                 {openFolderId === folder.id && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="border-t border-gray-100 bg-gray-50/30"
//                   >
//                     <div className="p-6 grid gap-4 md:grid-cols-2">
//                       {folder.songs.length > 0 ? (
//                         folder.songs.map((song) => (
//                           <div key={song.id}>
//                             <MantraPlayer
//                               title={song.title}
//                               src={song.url}
//                               duration={song.duration}
//                               lightMode={true}
//                             />
//                           </div>
//                         ))
//                       ) : (
//                         <div className="col-span-full text-center py-10 text-gray-400 flex flex-col items-center">
//                           <Music className="w-10 h-10 mb-2 opacity-30" />
//                           <p>No songs uploaded yet.</p>
//                         </div>
//                       )}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </PageTemplate>
//   );
// }
"use client";

import React from "react";
import PageTemplate from "@/components/PageTemplate";
import MantraPlayer from "@/components/MantraPlayer";
import { devotionalSongsFolder } from "@/lib/mantraData";
import { motion } from "framer-motion";

export default function DevotionalSongsPage() {
  return (
    <PageTemplate
      title="Devotional Songs"
      subtitle="Listen to soulful devotional songs"
      noTopPadding={true}
      noContentTopPadding={true}
    >
      <div className="max-w-5xl mx-auto px-4 py-16 min-h-screen">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-[#a7150b] mb-6"
        >
          {devotionalSongsFolder.folderName}
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {devotionalSongsFolder.songs.length > 0 ? (
            devotionalSongsFolder.songs.map((song, index) => (
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
              No devotional songs uploaded yet.
            </p>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}
