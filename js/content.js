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
      date: "2024年10月22–26日",
      location: "中国西安",
      photo: "assets/conferences/icc22-talk.jpg",
      photoCaption: "",
      relatedPaper: {
        authors: "Heting Hong, Jinlong Zhao, Yange Yang, Xuezhi Zhang, Chunguang Yang, Ke Yang, Aijuan Deng",
        title: "Research of Cu-bearing stainless steel with inhibition function of biofouling formation in freshwater environment",
        venue: "Journal of Materials Research and Technology",
        year: "2024",
        doi: "10.1016/j.jmrt.2023.12.165",
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
  ],

  // —— 页脚 ——
  footerNote: "科研助手入口 · Journal Advisor / ProtocolAudit / 文献核对 / 出图",
};
