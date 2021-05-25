const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: {
    strictPostcssConfiguration: true,
  },
};
