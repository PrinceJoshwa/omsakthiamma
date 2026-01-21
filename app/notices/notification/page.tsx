// // 'use client';

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FileText, ChevronRight, X, Calendar, AlertCircle } from 'lucide-react';
// // import { format } from 'date-fns';

// // // --- DATA STRUCTURE ---
// // // You will populate this with your actual PDF links.
// // const NOTIFICATIONS_DATA = [
// //   {
// //     id: 1,
// //     category: 'Instructions to Districts',
// //     title: 'Special Seva Instructions for Chitra Pournami 2026',
// //     date: '2026-01-20', // YYYY-MM-DD for sorting
// //     fileSize: '352 kb',
// //     pdfUrl: '/sample-doc.pdf', // Replace with actual PDF URL
// //   },
// //   {
// //     id: 2,
// //     category: 'Instructions to Districts',
// //     title: 'District President Meeting Minutes - Jan 2026',
// //     date: '2026-01-16',
// //     fileSize: '120 kb',
// //     pdfUrl: '/sample-doc.pdf',
// //   },
// //   {
// //     id: 3,
// //     category: 'Devotee Guidelines',
// //     title: 'Irumudi Irumudi Peru Vizha - Dress Code & Regulations',
// //     date: '2026-01-14',
// //     fileSize: '313 kb',
// //     pdfUrl: '/sample-doc.pdf',
// //   },
// //   {
// //     id: 4,
// //     category: 'Sanctum Service Schedule',
// //     title: 'Sanctum Duty Roster: February 2026',
// //     date: '2026-01-10',
// //     fileSize: '285 kb',
// //     pdfUrl: '/sample-doc.pdf',
// //   },
// //   {
// //     id: 5,
// //     category: 'District-wise Timings',
// //     title: 'Bus Arrival Timings for Trichy & Madurai Zones',
// //     date: '2026-01-09',
// //     fileSize: '150 kb',
// //     pdfUrl: '/sample-doc.pdf',
// //   },
// //   {
// //     id: 6,
// //     category: 'Devotee Guidelines',
// //     title: 'General Safety Protocols for Festival Days',
// //     date: '2025-12-28',
// //     fileSize: '400 kb',
// //     pdfUrl: '/sample-doc.pdf',
// //   },
// // ];

// // const CATEGORIES = [
// //   'Instructions to Districts',
// //   'Devotee Guidelines',
// //   'Sanctum Service Schedule',
// //   'District-wise Timings'
// // ];

// // export default function NotificationsPage() {
// //   const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
// //   const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

// //   // Filter and Sort Data Descending by Date
// //   const filteredData = NOTIFICATIONS_DATA
// //     .filter((item) => item.category === activeCategory)
// //     .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

// //   // Group by Date for the Display
// //   const groupedData = filteredData.reduce((acc, item) => {
// //     const dateKey = format(new Date(item.date), 'MMM dd, yyyy');
// //     if (!acc[dateKey]) acc[dateKey] = [];
// //     acc[dateKey].push(item);
// //     return acc;
// //   }, {} as Record<string, typeof filteredData>);

// //   return (
// //     <main className="min-h-screen bg-gray-50 pt-8 pb-16">
      
// //       {/* Page Header */}
// //       <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <h1 className="text-3xl font-bold">Official Notifications</h1>
// //           <p className="text-white/80 mt-2 text-sm">
// //             View the latest circulars, guidelines, and schedules.
// //           </p>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
// //         {/* LEFT SIDEBAR (Tabs) */}
// //         <aside className="md:col-span-1">
// //           <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
// //             <div className="bg-[#0056b3] px-4 py-3 border-b border-blue-800">
// //                {/* Matches the Blue Header style in your screenshot */}
// //               <h2 className="font-bold text-white uppercase tracking-wide text-sm">
// //                 Categories
// //               </h2>
// //             </div>
// //             <nav className="flex flex-col">
// //               {CATEGORIES.map((cat) => (
// //                 <button
// //                   key={cat}
// //                   onClick={() => setActiveCategory(cat)}
// //                   className={`px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group ${
// //                     activeCategory === cat
// //                       ? 'bg-blue-50 text-[#0056b3] border-l-4 border-l-[#0056b3]'
// //                       : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-l-transparent'
// //                   }`}
// //                 >
// //                   {cat}
// //                   {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
// //                 </button>
// //               ))}
// //             </nav>
// //           </div>
// //         </aside>

