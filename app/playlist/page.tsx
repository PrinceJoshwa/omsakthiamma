// // 'use client';

// // import { useState } from 'react';
// // import { 
// //   Menu, Search, 
// //   PlaySquare, 
// //   User
// // } from 'lucide-react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { videoUrls } from '@/lib/videoData'; 

// // // --- HELPER: Extract Video ID ---
// // const getYouTubeID = (url: string) => {
// //   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
// //   const match = url.match(regExp);
// //   return (match && match[2].length === 11) ? match[2] : null;
// // };

// // export default function VideoGallery() {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState("Videos");

// //   // Filter valid videos
// //   const videos = videoUrls.map((url) => {
// //     const id = getYouTubeID(url);
// //     return { id, url };
// //   }).filter(v => v.id);

// //   // Simple Categories
// //   const categories = ["Videos"];

// //   return (
// //     // FIX 1: Changed to a fixed height container so scrolling happens INSIDE this area, 
// //     // instead of the whole page scrolling (which makes the header hide).
// //     // 'h-[calc(100vh-100px)]' accounts for the yellow global header space.
// //     <div className="h-[calc(100vh-80px)] bg-white text-[#1a1a1a] font-sans flex flex-col">
      
// //       {/* --- 1. TOP NAVBAR --- */}
// //       {/* FIX 2: Removed 'sticky top-0'. It is now static so it sits naturally below the yellow header. */}
// //       <header className="h-16 bg-white flex items-center justify-between px-4 z-40 border-b border-gray-100 shadow-sm flex-shrink-0">
// //         <div className="flex items-center gap-4">
// //           <button 
// //             onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
// //             className="p-2 hover:bg-orange-50 rounded-full transition-colors text-gray-700"
// //           >
// //             <Menu className="w-6 h-6" />
// //           </button>
          
// //           <Link href="/" className="flex items-center gap-2">
// //              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
// //                 {/* Your Logo */}
// //                 <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png" fill alt="Logo" className="object-cover" />
// //              </div>
// //              <span className="text-xl font-bold tracking-tight text-[#a7150b]">
// //                Adhiparasakthi<span className="text-gray-500 font-normal text-sm ml-1">Media</span>
// //              </span>
// //           </Link>
// //         </div>

// //         {/* Search Bar - KEPT EXISTING */}
// //         <div className="hidden md:flex items-center flex-1 max-w-[500px] ml-8">
// //           <div className="flex flex-1 items-center">
// //             <input 
// //               type="text" 
// //               placeholder="Search..." 
// //               className="w-full bg-gray-50 border border-gray-300 rounded-l-full px-4 py-2 text-gray-800 focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] outline-none h-10 transition-all"
// //             />
// //             <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 py-2 h-10 hover:bg-gray-200">
// //               <Search className="w-5 h-5 text-gray-600" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Icons - KEPT EXISTING */}
// //         <div className="flex items-center gap-3">
// //           <div className="w-8 h-8 rounded-full bg-[#a7150b] text-white flex items-center justify-center font-bold shadow-md">
// //             <User className="w-5 h-5" />
// //           </div>
// //         </div>
// //       </header>

// //       {/* --- MAIN BODY --- */}
// //       <div className="flex flex-1 overflow-hidden">
        
// //         {/* --- 2. SIDEBAR - KEPT EXISTING --- */}
// //         <aside 
// //           className={`bg-white overflow-y-auto transition-all duration-200 border-r border-gray-100
// //           ${isSidebarOpen ? 'w-60' : 'w-[70px]'} flex-shrink-0 py-3`}
// //         >
// //           <div className="px-2 space-y-1">
// //             <div 
// //               className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
// //               bg-red-50 text-[#a7150b] font-medium`} 
// //             >
// //               <div className="w-6 h-6 flex items-center justify-center">
// //                 <PlaySquare className="w-6 h-6" />
// //               </div>
// //               <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
// //                 Videos
// //               </span>
// //             </div>
// //           </div>
// //         </aside>

// //         {/* --- 3. VIDEO CONTENT --- */}
// //         {/* FIX 3: 'overflow-y-auto' is here. This ensures only the video area scrolls, not the header. */}
// //         <main className="flex-1 overflow-y-auto bg-white relative p-0">
          
