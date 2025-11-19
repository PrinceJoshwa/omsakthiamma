// import PageTemplate from '@/components/PageTemplate';

// export default function YouthWingsPage() {
//   return (
//     <PageTemplate
//       title="Youth Wings"
//       subtitle="Guiding the Next Generation"
//       imageSrc="/placeholder.svg?key=q3z7a"
//       content="Our youth wings provide spiritual education and guidance to young seekers. We empower the next generation with spiritual wisdom and practical tools for a meaningful and purposeful life."
//     />
//   );
// }

import PageTemplate from '@/components/PageTemplate';

export default function YouthWingsPage() {
  return (
    <PageTemplate
      title="Youth Wings"
      subtitle="Guiding the Next Generation"
      noTopPadding={false}
      noContentTopPadding={true}
      content={`
Youth Wings are functioning at various centres with a view to mould the young minds in the right direction to save them from the clutches of drugs and alcohol; and to prepare them spiritually to face the day-to-day problems. They carry out relief works in draught and famine-stricken areas, and earth quake affected areas.
      `}
    />
  );
}