// //         {/* RIGHT CONTENT AREA */}
// //         <div className="md:col-span-3">
          
// //           <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[500px]">
// //             {/* Header for Content */}
// //             <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between bg-white rounded-t-lg">
// //               <h2 className="text-xl font-bold text-[#0056b3] uppercase tracking-tight">
// //                 {activeCategory}
// //               </h2>
// //               <span className="text-xs font-semibold bg-gray-100 text-gray-500 px-2 py-1 rounded">
// //                 {filteredData.length} Documents
// //               </span>
// //             </div>

// //             {/* List Content */}
// //             <div className="p-2">
// //               {Object.keys(groupedData).length > 0 ? (
// //                 Object.entries(groupedData).map(([date, items]) => (
// //                   <div key={date} className="mb-2">
// //                     {/* Date Header Strip */}
// //                     <div className="bg-[#fff3cd] text-[#856404] px-4 py-2 text-sm font-bold border-l-4 border-[#ffeeba] flex items-center gap-2">
// //                        <Calendar className="w-4 h-4"/>
// //                        {date}
// //                     </div>
                    
// //                     {/* Items for this Date */}
// //                     <div className="divide-y divide-gray-100">
// //                       {items.map((item) => (
// //                         <div 
// //                           key={item.id} 
// //                           className="group hover:bg-gray-50 p-4 transition-all flex items-start md:items-center justify-between gap-4"
// //                         >
// //                           <div className="flex-1">
// //                             <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
// //                               {item.title}
// //                             </h3>
// //                           </div>
                          
// //                           {/* PDF Action */}
// //                           <button
// //                             onClick={() => setSelectedPdf(item.pdfUrl)}
// //                             className="shrink-0 flex items-center gap-2 text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded text-xs font-bold transition-colors border border-red-100"
// //                           >
// //                             <FileText className="w-4 h-4" />
// //                             <span className="hidden sm:inline">VIEW PDF</span>
// //                             <span className="text-gray-400 font-normal ml-1 border-l border-gray-300 pl-2">
// //                               {item.fileSize}
// //                             </span>
// //                           </button>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="p-12 text-center text-gray-400">
// //                   <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
// //                   <p>No notifications found in this category.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* PDF VIEWER MODAL */}
// //       <AnimatePresence>
// //         {selectedPdf && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// //             onClick={() => setSelectedPdf(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.95, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.95, opacity: 0 }}
// //               onClick={(e) => e.stopPropagation()} // Prevent close when clicking modal
// //               className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
// //             >
// //               {/* Modal Header */}
// //               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
// //                 <span className="font-bold text-gray-700 flex items-center gap-2">
// //                   <FileText className="w-5 h-5 text-red-600" />
// //                   Document Viewer
// //                 </span>
// //                 <button
// //                   onClick={() => setSelectedPdf(null)}
// //                   className="p-2 hover:bg-gray-200 rounded-full transition-colors"
// //                 >
// //                   <X className="w-6 h-6 text-gray-600" />
// //                 </button>
// //               </div>

// //               {/* PDF Embed - Restricted Mode
// //                   #toolbar=0 hides the print/download bar in many browsers
// //                   #navpanes=0 hides the side navigation 
// //               */}
// //               <div className="flex-1 bg-gray-100 relative group">
// //                 {/* Transparent overlay to discourage right-click save (basic deterrent) */}
// //                 <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
                
// //                 <iframe
// //                   src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
// //                   className="w-full h-full"
// //                   title="PDF Viewer"
// //                 />
// //               </div>
              
// //               <div className="bg-yellow-50 px-4 py-2 text-xs text-yellow-800 text-center border-t border-yellow-100">
// //                 Note: This document is for viewing purposes only. Downloading is restricted.
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </main>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FileText, ChevronRight, X, Calendar, AlertCircle, ExternalLink } from 'lucide-react';
// import { format } from 'date-fns';

