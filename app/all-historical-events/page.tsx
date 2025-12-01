// "use client";

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import { 
//   Calendar, 
//   ChevronLeft, 
//   Sparkles, 
//   Flag, 
//   Search, 
//   HeartHandshake, 
//   Building, 
//   Award,
//   BookOpen
// } from 'lucide-react';
// import { fullHistoryData, HistoryEvent } from '@/lib/historyData'; // Ensure this path is correct

// export default function AllHistoricalEventsPage() {
//   const [filter, setFilter] = useState<string>('all');
//   const [searchTerm, setSearchTerm] = useState('');

//   // 1. Filter Logic
//   const filteredEvents = fullHistoryData.filter(event => {
//     const matchesCategory = filter === 'all' || event.category === filter;
//     const matchesSearch = event.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           event.year.includes(searchTerm);
//     return matchesCategory && matchesSearch;
//   });

//   // 2. Group by Decade logic
//   const groupedEvents: Record<string, HistoryEvent[]> = {};
//   filteredEvents.forEach(event => {
//     // Extract first 3 digits of year to determine decade (e.g. 196 -> 1960s)
//     const yearPrefix = event.year.substring(0, 3); 
//     const decade = `${yearPrefix}0s`; 
    
//     if (!groupedEvents[decade]) groupedEvents[decade] = [];
//     groupedEvents[decade].push(event);
//   });

//   // Sort decades reverse chronological (optional, currently chronological based on data)
//   // If you want 2020s first, use .sort().reverse() on keys below.

//   // Filter Button Component (Adapted from your Calendar UI)
//   const FilterButton = ({ type, label, icon: Icon }: any) => (
//     <button
//       onClick={() => setFilter(type)}
//       className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border whitespace-nowrap ${
//         filter === type
//           ? 'bg-[#a7150b] text-white border-[#a7150b] shadow-lg scale-105'
//           : 'bg-white text-gray-600 border-gray-200 hover:border-[#a7150b] hover:text-[#a7150b]'
//       }`}
//     >
//       {Icon && <Icon className="w-4 h-4" />}
//       {label}
//     </button>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       <main className="pb-20">
        
//         {/* --- HERO HEADER (Matches Calendar UI) --- */}
//         <section className="bg-[#ffc107] pt-12 pb-16 px-4 relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('/pattern-opacity.png')] opacity-10"></div>
//           <div className="max-w-5xl mx-auto text-center relative z-10">
            
//             {/* Breadcrumb / Back Link */}
//             <div className="absolute top-0 left-0">
//                  <Link href="/history" className="flex items-center gap-2 text-[#7a0f07] font-bold hover:underline opacity-80 hover:opacity-100">
//                     <ChevronLeft className="w-5 h-5" /> Back to Highlights
//                  </Link>
//             </div>

//             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#7a0f07] text-sm font-bold mb-4 border border-white/30 mt-8 md:mt-0">
//               <Calendar className="w-4 h-4" />
//               Official Archives
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
//               Chronicles of History
//             </h1>
//             <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
//               A comprehensive timeline of events during the Incarnation period of Amma (1941 - Present).
//             </p>
//           </div>
//         </section>

//         {/* --- FILTERS & CONTROLS --- */}
//         <div className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
//           <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-4">
            
//             {/* Filter Tabs */}
//             <div className="flex flex-wrap justify-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
//               <FilterButton type="all" label="All Events" icon={Calendar} />
//               <FilterButton type="Divine" label="Divine" icon={Sparkles} />
//               <FilterButton type="Social" label="Social Service" icon={HeartHandshake} />
//               <FilterButton type="Infrastructure" label="Infrastructure" icon={Building} />
//               <FilterButton type="Education" label="Education" icon={BookOpen} />
//               <FilterButton type="Awards" label="Awards" icon={Award} />
//             </div>

//             {/* Search Bar */}
//             <div className="relative w-full lg:w-64">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input 
//                     type="text" 
//                     placeholder="Search year or event..." 
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] transition-all"
//                 />
//             </div>
//           </div>
//         </div>

//         {/* --- TIMELINE LIST --- */}
//         <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
//           {Object.keys(groupedEvents).length === 0 ? (
//             <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
//               <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
//                   <Search className="w-8 h-8 text-gray-400" />
//               </div>
//               <p className="text-gray-500 text-lg">No historical events found matching your criteria.</p>
//               <button onClick={() => {setFilter('all'); setSearchTerm('')}} className="mt-4 text-[#a7150b] font-bold hover:underline">
//                   Clear Filters
//               </button>
//             </div>
//           ) : (
//             Object.entries(groupedEvents).map(([decade, events], idx) => (
//               <motion.div
//                 key={decade}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1 }}
//               >
//                 {/* Decade Divider (Styled like Calendar Month) */}
//                 <div className="flex items-center gap-4 mb-6 sticky top-4 z-10 bg-gray-50/95 backdrop-blur py-2">
//                   <div className="w-3 h-3 rounded-full bg-[#a7150b]"></div>
//                   <h2 className="text-3xl font-bold text-[#a7150b]">{decade}</h2>
//                   <div className="h-px flex-1 bg-gray-300"></div>
//                 </div>

