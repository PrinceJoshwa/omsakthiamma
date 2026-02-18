// // // 'use client';

// // // import { useState, useMemo } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image'; 
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // // Added ChevronLeft and ChevronRight for slider navigation
// // // import { FileText, ChevronRight, ChevronLeft, X, Calendar, AlertCircle, ExternalLink, ImageIcon } from 'lucide-react';
// // // import { format, parseISO } from 'date-fns';

// // // // --- IMPORT DATA ---
// // // import { NOTIFICATIONS_DATA, NotificationItem } from '@/lib/notifications'; 

// // // // --- NAVIGATION LINKS MAPPING ---
// // // const SIDEBAR_LINKS = [
// // //   { label: 'General Notifications', href: '/notifications', isActive: true },
// // //   { label: 'Instructions to Districts', href: '/district-president-instructions', isActive: false },
// // //   { label: 'Devotee Guidelines', href: '/irumudi-instruction', isActive: false },
// // //   { label: 'Sanctum Service Schedule', href: '/notices/sanctum-schedule', isActive: false },
// // //   { label: 'District-wise Timings', href: '/notices/district-timings', isActive: false }
// // // ];

// // // export default function NotificationsPage() {
// // //   // Updated state to hold an array of URLs
// // //   const [selectedDoc, setSelectedDoc] = useState<{ urls: string[], type: string } | null>(null);
// // //   const [currentSlide, setCurrentSlide] = useState(0);

// // //   // --- LOGIC: Sort and Group ---
// // //   const groupedData = useMemo(() => {
// // //     // 1. Sort Data (Newest First based on the ISO date)
// // //     const sorted = [...NOTIFICATIONS_DATA].sort((a, b) => 
// // //       new Date(b.date).getTime() - new Date(a.date).getTime()
// // //     );

// // //     // 2. Group by Date (Convert to Indian Format: dd-MM-yyyy)
// // //     return sorted.reduce((acc, item) => {
// // //       const dateKey = format(parseISO(item.date), 'dd-MM-yyyy');
// // //       if (!acc[dateKey]) acc[dateKey] = [];
// // //       acc[dateKey].push(item);
// // //       return acc;
// // //     }, {} as Record<string, NotificationItem[]>);
// // //   }, []);

// // //   // --- HANDLERS ---
// // //   const handleOpenDoc = (urls: string[], type: string) => {
// // //     setSelectedDoc({ urls, type });
// // //     setCurrentSlide(0); // Always start from page 1
// // //   };

// // //   const nextSlide = (e: React.MouseEvent) => {
// // //     e.stopPropagation();
// // //     if (selectedDoc && currentSlide < selectedDoc.urls.length - 1) {
// // //       setCurrentSlide((prev) => prev + 1);
// // //     }
// // //   };

// // //   const prevSlide = (e: React.MouseEvent) => {
// // //     e.stopPropagation();
// // //     if (currentSlide > 0) {
// // //       setCurrentSlide((prev) => prev - 1);
// // //     }
// // //   };

// // //   const totalDocs = NOTIFICATIONS_DATA.length;

// // //   return (
// // //     <main className="min-h-screen bg-orange-50/30 pt-8 pb-16">
      
// // //       {/* Page Header */}
// // //       <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
// // //         <div className="max-w-7xl mx-auto px-4">
// // //           <h1 className="text-3xl font-bold">Notifications</h1>
// // //           <p className="text-white/80 mt-2 text-sm">Circulars, Instructions, and Guidelines.</p>
// // //         </div>
// // //       </div>

// // //       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
// // //         {/* LEFT SIDEBAR */}
// // //         <aside className="md:col-span-1">
// // //           <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden sticky top-24">
// // //             <div className="bg-[#a7150b] px-4 py-3 border-b border-red-800">
// // //               <h2 className="font-bold text-white uppercase tracking-wide text-sm">Categories</h2>
// // //             </div>
// // //             <nav className="flex flex-col">
// // //               {SIDEBAR_LINKS.map((link) => (
// // //                 <Link
// // //                   key={link.label}
// // //                   href={link.href}
// // //                   className={`px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group ${
// // //                     link.isActive
// // //                       ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
// // //                       : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
// // //                   }`}
// // //                 >
// // //                   {link.label}
// // //                   {link.isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
// // //                 </Link>
// // //               ))}
// // //             </nav>
// // //           </div>
// // //         </aside>