// // --- DATA: "General Notifications" Data ---
// const NOTIFICATIONS_DATA = [
//   // New Irumudi Instructions (Source: IRUMUDI INSTRUCTIONS 2025-26 (1).pdf)
//   {
//     id: 101,
//     title: 'Thaipusam Irumudi Festival 2025-26 - Official Instructions & Guidelines',
//     date: '27-11-2025', // Date from the circular
//     fileSize: '1.2 MB', // Estimated size
//     pdfUrl: '/IRUMUDI-INSTRUCTIONS.pdf', 
//   },
//   // Irumudi Items List (Source: 22.12.25.jpg)
//   {
//     id: 102,
//     title: 'List of Mandatory Items for Irumudi Bag - 2025',
//     date: '12-12-2025', // Referenced meeting date
//     fileSize: '450 kb',
//     pdfUrl: '/pdfs/irumudi-items-list.pdf',
//   },
//   // District Timings (Source: 12.12.2025.jpeg)
//   {
//     id: 103,
//     title: 'District-wise Time Schedule for Irumudi Submission 2025-26',
//     date: '12-12-2025',
//     fileSize: '320 kb',
//     pdfUrl: '/pdfs/district-timings-2025.pdf',
//   },
//    // Mandram Schedule (Source: 12.12.25.jpeg)
//   {
//     id: 104,
//     title: 'Mandram Karuvarai Pani Schedule (Dec 2025)',
//     date: '22-12-2025',
//     fileSize: '380 kb',
//     pdfUrl: '/pdfs/mandram-schedule-dec-2025.pdf',
//   },
//   // Existing Placeholder Data (You can remove these if not needed)
// ];

// // --- NAVIGATION LINKS MAPPING ---
// const SIDEBAR_LINKS = [
//   { 
//     label: 'General Notifications', 
//     href: '/notifications', // Current Page
//     isActive: true 
//   },
//   { 
//     label: 'Instructions to Districts', 
//     href: '/district-president-instructions', 
//     isActive: false 
//   },
//   { 
//     label: 'Devotee Guidelines', 
//     href: '/irumudi-instruction', 
//     isActive: false 
//   },
//   { 
//     label: 'Sanctum Service Schedule', 
//     href: '/notices/sanctum-schedule', 
//     isActive: false 
//   },
//   { 
//     label: 'District-wise Timings', 
//     href: '/notices/district-timings', 
//     isActive: false 
//   }
// ];

// export default function NotificationsPage() {
//   const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

//   // Sort Data (Newest First)
//   const sortedData = NOTIFICATIONS_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

//   // Group by Date for the Display
// const groupedData = sortedData.reduce((acc, item) => {
//     // Changed format from 'MMM dd, yyyy' to 'dd MM yyyy'
//     const dateKey = format(new Date(item.date), 'dd MM yyyy'); 
//     if (!acc[dateKey]) acc[dateKey] = [];
//     acc[dateKey].push(item);
//     return acc;
//   }, {} as Record<string, typeof sortedData>);

//   return (
//     <main className="min-h-screen bg-orange-50/30 pt-8 pb-16">
      
//       {/* Page Header */}
//       <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl font-bold">Notifications</h1>
//           <p className="text-white/80 mt-2 text-sm">
//             Circulars, Instructions, and Guidelines.
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
//         {/* LEFT SIDEBAR (Navigation Links) */}
//         <aside className="md:col-span-1">
//           <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden sticky top-24">
//             <div className="bg-[#a7150b] px-4 py-3 border-b border-red-800">
//               <h2 className="font-bold text-white uppercase tracking-wide text-sm">
//                 Categories
//               </h2>
//             </div>
//             <nav className="flex flex-col">
//               {SIDEBAR_LINKS.map((link) => (
//                 <Link
//                   key={link.label}
//                   href={link.href}
//                   className={`px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group ${
//                     link.isActive
//                       ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
//                       : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
//                   }`}
//                 >
//                   {link.label}
//                   {link.isActive ? (
//                     <ChevronRight className="w-4 h-4" />
//                   ) : (
//                     <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
//                   )}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </aside>

