/* ==========================================================================
   charts.js — theme-aware, language-aware figures drawn with SVG / CSS
   Every figure is described by plain data, so both languages share one shape.
   ========================================================================== */
(function () {
  "use strict";

  var LB = (window.LB = window.LB || {});

  // Bootstrap the registry here: charts.js is the first script on every page,
  // so content files can register chapters before app.js runs.
  LB.chapters = LB.chapters || [];
  LB.pages = LB.pages || {};
  if (!LB.addChapter) {
    LB.addChapter = function (chapter) {
      LB.chapters.push(chapter);
    };
  }

  var COLORS = {
    accent: "var(--accent)",
    sage: "var(--sage)",
    gold: "var(--gold)",
    ink: "var(--ink)",
    muted: "var(--muted)"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function t(obj, lang) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null ? obj[lang] : obj.zh || "";
  }

  function shell(block, lang, body, extraClass) {
    var title = block.title ? '<div class="figure__title">' + esc(t(block.title, lang)) + "</div>" : "";
    var sub = block.sub ? '<div class="figure__sub">' + esc(t(block.sub, lang)) + "</div>" : "";
    var cap = block.cap ? '<figcaption class="figure__cap">' + esc(t(block.cap, lang)) + "</figcaption>" : "";
    return (
      '<figure class="figure ' +
      (extraClass || "") +
      '">' +
      title +
      sub +
      body +
      cap +
      "</figure>"
    );
  }

  /* ------------------------------- line chart ------------------------------ */

  function line(block, lang) {
    var xs = block.x || [];
    var series = block.series || [];
    var all = [];
    series.forEach(function (s) {
      s.values.forEach(function (v) {
        if (typeof v === "number" && isFinite(v)) all.push(v);
      });
    });
    var yMax = block.yMax != null ? block.yMax : Math.max.apply(null, all);
    var yMin = block.yMin != null ? block.yMin : Math.min.apply(null, all);
    if (yMax === yMin) yMax = yMin + 1;

    var W = 640,
      H = block.height || 270,
      P = { t: 18, r: 16, b: 34, l: 38 };
    var n = xs.length;
    var px = function (i) {
      return P.l + ((W - P.l - P.r) * i) / Math.max(1, n - 1);
    };
    var py = function (v) {
      return H - P.b - ((H - P.t - P.b) * (v - yMin)) / (yMax - yMin);
    };

    var grid = "";
    var ticks = 4;
    for (var g = 0; g <= ticks; g++) {
      var val = yMin + ((yMax - yMin) * g) / ticks;
      var gy = py(val);
      grid +=
        '<line class="grid" x1="' + P.l + '" y1="' + gy.toFixed(1) + '" x2="' + (W - P.r) + '" y2="' + gy.toFixed(1) + '"/>' +
        '<text x="' + (P.l - 8) + '" y="' + (gy + 3.5).toFixed(1) + '" text-anchor="end" font-size="10">' +
        esc(yMax <= 10 ? val.toFixed(1) : Math.round(val)) +
        "</text>";
    }

    var labels = "";
    var step = n > 9 ? Math.ceil(n / 7) : 1;
    xs.forEach(function (label, i) {
      if (i % step !== 0 && i !== n - 1) return;
      labels +=
        '<text x="' + px(i).toFixed(1) + '" y="' + (H - 12) + '" text-anchor="middle">' + esc(label) + "</text>";
    });

    var paths = "";
    series.forEach(function (s) {
      var color = COLORS[s.color || "accent"];
      var pts = s.values.map(function (v, i) {
        return [px(i), py(v)];
      });
      var d = pts
        .map(function (p, i) {
          return (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1);
        })
        .join(" ");
      if (s.fill) {
        paths +=
          '<path d="' +
          d +
          " L " +
          pts[pts.length - 1][0].toFixed(1) +
          " " +
          (H - P.b) +
          " L " +
          pts[0][0].toFixed(1) +
          " " +
          (H - P.b) +
          ' Z" fill="' +
          color +
          '" opacity="0.10"/>';
      }
      paths +=
        '<path d="' +
        d +
        '" fill="none" stroke="' +
        color +
        '" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"' +
        (s.dashed ? ' stroke-dasharray="5 5"' : "") +
        "/>";
      if (s.dots !== false) {
        pts.forEach(function (p, i) {
          paths +=
            '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="' +
            (n > 14 ? 2 : 3.2) +
            '" fill="var(--surface)" stroke="' +
            color +
            '" stroke-width="2"/>';
        });
      }
    });

    var marks = "";
    (block.markers || []).forEach(function (m) {
      var mx = px(m.i),
        my = py(m.v != null ? m.v : series[0].values[m.i]);
      marks +=
        '<line x1="' + mx.toFixed(1) + '" y1="' + my.toFixed(1) + '" x2="' + mx.toFixed(1) + '" y2="' + (H - P.b) +
        '" stroke="var(--line-strong)" stroke-width="1" stroke-dasharray="3 4"/>' +
        '<circle cx="' + mx.toFixed(1) + '" cy="' + my.toFixed(1) + '" r="5" fill="var(--accent)"/>';
    });

    var legend = "";
    if (series.length > 1) {
      legend =
        '<div class="legend">' +
        series
          .map(function (s) {
            return (
              '<span class="legend__item"><i style="background:' +
              COLORS[s.color || "accent"] +
              '"></i>' +
              esc(t(s.name, lang)) +
              "</span>"
            );
          })
          .join("") +
        "</div>";
    }

    var svg =
      '<div class="chart"><svg viewBox="0 0 ' +
      W +
      " " +
      H +
      '" role="img" aria-label="' +
      esc(t(block.title, lang)) +
      '">' +
      grid +
      '<line class="axis" x1="' +
      P.l +
      '" y1="' +
      (H - P.b) +
      '" x2="' +
      (W - P.r) +
      '" y2="' +
      (H - P.b) +
      '"/>' +
      paths +
      marks +
      labels +
      "</svg></div>";

    return shell(block, lang, svg + legend);
  }

  /* --------------------------------- donut -------------------------------- */

  function donut(block, lang) {
    var items = block.items || [];
    var total = items.reduce(function (a, b) {
      return a + b.value;
    }, 0);
    var r = 62,
      c = 2 * Math.PI * r;
    var offset = 0;
    var segs = items
      .map(function (it) {
        var frac = it.value / total;
        var dash = c * frac;
        var s =
          '<circle cx="90" cy="90" r="' +
          r +
          '" fill="none" stroke="' +
          COLORS[it.color || "accent"] +
          '" stroke-width="24" stroke-dasharray="' +
          dash.toFixed(2) +
          " " +
          (c - dash).toFixed(2) +
          '" stroke-dashoffset="' +
          (-offset).toFixed(2) +
          '" transform="rotate(-90 90 90)" stroke-linecap="butt"/>';
        offset += dash;
        return s;
      })
      .join("");

    var center = block.center
      ? '<text x="90" y="84" text-anchor="middle" font-size="24" font-weight="800" fill="var(--ink)">' +
        esc(t(block.center.v, lang)) +
        "</text>" +
        '<text x="90" y="104" text-anchor="middle" font-size="11" fill="var(--muted)">' +
        esc(t(block.center.label, lang)) +
        "</text>"
      : "";

    var legend =
      '<ul class="donut__legend">' +
      items
        .map(function (it) {
          return (
            '<li><i style="background:' +
            COLORS[it.color || "accent"] +
            '"></i><span>' +
            esc(t(it.label, lang)) +
            '</span><b>' +
            esc(it.display != null ? it.display : Math.round((it.value / total) * 100) + "%") +
            "</b></li>"
          );
        })
        .join("") +
      "</ul>";

    var svg =
      '<div class="chart donut"><svg viewBox="0 0 180 180" role="img" aria-label="' +
      esc(t(block.title, lang)) +
      '">' +
      '<circle cx="90" cy="90" r="' +
      r +
      '" fill="none" stroke="var(--surface-2)" stroke-width="24"/>' +
      segs +
      center +
      "</svg>" +
      legend +
      "</div>";

    return shell(block, lang, svg);
  }

  /* --------------------------------- bars --------------------------------- */

  function bars(block, lang) {
    var items = block.items || [];
    var max = block.max != null ? block.max : Math.max.apply(null, items.map(function (i) { return i.value; }));
    var rows = items
      .map(function (it) {
        var w = Math.max(3, Math.min(100, (it.value / max) * 100));
        var color = COLORS[it.color || "accent"];
        return (
          '<div class="barchart__row">' +
          '<div class="barchart__label">' + esc(t(it.label, lang)) +
          (it.hint ? '<span>' + esc(t(it.hint, lang)) + "</span>" : "") +
          "</div>" +
          '<div class="barchart__track"><div class="barchart__fill" style="width:' +
          w.toFixed(1) +
          "%;background:" +
          color +
          '"></div></div>' +
          '<div class="barchart__val">' + esc(t(it.display != null ? it.display : it.value, lang)) + "</div>" +
          "</div>"
        );
      })
      .join("");
    return shell(block, lang, '<div class="barchart">' + rows + "</div>");
  }

  /* -------------------------------- matrix -------------------------------- */

  function matrix(block, lang) {
    var q = block.quads || [];
    var cells = q
      .map(function (item, i) {
        return (
          '<div class="matrix__cell' + (item.tone ? " is-" + item.tone : "") + '" style="grid-area:q' + i + '">' +
          '<div class="matrix__t">' + esc(t(item.t, lang)) + "</div>" +
          '<div class="matrix__d">' + esc(t(item.d, lang)) + "</div>" +
          "</div>"
        );
      })
      .join("");
    var body =
      '<div class="matrix">' +
      '<div class="matrix__y">' + esc(t(block.y, lang)) + "</div>" +
      '<div class="matrix__grid">' +
      cells +
      "</div>" +
      '<div class="matrix__x">' + esc(t(block.x, lang)) + "</div>" +
      "</div>";
    return shell(block, lang, body);
  }

  /* --------------------------------- rings -------------------------------- */

  function rings(block, lang) {
    var items = block.items || [];
    var n = items.length;
    var art = items
      .map(function (it, i) {
        var size = n <= 1 ? 100 : 100 - (i * 62) / (n - 1);
        var tone = ["accent", "gold", "sage", "accent"][i % 4];
        return (
          '<div class="rings__circle" style="width:' +
          size +
          "%;height:" +
          size +
          "%;color:" +
          COLORS[tone] +
          ";--op:" +
          (0.92 - i * 0.16).toFixed(2) +
          '"></div>'
        );
      })
      .join("");
    var legend = items
      .map(function (it, i) {
        var tone = ["accent", "gold", "sage", "accent"][i % 4];
        return (
          '<li><i style="background:' +
          COLORS[tone] +
          '"></i><div><div class="rings__t">' +
          esc(t(it.t, lang)) +
          '</div><div class="rings__d">' +
          esc(t(it.d, lang)) +
          "</div></div></li>"
        );
      })
      .join("");
    return shell(
      block,
      lang,
      '<div class="rings"><div class="rings__art">' + art + '</div><ul class="rings__legend">' + legend + "</ul></div>"
    );
  }

  /* --------------------------------- flow --------------------------------- */

  function flow(block, lang) {
    var steps = block.steps || [];
    var body = steps
      .map(function (s, i) {
        return (
          '<li class="flow__step">' +
          '<div class="flow__num">' + (i + 1) + "</div>" +
          '<div class="flow__body">' +
          '<div class="flow__t">' + esc(t(s.t, lang)) + "</div>" +
          '<div class="flow__d">' + esc(t(s.d, lang)) + "</div>" +
          "</div></li>"
        );
      })
      .join("");
    return shell(block, lang, '<ol class="flow">' + body + "</ol>");
  }

  /* --------------------------------- icons -------------------------------- */

  var ICONS = {
    compass:
      '<circle cx="12" cy="12" r="9"/><path d="m15.2 8.8-2 4.4-4.4 2 2-4.4z"/>',
    hourglass: '<path d="M7 3h10M7 21h10M8 3v3.5c0 2 4 3.6 4 5.5s-4 3.5-4 5.5V21M16 3v3.5c0 2-4 3.6-4 5.5s4 3.5 4 5.5V21"/>',
    heart: '<path d="M12 20s-7-4.3-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.7-7 9-7 9Z"/>',
    battery: '<rect x="3" y="8" width="15" height="8" rx="2"/><path d="M21 11v2M6 11v2M9 11v2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
    coins: '<ellipse cx="12" cy="7" rx="7" ry="3"/><path d="M5 7v5c0 1.7 3.1 3 7 3s7-1.3 7-3V7M5 12v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"/>',
    wave: '<path d="M3 14c2.5 0 2.5-4 5-4s2.5 4 5 4 2.5-4 5-4M3 18c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3"/>',
    people:
      '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5"/><path d="M16 6.2a3 3 0 0 1 0 5.6M17.5 19c0-2.2-.8-3.6-2-4.4"/>',
    briefcase: '<rect x="3" y="8" width="18" height="12" rx="2.5"/><path d="M9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    home: '<path d="M3.5 10.6 12 3.5l8.5 7.1"/><path d="M6 9.6V20h12V9.6"/><path d="M10 20v-5.4h4V20"/>',
    ring: '<circle cx="12" cy="15.2" r="5.4"/><path d="m8.8 9.8 3.2-6.3 3.2 6.3"/>',
    sprout: '<path d="M12 21v-8.5"/><path d="M12 12.5c0-3-2.2-5.2-5.2-5.2 0 3 2.2 5.2 5.2 5.2Z"/><path d="M12 12.5c0-3 2.2-5.2 5.2-5.2 0 3-2.2 5.2-5.2 5.2Z"/><path d="M7.5 21h9"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
    shield: '<path d="M12 3l7 3v5.5c0 4.5-3 7.6-7 9.5-4-1.9-7-5-7-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
    flag: '<path d="M6 21V4M6 4h11l-2 4 2 4H6"/>',
    arrow: '<path d="M5 12h13M12 5l7 7-7 7"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 6.5"/>',
    clockSmall: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 5.5v15"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5.9 1.2.9 2h5.2c0-.8.3-1.5.9-2A6 6 0 0 0 12 3Z"/>',
    warn: '<path d="M12 4 3 20h18z"/><path d="M12 10v4M12 17h.01"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="M6 6l12 12M18 6 6 18"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3Z"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"/>',
    sunSmall: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/>',
    quote: '<path d="M9 7H5.5A2.5 2.5 0 0 0 3 9.5v3A2.5 2.5 0 0 0 5.5 15H7v2M21 7h-3.5A2.5 2.5 0 0 0 15 9.5v3a2.5 2.5 0 0 0 2.5 2.5H19v2"/>'
  };

  LB.icon = function (name, cls) {
    var path = ICONS[name] || ICONS.spark;
    return (
      '<svg class="' +
      (cls || "") +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      path +
      "</svg>"
    );
  };

  /* -------------------------------- export -------------------------------- */

  var RENDERERS = { line: line, donut: donut, bars: bars, matrix: matrix, rings: rings, flow: flow };

  LB.renderFigure = function (block, lang) {
    var fn = RENDERERS[block.kind];
    if (!fn) return "";
    return fn(block, lang);
  };

  LB.esc = esc;
  LB.t = t;
})();