// // //         {/* RIGHT CONTENT AREA */}
// // //         <div className="md:col-span-3">
// // //           <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
// // //             {/* Header */}
// // //             <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
// // //               <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">General Notifications</h2>
// // //               <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
// // //                 {totalDocs} Documents
// // //               </span>
// // //             </div>

// // //             {/* List Content */}
// // //             <div className="p-2">
// // //               {Object.keys(groupedData).length > 0 ? (
// // //                 Object.entries(groupedData).map(([date, items]) => (
// // //                   <div key={date} className="mb-2">
// // //                     {/* Date Header: dd-MM-yyyy */}
// // //                     <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-sm font-bold border-l-4 border-[#ffc107] flex items-center gap-2">
// // //                        <Calendar className="w-4 h-4"/>
// // //                        {date}
// // //                     </div>
// // //                     <div className="divide-y divide-gray-100">
// // //                       {items.map((item) => (
// // //                         <div key={item.id} className="group hover:bg-red-50/30 p-4 transition-all flex items-start md:items-center justify-between gap-4">
// // //                           <div className="flex-1">
// // //                             <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
// // //                               {item.title}
// // //                             </h3>
// // //                             {/* Optional: Show '2 Pages' badge if multiple URLs exist */}
// // //                             {item.urls.length > 1 && (
// // //                               <span className="inline-block mt-1 text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
// // //                                 {item.urls.length} Pages
// // //                               </span>
// // //                             )}
// // //                           </div>
// // //                           <button
// // //                             onClick={() => handleOpenDoc(item.urls, item.type)}
// // //                             className="shrink-0 flex items-center gap-2 text-[#a7150b] bg-red-50 hover:bg-[#a7150b] hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-100"
// // //                           >
// // //                             {item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
// // //                             <span className="hidden sm:inline">VIEW</span>
// // //                             <span className="opacity-60 font-normal ml-1 border-l border-current pl-2">{item.fileSize}</span>
// // //                           </button>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <div className="p-12 text-center text-gray-400">
// // //                   <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
// // //                   <p>No notifications found.</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* DOCUMENT VIEWER MODAL */}
// // //       <AnimatePresence>
// // //         {selectedDoc && (
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             exit={{ opacity: 0 }}
// // //             className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// // //             onClick={() => setSelectedDoc(null)}
// // //           >
// // //             <motion.div
// // //               initial={{ scale: 0.95, opacity: 0 }}
// // //               animate={{ scale: 1, opacity: 1 }}
// // //               exit={{ scale: 0.95, opacity: 0 }}
// // //               onClick={(e) => e.stopPropagation()}
// // //               className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
// // //             >
// // //               {/* Modal Header */}
// // //               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
// // //                 <span className="font-bold text-gray-700 flex items-center gap-2">
// // //                   {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
// // //                   <span>Document Viewer</span>
// // //                   {/* Page Counter if multiple pages */}
// // //                   {selectedDoc.urls.length > 1 && (
// // //                     <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
// // //                       Page {currentSlide + 1} of {selectedDoc.urls.length}
// // //                     </span>
// // //                   )}
// // //                 </span>
// // //                 <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
// // //                   <X className="w-6 h-6 text-gray-600" />
// // //                 </button>
// // //               </div>

// // //               {/* Modal Content */}
// // //               <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
                
// // //                 {/* PREVIOUS ARROW (Only if multiple pages) */}
// // //                 {selectedDoc.urls.length > 1 && (
// // //                   <button 
// // //                     onClick={prevSlide}
// // //                     disabled={currentSlide === 0}
// // //                     className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// // //                   >
// // //                     <ChevronLeft className="w-6 h-6 text-gray-800" />
// // //                   </button>
// // //                 )}

// // //                 {/* NEXT ARROW (Only if multiple pages) */}
// // //                 {selectedDoc.urls.length > 1 && (
// // //                   <button 
// // //                     onClick={nextSlide}
// // //                     disabled={currentSlide === selectedDoc.urls.length - 1}
// // //                     className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// // //                   >
// // //                     <ChevronRight className="w-6 h-6 text-gray-800" />
// // //                   </button>
// // //                 )}

