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

// export type Song = {
//   id: string;
//   title: string;
//   url: string; 
//   duration: string;
// };

// export type MantraFolder = {
//   id: string;
//   folderName: string;
//   description: string;
//   songs: Song[];
// };

// // --- DATA COLLECTION (With Cloudinary URLs) ---
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
//     ]
//   },
//   {
//     id: "f5",
//     folderName: "05 JOTHY PAADAL",
//     description: "Songs dedicated to the Divine Light (Jothy).",
//     songs: [
//       { id: "s5_1", title: "THAI POOSA JOTHIYAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764790784/1_THAI_POOSA_JOTHIYAI_dsi7pb.mp3", duration: "07:28" },
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
//       { id: "s6_3", title: "PODU RENDU MUDI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791311/03_PODU_RENDU_MUDI_qd6arn.mp3", duration: "05:15" },
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
//       { id: "s8_2", title: "PAADHAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792937/2_PAADHAM_gn8eep.mp3", duration: "05:27" },
//       { id: "s8_3", title: "KALAVELLAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/3_KALAVELLAM_elwi1p.mp3", duration: "06:30" },
//       { id: "s8_4", title: "MANTHIRA PUNNAGAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793022/4_MANTHIRA_PUNNAGAI_nqvdm2.mp3", duration: "07:30" },
//       { id: "s8_5", title: "KARUVIZHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793411/5_KARUVIZHI_avdyzz.mp3", duration: "06:41" },
//       { id: "s8_6", title: "GURUNATHA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764792965/6_GURUNATHA_doy8lq.mp3", duration: "05:01" },
//       { id: "s8_7", title: "VARAVA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793470/7_VARAVA_l6pobj.mp3", duration: "08:02" },
//       { id: "s8_8", title: "KANDEN AMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764793033/8_KANDEN_AMMA_zfxtef.mp3", duration: "06:26" },
//     ]
//   },
// ];

// // --- FEATURED ON HOMEPAGE ---
// // Safe lookup: We find the folder by ID, then get the specific song.
// // If not found, we use the fallback object with the working Cloudinary URL.

// export const featuredMantras = [
//   // 1. Aadipooram Song (Folder 1)
//   mantraCollection.find(f => f.id === "f1")?.songs.find(s => s.title.includes("ADIPOORAM")) || { 
//     id: "demo1", 
//     title: "ADIPOORAM POOTHAVALE", 
//     url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764788568/1_ADIPOORAM_POOTHAVALE_bxdcja.mp3", 
//     duration: "05:30" 
//   },
  
//   // 2. Irumudi Payanam (Folder 6)
//   mantraCollection.find(f => f.id === "f6")?.songs.find(s => s.title.includes("IRUMUDI PAYANAM")) || { 
//     id: "demo2", 
//     title: "IRUMUDI PAYANAM", 
//     url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791673/09_KAALANGATHALA_pcvqoc.mp3", 
//     duration: "06:04" 
//   },
  
//   // 3. Amma Oru (Folder 6)
//   mantraCollection.find(f => f.id === "f6")?.songs.find(s => s.title.includes("AMMA ORU")) || { 
//     id: "demo3", 
//     title: "AMMA ORU", 
//     url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764791478/06_AMMA_ORU_zszkub.mp3", 
//     duration: "06:14" 
//   },
// ];

// TYPES
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

// ─────────────────────────────────────────────
// NEW MANTRAS AUDIO FOLDER  (from your screenshot)
// ─────────────────────────────────────────────

export const mantrasAudioFolder: MantraFolder = {
  id: "f_mantras",
  folderName: "Mantras Audio",
  description: "Audio chants extracted from the provided collection.",
  songs: [
    { id: "m1", title: "MOOLA MANTRAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764850897/1._MOOLA_MANTRAM_ovusw0.mp3", duration: "00:45" },
    { id: "m2", title: "GURU POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851417/2._GURU_POTRI_ildeac.mp3", duration: "07:48" },
    { id: "m3", title: "THIRUVADI POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851305/3._THIRUVADI_POTRI_yfptbt.mp3", duration: "07:32" },
    { id: "m4", title: "VENDUTHAL KOORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851444/4._VENDUTHAL_KOORU_fiepqx.mp3", duration: "10:55" },
    { id: "m5", title: "MAZHAI VENDAL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851112/5._MAZHAI_VENDAL_sd555p.mp3", duration: "03:59" },
    { id: "m6", title: "108 POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851219/6.108_POTRI_otrlsq.mp3", duration: "05:30" },
    { id: "m7", title: "108 MANTHIRAKOORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851498/7.108_MANTHIRAKOORU_m6gcnl.mp3", duration: "00:00" },
    { id: "m8", title: "THIRUPPALLIYEZHUCHI", url: "./mantras/8. THIRUPPALLIYEZHUCHI.mp3", duration: "32:26" },
    { id: "m9", title: "SAKTHI THIRUPPAVAI", url: "./mantras/9. SAKTHI THIRUPPAVAI.mp3", duration: "29:25" },
    { id: "m10", title: "1008 POTRI", url: "./mantras/10. 1008 POTRI.mp3", duration: "57:58" },
  ]
};

