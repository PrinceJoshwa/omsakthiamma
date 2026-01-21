// // // 'use client';

// // // import { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // // Import Formspree hook
// // // import { useForm, ValidationError } from '@formspree/react';
// // // import { 
// // //   ClipboardList, 
// // //   Phone, 
// // //   CalendarCheck, 
// // //   ChevronDown, 
// // //   ChevronUp, 
// // //   Heart, 
// // //   Users, 
// // //   Clock,
// // //   CheckCircle2 // Added icon for success state
// // // } from 'lucide-react';
// // // import Link from 'next/link';

// // // // --- COMPONENTS ---

// // // // 1. FAQ Accordion Item
// // // const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   return (
// // //     <div className="border-b border-orange-200 last:border-0">
// // //       <button
// // //         type="button" // Explicitly set type button to avoid form submission triggers
// // //         onClick={() => setIsOpen(!isOpen)}
// // //         className="flex items-center justify-between w-full py-4 text-left group"
// // //       >
// // //         <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#a7150b]' : 'text-gray-800'}`}>
// // //           {question}
// // //         </span>
// // //         <span className="ml-4 text-[#a7150b]">
// // //           {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
// // //         </span>
// // //       </button>
// // //       <AnimatePresence>
// // //         {isOpen && (
// // //           <motion.div
// // //             initial={{ height: 0, opacity: 0 }}
// // //             animate={{ height: 'auto', opacity: 1 }}
// // //             exit={{ height: 0, opacity: 0 }}
// // //             className="overflow-hidden"
// // //           >
// // //             <p className="pb-4 text-gray-600 leading-relaxed text-sm md:text-base">
// // //               {answer}
// // //             </p>
// // //           </motion.div>
// // //         )}
// // //       </AnimatePresence>
// // //     </div>
// // //   );
// // // };

// // // export default function VolunteerPage() {
// // //   // Initialize Formspree Hook (Replace "YOUR_FORMSPREE_ID" with your actual ID)
// // //   const [state, handleSubmit] = useForm("mbddjlkp");

// // //   return (
// // //     <main className="bg-white min-h-screen">
      
// // //       {/* --- HERO SECTION --- */}
// // //       <section className="relative py-20 bg-orange-50 overflow-hidden">
// // //         <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]"></div>
// // //         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
// // //           <motion.div 
// // //             initial={{ opacity: 0, y: 20 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.6 }}
// // //           >
// // //             {/* Tamil Quote 1 */}
// // //             <h3 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-6 leading-relaxed font-serif">
// // //               "செவ்வாடை அணிபவர்களுக்குச் <br className="hidden md:block" />
// // //               சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
// // //             </h3>

// // //             <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
// // //               Register for Volunteering
// // //             </h1>
// // //             <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
// // //               Melmaruvathur Adhiparasakthi Siddhar Peedam
// // //             </p>

// // //             {/* Tamil Quote 2 */}
// // //             <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-orange-100">
// // //               <p className="text-[#a7150b] font-bold text-lg">
// // //                 "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* --- HOW TO APPLY --- */}
// // //       <section className="py-12 border-b border-gray-100">
// // //         <div className="max-w-6xl mx-auto px-4">
// // //           <div className="text-center mb-10">
// // //             <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">How to Apply?</h2>
// // //             <div className="flex justify-center mt-2 text-[#a7150b]">
// // //               <span>--- ❧ ---</span>
// // //             </div>
// // //           </div>

// // //           <div className="grid md:grid-cols-3 gap-8 text-center relative">
// // //             <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10"></div>

// // //             <div className="flex flex-col items-center bg-white p-6">
// // //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// // //                 <ClipboardList className="w-10 h-10 text-[#a7150b]" />
// // //               </div>
// // //               <h4 className="text-lg font-bold text-gray-900 mb-2">Fill up the Form</h4>
// // //               <p className="text-gray-600 text-sm">Complete the Volunteering <br /> Interest Form below</p>
// // //             </div>

// // //             <div className="flex flex-col items-center bg-white p-6">
// // //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// // //                 <Phone className="w-10 h-10 text-[#a7150b]" />
// // //               </div>
// // //               <h4 className="text-lg font-bold text-gray-900 mb-2">Receive a Call</h4>
// // //               <p className="text-gray-600 text-sm">We will contact you <br /> within 3 days</p>
// // //             </div>

// // //             <div className="flex flex-col items-center bg-white p-6">
// // //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// // //                 <CalendarCheck className="w-10 h-10 text-[#a7150b]" />
// // //               </div>
// // //               <h4 className="text-lg font-bold text-gray-900 mb-2">Confirmation</h4>
// // //               <p className="text-gray-600 text-sm">Receive a response <br /> within 7 days</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* --- CONTENT & FORM GRID --- */}
// // //       <section className="py-16 px-4 max-w-7xl mx-auto">
// // //         <div className="grid lg:grid-cols-2 gap-12">
          
// // //           {/* LEFT: Information Text */}
// // //           <div className="space-y-10">
// // //             <div>
// // //               <div className="flex items-center gap-3 mb-4">
// // //                 <Heart className="w-6 h-6 text-[#a7150b]" />
// // //                 <h3 className="text-2xl font-bold text-gray-900">Volunteering Details</h3>
// // //               </div>
// // //               <p className="text-gray-600 leading-relaxed text-justify">
// // //                 Volunteering at the Melmaruvathur Adhiparasakthi Siddhar Peedam is 
// // //                 <strong> free-of-charge</strong>. This possibility is available throughout the year 
// // //                 for individuals who can spend five days or more in volunteering for various 
// // //                 activities geared towards human wellbeing.
// // //               </p>
// // //               <p className="text-gray-600 leading-relaxed mt-4 text-justify">
// // //                 Individuals with diverse interests come to the Temple to offer their skills 
// // //                 and expertise and contribute to various social and environmental projects. 
// // //                 In the process, they can imbibe the vibrant energies of the consecrated spaces, 
// // //                 connect with the natural habitat, enjoy wholesome food, and experience a 
// // //                 healthy lifestyle.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <div className="flex items-center gap-3 mb-4">
// // //                 <Users className="w-6 h-6 text-[#a7150b]" />
// // //                 <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
// // //               </div>
// // //               <p className="text-gray-600 leading-relaxed text-justify">
// // //                 The main criteria for volunteering is a willingness to get involved and give 
// // //                 yourself to whatever is needed at the moment. Individuals aged 
// // //                 <strong> 18 and above</strong> who can apply and stay at the dormitory accommodation free of cost.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <div className="flex items-center gap-3 mb-4">
// // //                 <Clock className="w-6 h-6 text-[#a7150b]" />
// // //                 <h3 className="text-2xl font-bold text-gray-900">Duration</h3>
// // //               </div>
// // //               <p className="text-gray-600 leading-relaxed text-justify">
// // //                 Individuals can apply based on their availability, with the flexibility to 
// // //                 volunteer for a <strong>minimum of 5 days or up to 30 days</strong>.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* RIGHT: Registration Form */}
// // //           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
            
// // //             {/* SUCCESS STATE OVERLAY */}
// // //             {state.succeeded ? (
// // //                <motion.div 
// // //                  initial={{ opacity: 0, scale: 0.9 }}
// // //                  animate={{ opacity: 1, scale: 1 }}
// // //                  className="flex flex-col items-center justify-center text-center h-full py-20"
// // //                >
// // //                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
// // //                    <CheckCircle2 className="w-10 h-10 text-green-600" />
// // //                  </div>
// // //                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
// // //                  <p className="text-gray-600 max-w-xs mx-auto mb-6">
// // //                    Om Sakthi! Thank you for offering your service. We will review your application and contact you within 3 days.
// // //                  </p>
// // //                  <button 
// // //                    onClick={() => window.location.reload()}
// // //                    className="text-[#a7150b] font-semibold hover:underline"
// // //                  >
// // //                    Submit another application
// // //                  </button>
// // //                </motion.div>
// // //             ) : (
// // //               <>
// // //                 <h3 className="text-2xl font-bold text-[#a7150b] mb-6 border-b border-gray-200 pb-2">
// // //                   Interest Form
// // //                 </h3>
                