// // //                 {/* Main Content Area */}
// // //                 <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
// // //                   {selectedDoc.type === 'pdf' ? (
// // //                     <>
// // //                       <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
// // //                       <iframe
// // //                         key={selectedDoc.urls[currentSlide]} // Force reload on slide change
// // //                         src={`${selectedDoc.urls[currentSlide]}#toolbar=0&navpanes=0&scrollbar=0`}
// // //                         className="w-full h-full"
// // //                         title="PDF Viewer"
// // //                       />
// // //                     </>
// // //                   ) : (
// // //                     <img 
// // //                       src={selectedDoc.urls[currentSlide]} 
// // //                       alt={`Page ${currentSlide + 1}`} 
// // //                       className="max-w-full max-h-full object-contain shadow-lg animate-in fade-in duration-300"
// // //                     />
// // //                   )}
// // //                 </div>
// // //               </div>
              
// // //               <div className="bg-yellow-50 px-4 py-2 text-xs text-yellow-800 text-center border-t border-yellow-100 font-medium">
// // //                 Note: This document is for viewing purposes only. Downloading is restricted.
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </main>
// // //   );
// // // }

// // 'use client';

// // import { useState, useEffect, useMemo } from 'react';
// // import Link from 'next/link';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FileText, ChevronRight, ChevronLeft, X, Calendar, AlertCircle, ExternalLink, ImageIcon } from 'lucide-react';
// // import { format, parseISO } from 'date-fns';

// // // --- TYPE DEFINITION ---
// // export interface NotificationItem {
// //   id: string;
// //   title: string;
// //   date: string;
// //   fileSize: string;
// //   type: 'pdf' | 'image';
// //   urls: string[];
// // }

// // // --- NAVIGATION LINKS MAPPING ---
// // const SIDEBAR_LINKS = [
// //   { label: 'General Notifications', href: '/notices/notification', isActive: true },
// //   { label: 'Instructions to Districts', href: '/district-president-instructions', isActive: false },
// //   { label: 'Devotee Guidelines', href: '/irumudi-instruction', isActive: false },
// //   { label: 'Sanctum Service Schedule', href: '/notices/sanctum-schedule', isActive: false },
// //   { label: 'District-wise Timings', href: '/notices/district-timings', isActive: false }
// // ];

// // export default function NotificationsPage() {
// //   const [data, setData] = useState<NotificationItem[]>([]);
// //   const [loading, setLoading] = useState(true);
  
// //   // Viewer State
// //   const [selectedDoc, setSelectedDoc] = useState<{ urls: string[], type: string } | null>(null);
// //   const [currentSlide, setCurrentSlide] = useState(0);

// //   // --- FETCH DATA FROM JSON ---
// //   useEffect(() => {
// //     fetch('/notifications.json')
// //       .then((res) => res.json())
// //       .then((jsonData) => {
// //         setData(jsonData);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         console.error('Failed to load notifications', err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   // --- LOGIC: Sort and Group ---
// //   const groupedData = useMemo(() => {
// //     const sorted = [...data].sort((a, b) => 
// //       new Date(b.date).getTime() - new Date(a.date).getTime()
// //     );

// //     return sorted.reduce((acc, item) => {
// //       const dateKey = format(parseISO(item.date), 'dd-MM-yyyy');
// //       if (!acc[dateKey]) acc[dateKey] = [];
// //       acc[dateKey].push(item);
// //       return acc;
// //     }, {} as Record<string, NotificationItem[]>);
// //   }, [data]);

// //   // --- HANDLERS ---
// //   const handleOpenDoc = (urls: string[], type: string) => {
// //     setSelectedDoc({ urls, type });
// //     setCurrentSlide(0);
// //   };

// //   const nextSlide = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     if (selectedDoc && currentSlide < selectedDoc.urls.length - 1) {
// //       setCurrentSlide((prev) => prev + 1);
// //     }
// //   };

// //   const prevSlide = (e: React.MouseEvent) => {
// //     e.stopPropagation();
// //     if (currentSlide > 0) {
// //       setCurrentSlide((prev) => prev - 1);
// //     }
// //   };

// //   return (
// //     <main className="min-h-screen bg-orange-50/30 pt-8 pb-16">
      
