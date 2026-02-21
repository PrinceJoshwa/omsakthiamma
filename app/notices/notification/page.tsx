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
// //   date: string; // ISO format: YYYY-MM-DD
// //   fileSize: string;
// //   type: 'pdf' | 'image';
// //   urls: string[];
// //   // NEW: Category field to distinguish between 'general' and 'district'
// //   category?: 'general' | 'district'; 
// // }

// // // --- NAVIGATION CONFIGURATION ---
// // // I have updated this structure to handle both "Tabs" (internal switch) and "Links" (external pages)
// // // preserving the exact list you had before.
// // const SIDEBAR_ITEMS = [
// //   { 
// //     id: 'general', 
// //     label: 'General Notifications', 
// //     type: 'tab', // Stays on this page
// //     href: '/notices/notification' 
// //   },
// //   { 
// //     id: 'district', 
// //     label: 'Instructions to Districts', 
// //     type: 'tab', // Now stays on this page (was previously external)
// //     href: '#' 
// //   },
// //   { 
// //     label: 'Devotee Guidelines', 
// //     type: 'link', // Navigates away
// //     href: '/irumudi-instruction' 
// //   },
// //   { 
// //     label: 'Sanctum Service Schedule', 
// //     type: 'link', 
// //     href: '/notices/sanctum-schedule' 
// //   },
// //   { 
// //     label: 'District-wise Timings', 
// //     type: 'link', 
// //     href: '/notices/district-timings' 
// //   }
// // ];

// // export default function NotificationsPage() {
// //   const [data, setData] = useState<NotificationItem[]>([]);
// //   const [loading, setLoading] = useState(true);
  
// //   // --- STATE: Active Category Tab ---
// //   // Defaults to 'general'. This controls which data is shown.
// //   const [activeTab, setActiveTab] = useState<string>('general');

// //   // Viewer State (Existing)
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

// //   // --- LOGIC: Filter, Sort and Group ---
// //   const groupedData = useMemo(() => {
// //     // 1. Filter by Active Tab
// //     const filtered = data.filter(item => {
// //       // Default to 'general' if category is missing to prevent breaking old data
// //       const itemCategory = item.category || 'general'; 
// //       return itemCategory === activeTab;
// //     });

// //     // 2. Sort Data (Newest First) - Applies to both categories
// //     const sorted = [...filtered].sort((a, b) => 
// //       new Date(b.date).getTime() - new Date(a.date).getTime()
// //     );

// //     // 3. Group by Date (Existing Indian Format Logic: dd-MM-yyyy)
// //     return sorted.reduce((acc, item) => {
// //       const dateKey = format(parseISO(item.date), 'dd-MM-yyyy');
// //       if (!acc[dateKey]) acc[dateKey] = [];
// //       acc[dateKey].push(item);
// //       return acc;
// //     }, {} as Record<string, NotificationItem[]>);
// //   }, [data, activeTab]);

// //   // --- HANDLERS (Existing) ---
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

// //   // Helper to get current Title
// //   const getCurrentTitle = () => {
// //     const currentItem = SIDEBAR_ITEMS.find(item => 
// //       (item.type === 'tab' && item.id === activeTab)
// //     );
// //     return currentItem ? currentItem.label : 'Notifications';
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
// //               {SIDEBAR_ITEMS.map((link) => {
// //                 // Determine if this item is currently active
// //                 const isActive = link.type === 'tab' && link.id === activeTab;
                
// //                 // Common styling classes
// //                 const linkClasses = `px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group cursor-pointer ${
// //                   isActive
// //                     ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
// //                     : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
// //                 }`;

// //                 // Render logic: If it's a 'tab', use button (stay on page). If 'link', use Link (go to page).
// //                 if (link.type === 'tab') {
// //                   return (
// //                     <button
// //                       key={link.label}
// //                       onClick={() => setActiveTab(link.id as string)}
// //                       className={linkClasses}
// //                     >
// //                       {link.label}
// //                       {isActive ? <ChevronRight className="w-4 h-4" /> : <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
// //                     </button>
// //                   );
// //                 } else {
// //                   return (
// //                     <Link
// //                       key={link.label}
// //                       href={link.href}
// //                       className={linkClasses}
// //                     >
// //                       {link.label}
// //                       <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-50 transition-opacity" />
// //                     </Link>
// //                   );
// //                 }
// //               })}
// //             </nav>
// //           </div>
// //         </aside>

