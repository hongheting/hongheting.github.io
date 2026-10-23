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

  function isLinkableDoi(value) {
    if (!value || typeof value !== "string") return false;
    const v = value.trim();
    if (!v || v === "待补充") return false;
    return /^https?:\/\//i.test(v) || /^10\.\d{4,}\//.test(v);
  }

  function isPending(value) {
    const v = (value || "").trim();
    return !v || v === "待补充";
  }

  function pendingText(value) {
    return isPending(value) ? "待补充" : String(value).trim();
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
  const page = document.body && document.body.dataset.page;
  if (page === "tools") {
    document.title = "科研助手 · " + (C.nameZh || "Research Tools");
  } else {
    document.title = (C.nameZh || "学术主页") + " · " + (C.nameEn || "Academic Homepage");
  }

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
        if (isLinkableDoi(p.doi)) {
          const a = document.createElement("a");
          const doi = p.doi.trim();
          a.href = /^https?:\/\//i.test(doi) ? doi : "https://doi.org/" + doi;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = "DOI";
          links.appendChild(a);
        } else {
          const span = document.createElement("span");
          span.className = "is-pending";
          span.textContent = "DOI：" + p.doi.trim();
          links.appendChild(span);
        }
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

  // —— Conferences & talks ——
  const talkRoot = el("talk-list");
  if (talkRoot && Array.isArray(C.conferences)) {
    talkRoot.innerHTML = "";
    C.conferences.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "talk-card";

      if (item.photo) {
        const figure = document.createElement("figure");
        figure.className = "talk-photo";
        const img = document.createElement("img");
        img.src = item.photo;
        img.alt = item.photoCaption || ((item.nameZh || "学术会议") + (item.type ? " " + item.type : ""));
        img.addEventListener("error", function () {
          figure.hidden = true;
          card.classList.add("talk-card--no-photo");
        });
        figure.appendChild(img);
        if (item.photoCaption) {
          const cap = document.createElement("figcaption");
          cap.textContent = item.photoCaption;
          figure.appendChild(cap);
        }
        card.appendChild(figure);
      } else {
        card.classList.add("talk-card--no-photo");
      }

      const body = document.createElement("div");
      body.className = "talk-body";

      if (item.type) {
        const type = document.createElement("p");
        type.className = "talk-type";
        type.textContent = item.type;
        body.appendChild(type);
      }

      const name = document.createElement("p");
      name.className = "talk-name";
      name.textContent = item.nameZh || "";
      body.appendChild(name);

      if (item.nameEn) {
        const nameEn = document.createElement("p");
        nameEn.className = "talk-name-en";
        nameEn.textContent = item.nameEn;
        body.appendChild(nameEn);
      }

      const title = document.createElement("h3");
      title.className = "talk-title";
      title.textContent = item.titleZh || "";
      body.appendChild(title);

      if (item.titleEn) {
        const titleEn = document.createElement("p");
        titleEn.className = "talk-title-en";
        titleEn.textContent = item.titleEn;
        body.appendChild(titleEn);
      }

      if (item.summary) {
        const summary = document.createElement("p");
        summary.className = "talk-summary";
        summary.textContent = item.summary;
        body.appendChild(summary);
      }

      const facts = document.createElement("dl");
      facts.className = "talk-facts";
      [
        ["日期", item.date],
        ["地点", item.location],
      ].forEach(function (pair) {
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        dt.textContent = pair[0];
        const dd = document.createElement("dd");
        dd.textContent = pendingText(pair[1]);
        if (isPending(pair[1])) dd.className = "is-pending";
        row.appendChild(dt);
        row.appendChild(dd);
        facts.appendChild(row);
      });
      body.appendChild(facts);

      if (item.relatedPaper) {
        const related = document.createElement("p");
        related.className = "talk-related";
        const label = document.createElement("span");
        label.className = "talk-related-label";
        label.textContent = "相关论文";
        related.appendChild(label);

        const rel = item.relatedPaper;
        const cite = document.createElement("a");
        cite.href = "#publications";
        if (typeof rel === "string") {
          cite.textContent = rel;
          related.appendChild(cite);
        } else {
          const bits = [];
          if (!isPending(rel.title)) bits.push(rel.title);
          if (rel.authors) bits.push(rel.authors);
          if (rel.venue) bits.push(rel.venue);
          if (rel.year) bits.push(String(rel.year));
          cite.textContent = bits.join(", ");
          related.appendChild(cite);

          const pendingBits = [];
          if (isPending(rel.title)) pendingBits.push("题名");
          if (isPending(rel.doi)) pendingBits.push("DOI");
          if (pendingBits.length) {
            const pending = document.createElement("span");
            pending.className = "is-pending";
            pending.textContent = pendingBits.join("、") + "：待补充";
            related.appendChild(pending);
          } else if (isLinkableDoi(rel.doi)) {
            const doiLink = document.createElement("a");
            const doi = rel.doi.trim();
            doiLink.href = /^https?:\/\//i.test(doi) ? doi : "https://doi.org/" + doi;
            doiLink.target = "_blank";
            doiLink.rel = "noopener noreferrer";
            doiLink.textContent = "DOI";
            related.appendChild(doiLink);
          }
        }
        body.appendChild(related);
      }

      card.appendChild(body);
      talkRoot.appendChild(card);
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

  // —— Research tools ——
  const toolRoot = el("tool-list");
  if (toolRoot && Array.isArray(C.tools)) {
    toolRoot.innerHTML = "";
    C.tools.forEach(function (tool) {
      const card = document.createElement("article");
      card.className = "tool-card";

      const head = document.createElement("div");
      head.className = "tool-card-head";

      const name = document.createElement("h3");
      name.textContent = tool.name || "";
      head.appendChild(name);

      if (tool.status) {
        const badge = document.createElement("span");
        badge.className = "tool-badge";
        badge.textContent = tool.status;
        head.appendChild(badge);
      }

      card.appendChild(head);

      const desc = document.createElement("p");
      desc.className = "tool-desc";
      desc.textContent = tool.description || "";
      card.appendChild(desc);

      if (tool.url) {
        const action = document.createElement("a");
        action.className = "btn btn-primary";
        action.href = tool.url;
        action.target = "_blank";
        action.rel = "noopener";
        action.textContent = tool.button || "打开";
        card.appendChild(action);
      }

      toolRoot.appendChild(card);
    });
  }

  const toolsNote = el("tools-note");
  if (toolsNote) {
    if (C.toolsNote) {
      toolsNote.textContent = C.toolsNote;
      toolsNote.hidden = false;
    } else {
      toolsNote.hidden = true;
    }
  }
})();
