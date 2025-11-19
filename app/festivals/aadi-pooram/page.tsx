// import PageTemplate from '@/components/PageTemplate';

// export default function AadiPooramPage() {
//   return (
//     <PageTemplate
//       title="Aadi Pooram"
//       subtitle="Celebrating Divine Feminine Energy"
//       imageSrc="/placeholder.svg?key=n9w4x"
//       content="Aadi Pooram marks the celestial celebration of divine feminine energy and power. This sacred occasion brings devotees together to honor the goddess and seek her infinite blessings for spiritual growth."
//     />
//   );
// }

import PageTemplate from "@/components/PageTemplate";

export default function AadiPooramPage() {
  
  const content = `
  <h2 class="text-2xl font-bold text-[#a7150b] mb-2 text-center">
    52nd Aadipooram Kanjivaarpu & Paalabiseygam
  </h2>

  <p class="text-lg mb-4 text-center">(20.07.2023 & 21.07.2023)</p>

  <p>
    The three important aspects of the Aadipooram festival held over 2 days are serving Kanji (Gruel) to Amma, 
    devotees themselves performing the Milk Abhishegam (anointment) to Swayambu, and Amma Herself 
    (in the form of Arul Thiru. Adigalar) performing the noble Angapradhakshanam 
    (perambulating the Sakthi Peedam by physically rolling on the ground).
  </p>
  <p>
    Serving Kanji (Gruel) is a special offering to Amma. As stated in Her Oracle, 
    “Son, the Kanji you have brought here as an offering is not an ordinary one. 
    To Me it is GOD’s divine food (Amirtham). The kanji(gruel) is not made up of rice and ghee, 
    but it carries with it, the invaluable love, affection and devotion of my devotees.” 
    Thousands of people bring this gruel, take it around Siddhar Peedam, after which it is served to all.
  </p>
  <p>
    Milk Abhishegam to Swayambu is yet another important event, where everyone is given the opportunity 
    to enter the Sanctum Sanctorum and perform Abishegam with their own hands. 
    Amma has advised that devotees with multiple problems will find solace and resolution through this process. 
    Furthermore, those who are keen to enhance their spiritual growth and development will also benefit from this.
  </p>
  <p>
    Angapradhakshanam by Amma is a highly significant aspect of this festival. 
    Following a bath, Arul ThiruAdigalar reaches the Sanctum Sanctorum, stands in front of the Swayambu 
    and becomes an incarnation of Adhiparasakthi in a fraction of second. In this transcendent state, 
    Amma resembles a cobra, and leaps from the Sanctum Sanctorum to the Mandapam, around two metres away, 
    and then goes around the Siddhar Peedam. Such feats are beyond the human comprehension and ability. 
  </p>
  <p>
    The purpose of this is to save people from their fate and destiny. As such, 
    devotees are encouraged to perform Angapradhakshanam, while at Siddhar Peedam, 
    to cleanse themselves of their negatives, and magnify their spiritual energies.
  </p>
  `;

  return (
    <PageTemplate
      title="Aadi Pooram"
      subtitle=""
      content={content}
      imageSrc={undefined}   // No image
      hideFooter={true}      // Remove yellow footer
      noTopPadding={true}    // Fix huge gap
      hideContent={false}    // Show content
    />
  );
}
