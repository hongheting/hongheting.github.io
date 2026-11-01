/**
 * ============================================================
 * 个人主页内容配置 —— 改这里即可更新站点文案
 * 待用户补充的字段已用「待补充」或空字符串标出
 * ============================================================
 */

// 文献核对助手的访问地址。最终地址仍在确认中，确认后只改这一处。
const REF_CHECKER_URL = "https://ref.jassyhong.top";
// 实验绘图服务的访问地址。
const TOOLS_PLOTTER_URL = "https://tools.jassyhong.top/";
// 期刊筛选助手的访问地址。
const JOURNAL_ADVISOR_URL = "https://journal.jassyhong.top";
// 实验方案审查的访问地址。
const PROTOCOL_AUDIT_URL = "https://protocol.jassyhong.top";
// 防污配方模拟器的访问地址。
const COATING_SIMULATOR_URL = "https://simulator.jassyhong.top";

window.SITE_CONTENT = {
  // —— 基本信息 ——
  nameZh: "洪鹤庭",
  nameEn: "Hong Heting",
  titleZh: "华中科技大学 · 环境工程博士研究生",
  titleEn: "Ph.D. Candidate in Environmental Engineering, Huazhong University of Science and Technology",
  // 待补充：真实头像路径，放在 assets/ 下后改这里，例如 "assets/avatar.jpg"
  avatar: "assets/avatar-placeholder.svg",
  // 待补充：个人简介（中文为主，可附一句英文）
  bioZh:
    "我是洪鹤庭，目前就读于华中科技大学环境工程专业，攻读博士学位。研究聚焦生物污损与防污技术，关注多水域场景下的污损防治，以及功能涂层与物理协同手段（如 UV-C、超声）的结合应用。",
  bioEn:
    "Ph.D. candidate working on marine/aquatic biofouling and antifouling strategies, including gradient functional coatings and UV-C / ultrasound synergistic approaches.",
  // 待补充：一句话 slogan（可选）
  tagline: "生物污损 · 防污涂层 · 多水域应用",

  // —— 研究方向 ——
  researchInterests: [
    {
      titleZh: "生物污损与防污",
      titleEn: "Biofouling & Antifouling",
      descZh: "面向海洋与多水域环境，研究微生物/宏观污损形成机制与防控策略。（待补充：更具体的研究问题与方法）",
    },
    {
      titleZh: "多水域生物污损防治",
      titleEn: "Multi-aquatic Biofouling Control",
      descZh: "探索不同水域条件下污损差异与通用/差异化防治方案。（待补充）",
    },
    {
      titleZh: "CA@MSiO₂ 梯度涂层",
      titleEn: "CA@MSiO₂ Gradient Coatings",
      descZh: "基于梯度结构功能涂层的设计、制备与防污性能评价。（待补充：材料体系与表征手段）",
    },
    {
      titleZh: "UV-C / 超声协同",
      titleEn: "UV-C & Ultrasound Synergy",
      descZh: "结合紫外与超声等物理手段，研究协同防污与工程可行性。（待补充）",
    },
  ],

  // —— 论文列表 ——
  // 每条可含：year, title, authors, venue, doi, pdf, link
  // 题名或 DOI 未知时写「待补充」，不要猜测
  publications: [
    {
      year: "2024",
      title: "Research of Cu-bearing stainless steel with inhibition function of biofouling formation in freshwater environment",
      authors: "Heting Hong, Jinlong Zhao, Yange Yang, Xuezhi Zhang, Chunguang Yang, Ke Yang, Aijuan Deng",
      venue: "Journal of Materials Research and Technology",
      doi: "10.1016/j.jmrt.2023.12.165",
      pdf: "",
      link: "https://doi.org/10.1016/j.jmrt.2023.12.165",
    },
  ],

  // —— 学术会议与报告 ——
  // date / location 留空时页面显示「待补充」；未能从照片确认的不要补写
  // photo：封面（兼容旧字段）；photos：可选图集，项为 {src, caption} 或路径字符串
  // 仅一张图时只显示封面；两张及以上在封面下显示小图廊
  conferences: [
    {
      id: "icc22",
      nameZh: "第22届世界腐蚀大会",
      nameEn: "22nd International Corrosion Congress (ICC 2024)",
      type: "口头报告 · Oral presentation",
      titleZh: "含铜不锈钢在淡水中的防污性能与机制研究",
      titleEn: "Research on the Antifouling Performance and Mechanism of Copper-bearing Stainless Steel in Freshwater",
      summary:
        "对比 316L 与 316L-Cu 不锈钢表面淡水藻类附着过程，阐明铜离子抑制藻类光合作用、削弱多糖粘附与致密生物膜形成的防污机制。",
      date: "2024年10月22–26日",
      location: "中国·西安",
      photo: "assets/conferences/icc22-01.jpg",
      photoCaption: "口头报告现场，讲台标识第22届世界腐蚀大会",
      photos: [
        {
          src: "assets/conferences/icc22-01.jpg",
          caption: "口头报告现场，讲台标识第22届世界腐蚀大会",
        },
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
      nameZh: "第20届国际海洋腐蚀与污损大会",
      nameEn: "The 20th International Congress on Marine Corrosion and Fouling (ICMCF)",
      type: "口头报告 · Oral presentation",
      titleZh: "含铜不锈钢在淡水中的防污性能与机制研究",
      titleEn: "Research on the Antifouling Performance and Mechanism of Copper-bearing Stainless Steel in Freshwater",
      date: "2024年",
      location: "中国·广州",
      photo: "assets/conferences/icmcf20-01.jpg",
      photoCaption: "口头报告现场，讲台与幻灯片标注 ICMCF 2024 Guangzhou",
      photos: [
        {
          src: "assets/conferences/icmcf20-01.jpg",
          caption: "口头报告现场，讲台与幻灯片标注 ICMCF 2024 Guangzhou",
        },
      ],
    },
    {
      id: "ifmcf9",
      nameZh: "2024（第九届）国际海洋防腐与防污论坛",
      nameEn: "2024 The 9th International Forum on Marine Corrosion and Fouling (IFMCF)",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2024年4月17–19日",
      location: "中国·浙江宁波",
      photo: "assets/conferences/ifmcf9-01.jpg",
      photoCaption: "主会场舞台合影，背景幕布为论坛名称与日期地点",
      photos: [
        {
          src: "assets/conferences/ifmcf9-01.jpg",
          caption: "主会场舞台合影，背景幕布为论坛名称与日期地点",
        },
      ],
    },
    {
      id: "marine-fouling-6",
      nameZh: "海洋装备防污防腐材料与技术论坛暨第六届海洋污损防护技术研讨会",
      nameEn: "Marine Equipment Antifouling and Anticorrosion Materials and Technology Forum & The 6th Marine Biofouling Protection Technology Symposium",
      type: "口头报告 · Oral presentation",
      titleZh: "含铜不锈钢对淡水生物污损的影响及防污机制研究",
      titleEn: "",
      date: "",
      location: "",
      photo: "assets/conferences/marine-fouling-6-01.jpg",
      photoCaption: "口头报告：含铜不锈钢对淡水生物污损的影响及防污机制研究",
      photos: [
        {
          src: "assets/conferences/marine-fouling-6-01.jpg",
          caption: "口头报告：含铜不锈钢对淡水生物污损的影响及防污机制研究",
        },
      ],
    },
    {
      id: "cmc2022-2023",
      nameZh: "中国材料大会 2022-2023",
      nameEn: "Chinese Materials Conference 2022-2023 (CMC 2022-2023)",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2022–2023年",
      location: "",
      photo: "assets/conferences/cmc2022-2023-01.jpg",
      photoCaption: "讲台旁领取证书，讲台标注 CMC 2022-2023 中国材料大会",
      photos: [
        {
          src: "assets/conferences/cmc2022-2023-01.jpg",
          caption: "讲台旁领取证书，讲台标注 CMC 2022-2023 中国材料大会",
        },
        {
          src: "assets/conferences/cmc2022-2023-02.jpg",
          caption: "展区背景板可见 CMC / 中国材料大会 / Chinese Materials Conference",
        },
      ],
    },
    {
      id: "icbe-iycbse2023",
      nameZh: "第七届国际仿生工程大会暨国际仿生科学与工程青年会议",
      nameEn: "The 7th International Conference of Bionic Engineering & The International Youth Conference of Bionic Science and Engineering 2023 (ICBE & IYCBSE 2023)",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2023年10月12–15日",
      location: "中国·武汉",
      photo: "assets/conferences/icbe-iycbse2023-01.jpg",
      photoCaption: "主背景幕布合影，含会名、主办方与日期地点",
      photos: [
        {
          src: "assets/conferences/icbe-iycbse2023-01.jpg",
          caption: "主背景幕布合影，含会名、主办方与日期地点",
        },
        {
          src: "assets/conferences/icbe-iycbse2023-02.jpg",
          caption: "分会场听会，背景可见 ICBE & IYCBSE 2023",
        },
      ],
    },
    {
      id: "polymer2023",
      nameZh: "2023年全国高分子学术论文报告会",
      nameEn: "2023 National Polymer Academic Paper Report Conference",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2023年10月13–17日",
      location: "中国·湖北武汉",
      photo: "assets/conferences/polymer2023-01.jpg",
      photoCaption: "户外主背景板合影",
      photos: [
        {
          src: "assets/conferences/polymer2023-01.jpg",
          caption: "户外主背景板合影",
        },
      ],
    },
    {
      id: "icpi2023",
      nameZh: "2023国际光化学与工业会议",
      nameEn: "2023 International Conference on Photochemistry and Industry (ICPI 2023)",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2023年10月10–13日",
      location: "中国·武汉",
      photo: "assets/conferences/icpi2023-01.jpg",
      photoCaption: "科技成果转化高峰论坛背景板合影",
      photos: [
        {
          src: "assets/conferences/icpi2023-01.jpg",
          caption: "科技成果转化高峰论坛背景板合影",
        },
      ],
    },
    {
      id: "astf5",
      nameZh: "第五届抗菌科学与技术论坛",
      nameEn: "ASTF 2023 (5th) Antimicrobial Science and Technology Forum",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2023年",
      location: "",
      photo: "assets/conferences/astf5-01.jpg",
      photoCaption: "会场交流发言，画面角标 ASTF 2023 第5届",
      photos: [
        {
          src: "assets/conferences/astf5-01.jpg",
          caption: "会场交流发言，画面角标 ASTF 2023 第5届",
        },
      ],
    },
    {
      id: "ieee-nems2021",
      nameZh: "第16届IEEE国际纳米/微米工程与分子系统会议",
      nameEn: "The 16th IEEE International Conference on Nano/Micro Engineered and Molecular Systems (IEEE-NEMS 2021)",
      type: "参会",
      titleZh: "",
      titleEn: "",
      date: "2021年（25–29日，月份不确定）",
      location: "",
      photo: "assets/conferences/ieee-nems2021-01.jpg",
      photoCaption: "舞台与大屏合影，大屏为 IEEE-NEMS 2021",
      photos: [
        {
          src: "assets/conferences/ieee-nems2021-01.jpg",
          caption: "舞台与大屏合影，大屏为 IEEE-NEMS 2021",
        },
      ],
    },
    {
      id: "baidu-agent-summit",
      nameZh: "超级智能体大会（百度搭子实训营）",
      nameEn: "Baidu Agent Summit / Super Agent Summit",
      type: "科技活动",
      titleZh: "防污技术宣传海报设计（屏幕演示任务名）",
      titleEn: "",
      date: "2026年10月29日",
      location: "",
      photo: "assets/conferences/baidu-agent-summit-01.jpg",
      photoCaption: "舞台地标与屏幕可见「超级智能体大会」；任务栏日期 2026/10/29",
      photos: [
        {
          src: "assets/conferences/baidu-agent-summit-01.jpg",
          caption: "舞台地标与屏幕可见「超级智能体大会」；任务栏日期 2026/10/29",
        },
      ],
    },
    {
      id: "grok-bot-meetup",
      nameZh: "Grok Bot Meetup",
      nameEn: "Grok Bot Meetup (banner: Presented by SpaceX)",
      type: "科技活动",
      titleZh: "防污行业周报（演示内容）",
      titleEn: "",
      date: "约2026年10月（屏幕周报区间 2026年9月28日–10月12日）",
      location: "",
      photo: "assets/conferences/grok-bot-meetup-01.jpg",
      photoCaption: "讲台发言，左侧横幅 Welcome / Grok Bot Meetup；屏幕为防污行业周报",
      photos: [
        {
          src: "assets/conferences/grok-bot-meetup-01.jpg",
          caption: "讲台发言，左侧横幅 Welcome / Grok Bot Meetup；屏幕为防污行业周报",
        },
      ],
    },
  ],

  // —— 教育 / 经历（可选，待补充）——
  education: [
    {
      period: "至今",
      degree: "博士研究生 · 环境工程",
      school: "华中科技大学",
      schoolEn: "Huazhong University of Science and Technology (HUST)",
    },
    // 待补充：本科 / 硕士经历
  ],

  // —— 联系与简历 ——
  contact: {
    // 待补充：真实邮箱
    email: "your.email@example.com",
    // 待补充：Google Scholar / ORCID / ResearchGate / GitHub 等
    scholar: "",
    orcid: "",
    github: "https://github.com/hongheting",
    // 待补充：简历 PDF 路径，例如 "assets/cv.pdf"
    cv: "",
    // 待补充：所在城市或实验室
    location: "武汉 · 华中科技大学",
  },

  // —— 科研助手 ——
  // 以后新增工具：在 tools 数组追加一项即可。
  // 字段：name、description、button、url；status 可选，有值时显示为角标。
  toolsNote: "更多工具陆续上线",
  tools: [
    {
      name: "文献核对助手",
      description:
        "逐条核对参考文献：DOI 是否对得上、作者/题名/年份是否写错、是否已撤稿、预印本是否有正式版；给出「原稿→正确」对照和证据链接。支持 Word/PDF/文本，免费试用 50 条。",
      button: "开始核对",
      url: REF_CHECKER_URL,
    },
    {
      name: "科研工具 — 电化学 / SEM 一键成图",
      description:
        "将电化学（EIS、OCP 等）与 SEM 数据一键生成可投稿图表，可导出 PNG/PDF，并给出拟合参数。",
      button: "开始出图",
      url: TOOLS_PLOTTER_URL,
    },
    {
      name: "Journal Advisor（期刊筛选助手）",
      description:
        "证据驱动的期刊候选短名单：主题匹配、DOI/ISSN 等核验与投稿指引线索；Beta 内部测试，匹配分≠录用概率。",
      button: "开始筛选",
      url: JOURNAL_ADVISOR_URL,
    },
    {
      name: "ProtocolAudit（实验方案审查）",
      description:
        "上传实验方案（Word/PDF/Markdown），审查假设/分组/对照/终点/统计与常见设计陷阱，给出可改建议；Beta，需访问口令。",
      button: "开始审查",
      url: PROTOCOL_AUDIT_URL,
    },
    {
      name: "防污配方模拟器",
      description:
        "本地优先的防污涂层证据面板：实验室代理表（轨 A）、航线相对污损压力（轨 B）、证据短名单（轨 C），以及公开文献界、商用目录与行业动态。**模拟 ≠ 实测**——每个数值都带诚实标签（实测 / 厂家标称 / 文献界 / 模型估计），绝不把估计写成已测。",
      button: "打开模拟器",
      url: COATING_SIMULATOR_URL,
    },
  ],

  // —— 页脚 ——
  footerNote: "科研助手入口 · Journal Advisor / ProtocolAudit / 防污配方模拟器 / 文献核对 / 出图",
};
