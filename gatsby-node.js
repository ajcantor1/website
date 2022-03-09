/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hero": path.resolve(__dirname, "src/components/hero"),
        "@footer": path.resolve(__dirname, "src/components/footer"),
        "@services": path.resolve(__dirname, "src/components/services"),
        "@about": path.resolve(__dirname, "src/components/about"),
        "@gallery": path.resolve(__dirname, "src/components/gallery"),
        "@resume": path.resolve(__dirname, "src/components/resume"),
        "@notfound": path.resolve(__dirname, "src/components/notfound"),
        "@icons": path.resolve(__dirname, "src/components/icons"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@navbar": path.resolve(__dirname, "src/components/navbar"),
        "@sidebar": path.resolve(__dirname, "src/components/sidebar"),
      }
    }
  });
}