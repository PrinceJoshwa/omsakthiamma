// // 'use client';

// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { Play, Youtube, ExternalLink } from 'lucide-react';
// // import Link from 'next/link';
// // import Image from 'next/image';

// // // Import your simple list of URLs
// // import { videoUrls } from '@/lib/videoData';

// // // --- HELPER: Extract Video ID from any YouTube URL ---
// // const getYouTubeID = (url: string) => {
// //   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
// //   const match = url.match(regExp);
// //   return (match && match[2].length === 11) ? match[2] : null;
// // };

// // export default function VideoGallery() {
// //   // Convert your raw URLs into usable IDs
// //   const videos = videoUrls.map((url) => {
// //     const id = getYouTubeID(url);
// //     return {
// //       id: id,
// //       thumbnail: id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : '/placeholder.jpg',
// //       embedUrl: id ? `https://www.youtube.com/embed/${id}` : '',
// //       originalUrl: url
// //     };
// //   }).filter(v => v.id); // Remove invalid links

// //   // State to track which video is currently playing (for the modal or main player)
// //   // null = nothing playing
// //   const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

// //   return (
// //     <main className="bg-white min-h-screen pb-20 overflow-x-hidden">
      
// //       {/* --- HEADER --- */}
// //       <section className="relative py-16 bg-orange-50/50">
// //         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             <span className="px-4 py-1.5 bg-red-100 text-[#a7150b] rounded-full text-xs font-bold tracking-wider uppercase mb-4 inline-block">
// //               Digital Darshan
// //             </span>
// //             <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
// //               Video Gallery
// //             </h1>
// //             <p className="text-gray-600 max-w-2xl mx-auto">
// //               Watch our latest sacred moments and events.
// //             </p>
// //           </motion.div>
// //         </div>
// //       </section>

// //       <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-20">
        
// //         {/* --- VIDEO GRID --- */}
// //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
// //           {videos.map((video, idx) => (
// //             <motion.div
// //               key={idx} // Using index as key since IDs might duplicate if you paste same link twice
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ delay: idx * 0.05 }} // Faster stagger for many items
// //               className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
// //             >
// //               {/* VIDEO AREA: 
// //                   If this specific video is 'playing', show the Iframe. 
// //                   Otherwise, show the lightweight Thumbnail image.
// //               */}
// //               <div className="relative aspect-video bg-black w-full">
// //                 {playingVideoId === video.id ? (
// //                   <iframe 
// //                     className="absolute inset-0 w-full h-full"
// //                     src={`${video.embedUrl}?autoplay=1&rel=0`} 
// //                     title="YouTube video player"
// //                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
// //                     allowFullScreen
// //                   ></iframe>
// //                 ) : (
// //                   // The "Facade" (Image cover)
// //                   <div 
// //                     onClick={() => setPlayingVideoId(video.id)}
// //                     className="absolute inset-0 cursor-pointer group-video"
// //                   >
// //                     <Image 
// //                       src={video.thumbnail} 
// //                       alt="Video Thumbnail"
// //                       fill
// //                       className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
// //                     />
// //                     {/* Play Button Overlay */}
// //                     <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
// //                       <div className="w-16 h-16 bg-[#a7150b]/90 rounded-full flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
// //                         <Play className="w-8 h-8 ml-1 fill-white" />
// //                       </div>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* FOOTER: Since we don't have titles, we add a clean footer with a 'Watch' button */}
// //               <div className="p-4 bg-white flex justify-between items-center">
// //                  <div className="flex items-center gap-2">
// //                     <Youtube className="w-5 h-5 text-red-600" />
// //                     <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
// //                       Watch on YouTube
// //                     </span>
// //                  </div>
                 
// //                  {/* Link to open actual YouTube page if they prefer */}
// //                  <Link href={video.originalUrl} target="_blank">
// //                     <button className="text-gray-400 hover:text-[#a7150b] transition-colors">
// //                         <ExternalLink className="w-5 h-5" />
// //                     </button>
// //                  </Link>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>

// //         {/* --- LOAD MORE / CHANNEL LINK --- */}
// //         <div className="mt-16 text-center pb-12">
// //             <Link href="https://youtube.com" target="_blank">
// //                 <button className="inline-flex items-center gap-2 px-8 py-3 bg-[#a7150b] text-white rounded-full font-bold text-base hover:bg-[#8a0d08] transition-all duration-300 shadow-lg">
// //                     Visit Our YouTube Channel
// //                     <ExternalLink className="w-4 h-4" />
// //                 </button>
// //             </Link>
// //         </div>

