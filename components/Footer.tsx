// 'use client';

// import Link from 'next/link';
// import { Heart, MapPin, Phone, Mail } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-[#a7150b] text-white mt-16">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
//           {/* About */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
  
//               Melmaruvathur Adhiparasakthi Siddhar Peedam
//             </h3>
//             <p className="text-sm opacity-90">
//               Spiritual wisdom and divine grace for the enlightenment of all beings.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/" className="hover:opacity-80 transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/amma" className="hover:opacity-80 transition">
//                   About Amma
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/siddhar-peedam" className="hover:opacity-80 transition">
//                   Siddhar Peedam
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/festivals" className="hover:opacity-80 transition">
//                   Festivals
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Resources</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/activities" className="hover:opacity-80 transition">
//                   Activities
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/publications" className="hover:opacity-80 transition">
//                   Publications
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/visit-us" className="hover:opacity-80 transition">
//                   Visit Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/poojas-donations" className="hover:opacity-80 transition">
//                   Donations
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
// <div>
//   <h4 className="text-lg font-bold mb-4">Contact</h4>
//   <ul className="space-y-3 text-sm">
    
//     <li className="flex items-start gap-2">
//       <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
//       <span>
//         Adhiparasakthi Siddhar Peedam,<br />
//         Melmaruvathur, Chengalpattu District,<br />
//         Tamil Nadu - 603319
//       </span>
//     </li>

//     <li className="flex items-center gap-2">
//       <Phone className="w-4 h-4" />
//       <span>044-27529391, 044-27529313</span>
//     </li>

//     <li className="flex items-center gap-2">
//       <Mail className="w-4 h-4" />
//       <span>contact@omsakthiamma.org</span>
//     </li>

//   </ul>
// </div>

//           {/* Social */}
//           <div>
//             <h4 className="text-lg font-bold mb-4">Follow Us</h4>
//             <p className="text-sm opacity-90 mb-3">Connect with our spiritual community</p>
//             <div className="flex gap-3">
//               <Link href="#" className="hover:opacity-80 transition">Facebook</Link>
//               <Link href="#" className="hover:opacity-80 transition">Instagram</Link>
//               <Link href="#" className="hover:opacity-80 transition">YouTube</Link>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/20 pt-8">
//           <p className="text-center text-sm opacity-75">
//             © 2025 Om Sakthi Amma. All rights reserved. | Spiritual wisdom for a enlightened world.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

'use client';

import Link from 'next/link';
import { Facebook, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#8a0d08] text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* COLUMN 1: Siddhar Peedam */}
          <div className="space-y-4">
            <h3 className="text-[#ffc107] font-bold text-lg mb-2">Siddhar Peedam</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/siddhar-peedam/introduction" className="hover:text-[#ffc107] transition">Introduction</Link></li>
              <li><Link href="/siddhar-peedam/history" className="hover:text-[#ffc107] transition">History</Link></li>
              <li><Link href="/siddhar-peedam/schema" className="hover:text-[#ffc107] transition">Schema</Link></li>
              <li><Link href="/siddhar-peedam/uniqueness" className="hover:text-[#ffc107] transition">Uniqueness</Link></li>
              <li><Link href="/siddhar-peedam/four-ideals" className="hover:text-[#ffc107] transition">Four Ideals</Link></li>
              <li><Link href="/activities" className="hover:text-[#ffc107] transition">Activities</Link></li>
            </ul>
          </div>

          {/* COLUMN 2: Poojas & Donations */}
<div className="space-y-4">
  <h3 className="text-[#ffc107] font-bold text-lg mb-2">Poojas & Donations</h3>
  <ul className="space-y-2 text-sm font-medium">

    <li>
      <a
        href="https://masm.omsakthiamma.in/donate-abhisegam/"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Daily Abhisegam
      </a>
    </li>

    <li>
      <a
        href="https://masm.omsakthiamma.in/donate-other/?c=VELAKU"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Pournami Velaku Poojai
      </a>
    </li>

    <li>
      <a
        href="https://masm.omsakthiamma.in/donate-other/?c=A7"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ammavasai Velvi
      </a>
    </li>

    <li>
      <a
        href="https://masm.omsakthiamma.in/donate-other/?c=GCP"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Golden Chariot
      </a>
    </li>

    <li>
      <a
        href="https://masm.omsakthiamma.in/donate-other/?c=SIC"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Silver Chariot
      </a>
    </li>

    <li>
      <a
        href="https://acmectrust.org/"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Women Welfare (80G)
      </a>
    </li>

    <li>
      <a
        href="https://acmectrust.org/"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hospital Donations (80G)
      </a>
    </li>

    <li>
      <a
        href="https://aspwct.omsakthiamma.in/"
        className="hover:text-[#ffc107] transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Annadhanam (80G)
      </a>
    </li>

  </ul>
</div>


          {/* COLUMN 3: Amma */}
          <div className="space-y-4">
            <h3 className="text-[#ffc107] font-bold text-lg mb-2">Amma</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/amma/about-amma" className="hover:text-[#ffc107] transition">About Amma</Link></li>
              <li><Link href="/amma/message" className="hover:text-[#ffc107] transition">Message</Link></li>
              <li><Link href="/amma/miracles" className="hover:text-[#ffc107] transition">Miracles</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Info */}
          <div className="space-y-4">
            <h3 className="text-[#ffc107] font-bold text-lg mb-2">Info</h3>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link href="/page/terms_of_service" className="hover:text-[#ffc107] transition">Terms and Condition</Link></li>
            </ul>
          </div>

          {/* COLUMN 5: Contact */}
          <div className="space-y-4">
            <h3 className="text-[#ffc107] font-bold text-lg mb-2">Contact</h3>
            <div className="text-sm space-y-3 leading-relaxed">
              <p>
                <strong>Adhiparasakthi Siddhar Peedam</strong><br />
                No.1 GST Road,<br />
                Melmaruvathur-603 319<br />
                TamilNadu
              </p>
              
              <div className="space-y-1">
                <p>WomenTrust : +91 44 27529199</p>
                <p>MASM : +91 4427529199</p>
                <p>Mandram Office: +91 44 27529096</p>
                <p>ACMEC : +91 44 27529313</p>
                <p>PRO: +91 44 27529276</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT BAR (Yellow Section) */}
      <div className="bg-[#ffc107] text-gray-900 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-sm font-bold text-center md:text-left">
            Copyright @ 2025 Adhiparasakthi Siddhar Peedam. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="https://www.facebook.com/MelmaruvathurSiddharPeedam" target='_blank' className="bg-[#8a0d08] text-white p-2 rounded-md hover:bg-black transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="https://www.youtube.com/c/MelmaruvathurSiddharPeedam" target='_blank' className="bg-[#8a0d08] text-white p-2 rounded-md hover:bg-black transition-colors">
              <Youtube className="w-4 h-4" />
            </Link>
            <Link href="https://x.com/SiddharPeedam" target='_blank' className="bg-[#8a0d08] text-white p-2 rounded-md hover:bg-black transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}