// // //                 <form onSubmit={handleSubmit} className="space-y-5">
// // //                   <div>
// // //                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
// // //                     <input 
// // //                       id="name"
// // //                       type="text" 
// // //                       name="name"
// // //                       required
// // //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                       placeholder="Enter your name" 
// // //                     />
// // //                     <ValidationError prefix="Name" field="name" errors={state.errors} />
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="aadhar" className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number</label>
// // //                     <input 
// // //                       id="aadhar"
// // //                       type="text" 
// // //                       name="aadhar"
// // //                       required
// // //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                       placeholder="xxxx xxxx xxxx" 
// // //                     />
// // //                     <ValidationError prefix="Aadhar" field="aadhar" errors={state.errors} />
// // //                   </div>

// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div>
// // //                       <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
// // //                       <input 
// // //                         id="mobile"
// // //                         type="tel" 
// // //                         name="mobile"
// // //                         required
// // //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                         placeholder="+91" 
// // //                       />
// // //                       <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
// // //                     </div>
// // //                      <div>
// // //                       <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-1">Qualification</label>
// // //                       <input 
// // //                         id="qualification"
// // //                         type="text" 
// // //                         name="qualification"
// // //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                         placeholder="e.g. B.E, MBA" 
// // //                       />
// // //                     </div>
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
// // //                     <textarea 
// // //                       id="address"
// // //                       rows={3} 
// // //                       name="address"
// // //                       required
// // //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                       placeholder="Your full address"
// // //                     ></textarea>
// // //                     <ValidationError prefix="Address" field="address" errors={state.errors} />
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="mandram" className="block text-sm font-semibold text-gray-700 mb-1">Nearby Mandram to your Residence</label>
// // //                     <input 
// // //                       id="mandram"
// // //                       type="text" 
// // //                       name="mandram"
// // //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// // //                       placeholder="Enter Mandram name/location" 
// // //                     />
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="days" className="block text-sm font-semibold text-gray-700 mb-1">Maximum Days Available</label>
// // //                     <select 
// // //                       id="days"
// // //                       name="days"
// // //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all bg-white"
// // //                     >
// // //                       <option value="5 Days">5 Days</option>
// // //                       <option value="10 Days">10 Days</option>
// // //                       <option value="15 Days">15 Days</option>
// // //                       <option value="20 Days">20 Days</option>
// // //                       <option value="30 Days">30 Days</option>
// // //                     </select>
// // //                   </div>

// // //                   <button 
// // //                     type="submit" 
// // //                     disabled={state.submitting}
// // //                     className="w-full bg-[#a7150b] hover:bg-[#8a0d08] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4 flex justify-center items-center"
// // //                   >
// // //                     {state.submitting ? 'Submitting...' : 'SUBMIT APPLICATION'}
// // //                   </button>
// // //                 </form>
// // //               </>
// // //             )}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* --- FAQ SECTION --- */}
// // //       <section className="py-16 bg-white border-t border-gray-100">
// // //         <div className="max-w-3xl mx-auto px-4">
// // //           <h2 className="text-3xl font-bold text-center text-[#1a1a1a] mb-2">Frequently Asked Questions</h2>
// // //           <div className="flex justify-center mb-10 text-[#a7150b]">
// // //              <span>--- ❧ ---</span>
// // //           </div>

// // //           <div className="space-y-2">
// // //             <FaqItem 
// // //               question="Is there a fee to apply for Volunteering?" 
// // //               answer="Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer." 
// // //             />
// // //              <FaqItem 
// // //               question="What is the duration for which I can stay at the Peedam?" 
// // //               answer="Based on your availability please select one of the options in the interest form. The minimum duration is 5 days." 
// // //             />
// // //             <FaqItem 
// // //               question="Where will I be staying during volunteering?" 
// // //               answer="Accommodation is provided within the Temple premises. Shared dormitory style accommodation and bathroom facilities are provided. Men and women will be given separate accommodation." 
// // //             />
// // //             <FaqItem 
// // //               question="What kind of food will be provided?" 
// // //               answer="Simple, wholesome vegetarian meals will be provided daily in the Annadhanam hall." 
// // //             />
// // //             <FaqItem 
// // //               question="If I'm interested in extending my stay, who can I reach out to?" 
// // //               answer="Please express your interest in extending your stay at the Volunteer Reception Office upon completion of your initial slot." 
// // //             />
// // //              <FaqItem 
// // //               question="Can I bring my family along with me?" 
// // //               answer="As there is a schedule that one follows during their time as volunteers, it is best if you can make arrangements for your children to be looked after. If family members wish to join, they must apply separately." 
// // //             />
// // //           </div>
// // //         </div>
// // //       </section>

// // //     </main>
// // //   );
// // // }

// // 'use client';

// // import { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // // Import Formspree hook
// // import { useForm, ValidationError } from '@formspree/react';
// // import { 
// //   ClipboardList, 
// //   Phone, 
// //   CalendarCheck, 
// //   ChevronDown, 
// //   ChevronUp, 
// //   Heart, 
// //   Users, 
// //   Clock,
// //   CheckCircle2
// // } from 'lucide-react';

