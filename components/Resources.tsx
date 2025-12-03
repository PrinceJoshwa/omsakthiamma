// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BookOpen, FileText, ArrowRight, MapPin } from 'lucide-react';
// import Image from 'next/image';

// type ResourceType = 'articles' | 'books';

// export default function ResourcesSection() {
//   const [activeTab, setActiveTab] = useState<ResourceType>('articles');

//   // Tamil Content from screenshot
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
//       title: "இலவச கண் சிகிச்சை முகாம்",
//       excerpt: "ஆன்மிககுரு அருள்திரு அம்மா அவர்களின் 76-ஆம் ஆண்டு அவதாரத் திருநாளை முன்னிட்டு மேல்மருவத்தூர் எம்.ஏ.எஸ்.எம்...",
//     },
//     {
//       id: 5,
//       title: "அற்புதங்கள் ஒன்றா... இரண்டா...!",
//       excerpt: "அருள் திரு அம்மா அவர்களின் கோடானு கோடி பக்தர்களில் எங்கள் குடும்பமும் ஒன்று. எங்கள் குடும்பங்களில்...",
//     },
//     {
//       id: 6,
//       title: "அன்பான வேண்டுகோள் !",
//       excerpt: "ஒவ்வொருவனும் தன்னால் முடிந்த அளவு தருமம் செய்ய வேண்டும். அதுவும் நல்ல எண்ணத்துடன் தருமம் செய்யவேண்டும். ஐ...",
//     }
//   ];

