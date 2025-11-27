// // // // // // 'use client';

// // // // // // import { motion } from 'framer-motion';
// // // // // // import Image from 'next/image';

// // // // // // interface PageTemplateProps {
// // // // // //   title: string;
// // // // // //   subtitle: string;
// // // // // //   imageSrc: string;
// // // // // //   content: string;
// // // // // //   imageOnRight?: boolean;
// // // // // // }

// // // // // // export default function PageTemplate({
// // // // // //   title,
// // // // // //   subtitle,
// // // // // //   imageSrc,
// // // // // //   content,
// // // // // //   imageOnRight = false,
// // // // // // }: PageTemplateProps) {
// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// // // // // //       <section className="py-20 px-4">
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           animate={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.8 }}
// // // // // //           className="max-w-4xl mx-auto text-center"
// // // // // //         >
// // // // // //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// // // // // //             {title}
// // // // // //           </h1>
// // // // // //           <p className="text-xl text-gray-600">{subtitle}</p>
// // // // // //         </motion.div>
// // // // // //       </section>

// // // // // //       <section className="py-16 px-4 max-w-5xl mx-auto">
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // // //           className={`grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? 'md:flex-row-reverse' : ''}`}
// // // // // //         >
// // // // // //           {!imageOnRight && (
// // // // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // // // // //               <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div className="space-y-6">
// // // // // //             <h2 className="text-3xl font-bold text-[#a7150b]">{title}</h2>
// // // // // //             <p className="text-gray-700 leading-relaxed">{content}</p>
// // // // // //             <div className="space-y-2">
// // // // // //               <p className="text-gray-700 leading-relaxed">
// // // // // //                 This is a sacred place of spiritual transformation and divine wisdom.
// // // // // //               </p>
// // // // // //               <p className="text-gray-700 leading-relaxed">
// // // // // //                 We welcome all seekers of truth and spiritual enlightenment.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {imageOnRight && (
// // // // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // // // // //               <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
// // // // // //             </div>
// // // // // //           )}
// // // // // //         </motion.div>
// // // // // //       </section>

// // // // // //       <section className="py-16 px-4 bg-[#ffc107]">
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           transition={{ duration: 0.8, delay: 0.4 }}
// // // // // //           className="max-w-4xl mx-auto text-center"
// // // // // //         >
// // // // // //           <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// // // // // //             Explore More Spiritual Wisdom
// // // // // //           </h3>
// // // // // //           <p className="text-lg text-[#1a1a1a] opacity-80">
// // // // // //             Visit other sections to deepen your spiritual understanding
// // // // // //           </p>
// // // // // //         </motion.div>
// // // // // //       </section>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // 'use client';

// // // // // import { motion } from 'framer-motion';
// // // // // import Image from 'next/image';

// // // // // interface PageTemplateProps {
// // // // //   title: string;
// // // // //   subtitle: string;
// // // // //   imageSrc?: string;   // ⭐ made optional
// // // // //   content: string;
// // // // //   imageOnRight?: boolean;
// // // // //   imagePosition?: "left" | "right" | "bottom";
// // // // // }

// // // // // export default function PageTemplate({
// // // // //   title,
// // // // //   subtitle,
// // // // //   imageSrc,
// // // // //   content,
// // // // //   imageOnRight = false,
// // // // // }: PageTemplateProps) {
// // // // //   const showImage = Boolean(imageSrc); // ⭐ determines layout

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// // // // //       {/* Header */}
// // // // //       {/* <section className="py-20 px-4"> */}
// // // // //       <section className={`px-4 ${imageSrc ? "py-20" : "py-10"}`}>
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 20 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="max-w-4xl mx-auto text-center"
// // // // //         >
// // // // //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// // // // //             {title}
// // // // //           </h1>
// // // // //           <p className="text-xl text-gray-600">{subtitle}</p>
// // // // //         </motion.div>
// // // // //       </section>

