// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Heart, Menu, X } from 'lucide-react';

// interface DropdownItem {
//   label: string;
//   href: string;
// }

// interface NavItem {
//   label: string;
//   href: string;
//   dropdown?: DropdownItem[];
// }

// const navItems: NavItem[] = [
//   { label: 'Home', href: '/' },
//   {
//     label: 'Amma',
//     href: '/amma',
//     dropdown: [
//       // { label: 'About Amma', href: '/amma/about-amma' },
//       { label: 'Miracles', href: '/amma/miracles' },
//       { label: 'Divine Wisdom', href: '/amma/divine-wisdom' },
//       { label: 'Message', href: '/amma/message' },
//     ],
//   },
//   {
//     label: 'Siddhar Peedam',
//     href: '/siddhar-peedam',
//     dropdown: [
//       { label: 'Introduction', href: '/siddhar-peedam/introduction' },
//       { label: 'History', href: '/siddhar-peedam/history' },
//       { label: 'Schema', href: '/siddhar-peedam/schema' },
//       { label: 'Uniqueness', href: '/siddhar-peedam/uniqueness' },
//       { label: 'Four Ideals', href: '/siddhar-peedam/four-ideals' },
//     ],
//   },
//   {
//     label: 'Festivals',
//     href: '/festivals',
//     dropdown: [
//       { label: 'Occasions', href: '/festivals/occasions' },
//       { label: 'Poojas', href: '/festivals/poojas' },
//       { label: 'Mantras', href: '/festivals/mantras' },
//       { label: 'Programmes', href: '/festivals/programmes' },
//       { label: 'Aadi Pooram', href: '/festivals/aadi-pooram' },
//     ],
//   },
//   {
//     label: 'Activities',
//     href: '/activities',
//     dropdown: [
//       { label: 'Worshipping Centres', href: '/activities/worshipping-centres' },
//       { label: 'Sakthi Peedams', href: '/activities/sakthi-peedams' },
//       { label: 'Youth Wings', href: '/activities/youth-wings' },
//       { label: 'Spiritual Magazines', href: '/activities/spiritual-magazines' },
//       { label: 'Spiritual Conferences', href: '/activities/spiritual-conferences' },
//       { label: 'Spiritual Tours', href: '/activities/spiritual-tours' },
//       { label: 'Social Activity', href: '/activities/social-activity' },
//     ],
//   },
//   {
//     label: 'Publications',
//     href: '/publications',
//     dropdown: [
//       { label: 'Articles', href: '/publications/articles' },
//       { label: 'Books', href: '/publications/books' },
//       { label: 'Magazine', href: '/publications/magazine' },
//     ],
//   },
//   { label: 'Visit Us', href: '/visit-us' },
// ];

// export default function Header() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
//   };

//   return (
//     <header className="sticky top-0 z-50 bg-[#ffc107] shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
// <Link
//   href="/"
//   className="flex items-center gap-3 font-bold text-2xl text-[#1a1a1a] hover:opacity-80 transition"
// >
//   <img
//     src="/logo.png"
//     alt="Om Sakthi Amma Logo"
//     className="w-16 h-16 object-contain"
//   />

//   <span className="whitespace-nowrap">
//    Adhiparasakthi
//    <br />
//     Siddhar Peedam
//   </span>
// </Link>



//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center gap-1">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative group"
//                 onMouseEnter={() => setOpenDropdown(item.label)}
//                 onMouseLeave={() => setOpenDropdown(null)}
//               >
//                 <Link
//                   href={item.href}
//                   className="px-3 py-2 rounded-md text-sm font-medium text-[#1a1a1a] hover:bg-yellow-500 transition flex items-center gap-1"
//                 >
//                   {item.label}
//                   {item.dropdown && <ChevronDown className="w-4 h-4" />}
//                 </Link>

//                 {/* Dropdown Menu */}
//                 <AnimatePresence>
//                   {item.dropdown && openDropdown === item.label && (
//                     <motion.div
//                       variants={dropdownVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                       className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl overflow-hidden"
//                     >
//                       {item.dropdown.map((subitem) => (
//                         <Link
//                           key={subitem.href}
//                           href={subitem.href}
//                           className="block px-4 py-3 text-sm text-[#1a1a1a] hover:bg-[#ffc107] transition"
//                         >
//                           {subitem.label}
//                         </Link>
//                       ))}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ))}
//           </nav>

