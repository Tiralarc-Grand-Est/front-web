const path = require("path");

module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