// // // --- DATA: FAQs (Adapted for Melmaruvathur) ---
// // const faqData = [
// //   {
// //     category: "Volunteering Details",
// //     items: [
// //       { q: "Is there a fee to apply for Volunteering?", a: "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer." },
// //       { q: "What is the duration for which I can stay at the Peedam?", a: "Based on your availability please select one of the options in the interest form. The minimum duration is 5 days." },
// //       { q: "If I’m interested in extending my stay, who can I reach out to?", a: "Please express your interest in extending your stay at the Volunteer Reception Office." },
// //       { q: "Will I be able to attend and volunteer for advanced programs if interested?", a: "Volunteering and attending advanced programs is possible during your stay as a volunteer and is entirely dependent on availability of slots." },
// //       { q: "Will I be able to work remotely while volunteering?", a: "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work." },
// //       { q: "Can I bring my child along with me?", a: "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home." },
// //       { q: "Will I be able to communicate with my family during my stay?", a: "Yes, but it is encouraged that interactions are kept to a minimum to stay focused at one's inner growth." },
// //       { q: "Can my family come to meet me in the Peedam?", a: "Yes, they can come and meet you outside of scheduled activities. If they wish to stay, please make sure to book a stay for them in the cottages in advance." },
// //       { q: "Will I be able to leave the Peedam for a short duration of time?", a: "It is best if you plan your stay in such a way that you can devote your time to staying at the Peedam for that specified duration." },
// //       { q: "Will I be able to visit my family in case of an emergency?", a: "In case of an emergency the participant can reach out to a volunteer from the volunteer coordination team and they will assist you with related procedures." },
// //       { q: "What will I be doing as part of volunteering?", a: "Volunteers are requested to support various departments at the Peedam upon arrival. This is entirely dependent on requirement." }
// //     ]
// //   },
// //   {
// //     category: "Application Process",
// //     items: [
// //       { q: "What is the basic criteria to apply for volunteering at the Peedam?", a: "Those aged 18 years and above who wish to offer their service to Amma are eligible to apply." },
// //       { q: "Will I be able to come along with my Spouse or Family member?", a: "Yes, you can come with your spouse or family member. However, each person must fill out their own individual application form and go through the application process separately." },
// //       { q: "Can I apply for Volunteering at any time of the year?", a: "Volunteering opportunities are open throughout the year for individuals who wish to volunteer for a dedicated amount of time." }
// //     ]
// //   },
// //   {
// //     category: "Stay",
// //     items: [
// //       { q: "Where will I be staying in the Peedam during volunteering?", a: "Accommodation is provided within the Peedam premises. Shared dormitory style accommodation and bathroom facilities are provided. Men and women will be given separate accommodation." },
// //       { q: "If I come with my spouse, can we stay together?", a: "If you are coming along with your spouse and would like to stay together, please let us know during the call. Accommodation for couples is subject to availability." }
// //     ]
// //   },
// //   {
// //     category: "Food",
// //     items: [
// //       { q: "What kind of food will be provided during my stay?", a: "Simple, wholesome vegetarian meals will be provided daily in the Annadhanam hall. The kitchen will not be able to assist with any specific dietary needs; therefore, the participants will have to arrange for it themselves if needed." },
// //       { q: "What are the timings for the meals?", a: "Meals are provided at scheduled timings daily." }
// //     ]
// //   },
// //   {
// //     category: "Medical Facilities",
// //     items: [
// //       { q: "What are the medical services available at the Peedam?", a: "The Peedam Medical Center will provide basic first aid and medical assistance. Details of any serious medical conditions must be informed well in advance. Leaving out any information about one's current or prior medical condition can lead to your application being rejected." }
// //     ]
// //   },
// //   {
// //     category: "Packing and Clothing",
// //     items: [
// //       { q: "What do I need to pack before coming to the Peedam?", a: "Flashlight, Towel, Toiletries, Comfortable Footwear, Rain jacket or Umbrella, Warm jacket or coat (seasonal) and Bug Spray." },
// //       { q: "Is there a dress code that I need to follow at the Peedam?", a: "As Indian clothing style is modest/decent. Hence, please bring clothing that covers the shoulders, midriff and knees at all times. Proper attire includes: ankle length pants for both men and women (no capris or shorts) and long shirts that cover the upper arms and thighs. Traditional Indian clothing is recommended. Please avoid tight clothing such as shirts and jeans – both for your own comfort and as a sign of respect for the local culture." },
// //       { q: "How much luggage can I carry along with me?", a: "As you will be sharing your space with several other people, please make sure to pack whatever is utmost necessary." },
// //       { q: "Where will I be keeping my belongings?", a: "Based on requirement, locker facility will be provided to make sure luggage is securely placed." }
// //     ]
// //   },
// //   {
// //     category: "Amenities Available",
// //     items: [
// //       { q: "Do we have internet access at the Peedam?", a: "Due to limited bandwidth, Wi-Fi is only available for work related purposes. For those who wish to check email or stay in touch with family, it is possible to obtain data from your service provider." }
// //     ]
// //   },
// //   {
// //     category: "Modes of Transportation",
// //     items: [
// //       { q: "How can I arrive at the Peedam?", a: "By Train: Melmaruvathur has its own Railway Station (Code: MLMR). All major express trains stop here.\n\nBy Bus: Melmaruvathur is situated on the NH-45 highway. Regular buses are available from Chennai (CMBT/Kilambakkam) and other major cities.\n\nBy Flight: The nearest airport is Chennai International Airport (MAA), situated approximately 92km away." }
// //     ]
// //   }
// // ];

// // // --- COMPONENTS ---

// // // 1. Single FAQ Item (Question & Answer)
// // const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   return (
// //     <div className="py-4 border-b border-gray-100 last:border-0">
// //       <button
// //         type="button"
// //         onClick={() => setIsOpen(!isOpen)}
// //         className="flex items-start justify-between w-full text-left group"
// //       >
// //         <span className={`text-base md:text-lg font-medium transition-colors ${isOpen ? 'text-[#a7150b]' : 'text-gray-800'}`}>
// //           {question}
// //         </span>
// //         <span className="ml-4 mt-1 text-[#a7150b] flex-shrink-0">
// //           {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
// //         </span>
// //       </button>
// //       <AnimatePresence>
// //         {isOpen && (
// //           <motion.div
// //             initial={{ height: 0, opacity: 0 }}
// //             animate={{ height: 'auto', opacity: 1 }}
// //             exit={{ height: 0, opacity: 0 }}
// //             className="overflow-hidden"
// //           >
// //             <p className="pt-3 pb-2 text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
// //               {answer}
// //             </p>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // };

// // // 2. Category Section (Collapsible)
// // const FaqCategory = ({ title, items }: { title: string, items: {q: string, a: string}[] }) => {
// //     const [isCategoryOpen, setCategoryOpen] = useState(false);
  
// //     return (
// //       <div className="border-b border-gray-200 last:border-0">
// //         <button 
// //           onClick={() => setCategoryOpen(!isCategoryOpen)}
// //           className="w-full flex items-center justify-between py-6 text-left hover:bg-gray-50 transition-colors px-4"
// //         >
// //           <h3 className="text-xl md:text-2xl font-bold text-[#1a1a1a]">{title}</h3>
// //           <span className="text-gray-400">
// //              {isCategoryOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
// //           </span>
// //         </button>
  
// //         <AnimatePresence>
// //           {isCategoryOpen && (
// //              <motion.div
// //                 initial={{ height: 0, opacity: 0 }}
// //                 animate={{ height: 'auto', opacity: 1 }}
// //                 exit={{ height: 0, opacity: 0 }}
// //                 className="overflow-hidden"
// //              >
// //                 <div className="px-4 pb-8 space-y-2">
// //                     {items.map((item, idx) => (
// //                         <FaqItem key={idx} question={item.q} answer={item.a} />
// //                     ))}
// //                 </div>
// //              </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     );
// // };

// // export default function VolunteerPage() {
// //   // Initialize Formspree Hook (Replace "YOUR_FORMSPREE_ID" with your actual ID)
// //   const [state, handleSubmit] = useForm("mbddjlkp");

// //   return (
// //     <main className="bg-white min-h-screen">
      
// //       {/* --- HERO SECTION --- */}
// //       <section className="relative py-20 bg-orange-50 overflow-hidden">
// //         <div className="absolute top-0 left-0 w-full h-2 bg-[#a7150b]"></div>
// //         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          
// //           <motion.div 
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.6 }}
// //           >
// //             {/* Tamil Quote 1 */}
// //             <h3 className="text-xl md:text-2xl font-bold text-[#a7150b] mb-6 leading-relaxed font-serif">
// //               "செவ்வாடை அணிபவர்களுக்குச் <br className="hidden md:block" />
// //               சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
// //             </h3>

// //             <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
// //               Register for Volunteering
// //             </h1>
// //             <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
// //               Melmaruvathur Adhiparasakthi Siddhar Peedam
// //             </p>

// //             {/* Tamil Quote 2 */}
// //             <div className="inline-block px-6 py-2 bg-white rounded-full shadow-sm border border-orange-100">
// //               <p className="text-[#a7150b] font-bold text-lg">
// //                 "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
// //               </p>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* --- HOW TO APPLY --- */}
// //       <section className="py-12 border-b border-gray-100">
// //         <div className="max-w-6xl mx-auto px-4">
// //           <div className="text-center mb-10">
// //             <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">How to Apply?</h2>
// //             <div className="flex justify-center mt-2 text-[#a7150b]">
// //               <span>--- ❧ ---</span>
// //             </div>
// //           </div>

// //           <div className="grid md:grid-cols-3 gap-8 text-center relative">
// //             <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gray-200 -z-10"></div>

// //             <div className="flex flex-col items-center bg-white p-6">
// //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// //                 <ClipboardList className="w-10 h-10 text-[#a7150b]" />
// //               </div>
// //               <h4 className="text-lg font-bold text-gray-900 mb-2">Fill up the Form</h4>
// //               <p className="text-gray-600 text-sm">Complete the Volunteering <br /> Interest Form below</p>
// //             </div>

// //             <div className="flex flex-col items-center bg-white p-6">
// //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// //                 <Phone className="w-10 h-10 text-[#a7150b]" />
// //               </div>
// //               <h4 className="text-lg font-bold text-gray-900 mb-2">Receive a Call</h4>
// //               <p className="text-gray-600 text-sm">We will contact you <br /> within 3 days</p>
// //             </div>

