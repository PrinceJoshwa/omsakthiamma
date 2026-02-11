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
  // songs: [
  //   { id: "m1", title: "MOOLA MANTRAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764850897/1._MOOLA_MANTRAM_ovusw0.mp3", duration: "00:45" },
  //   { id: "m2", title: "GURU POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851417/2._GURU_POTRI_ildeac.mp3", duration: "07:48" },
  //   { id: "m3", title: "THIRUVADI POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851305/3._THIRUVADI_POTRI_yfptbt.mp3", duration: "07:32" },
  //   { id: "m4", title: "VENDUTHAL KOORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851444/4._VENDUTHAL_KOORU_fiepqx.mp3", duration: "10:55" },
  //   { id: "m5", title: "MAZHAI VENDAL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851112/5._MAZHAI_VENDAL_sd555p.mp3", duration: "03:59" },
  //   { id: "m6", title: "108 POTRI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851219/6.108_POTRI_otrlsq.mp3", duration: "05:30" },
  //   { id: "m7", title: "108 MANTHIRAKOORU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764851498/7.108_MANTHIRAKOORU_m6gcnl.mp3", duration: "00:00" },
  //   { id: "m8", title: "THIRUPPALLIYEZHUCHI", url: "./mantras/8. THIRUPPALLIYEZHUCHI.mp3", duration: "32:26" },
  //   { id: "m9", title: "SAKTHI THIRUPPAVAI", url: "./mantras/9. SAKTHI THIRUPPAVAI.mp3", duration: "29:25" },
  //   { id: "m10", title: "1008 POTRI", url: "./mantras/10. 1008 POTRI.mp3", duration: "57:58" },
  // ]
  songs: [
    { id: "m1", title: "MOOLA MANTRAM", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770306506/1._MOOLA_MANTRAM_ovusw0_kecbj9.mp3", duration: "00:45" },
    { id: "m2", title: "GURU POTRI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307518/2._GURU_POTRI_ildeac_v7c0yj.mp3", duration: "07:48" },
    { id: "m3", title: "THIRUVADI POTRI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307610/3._THIRUVADI_POTRI_yfptbt_tarpyf.mp3", duration: "07:32" },
    { id: "m4", title: "VENDUTHAL KOORU", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307625/4._VENDUTHAL_KOORU_fiepqx_vv9ihz.mp3", duration: "10:55" },
    { id: "m5", title: "MAZHAI VENDAL", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770306680/5._MAZHAI_VENDAL_sd555p_m1yx0e.mp3", duration: "03:59" },
    { id: "m6", title: "108 POTRI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770306721/6.108_POTRI_otrlsq_nkli2d.mp3", duration: "05:30" },
    { id: "m7", title: "108 MANTHIRAKOORU", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307601/7.108_MANTHIRAKOORU_m6gcnl_ow9vxh.mp3", duration: "00:00" },
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
  // songs: [
  //   { id: "s1", title: "BANGARU KAVASAM", url: "./songs/1. BANGARU KAVASAM.mp3", duration: "27:12" },
  //   { id: "s2", title: "VARUGA VARUGA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854635/2._VARUGA_VARUGA_ti6i9k.mp3", duration: "04:49" },
  //   { id: "s3", title: "OMKARANAYAGIYE", url: "./songs/3. OMKARANAYAGIYE.mp3", duration: "05:22" },
  //   { id: "s4", title: "MARUVOORIN", url: "./songs/4. MARUVOORIN.mp3", duration: "06:18" },
  //   { id: "s5", title: "KANNITHAMIZH", url: "./songs/5. KANNITHAMIZH.mp3", duration: "04:35" },
  //   { id: "s6", title: "NADAMHE (DEVA)", url: "./songs/6. NADAMHE (DEVA).mp3", duration: "07:27" },
  //   { id: "s7", title: "PONMALAI", url: "./songs/7. PONMALAI.mp3", duration: "09:21" },
  //   { id: "s8", title: "MAGALE ADI MAGALE", url: "./songs/8. MAGALE ADI MAGALE.mp3", duration: "06:26" },
  //   { id: "s9", title: "ORU SEVAADAI", url: "./songs/9. ORU SEVAADAI.mp3", duration: "06:29" },
  //   { id: "s10", title: "THIRISOOLAM", url: "./songs/10. THIRISOOLAM.mp3", duration: "06:28" },
  //   { id: "s11", title: "PAVALAVANNA", url: "./songs/11. PAVALAVANNA.mp3", duration: "07:32" },
  //   { id: "s12", title: "ROJAPOOKKALE", url: "./songs/12. ROJAPOOKKALE.mp3", duration: "06:57" },
  //   { id: "s13", title: "AADATHA", url: "./songs/13. AADATHA.mp3", duration: "07:34" },
  //   { id: "s14", title: "THISAIENGILUM", url: "./songs/14. THISAIENGILUM.mp3", duration: "06:25" },
  //   { id: "s15", title: "KUNKUMATHU KAALIYAMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876090/vrom25n0aqxbxrrj7qrj.mp3", duration: "05:30" },
  //   { id: "s16", title: "VEPAMARA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876093/bphgdbshhunu2wxezbgo.mp3", duration: "05:24" },
  //   { id: "s17", title: "ADITHAAYE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876069/qjhj20glqk8kgajyocov.mp3", duration: "04:13" },
  //   { id: "s18", title: "KAALAM VALARUTHAMMA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854751/18._KAALAM_VALARUTHAMMA_toxxuy.mp3", duration: "06:38" },
  //   { id: "s19", title: "ANNAIKKU", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854630/19._ANNAIKKU_ag1om5.mp3", duration: "05:26" },
  //   { id: "s20", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854715/20._MARUVATHURIL_ba4kok.mp3", duration: "04:52" },
  //   { id: "s21", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854620/21._AMMA_AATHIPARASHAKTHI_any6sn.mp3", duration: "05:03" },
  //   { id: "s22", title: "MARUVOORILE", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854590/22._MARUVOORILE_kzelzm.mp3", duration: "03:14" },
  //   { id: "s23", title: "SEVVADAI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854697/23._SEVVAADAI_d1fchm.mp3", duration: "04:02" },
  //   { id: "s24", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854768/24._MARUVATHURIL_immdos.mp3", duration: "04:52" },
  //   { id: "s25", title: "SARANAM SARANAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764854735/25._SARANAM_SARANAM_qu62bk.mp3", duration: "04:23" },
  //   { id: "s26", title: "MARUVOOR SHAKTHIYIN", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764853948/26._MARUVOOR_SHAKTHIYIN_kjg6yr.mp3", duration: "04:13" },
  //   { id: "s27", title: "AGILAMELAM", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764853910/27._AGILAMELLAM_xnxdlj.mp3", duration: "03:33" },
  //   { id: "s28", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764875854/lgd24ttrizlecm5sc4dm.mp3", duration: "05:03" },
  //   { id: "s29", title: "AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764876221/lhjcjh7hgvbea278w4pa.mp3", duration: "22:54" },
  //   { id: "s30", title: "OM ATHISAYAMAANA", url: "https://res.cloudinary.com/dsj3kcbf4/video/upload/v1764875863/cwxroteyxiklekxwsyn4.mp3", duration: "17:14" },
  // ]
  songs: [
    { id: "s1", title: "BANGARU KAVASAM", url: "./songs/1. BANGARU KAVASAM.mp3", duration: "27:12" },
    { id: "s2", title: "VARUGA VARUGA", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307715/2._VARUGA_VARUGA_ti6i9k_o12khl.mp3", duration: "04:49" },
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
    { id: "s15", title: "KUNKUMATHU KAALIYAMMA", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770313059/15._KUNKUMATHU_KAALIYAMMA_guhbrr.mp3", duration: "05:30" },
    { id: "s16", title: "VEPAMARA", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770312976/16._VEPAMARA_me6rjv.mp3", duration: "05:24" },
    { id: "s17", title: "ADITHAAYE", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770312914/17._ADITHAAYE_nixuea.mp3", duration: "04:13" },
    { id: "s18", title: "KAALAM VALARUTHAMMA", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307769/18._KAALAM_VALARUTHAMMA_toxxuy_qrtse6.mp3", duration: "06:38" },
    { id: "s19", title: "ANNAIKKU", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307759/19._ANNAIKKU_ag1om5_p5gevp.mp3", duration: "05:26" },
    { id: "s20", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307743/20._MARUVATHURIL_ba4kok_wkeboi.mp3", duration: "04:52" },
    { id: "s21", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307753/21._AMMA_AATHIPARASHAKTHI_any6sn_jowuar.mp3", duration: "05:03" },
    { id: "s22", title: "MARUVOORILE", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307713/22._MARUVOORILE_kzelzm_jqkzem.mp3", duration: "03:14" },
    { id: "s23", title: "SEVVADAI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307724/23._SEVVAADAI_d1fchm_twfvyd.mp3", duration: "04:02" },
    { id: "s24", title: "MARUVATHURIL", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307766/24._MARUVATHURIL_immdos_tiffyu.mp3", duration: "04:52" },
    { id: "s25", title: "SARANAM SARANAM", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307755/25._SARANAM_SARANAM_qu62bk_nurzxn.mp3", duration: "04:23" },
    { id: "s26", title: "MARUVOOR SHAKTHIYIN", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307743/26._MARUVOOR_SHAKTHIYIN_kjg6yr_z7hyol.mp3", duration: "04:13" },
    { id: "s27", title: "AGILAMELAM", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770307752/27._AGILAMELLAM_xnxdlj_filxod.mp3", duration: "03:33" },
    { id: "s28", title: "AMMA AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770313006/21._AMMA_AATHIPARASHAKTHI_gzvkyt.mp3", duration: "05:03" },
    { id: "s29", title: "AATHIPARASHAKTHI", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770315629/29-AATHIPARASHAKTHI_gmrddl.mp3", duration: "22:54" },
    { id: "s30", title: "OM ATHISAYAMAANA", url: "https://res.cloudinary.com/dvd7o5nph/video/upload/v1770313408/30._OM_ATHISAYAMAANA_f2r6as.mp3", duration: "17:14" },
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
