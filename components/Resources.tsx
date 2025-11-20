// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BookOpen, FileText, ArrowRight, MapPin } from 'lucide-react';
// import Image from 'next/image';

// type ResourceType = 'articles' | 'books';

// export default function ResourcesSection() {
//   const [activeTab, setActiveTab] = useState<ResourceType>('articles');

//   // Data extracted from "Screenshot (441).jpg"
//   const articles = [
//     {
//       id: 1,
//       title: "இந்த நிலை மாறும்!",
//       excerpt: "ஒரு நாட்டின் ராஜாவுக்கு ஒரு சிந்தனை தோன்றியது. அதாவது தனது வாழ்வில் துன்பத்தினால் இறுதியை அடைந்த ஒருவனுக்...",
//     },
//     {
//       id: 2,
//       title: "அம்மா திருப்பிக் கொடுத்த உயிர்",
//       excerpt: "எங்கள் குடும்பத்தார் அனைவரும் 1982ம் ஆண்டு முதல் அம்மாவின் பக்தர்கள். 2001ம் ஆண்டு கம்பம் பகுதியில்...",
//     },
//     {
//       id: 3,
//       title: "அம்மாவின் ஆன்மிக விதைப் பயணங்கள்",
//       excerpt: "இரு தொண்டர்கள் காபி, தேநீர் சாப்பிட மாட்டார்கள் - ஒரு தொண்டர் சென்னையைச் சேர்ந்தவர். ஏங்க நீங்க எல்லாம் க...",
//     },
//     {
//       id: 4,
//       title: "அருள்திரு அம்மாவின் 76-ஆம் ஆண்டு அவதாரத் திருநாளை முன்னிட்டு இலவச கண் சிகிச்சை முகாம்",
//       excerpt: "ஆன்மிககுரு அருள்திரு அம்மா அவர்களின் 76-ஆம் ஆண்டு அவதாரத் திருநாளை முன்னிட்டு மேல்மருவத்தூர் எம்.ஏ.எஸ்.எம்...",
//     },
//     {
//       id: 5,
//       title: "அற்புதங்கள் ஒன்றா... இரண்டா... எடுத்துச் சொல்ல...!",
//       excerpt: "அருள் திரு அம்மா அவர்களின் கோடானு கோடி பக்தர்களில் எங்கள் குடும்பமும் ஒன்று. எங்கள் குடும்பங்களில்...",
//     },
//     {
//       id: 6,
//       title: "அன்பான வேண்டுகோள் !",
//       excerpt: "ஒவ்வொருவனும் தன்னால் முடிந்த அளவு தருமம் செய்ய வேண்டும். அதுவும் நல்ல எண்ணத்துடன் தருமம் செய்யவேண்டும். ஐ...",
//     }
//   ];

//   // Data extracted from "Books-Omsakthiamma..." image
//   // Note: Replace '/om3.jpeg' etc. with the actual book cover images when you have them.
//   const books = [
//     {
//       id: 1,
//       title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
//       price: "₹150",
//       availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
//       trust: "Adhiparasakthi Charitable, Medical, Educational And Cultural Trust",
//       image: "/om3.jpeg" 
//     },
//     {
//       id: 2,
//       title: "ஓம்சக்தி மேல்மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
//       price: null,
//       availableAt: "ஆதிபராசக்தி சித்தர் பீடம்",
//       trust: "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்பாட்டு அறநிலை",
//       image: "/om4.jpeg"
//     },
//     {
//       id: 3,
//       title: "Amma... The Ocean Of Love",
//       price: null,
//       availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
//       trust: "Adhiparasakthi Charitable, Medical, Educational And Cultural Trust",
//       image: "/om5.jpeg"
//     },
//     {
//       id: 4,
//       title: "Melmaruvathur A Soul's Perception",
//       subtitle: "(Biography of Golden Son of Melmaruvathur - Adigalar)",
//       price: null,
//       availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
//       trust: "Thamarai thulasi trust",
//       image: "/om3.jpeg"
//     }
//   ];

//   return (
//     <section className="py-24 px-4 bg-white border-t border-gray-100">
//       <div className="max-w-6xl mx-auto">
        
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-8">
//             Publications & Wisdom
//           </h2>

//           {/* Toggle Buttons */}
//           <div className="inline-flex bg-gray-100 p-1 rounded-full shadow-inner">
//             <button
//               onClick={() => setActiveTab('articles')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//                 activeTab === 'articles' 
//                   ? 'bg-[#a7150b] text-white shadow-md' 
//                   : 'text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <FileText className="w-4 h-4" />
//               Articles
//             </button>
//             <button
//               onClick={() => setActiveTab('books')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//                 activeTab === 'books' 
//                   ? 'bg-[#a7150b] text-white shadow-md' 
//                   : 'text-gray-600 hover:bg-gray-200'
//               }`}
//             >
//               <BookOpen className="w-4 h-4" />
//               Books
//             </button>
//           </div>
//         </div>

