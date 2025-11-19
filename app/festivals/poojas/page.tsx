// import PageTemplate from '@/components/PageTemplate';

// export default function PoojasFestivalPage() {
//   return (
//     <PageTemplate
//       title="Sacred Poojas"
//       subtitle="Rituals of Divine Worship"
//       imageSrc="/placeholder.svg?key=k6t1u"
//       content="Poojas are sacred rituals performed to honor the divine and seek blessings. Each pooja is carefully conducted according to ancient traditions to ensure maximum spiritual benefit for all participants."
//       imageOnRight={true}
//     />
//   );
// }

import PageTemplate from '@/components/PageTemplate';

export default function PoojasFestivalPage() {
  return (
    <PageTemplate
      title="Poojas"
      subtitle=""
            noTopPadding={true}
      noContentTopPadding={true}
      content={`
        <table class="w-full text-left text-gray-700">
          <thead>
            <tr>
              <th class="py-2 font-semibold">Time</th>
              <th class="py-2 font-semibold">Pooja</th>
            </tr>
          </thead>

          <tbody class="space-y-4">
            <tr>
              <td class="py-1">3:00 AM</td>
              <td class="py-1">Opening of the Sanctum Sanctorum</td>
            </tr>

            <tr>
              <td class="py-1">3:00 AM - 4:00 AM</td>
              <td class="py-1">Abishekam to the Suyambu and the Presiding Deity</td>
            </tr>

            <tr>
              <td class="py-1">4:00 AM - 5:30 AM</td>
              <td class="py-1">Alangaram</td>
            </tr>

            <tr>
              <td class="py-1">5:30 AM</td>
              <td class="py-1">Maha Deeparathanai & Public Darshan Starts</td>
            </tr>

            <tr>
              <td class="py-1">8:00 PM</td>
              <td class="py-1">Temple will be opened till 8:00 PM for Public Darshan</td>
            </tr>
          </tbody>
        </table>

        <p class="mt-6 text-gray-700 leading-relaxed">
          The timings given are approximate. It may vary on certain special occasions.
        </p>

        <p class="text-gray-700 leading-relaxed">
          The temple will be opened between 3:00 am to 1:00 pm and 3:00 pm to 8:00 pm.
        </p>

        <p class="text-gray-700 leading-relaxed">
          On Sundays, Tuesdays, Fridays, Newmoon days, Full Moon days, and Siddhar Peedam festival days, 
          there will be no break in Darshan Timings.
        </p>
      `}
    />
  );
}
