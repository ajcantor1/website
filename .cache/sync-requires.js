
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/jeremy/Desktop/projects/website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/404.js")),
  "component---src-pages-gallery-js": preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/gallery.js")),
  "component---src-pages-index-js": preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/using-typescript.tsx"))
}

