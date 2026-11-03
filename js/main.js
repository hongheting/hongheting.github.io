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
      node.hidden = false;
      node.removeAttribute("aria-disabled");
      node.classList.remove("is-disabled");
    } else if (fallbackDisabled) {
      // 没有链接时直接隐藏按钮，不再显示灰色不可用按钮
      node.hidden = true;
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

  function normalizeTalkPhotos(item) {
    const list = [];
    function add(src, caption) {
      const path = (src || "").trim();
      if (!path) return;
      for (let i = 0; i < list.length; i++) {
        if (list[i].src === path) {
          if (!list[i].caption && caption) list[i].caption = caption;
          return;
        }
      }
      list.push({ src: path, caption: caption || "" });
    }
    if (Array.isArray(item.photos)) {
      item.photos.forEach(function (photo) {
        if (typeof photo === "string") add(photo, "");
        else if (photo && typeof photo === "object") add(photo.src, photo.caption || "");
      });
    }
    if (item.photo) {
      let idx = -1;
      for (let i = 0; i < list.length; i++) {
        if (list[i].src === item.photo) {
          idx = i;
          break;
        }
      }
      const coverCaption = item.photoCaption || "";
      if (idx === -1) {
        list.unshift({ src: item.photo, caption: coverCaption });
      } else {
        const cover = list.splice(idx, 1)[0];
        if (!cover.caption && coverCaption) cover.caption = coverCaption;
        list.unshift(cover);
      }
    }
    return list;
  }

  function talkAlt(item, photo) {
    if (photo && photo.caption) return photo.caption;
    const bits = [item.nameZh || "学术会议"];
    if (item.type) bits.push(item.type);
    return bits.join(" ");
  }

  // —— Hero ——
  const avatar = el("avatar");
  if (avatar) {
    avatar.src = C.avatar || "assets/avatar-placeholder.svg";
    avatar.alt = (C.nameZh || "") + " 头像";
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

  // —— Patents ——
  const patentRoot = el("patent-list");
  if (patentRoot && Array.isArray(C.patents)) {
    patentRoot.innerHTML = "";
    C.patents.forEach(function (p) {
      const li = document.createElement("li");
      li.className = "pub-item";

      const year = document.createElement("div");
      year.className = "year";
      year.textContent = (p.date || "").slice(0, 4);
      li.appendChild(year);

      const title = document.createElement("p");
      title.className = "pub-title";
      title.textContent = p.title || "";
      li.appendChild(title);

      const meta = document.createElement("p");
      meta.className = "authors";
      meta.appendChild(document.createTextNode("中国专利"));
      if (p.number) {
        meta.appendChild(document.createTextNode(" · "));
        const link = typeof p.link === "string" ? p.link.trim() : "";
        if (/^https?:\/\//i.test(link)) {
          const a = document.createElement("a");
          a.href = link;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = p.number;
          meta.appendChild(a);
        } else {
          meta.appendChild(document.createTextNode(p.number));
        }
      }
      if (p.date) meta.appendChild(document.createTextNode(" · " + p.date));
      li.appendChild(meta);

      patentRoot.appendChild(li);
    });
  }

  // —— Conferences & talks ——
  const talkRoot = el("talk-list");
  if (talkRoot && Array.isArray(C.conferences)) {
    talkRoot.innerHTML = "";
    C.conferences.forEach(function (item) {
      const card = document.createElement("article");
      card.className = "talk-card";
      const photos = normalizeTalkPhotos(item);

      if (!photos.length) {
        card.classList.add("talk-card--no-photo");
      } else {
        const media = document.createElement("div");
        media.className = "talk-media";

        const figure = document.createElement("figure");
        figure.className = "talk-photo";
        const img = document.createElement("img");
        img.alt = talkAlt(item, photos[0]);
        figure.appendChild(img);

        const gallery = document.createElement("div");
        gallery.className = "talk-gallery";
        gallery.setAttribute("role", "group");
        gallery.setAttribute("aria-label", (item.nameZh || "会议") + " 现场照片");
        gallery.hidden = photos.length < 2;
        figure.appendChild(gallery);

        const cap = document.createElement("figcaption");
        cap.hidden = !photos[0].caption;
        cap.textContent = photos[0].caption || "";
        figure.appendChild(cap);
        media.appendChild(figure);
        card.appendChild(media);

        const failed = {};
        const thumbs = [];
        let active = 0;

        function availableCount() {
          let n = 0;
          for (let i = 0; i < photos.length; i++) if (!failed[i]) n++;
          return n;
        }

        function firstAvailable() {
          for (let i = 0; i < photos.length; i++) if (!failed[i]) return i;
          return -1;
        }

        function hideAllMedia() {
          media.hidden = true;
          card.classList.add("talk-card--no-photo");
        }

        function syncGallery() {
          if (media.hidden) return;
          gallery.hidden = availableCount() < 2;
        }

        function show(index) {
          if (failed[index] || !photos[index]) return;
          active = index;
          const photo = photos[index];
          img.alt = talkAlt(item, photo);
          if (img.getAttribute("src") !== photo.src) img.src = photo.src;
          cap.hidden = !photo.caption;
          cap.textContent = photo.caption || "";
          thumbs.forEach(function (btn, i) {
            const on = i === index;
            btn.classList.toggle("is-active", on);
            btn.setAttribute("aria-pressed", on ? "true" : "false");
          });
        }

        function markFailed(index) {
          if (failed[index]) return;
          failed[index] = true;
          if (thumbs[index]) thumbs[index].hidden = true;
          if (active === index) {
            const next = firstAvailable();
            if (next < 0) hideAllMedia();
            else show(next);
          }
          syncGallery();
        }

        img.addEventListener("error", function () {
          const src = img.getAttribute("src");
          for (let i = 0; i < photos.length; i++) {
            if (photos[i].src === src) {
              markFailed(i);
              return;
            }
          }
        });

        photos.forEach(function (photo, i) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "talk-thumb" + (i === 0 ? " is-active" : "");
          btn.setAttribute("aria-pressed", i === 0 ? "true" : "false");
          btn.setAttribute("aria-label", photo.caption || talkAlt(item, photo));
          const timg = document.createElement("img");
          timg.alt = "";
          timg.src = photo.src;
          timg.addEventListener("error", function () {
            markFailed(i);
          });
          btn.appendChild(timg);
          btn.addEventListener("click", function () {
            show(i);
          });
          thumbs.push(btn);
          gallery.appendChild(btn);
        });

        show(0);
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

      if (item.titleZh) {
        const title = document.createElement("h3");
        title.className = "talk-title";
        title.textContent = item.titleZh;
        body.appendChild(title);
      }

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
        // 日期/地点为空时不显示该行，不再显示「待补充」
        if (isPending(pair[1])) return;
        const row = document.createElement("div");
        const dt = document.createElement("dt");
        dt.textContent = pair[0];
        const dd = document.createElement("dd");
        dd.textContent = String(pair[1]).trim();
        row.appendChild(dt);
        row.appendChild(dd);
        facts.appendChild(row);
      });
      if (facts.childNodes.length) body.appendChild(facts);

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

          if (isLinkableDoi(rel.doi)) {
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

  // —— Awards ——
  const awardRoot = el("award-list");
  if (awardRoot && Array.isArray(C.awards)) {
    awardRoot.innerHTML = "";

    function awardSortKey(date) {
      const match = String(date || "").match(/(\d{4})\s*年\s*(\d{1,2})\s*月/);
      if (!match) return 0;
      return Number(match[1]) * 100 + Number(match[2]);
    }

    const awards = C.awards
      .map(function (item, index) {
        return {
          nameZh: item && item.nameZh ? String(item.nameZh) : "",
          date: item && item.date ? String(item.date) : "",
          index: index,
        };
      })
      .filter(function (item) {
        return item.nameZh;
      })
      .sort(function (a, b) {
        const diff = awardSortKey(b.date) - awardSortKey(a.date);
        return diff || a.index - b.index;
      });

    let group = null;
    let names = null;
    awards.forEach(function (item) {
      if (!group || group.dataset.date !== item.date) {
        group = document.createElement("li");
        group.className = "award-group";
        group.dataset.date = item.date;

        const date = document.createElement("div");
        date.className = "award-date";
        date.textContent = item.date;
        group.appendChild(date);

        names = document.createElement("ul");
        names.className = "award-names";
        group.appendChild(names);
        awardRoot.appendChild(group);
      }

      const name = document.createElement("li");
      name.textContent = item.nameZh;
      names.appendChild(name);
    });
  }

  // —— Certificates & English ——
  function appendCredential(root, item) {
    const issuer = item && item.issuer ? String(item.issuer) : "";
    const name = item && item.name ? String(item.name) : "";
    const detail = item && item.detail ? String(item.detail) : "";
    if (!issuer && !name) return;

    const li = document.createElement("li");
    li.className = "credential-item";

    if (issuer) {
      const org = document.createElement("span");
      org.className = "credential-issuer";
      org.textContent = issuer;
      li.appendChild(org);
      const sep = document.createElement("span");
      sep.className = "credential-sep";
      sep.textContent = "——";
      li.appendChild(sep);
    }

    const title = document.createElement("span");
    title.className = "credential-name";
    title.textContent = name;
    li.appendChild(title);

    if (detail) {
      const sep = document.createElement("span");
      sep.className = "credential-sep";
      sep.textContent = "——";
      li.appendChild(sep);
      const score = document.createElement("span");
      score.className = "credential-detail";
      score.textContent = detail;
      li.appendChild(score);
    }

    root.appendChild(li);
  }

  const certificateRoot = el("certificate-list");
  if (certificateRoot && Array.isArray(C.certificates)) {
    certificateRoot.innerHTML = "";
    C.certificates.forEach(function (item) {
      appendCredential(certificateRoot, item);
    });
  }

  const englishRoot = el("english-list");
  if (englishRoot && Array.isArray(C.english)) {
    englishRoot.innerHTML = "";
    C.english.forEach(function (item) {
      appendCredential(englishRoot, item);
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

  const phoneLink = el("contact-phone");
  const phoneItem = el("contact-phone-item");
  if (phoneLink) {
    const phone = (contact.phone || "").trim();
    if (phone) {
      const tel = phone.replace(/[^\d+]/g, "");
      phoneLink.href = "tel:" + tel;
      phoneLink.textContent = phone;
      if (phoneItem) phoneItem.hidden = false;
    } else if (phoneItem) {
      phoneItem.hidden = true;
    }
  }

  const scholar = el("link-scholar");
  const researchgate = el("link-researchgate");
  const orcid = el("link-orcid");
  const github = el("link-github");
  const cvBtn = el("link-cv");
  setHref(scholar, contact.scholar, true);
  setHref(researchgate, contact.researchgate, true);
  setHref(orcid, contact.orcid, true);
  setHref(github, contact.github, true);
  setHref(cvBtn, contact.cv, true);

  // 联系区不再生成「待补充」提示；没有链接的按钮已由 setHref 隐藏

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
