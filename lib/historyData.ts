// src/data/historyData.ts

export interface HistoryEvent {
  year: string;
  date: string;
  description: string;
  category: "Divine" | "Social" | "Education" | "Infrastructure" | "Awards" | "Festival";
}

export const fullHistoryData: HistoryEvent[] = [
  // --- 1940s - 1970s ---
  {
    year: "1941",
    date: "03.03.1941",
    description: "The incarnation day of His Holiness Bangaru Adigalar (Amma).",
    category: "Divine"
  },
  {
    year: "1966",
    date: "28.11.1966",
    description: "The Swayambu emerged from the ground consequent to the uprooting of the neem tree in a storm and rain water washing away the snake pit beneath it.",
    category: "Divine"
  },
  {
    year: "1968",
    date: "04.09.1968",
    description: "Adigalar's marriage with Tmt. Lakshmi.",
    category: "Divine"
  },
  {
    year: "1970",
    date: "December",
    description: "Adigalar delivered the first oracle at mid-night 12 AM in the month of December.",
    category: "Divine"
  },
  {
    year: "1972",
    date: "",
    description: "Aadi Pooram festival celebrations commenced for the first time.",
    category: "Festival"
  },
  {
    year: "1973",
    date: "",
    description: "Amma did the rolling circumambulation during the second Aadi Pooram. Navarathri festival celebrations commenced.",
    category: "Festival"
  },
  {
    year: "1974",
    date: "",
    description: "The shrines of the Seven Virgins (Saptha Kanniyar) and Putru Mandapam were established. A thatched roof in front of the sanctum sanctorum was erected. Mother benevolently ordered the practice of carrying porridge filled pot (kanji kalayam) during Aadi Pooram festival. Congregational worship (koottu vazhipaadu in Tamil) commenced.",
    category: "Infrastructure"
  },
  {
    year: "1976",
    date: "",
    description: "The 1008 mantras (sacred verses) were benevolently blessed for use in prayers. Mother trained volunteers to meditate during the solar and lunar eclipses.",
    category: "Divine"
  },
  {
    year: "1977",
    date: "19.01.1977",
    description: "The foundation was laid for the Sanctum Sanctorum of the Siddhar Peedam.",
    category: "Infrastructure"
  },
  {
    year: "1977",
    date: "01.05.1977",
    description: "The pre-consecration ritual of Karikolam (sacred tour) of Mother's deity commenced.",
    category: "Divine"
  },
  {
    year: "1977",
    date: "25.11.1977",
    description: "On the full moon day in the Tamil month of Karthigai the deity of the Holy Mother was installed and consecrated in the Sanctum Sanctorum.",
    category: "Divine"
  },
  {
    year: "1978",
    date: "02.06.1978",
    description: "First weekly prayer centre at Kanchipuram was inaugurated by His Holiness Amma.",
    category: "Social"
  },
  {
    year: "1978",
    date: "20.10.1978",
    description: "The Adhiparasakthi Charitable, Medical, Educational and Cultural Trust (ACMEC Trust) was formed.",
    category: "Social"
  },
  {
    year: "1978",
    date: "09.02.1978",
    description: "The temple for the Adharvana Badra Kali was established.",
    category: "Infrastructure"
  },
  {
    year: "1979",
    date: "13.04.1979",
    description: "Aacharya Abhishekam (ritually anointing as Preceptor by bathing in holy water) was done for His Holiness Adigalar.",
    category: "Divine"
  },

  // --- 1980s ---
  {
    year: "1981",
    date: "26.06.1981",
    description: "Om Sakthi flag was introduced at Punsey Puliyampatti (Tamil Nadu).",
    category: "Social"
  },
  {
    year: "1982",
    date: "16.01.1982",
    description: "Mother benevolently ordered the Irumudi ritual after wearing Sakthi Maalai during Thai Poosam, Chitra Pournami and Aadi Pooram starting from Thai Poosam festival. Publication of the \"Sakthi Oli\" magazine commenced.",
    category: "Divine"
  },
  {
    year: "1983",
    date: "03.03.1983",
    description: "Festive celebrations of the Incarnation day of His Holiness Adigalar commenced.",
    category: "Festival"
  },
  {
    year: "1983",
    date: "Sep 1983",
    description: "The Adhiparasakthi Polytechnic College commenced functioning.",
    category: "Education"
  },
  {
    year: "1984",
    date: "16.01.1984",
    description: "His Holiness Adigalar and a few devotees accompanying him got darshan of the Jyoti (Divine Light) form of Mother at the sacred pond in Melmaruvathur. Holy Mother ordered Irumudi to be restricted to Thai Poosam and Aadi Pooram.",
    category: "Divine"
  },
  {
    year: "1984",
    date: "19.01.1984",
    description: "In an oracle Mother Adhiparasakthi announced Adigalar as the Spiritual Preceptor.",
    category: "Divine"
  },
  {
    year: "1984",
    date: "12.03.1984",
    description: "Adigalar encapsulated the spirit of late King Sarfoji (Thanjavur) in a beetle and gave it to a member of the King's dynasty.",
    category: "Divine"
  },
  {
    year: "1984",
    date: "Nov 1984",
    description: "Adhiparasakthi Engineering College started functioning.",
    category: "Education"
  },
  {
    year: "1985",
    date: "01.01.1985",
    description: "Mother Adhiparasakthi revealed Adigalar to be the Kalki incarnation.",
    category: "Divine"
  },
  {
    year: "1985",
    date: "1985",
    description: "For the third time, Mother Adhiparasakthi's Jyoti form was seen during Thai Poosam.",
    category: "Divine"
  },
  {
    year: "1985",
    date: "25.12.1985",
    description: "Hundreds of devotees witnessed the holy dance movements of the Nagapeedam at the Perundhurai Sakthi Peedam a day prior to the consecration ceremony.",
    category: "Divine"
  },
  {
    year: "1986",
    date: "26.01.1986",
    description: "Outpatient division of the Adhiparasakthi Hospital started at the Octagon building.",
    category: "Infrastructure"
  },
  {
    year: "1986",
    date: "27.02.1986",
    description: "Trains started their halt at the newly built Melmaruvathur Railway station.",
    category: "Infrastructure"
  },
  {
    year: "1986",
    date: "Feb 1986",
    description: "The first eye camp was conducted under the auspices of Arvind Hospital (Madurai) as part of H. H. Adigalar's incarnation day celebrations and this continues every year.",
    category: "Social"
  },
  {
    year: "1986",
    date: "03.03.1986",
    description: "Adigalar gave darshan to differently abled, mentally challenged and orphaned children brought from 15 districts in Tamil Nadu to Melmaruvathur.",
    category: "Social"
  },
  {
    year: "1986",
    date: "10.05.1986",
    description: "The sixth World Spiritual Conference for Peace was inaugurated by the then Honourable President of India, Mr. Zail Singh, at the Marina Beach in Chennai.",
    category: "Social"
  },
  {
    year: "1986",
    date: "1986",
    description: "Unending supply of porridge from a vessel during Aadi Pooram was witnessed. One lakh people were fed simultaneously in drought affected districts of Periyar, Salem and South Arcot in Tamil Nadu resulting in copious rainfall with Mother's blessings.",
    category: "Divine"
  },
  {
    year: "1986",
    date: "06.11.1986",
    description: "108 devotees walked with 108 pots of Cauvery river water from Srirangapattinam, Karnataka to Melmaruvathur and performed Abhishekam (holy bath) to the deity.",
    category: "Divine"
  },
  {
    year: "1987",
    date: "1987",
    description: "H. H. Adigalar miraculously changed extreme hot weather to cool pleasant one while on a visit to Natarajar Temple, Chidambaram.",
    category: "Divine"
  },
  {
    year: "1988",
    date: "24.07.1988",
    description: "More than 5000 devotees blissfully witnessed Holy Mother descending from her cut-out image during the Nature Advancement Spiritual Conference held at the Marina Beach in Chennai.",
    category: "Divine"
  },
  {
    year: "1988",
    date: "14.09.1988",
    description: "Adhiparasakthi Arts College started at Kalavai on land donated by devotees.",
    category: "Education"
  },
  {
    year: "1988",
    date: "12.11.1988",
    description: "Honourable Prime Minister of India Sri. Rajiv Gandhi inaugurated the Octagon building and the Adhiparasakthi Higher Secondary School at Melmaruvathur.",
    category: "Infrastructure"
  },

  // --- 1990s ---
  {
    year: "1990",
    date: "1990",
    description: "Holy Mother ordered Irumudi to be restricted to once annually during Thai Poosam.",
    category: "Divine"
  },
  {
    year: "1991",
    date: "12.08.1991",
    description: "Dining hall to seat 1500 people constructed in record 15 days for Aadi Pooram.",
    category: "Infrastructure"
  },
  {
    year: "1992",
    date: "1992",
    description: "The responsibility of celebrating Thai Poosam was delegated to Malaysian devotees.",
    category: "Social"
  },
  {
    year: "1992",
    date: "22.04.1992",
    description: "H. H. Adigalar conducted 108 free marriages in Karaikudi town.",
    category: "Social"
  },
  {
    year: "1992",
    date: "14.06.1992",
    description: "H. H. Adigalar met H. H. Chandrasekarendra Saraswathy Swamigal at Sankara Mutt, Kanchipuram.",
    category: "Divine"
  },
  {
    year: "1992",
    date: "05.11.1992",
    description: "H. H. Adigalar oversaw a huge pacifying velvi pooja (yagna) conducted at the Mahamaham Pond in Kumbakonam for the lives lost there in a stampede.",
    category: "Divine"
  },
  {
    year: "1993",
    date: "1993",
    description: "First Thai Poosam Jyoti lit by women on the upper deck of the Sanctum Sanctorum at Melmaruvathur. Amma declared it to be the \"Jyoti, Spiritual jyoti, Women's Jyoti\".",
    category: "Divine"
  },
  {
    year: "1993",
    date: "05.05.1993",
    description: "Chitra Pournami prayer conducted on a grand scale with 600 velvis (yagna), 5000 holy pots (kalasam) and 5000 lamps.",
    category: "Festival"
  },
  {
    year: "1993",
    date: "Oct 1993",
    description: "Adhiparasakthi College of Pharmacy and College of Nursing were established.",
    category: "Education"
  },
  {
    year: "1994",
    date: "1994",
    description: "The College of Physiotherapy was established.",
    category: "Education"
  },
  {
    year: "1994",
    date: "04.12.1994",
    description: "Performing Sakthi Maalai rituals for Irumudi at Marina Beach, Chennai commenced.",
    category: "Divine"
  },
  {
    year: "1995",
    date: "15.04.1995",
    description: "The Mother explained how to meditate and ordered devotees to meditate in wet dress on this lunar eclipse day to protect people and country from its evil effects.",
    category: "Divine"
  },
  {
    year: "1995",
    date: "14.05.1995",
    description: "Chitra Pournami was conducted in a very grand manner with 1800 velvis. Mother ordered devotees to participate in Aadi Pooram's porridge and milk abhishekam rituals along with neighbours, friends and relatives.",
    category: "Festival"
  },
  {
    year: "1996",
    date: "21.07.1996",
    description: "A lady from New Jersey, while performing the 108 archanai to Mother's framed photo during a velvi in Maryland (USA), witnessed the miracle of H H. Amma circumambulating the photo in a wet dress where Amma was not present physically.",
    category: "Divine"
  },
  {
    year: "1997",
    date: "1997",
    description: "The Adhiparasakthi Trust donated Rs.51000/- to Mr. M. K. Stalin, the Mayor of Chennai, for flood relief works.",
    category: "Social"
  },
  {
    year: "1997",
    date: "03.03.1997",
    description: "315 teams from 63 centres carried the spiritual lamp to Melmaruvathur for Incarnation day celebrations.",
    category: "Divine"
  },
  {
    year: "1997",
    date: "21.04.1997",
    description: "Mother gave detailed instructions about Aadi Pooram festival and Chitra Pournami was celebrated with 2007 velvis.",
    category: "Divine"
  },
  {
    year: "1997",
    date: "19.06.1997",
    description: "H. H. Adigalar conducted upanayanam (tying of sacred thread), mantropadesha (instruction of mantra) to a Brahmin boy at Chennai and blessed him with an oracle.",
    category: "Divine"
  },
  {
    year: "1998",
    date: "23.06.1998",
    description: "The practice of conducting velvi pooja during New Moon day commenced.",
    category: "Divine"
  },
  {
    year: "1998",
    date: "16.07.1998",
    description: "The marble statue of H. H. Adigalar, sculpted at Jaipur, was brought on a float to Melmaruvathur from Chennai in a procession.",
    category: "Infrastructure"
  },
  {
    year: "1998",
    date: "26.07.1998",
    description: "H. H. Adigalar conducted 108 free marriages during Aadi Pooram.",
    category: "Social"
  },
  {
    year: "1998",
    date: "24.09.1998",
    description: "Railway Minister Mr. Nitish Kumar inaugurated the railway station at Melmaruvathur.",
    category: "Infrastructure"
  },
  {
    year: "1999",
    date: "07.05.1999",
    description: "H. H. Adigalar consecrated Sakthi Peedam at Sugadhasapuram, C.V.Raman Nagar, Bangalore.",
    category: "Infrastructure"
  },
  {
    year: "1999",
    date: "11.08.1999",
    description: "Adhiparasakthi Hospital and Research Centre inaugurated by Mr. M. Karunanidhi, Honourable chief Minister of Tamil Nadu.",
    category: "Infrastructure"
  },
  {
    year: "1999",
    date: "1999",
    description: "The Agricultural College started functioning at Kalavai (Kanchipuram).",
    category: "Education"
  },
  {
    year: "1999",
    date: "02.12.1999",
    description: "Hundreds of blissful devotees at Siddhar Peedam saw Om shape on the moon on the subsequent dawn after the full moon day in the Tamil month of Margazhi.",
    category: "Divine"
  },

  // --- 2000s ---
  {
    year: "2000",
    date: "03.03.2000",
    description: "The Trust donated Rs.10.00 lakh worth materials and 504 bags of rice to those affected by the storm in Orissa.",
    category: "Social"
  },
  {
    year: "2000",
    date: "27.08.2000",
    description: "Amma's spiritual tour to USA covered New York, Pennsylvania, Washington, Florida and Philadelphia states.",
    category: "Divine"
  },
  {
    year: "2001",
    date: "29.01.2001",
    description: "The Trust dispatched through a special train Rs.25 lakh worth relief material, 1008 bags of rice and 400 volunteers to help those affected by the earthquake in Gujarat.",
    category: "Social"
  },
  {
    year: "2001",
    date: "02.03.2001",
    description: "Special pooja with more than one thousand velvis performed for incarnation day. 'Experiences of a Soul', a compilation of historical events at Melmaruvathur by Thirumathi (Mrs.) Adigalar, was released.",
    category: "Divine"
  },
  {
    year: "2001",
    date: "03.03.2001",
    description: "The Post and Telegraphs Department released a special cover and stamp to mark the incarnation day.",
    category: "Social"
  },
  {
    year: "2001",
    date: "07.05.2001",
    description: "Chitra Pournami celebrated with more than 500 velvis.",
    category: "Festival"
  },
  {
    year: "2001",
    date: "05.06.2001",
    description: "Full moon day lamp pooja prayers commenced. Adhiparasakthi Women's Engineering College commenced functioning at Kalavai.",
    category: "Education"
  },
  {
    year: "2001",
    date: "07.07.2001",
    description: "In Amma's presence the broad gauge line conversion work between Chengalpet and Villupuram commenced at Melmaruvathur Railway station.",
    category: "Infrastructure"
  },
  {
    year: "2001",
    date: "30.09.2001",
    description: "First baby (a female) delivered in the new women's wing of the MAPIMS Hospital.",
    category: "Social"
  },
  {
    year: "2001",
    date: "16.12.2001",
    description: "H.H. Adigalar graced the Nature Worship velvi and Sakthi Maalai rituals at Marina beach, Chennai resulting in copious rains, ending a dry spell of two years there.",
    category: "Divine"
  },
  {
    year: "2002",
    date: "26.04.2002",
    description: "Chitra Pournami pooja conducted with 1008 velvis.",
    category: "Festival"
  },
  {
    year: "2003",
    date: "01.01.2003",
    description: "Publication of Sakthi Oli magazine in Kannada and Telugu languages was started.",
    category: "Social"
  },
  {
    year: "2003",
    date: "04.02.2003",
    description: "ACMEC Trust sent 1008 rice bags to drought affected people of Thanjavur district.",
    category: "Social"
  },
  {
    year: "2003",
    date: "30.03.2003",
    description: "MAPIMS Hospital held a free health check up camp at Chennai Central station.",
    category: "Social"
  },
  {
    year: "2003",
    date: "13.04.2003",
    description: "Free Sidda medicine camp conducted.",
    category: "Social"
  },
  {
    year: "2003",
    date: "07.05.2003",
    description: "H. H. Adigalar performed upanayam and mantropadesam to two Brahmin boys at the Ramakrishna Marriage Hall in Coimbatore.",
    category: "Divine"
  },
  {
    year: "2003",
    date: "04.12.2003",
    description: "Social advancement hall opened at Odhiyampet commune, Villianur in Pondicherry.",
    category: "Infrastructure"
  },
  {
    year: "2004",
    date: "01.01.2004",
    description: "English version \"The Oracles of Mother\", a translation from Tamil language, released.",
    category: "Divine"
  },
  {
    year: "2004",
    date: "04.05.2004",
    description: "Chitra Pournami pooja conducted with 1008 velvis, holy pots and lamps.",
    category: "Festival"
  },
  {
    year: "2004",
    date: "16.07.2004",
    description: "Adhiparasakthi Hospital (MAPIMS) gets ISO 9001:2000 accreditation.",
    category: "Social"
  },
  {
    year: "2004",
    date: "29.12.2004",
    description: "ACMEC Trust donated 2500 rice bags and 100000 food packets to tsunami affected.",
    category: "Social"
  },
  {
    year: "2005",
    date: "03.01.2005",
    description: "The Trust donated Rs.15 lakh through Mr.B.Anbazhagan (Amma's elder son) to Ms. J. Jayalalithaa, the Honourable chief minister of Tamil Nadu, for tsunami relief fund.",
    category: "Social"
  },
  {
    year: "2005",
    date: "04.01.2005",
    description: "The Trust donated Rs.5 lakh and 306 rice bags through Mr. G. B. Senthil Kumar (Amma's younger son) for tsunami relief to Mr.Rangasamy, the Honourable chief minister of Pondicherry.",
    category: "Social"
  },
  {
    year: "2005",
    date: "01.03.2005",
    description: "The book \"The Velvi Methods Bestowed by Mother\" in Tamil was released.",
    category: "Divine"
  },
  {
    year: "2005",
    date: "01.04.2005",
    description: "Free Sidda medicine camp conducted along with an exhibition of medicinal herbs.",
    category: "Social"
  },
  {
    year: "2005",
    date: "28.09.2005",
    description: "Adhiparasakthi Dental College started functioning.",
    category: "Education"
  },
  {
    year: "2006",
    date: "01.01.2006",
    description: "Publication of Sakthi Oli magazine in English and Hindi languages was started.",
    category: "Social"
  },
  {
    year: "2007",
    date: "09.09.2007",
    description: "The Melmaruvathur Adhiparasakthi Spiritual Movement (MASM) was established.",
    category: "Divine"
  },
  {
    year: "2008",
    date: "26.02.2008",
    description: "His Holiness Sri Ganapathy Sachidananda Swamigal, Head of the Avadhoodha Dhatta Peedam at Mysore in Karnataka State, visited Siddhar Peedam. Adhiparasakthi Trust organized a social welfare program donating articles worth Rs.1 crore to the downtrodden.",
    category: "Social"
  },
  {
    year: "2008",
    date: "04.07.2008",
    description: "Donations included rickshaws, computers, sewing machines, hearing aids, and uniforms for school children and railway porters.",
    category: "Social"
  },
  {
    year: "2008",
    date: "06.06.2008",
    description: "Centre for mentally challenged children, \"Annai Illam\", set up in Sotthuppakkam.",
    category: "Social"
  },
  {
    year: "2008",
    date: "14.09.2008",
    description: "Adhiparasakthi Medical College (MAPIMS) commenced functioning.",
    category: "Education"
  },
  {
    year: "2009",
    date: "20.02.2009",
    description: "The spiritual lamp lit by Tmt. Adigalar after the velvi at the Sri Bala Murugan temple in Ahmedabad was brought to Melmaruvathur.",
    category: "Divine"
  },
  {
    year: "2009",
    date: "28.06.2009",
    description: "H. H. Adigalar consecrated the Sakthi Peedam at Melamaiyur, Chengalpet.",
    category: "Infrastructure"
  },
  {
    year: "2009",
    date: "03.08.2009",
    description: "Amma consecrated the Pudupalayam Sakthi Peedam.",
    category: "Infrastructure"
  },

  // --- 2010s ---
  {
    year: "2010",
    date: "26.02.2010",
    description: "Silver jubilee function of the Adhiparasakthi Educational Institutions celebrated.",
    category: "Education"
  },
  {
    year: "2010",
    date: "03.03.2010",
    description: "Amma's Incarnation day celebrated. Amma donated articles worth Rs. 1 crore for social welfare activities.",
    category: "Social"
  },
  {
    year: "2010",
    date: "02.06.2010",
    description: "G.B. Public School started functioning.",
    category: "Education"
  },
  {
    year: "2011",
    date: "March 2011",
    description: "On the eve of the 71st incarnation day, Amma donated articles worth Rs.1.5 crore for social welfare activities including motor cycles, computers, and sewing machines.",
    category: "Social"
  },
  {
    year: "2011",
    date: "23.08.2011",
    description: "Amma graced the social service function and donated materials worth Rs. 1 crore to 2784 beneficiaries during his spiritual tour to Dindigul.",
    category: "Social"
  },
  {
    year: "2011",
    date: "30.12.2011",
    description: "6000 passengers on three express trains, stranded at Melmaruvathur station during the Thane storm, were fed and cared for by the Adhiparasakthi Siddhar Peedam.",
    category: "Social"
  },
  {
    year: "2012",
    date: "01.01.2012",
    description: "Amma presented social welfare articles worth Rs.1.50 crores during New Year celebrations, including computers, laptops, and tailoring machines.",
    category: "Social"
  },
  {
    year: "2012",
    date: "13.01.2012",
    description: "ACMEC Trust presented 208 and 800 bags of rice to those affected by Thane storm at Pondicherry and Cuddalore districts respectively.",
    category: "Social"
  },
  {
    year: "2012",
    date: "02.03.2012",
    description: "Amma presented social welfare articles worth Rs. 1 crore to 1251 beneficiaries, including motor cycles, tailoring machines, and agricultural sprayers.",
    category: "Social"
  },
  {
    year: "2013",
    date: "01.01.2013",
    description: "Amma presented social welfare articles worth Rs 1.62 crore to 711 beneficiaries.",
    category: "Social"
  },
  {
    year: "2013",
    date: "12.04.2013",
    description: "Free Siddha medicine camp conducted on Tamil New year day. Rs. 10 lakh worth social welfare articles presented to beneficiaries.",
    category: "Social"
  },
  {
    year: "2013",
    date: "22.06.2013",
    description: "73 cost-free Family Welfare Velvis were performed simultaneously at the homes of 73 financially backward families in Villupuram district.",
    category: "Social"
  },
  {
    year: "2013",
    date: "19.09.2013",
    description: "His Holiness Amma made a four day spiritual tour of Malaysia.",
    category: "Divine"
  },
  {
    year: "2015",
    date: "01.01.2015",
    description: "Devotees from Karnataka state donated articles worth Rs 1.50 crores to various sections of downtrodden people in line with Amma's principle of charity first.",
    category: "Social"
  },
  {
    year: "2015",
    date: "01.02.2015",
    description: "MASM Food Complex was opened by His Holiness Amma.",
    category: "Infrastructure"
  },
  {
    year: "2015",
    date: "20.02.2015",
    description: "Free eye treatment camp including cataract surgery and IOL fitment conducted.",
    category: "Social"
  },
  {
    year: "2015",
    date: "09.02.2015",
    description: "New buildings for Horticulture and Engineering Colleges were opened at Kalavai.",
    category: "Infrastructure"
  },
  {
    year: "2015",
    date: "03.03.2015",
    description: "75th Holy Incarnation Day (pavala vizha) of H. H. Amma was celebrated. Rs. 10 crore worth material were donated for social service activities.",
    category: "Social"
  },
  {
    year: "2015",
    date: "21.11.2015",
    description: "H. H. Amma consecrated the 56th Sakthi Peedam at Ezhanthaiyadi Thattu, Nagercoil.",
    category: "Infrastructure"
  },
  {
    year: "2015",
    date: "Dec 2015",
    description: "Emergency flood relief operations and distribution of aid worth Rs. 1 crore were carried out by ACMEC Trust to the affected people in Chennai, Kanchipuram, Thiruvallur and Cuddalore districts.",
    category: "Social"
  },
  {
    year: "2016",
    date: "03.03.2016",
    description: "Adhiparasakthi Educational Institutions donated material worth Rs. 76 lakh to government high schools and their students on H.H. Amma's incarnation day.",
    category: "Social"
  },
  {
    year: "2016",
    date: "19.03.2016",
    description: "Seventy-six blood donation camps were conducted simultaneously at MAPIMS Charitable Hospital and 75 government hospitals in Tamilnadu.",
    category: "Social"
  },
  {
    year: "2016",
    date: "April 2016",
    description: "Rs. 12 lakh worth aid given by Andhra and Telengana units of MASM on Ugadi day. H. H. Amma distributed aid worth Rs. 15 lakh on Tamil New Year day.",
    category: "Social"
  },
  {
    year: "2016",
    date: "03.06.2016",
    description: "Foundation stone laid for a pilgrim's rest house at Rameswaram by MASM unit.",
    category: "Infrastructure"
  },
  {
    year: "2017",
    date: "02.03.2017",
    description: "Pilgrimage centre at Rameswaram opened by 'His Holiness AMMA' through Video Conference.",
    category: "Infrastructure"
  },
  {
    year: "2017",
    date: "09.08.2017",
    description: "Tamil Nadu Chief Minister and Ministers visited our Sakthi Peedam and got Blessings from 'His Holiness AMMA'.",
    category: "Social"
  },
  {
    year: "2017",
    date: "03.12.2017",
    description: "Old age home building was constructed and opened by 'Thirumathi Amma' at a Village near Melmaruvathur.",
    category: "Infrastructure"
  },
  {
    year: "2017",
    date: "06.12.2017",
    description: "AMMA's 75th Birthday Memorial arch at Sembalur Village in Tanjore District opened by 'Tirumathi Amma'. New School Building at Mannargudi opened by 'Thirumathi Amma'.",
    category: "Infrastructure"
  },
  {
    year: "2018",
    date: "01.01.2018",
    description: "New Year celebrations at Siddhar Peedam. Amma presented materials worth Rs.51.00 Lakhs for Social welfare activities. A book titled \"Amma's oracles\", translated in Kannada language was released.",
    category: "Social"
  },
  {
    year: "2018",
    date: "03.03.2018",
    description: "Melmaruvathur Adhiparasakthi old age home, built at a cost of Rs.55 lakhs at Virudhunagar was inaugurated through video conferencing.",
    category: "Infrastructure"
  },
  {
    year: "2018",
    date: "25.11.2018",
    description: "A 24X7, Multi Speciality, 1000 Bed Hospital was inaugurated at Melmaruvathur by His Holiness Amma.",
    category: "Infrastructure"
  },
  {
    year: "2019",
    date: "01.01.2019",
    description: "Amma presented materials worth Rs.70.00 Lakhs for Social welfare activities. A book on Siddha Medicines translated in Kannada language was released.",
    category: "Social"
  },
  {
    year: "2019",
    date: "26.01.2019",
    description: "His Holiness Amma was conferred with the title of \"Padma Shri\" by His Excellency, the Honourable president of India, in recognition of his outstanding service to humanity.",
    category: "Awards"
  },
  {
    year: "2019",
    date: "12.09.2019",
    description: "A New meditation hall, depicting the glory of Siddha philosophy, was inaugurated by His Excellency, Honourable Governor of Tamilnadu, Mr. Banwarilal Purohit.",
    category: "Infrastructure"
  },
  {
    year: "2019",
    date: "25.11.2019",
    description: "The lake at Melmaruvathur was taken up for environment degradation prevention measure, water body protection and development as a bird sanctuary.",
    category: "Social"
  },

  // --- 2020s ---
  {
    year: "2020",
    date: "04.03.2020",
    description: "A dedicated YouTube channel telecasting the Siddhar peedam programmes and activities in Tamil language was inaugurated, followed by other languages.",
    category: "Social"
  },
  {
    year: "2020",
    date: "01.05.2020",
    description: "A separate hospital wing with 1000 beds was setup with all facilities like ICU, Ventilator, Ambulance and 24x7 care, especially to cater to the affected patients of Covid-19 pandemic.",
    category: "Social"
  },
  {
    year: "2020",
    date: "18.12.2020",
    description: "The Annadhanam hall at the Siddhar Peedam was conferred with the \"BHOG\" (Blissful Hygienic Offering to God) Award by the FSSAI.",
    category: "Awards"
  },
  {
    year: "2020",
    date: "21.12.2020",
    description: "An award for Excellence in Social Service was given to Thirumathi. B. Sridevi Ramesh, CEO of Annai Illam, by the Honorable Chief Minister of Tamilnadu.",
    category: "Awards"
  },
  {
    year: "2021",
    date: "09.05.2021",
    description: "Amma appeared on a first of its kind Live TV programme on YouTube channel, along with Thirumathi Amma, assured devotees that he would guard them from the Covid-19 pandemic.",
    category: "Divine"
  },
  {
    year: "2021",
    date: "2021-2022",
    description: "The separate hospital wing with 300 beds for Covid-19 was approved by the Government of Tamil Nadu as one of the leading frontline hospitals.",
    category: "Social"
  },
  {
    year: "2021",
    date: "June-July 2021",
    description: "Adhiparasakthi worship centre branches at Tuticorin and Bhuvanagiri offered free lunch and drinking water to thousands of people affected by the Covid-19 pandemic.",
    category: "Social"
  },
  {
    year: "2021",
    date: "June-July 2021",
    description: "Amidst multiple challenges, nearly 270,000 poor people in the district of Karur were served free food, siddha medicines, and energy drinks during the Covid-19 pandemic.",
    category: "Social"
  },
  {
    year: "2022",
    date: "Jan 2022",
    description: "A first of its kind \"Digital prayer and Ritual offering\" of Irumudi sakthi siddhar peedam was commenced and operated.",
    category: "Divine"
  }
];