// //       {/* Page Header */}
// //       <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
// //         <div className="max-w-7xl mx-auto px-4">
// //           <h1 className="text-3xl font-bold">Notifications</h1>
// //           <p className="text-white/80 mt-2 text-sm">Circulars, Instructions, and Guidelines.</p>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
// //         {/* LEFT SIDEBAR */}
// //         <aside className="md:col-span-1">
// //           <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden sticky top-24">
// //             <div className="bg-[#a7150b] px-4 py-3 border-b border-red-800">
// //               <h2 className="font-bold text-white uppercase tracking-wide text-sm">Categories</h2>
// //             </div>
// //             <nav className="flex flex-col">
// //               {SIDEBAR_LINKS.map((link) => (
// //                 <Link
// //                   key={link.label}
// //                   href={link.href}
// //                   className={`px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group ${
// //                     link.isActive
// //                       ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
// //                       : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
// //                   }`}
// //                 >
// //                   {link.label}
// //                   {link.isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
// //                 </Link>
// //               ))}
// //             </nav>
// //           </div>
// //         </aside>

// //         {/* RIGHT CONTENT AREA */}
// //         <div className="md:col-span-3">
// //           <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
// //             {/* Header */}
// //             <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
// //               <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">General Notifications</h2>
// //               <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
// //                 {data.length} Documents
// //               </span>
// //             </div>

// //             {/* List Content */}
// //             <div className="p-2">
// //               {loading ? (
// //                  <div className="p-12 text-center text-gray-400">Loading notifications...</div>
// //               ) : Object.keys(groupedData).length > 0 ? (
// //                 Object.entries(groupedData).map(([date, items]) => (
// //                   <div key={date} className="mb-2">
// //                     <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-sm font-bold border-l-4 border-[#ffc107] flex items-center gap-2">
// //                        <Calendar className="w-4 h-4"/>
// //                        {date}
// //                     </div>
// //                     <div className="divide-y divide-gray-100">
// //                       {items.map((item) => (
// //                         <div key={item.id} className="group hover:bg-red-50/30 p-4 transition-all flex items-start md:items-center justify-between gap-4">
// //                           <div className="flex-1">
// //                             <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
// //                               {item.title}
// //                             </h3>
// //                             {item.urls.length > 1 && (
// //                               <span className="inline-block mt-1 text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
// //                                 {item.urls.length} Pages
// //                               </span>
// //                             )}
// //                           </div>
// //                           <button
// //                             onClick={() => handleOpenDoc(item.urls, item.type as string)}
// //                             className="shrink-0 flex items-center gap-2 text-[#a7150b] bg-red-50 hover:bg-[#a7150b] hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-100"
// //                           >
// //                             {item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
// //                             <span className="hidden sm:inline">VIEW</span>
// //                             <span className="opacity-60 font-normal ml-1 border-l border-current pl-2">{item.fileSize}</span>
// //                           </button>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="p-12 text-center text-gray-400">
// //                   <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
// //                   <p>No notifications found.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* DOCUMENT VIEWER MODAL */}
// //       <AnimatePresence>
// //         {selectedDoc && (
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
// //             onClick={() => setSelectedDoc(null)}
// //           >
// //             <motion.div
// //               initial={{ scale: 0.95, opacity: 0 }}
// //               animate={{ scale: 1, opacity: 1 }}
// //               exit={{ scale: 0.95, opacity: 0 }}
// //               onClick={(e) => e.stopPropagation()}
// //               className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
// //             >
// //               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
// //                 <span className="font-bold text-gray-700 flex items-center gap-2">
// //                   {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
// //                   <span>Document Viewer</span>
// //                   {selectedDoc.urls.length > 1 && (
// //                     <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
// //                       Page {currentSlide + 1} of {selectedDoc.urls.length}
// //                     </span>
// //                   )}
// //                 </span>
// //                 <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
// //                   <X className="w-6 h-6 text-gray-600" />
// //                 </button>
// //               </div>

// //               <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
// //                 {selectedDoc.urls.length > 1 && (
// //                   <button 
// //                     onClick={prevSlide}
// //                     disabled={currentSlide === 0}
// //                     className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// //                   >
// //                     <ChevronLeft className="w-6 h-6 text-gray-800" />
// //                   </button>
// //                 )}
// //                 {selectedDoc.urls.length > 1 && (
// //                   <button 
// //                     onClick={nextSlide}
// //                     disabled={currentSlide === selectedDoc.urls.length - 1}
// //                     className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// //                   >
// //                     <ChevronRight className="w-6 h-6 text-gray-800" />
// //                   </button>
// //                 )}

