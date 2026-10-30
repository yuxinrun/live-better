/* ==========================================================================
   app.js — core: chapter registry, theme, language, navigation, home page
   No build step, no dependencies. Open the files with any static server.
   ========================================================================== */
(function () {
  "use strict";

  var LB = (window.LB = window.LB || {});
  LB.chapters = LB.chapters || [];
  LB.pages = LB.pages || {};

  var esc = LB.esc;

  LB.addChapter = function (chapter) {
    LB.chapters.push(chapter);
  };

  LB.groups = [
    { id: "start", zh: "起点", en: "Start here" },
    { id: "body", zh: "身体与精力", en: "Body & energy" },
    { id: "time", zh: "时间、钱与家", en: "Time, money & home" },
    { id: "heart", zh: "内心与关系", en: "Mind & relationships" },
    { id: "life", zh: "工作、孩子与日常", en: "Work, kids & everyday" },
    { id: "last", zh: "底线、养老与幸福", en: "Ground rules & the long run" }
  ];

  var T = {
    "nav.home": { zh: "首页", en: "Home" },
    "nav.chapters": { zh: "目录", en: "Chapters" },
    "nav.sources": { zh: "参考", en: "Sources" },
    "nav.start": { zh: "开始阅读", en: "Start reading" },
    "minutes": { zh: "分钟", en: "min" },
    "minRead": { zh: "阅读约 {n} 分钟", en: "{n} min read" },
    "chaptersCount": { zh: "共 {n} 章", en: "{n} chapters" },
    "allChapters": { zh: "全部章节", en: "All chapters" },
    "search": { zh: "搜索章节…", en: "Search chapters…" },
    "noResult": { zh: "没有找到相关章节，换个词试试。", en: "No chapter found. Try another keyword." },
    "prev": { zh: "上一篇", en: "Previous" },
    "next": { zh: "下一篇", en: "Next" },
    "onThisPage": { zh: "本页目录", en: "On this page" },
    "menu": { zh: "目录", en: "Contents" },
    "close": { zh: "关闭", en: "Close" },
    "theme": { zh: "切换主题", en: "Toggle theme" },
    "lang": { zh: "切换语言", en: "Switch language" },
    "chapter": { zh: "第 {n} 章", en: "Chapter {n}" },
    "ofTotal": { zh: "第 {n} / {total} 章", en: "{n} of {total}" },
    "breadcrumbHome": { zh: "首页", en: "Home" },
    "breadcrumbChapters": { zh: "目录", en: "Contents" },
    "backToTop": { zh: "回到顶部", en: "Back to top" }
  };

  LB.t = LB.t || function (obj, lang) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null ? obj[lang] : obj.zh || "";
  };

  function dict(key, lang) {
    var item = T[key];
    return item ? item[lang] || item.zh : key;
  }

  function fill(tpl, vars) {
    return tpl.replace(/\{(\w+)\}/g, function (m, k) {
      return vars[k] != null ? vars[k] : m;
    });
  }

  /* ------------------------------- settings ------------------------------- */

  var root = document.documentElement;
  var state = {
    lang: localStorage.getItem("lb-lang") || "zh",
    theme: localStorage.getItem("lb-theme") || ""
  };

  function applyTheme(theme) {
    var finalTheme = theme;
    if (!finalTheme) {
      finalTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.setAttribute("data-theme", finalTheme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", finalTheme === "dark" ? "#14120e" : "#faf6ef");
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-label", dict("theme", state.lang));
      btn.setAttribute("title", dict("theme", state.lang));
      var isDark = finalTheme === "dark";
      btn.innerHTML = LB.icon(isDark ? "sunSmall" : "moon");
      btn.setAttribute("aria-pressed", isDark ? "true" : "false");
    }
  }

  function setTheme(theme) {
    state.theme = theme;
    localStorage.setItem("lb-theme", theme);
    applyTheme(theme);
  }

  function toggleTheme() {
    var current = root.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  }

  /* ------------------------------- language ------------------------------- */

  function applyLang(lang) {
    state.lang = lang;
    localStorage.setItem("lb-lang", lang);
    root.setAttribute("lang", lang === "en" ? "en" : "zh-CN");
    root.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-zh]").forEach(function (el) {
      var value = lang === "en" ? el.getAttribute("data-en") || el.getAttribute("data-zh") : el.getAttribute("data-zh");
      if (value == null) return;
      if (el.tagName === "TITLE") el.textContent = value;
      else el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = dict(el.getAttribute("data-i18n"), lang);
    });

    document.querySelectorAll("[data-ph-zh]").forEach(function (el) {
      var value = lang === "en" ? el.getAttribute("data-ph-en") || el.getAttribute("data-ph-zh") : el.getAttribute("data-ph-zh");
      el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-aria-zh]").forEach(function (el) {
      var value = lang === "en" ? el.getAttribute("data-aria-en") || el.getAttribute("data-aria-zh") : el.getAttribute("data-aria-zh");
      el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang-btn") === lang ? "true" : "false");
    });

    // language specific bits of static chrome
    var brandSub = document.querySelector("[data-brand-sub]");
    if (brandSub) brandSub.textContent = lang === "en" ? "a field guide" : "Live better";

    applyTheme(localStorage.getItem("lb-theme") || state.theme);
    renderDrawerNav(lang);

    var page = LB.pages[document.body.getAttribute("data-page")];
    if (page && page.update) page.update(lang);
  }

  function setLang(lang) {
    applyLang(lang);
    document.dispatchEvent(new CustomEvent("lb:lang", { detail: { lang: lang } }));
  }

  /* ------------------------------- chrome --------------------------------- */

  function initTopbar() {
    var bar = document.querySelector(".topbar");
    if (!bar) return;
    var onScroll = function () {
      bar.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var themeBtn = document.querySelector("[data-theme-toggle]");
    if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });

    // highlight the current page in the top nav
    var here = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav a[href]").forEach(function (a) {
      var target = a.getAttribute("href").split("?")[0].split("#")[0];
      if (target === here) a.classList.add("is-active");
    });
  }

  LB.buildChapterNav = function (lang, currentId) {
    return LB.groups
      .map(function (group) {
        var items = LB.chapters.filter(function (c) {
          return c.group === group.id;
        });
        if (!items.length) return "";
        return (
          '<div class="side-group"><p class="side-group__title">' +
          esc(group[lang] || group.zh) +
          "</p>" +
          items
            .map(function (c) {
              return (
                '<a class="side-link' +
                (c.id === currentId ? " is-active" : "") +
                '" href="read.html?c=' +
                c.id +
                '"><span class="side-link__num">' +
                c.num +
                "</span><span>" +
                esc(LB.t(c.title, lang)) +
                "</span></a>"
              );
            })
            .join("") +
          "</div>"
        );
      })
      .join("");
  };

  function renderDrawerNav(lang) {
    var host = document.querySelector("[data-drawer-nav]");
    if (!host) return;
    var current = new URLSearchParams(location.search).get("c");
    host.innerHTML = LB.buildChapterNav(lang, current);
  }

  function initDrawer() {
    var drawer = document.querySelector("[data-drawer]");
    var openBtn = document.querySelector("[data-open-drawer]");
    if (!drawer || !openBtn) return;

    var open = function () {
      drawer.classList.add("is-open");
      document.body.style.overflow = "hidden";
      openBtn.setAttribute("aria-expanded", "true");
    };
    var close = function () {
      drawer.classList.remove("is-open");
      document.body.style.overflow = "";
      openBtn.setAttribute("aria-expanded", "false");
    };

    openBtn.addEventListener("click", open);
    drawer.querySelectorAll("[data-close-drawer]").forEach(function (el) {
      el.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
  }

  var observer;
  var revealFallback;
  function observeReveal() {
    var items = document.querySelectorAll(".reveal:not(.is-in)");
    if (!window.IntersectionObserver) {
      items.forEach(function (el) {
        el.classList.add("is-in");
      });
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
    }
    items.forEach(function (el) {
      observer.observe(el);
    });

    // Safety net: nothing should stay invisible if the observer never fires
    // (printing, snapshotting, unusual browsers).
    if (!revealFallback) {
      revealFallback = window.setTimeout(function () {
        document.querySelectorAll(".reveal:not(.is-in)").forEach(function (el) {
          el.classList.add("is-in");
        });
      }, 2600);
    }
  }

  /* -------------------------------- home ---------------------------------- */

  var homeMounted = false;

  LB.pages.home = {
    mount: function () {
      if (homeMounted) return;
      homeMounted = true;
      var input = document.querySelector("[data-chapter-search]");
      if (input) {
        input.addEventListener("input", function () {
          renderChapterGrid(state.lang, input.value);
        });
      }
    },
    update: function (lang) {
      renderChapterGrid(lang, document.querySelector("[data-chapter-search]") ? document.querySelector("[data-chapter-search]").value : "");
      var count = document.querySelector("[data-chapter-count]");
      if (count) count.textContent = fill(dict("chaptersCount", lang), { n: LB.chapters.length });
      observeReveal();
    }
  };

  function renderChapterGrid(lang, query) {
    var host = document.querySelector("[data-chapter-grid]");
    if (!host) return;
    var q = (query || "").trim().toLowerCase();
    var items = LB.chapters.filter(function (c) {
      if (!q) return true;
      var hay = [LB.t(c.title, "zh"), LB.t(c.title, "en"), LB.t(c.card, "zh"), LB.t(c.card, "en"), c.num]
        .join(" ")
        .toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!items.length) {
      host.innerHTML = '<p class="empty">' + esc(dict("noResult", lang)) + "</p>";
      return;
    }

    host.innerHTML = items
      .map(function (c) {
        return (
          '<a class="chapter-card reveal" href="read.html?c=' +
          c.id +
          '">' +
          '<div class="chapter-card__top"><span class="chapter-card__num">' +
          c.num +
          '</span><span class="chapter-card__icon">' +
          LB.icon(c.icon) +
          "</span></div>" +
          "<h3>" +
          esc(LB.t(c.title, lang)) +
          "</h3><p>" +
          esc(LB.t(c.card, lang)) +
          "</p>" +
          '<div class="chapter-card__meta"><span class="chip">' +
          LB.icon("clockSmall") +
          " " +
          fill(dict("minRead", lang), { n: c.read }) +
          "</span></div></a>"
        );
      })
      .join("");
    observeReveal();
  }

  /* --------------------------------- boot --------------------------------- */

  function boot() {
    // Chapter order is driven by the `num` field, not by which content file
    // happened to load first — new chapters can live in their own file.
    LB.chapters.sort(function (a, b) {
      return parseInt(a.num, 10) - parseInt(b.num, 10);
    });

    applyTheme(state.theme);
    initTopbar();
    initDrawer();

    var pageId = document.body.getAttribute("data-page");
    var page = LB.pages[pageId];
    if (page && page.mount) page.mount();

    applyLang(state.lang);
    observeReveal();

    if (window.matchMedia) {
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
        if (!localStorage.getItem("lb-theme")) applyTheme("");
      });
    }

    window.addEventListener("scroll", function () {
      var toTop = document.querySelector("[data-to-top]");
      if (toTop) toTop.classList.toggle("is-on", window.scrollY > 700);
    }, { passive: true });
    var toTopBtn = document.querySelector("[data-to-top]");
    if (toTopBtn) {
      toTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  LB.dict = dict;
  LB.fill = fill;
  LB.state = state;
  LB.setLang = setLang;
  LB.observeReveal = observeReveal;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