//         {/* Content Area */}
//         <div className="min-h-[400px]">
//           <AnimatePresence mode='wait'>
            
//             {/* --- ARTICLES TAB --- */}
//             {activeTab === 'articles' ? (
//               <motion.div
//                 key="articles"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid md:grid-cols-2 gap-x-12 gap-y-10"
//               >
//                 {articles.map((article) => (
//                   <div key={article.id} className="flex flex-col items-start group">
//                     <h3 className="text-xl font-bold text-[#2d5886] mb-3 leading-snug group-hover:text-[#a7150b] transition-colors cursor-pointer">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-600 mb-3 leading-relaxed text-[15px]">
//                       <span className="text-[#a7150b] font-bold text-lg float-left mr-1 leading-none"></span>
//                       {article.excerpt}
//                     </p>
//                     <button className="text-sm text-blue-600 font-semibold hover:underline flex items-center gap-1 mt-auto">
//                       Read More <span className="text-xs">»</span>
//                     </button>
//                   </div>
//                 ))}
                
//                 {/* Pagination Mockup (Visual Only) */}
//                 <div className="col-span-full mt-8 flex gap-2">
//                    <span className="px-3 py-1 bg-[#2d5886] text-white text-sm rounded">1</span>
//                    <span className="px-3 py-1 hover:bg-gray-100 text-gray-600 text-sm rounded cursor-pointer border">2</span>
//                    <span className="px-3 py-1 hover:bg-gray-100 text-gray-600 text-sm rounded cursor-pointer border">3</span>
//                    <span className="px-3 py-1 hover:bg-gray-100 text-gray-600 text-sm rounded cursor-pointer border">Next →</span>
//                 </div>
//               </motion.div>
//             ) : (
              
//               /* --- BOOKS TAB --- */
//               <motion.div
//                 key="books"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
//               >
//                 {books.map((book) => (
//                   <div key={book.id} className="bg-white rounded-lg shadow border border-gray-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300">
//                     {/* Book Image Container */}
//                     <div className="sm:w-48 h-64 sm:h-auto relative shrink-0 bg-gray-50">
//                       <Image 
//                         src={book.image} 
//                         alt={book.title}
//                         fill
//                         className="object-cover sm:object-contain p-2"
//                       />
//                     </div>
                    
//                     {/* Book Details */}
//                     <div className="p-6 flex flex-col justify-center flex-grow">
//                       <h3 className="text-lg font-bold text-[#1a1a1a] mb-1 leading-tight">
//                         {book.title}
//                       </h3>
//                       {book.subtitle && (
//                          <p className="text-xs text-gray-500 mb-2 italic">{book.subtitle}</p>
//                       )}
                      
//                       {book.price && (
//                         <p className="text-[#a7150b] font-bold text-lg mb-3">{book.price}</p>
//                       )}

//                       <div className="space-y-3 text-sm text-gray-600 mt-2">
//                         <div className="flex gap-2">
//                           <MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
//                           <div>
//                             <span className="font-semibold block text-xs uppercase tracking-wide text-gray-400">Available At:</span>
//                             {book.availableAt}
//                           </div>
//                         </div>
                        
//                         <div className="border-t pt-2 mt-2">
//                            <p className="text-xs text-gray-500">{book.trust}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
        
//       </div>
//     </section>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';