//                 {/* Events Grid */}
//                 <div className="grid gap-4">
//                   {events.map((event, eIdx) => (
//                     <motion.div
//                       key={eIdx}
//                       whileHover={{ scale: 1.01 }}
//                       className={`bg-white p-5 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center gap-6
//                         ${event.category === 'Divine' ? 'border-yellow-400' : 
//                           event.category === 'Social' ? 'border-blue-500' : 
//                           event.category === 'Infrastructure' ? 'border-gray-500' :
//                           event.category === 'Education' ? 'border-green-500' :
//                           event.category === 'Awards' ? 'border-purple-500' : 'border-red-500'}
//                       `}
//                     >
//                       {/* Date Box (Adapted) */}
//                       <div className="flex flex-col items-center justify-center w-20 h-20 bg-gray-50 rounded-lg shrink-0 border border-gray-100 self-start sm:self-center">
//                         <span className="text-xl font-bold text-[#1a1a1a]">
//                           {event.year}
//                         </span>
//                         {/* If specific date exists, show it */}
//                         {event.date && event.date.length < 15 && (
//                             <span className="text-[10px] uppercase font-bold text-gray-500 text-center px-1 leading-tight mt-1">
//                                 {event.date}
//                             </span>
//                         )}
//                       </div>

//                       {/* Info */}
//                       <div className="flex-1">
//                         <div className="flex items-center gap-2 mb-2">
//                           <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full
//                              ${event.category === 'Divine' ? 'bg-yellow-100 text-yellow-800' : 
//                                event.category === 'Social' ? 'bg-blue-100 text-blue-800' : 
//                                event.category === 'Infrastructure' ? 'bg-gray-100 text-gray-700' :
//                                event.category === 'Education' ? 'bg-green-100 text-green-800' :
//                                event.category === 'Awards' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'}
//                           `}>
//                             {event.category}
//                           </span>
//                         </div>
                        
//                         {/* Description as the main content */}
//                         <p className="text-base text-[#1a1a1a] leading-relaxed font-medium">
//                           {event.description}
//                         </p>
//                       </div>

//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-16">
//            <Link href="/history" className="text-gray-500 hover:text-[#a7150b] font-medium flex items-center justify-center gap-2 group">
//              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Return to Highlights
//            </Link>
//         </div>

//       </main>
//     </div>
//   );
// }

"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  ChevronLeft, 
  Sparkles, 
  Search, 
  HeartHandshake, 
  Building, 
  Award,
  BookOpen,
  Download,
  ArrowRight,
  Filter
} from 'lucide-react';
import { fullHistoryData } from '@/lib/historyData'; // Ensure path is correct