// //           {/* Filter Chips - KEPT EXISTING */}
// //           <div className="sticky top-0 bg-white/95 backdrop-blur-md z-30 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-100">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => setActiveCategory(cat)}
// //                 className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
// //                   activeCategory === cat
// //                     ? 'bg-[#a7150b] text-white' 
// //                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
// //                 }`}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Grid Layout - KEPT EXISTING */}
// //           <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 z-0">
// //             {videos.map((video, idx) => (
// //               <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                
// //                 {/* Video Player (Iframe) */}
// //                 <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-sm group-hover:shadow-md transition-shadow">
// //                   <iframe 
// //                     src={`https://www.youtube.com/embed/${video.id}?controls=1`}
// //                     title="Video"
// //                     className="absolute inset-0 w-full h-full"
// //                     allowFullScreen
// //                     loading="lazy"
// //                   ></iframe>
// //                 </div>
                
// //               </div>
// //             ))}
// //           </div>

// //         </main>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { 
//   Menu, Search, 
//   PlaySquare, 
//   Image as ImageIcon, // Added Image icon
//   User
// } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { videoUrls } from '@/lib/videoData'; 
// import { galleryImages } from '@/lib/imageData'; // Import the new image data

// // --- HELPER: Extract Video ID ---
// const getYouTubeID = (url: string) => {
//   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//   const match = url.match(regExp);
//   return (match && match[2].length === 11) ? match[2] : null;
// };

// export default function MediaGallery() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
//   // --- NEW STATE: VIEW TOGGLE (Videos vs Images) ---
//   const [currentView, setCurrentView] = useState<'videos' | 'images'>('videos');

//   // State for Filters
//   const [activeCategory, setActiveCategory] = useState("Videos");
//   const [activeYear, setActiveYear] = useState("2025");

//   // --- DATA FILTERING ---
  
//   // 1. Filter Videos (Existing Logic)
//   const videos = videoUrls.map((url) => {
//     const id = getYouTubeID(url);
//     return { id, url };
//   }).filter(v => v.id);

//   // 2. Filter Images (New Logic)
//   const images = galleryImages.filter((img: { year: string; }) => img.year === activeYear);

//   // Filter Options
//   const videoCategories = ["Videos"]; // Your existing video category
//   const imageYears = ["2025", "2024", "2023"]; // New year filters

//   return (
//     // Container height preserved from your code
//     <div className="h-[calc(100vh-80px)] bg-white text-[#1a1a1a] font-sans flex flex-col">
      
//       {/* --- 1. TOP NAVBAR (Unchanged) --- */}
//       <header className="h-16 bg-white flex items-center justify-between px-4 z-40 border-b border-gray-100 shadow-sm flex-shrink-0">
//         <div className="flex items-center gap-4">
//           <button 
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
//             className="p-2 hover:bg-orange-50 rounded-full transition-colors text-gray-700"
//           >
//             <Menu className="w-6 h-6" />
//           </button>
          
//           <Link href="/" className="flex items-center gap-2">
//              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
//                 <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png" fill alt="Logo" className="object-cover" />
//              </div>
//              <span className="text-xl font-bold tracking-tight text-[#a7150b]">
//                Adhiparasakthi<span className="text-gray-500 font-normal text-sm ml-1">Media</span>
//              </span>
//           </Link>
//         </div>

//         {/* Search Bar (Unchanged) */}
//         <div className="hidden md:flex items-center flex-1 max-w-[500px] ml-8">
//           <div className="flex flex-1 items-center">
//             <input 
//               type="text" 
//               placeholder={currentView === 'videos' ? "Search videos..." : "Search gallery..."} 
//               className="w-full bg-gray-50 border border-gray-300 rounded-l-full px-4 py-2 text-gray-800 focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] outline-none h-10 transition-all"
//             />
//             <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 py-2 h-10 hover:bg-gray-200">
//               <Search className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {/* Right Icons (Unchanged) */}
//         <div className="flex items-center gap-3">
//           <div className="w-8 h-8 rounded-full bg-[#a7150b] text-white flex items-center justify-center font-bold shadow-md">
//             <User className="w-5 h-5" />
//           </div>
//         </div>
//       </header>

//       {/* --- MAIN BODY --- */}
//       <div className="flex flex-1 overflow-hidden">
        
//         {/* --- 2. SIDEBAR --- */}
//         <aside 
//           className={`bg-white overflow-y-auto transition-all duration-200 border-r border-gray-100
//           ${isSidebarOpen ? 'w-60' : 'w-[70px]'} flex-shrink-0 py-3`}
//         >
//           <div className="px-2 space-y-1">
            
