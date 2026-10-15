/**
 * ============================================================
 * 个人主页内容配置 —— 改这里即可更新站点文案
 * 待用户补充的字段已用「待补充」或空字符串标出
 * ============================================================
 */
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
      title: "待补充",
      authors: "Heting Hong, et al.",
      venue: "Journal of Materials Research and Technology",
      doi: "待补充",
      pdf: "",
      link: "",
    },
    {
      year: "待补充",
      title: "第二篇论文标题（待补充）",
      authors: "Hong Heting, et al.",
      venue: "期刊 / 会议名称（待补充）",
      doi: "",
      pdf: "",
      link: "",
      note: "占位条目",
    },
  ],

  // —— 学术会议与报告 ——
  // date / location 留空时页面显示「待补充」
  // photo 文件尚未放入时，卡片会在图片加载失败后隐藏图像
  conferences: [
    {
      nameZh: "第22届世界腐蚀大会",
      nameEn: "22nd International Corrosion Congress, ICC",
      type: "口头报告 · Oral presentation",
      titleZh: "含铜不锈钢在淡水中的防污机制",
      titleEn: "Antifouling mechanism of copper-bearing stainless steel in freshwater",
      summary:
        "对比 316L 与 316L-Cu 不锈钢表面淡水藻类附着过程，阐明铜离子抑制藻类光合作用、削弱多糖粘附与致密生物膜形成的防污机制。",
      date: "",
      location: "",
      photo: "assets/conferences/icc22-talk.jpg",
      photoCaption: "",
      relatedPaper: {
        authors: "Heting Hong, et al.",
        title: "待补充",
        venue: "Journal of Materials Research and Technology",
        year: "2024",
        doi: "待补充",
      },
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
    github: "",
    // 待补充：简历 PDF 路径，例如 "assets/cv.pdf"
    cv: "",
    // 待补充：所在城市或实验室
    location: "武汉 · 华中科技大学",
  },

  // —— 页脚 ——
  footerNote: "本站点为本地预览版 · 内容待补充完善",
};
