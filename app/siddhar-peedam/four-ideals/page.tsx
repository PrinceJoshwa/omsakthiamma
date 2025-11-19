// import PageTemplate from '@/components/PageTemplate';

// export default function FourIdealsPage() {
//   return (
//     <PageTemplate
//       title="Four Ideals"
//       subtitle="Guiding Principles of Siddhar Peedam"
//       imageSrc="/placeholder.svg?key=i3q4r"
//       content="Our four core ideals – Dharma, Artha, Kama, and Moksha – provide a comprehensive spiritual framework. These principles guide seekers through all aspects of life toward ultimate spiritual liberation."
//     />
//   );
// }

import PageTemplate from '@/components/PageTemplate';

export default function FourIdealsPage() {
  return (
    <PageTemplate
      title="Four Ideals"
      subtitle="Guiding Principles of Siddhar Peedam"
            noTopPadding={true}
      noContentTopPadding={true}
      content={`
        <p>The four pillars or ideals of the Om Sakthi movement are:</p>

        <ol class="list-decimal list-inside space-y-1 text-gray-700">
          <li>Devotion</li>
          <li>Charity</li>
          <li>Service</li>
          <li>Meditation</li>
        </ol>

        <p>
          The Mother helps all those who sincerely pray to Her. Chanting, charity,
          meditating deeply and calmly, doing yeomen service—wherever and whenever
          possible—are given priorities by His Holiness, The Amma.
        </p>
      `}
    />
  );
}