// //                 <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
// //                   {selectedDoc.type === 'pdf' ? (
// //                     <>
// //                       <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
// //                       <iframe
// //                         key={selectedDoc.urls[currentSlide]}
// //                         src={`${selectedDoc.urls[currentSlide]}#toolbar=0&navpanes=0&scrollbar=0`}
// //                         className="w-full h-full"
// //                         title="PDF Viewer"
// //                       />
// //                     </>
// //                   ) : (
// //                     <img 
// //                       src={selectedDoc.urls[currentSlide]} 
// //                       alt={`Page ${currentSlide + 1}`} 
// //                       className="max-w-full max-h-full object-contain shadow-lg animate-in fade-in duration-300"
// //                     />
// //                   )}
// //                 </div>
// //               </div>
              
// //               <div className="bg-yellow-50 px-4 py-2 text-xs text-yellow-800 text-center border-t border-yellow-100 font-medium">
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

// import { useState, useEffect, useMemo } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FileText, ChevronRight, ChevronLeft, X, Calendar, AlertCircle, ExternalLink, ImageIcon } from 'lucide-react';
// import { format, parseISO } from 'date-fns';

// // --- TYPE DEFINITION ---
// export interface NotificationItem {
//   id: string;
//   title: string;
//   date: string; // ISO format: YYYY-MM-DD
//   fileSize: string;
//   type: 'pdf' | 'image';
//   urls: string[];
//   // NEW: Category field to distinguish between 'general' and 'district'
//   category?: 'general' | 'district'; 
// }

// // --- NAVIGATION CONFIGURATION ---
// // I have updated this structure to handle both "Tabs" (internal switch) and "Links" (external pages)
// // preserving the exact list you had before.
// const SIDEBAR_ITEMS = [
//   { 
//     id: 'general', 
//     label: 'General Notifications', 
//     type: 'tab', // Stays on this page
//     href: '/notices/notification' 
//   },
//   { 
//     id: 'district', 
//     label: 'Instructions to Districts', 
//     type: 'tab', // Now stays on this page (was previously external)
//     href: '#' 
//   },
//   { 
//     label: 'Devotee Guidelines', 
//     type: 'link', // Navigates away
//     href: '/irumudi-instruction' 
//   },
//   { 
//     label: 'Sanctum Service Schedule', 
//     type: 'link', 
//     href: '/notices/sanctum-schedule' 
//   },
//   { 
//     label: 'District-wise Timings', 
//     type: 'link', 
//     href: '/notices/district-timings' 
//   }
// ];

// export default function NotificationsPage() {
//   const [data, setData] = useState<NotificationItem[]>([]);
//   const [loading, setLoading] = useState(true);
  
//   // --- STATE: Active Category Tab ---
//   // Defaults to 'general'. This controls which data is shown.
//   const [activeTab, setActiveTab] = useState<string>('general');

//   // Viewer State (Existing)
//   const [selectedDoc, setSelectedDoc] = useState<{ urls: string[], type: string } | null>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // --- FETCH DATA FROM JSON ---
//   useEffect(() => {
//     fetch('/notifications.json')
//       .then((res) => res.json())
//       .then((jsonData) => {
//         setData(jsonData);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Failed to load notifications', err);
//         setLoading(false);
//       });
//   }, []);

//   // --- LOGIC: Filter, Sort and Group ---
//   const groupedData = useMemo(() => {
//     // 1. Filter by Active Tab
//     const filtered = data.filter(item => {
//       // Default to 'general' if category is missing to prevent breaking old data
//       const itemCategory = item.category || 'general'; 
//       return itemCategory === activeTab;
//     });

//     // 2. Sort Data (Newest First) - Applies to both categories
//     const sorted = [...filtered].sort((a, b) => 
//       new Date(b.date).getTime() - new Date(a.date).getTime()
//     );

//     // 3. Group by Date (Existing Indian Format Logic: dd-MM-yyyy)
//     return sorted.reduce((acc, item) => {
//       const dateKey = format(parseISO(item.date), 'dd-MM-yyyy');
//       if (!acc[dateKey]) acc[dateKey] = [];
//       acc[dateKey].push(item);
//       return acc;
//     }, {} as Record<string, NotificationItem[]>);
//   }, [data, activeTab]);

//   // --- HANDLERS (Existing) ---
//   const handleOpenDoc = (urls: string[], type: string) => {
//     setSelectedDoc({ urls, type });
//     setCurrentSlide(0);
//   };