// //             <div className="flex flex-col items-center bg-white p-6">
// //               <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
// //                 <CalendarCheck className="w-10 h-10 text-[#a7150b]" />
// //               </div>
// //               <h4 className="text-lg font-bold text-gray-900 mb-2">Confirmation</h4>
// //               <p className="text-gray-600 text-sm">Receive a response <br /> within 7 days</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* --- CONTENT & FORM GRID --- */}
// //       <section className="py-16 px-4 max-w-7xl mx-auto">
// //         <div className="grid lg:grid-cols-2 gap-12">
          
// //           {/* LEFT: Information Text */}
// //           <div className="space-y-10">
// //             <div>
// //               <div className="flex items-center gap-3 mb-4">
// //                 <Heart className="w-6 h-6 text-[#a7150b]" />
// //                 <h3 className="text-2xl font-bold text-gray-900">Volunteering Details</h3>
// //               </div>
// //               <p className="text-gray-600 leading-relaxed text-justify">
// //                 Volunteering at the Melmaruvathur Adhiparasakthi Siddhar Peedam is 
// //                 <strong> free-of-charge</strong>. This possibility is available throughout the year 
// //                 for individuals who can spend five days or more in volunteering for various 
// //                 activities geared towards human wellbeing.
// //               </p>
// //               <p className="text-gray-600 leading-relaxed mt-4 text-justify">
// //                 Individuals with diverse interests come to the Temple to offer their skills 
// //                 and expertise and contribute to various social and environmental projects. 
// //                 In the process, they can imbibe the vibrant energies of the consecrated spaces, 
// //                 connect with the natural habitat, enjoy wholesome food, and experience a 
// //                 healthy lifestyle.
// //               </p>
// //             </div>

// //             <div>
// //               <div className="flex items-center gap-3 mb-4">
// //                 <Users className="w-6 h-6 text-[#a7150b]" />
// //                 <h3 className="text-2xl font-bold text-gray-900">Eligibility</h3>
// //               </div>
// //               <p className="text-gray-600 leading-relaxed text-justify">
// //                 The main criteria for volunteering is a willingness to get involved and give 
// //                 yourself to whatever is needed at the moment. Individuals aged 
// //                 <strong> 18 and above</strong> who can apply and stay at the dormitory accommodation free of cost.
// //               </p>
// //             </div>

// //             <div>
// //               <div className="flex items-center gap-3 mb-4">
// //                 <Clock className="w-6 h-6 text-[#a7150b]" />
// //                 <h3 className="text-2xl font-bold text-gray-900">Duration</h3>
// //               </div>
// //               <p className="text-gray-600 leading-relaxed text-justify">
// //                 Individuals can apply based on their availability, with the flexibility to 
// //                 volunteer for a <strong>minimum of 5 days or up to 30 days</strong>.
// //               </p>
// //             </div>
// //           </div>

// //           {/* RIGHT: Registration Form */}
// //           <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
            
// //             {/* SUCCESS STATE OVERLAY */}
// //             {state.succeeded ? (
// //                <motion.div 
// //                  initial={{ opacity: 0, scale: 0.9 }}
// //                  animate={{ opacity: 1, scale: 1 }}
// //                  className="flex flex-col items-center justify-center text-center h-full py-20"
// //                >
// //                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
// //                    <CheckCircle2 className="w-10 h-10 text-green-600" />
// //                  </div>
// //                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
// //                  <p className="text-gray-600 max-w-xs mx-auto mb-6">
// //                    Om Sakthi! Thank you for offering your service. We will review your application and contact you within 3 days.
// //                  </p>
// //                  <button 
// //                    onClick={() => window.location.reload()}
// //                    className="text-[#a7150b] font-semibold hover:underline"
// //                  >
// //                    Submit another application
// //                  </button>
// //                </motion.div>
// //             ) : (
// //               <>
// //                 <h3 className="text-2xl font-bold text-[#a7150b] mb-6 border-b border-gray-200 pb-2">
// //                   Interest Form
// //                 </h3>
                
// //                 <form onSubmit={handleSubmit} className="space-y-5">
// //                   <div>
// //                     <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
// //                     <input 
// //                       id="name"
// //                       type="text" 
// //                       name="name"
// //                       required
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                       placeholder="Enter your name" 
// //                     />
// //                     <ValidationError prefix="Name" field="name" errors={state.errors} />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="aadhar" className="block text-sm font-semibold text-gray-700 mb-1">Aadhar Number</label>
// //                     <input 
// //                       id="aadhar"
// //                       type="text" 
// //                       name="aadhar"
// //                       required
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                       placeholder="xxxx xxxx xxxx" 
// //                     />
// //                     <ValidationError prefix="Aadhar" field="aadhar" errors={state.errors} />
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-4">
// //                     <div>
// //                       <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
// //                       <input 
// //                         id="mobile"
// //                         type="tel" 
// //                         name="mobile"
// //                         required
// //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                         placeholder="+91" 
// //                       />
// //                       <ValidationError prefix="Mobile" field="mobile" errors={state.errors} />
// //                     </div>
// //                      <div>
// //                       <label htmlFor="qualification" className="block text-sm font-semibold text-gray-700 mb-1">Qualification</label>
// //                       <input 
// //                         id="qualification"
// //                         type="text" 
// //                         name="qualification"
// //                         className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                         placeholder="e.g. B.E, MBA" 
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
// //                     <textarea 
// //                       id="address"
// //                       rows={3} 
// //                       name="address"
// //                       required
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                       placeholder="Your full address"
// //                     ></textarea>
// //                     <ValidationError prefix="Address" field="address" errors={state.errors} />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="mandram" className="block text-sm font-semibold text-gray-700 mb-1">Nearby Mandram to your Residence</label>
// //                     <input 
// //                       id="mandram"
// //                       type="text" 
// //                       name="mandram"
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all" 
// //                       placeholder="Enter Mandram name/location" 
// //                     />
// //                   </div>

// //                   <div>
// //                     <label htmlFor="days" className="block text-sm font-semibold text-gray-700 mb-1">Maximum Days Available</label>
// //                     <select 
// //                       id="days"
// //                       name="days"
// //                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all bg-white"
// //                     >
// //                       <option value="5 Days">5 Days</option>
// //                       <option value="10 Days">10 Days</option>
// //                       <option value="15 Days">15 Days</option>
// //                       <option value="20 Days">20 Days</option>
// //                       <option value="30 Days">30 Days</option>
// //                     </select>
// //                   </div>

// //                   <button 
// //                     type="submit" 
// //                     disabled={state.submitting}
// //                     className="w-full bg-[#a7150b] hover:bg-[#8a0d08] disabled:bg-gray-400 text-white font-bold py-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4 flex justify-center items-center"
// //                   >
// //                     {state.submitting ? 'Submitting...' : 'SUBMIT APPLICATION'}
// //                   </button>
// //                 </form>
// //               </>
// //             )}
// //           </div>

// //         </div>
// //       </section>

// //       {/* --- FAQ SECTION (UPDATED) --- */}
// //       <section className="py-16 bg-white border-t border-gray-100">
// //         <div className="max-w-4xl mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center text-[#1a1a1a] mb-2">Frequently Asked Questions</h2>
// //           <div className="flex justify-center mb-10 text-[#a7150b]">
// //              <span>--- ❧ ---</span>
// //           </div>

// //           <div className="space-y-4">
// //             {faqData.map((cat, idx) => (
// //                 <FaqCategory key={idx} title={cat.category} items={cat.items} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //     </main>
// //   );
// // }

// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useForm, ValidationError } from '@formspree/react';
// import { 
//   ClipboardList, 
//   Phone, 
//   CalendarCheck, 
//   ChevronDown, 
//   ChevronRight, 
//   Heart, 
//   Users, 
//   Clock, 
//   MapPin, 
//   CheckCircle2, 
//   Info,
//   Sparkles
// } from 'lucide-react';