//             {/* TAB 1: VIDEOS */}
//             <div 
//               onClick={() => setCurrentView('videos')}
//               className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
//               ${currentView === 'videos' ? 'bg-red-50 text-[#a7150b]' : 'text-gray-700 hover:bg-gray-50'}`} 
//             >
//               <div className="w-6 h-6 flex items-center justify-center">
//                 <PlaySquare className="w-6 h-6" />
//               </div>
//               <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
//                 Videos
//               </span>
//             </div>

//             {/* TAB 2: GALLERY (New) */}
//             <div 
//               onClick={() => setCurrentView('images')}
//               className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
//               ${currentView === 'images' ? 'bg-red-50 text-[#a7150b]' : 'text-gray-700 hover:bg-gray-50'}`} 
//             >
//               <div className="w-6 h-6 flex items-center justify-center">
//                 <ImageIcon className="w-6 h-6" />
//               </div>
//               <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
//                 Gallery
//               </span>
//             </div>

//           </div>
//         </aside>

//         {/* --- 3. MAIN CONTENT --- */}
//         <main className="flex-1 overflow-y-auto bg-white relative p-0">
          
//           {/* --- FILTER CHIPS (Dynamic based on View) --- */}
//           <div className="sticky top-0 bg-white/95 backdrop-blur-md z-30 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-100">
            
//             {/* If Videos -> Show Video Categories */}
//             {currentView === 'videos' && videoCategories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
//                   activeCategory === cat
//                     ? 'bg-[#a7150b] text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}

//             {/* If Images -> Show Year Filters */}
//             {currentView === 'images' && imageYears.map((year) => (
//               <button
//                 key={year}
//                 onClick={() => setActiveYear(year)}
//                 className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
//                   activeYear === year
//                     ? 'bg-[#a7150b] text-white' 
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {year}
//               </button>
//             ))}
//           </div>

//           {/* --- CONTENT GRID --- */}
//           <div className="p-4 md:p-6 z-0">
            
//             {/* VIEW 1: VIDEOS (Existing Grid) */}
//             {currentView === 'videos' && (
//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
//                 {videos.map((video, idx) => (
//                   <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
//                     <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-sm group-hover:shadow-md transition-shadow">
//                       <iframe 
//                         src={`https://www.youtube.com/embed/${video.id}?controls=1`}
//                         title="Video"
//                         className="absolute inset-0 w-full h-full"
//                         allowFullScreen
//                         loading="lazy"
//                       ></iframe>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* VIEW 2: IMAGES (New Grid - No Titles) */}
//             {currentView === 'images' && (
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//                 {images.length > 0 ? (
//                   images.map((img) => (
//                     <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all">
//                       <Image 
//                         src={img.src} 
//                         alt="Gallery Image"
//                         fill
//                         className="object-cover group-hover:scale-105 transition-transform duration-500"
//                         unoptimized // <--- ADD THIS LINE
//                       />
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-span-full py-10 text-center text-gray-400">
//                     No images found for {activeYear}
//                   </div>
//                 )}
//               </div>
//             )}

