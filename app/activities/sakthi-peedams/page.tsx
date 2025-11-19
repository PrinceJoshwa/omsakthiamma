// import PageTemplate from '@/components/PageTemplate';

// export default function SakhtiPeedamsPage() {
//   return (
//     <PageTemplate
//       title="Sakthi Peedams"
//       subtitle="Centers of Divine Feminine Power"
//       imageSrc="/placeholder.svg?key=p2y6z"
//       content="Sakthi Peedams are sacred centers dedicated to the worship of divine feminine energy. These locations hold immense spiritual significance and serve as powerful centers for spiritual practices and transformations."
//       imageOnRight={true}
//     />
//   );
// }

import PageTemplate from '@/components/PageTemplate';

export default function SakthiPeedamsPage() {
  return (
    <PageTemplate
      title="Sakthi Peedams"
      subtitle="Centers of Divine Feminine Power"
      noTopPadding={false}
      noContentTopPadding={true}
      content={`
Amma has permitted and also has directed certain ardent devotees to construct Sakthi Peedams or Divine Centres with Sanctum Sanctorum for the Mother Deity, as in the Siddar Peedam. Amma has declared that these Sakthi Peedams should serve as branches of the main SiddharPeedam at Melmaruvathur.

One of the highlights of the Peedam and the Trust activities is the feeding of the devotees every forenoon through the noble activity of ANNA DHAANAM (feeding the poor and hungry). Anybody can contribute and specify the choice of food to be served. The feeding happens on a larger scale on all special occasions also. More details can be viewed under the head ‘Festive Occasions’.
      `}
    />
  );
}
