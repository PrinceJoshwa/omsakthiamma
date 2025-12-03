// // lib/mantraData.ts

// export type Song = {
//   id: string;
//   title: string;
//   url: string; // PASTE YOUR CLOUDINARY URL HERE
//   duration: string;
// };

// export type MantraFolder = {
//   id: string;
//   folderName: string;
//   description: string;
//   songs: Song[];
// };

// // --- DATA BASED ON YOUR IMAGE ---
// export const mantraCollection: MantraFolder[] = [
//   {
//     id: "f1",
//     folderName: "01 AADIPOORAM",
//     description: "Songs celebrating the grand Aadi Pooram festival.",
//     songs: [
//       { id: "s1_1", title: "ADIPOORAM POOTHAVALE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788568/1_ADIPOORAM_POOTHAVALE_bxdcja.mp3", duration: "05:30" },
//       { id: "s1_2", title: "ADI VANTHACHU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788536/2_ADI_VANTHACHU_ovrr83.mp3", duration: "04:30" },
//       { id: "s1_3", title: "AADI VANTHACHU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788527/3_AADI_VANTHACHU_olphyu.mp3", duration: "04:15" },
//       { id: "s1_4", title: "KANJI KALAYAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788595/4_KANJI_KALAYAM_a7trdv.mp3", duration: "06:52" },
//     //   { id: "s1_5", title: "AADI VANTHACHU", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "04:15" },
//     ]
//   },
//   {
//     id: "f2",
//     folderName: "02 PAAL ABHISHEKAM",
//     description: "Devotional chants for the Milk Abishekam ritual.",
//     songs: [
//       { id: "s2_1", title: "PAALARU POL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789390/1_PAALARU_POL_f28n8m.mp3", duration: "07:45" },
//       { id: "s2_2", title: "KARPOORAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789232/2_KARPOORAM_tgkvix.mp3", duration: "05:40" },
//       { id: "s2_3", title: "SUYAMBU VADIVINIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789231/3_SUYAMBU_VADIVINIL_obilhp.mp3", duration: "04:55" },
//       { id: "s2_4", title: "PAALOOTRAVO", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789396/4_PAALOOTRAVO_ej70ju.mp3", duration: "07:52" },
//     //   { id: "s2_5", title: "PAAL AMUTHE", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "06:10" },
//     ]
//   },
// //   {
// //     id: "f3",
// //     folderName: "03 AMMAVIN AVATHARA THIRUNAL",
// //     description: "Celebrating the divine incarnation of Amma.",
// //     songs: [
// //       { id: "s3_1", title: "NAANUM PORANTHEN", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:45" },
// //       { id: "s3_2", title: "INTHA KALIYUGATHAI", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:45" },
// //       { id: "s3_3", title: "SIVAPPU SATTAI", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:45" },
// //       { id: "s3_4", title: "MAYATHI MAYAKARI", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:45" },
// //       { id: "s3_5", title: "OYATHA", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:45" },
// //     ]
// //   },
// //   {
// //     id: "f4",
// //     folderName: "04 AMMAVIN MANI VIZHA",
// //     description: "Special songs for Amma's Mani Vizha.",
// //     songs: [
// //       { id: "s4_1", title: "BANGARU VASANTHA VIZHA", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "04:50" },
// //     ]
// //   },
//   {
//     id: "f5",
//     folderName: "05 JOTHY PAADAL",
//     description: "Songs dedicated to the Divine Light (Jothy).",
//     songs: [
//       { id: "s5_1", title: "THAI POOSA JOTHIYAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790784/1_THAI_POOSA_JOTHIYAI_dsi7pb.mp3", duration: "07:28" },
//     //   { id: "s5_2", title: "VAAN MALAI", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "08:20" },
//       { id: "s5_3", title: "JOTHI PAAR", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790776/3_JOTHI_PAAR_jonqes.mp3", duration: "05:38" },
//       { id: "s5_4", title: "ARITHARAM POOSUGINRA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790752/4_ARITHARAM_POOSUGINRA_nidvii.mp3", duration: "05:43" },
//     ]
//   },
//   {
//     id: "f6",
//     folderName: "06 IRUMUDI",
//     description: "Chants for the sacred Irumudi pilgrimage.",
//     songs: [
//       { id: "s6_1", title: "THAIPOOSAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791444/01_THAIPOOSAM_jqczwj.mp3", duration: "05:43" },
//       { id: "s6_2", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791326/02_SAKTHI_MALAI_mmfpbk.mp3", duration: "04:25" },
//       { id: "s6_3", title: "PODU RENDU MUDI", url: "Yhttps://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791311/03_PODU_RENDU_MUDI_qd6arn.mp3", duration: "05:15" },
//       { id: "s6_4", title: "MAASAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791492/04_MAASAM_bopcum.mp3", duration: "06:28" },
//       { id: "s6_5", title: "ITHU MUTHU MUTHA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791424/05_ITHU_MUTHU_MUTHA_uo1xrg.mp3", duration: "05:51" },
//       { id: "s6_6", title: "AMMA ORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791478/06_AMMA_ORU_zszkub.mp3", duration: "06:14" },
//       { id: "s6_7", title: "IRUMUDI PAYANAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", duration: "06:04" },
//       { id: "s6_8", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791596/08_SAKTHI_MALAI_xezmkg.mp3", duration: "04:54" },
//       { id: "s6_9", title: "KAALANGATHALA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", duration: "04:57" },
//       { id: "s6_10", title: "IRUMUDI BAARAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791717/10_IRUMUDI_BAARAM_gp5oz5.mp3", duration: "06:26" },
//       { id: "s6_11", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791706/11_SAKTHI_MALAI_lpnnw3.mp3", duration: "06:05" },
//     ]
//   },
//   {
//     id: "f7",
//     folderName: "07 Amma",
//     description: "Soulful melodies praising the Divine Mother.",
//     songs: [
//       { id: "s7_1", title: "OM SAKTHI OM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792416/OM_SAKTHI_OM_byhgxy.mp3", duration: "04:57" },
//     ]
//   },
//   {
//     id: "f8",
//     folderName: "08 PAADHA POOJAI",
//     description: "Songs sung during the Pada Pooja ritual.",
//     songs: [
//     //   { id: "s8_1", title: "ROJA POOKALE", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "07:30" },
//       { id: "s8_2", title: "PAADHAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792937/2_PAADHAM_gn8eep.mp3", duration: "05:27" },
//       { id: "s8_3", title: "KALAVELLAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/3_KALAVELLAM_elwi1p.mp3", duration: "06:30" },
//       { id: "s8_4", title: "MANTHIRA PUNNAGAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/4_MANTHIRA_PUNNAGAI_nqvdm2.mp3", duration: "07:30" },
//       { id: "s8_5", title: "KARUVIZHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793411/5_KARUVIZHI_avdyzz.mp3", duration: "06:41" },
//       { id: "s8_6", title: "GURUNATHA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792965/6_GURUNATHA_doy8lq.mp3", duration: "05:01" },
//       { id: "s8_7", title: "VARAVA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793470/7_VARAVA_l6pobj.mp3", duration: "08:02" },
//       { id: "s8_8", title: "KANDEN AMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793033/8_KANDEN_AMMA_zfxtef.mp3", duration: "06:26" },
//     ]
//   },
// //   {
// //     id: "f9",
// //     folderName: "09 NAVARATHIRI VIZHA",
// //     description: "Songs for the nine nights of Navaratri.",
// //     songs: [
// //       { id: "s9_1", title: "Navarathiri Nayagi", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:40" },
// //     ]
// //   },
// //   {
// //     id: "f10",
// //     folderName: "10 AMMAVIN OONJAL",
// //     description: "Lullabies and swing songs for the Goddess.",
// //     songs: [
// //       { id: "s10_1", title: "Oonjal Song 1", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "04:25" },
// //     ]
// //   },
// //   {
// //     id: "f11",
// //     folderName: "11 AMMAVIN SIRAPPU PAADAL",
// //     description: "Special collection of rare and divine songs.",
// //     songs: [
// //       { id: "s11_1", title: "Sirappu Paadal 1", url: "YOUR_CLOUDINARY_LINK_HERE", duration: "05:55" },
// //     ]
// //   }
// ];