export default function AllHistoricalEventsPage() {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // --- 1. Filter Logic ---
  const filteredEvents = useMemo(() => {
    return fullHistoryData.filter(event => {
      const matchesCategory = filter === 'all' || event.category === filter;
      const matchesSearch = 
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        event.year.includes(searchTerm);
      return matchesCategory && matchesSearch;
    });
  }, [filter, searchTerm]);

  // --- 2. Group by Decade ---
  const groupedEvents = useMemo(() => {
    const groups: Record<string, typeof fullHistoryData> = {};
    filteredEvents.forEach(event => {
      // Group by decade (e.g., 1966 -> 1960s)
      const decade = `${event.year.substring(0, 3)}0s`;
      if (!groups[decade]) groups[decade] = [];
      groups[decade].push(event);
    });
    // Sort decades chronologically
    return Object.keys(groups).sort().reduce((obj, key) => {
      obj[key] = groups[key];
      return obj;
    }, {} as Record<string, typeof fullHistoryData>);
  }, [filteredEvents]);

  // Helper for Category Colors (Matching your Calendar "Type" logic)
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Divine': return 'border-yellow-400 bg-yellow-50 text-yellow-700';
      case 'Social': return 'border-blue-500 bg-blue-50 text-blue-700';
      case 'Festival': return 'border-red-500 bg-red-50 text-red-700';
      case 'Infrastructure': return 'border-gray-500 bg-gray-100 text-gray-700';
      case 'Education': return 'border-green-500 bg-green-50 text-green-700';
      case 'Awards': return 'border-purple-500 bg-purple-50 text-purple-700';
      default: return 'border-gray-300 bg-gray-50 text-gray-600';
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'Divine': return 'border-yellow-400';
      case 'Social': return 'border-blue-500';
      case 'Festival': return 'border-red-500';
      case 'Infrastructure': return 'border-gray-500';
      case 'Education': return 'border-green-500';
      case 'Awards': return 'border-purple-500';
      default: return 'border-gray-300';
    }
  };

  // Filter Button Component
  const FilterButton = ({ type, label, icon: Icon }: any) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 border whitespace-nowrap ${
        filter === type
          ? 'bg-[#a7150b] text-white border-[#a7150b] shadow-lg scale-105'
          : 'bg-white text-gray-600 border-gray-200 hover:border-[#a7150b] hover:text-[#a7150b]'
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5" />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      <main className="pb-20">
        
        {/* --- HERO HEADER (Matches Calendar Reference) --- */}
        <section className="bg-[#ffc107] pt-12 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-opacity.png')] opacity-10"></div>
          
          {/* Back Button */}
          <div className="max-w-6xl mx-auto mb-6 relative z-10">
             <Link href="/" className="inline-flex items-center gap-2 text-[#7a0f07] font-bold hover:underline opacity-80 hover:opacity-100 transition-opacity">
                <ChevronLeft className="w-5 h-5" /> Back to home
             </Link>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#7a0f07] text-sm font-bold mb-4 border border-white/30">
              <Calendar className="w-4 h-4" />
              Official Archives
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
              Chronicles of History
            </h1>
            <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto font-medium">
              A comprehensive timeline of events from 1941 to present, documenting the Incarnation period of Amma.
            </p>
          </div>
        </section>

        {/* --- FILTERS & CONTROLS (Matches Calendar Reference) --- */}
        <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col xl:flex-row items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-2 w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 scrollbar-hide">
              <FilterButton type="all" label="All" icon={Filter} />
              <FilterButton type="Divine" label="Divine" icon={Sparkles} />
              <FilterButton type="Social" label="Social" icon={HeartHandshake} />
              <FilterButton type="Infrastructure" label="Infra" icon={Building} />
              <FilterButton type="Education" label="Edu" icon={BookOpen} />
              <FilterButton type="Awards" label="Awards" icon={Award} />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
               {/* Search Bar */}
               {/* <div className="relative w-full sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search events..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:border-[#a7150b] focus:ring-1 focus:ring-[#a7150b] transition-all text-sm"
                    />
                </div> */}
<div className="relative w-full sm:w-64">
  <Search 
    className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" 
  />

  <input
    type="text"
    placeholder="Search events..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full pl-12 pr-4 py-2.5 rounded-xl 
               border border-gray-200 bg-gray-50 
               placeholder:text-gray-400
               focus:outline-none focus:border-[#a7150b] 
               focus:ring-1 focus:ring-[#a7150b] 
               transition-all text-sm"
  />
</div>



                {/* Download Button (Visual Only) */}
                {/* <button 
                  className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md text-sm whitespace-nowrap w-full sm:w-auto justify-center"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </button> */}
            </div>
          </div>
        </div>

        {/* --- TIMELINE LIST --- */}
        <div className="max-w-4xl mx-auto px-4 mt-16 space-y-12">
          {Object.keys(groupedEvents).length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg font-medium">No events found matching your criteria.</p>
              <button onClick={() => {setFilter('all'); setSearchTerm('')}} className="mt-4 text-[#a7150b] font-bold hover:underline">
                  Clear Filters
              </button>
            </div>
          ) : (
            Object.entries(groupedEvents).map(([decade, events], idx) => (
              <motion.div
                key={decade}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Decade Header (Matches Month Divider) */}
                <div className="flex items-center gap-4 mb-6 sticky top-0 z-10 py-4 bg-gray-50/95 backdrop-blur-sm">
                  <h2 className="text-3xl font-extrabold text-[#a7150b] tracking-tight">{decade}</h2>
                  <div className="h-0.5 flex-1 bg-gray-200 rounded-full"></div>
                </div>

                {/* Events Grid */}
                <div className="grid gap-4">
                  {events.map((event, eIdx) => (
                    <motion.div
                      key={eIdx}
                      whileHover={{ scale: 1.01 }}
                      className={`bg-white p-5 rounded-xl border-l-4 shadow-sm hover:shadow-lg transition-all flex items-start gap-4 sm:gap-6 ${getBorderColor(event.category)}`}
                    >
                      {/* Date Box (Matches Calendar Date Box) */}
                      <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-lg shrink-0 border border-gray-100">
                        <span className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                          {event.year}
                        </span>
                        {event.date && (
                          <span className="text-[10px] sm:text-xs uppercase font-bold text-gray-400 text-center px-1 leading-tight mt-1 line-clamp-1">
                            {event.date}
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${getCategoryStyles(event.category)}`}>
                            {event.category}
                          </span>
                        </div>
                        
                        {/* Title logic: If no title exists in data, use first few words or just description */}
                         <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                            {/* We are using description as title since PDF didn't have titles for all events */}
                            {event.description.length > 60 ? event.description.substring(0, 60) + "..." : event.description}
                         </h3>
                         <p className="text-sm text-gray-600 font-medium leading-relaxed">
                            {event.description}
                         </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="hidden sm:block text-gray-300 self-center">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
           <Link href="siddhar-peedam/history" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white border border-gray-200 text-gray-600 font-bold hover:border-[#a7150b] hover:text-[#a7150b] transition-all shadow-sm hover:shadow-md">
             <ChevronLeft className="w-4 h-4" /> Return to Highlights
           </Link>
        </div>

      </main>
    </div>
  );
}