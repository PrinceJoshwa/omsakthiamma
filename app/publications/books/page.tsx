// import PageTemplate from '@/components/PageTemplate';

// export default function BooksPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Books"
//       subtitle="Wisdom Preserved in Pages"
//       imageSrc="/placeholder.svg?key=w9f4g"
//       content="Our published books contain profound spiritual teachings and practical guidance. These comprehensive works serve as valuable references for anyone seeking to deepen their spiritual understanding."
//       imageOnRight={true}
//     />
//   );
// }

import PageTemplate from "@/components/PageTemplate";
import Image from "next/image";

export default function BooksPage() {
  const books = [
    {
      image: "/book/book1.png",
      title: "Glory of MOTHER Divine - AMMA Melmaruvathur",
      price: "₹150",
      desc: "Available At : Melmaruvathur Aadhiparasakthi siddhar peedam.",
      address:
        "Aadhiparasakthi Charitable, Medical, Educational And Cultural Trust, Melmaruvathur-603 319",
    },
    {
      image: "/book/book2.jpg",
      title: "ஓம்பசக்தி மேல்‌மருவத்தூர் அன்னையின் அருள்வாக்கு (பாகம்-2)",
      price: "",
      desc: "Available At : ஆதிபராசக்தி சித்தர் பீடம்.",
      address:
        "ஆதிபராசக்தி கல்வி, மருத்துவ, பண்டபாடு, அறநிலை, மேல்‌மருவத்தூர் -603 319",
    },
  ];

  return (
    <PageTemplate
      title="Books"
      subtitle="Spiritual Books & Publications"
      hideContent={false}   // ⭐ show custom JSX content
      noTopPadding={false}
      noContentTopPadding={true}
      content={
        <div className="grid md:grid-cols-2 gap-12 mt-10">
          {books.map((book, index) => (
            <div key={index} className="pb-10">
              
              <Image
                src={book.image}
                width={450}
                height={400}
                alt={book.title}
                className="rounded-lg shadow-md border object-contain"
              />

              <h2 className="text-xl font-bold mt-4">{book.title}</h2>

              {book.price && (
                <p className="mt-2 text-gray-700 font-semibold">{book.price}</p>
              )}

              <p className="mt-2 text-gray-700">{book.desc}</p>
              <p className="mt-2 text-gray-700">{book.address}</p>
            </div>
          ))}
        </div>
      }
    />
  );
}
