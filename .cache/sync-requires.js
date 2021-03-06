const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/jeremy/Desktop/projects/website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/404.js"))),
  "component---src-pages-gallery-js": hot(preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/gallery.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/jeremy/Desktop/projects/website/src/pages/using-typescript.tsx")))
}