// // --- DATA: FAQs ---
// const faqData = [
//   {
//     category: "Volunteering Details",
//     icon: <Info className="w-5 h-5" />,
//     items: [
//       { q: "Is there a fee to apply for Volunteering?", a: "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer." },
//       { q: "What is the duration for which I can stay at the Peedam?", a: "Based on your availability please select one of the options in the interest form. The minimum duration is 5 days." },
//       { q: "If I’m interested in extending my stay, who can I reach out to?", a: "Please express your interest in extending your stay at the Volunteer Reception Office." },
//       { q: "Will I be able to attend and volunteer for advanced programs if interested?", a: "Volunteering and attending advanced programs is possible during your stay as a volunteer and is entirely dependent on availability of slots." },
//       { q: "Will I be able to work remotely while volunteering?", a: "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work." },
//       { q: "Can I bring my child along with me?", a: "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home." },
//       { q: "Will I be able to communicate with my family during my stay?", a: "Yes, but it is encouraged that interactions are kept to a minimum to stay focused at one's inner growth." },
//       { q: "Can my family come to meet me in the Peedam?", a: "Yes, they can come and meet you outside of scheduled activities. If they wish to stay, please make sure to book a stay for them in the cottages in advance." },
//       { q: "Will I be able to leave the Peedam for a short duration of time?", a: "It is best if you plan your stay in such a way that you can devote your time to staying at the Peedam for that specified duration." },
//       { q: "Will I be able to visit my family in case of an emergency?", a: "In case of an emergency the participant can reach out to a volunteer from the volunteer coordination team and they will assist you with related procedures." },
//       { q: "What will I be doing as part of volunteering?", a: "Volunteers are requested to support various departments at the Peedam upon arrival. This is entirely dependent on requirement." }
//     ]
//   },
//   {
//     category: "Application Process",
//     icon: <ClipboardList className="w-5 h-5" />,
//     items: [
//       { q: "What is the basic criteria to apply for volunteering?", a: "Those aged 18 years and above who wish to offer their service to Amma are eligible to apply." },
//       { q: "Will I be able to come along with my Spouse or Family member?", a: "Yes, you can come with your spouse or family member. However, each person must fill out their own individual application form and go through the application process separately." },
//       { q: "Can I apply for Volunteering at any time of the year?", a: "Volunteering opportunities are open throughout the year for individuals who wish to volunteer for a dedicated amount of time." }
//     ]
//   },
//   {
//     category: "Stay",
//     icon: <MapPin className="w-5 h-5" />,
//     items: [
//       { q: "Where will I be staying in the Peedam during volunteering?", a: "Accommodation is provided within the Peedam premises. Shared dormitory style accommodation and bathroom facilities are provided. Men and women will be given separate accommodation." },
//       { q: "If I come with my spouse, can we stay together?", a: "If you are coming along with your spouse and would like to stay together, please let us know during the call. Accommodation for couples is subject to availability." }
//     ]
//   },
//   {
//     category: "Food",
//     icon: <Heart className="w-5 h-5" />,
//     items: [
//       { q: "What kind of food will be provided during my stay?", a: "Simple, wholesome vegetarian meals will be provided daily in the Annadhanam hall. The kitchen will not be able to assist with any specific dietary needs; therefore, the participants will have to arrange for it themselves if needed." },
//       { q: "What are the timings for the meals?", a: "Meals are provided at scheduled timings daily." }
//     ]
//   },
//   {
//     category: "Medical Facilities",
//     icon: <Sparkles className="w-5 h-5" />,
//     items: [
//       { q: "What are the medical services available at the Peedam?", a: "The Peedam Medical Center will provide basic first aid and medical assistance. Details of any serious medical conditions must be informed well in advance." }
//     ]
//   },
//   {
//     category: "Packing and Clothing",
//     icon: <Users className="w-5 h-5" />,
//     items: [
//       { q: "What do I need to pack before coming to the Peedam?", a: "Flashlight, Towel, Toiletries, Comfortable Footwear, Rain jacket or Umbrella, and Bug Spray." },
//       { q: "Is there a dress code that I need to follow at the Peedam?", a: "As Indian clothing style is modest/decent. Hence, please bring clothing that covers the shoulders, midriff and knees at all times. Traditional Indian clothing is recommended. Please avoid tight clothing such as shirts and jeans." },
//       { q: "How much luggage can I carry along with me?", a: "As you will be sharing your space with several other people, please make sure to pack whatever is utmost necessary." },
//       { q: "Where will I be keeping my belongings?", a: "Based on requirement, locker facility will be provided to make sure luggage is securely placed." }
//     ]
//   },
//   {
//     category: "Modes of Transportation",
//     icon: <Clock className="w-5 h-5" />,
//     items: [
//       { q: "How can I arrive at the Peedam?", a: "By Train: Melmaruvathur has its own Railway Station (Code: MLMR). All major express trains stop here.\n\nBy Bus: Melmaruvathur is situated on the NH-45 highway. Regular buses are available from Chennai and other major cities.\n\nBy Flight: The nearest airport is Chennai International Airport (MAA), situated approximately 92km away." }
//     ]
//   }
// ];

// // --- COMPONENTS ---

