/*
 * Serves the Pages folder the way GitHub Pages would, so you can verify the
 * exact artefact that gets published — including the 404 page — without
 * Python or a bundler.
 *
 *   node scripts/serve.js          # http://127.0.0.1:4173
 *   PORT=8080 node scripts/serve.js
 */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

/* The same folder `npm run build` writes to: the Pages project, a sibling of
   this repository. */
const SITE = process.env.SITE_OUT
  ? path.resolve(ROOT, process.env.SITE_OUT)
  : path.resolve(ROOT, "..", "we-live-better.github.io");

const PORT = Number(process.env.PORT || 4173);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

if (!fs.existsSync(path.join(SITE, "index.html"))) {
  console.error("no index.html under " + SITE + " — run `npm run build` first.");
  process.exit(1);
}

function send(res, code, body, type) {
  res.writeHead(code, {
    "Content-Type": type,
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-cache"
  });
  res.end(body);
}

/* Pages returns 404.html with a 404 status; mirror that so the page is testable. */
function notFound(res) {
  fs.readFile(path.join(SITE, "404.html"), (err, data) => {
    if (err) return send(res, 404, "Not found", "text/plain; charset=utf-8");
    send(res, 404, data, TYPES[".html"]);
  });
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch (e) {
    return send(res, 400, "Bad request", "text/plain; charset=utf-8");
  }
  if (pathname === "/") pathname = "/index.html";

  const file = path.join(SITE, pathname);
  // Refuse anything that escapes the served folder — same containment a static host gives.
  if (file !== SITE && !file.startsWith(SITE + path.sep)) {
    return send(res, 403, "Forbidden", "text/plain; charset=utf-8");
  }

  fs.readFile(file, (err, data) => {
    if (!err && fs.statSync(file).isDirectory()) {
      return fs.readFile(path.join(file, "index.html"), (e2, d2) =>
        e2 ? notFound(res) : send(res, 200, d2, TYPES[".html"])
      );
    }
    if (err) return notFound(res);
    send(res, 200, data, TYPES[path.extname(file).toLowerCase()] || "application/octet-stream");
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`serving ${SITE}`);
  console.log(`  http://127.0.0.1:${PORT}/`);
  console.log(`  http://127.0.0.1:${PORT}/read.html?c=action`);
  console.log(`  http://127.0.0.1:${PORT}/does-not-exist  (404 page)`);
});