//   const nextSlide = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (selectedDoc && currentSlide < selectedDoc.urls.length - 1) {
//       setCurrentSlide((prev) => prev + 1);
//     }
//   };

//   const prevSlide = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     if (currentSlide > 0) {
//       setCurrentSlide((prev) => prev - 1);
//     }
//   };

//   // Helper to get current Title
//   const getCurrentTitle = () => {
//     const currentItem = SIDEBAR_ITEMS.find(item => 
//       (item.type === 'tab' && item.id === activeTab)
//     );
//     return currentItem ? currentItem.label : 'Notifications';
//   };

//   return (
//     <main className="min-h-screen bg-orange-50/30 pt-8 pb-16">
      
//       {/* Page Header */}
//       <div className="bg-[#a7150b] text-white py-8 mb-8 shadow-md">
//         <div className="max-w-7xl mx-auto px-4">
//           <h1 className="text-3xl font-bold">Notifications</h1>
//           <p className="text-white/80 mt-2 text-sm">Circulars, Instructions, and Guidelines.</p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        
//         {/* LEFT SIDEBAR */}
//         <aside className="md:col-span-1">
//           <div className="bg-white rounded-lg shadow-sm border border-orange-100 overflow-hidden sticky top-24">
//             <div className="bg-[#a7150b] px-4 py-3 border-b border-red-800">
//               <h2 className="font-bold text-white uppercase tracking-wide text-sm">Categories</h2>
//             </div>
//             <nav className="flex flex-col">
//               {SIDEBAR_ITEMS.map((link) => {
//                 // Determine if this item is currently active
//                 const isActive = link.type === 'tab' && link.id === activeTab;
                
//                 // Common styling classes
//                 const linkClasses = `px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group cursor-pointer ${
//                   isActive
//                     ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
//                     : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
//                 }`;

//                 // Render logic: If it's a 'tab', use button (stay on page). If 'link', use Link (go to page).
//                 if (link.type === 'tab') {
//                   return (
//                     <button
//                       key={link.label}
//                       onClick={() => setActiveTab(link.id as string)}
//                       className={linkClasses}
//                     >
//                       {link.label}
//                       {isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
//                     </button>
//                   );
//                 } else {
//                   return (
//                     <Link
//                       key={link.label}
//                       href={link.href}
//                       className={linkClasses}
//                     >
//                       {link.label}
//                       <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
//                     </Link>
//                   );
//                 }
//               })}
//             </nav>
//           </div>
//         </aside>

//         {/* RIGHT CONTENT AREA */}
//         <div className="md:col-span-3">
//           <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
//             {/* Header */}
//             <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
//               <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">
//                 {getCurrentTitle()}
//               </h2>
//               <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
//                 {Object.values(groupedData).flat().length} Documents
//               </span>
//             </div>

//             {/* List Content */}
//             <div className="p-2">
//               {loading ? (
//                  <div className="p-12 text-center text-gray-400">Loading notifications...</div>
//               ) : Object.keys(groupedData).length > 0 ? (
//                 Object.entries(groupedData).map(([date, items]) => (
//                   <div key={date} className="mb-2">
//                     {/* Date Header: dd-MM-yyyy */}
//                     <div className="bg-yellow-50 text-yellow-800 px-4 py-2 text-sm font-bold border-l-4 border-[#ffc107] flex items-center gap-2">
//                        <Calendar className="w-4 h-4"/>
//                        {date}
//                     </div>
//                     <div className="divide-y divide-gray-100">
//                       {items.map((item) => (
//                         <div key={item.id} className="group hover:bg-red-50/30 p-4 transition-all flex items-start md:items-center justify-between gap-4">
//                           <div className="flex-1">
//                             <h3 className="text-gray-800 font-medium group-hover:text-[#a7150b] transition-colors text-sm md:text-base leading-relaxed">
//                               {item.title}
//                             </h3>
//                             {/* 'Pages' badge if multiple URLs exist */}
//                             {item.urls.length > 1 && (
//                               <span className="inline-block mt-1 text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
//                                 {item.urls.length} Pages
//                               </span>
//                             )}
//                           </div>
//                           <button
//                             onClick={() => handleOpenDoc(item.urls, item.type as string)}
//                             className="shrink-0 flex items-center gap-2 text-[#a7150b] bg-red-50 hover:bg-[#a7150b] hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-100"
//                           >
//                             {item.type === 'pdf' ? <FileText className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
//                             <span className="hidden sm:inline">VIEW</span>
//                             <span className="opacity-60 font-normal ml-1 border-l border-current pl-2">{item.fileSize}</span>
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="p-12 text-center text-gray-400">
//                   <AlertCircle className="w-12 h-12 mx-auto mb-3 opacity-20" />
//                   <p>No notifications found for this category.</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* DOCUMENT VIEWER MODAL (UNCHANGED) */}
//       <AnimatePresence>
//         {selectedDoc && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
//             onClick={() => setSelectedDoc(null)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white w-full max-w-5xl h-[85vh] rounded-xl overflow-hidden shadow-2xl flex flex-col relative"
//             >
//               {/* Modal Header */}
//               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
//                 <span className="font-bold text-gray-700 flex items-center gap-2">
//                   {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
//                   <span>Document Viewer</span>
//                   {/* Page Counter if multiple pages */}
//                   {selectedDoc.urls.length > 1 && (
//                     <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
//                       Page {currentSlide + 1} of {selectedDoc.urls.length}
//                     </span>
//                   )}
//                 </span>
//                 <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
//                   <X className="w-6 h-6 text-gray-600" />
//                 </button>
//               </div>

