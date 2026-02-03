// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown, Menu, X, Heart, Users } from 'lucide-react';

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
//     href: '#',
//     dropdown: [
//       { label: 'Miracles', href: '/amma/miracles' },
//       { label: 'Divine Wisdom', href: '/amma/divine-wisdom' },
//       { label: 'Message', href: '/amma/message' },
//     ],
//   },
//   {
//     label: 'Siddhar Peedam',
//     href: '#',
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
//     href: '#',
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
//     href: '#',
//     dropdown: [
//       { label: 'Worshipping Centres', href: '/activities/worshipping-centres' },
//       { label: 'Sakthi Peedams', href: '/activities/sakthi-peedams' },
//       { label: 'Youth Wings', href: '/activities/youth-wings' },
//       { label: 'Spiritual Magazines', href: '/activities/spiritual-magazines' },
//       { label: 'Spiritual Conferences', href: '/activities/spiritual-conferences' },
//       { label: 'Spiritual Tours', href: '/activities/spiritual-tours' },
//       { label: 'Social Activity', href: '/activities/social-activity' },
//       { label: 'Volunteering', href: '/activities/volunteer' },
//     ],
//   },
//   {
//     label: 'Publications',
//     href: '#',
//     dropdown: [
//       { label: 'Articles', href: '/publications/articles' },
//       { label: 'Books', href: '/publications/books' },
//       { label: 'Magazine', href: '/publications/magazine' },
//     ],
//   },
//   {
//     label: 'Notices',
//     href: '#',
//     dropdown: [
//       { label: 'Notifications', href: '/notices/notification' },
//     ],
//   },
//   {
//     label: 'Associated Trusts',
//     href: '#', 
//     dropdown: [
//       { label: 'Melmaruvathur Adhiparasakthi Spiritual Movement (MASM)', href: '#' },
//       { label: "Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)", href: '#' },
//       { label: 'Adhiparasakthi Charitable Medical Educational and Cultural Trust (ACMEC)', href: 'https://www.acmectrust.com/' },
//       { label: 'Adhiparasakthi Charitable and Annadhanam Society (ACAS)', href: 'https://www.annadhanamsociety.org/' },
//       { label: 'Arul Thiru Bangaru Adigalar Charitable Trust (ABC TRUST)', href: '#' },
//     ],
//   },
//   { label: 'Visit Us', href: '/visit-us' },
// ];

// export default function Header() {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//         if (window.scrollY > 20) {
//             setScrolled(true);
//         } else {
//             setScrolled(false);
//         }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleMobileDropdown = (label: string) => {
//     setMobileDropdown(mobileDropdown === label ? null : label);
//   };

//   return (
//     <header className="sticky top-0 z-50 w-full flex flex-col">
      
//       {/* ----------------------------------------------------- */}
//       {/* NEW TOP BAR (Red Background)                          */}
//       {/* ----------------------------------------------------- */}
//       <div className={`hidden md:block w-full transition-colors duration-300 border-b ${
//           scrolled ? 'bg-[#a7150b] border-[#8a0d08]' : 'bg-[#a7150b] border-white/10'
//       }`}>
//         <div className="max-w-[99%] xl:max-w-[95%] mx-auto px-4 py-1.5 flex justify-end items-center gap-6 text-xs font-semibold tracking-wide uppercase">
          
//           {/* Volunteer Menu - White Text */}
//           <Link href="/activities/volunteer" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
//             <Users className="w-3.5 h-3.5" />
//             <span>Volunteer</span>
//           </Link>

//           {/* Donate Menu - White Text (Highlighted) */}
//           <Link href="/online_services/donations" className="flex items-center gap-1.5 text-white hover:text-yellow-200 transition-colors font-bold">
//             <Heart className="w-3.5 h-3.5 fill-current" />
//             <span>Donate</span>
//           </Link>

//         </div>
//       </div>

