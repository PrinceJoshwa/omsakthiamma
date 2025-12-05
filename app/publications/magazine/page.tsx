// import PageTemplate from '@/components/PageTemplate';

// export default function MagazinePage() {
//   return (
//     <PageTemplate
//       title="Spiritual Magazine"
//       subtitle="Monthly Wisdom and Inspiration"
//       imageSrc="/placeholder.svg?key=x1h5j"
//       content="Our monthly magazine brings current spiritual insights and timeless teachings to our community. Each issue is carefully curated to provide relevant guidance for contemporary spiritual seekers."
//     />
//   );
// }

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function MagazinePage() {
  const magazines = [
    {
      // image: "/mega.png",
      image: "https://res.cloudinary.com/dsj3kcbf4/image/upload/v1764939079/mega_l8gywn.png",
      title: "Sakthi Oli Magazine Feb 2016",
      published: "2016-03-12 05:23:31",
      price: "₹25",
      link: "www.sakthioli.com",
    },
  ];

  return (
    <PageTemplate
      title="Magazines"
      subtitle="Monthly Spiritual Publications"
      hideContent={false}   // ⭐ must be false to show JSX
            noTopPadding={false}
      noContentTopPadding={true}
      content={
        <div className="grid md:grid-cols-1 gap-12 mt-10 justify-center">

          {magazines.map((mag, index) => (
            <div key={index} className="pb-10 flex gap-6">

              {/* LEFT: Magazine Image */}
              <Image
                src={mag.image}
                width={300}
                height={400}
                alt={mag.title}
                className="rounded-lg shadow-md border"
              />

              {/* RIGHT: Details */}
              <div>
                <h2 className="text-xl font-bold">{mag.title}</h2>

                <p className="mt-2 text-gray-700">
                  <strong>Published:</strong> {mag.published}
                </p>

                <p className="mt-2 text-gray-700">{mag.price}</p>

                <p className="mt-2 text-gray-700">
                  <strong>Available At:</strong> {mag.link}
                </p>
              </div>

            </div>
          ))}

        </div>
      }
    />
  );
}
