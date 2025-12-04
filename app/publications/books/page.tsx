

// // // import PageTemplate from "@/components/PageTemplate";
// // // import Image from "next/image";

// // // export default function BooksPage() {
// // //   const books = [
// // //     {
// // //       image: "/book/book1.png",
// // //       title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
// // //       price: "₹150",
// // //       desc: "Available At : Melmaruvathur Aadhiparasakthi siddhar peedam.",
// // //       address:
// // //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// // //     },
// // //     {
// // //       image: "/book/book2.jpg",
// // //       title: "ஓம்பசக்தி மேல்‌மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
// // //       price: "",
// // //       desc: "Available At : ஆதிபராசக்தி சித்தர் பீடம்.",
// // //       address:
// // //         "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்டபாடு, அறநிலை, மேல்‌மருவத்தூர் -603 319",
// // //     },
// // //   ];

// // //   return (
// // //     <PageTemplate
// // //       title="Books"
// // //       subtitle="Spiritual Books & Publications"
// // //       hideContent={false}   // ⭐ show custom JSX content
// // //       noTopPadding={false}
// // //       noContentTopPadding={true}
// // //       content={
// // //         <div className="grid md:grid-cols-2 gap-12 mt-10">
// // //           {books.map((book, index) => (
// // //             <div key={index} className="pb-10">
              
// // //               <Image
// // //                 src={book.image}
// // //                 width={450}
// // //                 height={400}
// // //                 alt={book.title}
// // //                 className="rounded-lg shadow-md border object-contain"
// // //               />

// // //               <h2 className="text-xl font-bold mt-4">{book.title}</h2>

// // //               {book.price && (
// // //                 <p className="mt-2 text-gray-700 font-semibold">{book.price}</p>
// // //               )}

// // //               <p className="mt-2 text-gray-700">{book.desc}</p>
// // //               <p className="mt-2 text-gray-700">{book.address}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       }
// // //     />
// // //   );
// // // }
// // import PageTemplate from "@/components/PageTemplate";
// // import Image from "next/image";

// // export default function BooksPage() {
// //   const books = [
// //     {
// //       image: "/book/book1.png",
// //       title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
// //       price: "₹150",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book2.jpg",
// //       title: "ஓம்சக்தி மேல்‌மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
// //       price: "",
// //       desc: "Available At: ஆதிபராசக்தி சித்தர் பீடம்.",
// //       address:
// //         "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்பாட்டு, அறநிலை, மேல்‌மருவத்தூர் -603 319",
// //     },
// //     {
// //       image: "/book/book3.jpg",
// //       title: "Amma...The Ocean Of Love",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book4.jpg",
// //       title: "Melmaruvathur - A Soul’s Perception",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address: "Thamarai thulasi trust",
// //     },
// //     {
// //       image: "/book/book5.jpg",
// //       title: "Divine Saying That Mother Uttered To Me",
// //       price: "₹30",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book6.jpg",
// //       title: "Melmaruvathur Amma’s Oracle",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book7.jpg",
// //       title: "Amma… The Eternal Truth",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book8.jpg",
// //       title: "Annai Adhiparasakthi’s Devine Medicines",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //     {
// //       image: "/book/book9.png",
// //       title: "The Divine Light",
// //       price: "",
// //       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
// //       address:
// //         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
// //     },
// //   ];

// //   return (
// //     <PageTemplate
// //       title="Books"
// //       subtitle="Spiritual Books & Publications"
// //       noTopPadding={false}
// //       noContentTopPadding={true}
// //       hideContent={false}
// //       content={
// //         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
// //           {books.map((book, index) => (
// //             <div
// //               key={index}
// //               className="bg-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border hover:-translate-y-1"
// //             >
// //               <Image
// //                 src={book.image}
// //                 width={450}
// //                 height={450}
// //                 alt={book.title}
// //                 className="rounded-lg object-cover w-full h-64 shadow-md"
// //               />

// //               <h3 className="text-lg font-bold mt-4">{book.title}</h3>

// //               {book.price && (
// //                 <p className="mt-2 text-red-600 font-semibold">{book.price}</p>
// //               )}

// //               <p className="mt-3 text-gray-700">{book.desc}</p>
// //               <p className="text-gray-600 mt-1 text-sm">{book.address}</p>
// //             </div>
// //           ))}
// //         </div>
// //       }
// //     />
// //   );
// // }
// import PageTemplate from "@/components/PageTemplate";
// import Image from "next/image";