//           {/* Right side: Poojas Button + Mobile Menu */}
//           <div className="flex items-center gap-4">
//             <Link
//               href="/poojas-donations"
//               className="hidden sm:inline-block px-6 py-2 bg-[#a7150b] text-white rounded-lg font-medium hover:bg-[#8a0d08] transition shadow-lg"
//             >
//               Poojas & Donations
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 hover:bg-yellow-500 rounded-lg transition"
//             >
//               {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.nav
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="lg:hidden mt-4 pb-4 space-y-2"
//             >
//               {navItems.map((item) => (
//                 <div key={item.label} className="space-y-2">
//                   <Link
//                     href={item.href}
//                     className="block px-4 py-2 text-[#1a1a1a] hover:bg-yellow-500 rounded-lg transition"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </Link>
//                   {item.dropdown && (
//                     <div className="pl-4 space-y-1">
//                       {item.dropdown.map((subitem) => (
//                         <Link
//                           key={subitem.href}
//                           href={subitem.href}
//                           className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-yellow-500 rounded-lg transition"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {subitem.label}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//               <Link
//                 href="/poojas-donations"
//                 className="block w-full mt-4 px-4 py-2 bg-[#a7150b] text-white rounded-lg font-medium hover:bg-[#8a0d08] transition text-center"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Poojas & Donations
//               </Link>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </div>
//     </header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Search, Heart } from 'lucide-react';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Amma',
    href: '/amma',
    dropdown: [
      { label: 'Miracles', href: '/amma/miracles' },
      { label: 'Divine Wisdom', href: '/amma/divine-wisdom' },
      { label: 'Message', href: '/amma/message' },
    ],
  },
  {
    label: 'Siddhar Peedam',
    href: '/siddhar-peedam',
    dropdown: [
      { label: 'Introduction', href: '/siddhar-peedam/introduction' },
      { label: 'History', href: '/siddhar-peedam/history' },
      { label: 'Schema', href: '/siddhar-peedam/schema' },
      { label: 'Uniqueness', href: '/siddhar-peedam/uniqueness' },
      { label: 'Four Ideals', href: '/siddhar-peedam/four-ideals' },
    ],
  },
  {
    label: 'Festivals',
    href: '/festivals',
    dropdown: [
      { label: 'Occasions', href: '/festivals/occasions' },
      { label: 'Poojas', href: '/festivals/poojas' },
      { label: 'Mantras', href: '/festivals/mantras' },
      { label: 'Programmes', href: '/festivals/programmes' },
      { label: 'Aadi Pooram', href: '/festivals/aadi-pooram' },
    ],
  },
  {
    label: 'Activities',
    href: '/activities',
    dropdown: [
      { label: 'Worshipping Centres', href: '/activities/worshipping-centres' },
      { label: 'Sakthi Peedams', href: '/activities/sakthi-peedams' },
      { label: 'Youth Wings', href: '/activities/youth-wings' },
      { label: 'Spiritual Magazines', href: '/activities/spiritual-magazines' },
      { label: 'Spiritual Conferences', href: '/activities/spiritual-conferences' },
      { label: 'Spiritual Tours', href: '/activities/spiritual-tours' },
      { label: 'Social Activity', href: '/activities/social-activity' },
    ],
  },
  {
    label: 'Publications',
    href: '/publications',
    dropdown: [
      { label: 'Articles', href: '/publications/articles' },
      { label: 'Books', href: '/publications/books' },
      { label: 'Magazine', href: '/publications/magazine' },
    ],
  },
  { label: 'Visit Us', href: '/visit-us' },
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-[#ffc107]/95 backdrop-blur-md shadow-xl py-2' 
          : 'bg-gradient-to-r from-[#ffc107] to-[#ffb300] py-3 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-1 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg md:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors">
                Adhiparasakthi
              </span>
              <span className="text-xs md:text-sm font-bold text-[#1a1a1a]/80 uppercase tracking-wider">
                Siddhar Peedam
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/5 p-1 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-1 ${
                    openDropdown === item.label 
                      ? 'bg-white text-[#a7150b] shadow-md' 
                      : 'text-[#1a1a1a] hover:bg-white/50'
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-2xl border border-yellow-100 overflow-hidden origin-top-left p-2"
                    >
                      {item.dropdown.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#a7150b] rounded-lg transition-colors"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/poojas-donations"
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-[#a7150b] text-white rounded-full text-sm font-bold shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-yellow-200 overflow-hidden shadow-inner"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2">
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 font-bold text-[#a7150b]">{item.label}</div>
                      <div className="pl-4 bg-gray-50 rounded-lg py-2 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-[#a7150b] font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 font-bold text-gray-800 hover:text-[#a7150b] hover:bg-red-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}