//               {/* Modal Content */}
//               <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
                
//                 {/* PREVIOUS ARROW (Only if multiple pages) */}
//                 {selectedDoc.urls.length > 1 && (
//                   <button 
//                     onClick={prevSlide}
//                     disabled={currentSlide === 0}
//                     className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
//                   >
//                     <ChevronLeft className="w-6 h-6 text-gray-800" />
//                   </button>
//                 )}

//                 {/* NEXT ARROW (Only if multiple pages) */}
//                 {selectedDoc.urls.length > 1 && (
//                   <button 
//                     onClick={nextSlide}
//                     disabled={currentSlide === selectedDoc.urls.length - 1}
//                     className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
//                   >
//                     <ChevronRight className="w-6 h-6 text-gray-800" />
//                   </button>
//                 )}

//                 {/* Main Content Area */}
//                 <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
//                   {selectedDoc.type === 'pdf' ? (
//                     <>
//                       <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
//                       <iframe
//                         key={selectedDoc.urls[currentSlide]} // Force reload on slide change
//                         src={`${selectedDoc.urls[currentSlide]}#toolbar=0&navpanes=0&scrollbar=0`}
//                         className="w-full h-full"
//                         title="PDF Viewer"
//                       />
//                     </>
//                   ) : (
//                     <img 
//                       src={selectedDoc.urls[currentSlide]} 
//                       alt={`Page ${currentSlide + 1}`} 
//                       className="max-w-full max-h-full object-contain shadow-lg animate-in fade-in duration-300"
//                     />
//                   )}
//                 </div>
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

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, ChevronRight, ChevronLeft, X, Calendar, AlertCircle, ExternalLink, ImageIcon } from 'lucide-react';
import { format, parseISO, isValid } from 'date-fns';

// --- TYPE DEFINITION ---
export interface NotificationItem {
  id: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  fileSize: string;
  type: 'pdf' | 'image';
  urls: string[];
  // NEW: Category field to distinguish between 'general' and 'district'
  category?: 'general' | 'district'; 
}

// --- NAVIGATION CONFIGURATION ---
const SIDEBAR_ITEMS = [
  { 
    id: 'general', 
    label: 'General Notifications', 
    type: 'tab', 
    href: '/notices/notification' 
  },
  { 
    id: 'district', 
    label: 'Instructions to District Incharge', 
    type: 'tab', 
    href: '#' 
  },
  { 
    label: 'Devotee Guidelines', 
    type: 'link', 
    href: '/irumudi-instruction' 
  },
  { 
    label: 'Sanctum Service Schedule', 
    type: 'link', 
    href: '/notices/sanctum-schedule' 
  },
  { 
    label: 'District-wise Timings', 
    type: 'link', 
    href: '/notices/district-timings' 
  }
];

