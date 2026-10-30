/*
 * Builds the published site.
 *
 * There is no bundler step: the site is plain HTML/CSS/JS with relative paths.
 * "Building" means copying the deployable files into the Pages folder, which is
 * a *sibling* of this repository and already shaped as the repository root —
 * index.html sits at the top level, there is no dist/ wrapper inside it.
 *
 *   node scripts/build.js
 *   SITE_OUT=../somewhere-else node scripts/build.js
 */
"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

/* The frontend/Pages project. Override with SITE_OUT if it moves. */
const OUT = process.env.SITE_OUT
  ? path.resolve(ROOT, process.env.SITE_OUT)
  : path.resolve(ROOT, "..", "we-live-better.github.io");

/* Files that make up the published site. Anything else — these scripts,
   .gitignore, notes — stays in the source repository and out of Pages. */
const PAGES = ["index.html", "read.html", "sources.html", "404.html"];
const DIRS = ["assets"];
const FILES = [".nojekyll", "robots.txt", "sitemap.xml"];
const OWNED = [...PAGES, ...DIRS, ...FILES];

function rm(target) {
  fs.rmSync(target, { recursive: true, force: true });
}

/* Only what this build owns is cleared, so a .git directory (and anything else
   added to the Pages repository, like a README) survives a rebuild. */
function cleanOut() {
  fs.mkdirSync(OUT, { recursive: true });
  OWNED.forEach((name) => rm(path.join(OUT, name)));
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/* Every local src/href in the output must resolve to a file we actually ship.
   This is the check that catches an absolute "/assets/..." path before it
   turns into a wall of 404s on GitHub Pages.

   Exception: 404.html is served by Pages under whatever URL the visitor typed,
   so relative paths there resolve against the wrong directory. It is the one
   file allowed — and required — to use root-absolute paths. */
function verifyLinks() {
  const problems = [];
  for (const file of walk(OUT).filter((f) => f.endsWith(".html"))) {
    const is404 = path.basename(file) === "404.html";
    const html = fs.readFileSync(file, "utf8");
    const refs = [...html.matchAll(/(?:src|href)\s*=\s*["']([^"']+)["']/g)].map((m) => m[1]);

    for (const ref of refs) {
      if (/^(https?:|data:|mailto:|javascript:|#|\/\/)/i.test(ref)) continue;
      const clean = ref.split(/[?#]/)[0];
      if (!clean) continue;

      let target;
      if (path.isAbsolute(clean)) {
        if (!is404) {
          problems.push(`${path.relative(OUT, file)}: absolute path "${ref}" — breaks under any subpath`);
          continue;
        }
        target = path.join(OUT, clean);
      } else {
        target = path.resolve(path.dirname(file), clean);
      }
      if (!fs.existsSync(target)) {
        problems.push(`${path.relative(OUT, file)}: missing target "${ref}"`);
      }
    }
  }
  return problems;
}

function main() {
  const missing = [...PAGES, ...FILES].filter((f) => !fs.existsSync(path.join(ROOT, f)));
  if (missing.length) {
    console.error("Missing source files: " + missing.join(", "));
    process.exit(1);
  }

  cleanOut();
  for (const page of PAGES) fs.copyFileSync(path.join(ROOT, page), path.join(OUT, page));
  for (const dir of DIRS) copyDir(path.join(ROOT, dir), path.join(OUT, dir));
  for (const file of FILES) fs.copyFileSync(path.join(ROOT, file), path.join(OUT, file));

  const files = walk(OUT);
  const bytes = files.reduce((sum, f) => sum + fs.statSync(f).size, 0);
  const problems = verifyLinks();

  console.log("published site written to:\n  " + OUT);
  console.log("\nthis folder *is* the Pages repository root — no dist/ layer inside it:\n");
  for (const f of files) {
    const rel = path.relative(OUT, f).split(path.sep).join("/");
    if (rel.startsWith(".git/")) continue;
    console.log(`  ${(fs.statSync(f).size / 1024).toFixed(1).padStart(8)} KB  ${rel}`);
  }
  console.log(`\n  ${files.length} files, ${(bytes / 1024).toFixed(0)} KB total`);

  if (problems.length) {
    console.error("\nLink problems found:");
    problems.forEach((p) => console.error("  ! " + p));
    process.exit(1);
  }
  console.log("  all local references resolve, no absolute paths outside 404.html\n");
}

main();
