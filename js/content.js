/**
 * ============================================================
 * Site content configuration — edit this file to update the site.
 * English version built 2026-11-04 from the live Chinese version.
 * Unknown information is left blank; blank items are not displayed.
 * ============================================================
 */

// Research tool URLs.
const REF_CHECKER_URL = "https://ref.jassyhong.top";
const TOOLS_PLOTTER_URL = "https://tools.jassyhong.top/";
const JOURNAL_ADVISOR_URL = "https://journal.jassyhong.top";
const PROTOCOL_AUDIT_URL = "https://protocol.jassyhong.top";
const COATING_SIMULATOR_URL = "https://simulator.jassyhong.top";

window.SITE_CONTENT = {
  // —— Basic information ——
  nameZh: "Hong Heting",
  nameEn: "",
  titleZh: "PhD Student, School of Environmental Science and Engineering, Huazhong University of Science and Technology",
  titleEn: "",
  avatar: "assets/avatar.jpg",
  bioZh:
    "I am Hong Heting, a PhD student in Resources and Environment at the School of Environmental Science and Engineering, Huazhong University of Science and Technology (HUST), Wuhan, China. My research focuses on biofouling and antifouling technologies: fouling control across multiple aquatic environments, and functional coatings combined with physical approaches such as UV-C and ultrasound.",
  bioEn: "",
  tagline: "Biofouling · Antifouling Coatings · Multi-Aquatic Applications",

  // —— Research interests ——
  researchInterests: [
    {
      titleZh: "Biofouling & Antifouling",
      titleEn: "",
      descZh: "Studying how microbial and macro-organism fouling forms in marine and freshwater environments, how to identify it, and material-level strategies to prevent and control it.",
    },
    {
      titleZh: "Multi-Aquatic Biofouling Control",
      titleEn: "",
      descZh: "Comparing fouling behaviour across seawater, freshwater and other aquatic conditions, and developing control strategies and material evaluation methods that balance generality with scenario-specific differences.",
    },
    {
      titleZh: "CA@MSiO₂ Gradient Coatings",
      titleEn: "",
      descZh: "Design and fabrication of gradient-structured functional coatings, evaluation of their antifouling performance, and the relationship between coating structure and antifouling effect.",
    },
    {
      titleZh: "UV-C & Ultrasound Synergy",
      titleEn: "",
      descZh: "Combining physical methods such as UV-C and ultrasound with functional coatings to study synergistic antifouling effects and their engineering feasibility.",
    },
    {
      titleZh: "Additive Manufacturing",
      titleEn: "",
      descZh: "Preparing functional coatings by laser additive manufacturing for antifouling and surface protection, focusing on how the forming route affects coating antifouling performance.",
    },
  ],

  // —— Funded projects ——
  // Provided by the author (2026-11-04). Titles translated from the Chinese originals.
  projects: {
    hosted: [
      {
        title: "Key Technologies for Meteorological Disaster Early Warning and Forecasting for Major Aquatic Products in Hubei Province",
        program: "Key Fund Project of the Hubei Provincial Meteorological Bureau",
        grant: "2022Z03",
        funding: "CNY 600,000",
      },
    ],
    participated: [
      {
        title: "Failure Mechanisms and Models of Instruments under Harsh Environmental Conditions",
        program: "National Key R&D Program of China",
        grant: "2018YFB2003601",
        funding: "",
      },
      {
        title: "Development of Anticorrosive Coatings with Excellent Recoating Performance",
        program: "National Key R&D Program of China",
        grant: "2019YFC0312103",
        funding: "",
      },
      {
        title: "Key Technologies for Multi-Interface Synergistic Treatment and Ecological Restoration of Lake Water Pollution",
        program: "Key R&D Program of Hubei Province",
        grant: "2026BCB064",
        funding: "",
      },
    ],
  },

  // —— Publications ——
  // Fields: year, title, authors, venue, doi, pdf, link.
  // Compiled from the author's CV (2026-11-03); DOIs not given in the CV are not guessed.
  publications: [
    {
      year: "2025",
      title: "Catalytic Cu-ion regulation in laser-directed energy deposited stainless steel coatings for sustainable surface biofouling mitigation",
      authors: "Hong, H., Chen, L., Zhou, Z., Yang, C., Yang, Y., Zha, L., et al.",
      venue: "npj Materials Degradation, 9(1), 152",
      doi: "10.1038/s41529-025-00699-z",
      pdf: "",
      link: "https://doi.org/10.1038/s41529-025-00699-z",
    },
    {
      year: "2025",
      title: "The Robotic Revolution in Biofouling Management: Disruption, Adaptation, and the Future of Antifouling Industries",
      authors: "Hong, H., Luo, C., & Hong, G.",
      venue: "Regional Studies in Marine Science, 104328",
      doi: "10.1016/j.rsma.2025.104328",
      pdf: "",
      link: "https://doi.org/10.1016/j.rsma.2025.104328",
    },
    {
      year: "2024",
      title: "Research of Cu-bearing stainless steel with inhibition function of biofouling formation in freshwater environment",
      authors: "Heting Hong, Jinlong Zhao, Yange Yang, Xuezhi Zhang, Chunguang Yang, Ke Yang, Aijuan Deng",
      venue: "Journal of Materials Research and Technology, 28, 2943–2954",
      doi: "10.1016/j.jmrt.2023.12.165",
      pdf: "",
      link: "https://doi.org/10.1016/j.jmrt.2023.12.165",
    },
    {
      year: "2024",
      title: "Combatting cyanobacteria: unraveling the potency of 316L-Cu stainless steel in inhibiting Microcystis aeruginosa growth",
      authors: "Hong, H., Zhang, X., Zhao, J., Yang, Y., Yang, C., Yang, K., et al.",
      venue: "Environmental Science and Pollution Research, 31(1), 1644–1653",
      doi: "10.1007/s11356-023-31249-2",
      pdf: "",
      link: "https://doi.org/10.1007/s11356-023-31249-2",
    },
    {
      year: "2024",
      title: "How to identify biofouling species in marine and freshwater",
      authors: "Hong, H., Deng, A., Tang, Y., & Liu, Z.",
      venue: "Biofouling, 40(2), 130–152",
      doi: "10.1080/08927014.2024.2324008",
      pdf: "",
      link: "https://doi.org/10.1080/08927014.2024.2324008",
    },
    {
      year: "2024",
      title: "A review of experimental assessment processes of material resistance to marine and freshwater biofouling",
      authors: "Hong, H., Lv, J., Deng, A., Tang, Y., & Liu, Z.",
      venue: "Journal of Environmental Management, 357, 120766",
      doi: "10.1016/j.jenvman.2024.120766",
      pdf: "",
      link: "https://doi.org/10.1016/j.jenvman.2024.120766",
    },
    {
      year: "2024",
      title: "Can biomimetic superhydrophobic surfaces resist underwater biofouling?",
      authors: "Deng, A., Liu, Z., Tang, Y., & Hong, H.",
      venue: "IOCB 2024 Proceedings, 21",
      doi: "10.3390/proceedings2024107021",
      pdf: "",
      link: "https://doi.org/10.3390/proceedings2024107021",
    },
    {
      year: "2023",
      title: "Progress in marine antifouling coatings: Current status and prospects",
      authors: "Li, L., Hong, H., Cao, J., & Yang, Y. (co-first author)",
      venue: "Coatings, 13(11), 1893",
      doi: "10.3390/coatings13111893",
      pdf: "",
      link: "https://doi.org/10.3390/coatings13111893",
    },
    {
      year: "2021",
      title: "Application and prospect of MEMS technology to geophysics",
      authors: "Hong, H., Ni, L., & Sun, H.",
      venue: "2021 IEEE 16th International Conference on Nano/Micro Engineered and Molecular Systems (NEMS), pp. 1863–1866",
      doi: "10.1109/nems51815.2021.9451455",
      pdf: "",
      link: "https://doi.org/10.1109/nems51815.2021.9451455",
    },
  ],

  // —— Patents ——
  // Chinese patents; titles translated from the Chinese originals.
  // date is the grant date, or the publication date where no grant date applies; descending order.
  patents: [
    { date: "2025-05-06", title: "Apparatus and method for preparing a wear- and corrosion-resistant laser-cladded antifouling coating", number: "CN119040872B", link: "https://patents.google.com/patent/CN119040872B/en" },
    { date: "2024-12-27", title: "Apparatus and method for rapid evaluation of material antifouling performance in a simulated marine environment", number: "CN119198518A", link: "https://patents.google.com/patent/CN119198518A/en" },
    { date: "2024-02-06", title: "Floatable portable box-type water quality detection device", number: "CN114509552B", link: "https://patents.google.com/patent/CN114509552B/en" },
    { date: "2023-05-23", title: "Device for evaluating the static anti-algal performance of materials", number: "CN219068293U", link: "https://patents.google.com/patent/CN219068293U/en" },
    { date: "2023-04-04", title: "Device for evaluating the static anti-algal performance of materials", number: "CN115914843A", link: "https://patents.google.com/patent/CN115914843A/en" },
    { date: "2023-01-13", title: "Experimental device for dynamic simulation of biofouling", number: "CN218298173U", link: "https://patents.google.com/patent/CN218298173U/en" },
    { date: "2023-01-13", title: "Experimental device for biofouling evaluation", number: "CN218298041U", link: "https://patents.google.com/patent/CN218298041U/en" },
    { date: "2022-11-08", title: "Multifunctional synergistic antifouling and cleaning device for sensor probes", number: "CN217766379U", link: "https://patents.google.com/patent/CN217766379U/en" },
    { date: "2022-09-30", title: "Device and method for biofouling evaluation", number: "CN115128072A", link: "https://patents.google.com/patent/CN115128072A/en" },
    { date: "2022-09-16", title: "Multifunctional synergistic antifouling and cleaning device for sensor probes", number: "CN115060866A", link: "https://patents.google.com/patent/CN115060866A/en" },
    { date: "2022-08-02", title: "Modular air and water environment monitoring device for land, water and air use", number: "CN114839333A", link: "https://patents.google.com/patent/CN114839333A/en" },
    { date: "2022-07-29", title: "Modular air and water environment monitoring device for land, water and air use", number: "CN217084921U", link: "https://patents.google.com/patent/CN217084921U/en" },
    { date: "2022-06-28", title: "Experimental device simulating attached organisms for freshwater aquaculture", number: "CN216821334U", link: "https://patents.google.com/patent/CN216821334U/en" },
    { date: "2022-06-14", title: "Top-mounted self-cleaning sterilizing circulation filter device for fish tanks", number: "CN216722746U", link: "https://patents.google.com/patent/CN216722746U/en" },
    { date: "2020-06-26", title: "A novel air-purifying humidifier", number: "CN210861468U", link: "https://patents.google.com/patent/CN210861468U/en" },
    { date: "2020-05-08", title: "Mechanical spring-back compass", number: "CN210478226U", link: "https://patents.google.com/patent/CN210478226U/en" },
    { date: "2020-04-17", title: "An energy-saving cold-type evaporative air humidifier", number: "CN210345754U", link: "https://patents.google.com/patent/CN210345754U/en" },
    { date: "2019-12-31", title: "Air-purifying humidifier (design)", number: "CN305525052S", link: "https://patents.google.com/patent/CN305525052S/en" },
    { date: "2019-12-27", title: "Self-water-supply integrated dehumidifying, purifying and cleaning device", number: "CN110613403A", link: "https://patents.google.com/patent/CN110613403A/en" },
    { date: "2019-11-26", title: "Humidifier (design)", number: "CN305460744S", link: "https://patents.google.com/patent/CN305460744S/en" },
  ],

  // —— Conferences & talks ——
  // Blank date/location fields are not displayed.
  // photo: cover image; photos: optional gallery of {src, caption} or path strings.
  conferences: [
    {
      id: "icc22",
      nameZh: "22nd International Corrosion Congress (ICC 2024)",
      nameEn: "",
      type: "Oral presentation",
      titleZh: "Research on the Antifouling Performance and Mechanism of Copper-bearing Stainless Steel in Freshwater",
      titleEn: "",
      summary:
        "Compared freshwater algal attachment on 316L and 316L-Cu stainless steel surfaces, and elucidated the antifouling mechanism by which copper ions inhibit algal photosynthesis, weaken polysaccharide adhesion and suppress dense biofilm formation.",
      date: "October 22–26, 2024",
      location: "Xi'an, China",
      photo: "assets/conferences/icc22-01.jpg",
      photoCaption: "Oral presentation; the lectern carries the 22nd International Corrosion Congress branding",
      photos: [
        { src: "assets/conferences/icc22-01.jpg", caption: "Oral presentation; the lectern carries the 22nd International Corrosion Congress branding" },
      ],
      relatedPaper: {
        authors: "Heting Hong, Jinlong Zhao, Yange Yang, Xuezhi Zhang, Chunguang Yang, Ke Yang, Aijuan Deng",
        title: "Research of Cu-bearing stainless steel with inhibition function of biofouling formation in freshwater environment",
        venue: "Journal of Materials Research and Technology",
        year: "2024",
        doi: "10.1016/j.jmrt.2023.12.165",
      },
    },
    {
      id: "icmcf20",
      nameZh: "The 20th International Congress on Marine Corrosion and Fouling (ICMCF)",
      nameEn: "",
      type: "Oral presentation",
      titleZh: "Research on the Antifouling Performance and Mechanism of Copper-bearing Stainless Steel in Freshwater",
      titleEn: "",
      date: "2024",
      location: "Guangzhou, China",
      photo: "assets/conferences/icmcf20-01.jpg",
      photoCaption: "Oral presentation; lectern and slides marked ICMCF 2024 Guangzhou",
      photos: [
        { src: "assets/conferences/icmcf20-01.jpg", caption: "Oral presentation; lectern and slides marked ICMCF 2024 Guangzhou" },
      ],
    },
    {
      id: "ifmcf9",
      nameZh: "2024 The 9th International Forum on Marine Corrosion and Fouling (IFMCF)",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "April 17–19, 2024",
      location: "Ningbo, Zhejiang, China",
      photo: "assets/conferences/ifmcf9-01.jpg",
      photoCaption: "Group photo on the main stage; the backdrop shows the forum name, dates and venue",
      photos: [
        { src: "assets/conferences/ifmcf9-01.jpg", caption: "Group photo on the main stage; the backdrop shows the forum name, dates and venue" },
      ],
    },
    {
      id: "marine-fouling-6",
      nameZh: "Marine Equipment Antifouling and Anticorrosion Materials and Technology Forum & The 6th Marine Biofouling Protection Technology Symposium",
      nameEn: "",
      type: "Oral presentation",
      titleZh: "Effects of Copper-bearing Stainless Steel on Freshwater Biofouling and Its Antifouling Mechanism",
      titleEn: "",
      date: "",
      location: "",
      photo: "assets/conferences/marine-fouling-6-01.jpg",
      photoCaption: "Oral presentation: effects of copper-bearing stainless steel on freshwater biofouling and its antifouling mechanism",
      photos: [
        { src: "assets/conferences/marine-fouling-6-01.jpg", caption: "Oral presentation: effects of copper-bearing stainless steel on freshwater biofouling and its antifouling mechanism" },
      ],
    },
    {
      id: "cmc2022-2023",
      nameZh: "Chinese Materials Conference 2022-2023 (CMC 2022-2023)",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "2022–2023",
      location: "",
      photo: "assets/conferences/cmc2022-2023-01.jpg",
      photoCaption: "Receiving a certificate by the lectern marked CMC 2022-2023 / Chinese Materials Conference",
      photos: [
        { src: "assets/conferences/cmc2022-2023-01.jpg", caption: "Receiving a certificate by the lectern marked CMC 2022-2023 / Chinese Materials Conference" },
        { src: "assets/conferences/cmc2022-2023-02.jpg", caption: "Exhibition backdrop with CMC / Chinese Materials Conference branding" },
      ],
    },
    {
      id: "icbe-iycbse2023",
      nameZh: "The 7th International Conference of Bionic Engineering & The International Youth Conference of Bionic Science and Engineering 2023 (ICBE & IYCBSE 2023)",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "October 12–15, 2023",
      location: "Wuhan, China",
      photo: "assets/conferences/icbe-iycbse2023-01.jpg",
      photoCaption: "Group photo at the main backdrop showing the conference name, organisers, dates and venue",
      photos: [
        { src: "assets/conferences/icbe-iycbse2023-01.jpg", caption: "Group photo at the main backdrop showing the conference name, organisers, dates and venue" },
        { src: "assets/conferences/icbe-iycbse2023-02.jpg", caption: "Attending a parallel session; ICBE & IYCBSE 2023 branding in the background" },
      ],
    },
    {
      id: "polymer2023",
      nameZh: "2023 National Polymer Academic Paper Report Conference",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "October 13–17, 2023",
      location: "Wuhan, Hubei, China",
      photo: "assets/conferences/polymer2023-01.jpg",
      photoCaption: "Group photo at the outdoor main backdrop",
      photos: [
        { src: "assets/conferences/polymer2023-01.jpg", caption: "Group photo at the outdoor main backdrop" },
      ],
    },
    {
      id: "icpi2023",
      nameZh: "2023 International Conference on Photochemistry and Industry (ICPI 2023)",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "October 10–13, 2023",
      location: "Wuhan, China",
      photo: "assets/conferences/icpi2023-01.jpg",
      photoCaption: "Group photo at the backdrop of the technology-transfer summit forum",
      photos: [
        { src: "assets/conferences/icpi2023-01.jpg", caption: "Group photo at the backdrop of the technology-transfer summit forum" },
      ],
    },
    {
      id: "astf5",
      nameZh: "ASTF 2023 (5th) Antimicrobial Science and Technology Forum",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "2023",
      location: "",
      photo: "assets/conferences/astf5-01.jpg",
      photoCaption: "Speaking during a session exchange; ASTF 2023 (5th) logo visible in the corner",
      photos: [
        { src: "assets/conferences/astf5-01.jpg", caption: "Speaking during a session exchange; ASTF 2023 (5th) logo visible in the corner" },
      ],
    },
    {
      id: "ieee-nems2021",
      nameZh: "The 16th IEEE International Conference on Nano/Micro Engineered and Molecular Systems (IEEE-NEMS 2021)",
      nameEn: "",
      type: "Attended",
      titleZh: "",
      titleEn: "",
      date: "April 25–29, 2021",
      location: "",
      photo: "assets/conferences/ieee-nems2021-01.jpg",
      photoCaption: "Group photo on stage; the main screen shows IEEE-NEMS 2021",
      photos: [
        { src: "assets/conferences/ieee-nems2021-01.jpg", caption: "Group photo on stage; the main screen shows IEEE-NEMS 2021" },
      ],
    },
    {
      id: "baidu-agent-summit",
      nameZh: "Baidu Agent Summit / Super Agent Summit",
      nameEn: "",
      type: "Tech event",
      titleZh: "Antifouling Technology Promotional Poster Design (demo task title shown on screen)",
      titleEn: "",
      date: "October 29, 2026",
      location: "",
      photo: "assets/conferences/baidu-agent-summit-01.jpg",
      photoCaption: "Stage landmark and screen showing the Super Agent Summit; taskbar date 2026/10/29",
      photos: [
        { src: "assets/conferences/baidu-agent-summit-01.jpg", caption: "Stage landmark and screen showing the Super Agent Summit; taskbar date 2026/10/29" },
      ],
    },
    {
      id: "grok-bot-meetup",
      nameZh: "Grok Bot Meetup (banner: Presented by SpaceX)",
      nameEn: "",
      type: "Tech event",
      titleZh: "Antifouling Industry Weekly Brief (demo content)",
      titleEn: "",
      date: "c. October 2026 (weekly brief on screen covers September 28 – October 12, 2026)",
      location: "",
      photo: "assets/conferences/grok-bot-meetup-01.jpg",
      photoCaption: "Speaking at the lectern; Welcome / Grok Bot Meetup banner on the left, antifouling industry weekly brief on screen",
      photos: [
        { src: "assets/conferences/grok-bot-meetup-01.jpg", caption: "Speaking at the lectern; Welcome / Grok Bot Meetup banner on the left, antifouling industry weekly brief on screen" },
      ],
    },
  ],

  // —— Education & experience ——
  education: [
    {
      period: "2024 – Present",
      degree: "PhD Student · Resources and Environment, School of Environmental Science and Engineering",
      school: "Huazhong University of Science and Technology (HUST)",
      schoolEn: "",
    },
    {
      period: "2021 – 2024",
      degree: "M.S. · Mechanical Engineering (GPA 3.58)",
      school: "Northeastern University, Shenyang",
      schoolEn: "",
    },
  ],

  // —— Honors & awards ——
  // Listed from the author's records; duplicates of the same name and date are kept once.
  // Displayed in descending date order.
  awards: [
    { nameZh: "2nd Place, 2021 Winter Research Poster Competition, North Carolina State University", date: "Mar 2021" },
    { nameZh: "Third Prize, China National Finals, 14th iCAN International Innovation & Entrepreneurship Competition", date: "Dec 2020" },
    { nameZh: "Second Prize, Northwest Regional Selection, 14th iCAN International Innovation & Entrepreneurship Competition", date: "Nov 2020" },
    { nameZh: "Silver Award, Higher-Education Main Track, 6th China International College Students' 'Internet+' Innovation and Entrepreneurship Competition", date: "Sep 2020" },
    { nameZh: "Bronze Award, 2020 'Challenge Cup' Regional College Student Entrepreneurship Plan Competition", date: "Sep 2020" },
    { nameZh: "Outstanding Camper, 2019 Excellent College Student Summer Academic Camp, School of Mechanical Engineering, Southwest Jiaotong University", date: "Aug 2020" },
    { nameZh: "Outstanding Camper, 2020 Summer Camp for Prospective Graduate Students, School of Electromechanical Engineering, Guangdong University of Technology", date: "Aug 2020" },
    { nameZh: "Third Prize, National Finals, 12th National 3D Digital Innovation Design Competition", date: "Dec 2019" },
    { nameZh: "Third Prize, Ningxia Division, 12th National 3D Digital Innovation Design Competition", date: "Oct 2019" },
    { nameZh: "Grand Prize, Ningxia Division, 12th National 3D Digital Innovation Design Competition", date: "Oct 2019" },
    { nameZh: "Second Prize, National Finals, 2019 Digital Technology Culture Festival & National 3D Competition 12th Anniversary Elite League", date: "Sep 2019" },
    { nameZh: "Excellence Award, 2019 National College Innovation English Challenge", date: "Sep 2019" },
    { nameZh: "Bronze Award, Higher-Education Main Track, 5th 'Internet+' Innovation and Entrepreneurship Competition", date: "Sep 2019" },
    { nameZh: "Grand Prize, Ningxia Division, 2019 Digital Technology Culture Festival & National 3D Competition 12th Anniversary Elite League", date: "Jul 2019" },
    { nameZh: "Second Prize, 1st 'Yida Cup' SOLIDWORKS Design Competition", date: "Jul 2019" },
    { nameZh: "First Prize, Innovation Cup National Design Competition", date: "Jun 2019" },
    { nameZh: "First Prize, Huaxia Cup Science and Technology Innovation Competition", date: "Jun 2019" },
    { nameZh: "First Prize, College Division, Huachuang Cup National Science and Technology Competition", date: "Jun 2019" },
    { nameZh: "Grand Prize, National Finals, 3rd National College Environmental Knowledge Competition (2019)", date: "Jun 2019" },
    { nameZh: "Third Prize, 2019 National English Competition for College Students (NECCS)", date: "May 2019" },
    { nameZh: "First Prize, Ningxia Division, 11th National 3D Digital Innovation Design Competition", date: "Oct 2018" },
    { nameZh: "Excellence Award, 2nd National College Environmental Knowledge Competition", date: "Apr 2018" },
    { nameZh: "HILIP's Golden Ears Passed", date: "Oct 2017" },
  ],

  // —— Certificates & English proficiency ——
  // Only the records provided by the author; no scores, levels or certificates are added.
  certificates: [
    { issuer: "National Computer Rank Examination (NCRE), China", name: "Level 2 — Python" },
    { issuer: "National 3D Digital Technology Application Certification, China", name: "3Dv6" },
    { issuer: "Alibaba Cloud Certification", name: "Apsara Clouder — Cloud Security Specialist" },
    { issuer: "National Standardized Examination Alliance Certification, China", name: "Mechanical CAD Design Engineer, Advanced Level" },
    { issuer: "National Vocational Qualification Certificate, PRC", name: "Lathe Operator" },
    { issuer: "Dassault Systèmes", name: "Professional in Mechanical Design" },
  ],
  english: [
    { name: "College English Test Band 4 (CET-4)", detail: "Score: 509; Speaking: B" },
    { name: "College English Test Band 6 (CET-6)", detail: "Score: 504; Speaking: B" },
    { name: "IELTS 6.5" },
  ],

  // —— Contact & CV ——
  contact: {
    email: "jassy.hong@gmail.com",
    phone: "+86 17607144929",
    scholar: "https://scholar.google.com/citations?user=LtcmU_gAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Heting-Hong-2",
    orcid: "https://orcid.org/0000-0002-7679-4033",
    github: "https://github.com/hongheting",
    youtube: "https://www.youtube.com/@CleanSurfaceLab",
    x: "https://x.com/jassyhong1",
    cv: "assets/cv.pdf",
    location: "Wuhan · Huazhong University of Science and Technology",
  },

  // —— Research tools ——
  // To add a tool later, append one entry to the tools array.
  // Fields: name, description, button, url; optional status shows as a badge.
  toolsNote: "More tools coming soon",
  tools: [
    {
      name: "Reference Checker",
      description:
        "Checks references one by one: whether the DOI actually matches, whether authors, title and year are correct, whether the paper has been retracted, and whether a preprint already has a published version — with a 'manuscript → corrected' comparison and evidence links. Supports Word/PDF/text; free trial of 50 entries.",
      button: "Start checking",
      url: REF_CHECKER_URL,
    },
    {
      name: "Research Tools — One-click Electrochemistry / SEM Figures",
      description:
        "Turns electrochemistry (EIS, OCP, etc.) and SEM data into publication-ready figures in one click, with PNG/PDF export and fitting parameters.",
      button: "Generate figures",
      url: TOOLS_PLOTTER_URL,
    },
    {
      name: "Journal Advisor",
      description:
        "An evidence-driven shortlist of candidate journals: topic matching, DOI/ISSN verification and submission-guideline clues. Beta (internal testing); the match score is not an acceptance probability.",
      button: "Find journals",
      url: JOURNAL_ADVISOR_URL,
    },
    {
      name: "ProtocolAudit",
      description:
        "Upload a research protocol (Word/PDF/Markdown) for a review of hypotheses, grouping, controls, endpoints, statistics and common design pitfalls, with actionable suggestions. Beta; access code required.",
      button: "Start review",
      url: PROTOCOL_AUDIT_URL,
    },
    {
      name: "Antifouling Coating Simulator",
      description:
        "A local-first evidence dashboard for antifouling coatings: a laboratory proxy table (Track A), route-based relative fouling pressure (Track B) and an evidence shortlist (Track C), plus published literature bounds, commercial catalogues and industry news. Simulation ≠ measurement — every value carries an honesty label (measured / manufacturer-stated / literature bound / model estimate), and estimates are never presented as measurements.",
      button: "Open simulator",
      url: COATING_SIMULATOR_URL,
    },
  ],

  // —— Footer ——
  footerNote: "Research tools · Journal Advisor / ProtocolAudit / Antifouling Coating Simulator / Reference Checker / Figure Plotter",
};