// // // // //       {/* Content Section */}
// // // // //       {/* <section className="py-16 px-4 max-w-5xl mx-auto"> */}
// // // // //       <section className={`${imageSrc ? "py-16" : "py-6"} px-4 max-w-5xl mx-auto`}>
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // // //           className={
// // // // //             showImage
// // // // //               ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? 'md:flex-row-reverse' : ''}`
// // // // //               : `max-w-3xl mx-auto` // ⭐ Full width content if no image
// // // // //           }
// // // // //         >
// // // // //           {/* Left Image */}
// // // // //           {showImage && !imageOnRight && (
// // // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // // // //               <Image
// // // // //                 src={imageSrc || "/placeholder.svg"}
// // // // //                 alt={title}
// // // // //                 fill
// // // // //                 className="object-cover"
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           {/* Text Content */}
// // // // //           <div className="space-y-6">
// // // // //             <h2 className="text-3xl font-bold text-[#a7150b]">{title}</h2>
// // // // //             <p className="text-gray-700 leading-relaxed whitespace-pre-line">
// // // // //               {content}
// // // // //             </p>

// // // // //             {showImage && (
// // // // //               <div className="space-y-2">
// // // // //                 <p className="text-gray-700 leading-relaxed">
// // // // //                   This is a sacred place of spiritual transformation and divine wisdom.
// // // // //                 </p>
// // // // //                 <p className="text-gray-700 leading-relaxed">
// // // // //                   We welcome all seekers of truth and spiritual enlightenment.
// // // // //                 </p>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>

// // // // //           {/* Right Image */}
// // // // //           {showImage && imageOnRight && (
// // // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // // // //               <Image
// // // // //                 src={imageSrc || "/placeholder.svg"}
// // // // //                 alt={title}
// // // // //                 fill
// // // // //                 className="object-cover"
// // // // //               />
// // // // //             </div>
// // // // //           )}
// // // // //         </motion.div>
// // // // //       </section>

// // // // //       {/* Footer Section */}
// // // // //       <section className="py-16 px-4 bg-[#ffc107]">
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           transition={{ duration: 0.8, delay: 0.4 }}
// // // // //           className="max-w-4xl mx-auto text-center"
// // // // //         >
// // // // //           <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// // // // //             Explore More Spiritual Wisdom
// // // // //           </h3>
// // // // //           <p className="text-lg text-[#1a1a1a] opacity-80">
// // // // //             Visit other sections to deepen your spiritual understanding
// // // // //           </p>
// // // // //         </motion.div>
// // // // //       </section>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { motion } from 'framer-motion';
// // // // import Image from 'next/image';

// // // // interface PageTemplateProps {
// // // //   title: string;
// // // //   subtitle: string;
// // // //   imageSrc?: string;
// // // //   content: string;
// // // //   imageOnRight?: boolean; // old (still supported)
// // // //   imagePosition?: "left" | "right" | "bottom"; // ⭐ new
// // // // }

// // // // export default function PageTemplate({
// // // //   title,
// // // //   subtitle,
// // // //   imageSrc,
// // // //   content,
// // // //   imageOnRight = false,
// // // //   imagePosition = "left", // default
// // // // }: PageTemplateProps) {

// // // //   const showImage = Boolean(imageSrc);

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      
// // // //       {/* Header */}
// // // //       <section className={`px-4 ${imageSrc ? "py-20" : "py-10"}`}>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="max-w-4xl mx-auto text-center"
// // // //         >
// // // //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// // // //             {title}
// // // //           </h1>
// // // //           <p className="text-xl text-gray-600">{subtitle}</p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* Content Section */}
// // // //       <section className={`${imageSrc ? "py-16" : "py-6"} px-4 max-w-5xl mx-auto`}>
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ duration: 0.8, delay: 0.2 }}
// // // //           className={
// // // //             !showImage
// // // //               ? "max-w-3xl mx-auto"
// // // //               : imagePosition === "bottom"
// // // //                 ? "space-y-10"  // ⭐ content then image vertically stacked
// // // //                 : `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
// // // //           }
// // // //         >
// // // //           {/* Text Content */}
// // // //           <div className="space-y-6">
// // // //   <h2 className="text-3xl font-bold text-[#a7150b]">{title}</h2>
// // // //   <div
// // // //     className="text-gray-700 leading-relaxed space-y-6"
// // // //     dangerouslySetInnerHTML={{ __html: content }}
// // // //   />