//         {/* RIGHT CONTENT AREA */}
//         <div className="md:col-span-3">
          
//           <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
//             {/* Header for Content */}
//             <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
//               <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">
//                 General Notifications
//               </h2>
//               <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
//                 {sortedData.length} Documents
//               </span>
//             </div>

//             {/* List Content */}
//             <div className="p-2">
//               {Object.keys(groupedData).length > 0 ? (
//                 Object.entries(groupedData).map(([date, items]) => (
//                   <div key={date} className="mb-2">
//                     {/* Date Header Strip */}
//                     <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-sm font-bold border-l-4 border-[#ffc107] flex items-center gap-2">
//                        <Calendar className="w-4 h-4"/>
//                        {date}
//                     </div>
                    
//                     {/* Items for this Date */}
//                     <div className="divide-y divide-gray-100">
//                       {items.map((item) => (
//                         <div 
//                           key={item.id} 
//                           className="group hover:bg-red-50/30 p-4 transition-all flex items-start md:items-center justify-between gap-4"
//                         >
//                           <div className="flex-1">
//                             <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
//                               {item.title}
//                             </h3>
//                           </div>
                          
//                           {/* PDF View Button */}
//                           <button
//                             onClick={() => setSelectedPdf(item.pdfUrl)}
//                             className="shrink-0 flex items-center gap-2 text-[#a7150b] bg-red-50 hover:bg-[#a7150b] hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-100"
//                           >
//                             <FileText className="w-4 h-4" />
//                             <span className="hidden sm:inline">VIEW PDF</span>
//                             <span className="opacity-60 font-normal ml-1 border-l border-current pl-2">
//                               {item.fileSize}
//                             </span>
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="p-12 text-center text-gray-400">
//                   <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
//                   <p>No notifications found.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PDF VIEWER MODAL */}
//       <AnimatePresence>
//         {selectedPdf && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={() => setSelectedPdf(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
//             >
//               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
//                 <span className="font-bold text-gray-700 flex items-center gap-2">
//                   <FileText className="w-5 h-5 text-[#a7150b]" />
//                   Document Viewer
//                 </span>
//                 <button
//                   onClick={() => setSelectedPdf(null)}
//                   className="p-2 hover:bg-gray-200 rounded-full transition-colors"
//                 >
//                   <X className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               <div className="flex-1 bg-gray-100 relative group">
//                 <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
//                 <iframe
//                   src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=0`}
//                   className="w-full h-full"
//                   title="PDF Viewer"
//                 />
//               </div>
              
//               <div className="bg-yellow-50 px-4 py-2 text-xs text-yellow-800 text-center border-t border-yellow-100 font-medium">
//                 Note: This document is for viewing purposes only. Downloading is restricted.
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, X, Calendar, AlertCircle, ExternalLink, ImageIcon } from 'lucide-react';
import { format } from 'date-fns';

// --- DATA: "General Notifications" Data ---
const NOTIFICATIONS_DATA = [
  {
    id: 101,
    title: 'Thaipusam Irumudi Festival 2025-26 - Official Instructions',
    date: '2025-11-27',
    fileSize: '1.2 MB',
    type: 'pdf', // Added type
    url: '/IRUMUDI-INSTRUCTIONS.pdf', // Make sure this file is in public/notices/
  },
  {
    id: 102,
    title: 'List of Mandatory Items for Irumudi Bag - 2025',
    date: '2025-12-22',
    fileSize: '450 kb',
    type: 'image', // This is an image
    url: '/notices/22.12.25.jpeg', // Use the exact filename you uploaded
  },
  {
    id: 103,
    title: 'District-wise Time Schedule for Irumudi Submission',
    date: '2025-12-12',
    fileSize: '320 kb',
    type: 'image',
    url: '/notices/12.12.2025.jpeg', 
  },
  {
    id: 104,
    title: 'Mandram Karuvarai Pani Schedule (Dec 2025)',
    date: '2025-12-12',
    fileSize: '380 kb',
    type: 'image',
    url: '/notices/12.12.25.jpeg',
  },
];