//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from 'react';
import { 
  Menu, Search, 
  PlaySquare, 
  Image as ImageIcon, 
  User,
  Play // Added Play icon for the thumbnail overlay
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { videoUrls } from '@/lib/videoData'; 
import { galleryImages } from '@/lib/imageData'; 

// --- HELPER: Extract Video ID ---
const getYouTubeID = (url: string) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function MediaGallery() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  // View Toggle
  const [currentView, setCurrentView] = useState<'videos' | 'images'>('videos');

  // Filters
  const [activeCategory, setActiveCategory] = useState("Videos");
  const [activeYear, setActiveYear] = useState("2025");

  // --- NEW STATE: Track the ID of the ONE playing video ---
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // 1. Filter Videos
  const videos = videoUrls.map((url) => {
    const id = getYouTubeID(url);
    return { id, url };
  }).filter(v => v.id);

  // 2. Filter Images
  const images = galleryImages.filter((img: { year: string; }) => img.year === activeYear);

  // Options
  const videoCategories = ["Videos"];
  const imageYears = ["2025", "2024", "2023"];

  return (
    <div className="h-[calc(100vh-80px)] bg-white text-[#1a1a1a] font-sans flex flex-col">
      
      {/* --- 1. TOP NAVBAR --- */}
      <header className="h-16 bg-white flex items-center justify-between px-4 z-40 border-b border-gray-100 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="p-2 hover:bg-orange-50 rounded-full transition-colors text-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <Link href="/" className="flex items-center gap-2">
             <div className="relative w-8 h-8 rounded-full overflow-hidden border border-orange-100">
                <Image src="https://ik.imagekit.io/j0xzq9pns/Omsakthi%20/logo_dl1zqj.png" fill alt="Logo" className="object-cover" />
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
              placeholder={currentView === 'videos' ? "Search videos..." : "Search gallery..."} 
              className="w-full bg-gray-50 border border-gray-300 rounded-l-full px-4 py-2 text-gray-800 focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] outline-none h-10 transition-all"
            />
            <button className="bg-gray-100 border border-l-0 border-gray-300 rounded-r-full px-5 py-2 h-10 hover:bg-gray-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#a7150b] text-white flex items-center justify-center font-bold shadow-md">
            <User className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* --- MAIN BODY --- */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* --- 2. SIDEBAR --- */}
        <aside 
          className={`bg-white overflow-y-auto transition-all duration-200 border-r border-gray-100
          ${isSidebarOpen ? 'w-60' : 'w-[70px]'} flex-shrink-0 py-3`}
        >
          <div className="px-2 space-y-1">
            
            {/* TAB 1: VIDEOS */}
            <div 
              onClick={() => setCurrentView('videos')}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
              ${currentView === 'videos' ? 'bg-red-50 text-[#a7150b]' : 'text-gray-700 hover:bg-gray-50'}`} 
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <PlaySquare className="w-6 h-6" />
              </div>
              <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
                Videos
              </span>
            </div>

            {/* TAB 2: GALLERY */}
            <div 
              onClick={() => setCurrentView('images')}
              className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-colors
              ${currentView === 'images' ? 'bg-red-50 text-[#a7150b]' : 'text-gray-700 hover:bg-gray-50'}`} 
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <ImageIcon className="w-6 h-6" />
              </div>
              <span className={`text-sm font-semibold truncate ${!isSidebarOpen && 'hidden'}`}>
                Gallery
              </span>
            </div>

          </div>
        </aside>

        {/* --- 3. MAIN CONTENT --- */}
        <main className="flex-1 overflow-y-auto bg-white relative p-0">
          
          {/* --- FILTER CHIPS --- */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-md z-30 px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar border-b border-gray-100">
            
            {/* If Videos -> Show Video Categories */}
            {currentView === 'videos' && videoCategories.map((cat) => (
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

            {/* If Images -> Show Year Filters */}
            {currentView === 'images' && imageYears.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeYear === year
                    ? 'bg-[#a7150b] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* --- CONTENT GRID --- */}
          <div className="p-4 md:p-6 z-0">
            
            {/* VIEW 1: VIDEOS (UPDATED LOGIC) */}
            {currentView === 'videos' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
                {videos.map((video, idx) => {
                  const isPlaying = playingVideoId === video.id;

                  return (
                    <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                      <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-sm group-hover:shadow-md transition-shadow">
                        
                        {/* 1. IF PLAYING: Show Iframe */}
                        {isPlaying ? (
                          <iframe 
                            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`} // Added autoplay=1 so it starts immediately on click
                            title="Video"
                            className="absolute inset-0 w-full h-full"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            loading="lazy"
                          ></iframe>
                        ) : (
                          // 2. IF NOT PLAYING: Show Thumbnail + Play Button Overlay
                          <div 
                            className="absolute inset-0 w-full h-full cursor-pointer relative"
                            onClick={() => setPlayingVideoId(video.id)} // Set this video as playing
                          >
                            {/* Standard HTML img for YouTube thumbnail to avoid Next.js config issues */}
                            <img 
                              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                              alt="Video Thumbnail"
                              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                            
                            {/* Play Button Icon Centered */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                              </div>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* VIEW 2: IMAGES (Unchanged logic) */}
            {currentView === 'images' && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {images.length > 0 ? (
                  images.map((img) => (
                    <div key={img.id} className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-md transition-all">
                      <Image 
                        src={img.src} 
                        alt="Gallery Image"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized // Keeps images fast/working without server overhead
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full py-10 text-center text-gray-400">
                    No images found for {activeYear}
                  </div>
                )}
              </div>
            )}

          </div>

        </main>
      </div>
    </div>
  );
}