// // // //             {showImage && imagePosition !== "bottom" && (
// // // //               <div className="space-y-2">
// // // //                 <p className="text-gray-700 leading-relaxed">
// // // //                   This is a sacred place of spiritual transformation and divine wisdom.
// // // //                 </p>
// // // //                 <p className="text-gray-700 leading-relaxed">
// // // //                   We welcome all seekers of truth and spiritual enlightenment.
// // // //                 </p>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Image (Left or Right Modes) */}
// // // //           {showImage && imagePosition !== "bottom" && (
// // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // // //               <Image
// // // //                 src={imageSrc}
// // // //                 alt={title}
// // // //                 fill
// // // //                 className="object-cover"
// // // //               />
// // // //             </div>
// // // //           )}

// // // //           {/* ⭐ Image at Bottom */}
// // // //           {showImage && imagePosition === "bottom" && (
// // // //             <div className="relative h-96 rounded-lg overflow-hidden shadow-lg mx-auto">
// // // //               <Image
// // // //                 src={imageSrc}
// // // //                 alt={title}
// // // //                 fill
// // // //                 className="object-cover"
// // // //               />
// // // //             </div>
// // // //           )}

// // // //         </motion.div>
// // // //       </section>

// // // //       {/* Footer Section */}
// // // //       <section className="py-16 px-4 bg-[#ffc107]">
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           transition={{ duration: 0.8, delay: 0.4 }}
// // // //           className="max-w-4xl mx-auto text-center"
// // // //         >
// // // //           <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// // // //             Explore More Spiritual Wisdom
// // // //           </h3>
// // // //           <p className="text-lg text-[#1a1a1a] opacity-80">
// // // //             Visit other sections to deepen your spiritual understanding
// // // //           </p>
// // // //         </motion.div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Image from "next/image";

// // // interface PageTemplateProps {
// // //   title: string;
// // //   subtitle: string;
// // //   imageSrc?: string;
// // //   content?: string;
// // //   imageOnRight?: boolean;
// // //   hideContent?: boolean;
// // //   hideFooter?: boolean;
// // //   noTopPadding?: boolean;   // ⭐ NEW PROP
// // // }

// // // export default function PageTemplate({
// // //   title,
// // //   subtitle,
// // //   imageSrc,
// // //   content = "",
// // //   imageOnRight = false,
// // //   hideContent = false,
// // //   hideFooter = false,
// // //   noTopPadding = false,     // ⭐ DEFAULT = false
// // // }: PageTemplateProps) {
// // //   const showImage = Boolean(imageSrc);

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

// // //       {/* PAGE HEADER */}
// // //       <section className={`${noTopPadding ? "py-6" : "py-20"} px-4`}>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.8 }}
// // //           className="max-w-4xl mx-auto text-center"
// // //         >
// // //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// // //             {title}
// // //           </h1>

// // //           {subtitle && (
// // //             <p className="text-xl text-gray-600">{subtitle}</p>
// // //           )}
// // //         </motion.div>
// // //       </section>

// // //       {/* CONTENT SECTION */}
// // //       {!hideContent && (
// // //         <section className="py-16 px-4 max-w-5xl mx-auto">
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 0.8, delay: 0.2 }}
// // //             className={
// // //               showImage
// // //                 ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
// // //                 : `max-w-3xl mx-auto`
// // //             }
// // //           >
// // //             {/* LEFT IMAGE */}
// // //             {showImage && !imageOnRight && (
// // //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // //                 <Image
// // //                   src={imageSrc!}
// // //                   alt={title}
// // //                   fill
// // //                   className="object-cover"
// // //                 />
// // //               </div>
// // //             )}

// // //             {/* TEXT CONTENT */}
// // //             <div className="space-y-6">
// // //               <h2 className="text-3xl font-bold text-[#a7150b]">{title}</h2>

// // //               <div
// // //                 className="text-gray-700 leading-relaxed whitespace-pre-line"
// // //                 dangerouslySetInnerHTML={{ __html: content }}
// // //               />

// // //               {showImage && (
// // //                 <div className="space-y-2 text-gray-700 leading-relaxed">
// // //                   <p>This is a sacred place of spiritual transformation and divine wisdom.</p>
// // //                   <p>We welcome all seekers of truth and spiritual enlightenment.</p>
// // //                 </div>
// // //               )}
// // //             </div>