// --- NAVIGATION LINKS MAPPING ---
const SIDEBAR_LINKS = [
  { label: 'General Notifications', href: '/notifications', isActive: true },
  { label: 'Instructions to Districts', href: '/district-president-instructions', isActive: false },
  { label: 'Devotee Guidelines', href: '/irumudi-instruction', isActive: false },
  { label: 'Sanctum Service Schedule', href: '/notices/sanctum-schedule', isActive: false },
  { label: 'District-wise Timings', href: '/notices/district-timings', isActive: false }
];

export default function NotificationsPage() {
  const [selectedDoc, setSelectedDoc] = useState<{ url: string, type: string } | null>(null);

  // Sort Data (Newest First)
  const sortedData = NOTIFICATIONS_DATA.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Group by Date
  const groupedData = sortedData.reduce((acc, item) => {
    const dateKey = format(new Date(item.date), 'dd MM yyyy');
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(item);
    return acc;
  }, {} as Record<string, typeof sortedData>);

  return (
    <main className="min-h-screen bg-orange-50/30 pt-8 pb-16">
      
      {/* Page Header */}
      <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-white/80 mt-2 text-sm">Circulars, Instructions, and Guidelines.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        {/* LEFT SIDEBAR */}
        <aside className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden sticky top-24">
            <div className="bg-[#a7150b] px-4 py-3 border-b border-red-800">
              <h2 className="font-bold text-white uppercase tracking-wide text-sm">Categories</h2>
            </div>
            <nav className="flex flex-col">
              {SIDEBAR_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group ${
                    link.isActive
                      ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
                      : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
                  }`}
                >
                  {link.label}
                  {link.isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
              <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">General Notifications</h2>
              <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
                {sortedData.length} Documents
              </span>
            </div>

            {/* List Content */}
            <div className="p-2">
              {Object.keys(groupedData).length > 0 ? (
                Object.entries(groupedData).map(([date, items]) => (
                  <div key={date} className="mb-2">
                    <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-sm font-bold border-l-4 border-[#ffc107] flex items-center gap-2">
                       <Calendar className="w-4 h-4"/>
                       {date}
                    </div>
                    <div className="divide-y divide-gray-100">
                      {items.map((item) => (
                        <div key={item.id} className="group hover:bg-red-50/30 p-4 transition-all flex items-start md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
                              {item.title}
                            </h3>
                          </div>
                          <button
                            onClick={() => setSelectedDoc({ url: item.url, type: item.type })}
                            className="shrink-0 flex items-center gap-2 text-[#a7150b] bg-red-50 hover:bg-[#a7150b] hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-100"
                          >
                            {item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                            <span className="hidden sm:inline">VIEW</span>
                            <span className="opacity-60 font-normal ml-1 border-l border-current pl-2">{item.fileSize}</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-12 text-center text-gray-400">
                  <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
                  <p>No notifications found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DOCUMENT VIEWER MODAL */}
      <AnimatePresence>
        {selectedDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
                <span className="font-bold text-gray-700 flex items-center gap-2">
                  {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
                  Document Viewer
                </span>
                <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 bg-gray-100 relative group overflow-auto flex items-center justify-center">
                {/* LOGIC TO SWITCH BETWEEN PDF IFRAME AND IMAGE */}
                {selectedDoc.type === 'pdf' ? (
                  <>
                    <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
                    <iframe
                      src={`${selectedDoc.url}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-full"
                      title="PDF Viewer"
                    />
                  </>
                ) : (
                  <div className="relative w-full h-full p-4 flex items-center justify-center">
                     {/* Standard HTML img tag is often better for dynamic/modal loading than Next.js Image if dimensions are unknown */}
                    <img 
                      src={selectedDoc.url} 
                      alt="Notification Document" 
                      className="max-w-full max-h-full object-contain shadow-lg"
                    />
                  </div>
                )}
              </div>
              
              <div className="bg-yellow-50 px-4 py-2 text-xs text-yellow-800 text-center border-t border-yellow-100 font-medium">
                Note: This document is for viewing purposes only. Downloading is restricted.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}