// export default function BooksPage() {
//   const books = [
//     {
//       image: "/book/book1.png",
//       title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
//       price: "₹150",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book2.jpg",
//       title: "ஓம்சக்தி மேல்‌மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
//       price: "",
//       desc: "Available At: ஆதிபராசக்தி சித்தர் பீடம்.",
//       address:
//         "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்பாட்டு, அறநிலை, மேல்‌மருவத்தூர் -603 319",
//     },
//     {
//       image: "/book/book3.jpg",
//       title: "Amma...The Ocean Of Love",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book4.jpg",
//       title: "Melmaruvathur - A Soul’s Perception",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address: "Thamarai thulasi trust",
//     },
//     {
//       image: "/book/book5.jpg",
//       title: "Divine Saying That Mother Uttered To Me",
//       price: "₹30",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book6.jpg",
//       title: "Melmaruvathur Amma’s Oracle",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book7.jpg",
//       title: "Amma… The Eternal Truth",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book8.jpg",
//       title: "Annai Adhiparasakthi’s Devine Medicines",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//     {
//       image: "/book/book9.png",
//       title: "The Divine Light",
//       price: "",
//       desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
//       address:
//         "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
//     },
//   ];

//   return (
//     <PageTemplate
//       title="Books"
//       subtitle="Spiritual Books & Publications"
//       noTopPadding={false}
//       noContentTopPadding={true}
//       hideContent={false}
//       content={
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-12">
//           {books.map((book, index) => (
//             <div
//               key={index}
//               className="group bg-gradient-to-br from-white to-orange-50 border border-orange-100 p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
//             >
//               {/* Image */}
//               <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-md">
//                 <Image
//                   src={book.image}
//                   alt={book.title}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-bold mt-4 text-gray-900 leading-tight">
//                 {book.title}
//               </h3>

//               {/* Price */}
//               {book.price && (
//                 <p className="mt-2 text-orange-700 font-semibold text-lg">
//                   {book.price}
//                 </p>
//               )}

//               {/* Description */}
//               <p className="mt-3 text-gray-700 text-sm">{book.desc}</p>

//               {/* Address */}
//               <p className="text-gray-600 mt-1 text-xs leading-relaxed">
//                 {book.address}
//               </p>
//             </div>
//           ))}
//         </div>
//       }
//     />
//   );
// }
'use client';

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, BookOpen, Info } from "lucide-react";

export default function BooksPage() {
  const books = [
    {
      image: "/book/book1.png",
      title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
      price: "₹150",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book2.jpg",
      title: "ஓம்சக்தி மேல்‌மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
      price: "",
      desc: "Available At: ஆதிபராசக்தி சித்தர் பீடம்.",
      address: "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்பாட்டு, அறநிலை, மேல்‌மருவத்தூர் -603 319",
    },
    {
      image: "/book/book3.jpg",
      title: "Amma...The Ocean Of Love",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book4.jpg",
      title: "Melmaruvathur - A Soul’s Perception",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Thamarai thulasi trust",
    },
    {
      image: "/book/book5.jpg",
      title: "Divine Saying That Mother Uttered To Me",
      price: "₹30",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book6.jpg",
      title: "Melmaruvathur Amma’s Oracle",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book7.jpg",
      title: "Amma… The Eternal Truth",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book8.jpg",
      title: "Annai Adhiparasakthi’s Devine Medicines",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book9.png",
      title: "The Divine Light",
      price: "",
      desc: "Available At: Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address: "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
  ];

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTemplate
      title="Publications"
      subtitle="Sacred Literature & Divine Wisdom"
      noTopPadding={false}
      noContentTopPadding={true}
      hideContent={false}
      content={
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12"
          >
            {books.map((book, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-2xl hover:border-orange-200 transition-all duration-300"
              >
                {/* Image Section with Background Tint */}
                <div className="relative h-72 w-full bg-stone-50 flex items-center justify-center p-6 overflow-hidden">
                  
                  {/* Decorative Circle Background */}
                  <div className="absolute w-48 h-48 bg-orange-100/50 rounded-full blur-3xl group-hover:bg-orange-200/50 transition-colors duration-500" />

                  {/* Book Cover Image */}
                  <div className="relative w-40 h-56 shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500 ease-out transform perspective-1000 rotate-y-0">
                    <Image
                      src={book.image}
                      alt={book.title}
                      fill
                      className="object-cover rounded-md sm:rounded-r-md border-l-2 border-l-white/20"
                    />
                  </div>

                  {/* Price Badge */}
                  {book.price && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-orange-700 font-bold text-sm shadow-sm border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      {book.price}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-start gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-orange-400 mt-1 shrink-0" />
                    <span className="text-xs font-semibold tracking-wider text-orange-600 uppercase">
                      Publication
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-serif font-bold text-gray-900 leading-snug mb-3 line-clamp-2 group-hover:text-orange-700 transition-colors">
                    {book.title}
                  </h3>

                  {/* Divider */}
                  <div className="w-full h-px bg-stone-100 my-3" />

                  {/* Location/Address Details */}
                  <div className="mt-auto space-y-3">
                    <div className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <p className="text-sm text-gray-500 line-clamp-1">
                        {book.desc.replace("Available At: ", "")}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-2 bg-stone-50 p-3 rounded-lg border border-stone-100 group-hover:bg-orange-50/50 group-hover:border-orange-100 transition-colors">
                      <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {book.address}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      }
    />
  );
}