// // //             {/* RIGHT IMAGE */}
// // //             {showImage && imageOnRight && (
// // //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// // //                 <Image
// // //                   src={imageSrc!}
// // //                   alt={title}
// // //                   fill
// // //                   className="object-cover"
// // //                 />
// // //               </div>
// // //             )}
// // //           </motion.div>
// // //         </section>
// // //       )}

// // //       {/* FOOTER SECTION */}
// // //       {!hideFooter && (
// // //         <section className="py-16 px-4 bg-[#ffc107]">
// // //           <motion.div
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: 1 }}
// // //             transition={{ duration: 0.8, delay: 0.4 }}
// // //             className="max-w-4xl mx-auto text-center"
// // //           >
// // //             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// // //               Explore More Spiritual Wisdom
// // //             </h3>

// // //             <p className="text-lg text-[#1a1a1a] opacity-80">
// // //               Visit other sections to deepen your spiritual understanding
// // //             </p>
// // //           </motion.div>
// // //         </section>
// // //       )}

// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // interface PageTemplateProps {
// //   title: string;
// //   subtitle?: string;
// //   imageSrc?: string;
// //   content?: string;
// //   imageOnRight?: boolean;
// //   hideContent?: boolean;
// //   hideFooter?: boolean;

// //   // NEW ↓↓↓
// //   noTopPadding?: boolean;
// //   noContentTopPadding?: boolean;
// // }

// // export default function PageTemplate({
// //   title,
// //   subtitle,
// //   imageSrc,
// //   content = "",
// //   imageOnRight = false,
// //   hideContent = false,
// //   hideFooter = false,
// //   noTopPadding = false,          // NEW
// //   noContentTopPadding = false,   // NEW
// // }: PageTemplateProps) {
// //   const showImage = Boolean(imageSrc);

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

// //       {/* PAGE HEADER */}
// //       <section className={`${noTopPadding ? "py-4" : "py-20"} px-4`}>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="max-w-4xl mx-auto text-center"
// //         >
// //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// //             {title}
// //           </h1>

// //           {subtitle && (
// //             <p className="text-xl text-gray-600">{subtitle}</p>
// //           )}
// //         </motion.div>
// //       </section>