// const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="border-b border-gray-100 last:border-0">
//       <button
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-start justify-between w-full py-4 text-left group hover:bg-gray-50/50 transition-colors px-4 rounded-lg"
//       >
//         <span className={`text-sm md:text-base font-medium transition-colors ${isOpen ? 'text-[#a7150b]' : 'text-gray-700'}`}>
//           {question}
//         </span>
//         <span className="ml-4 mt-0.5 text-gray-400 group-hover:text-[#a7150b] transition-colors">
//           {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
//         </span>
//       </button>
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="overflow-hidden"
//           >
//             <p className="px-4 pb-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
//               {answer}
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FaqCategory = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: {q: string, a: string}[] }) => {
//   const [isCategoryOpen, setCategoryOpen] = useState(false);
//   return (
//     <div className="mb-4 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
//       <button 
//         onClick={() => setCategoryOpen(!isCategoryOpen)}
//         className="w-full flex items-center justify-between p-5 text-left bg-white"
//       >
//         <div className="flex items-center gap-3">
//           <div className={`p-2 rounded-lg transition-colors ${isCategoryOpen ? 'bg-red-50 text-[#a7150b]' : 'bg-gray-50 text-gray-500'}`}>
//             {icon}
//           </div>
//           <h3 className={`text-lg font-bold transition-colors ${isCategoryOpen ? 'text-[#a7150b]' : 'text-gray-900'}`}>{title}</h3>
//         </div>
//         <span className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180 text-[#a7150b]' : 'text-gray-400'}`}>
//            <ChevronDown className="w-5 h-5" />
//         </span>
//       </button>

//       <AnimatePresence>
//         {isCategoryOpen && (
//            <motion.div
//               initial={{ height: 0 }}
//               animate={{ height: 'auto' }}
//               exit={{ height: 0 }}
//               className="overflow-hidden bg-gray-50/30"
//            >
//               <div className="border-t border-gray-100">
//                   {items.map((item, idx) => (
//                       <FaqItem key={idx} question={item.q} answer={item.a} />
//                   ))}
//               </div>
//            </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const InfoCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
//   <motion.div 
//     whileHover={{ y: -5 }}
//     className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
//   >
//     <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-[#a7150b]">
//       <Icon className="w-6 h-6" />
//     </div>
//     <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
//     <p className="text-gray-600 leading-relaxed text-sm text-justify">{content}</p>
//   </motion.div>
// );

// export default function VolunteerPage() {
//   const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID"); // Replace ID

//   return (
//     <main className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-orange-100 selection:text-[#a7150b]">
      
//       {/* --- HERO SECTION --- */}
//       <section className="relative pt-32 pb-24 overflow-hidden bg-white">
//         {/* Abstract Background Decoration */}
//         <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-orange-50 to-transparent -z-10" />
//         <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70 animate-blob" />
//         <div className="absolute top-40 left-0 w-72 h-72 bg-red-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />

//         <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-[#a7150b] text-xs font-bold uppercase tracking-wider mb-8">
//               <Sparkles className="w-3 h-3" />
//               Seva Opportunity
//             </div>

//             {/* Tamil Quote 1 */}
//             <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-6 leading-relaxed font-serif italic">
//               "செவ்வாடை அணிபவர்களுக்குச் <br className="hidden md:block" />
//               சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
//             </h3>

//             <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight">
//               Volunteering Registration
//             </h1>
//             <p className="text-lg text-gray-600 font-medium mb-10 max-w-2xl mx-auto">
//               Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam and experience the joy of selfless service.
//             </p>

//             {/* Tamil Quote 2 */}
//             <div className="inline-block relative">
//               <div className="absolute inset-0 bg-[#a7150b] blur opacity-10 rounded-full"></div>
//               <div className="relative px-8 py-3 bg-white rounded-full shadow-lg border border-gray-100">
//                 <p className="text-[#a7150b] font-bold text-lg md:text-xl">
//                   "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* --- HOW TO APPLY (Timeline Style) --- */}
//       <section className="py-16 bg-white border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">Application Journey</h2>
//             <div className="w-20 h-1 bg-[#a7150b] mx-auto mt-4 rounded-full opacity-20"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto">
//             {/* Desktop Connector Line */}
//             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
            
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { icon: ClipboardList, step: "01", title: "Apply Online", desc: "Fill the interest form below with accurate details." },
//                 { icon: Phone, step: "02", title: "Verification", desc: "Our team will contact you within 3 days for a brief discussion." },
//                 { icon: CalendarCheck, step: "03", title: "Confirmation", desc: "Receive approval within 7 days and pack your bags!" },
//               ].map((item, idx) => (
//                 <div key={idx} className="relative group text-center bg-white p-4">
//                   <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-orange-100 group-hover:shadow-md transition-all duration-300 relative z-10">
//                     <item.icon className="w-8 h-8 text-[#a7150b]" />
//                   </div>
//                   <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a7150b] text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
//                     Step {item.step}
//                   </div>
//                   <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
//                   <p className="text-gray-500 text-sm max-w-xs mx-auto">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- MAIN CONTENT & FORM --- */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-12 gap-12 items-start">
          
//           {/* LEFT: Information Cards (Span 7 cols) */}
//           <div className="lg:col-span-7 space-y-6">
//             <div className="mb-8">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Details</h2>
//               <p className="text-gray-600">Everything you need to know before you apply.</p>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//                <InfoCard 
//                  icon={Heart} 
//                  title="Free of Cost" 
//                  content="Volunteering at the Peedam is completely free-of-charge. Accommodation and wholesome vegetarian food are provided during your stay." 
//                />
//                <InfoCard 
//                  icon={Users} 
//                  title="Eligibility" 
//                  content="Open to individuals aged 18 and above. The main criteria is a willingness to get involved and give yourself to whatever is needed." 
//                />
//                <InfoCard 
//                  icon={Clock} 
//                  title="Flexible Duration" 
//                  content="Choose a schedule that works for you. You can volunteer for a minimum of 5 days or extend up to 30 days based on availability." 
//                />
//                <InfoCard 
//                  icon={Sparkles} 
//                  title="The Experience" 
//                  content="Imbibe vibrant energies, connect with nature, enjoy a healthy lifestyle, and contribute to social and environmental projects." 
//                />
//             </div>
            
//             {/* FAQ Section Embedded on Left Column below cards */}
//             <div className="pt-12">
//                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h3>
//                {faqData.map((cat, idx) => (
//                   <FaqCategory key={idx} title={cat.category} icon={cat.icon} items={cat.items} />
//                ))}
//             </div>
//           </div>

//           {/* RIGHT: Registration Form (Span 5 cols) - Sticky */}
//           <div className="lg:col-span-5 lg:sticky lg:top-24">
//             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
//               {/* Form Header */}
//               <div className="bg-[#a7150b] px-8 py-6 text-white relative overflow-hidden">
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
//                 <h3 className="text-2xl font-bold relative z-10">Interest Form</h3>
//                 <p className="text-white/80 text-sm mt-1 relative z-10">Begin your journey of service</p>
//               </div>
              
//               <div className="p-8">
//                 {state.succeeded ? (
//                   <motion.div 
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
//                       <CheckCircle2 className="w-10 h-10 text-green-600" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
//                     <p className="text-gray-500 mb-8">
//                       Om Sakthi! We have received your details. Expect a call from us within 3 days.
//                     </p>
//                     <button 
//                       onClick={() => window.location.reload()}
//                       className="text-[#a7150b] font-semibold hover:bg-red-50 px-6 py-2 rounded-full transition-colors"
//                     >
//                       Submit another
//                     </button>
//                   </motion.div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-5">
                    
//                     {/* Floating Label Style Inputs */}
//                     <div className="space-y-4">
//                       <div className="relative">
//                         <input 
//                           id="name"
//                           type="text" 
//                           name="name"
//                           required
//                           className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
//                           placeholder="Name" 
//                         />
//                         <label htmlFor="name" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                           Full Name
//                         </label>
//                         <ValidationError prefix="Name" field="name" errors={state.errors} />
//                       </div>

//                       <div className="relative">
//                         <input 
//                           id="aadhar"
//                           type="text" 
//                           name="aadhar"
//                           required
//                           className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
//                           placeholder="Aadhar" 
//                         />
//                          <label htmlFor="aadhar" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                           Aadhar Number
//                         </label>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="relative">
//                           <input 
//                             id="mobile"
//                             type="tel" 
//                             name="mobile"
//                             required
//                             className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
//                             placeholder="Mobile" 
//                           />
//                           <label htmlFor="mobile" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                             Mobile
//                           </label>
//                         </div>
//                         <div className="relative">
//                           <input 
//                             id="qualification"
//                             type="text" 
//                             name="qualification"
//                             className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
//                             placeholder="Qualification" 
//                           />
//                           <label htmlFor="qualification" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                             Qualification
//                           </label>
//                         </div>
//                       </div>

//                       <div className="relative">
//                         <textarea 
//                           id="address"
//                           rows={3} 
//                           name="address"
//                           required
//                           className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent resize-none"
//                           placeholder="Address"
//                         ></textarea>
//                         <label htmlFor="address" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                           Full Address
//                         </label>
//                       </div>

//                       <div className="relative">
//                          <input 
//                             id="mandram"
//                             type="text" 
//                             name="mandram"
//                             className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
//                             placeholder="Mandram" 
//                           />
//                           <label htmlFor="mandram" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
//                             Nearby Mandram
//                           </label>
//                       </div>

//                       <div className="relative">
//                          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Availability</label>
//                          <div className="grid grid-cols-3 gap-2">
//                             {['5 Days', '10 Days', '15 Days', '20 Days', '30 Days'].map((day) => (
//                               <label key={day} className="cursor-pointer">
//                                 <input type="radio" name="days" value={day} className="peer sr-only" defaultChecked={day === '5 Days'} />
//                                 <div className="text-center py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-gray-600 hover:bg-gray-100 peer-checked:bg-[#a7150b] peer-checked:text-white peer-checked:border-[#a7150b] transition-all">
//                                   {day.split(' ')[0]} Days
//                                 </div>
//                               </label>
//                             ))}
//                          </div>
//                       </div>
//                     </div>

//                     <button 
//                       type="submit" 
//                       disabled={state.submitting}
//                       className="w-full bg-gradient-to-r from-[#a7150b] to-[#c71f13] hover:from-[#8a0d08] hover:to-[#a7150b] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6"
//                     >
//                       {state.submitting ? 'Submitting...' : 'SUBMIT APPLICATION'}
//                     </button>
                    
//                     <p className="text-xs text-center text-gray-400 mt-4">
//                        By submitting, you agree to follow the Peedam's code of conduct.
//                     </p>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image'; // Added for the Hero Image
import { 
  ClipboardList, 
  Phone, 
  CalendarCheck, 
  ChevronDown, 
  ChevronRight, 
  Heart, 
  Users, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Info,
  Sparkles,
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

// --- DATA: FAQs ---
const faqData = [
  {
    category: "Volunteering Details",
    icon: <Info className="w-5 h-5" />,
    items: [
      { q: "Is there a fee to apply for Volunteering?", a: "Volunteering is available free of charge. One needs to meet the eligibility requirement to be able to volunteer." },
      { q: "What is the duration for which I can stay at the Peedam?", a: "Based on your availability please select one of the options in the interest form. The minimum duration is 5 days." },
      { q: "If I’m interested in extending my stay, who can I reach out to?", a: "Please express your interest in extending your stay at the Volunteer Reception Office." },
      { q: "Will I be able to attend and volunteer for advanced programs if interested?", a: "Volunteering and attending advanced programs is possible during your stay as a volunteer and is entirely dependent on availability of slots." },
      { q: "Will I be able to work remotely while volunteering?", a: "As there is a schedule that one follows during their time as volunteers, it would be difficult to take up additional work." },
      { q: "Can I bring my child along with me?", a: "As there is minimal free time, it is best if you can make arrangements for your children to be looked after and cared for at your home." },
      { q: "Will I be able to communicate with my family during my stay?", a: "Yes, but it is encouraged that interactions are kept to a minimum to stay focused at one's inner growth." },
      { q: "Can my family come to meet me in the Peedam?", a: "Yes, they can come and meet you outside of scheduled activities. If they wish to stay, please make sure to book a stay for them in the cottages in advance." },
      { q: "Will I be able to leave the Peedam for a short duration of time?", a: "It is best if you plan your stay in such a way that you can devote your time to staying at the Peedam for that specified duration." },
      { q: "Will I be able to visit my family in case of an emergency?", a: "In case of an emergency the participant can reach out to a volunteer from the volunteer coordination team and they will assist you with related procedures." },
      { q: "What will I be doing as part of volunteering?", a: "Volunteers are requested to support various departments at the Peedam upon arrival. This is entirely dependent on requirement." }
    ]
  },
  {
    category: "Application Process",
    icon: <ClipboardList className="w-5 h-5" />,
    items: [
      { q: "What is the basic criteria to apply for volunteering?", a: "Those aged 18 years and above who wish to offer their service to Amma are eligible to apply." },
      { q: "Will I be able to come along with my Spouse or Family member?", a: "Yes, you can come with your spouse or family member. However, each person must fill out their own individual application form and go through the application process separately." },
      { q: "Can I apply for Volunteering at any time of the year?", a: "Volunteering opportunities are open throughout the year for individuals who wish to volunteer for a dedicated amount of time." }
    ]
  },
  {
    category: "Stay",
    icon: <MapPin className="w-5 h-5" />,
    items: [
      { q: "Where will I be staying in the Peedam during volunteering?", a: "Accommodation is provided within the Peedam premises. Shared dormitory style accommodation and bathroom facilities are provided. Men and women will be given separate accommodation." },
      { q: "If I come with my spouse, can we stay together?", a: "If you are coming along with your spouse and would like to stay together, please let us know during the call. Accommodation for couples is subject to availability." }
    ]
  },
  {
    category: "Food",
    icon: <Heart className="w-5 h-5" />,
    items: [
      { q: "What kind of food will be provided during my stay?", a: "Simple, wholesome vegetarian meals will be provided daily in the Annadhanam hall. The kitchen will not be able to assist with any specific dietary needs; therefore, the participants will have to arrange for it themselves if needed." },
      { q: "What are the timings for the meals?", a: "Meals are provided at scheduled timings daily." }
    ]
  },
  {
    category: "Medical Facilities",
    icon: <Sparkles className="w-5 h-5" />,
    items: [
      { q: "What are the medical services available at the Peedam?", a: "The Peedam Medical Center will provide basic first aid and medical assistance. Details of any serious medical conditions must be informed well in advance." }
    ]
  },
  {
    category: "Packing and Clothing",
    icon: <Users className="w-5 h-5" />,
    items: [
      { q: "What do I need to pack before coming to the Peedam?", a: "Flashlight, Towel, Toiletries, Comfortable Footwear, Rain jacket or Umbrella, and Bug Spray." },
      { q: "Is there a dress code that I need to follow at the Peedam?", a: "As Indian clothing style is modest/decent. Hence, please bring clothing that covers the shoulders, midriff and knees at all times. Traditional Indian clothing is recommended. Please avoid tight clothing such as shirts and jeans." },
      { q: "How much luggage can I carry along with me?", a: "As you will be sharing your space with several other people, please make sure to pack whatever is utmost necessary." },
      { q: "Where will I be keeping my belongings?", a: "Based on requirement, locker facility will be provided to make sure luggage is securely placed." }
    ]
  },
  {
    category: "Modes of Transportation",
    icon: <Clock className="w-5 h-5" />,
    items: [
      { q: "How can I arrive at the Peedam?", a: "By Train: Melmaruvathur has its own Railway Station (Code: MLMR). All major express trains stop here.\n\nBy Bus: Melmaruvathur is situated on the NH-45 highway. Regular buses are available from Chennai and other major cities.\n\nBy Flight: The nearest airport is Chennai International Airport (MAA), situated approximately 92km away." }
    ]
  }
];

// --- COMPONENTS ---

const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between w-full py-4 text-left group hover:bg-gray-50/50 transition-colors px-4 rounded-lg"
      >
        <span className={`text-sm md:text-base font-medium transition-colors ${isOpen ? 'text-[#a7150b]' : 'text-gray-700'}`}>
          {question}
        </span>
        <span className="ml-4 mt-0.5 text-gray-400 group-hover:text-[#a7150b] transition-colors">
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-4 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqCategory = ({ title, icon, items }: { title: string, icon: React.ReactNode, items: {q: string, a: string}[] }) => {
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  return (
    <div className="mb-4 bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <button 
        onClick={() => setCategoryOpen(!isCategoryOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-white"
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-colors ${isCategoryOpen ? 'bg-red-50 text-[#a7150b]' : 'bg-gray-50 text-gray-500'}`}>
            {icon}
          </div>
          <h3 className={`text-lg font-bold transition-colors ${isCategoryOpen ? 'text-[#a7150b]' : 'text-gray-900'}`}>{title}</h3>
        </div>
        <span className={`transition-transform duration-300 ${isCategoryOpen ? 'rotate-180 text-[#a7150b]' : 'text-gray-400'}`}>
           <ChevronDown className="w-5 h-5" />
        </span>
      </button>

      <AnimatePresence>
        {isCategoryOpen && (
           <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="overflow-hidden bg-gray-50/30"
           >
              <div className="border-t border-gray-100">
                  {items.map((item, idx) => (
                      <FaqItem key={idx} question={item.q} answer={item.a} />
                  ))}
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-4 text-[#a7150b]">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm text-justify">{content}</p>
  </motion.div>
);

export default function VolunteerPage() {
  const [state, handleSubmit] = useForm("mbddjlkp"); // Replace ID

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#FAFAFA] min-h-screen font-sans selection:bg-orange-100 selection:text-[#a7150b]">
      
      {/* --- REDESIGNED HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center bg-orange-50 overflow-hidden">
        
        {/* Background Pattern (Subtle Mandala/Texture) */}
        <div className="absolute inset-0 opacity-10 pattern-bg pointer-events-none"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[80%] bg-gradient-to-b from-[#ffecd2] to-transparent rounded-full blur-3xl opacity-60"></div>
        
        <div className="max-w-7xl mx-auto px-4 w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center pt-20 lg:pt-0">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm text-[#a7150b] text-sm font-bold uppercase tracking-wider mb-6">
              <HeartHandshake className="w-4 h-4" />
              Seva Opportunity
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a1a1a] mb-6 tracking-tight leading-tight">
              Serve with <span className="text-[#a7150b]">Devotion.</span> <br />
              Grow with Grace.
            </h1>

            {/* Tamil Quote 1 - Featured */}
            <div className="border-l-4 border-[#a7150b] pl-6 mb-8">
              <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed">
                "செவ்வாடை அணிபவர்களுக்குச் சேவை மனப்பான்மையும், செவிலித்தாய் மனப்பான்மையும் இருக்க வேண்டும்."
              </p>
            </div>

            <p className="text-lg text-gray-600 font-medium mb-10 max-w-xl leading-relaxed">
              Join the dedicated community at Melmaruvathur Adhiparasakthi Siddhar Peedam. Experience the joy of selfless service and spiritual growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToForm}
                className="px-8 py-4 bg-[#a7150b] text-white rounded-full font-bold shadow-lg hover:bg-[#8a0d08] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Apply for Volunteering
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {/* <button className="px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-full font-bold shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-300">
                Read Guidelines
              </button> */}
            </div>
          </motion.div>

          {/* RIGHT: Visuals (Image + Floating Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block h-[600px]"
          >
            {/* Main Image Container */}
            <div className="absolute inset-0 bg-gray-200 rounded-[2rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">
              {/* PLACEHOLDER IMAGE: Replace 'src' with your actual image of volunteers/temple */}
              <Image 
                src="https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939055/hero1_i2rvap.jpg" 
                alt="Volunteers serving at the temple"
                fill
                className="object-fill"
                priority
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Glass Card (Tamil Quote 2) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-10 -left-10 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border border-white/50 max-w-xs"
            >
              <Sparkles className="w-8 h-8 text-[#a7150b] mb-3" />
              <p className="text-[#a7150b] font-bold text-xl leading-relaxed font-serif">
                "ஆன்மிகத்தில் தொண்டுதான் முக்கியம்."
              </p>
              <p className="text-gray-500 text-xs mt-2 font-medium uppercase tracking-widest">Adhiparasakthi</p>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          </motion.div>
        </div>
      </section>

      {/* --- HOW TO APPLY (Timeline Style) --- */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">Application Journey</h2>
            <div className="w-20 h-1 bg-[#a7150b] mx-auto mt-4 rounded-full opacity-20"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: ClipboardList, step: "01", title: "Apply Online", desc: "Fill the interest form below with accurate details." },
                { icon: Phone, step: "02", title: "Verification", desc: "Our team will contact you within 3 days for a brief discussion." },
                { icon: CalendarCheck, step: "03", title: "Confirmation", desc: "Receive approval within 7 days and pack your bags!" },
              ].map((item, idx) => (
                <div key={idx} className="relative group text-center bg-white p-4">
                  <div className="w-20 h-20 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-orange-100 group-hover:shadow-md transition-all duration-300 relative z-10">
                    <item.icon className="w-8 h-8 text-[#a7150b]" />
                  </div>
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a7150b] text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0">
                    Step {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-500 text-sm max-w-xs mx-auto">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT & FORM --- */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Information Cards (Span 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Details</h2>
              <p className="text-gray-600">Everything you need to know before you apply.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <InfoCard 
                 icon={Heart} 
                 title="Free of Cost" 
                 content="Volunteering at the Peedam is completely free-of-charge. Accommodation and wholesome vegetarian food are provided during your stay." 
               />
               <InfoCard 
                 icon={Users} 
                 title="Eligibility" 
                 content="Open to individuals aged 18 and above. The main criteria is a willingness to get involved and give yourself to whatever is needed." 
               />
               <InfoCard 
                 icon={Clock} 
                 title="Flexible Duration" 
                 content="Choose a schedule that works for you. You can volunteer for a minimum of 5 days or extend up to 30 days based on availability." 
               />
               <InfoCard 
                 icon={Sparkles} 
                 title="The Experience" 
                 content="Imbibe vibrant energies, connect with nature, enjoy a healthy lifestyle, and contribute to social and environmental projects." 
               />
            </div>
            
            {/* FAQ Section Embedded on Left Column below cards */}
            <div className="pt-12">
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Questions</h3>
               {faqData.map((cat, idx) => (
                  <FaqCategory key={idx} title={cat.category} icon={cat.icon} items={cat.items} />
               ))}
            </div>
          </div>

          {/* RIGHT: Registration Form (Span 5 cols) - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-24" id="registration-form">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
              {/* Form Header */}
              <div className="bg-[#a7150b] px-8 py-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <h3 className="text-2xl font-bold relative z-10">Interest Form</h3>
                <p className="text-white/80 text-sm mt-1 relative z-10">Begin your journey of service</p>
              </div>
              
              <div className="p-8">
                {state.succeeded ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Sent!</h3>
                    <p className="text-gray-500 mb-8">
                      Om Sakthi! We have received your details. Expect a call from us within 3 days.
                    </p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="text-[#a7150b] font-semibold hover:bg-red-50 px-6 py-2 rounded-full transition-colors"
                    >
                      Submit another
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Floating Label Style Inputs */}
                    <div className="space-y-4">
                      <div className="relative">
                        <input 
                          id="name"
                          type="text" 
                          name="name"
                          required
                          className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
                          placeholder="Name" 
                        />
                        <label htmlFor="name" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                          Full Name
                        </label>
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                      </div>

                      <div className="relative">
                        <input 
                          id="aadhar"
                          type="text" 
                          name="aadhar"
                          required
                          className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
                          placeholder="Aadhar" 
                        />
                         <label htmlFor="aadhar" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                          Aadhar Number
                        </label>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                          <input 
                            id="mobile"
                            type="tel" 
                            name="mobile"
                            required
                            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
                            placeholder="Mobile" 
                          />
                          <label htmlFor="mobile" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                            Mobile
                          </label>
                        </div>
                        <div className="relative">
                          <input 
                            id="qualification"
                            type="text" 
                            name="qualification"
                            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
                            placeholder="Qualification" 
                          />
                          <label htmlFor="qualification" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                            Qualification
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <textarea 
                          id="address"
                          rows={3} 
                          name="address"
                          required
                          className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent resize-none"
                          placeholder="Address"
                        ></textarea>
                        <label htmlFor="address" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                          Full Address
                        </label>
                      </div>

                      <div className="relative">
                         <input 
                            id="mandram"
                            type="text" 
                            name="mandram"
                            className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#a7150b] focus:border-transparent outline-none transition-all placeholder-transparent"
                            placeholder="Mandram" 
                          />
                          <label htmlFor="mandram" className="absolute left-4 top-4 text-xs font-bold text-gray-400 uppercase tracking-wider peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:font-normal peer-placeholder-shown:capitalize peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-[#a7150b] peer-focus:font-bold transition-all pointer-events-none">
                            Nearby Mandram
                          </label>
                      </div>

                      <div className="relative">
                         <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 ml-1">Availability</label>
                         <div className="grid grid-cols-3 gap-2">
                            {['5 Days', '10 Days', '15 Days', '20 Days', '30 Days'].map((day) => (
                              <label key={day} className="cursor-pointer">
                                <input type="radio" name="days" value={day} className="peer sr-only" defaultChecked={day === '5 Days'} />
                                <div className="text-center py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm font-medium text-gray-600 hover:bg-gray-100 peer-checked:bg-[#a7150b] peer-checked:text-white peer-checked:border-[#a7150b] transition-all">
                                  {day.split(' ')[0]} Days
                                </div>
                              </label>
                            ))}
                         </div>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full bg-gradient-to-r from-[#a7150b] to-[#c71f13] hover:from-[#8a0d08] hover:to-[#a7150b] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 mt-6"
                    >
                      {state.submitting ? 'Submitting...' : 'SUBMIT APPLICATION'}
                    </button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                       By submitting, you agree to follow the Peedam's code of conduct.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}