export default function NotificationsPage() {
  const [data, setData] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // --- STATE: Active Category Tab ---
  const [activeTab, setActiveTab] = useState<string>('general');

  // Viewer State
  const [selectedDoc, setSelectedDoc] = useState<{ urls: string[], type: string } | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- FETCH DATA FROM JSON ---
  useEffect(() => {
    fetch('/notifications.json')
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load notifications', err);
        setLoading(false);
      });
  }, []);

  // --- LOGIC: Filter, Sort and Group ---
  const groupedData = useMemo(() => {
    // 1. Filter by Active Tab
    const filtered = data.filter(item => {
      const itemCategory = item.category || 'general'; 
      return itemCategory === activeTab;
    });

    // 2. Sort Data (Newest First)
    const sorted = [...filtered].sort((a, b) => {
      // Defensive sorting: safely handle potential invalid dates
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

    // 3. Group by Date (Safe Grouping)
    return sorted.reduce((acc, item) => {
      let dateKey = 'Recent'; // Fallback if date is missing/invalid
      
      try {
        if (item.date) {
          const parsedDate = parseISO(item.date);
          // Check if date is valid before formatting
          if (isValid(parsedDate)) {
            dateKey = format(parsedDate, 'dd-MM-yyyy');
          }
        }
      } catch (error) {
        console.warn('Skipping invalid date for item:', item.title);
      }

      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(item);
      return acc;
    }, {} as Record<string, NotificationItem[]>);
  }, [data, activeTab]);

  // --- HANDLERS ---
  const handleOpenDoc = (urls: string[], type: string) => {
    setSelectedDoc({ urls, type });
    setCurrentSlide(0);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedDoc && currentSlide < selectedDoc.urls.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Helper to get current Title
  const getCurrentTitle = () => {
    const currentItem = SIDEBAR_ITEMS.find(item => 
      (item.type === 'tab' && item.id === activeTab)
    );
    return currentItem ? currentItem.label : 'Notifications';
  };

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
              {SIDEBAR_ITEMS.map((link) => {
                const isActive = link.type === 'tab' && link.id === activeTab;
                
                const linkClasses = `px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
                    : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
                }`;

                if (link.type === 'tab') {
                  return (
                    <button
                      key={link.label}
                      onClick={() => setActiveTab(link.id as string)}
                      className={linkClasses}
                    >
                      {link.label}
                      {isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={linkClasses}
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
                    </Link>
                  );
                }
              })}
            </nav>
          </div>
        </aside>

        {/* RIGHT CONTENT AREA */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
            {/* Header */}
            <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
              <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">
                {getCurrentTitle()}
              </h2>
              <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
                {Object.values(groupedData).flat().length} Documents
              </span>
            </div>

            {/* List Content */}
            <div className="p-2">
              {loading ? (
                 <div className="p-12 text-center text-gray-400">Loading notifications...</div>
              ) : Object.keys(groupedData).length > 0 ? (
                Object.entries(groupedData).map(([date, items]) => (
                  <div key={date} className="mb-2">
                    {/* Date Header: dd-MM-yyyy */}
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
                            {item.urls.length > 1 && (
                              <span className="inline-block mt-1 text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full border border-gray-200">
                                {item.urls.length} Pages
                              </span>
                            )}
                          </div>
                          <button
                            onClick={() => handleOpenDoc(item.urls, item.type as string)}
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
                  <p>No notifications found for this category.</p>
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
                  <span>Document Viewer</span>
                  {selectedDoc.urls.length > 1 && (
                    <span className="ml-2 text-xs font-normal text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                      Page {currentSlide + 1} of {selectedDoc.urls.length}
                    </span>
                  )}
                </span>
                <button onClick={() => setSelectedDoc(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
                {selectedDoc.urls.length > 1 && (
                  <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>
                )}

                {selectedDoc.urls.length > 1 && (
                  <button 
                    onClick={nextSlide}
                    disabled={currentSlide === selectedDoc.urls.length - 1}
                    className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                )}

                <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
                  {selectedDoc.type === 'pdf' ? (
                    <>
                      <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
                      <iframe
                        key={selectedDoc.urls[currentSlide]}
                        src={`${selectedDoc.urls[currentSlide]}#toolbar=0&navpanes=0&scrollbar=0`}
                        className="w-full h-full"
                        title="PDF Viewer"
                      />
                    </>
                  ) : (
                    <img 
                      src={selectedDoc.urls[currentSlide]} 
                      alt={`Page ${currentSlide + 1}`} 
                      className="max-w-full max-h-full object-contain shadow-lg animate-in fade-in duration-300"
                    />
                  )}
                </div>
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