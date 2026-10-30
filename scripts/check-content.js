/*
 * Content validator. Loads every chapter file against a stub `window.LB` and
 * checks the invariants the renderer relies on:
 *
 *   - both languages present on every translatable field (nothing renders blank)
 *   - list / table / chart array lengths match between zh and en
 *   - chart blocks use `kind:` (not `t:`) and every icon name exists in charts.js
 *   - chapter numbering is contiguous, ids unique, groups known
 *   - every chapter id appears in sitemap.xml (so the deploy list can't drift)
 *
 *   node scripts/check-content.js
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

global.window = {};
const LB = { chapters: [], pages: {} };
LB.addChapter = (c) => LB.chapters.push(c);
global.window.LB = LB;

/* content-1.js ... content-N.js, whatever the actual count is */
const contentDir = path.join(ROOT, "assets", "js");
fs.readdirSync(contentDir)
  .filter((f) => /^content-\d+\.js$/.test(f))
  .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10))
  .forEach((f) => require(path.join(contentDir, f)));

const errors = [];
const warns = [];
const BLOCK_T = ["p", "h", "ul", "ol", "tip", "myth", "quote", "stats", "table", "checklist"];
const KINDS = ["line", "donut", "bars", "matrix", "rings", "flow"];
const GROUPS = ["start", "body", "time", "heart", "life", "last"];

function iconNames() {
  const src = fs.readFileSync(path.join(contentDir, "charts.js"), "utf8");
  const start = src.indexOf("var ICONS = {");
  if (start < 0) return null;
  const block = src.slice(start, src.indexOf("\n};", start));
  /* One key per line: `    name: '<svg…'`. Continuation lines start with a quote,
     so they never match. Line-based keeps this CRLF-safe. */
  const keys = [...block.matchAll(/^\s{2,}([A-Za-z][A-Za-z0-9]*)\s*:/gm)].map((m) => m[1]);
  return new Set(keys);
}
const ICONS = iconNames();

function both(obj, label, where) {
  if (!obj || typeof obj !== "object") return errors.push(`${where}: ${label} missing`);
  if (!obj.zh || !obj.en) errors.push(`${where}: ${label} needs zh+en`);
}

const seenNum = new Set();
const seenId = new Set();

