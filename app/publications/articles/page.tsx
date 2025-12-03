// // // app/articles/page.tsx
// // 'use client';

// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import { motion } from 'framer-motion';
// // import { BookOpen, Calendar, User, ChevronRight, ChevronLeft } from 'lucide-react';
// // import PageTemplate from '@/components/PageTemplate';
// // import { articles } from '@/app/data/articlesData'; // Adjust path if you put data.ts elsewhere

// // export default function ArticlesPage() {
// //   // Pagination State
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 4; // Show 4 per page to create 2 pages (Total 6 items)

// //   // Pagination Logic
// //   const totalPages = Math.ceil(articles.length / itemsPerPage);
// //   const indexOfLastItem = currentPage * itemsPerPage;
// //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //   const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

// //   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

// //   return (
// //     <PageTemplate
// //       title="Spiritual Articles"
// //       subtitle="Insights, Miracles, and Divine Wisdom from Adhiparasakthi Siddhar Peedam"
// //       imageSrc="/images/temple-banner.jpg" // Use a real image path if available
// //       noTopPadding={false}
// //       noContentTopPadding={true}
// //       content={
// //         <div className="max-w-6xl mx-auto pb-12">
          
// //           {/* Articles Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
// //             {currentArticles.map((article, index) => (
// //               <motion.div
// //                 key={article.id}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.3, delay: index * 0.1 }}
// //                 className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-t-4 border-[#a7150b] group flex flex-col h-full"
// //               >
// //                 <div className="p-6 flex flex-col flex-grow">
// //                   {/* Meta Data */}
// //                   <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold">
// //                     <div className="flex items-center gap-1">
// //                       <Calendar className="w-3 h-3 text-[#ffc107]" />
// //                       <span>{article.date}</span>
// //                     </div>
// //                     <div className="flex items-center gap-1">
// //                       <User className="w-3 h-3 text-[#ffc107]" />
// //                       <span>{article.author}</span>
// //                     </div>
// //                   </div>

// //                   {/* Title */}
// //                   <h2 className="text-2xl font-bold text-[#a7150b] mb-3 group-hover:text-[#8a0d08] transition-colors line-clamp-2 min-h-[4rem]">
// //                     {article.title}
// //                   </h2>

// //                   {/* Excerpt */}
// //                   <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 flex-grow">
// //                     {article.excerpt}
// //                   </p>

// //                   {/* Read More Button */}
// //                   <Link 
// //                     href={`/articles-detail/${article.slug}`}
// //                     className="inline-flex items-center gap-2 text-[#a7150b] font-bold hover:text-[#8a0d08] hover:gap-3 transition-all mt-auto group/btn"
// //                   >
// //                     Read Full Article
// //                     <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
// //                   </Link>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>

// //           {/* Pagination Controls */}
// //           {totalPages > 1 && (
// //             <div className="flex justify-center items-center gap-2 mt-8">
// //               <button
// //                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// //                 disabled={currentPage === 1}
// //                 className={`p-2 rounded-lg border ${
// //                   currentPage === 1 
// //                     ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
// //                     : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
// //                 }`}
// //               >
// //                 <ChevronLeft className="w-5 h-5" />
// //               </button>

// //               {Array.from({ length: totalPages }).map((_, idx) => (
// //                 <button
// //                   key={idx}
// //                   onClick={() => paginate(idx + 1)}
// //                   className={`w-10 h-10 rounded-lg font-bold transition-all ${
// //                     currentPage === idx + 1
// //                       ? 'bg-[#a7150b] text-white shadow-md'
// //                       : 'bg-white text-gray-600 border border-gray-300 hover:border-[#a7150b] hover:text-[#a7150b]'
// //                   }`}
// //                 >
// //                   {idx + 1}
// //                 </button>
// //               ))}

// //               <button
// //                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                 disabled={currentPage === totalPages}
// //                 className={`p-2 rounded-lg border ${
// //                   currentPage === totalPages
// //                     ? 'border-gray-200 text-gray-300 cursor-not-allowed'
// //                     : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
// //                 }`}
// //               >
// //                 <ChevronRight className="w-5 h-5" />
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       }
// //     />
// //   );
// // }

// // app/articles/page.tsx
// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { Calendar, User, ChevronRight, ChevronLeft } from 'lucide-react';
// import PageTemplate from '@/components/PageTemplate';
// import { articles } from '@/app/data/articlesData'; // Adjust path if needed

// export default function ArticlesPage() {
//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4; // Show 4 per page

//   // Pagination Logic
//   const totalPages = Math.ceil(articles.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

//   return (
//     <PageTemplate
//       title="Spiritual Articles"
//       subtitle="Insights, Miracles, and Divine Wisdom from Adhiparasakthi Siddhar Peedam"
//       imageSrc="" // CHANGED: Removed image (empty string)
//       noTopPadding={false}
//       noContentTopPadding={true}
//       content={
//         // CHANGED: Increased max-width to 7xl for wider cards
//         <div className="max-w-7xl mx-auto pb-16 px-4">
          
