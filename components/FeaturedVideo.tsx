// 'use client';

// import { motion } from 'framer-motion';

// export default function FeaturedVideoSection() {
//   return (
//     // <section className="py-20 px-4 bg-gray-50">
//     <section className="py-12 md:py-20 px-4 bg-gray-50">
//       <div className="max-w-5xl mx-auto">
        
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide uppercase">
//             Divine Darshan
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
//             Featured video of Arul Thiru Bangaru Adigalar
//           </h2>
//         </div>

//         {/* Video Container */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffc107] bg-black"
//         >
//           {/* YouTube Embed */}
//           {/* REPLACE THE 'src' URL BELOW WITH YOUR ACTUAL YOUTUBE VIDEO LINK */}
//           <iframe
//             className="w-full h-full"
//             // src="https://www.youtube.com/embed/zMW5u58cxbY?si=H82CG4gDBBotSzov" 
//             src="https://res.cloudinary.com/dvd7o5nph/video/upload/v1770831887/Melmaruvathur_Bangaru_Adigalar_AMMA_Received_PADMA_SHRI_AWARDS_h7gctg.mp4" 
//             title="Arul Thiru Bangaru Adigalar Video"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//           ></iframe>
//         </motion.div>

//         {/* Optional Description or CTA */}
//         <div className="text-center mt-8">
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Witness the divine grace and spiritual message of Arul Thiru Bangaru Adigalar.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';

export default function FeaturedVideoSection() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide uppercase">
            Divine Darshan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
            Featured video of Arul Thiru Bangaru Adigalar
          </h2>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffc107] bg-black group"
        >
          {/* Native Video Tag - Better than iframe for direct links */}
          <video
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/dvd7o5nph/video/upload/v1770831887/Melmaruvathur_Bangaru_Adigalar_AMMA_Received_PADMA_SHRI_AWARDS_h7gctg.mp4"
            title="Arul Thiru Bangaru Adigalar Video"
            
            // Auto-play settings (Muted is REQUIRED for autoplay in modern browsers)
            autoPlay
            muted
            loop
            playsInline
            
            // Standard Controls
            controls
            
            // Restriction Settings
            controlsList="nodownload" // Hides the download button in Chrome/Edge
            onContextMenu={(e) => e.preventDefault()} // Disables Right-Click Menu
          >
            Your browser does not support the video tag.
          </video>

          {/* Optional: Transparent Overlay to ensure right-click is blocked on older browsers if needed */}
          {/* <div 
            className="absolute inset-0 z-10"
            onContextMenu={(e) => e.preventDefault()}
          ></div> */}

        </motion.div>

        {/* Description */}
        <div className="text-center mt-8">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Witness the divine grace and spiritual message of Arul Thiru Bangaru Adigalar.
          </p>
        </div>

      </div>
    </section>
  );
}