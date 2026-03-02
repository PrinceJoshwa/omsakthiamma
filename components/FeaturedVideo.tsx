// 'use client';

// import { motion } from 'framer-motion';

// export default function FeaturedVideoSection() {
//   return (
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
//           className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffc107] bg-black group"
//         >
//           {/* Native Video Tag - Better than iframe for direct links */}
//           <video
//             className="w-full h-full object-cover"
//             src="https://res.cloudinary.com/dvd7o5nph/video/upload/v1770831887/Melmaruvathur_Bangaru_Adigalar_AMMA_Received_PADMA_SHRI_AWARDS_h7gctg.mp4"
//             title="Arul Thiru Bangaru Adigalar Video"
            
//             // Auto-play settings (Muted is REQUIRED for autoplay in modern browsers)
//             autoPlay
//             muted
//             loop
//             playsInline
            
//             // Standard Controls
//             controls
            
//             // Restriction Settings
//             controlsList="nodownload" // Hides the download button in Chrome/Edge
//             onContextMenu={(e) => e.preventDefault()} // Disables Right-Click Menu
//           >
//             Your browser does not support the video tag.
//           </video>

//           {/* Optional: Transparent Overlay to ensure right-click is blocked on older browsers if needed */}
//           {/* <div 
//             className="absolute inset-0 z-10"
//             onContextMenu={(e) => e.preventDefault()}
//           ></div> */}

//         </motion.div>

//         {/* Description */}
//         <div className="text-center mt-8">
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Witness the divine grace and spiritual message of Arul Thiru Bangaru Adigalar.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedVideoSection() {
  // Array to store references to each HTML video element
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Add your Cloudinary URLs here after uploading the 3 new videos
  const videos = [
    {
      id: 1,
      src: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1772440897/WhatsApp_Video_2026-03-02_at_12.06.01_PM_l1k5ty.mp4", // Replace with Video 1 link
      title: "Arul Thiru Bangaru Adigalar Video 1"
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1772440869/WhatsApp_Video_2026-03-02_at_12.06.01_PM_1_ohm1z9.mp4", // Replace with Video 2 link
      title: "Arul Thiru Bangaru Adigalar Video 2"
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1772440857/WhatsApp_Video_2026-03-02_at_12.06.01_PM_2_itrowy.mp4", // Replace with Video 3 link
      title: "Arul Thiru Bangaru Adigalar Video 3"
    }
  ];

  // This function pauses all videos except the one currently being played
  const handlePlay = (currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      // If the video exists and it is NOT the one we just clicked play on, pause it
      if (video && index !== currentIndex) {
        video.pause();
      }
    });
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-red-100 text-[#a7150b] rounded-full text-sm font-bold tracking-wide uppercase">
            Divine Darshan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mt-4 spiritual-text">
            Featured videos of Arul Thiru Bangaru Adigalar
          </h2>
        </div>

        {/* Videos Grid Container - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#ffc107] bg-black group"
            >
              {/* Native Video Tag */}
              <video
                // Attach this specific video element to our useRef array
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="w-full h-full object-cover"
                src={video.src}
                title={video.title}
                
                // Trigger the handlePlay function when this video starts playing
                onPlay={() => handlePlay(index)}
                
                playsInline
                controls
                controlsList="nodownload"
                onContextMenu={(e) => e.preventDefault()}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center mt-10">
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Witness the divine grace and spiritual message of Arul Thiru Bangaru Adigalar.
          </p>
        </div>

      </div>
    </section>
  );
}