//           {/* Articles Grid */}
//           {/* CHANGED: Increased gap to 10 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 mt-8">
//             {currentArticles.map((article, index) => (
//               <motion.div
//                 key={article.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 // CHANGED: Thicker top border (border-t-8) and larger rounded corners
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-8 border-[#a7150b] group flex flex-col h-full"
//               >
//                 {/* CHANGED: Increased padding to p-8 md:p-10 for a 'bigger' feel */}
//                 <div className="p-8 md:p-10 flex flex-col flex-grow">
                  
//                   {/* Meta Data */}
//                   <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 uppercase tracking-wider font-bold">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-[#ffc107]" />
//                       <span>{article.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4 text-[#ffc107]" />
//                       <span>{article.author}</span>
//                     </div>
//                   </div>

//                   {/* Title */}
//                   {/* CHANGED: Text size increased to text-3xl */}
//                   <h2 className="text-3xl font-bold text-[#a7150b] mb-5 group-hover:text-[#8a0d08] transition-colors leading-tight min-h-[5rem]">
//                     {article.title}
//                   </h2>

//                   {/* Excerpt */}
//                   {/* CHANGED: Text size increased to text-lg */}
//                   <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-4 flex-grow">
//                     {article.excerpt}
//                   </p>

//                   {/* Read More Button */}
//                   <Link 
//                     href={`/articles-detail/${article.slug}`}
//                     className="inline-flex items-center gap-2 text-[#a7150b] font-bold text-lg hover:text-[#8a0d08] hover:gap-3 transition-all mt-auto group/btn"
//                   >
//                     Read Full Article
//                     <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Pagination Controls */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center gap-3 mt-12">
//               <button
//                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`p-3 rounded-xl border ${
//                   currentPage === 1 
//                     ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
//                     : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
//                 }`}
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               {Array.from({ length: totalPages }).map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => paginate(idx + 1)}
//                   className={`w-12 h-12 rounded-xl font-bold text-lg transition-all ${
//                     currentPage === idx + 1
//                       ? 'bg-[#a7150b] text-white shadow-md transform scale-105'
//                       : 'bg-white text-gray-600 border border-gray-300 hover:border-[#a7150b] hover:text-[#a7150b]'
//                   }`}
//                 >
//                   {idx + 1}
//                 </button>
//               ))}

//               <button
//                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                 disabled={currentPage === totalPages}
//                 className={`p-3 rounded-xl border ${
//                   currentPage === totalPages
//                     ? 'border-gray-200 text-gray-300 cursor-not-allowed'
//                     : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
//                 }`}
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           )}
//         </div>
//       }
//     />
//   );
// }


// app/articles/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ChevronRight, ChevronLeft } from 'lucide-react';
import PageTemplate from '@/components/PageTemplate';
import { articles } from '@/app/data/articlesData';

export default function ArticlesPage() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  
  // UPDATED: Changed from 4 to 6. 
  // With 6 items on Page 1, Page 2 will correctly start with "அன்புப் பால் தந்த இன்பப்பால்" (Item #7).
  const itemsPerPage = 6; 

  // Pagination Logic
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <PageTemplate
      title="Spiritual Articles"
      subtitle="Insights, Miracles, and Divine Wisdom from Adhiparasakthi Siddhar Peedam"
      imageSrc="" 
      noTopPadding={false}
      noContentTopPadding={true}
      content={
        <div className="max-w-7xl mx-auto pb-16 px-4">
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 mt-8">
            {currentArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-t-8 border-[#a7150b] group flex flex-col h-full"
              >
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-5 uppercase tracking-wider font-bold">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#ffc107]" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#ffc107]" />
                      <span>{article.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl font-bold text-[#a7150b] mb-5 group-hover:text-[#8a0d08] transition-colors leading-tight min-h-[5rem]">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed line-clamp-4 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link 
                    href={`/articles-detail/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#a7150b] font-bold text-lg hover:text-[#8a0d08] hover:gap-3 transition-all mt-auto group/btn"
                  >
                    Read Full Article
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`p-3 rounded-xl border ${
                  currentPage === 1 
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
                }`}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => paginate(idx + 1)}
                  className={`w-12 h-12 rounded-xl font-bold text-lg transition-all ${
                    currentPage === idx + 1
                      ? 'bg-[#a7150b] text-white shadow-md transform scale-105'
                      : 'bg-white text-gray-600 border border-gray-300 hover:border-[#a7150b] hover:text-[#a7150b]'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`p-3 rounded-xl border ${
                  currentPage === totalPages
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-[#a7150b]'
                }`}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      }
    />
  );
}