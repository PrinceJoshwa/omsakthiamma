// import PageTemplate from '@/components/PageTemplate';

// export default function SpiritualConferencesPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Conferences"
//       subtitle="Gathering for Divine Learning"
//       imageSrc="/placeholder.svg?key=s5b9c"
//       content="Our spiritual conferences bring together seekers, teachers, and masters for collective learning and spiritual growth. These events create platforms for sharing knowledge and deepening spiritual understanding."
//     />
//   );
// }


import PageTemplate from '@/components/PageTemplate';

export default function SpiritualConferencesPage() {
  return (
    <PageTemplate
      title="Spiritual Conferences"
      subtitle="Gathering for Divine Learning"
      noTopPadding={true}
      noContentTopPadding={true}
      content={`
The main focus of the Om Sakthi movement is to promote spiritual awareness and awakening. With this in mind, the Trust conducts many spiritual conferences to develop solidarity among the people and for the welfare of the common man. Being part of this movement is like being a global citizen, always working towards the common good. This is what The Mother desires. This is what The Mother aspires for and constantly tries to inspire in Her devotees.

Religious heads from different faiths have been part of these conferences. National leaders like former Indian presidents, Giani Zail Singh and Shankar Dayal Sharma have also participated in these conferences in 1986 and ‘88, respectively.

Eight conferences have so far been conducted by the Trust to develop spiritual solidarity among all the people of the world and for the welfare of the world at large, to pray for rains and to develop natural resources. With the Blessings of the Supreme Mother and His Holiness, mammoth processions and Yagnas are conducted, solely by women. Charitable activities are the highlights of these conferences. So far, eight such conferences have been held at various places.
      `}
    />
  );
}