// ─────────────────────────────────────────────
// NEW DEVOTIONAL SONGS FOLDER (from your screenshot)
// ─────────────────────────────────────────────

export const devotionalSongsFolder: MantraFolder = {
  id: "f_songs",
  folderName: "Devotional Songs",
  description: "Devotional songs extracted from the provided list.",
  songs: [
    { id: "s1", title: "BANGARU KAVASAM", url: "./BANGARUKAVASAM.mp3", duration: "27:12" },
    { id: "s2", title: "VARUGA VARUGA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854635/2._VARUGA_VARUGA_ti6i9k.mp3", duration: "04:49" },
    { id: "s3", title: "OMKARANAYAGIYE", url: "./songs/3. OMKARANAYAGIYE.mp3", duration: "05:22" },
    { id: "s4", title: "MARUVOORIN", url: "./songs/4. MARUVOORIN.mp3", duration: "06:18" },
    { id: "s5", title: "KANNITHAMIZH", url: "./songs/5. KANNITHAMIZH.mp3", duration: "04:35" },
    { id: "s6", title: "NADAMHE (DEVA)", url: "./songs/6. NADAMHE (DEVA).mp3", duration: "07:27" },
    { id: "s7", title: "PONMALAI", url: "./songs/7. PONMALAI.mp3", duration: "09:21" },
    { id: "s8", title: "MAGALE ADI MAGALE", url: "./songs/8. MAGALE ADI MAGALE.mp3", duration: "06:26" },
    { id: "s9", title: "ORU SEVAADAI", url: "./songs/9. ORU SEVAADAI.mp3", duration: "06:29" },
    { id: "s10", title: "THIRISOOLAM", url: "./songs/10. THIRISOOLAM.mp3", duration: "06:28" },
    { id: "s11", title: "PAVALAVANNA", url: "./songs/11. PAVALAVANNA.mp3", duration: "07:32" },
    { id: "s12", title: "ROJAPOOKKALE", url: "./songs/12. ROJAPOOKKALE.mp3", duration: "06:57" },
    { id: "s13", title: "AADATHA", url: "./songs/13. AADATHA.mp3", duration: "07:34" },
    { id: "s14", title: "THISAIENGILUM", url: "./songs/14. THISAIENGILUM.mp3", duration: "06:25" },
    { id: "s15", title: "KUNKUMATHU KAALIYAMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876090/vrom25n0aqxbxrrj7qrj.mp3", duration: "05:30" },
    { id: "s16", title: "VEPAMARA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876093/bphgdbshhunu2wxezbgo.mp3", duration: "05:24" },
    { id: "s17", title: "ADITHAAYE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876069/qjhj20glqk8kgajyocov.mp3", duration: "04:13" },
    { id: "s18", title: "KAALAM VALARUTHAMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854751/18._KAALAM_VALARUTHAMMA_toxxuy.mp3", duration: "06:38" },
    { id: "s19", title: "ANNAIKKU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854630/19._ANNAIKKU_ag1om5.mp3", duration: "05:26" },
    { id: "s20", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854715/20._MARUVATHURIL_ba4kok.mp3", duration: "04:52" },
    { id: "s21", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854620/21._AMMA_AATHIPARASHAKTHI_any6sn.mp3", duration: "05:03" },
    { id: "s22", title: "MARUVOORILE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854590/22._MARUVOORILE_kzelzm.mp3", duration: "03:14" },
    { id: "s23", title: "SEVVADAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854697/23._SEVVAADAI_d1fchm.mp3", duration: "04:02" },
    { id: "s24", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854768/24._MARUVATHURIL_immdos.mp3", duration: "04:52" },
    { id: "s25", title: "SARANAM SARANAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854735/25._SARANAM_SARANAM_qu62bk.mp3", duration: "04:23" },
    { id: "s26", title: "MARUVOOR SHAKTHIYIN", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764853948/26._MARUVOOR_SHAKTHIYIN_kjg6yr.mp3", duration: "04:13" },
    { id: "s27", title: "AGILAMELAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764853910/27._AGILAMELLAM_xnxdlj.mp3", duration: "03:33" },
    { id: "s28", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764875854/lgd24ttrizlecm5sc4dm.mp3", duration: "05:03" },
    { id: "s29", title: "AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876221/lhjcjh7hgvbea278w4pa.mp3", duration: "22:54" },
    { id: "s30", title: "OM ATHISAYAMAANA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764875863/cwxroteyxiklekxwsyn4.mp3", duration: "17:14" },
  ]
};

// ─────────────────────────────────────────────
// FINAL EXPORT: COLLECTION USED BY ALL PAGES
// ─────────────────────────────────────────────

export const mantraCollection: MantraFolder[] = [
  mantrasAudioFolder,
  devotionalSongsFolder
];

// For homepage small preview:
export const featuredMantras = [
  mantrasAudioFolder.songs[0],
  mantrasAudioFolder.songs[1],
  devotionalSongsFolder.songs[0],
  devotionalSongsFolder.songs[1],
];
