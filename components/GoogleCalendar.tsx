'use client';

import { motion } from 'framer-motion';

export default function GoogleCalendarSection() {
  return (
    <section className="py-20 px-4 bg-white">
              <div className="w-full bg-[#ffc107] py-6 md:py-8 shadow-sm mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] text-center tracking-tight spiritual-text">
          Temple Calendar
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12 spiritual-text">
          Temple Calendar
        </h2> */}

        {/* Responsive Calendar Wrapper */}
        <div className="relative w-full h-[600px] bg-gray-50 rounded-xl overflow-hidden shadow-xl border border-gray-200">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata" 
            style={{ border: 0 }} 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no"
            className="w-full h-full"
            title="Temple Calendar"
          ></iframe>
          
          {/* Note: Replace the 'src' URL above with your client's actual Google Calendar Embed URL 
              Settings -> Integrate Calendar -> Customize -> Copy Embed Code */}
        </div>
      </motion.div>
    </section>
  );
}