// //         {/* RIGHT CONTENT AREA */}
// //         <div className="md:col-span-3">
// //           <div className="bg-white rounded-lg shadow-sm border border-orange-100 min-h-[500px]">
// //             {/* Header */}
// //             <div className="px-6 py-4 border-b border-orange-100 flex items-center justify-between bg-white rounded-t-lg">
// //               <h2 className="text-xl font-bold text-[#a7150b] uppercase tracking-tight">
// //                 {getCurrentTitle()}
// //               </h2>
// //               <span className="text-xs font-semibold bg-orange-100 text-[#a7150b] px-2 py-1 rounded">
// //                 {Object.values(groupedData).flat().length} Documents
// //               </span>
// //             </div>

// //             {/* List Content */}
// //             <div className="p-2">
// //               {loading ? (
// //                  <div className="p-12 text-center text-gray-400">Loading notifications...</div>
// //               ) : Object.keys(groupedData).length > 0 ? (
// //                 Object.entries(groupedData).map(([date, items]) => (
// //                   <div key={date} className="mb-2">
// //                     {/* Date Header: dd-MM-yyyy */}
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
// //                             {/* 'Pages' badge if multiple URLs exist */}
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
// //                   <p>No notifications found for this category.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* DOCUMENT VIEWER MODAL (UNCHANGED) */}
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
// //               {/* Modal Header */}
// //               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
// //                 <span className="font-bold text-gray-700 flex items-center gap-2">
// //                   {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
// //                   <span>Document Viewer</span>
// //                   {/* Page Counter if multiple pages */}
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

// //               {/* Modal Content */}
// //               <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
                
// //                 {/* PREVIOUS ARROW (Only if multiple pages) */}
// //                 {selectedDoc.urls.length > 1 && (
// //                   <button 
// //                     onClick={prevSlide}
// //                     disabled={currentSlide === 0}
// //                     className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// //                   >
// //                     <ChevronLeft className="w-6 h-6 text-gray-800" />
// //                   </button>
// //                 )}

// //                 {/* NEXT ARROW (Only if multiple pages) */}
// //                 {selectedDoc.urls.length > 1 && (
// //                   <button 
// //                     onClick={nextSlide}
// //                     disabled={currentSlide === selectedDoc.urls.length - 1}
// //                     className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
// //                   >
// //                     <ChevronRight className="w-6 h-6 text-gray-800" />
// //                   </button>
// //                 )}

// //                 {/* Main Content Area */}
// //                 <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
// //                   {selectedDoc.type === 'pdf' ? (
// //                     <>
// //                       <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
// //                       <iframe
// //                         key={selectedDoc.urls[currentSlide]} // Force reload on slide change
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
// import { format, parseISO, isValid } from 'date-fns';

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
// const SIDEBAR_ITEMS = [
//   { 
//     id: 'general', 
//     label: 'General Notifications', 
//     type: 'tab', 
//     href: '/notices/notification' 
//   },
//   { 
//     id: 'district', 
//     label: 'Instructions to District Incharge', 
//     type: 'tab', 
//     href: '#' 
//   },
//   { 
//     label: 'Devotee Guidelines', 
//     type: 'link', 
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
//   const [activeTab, setActiveTab] = useState<string>('general');

//   // Viewer State
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
//       const itemCategory = item.category || 'general'; 
//       return itemCategory === activeTab;
//     });

//     // 2. Sort Data (Newest First)
//     const sorted = [...filtered].sort((a, b) => {
//       // Defensive sorting: safely handle potential invalid dates
//       const dateA = a.date ? new Date(a.date).getTime() : 0;
//       const dateB = b.date ? new Date(b.date).getTime() : 0;
//       return dateB - dateA;
//     });

//     // 3. Group by Date (Safe Grouping)
//     return sorted.reduce((acc, item) => {
//       let dateKey = 'Recent'; // Fallback if date is missing/invalid
      
//       try {
//         if (item.date) {
//           const parsedDate = parseISO(item.date);
//           // Check if date is valid before formatting
//           if (isValid(parsedDate)) {
//             dateKey = format(parsedDate, 'dd-MM-yyyy');
//           }
//         }
//       } catch (error) {
//         console.warn('Skipping invalid date for item:', item.title);
//       }

//       if (!acc[dateKey]) acc[dateKey] = [];
//       acc[dateKey].push(item);
//       return acc;
//     }, {} as Record<string, NotificationItem[]>);
//   }, [data, activeTab]);

