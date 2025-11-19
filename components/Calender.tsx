// "use client";

// import { useState } from "react";

// export default function Calendar() {
//   const [date, setDate] = useState(new Date());

//   const monthNames = [
//     "January","February","March","April","May","June",
//     "July","August","September","October","November","December"
//   ];

//   const year = date.getFullYear();
//   const month = date.getMonth();

//   const firstDay = new Date(year, month, 1).getDay();
//   const daysInMonth = new Date(year, month + 1, 0).getDate();

//   let days = [];
//   for (let i = 0; i < firstDay; i++) days.push(null);
//   for (let d = 1; d <= daysInMonth; d++) days.push(d);

//   return (
//     (() => {
//       const container = document.createElement("div");
//       container.innerHTML = `
//         <div class="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow border">
//           <div class="flex justify-between items-center mb-6">
//             <button class="px-4 py-2 bg-gray-200 rounded" id="prev">←</button>
//             <h2 class="text-xl font-bold">${monthNames[month]} ${year}</h2>
//             <button class="px-4 py-2 bg-gray-200 rounded" id="next">→</button>
//           </div>

//           <div class="grid grid-cols-7 font-semibold text-center border-b pb-2">
//             <div>Sun</div><div>Mon</div><div>Tue</div>
//             <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
//           </div>

//           <div class="grid grid-cols-7 gap-2 mt-3">
//             ${days
//               .map(
//                 (d) =>
//                   `<div class="h-16 flex items-center justify-center border rounded bg-gray-50">${
//                     d ? d : ""
//                   }</div>`
//               )
//               .join("")}
//           </div>
//         </div>
//       `;
//       return container;
//     })()
//   );
// }

"use client";

import { useState } from "react";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const nextMonth = () =>
    setDate(new Date(year, month + 1, 1));
  const prevMonth = () =>
    setDate(new Date(year, month - 1, 1));

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow border">
      <div className="flex justify-between items-center mb-6">
        <button className="px-4 py-2 bg-gray-200 rounded" onClick={prevMonth}>
          ←
        </button>

        <h2 className="text-xl font-bold">
          {monthNames[month]} {year}
        </h2>

        <button className="px-4 py-2 bg-gray-200 rounded" onClick={nextMonth}>
          →
        </button>
      </div>

      <div className="grid grid-cols-7 font-semibold text-center border-b pb-2">
        <div>Sun</div><div>Mon</div><div>Tue</div>
        <div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-3">
        {days.map((d, i) => (
          <div
            key={i}
            className="h-16 flex items-center justify-center border rounded bg-gray-50"
          >
            {d ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}