// // --- FEATURED ON HOMEPAGE ---
// // Pick the best 4 songs to show on the main page
// export const featuredMantras = [
//   mantraCollection[4].songs[0] || { id: "demo1", title: "ADIPOORAM POOTHAVALE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788568/1_ADIPOORAM_POOTHAVALE_bxdcja.mp3", duration: "05:30" }, 
//   mantraCollection[5].songs[0] || { id: "demo2", title: "IRUMUDI PAYANAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", duration: "06:04" },
//   mantraCollection[6].songs[0] || { id: "demo3", title: "AMMA ORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791478/06_AMMA_ORU_zszkub.mp3", duration: "06:14"  },
// ];

export type Song = {
  id: string;
  title: string;
  url: string; 
  duration: string;
};

export type MantraFolder = {
  id: string;
  folderName: string;
  description: string;
  songs: Song[];
};

// --- DATA COLLECTION (With Cloudinary URLs) ---
export const mantraCollection: MantraFolder[] = [
  {
    id: "f1",
    folderName: "01 AADIPOORAM",
    description: "Songs celebrating the grand Aadi Pooram festival.",
    songs: [
      { id: "s1_1", title: "ADIPOORAM POOTHAVALE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788568/1_ADIPOORAM_POOTHAVALE_bxdcja.mp3", duration: "05:30" },
      { id: "s1_2", title: "ADI VANTHACHU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788536/2_ADI_VANTHACHU_ovrr83.mp3", duration: "04:30" },
      { id: "s1_3", title: "AADI VANTHACHU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788527/3_AADI_VANTHACHU_olphyu.mp3", duration: "04:15" },
      { id: "s1_4", title: "KANJI KALAYAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788595/4_KANJI_KALAYAM_a7trdv.mp3", duration: "06:52" },
    ]
  },
  {
    id: "f2",
    folderName: "02 PAAL ABHISHEKAM",
    description: "Devotional chants for the Milk Abishekam ritual.",
    songs: [
      { id: "s2_1", title: "PAALARU POL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789390/1_PAALARU_POL_f28n8m.mp3", duration: "07:45" },
      { id: "s2_2", title: "KARPOORAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789232/2_KARPOORAM_tgkvix.mp3", duration: "05:40" },
      { id: "s2_3", title: "SUYAMBU VADIVINIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789231/3_SUYAMBU_VADIVINIL_obilhp.mp3", duration: "04:55" },
      { id: "s2_4", title: "PAALOOTRAVO", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764789396/4_PAALOOTRAVO_ej70ju.mp3", duration: "07:52" },
    ]
  },
  {
    id: "f5",
    folderName: "05 JOTHY PAADAL",
    description: "Songs dedicated to the Divine Light (Jothy).",
    songs: [
      { id: "s5_1", title: "THAI POOSA JOTHIYAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790784/1_THAI_POOSA_JOTHIYAI_dsi7pb.mp3", duration: "07:28" },
      { id: "s5_3", title: "JOTHI PAAR", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790776/3_JOTHI_PAAR_jonqes.mp3", duration: "05:38" },
      { id: "s5_4", title: "ARITHARAM POOSUGINRA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790752/4_ARITHARAM_POOSUGINRA_nidvii.mp3", duration: "05:43" },
    ]
  },
  {
    id: "f6",
    folderName: "06 IRUMUDI",
    description: "Chants for the sacred Irumudi pilgrimage.",
    songs: [
      { id: "s6_1", title: "THAIPOOSAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791444/01_THAIPOOSAM_jqczwj.mp3", duration: "05:43" },
      { id: "s6_2", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791326/02_SAKTHI_MALAI_mmfpbk.mp3", duration: "04:25" },
      { id: "s6_3", title: "PODU RENDU MUDI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791311/03_PODU_RENDU_MUDI_qd6arn.mp3", duration: "05:15" },
      { id: "s6_4", title: "MAASAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791492/04_MAASAM_bopcum.mp3", duration: "06:28" },
      { id: "s6_5", title: "ITHU MUTHU MUTHA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791424/05_ITHU_MUTHU_MUTHA_uo1xrg.mp3", duration: "05:51" },
      { id: "s6_6", title: "AMMA ORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791478/06_AMMA_ORU_zszkub.mp3", duration: "06:14" },
      { id: "s6_7", title: "IRUMUDI PAYANAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", duration: "06:04" },
      { id: "s6_8", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791596/08_SAKTHI_MALAI_xezmkg.mp3", duration: "04:54" },
      { id: "s6_9", title: "KAALANGATHALA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", duration: "04:57" },
      { id: "s6_10", title: "IRUMUDI BAARAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791717/10_IRUMUDI_BAARAM_gp5oz5.mp3", duration: "06:26" },
      { id: "s6_11", title: "SAKTHI MALAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791706/11_SAKTHI_MALAI_lpnnw3.mp3", duration: "06:05" },
    ]
  },
  {
    id: "f7",
    folderName: "07 Amma",
    description: "Soulful melodies praising the Divine Mother.",
    songs: [
      { id: "s7_1", title: "OM SAKTHI OM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792416/OM_SAKTHI_OM_byhgxy.mp3", duration: "04:57" },
    ]
  },
  {
    id: "f8",
    folderName: "08 PAADHA POOJAI",
    description: "Songs sung during the Pada Pooja ritual.",
    songs: [
      { id: "s8_2", title: "PAADHAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792937/2_PAADHAM_gn8eep.mp3", duration: "05:27" },
      { id: "s8_3", title: "KALAVELLAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/3_KALAVELLAM_elwi1p.mp3", duration: "06:30" },
      { id: "s8_4", title: "MANTHIRA PUNNAGAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/4_MANTHIRA_PUNNAGAI_nqvdm2.mp3", duration: "07:30" },
      { id: "s8_5", title: "KARUVIZHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793411/5_KARUVIZHI_avdyzz.mp3", duration: "06:41" },
      { id: "s8_6", title: "GURUNATHA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792965/6_GURUNATHA_doy8lq.mp3", duration: "05:01" },
      { id: "s8_7", title: "VARAVA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793470/7_VARAVA_l6pobj.mp3", duration: "08:02" },
      { id: "s8_8", title: "KANDEN AMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793033/8_KANDEN_AMMA_zfxtef.mp3", duration: "06:26" },
    ]
  },
];

// --- FEATURED ON HOMEPAGE ---
// Safe lookup: We find the folder by ID, then get the specific song.
// If not found, we use the fallback object with the working Cloudinary URL.

export const featuredMantras = [
  // 1. Aadipooram Song (Folder 1)
  mantraCollection.find(f => f.id === "f1")?.songs.find(s => s.title.includes("ADIPOORAM")) || { 
    id: "demo1", 
    title: "ADIPOORAM POOTHAVALE", 
    url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788568/1_ADIPOORAM_POOTHAVALE_bxdcja.mp3", 
    duration: "05:30" 
  },
  
  // 2. Irumudi Payanam (Folder 6)
  mantraCollection.find(f => f.id === "f6")?.songs.find(s => s.title.includes("IRUMUDI PAYANAM")) || { 
    id: "demo2", 
    title: "IRUMUDI PAYANAM", 
    url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", 
    duration: "06:04" 
  },
  
  // 3. Amma Oru (Folder 6)
  mantraCollection.find(f => f.id === "f6")?.songs.find(s => s.title.includes("AMMA ORU")) || { 
    id: "demo3", 
    title: "AMMA ORU", 
    url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791478/06_AMMA_ORU_zszkub.mp3", 
    duration: "06:14" 
  },
];