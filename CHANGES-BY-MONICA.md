# Monica 修改说明（2026-11-03）

> 后续更正（本人再次确认）：身份是华中科技大学环境科学与工程学院**博士研究生**，不再使用「研究助理」。下文第 0 条已被这条确认取代。

基于 Jassy 提供的简历（Heting_Hong_CV.pdf）和邮箱 jassy.hong@gmail.com 修改。

## 改了什么

0. **身份更正（本人确认）**：本人是华中科技大学环境科学与工程学院**研究助理**，不是博士研究生。已同步更正 content.js 的中英文头衔、中英文简介、教育背景条目，以及 index.html 的默认标题与页面描述，全站不再出现「博士 / Ph.D.」字样

1. **删除所有访客可见的内部提示**
   - index.html 中 4 处 `placeholder-hint` 黄色提示段落全部删除
   - main.js 不再生成联系区「待补充」提示；相关论文缺项也不再显示「待补充」
2. **联系方式**
   - 邮箱改为 jassy.hong@gmail.com（index.html 默认值与 content.js 同步）
   - 简历 PDF 放入 `assets/cv.pdf`，「下载简历」按钮已生效
   - Google Scholar / ORCID 未提供：按钮改为直接隐藏，不再显示灰色不可用按钮（main.js 的 setHref + css `.btn[hidden]`）
3. **论文**：由 1 篇扩充为简历中的 9 篇（按年份倒序），简历未给出的 DOI 未填写、未猜测；第一篇保留原 DOI 链接
4. **新增专利区**：导航与首页新增「专利 / Patents」，含简历中的 3 项中国专利；tools.html 导航同步
5. **教育背景**：新增东北大学机械工程硕士（2021–2024，GPA 3.58）；博士条目补上 2024 年起始
   - 注意：简历中本科阶段同时列有东北大学（2017–2019）和宁夏理工学院（2019–2021）两段且都写 Bachelor，表述不明确，**未列入网站**，请本人确认后再补充
6. **研究方向**：4 条描述删除全部「待补充」字样并改写为完整句子（只使用原简介与论文中已有的信息，未编造新方法/数据）
7. **会议**：日期/地点为空时不再显示该行；IEEE-NEMS 2021 日期据简历中的会议论文改为 2021年4月25–29日
8. **头像**：暂无个人照片，先用姓名首字母头像 `assets/avatar-monogram.svg` 代替带「待补充照片」字样的占位图；有照片后改 content.js 的 `avatar` 字段即可
9. **工具页**：防污配方模拟器描述中的 `**` Markdown 符号已删除
10. 脚本引用版本号更新为 v=20261103a，避免浏览器缓存旧文件

## 未改 / 待确认

- 简历 PDF 内的邮箱仍是 jassyhong@163.com，与网站使用的 jassy.hong@gmail.com 不一致，PDF 本身未改动
- 论文《Can biomimetic superhydrophobic surfaces resist underwater biofouling?》的出处按简历原文写作 "Research and Technology, 28, 2943–2954"，该卷页与第一篇相同，疑似简历笔误，请本人核对
- Google Scholar / ORCID 链接未提供，按钮暂时隐藏
- ref.jassyhong.top（文献核对工具）空白问题不在本项目内，需单独检查该子站

## 部署

把本目录全部文件覆盖到原仓库 `hongheting.github.io` 根目录后提交推送即可（保留 CNAME）。
部署后请强制刷新（Ctrl+F5）检查：邮箱、简历下载、论文 9 篇、专利区、会议不再出现「待补充」。
