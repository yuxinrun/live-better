/* ==========================================================================
   reader.js — chapter page: sidebar, article blocks, on-page TOC, pager
   ========================================================================== */
(function () {
  "use strict";

  var LB = (window.LB = window.LB || {});
  var esc = LB.esc;

  function inline(text) {
    return esc(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[(.+?)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }

  function pick(obj, lang) {
    if (obj == null) return [];
    return obj[lang] || obj.zh || [];
  }

  function blockHTML(block, lang, index) {
    switch (block.t) {
      case "p":
        return "<p>" + inline(LB.t(block, lang)) + "</p>";

      case "h":
        return '<h2 id="sec-' + index + '">' + inline(LB.t(block, lang)) + "</h2>";

      case "ul":
        return "<ul>" + pick(block, lang).map(function (li) {
          return "<li>" + inline(li) + "</li>";
        }).join("") + "</ul>";

      case "ol":
        return "<ol>" + pick(block, lang).map(function (li) {
          return "<li>" + inline(li) + "</li>";
        }).join("") + "</ol>";

      case "tip":
        return (
          '<div class="tipbox">' +
          '<div class="tipbox__head">' + LB.icon("spark") +
          '<span>' + esc(lang === "en" ? "Do it today" : "今天就做") + "</span></div>" +
          (block.title ? "<h3>" + inline(LB.t(block.title, lang)) + "</h3>" : "") +
          "<ul>" + pick(block, lang).map(function (li) {
            return "<li>" + inline(li) + "</li>";
          }).join("") + "</ul></div>"
        );

      case "myth":
        return (
          '<div class="mythbox">' +
          '<div class="mythbox__head">' + LB.icon("warn") +
          '<span>' + esc(lang === "en" ? "Common myths" : "常见误区") + "</span></div>" +
          (block.items || []).map(function (item) {
            return (
              '<div class="myth-item">' +
              '<div class="myth-item__bad">' + inline(LB.t(item.bad, lang)) + "</div>" +
              '<div class="myth-item__good">' + inline(LB.t(item.good, lang)) + "</div>" +
              "</div>"
            );
          }).join("") + "</div>"
        );

      case "quote":
        return (
          '<blockquote class="pull-quote"><p>' + inline(LB.t(block, lang)) + "</p>" +
          (block.by ? "<cite>" + esc(LB.t(block.by, lang)) + "</cite>" : "") +
          "</blockquote>"
        );

      case "stats":
        return (
          '<div class="statcards">' + (block.items || []).map(function (item) {
            return (
              '<div class="statcard"><div class="statcard__v">' + esc(LB.t(item.v, lang)) +
              '</div><div class="statcard__k">' + esc(LB.t(item.label, lang)) + "</div></div>"
            );
          }).join("") + "</div>"
        );

      case "table":
        return (
          '<div class="table-wrap"><table><thead><tr>' +
          pick(block.head, lang).map(function (h) { return "<th>" + inline(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          (block.rows || []).map(function (row) {
            return "<tr>" + pick(row, lang).map(function (cell) {
              return "<td>" + inline(cell) + "</td>";
            }).join("") + "</tr>";
          }).join("") +
          "</tbody></table></div>"
        );

      case "checklist":
        return '<ul class="checklist">' + pick(block, lang).map(function (li) {
          return "<li>" + inline(li) + "</li>";
        }).join("") + "</ul>";

      default:
        if (block.kind) return LB.renderFigure(block, lang);
        return "";
    }
  }

  function chapterIndex(id) {
    for (var i = 0; i < LB.chapters.length; i++) {
      if (LB.chapters[i].id === id) return i;
    }
    return -1;
  }

  var currentIdx = 0;

  function render(lang) {
    var params = new URLSearchParams(location.search);
    var id = params.get("c") || (LB.chapters[0] && LB.chapters[0].id);
    var idx = chapterIndex(id);
    if (idx < 0) idx = 0;
    currentIdx = idx;
    var chapter = LB.chapters[idx];
    if (!chapter) return;

    // sidebar
    var sideHost = document.querySelector("[data-sidebar]");
    if (sideHost) sideHost.innerHTML = LB.buildChapterNav(lang, chapter.id);

    // head
    document.title = LB.t(chapter.title, lang) + " · " + (lang === "en" ? "Live Better" : "活得更好");

    var head = document.querySelector("[data-chapter-head]");
    if (head) {
      head.innerHTML =
        '<div class="chapter-head__num">' + chapter.num + "</div>" +
        '<span class="eyebrow"><span class="eyebrow__dot"></span>' +
        esc(LB.t(chapter.kicker, lang)) + "</span>" +
        "<h1>" + esc(LB.t(chapter.title, lang)) + "</h1>" +
        '<p class="lede">' + esc(LB.t(chapter.lede, lang)) + "</p>" +
        '<div class="chapter-meta">' +
        '<span>' + LB.icon("book") + esc(LB.fill(LB.dict("ofTotal", lang), { n: chapter.num, total: String(LB.chapters.length).padStart(2, "0") })) + "</span>" +
        '<span>' + LB.icon("clockSmall") + esc(LB.fill(LB.dict("minRead", lang), { n: chapter.read })) + "</span>" +
        "</div>";
    }

    var take = document.querySelector("[data-takeaway]");
    if (take) {
      take.innerHTML = chapter.takeaway
        ? LB.icon("bulb") + "<p>" + inline(LB.t(chapter.takeaway, lang)) + "</p>"
        : "";
      take.style.display = chapter.takeaway ? "" : "none";
    }

    // body
    var body = document.querySelector("[data-article-body]");
    if (body) {
      body.innerHTML = chapter.blocks.map(function (b, i) {
        return blockHTML(b, lang, i);
      }).join("");
    }

    // on-page toc
    var toc = document.querySelector("[data-toc]");
    if (toc) {
      var headings = chapter.blocks
        .map(function (b, i) {
          return b.t === "h" ? { id: "sec-" + i, text: LB.t(b, lang) } : null;
        })
        .filter(Boolean);
      toc.innerHTML = headings.length
        ? '<p class="toc-rail__title">' + esc(LB.dict("onThisPage", lang)) + "</p>" +
          headings.map(function (h) {
            return '<a href="#' + h.id + '">' + esc(h.text) + "</a>";
          }).join("")
        : "";
    }

    // pager
    var pager = document.querySelector("[data-pager]");
    if (pager) {
      var prev = LB.chapters[idx - 1];
      var next = LB.chapters[idx + 1];
      var card = function (c, isNext) {
        if (!c) return '<span class="pager__spacer"></span>';
        return (
          '<a class="' + (isNext ? "is-next" : "") + '" href="read.html?c=' + c.id + '">' +
          '<div class="pager__dir">' +
          (isNext ? "" : LB.icon("arrow")) +
          "<span>" + esc(LB.dict(isNext ? "next" : "prev", lang)) + "</span>" +
          (isNext ? LB.icon("arrow") : "") +
          "</div>" +
          '<div class="pager__title">' + esc(LB.t(c.title, lang)) + "</div></a>"
        );
      };
      pager.innerHTML = card(prev, false) + card(next, true);
    }

    // breadcrumb
    var crumb = document.querySelector("[data-crumb-current]");
    if (crumb) crumb.textContent = LB.t(chapter.title, lang);

    LB.observeReveal();
    initScrollSpy();
    updateProgress();
  }

  /* ------------------------------ scroll spy ------------------------------ */

  var spyObserver;
  function initScrollSpy() {
    var rail = document.querySelector("[data-toc]");
    if (!rail || !window.IntersectionObserver) return;
    var links = Array.prototype.slice.call(rail.querySelectorAll("a"));
    var headings = links
      .map(function (a) {
        return document.getElementById(a.getAttribute("href").slice(1));
      })
      .filter(Boolean);
    if (!headings.length) return;

    if (spyObserver) spyObserver.disconnect();
    spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
          });
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    headings.forEach(function (h) {
      spyObserver.observe(h);
    });
  }

  /* ------------------------------- progress ------------------------------- */

  function updateProgress() {
    var bar = document.querySelector(".reader-progress");
    if (!bar) return;
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
  }

  LB.pages.reader = {
    mount: function () {
      window.addEventListener("scroll", updateProgress, { passive: true });
      window.addEventListener("resize", updateProgress);
    },
    update: function (lang) {
      render(lang);
    }
  };
})();