// //       {/* CONTENT SECTION */}
// //       {!hideContent && (
// //         <section className={`${noContentTopPadding ? "pt-2 pb-10" : "py-16"} px-4 max-w-5xl mx-auto`}>
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className={
// //               showImage
// //                 ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
// //                 : `max-w-3xl mx-auto`
// //             }
// //           >
// //             {/* LEFT IMAGE */}
// //             {showImage && !imageOnRight && (
// //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// //                 <Image src={imageSrc!} alt={title} fill className="object-cover" />
// //               </div>
// //             )}

// //             {/* TEXT CONTENT */}
// //             <div className="space-y-6">
// //               <div
// //                 className="text-gray-700 leading-relaxed whitespace-pre-line"
// //                 dangerouslySetInnerHTML={{ __html: content }}
// //               />
// //             </div>

// //             {/* RIGHT IMAGE */}
// //             {showImage && imageOnRight && (
// //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// //                 <Image src={imageSrc!} alt={title} fill className="object-cover" />
// //               </div>
// //             )}
// //           </motion.div>
// //         </section>
// //       )}

// //       {/* FOOTER */}
// //       {!hideFooter && (
// //         <section className="py-16 px-4 bg-[#ffc107]">
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="max-w-4xl mx-auto text-center"
// //           >
// //             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// //               Explore More Spiritual Wisdom
// //             </h3>
// //             <p className="text-lg text-[#1a1a1a] opacity-80">
// //               Visit other sections to deepen your spiritual understanding
// //             </p>
// //           </motion.div>
// //         </section>
// //       )}

// //     </div>
// //   );
// // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";

// // interface PageTemplateProps {
// //   title: string;
// //   subtitle?: string;
// //   imageSrc?: string;
// //   content?: string;
// //   imageOnRight?: boolean;
// //   hideContent?: boolean;
// //   hideFooter?: boolean;

// //   noTopPadding?: boolean;          // reduces gap above title
// //   noContentTopPadding?: boolean;   // reduces gap above content
// // }

// // export default function PageTemplate({
// //   title,
// //   subtitle,
// //   imageSrc,
// //   content = "",
// //   imageOnRight = false,
// //   hideContent = false,
// //   hideFooter = false,
// //   noTopPadding = false,
// //   noContentTopPadding = false,
// // }: PageTemplateProps) {

// //   // ⭐ REMOVE ALL BLANK LINES & EMPTY PARAGRAPHS
// //   const cleanedContent = content
// //     .replace(/<p>\s*<\/p>/g, "")    // remove empty <p></p>
// //     .replace(/\n\s*\n/g, "\n")      // remove blank lines
// //     .trim();

// //   const showImage = Boolean(imageSrc);

// //   return (
// //     // <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
// //     <div className="bg-gradient-to-b from-white to-gray-50">


// //       {/* PAGE HEADER */}
// //       <section className={`${noTopPadding ? "py-4" : "py-20"} px-4`}>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="max-w-4xl mx-auto text-center"
// //         >
// //           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
// //             {title}
// //           </h1>

// //           {subtitle && (
// //             <p className="text-xl text-gray-600">{subtitle}</p>
// //           )}
// //         </motion.div>
// //       </section>

// //       {/* CONTENT SECTION */}
// //       {!hideContent && (
// //         <section
// //           className={`${noContentTopPadding ? "pt-2 pb-10" : "py-16"} px-4 max-w-5xl mx-auto`}
// //         >
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //             className={
// //               showImage
// //                 ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
// //                 : `max-w-3xl mx-auto`
// //             }
// //           >
// //             {/* LEFT IMAGE */}
// //             {showImage && !imageOnRight && (
// //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// //                 <Image
// //                   src={imageSrc!}
// //                   alt={title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //             )}

// //             {/* TEXT CONTENT */}
// //             <div className="space-y-6">
// //               <div
// //                 className="text-gray-700 leading-relaxed whitespace-pre-line"
// //                 dangerouslySetInnerHTML={{ __html: cleanedContent }}
// //               />
// //             </div>

// //             {/* RIGHT IMAGE */}
// //             {showImage && imageOnRight && (
// //               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
// //                 <Image
// //                   src={imageSrc!}
// //                   alt={title}
// //                   fill
// //                   className="object-cover"
// //                 />
// //               </div>
// //             )}
// //           </motion.div>
// //         </section>
// //       )}

// //       {/* FOOTER */}
// //       {!hideFooter && (
// //         <section className="py-16 px-4 bg-[#ffc107]">
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.8, delay: 0.4 }}
// //             className="max-w-4xl mx-auto text-center"
// //           >
// //             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
// //               Explore More Spiritual Wisdom
// //             </h3>
// //             <p className="text-lg text-[#1a1a1a] opacity-80">
// //               Visit other sections to deepen your spiritual understanding
// //             </p>
// //           </motion.div>
// //         </section>
// //       )}

// //     </div>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import React from "react";

// interface PageTemplateProps {
//   title: string;
//   subtitle?: string;
//   imageSrc?: string;
//   content?: string | React.ReactNode;   // ⭐ supports HTML string OR JSX
//   imageOnRight?: boolean;
//   hideContent?: boolean;
//   hideFooter?: boolean;

//   noTopPadding?: boolean;
//   noContentTopPadding?: boolean;
// }

// export default function PageTemplate({
//   title,
//   subtitle,
//   imageSrc,
//   content = "",
//   imageOnRight = false,
//   hideContent = false,
//   hideFooter = false,
//   noTopPadding = false,
//   noContentTopPadding = false,
// }: PageTemplateProps) {

//   // ⭐ CLEAN ONLY IF content IS STRING
//   const cleanedContent =
//     typeof content === "string"
//       ? content
//           .replace(/<p>\s*<\/p>/g, "") // remove empty <p></p>
//           .replace(/\n\s*\n/g, "\n")   // remove blank lines
//           .trim()
//       : null;

//   const showImage = Boolean(imageSrc);

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50">

//       {/* PAGE HEADER */}
//       <section className={`${noTopPadding ? "py-4" : "py-20"} px-4`}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto text-center"
//         >
//           <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
//             {title}
//           </h1>

//           {subtitle && (
//             <p className="text-xl text-gray-600">{subtitle}</p>
//           )}
//         </motion.div>
//       </section>