type ResourceType = 'articles' | 'books';

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<ResourceType>('articles');

  // Tamil Content from screenshot
  const articles = [
    {
      id: 1,
      title: "இந்த நிலை மாறும்!",
      excerpt: "ஒரு நாட்டின் ராஜாவுக்கு ஒரு சிந்தனை தோன்றியது. அதாவது தனது வாழ்வில் துன்பத்தினால் இறுதியை அடைந்த ஒருவனுக்...",
    },
    {
      id: 2,
      title: "அம்மா திருப்பிக் கொடுத்த உயிர்",
      excerpt: "எங்கள் குடும்பத்தார் அனைவரும் 1982ம் ஆண்டு முதல் அம்மாவின் பக்தர்கள். 2001ம் ஆண்டு கம்பம் பகுதியில்...",
    },
    {
      id: 3,
      title: "அம்மாவின் ஆன்மிக விதைப் பயணங்கள்",
      excerpt: "இரு தொண்டர்கள் காபி, தேநீர் சாப்பிட மாட்டார்கள் - ஒரு தொண்டர் சென்னையைச் சேர்ந்தவர். ஏங்க நீங்க எல்லாம் க...",
    },
    {
      id: 4,
      title: "இலவச கண் சிகிச்சை முகாம்",
      excerpt: "ஆன்மிககுரு அருள்திரு அம்மா அவர்களின் 76-ஆம் ஆண்டு அவதாரத் திருநாளை முன்னிட்டு மேல்மருவத்தூர் எம்.ஏ.எஸ்.எம்...",
    },
    {
      id: 5,
      title: "அற்புதங்கள் ஒன்றா... இரண்டா...!",
      excerpt: "அருள் திரு அம்மா அவர்களின் கோடானு கோடி பக்தர்களில் எங்கள் குடும்பமும் ஒன்று. எங்கள் குடும்பங்களில்...",
    },
    {
      id: 6,
      title: "அன்பான வேண்டுகோள் !",
      excerpt: "ஒவ்வொருவனும் தன்னால் முடிந்த அளவு தருமம் செய்ய வேண்டும். அதுவும் நல்ல எண்ணத்துடன் தருமம் செய்யவேண்டும். ஐ...",
    }
  ];

  // Book Data from screenshot
  // Note: Ensure images /om3.jpeg, /om4.jpeg, /om5.jpeg exist in your public folder
  const books = [
    {
      id: 1,
      title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
      price: "₹150",
      availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
      trust: "Adhiparasakthi Charitable, Medical, Educational And Cultural Trust",
      image: "/om3.jpeg" 
    },
    {
      id: 2,
      title: "ஓம்சக்தி மேல்மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
      price: null,
      availableAt: "ஆதிபராசக்தி சித்தர் பீடம்",
      trust: "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்பாட்டு அறநிலை",
      image: "/om4.jpeg"
    },
    {
      id: 3,
      title: "Amma... The Ocean Of Love",
      price: null,
      availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
      trust: "Adhiparasakthi Charitable, Medical, Educational And Cultural Trust",
      image: "/om5.jpeg"
    },
    {
      id: 4,
      title: "Melmaruvathur A Soul's Perception",
      subtitle: "(Biography of Golden Son of Melmaruvathur - Adigalar)",
      price: null,
      availableAt: "Melmaruvathur Adhiparasakthi siddhar peedam.",
      trust: "Thamarai thulasi trust",
      image: "/om3.jpeg"
    }
  ];

  return (
    <section className="py-24 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-8">
            Publications & Wisdom
          </h2>

          {/* Toggle Buttons */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-200">
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'articles' 
                  ? 'bg-[#a7150b] text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              Articles
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
                activeTab === 'books' 
                  ? 'bg-[#a7150b] text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Books
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          <AnimatePresence mode='wait'>
            
            {/* --- ARTICLES TAB (Card Format) --- */}
            {activeTab === 'articles' ? (
              <motion.div
                key="articles"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {articles.map((article) => (
                  <div 
                    key={article.id} 
                    className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#a7150b] hover:transform hover:-translate-y-2 transition duration-300 flex flex-col h-full"
                  >
                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 leading-snug">
                      {article.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      {article.excerpt}
                    </p>
                    
                    {/* Read More Button */}
                    <button className="text-[#a7150b] font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto uppercase text-sm tracking-wide">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </motion.div>
            ) : (
              
              /* --- BOOKS TAB (List Format) --- */
              <motion.div
                key="books"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {books.map((book) => (
                  <div key={book.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300 group">
                    {/* Book Image Container */}
                    <div className="sm:w-48 h-64 sm:h-auto relative shrink-0 bg-gray-50 group-hover:bg-gray-100 transition-colors">
                      <Image 
                        src={book.image} 
                        alt={book.title}
                        fill
                        className="object-cover sm:object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Book Details */}
                    <div className="p-6 flex flex-col justify-center flex-grow">
                      <h3 className="text-lg font-bold text-[#1a1a1a] mb-1 leading-tight">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                         <p className="text-xs text-gray-500 mb-2 italic">{book.subtitle}</p>
                      )}
                      
                      {book.price && (
                        <p className="text-[#a7150b] font-bold text-lg mb-3">{book.price}</p>
                      )}

                      <div className="space-y-3 text-sm text-gray-600 mt-4 border-t pt-4 border-dashed border-gray-200">
                        <div className="flex gap-2 items-start">
                          <MapPin className="w-4 h-4 text-[#a7150b] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold block text-xs uppercase tracking-wide text-gray-400 mb-1">Available At</span>
                            {book.availableAt}
                          </div>
                        </div>
                        
                        <div className="pl-6">
                           <p className="text-xs text-gray-500">{book.trust}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}