//   // --- HANDLERS ---
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
//                 const isActive = link.type === 'tab' && link.id === activeTab;
                
//                 const linkClasses = `px-4 py-4 text-left text-sm font-medium border-b border-gray-100 last:border-0 transition-colors flex items-center justify-between group cursor-pointer ${
//                   isActive
//                     ? 'bg-red-50 text-[#a7150b] border-l-4 border-l-[#a7150b]'
//                     : 'text-gray-600 hover:bg-orange-50 hover:text-gray-900 border-l-4 border-l-transparent'
//                 }`;

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

//       {/* DOCUMENT VIEWER MODAL */}
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
//               <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
//                 <span className="font-bold text-gray-700 flex items-center gap-2">
//                   {selectedDoc.type === 'pdf' ? <FileText className="w-5 h-5 text-[#a7150b]" /> : <ImageIcon className="w-5 h-5 text-[#a7150b]" />}
//                   <span>Document Viewer</span>
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

//               <div className="flex-1 bg-gray-100 relative group overflow-hidden flex items-center justify-center">
//                 {selectedDoc.urls.length > 1 && (
//                   <button 
//                     onClick={prevSlide}
//                     disabled={currentSlide === 0}
//                     className={`absolute left-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
//                   >
//                     <ChevronLeft className="w-6 h-6 text-gray-800" />
//                   </button>
//                 )}

//                 {selectedDoc.urls.length > 1 && (
//                   <button 
//                     onClick={nextSlide}
//                     disabled={currentSlide === selectedDoc.urls.length - 1}
//                     className={`absolute right-4 z-20 p-2 rounded-full bg-white/80 shadow-lg backdrop-blur hover:bg-white transition-all ${currentSlide === selectedDoc.urls.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100 hover:scale-110'}`}
//                   >
//                     <ChevronRight className="w-6 h-6 text-gray-800" />
//                   </button>
//                 )}

//                 <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
//                   {selectedDoc.type === 'pdf' ? (
//                     <>
//                       <div className="absolute inset-0 z-10 w-full h-full" onContextMenu={(e) => e.preventDefault()} style={{ pointerEvents: 'none' }}></div>
//                       <iframe
//                         key={selectedDoc.urls[currentSlide]}
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
import { FileText, ChevronRight, ChevronLeft, X, Calendar, AlertCircle, ExternalLink, ImageIcon, CheckCircle2, Info } from 'lucide-react';
import { format, parseISO, isValid } from 'date-fns';

// --- TYPE DEFINITION ---
export interface NotificationItem {
  id: string;
  title: string;
  date: string; // ISO format: YYYY-MM-DD
  fileSize: string;
  type: 'pdf' | 'image';
  urls: string[];
  category?: 'general' | 'district'; 
}

