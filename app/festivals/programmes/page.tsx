// // import PageTemplate from '@/components/PageTemplate';

// // export default function ProgrammesPage() {
// //   return (
// //     <PageTemplate
// //       title="Festival Programmes"
// //       subtitle="Special Events and Celebrations"
// //       imageSrc="/placeholder.svg?key=m8v3w"
// //       content="Our festival programmes feature special events, cultural performances, and spiritual activities. These gatherings create opportunities for community bonding and shared spiritual experiences."
// //       imageOnRight={true}
// //     />
// //   );
// // }

// "use client";

// import PageTemplate from "@/components/PageTemplate";
// import Calendar from "@/components/Calender"; // your file
// import React from "react";

// export default function ProgrammesPage() {
//   return (
//     <>
//       {/* HEADER ONLY */}
//       <PageTemplate
//         title="Festival Programmes"
//         subtitle="Special Events and Celebrations"
//         hideContent={true}
//         hideFooter={true}
//       />

//       {/* CALENDAR BELOW HEADER, GAP REMOVED */}
//       <div className="max-w-6xl mx-auto px-4 pb-20 -mt-125">
//         <Calendar />
//       </div>
//     </>
//   );
// }

"use client";

import PageTemplate from "@/components/PageTemplate";
import GoogleCalendarSection from "@/components/GoogleCalendar";
import React from "react";

export default function ProgrammesPage() {
  return (
    <>
      {/* HEADER ONLY (no content inside PageTemplate) */}
      <PageTemplate
        title="Festival Programmes"
        subtitle="Special Events and Celebrations"
        hideContent={true}
        hideFooter={true}
      />

      {/* CALENDAR BELOW HEADER */}
      <div className="max-w-6xl mx-auto px-4 pb-20 -mt-10">
        <GoogleCalendarSection />
      </div>
    </>
  );
}
