'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Calendar, 
  Download, 
  ChevronLeft, 
  Sparkles, 
  Moon, 
  Sun, 
  Flag, 
  Search, 
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header'; // Adjust path if needed
// import ContactSection from '@/components/ContactSection'; 
import Footer from '@/components/Footer'; // If you have a Footer component

// --- FULL 2026 EVENT DATA ---
type EventType = 'festival' | 'amavasai' | 'pournami' | 'holiday';

interface EventItem {
  date: string; // Format: DD-MM-YYYY
  title: string;
  tamilTitle?: string;
  type: EventType;
  day: string;
}

const allEvents: EventItem[] = [
  // JANUARY
  { date: "01-01-2026", day: "Thursday", title: "English New Year", tamilTitle: "ஆங்கில வருடப்பிறப்பு", type: "holiday" },
  { date: "03-01-2026", day: "Saturday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },
  { date: "15-01-2026", day: "Thursday", title: "Thai Pongal", tamilTitle: "தைப்பொங்கல்", type: "festival" },
  { date: "16-01-2026", day: "Friday", title: "Thiruvalluvar Day", tamilTitle: "திருவள்ளுவர் தினம்", type: "holiday" },
  { date: "17-01-2026", day: "Saturday", title: "Uzhavar Thirunal", tamilTitle: "உழவர் திருநாள்", type: "holiday" },
  { date: "18-01-2026", day: "Sunday", title: "Velvi Amavasai", tamilTitle: "வேள்வி அமாவாசை", type: "amavasai" },
  { date: "26-01-2026", day: "Monday", title: "Republic Day", tamilTitle: "இந்திய குடியரசுதினம்", type: "holiday" },
  { date: "31-01-2026", day: "Saturday", title: "Thaipoosa Jyothi Peruvizha", tamilTitle: "தைப்பூசஜோதி பெருவிழா", type: "festival" },

  // FEBRUARY
  { date: "17-02-2026", day: "Tuesday", title: "Velvi Amavasai", tamilTitle: "வேள்வி அமாவாசை", type: "amavasai" },

  // MARCH
  { date: "03-03-2026", day: "Tuesday", title: "Amma's 86th Birthday", tamilTitle: "86வது அவதார திருநாள்", type: "festival" },
  { date: "18-03-2026", day: "Wednesday", title: "Velvi Amavasai", tamilTitle: "வேள்வி அமாவாசை", type: "amavasai" },
  { date: "19-03-2026", day: "Thursday", title: "Telugu New Year", tamilTitle: "தெலுங்கு வருடப்பிறப்பு", type: "festival" },
  { date: "21-03-2026", day: "Saturday", title: "Ramzan", tamilTitle: "ரம்ஜான்", type: "holiday" },

  // APRIL
  { date: "01-04-2026", day: "Wednesday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },
  { date: "14-04-2026", day: "Tuesday", title: "Tamil New Year", tamilTitle: "தமிழ் வருடப்பிறப்பு", type: "festival" },
  { date: "17-04-2026", day: "Friday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "30-04-2026", day: "Thursday", title: "Chitra Pournami Velvi", tamilTitle: "சித்திரை பௌர்ணமி வேள்வி", type: "festival" },

  // MAY
  { date: "01-05-2026", day: "Friday", title: "Labour Day", tamilTitle: "தொழிலாளர் தினம்", type: "holiday" },
  { date: "16-05-2026", day: "Saturday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "31-05-2026", day: "Sunday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // JUNE
  { date: "14-06-2026", day: "Sunday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "29-06-2026", day: "Monday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // JULY
  { date: "14-07-2026", day: "Tuesday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "29-07-2026", day: "Wednesday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // AUGUST
  { date: "12-08-2026", day: "Wednesday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "14-08-2026", day: "Friday", title: "55th Aadipooram Festival", tamilTitle: "55வது ஆடிப்பூர பெருவிழா", type: "festival" },
  { date: "15-08-2026", day: "Saturday", title: "Independence Day", tamilTitle: "சுதந்திரதினம்", type: "holiday" },
  { date: "26-08-2026", day: "Wednesday", title: "Milad un Nabi", tamilTitle: "மீலாடி நபி", type: "holiday" },
  { date: "27-08-2026", day: "Thursday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // SEPTEMBER
  { date: "04-09-2026", day: "Friday", title: "Amma's Wedding Anniversary", tamilTitle: "திருமண நாள்", type: "festival" },
  { date: "10-09-2026", day: "Thursday", title: "Velvi Amavasai", tamilTitle: "வேள்வி அமாவாசை", type: "amavasai" },
  { date: "14-09-2026", day: "Monday", title: "Vinayagar Chathurthi", tamilTitle: "விநாயகர் சதுர்த்தி", type: "holiday" },
  { date: "26-09-2026", day: "Saturday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // OCTOBER
  { date: "02-10-2026", day: "Friday", title: "Gandhi Jayanthi", tamilTitle: "காந்தி ஜெயந்தி", type: "holiday" },
  { date: "10-10-2026", day: "Saturday", title: "Amavasai Velvi", tamilTitle: "அமாவாசை வேள்வி", type: "amavasai" },
  { date: "11-10-2026", day: "Sunday", title: "Navarathri Starts", tamilTitle: "நவராத்திரி ஆரம்பம்", type: "festival" },
  { date: "19-10-2026", day: "Monday", title: "Mukthi Day / Saraswathi Pooja", tamilTitle: "முக்தி அடைந்தநாள்", type: "festival" },
  { date: "25-10-2026", day: "Sunday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // NOVEMBER
  { date: "08-11-2026", day: "Sunday", title: "Deepavali / Amavasai", tamilTitle: "தீபாவளி", type: "festival" },
  { date: "24-11-2026", day: "Tuesday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },

  // DECEMBER
  { date: "08-12-2026", day: "Tuesday", title: "Velvi Amavasai", tamilTitle: "வேள்வி அமாவாசை", type: "amavasai" },
  { date: "23-12-2026", day: "Wednesday", title: "Pournami Pooja", tamilTitle: "பௌர்ணமி பூஜை", type: "pournami" },
  { date: "25-12-2026", day: "Friday", title: "Christmas", tamilTitle: "கிறிஸ்துமஸ்", type: "holiday" },
];

export default function CalendarPage() {
  const [filter, setFilter] = useState<EventType | 'all'>('all');

  // Helper to get month name
  const getMonthName = (dateStr: string) => {
    const [day, month, year] = dateStr.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toLocaleString('default', { month: 'long' });
  };

  // Filter and Group Events
  const filteredEvents = allEvents.filter(e => filter === 'all' || e.type === filter);
  
  // Group by Month
  const groupedEvents: Record<string, EventItem[]> = {};
  filteredEvents.forEach(event => {
    const month = getMonthName(event.date);
    if (!groupedEvents[month]) groupedEvents[month] = [];
    groupedEvents[month].push(event);
  });

  // Filter Button Component
  const FilterButton = ({ type, label, icon: Icon }: any) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2 border ${
        filter === type
          ? 'bg-[#a7150b] text-white border-[#a7150b] shadow-lg scale-105'
          : 'bg-white text-gray-600 border-gray-200 hover:border-[#a7150b] hover:text-[#a7150b]'
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header /> */}
      
      <main className="pb-20">
        
        {/* Hero Header */}
        <section className="bg-[#ffc107] pt-12 pb-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern-opacity.png')] opacity-10"></div>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#7a0f07] text-sm font-bold mb-4 border border-white/30">
              <Calendar className="w-4 h-4" />
              Official Schedule
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-4 spiritual-text">
              Divine Calendar 2026
            </h1>
            <p className="text-lg text-[#1a1a1a]/80 max-w-2xl mx-auto">
              A complete schedule of Festivals, Amavasai Velvi, Pournami Pooja, and holidays observed at Adhiparasakthi Siddhar Peedam.
            </p>
          </div>
        </section>

        {/* Filters & Controls */}
        <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              <FilterButton type="all" label="All Events" icon={Calendar} />
              <FilterButton type="festival" label="Festivals" icon={Sparkles} />
              <FilterButton type="amavasai" label="Amavasai" icon={Sun} />
              <FilterButton type="pournami" label="Pournami" icon={Moon} />
              <FilterButton type="holiday" label="Holidays" icon={Flag} />
            </div>

            {/* Download Button */}
            <a 
              href="/event-pdf.pdf" 
              download
              className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
          </div>
        </div>

        {/* Calendar List */}
        <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
          {Object.keys(groupedEvents).length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              No events found for this category.
            </div>
          ) : (
            Object.entries(groupedEvents).map(([month, events], idx) => (
              <motion.div
                key={month}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {/* Month Divider */}
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="text-3xl font-bold text-[#a7150b]">{month}</h2>
                  <div className="h-px flex-1 bg-gray-200"></div>
                </div>

                {/* Events Grid */}
                <div className="grid gap-4">
                  {events.map((event, eIdx) => (
                    <motion.div
                      key={eIdx}
                      whileHover={{ scale: 1.01 }}
                      className={`bg-white p-5 rounded-xl border-l-4 shadow-sm hover:shadow-md transition-all flex items-center gap-6
                        ${event.type === 'festival' ? 'border-red-500' : 
                          event.type === 'amavasai' ? 'border-blue-500' : 
                          event.type === 'pournami' ? 'border-yellow-400' : 'border-gray-400'}
                      `}
                    >
                      {/* Date Box */}
                      <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg shrink-0 border border-gray-100">
                        <span className="text-2xl font-bold text-[#1a1a1a]">
                          {event.date.split('-')[0]}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-gray-400">
                          {event.day.substring(0,3)}
                        </span>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full
                             ${event.type === 'festival' ? 'bg-red-100 text-red-700' : 
                               event.type === 'amavasai' ? 'bg-blue-100 text-blue-700' : 
                               event.type === 'pournami' ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-600'}
                          `}>
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#1a1a1a]">
                          {event.title}
                        </h3>
                        {event.tamilTitle && (
                          <p className="text-sm text-gray-500 font-medium font-tamil mt-0.5">
                            {event.tamilTitle}
                          </p>
                        )}
                      </div>

                      {/* Arrow */}
                      <div className="hidden sm:block text-gray-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
           <Link href="/" className="text-gray-500 hover:text-[#a7150b] font-medium flex items-center justify-center gap-2">
             <ChevronLeft className="w-4 h-4" /> Back to Home
           </Link>
        </div>

      </main>
      {/* <Footer /> */}
    </div>
  );
}