// //       </div>
// //     </main>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Search, Bell, Filter, CheckCircle2 } from 'lucide-react'; // Make sure you have lucide-react
// import { videoUrls } from '@/lib/videoData';

// // --- HELPER: Extract ID ---
// const getYouTubeID = (url: string) => {
//   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//   const match = url.match(regExp);
//   return (match && match[2].length === 11) ? match[2] : null;
// };

// export default function YouTubeClonePage() {
//   // Filter valid videos
//   const videos = videoUrls.map((url) => {
//     const id = getYouTubeID(url);
//     return { id, url };
//   }).filter(v => v.id);

//   // Fake categories for the "Chip" look
//   const categories = ["Latest", "Popular", "Oldest", "Live", "Mantras", "Festivals"];
//   const [activeTab, setActiveTab] = useState("Latest");

//   return (
//     <main className="bg-white min-h-screen">
      
//       {/* --- 1. CHANNEL HEADER (Banner & Info) --- */}
//       <div className="w-full">
//         {/* Banner Image */}
//         <div className="h-32 md:h-52 w-full bg-gray-100 relative overflow-hidden">
//              {/* Replace with your actual banner image path */}
//              <Image 
//                 src="/home-img.jpeg" 
//                 alt="Channel Banner" 
//                 fill 
//                 className="object-cover"
//              />
//         </div>

//         {/* Channel Info Section */}
//         <div className="max-w-[1280px] mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            
//             {/* Avatar */}
//             <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-sm -mt-12 md:-mt-8 flex-shrink-0 bg-gray-200">
//                {/* Replace with your Deity/Logo image */}
//                <Image 
//                  src="/om3.jpeg"  
//                  alt="Avatar" 
//                  fill 
//                  className="object-cover"
//                />
//             </div>

//             {/* Text Info */}
//             <div className="flex-1">
//               <h1 className="text-2xl md:text-3xl font-bold text-[#0f0f0f] flex items-center gap-2">
//                 Adhiparasakthi Siddhar Peetam
//                 <CheckCircle2 className="w-5 h-5 text-gray-500 fill-gray-200" />
//               </h1>
//               <div className="text-gray-600 text-sm mt-1 flex flex-wrap gap-2">
//                 <span className="font-medium">@adhiparasakthi</span>
//                 <span>•</span>
//                 <span>150K subscribers</span>
//                 <span>•</span>
//                 <span>{videos.length} videos</span>
//               </div>
//               <p className="text-gray-500 text-sm mt-2 max-w-2xl line-clamp-1">
//                 Official channel of Arulmigu Adhiparasakthi Siddhar Peetam, Melmaruvathur.
//               </p>
//             </div>

//             {/* Subscribe Button */}
//             <button className="bg-[#a7150b] text-white px-6 py-2.5 rounded-full font-medium hover:bg-[#8a1008] transition-colors text-sm md:text-base">
//               Subscribe
//             </button>
//           </div>
//         </div>

//         {/* --- 2. NAVIGATION TABS (Like YouTube) --- */}
//         <div className="max-w-[1280px] mx-auto px-4 border-b border-gray-200 sticky top-0 bg-white/95 backdrop-blur-sm z-30">
//           <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
//             {['Home', 'Videos', 'Shorts', 'Live', 'Playlists', 'Community'].map((tab) => (
//               <button 
//                 key={tab}
//                 className={`py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
//                   tab === 'Videos' 
//                     ? 'border-[#0f0f0f] text-[#0f0f0f]' 
//                     : 'border-transparent text-gray-600 hover:text-[#0f0f0f]'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//             <div className="flex-1"></div>
//             <button className="p-2 hover:bg-gray-100 rounded-full">
//               <Search className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- 3. FILTER CHIPS --- */}
//       <div className="max-w-[1280px] mx-auto px-4 py-4">
//         <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveTab(cat)}
//               className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
//                 activeTab === cat
//                   ? 'bg-[#0f0f0f] text-white'
//                   : 'bg-gray-100 text-[#0f0f0f] hover:bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* --- 4. THE VIDEO GRID (Pure YouTube Layout) --- */}
//       <div className="max-w-[1280px] mx-auto px-4 pb-20">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
//           {videos.map((video, idx) => (
//             <div key={idx} className="flex flex-col gap-2 group cursor-pointer">
              
