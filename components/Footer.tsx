'use client';

import Link from 'next/link';
import { Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#a7150b] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Om Sakthi Amma
            </h3>
            <p className="text-sm opacity-90">
              Spiritual wisdom and divine grace for the enlightenment of all beings.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:opacity-80 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/amma" className="hover:opacity-80 transition">
                  About Amma
                </Link>
              </li>
              <li>
                <Link href="/siddhar-peedam" className="hover:opacity-80 transition">
                  Siddhar Peedam
                </Link>
              </li>
              <li>
                <Link href="/festivals" className="hover:opacity-80 transition">
                  Festivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/activities" className="hover:opacity-80 transition">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/publications" className="hover:opacity-80 transition">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/visit-us" className="hover:opacity-80 transition">
                  Visit Us
                </Link>
              </li>
              <li>
                <Link href="/poojas-donations" className="hover:opacity-80 transition">
                  Donations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Temple Location Address Here</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@omsakhtiamma.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <p className="text-sm opacity-90 mb-3">Connect with our spiritual community</p>
            <div className="flex gap-3">
              <Link href="#" className="hover:opacity-80 transition">Facebook</Link>
              <Link href="#" className="hover:opacity-80 transition">Instagram</Link>
              <Link href="#" className="hover:opacity-80 transition">YouTube</Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © 2025 Om Sakthi Amma. All rights reserved. | Spiritual wisdom for a enlightened world.
          </p>
        </div>
      </div>
    </footer>
  );
}
