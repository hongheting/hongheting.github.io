/**
 * 根据 content.js 渲染页面各区块
 */
(function () {
  const C = window.SITE_CONTENT;
  if (!C) {
    console.error("SITE_CONTENT 未加载，请检查 js/content.js");
    return;
  }

  function el(id) {
    return document.getElementById(id);
  }

  function text(node, value) {
    if (node) node.textContent = value || "";
  }

  function setHref(node, url, fallbackDisabled) {
    if (!node) return;
    if (url) {
      node.href = url;
      node.removeAttribute("aria-disabled");
      node.classList.remove("is-disabled");
    } else if (fallbackDisabled) {
      node.href = "#";
      node.setAttribute("aria-disabled", "true");
      node.classList.add("is-disabled");
    }
  }

  // —— Hero ——
  const avatar = el("avatar");
  if (avatar) {
    avatar.src = C.avatar || "assets/avatar-placeholder.svg";
    avatar.alt = (C.nameZh || "") + " 照片";
  }
  text(el("name-zh"), C.nameZh);
  text(el("name-en"), C.nameEn);
  text(el("title-zh"), C.titleZh);
  text(el("title-en"), C.titleEn);
  text(el("tagline"), C.tagline);
  text(el("bio-zh"), C.bioZh);
  text(el("bio-en"), C.bioEn);
  text(el("nav-brand"), C.nameZh);
  document.title = (C.nameZh || "学术主页") + " · " + (C.nameEn || "Academic Homepage");

  // —— Research ——
  const interestRoot = el("interest-list");
  if (interestRoot && Array.isArray(C.researchInterests)) {
    interestRoot.innerHTML = "";
    C.researchInterests.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "interest-card";
      card.innerHTML =
        "<h3></h3><div class=\"en-label\"></div><p></p>";
      card.querySelector("h3").textContent = item.titleZh || "";
      card.querySelector(".en-label").textContent = item.titleEn || "";
      card.querySelector("p").textContent = item.descZh || "";
      interestRoot.appendChild(card);
    });
  }

  // —— Publications ——
  const pubRoot = el("pub-list");
  if (pubRoot && Array.isArray(C.publications)) {
    pubRoot.innerHTML = "";
    C.publications.forEach(function (p) {
      const li = document.createElement("li");
      li.className = "pub-item";

      const year = document.createElement("div");
      year.className = "year";
      year.textContent = p.year || "";
      li.appendChild(year);

      const title = document.createElement("p");
      title.className = "pub-title";
      title.textContent = p.title || "";
      li.appendChild(title);

      const authors = document.createElement("p");
      authors.className = "authors";
      authors.textContent = p.authors || "";
      li.appendChild(authors);

      const venue = document.createElement("p");
      venue.className = "venue";
      venue.textContent = p.venue || "";
      li.appendChild(venue);

      const links = document.createElement("div");
      links.className = "pub-links";
      if (p.doi) {
        const a = document.createElement("a");
        a.href = p.doi.startsWith("http") ? p.doi : "https://doi.org/" + p.doi;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "DOI";
        links.appendChild(a);
      }
      if (p.pdf) {
        const a = document.createElement("a");
        a.href = p.pdf;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "PDF";
        links.appendChild(a);
      }
      if (p.link) {
        const a = document.createElement("a");
        a.href = p.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "链接";
        links.appendChild(a);
      }
      if (links.childNodes.length) li.appendChild(links);

      if (p.note) {
        const note = document.createElement("div");
        note.className = "pub-note";
        note.textContent = "※ " + p.note;
        li.appendChild(note);
      }

      pubRoot.appendChild(li);
    });
  }

  // —— Education ——
  const eduRoot = el("edu-list");
  if (eduRoot && Array.isArray(C.education)) {
    eduRoot.innerHTML = "";
    C.education.forEach(function (e) {
      const li = document.createElement("li");
      li.className = "edu-item";
      const period = document.createElement("div");
      period.className = "edu-period";
      period.textContent = e.period || "";
      const body = document.createElement("div");
      const degree = document.createElement("p");
      degree.className = "edu-degree";
      degree.textContent = e.degree || "";
      const school = document.createElement("p");
      school.className = "edu-school";
      school.textContent = e.school || "";
      if (e.schoolEn) school.textContent += " · " + e.schoolEn;
      body.appendChild(degree);
      body.appendChild(school);
      li.appendChild(period);
      li.appendChild(body);
      eduRoot.appendChild(li);
    });
  }

  // —— Contact ——
  const contact = C.contact || {};
  const emailLink = el("contact-email");
  if (emailLink) {
    if (contact.email && contact.email !== "your.email@example.com") {
      emailLink.href = "mailto:" + contact.email;
      emailLink.textContent = contact.email;
    } else {
      emailLink.href = "#";
      emailLink.textContent = contact.email || "your.email@example.com";
      emailLink.classList.add("is-placeholder");
    }
  }
  text(el("contact-location"), contact.location || "");

  const scholar = el("link-scholar");
  const orcid = el("link-orcid");
  const github = el("link-github");
  const cvBtn = el("link-cv");
  setHref(scholar, contact.scholar, true);
  setHref(orcid, contact.orcid, true);
  setHref(github, contact.github, true);
  setHref(cvBtn, contact.cv, true);

  // 隐藏空链接按钮旁提示
  const hint = el("contact-hint");
  if (hint) {
    const missing = [];
    if (!contact.email || contact.email === "your.email@example.com") missing.push("邮箱");
    if (!contact.cv) missing.push("简历 PDF");
    if (!contact.scholar) missing.push("Google Scholar");
    if (!contact.orcid) missing.push("ORCID");
    if (!contact.github) missing.push("GitHub");
    if (missing.length) {
      hint.textContent = "待补充：" + missing.join("、") + " —— 请在 js/content.js 的 contact 中填写。";
      hint.hidden = false;
    } else {
      hint.hidden = true;
    }
  }

  text(el("footer-note"), C.footerNote || "");
  const yearEl = el("footer-year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