LB.chapters.forEach((c) => {
  const w = `ch ${c.num}/${c.id}`;
  if (!c.id || !c.num) errors.push(`${w}: missing id or num`);
  if (seenNum.has(c.num)) errors.push(`${w}: duplicate num`);
  if (seenId.has(c.id)) errors.push(`${w}: duplicate id`);
  seenNum.add(c.num);
  seenId.add(c.id);
  if (GROUPS.indexOf(c.group) < 0) errors.push(`${w}: unknown group "${c.group}"`);
  if (ICONS && !ICONS.has(c.icon)) errors.push(`${w}: icon "${c.icon}" is not defined in charts.js`);
  if (!(c.read > 0)) errors.push(`${w}: bad read time ${c.read}`);
  ["title", "card", "kicker", "lede", "takeaway"].forEach((k) => both(c[k], k, w));

  const blocks = c.blocks || [];
  if (!blocks.length) errors.push(`${w}: no blocks`);

  blocks.forEach((b, i) => {
    const bw = `${w} block#${i}`;

    if (b.kind) {
      if (KINDS.indexOf(b.kind) < 0) errors.push(`${bw}: unknown chart kind "${b.kind}"`);
      if (!b.title) errors.push(`${bw}: figure needs a title`);
      else both(b.title, "title", bw);
      if (b.sub) both(b.sub, "sub", bw);
      if (b.kind === "flow" && !(b.steps || []).length) errors.push(`${bw}: flow without steps`);
      if (b.kind === "line") {
        if (!(b.x || []).length) errors.push(`${bw}: line without x`);
        if (!(b.series || []).length) errors.push(`${bw}: line without series`);
        (b.series || []).forEach((s, si) => {
          both(s.name, "series.name", `${bw} s${si}`);
          if (!s.color) errors.push(`${bw} s${si}: missing color`);
          if (!s.values || s.values.length !== b.x.length) errors.push(`${bw} s${si}: values length != x length`);
        });
      }
      if (b.kind === "donut" || b.kind === "bars" || b.kind === "rings") {
        if (!(b.items || []).length) errors.push(`${bw}: ${b.kind} without items`);
        (b.items || []).forEach((it, ii) => {
          both(b.kind === "rings" ? it.t : it.label, b.kind === "rings" ? "item.t" : "item.label", `${bw} i${ii}`);
          if (b.kind !== "rings" && !(it.value > 0)) errors.push(`${bw} i${ii}: value must be > 0`);
        });
      }
      if (b.kind === "donut" && b.center) both(b.center.label, "center.label", bw);
      if (b.kind === "matrix") {
        if ((b.quads || []).length !== 4) errors.push(`${bw}: matrix needs 4 quads`);
        both(b.x, "x", bw);
        both(b.y, "y", bw);
      }
      (b.steps || []).forEach((s, si) => {
        both(s.t, "step.t", `${bw} s${si}`);
        both(s.d, "step.d", `${bw} s${si}`);
      });
      return;
    }

    /* A chart written with `t:` instead of `kind:` renders as an empty figure. */
    if (!b.t) { errors.push(`${bw}: block has neither t nor kind`); return; }
    if (BLOCK_T.indexOf(b.t) < 0) { errors.push(`${bw}: unknown block type "${b.t}"`); return; }

    if (b.t === "ul" || b.t === "ol" || b.t === "checklist" || b.t === "tip") {
      if (!Array.isArray(b.zh) || !Array.isArray(b.en)) errors.push(`${bw}: ${b.t} needs zh/en arrays`);
      else if (b.zh.length !== b.en.length) errors.push(`${bw}: zh ${b.zh.length} vs en ${b.en.length}`);
      else if (!b.zh.length) errors.push(`${bw}: empty list`);
    } else if (b.t === "table") {
      both(b.head, "head", bw);
      if (!(b.rows || []).length) errors.push(`${bw}: empty table`);
      (b.rows || []).forEach((r, ri) => {
        if (!r.zh || !r.en) errors.push(`${bw} row${ri}: needs zh+en`);
        else if (r.zh.length !== r.en.length) errors.push(`${bw} row${ri}: cell count mismatch`);
        else if (b.head.zh && r.zh.length !== b.head.zh.length)
          errors.push(`${bw} row${ri}: ${r.zh.length} cells vs ${b.head.zh.length} headers`);
      });
    } else if (b.t === "stats") {
      (b.items || []).forEach((it, ii) => {
        both(it.v, "stats.v", `${bw} i${ii}`);
        both(it.label, "stats.label", `${bw} i${ii}`);
      });
    } else if (b.t === "myth") {
      (b.items || []).forEach((it, ii) => {
        both(it.bad, "myth.bad", `${bw} i${ii}`);
        both(it.good, "myth.good", `${bw} i${ii}`);
      });
    } else {
      both({ zh: b.zh, en: b.en }, b.t, bw);
    }
  });
});

const ordered = LB.chapters.slice().sort((a, b) => parseInt(a.num, 10) - parseInt(b.num, 10));
ordered.forEach((c, i) => {
  if (parseInt(c.num, 10) !== i + 1) warns.push(`numbering: expected ${i + 1}, found ${c.num} (${c.id})`);
});

const counts = {};
LB.chapters.forEach((c) =>
  (c.blocks || []).forEach((b) => {
    const k = b.kind || b.t;
    counts[k] = (counts[k] || 0) + 1;
  })
);

let sitemapIds = null;
const sitemapPath = path.join(ROOT, "sitemap.xml");
if (fs.existsSync(sitemapPath)) {
  sitemapIds = new Set(
    [...fs.readFileSync(sitemapPath, "utf8").matchAll(/read\.html\?c=([a-z-]+)/g)].map((m) => m[1])
  );
  LB.chapters.forEach((c) => {
    if (!sitemapIds.has(c.id)) errors.push(`sitemap.xml: no entry for chapter "${c.id}"`);
  });
  [...sitemapIds].forEach((id) => {
    if (!seenId.has(id)) errors.push(`sitemap.xml: unknown chapter "${id}"`);
  });
} else {
  warns.push("sitemap.xml not found — build will fail on the required-files check");
}

console.log("chapters:", LB.chapters.length);
console.log("order:", ordered.map((c) => c.num + " " + c.id).join(" | "));
console.log("groups:", GROUPS.map((g) => g + "=" + LB.chapters.filter((c) => c.group === g).length).join(" "));
console.log("blocks:", JSON.stringify(counts));
console.log("total blocks:", Object.values(counts).reduce((a, b) => a + b, 0));
if (sitemapIds) console.log("sitemap urls:", sitemapIds.size);
console.log("errors:", errors.length);
errors.slice(0, 60).forEach((e) => console.log("  !", e));
console.log("warns:", warns.length);
warns.forEach((e) => console.log("  ~", e));

process.exit(errors.length ? 1 : 0);
