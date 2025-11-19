// import PageTemplate from '@/components/PageTemplate';

// export default function ArticlesPage() {
//   return (
//     <PageTemplate
//       title="Spiritual Articles"
//       subtitle="Insights from Spiritual Masters"
//       imageSrc="/placeholder.svg?key=v8e3f"
//       content="Our collection of spiritual articles provides deep insights into various aspects of spiritual practice. Written by experienced teachers, these articles guide seekers on their spiritual journey."
//     />
//   );
// }

import PageTemplate from "@/components/PageTemplate";

export default function ArticlesPage() {
  return (
    <PageTemplate
      title="Articles"
      subtitle=""
      imageSrc=""
      noTopPadding={false}
      noContentTopPadding={true}
      content={
        <>
          {/* ARTICLE 1 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              இந்த நிலை மாறும்!
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              ஒரு நாட்டின் ராஜாவுக்கு ஒரு சிந்தனை தோன்றியது...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>

          {/* ARTICLE 2 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              அம்மாவின் ஆன்மிக விதைப் பயணங்கள்
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              ஒரு தொண்டரின் காபி, தேநீர் சாப்பிட...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>

          {/* ARTICLE 3 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              அம்மா இருப்பிக் கொடுத்த உயிர்
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              எங்கள் குடும்பத்தார் அனைவரும் 1982ம் ஆண்டு...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>

          {/* ARTICLE 4 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              அருள்திரு அம்மாவின் 76ஆம் ஆண்டு அவதாரத் திருநாளை முன்னிட்டு
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              அம்மாவரின் ஆசீர்வாதத்துடன்...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>

          {/* ARTICLE 5 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              அற்புதங்கள் ஒன்று இரண்டா எதுத்துச் சொலவு…!
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              ஒரு திரு அம்மா அவர்களின் கோவில்...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>

          {/* ARTICLE 6 */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-3">
              அன்பான வேண்டுகோள்
            </h2>
            <p className="text-gray-700 mb-2 leading-relaxed">
              ஒவ்வொருவரும் தன்னால் முடிந்த அளவு தர்மம் செய்ய வேண்டும்...
            </p>
            <button className="text-blue-700 font-semibold">Read More</button>
          </div>
        </>
      }
    />
  );
}
