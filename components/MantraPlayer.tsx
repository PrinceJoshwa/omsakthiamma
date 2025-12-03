// 'use client';

// import React, { useState, useRef } from 'react';
// import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';
// import { motion } from 'framer-motion';

// interface MantraPlayerProps {
//   title: string;
//   src: string;
//   duration?: string;
//   lightMode?: boolean; // If true, uses a white background (good for homepage)
// }

// export default function MantraPlayer({ title, src, duration, lightMode = false }: MantraPlayerProps) {
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [isMuted, setIsMuted] = useState(false);

//   const togglePlay = () => {
//     if (!audioRef.current) return;
    
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       // Pause all other audio elements on the page so they don't overlap
//       document.querySelectorAll('audio').forEach((el) => {
//         if (el !== audioRef.current) {
//           (el as HTMLAudioElement).pause();
//           // We can't easily update the state of other React components from here 
//           // without a global context, but this stops the sound clash.
//         }
//       });
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   const handleTimeUpdate = () => {
//     if (audioRef.current) {
//       const current = audioRef.current.currentTime;
//       const total = audioRef.current.duration || 1;
//       setProgress((current / total) * 100);
//     }
//   };

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   // Prevent user from right-clicking to "Save Audio As"
//   const preventRightClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//   };

//   return (
//     <motion.div 
//       whileHover={{ y: -4 }}
//       onContextMenu={preventRightClick} // 🔒 Prevents Right Click
//       className={`relative p-5 rounded-2xl border overflow-hidden transition-all duration-300 ${
//         lightMode 
//           ? 'bg-white border-gray-100 shadow-lg hover:shadow-xl' 
//           : 'bg-gradient-to-br from-[#a7150b] to-[#8a0d08] border-red-900 shadow-md text-white'
//       }`}
//     >
//       {/* Decorative Background Icon */}
//       <div className={`absolute top-0 right-0 p-4 opacity-10 ${lightMode ? 'text-[#a7150b]' : 'text-white'}`}>
//         <Music className="w-20 h-20 transform rotate-12" />
//       </div>

//       <div className="relative z-10 flex items-center gap-4">
        
//         {/* Play/Pause Button */}
//         <button 
//           onClick={togglePlay}
//           className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform transform active:scale-95 ${
//             lightMode 
//               ? 'bg-[#a7150b] text-white hover:bg-[#8a0d08]' 
//               : 'bg-white text-[#a7150b] hover:bg-gray-100'
//           }`}
//         >
//           {isPlaying ? (
//             <Pause className="w-5 h-5 fill-current" />
//           ) : (
//             <Play className="w-5 h-5 fill-current ml-1" />
//           )}
//         </button>

//         {/* Song Info */}
//         <div className="flex-grow min-w-0">
//           <h3 className={`font-bold text-base md:text-lg truncate ${lightMode ? 'text-gray-800' : 'text-white'}`}>
//             {title}
//           </h3>
//           <p className={`text-xs uppercase tracking-wider font-semibold ${lightMode ? 'text-gray-400' : 'text-red-200'}`}>
//             {duration ? duration : "Devotional"}
//           </p>
//         </div>

//         {/* Volume Button */}
//         <button 
//           onClick={toggleMute} 
//           className={`p-2 rounded-full transition-colors ${
//             lightMode ? 'hover:bg-gray-100 text-gray-400' : 'hover:bg-white/10 text-red-200'
//           }`}
//         >
//           {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//         </button>
//       </div>

//       {/* Progress Bar */}
//       <div className="mt-5 relative h-1.5 bg-gray-200/30 rounded-full overflow-hidden cursor-pointer">
//         <motion.div 
//           className={`absolute top-0 left-0 h-full rounded-full ${
//             lightMode ? 'bg-[#a7150b]' : 'bg-yellow-400'
//           }`}
//           style={{ width: `${progress}%` }}
//           layout // Smoothly animates width changes
//         />
//       </div>

//       {/* Hidden Audio Element */}
//       <audio 
//         ref={audioRef} 
//         src={src} 
//         onTimeUpdate={handleTimeUpdate}
//         onEnded={() => setIsPlaying(false)}
//         onPause={() => setIsPlaying(false)}
//         onPlay={() => setIsPlaying(true)}
//         controlsList="nodownload" // 🔒 Hides download button in native controls
//       />
//     </motion.div>
//   );
// }

'use client';

import React, { useState, useRef } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface MantraPlayerProps {
  title: string;
  src: string;
  duration?: string;
  lightMode?: boolean; // If true, uses a white background (good for homepage)
}

export default function MantraPlayer({ title, src, duration, lightMode = false }: MantraPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // Pause all other audio elements to prevent overlapping sound
      document.querySelectorAll('audio').forEach((el) => {
        if (el !== audioRef.current) (el as HTMLAudioElement).pause();
      });
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // 🔒 SECURITY: Prevent Right Click (Save As)
  const preventRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      onContextMenu={preventRightClick} 
      className={`relative p-5 rounded-2xl border overflow-hidden transition-all duration-300 ${
        lightMode 
          ? 'bg-white border-gray-100 shadow-lg hover:shadow-xl' 
          : 'bg-gradient-to-br from-[#a7150b] to-[#8a0d08] border-red-900 shadow-md text-white'
      }`}
    >
      {/* Decorative Background Icon */}
      <div className={`absolute top-0 right-0 p-4 opacity-10 ${lightMode ? 'text-[#a7150b]' : 'text-white'}`}>
        <Music className="w-20 h-20 transform rotate-12" />
      </div>

      <div className="relative z-10 flex items-center gap-4">
        
        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay}
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform transform active:scale-95 ${
            lightMode 
              ? 'bg-[#a7150b] text-white hover:bg-[#8a0d08]' 
              : 'bg-white text-[#a7150b] hover:bg-gray-100'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-1" />
          )}
        </button>

        {/* Song Info */}
        <div className="flex-grow min-w-0">
          <h3 className={`font-bold text-base md:text-lg truncate ${lightMode ? 'text-gray-800' : 'text-white'}`}>
            {title}
          </h3>
          <p className={`text-xs uppercase tracking-wider font-semibold ${lightMode ? 'text-gray-400' : 'text-red-200'}`}>
            {duration ? duration : "Devotional"}
          </p>
        </div>

        {/* Volume Button */}
        <button 
          onClick={toggleMute} 
          className={`p-2 rounded-full transition-colors ${
            lightMode ? 'hover:bg-gray-100 text-gray-400' : 'hover:bg-white/10 text-red-200'
          }`}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mt-5 relative h-1.5 bg-gray-200/30 rounded-full overflow-hidden cursor-pointer">
        <motion.div 
          className={`absolute top-0 left-0 h-full rounded-full ${
            lightMode ? 'bg-[#a7150b]' : 'bg-yellow-400'
          }`}
          style={{ width: `${progress}%` }}
          layout 
        />
      </div>

      {/* Hidden Audio Element with nodownload */}
      <audio 
        ref={audioRef} 
        src={src} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        controlsList="nodownload" // 🔒 Hides native download button
      />
    </motion.div>
  );
}