//       {/* CONTENT SECTION */}
//       {!hideContent && (
//         <section
//           className={`${noContentTopPadding ? "pt-2 pb-10" : "py-16"} px-4 max-w-5xl mx-auto`}
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className={
//               showImage
//                 ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
//                 : `max-w-3xl mx-auto`
//             }
//           >
//             {/* LEFT IMAGE */}
//             {showImage && !imageOnRight && (
//               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
//                 <Image
//                   src={imageSrc!}
//                   alt={title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}

//             {/* TEXT CONTENT */}
//             <div className="space-y-6">
//               <div className="text-gray-700 leading-relaxed whitespace-pre-line">

//                 {/* If cleanedContent exists → treat as HTML string */}
//                 {cleanedContent !== null ? (
//                   <div
//                     dangerouslySetInnerHTML={{ __html: cleanedContent }}
//                   />
//                 ) : (
//                   /* Else treat as JSX */
//                   content
//                 )}

//               </div>
//             </div>

//             {/* RIGHT IMAGE */}
//             {showImage && imageOnRight && (
//               <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
//                 <Image
//                   src={imageSrc!}
//                   alt={title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//             )}
//           </motion.div>
//         </section>
//       )}

//       {/* FOOTER */}
//       {!hideFooter && (
//         <section className="py-16 px-4 bg-[#ffc107]">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
//               Explore More Spiritual Wisdom
//             </h3>
//             <p className="text-lg text-[#1a1a1a] opacity-80">
//               Visit other sections to deepen your spiritual understanding
//             </p>
//           </motion.div>
//         </section>
//       )}

//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  content?: string | React.ReactNode;
  imageOnRight?: boolean;
  hideContent?: boolean;
  hideFooter?: boolean;
  noTopPadding?: boolean;
  noContentTopPadding?: boolean;
  children?: React.ReactNode; // ⭐ Added children prop
}

export default function PageTemplate({
  title,
  subtitle,
  imageSrc,
  content = "",
  imageOnRight = false,
  hideContent = false,
  hideFooter = false,
  noTopPadding = false,
  noContentTopPadding = false,
  children, // ⭐ Destructure children
}: PageTemplateProps) {

  // Logic to handle cleaning only if content is a string
  const cleanedContent =
    typeof content === "string"
      ? content
          .replace(/<p>\s*<\/p>/g, "")
          .replace(/\n\s*\n/g, "\n")
          .trim()
      : null;

  const showImage = Boolean(imageSrc);
  const hasChildren = React.Children.count(children) > 0;

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">

      {/* PAGE HEADER */}
      <section className={`${noTopPadding ? "py-4" : "py-20"} px-4`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl text-gray-600">{subtitle}</p>
          )}
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      {!hideContent && (
        <section
          className={`${noContentTopPadding ? "pt-2 pb-10" : "py-16"} px-4 max-w-7xl mx-auto`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={
              showImage
                ? `grid md:grid-cols-2 gap-12 items-center ${imageOnRight ? "md:flex-row-reverse" : ""}`
                : (hasChildren ? "w-full" : "max-w-3xl mx-auto") // ⭐ If using custom UI (children), use full width
            }
          >
            {/* LEFT IMAGE (Only if imageSrc is provided) */}
            {showImage && !imageOnRight && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc!}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* MAIN CONTENT AREA */}
            <div className={showImage ? "space-y-6" : "w-full"}>
              
              {/* ⭐ PRIORITY 1: Render Children (New UI) */}
              {hasChildren ? (
                children
              ) : (
                /* ⭐ PRIORITY 2: Render Content Prop (Old UI) */
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {cleanedContent !== null ? (
                    <div dangerouslySetInnerHTML={{ __html: cleanedContent }} />
                  ) : (
                    content
                  )}
                </div>
              )}

            </div>

            {/* RIGHT IMAGE (Only if imageSrc is provided) */}
            {showImage && imageOnRight && (
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={imageSrc!}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* FOOTER */}
      {!hideFooter && (
        <section className="py-16 px-4 bg-[#ffc107]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
              Explore More Spiritual Wisdom
            </h3>
            <p className="text-lg text-[#1a1a1a] opacity-80">
              Visit other sections to deepen your spiritual understanding
            </p>
          </motion.div>
        </section>
      )}

    </div>
  );
}