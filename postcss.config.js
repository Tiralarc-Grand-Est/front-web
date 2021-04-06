module.exports = {
  plugins: {
    "postcss-import": {
      path: ["node_modules"],
    },
    tailwindcss: {},
    "postcss-preset-env": { stage: 1 },
  },
};
