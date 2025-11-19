'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, Menu, X } from 'lucide-react';

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
      // { label: 'About Amma', href: '/amma/about-amma' },
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

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-[#ffc107] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
<Link
  href="/"
  className="flex items-center gap-3 font-bold text-2xl text-[#1a1a1a] hover:opacity-80 transition"
>
  <img
    src="/logo.png"
    alt="Om Sakthi Amma Logo"
    className="w-16 h-16 object-contain"
  />

  <span className="whitespace-nowrap">
   Adhiparasakthi
   <br />
    Siddhar Peedam
  </span>
</Link>



          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-[#1a1a1a] hover:bg-yellow-500 transition flex items-center gap-1"
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && openDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl overflow-hidden"
                    >
                      {item.dropdown.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-3 text-sm text-[#1a1a1a] hover:bg-[#ffc107] transition"
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

          {/* Right side: Poojas Button + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/poojas-donations"
              className="hidden sm:inline-block px-6 py-2 bg-[#a7150b] text-white rounded-lg font-medium hover:bg-[#8a0d08] transition shadow-lg"
            >
              Poojas & Donations
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-yellow-500 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-[#1a1a1a] hover:bg-yellow-500 rounded-lg transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-[#1a1a1a] hover:bg-yellow-500 rounded-lg transition"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/poojas-donations"
                className="block w-full mt-4 px-4 py-2 bg-[#a7150b] text-white rounded-lg font-medium hover:bg-[#8a0d08] transition text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Poojas & Donations
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