//       {/* ----------------------------------------------------- */}
//       {/* MAIN NAVIGATION BAR                                   */}
//       {/* ----------------------------------------------------- */}
//       <div 
//         className={`w-full transition-all duration-500 ${
//           scrolled 
//             ? 'bg-[#ffc107]/95 backdrop-blur-md shadow-xl py-2' 
//             : 'bg-gradient-to-r from-[#ffc107] to-[#ffb300] py-3 shadow-md'
//         }`}
//       >
//         <div className="max-w-[99%] xl:max-w-[95%] mx-auto px-2 md:px-4">
//           <div className="flex items-center justify-between gap-2">
            
//             {/* Logo Area */}
//             <Link href="/" className="flex items-center gap-2 group shrink-0">
//               <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full p-1 shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden">
//                 <Image
//                   src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
//                   alt="Adhiparasakthi Logo"
//                   fill
//                   className="object-contain p-1"
//                   sizes="(max-width: 768px) 48px, 56px"
//                   priority 
//                 />
//               </div>
//               <div className="flex flex-col leading-none">
//                 <span className="font-black text-base lg:text-lg xl:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors whitespace-nowrap">
//                   Adhiparasakthi
//                 </span>
//                 <span className="hidden xl:block text-[10px] md:text-xs font-bold text-[#1a1a1a]/80 uppercase tracking-wider whitespace-nowrap">
//                   Siddhar Peedam
//                 </span>
//               </div>
//             </Link>

//             {/* Desktop Nav */}
//             <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-black/5 p-1 rounded-full backdrop-blur-sm shrink-0">
//               {navItems.map((item) => (
//                 <div
//                   key={item.label}
//                   className="relative"
//                   onMouseEnter={() => setOpenDropdown(item.label)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <Link
//                     href={item.href}
//                     className={`px-2 xl:px-4 py-2 rounded-full text-[11px] xl:text-sm font-bold transition-all duration-300 flex items-center gap-0.5 whitespace-nowrap ${
//                       openDropdown === item.label 
//                         ? 'bg-white text-[#a7150b] shadow-md' 
//                         : 'text-[#1a1a1a] hover:bg-white/50'
//                     }`}
//                   >
//                     {item.label}
//                     {item.dropdown && (
//                       <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
//                     )}
//                   </Link>

//                   {/* Dropdown */}
//                   <AnimatePresence>
//                     {item.dropdown && openDropdown === item.label && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                         animate={{ opacity: 1, y: 0, scale: 1 }}
//                         exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                         transition={{ duration: 0.2 }}
//                         className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-yellow-100 overflow-hidden origin-top-left p-2 z-50 ${
//                           item.label === 'Associated Trusts' ? 'w-max' : 'w-60'
//                         }`}
//                         style={item.label === 'Associated Trusts' ? { right: 0, left: 'auto', transformOrigin: 'top right' } : {}}
//                       >
//                         {item.dropdown.map((subitem) => {
//                            const isExternal = subitem.href.startsWith('http');
//                            return (
//                             <Link
//                               key={subitem.label} 
//                               href={subitem.href}
//                               prefetch={false}
//                               target={isExternal ? "_blank" : undefined}
//                               rel={isExternal ? "noopener noreferrer" : undefined}
//                               className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#a7150b] rounded-lg transition-colors whitespace-nowrap"
//                             >
//                               {subitem.label}
//                             </Link>
//                           );
//                         })}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </nav>

//             {/* Right Side Buttons - Mobile Toggle Only (Since Donate is in Top Bar for Desktop) */}
//             <div className="flex items-center gap-2 xl:gap-3 shrink-0">
//               {/* Donate Button - Visible ONLY on Mobile/Tablet (lg:hidden) */}
//               <Link
//                 href="/online_services/donations"
//                 className="lg:hidden flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#a7150b] text-white rounded-full text-xs sm:text-sm font-bold shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
//               >
//                 <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
//                 <span>Donate</span>
//               </Link>

//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm"
//               >
//                 {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="lg:hidden bg-white border-t border-yellow-200 overflow-hidden shadow-inner max-h-[85vh] overflow-y-auto"
//           >
//             <nav className="flex flex-col p-4 space-y-1">
              