//   // Book Data from screenshot
//   // Note: Ensure images /om3.jpeg, /om4.jpeg, /om5.jpeg exist in your public folder
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
//     <section className="py-24 px-4 bg-orange-50">
//       <div className="max-w-7xl mx-auto">
        
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-[#1a1a1a] spiritual-text mb-8">
//             Publications & Wisdom
//           </h2>

//           {/* Toggle Buttons */}
//           <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-200">
//             <button
//               onClick={() => setActiveTab('articles')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//                 activeTab === 'articles' 
//                   ? 'bg-[#a7150b] text-white shadow-lg' 
//                   : 'text-gray-600 hover:bg-gray-100'
//               }`}
//             >
//               <FileText className="w-4 h-4" />
//               Articles
//             </button>
//             <button
//               onClick={() => setActiveTab('books')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 ${
//                 activeTab === 'books' 
//                   ? 'bg-[#a7150b] text-white shadow-lg' 
//                   : 'text-gray-600 hover:bg-gray-100'
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
            
//             {/* --- ARTICLES TAB (Card Format) --- */}
//             {activeTab === 'articles' ? (
//               <motion.div
//                 key="articles"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid md:grid-cols-3 gap-8"
//               >
//                 {articles.map((article) => (
//                   <div 
//                     key={article.id} 
//                     className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#a7150b] hover:transform hover:-translate-y-2 transition duration-300 flex flex-col h-full"
//                   >
//                     {/* Title */}
//                     <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 leading-snug">
//                       {article.title}
//                     </h3>
                    
//                     {/* Excerpt */}
//                     <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
//                       {article.excerpt}
//                     </p>
                    
//                     {/* Read More Button */}
//                     <button className="text-[#a7150b] font-bold flex items-center gap-2 hover:gap-3 transition-all mt-auto uppercase text-sm tracking-wide">
//                       Read Article <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ))}
//               </motion.div>
//             ) : (
              
//               /* --- BOOKS TAB (List Format) --- */
//               <motion.div
//                 key="books"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="grid md:grid-cols-2 gap-8"
//               >
//                 {books.map((book) => (
//                   <div key={book.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-shadow duration-300 group">
//                     {/* Book Image Container */}
//                     <div className="sm:w-48 h-64 sm:h-auto relative shrink-0 bg-gray-50 group-hover:bg-gray-100 transition-colors">
//                       <Image 
//                         src={book.image} 
//                         alt={book.title}
//                         fill
//                         className="object-cover sm:object-contain p-4 transition-transform duration-500 group-hover:scale-105"
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

//                       <div className="space-y-3 text-sm text-gray-600 mt-4 border-t pt-4 border-dashed border-gray-200">
//                         <div className="flex gap-2 items-start">
//                           <MapPin className="w-4 h-4 text-[#a7150b] shrink-0 mt-0.5" />
//                           <div>
//                             <span className="font-bold block text-xs uppercase tracking-wide text-gray-400 mb-1">Available At</span>
//                             {book.availableAt}
//                           </div>
//                         </div>
                        
//                         <div className="pl-6">
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

  // ... (Your existing articles and books arrays remain here)
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
    },
    {
      id: 7,
      title: "அன்புப் பால் தந்த இன்பப்பால் !",
      excerpt: "கடந்த 27 ஆண்டுகளுக்கு முன் சென்னை கிண்டியிலிருந்து மேல்மருவத்தூருக்கு பிரச்சார எழுச்சியாக சுமார் 1000க்கு மேல் செவ்வாடை பக்தர்கள் பாத யாத்திரையாகப் புறப்பட்டோம். ஐ...",
    },
    {
      id: 8,
      title: "அன்னையின் அருள்வாக்கு !",
      excerpt: "உலகத்தில் பூதகணங்கள், ஆவிகள் எல்லாம் உண்டு. ஒரு செடி வளர முதலில் விதை வேண்டும். அந்த விதையை ஊன்ற மனம் வேண்டும். ஐ...",
    },
    {
      id: 9,
      title: "ஆன்மிகத்தில் அனாதைகள் !",
      excerpt: "மாசி மாத அமாவாசை அபிடேகத்திற்குக் காணிக்கை செலுத்தி உபயதாரராக நானும் கலந்து கொண்டேன். அபிடேகதாரர் என்ற முறையில் எனக்கு அருள் வாக்குக் கிடைத்தது. சுமார் 20 நிமிடம் எனக்கு அருள் வாக்கு சொன்னாள் அம்மா. ஐ...",
    },
    {
      id: 10,
      title: "என் அம்மாவைக் காப்பாற்றிய அன்னை !",
      excerpt: "அன்னையின் கடைக்கண் பார்வையில் வாழும் குடும்பங்களில் எங்களது குடும்பமும் ஒன்று. நான் கடந்த 5 ஆண்டு காலமாக சக்தி மாலை அணிந்து மேல்மருவத்தூருக்கு பக்தியுடன் வந்திருக்கிறேன். ஐ...",
    }
  ];
  
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
    <section className="py-12 md:py-24 px-4 bg-orange-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] spiritual-text mb-6 md:mb-8">
            Publications & Wisdom
          </h2>

          {/* Toggle Buttons */}
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-200 overflow-hidden">
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center justify-center gap-2 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === 'articles' ? 'bg-[#a7150b] text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              Articles
            </button>
            <button
              onClick={() => setActiveTab('books')}
              className={`flex items-center justify-center gap-2 px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                activeTab === 'books' ? 'bg-[#a7150b] text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Books
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[300px]">
          <AnimatePresence mode='wait'>
            {/* ARTICLES TAB */}
            {activeTab === 'articles' ? (
              <motion.div
                key="articles"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6 md:gap-8"
              >
                {articles.map((article) => (
                  <div key={article.id} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#a7150b] flex flex-col h-full">
                    <h3 className="text-lg md:text-xl font-bold text-[#1a1a1a] mb-3 leading-snug">{article.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed flex-grow">{article.excerpt}</p>
                    <button className="text-[#a7150b] font-bold flex items-center gap-2 text-xs md:text-sm uppercase tracking-wide mt-auto">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </motion.div>
            ) : (
              /* BOOKS TAB */
              <motion.div
                key="books"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8"
              >
                {books.map((book) => (
                  <div key={book.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48 h-48 sm:h-auto relative shrink-0 bg-gray-50">
                      <Image src={book.image || '/om3.jpeg'} alt={book.title} fill className="object-contain p-4" />
                    </div>
                    <div className="p-4 md:p-6 flex flex-col justify-center flex-grow">
                      <h3 className="text-base md:text-lg font-bold text-[#1a1a1a] mb-1">{book.title}</h3>
                      {book.price && <p className="text-[#a7150b] font-bold text-lg mb-2">{book.price}</p>}
                      <div className="space-y-2 text-xs md:text-sm text-gray-600 mt-2 border-t pt-2 border-dashed border-gray-200">
                        <div className="flex gap-2 items-start">
                          <MapPin className="w-4 h-4 text-[#a7150b] shrink-0 mt-0.5" />
                          <div><span className="font-bold block text-xs uppercase text-gray-400">Available At</span>{book.availableAt}</div>
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