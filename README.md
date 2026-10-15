# 洪鹤庭 · 学术/科研个人主页

纯静态站点（HTML + CSS + 少量原生 JS），适合本地预览，稍后可接任意静态托管与自定义域名。

## 目录结构

```
academic-homepage/
├── index.html          # 页面结构（一般不用改）
├── css/style.css       # 样式
├── js/
│   ├── content.js      # ★ 主要改这里：姓名、简介、方向、论文、联系方式
│   └── main.js         # 把 content.js 渲染到页面（一般不用改）
├── assets/
│   ├── avatar-placeholder.svg   # 头像占位图
│   └── （可放 avatar.jpg、cv.pdf 等）
└── README.md
```

## 本地预览

在本目录下任选一种方式：

```bash
# 方式一：npx serve（需已安装 Node.js）
cd /workspace/academic-homepage
npx --yes serve -l 5173

# 方式二：Python
cd /workspace/academic-homepage
python3 -m http.server 5173
```

浏览器打开：http://127.0.0.1:5173

也可直接用浏览器打开 `index.html`（部分浏览器对本地 `file://` 限制较少；若脚本异常，请用上面的本地服务）。

## 如何改内容（优先改 content.js）

打开 `js/content.js`，按注释修改：

| 字段 | 说明 |
|------|------|
| `nameZh` / `nameEn` | 中英文姓名 |
| `titleZh` / `titleEn` | 身份与机构 |
| `avatar` | 头像路径，例如 `assets/avatar.jpg` |
| `bioZh` / `bioEn` | 个人简介 |
| `tagline` | 一行关键词 |
| `researchInterests` | 研究方向数组 |
| `publications` | 论文列表（year / title / authors / venue / doi / pdf / link） |
| `education` | 教育背景 |
| `contact.email` | 邮箱 |
| `contact.cv` | 简历 PDF 路径，例如 `assets/cv.pdf` |
| `contact.scholar` / `orcid` / `github` | 外链 URL |

把照片放到 `assets/` 后，把 `avatar` 改成对应路径；把简历 PDF 放到 `assets/` 后填写 `contact.cv`。

页面上带「待补充」提示的区块，对应上述尚未填写的字段，补全后可自行删掉 HTML 里的 `placeholder-hint` 提示段落（可选）。

## 已知占位 vs 待你补充

**已用公开事实占位：**

- 姓名：洪鹤庭 / Hong Heting
- 身份：华中科技大学环境工程博士研究生
- 方向：生物污损与防污；多水域生物污损防治；CA@MSiO₂ 梯度涂层；UV-C/超声协同

**请你补充：**

1. 个人照片（建议正方形，放入 `assets/`）
2. 真实邮箱
3. 论文列表（题名、作者、期刊/会议、年份、DOI/PDF）
4. 简历 PDF
5. Google Scholar / ORCID / GitHub（可选）
6. 本科/硕士教育经历（可选）
7. 更完整的研究方向描述与个人简介

## 后续接域名时注意

1. 把整个 `academic-homepage` 目录部署到静态托管（GitHub Pages、Cloudflare Pages、Netlify、Vercel、对象存储静态网站等均可）。
2. 在托管平台绑定你购买的域名，按平台说明配置 DNS（通常是 CNAME 或 A 记录）。
3. 开启 HTTPS（多数平台默认提供）。
4. 部署后检查：头像与 PDF 路径是否仍正确（相对路径即可，不要写成绝对本机路径）。
5. 若改用子路径托管（例如 `username.github.io/repo/`），需确认相对路径仍可用，或按平台要求设置 `base`。

## 技术说明

- 无构建步骤、无框架依赖。
- 文案与结构分离：日常只改 `js/content.js`。
- 样式为现代简洁学术风，移动端自适应。