//               {/* Added Top Bar items to Mobile Menu explicitly */}
//               <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-gray-100">
//                  <Link 
//                     href="/activities/volunteer" 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700"
//                  >
//                     <Users className="w-4 h-4" /> Volunteer
//                  </Link>
//                  <Link 
//                     href="/online_services/donations" 
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="flex items-center justify-center gap-2 px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-lg text-sm font-bold"
//                  >
//                     <Heart className="w-4 h-4 fill-current" /> Donate
//                  </Link>
//               </div>

//               {navItems.map((item) => (
//                 <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2">
//                   {item.dropdown ? (
//                     <div className="space-y-1">
//                       <button
//                         onClick={() => toggleMobileDropdown(item.label)}
//                         className="w-full flex items-center justify-between px-4 py-3 font-bold text-[#a7150b] hover:bg-red-50 rounded-lg transition-colors"
//                       >
//                         <span>{item.label}</span>
//                         <ChevronDown 
//                           className={`w-4 h-4 transition-transform duration-300 ${
//                             mobileDropdown === item.label ? 'rotate-180' : ''
//                           }`} 
//                         />
//                       </button>

//                       <AnimatePresence>
//                         {mobileDropdown === item.label && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: 'auto', opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.2 }}
//                             className="overflow-hidden"
//                           >
//                             <div className="pl-4 bg-gray-50 rounded-lg py-2 space-y-1 mx-2">
//                               {item.dropdown.map((sub) => {
//                                 const isExternal = sub.href.startsWith('http');
//                                 return (
//                                   <Link
//                                     key={sub.label}
//                                     href={sub.href}
//                                     target={isExternal ? "_blank" : undefined}
//                                     rel={isExternal ? "noopener noreferrer" : undefined}
//                                     className="block px-4 py-2 text-sm text-gray-600 hover:text-[#a7150b] font-medium"
//                                     onClick={() => setMobileMenuOpen(false)}
//                                   >
//                                     {sub.label}
//                                   </Link>
//                                 );
//                               })}
//                             </div>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className="block px-4 py-3 font-bold text-gray-800 hover:text-[#a7150b] hover:bg-red-50 rounded-lg"
//                       onClick={() => setMobileMenuOpen(false)}
//                     >
//                       {item.label}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Heart, Users, Bell } from 'lucide-react'; 

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
    href: '#',
    dropdown: [
      { label: 'Miracles', href: '/amma/miracles' },
      { label: 'Divine Wisdom', href: '/amma/divine-wisdom' },
      { label: 'Message', href: '/amma/message' },
    ],
  },
  {
    label: 'Siddhar Peedam',
    href: '#',
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
    href: '#',
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
    href: '#',
    dropdown: [
      { label: 'Worshipping Centres', href: '/activities/worshipping-centres' },
      { label: 'Sakthi Peedams', href: '/activities/sakthi-peedams' },
      { label: 'Youth Wings', href: '/activities/youth-wings' },
      { label: 'Spiritual Magazines', href: '/activities/spiritual-magazines' },
      { label: 'Spiritual Conferences', href: '/activities/spiritual-conferences' },
      { label: 'Spiritual Tours', href: '/activities/spiritual-tours' },
      { label: 'Social Activity', href: '/activities/social-activity' },
      { label: 'Volunteering', href: '/activities/volunteer' },
    ],
  },
  {
    label: 'Publications',
    href: '#',
    dropdown: [
      { label: 'Articles', href: '/publications/articles' },
      { label: 'Books', href: '/publications/books' },
      { label: 'Magazine', href: '/publications/magazine' },
    ],
  },
  {
    label: 'Notices',
    href: '#',
    dropdown: [
      { label: 'Notifications', href: '/notices/notification' },
    ],
  },
  {
    label: 'Associated Trusts',
    href: '#', 
    dropdown: [
      { label: 'Melmaruvathur Adhiparasakthi Spiritual Movement (MASM)', href: '#' },
      { label: "Adhiparasakthi Siddhar Peeda Women's Charitable Trust (ASPWCT)", href: '#' },
      { label: 'Adhiparasakthi Charitable Medical Educational and Cultural Trust (ACMEC)', href: 'https://www.acmectrust.com/' },
      { label: 'Adhiparasakthi Charitable and Annadhanam Society (ACAS)', href: 'https://www.annadhanamsociety.org/' },
      { label: 'Arul Thiru Bangaru Adigalar Charitable Trust (ABC TRUST)', href: '#' },
    ],
  },
  { label: 'Media', href: '/playlist' },
  { label: 'Visit Us', href: '/visit-us' },
  
];

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Notification State
  const [hasNewNotices, setHasNewNotices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- NOTIFICATION CHECKER ---
  useEffect(() => {
    const checkNotifications = async () => {
      try {
        const res = await fetch('/notifications.json');
        if (!res.ok) return;
        
        const data = await res.json();
        
        // Sort to find newest date
        const sorted = data.sort((a: any, b: any) => 
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        
        const latestNotice = sorted[0];
        if (!latestNotice) return;

        const latestDate = latestNotice.date;
        const lastSeenDate = localStorage.getItem('lastSeenNotificationDate');

        // Logic: Show dot if never seen OR if new date is newer than last seen
        if (!lastSeenDate || new Date(latestDate) > new Date(lastSeenDate)) {
          setHasNewNotices(true);
        } else {
          setHasNewNotices(false);
        }

        // Auto-clear if currently ON the notifications page
        if (pathname === '/notices/notification') {
            localStorage.setItem('lastSeenNotificationDate', latestDate);
            setHasNewNotices(false);
        }

      } catch (error) {
        console.error("Error checking notifications:", error);
      }
    };

    checkNotifications();
  }, [pathname]);

  const handleBellClick = () => {
    setHasNewNotices(false);
    fetch('/notifications.json')
      .then(res => res.json())
      .then((data) => {
          const sorted = data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
          if (sorted[0]) {
             localStorage.setItem('lastSeenNotificationDate', sorted[0].date);
          }
      })
      .catch(err => console.error("Failed to update notification status", err));
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      
      {/* Top Bar */}
      <div className={`hidden md:block w-full transition-colors duration-300 border-b ${
          scrolled ? 'bg-[#a7150b] border-[#8a0d08]' : 'bg-[#a7150b] border-white/10'
      }`}>
        <div className="max-w-[99%] xl:max-w-[95%] mx-auto px-4 py-1.5 flex justify-end items-center gap-6 text-xs font-semibold tracking-wide uppercase">
          <Link href="/activities/volunteer" className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors">
            <Users className="w-3.5 h-3.5" />
            <span>Volunteer</span>
          </Link>
          <Link href="/online_services/donations" className="flex items-center gap-1.5 text-white hover:text-yellow-200 transition-colors font-bold">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Donate</span>
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div 
        className={`w-full transition-all duration-500 ${
          scrolled 
            ? 'bg-[#ffc107]/95 backdrop-blur-md shadow-xl py-2' 
            : 'bg-gradient-to-r from-[#ffc107] to-[#ffb300] py-3 shadow-md'
        }`}
      >
        <div className="max-w-[99%] xl:max-w-[95%] mx-auto px-2 md:px-4">
          <div className="flex items-center justify-between gap-2">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white rounded-full p-1 shadow-inner group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939097/logo_dl1zqj.png"
                  alt="Adhiparasakthi Logo"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 48px, 56px"
                  priority 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base lg:text-lg xl:text-xl text-[#1a1a1a] tracking-tight group-hover:text-[#8a0d08] transition-colors whitespace-nowrap">
                  Adhiparasakthi
                </span>
                <span className="hidden xl:block text-[10px] md:text-xs font-bold text-[#1a1a1a]/80 uppercase tracking-wider whitespace-nowrap">
                  Siddhar Peedam
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-black/5 p-1 rounded-full backdrop-blur-sm shrink-0">
              {navItems.map((item) => (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link href={item.href} className={`px-2 xl:px-4 py-2 rounded-full text-[11px] xl:text-sm font-bold transition-all duration-300 flex items-center gap-0.5 whitespace-nowrap ${
                      openDropdown === item.label 
                        ? 'bg-white text-[#a7150b] shadow-md' 
                        : 'text-[#1a1a1a] hover:bg-white/50'
                    }`}>
                    {item.label}
                    {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </Link>
                  <AnimatePresence>
                    {item.dropdown && openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl border border-yellow-100 overflow-hidden origin-top-left p-2 z-50 ${
                          item.label === 'Associated Trusts' ? 'w-max' : 'w-60'
                        }`}
                        style={item.label === 'Associated Trusts' ? { right: 0, left: 'auto', transformOrigin: 'top right' } : {}}
                      >
                        {item.dropdown.map((subitem) => {
                           const isExternal = subitem.href.startsWith('http');
                           return (
                            <Link key={subitem.label} href={subitem.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-[#a7150b] rounded-lg transition-colors whitespace-nowrap">
                              {subitem.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Side Buttons */}
            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              
              {/* --- ENHANCED NOTIFICATION BELL --- */}
              <Link 
                href="/notices/notification"
                onClick={handleBellClick}
                className={`relative p-2.5 rounded-full transition-all duration-300 group ${
                  hasNewNotices 
                    ? 'bg-white shadow-lg text-[#a7150b] scale-110' // Active Style: White bg, Red Icon, Larger
                    : 'bg-white/20 hover:bg-white/40 text-[#1a1a1a]' // Inactive Style
                }`}
                aria-label="Notifications"
              >
                {/* Ringing Animation for Bell */}
                <motion.div
                  animate={hasNewNotices ? { rotate: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    repeatDelay: 3, // Pauses for 3 seconds between shakes
                    ease: "easeInOut" 
                  }}
                >
                  <Bell className={`w-5 h-5 md:w-6 md:h-6 ${hasNewNotices ? 'fill-current' : ''}`} />
                </motion.div>
                
                {/* Pulsing Red Dot Indicator */}
                <AnimatePresence>
                  {hasNewNotices && (
                    <>
                      {/* The Dot itself */}
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-1 right-1.5 w-3 h-3 bg-red-600 rounded-full border-2 border-white z-10"
                      />
                      {/* The Ping (Ripple) Effect */}
                      <motion.span 
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                        className="absolute top-1 right-1.5 w-3 h-3 bg-red-500 rounded-full z-0"
                      />
                    </>
                  )}
                </AnimatePresence>
              </Link>

              <Link href="/online_services/donations" className="lg:hidden flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#a7150b] text-white rounded-full text-xs sm:text-sm font-bold shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap">
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                <span>Donate</span>
              </Link>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 bg-white/20 hover:bg-white/40 text-[#1a1a1a] rounded-full transition-colors backdrop-blur-sm">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-white border-t border-yellow-200 overflow-hidden shadow-inner max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-1">
              <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-gray-100">
                 <Link href="/activities/volunteer" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-700">
                    <Users className="w-4 h-4" /> Volunteer
                 </Link>
                 <Link href="/online_services/donations" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 px-4 py-2 bg-[#a7150b]/10 text-[#a7150b] rounded-lg text-sm font-bold">
                    <Heart className="w-4 h-4 fill-current" /> Donate
                 </Link>
              </div>
              {navItems.map((item) => (
                <div key={item.label} className="border-b border-gray-100 last:border-0 pb-2">
                  {item.dropdown ? (
                    <div className="space-y-1">
                      <button onClick={() => toggleMobileDropdown(item.label)} className="w-full flex items-center justify-between px-4 py-3 font-bold text-[#a7150b] hover:bg-red-50 rounded-lg transition-colors">
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                            <div className="pl-4 bg-gray-50 rounded-lg py-2 space-y-1 mx-2">
                              {item.dropdown.map((sub) => {
                                const isExternal = sub.href.startsWith('http');
                                return (
                                  <Link key={sub.label} href={sub.href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className="block px-4 py-2 text-sm text-gray-600 hover:text-[#a7150b] font-medium" onClick={() => setMobileMenuOpen(false)}>
                                    {sub.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} className="block px-4 py-3 font-bold text-gray-800 hover:text-[#a7150b] hover:bg-red-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
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