//               {/* Thumbnail Container (We use the iframe directly so Title shows up automatically inside) */}
//               <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-200">
//                 <iframe 
//                   src={`https://www.youtube.com/embed/${video.id}?controls=1`}
//                   title="YouTube video player"
//                   loading="lazy" // IMPORTANT: This prevents crashing by loading only when near viewport
//                   className="absolute inset-0 w-full h-full"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>

//               {/* Info Area (Mimicking YouTube metadata) */}
//               <div className="flex gap-3 items-start px-1">
//                 <div className="flex-1">
//                    {/* Since we don't have the title text, we let the iframe show it. 
//                        Here we put the "Channel Name" styling that YouTube has below videos */}
//                    <p className="text-sm text-gray-500 mt-1">
//                      Adhiparasakthi TV
//                    </p>
//                    <p className="text-xs text-gray-500">
//                      {/* Fake views for the UI look, or remove if you prefer */}
//                      1.2K views • 2 days ago
//                    </p>
//                 </div>
//                 <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-opacity">
//                   <span className="sr-only">Menu</span>
//                   <svg className="w-5 h-5 text-gray-800" viewBox="0 0 24 24" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import { 
  Menu, Search, Bell, 
  PlaySquare, Image as ImageIcon, 
  MoreVertical, CheckCircle2, User
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { videoUrls } from '@/lib/videoData'; 

// --- HELPER: Extract Video ID ---
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function VideoGallery() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter valid videos
  const videos = videoUrls.map((url) => {
    const id = getYouTubeID(url);
    return { id, url };
  }).filter(v => v.id);

  // Simple Categories
  const categories = ["All", "Mantras", "Live Events", "Festivals", "Songs", "Pooja"];

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans flex flex-col">
      
      {/* --- 1. TOP NAVBAR --- */}
      <header className="sticky top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4 z-50 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 hover:bg-orange-50 rounded-full transition-colors text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center gap-2">
             <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
                {/* Your Logo */}
                <Image src="/om3.jpeg" fill alt="Logo" className="object-cover" />
             </div>
             <span className="text-xl font-bold tracking-tight text-[#a7150b]">
               Adhiparasakthi<span className="text-gray-500 font-normal text-sm ml-1">Media</span>
             </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-[500px] ml-8">
          <div className="flex flex-1 items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-gray-50 border border-gray-300 rounded-l-full px-4 py-2 text-gray-800 focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] outline-none h-10 transition-all"
            />
            <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 py-2 h-10 hover:bg-gray-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-orange-50 rounded-full text-gray-700">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-8 h-8 rounded-full bg-[#a7150b] text-white flex items-center justify-center font-bold shadow-md">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* --- MAIN BODY --- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- 2. SIDEBAR (Simplified: Only Videos & Images) --- */}
        <aside 
          className={`bg-white overflow-y-auto transition-all duration-200 border-r border-gray-100
          ${isSidebarOpen ? 'w-60' : 'w-[70px]'} flex-shrink-0 py-3`}
        >
          <div className="px-2 space-y-1">
            {/* 1. VIDEOS TAB (Active) */}
            <div 
              className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
              bg-red-50 text-[#a7150b] font-medium`} // Active Styling
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <PlaySquare className="w-6 h-6" />
              </div>
              <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
                Videos
              </span>
            </div>

            {/* 2. IMAGES TAB (Link to Gallery) */}
            <Link href="/gallery">
              <div 
                className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
                text-gray-700 hover:bg-gray-100`}
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-medium truncate ${!isSidebarOpen && 'hidden'}`}>
                  Images
                </span>
              </div>
            </Link>
          </div>
        </aside>

        {/* --- 3. VIDEO CONTENT --- */}
        <main className="flex-1 overflow-y-auto bg-white relative p-0">
          
          {/* Filter Chips */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md z-20 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-[#a7150b] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
            {videos.map((video, idx) => (
              <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                
                {/* Video Player (Iframe) */}
                <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-sm group-hover:shadow-md transition-shadow">
                  <iframe 
                    src={`https://www.youtube.com/embed/${video.id}?controls=1`}
                    title="Video"
                    className="absolute inset-0 w-full h-full"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Details Section */}
                
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}