// --- NAVIGATION CONFIGURATION ---
const SIDEBAR_ITEMS = [
  { 
    id: 'world-record', 
    label: 'World Record Attempt 2026', 
    type: 'tab', 
    href: '#' 
  },
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
  // NEW CATEGORY ADDED HERE
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
    const filtered = data.filter(item => {
      const itemCategory = item.category || 'general'; 
      return itemCategory === activeTab;
    });

    const sorted = [...filtered].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

    return sorted.reduce((acc, item) => {
      let dateKey = 'Recent'; 
      
      try {
        if (item.date) {
          const parsedDate = parseISO(item.date);
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
                {activeTab === 'world-record' ? '3 Documents' : `${Object.values(groupedData).flat().length} Documents`}
              </span>
            </div>

            {/* List Content */}
            <div className="p-2">
              {/* --- NEW WORLD RECORD TAB UI --- */}
              {activeTab === 'world-record' ? (
                <div className="p-4 sm:p-6 animate-in fade-in duration-500">
                  
                  {/* Premium Hero Image Section */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8 group bg-black">
                    <img 
                      src="https://res.cloudinary.com/dvd7o5nph/image/upload/v1771673388/WORLD_RECORD_POSTER.jpg_kkmzi9.jpg" 
                      alt="World Record Attempt Banner" 
                      className="w-full h-auto max-h-[400px] object-fill opacity-90 transition-transform duration-700 group-hover:scale-105" 
                    />
                    {/* Gradient Overlay for better contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                    {/* <div className="absolute bottom-0 left-0 p-6 md:p-8 z-10 w-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                          86th Avatar Maha Mangala Festival
                        </span>
                      </div>
                      <h3 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-md leading-tight">
                        Drawing of Sri Chakra & <br className="hidden md:block" /> Guru Potri Kodi Archana
                      </h3>
                    </div> */}
                  </div>

                  {/* Information Layout Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    
                    {/* Left Main Message Content (Spans 2 columns) */}
                    <div className="md:col-span-2 bg-gradient-to-br from-orange-50 to-red-50/30 rounded-2xl p-6 md:p-8 border border-orange-100/50 shadow-sm relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 text-[#a7150b] opacity-5">
                         <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 22H22L12 2Z"/></svg>
                      </div>
                      
                      <div className="text-center md:text-left mb-6">
                        <p className="font-black text-2xl text-[#a7150b] tracking-tight">Om Sakthi</p>
                        <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-xl text-orange-500 font-bold tracking-widest">
                          {/* <span>🔱</span><span>86</span><span>🔱</span><span>86</span><span>🔱</span> */}
                        </div>
                      </div>

                      <div className="space-y-4 text-gray-700">
                        <p className="font-semibold text-lg text-gray-900">
                          Let us observe this auspicious day as a day of spiritual awakening for all beings.
                        </p>
                        <div className="bg-white/80 backdrop-blur p-5 rounded-xl shadow-sm border border-white">
                          <p className="leading-relaxed">
                            By chanting the Guru Potri Mantras (9 times), performing Kodiyarchanai, and drawing the Sri Chakra as blessed by Arulmigu Bangaru Adigalar Amma, 
                            <span className="block mt-3 font-bold text-[#a7150b] text-lg">
                              you are respectfully invited to participate in creating a World Record. 🙏
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Call to Action Column */}
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg shadow-red-900/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-400 to-[#a7150b]"></div>
                      
                      <div>
                        <div className="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                          <Info className="w-5 h-5" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Attention Coordinators</h4>
                        <p className="text-sm text-gray-600 leading-relaxed mb-6">
                          Sakthi Peetam & Mandram Coordinators are requested to submit the current basic details now to confirm participation. 
                          <span className="block mt-2 italic text-gray-500 text-xs">
                            Additional important details may be edited and submitted later, especially after the event.
                          </span>
                        </p>
                      </div>

                      <a 
                        href="https://forms.gle/vwy88RS7yBLsk1tC7" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-[#a7150b] to-red-700 text-white px-6 py-4 rounded-xl font-bold shadow-md hover:shadow-xl hover:shadow-red-900/20 transition-all hover:-translate-y-0.5 overflow-hidden w-full"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                        <CheckCircle2 className="w-5 h-5 relative z-10" /> 
                        <span className="relative z-10">Register Now</span>
                      </a>
                    </div>
                  </div>

                  {/* Documents Section */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#a7150b]" />
                        Official Guidelines & Resources
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { title: 'Agenda - World Record 2026', file: '/notices/Agenda.pdf', size: 'PDF Document' },
                        { title: 'Sankalpam - World Record', file: '/notices/Worldrecord.pdf', size: 'PDF Document' },
                        { title: 'Sri Chakra Drawing Videos', file: '/notices/shrichakra.pdf', size: 'PDF Document' },
                      ].map((doc, idx) => (
                        <button 
                          key={idx}
                          onClick={() => handleOpenDoc([doc.file], 'pdf')} 
                          className="group flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#a7150b] hover:bg-red-50/30 hover:shadow-md transition-all text-left"
                        >
                          <div className="flex items-start justify-between w-full mb-3">
                            <div className="bg-white p-2.5 rounded-lg shadow-sm text-[#a7150b] group-hover:scale-110 group-hover:bg-[#a7150b] group-hover:text-white transition-all duration-300">
                              <FileText className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-bold tracking-wider text-gray-400 group-hover:text-[#a7150b] transition-colors uppercase bg-gray-200/50 px-2 py-1 rounded">View</span>
                          </div>
                          <p className="font-bold text-gray-800 text-sm leading-tight group-hover:text-[#a7150b] transition-colors">{doc.title}</p>
                          <p className="text-xs text-gray-500 mt-1">{doc.size}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                /* --- EXACT ORIGINAL EXISTING TABS LOGIC --- */
                loading ? (
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
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* DOCUMENT VIEWER MODAL - EXACT ORIGINAL */}
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